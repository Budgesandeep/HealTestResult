//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:30 UTC 2019getPatientRecords*******************
// **********************************Start getPatientRecords's helper methods************************
if (typeof(kony) === "undefined") {
    kony = {};
}
if (typeof(kony.sync) === "undefined") {
    kony.sync = {};
}
if (typeof(kony.sync.log) === "undefined") {
    kony.sync.log = {};
}
if (typeof(sync) === "undefined") {
    sync = {};
}
if (typeof(sync.log) === "undefined") {
    sync.log = {};
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
/************************************************************************************
 * Creates new getPatientRecords
 *************************************************************************************/
com.healogics.offline.getPatientRecords = function() {
    this.deleted = null;
    this.docTypeCode = null;
    this.docTypeName = null;
    this.documentName = null;
    this.documentUploadedDate = null;
    this.documentUUID = null;
    this.lastSyncTime = null;
    this.lastUpdatedByUser = null;
    this.lastUpdatedTimestamp = null;
    this.moreDataAvailable = null;
    this.patientId = null;
    this.srcTypeCode = null;
    this.documentTypeNameList = null;
    this.documentTypeCodeList = null;
    this.documentUploadedTime = null;
    this.markForUpload = true;
};
com.healogics.offline.getPatientRecords.prototype = {
    get deleted() {
        return this._deleted;
    },
    set deleted(val) {
        this._deleted = val;
    },
    get docTypeCode() {
        return this._docTypeCode;
    },
    set docTypeCode(val) {
        this._docTypeCode = val;
    },
    get docTypeName() {
        return this._docTypeName;
    },
    set docTypeName(val) {
        this._docTypeName = val;
    },
    get documentName() {
        return this._documentName;
    },
    set documentName(val) {
        this._documentName = val;
    },
    get documentUploadedDate() {
        return this._documentUploadedDate;
    },
    set documentUploadedDate(val) {
        this._documentUploadedDate = val;
    },
    get documentUUID() {
        return this._documentUUID;
    },
    set documentUUID(val) {
        this._documentUUID = val;
    },
    get lastSyncTime() {
        return this._lastSyncTime;
    },
    set lastSyncTime(val) {
        this._lastSyncTime = val;
    },
    get lastUpdatedByUser() {
        return this._lastUpdatedByUser;
    },
    set lastUpdatedByUser(val) {
        this._lastUpdatedByUser = val;
    },
    get lastUpdatedTimestamp() {
        return this._lastUpdatedTimestamp;
    },
    set lastUpdatedTimestamp(val) {
        this._lastUpdatedTimestamp = val;
    },
    get moreDataAvailable() {
        return this._moreDataAvailable;
    },
    set moreDataAvailable(val) {
        this._moreDataAvailable = val;
    },
    get patientId() {
        return this._patientId;
    },
    set patientId(val) {
        this._patientId = val;
    },
    get srcTypeCode() {
        return this._srcTypeCode;
    },
    set srcTypeCode(val) {
        this._srcTypeCode = val;
    },
    get documentTypeNameList() {
        return this._documentTypeNameList;
    },
    set documentTypeNameList(val) {
        this._documentTypeNameList = val;
    },
    get documentTypeCodeList() {
        return this._documentTypeCodeList;
    },
    set documentTypeCodeList(val) {
        this._documentTypeCodeList = val;
    },
    get documentUploadedTime() {
        return this._documentUploadedTime;
    },
    set documentUploadedTime(val) {
        this._documentUploadedTime = val;
    },
};
/************************************************************************************
 * Retrieves all instances of getPatientRecords SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "deleted";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "docTypeCode";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.healogics.offline.getPatientRecords.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.healogics.offline.getPatientRecords.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    orderByMap = kony.sync.formOrderByClause("getPatientRecords", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.getAll->successcallback");
        successcallback(com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of getPatientRecords present in local database.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getAllCount function");
    com.healogics.offline.getPatientRecords.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of getPatientRecords using where clause in the local Database
 *************************************************************************************/
com.healogics.offline.getPatientRecords.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.getCount->successcallback");
        if (null !== res) {
            var count = null;
            count = res["count(*)"];
            kony.sync.verifyAndCallClosure(successcallback, {
                count: count
            });
        } else {
            sync.log.error("Some error occured while getting the count");
        }
    }
};
/************************************************************************************
 * Creates a new instance of getPatientRecords in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.getPatientRecords.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.healogics.offline.getPatientRecords.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.getPatientRecords.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogics.offline.getPatientRecords.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "getPatientRecords", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogics.offline.getPatientRecords.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.healogics.offline.getPatientRecords.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "documentUUID=" + valuestable.documentUUID;
        pks["documentUUID"] = {
            key: "documentUUID",
            value: valuestable.documentUUID
        };
        errMsg = errMsg + ", patientId=" + valuestable.patientId;
        pks["patientId"] = {
            key: "patientId",
            value: valuestable.patientId
        };
        com.healogics.offline.getPatientRecords.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of getPatientRecords in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].docTypeCode = "docTypeCode_0";
 *		valuesArray[0].docTypeName = "docTypeName_0";
 *		valuesArray[0].documentName = "documentName_0";
 *		valuesArray[0].documentUploadedDate = "documentUploadedDate_0";
 *		valuesArray[0].documentUUID = "documentUUID_0";
 *		valuesArray[0].lastSyncTime = "lastSyncTime_0";
 *		valuesArray[0].lastUpdatedByUser = "lastUpdatedByUser_0";
 *		valuesArray[0].moreDataAvailable = "moreDataAvailable_0";
 *		valuesArray[0].patientId = "patientId_0";
 *		valuesArray[0].srcTypeCode = "srcTypeCode_0";
 *		valuesArray[0].documentTypeNameList = "documentTypeNameList_0";
 *		valuesArray[0].documentTypeCodeList = "documentTypeCodeList_0";
 *		valuesArray[0].documentUploadedTime = 0;
 *		valuesArray[1] = {};
 *		valuesArray[1].docTypeCode = "docTypeCode_1";
 *		valuesArray[1].docTypeName = "docTypeName_1";
 *		valuesArray[1].documentName = "documentName_1";
 *		valuesArray[1].documentUploadedDate = "documentUploadedDate_1";
 *		valuesArray[1].documentUUID = "documentUUID_1";
 *		valuesArray[1].lastSyncTime = "lastSyncTime_1";
 *		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
 *		valuesArray[1].moreDataAvailable = "moreDataAvailable_1";
 *		valuesArray[1].patientId = "patientId_1";
 *		valuesArray[1].srcTypeCode = "srcTypeCode_1";
 *		valuesArray[1].documentTypeNameList = "documentTypeNameList_1";
 *		valuesArray[1].documentTypeCodeList = "documentTypeCodeList_1";
 *		valuesArray[1].documentUploadedTime = 1;
 *		valuesArray[2] = {};
 *		valuesArray[2].docTypeCode = "docTypeCode_2";
 *		valuesArray[2].docTypeName = "docTypeName_2";
 *		valuesArray[2].documentName = "documentName_2";
 *		valuesArray[2].documentUploadedDate = "documentUploadedDate_2";
 *		valuesArray[2].documentUUID = "documentUUID_2";
 *		valuesArray[2].lastSyncTime = "lastSyncTime_2";
 *		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
 *		valuesArray[2].moreDataAvailable = "moreDataAvailable_2";
 *		valuesArray[2].patientId = "patientId_2";
 *		valuesArray[2].srcTypeCode = "srcTypeCode_2";
 *		valuesArray[2].documentTypeNameList = "documentTypeNameList_2";
 *		valuesArray[2].documentTypeCodeList = "documentTypeCodeList_2";
 *		valuesArray[2].documentUploadedTime = 2;
 *		com.healogics.offline.getPatientRecords.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.healogics.offline.getPatientRecords.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var isProperData = true;
    var arrayLen = 0;
    var errorInfo = [];
    var arrayLength = valuesArray.length;
    var errObject = null;
    var isReferentialIntegrityFailure = false;
    var errMsg = null;
    if (kony.sync.enableORMValidations) {
        var newValuesArray = [];
        //column level validations
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var valuestable = valuesArray[i];
            if (kony.sync.attributeValidation(valuestable, "getPatientRecords", errorcallback, true) === false) {
                return;
            }
            newValuesArray[i] = valuestable;
        }
        valuesArray = newValuesArray;
        var isDuplicateKey = false;
        //checking for duplicate records
        var connection = kony.sync.getConnectionOnly(dbname, dbname);
        kony.sync.startTransaction(connection, checkDuplicatePkCallback, transactionSuccessCallback, transactionErrorCallback);
        var isError = false;

        function checkDuplicatePkCallback(tx) {
            arrayLength = valuesArray.length;
            for (var i = 0; valuesArray != null && i < arrayLength; i++) {
                var valuestable = valuesArray[i];
                var pks = [];
                errMsg = "documentUUID=" + valuestable.documentUUID;
                pks["documentUUID"] = {
                    key: "documentUUID",
                    value: valuestable.documentUUID
                };
                errMsg = errMsg + ", patientId=" + valuestable.patientId;
                pks["patientId"] = {
                    key: "patientId",
                    value: valuestable.patientId
                };
                var wcs = [];
                if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "searching") === false) {
                    isError = true;
                    return;
                }
                var query = kony.sync.qb_createQuery();
                kony.sync.qb_select(query, null);
                kony.sync.qb_from(query, tbname);
                kony.sync.qb_where(query, wcs);
                var query_compile = kony.sync.qb_compile(query);
                var sql = query_compile[0];
                var params = query_compile[1];
                var resultset = kony.sync.executeSql(tx, sql, params);
                if (resultset === false) {
                    isError = true;
                    return;
                }
                if (resultset.rows.length != 0) {
                    isError = true;
                    errMsg = "[" + errMsg + "]";
                    isDuplicateKey = true;
                    return;
                }
            }
            if (!isError) {
                checkIntegrity(tx);
            }
        }
    } else {
        //copying by value
        var newValuesArray = [];
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
        }
        valuesArray = newValuesArray;
        kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
    }

    function transactionErrorCallback() {
        if (isError == true) {
            //Statement error has occurred
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
        } else {
            //Transaction error has occurred
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
        }
    }

    function transactionSuccessCallback() {
        sync.log.trace("Entering  com.healogics.offline.getPatientRecords.createAll->transactionSuccessCallback");
        if (!isError) {
            kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
        } else {
            if (isReferentialIntegrityFailure) {
                kony.sync.verifyAndCallClosure(errorcallback, errObject);
            }
            if (isDuplicateKey) {
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
            }
        }
    }
    //foreign key constraints validations
    function checkIntegrity(tx) {
        sync.log.trace("Entering  com.healogics.offline.getPatientRecords.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.healogics.offline.getPatientRecords.getRelationshipMap(relationshipMap, valuesArray[i]);
            errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
            if (errObject === false) {
                isError = true;
                return;
            }
            if (errObject !== true) {
                isError = true;
                isReferentialIntegrityFailure = true;
                return;
            }
        }
    }
};
/************************************************************************************
 * Updates getPatientRecords using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.getPatientRecords.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.healogics.offline.getPatientRecords.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.getPatientRecords.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogics.offline.getPatientRecords.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "getPatientRecords", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.healogics.offline.getPatientRecords.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates getPatientRecords(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "getPatientRecords", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogics.offline.getPatientRecords.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogics.offline.getPatientRecords.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.healogics.offline.getPatientRecords.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogics.offline.getPatientRecords.getPKTable());
    }
};
/************************************************************************************
 * Updates getPatientRecords(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.docTypeCode = "docTypeCode_updated0";
 *		inputArray[0].changeSet.docTypeName = "docTypeName_updated0";
 *		inputArray[0].changeSet.documentName = "documentName_updated0";
 *		inputArray[0].changeSet.documentUploadedDate = "documentUploadedDate_updated0";
 *		inputArray[0].whereClause = "where documentUUID = '0'";
 *		inputArray[0].whereClause = "where patientId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.docTypeCode = "docTypeCode_updated1";
 *		inputArray[1].changeSet.docTypeName = "docTypeName_updated1";
 *		inputArray[1].changeSet.documentName = "documentName_updated1";
 *		inputArray[1].changeSet.documentUploadedDate = "documentUploadedDate_updated1";
 *		inputArray[1].whereClause = "where documentUUID = '1'";
 *		inputArray[1].whereClause = "where patientId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.docTypeCode = "docTypeCode_updated2";
 *		inputArray[2].changeSet.docTypeName = "docTypeName_updated2";
 *		inputArray[2].changeSet.documentName = "documentName_updated2";
 *		inputArray[2].changeSet.documentUploadedDate = "documentUploadedDate_updated2";
 *		inputArray[2].whereClause = "where documentUUID = '2'";
 *		inputArray[2].whereClause = "where patientId = '2'";
 *		com.healogics.offline.getPatientRecords.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.healogics.offline.getPatientRecords.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "getPatientRecords";
        var isError = false;
        var errObject = null;
        if (markForUpload == false || markForUpload == "false") {
            markForUpload = "false"
        } else {
            markForUpload = "true"
        }
        if ((kony.sync.enableORMValidations)) {
            var newInputArray = [];
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var v = inputArray[i];
                var valuestable = v.changeSet;
                var isEmpty = true;
                for (var key in valuestable) {
                    isEmpty = false;
                    break;
                }
                if (isEmpty) {
                    errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeNullValue, kony.sync.getErrorMessage(kony.sync.errorCodeNullValue)));
                    return;
                }
                var wcs = v.whereClause;
                var twcs = wcs;
                if (kony.sync.attributeValidation(valuestable, "getPatientRecords", errorcallback, false) === false) {
                    return;
                }
                newInputArray[i] = [];
                newInputArray[i].changeSet = valuestable;
                newInputArray[i].whereClause = wcs;
            }
            inputArray = newInputArray;
            var connection = kony.sync.getConnectionOnly(dbname, dbname);
            kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
        } else {
            //copying by value
            var newInputArray = [];
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var v = inputArray[i];
                newInputArray[i] = kony.sync.CreateCopy(v);
            }
            inputArray = newInputArray;
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.healogics.offline.getPatientRecords.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.healogics.offline.getPatientRecords.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.healogics.offline.getPatientRecords.getPKTable());
            }
        }

        function transactionErrorCallback() {
            if (errObject === false) {
                //Sql statement error has occcurred
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
                kony.sync.errorObject = null;
            } else if (errObject !== null) {
                // Referential integrity error has occurred
                kony.sync.verifyAndCallClosure(errorcallback, errObject);
            } else {
                //Transaction error has occurred
                kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
            }
        }
        //foreign key constraints validations
        function checkIntegrity(tx) {
            sync.log.trace("Entering  com.healogics.offline.getPatientRecords.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.healogics.offline.getPatientRecords.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
                sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
                errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
                if (errObject === false) {
                    isError = true;
                    return;
                }
                if (errObject !== true) {
                    isError = true;
                    kony.sync.rollbackTransaction(tx);
                    return;
                }
            }
        }
    }
    /************************************************************************************
     * Deletes getPatientRecords using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.getPatientRecords.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.getPatientRecords.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function getPatientRecordsTransactionCallback(tx) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.deleteByPK->getPatientRecords_PKPresent successcallback");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (null !== record) {} else {
            pkNotFound = true;
        }
        var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
        if (deletedRows === false) {
            isError = true;
        }
    }

    function getPatientRecordsErrorCallback() {
        sync.log.error("Entering com.healogics.offline.getPatientRecords.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function getPatientRecordsSuccessCallback() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.deleteByPK->relationship success callback");
        if (pkNotFound === true) {
            kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
            return;
        }
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, {
                rowsdeleted: 1
            });
        }
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogics.offline.getPatientRecords.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, getPatientRecordsTransactionCallback, getPatientRecordsSuccessCallback, getPatientRecordsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes getPatientRecords(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.healogics.offline.getPatientRecords.remove("where docTypeCode like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.healogics.offline.getPatientRecords.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function getPatientRecords_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function getPatientRecords_removeSuccess() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.remove->getPatientRecords_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, getPatientRecords_removeTransactioncallback, getPatientRecords_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes getPatientRecords using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function getPatientRecordsTransactionCallback(tx) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK -> getPatientRecordsTransactionCallback");
        var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (null !== record && false != record) {
            deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
            if (deletedRows === false) {
                isError = true;
            }
        } else {
            pkNotFound = true;
        }
    }

    function getPatientRecordsErrorCallback() {
        sync.log.error("Entering com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK -> getPatientRecordsErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function getPatientRecordsSuccessCallback() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK -> getPatientRecordsSuccessCallback");
        if (pkNotFound === true) {
            kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
            return;
        }
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, {
                rowsdeleted: 1
            });
        }
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogics.offline.getPatientRecords.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, getPatientRecordsTransactionCallback, getPatientRecordsSuccessCallback, getPatientRecordsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes getPatientRecords(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogics.offline.getPatientRecords.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function getPatientRecords_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function getPatientRecords_removeSuccess() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.remove->getPatientRecords_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, getPatientRecords_removeTransactioncallback, getPatientRecords_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves getPatientRecords using primary key from the local Database. 
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.getPatientRecords.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.getPatientRecords.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var wcs = [];
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "searching") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, wcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.getAllDetailsByPK-> success callback function");
        successcallback(com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves getPatientRecords(s) using where clause from the local Database. 
 * e.g. com.healogics.offline.getPatientRecords.find("where docTypeCode like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.healogics.offline.getPatientRecords.find = function(wcs, successcallback, errorcallback) {
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
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of getPatientRecords with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.healogics.offline.getPatientRecords.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.getPatientRecords.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
        return;
    }

    function markRecordForUpload(tx, record) {
        var versionMapMain = [];
        versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname);
        kony.sync.qb_set(query, versionMapMain);
        kony.sync.qb_where(query, wcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        return kony.sync.executeSql(tx, sql, params);
    }

    function markRecordForUploadHistory(tx, record) {
        var versionMap = [];
        versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        var twcs = [];
        twcs = wcs;
        kony.table.insert(twcs, {
            key: kony.sync.historyTableChangeTypeColumn,
            value: record[kony.sync.historyTableChangeTypeColumn],
            optype: "EQ",
            comptype: "AND"
        });
        versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
        kony.sync.qb_set(query, versionMap);
        kony.sync.qb_where(query, twcs);
        kony.table.remove(twcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        return kony.sync.executeSql(tx, sql, params);
    }

    function single_transaction_callback(tx) {
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
        kony.sync.qb_from(query, tbname);
        kony.sync.qb_where(query, wcs);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0];
        var params = query_compile[1];
        var resultSet = kony.sync.executeSql(tx, sql, params);
        if (resultSet === false) {
            isError = true;
            return;
        }
        var num_records = resultSet.rows.length;
        if (num_records > 0) {
            recordsFound = true;
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, 0);
            var changeType = record[kony.sync.mainTableChangeTypeColumn];
            if (!kony.sync.isNullOrUndefined(changeType) && kony.string.startsWith("" + changeType, "9")) {
                recordsMarkedForUpload = 1;
                if (markRecordForUpload(tx, record) === false) {
                    isError = true;
                    return;
                }
            }
        }
        var query1 = kony.sync.qb_createQuery();
        kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
        kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
        kony.sync.qb_where(query1, wcs);
        var query1_compile = kony.sync.qb_compile(query1);
        var sql1 = query1_compile[0];
        var params1 = query1_compile[1];
        var resultSet1 = kony.sync.executeSql(tx, sql1, params1);
        if (resultSet1 !== false) {
            var num_records = resultSet1.rows.length;
            for (var i = 0; i <= num_records - 1; i++) {
                var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
                if (markRecordForUploadHistory(tx, record) === false) {
                    isError = true;
                    return;
                }
                recordsFound = true;
            }
        } else {
            isError = true;
        }
    }

    function single_transaction_success_callback() {
        if (recordsFound === true) {
            kony.sync.verifyAndCallClosure(successcallback, {
                count: recordsMarkedForUpload
            });
        } else {
            kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
        }
    }

    function single_transaction_error_callback(res) {
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }
    var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (connection != null) {
        kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
    }
};
/************************************************************************************
 * Marks instance(s) of getPatientRecords matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var isError = false;
    var num_records_main = 0;
    wcs = kony.sync.validateWhereClause(wcs);
    if (!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
        wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
    } else {
        wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
    }

    function markRecordForUpload(tx, record) {
        var versionMapMain = [];
        versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname);
        kony.sync.qb_set(query, versionMapMain);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0] + " " + wcs;
        var params = query_compile[1];
        if (kony.sync.executeSql(tx, sql, params) === false) {
            return false;
        }
    }

    function markRecordForUploadHistory(tx, record) {
        var versionMap = [];
        versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
        var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
        var versionNo = kony.sync.getseqnumber(tx, scopename);
        if (versionNo === false) {
            return false;
        }
        var twcs = "";
        twcs = wcs;
        twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
        versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
        var query = kony.sync.qb_createQuery();
        kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
        kony.sync.qb_set(query, versionMap);
        var query_compile = kony.sync.qb_compile(query);
        var sql = query_compile[0] + " " + twcs;
        var params = query_compile[1];
        if (kony.sync.executeSql(tx, sql, params) === false) {
            return false;
        }
    }

    function single_transaction_callback(tx) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.markForUpload->single_transaction_callback");
        //updating main table
        var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from \"" + tbname + "\" " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            isError = true;
            return;
        }
        num_records_main = resultSet.rows.length;
        for (var i = 0; i < num_records_main; i++) {
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
            if (markRecordForUpload(tx, record) === false) {
                isError = true;
                return;
            }
        }
        //updating history table
        var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            isError = true;
            return;
        }
        var num_records = resultSet.rows.length;
        for (var i = 0; i <= num_records - 1; i++) {
            var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
            if (markRecordForUploadHistory(tx, record) === false) {
                isError = true;
                return;
            }
        }
    }

    function single_transaction_success_callback() {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.healogics.offline.getPatientRecords.markForUpload->single_transaction_error_callback");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }
    var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (connection != null) {
        kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
    }
};
/************************************************************************************
 * Retrieves instance(s) of getPatientRecords pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from \"" + tbname + "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " = " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of getPatientRecords pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of getPatientRecords deferred for upload.
 *************************************************************************************/
com.healogics.offline.getPatientRecords.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var sql;
    if (typeof(wcs) === "string" && wcs != null) {
        wcs = kony.sync.validateWhereClause(wcs);
        sql = "select * from \"" + tbname + "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    } else {
        errorcallback = successcallback;
        successcallback = wcs;
        sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableChangeTypeColumn + " LIKE '9%'";
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.getPatientRecords.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to getPatientRecords in local database to last synced state
 *************************************************************************************/
com.healogics.offline.getPatientRecords.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to getPatientRecords's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.getPatientRecords.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.getPatientRecords.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var wcs = [];
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogics.offline.getPatientRecords.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether getPatientRecords's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.getPatientRecords.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.healogics.offline.getPatientRecords.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.healogics.offline.getPatientRecords.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var wcs = [];
    var flag;
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
        return;
    }
    var twcs = [];
    twcs = kony.sync.CreateCopy(wcs);
    kony.table.insert(twcs, {
        key: kony.sync.mainTableChangeTypeColumn,
        value: "9%",
        optype: "LIKE",
        comptype: "AND"
    });
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, twcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];
    kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.isRecordDeferredForUpload->successcallback function");
        if (res.length === 1) {
            flag = true;
        } else {
            flag = false;
        }
        kony.sync.verifyAndCallClosure(successcallback, {
            deferred: flag
        });
    }
};
/************************************************************************************
 * isRecordPendingForUpload returns true or false depending on whether getPatientRecords's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.healogics.offline.getPatientRecords.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.getPatientRecords.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.healogics.offline.getPatientRecords.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.healogics.offline.getPatientRecords.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.getPatientRecords.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    var wcs = [];
    var flag;
    if (com.healogics.offline.getPatientRecords.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
        return;
    }
    var twcs = [];
    twcs = kony.sync.CreateCopy(wcs);
    kony.table.insert(twcs, {
        key: kony.sync.mainTableChangeTypeColumn,
        value: "9%",
        optype: "NOT LIKE",
        comptype: "AND"
    });
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_where(query, twcs);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];
    kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.getPatientRecords.isRecordPendingForUpload->successcallback function");
        if (res.length === 1) {
            flag = true;
        } else {
            flag = false;
        }
        kony.sync.verifyAndCallClosure(successcallback, {
            pending: flag
        });
    }
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.healogics.offline.getPatientRecords.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.removeCascade function");
    var tbname = com.healogics.offline.getPatientRecords.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {}
    if (isCascade) {
        if (removeCascadeChildren() === false) {
            return false;
        }
        if (kony.sync.deleteBatch(tx, tbname, wcs, isLocal, markForUpload, null) === false) {
            return false;
        }
        return true;
    } else {
        var sql = "select * from \"" + tbname + "\" " + wcs;
        var resultSet = kony.sync.executeSql(tx, sql, null);
        if (resultSet === false) {
            return false;
        }
        var num_records = resultSet.rows.length;
        if (num_records === 0) {
            return true;
        } else {
            sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname, tbname, tbname, parentTable));
            errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity, kony.sync.getReferetialIntegrityDeleteErrMessg(tbname, tbname, tbname, parentTable)));
            return false;
        }
    }
};
com.healogics.offline.getPatientRecords.convertTableToObject = function(res) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.healogics.offline.getPatientRecords();
            obj.deleted = res[i].deleted;
            obj.docTypeCode = res[i].docTypeCode;
            obj.docTypeName = res[i].docTypeName;
            obj.documentName = res[i].documentName;
            obj.documentUploadedDate = res[i].documentUploadedDate;
            obj.documentUUID = res[i].documentUUID;
            obj.lastSyncTime = res[i].lastSyncTime;
            obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
            obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
            obj.moreDataAvailable = res[i].moreDataAvailable;
            obj.patientId = res[i].patientId;
            obj.srcTypeCode = res[i].srcTypeCode;
            obj.documentTypeNameList = res[i].documentTypeNameList;
            obj.documentTypeCodeList = res[i].documentTypeCodeList;
            obj.documentUploadedTime = res[i].documentUploadedTime;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.healogics.offline.getPatientRecords.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.filterAttributes function");
    var attributeTable = {};
    attributeTable.docTypeCode = "docTypeCode";
    attributeTable.docTypeName = "docTypeName";
    attributeTable.documentName = "documentName";
    attributeTable.documentUploadedDate = "documentUploadedDate";
    attributeTable.documentUUID = "documentUUID";
    attributeTable.lastSyncTime = "lastSyncTime";
    attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
    attributeTable.moreDataAvailable = "moreDataAvailable";
    attributeTable.patientId = "patientId";
    attributeTable.srcTypeCode = "srcTypeCode";
    attributeTable.documentTypeNameList = "documentTypeNameList";
    attributeTable.documentTypeCodeList = "documentTypeCodeList";
    attributeTable.documentUploadedTime = "documentUploadedTime";
    var PKTable = {};
    PKTable.documentUUID = {}
    PKTable.documentUUID.name = "documentUUID";
    PKTable.documentUUID.isAutoGen = false;
    PKTable.patientId = {}
    PKTable.patientId.name = "patientId";
    PKTable.patientId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject getPatientRecords. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject getPatientRecords. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject getPatientRecords. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.healogics.offline.getPatientRecords.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.healogics.offline.getPatientRecords.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.healogics.offline.getPatientRecords.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.docTypeCode = this.docTypeCode;
    valuesTable.docTypeName = this.docTypeName;
    valuesTable.documentName = this.documentName;
    valuesTable.documentUploadedDate = this.documentUploadedDate;
    if (isInsert === true) {
        valuesTable.documentUUID = this.documentUUID;
    }
    valuesTable.lastSyncTime = this.lastSyncTime;
    valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
    valuesTable.moreDataAvailable = this.moreDataAvailable;
    if (isInsert === true) {
        valuesTable.patientId = this.patientId;
    }
    valuesTable.srcTypeCode = this.srcTypeCode;
    valuesTable.documentTypeNameList = this.documentTypeNameList;
    valuesTable.documentTypeCodeList = this.documentTypeCodeList;
    valuesTable.documentUploadedTime = this.documentUploadedTime;
    return valuesTable;
};
com.healogics.offline.getPatientRecords.prototype.getPKTable = function() {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.prototype.getPKTable function");
    var pkTable = {};
    pkTable.documentUUID = {
        key: "documentUUID",
        value: this.documentUUID
    };
    pkTable.patientId = {
        key: "patientId",
        value: this.patientId
    };
    return pkTable;
};
com.healogics.offline.getPatientRecords.getPKTable = function() {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getPKTable function");
    var pkTable = [];
    pkTable.push("documentUUID");
    pkTable.push("patientId");
    return pkTable;
};
com.healogics.offline.getPatientRecords.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.pkCheck function");
    var wc = [];
    if (!kony.sync.isNull(pks.documentUUID)) {
        if (!kony.sync.isNull(pks.documentUUID.value)) {
            wc.key = "documentUUID";
            wc.value = pks.documentUUID.value;
        } else {
            wc.key = "documentUUID";
            wc.value = pks.documentUUID;
        }
    } else {
        sync.log.error("Primary Key documentUUID not specified in " + opName + " an item in getPatientRecords");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("documentUUID", opName, "getPatientRecords")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.patientId)) {
        if (!kony.sync.isNull(pks.patientId.value)) {
            wc.key = "patientId";
            wc.value = pks.patientId.value;
        } else {
            wc.key = "patientId";
            wc.value = pks.patientId;
        }
    } else {
        sync.log.error("Primary Key patientId not specified in " + opName + " an item in getPatientRecords");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("patientId", opName, "getPatientRecords")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.healogics.offline.getPatientRecords.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.validateNull function");
    return true;
};
com.healogics.offline.getPatientRecords.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.validateNullInsert function");
    if (kony.sync.isNull(valuestable.documentUUID) || kony.sync.isEmptyString(valuestable.documentUUID)) {
        sync.log.error("Mandatory attribute documentUUID is missing for the SyncObject getPatientRecords.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "getPatientRecords", "documentUUID")));
        return false;
    }
    if (kony.sync.isNull(valuestable.patientId) || kony.sync.isEmptyString(valuestable.patientId)) {
        sync.log.error("Mandatory attribute patientId is missing for the SyncObject getPatientRecords.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "getPatientRecords", "patientId")));
        return false;
    }
    return true;
};
com.healogics.offline.getPatientRecords.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.healogics.offline.getPatientRecords.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.healogics.offline.getPatientRecords.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.healogics.offline.getPatientRecords.getTableName = function() {
    return "getPatientRecords";
};
// **********************************End getPatientRecords's helper methods************************