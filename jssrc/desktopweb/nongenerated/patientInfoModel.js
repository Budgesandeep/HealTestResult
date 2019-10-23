//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:25 UTC 2019patientInfo*******************
// **********************************Start patientInfo's helper methods************************
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
 * Creates new patientInfo
 *************************************************************************************/
com.healogic.offline.patientInfo = function() {
    this.abiLeft = null;
    this.abiRight = null;
    this.allergies = null;
    this.careApproach = null;
    this.caseManager = null;
    this.contactNumber = null;
    this.dateOfBirth = null;
    this.deleted = null;
    this.diabeticStatus = null;
    this.facilityId = null;
    this.lastSyncTime = null;
    this.lastUpdatedBy = null;
    this.lastUpdatedTimestamp = null;
    this.medicalRecNo = null;
    this.msrFlag = null;
    this.msrReviewFlag = null;
    this.name = null;
    this.nextAppointmentDt = null;
    this.patientId = null;
    this.priCarePhy = null;
    this.priInsur = null;
    this.refPhy = null;
    this.secInsur = null;
    this.terInsur = null;
    this.wccPhy = null;
    this.weeksInTreat = null;
    this.markForUpload = true;
};
com.healogic.offline.patientInfo.prototype = {
    get abiLeft() {
        return this._abiLeft;
    },
    set abiLeft(val) {
        this._abiLeft = val;
    },
    get abiRight() {
        return this._abiRight;
    },
    set abiRight(val) {
        this._abiRight = val;
    },
    get allergies() {
        return this._allergies;
    },
    set allergies(val) {
        this._allergies = val;
    },
    get careApproach() {
        return this._careApproach;
    },
    set careApproach(val) {
        this._careApproach = val;
    },
    get caseManager() {
        return this._caseManager;
    },
    set caseManager(val) {
        this._caseManager = val;
    },
    get contactNumber() {
        return this._contactNumber;
    },
    set contactNumber(val) {
        this._contactNumber = val;
    },
    get dateOfBirth() {
        return this._dateOfBirth;
    },
    set dateOfBirth(val) {
        this._dateOfBirth = val;
    },
    get deleted() {
        return this._deleted;
    },
    set deleted(val) {
        this._deleted = val;
    },
    get diabeticStatus() {
        return this._diabeticStatus;
    },
    set diabeticStatus(val) {
        this._diabeticStatus = val;
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
    get medicalRecNo() {
        return this._medicalRecNo;
    },
    set medicalRecNo(val) {
        this._medicalRecNo = val;
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
    get name() {
        return this._name;
    },
    set name(val) {
        this._name = val;
    },
    get nextAppointmentDt() {
        return this._nextAppointmentDt;
    },
    set nextAppointmentDt(val) {
        this._nextAppointmentDt = val;
    },
    get patientId() {
        return this._patientId;
    },
    set patientId(val) {
        this._patientId = val;
    },
    get priCarePhy() {
        return this._priCarePhy;
    },
    set priCarePhy(val) {
        this._priCarePhy = val;
    },
    get priInsur() {
        return this._priInsur;
    },
    set priInsur(val) {
        this._priInsur = val;
    },
    get refPhy() {
        return this._refPhy;
    },
    set refPhy(val) {
        this._refPhy = val;
    },
    get secInsur() {
        return this._secInsur;
    },
    set secInsur(val) {
        this._secInsur = val;
    },
    get terInsur() {
        return this._terInsur;
    },
    set terInsur(val) {
        this._terInsur = val;
    },
    get wccPhy() {
        return this._wccPhy;
    },
    set wccPhy(val) {
        this._wccPhy = val;
    },
    get weeksInTreat() {
        return this._weeksInTreat;
    },
    set weeksInTreat(val) {
        this._weeksInTreat = val;
    },
};
/************************************************************************************
 * Retrieves all instances of patientInfo SyncObject present in local database with
 * given limit and offset where limit indicates the number of records to be retrieved
 * and offset indicates number of rows to be ignored before returning the records.
 * e.g. var orderByMap = []
 * orderByMap[0] = {};
 * orderByMap[0].key = "abiLeft";
 * orderByMap[0].sortType ="desc";
 * orderByMap[1] = {};
 * orderByMap[1].key = "abiRight";
 * orderByMap[1].sortType ="asc";
 * var limit = 20;
 * var offset = 5;
 * com.healogic.offline.patientInfo.getAll(successcallback,errorcallback, orderByMap, limit, offset)
 *************************************************************************************/
com.healogic.offline.patientInfo.getAll = function(successcallback, errorcallback, orderByMap, limit, offset) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getAll->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    orderByMap = kony.sync.formOrderByClause("patientInfo", orderByMap);
    var query = kony.sync.qb_createQuery();
    kony.sync.qb_select(query, null);
    kony.sync.qb_from(query, tbname);
    kony.sync.qb_orderBy(query, orderByMap);
    kony.sync.qb_limitOffset(query, limit, offset);
    var query_compile = kony.sync.qb_compile(query);
    var sql = query_compile[0];
    var params = query_compile[1];

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.getAll->successcallback");
        successcallback(com.healogic.offline.patientInfo.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Returns number of patientInfo present in local database.
 *************************************************************************************/
com.healogic.offline.patientInfo.getAllCount = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getAllCount function");
    com.healogic.offline.patientInfo.getCount("", successcallback, errorcallback);
};
/************************************************************************************
 * Returns number of patientInfo using where clause in the local Database
 *************************************************************************************/
com.healogic.offline.patientInfo.getCount = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getCount->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.getCount", "getCount", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select count(*) from \"" + tbname + "\" " + wcs;
    kony.sync.single_execute_sql(dbname, sql, null, mySuccCallback, errorcallback);

    function mySuccCallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.getCount->successcallback");
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
 * Creates a new instance of patientInfo in the local Database. The new record will 
 * be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.create = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientInfo.prototype.create function");
    var valuestable = this.getValuesTable(true);
    com.healogic.offline.patientInfo.create(valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.patientInfo.create = function(valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogic.offline.patientInfo.create->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.create", "create", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    if (kony.sync.attributeValidation(valuestable, "patientInfo", errorcallback, true) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogic.offline.patientInfo.create->success callback");
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
    var pks = [];
    var errMsg = "";

    function createSuccesscallback(res) {
        if (res == null || res.length == 0) {
            var relationshipMap = {};
            relationshipMap = com.healogic.offline.patientInfo.getRelationshipMap(relationshipMap, valuestable);
            kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
        } else {
            errMsg = "[" + errMsg + "]";
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey, kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
        }
    }
    if (kony.sync.enableORMValidations) {
        errMsg = "patientId=" + valuestable.patientId;
        pks["patientId"] = {
            key: "patientId",
            value: valuestable.patientId
        };
        com.healogic.offline.patientInfo.getAllDetailsByPK(pks, createSuccesscallback, errorcallback)
    } else {
        kony.sync.single_insert_execute(dbname, tbname, valuestable, successcallback, errorcallback, markForUpload);
    }
};
/************************************************************************************
 * Creates number of new instances of patientInfo in the local Database. These new 
 * records will be merged with the enterprise datasource in the next Sync. Based upon 
 * kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var valuesArray = [];
 *		valuesArray[0] = {};
 *		valuesArray[0].abiLeft = "abiLeft_0";
 *		valuesArray[0].abiRight = "abiRight_0";
 *		valuesArray[0].allergies = "allergies_0";
 *		valuesArray[0].careApproach = "careApproach_0";
 *		valuesArray[0].caseManager = "caseManager_0";
 *		valuesArray[0].contactNumber = "contactNumber_0";
 *		valuesArray[0].dateOfBirth = "dateOfBirth_0";
 *		valuesArray[0].diabeticStatus = "diabeticStatus_0";
 *		valuesArray[0].facilityId = "facilityId_0";
 *		valuesArray[0].lastSyncTime = "lastSyncTime_0";
 *		valuesArray[0].lastUpdatedBy = "lastUpdatedBy_0";
 *		valuesArray[0].medicalRecNo = "medicalRecNo_0";
 *		valuesArray[0].msrFlag = "msrFlag_0";
 *		valuesArray[0].msrReviewFlag = "msrReviewFlag_0";
 *		valuesArray[0].name = "name_0";
 *		valuesArray[0].nextAppointmentDt = "nextAppointmentDt_0";
 *		valuesArray[0].patientId = "patientId_0";
 *		valuesArray[0].priCarePhy = "priCarePhy_0";
 *		valuesArray[0].priInsur = "priInsur_0";
 *		valuesArray[0].refPhy = "refPhy_0";
 *		valuesArray[0].secInsur = "secInsur_0";
 *		valuesArray[0].terInsur = "terInsur_0";
 *		valuesArray[0].wccPhy = "wccPhy_0";
 *		valuesArray[0].weeksInTreat = "weeksInTreat_0";
 *		valuesArray[1] = {};
 *		valuesArray[1].abiLeft = "abiLeft_1";
 *		valuesArray[1].abiRight = "abiRight_1";
 *		valuesArray[1].allergies = "allergies_1";
 *		valuesArray[1].careApproach = "careApproach_1";
 *		valuesArray[1].caseManager = "caseManager_1";
 *		valuesArray[1].contactNumber = "contactNumber_1";
 *		valuesArray[1].dateOfBirth = "dateOfBirth_1";
 *		valuesArray[1].diabeticStatus = "diabeticStatus_1";
 *		valuesArray[1].facilityId = "facilityId_1";
 *		valuesArray[1].lastSyncTime = "lastSyncTime_1";
 *		valuesArray[1].lastUpdatedBy = "lastUpdatedBy_1";
 *		valuesArray[1].medicalRecNo = "medicalRecNo_1";
 *		valuesArray[1].msrFlag = "msrFlag_1";
 *		valuesArray[1].msrReviewFlag = "msrReviewFlag_1";
 *		valuesArray[1].name = "name_1";
 *		valuesArray[1].nextAppointmentDt = "nextAppointmentDt_1";
 *		valuesArray[1].patientId = "patientId_1";
 *		valuesArray[1].priCarePhy = "priCarePhy_1";
 *		valuesArray[1].priInsur = "priInsur_1";
 *		valuesArray[1].refPhy = "refPhy_1";
 *		valuesArray[1].secInsur = "secInsur_1";
 *		valuesArray[1].terInsur = "terInsur_1";
 *		valuesArray[1].wccPhy = "wccPhy_1";
 *		valuesArray[1].weeksInTreat = "weeksInTreat_1";
 *		valuesArray[2] = {};
 *		valuesArray[2].abiLeft = "abiLeft_2";
 *		valuesArray[2].abiRight = "abiRight_2";
 *		valuesArray[2].allergies = "allergies_2";
 *		valuesArray[2].careApproach = "careApproach_2";
 *		valuesArray[2].caseManager = "caseManager_2";
 *		valuesArray[2].contactNumber = "contactNumber_2";
 *		valuesArray[2].dateOfBirth = "dateOfBirth_2";
 *		valuesArray[2].diabeticStatus = "diabeticStatus_2";
 *		valuesArray[2].facilityId = "facilityId_2";
 *		valuesArray[2].lastSyncTime = "lastSyncTime_2";
 *		valuesArray[2].lastUpdatedBy = "lastUpdatedBy_2";
 *		valuesArray[2].medicalRecNo = "medicalRecNo_2";
 *		valuesArray[2].msrFlag = "msrFlag_2";
 *		valuesArray[2].msrReviewFlag = "msrReviewFlag_2";
 *		valuesArray[2].name = "name_2";
 *		valuesArray[2].nextAppointmentDt = "nextAppointmentDt_2";
 *		valuesArray[2].patientId = "patientId_2";
 *		valuesArray[2].priCarePhy = "priCarePhy_2";
 *		valuesArray[2].priInsur = "priInsur_2";
 *		valuesArray[2].refPhy = "refPhy_2";
 *		valuesArray[2].secInsur = "secInsur_2";
 *		valuesArray[2].terInsur = "terInsur_2";
 *		valuesArray[2].wccPhy = "wccPhy_2";
 *		valuesArray[2].weeksInTreat = "weeksInTreat_2";
 *		com.healogic.offline.patientInfo.createAll(valuesArray, successcallback, errorcallback, true);
 *************************************************************************************/
com.healogic.offline.patientInfo.createAll = function(valuesArray, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.createAll function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.createAll", "createAll", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
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
            if (kony.sync.attributeValidation(valuestable, "patientInfo", errorcallback, true) === false) {
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
                errMsg = "patientId=" + valuestable.patientId;
                pks["patientId"] = {
                    key: "patientId",
                    value: valuestable.patientId
                };
                var wcs = [];
                if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering  com.healogic.offline.patientInfo.createAll->transactionSuccessCallback");
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
        sync.log.trace("Entering  com.healogic.offline.patientInfo.createAll->checkIntegrity");
        arrayLength = valuesArray.length;
        for (var i = 0; valuesArray != null && i < arrayLength; i++) {
            var relationshipMap = {};
            relationshipMap = com.healogic.offline.patientInfo.getRelationshipMap(relationshipMap, valuesArray[i]);
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
 * Updates patientInfo using primary key in the local Database. The update will be
 * merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.updateByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientInfo.prototype.updateByPK function");
    var pks = this.getPKTable();
    var valuestable = this.getValuesTable(false);
    com.healogic.offline.patientInfo.updateByPK(pks, valuestable, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.patientInfo.updateByPK = function(pks, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering  com.healogic.offline.patientInfo.updateByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.updateByPK", "updateByPk", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "updating") === false) {
        return;
    }
    if (kony.sync.attributeValidation(valuestable, "patientInfo", errorcallback, false) === false) {
        return;
    }
    var relationshipMap = {};
    relationshipMap = com.healogic.offline.patientInfo.getRelationshipMap(relationshipMap, valuestable);
    kony.sync.updateByPK(tbname, dbname, relationshipMap, pks, valuestable, successcallback, errorcallback, markForUpload, wcs);
};
/************************************************************************************
 * Updates patientInfo(s) using where clause in the local Database. The update(s)
 * will be merged with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientInfo.update = function(wcs, valuestable, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.update function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.update", "update", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    if (kony.sync.attributeValidation(valuestable, "patientInfo", errorcallback, false) === false) {
        return;
    }

    function executeSuccess() {
        sync.log.trace("Entering  com.healogic.offline.patientInfo.update-> success callback of Integrity Check");
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogic.offline.patientInfo.getPKTable());
    }
    if (kony.sync.enableORMValidations) {
        var relationshipMap = {};
        relationshipMap = com.healogic.offline.patientInfo.getRelationshipMap(relationshipMap, valuestable);
        kony.sync.checkIntegrity(dbname, relationshipMap, executeSuccess, errorcallback);
    } else {
        kony.sync.single_update_execute(dbname, tbname, valuestable, wcs, successcallback, errorcallback, true, markForUpload, com.healogic.offline.patientInfo.getPKTable());
    }
};
/************************************************************************************
 * Updates patientInfo(s) satisfying one or more where clauses in the local Database. 
 * The update(s) will be merged with the enterprise datasource in the next Sync.
 * Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
 * e.g.	var inputArray = [];
 *		inputArray[0] = {};
 *		inputArray[0].changeSet = {};
 *		inputArray[0].changeSet.abiLeft = "abiLeft_updated0";
 *		inputArray[0].changeSet.abiRight = "abiRight_updated0";
 *		inputArray[0].changeSet.allergies = "allergies_updated0";
 *		inputArray[0].changeSet.careApproach = "careApproach_updated0";
 *		inputArray[0].whereClause = "where patientId = '0'";
 *		inputArray[1] = {};
 *		inputArray[1].changeSet = {};
 *		inputArray[1].changeSet.abiLeft = "abiLeft_updated1";
 *		inputArray[1].changeSet.abiRight = "abiRight_updated1";
 *		inputArray[1].changeSet.allergies = "allergies_updated1";
 *		inputArray[1].changeSet.careApproach = "careApproach_updated1";
 *		inputArray[1].whereClause = "where patientId = '1'";
 *		inputArray[2] = {};
 *		inputArray[2].changeSet = {};
 *		inputArray[2].changeSet.abiLeft = "abiLeft_updated2";
 *		inputArray[2].changeSet.abiRight = "abiRight_updated2";
 *		inputArray[2].changeSet.allergies = "allergies_updated2";
 *		inputArray[2].changeSet.careApproach = "careApproach_updated2";
 *		inputArray[2].whereClause = "where patientId = '2'";
 *		com.healogic.offline.patientInfo.updateAll(inputArray,successcallback,errorcallback);
 *************************************************************************************/
com.healogic.offline.patientInfo.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.updateAll function");
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.updateAll", "updateAll", errorcallback)) {
            return;
        }
        var dbname = "1000148102b32778a";
        var tbname = "patientInfo";
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
                if (kony.sync.attributeValidation(valuestable, "patientInfo", errorcallback, false) === false) {
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
            kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, errorcallback, markForUpload, com.healogic.offline.patientInfo.getPKTable());
        }

        function transactionSuccessCallback() {
            sync.log.trace("Entering  com.healogic.offline.patientInfo.updateAll->transactionSuccessCallback");
            if (!isError) {
                kony.sync.massUpdate(dbname, tbname, inputArray, successcallback, transactionErrorCallback, markForUpload, com.healogic.offline.patientInfo.getPKTable());
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
            sync.log.trace("Entering  com.healogic.offline.patientInfo.updateAll->checkIntegrity");
            for (var i = 0;
                ((inputArray) != null) && i < inputArray.length; i++) {
                var relationshipMap = {};
                relationshipMap = com.healogic.offline.patientInfo.getRelationshipMap(relationshipMap, inputArray[i].changeSet);
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
     * Deletes patientInfo using primary key from the local Database. The record will be
     * deleted from the enterprise datasource in the next Sync.
     *************************************************************************************/
com.healogic.offline.patientInfo.prototype.deleteByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.prototype.deleteByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientInfo.deleteByPK(pks, successcallback, errorcallback, this.markForUpload);
};
com.healogic.offline.patientInfo.deleteByPK = function(pks, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.deleteByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.deleteByPK", "deleteByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var twcs = [];
    var deletedRows;
    var record = "";
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }
    twcs = kony.sync.CreateCopy(wcs);

    function patientInfoTransactionCallback(tx) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.deleteByPK->patientInfo_PKPresent successcallback");
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

    function patientInfoErrorCallback() {
        sync.log.error("Entering com.healogic.offline.patientInfo.deleteByPK->relationship failure callback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function patientInfoSuccessCallback() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.deleteByPK->relationship success callback");
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
        sync.log.error("Entering com.healogic.offline.patientInfo.deleteByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, patientInfoTransactionCallback, patientInfoSuccessCallback, patientInfoErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes patientInfo(s) using where clause from the local Database. The record(s)
 * will be deleted from the enterprise datasource in the next Sync.
 * e.g. com.healogic.offline.patientInfo.remove("where abiLeft like 'A%'", successcallback,errorcallback, true);
 *************************************************************************************/
com.healogic.offline.patientInfo.remove = function(wcs, successcallback, errorcallback, markForUpload) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.remove->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.remove", "remove", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    markForUpload = kony.sync.getUploadStatus(markForUpload);
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;
    var record = "";

    function patientInfo_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function patientInfo_removeSuccess() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.remove->patientInfo_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, patientInfo_removeTransactioncallback, patientInfo_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Deletes patientInfo using primary key from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.removeDeviceInstanceByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.prototype.removeDeviceInstanceByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientInfo.removeDeviceInstanceByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientInfo.removeDeviceInstanceByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.removeDeviceInstanceByPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.removeDeviceInstanceByPK", "removeDeviceInstanceByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    var wcs = [];
    var isError = false;
    var pkNotFound = false;
    var deletedRows;
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "deleting") === false) {
        return;
    }

    function patientInfoTransactionCallback(tx) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.removeDeviceInstanceByPK -> patientInfoTransactionCallback");
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

    function patientInfoErrorCallback() {
        sync.log.error("Entering com.healogic.offline.patientInfo.removeDeviceInstanceByPK -> patientInfoErrorCallback");
        if (isError === false) {
            kony.sync.verifyAndCallClosure(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function patientInfoSuccessCallback() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.removeDeviceInstanceByPK -> patientInfoSuccessCallback");
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
        sync.log.error("Entering com.healogic.offline.patientInfo.removeDeviceInstanceByPK -> PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
    var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
    if (dbconnection != null) {
        kony.sync.startTransaction(dbconnection, patientInfoTransactionCallback, patientInfoSuccessCallback, patientInfoErrorCallback, "Single Execute");
    }
};
/************************************************************************************
 * Deletes patientInfo(s) using where clause from the local Database. This will
 * not have any effect in enterprise datasource in subsequent sync cycles
 *************************************************************************************/
com.healogic.offline.patientInfo.removeDeviceInstance = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.removeDeviceInstance->main function");
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var twcs = wcs;
    var isError = false;
    var rowsDeleted;

    function patientInfo_removeTransactioncallback(tx) {
        wcs = " " + wcs;
        rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
        if (rowsDeleted === false) {
            isError = true;
        }
    }

    function patientInfo_removeSuccess() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.remove->patientInfo_removeSuccess function");
        if (!isError) {
            kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
        }
    }

    function errorcallbackWrapper() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.remove->error callback function");
        if (!isError) {
            kony.sync.showTransactionError(errorcallback);
        }
        if (kony.sync.errorObject != null) {
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
            kony.sync.errorObject = null;
        }
    }

    function deleteEntity() {
        sync.log.trace("Entering com.healogic.offline.patientInfo.remove->delete Entity function");
        var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
        if (connection != null) {
            kony.sync.startTransaction(connection, patientInfo_removeTransactioncallback, patientInfo_removeSuccess, errorcallbackWrapper);
        }
    }
    deleteEntity();
};
/************************************************************************************
 * Retrieves patientInfo using primary key from the local Database. 
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.getAllDetailsByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.prototype.getAllDetailsByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientInfo.getAllDetailsByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientInfo.getAllDetailsByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getAllDetailsByPK-> main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.getAllDetailsByPK", "getAllDetailsByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    var wcs = [];
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "searching") === false) {
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
        sync.log.trace("Entering com.healogic.offline.patientInfo.getAllDetailsByPK-> success callback function");
        successcallback(com.healogic.offline.patientInfo.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Retrieves patientInfo(s) using where clause from the local Database. 
 * e.g. com.healogic.offline.patientInfo.find("where abiLeft like 'A%'", successcallback,errorcallback);
 *************************************************************************************/
com.healogic.offline.patientInfo.find = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.find function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.find", "find", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    wcs = kony.sync.validateWhereClause(wcs);
    var sql = "select * from \"" + tbname + "\" " + wcs;

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientInfo.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
/************************************************************************************
 * Marks instance of patientInfo with given primary key for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.markForUploadbyPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.prototype.markForUploadbyPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientInfo.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientInfo.markForUploadbyPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.markForUploadbyPK function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.markForUploadbyPK", "markForUploadbyPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    var isError = false;
    var recordsFound = false;
    var recordsMarkedForUpload = 0;
    var wcs = [];
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "marking for upload by PK") === false) {
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
 * Marks instance(s) of patientInfo matching given where clause for upload. This will 
 * enable deferred records to merge with the enterprise datasource in the next Sync.
 *************************************************************************************/
com.healogic.offline.patientInfo.markForUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.markForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.markForUpload", "markForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.patientInfo.markForUpload->single_transaction_callback");
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
        sync.log.trace("Entering com.healogic.offline.patientInfo.markForUpload->single_transaction_success_callback");
        kony.sync.verifyAndCallClosure(successcallback, {
            count: num_records_main
        });
    }

    function single_transaction_error_callback() {
        sync.log.error("Entering com.healogic.offline.patientInfo.markForUpload->single_transaction_error_callback");
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
 * Retrieves instance(s) of patientInfo pending for upload. Records are marked for
 * pending upload if they have been updated or created locally and the changes have
 * not been merged with enterprise datasource.
 *************************************************************************************/
com.healogic.offline.patientInfo.getPendingUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getPendingUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.patientInfo.getPendingUpload->successcallback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientInfo.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of patientInfo pending for acknowledgement. This is relevant
 * when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
 * In persistent Sync the  records in the local database are put into a pending 
 * acknowledgement state after an upload.
 *************************************************************************************/
com.healogic.offline.patientInfo.getPendingAcknowledgement = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getPendingAcknowledgement->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    var currentversion = kony.sync.getCurrentVersionNumber(tbname);
    var mysql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND " + kony.sync.mainTableChangeTypeColumn + " <> -1 AND " + kony.sync.mainTableSyncVersionColumn + " <> " + currentversion + " AND " + kony.sync.mainTableChangeTypeColumn + " NOT LIKE '9%'";
    kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.getPendingAcknowledgement success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientInfo.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Retrieves instance(s) of patientInfo deferred for upload.
 *************************************************************************************/
com.healogic.offline.patientInfo.getDeferredUpload = function(wcs, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getDeferredUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
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
        sync.log.trace("Entering com.healogic.offline.patientInfo.getDeferredUpload->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.patientInfo.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
};
/************************************************************************************
 * Rollbacks all changes to patientInfo in local database to last synced state
 *************************************************************************************/
com.healogic.offline.patientInfo.rollbackPendingLocalChanges = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.rollbackPendingLocalChanges->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.rollbackPendingLocalChanges->main function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }
};
/************************************************************************************
 * Rollbacks changes to patientInfo's record with given primary key in local 
 * database to last synced state
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.rollbackPendingLocalChangesByPK = function(successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.prototype.rollbackPendingLocalChangesByPK function");
    var pks = this.getPKTable();
    com.healogic.offline.patientInfo.rollbackPendingLocalChangesByPK(pks, successcallback, errorcallback);
};
com.healogic.offline.patientInfo.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.rollbackPendingLocalChangesByPK->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.rollbackPendingLocalChangesByPK", "rollbackPendingLocalChangesByPK", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    var wcs = [];
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "rollbacking") === false) {
        return;
    }
    kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);

    function mySuccesscallback(res) {
        sync.log.trace("Entering com.healogic.offline.patientInfo.rollbackPendingLocalChangesByPK->success callback function");
        kony.sync.verifyAndCallClosure(successcallback, res);
    }

    function pkNotFoundErrCallback() {
        sync.log.error("Entering com.healogic.offline.patientInfo.rollbackPendingLocalChangesByPK->PK not found callback");
        kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
    }
};
/************************************************************************************
 * isRecordDeferredForUpload returns true or false depending on whether patientInfo's record  
 * with given primary key got deferred in last sync
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.isRecordDeferredForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientInfo.prototype.isRecordDeferredForUpload function");
    var pks = this.getPKTable();
    com.healogic.offline.patientInfo.isRecordDeferredForUpload(pks, successcallback, errorcallback);
};
com.healogic.offline.patientInfo.isRecordDeferredForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.isRecordDeferredForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.isRecordDeferredForUpload", "isRecordDeferredForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    var wcs = [];
    var flag;
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogic.offline.patientInfo.isRecordDeferredForUpload->successcallback function");
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
 * isRecordPendingForUpload returns true or false depending on whether patientInfo's record  
 * with given primary key is pending for upload
 *************************************************************************************/
com.healogic.offline.patientInfo.prototype.isRecordPendingForUpload = function(successcallback, errorcallback) {
    sync.log.trace("Entering  com.healogic.offline.patientInfo.prototype.isRecordPendingForUpload function");
    var pks = this.getPKTable();
    com.healogic.offline.patientInfo.isRecordPendingForUpload(pks, successcallback, errorcallback);
};
com.healogic.offline.patientInfo.isRecordPendingForUpload = function(pks, successcallback, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.isRecordPendingForUpload->main function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "com.healogic.offline.patientInfo.isRecordPendingForUpload", "isRecordPendingForUpload", errorcallback)) {
        return;
    }
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.patientInfo.getTableName();
    var wcs = [];
    var flag;
    if (com.healogic.offline.patientInfo.pkCheck(pks, wcs, errorcallback, "selecting") === false) {
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
        sync.log.trace("Entering com.healogic.offline.patientInfo.isRecordPendingForUpload->successcallback function");
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
com.healogic.offline.patientInfo.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.removeCascade function");
    var tbname = com.healogic.offline.patientInfo.getTableName();
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
com.healogic.offline.patientInfo.convertTableToObject = function(res) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.convertTableToObject function");
    objMap = [];
    if (res !== null) {
        for (var i in res) {
            var obj = new com.healogic.offline.patientInfo();
            obj.abiLeft = res[i].abiLeft;
            obj.abiRight = res[i].abiRight;
            obj.allergies = res[i].allergies;
            obj.careApproach = res[i].careApproach;
            obj.caseManager = res[i].caseManager;
            obj.contactNumber = res[i].contactNumber;
            obj.dateOfBirth = res[i].dateOfBirth;
            obj.deleted = res[i].deleted;
            obj.diabeticStatus = res[i].diabeticStatus;
            obj.facilityId = res[i].facilityId;
            obj.lastSyncTime = res[i].lastSyncTime;
            obj.lastUpdatedBy = res[i].lastUpdatedBy;
            obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
            obj.medicalRecNo = res[i].medicalRecNo;
            obj.msrFlag = res[i].msrFlag;
            obj.msrReviewFlag = res[i].msrReviewFlag;
            obj.name = res[i].name;
            obj.nextAppointmentDt = res[i].nextAppointmentDt;
            obj.patientId = res[i].patientId;
            obj.priCarePhy = res[i].priCarePhy;
            obj.priInsur = res[i].priInsur;
            obj.refPhy = res[i].refPhy;
            obj.secInsur = res[i].secInsur;
            obj.terInsur = res[i].terInsur;
            obj.wccPhy = res[i].wccPhy;
            obj.weeksInTreat = res[i].weeksInTreat;
            obj.markForUpload = (Math.floor(res[i].konysyncchangetype / 10) == 9) ? false : true;
            objMap[i] = obj;
        }
    }
    return objMap;
};
com.healogic.offline.patientInfo.filterAttributes = function(valuestable, insert) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.filterAttributes function");
    var attributeTable = {};
    attributeTable.abiLeft = "abiLeft";
    attributeTable.abiRight = "abiRight";
    attributeTable.allergies = "allergies";
    attributeTable.careApproach = "careApproach";
    attributeTable.caseManager = "caseManager";
    attributeTable.contactNumber = "contactNumber";
    attributeTable.dateOfBirth = "dateOfBirth";
    attributeTable.diabeticStatus = "diabeticStatus";
    attributeTable.facilityId = "facilityId";
    attributeTable.lastSyncTime = "lastSyncTime";
    attributeTable.lastUpdatedBy = "lastUpdatedBy";
    attributeTable.medicalRecNo = "medicalRecNo";
    attributeTable.msrFlag = "msrFlag";
    attributeTable.msrReviewFlag = "msrReviewFlag";
    attributeTable.name = "name";
    attributeTable.nextAppointmentDt = "nextAppointmentDt";
    attributeTable.patientId = "patientId";
    attributeTable.priCarePhy = "priCarePhy";
    attributeTable.priInsur = "priInsur";
    attributeTable.refPhy = "refPhy";
    attributeTable.secInsur = "secInsur";
    attributeTable.terInsur = "terInsur";
    attributeTable.wccPhy = "wccPhy";
    attributeTable.weeksInTreat = "weeksInTreat";
    var PKTable = {};
    PKTable.patientId = {}
    PKTable.patientId.name = "patientId";
    PKTable.patientId.isAutoGen = false;
    var newvaluestable = {};
    for (var k in valuestable) {
        var v = valuestable[k];
        if (kony.sync.isNull(attributeTable[k])) {
            sync.log.warn("Ignoring the attribute " + k + " for the SyncObject patientInfo. " + k + " not defined as an attribute in SyncConfiguration.");
        } else if (!kony.sync.isNull(PKTable[k])) {
            if (insert === false) {
                sync.log.warn("Ignoring the primary key " + k + " for the SyncObject patientInfo. Primary Key should not be the part of the attributes to be updated in the local device database.");
            } else if (PKTable[k].isAutoGen) {
                sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject patientInfo. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
            } else {
                newvaluestable[k] = v;
            }
        } else {
            newvaluestable[k] = v;
        }
    }
    return newvaluestable;
};
com.healogic.offline.patientInfo.formOrderByClause = function(orderByMap) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.formOrderByClause function");
    if (!kony.sync.isNull(orderByMap)) {
        var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
        //var filteredValuestable = com.healogic.offline.patientInfo.filterAttributes(valuestable, true);
        return kony.sync.convertToValuesTableOrderByMap(orderByMap, valuestable);
    }
    return null;
};
com.healogic.offline.patientInfo.prototype.getValuesTable = function(isInsert) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.prototype.getValuesTable function");
    var valuesTable = {};
    valuesTable.abiLeft = this.abiLeft;
    valuesTable.abiRight = this.abiRight;
    valuesTable.allergies = this.allergies;
    valuesTable.careApproach = this.careApproach;
    valuesTable.caseManager = this.caseManager;
    valuesTable.contactNumber = this.contactNumber;
    valuesTable.dateOfBirth = this.dateOfBirth;
    valuesTable.diabeticStatus = this.diabeticStatus;
    valuesTable.facilityId = this.facilityId;
    valuesTable.lastSyncTime = this.lastSyncTime;
    valuesTable.lastUpdatedBy = this.lastUpdatedBy;
    valuesTable.medicalRecNo = this.medicalRecNo;
    valuesTable.msrFlag = this.msrFlag;
    valuesTable.msrReviewFlag = this.msrReviewFlag;
    valuesTable.name = this.name;
    valuesTable.nextAppointmentDt = this.nextAppointmentDt;
    if (isInsert === true) {
        valuesTable.patientId = this.patientId;
    }
    valuesTable.priCarePhy = this.priCarePhy;
    valuesTable.priInsur = this.priInsur;
    valuesTable.refPhy = this.refPhy;
    valuesTable.secInsur = this.secInsur;
    valuesTable.terInsur = this.terInsur;
    valuesTable.wccPhy = this.wccPhy;
    valuesTable.weeksInTreat = this.weeksInTreat;
    return valuesTable;
};
com.healogic.offline.patientInfo.prototype.getPKTable = function() {
    sync.log.trace("Entering com.healogic.offline.patientInfo.prototype.getPKTable function");
    var pkTable = {};
    pkTable.patientId = {
        key: "patientId",
        value: this.patientId
    };
    return pkTable;
};
com.healogic.offline.patientInfo.getPKTable = function() {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getPKTable function");
    var pkTable = [];
    pkTable.push("patientId");
    return pkTable;
};
com.healogic.offline.patientInfo.pkCheck = function(pks, wcs, errorcallback, opName) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.pkCheck function");
    var wc = [];
    if (kony.sync.isNull(pks)) {
        sync.log.error("Primary Key patientId not specified in  " + opName + "  an item in patientInfo");
        kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("patientId", opName, "patientInfo")));
        return false;
    } else if (kony.sync.isValidJSTable(pks)) {
        if (!kony.sync.isNull(pks.patientId)) {
            if (!kony.sync.isNull(pks.patientId.value)) {
                wc.key = "patientId";
                wc.value = pks.patientId.value;
            } else {
                wc.key = "patientId";
                wc.value = pks.patientId;
            }
        } else {
            sync.log.error("Primary Key patientId not specified in  " + opName + "  an item in patientInfo");
            kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified, kony.sync.getPrimaryKeyNotSpecifiedMsg("patientId", opName, "patientInfo")));
            return false;
        }
    } else {
        wc.key = "patientId";
        wc.value = pks;
    }
    kony.table.insert(wcs, wc);
    return true;
};
com.healogic.offline.patientInfo.validateNull = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.validateNull function");
    return true;
};
com.healogic.offline.patientInfo.validateNullInsert = function(valuestable, errorcallback) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.validateNullInsert function");
    return true;
};
com.healogic.offline.patientInfo.getRelationshipMap = function(relationshipMap, valuestable) {
    sync.log.trace("Entering com.healogic.offline.patientInfo.getRelationshipMap function");
    var r1 = {};
    return relationshipMap;
};
com.healogic.offline.patientInfo.checkPKValueTables = function(valuetables) {
    var checkPksNotNullFlag = true;
    for (var i = 0; i < valuetables.length; i++) {
        if (kony.sync.isNull(valuetables[i])) {
            checkPksNotNullFlag = false;
            break;
        }
    }
    return checkPksNotNullFlag;
};
com.healogic.offline.patientInfo.getTableName = function() {
    return "patientInfo";
};
// **********************************End patientInfo's helper methods************************