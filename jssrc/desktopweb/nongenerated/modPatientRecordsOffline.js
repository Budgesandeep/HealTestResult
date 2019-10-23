var patientRecords_offline = {};
patientRecords_offline.docList = [];
//Method to get all patientRecords
patientRecords_offline.getAllPatientRecords = function(patientId) {
    var wcs = "where patientId=" + patientId + " limit 1";
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select documentTypeCodeList,documentTypeNameList from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);

    function successcallback(resc) {
        kony.print("com.healogics.offline.getPatientRecords.getDocumentTypes --------->" + JSON.stringify(resc));
        var arrTypeCodes = [];
        var arrTypeNames = [];
        ///Akshay - If the response is empty, taking values from the userInfo attribute
        if (!com.healogics.utility.isEmpty(resc[0])) {
            kony.print("documentTypeCodeList ----->>>>>" + resc[0]._documentTypeCodeList);
            kony.print("documentTypeCodeList ----->>>>>" + resc[0]._documentTypeNameList);
            arrTypeCodes = resc[0]._documentTypeCodeList.split("#");
            arrTypeNames = resc[0]._documentTypeNameList.split("#");
        } else {
            kony.print("userInfo.documentTypeCode ----->>>>>" + userInfo.documentTypeCode);
            kony.print("userInfo.documentTypeName ----->>>>>" + userInfo.documentTypeName);
            arrTypeCodes = userInfo.documentTypeCode.split("#");
            arrTypeNames = userInfo.documentTypeName.split("#");
        }
        patientRecords_offline.getCountAndNameOfEachDocumentType(arrTypeNames, arrTypeCodes, patientId);
    }

    function errorcallback(resc) {
        com.healogics.utility.dismissLoading();
        kony.print("com.healogics.offline.getPatientRecords.getDocumentTypes failure callback");
        kony.print("<<Error>>>" + JSON.stringify(resc));
    }
};
patientRecords_offline.getCountAndNameOfEachDocumentType = function(arrTypeNames, docList, patientId) {
    kony.print("docList--------->" + JSON.stringify(docList));
    patientRecords_offline.docList = [];
    for (var i = 0; i < docList.length; i++) {
        kony.print("docList[i]--------->" + docList[i]);
        var wcs = "where patientId =" + patientId + " and docTypeCode = '" + docList[i] + "'";
        kony.print("wcs----->>>>> :" + wcs);
        ///Akshay - added for the count from the PhotoUpload table for each docType and patient id
        var distinctWcs = "where id =" + patientId + " and docType = '" + docList[i] + "'";
        kony.print("distinctWcs for Distinct Count----->>>>> :" + distinctWcs);
        patientRecords_offline.getNameAndCount(wcs, distinctWcs, docList[i], arrTypeNames[i]);
    }
    kony.print("patientRecords_offline.docList--------->" + JSON.stringify(patientRecords_offline.docList));
    recordListConstants.recordList = patientRecords_offline.docList;
    if (isIpad) {
        recordsModule.prepareRecordTypesSegment();
    } else {
        recordsModule.getRecordList(recordListConstants.recordList);
        if (isUploadButtonClicked) {
            onUploadRecordsResponseCalback(recordListConstants.recordList);
        }
    }
};
patientRecords_offline.getNameAndCount = function(wcs, distinctWcs, docTypeCode, docTypeName) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.find function");
    if (!kony.sync.isSyncInitialized(errorCB)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.find", "find", errorCB)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select docTypeName, count(*) as count from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successCB, com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, successCB, errorCB);

    function successCB(resc) {
        kony.print("patientRecords_offline.getNameAndCount --------->" + JSON.stringify(resc));
        var eachDocDetails = {};
        photoUpload_offline.getDistinctDocumentCount(distinctWcs);
        eachDocDetails.documentName = docTypeName;
        eachDocDetails.documentType = docTypeCode;
        ///Akshay - merging the patientRecords count and Offline PhotoUpload count
        eachDocDetails.documentCount = resc[0].count + photoUpload_distinctCount;
        patientRecords_offline.docList.push(eachDocDetails);
    }

    function errorCB(resc) {
        com.healogics.utility.dismissLoading();
        kony.print("patientRecords_offline.getNameAndCount failure callback");
        kony.print("<<Error>>>" + JSON.stringify(resc));
    }
};
//Method to get the documentsList
patientRecords_offline.getDocumentList = function(patientId, docTypeCode) {
    var wcs = "where patientId=" + patientId + " and docTypeCode ='" + docTypeCode + "'" + "order by documentUploadedTime desc";
    kony.print("patientRecords_offline.getDocumentList WCS ----->>>>>" + wcs);
    com.healogics.offline.getPatientRecords.find(wcs, successcallback, errorcallback);

    function successcallback(resc) {
        kony.print("patientRecords_offline.getDocumentList --------->" + JSON.stringify(resc));
        var response = {};
        response.documentTypeSummary = resc;
        if (isIpad) {
            recordsModule.getDocList(response);
        }
    }

    function errorcallback(resc) {
        com.healogics.utility.dismissLoading();
        kony.print("patientRecords_offline.getDocumentList failure callback");
        kony.print("<<Error>>>" + JSON.stringify(resc));
    }
};
//Method to delete the Record
patientRecords_offline.deleteSelectedRecord = function(documentUUID) {
    var wcs = "where documentUUID='" + documentUUID + "'";
    kony.print("deleteSelectedRecord WCS ----->>>>>" + wcs);
    com.healogics.offline.getPatientRecords.remove(wcs, successCallback, failureCallback, true);

    function successCallback(resc) {
        com.healogics.utility.dismissLoading();
        kony.print("patientRecords_offline.deleteSelectedRecord --------->" + JSON.stringify(resc));
        resc.statuscode = "200";
        resc.opstatus = 0;
        recordsModule.deleteDocumentSuccessCallback(resc);
    }

    function failureCallback(resc) {
        com.healogics.utility.dismissLoading();
        kony.print("patientRecords_offline.deleteSelectedRecord failure callback");
        kony.print("<<Error>>>" + JSON.stringify(resc));
    }
};