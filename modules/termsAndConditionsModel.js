//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:24 UTC 2019termsAndConditions*******************
// **********************************Start termsAndConditions's helper methods************************
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



if(typeof(com)=== "undefined"){ com = {}; }
if(typeof(com.healogics)=== "undefined"){ com.healogics = {}; }
if(typeof(com.healogics.offline)=== "undefined"){ com.healogics.offline = {}; }

/************************************************************************************
* Creates new termsAndConditions
*************************************************************************************/
com.healogics.offline.termsAndConditions = function(){
	this.acceptedDate = null;
	this.expiryDate = null;
	this.termsText = null;
	this.timestamp = null;
	this.lastUpdatedByUser = null;
	this.lastUpdatedTime = null;
	this.deleted = null;
	this.userId = null;
	this.facilityId = null;
	this.markForUpload = true;
};

com.healogics.offline.termsAndConditions.prototype = {
	get acceptedDate(){
		return this._acceptedDate;
	},
	set acceptedDate(val){
		this._acceptedDate = val;
	},
	get expiryDate(){
		return this._expiryDate;
	},
	set expiryDate(val){
		this._expiryDate = val;
	},
	get termsText(){
		return this._termsText;
	},
	set termsText(val){
		this._termsText = val;
	},
	get timestamp(){
		return this._timestamp;
	},
	set timestamp(val){
		this._timestamp = val;
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
	get deleted(){
		return this._deleted;
	},
	set deleted(val){
		this._deleted = val;
	},
	get userId(){
		return this._userId;
	},
	set userId(val){
		this._userId = val;
	},
	get facilityId(){
		return this._facilityId;
	},
	set facilityId(val){
		this._facilityId = val;
	},
};

/************************************************************************************
* Retrieves all instances of termsAndConditions SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "acceptedDate";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "expiryDate";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.healogics.offline.termsAndConditions.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.healogics.offline.termsAndConditions.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	orderByMap = kony.sync.formOrderByClause("termsAndConditions",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.getAll->successcallback");
		successcallback(com.healogics.offline.termsAndConditions.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of termsAndConditions present in local database.
*************************************************************************************/
com.healogics.offline.termsAndConditions.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getAllCount function");
	com.healogics.offline.termsAndConditions.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of termsAndConditions using where clause in the local Database
*************************************************************************************/
com.healogics.offline.termsAndConditions.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.getCount->successcallback");
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
* Creates a new instance of termsAndConditions in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.termsAndConditions.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.healogics.offline.termsAndConditions.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.termsAndConditions.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.healogics.offline.termsAndConditions.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"termsAndConditions",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.termsAndConditions.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.termsAndConditions.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "userId=" + valuestable.userId;
		pks["userId"] = {key:"userId",value:valuestable.userId};
		errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
		pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
		com.healogics.offline.termsAndConditions.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of termsAndConditions in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].acceptedDate = "acceptedDate_0";
*		valuesArray[0].expiryDate = "expiryDate_0";
*		valuesArray[0].termsText = "termsText_0";
*		valuesArray[0].timestamp = "timestamp_0";
*		valuesArray[0].lastUpdatedByUser = "lastUpdatedByUser_0";
*		valuesArray[0].deleted = "deleted_0";
*		valuesArray[0].userId = "userId_0";
*		valuesArray[0].facilityId = "facilityId_0";
*		valuesArray[1] = {};
*		valuesArray[1].acceptedDate = "acceptedDate_1";
*		valuesArray[1].expiryDate = "expiryDate_1";
*		valuesArray[1].termsText = "termsText_1";
*		valuesArray[1].timestamp = "timestamp_1";
*		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
*		valuesArray[1].deleted = "deleted_1";
*		valuesArray[1].userId = "userId_1";
*		valuesArray[1].facilityId = "facilityId_1";
*		valuesArray[2] = {};
*		valuesArray[2].acceptedDate = "acceptedDate_2";
*		valuesArray[2].expiryDate = "expiryDate_2";
*		valuesArray[2].termsText = "termsText_2";
*		valuesArray[2].timestamp = "timestamp_2";
*		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
*		valuesArray[2].deleted = "deleted_2";
*		valuesArray[2].userId = "userId_2";
*		valuesArray[2].facilityId = "facilityId_2";
*		com.healogics.offline.termsAndConditions.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.healogics.offline.termsAndConditions.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"termsAndConditions",errorcallback,true)===false){
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
				errMsg = "userId=" + valuestable.userId;
				pks["userId"] = {key:"userId",value:valuestable.userId};
				errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
				pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
				var wcs = [];
				if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.healogics.offline.termsAndConditions.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.healogics.offline.termsAndConditions.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.termsAndConditions.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates termsAndConditions using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.termsAndConditions.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.healogics.offline.termsAndConditions.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.termsAndConditions.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.healogics.offline.termsAndConditions.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"termsAndConditions",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.healogics.offline.termsAndConditions.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates termsAndConditions(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.termsAndConditions.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"termsAndConditions",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.termsAndConditions.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.termsAndConditions.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.healogics.offline.termsAndConditions.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.termsAndConditions.getPKTable());
	}
};

/************************************************************************************
* Updates termsAndConditions(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.acceptedDate = "acceptedDate_updated0";
*		inputArray[0].changeSet.expiryDate = "expiryDate_updated0";
*		inputArray[0].changeSet.termsText = "termsText_updated0";
*		inputArray[0].changeSet.timestamp = "timestamp_updated0";
*		inputArray[0].whereClause = "where userId = '0'";
*		inputArray[0].whereClause = "where facilityId = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.acceptedDate = "acceptedDate_updated1";
*		inputArray[1].changeSet.expiryDate = "expiryDate_updated1";
*		inputArray[1].changeSet.termsText = "termsText_updated1";
*		inputArray[1].changeSet.timestamp = "timestamp_updated1";
*		inputArray[1].whereClause = "where userId = '1'";
*		inputArray[1].whereClause = "where facilityId = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.acceptedDate = "acceptedDate_updated2";
*		inputArray[2].changeSet.expiryDate = "expiryDate_updated2";
*		inputArray[2].changeSet.termsText = "termsText_updated2";
*		inputArray[2].changeSet.timestamp = "timestamp_updated2";
*		inputArray[2].whereClause = "where userId = '2'";
*		inputArray[2].whereClause = "where facilityId = '2'";
*		com.healogics.offline.termsAndConditions.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.termsAndConditions.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "termsAndConditions";
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
			if(kony.sync.attributeValidation(valuestable,"termsAndConditions",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.healogics.offline.termsAndConditions.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.healogics.offline.termsAndConditions.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.healogics.offline.termsAndConditions.getPKTable());
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
		sync.log.trace("Entering  com.healogics.offline.termsAndConditions.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.healogics.offline.termsAndConditions.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes termsAndConditions using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.termsAndConditions.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.termsAndConditions.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function termsAndConditionsTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.deleteByPK->termsAndConditions_PKPresent successcallback");
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
	
	function termsAndConditionsErrorCallback(){
		sync.log.error("Entering com.healogics.offline.termsAndConditions.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function termsAndConditionsSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.termsAndConditions.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, termsAndConditionsTransactionCallback, termsAndConditionsSuccessCallback, termsAndConditionsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes termsAndConditions(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.healogics.offline.termsAndConditions.remove("where acceptedDate like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.healogics.offline.termsAndConditions.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function termsAndConditions_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function termsAndConditions_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.remove->termsAndConditions_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, termsAndConditions_removeTransactioncallback, termsAndConditions_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes termsAndConditions using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function termsAndConditionsTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK -> termsAndConditionsTransactionCallback");
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
	
	function termsAndConditionsErrorCallback(){
		sync.log.error("Entering com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK -> termsAndConditionsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function termsAndConditionsSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK -> termsAndConditionsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.termsAndConditions.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, termsAndConditionsTransactionCallback, termsAndConditionsSuccessCallback, termsAndConditionsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes termsAndConditions(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.termsAndConditions.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function termsAndConditions_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function termsAndConditions_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.remove->termsAndConditions_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, termsAndConditions_removeTransactioncallback, termsAndConditions_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves termsAndConditions using primary key from the local Database. 
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.termsAndConditions.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.termsAndConditions.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	var wcs = [];
	if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.getAllDetailsByPK-> success callback function");
		successcallback(com.healogics.offline.termsAndConditions.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves termsAndConditions(s) using where clause from the local Database. 
* e.g. com.healogics.offline.termsAndConditions.find("where acceptedDate like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.termsAndConditions.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.termsAndConditions.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of termsAndConditions with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.healogics.offline.termsAndConditions.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.termsAndConditions.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.healogics.offline.termsAndConditions.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of termsAndConditions matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.termsAndConditions.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.healogics.offline.termsAndConditions.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of termsAndConditions pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.healogics.offline.termsAndConditions.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.termsAndConditions.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of termsAndConditions pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.healogics.offline.termsAndConditions.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.termsAndConditions.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of termsAndConditions deferred for upload.
*************************************************************************************/
com.healogics.offline.termsAndConditions.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.termsAndConditions.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to termsAndConditions in local database to last synced state
*************************************************************************************/
com.healogics.offline.termsAndConditions.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to termsAndConditions's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.termsAndConditions.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.termsAndConditions.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	var wcs = [];
	if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.termsAndConditions.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether termsAndConditions's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.termsAndConditions.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.termsAndConditions.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.termsAndConditions.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether termsAndConditions's record  
* with given primary key is pending for upload
*************************************************************************************/
com.healogics.offline.termsAndConditions.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.termsAndConditions.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.termsAndConditions.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.termsAndConditions.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.termsAndConditions.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.termsAndConditions.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.termsAndConditions.isRecordPendingForUpload->successcallback function");
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
com.healogics.offline.termsAndConditions.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.removeCascade function");
	var tbname = com.healogics.offline.termsAndConditions.getTableName();
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


com.healogics.offline.termsAndConditions.convertTableToObject = function(res){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.healogics.offline.termsAndConditions();
			obj.acceptedDate = res[i].acceptedDate;
			obj.expiryDate = res[i].expiryDate;
			obj.termsText = res[i].termsText;
			obj.timestamp = res[i].timestamp;
			obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
			obj.lastUpdatedTime = res[i].lastUpdatedTime;
			obj.deleted = res[i].deleted;
			obj.userId = res[i].userId;
			obj.facilityId = res[i].facilityId;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.healogics.offline.termsAndConditions.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.filterAttributes function");
	var attributeTable = {};
	attributeTable.acceptedDate = "acceptedDate";
	attributeTable.expiryDate = "expiryDate";
	attributeTable.termsText = "termsText";
	attributeTable.timestamp = "timestamp";
	attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
	attributeTable.deleted = "deleted";
	attributeTable.userId = "userId";
	attributeTable.facilityId = "facilityId";

	var PKTable = {};
	PKTable.userId = {}
	PKTable.userId.name = "userId";
	PKTable.userId.isAutoGen = false;
	PKTable.facilityId = {}
	PKTable.facilityId.name = "facilityId";
	PKTable.facilityId.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject termsAndConditions. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject termsAndConditions. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject termsAndConditions. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.healogics.offline.termsAndConditions.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.healogics.offline.termsAndConditions.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.healogics.offline.termsAndConditions.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.acceptedDate = this.acceptedDate;
	valuesTable.expiryDate = this.expiryDate;
	valuesTable.termsText = this.termsText;
	valuesTable.timestamp = this.timestamp;
	valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
	valuesTable.deleted = this.deleted;
	if(isInsert===true){
		valuesTable.userId = this.userId;
	}
	if(isInsert===true){
		valuesTable.facilityId = this.facilityId;
	}
	return valuesTable;
};

com.healogics.offline.termsAndConditions.prototype.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.prototype.getPKTable function");
	var pkTable = {};
	pkTable.userId = {key:"userId",value:this.userId};
	pkTable.facilityId = {key:"facilityId",value:this.facilityId};
	return pkTable;
};

com.healogics.offline.termsAndConditions.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getPKTable function");
	var pkTable = [];
	pkTable.push("userId");
	pkTable.push("facilityId");
	return pkTable;
};

com.healogics.offline.termsAndConditions.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.userId)){
		if(!kony.sync.isNull(pks.userId.value)){
			wc.key = "userId";
			wc.value = pks.userId.value;
		}
		else{
			wc.key = "userId";
			wc.value = pks.userId;
		}
	}else{
		sync.log.error("Primary Key userId not specified in " + opName + " an item in termsAndConditions");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("userId",opName,"termsAndConditions")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.facilityId)){
		if(!kony.sync.isNull(pks.facilityId.value)){
			wc.key = "facilityId";
			wc.value = pks.facilityId.value;
		}
		else{
			wc.key = "facilityId";
			wc.value = pks.facilityId;
		}
	}else{
		sync.log.error("Primary Key facilityId not specified in " + opName + " an item in termsAndConditions");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId",opName,"termsAndConditions")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.healogics.offline.termsAndConditions.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.validateNull function");
	return true;
};

com.healogics.offline.termsAndConditions.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.validateNullInsert function");
	if(kony.sync.isNull(valuestable.userId) || kony.sync.isEmptyString(valuestable.userId)){
		sync.log.error("Mandatory attribute userId is missing for the SyncObject termsAndConditions.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "termsAndConditions", "userId")));
		return false;
	}
	if(kony.sync.isNull(valuestable.facilityId) || kony.sync.isEmptyString(valuestable.facilityId)){
		sync.log.error("Mandatory attribute facilityId is missing for the SyncObject termsAndConditions.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "termsAndConditions", "facilityId")));
		return false;
	}
	return true;
};

com.healogics.offline.termsAndConditions.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.healogics.offline.termsAndConditions.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.healogics.offline.termsAndConditions.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.healogics.offline.termsAndConditions.getTableName = function(){
	return "termsAndConditions";
};




// **********************************End termsAndConditions's helper methods************************