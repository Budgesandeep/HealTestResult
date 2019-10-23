//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:27 UTC 2019healingWoundSteps*******************
// **********************************Start healingWoundSteps's helper methods************************
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
/************************************************************************************
 * Creates new healingWoundSteps
 *************************************************************************************/
healingWoundSteps = function() {
    this.accessToken = null;
    this.deleted = null;
    this.docEntityId = null;
    this.facilities = null;
    this.lastSyncTime = null;
    this.lastUpdatedByUser = null;
    this.lastUpdatedTime = null;
    this.patientUuid = null;
    this.woundNumber = null;
    this.stepNumber = null;
    this.stepTitle = null;
    this.cpgLinks = null;
    this.facilityId = null;
    this.encounterId = null;
    this.markForUpload = true;
};
healingWoundSteps.prototype = {
    get accessToken() {
        return this._accessToken;
    },
    set accessToken(val) {
        this._accessToken = val;
    },
    get deleted() {
        return this._deleted;
    },
    set deleted(val) {
        this._deleted = val;
    },
    get docEntityId() {
        return this._docEntityId;
    },
    set docEntityId(val) {
        this._docEntityId = val;
    },
    get facilities() {
        return this._facilities;
    },
    set facilities(val) {
        this._facilities = val;
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
    get lastUpdatedTime() {
        return this._lastUpdatedTime;
    },
    set lastUpdatedTime(val) {
        this._lastUpdatedTime = val;
    },
    get patientUuid() {
        return this._patientUuid;
    },
    set patientUuid(val) {
        this._patientUuid = val;
    },
    get woundNumber() {
        return this._woundNumber;
    },
    set woundNumber(val) {
        this._woundNumber = val;
    },
    get stepNumber() {
        return this._stepNumber;
    },
    set stepNumber(val) {
        this._stepNumber = val;
    },
    get stepTitle() {
        return this._stepTitle;
    },
    set stepTitle(val) {
        this._stepTitle = val;
    },
    get cpgLinks() {
        return this._cpgLinks;
    },
    set cpgLinks(val) {
        this._cpgLinks = val;
    },
    get facilityId() {
        return this._facilityId;
    },
    set facilityId(val) {
        this._facilityId = val;
    },
    get encounterId() {
        return this._encounterId;
    },
    set encounterId(val) {
        this._encounterId = val;
    },
};
/************************************************************************************
 * Retrieves all instances of healingWoundSteps SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "accessToken";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "deleted";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * healingWoundSteps.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
healingWoundSteps.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering healingWoundSteps.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    orderByMap = kony.sync.formOrderByClause("healingWoundSteps", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering healingWoundSteps.getAll->successcallback");
        successcallback(healingWoundSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of healingWoundSteps present in local database.
 *************************************************************************************/
healingWoundSteps.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.getAllCount function");
    healingWoundSteps.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of healingWoundSteps using where clause in the local Database
 *************************************************************************************/
healingWoundSteps.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering healingWoundSteps.getCount->successcallback");
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
 * Creates a new instance of healingWoundSteps in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
healingWoundSteps.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  healingWoundSteps.prototype.create function");
    var valuestable = this.getValuesTable(true);
    healingWoundSteps.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
healingWoundSteps.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  healingWoundSteps.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "healingWoundSteps", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  healingWoundSteps.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = healingWoundSteps.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "docEntityId=" + valuestable.docEntityId;
        pks["docEntityId"] = {
            key: "docEntityId",
            value: valuestable.docEntityId
        };
        errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
        pks["patientUuid"] = {
            key: "patientUuid",
            value: valuestable.patientUuid
        };
        errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
        pks["woundNumber"] = {
            key: "woundNumber",
            value: valuestable.woundNumber
        };
        errMsg = errMsg + ", stepNumber=" + valuestable.stepNumber;
        pks["stepNumber"] = {
            key: "stepNumber",
            value: valuestable.stepNumber
        };
        errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
        pks["facilityId"] = {
            key: "facilityId",
            value: valuestable.facilityId
        };
        errMsg = errMsg + ", encounterId=" + valuestable.encounterId;
        pks["encounterId"] = {
            key: "encounterId",
            value: valuestable.encounterId
        };
        healingWoundSteps.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of healingWoundSteps in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].accessToken = "accessToken_0";
 *		valuesArray[0].deleted = "deleted_0";
 *		valuesArray[0].docEntityId = "docEntityId_0";
 *		valuesArray[0].facilities = "facilities_0";
 *		valuesArray[0].lastSyncTime = "lastSyncTime_0";
 *		valuesArray[0].lastUpdatedByUser = "lastUpdatedByUser_0";
 *		valuesArray[0].patientUuid = "patientUuid_0";
 *		valuesArray[0].woundNumber = "woundNumber_0";
 *		valuesArray[0].stepNumber = "stepNumber_0";
 *		valuesArray[0].stepTitle = "stepTitle_0";
 *		valuesArray[0].cpgLinks = "cpgLinks_0";
 *		valuesArray[0].facilityId = "facilityId_0";
 *		valuesArray[0].encounterId = "encounterId_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].accessToken = "accessToken_1";
 *		valuesArray[1].deleted = "deleted_1";
 *		valuesArray[1].docEntityId = "docEntityId_1";
 *		valuesArray[1].facilities = "facilities_1";
 *		valuesArray[1].lastSyncTime = "lastSyncTime_1";
 *		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
 *		valuesArray[1].patientUuid = "patientUuid_1";
 *		valuesArray[1].woundNumber = "woundNumber_1";
 *		valuesArray[1].stepNumber = "stepNumber_1";
 *		valuesArray[1].stepTitle = "stepTitle_1";
 *		valuesArray[1].cpgLinks = "cpgLinks_1";
 *		valuesArray[1].facilityId = "facilityId_1";
 *		valuesArray[1].encounterId = "encounterId_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].accessToken = "accessToken_2";
 *		valuesArray[2].deleted = "deleted_2";
 *		valuesArray[2].docEntityId = "docEntityId_2";
 *		valuesArray[2].facilities = "facilities_2";
 *		valuesArray[2].lastSyncTime = "lastSyncTime_2";
 *		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
 *		valuesArray[2].patientUuid = "patientUuid_2";
 *		valuesArray[2].woundNumber = "woundNumber_2";
 *		valuesArray[2].stepNumber = "stepNumber_2";
 *		valuesArray[2].stepTitle = "stepTitle_2";
 *		valuesArray[2].cpgLinks = "cpgLinks_2";
 *		valuesArray[2].facilityId = "facilityId_2";
 *		valuesArray[2].encounterId = "encounterId_2";
 *		healingWoundSteps.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
healingWoundSteps.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering healingWoundSteps.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "healingWoundSteps", errorcallback, true) === false) {
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
                errMsg = "docEntityId=" + valuestable.docEntityId;
                pks["docEntityId"] = {
                    key: "docEntityId",
                    value: valuestable.docEntityId
                };
                errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
                pks["patientUuid"] = {
                    key: "patientUuid",
                    value: valuestable.patientUuid
                };
                errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
                pks["woundNumber"] = {
                    key: "woundNumber",
                    value: valuestable.woundNumber
                };
                errMsg = errMsg + ", stepNumber=" + valuestable.stepNumber;
                pks["stepNumber"] = {
                    key: "stepNumber",
                    value: valuestable.stepNumber
                };
                errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
                pks["facilityId"] = {
                    key: "facilityId",
                    value: valuestable.facilityId
                };
                errMsg = errMsg + ", encounterId=" + valuestable.encounterId;
                pks["encounterId"] = {
                    key: "encounterId",
                    value: valuestable.encounterId
                };
                var wcs = [];
                if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  healingWoundSteps.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  healingWoundSteps.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = healingWoundSteps.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates healingWoundSteps using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
healingWoundSteps.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  healingWoundSteps.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    healingWoundSteps.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
healingWoundSteps.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  healingWoundSteps.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "healingWoundSteps", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = healingWoundSteps.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates healingWoundSteps(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
healingWoundSteps.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering healingWoundSteps.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "healingWoundSteps", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  healingWoundSteps.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, healingWoundSteps.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = healingWoundSteps.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, healingWoundSteps.getPKTable());
    }
};
/************************************************************************************
 * Updates healingWoundSteps(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.accessToken = "accessToken_updated0";
 *		inputArray[0].changeSet.deleted = "deleted_updated0";
 *		inputArray[0].changeSet.facilities = "facilities_updated0";
 *		inputArray[0].changeSet.lastSyncTime = "lastSyncTime_updated0";
 *		inputArray[0].whereClause = "where docEntityId = '0'";
 *		inputArray[0].whereClause = "where patientUuid = '0'";
 *		inputArray[0].whereClause = "where woundNumber = '0'";
 *		inputArray[0].whereClause = "where stepNumber = '0'";
 *		inputArray[0].whereClause = "where facilityId = '0'";
 *		inputArray[0].whereClause = "where encounterId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.accessToken = "accessToken_updated1";
 *		inputArray[1].changeSet.deleted = "deleted_updated1";
 *		inputArray[1].changeSet.facilities = "facilities_updated1";
 *		inputArray[1].changeSet.lastSyncTime = "lastSyncTime_updated1";
 *		inputArray[1].whereClause = "where docEntityId = '1'";
 *		inputArray[1].whereClause = "where patientUuid = '1'";
 *		inputArray[1].whereClause = "where woundNumber = '1'";
 *		inputArray[1].whereClause = "where stepNumber = '1'";
 *		inputArray[1].whereClause = "where facilityId = '1'";
 *		inputArray[1].whereClause = "where encounterId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.accessToken = "accessToken_updated2";
 *		inputArray[2].changeSet.deleted = "deleted_updated2";
 *		inputArray[2].changeSet.facilities = "facilities_updated2";
 *		inputArray[2].changeSet.lastSyncTime = "lastSyncTime_updated2";
 *		inputArray[2].whereClause = "where docEntityId = '2'";
 *		inputArray[2].whereClause = "where patientUuid = '2'";
 *		inputArray[2].whereClause = "where woundNumber = '2'";
 *		inputArray[2].whereClause = "where stepNumber = '2'";
 *		inputArray[2].whereClause = "where facilityId = '2'";
 *		inputArray[2].whereClause = "where encounterId = '2'";
 *		healingWoundSteps.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
healingWoundSteps.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering healingWoundSteps.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "healingWoundSteps.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "healingWoundSteps";
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
                if (kony.sync.attributeValidation(valuestable, "healingWoundSteps", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, healingWoundSteps.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  healingWoundSteps.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, healingWoundSteps.getPKTable());
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
            sync.log.trace("Entering  healingWoundSteps.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = healingWoundSteps.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes healingWoundSteps using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
healingWoundSteps.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.prototype.deleteByPK function");
    var pks = this.getPKTable();
    healingWoundSteps.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
healingWoundSteps.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering healingWoundSteps.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function healingWoundStepsTransactionCallback(tx) {
        sync.log.trace("Entering healingWoundSteps.deleteByPK->healingWoundSteps_PKPresent successcallback");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (null !== record) {
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("patientUuid");
            targetAttributes.push("patientUuid");
            srcAttributes.push("docEntityId");
            targetAttributes.push("docEntityId");
            srcAttributes.push("woundNumber");
            targetAttributes.push("woundNumber");
            srcAttributes.push("stepNumber");
            targetAttributes.push("stepNumber");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", healingWoundSubSteps.removeCascade, "healingWoundSubSteps", true, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
        var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
        if (deletedRows === false) {
            isError = true;
        }
    }

    function healingWoundStepsErrorCallback() {
        sync.log.error("Entering healingWoundSteps.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function healingWoundStepsSuccessCallback() {
        sync.log.trace("Entering healingWoundSteps.deleteByPK->relationship success callback");
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
        sync.log.error("Entering healingWoundSteps.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, healingWoundStepsTransactionCallback, healingWoundStepsSuccessCallback, healingWoundStepsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes healingWoundSteps(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. healingWoundSteps.remove("where accessToken like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
healingWoundSteps.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering healingWoundSteps.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function healingWoundSteps_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("stepNumber");
        targetAttributes.push("stepNumber");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, healingWoundSubSteps.removeCascade, "healingWoundSubSteps", true, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function healingWoundSteps_removeSuccess() {
        sync.log.trace("Entering healingWoundSteps.remove->healingWoundSteps_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering healingWoundSteps.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering healingWoundSteps.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, healingWoundSteps_removeTransactioncallback, healingWoundSteps_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes healingWoundSteps using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
healingWoundSteps.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    healingWoundSteps.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
healingWoundSteps.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function healingWoundStepsTransactionCallback(tx) {
        sync.log.trace("Entering healingWoundSteps.removeDeviceInstanceByPK -> healingWoundStepsTransactionCallback");
        var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (null !== record && false != record) {
            deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
            if (deletedRows === false) {
                isError = true;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("patientUuid");
            targetAttributes.push("patientUuid");
            srcAttributes.push("docEntityId");
            targetAttributes.push("docEntityId");
            srcAttributes.push("woundNumber");
            targetAttributes.push("woundNumber");
            srcAttributes.push("stepNumber");
            targetAttributes.push("stepNumber");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", healingWoundSubSteps.removeCascade, "healingWoundSubSteps", true, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
    }

    function healingWoundStepsErrorCallback() {
        sync.log.error("Entering healingWoundSteps.removeDeviceInstanceByPK -> healingWoundStepsErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function healingWoundStepsSuccessCallback() {
        sync.log.trace("Entering healingWoundSteps.removeDeviceInstanceByPK -> healingWoundStepsSuccessCallback");
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
        sync.log.error("Entering healingWoundSteps.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, healingWoundStepsTransactionCallback, healingWoundStepsSuccessCallback, healingWoundStepsErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes healingWoundSteps(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
healingWoundSteps.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function healingWoundSteps_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("stepNumber");
        targetAttributes.push("stepNumber");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, healingWoundSubSteps.removeCascade, "healingWoundSubSteps", true, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function healingWoundSteps_removeSuccess() {
        sync.log.trace("Entering healingWoundSteps.remove->healingWoundSteps_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering healingWoundSteps.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering healingWoundSteps.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, healingWoundSteps_removeTransactioncallback, healingWoundSteps_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves healingWoundSteps using primary key from the local Database. 
 *************************************************************************************/
healingWoundSteps.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    healingWoundSteps.getAllDetailsByPK(pks, successcallback, errorcallback);
};
healingWoundSteps.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    var wcs = [];
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering healingWoundSteps.getAllDetailsByPK-> success callback function");
        successcallback(healingWoundSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves healingWoundSteps(s) using where clause from the local Database. 
 * e.g. healingWoundSteps.find("where accessToken like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
healingWoundSteps.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, healingWoundSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of healingWoundSteps with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
healingWoundSteps.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    healingWoundSteps.markForUploadbyPK(pks, successcallback, errorcallback);
};
healingWoundSteps.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of healingWoundSteps matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
healingWoundSteps.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
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
        sync.log.trace("Entering healingWoundSteps.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering healingWoundSteps.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering healingWoundSteps.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of healingWoundSteps pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
healingWoundSteps.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
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
        sync.log.trace("Entering healingWoundSteps.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, healingWoundSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of healingWoundSteps pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
healingWoundSteps.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering healingWoundSteps.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, healingWoundSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of healingWoundSteps deferred for upload.
 *************************************************************************************/
healingWoundSteps.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
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
        sync.log.trace("Entering healingWoundSteps.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, healingWoundSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to healingWoundSteps in local database to last synced state
 *************************************************************************************/
healingWoundSteps.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering healingWoundSteps.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to healingWoundSteps's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
healingWoundSteps.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    healingWoundSteps.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
healingWoundSteps.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    var wcs = [];
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering healingWoundSteps.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering healingWoundSteps.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether healingWoundSteps's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
healingWoundSteps.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  healingWoundSteps.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    healingWoundSteps.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
healingWoundSteps.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    var wcs = [];
    var flag;
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering healingWoundSteps.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether healingWoundSteps's record  
 * with given primary key is pending for upload
 *************************************************************************************/
healingWoundSteps.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  healingWoundSteps.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    healingWoundSteps.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
healingWoundSteps.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = healingWoundSteps.getTableName();
    var wcs = [];
    var flag;
    if (healingWoundSteps.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering healingWoundSteps.isRecordPendingForUpload->successcallback function");
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
 * Retrieves instances of healingWoundSubSteps related to healingWoundSteps
 * with given $relationship.getTargetObjectAttribute() from local database.
 *************************************************************************************/
healingWoundSteps.prototype.gethealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.prototype.gethealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber function");
    var pks = this.getPKTable();
    healingWoundSteps.gethealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber(pks, successcallback, errorcallback);
};
healingWoundSteps.gethealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.gethealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.gethealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber", "relationship", errorcallback)) {
        return;
    }

    function healingWoundSteps_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey_0 = res[0].patientUuid;
            wcs.push({
                key: "patientUuid",
                value: targetKey_0
            });
            var targetKey_1 = res[0].docEntityId;
            wcs.push({
                key: "docEntityId",
                value: targetKey_1
            });
            var targetKey_2 = res[0].woundNumber;
            wcs.push({
                key: "woundNumber",
                value: targetKey_2
            });
            var targetKey_3 = res[0].stepNumber;
            wcs.push({
                key: "stepNumber",
                value: targetKey_3
            });
            var tbname = "healingWoundSubSteps"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, healingWoundSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
            }
            kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback);
            return;
        }
    }

    function mySuccesscallback(res) {
        var objMap = [];
        if (res !== null) {
            for (var i in res) {
                var obj = new healingWoundSubSteps();
                obj.accessToken = res[i].accessToken;
                obj.deleted = res[i].deleted;
                obj.docEntityId = res[i].docEntityId;
                obj.facilities = res[i].facilities;
                obj.lastSyncTime = res[i].lastSyncTime;
                obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
                obj.lastUpdatedTime = res[i].lastUpdatedTime;
                obj.patientUuid = res[i].patientUuid;
                obj.woundNumber = res[i].woundNumber;
                obj.subStepDescId = res[i].subStepDescId;
                obj.subStepDesc = res[i].subStepDesc;
                obj.subStepDesc_Server = res[i].subStepDesc_Server;
                obj.lastUpdatedByUser_Server = res[i].lastUpdatedByUser_Server;
                obj.lastUpdatedTime_Server = res[i].lastUpdatedTime_Server;
                obj.isClientWins = res[i].isClientWins;
                obj.conflictStatus = res[i].conflictStatus;
                obj.stepNumber = res[i].stepNumber;
                obj.encounterId = res[i].encounterId;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    healingWoundSteps.getAllDetailsByPK(pks, healingWoundSteps_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of healingWoundSubSteps related to healingWoundSteps
 * with given ${displayTargetAttribute} from local database.
 *************************************************************************************/
healingWoundSteps.prototype.getCountOfhealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber = function(successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.prototype.getCountOfhealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber function");
    var pks = this.getPKTable();
    healingWoundSteps.getCountOfhealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber(pks, successcallback, errorcallback);
};
healingWoundSteps.getCountOfhealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.getCountOfhealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "healingWoundSteps.getCountOfhealingWoundSubStepsWithpatientUuidANDdocEntityIdANDwoundNumberANDstepNumber", "relationship", errorcallback)) {
        return;
    }

    function healingWoundSteps_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey_0 = res[0].patientUuid;
            targetAttributes.push("patientUuid");
            if (kony.type(targetKey_0) === "string") {
                wcs.push({
                    "patientUuid": "'" + targetKey_0 + "'"
                });
            } else {
                wcs.push({
                    "patientUuid": targetKey_0
                });
            }
            var targetKey_1 = res[0].docEntityId;
            targetAttributes.push("docEntityId");
            if (kony.type(targetKey_1) === "string") {
                wcs.push({
                    "docEntityId": "'" + targetKey_1 + "'"
                });
            } else {
                wcs.push({
                    "docEntityId": targetKey_1
                });
            }
            var targetKey_2 = res[0].woundNumber;
            targetAttributes.push("woundNumber");
            if (kony.type(targetKey_2) === "string") {
                wcs.push({
                    "woundNumber": "'" + targetKey_2 + "'"
                });
            } else {
                wcs.push({
                    "woundNumber": targetKey_2
                });
            }
            var targetKey_3 = res[0].stepNumber;
            targetAttributes.push("stepNumber");
            if (kony.type(targetKey_3) === "string") {
                wcs.push({
                    "stepNumber": "'" + targetKey_3 + "'"
                });
            } else {
                wcs.push({
                    "stepNumber": targetKey_3
                });
            }
            var wClause = "where ";
            var i;
            var len = wcs.length;
            for (i = 0; i < len; i++) {
                wClauseMap = wcs[i];
                wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
                if (i != len - 1) {
                    wClause += " AND "
                }
            }
            healingWoundSubSteps.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    healingWoundSteps.getAllDetailsByPK(pks, healingWoundSteps_successcallback, errorcallback);
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
healingWoundSteps.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering healingWoundSteps.removeCascade function");
    var tbname = healingWoundSteps.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("stepNumber");
        targetAttributes.push("stepNumber");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, healingWoundSubSteps.removeCascade, "healingWoundSubSteps", true, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
    }
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
healingWoundSteps.convertTableToObject = function(res) {
    sync.log.trace("Entering healingWoundSteps.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new healingWoundSteps();
            obj.accessToken = res[i].accessToken;
            obj.deleted = res[i].deleted;
            obj.docEntityId = res[i].docEntityId;
            obj.facilities = res[i].facilities;
            obj.lastSyncTime = res[i].lastSyncTime;
            obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
            obj.lastUpdatedTime = res[i].lastUpdatedTime;
            obj.patientUuid = res[i].patientUuid;
            obj.woundNumber = res[i].woundNumber;
            obj.stepNumber = res[i].stepNumber;
            obj.stepTitle = res[i].stepTitle;
            obj.cpgLinks = res[i].cpgLinks;
            obj.facilityId = res[i].facilityId;
            obj.encounterId = res[i].encounterId;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
healingWoundSteps.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering healingWoundSteps.filterAttributes function");
    var attributeTable = {};
    attributeTable.accessToken = "accessToken";
    attributeTable.deleted = "deleted";
    attributeTable.docEntityId = "docEntityId";
    attributeTable.facilities = "facilities";
    attributeTable.lastSyncTime = "lastSyncTime";
    attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
    attributeTable.patientUuid = "patientUuid";
    attributeTable.woundNumber = "woundNumber";
    attributeTable.stepNumber = "stepNumber";
    attributeTable.stepTitle = "stepTitle";
    attributeTable.cpgLinks = "cpgLinks";
    attributeTable.facilityId = "facilityId";
    attributeTable.encounterId = "encounterId";
    var PKTable = {};
    PKTable.docEntityId = {}
    PKTable.docEntityId.name = "docEntityId";
    PKTable.docEntityId.isAutoGen = false;
    PKTable.patientUuid = {}
    PKTable.patientUuid.name = "patientUuid";
    PKTable.patientUuid.isAutoGen = false;
    PKTable.woundNumber = {}
    PKTable.woundNumber.name = "woundNumber";
    PKTable.woundNumber.isAutoGen = false;
    PKTable.stepNumber = {}
    PKTable.stepNumber.name = "stepNumber";
    PKTable.stepNumber.isAutoGen = false;
    PKTable.facilityId = {}
    PKTable.facilityId.name = "facilityId";
    PKTable.facilityId.isAutoGen = false;
    PKTable.encounterId = {}
    PKTable.encounterId.name = "encounterId";
    PKTable.encounterId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject healingWoundSteps. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject healingWoundSteps. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject healingWoundSteps. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
healingWoundSteps.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering healingWoundSteps.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = healingWoundSteps.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
healingWoundSteps.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering healingWoundSteps.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.accessToken = this.accessToken;
    valuesTable.deleted = this.deleted;
    if (isInsert === true) {
        valuesTable.docEntityId = this.docEntityId;
    }
    valuesTable.facilities = this.facilities;
    valuesTable.lastSyncTime = this.lastSyncTime;
    valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
    if (isInsert === true) {
        valuesTable.patientUuid = this.patientUuid;
    }
    if (isInsert === true) {
        valuesTable.woundNumber = this.woundNumber;
    }
    if (isInsert === true) {
        valuesTable.stepNumber = this.stepNumber;
    }
    valuesTable.stepTitle = this.stepTitle;
    valuesTable.cpgLinks = this.cpgLinks;
    if (isInsert === true) {
        valuesTable.facilityId = this.facilityId;
    }
    if (isInsert === true) {
        valuesTable.encounterId = this.encounterId;
    }
    return valuesTable;
};
healingWoundSteps.prototype.getPKTable = function() {
    sync.log.trace("Entering healingWoundSteps.prototype.getPKTable function");
    var pkTable = {};
    pkTable.docEntityId = {
        key: "docEntityId",
        value: this.docEntityId
    };
    pkTable.patientUuid = {
        key: "patientUuid",
        value: this.patientUuid
    };
    pkTable.woundNumber = {
        key: "woundNumber",
        value: this.woundNumber
    };
    pkTable.stepNumber = {
        key: "stepNumber",
        value: this.stepNumber
    };
    pkTable.facilityId = {
        key: "facilityId",
        value: this.facilityId
    };
    pkTable.encounterId = {
        key: "encounterId",
        value: this.encounterId
    };
    return pkTable;
};
healingWoundSteps.getPKTable = function() {
    sync.log.trace("Entering healingWoundSteps.getPKTable function");
    var pkTable = [];
    pkTable.push("docEntityId");
    pkTable.push("patientUuid");
    pkTable.push("woundNumber");
    pkTable.push("stepNumber");
    pkTable.push("facilityId");
    pkTable.push("encounterId");
    return pkTable;
};
healingWoundSteps.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering healingWoundSteps.pkCheck function");
    var wc = [];
    if (!kony.sync.isNull(pks.docEntityId)) {
        if (!kony.sync.isNull(pks.docEntityId.value)) {
            wc.key = "docEntityId";
            wc.value = pks.docEntityId.value;
        } else {
            wc.key = "docEntityId";
            wc.value = pks.docEntityId;
        }
    } else {
        sync.log.error("Primary Key docEntityId not specified in " + opName + " an item in healingWoundSteps");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("docEntityId", opName, "healingWoundSteps")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.patientUuid)) {
        if (!kony.sync.isNull(pks.patientUuid.value)) {
            wc.key = "patientUuid";
            wc.value = pks.patientUuid.value;
        } else {
            wc.key = "patientUuid";
            wc.value = pks.patientUuid;
        }
    } else {
        sync.log.error("Primary Key patientUuid not specified in " + opName + " an item in healingWoundSteps");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("patientUuid", opName, "healingWoundSteps")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.woundNumber)) {
        if (!kony.sync.isNull(pks.woundNumber.value)) {
            wc.key = "woundNumber";
            wc.value = pks.woundNumber.value;
        } else {
            wc.key = "woundNumber";
            wc.value = pks.woundNumber;
        }
    } else {
        sync.log.error("Primary Key woundNumber not specified in " + opName + " an item in healingWoundSteps");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("woundNumber", opName, "healingWoundSteps")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.stepNumber)) {
        if (!kony.sync.isNull(pks.stepNumber.value)) {
            wc.key = "stepNumber";
            wc.value = pks.stepNumber.value;
        } else {
            wc.key = "stepNumber";
            wc.value = pks.stepNumber;
        }
    } else {
        sync.log.error("Primary Key stepNumber not specified in " + opName + " an item in healingWoundSteps");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("stepNumber", opName, "healingWoundSteps")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.facilityId)) {
        if (!kony.sync.isNull(pks.facilityId.value)) {
            wc.key = "facilityId";
            wc.value = pks.facilityId.value;
        } else {
            wc.key = "facilityId";
            wc.value = pks.facilityId;
        }
    } else {
        sync.log.error("Primary Key facilityId not specified in " + opName + " an item in healingWoundSteps");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId", opName, "healingWoundSteps")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.encounterId)) {
        if (!kony.sync.isNull(pks.encounterId.value)) {
            wc.key = "encounterId";
            wc.value = pks.encounterId.value;
        } else {
            wc.key = "encounterId";
            wc.value = pks.encounterId;
        }
    } else {
        sync.log.error("Primary Key encounterId not specified in " + opName + " an item in healingWoundSteps");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("encounterId", opName, "healingWoundSteps")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
healingWoundSteps.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.validateNull function");
    return true;
};
healingWoundSteps.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering healingWoundSteps.validateNullInsert function");
    return true;
};
healingWoundSteps.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering healingWoundSteps.getRelationshipMap function");
    var r1 = {};
    r1 = {};
    r1.sourceAttribute = [];
    r1.foreignKeyAttribute = [];
    r1.targetAttributeValue = [];
    if (!kony.sync.isNullOrUndefined(valuestable.patientUuid)) {
        r1.sourceAttribute.push("patientUuid");
        r1.foreignKeyAttribute.push("patientUuid");
        r1.targetAttributeValue.push("'" + valuestable.patientUuid + "'");
    }
    if (!kony.sync.isNullOrUndefined(valuestable.docEntityId)) {
        r1.sourceAttribute.push("docEntityId");
        r1.foreignKeyAttribute.push("docEntityId");
        r1.targetAttributeValue.push("'" + valuestable.docEntityId + "'");
    }
    if (!kony.sync.isNullOrUndefined(valuestable.woundNumber)) {
        r1.sourceAttribute.push("woundNumber");
        r1.foreignKeyAttribute.push("woundNumber");
        r1.targetAttributeValue.push("'" + valuestable.woundNumber + "'");
    }
    if (r1.targetAttributeValue.length > 0) {
        if (relationshipMap.healingWounds === undefined) {
            relationshipMap.healingWounds = [];
        }
        relationshipMap.healingWounds.push(r1);
    }
    return relationshipMap;
};
healingWoundSteps.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
healingWoundSteps.getTableName = function() {
    return "healingWoundSteps";
};
// **********************************End healingWoundSteps's helper methods************************