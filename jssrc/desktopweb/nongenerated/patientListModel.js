//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:25 UTC 2019patientList*******************
// **********************************Start patientList's helper methods************************
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
 * Creates new patientList
 *************************************************************************************/
com.healogic.offline.patientList = function() {
    this.advanceProcedures = null;
    this.appointmentType = null;
    this.caseManager = null;
    this.deleted = null;
    this.facilityId = null;
    this.lastUpdatedBy = null;
    this.lastUpdatedTimestamp = null;
    this.msrFlag = null;
    this.msrReviewFlag = null;
    this.msrWeek = null;
    this.name = null;
    this.nextAppointment = null;
    this.patientId = null;
    this.physician = null;
    this.transferStatus = null;
    this.txBasedPrecaution = null;
    this.weeks = null;
    this.wounds = null;
    this.physicianUserId = null;
    this.caseManagerUserId = null;
    this.markForUpload = true;
};
com.healogic.offline.patientList.prototype = {
    get advanceProcedures() {
        return this._advanceProcedures;
    },
    set advanceProcedures(val) {
        this._advanceProcedures = val;
    },
    get appointmentType() {
        return this._appointmentType;
    },
    set appointmentType(val) {
        this._appointmentType = val;
    },
    get caseManager() {
        return this._caseManager;
    },
    set caseManager(val) {
        this._caseManager = val;
    },
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
    get msrFlag() {
        return this._msrFlag;
    },
    set msrFlag(val) {
        this._msrFlag = val;
    },
    get msrReviewFlag() {
        return this._msrReviewFlag;
    },
    set msrReviewFlag(val) {
        this._msrReviewFlag = val;
    },
    get msrWeek() {
        return this._msrWeek;
    },
    set msrWeek(val) {
        this._msrWeek = val;
    },
    get name() {
        return this._name;
    },
    set name(val) {
        this._name = val;
    },
    get nextAppointment() {
        return this._nextAppointment;
    },
    set nextAppointment(val) {
        this._nextAppointment = val;
    },
    get patientId() {
        return this._patientId;
    },
    set patientId(val) {
        this._patientId = val;
    },
    get physician() {
        return this._physician;
    },
    set physician(val) {
        this._physician = val;
    },
    get transferStatus() {
        return this._transferStatus;
    },
    set transferStatus(val) {
        this._transferStatus = val;
    },
    get txBasedPrecaution() {
        return this._txBasedPrecaution;
    },
    set txBasedPrecaution(val) {
        this._txBasedPrecaution = val;
    },
    get weeks() {
        return this._weeks;
    },
    set weeks(val) {
        this._weeks = val;
    },
    get wounds() {
        return this._wounds;
    },
    set wounds(val) {
        this._wounds = val;
    },
    get physicianUserId() {
        return this._physicianUserId;
    },
    set physicianUserId(val) {
        this._physicianUserId = val;
    },
    get caseManagerUserId() {
        return this._caseManagerUserId;
    },
    set caseManagerUserId(val) {
        this._caseManagerUserId = val;
    },
};
/************************************************************************************
 * Retrieves all instances of patientList SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "advanceProcedures";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "appointmentType";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.healogic.offline.patientList.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.healogic.offline.patientList.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.healogic.offline.patientList.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    orderByMap = kony.sync.formOrderByClause("patientList", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientList.getAll->successcallback");
        successcallback(com.healogic.offline.patientList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of patientList present in local database.
 *************************************************************************************/
com.healogic.offline.patientList.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.getAllCount function");
    com.healogic.offline.patientList.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of patientList using where clause in the local Database
 *************************************************************************************/
com.healogic.offline.patientList.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientList.getCount->successcallback");
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
 * Creates a new instance of patientList in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientList.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientList.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.healogic.offline.patientList.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.patientList.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogic.offline.patientList.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "patientList", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogic.offline.patientList.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.healogic.offline.patientList.getRelationshipMap(relationshipMap, valuestable);
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
        com.healogic.offline.patientList.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of patientList in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].advanceProcedures = "advanceProcedures_0";
 *		valuesArray[0].appointmentType = "appointmentType_0";
 *		valuesArray[0].caseManager = "caseManager_0";
 *		valuesArray[0].facilityId = "facilityId_0";
 *		valuesArray[0].lastUpdatedBy = "lastUpdatedBy_0";
 *		valuesArray[0].msrFlag = "msrFlag_0";
 *		valuesArray[0].msrReviewFlag = "msrReviewFlag_0";
 *		valuesArray[0].msrWeek = "msrWeek_0";
 *		valuesArray[0].name = "name_0";
 *		valuesArray[0].nextAppointment = "nextAppointment_0";
 *		valuesArray[0].patientId = "patientId_0";
 *		valuesArray[0].physician = "physician_0";
 *		valuesArray[0].transferStatus = "transferStatus_0";
 *		valuesArray[0].txBasedPrecaution = "txBasedPrecaution_0";
 *		valuesArray[0].weeks = "weeks_0";
 *		valuesArray[0].wounds = "wounds_0";
 *		valuesArray[0].physicianUserId = "physicianUserId_0";
 *		valuesArray[0].caseManagerUserId = "caseManagerUserId_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].advanceProcedures = "advanceProcedures_1";
 *		valuesArray[1].appointmentType = "appointmentType_1";
 *		valuesArray[1].caseManager = "caseManager_1";
 *		valuesArray[1].facilityId = "facilityId_1";
 *		valuesArray[1].lastUpdatedBy = "lastUpdatedBy_1";
 *		valuesArray[1].msrFlag = "msrFlag_1";
 *		valuesArray[1].msrReviewFlag = "msrReviewFlag_1";
 *		valuesArray[1].msrWeek = "msrWeek_1";
 *		valuesArray[1].name = "name_1";
 *		valuesArray[1].nextAppointment = "nextAppointment_1";
 *		valuesArray[1].patientId = "patientId_1";
 *		valuesArray[1].physician = "physician_1";
 *		valuesArray[1].transferStatus = "transferStatus_1";
 *		valuesArray[1].txBasedPrecaution = "txBasedPrecaution_1";
 *		valuesArray[1].weeks = "weeks_1";
 *		valuesArray[1].wounds = "wounds_1";
 *		valuesArray[1].physicianUserId = "physicianUserId_1";
 *		valuesArray[1].caseManagerUserId = "caseManagerUserId_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].advanceProcedures = "advanceProcedures_2";
 *		valuesArray[2].appointmentType = "appointmentType_2";
 *		valuesArray[2].caseManager = "caseManager_2";
 *		valuesArray[2].facilityId = "facilityId_2";
 *		valuesArray[2].lastUpdatedBy = "lastUpdatedBy_2";
 *		valuesArray[2].msrFlag = "msrFlag_2";
 *		valuesArray[2].msrReviewFlag = "msrReviewFlag_2";
 *		valuesArray[2].msrWeek = "msrWeek_2";
 *		valuesArray[2].name = "name_2";
 *		valuesArray[2].nextAppointment = "nextAppointment_2";
 *		valuesArray[2].patientId = "patientId_2";
 *		valuesArray[2].physician = "physician_2";
 *		valuesArray[2].transferStatus = "transferStatus_2";
 *		valuesArray[2].txBasedPrecaution = "txBasedPrecaution_2";
 *		valuesArray[2].weeks = "weeks_2";
 *		valuesArray[2].wounds = "wounds_2";
 *		valuesArray[2].physicianUserId = "physicianUserId_2";
 *		valuesArray[2].caseManagerUserId = "caseManagerUserId_2";
 *		com.healogic.offline.patientList.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.healogic.offline.patientList.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientList.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "patientList", errorcallback, true) === false) {
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
                var wcs = [];
                if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.healogic.offline.patientList.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.healogic.offline.patientList.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.healogic.offline.patientList.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates patientList using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientList.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientList.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.healogic.offline.patientList.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.patientList.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogic.offline.patientList.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "patientList", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.healogic.offline.patientList.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates patientList(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientList.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientList.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "patientList", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogic.offline.patientList.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogic.offline.patientList.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.healogic.offline.patientList.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogic.offline.patientList.getPKTable());
    }
};
/************************************************************************************
 * Updates patientList(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.advanceProcedures = "advanceProcedures_updated0";
 *		inputArray[0].changeSet.appointmentType = "appointmentType_updated0";
 *		inputArray[0].changeSet.caseManager = "caseManager_updated0";
 *		inputArray[0].changeSet.lastUpdatedBy = "lastUpdatedBy_updated0";
 *		inputArray[0].whereClause = "where facilityId = '0'";
 *		inputArray[0].whereClause = "where patientId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.advanceProcedures = "advanceProcedures_updated1";
 *		inputArray[1].changeSet.appointmentType = "appointmentType_updated1";
 *		inputArray[1].changeSet.caseManager = "caseManager_updated1";
 *		inputArray[1].changeSet.lastUpdatedBy = "lastUpdatedBy_updated1";
 *		inputArray[1].whereClause = "where facilityId = '1'";
 *		inputArray[1].whereClause = "where patientId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.advanceProcedures = "advanceProcedures_updated2";
 *		inputArray[2].changeSet.appointmentType = "appointmentType_updated2";
 *		inputArray[2].changeSet.caseManager = "caseManager_updated2";
 *		inputArray[2].changeSet.lastUpdatedBy = "lastUpdatedBy_updated2";
 *		inputArray[2].whereClause = "where facilityId = '2'";
 *		inputArray[2].whereClause = "where patientId = '2'";
 *		com.healogic.offline.patientList.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.healogic.offline.patientList.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.healogic.offline.patientList.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "patientList";
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
                if (kony.sync.attributeValidation(valuestable, "patientList", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.healogic.offline.patientList.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.healogic.offline.patientList.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.healogic.offline.patientList.getPKTable());
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
            sync.log.trace("Entering  com.healogic.offline.patientList.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.healogic.offline.patientList.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes patientList using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.healogic.offline.patientList.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientList.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.patientList.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientList.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function patientListTransactionCallback(tx) {
        sync.log.trace("Entering com.healogic.offline.patientList.deleteByPK->patientList_PKPresent successcallback");
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

    function patientListErrorCallback() {
        sync.log.error("Entering com.healogic.offline.patientList.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function patientListSuccessCallback() {
        sync.log.trace("Entering com.healogic.offline.patientList.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.healogic.offline.patientList.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, patientListTransactionCallback, patientListSuccessCallback, patientListErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes patientList(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.healogic.offline.patientList.remove("where advanceProcedures like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.healogic.offline.patientList.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientList.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function patientList_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function patientList_removeSuccess() {
        sync.log.trace("Entering com.healogic.offline.patientList.remove->patientList_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogic.offline.patientList.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogic.offline.patientList.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, patientList_removeTransactioncallback, patientList_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes patientList using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogic.offline.patientList.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientList.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientList.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function patientListTransactionCallback(tx) {
        sync.log.trace("Entering com.healogic.offline.patientList.removeDeviceInstanceByPK -> patientListTransactionCallback");
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

    function patientListErrorCallback() {
        sync.log.error("Entering com.healogic.offline.patientList.removeDeviceInstanceByPK -> patientListErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function patientListSuccessCallback() {
        sync.log.trace("Entering com.healogic.offline.patientList.removeDeviceInstanceByPK -> patientListSuccessCallback");
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
        sync.log.error("Entering com.healogic.offline.patientList.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, patientListTransactionCallback, patientListSuccessCallback, patientListErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes patientList(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogic.offline.patientList.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function patientList_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function patientList_removeSuccess() {
        sync.log.trace("Entering com.healogic.offline.patientList.remove->patientList_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogic.offline.patientList.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogic.offline.patientList.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, patientList_removeTransactioncallback, patientList_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves patientList using primary key from the local Database. 
 *************************************************************************************/
com.healogic.offline.patientList.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientList.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientList.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    var wcs = [];
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.healogic.offline.patientList.getAllDetailsByPK-> success callback function");
        successcallback(com.healogic.offline.patientList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves patientList(s) using where clause from the local Database. 
 * e.g. com.healogic.offline.patientList.find("where advanceProcedures like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.healogic.offline.patientList.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of patientList with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientList.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientList.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientList.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of patientList matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientList.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.patientList.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.healogic.offline.patientList.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.healogic.offline.patientList.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of patientList pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.healogic.offline.patientList.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.patientList.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of patientList pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.healogic.offline.patientList.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientList.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of patientList deferred for upload.
 *************************************************************************************/
com.healogic.offline.patientList.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.patientList.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to patientList in local database to last synced state
 *************************************************************************************/
com.healogic.offline.patientList.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientList.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to patientList's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.healogic.offline.patientList.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientList.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientList.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    var wcs = [];
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientList.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogic.offline.patientList.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether patientList's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.healogic.offline.patientList.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientList.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.healogic.offline.patientList.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.healogic.offline.patientList.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    var wcs = [];
    var flag;
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogic.offline.patientList.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether patientList's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.healogic.offline.patientList.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientList.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.healogic.offline.patientList.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.healogic.offline.patientList.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientList.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientList.getTableName();
    var wcs = [];
    var flag;
    if (com.healogic.offline.patientList.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogic.offline.patientList.isRecordPendingForUpload->successcallback function");
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
com.healogic.offline.patientList.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.healogic.offline.patientList.removeCascade function");
    var tbname = com.healogic.offline.patientList.getTableName();
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
com.healogic.offline.patientList.convertTableToObject = function(res) {
    sync.log.trace("Entering com.healogic.offline.patientList.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.healogic.offline.patientList();
            obj.advanceProcedures = res[i].advanceProcedures;
            obj.appointmentType = res[i].appointmentType;
            obj.caseManager = res[i].caseManager;
            obj.deleted = res[i].deleted;
            obj.facilityId = res[i].facilityId;
            obj.lastUpdatedBy = res[i].lastUpdatedBy;
            obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
            obj.msrFlag = res[i].msrFlag;
            obj.msrReviewFlag = res[i].msrReviewFlag;
            obj.msrWeek = res[i].msrWeek;
            obj.name = res[i].name;
            obj.nextAppointment = res[i].nextAppointment;
            obj.patientId = res[i].patientId;
            obj.physician = res[i].physician;
            obj.transferStatus = res[i].transferStatus;
            obj.txBasedPrecaution = res[i].txBasedPrecaution;
            obj.weeks = res[i].weeks;
            obj.wounds = res[i].wounds;
            obj.physicianUserId = res[i].physicianUserId;
            obj.caseManagerUserId = res[i].caseManagerUserId;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.healogic.offline.patientList.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.healogic.offline.patientList.filterAttributes function");
    var attributeTable = {};
    attributeTable.advanceProcedures = "advanceProcedures";
    attributeTable.appointmentType = "appointmentType";
    attributeTable.caseManager = "caseManager";
    attributeTable.facilityId = "facilityId";
    attributeTable.lastUpdatedBy = "lastUpdatedBy";
    attributeTable.msrFlag = "msrFlag";
    attributeTable.msrReviewFlag = "msrReviewFlag";
    attributeTable.msrWeek = "msrWeek";
    attributeTable.name = "name";
    attributeTable.nextAppointment = "nextAppointment";
    attributeTable.patientId = "patientId";
    attributeTable.physician = "physician";
    attributeTable.transferStatus = "transferStatus";
    attributeTable.txBasedPrecaution = "txBasedPrecaution";
    attributeTable.weeks = "weeks";
    attributeTable.wounds = "wounds";
    attributeTable.physicianUserId = "physicianUserId";
    attributeTable.caseManagerUserId = "caseManagerUserId";
    var PKTable = {};
    PKTable.facilityId = {}
    PKTable.facilityId.name = "facilityId";
    PKTable.facilityId.isAutoGen = false;
    PKTable.patientId = {}
    PKTable.patientId.name = "patientId";
    PKTable.patientId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject patientList. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject patientList. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject patientList. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.healogic.offline.patientList.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.healogic.offline.patientList.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.healogic.offline.patientList.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.healogic.offline.patientList.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.healogic.offline.patientList.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.advanceProcedures = this.advanceProcedures;
    valuesTable.appointmentType = this.appointmentType;
    valuesTable.caseManager = this.caseManager;
    if (isInsert === true) {
        valuesTable.facilityId = this.facilityId;
    }
    valuesTable.lastUpdatedBy = this.lastUpdatedBy;
    valuesTable.msrFlag = this.msrFlag;
    valuesTable.msrReviewFlag = this.msrReviewFlag;
    valuesTable.msrWeek = this.msrWeek;
    valuesTable.name = this.name;
    valuesTable.nextAppointment = this.nextAppointment;
    if (isInsert === true) {
        valuesTable.patientId = this.patientId;
    }
    valuesTable.physician = this.physician;
    valuesTable.transferStatus = this.transferStatus;
    valuesTable.txBasedPrecaution = this.txBasedPrecaution;
    valuesTable.weeks = this.weeks;
    valuesTable.wounds = this.wounds;
    valuesTable.physicianUserId = this.physicianUserId;
    valuesTable.caseManagerUserId = this.caseManagerUserId;
    return valuesTable;
};
com.healogic.offline.patientList.prototype.getPKTable = function() {
    sync.log.trace("Entering com.healogic.offline.patientList.prototype.getPKTable function");
    var pkTable = {};
    pkTable.facilityId = {
        key: "facilityId",
        value: this.facilityId
    };
    pkTable.patientId = {
        key: "patientId",
        value: this.patientId
    };
    return pkTable;
};
com.healogic.offline.patientList.getPKTable = function() {
    sync.log.trace("Entering com.healogic.offline.patientList.getPKTable function");
    var pkTable = [];
    pkTable.push("facilityId");
    pkTable.push("patientId");
    return pkTable;
};
com.healogic.offline.patientList.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.healogic.offline.patientList.pkCheck function");
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
        sync.log.error("Primary Key facilityId not specified in " + opName + " an item in patientList");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId", opName, "patientList")));
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
        sync.log.error("Primary Key patientId not specified in " + opName + " an item in patientList");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("patientId", opName, "patientList")));
        return;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.healogic.offline.patientList.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.validateNull function");
    return true;
};
com.healogic.offline.patientList.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientList.validateNullInsert function");
    return true;
};
com.healogic.offline.patientList.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.healogic.offline.patientList.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.healogic.offline.patientList.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.healogic.offline.patientList.getTableName = function() {
    return "patientList";
};
// **********************************End patientList's helper methods************************