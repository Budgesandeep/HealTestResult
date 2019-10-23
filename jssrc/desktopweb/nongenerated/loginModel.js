//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:27 UTC 2019login*******************
// **********************************Start login's helper methods************************
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
 * Creates new login
 *************************************************************************************/
com.healogics.offline.login = function() {
    this.accessToken = null;
    this.accessToken1 = null;
    this.firstName = null;
    this.lastLoginTime = null;
    this.lastName = null;
    this.password = null;
    this.role = null;
    this.roles = null;
    this.timestamp = null;
    this.userId = null;
    this.userName = null;
    this.lastLoginFacilityId = null;
    this.markForUpload = true;
};
com.healogics.offline.login.prototype = {
    get accessToken() {
        return this._accessToken;
    },
    set accessToken(val) {
        this._accessToken = val;
    },
    get accessToken1() {
        return this._accessToken1;
    },
    set accessToken1(val) {
        this._accessToken1 = val;
    },
    get firstName() {
        return this._firstName;
    },
    set firstName(val) {
        this._firstName = val;
    },
    get lastLoginTime() {
        return this._lastLoginTime;
    },
    set lastLoginTime(val) {
        this._lastLoginTime = val;
    },
    get lastName() {
        return this._lastName;
    },
    set lastName(val) {
        this._lastName = val;
    },
    get password() {
        return this._password;
    },
    set password(val) {
        this._password = val;
    },
    get role() {
        return this._role;
    },
    set role(val) {
        this._role = val;
    },
    get roles() {
        return this._roles;
    },
    set roles(val) {
        this._roles = val;
    },
    get timestamp() {
        return this._timestamp;
    },
    set timestamp(val) {
        this._timestamp = val;
    },
    get userId() {
        return this._userId;
    },
    set userId(val) {
        this._userId = val;
    },
    get userName() {
        return this._userName;
    },
    set userName(val) {
        this._userName = val;
    },
    get lastLoginFacilityId() {
        return this._lastLoginFacilityId;
    },
    set lastLoginFacilityId(val) {
        this._lastLoginFacilityId = val;
    },
};
/************************************************************************************
 * Retrieves all instances of login SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "accessToken";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "accessToken1";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.healogics.offline.login.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.healogics.offline.login.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.healogics.offline.login.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    orderByMap = kony.sync.formOrderByClause("login", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogics.offline.login.getAll->successcallback");
        successcallback(com.healogics.offline.login.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of login present in local database.
 *************************************************************************************/
com.healogics.offline.login.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getAllCount function");
    com.healogics.offline.login.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of login using where clause in the local Database
 *************************************************************************************/
com.healogics.offline.login.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogics.offline.login.getCount->successcallback");
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
 * Creates a new instance of login in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.login.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.login.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.healogics.offline.login.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.login.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogics.offline.login.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "login", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogics.offline.login.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.healogics.offline.login.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "userId=" + valuestable.userId;
        pks["userId"] = {
            key: "userId",
            value: valuestable.userId
        };
        com.healogics.offline.login.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of login in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].accessToken = "accessToken_0";
 *		valuesArray[0].accessToken1 = "accessToken1_0";
 *		valuesArray[0].firstName = "firstName_0";
 *		valuesArray[0].lastLoginTime = "lastLoginTime_0";
 *		valuesArray[0].lastName = "lastName_0";
 *		valuesArray[0].password = "password_0";
 *		valuesArray[0].role = "role_0";
 *		valuesArray[0].roles = "roles_0";
 *		valuesArray[0].timestamp = "timestamp_0";
 *		valuesArray[0].userId = "userId_0";
 *		valuesArray[0].userName = "userName_0";
 *		valuesArray[0].lastLoginFacilityId = "lastLoginFacilityId_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].accessToken = "accessToken_1";
 *		valuesArray[1].accessToken1 = "accessToken1_1";
 *		valuesArray[1].firstName = "firstName_1";
 *		valuesArray[1].lastLoginTime = "lastLoginTime_1";
 *		valuesArray[1].lastName = "lastName_1";
 *		valuesArray[1].password = "password_1";
 *		valuesArray[1].role = "role_1";
 *		valuesArray[1].roles = "roles_1";
 *		valuesArray[1].timestamp = "timestamp_1";
 *		valuesArray[1].userId = "userId_1";
 *		valuesArray[1].userName = "userName_1";
 *		valuesArray[1].lastLoginFacilityId = "lastLoginFacilityId_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].accessToken = "accessToken_2";
 *		valuesArray[2].accessToken1 = "accessToken1_2";
 *		valuesArray[2].firstName = "firstName_2";
 *		valuesArray[2].lastLoginTime = "lastLoginTime_2";
 *		valuesArray[2].lastName = "lastName_2";
 *		valuesArray[2].password = "password_2";
 *		valuesArray[2].role = "role_2";
 *		valuesArray[2].roles = "roles_2";
 *		valuesArray[2].timestamp = "timestamp_2";
 *		valuesArray[2].userId = "userId_2";
 *		valuesArray[2].userName = "userName_2";
 *		valuesArray[2].lastLoginFacilityId = "lastLoginFacilityId_2";
 *		com.healogics.offline.login.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.healogics.offline.login.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.login.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "login", errorcallback, true) === false) {
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
                errMsg = "userId=" + valuestable.userId;
                pks["userId"] = {
                    key: "userId",
                    value: valuestable.userId
                };
                var wcs = [];
                if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.healogics.offline.login.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.healogics.offline.login.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.healogics.offline.login.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates login using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.login.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.login.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.healogics.offline.login.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.login.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogics.offline.login.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "login", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.healogics.offline.login.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates login(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.login.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.login.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "login", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogics.offline.login.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogics.offline.login.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.healogics.offline.login.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogics.offline.login.getPKTable());
    }
};
/************************************************************************************
 * Updates login(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.accessToken = "accessToken_updated0";
 *		inputArray[0].changeSet.accessToken1 = "accessToken1_updated0";
 *		inputArray[0].changeSet.firstName = "firstName_updated0";
 *		inputArray[0].changeSet.lastLoginTime = "lastLoginTime_updated0";
 *		inputArray[0].whereClause = "where userId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.accessToken = "accessToken_updated1";
 *		inputArray[1].changeSet.accessToken1 = "accessToken1_updated1";
 *		inputArray[1].changeSet.firstName = "firstName_updated1";
 *		inputArray[1].changeSet.lastLoginTime = "lastLoginTime_updated1";
 *		inputArray[1].whereClause = "where userId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.accessToken = "accessToken_updated2";
 *		inputArray[2].changeSet.accessToken1 = "accessToken1_updated2";
 *		inputArray[2].changeSet.firstName = "firstName_updated2";
 *		inputArray[2].changeSet.lastLoginTime = "lastLoginTime_updated2";
 *		inputArray[2].whereClause = "where userId = '2'";
 *		com.healogics.offline.login.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.healogics.offline.login.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.healogics.offline.login.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "login";
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
                if (kony.sync.attributeValidation(valuestable, "login", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.healogics.offline.login.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.healogics.offline.login.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.healogics.offline.login.getPKTable());
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
            sync.log.trace("Entering  com.healogics.offline.login.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.healogics.offline.login.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes login using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.healogics.offline.login.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.login.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.healogics.offline.login.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.login.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function loginTransactionCallback(tx) {
        sync.log.trace("Entering com.healogics.offline.login.deleteByPK->login_PKPresent successcallback");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (null !== record) {
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("userId");
            targetAttributes.push("userId");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.healogics.offline.facilityList.removeCascade, "facilityList", true, errorcallback, markForUpload, record, false)) {
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

    function loginErrorCallback() {
        sync.log.error("Entering com.healogics.offline.login.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function loginSuccessCallback() {
        sync.log.trace("Entering com.healogics.offline.login.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.healogics.offline.login.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, loginTransactionCallback, loginSuccessCallback, loginErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes login(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.healogics.offline.login.remove("where accessToken like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.healogics.offline.login.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogics.offline.login.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function login_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("userId");
        targetAttributes.push("userId");
        record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (record === false) {
            isError = true;
            return;
        }
        if (record !== null) {
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.healogics.offline.facilityList.removeCascade, "facilityList", true, errorcallback, markForUpload, record, false)) {
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

    function login_removeSuccess() {
        sync.log.trace("Entering com.healogics.offline.login.remove->login_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogics.offline.login.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogics.offline.login.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, login_removeTransactioncallback, login_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes login using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogics.offline.login.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.login.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.login.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function loginTransactionCallback(tx) {
        sync.log.trace("Entering com.healogics.offline.login.removeDeviceInstanceByPK -> loginTransactionCallback");
        var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
        if (null !== record && false != record) {
            deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
            if (deletedRows === false) {
                isError = true;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("userId");
            targetAttributes.push("userId");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", com.healogics.offline.facilityList.removeCascade, "facilityList", true, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
    }

    function loginErrorCallback() {
        sync.log.error("Entering com.healogics.offline.login.removeDeviceInstanceByPK -> loginErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function loginSuccessCallback() {
        sync.log.trace("Entering com.healogics.offline.login.removeDeviceInstanceByPK -> loginSuccessCallback");
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
        sync.log.error("Entering com.healogics.offline.login.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, loginTransactionCallback, loginSuccessCallback, loginErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes login(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogics.offline.login.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function login_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("userId");
        targetAttributes.push("userId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.healogics.offline.facilityList.removeCascade, "facilityList", true, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function login_removeSuccess() {
        sync.log.trace("Entering com.healogics.offline.login.remove->login_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogics.offline.login.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogics.offline.login.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, login_removeTransactioncallback, login_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves login using primary key from the local Database. 
 *************************************************************************************/
com.healogics.offline.login.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.login.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.login.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    var wcs = [];
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.healogics.offline.login.getAllDetailsByPK-> success callback function");
        successcallback(com.healogics.offline.login.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves login(s) using where clause from the local Database. 
 * e.g. com.healogics.offline.login.find("where accessToken like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.healogics.offline.login.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.login.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of login with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.login.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.healogics.offline.login.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.login.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of login matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogics.offline.login.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
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
        sync.log.trace("Entering com.healogics.offline.login.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.healogics.offline.login.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.healogics.offline.login.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of login pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.healogics.offline.login.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
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
        sync.log.trace("Entering com.healogics.offline.login.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.login.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of login pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.healogics.offline.login.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.login.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.login.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of login deferred for upload.
 *************************************************************************************/
com.healogics.offline.login.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
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
        sync.log.trace("Entering com.healogics.offline.login.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.login.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to login in local database to last synced state
 *************************************************************************************/
com.healogics.offline.login.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.login.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to login's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.healogics.offline.login.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.healogics.offline.login.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.healogics.offline.login.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    var wcs = [];
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogics.offline.login.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogics.offline.login.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether login's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.healogics.offline.login.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.login.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.healogics.offline.login.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.healogics.offline.login.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    var wcs = [];
    var flag;
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogics.offline.login.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether login's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.healogics.offline.login.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogics.offline.login.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.healogics.offline.login.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.healogics.offline.login.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogics.offline.login.getTableName();
    var wcs = [];
    var flag;
    if (com.healogics.offline.login.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogics.offline.login.isRecordPendingForUpload->successcallback function");
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
 * Retrieves instances of facilityList related to login
 * with given userId from local database.
 *************************************************************************************/
com.healogics.offline.login.prototype.getfacilityListWithuserId = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.getfacilityListWithuserId function");
    var pks = this.getPKTable();
    com.healogics.offline.login.getfacilityListWithuserId(pks, successcallback, errorcallback);
};
com.healogics.offline.login.getfacilityListWithuserId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getfacilityListWithuserId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.getfacilityListWithuserId", "relationship", errorcallback)) {
        return;
    }

    function login_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey = res[0].userId;
            wcs.push({
                key: "userId",
                value: targetKey
            });
            var tbname = "facilityList"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, com.healogics.offline.facilityList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
                var obj = new com.healogics.offline.facilityList();
                obj.configuration = res[i].configuration;
                obj.facilityBluebookId = res[i].facilityBluebookId;
                obj.facilityId = res[i].facilityId;
                obj.facilityName = res[i].facilityName;
                obj.timestamp = res[i].timestamp;
                obj.timeZone = res[i].timeZone;
                obj.userId = res[i].userId;
                obj.userName = res[i].userName;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    com.healogics.offline.login.getAllDetailsByPK(pks, login_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of facilityList related to login
 * with given userId from local database.
 *************************************************************************************/
com.healogics.offline.login.prototype.getCountOffacilityListWithuserId = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.getCountOffacilityListWithuserId function");
    var pks = this.getPKTable();
    com.healogics.offline.login.getCountOffacilityListWithuserId(pks, successcallback, errorcallback);
};
com.healogics.offline.login.getCountOffacilityListWithuserId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.getCountOffacilityListWithuserId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogics.offline.login.getCountOffacilityListWithuserId", "relationship", errorcallback)) {
        return;
    }

    function login_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetAttributes = [];
            var targetKey = res[0].userId;
            targetAttributes.push("userId");
            if (kony.type(targetKey) === "string") {
                wcs.push({
                    "userId": "'" + targetKey + "'"
                });
            } else {
                wcs.push({
                    "userId": targetKey
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
            com.healogics.offline.facilityList.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    com.healogics.offline.login.getAllDetailsByPK(pks, login_successcallback, errorcallback);
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
com.healogics.offline.login.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.healogics.offline.login.removeCascade function");
    var tbname = com.healogics.offline.login.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("userId");
        targetAttributes.push("userId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, com.healogics.offline.facilityList.removeCascade, "facilityList", true, errorcallback, markForUpload, null, isLocal)) {
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
com.healogics.offline.login.convertTableToObject = function(res) {
    sync.log.trace("Entering com.healogics.offline.login.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.healogics.offline.login();
            obj.accessToken = res[i].accessToken;
            obj.accessToken1 = res[i].accessToken1;
            obj.firstName = res[i].firstName;
            obj.lastLoginTime = res[i].lastLoginTime;
            obj.lastName = res[i].lastName;
            obj.password = res[i].password;
            obj.role = res[i].role;
            obj.roles = res[i].roles;
            obj.timestamp = res[i].timestamp;
            obj.userId = res[i].userId;
            obj.userName = res[i].userName;
            obj.lastLoginFacilityId = res[i].lastLoginFacilityId;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.healogics.offline.login.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.healogics.offline.login.filterAttributes function");
    var attributeTable = {};
    attributeTable.accessToken = "accessToken";
    attributeTable.accessToken1 = "accessToken1";
    attributeTable.firstName = "firstName";
    attributeTable.lastLoginTime = "lastLoginTime";
    attributeTable.lastName = "lastName";
    attributeTable.password = "password";
    attributeTable.role = "role";
    attributeTable.roles = "roles";
    attributeTable.timestamp = "timestamp";
    attributeTable.userId = "userId";
    attributeTable.userName = "userName";
    attributeTable.lastLoginFacilityId = "lastLoginFacilityId";
    var PKTable = {};
    PKTable.userId = {}
    PKTable.userId.name = "userId";
    PKTable.userId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject login. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject login. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject login. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.healogics.offline.login.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.healogics.offline.login.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.healogics.offline.login.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.healogics.offline.login.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.healogics.offline.login.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.accessToken = this.accessToken;
    valuesTable.accessToken1 = this.accessToken1;
    valuesTable.firstName = this.firstName;
    valuesTable.lastLoginTime = this.lastLoginTime;
    valuesTable.lastName = this.lastName;
    valuesTable.password = this.password;
    valuesTable.role = this.role;
    valuesTable.roles = this.roles;
    valuesTable.timestamp = this.timestamp;
    if (isInsert === true) {
        valuesTable.userId = this.userId;
    }
    valuesTable.userName = this.userName;
    valuesTable.lastLoginFacilityId = this.lastLoginFacilityId;
    return valuesTable;
};
com.healogics.offline.login.prototype.getPKTable = function() {
    sync.log.trace("Entering com.healogics.offline.login.prototype.getPKTable function");
    var pkTable = {};
    pkTable.userId = {
        key: "userId",
        value: this.userId
    };
    return pkTable;
};
com.healogics.offline.login.getPKTable = function() {
    sync.log.trace("Entering com.healogics.offline.login.getPKTable function");
    var pkTable = [];
    pkTable.push("userId");
    return pkTable;
};
com.healogics.offline.login.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.healogics.offline.login.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key userId not specified in  " + opName + "  an item in login");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("userId", opName, "login")));
        return false;
    } else if (kony.sync.isValidJSTable(pks)) {
        if (!kony.sync.isNull(pks.userId)) {
            if (!kony.sync.isNull(pks.userId.value)) {
                wc.key = "userId";
                wc.value = pks.userId.value;
            } else {
                wc.key = "userId";
                wc.value = pks.userId;
            }
        } else {
            sync.log.error("Primary Key userId not specified in  " + opName + "  an item in login");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("userId", opName, "login")));
            return false;
        }
    } else {
        wc.key = "userId";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.healogics.offline.login.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.validateNull function");
    return true;
};
com.healogics.offline.login.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogics.offline.login.validateNullInsert function");
    if (kony.sync.isNull(valuestable.userId) || kony.sync.isEmptyString(valuestable.userId)) {
        sync.log.error("Mandatory attribute userId is missing for the SyncObject login.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "login", "userId")));
        return false;
    }
    return true;
};
com.healogics.offline.login.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.healogics.offline.login.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.healogics.offline.login.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.healogics.offline.login.getTableName = function() {
    return "login";
};
// **********************************End login's helper methods************************