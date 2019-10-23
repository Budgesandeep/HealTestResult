//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:28 UTC 2019userMetrics*******************
// **********************************Start userMetrics's helper methods************************
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
* Creates new userMetrics
*************************************************************************************/
com.healogics.offline.userMetrics = function(){
	this.actual = null;
	this.deleted = null;
	this.lastSyncTime = null;
	this.lastUpdatedBy = null;
	this.lastUpdatedTimestamp = null;
	this.measures = null;
	this.metricsmonth = null;
	this.metricsyear = null;
	this.userId = null;
	this.facilityId = null;
	this.markForUpload = true;
};

com.healogics.offline.userMetrics.prototype = {
	get actual(){
		return this._actual;
	},
	set actual(val){
		this._actual = val;
	},
	get deleted(){
		return this._deleted;
	},
	set deleted(val){
		this._deleted = val;
	},
	get lastSyncTime(){
		return this._lastSyncTime;
	},
	set lastSyncTime(val){
		this._lastSyncTime = val;
	},
	get lastUpdatedBy(){
		return this._lastUpdatedBy;
	},
	set lastUpdatedBy(val){
		this._lastUpdatedBy = val;
	},
	get lastUpdatedTimestamp(){
		return this._lastUpdatedTimestamp;
	},
	set lastUpdatedTimestamp(val){
		this._lastUpdatedTimestamp = val;
	},
	get measures(){
		return this._measures;
	},
	set measures(val){
		this._measures = val;
	},
	get metricsmonth(){
		return this._metricsmonth;
	},
	set metricsmonth(val){
		this._metricsmonth = val;
	},
	get metricsyear(){
		return this._metricsyear;
	},
	set metricsyear(val){
		this._metricsyear = val;
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
* Retrieves all instances of userMetrics SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "actual";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "deleted";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.healogics.offline.userMetrics.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.healogics.offline.userMetrics.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	orderByMap = kony.sync.formOrderByClause("userMetrics",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.healogics.offline.userMetrics.getAll->successcallback");
		successcallback(com.healogics.offline.userMetrics.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of userMetrics present in local database.
*************************************************************************************/
com.healogics.offline.userMetrics.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getAllCount function");
	com.healogics.offline.userMetrics.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of userMetrics using where clause in the local Database
*************************************************************************************/
com.healogics.offline.userMetrics.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.healogics.offline.userMetrics.getCount->successcallback");
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
* Creates a new instance of userMetrics in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.userMetrics.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.healogics.offline.userMetrics.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.userMetrics.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.healogics.offline.userMetrics.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"userMetrics",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.userMetrics.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.userMetrics.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "actual=" + valuestable.actual;
		pks["actual"] = {key:"actual",value:valuestable.actual};
		errMsg = errMsg + ", measures=" + valuestable.measures;
		pks["measures"] = {key:"measures",value:valuestable.measures};
		errMsg = errMsg + ", metricsmonth=" + valuestable.metricsmonth;
		pks["metricsmonth"] = {key:"metricsmonth",value:valuestable.metricsmonth};
		errMsg = errMsg + ", metricsyear=" + valuestable.metricsyear;
		pks["metricsyear"] = {key:"metricsyear",value:valuestable.metricsyear};
		errMsg = errMsg + ", userId=" + valuestable.userId;
		pks["userId"] = {key:"userId",value:valuestable.userId};
		errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
		pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
		com.healogics.offline.userMetrics.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of userMetrics in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].actual = "actual_0";
*		valuesArray[0].deleted = "deleted_0";
*		valuesArray[0].lastSyncTime = "lastSyncTime_0";
*		valuesArray[0].lastUpdatedBy = "lastUpdatedBy_0";
*		valuesArray[0].lastUpdatedTimestamp = 0;
*		valuesArray[0].measures = "measures_0";
*		valuesArray[0].metricsmonth = "metricsmonth_0";
*		valuesArray[0].metricsyear = "metricsyear_0";
*		valuesArray[0].userId = "userId_0";
*		valuesArray[0].facilityId = "facilityId_0";
*		valuesArray[1] = {};
*		valuesArray[1].actual = "actual_1";
*		valuesArray[1].deleted = "deleted_1";
*		valuesArray[1].lastSyncTime = "lastSyncTime_1";
*		valuesArray[1].lastUpdatedBy = "lastUpdatedBy_1";
*		valuesArray[1].lastUpdatedTimestamp = 1;
*		valuesArray[1].measures = "measures_1";
*		valuesArray[1].metricsmonth = "metricsmonth_1";
*		valuesArray[1].metricsyear = "metricsyear_1";
*		valuesArray[1].userId = "userId_1";
*		valuesArray[1].facilityId = "facilityId_1";
*		valuesArray[2] = {};
*		valuesArray[2].actual = "actual_2";
*		valuesArray[2].deleted = "deleted_2";
*		valuesArray[2].lastSyncTime = "lastSyncTime_2";
*		valuesArray[2].lastUpdatedBy = "lastUpdatedBy_2";
*		valuesArray[2].lastUpdatedTimestamp = 2;
*		valuesArray[2].measures = "measures_2";
*		valuesArray[2].metricsmonth = "metricsmonth_2";
*		valuesArray[2].metricsyear = "metricsyear_2";
*		valuesArray[2].userId = "userId_2";
*		valuesArray[2].facilityId = "facilityId_2";
*		com.healogics.offline.userMetrics.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.healogics.offline.userMetrics.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.userMetrics.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"userMetrics",errorcallback,true)===false){
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
				errMsg = "actual=" + valuestable.actual;
				pks["actual"] = {key:"actual",value:valuestable.actual};
				errMsg = errMsg + ", measures=" + valuestable.measures;
				pks["measures"] = {key:"measures",value:valuestable.measures};
				errMsg = errMsg + ", metricsmonth=" + valuestable.metricsmonth;
				pks["metricsmonth"] = {key:"metricsmonth",value:valuestable.metricsmonth};
				errMsg = errMsg + ", metricsyear=" + valuestable.metricsyear;
				pks["metricsyear"] = {key:"metricsyear",value:valuestable.metricsyear};
				errMsg = errMsg + ", userId=" + valuestable.userId;
				pks["userId"] = {key:"userId",value:valuestable.userId};
				errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
				pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
				var wcs = [];
				if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.healogics.offline.userMetrics.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.healogics.offline.userMetrics.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.userMetrics.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates userMetrics using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.userMetrics.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.healogics.offline.userMetrics.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.userMetrics.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.healogics.offline.userMetrics.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"userMetrics",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.healogics.offline.userMetrics.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates userMetrics(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.userMetrics.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.healogics.offline.userMetrics.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"userMetrics",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.userMetrics.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.userMetrics.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.healogics.offline.userMetrics.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.userMetrics.getPKTable());
	}
};

/************************************************************************************
* Updates userMetrics(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.deleted = "deleted_updated0";
*		inputArray[0].changeSet.lastSyncTime = "lastSyncTime_updated0";
*		inputArray[0].changeSet.lastUpdatedBy = "lastUpdatedBy_updated0";
*		inputArray[0].changeSet.lastUpdatedTimestamp = "lastUpdatedTimestamp_updated0";
*		inputArray[0].whereClause = "where actual = '0'";
*		inputArray[0].whereClause = "where measures = '0'";
*		inputArray[0].whereClause = "where metricsmonth = '0'";
*		inputArray[0].whereClause = "where metricsyear = '0'";
*		inputArray[0].whereClause = "where userId = '0'";
*		inputArray[0].whereClause = "where facilityId = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.deleted = "deleted_updated1";
*		inputArray[1].changeSet.lastSyncTime = "lastSyncTime_updated1";
*		inputArray[1].changeSet.lastUpdatedBy = "lastUpdatedBy_updated1";
*		inputArray[1].changeSet.lastUpdatedTimestamp = "lastUpdatedTimestamp_updated1";
*		inputArray[1].whereClause = "where actual = '1'";
*		inputArray[1].whereClause = "where measures = '1'";
*		inputArray[1].whereClause = "where metricsmonth = '1'";
*		inputArray[1].whereClause = "where metricsyear = '1'";
*		inputArray[1].whereClause = "where userId = '1'";
*		inputArray[1].whereClause = "where facilityId = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.deleted = "deleted_updated2";
*		inputArray[2].changeSet.lastSyncTime = "lastSyncTime_updated2";
*		inputArray[2].changeSet.lastUpdatedBy = "lastUpdatedBy_updated2";
*		inputArray[2].changeSet.lastUpdatedTimestamp = "lastUpdatedTimestamp_updated2";
*		inputArray[2].whereClause = "where actual = '2'";
*		inputArray[2].whereClause = "where measures = '2'";
*		inputArray[2].whereClause = "where metricsmonth = '2'";
*		inputArray[2].whereClause = "where metricsyear = '2'";
*		inputArray[2].whereClause = "where userId = '2'";
*		inputArray[2].whereClause = "where facilityId = '2'";
*		com.healogics.offline.userMetrics.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.userMetrics.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.healogics.offline.userMetrics.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "userMetrics";
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
			if(kony.sync.attributeValidation(valuestable,"userMetrics",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.healogics.offline.userMetrics.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.healogics.offline.userMetrics.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.healogics.offline.userMetrics.getPKTable());
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
		sync.log.trace("Entering  com.healogics.offline.userMetrics.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.healogics.offline.userMetrics.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes userMetrics using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.userMetrics.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.userMetrics.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.userMetrics.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function userMetricsTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.userMetrics.deleteByPK->userMetrics_PKPresent successcallback");
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
	
	function userMetricsErrorCallback(){
		sync.log.error("Entering com.healogics.offline.userMetrics.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function userMetricsSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.userMetrics.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, userMetricsTransactionCallback, userMetricsSuccessCallback, userMetricsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes userMetrics(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.healogics.offline.userMetrics.remove("where actual like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.healogics.offline.userMetrics.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.userMetrics.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function userMetrics_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function userMetrics_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.remove->userMetrics_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, userMetrics_removeTransactioncallback, userMetrics_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes userMetrics using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.userMetrics.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.userMetrics.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function userMetricsTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.userMetrics.removeDeviceInstanceByPK -> userMetricsTransactionCallback");
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
	
	function userMetricsErrorCallback(){
		sync.log.error("Entering com.healogics.offline.userMetrics.removeDeviceInstanceByPK -> userMetricsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function userMetricsSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.removeDeviceInstanceByPK -> userMetricsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.userMetrics.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, userMetricsTransactionCallback, userMetricsSuccessCallback, userMetricsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes userMetrics(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.userMetrics.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function userMetrics_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function userMetrics_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.remove->userMetrics_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.userMetrics.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, userMetrics_removeTransactioncallback, userMetrics_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves userMetrics using primary key from the local Database. 
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.userMetrics.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.userMetrics.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	var wcs = [];
	if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.healogics.offline.userMetrics.getAllDetailsByPK-> success callback function");
		successcallback(com.healogics.offline.userMetrics.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves userMetrics(s) using where clause from the local Database. 
* e.g. com.healogics.offline.userMetrics.find("where actual like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.userMetrics.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.userMetrics.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of userMetrics with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.healogics.offline.userMetrics.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.userMetrics.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.healogics.offline.userMetrics.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of userMetrics matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.userMetrics.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.userMetrics.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.healogics.offline.userMetrics.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.healogics.offline.userMetrics.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of userMetrics pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.healogics.offline.userMetrics.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.userMetrics.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.userMetrics.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of userMetrics pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.healogics.offline.userMetrics.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.userMetrics.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.userMetrics.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of userMetrics deferred for upload.
*************************************************************************************/
com.healogics.offline.userMetrics.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.userMetrics.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.userMetrics.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to userMetrics in local database to last synced state
*************************************************************************************/
com.healogics.offline.userMetrics.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.userMetrics.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to userMetrics's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.userMetrics.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.userMetrics.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	var wcs = [];
	if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.userMetrics.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.userMetrics.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether userMetrics's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.userMetrics.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.userMetrics.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.userMetrics.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.userMetrics.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether userMetrics's record  
* with given primary key is pending for upload
*************************************************************************************/
com.healogics.offline.userMetrics.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.userMetrics.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.userMetrics.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.userMetrics.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.userMetrics.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.userMetrics.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.userMetrics.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.userMetrics.isRecordPendingForUpload->successcallback function");
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
com.healogics.offline.userMetrics.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.healogics.offline.userMetrics.removeCascade function");
	var tbname = com.healogics.offline.userMetrics.getTableName();
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


com.healogics.offline.userMetrics.convertTableToObject = function(res){
	sync.log.trace("Entering com.healogics.offline.userMetrics.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.healogics.offline.userMetrics();
			obj.actual = res[i].actual;
			obj.deleted = res[i].deleted;
			obj.lastSyncTime = res[i].lastSyncTime;
			obj.lastUpdatedBy = res[i].lastUpdatedBy;
			obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
			obj.measures = res[i].measures;
			obj.metricsmonth = res[i].metricsmonth;
			obj.metricsyear = res[i].metricsyear;
			obj.userId = res[i].userId;
			obj.facilityId = res[i].facilityId;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.healogics.offline.userMetrics.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.healogics.offline.userMetrics.filterAttributes function");
	var attributeTable = {};
	attributeTable.actual = "actual";
	attributeTable.deleted = "deleted";
	attributeTable.lastSyncTime = "lastSyncTime";
	attributeTable.lastUpdatedBy = "lastUpdatedBy";
	attributeTable.lastUpdatedTimestamp = "lastUpdatedTimestamp";
	attributeTable.measures = "measures";
	attributeTable.metricsmonth = "metricsmonth";
	attributeTable.metricsyear = "metricsyear";
	attributeTable.userId = "userId";
	attributeTable.facilityId = "facilityId";

	var PKTable = {};
	PKTable.actual = {}
	PKTable.actual.name = "actual";
	PKTable.actual.isAutoGen = false;
	PKTable.measures = {}
	PKTable.measures.name = "measures";
	PKTable.measures.isAutoGen = false;
	PKTable.metricsmonth = {}
	PKTable.metricsmonth.name = "metricsmonth";
	PKTable.metricsmonth.isAutoGen = false;
	PKTable.metricsyear = {}
	PKTable.metricsyear.name = "metricsyear";
	PKTable.metricsyear.isAutoGen = false;
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
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject userMetrics. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject userMetrics. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject userMetrics. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.healogics.offline.userMetrics.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.healogics.offline.userMetrics.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.healogics.offline.userMetrics.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.healogics.offline.userMetrics.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.healogics.offline.userMetrics.prototype.getValuesTable function");
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.actual = this.actual;
	}
	valuesTable.deleted = this.deleted;
	valuesTable.lastSyncTime = this.lastSyncTime;
	valuesTable.lastUpdatedBy = this.lastUpdatedBy;
	valuesTable.lastUpdatedTimestamp = this.lastUpdatedTimestamp;
	if(isInsert===true){
		valuesTable.measures = this.measures;
	}
	if(isInsert===true){
		valuesTable.metricsmonth = this.metricsmonth;
	}
	if(isInsert===true){
		valuesTable.metricsyear = this.metricsyear;
	}
	if(isInsert===true){
		valuesTable.userId = this.userId;
	}
	if(isInsert===true){
		valuesTable.facilityId = this.facilityId;
	}
	return valuesTable;
};

com.healogics.offline.userMetrics.prototype.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.userMetrics.prototype.getPKTable function");
	var pkTable = {};
	pkTable.actual = {key:"actual",value:this.actual};
	pkTable.measures = {key:"measures",value:this.measures};
	pkTable.metricsmonth = {key:"metricsmonth",value:this.metricsmonth};
	pkTable.metricsyear = {key:"metricsyear",value:this.metricsyear};
	pkTable.userId = {key:"userId",value:this.userId};
	pkTable.facilityId = {key:"facilityId",value:this.facilityId};
	return pkTable;
};

com.healogics.offline.userMetrics.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getPKTable function");
	var pkTable = [];
	pkTable.push("actual");
	pkTable.push("measures");
	pkTable.push("metricsmonth");
	pkTable.push("metricsyear");
	pkTable.push("userId");
	pkTable.push("facilityId");
	return pkTable;
};

com.healogics.offline.userMetrics.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.healogics.offline.userMetrics.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.actual)){
		if(!kony.sync.isNull(pks.actual.value)){
			wc.key = "actual";
			wc.value = pks.actual.value;
		}
		else{
			wc.key = "actual";
			wc.value = pks.actual;
		}
	}else{
		sync.log.error("Primary Key actual not specified in " + opName + " an item in userMetrics");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("actual",opName,"userMetrics")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.measures)){
		if(!kony.sync.isNull(pks.measures.value)){
			wc.key = "measures";
			wc.value = pks.measures.value;
		}
		else{
			wc.key = "measures";
			wc.value = pks.measures;
		}
	}else{
		sync.log.error("Primary Key measures not specified in " + opName + " an item in userMetrics");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("measures",opName,"userMetrics")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.metricsmonth)){
		if(!kony.sync.isNull(pks.metricsmonth.value)){
			wc.key = "metricsmonth";
			wc.value = pks.metricsmonth.value;
		}
		else{
			wc.key = "metricsmonth";
			wc.value = pks.metricsmonth;
		}
	}else{
		sync.log.error("Primary Key metricsmonth not specified in " + opName + " an item in userMetrics");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("metricsmonth",opName,"userMetrics")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.metricsyear)){
		if(!kony.sync.isNull(pks.metricsyear.value)){
			wc.key = "metricsyear";
			wc.value = pks.metricsyear.value;
		}
		else{
			wc.key = "metricsyear";
			wc.value = pks.metricsyear;
		}
	}else{
		sync.log.error("Primary Key metricsyear not specified in " + opName + " an item in userMetrics");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("metricsyear",opName,"userMetrics")));
		return;
	}
	kony.table.insert(wcs,wc);
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
		sync.log.error("Primary Key userId not specified in " + opName + " an item in userMetrics");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("userId",opName,"userMetrics")));
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
		sync.log.error("Primary Key facilityId not specified in " + opName + " an item in userMetrics");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId",opName,"userMetrics")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.healogics.offline.userMetrics.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.validateNull function");
	if(valuestable.lastUpdatedTimestamp!==undefined){
		if(kony.sync.isNull(valuestable.lastUpdatedTimestamp) || kony.sync.isEmptyString(valuestable.lastUpdatedTimestamp)){
			sync.log.error("Mandatory attribute lastUpdatedTimestamp is missing for the SyncObject userMetrics.");
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "lastUpdatedTimestamp")));
			return false;
		}
	}
	return true;
};

com.healogics.offline.userMetrics.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.userMetrics.validateNullInsert function");
	if(kony.sync.isNull(valuestable.actual) || kony.sync.isEmptyString(valuestable.actual)){
		sync.log.error("Mandatory attribute actual is missing for the SyncObject userMetrics.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "actual")));
		return false;
	}
	if(kony.sync.isNull(valuestable.lastUpdatedTimestamp) || kony.sync.isEmptyString(valuestable.lastUpdatedTimestamp)){
		sync.log.error("Mandatory attribute lastUpdatedTimestamp is missing for the SyncObject userMetrics.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "lastUpdatedTimestamp")));
		return false;
	}
	if(kony.sync.isNull(valuestable.measures) || kony.sync.isEmptyString(valuestable.measures)){
		sync.log.error("Mandatory attribute measures is missing for the SyncObject userMetrics.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "measures")));
		return false;
	}
	if(kony.sync.isNull(valuestable.metricsmonth) || kony.sync.isEmptyString(valuestable.metricsmonth)){
		sync.log.error("Mandatory attribute metricsmonth is missing for the SyncObject userMetrics.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "metricsmonth")));
		return false;
	}
	if(kony.sync.isNull(valuestable.metricsyear) || kony.sync.isEmptyString(valuestable.metricsyear)){
		sync.log.error("Mandatory attribute metricsyear is missing for the SyncObject userMetrics.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "metricsyear")));
		return false;
	}
	if(kony.sync.isNull(valuestable.userId) || kony.sync.isEmptyString(valuestable.userId)){
		sync.log.error("Mandatory attribute userId is missing for the SyncObject userMetrics.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "userId")));
		return false;
	}
	if(kony.sync.isNull(valuestable.facilityId) || kony.sync.isEmptyString(valuestable.facilityId)){
		sync.log.error("Mandatory attribute facilityId is missing for the SyncObject userMetrics.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "userMetrics", "facilityId")));
		return false;
	}
	return true;
};

com.healogics.offline.userMetrics.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.healogics.offline.userMetrics.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.healogics.offline.userMetrics.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.healogics.offline.userMetrics.getTableName = function(){
	return "userMetrics";
};




// **********************************End userMetrics's helper methods************************