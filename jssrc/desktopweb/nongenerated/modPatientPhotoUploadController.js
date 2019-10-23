/*
FileName            : modPatientPhotoUploadController.js
 Description        : This module only handles the data upload of the photo captured
 						by the user against a document type.

* Change Log:
*---------------------------------------------------------------------------
* Date              Developer          Comments
*---------------------------------------------------------------------------
* 2017/07/07        325664             Initial upload requests
=============================================================================
 */
/************************************************************************************
 * Create New Photo Offline
 *************************************************************************************/
var photoUpload_offline = {};
var photoUpload_distinctCount = 0;
photoUpload_offline.createNewPhotoOffline = function(photo_Info) {
    function successCallBack(res) {
        kony.print("createNewPhotoOffline success callback--------->");
        kony.print("createNewPhotoOffline inserted Successfully--------->" + JSON.stringify(res));
        var response = {};
        response.opstatus = 0;
        response.statuscode = "200";
        response.timestamp = "";
        documentUpload.uploadDocumentSuccessCallBack(response);
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("createNewPhotoOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var getLatestCreateDate = convertCurrentToEDTTime(false, false); ///both false since No T or lastSyncTime
    var myObj = {
        id: photo_Info.id,
        pageNumber: photo_Info.pageNumber,
        userId: photo_Info.userId,
        lastPage: photo_Info.lastPage,
        docType: photo_Info.docType,
        docName: photo_Info.docName,
        documentCreatedDate: photo_Info.documentCreatedDate, ///Akshay - WTC 353
        image_Timestamp: photo_Info.image_Timestamp,
        document: photo_Info.document
    };
    kony.print("My Object Print createNewPhotoOffline--------->" + JSON.stringify(myObj));
    ////changed flag to false - unless user says for that particular record to upload
    com.healogics.offline.offlinePhotoUpload.create(myObj, successCallBack, errorCallBack, true);
};
/************************************************************************************
 * Get Distinct Document Counts against a patient id and docTypeCode
 *************************************************************************************/
photoUpload_offline.getDistinctDocumentCount = function(wcs) {
    sync.log.trace("photoUpload_offline.getDistinctDocumentCount->main function");
    if (!kony.sync.isSyncInitialized(distinctCountErrorCB)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "photoUpload_offline.getDistinctDocumentCount", "getCount", distinctCountErrorCB)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(distinct docName) as countNew from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, distinctCountSuccessCB, distinctCountErrorCB);

    function mySuccCallback(res) {
        sync.log.trace("Entering photoUpload_offline.getDistinctDocumentCount->mySuccCallback");
        kony.sync.verifyAndCallClosure(distinctCountSuccessCB, com.healogics.offline.offlinePhotoUpload.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }

    function distinctCountSuccessCB(res) {
        kony.print("photoUpload_offline.getDistinctDocumentCount--------->" + JSON.stringify(res));
        photoUpload_distinctCount = res.countNew;
    }

    function distinctCountErrorCB(res) {
        com.healogics.utility.dismissLoading();
        kony.print("photoUpload_offline.getDistinctDocumentCount failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
};