//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:27 UTC 2019healingWoundSubSteps*******************
// **********************************Start healingWoundSubSteps's helper methods************************
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
* Creates new healingWoundSubSteps
*************************************************************************************/
healingWoundSubSteps = function(){
	this.accessToken = null;
	this.deleted = null;
	this.docEntityId = null;
	this.facilities = null;
	this.lastSyncTime = null;
	this.lastUpdatedByUser = null;
	this.lastUpdatedTime = null;
	this.patientUuid = null;
	this.woundNumber = null;
	this.subStepDescId = null;
	this.subStepDesc = null;
	this.subStepDesc_Server = null;
	this.lastUpdatedByUser_Server = null;
	this.lastUpdatedTime_Server = null;
	this.isClientWins = null;
	this.conflictStatus = null;
	this.stepNumber = null;
	this.encounterId = null;
	this.markForUpload = true;
};

healingWoundSubSteps.prototype = {
	get accessToken(){
		return this._accessToken;
	},
	set accessToken(val){
		this._accessToken = val;
	},
	get deleted(){
		return this._deleted;
	},
	set deleted(val){
		this._deleted = val;
	},
	get docEntityId(){
		return this._docEntityId;
	},
	set docEntityId(val){
		this._docEntityId = val;
	},
	get facilities(){
		return this._facilities;
	},
	set facilities(val){
		this._facilities = val;
	},
	get lastSyncTime(){
		return this._lastSyncTime;
	},
	set lastSyncTime(val){
		this._lastSyncTime = val;
	},
	get lastUpdatedByUser(){
		return this._lastUpdatedByUser;
	},
	set lastUpdatedByUser(val){
		this._lastUpdatedByUser = val;
	},
	get lastUpdatedTime(){
		return this._lastUpdatedTime;
	},
	set lastUpdatedTime(val){
		this._lastUpdatedTime = val;
	},
	get patientUuid(){
		return this._patientUuid;
	},
	set patientUuid(val){
		this._patientUuid = val;
	},
	get woundNumber(){
		return this._woundNumber;
	},
	set woundNumber(val){
		this._woundNumber = val;
	},
	get subStepDescId(){
		return this._subStepDescId;
	},
	set subStepDescId(val){
		this._subStepDescId = val;
	},
	get subStepDesc(){
		return this._subStepDesc;
	},
	set subStepDesc(val){
		this._subStepDesc = val;
	},
	get subStepDesc_Server(){
		return this._subStepDesc_Server;
	},
	set subStepDesc_Server(val){
		this._subStepDesc_Server = val;
	},
	get lastUpdatedByUser_Server(){
		return this._lastUpdatedByUser_Server;
	},
	set lastUpdatedByUser_Server(val){
		this._lastUpdatedByUser_Server = val;
	},
	get lastUpdatedTime_Server(){
		return this._lastUpdatedTime_Server;
	},
	set lastUpdatedTime_Server(val){
		this._lastUpdatedTime_Server = val;
	},
	get isClientWins(){
		return this._isClientWins;
	},
	set isClientWins(val){
		this._isClientWins = val;
	},
	get conflictStatus(){
		return this._conflictStatus;
	},
	set conflictStatus(val){
		this._conflictStatus = val;
	},
	get stepNumber(){
		return this._stepNumber;
	},
	set stepNumber(val){
		this._stepNumber = val;
	},
	get encounterId(){
		return this._encounterId;
	},
	set encounterId(val){
		this._encounterId = val;
	},
};

/************************************************************************************
* Retrieves all instances of healingWoundSubSteps SyncObject present in local database with
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
* healingWoundSubSteps.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
healingWoundSubSteps.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering healingWoundSubSteps.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	orderByMap = kony.sync.formOrderByClause("healingWoundSubSteps",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering healingWoundSubSteps.getAll->successcallback");
		successcallback(healingWoundSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of healingWoundSubSteps present in local database.
*************************************************************************************/
healingWoundSubSteps.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.getAllCount function");
	healingWoundSubSteps.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of healingWoundSubSteps using where clause in the local Database
*************************************************************************************/
healingWoundSubSteps.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering healingWoundSubSteps.getCount->successcallback");
		if(null!==res){
			var count = null;
			count = res["count(*)"];
			kony.sync.verifyAndCallClosure(successcallback, {count:count});
		}
		else{
			sync.log.error("Some error occured while getting the count");
		}
	}
};

/************************************************************************************
* Creates a new instance of healingWoundSubSteps in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWoundSubSteps.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWoundSubSteps.prototype.create function");
	var valuestable = this.getValuesTable(true);
	healingWoundSubSteps.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
healingWoundSubSteps.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  healingWoundSubSteps.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"healingWoundSubSteps",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  healingWoundSubSteps.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = healingWoundSubSteps.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "docEntityId=" + valuestable.docEntityId;
		pks["docEntityId"] = {key:"docEntityId",value:valuestable.docEntityId};
		errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
		pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
		errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
		pks["woundNumber"] = {key:"woundNumber",value:valuestable.woundNumber};
		errMsg = errMsg + ", subStepDescId=" + valuestable.subStepDescId;
		pks["subStepDescId"] = {key:"subStepDescId",value:valuestable.subStepDescId};
		errMsg = errMsg + ", stepNumber=" + valuestable.stepNumber;
		pks["stepNumber"] = {key:"stepNumber",value:valuestable.stepNumber};
		errMsg = errMsg + ", encounterId=" + valuestable.encounterId;
		pks["encounterId"] = {key:"encounterId",value:valuestable.encounterId};
		healingWoundSubSteps.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of healingWoundSubSteps in the local Database. These new 
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
*		valuesArray[0].subStepDescId = "subStepDescId_0";
*		valuesArray[0].subStepDesc = "subStepDesc_0";
*		valuesArray[0].subStepDesc_Server = "subStepDesc_Server_0";
*		valuesArray[0].lastUpdatedByUser_Server = "lastUpdatedByUser_Server_0";
*		valuesArray[0].lastUpdatedTime_Server = "lastUpdatedTime_Server_0";
*		valuesArray[0].isClientWins = "isClientWins_0";
*		valuesArray[0].conflictStatus = "conflictStatus_0";
*		valuesArray[0].stepNumber = "stepNumber_0";
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
*		valuesArray[1].subStepDescId = "subStepDescId_1";
*		valuesArray[1].subStepDesc = "subStepDesc_1";
*		valuesArray[1].subStepDesc_Server = "subStepDesc_Server_1";
*		valuesArray[1].lastUpdatedByUser_Server = "lastUpdatedByUser_Server_1";
*		valuesArray[1].lastUpdatedTime_Server = "lastUpdatedTime_Server_1";
*		valuesArray[1].isClientWins = "isClientWins_1";
*		valuesArray[1].conflictStatus = "conflictStatus_1";
*		valuesArray[1].stepNumber = "stepNumber_1";
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
*		valuesArray[2].subStepDescId = "subStepDescId_2";
*		valuesArray[2].subStepDesc = "subStepDesc_2";
*		valuesArray[2].subStepDesc_Server = "subStepDesc_Server_2";
*		valuesArray[2].lastUpdatedByUser_Server = "lastUpdatedByUser_Server_2";
*		valuesArray[2].lastUpdatedTime_Server = "lastUpdatedTime_Server_2";
*		valuesArray[2].isClientWins = "isClientWins_2";
*		valuesArray[2].conflictStatus = "conflictStatus_2";
*		valuesArray[2].stepNumber = "stepNumber_2";
*		valuesArray[2].encounterId = "encounterId_2";
*		healingWoundSubSteps.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
healingWoundSubSteps.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering healingWoundSubSteps.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var isProperData = true;
	var arrayLen = 0;
	var errorInfo = [];
	var arrayLength = valuesArray.length;
	var errObject = null;
	var isReferentialIntegrityFailure = false;
	var errMsg = null;
	if(kony.sync.enableORMValidations){
		var newValuesArray = [];

		//column level validations
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
			if(kony.sync.attributeValidation(valuestable,"healingWoundSubSteps",errorcallback,true)===false){
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
		function checkDuplicatePkCallback(tx){
			arrayLength = valuesArray.length;
			for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
				var pks = [];
				errMsg = "docEntityId=" + valuestable.docEntityId;
				pks["docEntityId"] = {key:"docEntityId",value:valuestable.docEntityId};
				errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
				pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
				errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
				pks["woundNumber"] = {key:"woundNumber",value:valuestable.woundNumber};
				errMsg = errMsg + ", subStepDescId=" + valuestable.subStepDescId;
				pks["subStepDescId"] = {key:"subStepDescId",value:valuestable.subStepDescId};
				errMsg = errMsg + ", stepNumber=" + valuestable.stepNumber;
				pks["stepNumber"] = {key:"stepNumber",value:valuestable.stepNumber};
				errMsg = errMsg + ", encounterId=" + valuestable.encounterId;
				pks["encounterId"] = {key:"encounterId",value:valuestable.encounterId};
				var wcs = [];
				if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
				if(resultset===false){
					isError = true;
					return;
				}
				if(resultset.rows.length!=0){
					isError = true;
					errMsg = "[" + errMsg + "]";
					isDuplicateKey = true;
					return;
				}
			}
			if(!isError){
				checkIntegrity(tx);
			}
		}
	}
	else{
		//copying by value
		var newValuesArray = [];
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
		}
		valuesArray = newValuesArray;
		kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
	}

	function transactionErrorCallback(){
		if(isError==true){
			//Statement error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
		}
		else{
			//Transaction error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}

	function transactionSuccessCallback(){
		sync.log.trace("Entering  healingWoundSubSteps.createAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
		else{
			if(isReferentialIntegrityFailure){
				kony.sync.verifyAndCallClosure(errorcallback, errObject);
			}
			if(isDuplicateKey){
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
			}
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  healingWoundSubSteps.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = healingWoundSubSteps.getRelationshipMap(relationshipMap,valuesArray[i]);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				isReferentialIntegrityFailure = true;
				return;
			}
		}
	}
};
/************************************************************************************
* Updates healingWoundSubSteps using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWoundSubSteps.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWoundSubSteps.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	healingWoundSubSteps.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
healingWoundSubSteps.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  healingWoundSubSteps.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"healingWoundSubSteps",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = healingWoundSubSteps.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates healingWoundSubSteps(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWoundSubSteps.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering healingWoundSubSteps.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"healingWoundSubSteps",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  healingWoundSubSteps.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, healingWoundSubSteps.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = healingWoundSubSteps.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, healingWoundSubSteps.getPKTable());
	}
};

/************************************************************************************
* Updates healingWoundSubSteps(s) satisfying one or more where clauses in the local Database. 
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
*		inputArray[0].whereClause = "where subStepDescId = '0'";
*		inputArray[0].whereClause = "where stepNumber = '0'";
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
*		inputArray[1].whereClause = "where subStepDescId = '1'";
*		inputArray[1].whereClause = "where stepNumber = '1'";
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
*		inputArray[2].whereClause = "where subStepDescId = '2'";
*		inputArray[2].whereClause = "where stepNumber = '2'";
*		inputArray[2].whereClause = "where encounterId = '2'";
*		healingWoundSubSteps.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
healingWoundSubSteps.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering healingWoundSubSteps.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "healingWoundSubSteps";
	var isError = false;
	var errObject = null;
	if(markForUpload == false || markForUpload == "false"){
		markForUpload="false"
	}
	else{
		markForUpload="true"
	}
	if((kony.sync.enableORMValidations)){

		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var v = inputArray[i];
			var valuestable = v.changeSet;
			var isEmpty = true;
			for(var key in valuestable){
				isEmpty = false;
				break;
			}
			if(isEmpty){
				errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeNullValue,kony.sync.getErrorMessage(kony.sync.errorCodeNullValue)));
				return;
			}
			var wcs = v.whereClause;
			var twcs = wcs;
			if(kony.sync.attributeValidation(valuestable,"healingWoundSubSteps",errorcallback,false)===false){
				return;
			}

			newInputArray[i] = [];
			newInputArray[i].changeSet = valuestable;
			newInputArray[i].whereClause = wcs;
		}
		inputArray = newInputArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);

	}
	else{
		//copying by value
		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
		    var v = inputArray[i];
		    newInputArray[i] = kony.sync.CreateCopy(v);
		}
		inputArray = newInputArray;
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, healingWoundSubSteps.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  healingWoundSubSteps.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, healingWoundSubSteps.getPKTable());
		}
	}

	function transactionErrorCallback(){
		if(errObject===false){
			//Sql statement error has occcurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
			
		}
		else if(errObject!==null){
			// Referential integrity error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, errObject);
		}
		else{
			//Transaction error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  healingWoundSubSteps.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = healingWoundSubSteps.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
			sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}
	}


}
/************************************************************************************
* Deletes healingWoundSubSteps using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
healingWoundSubSteps.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.prototype.deleteByPK function");
	var pks = this.getPKTable();
	healingWoundSubSteps.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
healingWoundSubSteps.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering healingWoundSubSteps.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function healingWoundSubStepsTransactionCallback(tx){
		sync.log.trace("Entering healingWoundSubSteps.deleteByPK->healingWoundSubSteps_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
		}else{
			pkNotFound = true;
		}
		var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
	}
	
	function healingWoundSubStepsErrorCallback(){
		sync.log.error("Entering healingWoundSubSteps.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function healingWoundSubStepsSuccessCallback(){
		sync.log.trace("Entering healingWoundSubSteps.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering healingWoundSubSteps.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, healingWoundSubStepsTransactionCallback, healingWoundSubStepsSuccessCallback, healingWoundSubStepsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes healingWoundSubSteps(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. healingWoundSubSteps.remove("where accessToken like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
healingWoundSubSteps.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering healingWoundSubSteps.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function healingWoundSubSteps_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function healingWoundSubSteps_removeSuccess(){
		sync.log.trace("Entering healingWoundSubSteps.remove->healingWoundSubSteps_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering healingWoundSubSteps.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering healingWoundSubSteps.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, healingWoundSubSteps_removeTransactioncallback, healingWoundSubSteps_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes healingWoundSubSteps using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
healingWoundSubSteps.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	healingWoundSubSteps.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
healingWoundSubSteps.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function healingWoundSubStepsTransactionCallback(tx){
		sync.log.trace("Entering healingWoundSubSteps.removeDeviceInstanceByPK -> healingWoundSubStepsTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function healingWoundSubStepsErrorCallback(){
		sync.log.error("Entering healingWoundSubSteps.removeDeviceInstanceByPK -> healingWoundSubStepsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function healingWoundSubStepsSuccessCallback(){
		sync.log.trace("Entering healingWoundSubSteps.removeDeviceInstanceByPK -> healingWoundSubStepsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering healingWoundSubSteps.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, healingWoundSubStepsTransactionCallback, healingWoundSubStepsSuccessCallback, healingWoundSubStepsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes healingWoundSubSteps(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
healingWoundSubSteps.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function healingWoundSubSteps_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function healingWoundSubSteps_removeSuccess(){
		sync.log.trace("Entering healingWoundSubSteps.remove->healingWoundSubSteps_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering healingWoundSubSteps.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering healingWoundSubSteps.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, healingWoundSubSteps_removeTransactioncallback, healingWoundSubSteps_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves healingWoundSubSteps using primary key from the local Database. 
*************************************************************************************/
healingWoundSubSteps.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	healingWoundSubSteps.getAllDetailsByPK(pks,successcallback,errorcallback);
};
healingWoundSubSteps.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var wcs = [];
	if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
	function mySuccCallback(res){
		sync.log.trace("Entering healingWoundSubSteps.getAllDetailsByPK-> success callback function");
		successcallback(healingWoundSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves healingWoundSubSteps(s) using where clause from the local Database. 
* e.g. healingWoundSubSteps.find("where accessToken like 'A%'", successcallback,errorcallback);
*************************************************************************************/
healingWoundSubSteps.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, healingWoundSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of healingWoundSubSteps with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWoundSubSteps.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	healingWoundSubSteps.markForUploadbyPK(pks, successcallback, errorcallback);
};
healingWoundSubSteps.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(healingWoundSubSteps.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
		return;
	}

	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);		
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = [];
		twcs = wcs;
		kony.table.insert(twcs,{key : kony.sync.historyTableChangeTypeColumn, value : record[kony.sync.historyTableChangeTypeColumn], optype : "EQ",comptype : "AND"});
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
					kony.sync.qb_where(query, twcs);
		kony.table.remove(twcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);
	}
	
	function single_transaction_callback (tx){
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query, tbname);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		var resultSet = kony.sync.executeSql(tx, sql, params);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		if(num_records > 0){
			recordsFound = true;
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, 0);
			var changeType = record[kony.sync.mainTableChangeTypeColumn];
			if(!kony.sync.isNullOrUndefined(changeType) && kony.string.startsWith(""+changeType,"9")){
				recordsMarkedForUpload = 1;
				if(markRecordForUpload(tx, record) === false){
					isError = true;
					return;
				}
			}
		}
					
				
		var query1 =kony.sync.qb_createQuery();
					kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
					kony.sync.qb_where(query1, wcs);
		var query1_compile = kony.sync.qb_compile(query1);
		var sql1 = query1_compile[0];
		var params1 = query1_compile[1];
		var resultSet1 = kony.sync.executeSql (tx, sql1, params1);
		if(resultSet1!==false){
			var num_records = resultSet1.rows.length;
			for(var i = 0; i <= num_records - 1; i++ ){
				var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
				if(markRecordForUploadHistory(tx, record) === false){
					isError = true;
					return;
				}
				recordsFound = true;
			}
		}
		else{
			isError = true;
		}
	}
	function single_transaction_success_callback(){
		if(recordsFound === true){
			kony.sync.verifyAndCallClosure(successcallback , {count:recordsMarkedForUpload});
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	
	function single_transaction_error_callback(res){
		if (!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Marks instance(s) of healingWoundSubSteps matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWoundSubSteps.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var isError = false;
	var num_records_main = 0;
	wcs = kony.sync.validateWhereClause(wcs);
	if(!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
		wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}else{	
		wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}
	
	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0] + " " + wcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = "";
		twcs = wcs;
		twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0]  + " " + twcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function single_transaction_callback (tx){
		sync.log.trace("Entering healingWoundSubSteps.markForUpload->single_transaction_callback");
		//updating main table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from \"" + tbname + "\" " + wcs ;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}
		
		num_records_main = resultSet.rows.length;
		for(var i = 0; i < num_records_main; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
		}
		
		//updating history table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for ( var i = 0; i <= num_records - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUploadHistory(tx, record)=== false){
				isError = true;
				return;
			}
		}
	}
	
	function single_transaction_success_callback(){
		sync.log.trace("Entering healingWoundSubSteps.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering healingWoundSubSteps.markForUpload->single_transaction_error_callback");
		if(!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Retrieves instance(s) of healingWoundSubSteps pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
healingWoundSubSteps.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql;
	if(typeof(wcs) === "string" && wcs != null){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname + "\" "+ wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWoundSubSteps.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, healingWoundSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of healingWoundSubSteps pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
healingWoundSubSteps.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWoundSubSteps.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, healingWoundSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of healingWoundSubSteps deferred for upload.
*************************************************************************************/
healingWoundSubSteps.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var sql;
	if(typeof(wcs) === "string" && wcs != null ){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname +  "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'";
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	}
	
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWoundSubSteps.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, healingWoundSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to healingWoundSubSteps in local database to last synced state
*************************************************************************************/
healingWoundSubSteps.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWoundSubSteps.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to healingWoundSubSteps's record with given primary key in local 
* database to last synced state
*************************************************************************************/
healingWoundSubSteps.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	healingWoundSubSteps.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
healingWoundSubSteps.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var wcs = [];
	if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWoundSubSteps.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering healingWoundSubSteps.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether healingWoundSubSteps's record  
* with given primary key got deferred in last sync
*************************************************************************************/
healingWoundSubSteps.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWoundSubSteps.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	healingWoundSubSteps.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
healingWoundSubSteps.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var wcs = [] ;
	var flag;
	if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWoundSubSteps.isRecordDeferredForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {deferred:flag});
	}
};

/************************************************************************************
* isRecordPendingForUpload returns true or false depending on whether healingWoundSubSteps's record  
* with given primary key is pending for upload
*************************************************************************************/
healingWoundSubSteps.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWoundSubSteps.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	healingWoundSubSteps.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
healingWoundSubSteps.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWoundSubSteps.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWoundSubSteps.getTableName();
	var wcs = [] ;
	var flag;
	if(healingWoundSubSteps.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "NOT LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWoundSubSteps.isRecordPendingForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {pending:flag});
	}
};




/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
healingWoundSubSteps.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering healingWoundSubSteps.removeCascade function");
	var tbname = healingWoundSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
	}
	if(isCascade){
		if(removeCascadeChildren()===false){
			return false;
		}
		if(kony.sync.deleteBatch(tx, tbname, wcs, isLocal,markForUpload, null)===false){
			return false;
		}
		return true;
	}else{
		var sql = "select * from \"" + tbname + "\" " + wcs;
		var resultSet = kony.sync.executeSql(tx, sql, null);
		if(resultSet===false){
			return false;
		}	
		var num_records = resultSet.rows.length;
		if(num_records === 0){
			return true;
		}else{
			sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable));
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity,kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable)));
			return false;
		}
	}
};


healingWoundSubSteps.convertTableToObject = function(res){
	sync.log.trace("Entering healingWoundSubSteps.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
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
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

healingWoundSubSteps.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering healingWoundSubSteps.filterAttributes function");
	var attributeTable = {};
	attributeTable.accessToken = "accessToken";
	attributeTable.deleted = "deleted";
	attributeTable.docEntityId = "docEntityId";
	attributeTable.facilities = "facilities";
	attributeTable.lastSyncTime = "lastSyncTime";
	attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
	attributeTable.patientUuid = "patientUuid";
	attributeTable.woundNumber = "woundNumber";
	attributeTable.subStepDescId = "subStepDescId";
	attributeTable.subStepDesc = "subStepDesc";
	attributeTable.subStepDesc_Server = "subStepDesc_Server";
	attributeTable.lastUpdatedByUser_Server = "lastUpdatedByUser_Server";
	attributeTable.lastUpdatedTime_Server = "lastUpdatedTime_Server";
	attributeTable.isClientWins = "isClientWins";
	attributeTable.conflictStatus = "conflictStatus";
	attributeTable.stepNumber = "stepNumber";
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
	PKTable.subStepDescId = {}
	PKTable.subStepDescId.name = "subStepDescId";
	PKTable.subStepDescId.isAutoGen = false;
	PKTable.stepNumber = {}
	PKTable.stepNumber.name = "stepNumber";
	PKTable.stepNumber.isAutoGen = false;
	PKTable.encounterId = {}
	PKTable.encounterId.name = "encounterId";
	PKTable.encounterId.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject healingWoundSubSteps. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject healingWoundSubSteps. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject healingWoundSubSteps. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
			}else{
				newvaluestable[k] = v;
			}
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

healingWoundSubSteps.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering healingWoundSubSteps.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = healingWoundSubSteps.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

healingWoundSubSteps.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering healingWoundSubSteps.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.accessToken = this.accessToken;
	valuesTable.deleted = this.deleted;
	if(isInsert===true){
		valuesTable.docEntityId = this.docEntityId;
	}
	valuesTable.facilities = this.facilities;
	valuesTable.lastSyncTime = this.lastSyncTime;
	valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
	if(isInsert===true){
		valuesTable.patientUuid = this.patientUuid;
	}
	if(isInsert===true){
		valuesTable.woundNumber = this.woundNumber;
	}
	if(isInsert===true){
		valuesTable.subStepDescId = this.subStepDescId;
	}
	valuesTable.subStepDesc = this.subStepDesc;
	valuesTable.subStepDesc_Server = this.subStepDesc_Server;
	valuesTable.lastUpdatedByUser_Server = this.lastUpdatedByUser_Server;
	valuesTable.lastUpdatedTime_Server = this.lastUpdatedTime_Server;
	valuesTable.isClientWins = this.isClientWins;
	valuesTable.conflictStatus = this.conflictStatus;
	if(isInsert===true){
		valuesTable.stepNumber = this.stepNumber;
	}
	if(isInsert===true){
		valuesTable.encounterId = this.encounterId;
	}
	return valuesTable;
};

healingWoundSubSteps.prototype.getPKTable = function(){
	sync.log.trace("Entering healingWoundSubSteps.prototype.getPKTable function");
	var pkTable = {};
	pkTable.docEntityId = {key:"docEntityId",value:this.docEntityId};
	pkTable.patientUuid = {key:"patientUuid",value:this.patientUuid};
	pkTable.woundNumber = {key:"woundNumber",value:this.woundNumber};
	pkTable.subStepDescId = {key:"subStepDescId",value:this.subStepDescId};
	pkTable.stepNumber = {key:"stepNumber",value:this.stepNumber};
	pkTable.encounterId = {key:"encounterId",value:this.encounterId};
	return pkTable;
};

healingWoundSubSteps.getPKTable = function(){
	sync.log.trace("Entering healingWoundSubSteps.getPKTable function");
	var pkTable = [];
	pkTable.push("docEntityId");
	pkTable.push("patientUuid");
	pkTable.push("woundNumber");
	pkTable.push("subStepDescId");
	pkTable.push("stepNumber");
	pkTable.push("encounterId");
	return pkTable;
};

healingWoundSubSteps.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering healingWoundSubSteps.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.docEntityId)){
		if(!kony.sync.isNull(pks.docEntityId.value)){
			wc.key = "docEntityId";
			wc.value = pks.docEntityId.value;
		}
		else{
			wc.key = "docEntityId";
			wc.value = pks.docEntityId;
		}
	}else{
		sync.log.error("Primary Key docEntityId not specified in " + opName + " an item in healingWoundSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("docEntityId",opName,"healingWoundSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.patientUuid)){
		if(!kony.sync.isNull(pks.patientUuid.value)){
			wc.key = "patientUuid";
			wc.value = pks.patientUuid.value;
		}
		else{
			wc.key = "patientUuid";
			wc.value = pks.patientUuid;
		}
	}else{
		sync.log.error("Primary Key patientUuid not specified in " + opName + " an item in healingWoundSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("patientUuid",opName,"healingWoundSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.woundNumber)){
		if(!kony.sync.isNull(pks.woundNumber.value)){
			wc.key = "woundNumber";
			wc.value = pks.woundNumber.value;
		}
		else{
			wc.key = "woundNumber";
			wc.value = pks.woundNumber;
		}
	}else{
		sync.log.error("Primary Key woundNumber not specified in " + opName + " an item in healingWoundSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("woundNumber",opName,"healingWoundSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.subStepDescId)){
		if(!kony.sync.isNull(pks.subStepDescId.value)){
			wc.key = "subStepDescId";
			wc.value = pks.subStepDescId.value;
		}
		else{
			wc.key = "subStepDescId";
			wc.value = pks.subStepDescId;
		}
	}else{
		sync.log.error("Primary Key subStepDescId not specified in " + opName + " an item in healingWoundSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("subStepDescId",opName,"healingWoundSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.stepNumber)){
		if(!kony.sync.isNull(pks.stepNumber.value)){
			wc.key = "stepNumber";
			wc.value = pks.stepNumber.value;
		}
		else{
			wc.key = "stepNumber";
			wc.value = pks.stepNumber;
		}
	}else{
		sync.log.error("Primary Key stepNumber not specified in " + opName + " an item in healingWoundSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("stepNumber",opName,"healingWoundSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.encounterId)){
		if(!kony.sync.isNull(pks.encounterId.value)){
			wc.key = "encounterId";
			wc.value = pks.encounterId.value;
		}
		else{
			wc.key = "encounterId";
			wc.value = pks.encounterId;
		}
	}else{
		sync.log.error("Primary Key encounterId not specified in " + opName + " an item in healingWoundSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("encounterId",opName,"healingWoundSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

healingWoundSubSteps.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.validateNull function");
	return true;
};

healingWoundSubSteps.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering healingWoundSubSteps.validateNullInsert function");
	return true;
};

healingWoundSubSteps.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering healingWoundSubSteps.getRelationshipMap function");
	var r1 = {};
	r1 = {};
	r1.sourceAttribute = [];
	r1.foreignKeyAttribute = [];
	r1.targetAttributeValue  = [];
		
	if (!kony.sync.isNullOrUndefined(valuestable.patientUuid)){
		r1.sourceAttribute.push("patientUuid");
		r1.foreignKeyAttribute.push("patientUuid");
		r1.targetAttributeValue.push("'" + valuestable.patientUuid + "'");
	}
	if (!kony.sync.isNullOrUndefined(valuestable.docEntityId)){
		r1.sourceAttribute.push("docEntityId");
		r1.foreignKeyAttribute.push("docEntityId");
		r1.targetAttributeValue.push("'" + valuestable.docEntityId + "'");
	}
	if (!kony.sync.isNullOrUndefined(valuestable.woundNumber)){
		r1.sourceAttribute.push("woundNumber");
		r1.foreignKeyAttribute.push("woundNumber");
		r1.targetAttributeValue.push("'" + valuestable.woundNumber + "'");
	}
	if (!kony.sync.isNullOrUndefined(valuestable.stepNumber)){
		r1.sourceAttribute.push("stepNumber");
		r1.foreignKeyAttribute.push("stepNumber");
		r1.targetAttributeValue.push("'" + valuestable.stepNumber + "'");
	}
	if(r1.targetAttributeValue.length > 0){
		if(relationshipMap.healingWoundSteps===undefined){
			relationshipMap.healingWoundSteps = [];
		}
		relationshipMap.healingWoundSteps.push(r1);
	}
	

	return relationshipMap;
};


healingWoundSubSteps.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

healingWoundSubSteps.getTableName = function(){
	return "healingWoundSubSteps";
};




// **********************************End healingWoundSubSteps's helper methods************************