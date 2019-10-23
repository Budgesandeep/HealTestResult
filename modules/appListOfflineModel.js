//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:26 UTC 2019appListOffline*******************
// **********************************Start appListOffline's helper methods************************
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
* Creates new appListOffline
*************************************************************************************/
com.healogics.offline.appListOffline = function(){
	this.accessToken = null;
	this.appid = null;
	this.deleted = null;
	this.displayFlag = null;
	this.enabledFlag = null;
	this.helpDeskNumber = null;
	this.lastSyncTime = null;
	this.lastUpdatedByUser = null;
	this.responsecode = null;
	this.responsedesc = null;
	this.statuscode = null;
	this.taskCount = null;
	this.timestamp = null;
	this.userId = null;
	this.userName = null;
	this.roleIdList = null;
	this.authorization = null;
	this.documentTypeNameList = null;
	this.documentTypeCodeList = null;
	this.OfflineDateLimit = null;
	this.markForUpload = true;
};

com.healogics.offline.appListOffline.prototype = {
	get accessToken(){
		return this._accessToken;
	},
	set accessToken(val){
		this._accessToken = val;
	},
	get appid(){
		return this._appid;
	},
	set appid(val){
		this._appid = val;
	},
	get deleted(){
		return this._deleted;
	},
	set deleted(val){
		this._deleted = val;
	},
	get displayFlag(){
		return this._displayFlag;
	},
	set displayFlag(val){
		this._displayFlag = val;
	},
	get enabledFlag(){
		return this._enabledFlag;
	},
	set enabledFlag(val){
		this._enabledFlag = val;
	},
	get helpDeskNumber(){
		return this._helpDeskNumber;
	},
	set helpDeskNumber(val){
		this._helpDeskNumber = val;
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
	get responsecode(){
		return this._responsecode;
	},
	set responsecode(val){
		this._responsecode = val;
	},
	get responsedesc(){
		return this._responsedesc;
	},
	set responsedesc(val){
		this._responsedesc = val;
	},
	get statuscode(){
		return this._statuscode;
	},
	set statuscode(val){
		this._statuscode = val;
	},
	get taskCount(){
		return this._taskCount;
	},
	set taskCount(val){
		this._taskCount = val;
	},
	get timestamp(){
		return this._timestamp;
	},
	set timestamp(val){
		this._timestamp = val;
	},
	get userId(){
		return this._userId;
	},
	set userId(val){
		this._userId = val;
	},
	get userName(){
		return this._userName;
	},
	set userName(val){
		this._userName = val;
	},
	get roleIdList(){
		return this._roleIdList;
	},
	set roleIdList(val){
		this._roleIdList = val;
	},
	get authorization(){
		return this._authorization;
	},
	set authorization(val){
		this._authorization = val;
	},
	get documentTypeNameList(){
		return this._documentTypeNameList;
	},
	set documentTypeNameList(val){
		this._documentTypeNameList = val;
	},
	get documentTypeCodeList(){
		return this._documentTypeCodeList;
	},
	set documentTypeCodeList(val){
		this._documentTypeCodeList = val;
	},
	get OfflineDateLimit(){
		return this._OfflineDateLimit;
	},
	set OfflineDateLimit(val){
		this._OfflineDateLimit = val;
	},
};

/************************************************************************************
* Retrieves all instances of appListOffline SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "accessToken";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "appid";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.healogics.offline.appListOffline.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.healogics.offline.appListOffline.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	orderByMap = kony.sync.formOrderByClause("appListOffline",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.healogics.offline.appListOffline.getAll->successcallback");
		successcallback(com.healogics.offline.appListOffline.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of appListOffline present in local database.
*************************************************************************************/
com.healogics.offline.appListOffline.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getAllCount function");
	com.healogics.offline.appListOffline.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of appListOffline using where clause in the local Database
*************************************************************************************/
com.healogics.offline.appListOffline.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.healogics.offline.appListOffline.getCount->successcallback");
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
* Creates a new instance of appListOffline in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.appListOffline.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.healogics.offline.appListOffline.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.appListOffline.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.healogics.offline.appListOffline.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"appListOffline",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.appListOffline.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.appListOffline.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "appid=" + valuestable.appid;
		pks["appid"] = {key:"appid",value:valuestable.appid};
		errMsg = errMsg + ", userId=" + valuestable.userId;
		pks["userId"] = {key:"userId",value:valuestable.userId};
		com.healogics.offline.appListOffline.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of appListOffline in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].accessToken = "accessToken_0";
*		valuesArray[0].appid = "appid_0";
*		valuesArray[0].deleted = "deleted_0";
*		valuesArray[0].displayFlag = "displayFlag_0";
*		valuesArray[0].enabledFlag = "enabledFlag_0";
*		valuesArray[0].helpDeskNumber = "helpDeskNumber_0";
*		valuesArray[0].lastSyncTime = "lastSyncTime_0";
*		valuesArray[0].lastUpdatedByUser = "lastUpdatedByUser_0";
*		valuesArray[0].responsecode = "responsecode_0";
*		valuesArray[0].responsedesc = "responsedesc_0";
*		valuesArray[0].statuscode = "statuscode_0";
*		valuesArray[0].taskCount = "taskCount_0";
*		valuesArray[0].timestamp = "timestamp_0";
*		valuesArray[0].userId = "userId_0";
*		valuesArray[0].userName = "userName_0";
*		valuesArray[0].roleIdList = "roleIdList_0";
*		valuesArray[0].authorization = "authorization_0";
*		valuesArray[0].documentTypeNameList = "documentTypeNameList_0";
*		valuesArray[0].documentTypeCodeList = "documentTypeCodeList_0";
*		valuesArray[0].OfflineDateLimit = "OfflineDateLimit_0";
*		valuesArray[1] = {};
*		valuesArray[1].accessToken = "accessToken_1";
*		valuesArray[1].appid = "appid_1";
*		valuesArray[1].deleted = "deleted_1";
*		valuesArray[1].displayFlag = "displayFlag_1";
*		valuesArray[1].enabledFlag = "enabledFlag_1";
*		valuesArray[1].helpDeskNumber = "helpDeskNumber_1";
*		valuesArray[1].lastSyncTime = "lastSyncTime_1";
*		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
*		valuesArray[1].responsecode = "responsecode_1";
*		valuesArray[1].responsedesc = "responsedesc_1";
*		valuesArray[1].statuscode = "statuscode_1";
*		valuesArray[1].taskCount = "taskCount_1";
*		valuesArray[1].timestamp = "timestamp_1";
*		valuesArray[1].userId = "userId_1";
*		valuesArray[1].userName = "userName_1";
*		valuesArray[1].roleIdList = "roleIdList_1";
*		valuesArray[1].authorization = "authorization_1";
*		valuesArray[1].documentTypeNameList = "documentTypeNameList_1";
*		valuesArray[1].documentTypeCodeList = "documentTypeCodeList_1";
*		valuesArray[1].OfflineDateLimit = "OfflineDateLimit_1";
*		valuesArray[2] = {};
*		valuesArray[2].accessToken = "accessToken_2";
*		valuesArray[2].appid = "appid_2";
*		valuesArray[2].deleted = "deleted_2";
*		valuesArray[2].displayFlag = "displayFlag_2";
*		valuesArray[2].enabledFlag = "enabledFlag_2";
*		valuesArray[2].helpDeskNumber = "helpDeskNumber_2";
*		valuesArray[2].lastSyncTime = "lastSyncTime_2";
*		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
*		valuesArray[2].responsecode = "responsecode_2";
*		valuesArray[2].responsedesc = "responsedesc_2";
*		valuesArray[2].statuscode = "statuscode_2";
*		valuesArray[2].taskCount = "taskCount_2";
*		valuesArray[2].timestamp = "timestamp_2";
*		valuesArray[2].userId = "userId_2";
*		valuesArray[2].userName = "userName_2";
*		valuesArray[2].roleIdList = "roleIdList_2";
*		valuesArray[2].authorization = "authorization_2";
*		valuesArray[2].documentTypeNameList = "documentTypeNameList_2";
*		valuesArray[2].documentTypeCodeList = "documentTypeCodeList_2";
*		valuesArray[2].OfflineDateLimit = "OfflineDateLimit_2";
*		com.healogics.offline.appListOffline.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.healogics.offline.appListOffline.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.appListOffline.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"appListOffline",errorcallback,true)===false){
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
				errMsg = "appid=" + valuestable.appid;
				pks["appid"] = {key:"appid",value:valuestable.appid};
				errMsg = errMsg + ", userId=" + valuestable.userId;
				pks["userId"] = {key:"userId",value:valuestable.userId};
				var wcs = [];
				if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.healogics.offline.appListOffline.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.healogics.offline.appListOffline.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.appListOffline.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates appListOffline using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.appListOffline.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.healogics.offline.appListOffline.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.appListOffline.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.healogics.offline.appListOffline.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"appListOffline",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.healogics.offline.appListOffline.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates appListOffline(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.appListOffline.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.healogics.offline.appListOffline.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"appListOffline",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.appListOffline.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.appListOffline.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.healogics.offline.appListOffline.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.appListOffline.getPKTable());
	}
};

/************************************************************************************
* Updates appListOffline(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.accessToken = "accessToken_updated0";
*		inputArray[0].changeSet.deleted = "deleted_updated0";
*		inputArray[0].changeSet.displayFlag = "displayFlag_updated0";
*		inputArray[0].changeSet.enabledFlag = "enabledFlag_updated0";
*		inputArray[0].whereClause = "where appid = '0'";
*		inputArray[0].whereClause = "where userId = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.accessToken = "accessToken_updated1";
*		inputArray[1].changeSet.deleted = "deleted_updated1";
*		inputArray[1].changeSet.displayFlag = "displayFlag_updated1";
*		inputArray[1].changeSet.enabledFlag = "enabledFlag_updated1";
*		inputArray[1].whereClause = "where appid = '1'";
*		inputArray[1].whereClause = "where userId = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.accessToken = "accessToken_updated2";
*		inputArray[2].changeSet.deleted = "deleted_updated2";
*		inputArray[2].changeSet.displayFlag = "displayFlag_updated2";
*		inputArray[2].changeSet.enabledFlag = "enabledFlag_updated2";
*		inputArray[2].whereClause = "where appid = '2'";
*		inputArray[2].whereClause = "where userId = '2'";
*		com.healogics.offline.appListOffline.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.appListOffline.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.healogics.offline.appListOffline.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "appListOffline";
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
			if(kony.sync.attributeValidation(valuestable,"appListOffline",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.healogics.offline.appListOffline.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.healogics.offline.appListOffline.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.healogics.offline.appListOffline.getPKTable());
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
		sync.log.trace("Entering  com.healogics.offline.appListOffline.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.healogics.offline.appListOffline.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes appListOffline using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.appListOffline.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.appListOffline.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.appListOffline.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function appListOfflineTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.appListOffline.deleteByPK->appListOffline_PKPresent successcallback");
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
	
	function appListOfflineErrorCallback(){
		sync.log.error("Entering com.healogics.offline.appListOffline.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function appListOfflineSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.appListOffline.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, appListOfflineTransactionCallback, appListOfflineSuccessCallback, appListOfflineErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes appListOffline(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.healogics.offline.appListOffline.remove("where accessToken like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.healogics.offline.appListOffline.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.appListOffline.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function appListOffline_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function appListOffline_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.remove->appListOffline_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, appListOffline_removeTransactioncallback, appListOffline_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes appListOffline using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.appListOffline.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.appListOffline.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function appListOfflineTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.appListOffline.removeDeviceInstanceByPK -> appListOfflineTransactionCallback");
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
	
	function appListOfflineErrorCallback(){
		sync.log.error("Entering com.healogics.offline.appListOffline.removeDeviceInstanceByPK -> appListOfflineErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function appListOfflineSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.removeDeviceInstanceByPK -> appListOfflineSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.appListOffline.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, appListOfflineTransactionCallback, appListOfflineSuccessCallback, appListOfflineErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes appListOffline(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.appListOffline.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function appListOffline_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function appListOffline_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.remove->appListOffline_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.appListOffline.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, appListOffline_removeTransactioncallback, appListOffline_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves appListOffline using primary key from the local Database. 
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.appListOffline.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.appListOffline.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	var wcs = [];
	if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.healogics.offline.appListOffline.getAllDetailsByPK-> success callback function");
		successcallback(com.healogics.offline.appListOffline.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves appListOffline(s) using where clause from the local Database. 
* e.g. com.healogics.offline.appListOffline.find("where accessToken like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.appListOffline.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.appListOffline.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of appListOffline with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.healogics.offline.appListOffline.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.appListOffline.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.healogics.offline.appListOffline.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of appListOffline matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.appListOffline.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.appListOffline.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.healogics.offline.appListOffline.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.healogics.offline.appListOffline.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of appListOffline pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.healogics.offline.appListOffline.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.appListOffline.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.appListOffline.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of appListOffline pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.healogics.offline.appListOffline.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.appListOffline.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.appListOffline.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of appListOffline deferred for upload.
*************************************************************************************/
com.healogics.offline.appListOffline.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.appListOffline.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.appListOffline.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to appListOffline in local database to last synced state
*************************************************************************************/
com.healogics.offline.appListOffline.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.appListOffline.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to appListOffline's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.appListOffline.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.appListOffline.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	var wcs = [];
	if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.appListOffline.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.appListOffline.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether appListOffline's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.appListOffline.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.appListOffline.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.appListOffline.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.appListOffline.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether appListOffline's record  
* with given primary key is pending for upload
*************************************************************************************/
com.healogics.offline.appListOffline.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.appListOffline.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.appListOffline.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.appListOffline.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.appListOffline.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.appListOffline.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.appListOffline.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.appListOffline.isRecordPendingForUpload->successcallback function");
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
com.healogics.offline.appListOffline.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.healogics.offline.appListOffline.removeCascade function");
	var tbname = com.healogics.offline.appListOffline.getTableName();
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


com.healogics.offline.appListOffline.convertTableToObject = function(res){
	sync.log.trace("Entering com.healogics.offline.appListOffline.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.healogics.offline.appListOffline();
			obj.accessToken = res[i].accessToken;
			obj.appid = res[i].appid;
			obj.deleted = res[i].deleted;
			obj.displayFlag = res[i].displayFlag;
			obj.enabledFlag = res[i].enabledFlag;
			obj.helpDeskNumber = res[i].helpDeskNumber;
			obj.lastSyncTime = res[i].lastSyncTime;
			obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
			obj.responsecode = res[i].responsecode;
			obj.responsedesc = res[i].responsedesc;
			obj.statuscode = res[i].statuscode;
			obj.taskCount = res[i].taskCount;
			obj.timestamp = res[i].timestamp;
			obj.userId = res[i].userId;
			obj.userName = res[i].userName;
			obj.roleIdList = res[i].roleIdList;
			obj.authorization = res[i].authorization;
			obj.documentTypeNameList = res[i].documentTypeNameList;
			obj.documentTypeCodeList = res[i].documentTypeCodeList;
			obj.OfflineDateLimit = res[i].OfflineDateLimit;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.healogics.offline.appListOffline.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.healogics.offline.appListOffline.filterAttributes function");
	var attributeTable = {};
	attributeTable.accessToken = "accessToken";
	attributeTable.appid = "appid";
	attributeTable.deleted = "deleted";
	attributeTable.displayFlag = "displayFlag";
	attributeTable.enabledFlag = "enabledFlag";
	attributeTable.helpDeskNumber = "helpDeskNumber";
	attributeTable.lastSyncTime = "lastSyncTime";
	attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
	attributeTable.responsecode = "responsecode";
	attributeTable.responsedesc = "responsedesc";
	attributeTable.statuscode = "statuscode";
	attributeTable.taskCount = "taskCount";
	attributeTable.timestamp = "timestamp";
	attributeTable.userId = "userId";
	attributeTable.userName = "userName";
	attributeTable.roleIdList = "roleIdList";
	attributeTable.authorization = "authorization";
	attributeTable.documentTypeNameList = "documentTypeNameList";
	attributeTable.documentTypeCodeList = "documentTypeCodeList";
	attributeTable.OfflineDateLimit = "OfflineDateLimit";

	var PKTable = {};
	PKTable.appid = {}
	PKTable.appid.name = "appid";
	PKTable.appid.isAutoGen = false;
	PKTable.userId = {}
	PKTable.userId.name = "userId";
	PKTable.userId.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject appListOffline. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject appListOffline. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject appListOffline. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.healogics.offline.appListOffline.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.healogics.offline.appListOffline.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.healogics.offline.appListOffline.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.healogics.offline.appListOffline.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.healogics.offline.appListOffline.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.accessToken = this.accessToken;
	if(isInsert===true){
		valuesTable.appid = this.appid;
	}
	valuesTable.deleted = this.deleted;
	valuesTable.displayFlag = this.displayFlag;
	valuesTable.enabledFlag = this.enabledFlag;
	valuesTable.helpDeskNumber = this.helpDeskNumber;
	valuesTable.lastSyncTime = this.lastSyncTime;
	valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
	valuesTable.responsecode = this.responsecode;
	valuesTable.responsedesc = this.responsedesc;
	valuesTable.statuscode = this.statuscode;
	valuesTable.taskCount = this.taskCount;
	valuesTable.timestamp = this.timestamp;
	if(isInsert===true){
		valuesTable.userId = this.userId;
	}
	valuesTable.userName = this.userName;
	valuesTable.roleIdList = this.roleIdList;
	valuesTable.authorization = this.authorization;
	valuesTable.documentTypeNameList = this.documentTypeNameList;
	valuesTable.documentTypeCodeList = this.documentTypeCodeList;
	valuesTable.OfflineDateLimit = this.OfflineDateLimit;
	return valuesTable;
};

com.healogics.offline.appListOffline.prototype.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.appListOffline.prototype.getPKTable function");
	var pkTable = {};
	pkTable.appid = {key:"appid",value:this.appid};
	pkTable.userId = {key:"userId",value:this.userId};
	return pkTable;
};

com.healogics.offline.appListOffline.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getPKTable function");
	var pkTable = [];
	pkTable.push("appid");
	pkTable.push("userId");
	return pkTable;
};

com.healogics.offline.appListOffline.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.healogics.offline.appListOffline.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.appid)){
		if(!kony.sync.isNull(pks.appid.value)){
			wc.key = "appid";
			wc.value = pks.appid.value;
		}
		else{
			wc.key = "appid";
			wc.value = pks.appid;
		}
	}else{
		sync.log.error("Primary Key appid not specified in " + opName + " an item in appListOffline");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("appid",opName,"appListOffline")));
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
		sync.log.error("Primary Key userId not specified in " + opName + " an item in appListOffline");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("userId",opName,"appListOffline")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.healogics.offline.appListOffline.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.validateNull function");
	return true;
};

com.healogics.offline.appListOffline.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.appListOffline.validateNullInsert function");
	if(kony.sync.isNull(valuestable.appid) || kony.sync.isEmptyString(valuestable.appid)){
		sync.log.error("Mandatory attribute appid is missing for the SyncObject appListOffline.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "appListOffline", "appid")));
		return false;
	}
	if(kony.sync.isNull(valuestable.userId) || kony.sync.isEmptyString(valuestable.userId)){
		sync.log.error("Mandatory attribute userId is missing for the SyncObject appListOffline.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "appListOffline", "userId")));
		return false;
	}
	return true;
};

com.healogics.offline.appListOffline.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.healogics.offline.appListOffline.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.healogics.offline.appListOffline.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.healogics.offline.appListOffline.getTableName = function(){
	return "appListOffline";
};




// **********************************End appListOffline's helper methods************************