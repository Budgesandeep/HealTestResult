//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Mon May 29 10:49:10 UTC 2017tasks*******************
// **********************************Start tasks's helper methods************************
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
if (typeof(com.healogic) === "undefined") {
    com.healogic = {};
}
if (typeof(com.healogic.offline) === "undefined") {
    com.healogic.offline = {};
}
/************************************************************************************
 * Creates new tasks
 *************************************************************************************/
com.healogic.offline.tasks = function() {
    this.action = null;
    this.completedDate = null;
    this.createDate = null;
    this.deleted = null;
    this.dueDate = null;
    this.facilityId = null;
    this.followstepdesc = null;
    this.lastUpdatedBy = null;
    this.lastUpdatedTimestamp = null;
    this.patientName = null;
    this.patientUuid = null;
    this.taskDesc = null;
    this.taskStatus = null;
    this.taskUuid = null;
    this.timestamp = null;
    this.woundNo = null;
    this.userID = null;
    this.markForUpload = true;
};
com.healogic.offline.tasks.prototype = {
    get action() {
        return this._action;
    },
    set action(val) {
        this._action = val;
    },
    get completedDate() {
        return this._completedDate;
    },
    set completedDate(val) {
        this._completedDate = val;
    },
    get createDate() {
        return this._createDate;
    },
    set createDate(val) {
        this._createDate = val;
    },
    get deleted() {
        return this._deleted;
    },
    set deleted(val) {
        this._deleted = val;
    },
    get dueDate() {
        return this._dueDate;
    },
    set dueDate(val) {
        this._dueDate = val;
    },
    get facilityId() {
        return this._facilityId;
    },
    set facilityId(val) {
        this._facilityId = val;
    },
    get followstepdesc() {
        return this._followstepdesc;
    },
    set followstepdesc(val) {
        this._followstepdesc = val;
    },
    get lastUpdatedBy() {
        return this._lastUpdatedBy;
    },
    set lastUpdatedBy(val) {
        this._lastUpdatedBy = val;
    },
    get lastUpdatedTimestamp() {
        return this._lastUpdatedTimestamp;
    },
    set lastUpdatedTimestamp(val) {
        this._lastUpdatedTimestamp = val;
    },
    get patientName() {
        return this._patientName;
    },
    set patientName(val) {
        this._patientName = val;
    },
    get patientUuid() {
        return this._patientUuid;
    },
    set patientUuid(val) {
        this._patientUuid = val;
    },
    get taskDesc() {
        return this._taskDesc;
    },
    set taskDesc(val) {
        this._taskDesc = val;
    },
    get taskStatus() {
        return this._taskStatus;
    },
    set taskStatus(val) {
        this._taskStatus = val;
    },
    get taskUuid() {
        return this._taskUuid;
    },
    set taskUuid(val) {
        this._taskUuid = val;
    },
    get timestamp() {
        return this._timestamp;
    },
    set timestamp(val) {
        this._timestamp = val;
    },
    get woundNo() {
        return this._woundNo;
    },
    set woundNo(val) {
        this._woundNo = val;
    },
    get userID() {
        return this._userID;
    },
    set userID(val) {
        this._userID = val;
    },
};
/************************************************************************************
 * Retrieves all instances of tasks SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "action";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "completedDate";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.healogic.offline.tasks.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.healogic.offline.tasks.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.healogic.offline.tasks.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    orderByMap = kony.sync.formOrderByClause("tasks", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogic.offline.tasks.getAll->successcallback");
        successcallback(com.healogic.offline.tasks.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of tasks present in local database.
 *************************************************************************************/
com.healogic.offline.tasks.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.getAllCount function");
    com.healogic.offline.tasks.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of tasks using where clause in the local Database
 *************************************************************************************/
com.healogic.offline.tasks.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogic.offline.tasks.getCount->successcallback");
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
 * Creates a new instance of tasks in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.tasks.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.tasks.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.healogic.offline.tasks.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.tasks.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogic.offline.tasks.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "tasks", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogic.offline.tasks.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.healogic.offline.tasks.getRelationshipMap(relationshipMap, valuestable);
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
        errMsg = errMsg + ", taskUuid=" + valuestable.taskUuid;
        pks["taskUuid"] = {
            key: "taskUuid",
            value: valuestable.taskUuid
        };
        errMsg = errMsg + ", userID=" + valuestable.userID;
        pks["userID"] = {
            key: "userID",
            value: valuestable.userID
        };
        com.healogic.offline.tasks.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of tasks in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].action = "action_0";
 *		valuesArray[0].completedDate = "completedDate_0";
 *		valuesArray[0].createDate = "createDate_0";
 *		valuesArray[0].dueDate = "dueDate_0";
 *		valuesArray[0].facilityId = "facilityId_0";
 *		valuesArray[0].followstepdesc = "followstepdesc_0";
 *		valuesArray[0].lastUpdatedBy = "lastUpdatedBy_0";
 *		valuesArray[0].patientName = "patientName_0";
 *		valuesArray[0].patientUuid = "patientUuid_0";
 *		valuesArray[0].taskDesc = "taskDesc_0";
 *		valuesArray[0].taskStatus = "taskStatus_0";
 *		valuesArray[0].taskUuid = "taskUuid_0";
 *		valuesArray[0].timestamp = "timestamp_0";
 *		valuesArray[0].woundNo = "woundNo_0";
 *		valuesArray[0].userID = "userID_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].action = "action_1";
 *		valuesArray[1].completedDate = "completedDate_1";
 *		valuesArray[1].createDate = "createDate_1";
 *		valuesArray[1].dueDate = "dueDate_1";
 *		valuesArray[1].facilityId = "facilityId_1";
 *		valuesArray[1].followstepdesc = "followstepdesc_1";
 *		valuesArray[1].lastUpdatedBy = "lastUpdatedBy_1";
 *		valuesArray[1].patientName = "patientName_1";
 *		valuesArray[1].patientUuid = "patientUuid_1";
 *		valuesArray[1].taskDesc = "taskDesc_1";
 *		valuesArray[1].taskStatus = "taskStatus_1";
 *		valuesArray[1].taskUuid = "taskUuid_1";
 *		valuesArray[1].timestamp = "timestamp_1";
 *		valuesArray[1].woundNo = "woundNo_1";
 *		valuesArray[1].userID = "userID_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].action = "action_2";
 *		valuesArray[2].completedDate = "completedDate_2";
 *		valuesArray[2].createDate = "createDate_2";
 *		valuesArray[2].dueDate = "dueDate_2";
 *		valuesArray[2].facilityId = "facilityId_2";
 *		valuesArray[2].followstepdesc = "followstepdesc_2";
 *		valuesArray[2].lastUpdatedBy = "lastUpdatedBy_2";
 *		valuesArray[2].patientName = "patientName_2";
 *		valuesArray[2].patientUuid = "patientUuid_2";
 *		valuesArray[2].taskDesc = "taskDesc_2";
 *		valuesArray[2].taskStatus = "taskStatus_2";
 *		valuesArray[2].taskUuid = "taskUuid_2";
 *		valuesArray[2].timestamp = "timestamp_2";
 *		valuesArray[2].woundNo = "woundNo_2";
 *		valuesArray[2].userID = "userID_2";
 *		com.healogic.offline.tasks.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.healogic.offline.tasks.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.tasks.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "tasks", errorcallback, true) === false) {
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
                errMsg = errMsg + ", taskUuid=" + valuestable.taskUuid;
                pks["taskUuid"] = {
                    key: "taskUuid",
                    value: valuestable.taskUuid
                };
                errMsg = errMsg + ", userID=" + valuestable.userID;
                pks["userID"] = {
                    key: "userID",
                    value: valuestable.userID
                };
                var wcs = [];
                if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.healogic.offline.tasks.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.healogic.offline.tasks.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.healogic.offline.tasks.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates tasks using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.tasks.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.tasks.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.healogic.offline.tasks.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.tasks.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogic.offline.tasks.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "tasks", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.healogic.offline.tasks.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates tasks(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.tasks.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.tasks.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "tasks", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogic.offline.tasks.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogic.offline.tasks.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.healogic.offline.tasks.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogic.offline.tasks.getPKTable());
    }
};
/************************************************************************************
 * Updates tasks(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.action = "action_updated0";
 *		inputArray[0].changeSet.completedDate = "completedDate_updated0";
 *		inputArray[0].changeSet.createDate = "createDate_updated0";
 *		inputArray[0].changeSet.dueDate = "dueDate_updated0";
 *		inputArray[0].whereClause = "where facilityId = '0'";
 *		inputArray[0].whereClause = "where taskUuid = '0'";
 *		inputArray[0].whereClause = "where userID = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.action = "action_updated1";
 *		inputArray[1].changeSet.completedDate = "completedDate_updated1";
 *		inputArray[1].changeSet.createDate = "createDate_updated1";
 *		inputArray[1].changeSet.dueDate = "dueDate_updated1";
 *		inputArray[1].whereClause = "where facilityId = '1'";
 *		inputArray[1].whereClause = "where taskUuid = '1'";
 *		inputArray[1].whereClause = "where userID = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.action = "action_updated2";
 *		inputArray[2].changeSet.completedDate = "completedDate_updated2";
 *		inputArray[2].changeSet.createDate = "createDate_updated2";
 *		inputArray[2].changeSet.dueDate = "dueDate_updated2";
 *		inputArray[2].whereClause = "where facilityId = '2'";
 *		inputArray[2].whereClause = "where taskUuid = '2'";
 *		inputArray[2].whereClause = "where userID = '2'";
 *		com.healogic.offline.tasks.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.healogic.offline.tasks.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.healogic.offline.tasks.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "tasks";
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
                if (kony.sync.attributeValidation(valuestable, "tasks", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.healogic.offline.tasks.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.healogic.offline.tasks.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.healogic.offline.tasks.getPKTable());
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
            sync.log.trace("Entering  com.healogic.offline.tasks.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.healogic.offline.tasks.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes tasks using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.healogic.offline.tasks.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.tasks.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.tasks.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.tasks.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function tasksTransactionCallback(tx) {
        sync.log.trace("Entering com.healogic.offline.tasks.deleteByPK->tasks_PKPresent successcallback");
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

    function tasksErrorCallback() {
        sync.log.error("Entering com.healogic.offline.tasks.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function tasksSuccessCallback() {
        sync.log.trace("Entering com.healogic.offline.tasks.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.healogic.offline.tasks.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, tasksTransactionCallback, tasksSuccessCallback, tasksErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes tasks(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.healogic.offline.tasks.remove("where action like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.healogic.offline.tasks.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.tasks.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function tasks_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function tasks_removeSuccess() {
        sync.log.trace("Entering com.healogic.offline.tasks.remove->tasks_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogic.offline.tasks.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogic.offline.tasks.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, tasks_removeTransactioncallback, tasks_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes tasks using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogic.offline.tasks.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.tasks.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.tasks.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function tasksTransactionCallback(tx) {
        sync.log.trace("Entering com.healogic.offline.tasks.removeDeviceInstanceByPK -> tasksTransactionCallback");
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

    function tasksErrorCallback() {
        sync.log.error("Entering com.healogic.offline.tasks.removeDeviceInstanceByPK -> tasksErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function tasksSuccessCallback() {
        sync.log.trace("Entering com.healogic.offline.tasks.removeDeviceInstanceByPK -> tasksSuccessCallback");
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
        sync.log.error("Entering com.healogic.offline.tasks.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, tasksTransactionCallback, tasksSuccessCallback, tasksErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes tasks(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogic.offline.tasks.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function tasks_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function tasks_removeSuccess() {
        sync.log.trace("Entering com.healogic.offline.tasks.remove->tasks_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogic.offline.tasks.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogic.offline.tasks.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, tasks_removeTransactioncallback, tasks_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves tasks using primary key from the local Database. 
 *************************************************************************************/
com.healogic.offline.tasks.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.tasks.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.tasks.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    var wcs = [];
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.healogic.offline.tasks.getAllDetailsByPK-> success callback function");
        successcallback(com.healogic.offline.tasks.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves tasks(s) using where clause from the local Database. 
 * e.g. com.healogic.offline.tasks.find("where action like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.healogic.offline.tasks.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.tasks.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of tasks with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.tasks.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.healogic.offline.tasks.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogic.offline.tasks.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of tasks matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.tasks.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.tasks.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.healogic.offline.tasks.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.healogic.offline.tasks.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of tasks pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.healogic.offline.tasks.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.tasks.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.tasks.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of tasks pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.healogic.offline.tasks.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.tasks.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.tasks.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of tasks deferred for upload.
 *************************************************************************************/
com.healogic.offline.tasks.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.tasks.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.tasks.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to tasks in local database to last synced state
 *************************************************************************************/
com.healogic.offline.tasks.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.tasks.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to tasks's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.healogic.offline.tasks.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.tasks.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.tasks.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    var wcs = [];
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.tasks.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogic.offline.tasks.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether tasks's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.healogic.offline.tasks.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.tasks.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.healogic.offline.tasks.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.healogic.offline.tasks.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    var wcs = [];
    var flag;
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogic.offline.tasks.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether tasks's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.healogic.offline.tasks.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.tasks.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.healogic.offline.tasks.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.healogic.offline.tasks.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.tasks.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.tasks.getTableName();
    var wcs = [];
    var flag;
    if (com.healogic.offline.tasks.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogic.offline.tasks.isRecordPendingForUpload->successcallback function");
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
com.healogic.offline.tasks.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.healogic.offline.tasks.removeCascade function");
    var tbname = com.healogic.offline.tasks.getTableName();
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
com.healogic.offline.tasks.convertTableToObject = function(res) {
    sync.log.trace("Entering com.healogic.offline.tasks.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.healogic.offline.tasks();
            obj.action = res[i].action;
            obj.completedDate = res[i].completedDate;
            obj.createDate = res[i].createDate;
            obj.deleted = res[i].deleted;
            obj.dueDate = res[i].dueDate;
            obj.facilityId = res[i].facilityId;
            obj.followstepdesc = res[i].followstepdesc;
            obj.lastUpdatedBy = res[i].lastUpdatedBy;
            obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
            obj.patientName = res[i].patientName;
            obj.patientUuid = res[i].patientUuid;
            obj.taskDesc = res[i].taskDesc;
            obj.taskStatus = res[i].taskStatus;
            obj.taskUuid = res[i].taskUuid;
            obj.timestamp = res[i].timestamp;
            obj.woundNo = res[i].woundNo;
            obj.userID = res[i].userID;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.healogic.offline.tasks.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.healogic.offline.tasks.filterAttributes function");
    var attributeTable = {};
    attributeTable.action = "action";
    attributeTable.completedDate = "completedDate";
    attributeTable.createDate = "createDate";
    attributeTable.dueDate = "dueDate";
    attributeTable.facilityId = "facilityId";
    attributeTable.followstepdesc = "followstepdesc";
    attributeTable.lastUpdatedBy = "lastUpdatedBy";
    attributeTable.patientName = "patientName";
    attributeTable.patientUuid = "patientUuid";
    attributeTable.taskDesc = "taskDesc";
    attributeTable.taskStatus = "taskStatus";
    attributeTable.taskUuid = "taskUuid";
    attributeTable.timestamp = "timestamp";
    attributeTable.woundNo = "woundNo";
    attributeTable.userID = "userID";
    var PKTable = {};
    PKTable.facilityId = {}
    PKTable.facilityId.name = "facilityId";
    PKTable.facilityId.isAutoGen = false;
    PKTable.taskUuid = {}
    PKTable.taskUuid.name = "taskUuid";
    PKTable.taskUuid.isAutoGen = false;
    PKTable.userID = {}
    PKTable.userID.name = "userID";
    PKTable.userID.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject tasks. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject tasks. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject tasks. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.healogic.offline.tasks.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.healogic.offline.tasks.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.healogic.offline.tasks.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.healogic.offline.tasks.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.healogic.offline.tasks.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.action = this.action;
    valuesTable.completedDate = this.completedDate;
    valuesTable.createDate = this.createDate;
    valuesTable.dueDate = this.dueDate;
    if (isInsert === true) {
        valuesTable.facilityId = this.facilityId;
    }
    valuesTable.followstepdesc = this.followstepdesc;
    valuesTable.lastUpdatedBy = this.lastUpdatedBy;
    valuesTable.patientName = this.patientName;
    valuesTable.patientUuid = this.patientUuid;
    valuesTable.taskDesc = this.taskDesc;
    valuesTable.taskStatus = this.taskStatus;
    if (isInsert === true) {
        valuesTable.taskUuid = this.taskUuid;
    }
    valuesTable.timestamp = this.timestamp;
    valuesTable.woundNo = this.woundNo;
    if (isInsert === true) {
        valuesTable.userID = this.userID;
    }
    return valuesTable;
};
com.healogic.offline.tasks.prototype.getPKTable = function() {
    sync.log.trace("Entering com.healogic.offline.tasks.prototype.getPKTable function");
    var pkTable = {};
    pkTable.facilityId = {
        key: "facilityId",
        value: this.facilityId
    };
    pkTable.taskUuid = {
        key: "taskUuid",
        value: this.taskUuid
    };
    pkTable.userID = {
        key: "userID",
        value: this.userID
    };
    return pkTable;
};
com.healogic.offline.tasks.getPKTable = function() {
    sync.log.trace("Entering com.healogic.offline.tasks.getPKTable function");
    var pkTable = [];
    pkTable.push("facilityId");
    pkTable.push("taskUuid");
    pkTable.push("userID");
    return pkTable;
};
com.healogic.offline.tasks.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.healogic.offline.tasks.pkCheck function");
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
        sync.log.error("Primary Key facilityId not specified in " + opName + " an item in tasks");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId", opName, "tasks")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.taskUuid)) {
        if (!kony.sync.isNull(pks.taskUuid.value)) {
            wc.key = "taskUuid";
            wc.value = pks.taskUuid.value;
        } else {
            wc.key = "taskUuid";
            wc.value = pks.taskUuid;
        }
    } else {
        sync.log.error("Primary Key taskUuid not specified in " + opName + " an item in tasks");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("taskUuid", opName, "tasks")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.userID)) {
        if (!kony.sync.isNull(pks.userID.value)) {
            wc.key = "userID";
            wc.value = pks.userID.value;
        } else {
            wc.key = "userID";
            wc.value = pks.userID;
        }
    } else {
        sync.log.error("Primary Key userID not specified in " + opName + " an item in tasks");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("userID", opName, "tasks")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.healogic.offline.tasks.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.validateNull function");
    return true;
};
com.healogic.offline.tasks.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.tasks.validateNullInsert function");
    return true;
};
com.healogic.offline.tasks.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.healogic.offline.tasks.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.healogic.offline.tasks.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.healogic.offline.tasks.getTableName = function() {
    return "tasks";
};
// **********************************End tasks's helper methods************************