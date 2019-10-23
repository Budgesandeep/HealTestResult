//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:27 UTC 2019healingWounds*******************
// **********************************Start healingWounds's helper methods************************
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
* Creates new healingWounds
*************************************************************************************/
healingWounds = function(){
	this.accessToken = null;
	this.deleted = null;
	this.docEntityId = null;
	this.facilities = null;
	this.lastSyncTime = null;
	this.lastUpdatedByUser = null;
	this.lastUpdatedTime = null;
	this.patientUuid = null;
	this.woundAttributes = null;
	this.woundNumber = null;
	this.encounterId = null;
	this.markForUpload = true;
};

healingWounds.prototype = {
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
	get woundAttributes(){
		return this._woundAttributes;
	},
	set woundAttributes(val){
		this._woundAttributes = val;
	},
	get woundNumber(){
		return this._woundNumber;
	},
	set woundNumber(val){
		this._woundNumber = val;
	},
	get encounterId(){
		return this._encounterId;
	},
	set encounterId(val){
		this._encounterId = val;
	},
};

/************************************************************************************
* Retrieves all instances of healingWounds SyncObject present in local database with
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
* healingWounds.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
healingWounds.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering healingWounds.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	orderByMap = kony.sync.formOrderByClause("healingWounds",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering healingWounds.getAll->successcallback");
		successcallback(healingWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of healingWounds present in local database.
*************************************************************************************/
healingWounds.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.getAllCount function");
	healingWounds.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of healingWounds using where clause in the local Database
*************************************************************************************/
healingWounds.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering healingWounds.getCount->successcallback");
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
* Creates a new instance of healingWounds in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWounds.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWounds.prototype.create function");
	var valuestable = this.getValuesTable(true);
	healingWounds.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
healingWounds.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  healingWounds.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "healingWounds.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"healingWounds",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  healingWounds.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = healingWounds.getRelationshipMap(relationshipMap,valuestable);
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
		healingWounds.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of healingWounds in the local Database. These new 
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
*		valuesArray[0].woundAttributes = "woundAttributes_0";
*		valuesArray[0].woundNumber = "woundNumber_0";
*		valuesArray[0].encounterId = "encounterId_0";
*		valuesArray[1] = {};
*		valuesArray[1].accessToken = "accessToken_1";
*		valuesArray[1].deleted = "deleted_1";
*		valuesArray[1].docEntityId = "docEntityId_1";
*		valuesArray[1].facilities = "facilities_1";
*		valuesArray[1].lastSyncTime = "lastSyncTime_1";
*		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
*		valuesArray[1].patientUuid = "patientUuid_1";
*		valuesArray[1].woundAttributes = "woundAttributes_1";
*		valuesArray[1].woundNumber = "woundNumber_1";
*		valuesArray[1].encounterId = "encounterId_1";
*		valuesArray[2] = {};
*		valuesArray[2].accessToken = "accessToken_2";
*		valuesArray[2].deleted = "deleted_2";
*		valuesArray[2].docEntityId = "docEntityId_2";
*		valuesArray[2].facilities = "facilities_2";
*		valuesArray[2].lastSyncTime = "lastSyncTime_2";
*		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
*		valuesArray[2].patientUuid = "patientUuid_2";
*		valuesArray[2].woundAttributes = "woundAttributes_2";
*		valuesArray[2].woundNumber = "woundNumber_2";
*		valuesArray[2].encounterId = "encounterId_2";
*		healingWounds.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
healingWounds.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering healingWounds.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"healingWounds",errorcallback,true)===false){
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
				var wcs = [];
				if(healingWounds.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  healingWounds.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  healingWounds.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = healingWounds.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates healingWounds using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWounds.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWounds.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	healingWounds.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
healingWounds.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  healingWounds.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(healingWounds.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"healingWounds",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = healingWounds.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates healingWounds(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWounds.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering healingWounds.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"healingWounds",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  healingWounds.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, healingWounds.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = healingWounds.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, healingWounds.getPKTable());
	}
};

/************************************************************************************
* Updates healingWounds(s) satisfying one or more where clauses in the local Database. 
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
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.accessToken = "accessToken_updated1";
*		inputArray[1].changeSet.deleted = "deleted_updated1";
*		inputArray[1].changeSet.facilities = "facilities_updated1";
*		inputArray[1].changeSet.lastSyncTime = "lastSyncTime_updated1";
*		inputArray[1].whereClause = "where docEntityId = '1'";
*		inputArray[1].whereClause = "where patientUuid = '1'";
*		inputArray[1].whereClause = "where woundNumber = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.accessToken = "accessToken_updated2";
*		inputArray[2].changeSet.deleted = "deleted_updated2";
*		inputArray[2].changeSet.facilities = "facilities_updated2";
*		inputArray[2].changeSet.lastSyncTime = "lastSyncTime_updated2";
*		inputArray[2].whereClause = "where docEntityId = '2'";
*		inputArray[2].whereClause = "where patientUuid = '2'";
*		inputArray[2].whereClause = "where woundNumber = '2'";
*		healingWounds.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
healingWounds.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering healingWounds.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "healingWounds";
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
			if(kony.sync.attributeValidation(valuestable,"healingWounds",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, healingWounds.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  healingWounds.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, healingWounds.getPKTable());
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
		sync.log.trace("Entering  healingWounds.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = healingWounds.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes healingWounds using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
healingWounds.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.prototype.deleteByPK function");
	var pks = this.getPKTable();
	healingWounds.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
healingWounds.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering healingWounds.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(healingWounds.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function healingWoundsTransactionCallback(tx){
		sync.log.trace("Entering healingWounds.deleteByPK->healingWounds_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("patientUuid") ;
			targetAttributes.push("patientUuid") ;
			srcAttributes.push("docEntityId") ;
			targetAttributes.push("docEntityId") ;
			srcAttributes.push("woundNumber") ;
			targetAttributes.push("woundNumber") ;
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", healingWoundSteps.removeCascade,"healingWoundSteps",true, errorcallback, markForUpload, record, false)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
		var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
	}
	
	function healingWoundsErrorCallback(){
		sync.log.error("Entering healingWounds.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function healingWoundsSuccessCallback(){
		sync.log.trace("Entering healingWounds.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering healingWounds.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, healingWoundsTransactionCallback, healingWoundsSuccessCallback, healingWoundsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes healingWounds(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. healingWounds.remove("where accessToken like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
healingWounds.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering healingWounds.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function healingWounds_removeTransactioncallback(tx){
			wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("patientUuid") ;
			targetAttributes.push("patientUuid") ;
			srcAttributes.push("docEntityId") ;
			targetAttributes.push("docEntityId") ;
			srcAttributes.push("woundNumber") ;
			targetAttributes.push("woundNumber") ;
 			record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
            if (record === false) {
                isError = true;
                return;
            }
	if(record !== null){	
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, healingWoundSteps.removeCascade, "healingWoundSteps", true, errorcallback, markForUpload, record, false)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
	}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function healingWounds_removeSuccess(){
		sync.log.trace("Entering healingWounds.remove->healingWounds_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering healingWounds.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering healingWounds.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, healingWounds_removeTransactioncallback, healingWounds_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes healingWounds using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
healingWounds.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	healingWounds.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
healingWounds.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(healingWounds.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function healingWoundsTransactionCallback(tx){
		sync.log.trace("Entering healingWounds.removeDeviceInstanceByPK -> healingWoundsTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("patientUuid") ;
			targetAttributes.push("patientUuid") ;
			srcAttributes.push("docEntityId") ;
			targetAttributes.push("docEntityId") ;
			srcAttributes.push("woundNumber") ;
			targetAttributes.push("woundNumber") ;
			if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, "", healingWoundSteps.removeCascade,"healingWoundSteps",true, errorcallback, null, record, true)){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function healingWoundsErrorCallback(){
		sync.log.error("Entering healingWounds.removeDeviceInstanceByPK -> healingWoundsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function healingWoundsSuccessCallback(){
		sync.log.trace("Entering healingWounds.removeDeviceInstanceByPK -> healingWoundsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering healingWounds.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, healingWoundsTransactionCallback, healingWoundsSuccessCallback, healingWoundsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes healingWounds(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
healingWounds.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function healingWounds_removeTransactioncallback(tx){
		wcs = " " + wcs;
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("patientUuid") ;
			targetAttributes.push("patientUuid") ;
			srcAttributes.push("docEntityId") ;
			targetAttributes.push("docEntityId") ;
			srcAttributes.push("woundNumber") ;
			targetAttributes.push("woundNumber") ;
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, healingWoundSteps.removeCascade, "healingWoundSteps", true, errorcallback, null, null, true)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function healingWounds_removeSuccess(){
		sync.log.trace("Entering healingWounds.remove->healingWounds_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering healingWounds.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering healingWounds.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, healingWounds_removeTransactioncallback, healingWounds_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves healingWounds using primary key from the local Database. 
*************************************************************************************/
healingWounds.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	healingWounds.getAllDetailsByPK(pks,successcallback,errorcallback);
};
healingWounds.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	var wcs = [];
	if(healingWounds.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering healingWounds.getAllDetailsByPK-> success callback function");
		successcallback(healingWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves healingWounds(s) using where clause from the local Database. 
* e.g. healingWounds.find("where accessToken like 'A%'", successcallback,errorcallback);
*************************************************************************************/
healingWounds.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, healingWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of healingWounds with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWounds.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering healingWounds.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	healingWounds.markForUploadbyPK(pks, successcallback, errorcallback);
};
healingWounds.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWounds.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(healingWounds.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of healingWounds matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
healingWounds.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
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
		sync.log.trace("Entering healingWounds.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering healingWounds.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering healingWounds.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of healingWounds pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
healingWounds.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
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
		sync.log.trace("Entering healingWounds.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, healingWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of healingWounds pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
healingWounds.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering healingWounds.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWounds.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, healingWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of healingWounds deferred for upload.
*************************************************************************************/
healingWounds.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
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
		sync.log.trace("Entering healingWounds.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, healingWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to healingWounds in local database to last synced state
*************************************************************************************/
healingWounds.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering healingWounds.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWounds.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to healingWounds's record with given primary key in local 
* database to last synced state
*************************************************************************************/
healingWounds.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	healingWounds.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
healingWounds.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWounds.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	var wcs = [];
	if(healingWounds.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering healingWounds.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering healingWounds.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether healingWounds's record  
* with given primary key got deferred in last sync
*************************************************************************************/
healingWounds.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWounds.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	healingWounds.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
healingWounds.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWounds.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	var wcs = [] ;
	var flag;
	if(healingWounds.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering healingWounds.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether healingWounds's record  
* with given primary key is pending for upload
*************************************************************************************/
healingWounds.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  healingWounds.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	healingWounds.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
healingWounds.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering healingWounds.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = healingWounds.getTableName();
	var wcs = [] ;
	var flag;
	if(healingWounds.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering healingWounds.isRecordPendingForUpload->successcallback function");
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
* Retrieves instances of healingWoundSteps related to healingWounds
* with given $relationship.getTargetObjectAttribute() from local database.
*************************************************************************************/

															
healingWounds.prototype.gethealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber  = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.prototype.gethealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber function");
	var pks = this.getPKTable();
	healingWounds.gethealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber(pks,successcallback,errorcallback);
};
healingWounds.gethealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.gethealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}		
	if(!kony.sync.validateInput(arguments, "healingWounds.gethealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber",  "relationship", errorcallback)){
		return;
	}	
	function healingWounds_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
			var targetKey_0 = res[0].patientUuid;				
			wcs.push({key:"patientUuid", value:targetKey_0});		
						var targetKey_1 = res[0].docEntityId;				
			wcs.push({key:"docEntityId", value:targetKey_1});		
						var targetKey_2 = res[0].woundNumber;				
			wcs.push({key:"woundNumber", value:targetKey_2});		
			
			var tbname = "healingWoundSteps"
			var query = kony.sync.qb_createQuery();
			kony.sync.qb_select(query, null);
			kony.sync.qb_from(query, tbname);
			kony.sync.qb_where(query,wcs);
		
			var query_compile = kony.sync.qb_compile(query);
			var sql = query_compile[0];
			var params = query_compile[1];
			var dbname = kony.sync.getDBName();
		
			function mySuccCallback(res){
									kony.sync.verifyAndCallClosure(mySuccesscallback, healingWoundSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
							}
		
			kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback);
			return;
		}	
	}
	
	function mySuccesscallback(res){
		var objMap = [];
		if(res!==null){
			for(var i in res){
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
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	healingWounds.getAllDetailsByPK(pks, healingWounds_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of healingWoundSteps related to healingWounds
* with given ${displayTargetAttribute} from local database.
*************************************************************************************/
healingWounds.prototype.getCountOfhealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber  = function(successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.prototype.getCountOfhealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber function");
	var pks = this.getPKTable();
	healingWounds.getCountOfhealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber(pks,successcallback,errorcallback);
};
healingWounds.getCountOfhealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber = function(pks,successcallback,errorcallback){
	sync.log.trace("Entering healingWounds.getCountOfhealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "healingWounds.getCountOfhealingWoundStepsWithpatientUuidANDdocEntityIdANDwoundNumber",  "relationship", errorcallback)){
		return;
	}
	function healingWounds_successcallback(res){
		if(null!==res && res.length>0) {
			var wcs = [];
				var targetAttributes = [];
													var targetKey_0 = res[0].patientUuid;
					targetAttributes.push("patientUuid");
					if(kony.type(targetKey_0)==="string") {
						wcs.push({"patientUuid":"'"+targetKey_0+"'"});
					}else{
						wcs.push({"patientUuid":targetKey_0});
					} 
														var targetKey_1 = res[0].docEntityId;
					targetAttributes.push("docEntityId");
					if(kony.type(targetKey_1)==="string") {
						wcs.push({"docEntityId":"'"+targetKey_1+"'"});
					}else{
						wcs.push({"docEntityId":targetKey_1});
					} 
														var targetKey_2 = res[0].woundNumber;
					targetAttributes.push("woundNumber");
					if(kony.type(targetKey_2)==="string") {
						wcs.push({"woundNumber":"'"+targetKey_2+"'"});
					}else{
						wcs.push({"woundNumber":targetKey_2});
					} 
														
			var wClause = "where ";
   			var i;
        	var len = wcs.length;
        	for (i = 0; i < len; i++) {
        		wClauseMap = wcs[i];
        		wClause += targetAttributes[i] + " = " + wClauseMap[targetAttributes[i]]
        		if(i != len-1)
        		{
            		 wClause += " AND "
        		}
    		}
		   healingWoundSteps.getCount(wClause, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	healingWounds.getAllDetailsByPK(pks, healingWounds_successcallback, errorcallback);
};

/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
healingWounds.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering healingWounds.removeCascade function");
	var tbname = healingWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
			var srcAttributes = [];
			var targetAttributes = [];
			srcAttributes.push("patientUuid") ;
			targetAttributes.push("patientUuid") ;
			srcAttributes.push("docEntityId") ;
			targetAttributes.push("docEntityId") ;
			srcAttributes.push("woundNumber") ;
			targetAttributes.push("woundNumber") ;
		if(!kony.sync.removeCascadeHelper(tx, srcAttributes, targetAttributes, tbname, wcs, healingWoundSteps.removeCascade, "healingWoundSteps", true, errorcallback, markForUpload, null, isLocal)){
			return false;
		}
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


healingWounds.convertTableToObject = function(res){
	sync.log.trace("Entering healingWounds.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new healingWounds();
			obj.accessToken = res[i].accessToken;
			obj.deleted = res[i].deleted;
			obj.docEntityId = res[i].docEntityId;
			obj.facilities = res[i].facilities;
			obj.lastSyncTime = res[i].lastSyncTime;
			obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
			obj.lastUpdatedTime = res[i].lastUpdatedTime;
			obj.patientUuid = res[i].patientUuid;
			obj.woundAttributes = res[i].woundAttributes;
			obj.woundNumber = res[i].woundNumber;
			obj.encounterId = res[i].encounterId;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

healingWounds.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering healingWounds.filterAttributes function");
	var attributeTable = {};
	attributeTable.accessToken = "accessToken";
	attributeTable.deleted = "deleted";
	attributeTable.docEntityId = "docEntityId";
	attributeTable.facilities = "facilities";
	attributeTable.lastSyncTime = "lastSyncTime";
	attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
	attributeTable.patientUuid = "patientUuid";
	attributeTable.woundAttributes = "woundAttributes";
	attributeTable.woundNumber = "woundNumber";
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
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject healingWounds. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject healingWounds. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject healingWounds. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

healingWounds.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering healingWounds.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = healingWounds.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

healingWounds.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering healingWounds.prototype.getValuesTable function");
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
	valuesTable.woundAttributes = this.woundAttributes;
	if(isInsert===true){
		valuesTable.woundNumber = this.woundNumber;
	}
	valuesTable.encounterId = this.encounterId;
	return valuesTable;
};

healingWounds.prototype.getPKTable = function(){
	sync.log.trace("Entering healingWounds.prototype.getPKTable function");
	var pkTable = {};
	pkTable.docEntityId = {key:"docEntityId",value:this.docEntityId};
	pkTable.patientUuid = {key:"patientUuid",value:this.patientUuid};
	pkTable.woundNumber = {key:"woundNumber",value:this.woundNumber};
	return pkTable;
};

healingWounds.getPKTable = function(){
	sync.log.trace("Entering healingWounds.getPKTable function");
	var pkTable = [];
	pkTable.push("docEntityId");
	pkTable.push("patientUuid");
	pkTable.push("woundNumber");
	return pkTable;
};

healingWounds.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering healingWounds.pkCheck function");
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
		sync.log.error("Primary Key docEntityId not specified in " + opName + " an item in healingWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("docEntityId",opName,"healingWounds")));
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
		sync.log.error("Primary Key patientUuid not specified in " + opName + " an item in healingWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("patientUuid",opName,"healingWounds")));
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
		sync.log.error("Primary Key woundNumber not specified in " + opName + " an item in healingWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("woundNumber",opName,"healingWounds")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

healingWounds.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering healingWounds.validateNull function");
	return true;
};

healingWounds.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering healingWounds.validateNullInsert function");
	return true;
};

healingWounds.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering healingWounds.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


healingWounds.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

healingWounds.getTableName = function(){
	return "healingWounds";
};




// **********************************End healingWounds's helper methods************************