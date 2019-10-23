//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:29 UTC 2019patientWounds2*******************
// **********************************Start patientWounds2's helper methods************************
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
 * Creates new patientWounds2
 *************************************************************************************/
com.healogics.offline.patientWounds2 = function() {
    this.deleted = null;
    this.facilityId = null;
    this.lastSyncTime = null;
    this.lastUpdatedByUser = null;
    this.lastUpdatedTimeStamp = null;
    this.patientId = null;
    this.timestamp = null;
    this.woundId = null;
    this.woundLabel = null;
    this.patientEncounterDetails = null;
    this.markForUpload = true;
};
com.healogics.offline.patientWounds2.prototype = {
    get deleted() {
        return this._deleted;
    },
    set deleted(val) {
        this._deleted = val;
    },
    get facilityId() {
        return this._facilityId;
    },
    set facilityId(val) {
        this._facilityId = val;
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
    get lastUpdatedTimeStamp() {
        return this._lastUpdatedTimeStamp;
    },
    set lastUpdatedTimeStamp(val) {
        this._lastUpdatedTimeStamp = val;
    },
    get patientId() {
        return this._patientId;
    },
    set patientId(val) {
        this._patientId = val;
    },
    get timestamp() {
        return this._timestamp;
    },
    set timestamp(val) {
        this._timestamp = val;
    },
    get woundId() {
        return this._woundId;
    },
    set woundId(val) {
        this._woundId = val;
    },
    get woundLabel() {
        return this._woundLabel;
    },
    set woundLabel(val) {
        this._woundLabel = val;
    },
    get patientEncounterDetails() {
        return this._patientEncounterDetails;
    },
    set patientEncounterDetails(val) {
        this._patientEncounterDetails = val;
    },
};
/************************************************************************************
 * Retrieves all instances of patientWounds2 SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "deleted";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "facilityId";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.healogics.offline.patientWounds2.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.healogics.offline.patientWounds2.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    orderByMap = kony.sync.formOrderByClause("patientWounds2", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.getAll->successcallback");
        successcallback(com.healogics.offline.patientWounds2.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of patientWounds2 present in local database.
 *************************************************************************************/
com.healogics.offline.patientWounds2.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getAllCount function");
    com.healogics.offline.patientWounds2.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of patientWounds2 using where clause in the local Database
 *************************************************************************************/
com.healogics.offline.patientWounds2.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.getCount->successcallback");
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
 * Creates a new instance of patientWounds2 in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.patientWounds2.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.healogics.offline.patientWounds2.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.patientWounds2.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogics.offline.patientWounds2.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "patientWounds2", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogics.offline.patientWounds2.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.healogics.offline.patientWounds2.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "facilityId=" + valuestable.facilityId;
        pks["facilityId"] = {
            key: "facilityId",
            value: valuestable.facilityId
        };
        errMsg = errMsg + ", patientId=" + valuestable.patientId;
        pks["patientId"] = {
            key: "patientId",
            value: valuestable.patientId
        };
        errMsg = errMsg + ", woundId=" + valuestable.woundId;
        pks["woundId"] = {
            key: "woundId",
            value: valuestable.woundId
        };
        com.healogics.offline.patientWounds2.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of patientWounds2 in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].facilityId = "facilityId_0";
 *		valuesArray[0].lastSyncTime = "lastSyncTime_0";
 *		valuesArray[0].lastUpdatedByUser = "lastUpdatedByUser_0";
 *		valuesArray[0].patientId = "patientId_0";
 *		valuesArray[0].timestamp = "timestamp_0";
 *		valuesArray[0].woundId = "woundId_0";
 *		valuesArray[0].woundLabel = "woundLabel_0";
 *		valuesArray[0].patientEncounterDetails = "patientEncounterDetails_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].facilityId = "facilityId_1";
 *		valuesArray[1].lastSyncTime = "lastSyncTime_1";
 *		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
 *		valuesArray[1].patientId = "patientId_1";
 *		valuesArray[1].timestamp = "timestamp_1";
 *		valuesArray[1].woundId = "woundId_1";
 *		valuesArray[1].woundLabel = "woundLabel_1";
 *		valuesArray[1].patientEncounterDetails = "patientEncounterDetails_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].facilityId = "facilityId_2";
 *		valuesArray[2].lastSyncTime = "lastSyncTime_2";
 *		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
 *		valuesArray[2].patientId = "patientId_2";
 *		valuesArray[2].timestamp = "timestamp_2";
 *		valuesArray[2].woundId = "woundId_2";
 *		valuesArray[2].woundLabel = "woundLabel_2";
 *		valuesArray[2].patientEncounterDetails = "patientEncounterDetails_2";
 *		com.healogics.offline.patientWounds2.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.healogics.offline.patientWounds2.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "patientWounds2", errorcallback, true) === false) {
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
                errMsg = "facilityId=" + valuestable.facilityId;
                pks["facilityId"] = {
                    key: "facilityId",
                    value: valuestable.facilityId
                };
                errMsg = errMsg + ", patientId=" + valuestable.patientId;
                pks["patientId"] = {
                    key: "patientId",
                    value: valuestable.patientId
                };
                errMsg = errMsg + ", woundId=" + valuestable.woundId;
                pks["woundId"] = {
                    key: "woundId",
                    value: valuestable.woundId
                };
                var wcs = [];
                if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.healogics.offline.patientWounds2.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.healogics.offline.patientWounds2.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.healogics.offline.patientWounds2.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates patientWounds2 using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.patientWounds2.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.healogics.offline.patientWounds2.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.patientWounds2.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogics.offline.patientWounds2.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "patientWounds2", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.healogics.offline.patientWounds2.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates patientWounds2(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.patientWounds2.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "patientWounds2", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogics.offline.patientWounds2.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogics.offline.patientWounds2.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.healogics.offline.patientWounds2.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogics.offline.patientWounds2.getPKTable());
    }
};
/************************************************************************************
 * Updates patientWounds2(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.lastSyncTime = "lastSyncTime_updated0";
 *		inputArray[0].changeSet.lastUpdatedByUser = "lastUpdatedByUser_updated0";
 *		inputArray[0].changeSet.timestamp = "timestamp_updated0";
 *		inputArray[0].changeSet.woundLabel = "woundLabel_updated0";
 *		inputArray[0].whereClause = "where facilityId = '0'";
 *		inputArray[0].whereClause = "where patientId = '0'";
 *		inputArray[0].whereClause = "where woundId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.lastSyncTime = "lastSyncTime_updated1";
 *		inputArray[1].changeSet.lastUpdatedByUser = "lastUpdatedByUser_updated1";
 *		inputArray[1].changeSet.timestamp = "timestamp_updated1";
 *		inputArray[1].changeSet.woundLabel = "woundLabel_updated1";
 *		inputArray[1].whereClause = "where facilityId = '1'";
 *		inputArray[1].whereClause = "where patientId = '1'";
 *		inputArray[1].whereClause = "where woundId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.lastSyncTime = "lastSyncTime_updated2";
 *		inputArray[2].changeSet.lastUpdatedByUser = "lastUpdatedByUser_updated2";
 *		inputArray[2].changeSet.timestamp = "timestamp_updated2";
 *		inputArray[2].changeSet.woundLabel = "woundLabel_updated2";
 *		inputArray[2].whereClause = "where facilityId = '2'";
 *		inputArray[2].whereClause = "where patientId = '2'";
 *		inputArray[2].whereClause = "where woundId = '2'";
 *		com.healogics.offline.patientWounds2.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.healogics.offline.patientWounds2.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "patientWounds2";
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
                if (kony.sync.attributeValidation(valuestable, "patientWounds2", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.healogics.offline.patientWounds2.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.healogics.offline.patientWounds2.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.healogics.offline.patientWounds2.getPKTable());
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
            sync.log.trace("Entering  com.healogics.offline.patientWounds2.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.healogics.offline.patientWounds2.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes patientWounds2 using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.patientWounds2.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.patientWounds2.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function patientWounds2TransactionCallback(tx) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.deleteByPK->patientWounds2_PKPresent successcallback");
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

    function patientWounds2ErrorCallback() {
        sync.log.error("Entering com.healogics.offline.patientWounds2.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function patientWounds2SuccessCallback() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.healogics.offline.patientWounds2.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, patientWounds2TransactionCallback, patientWounds2SuccessCallback, patientWounds2ErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes patientWounds2(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.healogics.offline.patientWounds2.remove("where facilityId like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.healogics.offline.patientWounds2.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function patientWounds2_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function patientWounds2_removeSuccess() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.remove->patientWounds2_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, patientWounds2_removeTransactioncallback, patientWounds2_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes patientWounds2 using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.patientWounds2.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.patientWounds2.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function patientWounds2TransactionCallback(tx) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.removeDeviceInstanceByPK -> patientWounds2TransactionCallback");
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

    function patientWounds2ErrorCallback() {
        sync.log.error("Entering com.healogics.offline.patientWounds2.removeDeviceInstanceByPK -> patientWounds2ErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function patientWounds2SuccessCallback() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.removeDeviceInstanceByPK -> patientWounds2SuccessCallback");
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
        sync.log.error("Entering com.healogics.offline.patientWounds2.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, patientWounds2TransactionCallback, patientWounds2SuccessCallback, patientWounds2ErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes patientWounds2(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogics.offline.patientWounds2.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function patientWounds2_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function patientWounds2_removeSuccess() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.remove->patientWounds2_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, patientWounds2_removeTransactioncallback, patientWounds2_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves patientWounds2 using primary key from the local Database. 
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.patientWounds2.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.patientWounds2.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    var wcs = [];
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.healogics.offline.patientWounds2.getAllDetailsByPK-> success callback function");
        successcallback(com.healogics.offline.patientWounds2.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves patientWounds2(s) using where clause from the local Database. 
 * e.g. com.healogics.offline.patientWounds2.find("where facilityId like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.healogics.offline.patientWounds2.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.patientWounds2.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of patientWounds2 with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.healogics.offline.patientWounds2.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.patientWounds2.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of patientWounds2 matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.patientWounds2.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
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
        sync.log.trace("Entering com.healogics.offline.patientWounds2.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.healogics.offline.patientWounds2.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.healogics.offline.patientWounds2.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of patientWounds2 pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.healogics.offline.patientWounds2.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
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
        sync.log.trace("Entering com.healogics.offline.patientWounds2.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.patientWounds2.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of patientWounds2 pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.healogics.offline.patientWounds2.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.patientWounds2.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of patientWounds2 deferred for upload.
 *************************************************************************************/
com.healogics.offline.patientWounds2.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
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
        sync.log.trace("Entering com.healogics.offline.patientWounds2.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.patientWounds2.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to patientWounds2 in local database to last synced state
 *************************************************************************************/
com.healogics.offline.patientWounds2.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to patientWounds2's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.patientWounds2.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.patientWounds2.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    var wcs = [];
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.patientWounds2.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogics.offline.patientWounds2.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether patientWounds2's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.patientWounds2.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.healogics.offline.patientWounds2.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.healogics.offline.patientWounds2.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    var wcs = [];
    var flag;
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogics.offline.patientWounds2.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether patientWounds2's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.healogics.offline.patientWounds2.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.patientWounds2.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.healogics.offline.patientWounds2.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.healogics.offline.patientWounds2.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.patientWounds2.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.patientWounds2.getTableName();
    var wcs = [];
    var flag;
    if (com.healogics.offline.patientWounds2.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogics.offline.patientWounds2.isRecordPendingForUpload->successcallback function");
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
com.healogics.offline.patientWounds2.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.removeCascade function");
    var tbname = com.healogics.offline.patientWounds2.getTableName();
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
com.healogics.offline.patientWounds2.convertTableToObject = function(res) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.healogics.offline.patientWounds2();
            obj.deleted = res[i].deleted;
            obj.facilityId = res[i].facilityId;
            obj.lastSyncTime = res[i].lastSyncTime;
            obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
            obj.lastUpdatedTimeStamp = res[i].lastUpdatedTimeStamp;
            obj.patientId = res[i].patientId;
            obj.timestamp = res[i].timestamp;
            obj.woundId = res[i].woundId;
            obj.woundLabel = res[i].woundLabel;
            obj.patientEncounterDetails = res[i].patientEncounterDetails;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.healogics.offline.patientWounds2.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.filterAttributes function");
    var attributeTable = {};
    attributeTable.facilityId = "facilityId";
    attributeTable.lastSyncTime = "lastSyncTime";
    attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
    attributeTable.patientId = "patientId";
    attributeTable.timestamp = "timestamp";
    attributeTable.woundId = "woundId";
    attributeTable.woundLabel = "woundLabel";
    attributeTable.patientEncounterDetails = "patientEncounterDetails";
    var PKTable = {};
    PKTable.facilityId = {}
    PKTable.facilityId.name = "facilityId";
    PKTable.facilityId.isAutoGen = false;
    PKTable.patientId = {}
    PKTable.patientId.name = "patientId";
    PKTable.patientId.isAutoGen = false;
    PKTable.woundId = {}
    PKTable.woundId.name = "woundId";
    PKTable.woundId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject patientWounds2. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject patientWounds2. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject patientWounds2. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.healogics.offline.patientWounds2.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.healogics.offline.patientWounds2.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.healogics.offline.patientWounds2.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.facilityId = this.facilityId;
    }
    valuesTable.lastSyncTime = this.lastSyncTime;
    valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
    if (isInsert === true) {
        valuesTable.patientId = this.patientId;
    }
    valuesTable.timestamp = this.timestamp;
    if (isInsert === true) {
        valuesTable.woundId = this.woundId;
    }
    valuesTable.woundLabel = this.woundLabel;
    valuesTable.patientEncounterDetails = this.patientEncounterDetails;
    return valuesTable;
};
com.healogics.offline.patientWounds2.prototype.getPKTable = function() {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.prototype.getPKTable function");
    var pkTable = {};
    pkTable.facilityId = {
        key: "facilityId",
        value: this.facilityId
    };
    pkTable.patientId = {
        key: "patientId",
        value: this.patientId
    };
    pkTable.woundId = {
        key: "woundId",
        value: this.woundId
    };
    return pkTable;
};
com.healogics.offline.patientWounds2.getPKTable = function() {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getPKTable function");
    var pkTable = [];
    pkTable.push("facilityId");
    pkTable.push("patientId");
    pkTable.push("woundId");
    return pkTable;
};
com.healogics.offline.patientWounds2.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.pkCheck function");
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
        sync.log.error("Primary Key facilityId not specified in " + opName + " an item in patientWounds2");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId", opName, "patientWounds2")));
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
        sync.log.error("Primary Key patientId not specified in " + opName + " an item in patientWounds2");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("patientId", opName, "patientWounds2")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.woundId)) {
        if (!kony.sync.isNull(pks.woundId.value)) {
            wc.key = "woundId";
            wc.value = pks.woundId.value;
        } else {
            wc.key = "woundId";
            wc.value = pks.woundId;
        }
    } else {
        sync.log.error("Primary Key woundId not specified in " + opName + " an item in patientWounds2");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("woundId", opName, "patientWounds2")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.healogics.offline.patientWounds2.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.validateNull function");
    return true;
};
com.healogics.offline.patientWounds2.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.validateNullInsert function");
    return true;
};
com.healogics.offline.patientWounds2.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.healogics.offline.patientWounds2.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.healogics.offline.patientWounds2.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.healogics.offline.patientWounds2.getTableName = function() {
    return "patientWounds2";
};
// **********************************End patientWounds2's helper methods************************