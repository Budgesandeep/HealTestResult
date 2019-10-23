//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Mon May 29 10:49:12 UTC 2017objHealingSubStep*******************
// **********************************Start objHealingSubStep's helper methods************************
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
 * Creates new objHealingSubStep
 *************************************************************************************/
objHealingSubStep = function() {
    this.patientUuid = null;
    this.healingStepNumber = null;
    this.woundNumber = null;
    this.subStepLlastUpdatedTimestamp = null;
    this.subStepLastUpdatedByUser = null;
    this.subStepDesc = null;
    this.subStepDeleteFlag = null;
    this.healingSubStepNumber = null;
    this.docEntityId = null;
    this.encounterId = null;
    this.facilityId = null;
    this.markForUpload = true;
};
objHealingSubStep.prototype = {
    get patientUuid() {
        return this._patientUuid;
    },
    set patientUuid(val) {
        this._patientUuid = val;
    },
    get healingStepNumber() {
        return this._healingStepNumber;
    },
    set healingStepNumber(val) {
        this._healingStepNumber = val;
    },
    get woundNumber() {
        return this._woundNumber;
    },
    set woundNumber(val) {
        this._woundNumber = val;
    },
    get subStepLlastUpdatedTimestamp() {
        return this._subStepLlastUpdatedTimestamp;
    },
    set subStepLlastUpdatedTimestamp(val) {
        this._subStepLlastUpdatedTimestamp = val;
    },
    get subStepLastUpdatedByUser() {
        return this._subStepLastUpdatedByUser;
    },
    set subStepLastUpdatedByUser(val) {
        this._subStepLastUpdatedByUser = val;
    },
    get subStepDesc() {
        return this._subStepDesc;
    },
    set subStepDesc(val) {
        this._subStepDesc = val;
    },
    get subStepDeleteFlag() {
        return this._subStepDeleteFlag;
    },
    set subStepDeleteFlag(val) {
        this._subStepDeleteFlag = val;
    },
    get healingSubStepNumber() {
        return this._healingSubStepNumber;
    },
    set healingSubStepNumber(val) {
        this._healingSubStepNumber = val;
    },
    get docEntityId() {
        return this._docEntityId;
    },
    set docEntityId(val) {
        this._docEntityId = val;
    },
    get encounterId() {
        return this._encounterId;
    },
    set encounterId(val) {
        this._encounterId = val;
    },
    get facilityId() {
        return this._facilityId;
    },
    set facilityId(val) {
        this._facilityId = val;
    },
};
/************************************************************************************
 * Retrieves all instances of objHealingSubStep SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "patientUuid";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "healingStepNumber";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * objHealingSubStep.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
objHealingSubStep.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering objHealingSubStep.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    orderByMap = kony.sync.formOrderByClause("objHealingSubStep", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering objHealingSubStep.getAll->successcallback");
        successcallback(objHealingSubStep.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of objHealingSubStep present in local database.
 *************************************************************************************/
objHealingSubStep.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getAllCount function");
    objHealingSubStep.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of objHealingSubStep using where clause in the local Database
 *************************************************************************************/
objHealingSubStep.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering objHealingSubStep.getCount->successcallback");
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
 * Creates a new instance of objHealingSubStep in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
objHealingSubStep.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  objHealingSubStep.prototype.create function");
    var valuestable = this.getValuesTable(true);
    objHealingSubStep.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
objHealingSubStep.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  objHealingSubStep.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "objHealingSubStep", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  objHealingSubStep.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = objHealingSubStep.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "patientUuid=" + valuestable.patientUuid;
        pks["patientUuid"] = {
            key: "patientUuid",
            value: valuestable.patientUuid
        };
        errMsg = errMsg + ", healingStepNumber=" + valuestable.healingStepNumber;
        pks["healingStepNumber"] = {
            key: "healingStepNumber",
            value: valuestable.healingStepNumber
        };
        errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
        pks["woundNumber"] = {
            key: "woundNumber",
            value: valuestable.woundNumber
        };
        errMsg = errMsg + ", healingSubStepNumber=" + valuestable.healingSubStepNumber;
        pks["healingSubStepNumber"] = {
            key: "healingSubStepNumber",
            value: valuestable.healingSubStepNumber
        };
        errMsg = errMsg + ", docEntityId=" + valuestable.docEntityId;
        pks["docEntityId"] = {
            key: "docEntityId",
            value: valuestable.docEntityId
        };
        errMsg = errMsg + ", encounterId=" + valuestable.encounterId;
        pks["encounterId"] = {
            key: "encounterId",
            value: valuestable.encounterId
        };
        errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
        pks["facilityId"] = {
            key: "facilityId",
            value: valuestable.facilityId
        };
        objHealingSubStep.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of objHealingSubStep in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].patientUuid = "patientUuid_0";
 *		valuesArray[0].healingStepNumber = "healingStepNumber_0";
 *		valuesArray[0].woundNumber = "woundNumber_0";
 *		valuesArray[0].subStepLlastUpdatedTimestamp = "subStepLlastUpdatedTimestamp_0";
 *		valuesArray[0].subStepLastUpdatedByUser = "subStepLastUpdatedByUser_0";
 *		valuesArray[0].subStepDesc = "subStepDesc_0";
 *		valuesArray[0].subStepDeleteFlag = "subStepDeleteFlag_0";
 *		valuesArray[0].healingSubStepNumber = "healingSubStepNumber_0";
 *		valuesArray[0].docEntityId = "docEntityId_0";
 *		valuesArray[0].encounterId = "encounterId_0";
 *		valuesArray[0].facilityId = "facilityId_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].patientUuid = "patientUuid_1";
 *		valuesArray[1].healingStepNumber = "healingStepNumber_1";
 *		valuesArray[1].woundNumber = "woundNumber_1";
 *		valuesArray[1].subStepLlastUpdatedTimestamp = "subStepLlastUpdatedTimestamp_1";
 *		valuesArray[1].subStepLastUpdatedByUser = "subStepLastUpdatedByUser_1";
 *		valuesArray[1].subStepDesc = "subStepDesc_1";
 *		valuesArray[1].subStepDeleteFlag = "subStepDeleteFlag_1";
 *		valuesArray[1].healingSubStepNumber = "healingSubStepNumber_1";
 *		valuesArray[1].docEntityId = "docEntityId_1";
 *		valuesArray[1].encounterId = "encounterId_1";
 *		valuesArray[1].facilityId = "facilityId_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].patientUuid = "patientUuid_2";
 *		valuesArray[2].healingStepNumber = "healingStepNumber_2";
 *		valuesArray[2].woundNumber = "woundNumber_2";
 *		valuesArray[2].subStepLlastUpdatedTimestamp = "subStepLlastUpdatedTimestamp_2";
 *		valuesArray[2].subStepLastUpdatedByUser = "subStepLastUpdatedByUser_2";
 *		valuesArray[2].subStepDesc = "subStepDesc_2";
 *		valuesArray[2].subStepDeleteFlag = "subStepDeleteFlag_2";
 *		valuesArray[2].healingSubStepNumber = "healingSubStepNumber_2";
 *		valuesArray[2].docEntityId = "docEntityId_2";
 *		valuesArray[2].encounterId = "encounterId_2";
 *		valuesArray[2].facilityId = "facilityId_2";
 *		objHealingSubStep.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
objHealingSubStep.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering objHealingSubStep.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "objHealingSubStep", errorcallback, true) === false) {
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
                errMsg = "patientUuid=" + valuestable.patientUuid;
                pks["patientUuid"] = {
                    key: "patientUuid",
                    value: valuestable.patientUuid
                };
                errMsg = errMsg + ", healingStepNumber=" + valuestable.healingStepNumber;
                pks["healingStepNumber"] = {
                    key: "healingStepNumber",
                    value: valuestable.healingStepNumber
                };
                errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
                pks["woundNumber"] = {
                    key: "woundNumber",
                    value: valuestable.woundNumber
                };
                errMsg = errMsg + ", healingSubStepNumber=" + valuestable.healingSubStepNumber;
                pks["healingSubStepNumber"] = {
                    key: "healingSubStepNumber",
                    value: valuestable.healingSubStepNumber
                };
                errMsg = errMsg + ", docEntityId=" + valuestable.docEntityId;
                pks["docEntityId"] = {
                    key: "docEntityId",
                    value: valuestable.docEntityId
                };
                errMsg = errMsg + ", encounterId=" + valuestable.encounterId;
                pks["encounterId"] = {
                    key: "encounterId",
                    value: valuestable.encounterId
                };
                errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
                pks["facilityId"] = {
                    key: "facilityId",
                    value: valuestable.facilityId
                };
                var wcs = [];
                if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  objHealingSubStep.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  objHealingSubStep.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = objHealingSubStep.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates objHealingSubStep using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
objHealingSubStep.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  objHealingSubStep.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    objHealingSubStep.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
objHealingSubStep.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  objHealingSubStep.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "objHealingSubStep", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = objHealingSubStep.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates objHealingSubStep(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
objHealingSubStep.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering objHealingSubStep.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "objHealingSubStep", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  objHealingSubStep.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, objHealingSubStep.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = objHealingSubStep.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, objHealingSubStep.getPKTable());
    }
};
/************************************************************************************
 * Updates objHealingSubStep(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.subStepLlastUpdatedTimestamp = "subStepLlastUpdatedTimestamp_updated0";
 *		inputArray[0].changeSet.subStepLastUpdatedByUser = "subStepLastUpdatedByUser_updated0";
 *		inputArray[0].changeSet.subStepDesc = "subStepDesc_updated0";
 *		inputArray[0].changeSet.subStepDeleteFlag = "subStepDeleteFlag_updated0";
 *		inputArray[0].whereClause = "where patientUuid = '0'";
 *		inputArray[0].whereClause = "where healingStepNumber = '0'";
 *		inputArray[0].whereClause = "where woundNumber = '0'";
 *		inputArray[0].whereClause = "where healingSubStepNumber = '0'";
 *		inputArray[0].whereClause = "where docEntityId = '0'";
 *		inputArray[0].whereClause = "where encounterId = '0'";
 *		inputArray[0].whereClause = "where facilityId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.subStepLlastUpdatedTimestamp = "subStepLlastUpdatedTimestamp_updated1";
 *		inputArray[1].changeSet.subStepLastUpdatedByUser = "subStepLastUpdatedByUser_updated1";
 *		inputArray[1].changeSet.subStepDesc = "subStepDesc_updated1";
 *		inputArray[1].changeSet.subStepDeleteFlag = "subStepDeleteFlag_updated1";
 *		inputArray[1].whereClause = "where patientUuid = '1'";
 *		inputArray[1].whereClause = "where healingStepNumber = '1'";
 *		inputArray[1].whereClause = "where woundNumber = '1'";
 *		inputArray[1].whereClause = "where healingSubStepNumber = '1'";
 *		inputArray[1].whereClause = "where docEntityId = '1'";
 *		inputArray[1].whereClause = "where encounterId = '1'";
 *		inputArray[1].whereClause = "where facilityId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.subStepLlastUpdatedTimestamp = "subStepLlastUpdatedTimestamp_updated2";
 *		inputArray[2].changeSet.subStepLastUpdatedByUser = "subStepLastUpdatedByUser_updated2";
 *		inputArray[2].changeSet.subStepDesc = "subStepDesc_updated2";
 *		inputArray[2].changeSet.subStepDeleteFlag = "subStepDeleteFlag_updated2";
 *		inputArray[2].whereClause = "where patientUuid = '2'";
 *		inputArray[2].whereClause = "where healingStepNumber = '2'";
 *		inputArray[2].whereClause = "where woundNumber = '2'";
 *		inputArray[2].whereClause = "where healingSubStepNumber = '2'";
 *		inputArray[2].whereClause = "where docEntityId = '2'";
 *		inputArray[2].whereClause = "where encounterId = '2'";
 *		inputArray[2].whereClause = "where facilityId = '2'";
 *		objHealingSubStep.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
objHealingSubStep.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering objHealingSubStep.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "objHealingSubStep.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "objHealingSubStep";
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
                if (kony.sync.attributeValidation(valuestable, "objHealingSubStep", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, objHealingSubStep.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  objHealingSubStep.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, objHealingSubStep.getPKTable());
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
            sync.log.trace("Entering  objHealingSubStep.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = objHealingSubStep.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes objHealingSubStep using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
objHealingSubStep.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.deleteByPK function");
    var pks = this.getPKTable();
    objHealingSubStep.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
objHealingSubStep.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering objHealingSubStep.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function objHealingSubStepTransactionCallback(tx) {
        sync.log.trace("Entering objHealingSubStep.deleteByPK->objHealingSubStep_PKPresent successcallback");
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
            srcAttributes.push("woundNumber");
            targetAttributes.push("woundNumber");
            srcAttributes.push("healingSubStepNumber");
            targetAttributes.push("healingStepNumber");
            srcAttributes.push("docEntityId");
            targetAttributes.push("docEntityId");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", objHealingStep.removeCascade, "objHealingStep", true, errorcallback, markForUpload, record, false)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("patientUuid");
            targetAttributes.push("patientUuid");
            srcAttributes.push("woundNumber");
            targetAttributes.push("woundNumber");
            srcAttributes.push("docEntityId");
            targetAttributes.push("docEntityId");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", objWounds.removeCascade, "objWounds", true, errorcallback, markForUpload, record, false)) {
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

    function objHealingSubStepErrorCallback() {
        sync.log.error("Entering objHealingSubStep.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function objHealingSubStepSuccessCallback() {
        sync.log.trace("Entering objHealingSubStep.deleteByPK->relationship success callback");
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
        sync.log.error("Entering objHealingSubStep.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, objHealingSubStepTransactionCallback, objHealingSubStepSuccessCallback, objHealingSubStepErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes objHealingSubStep(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. objHealingSubStep.remove("where patientUuid like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
objHealingSubStep.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering objHealingSubStep.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function objHealingSubStep_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("healingSubStepNumber");
        targetAttributes.push("healingStepNumber");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, objHealingStep.removeCascade, "objHealingStep", true, errorcallback, markForUpload, null, false)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, objWounds.removeCascade, "objWounds", true, errorcallback, markForUpload, null, false)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function objHealingSubStep_removeSuccess() {
        sync.log.trace("Entering objHealingSubStep.remove->objHealingSubStep_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering objHealingSubStep.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering objHealingSubStep.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, objHealingSubStep_removeTransactioncallback, objHealingSubStep_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes objHealingSubStep using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
objHealingSubStep.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    objHealingSubStep.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
objHealingSubStep.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function objHealingSubStepTransactionCallback(tx) {
        sync.log.trace("Entering objHealingSubStep.removeDeviceInstanceByPK -> objHealingSubStepTransactionCallback");
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
            srcAttributes.push("woundNumber");
            targetAttributes.push("woundNumber");
            srcAttributes.push("healingSubStepNumber");
            targetAttributes.push("healingStepNumber");
            srcAttributes.push("docEntityId");
            targetAttributes.push("docEntityId");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", objHealingStep.removeCascade, "objHealingStep", true, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
            var srcAttributes = [];
            var targetAttributes = [];
            srcAttributes.push("patientUuid");
            targetAttributes.push("patientUuid");
            srcAttributes.push("woundNumber");
            targetAttributes.push("woundNumber");
            srcAttributes.push("docEntityId");
            targetAttributes.push("docEntityId");
            if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", objWounds.removeCascade, "objWounds", true, errorcallback, null, record, true)) {
                isError = true;
                kony.sync.rollbackTransaction(tx);
                return;
            }
        } else {
            pkNotFound = true;
        }
    }

    function objHealingSubStepErrorCallback() {
        sync.log.error("Entering objHealingSubStep.removeDeviceInstanceByPK -> objHealingSubStepErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function objHealingSubStepSuccessCallback() {
        sync.log.trace("Entering objHealingSubStep.removeDeviceInstanceByPK -> objHealingSubStepSuccessCallback");
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
        sync.log.error("Entering objHealingSubStep.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, objHealingSubStepTransactionCallback, objHealingSubStepSuccessCallback, objHealingSubStepErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes objHealingSubStep(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
objHealingSubStep.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function objHealingSubStep_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("healingSubStepNumber");
        targetAttributes.push("healingStepNumber");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, objHealingStep.removeCascade, "objHealingStep", true, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, objWounds.removeCascade, "objWounds", true, errorcallback, null, null, true)) {
            isError = true;
            kony.sync.rollbackTransaction(tx);
            return;
        }
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function objHealingSubStep_removeSuccess() {
        sync.log.trace("Entering objHealingSubStep.remove->objHealingSubStep_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering objHealingSubStep.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering objHealingSubStep.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, objHealingSubStep_removeTransactioncallback, objHealingSubStep_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves objHealingSubStep using primary key from the local Database. 
 *************************************************************************************/
objHealingSubStep.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    objHealingSubStep.getAllDetailsByPK(pks, successcallback, errorcallback);
};
objHealingSubStep.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    var wcs = [];
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering objHealingSubStep.getAllDetailsByPK-> success callback function");
        successcallback(objHealingSubStep.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves objHealingSubStep(s) using where clause from the local Database. 
 * e.g. objHealingSubStep.find("where patientUuid like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
objHealingSubStep.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, objHealingSubStep.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of objHealingSubStep with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
objHealingSubStep.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    objHealingSubStep.markForUploadbyPK(pks, successcallback, errorcallback);
};
objHealingSubStep.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of objHealingSubStep matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
objHealingSubStep.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
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
        sync.log.trace("Entering objHealingSubStep.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering objHealingSubStep.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering objHealingSubStep.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of objHealingSubStep pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
objHealingSubStep.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
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
        sync.log.trace("Entering objHealingSubStep.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, objHealingSubStep.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of objHealingSubStep pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
objHealingSubStep.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering objHealingSubStep.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, objHealingSubStep.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of objHealingSubStep deferred for upload.
 *************************************************************************************/
objHealingSubStep.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
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
        sync.log.trace("Entering objHealingSubStep.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, objHealingSubStep.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to objHealingSubStep in local database to last synced state
 *************************************************************************************/
objHealingSubStep.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering objHealingSubStep.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to objHealingSubStep's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
objHealingSubStep.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    objHealingSubStep.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
objHealingSubStep.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    var wcs = [];
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering objHealingSubStep.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering objHealingSubStep.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether objHealingSubStep's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
objHealingSubStep.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  objHealingSubStep.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    objHealingSubStep.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
objHealingSubStep.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    var wcs = [];
    var flag;
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering objHealingSubStep.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether objHealingSubStep's record  
 * with given primary key is pending for upload
 *************************************************************************************/
objHealingSubStep.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  objHealingSubStep.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    objHealingSubStep.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
objHealingSubStep.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = objHealingSubStep.getTableName();
    var wcs = [];
    var flag;
    if (objHealingSubStep.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering objHealingSubStep.isRecordPendingForUpload->successcallback function");
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
 * Retrieves instances of objHealingStep related to objHealingSubStep
 * with given $relationship.getTargetObjectAttribute() from local database.
 *************************************************************************************/
objHealingSubStep.prototype.getobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.getobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId function");
    var pks = this.getPKTable();
    objHealingSubStep.getobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId(pks, successcallback, errorcallback);
};
objHealingSubStep.getobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.getobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId", "relationship", errorcallback)) {
        return;
    }

    function objHealingSubStep_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey_0 = res[0].patientUuid;
            wcs.push({
                key: "patientUuid",
                value: targetKey_0
            });
            var targetKey_1 = res[0].woundNumber;
            wcs.push({
                key: "woundNumber",
                value: targetKey_1
            });
            var targetKey_2 = res[0].healingSubStepNumber;
            wcs.push({
                key: "healingStepNumber",
                value: targetKey_2
            });
            var targetKey_3 = res[0].docEntityId;
            wcs.push({
                key: "docEntityId",
                value: targetKey_3
            });
            var tbname = "objHealingStep"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, objHealingStep.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
                var obj = new objHealingStep();
                obj.patientUuid = res[i].patientUuid;
                obj.woundNumber = res[i].woundNumber;
                obj.healingStepNumber = res[i].healingStepNumber;
                obj.healingStepTitle = res[i].healingStepTitle;
                obj.healingStepCPGLinks = res[i].healingStepCPGLinks;
                obj.woundDeleted = res[i].woundDeleted;
                obj.docEntityId = res[i].docEntityId;
                obj.encounterId = res[i].encounterId;
                obj.facilityId = res[i].facilityId;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    objHealingSubStep.getAllDetailsByPK(pks, objHealingSubStep_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of objHealingStep related to objHealingSubStep
 * with given ${displayTargetAttribute} from local database.
 *************************************************************************************/
objHealingSubStep.prototype.getCountOfobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.getCountOfobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId function");
    var pks = this.getPKTable();
    objHealingSubStep.getCountOfobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId(pks, successcallback, errorcallback);
};
objHealingSubStep.getCountOfobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getCountOfobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.getCountOfobjHealingStepWithpatientUuidANDwoundNumberANDhealingStepNumberANDdocEntityId", "relationship", errorcallback)) {
        return;
    }

    function objHealingSubStep_successcallback(res) {
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
            var targetKey_1 = res[0].woundNumber;
            targetAttributes.push("woundNumber");
            if (kony.type(targetKey_1) === "string") {
                wcs.push({
                    "woundNumber": "'" + targetKey_1 + "'"
                });
            } else {
                wcs.push({
                    "woundNumber": targetKey_1
                });
            }
            var targetKey_2 = res[0].healingSubStepNumber;
            targetAttributes.push("healingStepNumber");
            if (kony.type(targetKey_2) === "string") {
                wcs.push({
                    "healingStepNumber": "'" + targetKey_2 + "'"
                });
            } else {
                wcs.push({
                    "healingStepNumber": targetKey_2
                });
            }
            var targetKey_3 = res[0].docEntityId;
            targetAttributes.push("docEntityId");
            if (kony.type(targetKey_3) === "string") {
                wcs.push({
                    "docEntityId": "'" + targetKey_3 + "'"
                });
            } else {
                wcs.push({
                    "docEntityId": targetKey_3
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
            objHealingStep.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    objHealingSubStep.getAllDetailsByPK(pks, objHealingSubStep_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves instances of objWounds related to objHealingSubStep
 * with given $relationship.getTargetObjectAttribute() from local database.
 *************************************************************************************/
objHealingSubStep.prototype.getobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.getobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId function");
    var pks = this.getPKTable();
    objHealingSubStep.getobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId(pks, successcallback, errorcallback);
};
objHealingSubStep.getobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.getobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId", "relationship", errorcallback)) {
        return;
    }

    function objHealingSubStep_successcallback(res) {
        if (null !== res && res.length > 0) {
            var wcs = [];
            var targetKey_0 = res[0].patientUuid;
            wcs.push({
                key: "patientUuid",
                value: targetKey_0
            });
            var targetKey_1 = res[0].woundNumber;
            wcs.push({
                key: "woundNumber",
                value: targetKey_1
            });
            var targetKey_2 = res[0].docEntityId;
            wcs.push({
                key: "docEntityId",
                value: targetKey_2
            });
            var tbname = "objWounds"
            var query = kony.sync.qb_createQuery();
            kony.sync.qb_select(query, null);
            kony.sync.qb_from(query, tbname);
            kony.sync.qb_where(query, wcs);
            var query_compile = kony.sync.qb_compile(query);
            var sql = query_compile[0];
            var params = query_compile[1];
            var dbname = kony.sync.getDBName();

            function mySuccCallback(res) {
                kony.sync.verifyAndCallClosure(mySuccesscallback, objWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
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
                var obj = new objWounds();
                obj.deleted = res[i].deleted;
                obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
                obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
                obj.patientUuid = res[i].patientUuid;
                obj.woundNumber = res[i].woundNumber;
                obj.woundAttributes = res[i].woundAttributes;
                obj.docEntityId = res[i].docEntityId;
                obj.encounterId = res[i].encounterId;
                obj.facilityId = res[i].facilityId;
                objMap[i] = obj;
            }
        }
        kony.sync.verifyAndCallClosure(successcallback, objMap);
    }
    objHealingSubStep.getAllDetailsByPK(pks, objHealingSubStep_successcallback, errorcallback);
};
/************************************************************************************
 * Retrieves number of instances of objWounds related to objHealingSubStep
 * with given ${displayTargetAttribute} from local database.
 *************************************************************************************/
objHealingSubStep.prototype.getCountOfobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId = function(successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.prototype.getCountOfobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId function");
    var pks = this.getPKTable();
    objHealingSubStep.getCountOfobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId(pks, successcallback, errorcallback);
};
objHealingSubStep.getCountOfobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.getCountOfobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "objHealingSubStep.getCountOfobjWoundsWithpatientUuidANDwoundNumberANDdocEntityId", "relationship", errorcallback)) {
        return;
    }

    function objHealingSubStep_successcallback(res) {
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
            var targetKey_1 = res[0].woundNumber;
            targetAttributes.push("woundNumber");
            if (kony.type(targetKey_1) === "string") {
                wcs.push({
                    "woundNumber": "'" + targetKey_1 + "'"
                });
            } else {
                wcs.push({
                    "woundNumber": targetKey_1
                });
            }
            var targetKey_2 = res[0].docEntityId;
            targetAttributes.push("docEntityId");
            if (kony.type(targetKey_2) === "string") {
                wcs.push({
                    "docEntityId": "'" + targetKey_2 + "'"
                });
            } else {
                wcs.push({
                    "docEntityId": targetKey_2
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
            objWounds.getCount(wClause, successcallback, errorcallback);
        } else {
            kony.sync.verifyAndCallClosure(successcallback, {
                "count": 0
            });
            return;
        }
    }
    objHealingSubStep.getAllDetailsByPK(pks, objHealingSubStep_successcallback, errorcallback);
};
/************************************************************************************
 * Start of helper functions used internally, not to be used as ORMs
 *************************************************************************************/
//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
objHealingSubStep.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering objHealingSubStep.removeCascade function");
    var tbname = objHealingSubStep.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);

    function removeCascadeChildren() {
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("healingSubStepNumber");
        targetAttributes.push("healingStepNumber");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, objHealingStep.removeCascade, "objHealingStep", true, errorcallback, markForUpload, null, isLocal)) {
            return false;
        }
        var srcAttributes = [];
        var targetAttributes = [];
        srcAttributes.push("patientUuid");
        targetAttributes.push("patientUuid");
        srcAttributes.push("woundNumber");
        targetAttributes.push("woundNumber");
        srcAttributes.push("docEntityId");
        targetAttributes.push("docEntityId");
        if (!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, objWounds.removeCascade, "objWounds", true, errorcallback, markForUpload, null, isLocal)) {
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
objHealingSubStep.convertTableToObject = function(res) {
    sync.log.trace("Entering objHealingSubStep.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new objHealingSubStep();
            obj.patientUuid = res[i].patientUuid;
            obj.healingStepNumber = res[i].healingStepNumber;
            obj.woundNumber = res[i].woundNumber;
            obj.subStepLlastUpdatedTimestamp = res[i].subStepLlastUpdatedTimestamp;
            obj.subStepLastUpdatedByUser = res[i].subStepLastUpdatedByUser;
            obj.subStepDesc = res[i].subStepDesc;
            obj.subStepDeleteFlag = res[i].subStepDeleteFlag;
            obj.healingSubStepNumber = res[i].healingSubStepNumber;
            obj.docEntityId = res[i].docEntityId;
            obj.encounterId = res[i].encounterId;
            obj.facilityId = res[i].facilityId;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
objHealingSubStep.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering objHealingSubStep.filterAttributes function");
    var attributeTable = {};
    attributeTable.patientUuid = "patientUuid";
    attributeTable.healingStepNumber = "healingStepNumber";
    attributeTable.woundNumber = "woundNumber";
    attributeTable.subStepLlastUpdatedTimestamp = "subStepLlastUpdatedTimestamp";
    attributeTable.subStepLastUpdatedByUser = "subStepLastUpdatedByUser";
    attributeTable.subStepDesc = "subStepDesc";
    attributeTable.subStepDeleteFlag = "subStepDeleteFlag";
    attributeTable.healingSubStepNumber = "healingSubStepNumber";
    attributeTable.docEntityId = "docEntityId";
    attributeTable.encounterId = "encounterId";
    attributeTable.facilityId = "facilityId";
    var PKTable = {};
    PKTable.patientUuid = {}
    PKTable.patientUuid.name = "patientUuid";
    PKTable.patientUuid.isAutoGen = false;
    PKTable.healingStepNumber = {}
    PKTable.healingStepNumber.name = "healingStepNumber";
    PKTable.healingStepNumber.isAutoGen = false;
    PKTable.woundNumber = {}
    PKTable.woundNumber.name = "woundNumber";
    PKTable.woundNumber.isAutoGen = false;
    PKTable.healingSubStepNumber = {}
    PKTable.healingSubStepNumber.name = "healingSubStepNumber";
    PKTable.healingSubStepNumber.isAutoGen = false;
    PKTable.docEntityId = {}
    PKTable.docEntityId.name = "docEntityId";
    PKTable.docEntityId.isAutoGen = false;
    PKTable.encounterId = {}
    PKTable.encounterId.name = "encounterId";
    PKTable.encounterId.isAutoGen = false;
    PKTable.facilityId = {}
    PKTable.facilityId.name = "facilityId";
    PKTable.facilityId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject objHealingSubStep. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject objHealingSubStep. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject objHealingSubStep. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
objHealingSubStep.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering objHealingSubStep.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = objHealingSubStep.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
objHealingSubStep.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering objHealingSubStep.prototype.getValuesTable function");
    var valuesTable = {};
    if (isInsert === true) {
        valuesTable.patientUuid = this.patientUuid;
    }
    if (isInsert === true) {
        valuesTable.healingStepNumber = this.healingStepNumber;
    }
    if (isInsert === true) {
        valuesTable.woundNumber = this.woundNumber;
    }
    valuesTable.subStepLlastUpdatedTimestamp = this.subStepLlastUpdatedTimestamp;
    valuesTable.subStepLastUpdatedByUser = this.subStepLastUpdatedByUser;
    valuesTable.subStepDesc = this.subStepDesc;
    valuesTable.subStepDeleteFlag = this.subStepDeleteFlag;
    if (isInsert === true) {
        valuesTable.healingSubStepNumber = this.healingSubStepNumber;
    }
    if (isInsert === true) {
        valuesTable.docEntityId = this.docEntityId;
    }
    if (isInsert === true) {
        valuesTable.encounterId = this.encounterId;
    }
    if (isInsert === true) {
        valuesTable.facilityId = this.facilityId;
    }
    return valuesTable;
};
objHealingSubStep.prototype.getPKTable = function() {
    sync.log.trace("Entering objHealingSubStep.prototype.getPKTable function");
    var pkTable = {};
    pkTable.patientUuid = {
        key: "patientUuid",
        value: this.patientUuid
    };
    pkTable.healingStepNumber = {
        key: "healingStepNumber",
        value: this.healingStepNumber
    };
    pkTable.woundNumber = {
        key: "woundNumber",
        value: this.woundNumber
    };
    pkTable.healingSubStepNumber = {
        key: "healingSubStepNumber",
        value: this.healingSubStepNumber
    };
    pkTable.docEntityId = {
        key: "docEntityId",
        value: this.docEntityId
    };
    pkTable.encounterId = {
        key: "encounterId",
        value: this.encounterId
    };
    pkTable.facilityId = {
        key: "facilityId",
        value: this.facilityId
    };
    return pkTable;
};
objHealingSubStep.getPKTable = function() {
    sync.log.trace("Entering objHealingSubStep.getPKTable function");
    var pkTable = [];
    pkTable.push("patientUuid");
    pkTable.push("healingStepNumber");
    pkTable.push("woundNumber");
    pkTable.push("healingSubStepNumber");
    pkTable.push("docEntityId");
    pkTable.push("encounterId");
    pkTable.push("facilityId");
    return pkTable;
};
objHealingSubStep.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering objHealingSubStep.pkCheck function");
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
        sync.log.error("Primary Key patientUuid not specified in " + opName + " an item in objHealingSubStep");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("patientUuid", opName, "objHealingSubStep")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.healingStepNumber)) {
        if (!kony.sync.isNull(pks.healingStepNumber.value)) {
            wc.key = "healingStepNumber";
            wc.value = pks.healingStepNumber.value;
        } else {
            wc.key = "healingStepNumber";
            wc.value = pks.healingStepNumber;
        }
    } else {
        sync.log.error("Primary Key healingStepNumber not specified in " + opName + " an item in objHealingSubStep");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("healingStepNumber", opName, "objHealingSubStep")));
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
        sync.log.error("Primary Key woundNumber not specified in " + opName + " an item in objHealingSubStep");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("woundNumber", opName, "objHealingSubStep")));
        return;
    }
    kony.table.insert(wcs, wc);
    var wc = [];
    if (!kony.sync.isNull(pks.healingSubStepNumber)) {
        if (!kony.sync.isNull(pks.healingSubStepNumber.value)) {
            wc.key = "healingSubStepNumber";
            wc.value = pks.healingSubStepNumber.value;
        } else {
            wc.key = "healingSubStepNumber";
            wc.value = pks.healingSubStepNumber;
        }
    } else {
        sync.log.error("Primary Key healingSubStepNumber not specified in " + opName + " an item in objHealingSubStep");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("healingSubStepNumber", opName, "objHealingSubStep")));
        return;
    }
    kony.table.insert(wcs, wc);
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
        sync.log.error("Primary Key docEntityId not specified in " + opName + " an item in objHealingSubStep");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("docEntityId", opName, "objHealingSubStep")));
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
        sync.log.error("Primary Key encounterId not specified in " + opName + " an item in objHealingSubStep");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("encounterId", opName, "objHealingSubStep")));
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
        sync.log.error("Primary Key facilityId not specified in " + opName + " an item in objHealingSubStep");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId", opName, "objHealingSubStep")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
objHealingSubStep.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.validateNull function");
    return true;
};
objHealingSubStep.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering objHealingSubStep.validateNullInsert function");
    if (kony.sync.isNull(valuestable.patientUuid) || kony.sync.isEmptyString(valuestable.patientUuid)) {
        sync.log.error("Mandatory attribute patientUuid is missing for the SyncObject objHealingSubStep.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "objHealingSubStep", "patientUuid")));
        return false;
    }
    if (kony.sync.isNull(valuestable.healingStepNumber) || kony.sync.isEmptyString(valuestable.healingStepNumber)) {
        sync.log.error("Mandatory attribute healingStepNumber is missing for the SyncObject objHealingSubStep.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "objHealingSubStep", "healingStepNumber")));
        return false;
    }
    if (kony.sync.isNull(valuestable.woundNumber) || kony.sync.isEmptyString(valuestable.woundNumber)) {
        sync.log.error("Mandatory attribute woundNumber is missing for the SyncObject objHealingSubStep.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "objHealingSubStep", "woundNumber")));
        return false;
    }
    if (kony.sync.isNull(valuestable.healingSubStepNumber) || kony.sync.isEmptyString(valuestable.healingSubStepNumber)) {
        sync.log.error("Mandatory attribute healingSubStepNumber is missing for the SyncObject objHealingSubStep.");
        errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute, kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "objHealingSubStep", "healingSubStepNumber")));
        return false;
    }
    return true;
};
objHealingSubStep.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering objHealingSubStep.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
objHealingSubStep.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
objHealingSubStep.getTableName = function() {
    return "objHealingSubStep";
};
// **********************************End objHealingSubStep's helper methods************************