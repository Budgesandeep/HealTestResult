//****************Sync Version:MobileFabricInstaller-DEV-7.2.1_v201611220827_r47*******************
// ****************Generated On Mon May 29 10:49:10 UTC 2017notes*******************
// **********************************Start notes's helper methods************************
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
if(typeof(com.healogic)=== "undefined"){ com.healogic = {}; }
if(typeof(com.healogic.offline)=== "undefined"){ com.healogic.offline = {}; }

/************************************************************************************
* Creates new notes
*************************************************************************************/
com.healogic.offline.notes = function(){
	this.action = null;
	this.createDate = null;
	this.createdBy = null;
	this.deleted = null;
	this.facilityId = null;
	this.followStepDesc = null;
	this.lastUpdatedBy = null;
	this.lastUpdatedTimestamp = null;
	this.notesDesc = null;
	this.notesId = null;
	this.woundNo = null;
	this.patientName = null;
	this.patientUuid = null;
	this.markForUpload = true;
};

com.healogic.offline.notes.prototype = {
	get action(){
		return this._action;
	},
	set action(val){
		this._action = val;
	},
	get createDate(){
		return this._createDate;
	},
	set createDate(val){
		this._createDate = val;
	},
	get createdBy(){
		return this._createdBy;
	},
	set createdBy(val){
		this._createdBy = val;
	},
	get deleted(){
		return this._deleted;
	},
	set deleted(val){
		this._deleted = val;
	},
	get facilityId(){
		return this._facilityId;
	},
	set facilityId(val){
		this._facilityId = val;
	},
	get followStepDesc(){
		return this._followStepDesc;
	},
	set followStepDesc(val){
		this._followStepDesc = val;
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
	get notesDesc(){
		return this._notesDesc;
	},
	set notesDesc(val){
		this._notesDesc = val;
	},
	get notesId(){
		return this._notesId;
	},
	set notesId(val){
		this._notesId = val;
	},
	get woundNo(){
		return this._woundNo;
	},
	set woundNo(val){
		this._woundNo = val;
	},
	get patientName(){
		return this._patientName;
	},
	set patientName(val){
		this._patientName = val;
	},
	get patientUuid(){
		return this._patientUuid;
	},
	set patientUuid(val){
		this._patientUuid = val;
	},
};

/************************************************************************************
* Retrieves all instances of notes SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "action";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "createDate";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.healogic.offline.notes.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.healogic.offline.notes.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.healogic.offline.notes.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	orderByMap = kony.sync.formOrderByClause("notes",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.healogic.offline.notes.getAll->successcallback");
		successcallback(com.healogic.offline.notes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of notes present in local database.
*************************************************************************************/
com.healogic.offline.notes.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.getAllCount function");
	com.healogic.offline.notes.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of notes using where clause in the local Database
*************************************************************************************/
com.healogic.offline.notes.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.healogic.offline.notes.getCount->successcallback");
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
* Creates a new instance of notes in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogic.offline.notes.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogic.offline.notes.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.healogic.offline.notes.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogic.offline.notes.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.healogic.offline.notes.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"notes",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.healogic.offline.notes.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.healogic.offline.notes.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "facilityId=" + valuestable.facilityId;
		pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
		errMsg = errMsg + ", notesId=" + valuestable.notesId;
		pks["notesId"] = {key:"notesId",value:valuestable.notesId};
		errMsg = errMsg + ", woundNo=" + valuestable.woundNo;
		pks["woundNo"] = {key:"woundNo",value:valuestable.woundNo};
		errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
		pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
		com.healogic.offline.notes.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of notes in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].action = "action_0";
*		valuesArray[0].createDate = "createDate_0";
*		valuesArray[0].createdBy = "createdBy_0";
*		valuesArray[0].facilityId = "facilityId_0";
*		valuesArray[0].followStepDesc = "followStepDesc_0";
*		valuesArray[0].lastUpdatedBy = "lastUpdatedBy_0";
*		valuesArray[0].notesDesc = "notesDesc_0";
*		valuesArray[0].notesId = "notesId_0";
*		valuesArray[0].woundNo = "woundNo_0";
*		valuesArray[0].patientName = "patientName_0";
*		valuesArray[0].patientUuid = "patientUuid_0";
*		valuesArray[1] = {};
*		valuesArray[1].action = "action_1";
*		valuesArray[1].createDate = "createDate_1";
*		valuesArray[1].createdBy = "createdBy_1";
*		valuesArray[1].facilityId = "facilityId_1";
*		valuesArray[1].followStepDesc = "followStepDesc_1";
*		valuesArray[1].lastUpdatedBy = "lastUpdatedBy_1";
*		valuesArray[1].notesDesc = "notesDesc_1";
*		valuesArray[1].notesId = "notesId_1";
*		valuesArray[1].woundNo = "woundNo_1";
*		valuesArray[1].patientName = "patientName_1";
*		valuesArray[1].patientUuid = "patientUuid_1";
*		valuesArray[2] = {};
*		valuesArray[2].action = "action_2";
*		valuesArray[2].createDate = "createDate_2";
*		valuesArray[2].createdBy = "createdBy_2";
*		valuesArray[2].facilityId = "facilityId_2";
*		valuesArray[2].followStepDesc = "followStepDesc_2";
*		valuesArray[2].lastUpdatedBy = "lastUpdatedBy_2";
*		valuesArray[2].notesDesc = "notesDesc_2";
*		valuesArray[2].notesId = "notesId_2";
*		valuesArray[2].woundNo = "woundNo_2";
*		valuesArray[2].patientName = "patientName_2";
*		valuesArray[2].patientUuid = "patientUuid_2";
*		com.healogic.offline.notes.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.healogic.offline.notes.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.healogic.offline.notes.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"notes",errorcallback,true)===false){
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
				errMsg = "facilityId=" + valuestable.facilityId;
				pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
				errMsg = errMsg + ", notesId=" + valuestable.notesId;
				pks["notesId"] = {key:"notesId",value:valuestable.notesId};
				errMsg = errMsg + ", woundNo=" + valuestable.woundNo;
				pks["woundNo"] = {key:"woundNo",value:valuestable.woundNo};
				errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
				pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
				var wcs = [];
				if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.healogic.offline.notes.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.healogic.offline.notes.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.healogic.offline.notes.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates notes using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogic.offline.notes.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogic.offline.notes.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.healogic.offline.notes.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogic.offline.notes.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.healogic.offline.notes.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"notes",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.healogic.offline.notes.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates notes(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogic.offline.notes.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.healogic.offline.notes.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"notes",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.healogic.offline.notes.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogic.offline.notes.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.healogic.offline.notes.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogic.offline.notes.getPKTable());
	}
};

/************************************************************************************
* Updates notes(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.action = "action_updated0";
*		inputArray[0].changeSet.createDate = "createDate_updated0";
*		inputArray[0].changeSet.createdBy = "createdBy_updated0";
*		inputArray[0].changeSet.followStepDesc = "followStepDesc_updated0";
*		inputArray[0].whereClause = "where facilityId = '0'";
*		inputArray[0].whereClause = "where notesId = '0'";
*		inputArray[0].whereClause = "where woundNo = '0'";
*		inputArray[0].whereClause = "where patientUuid = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.action = "action_updated1";
*		inputArray[1].changeSet.createDate = "createDate_updated1";
*		inputArray[1].changeSet.createdBy = "createdBy_updated1";
*		inputArray[1].changeSet.followStepDesc = "followStepDesc_updated1";
*		inputArray[1].whereClause = "where facilityId = '1'";
*		inputArray[1].whereClause = "where notesId = '1'";
*		inputArray[1].whereClause = "where woundNo = '1'";
*		inputArray[1].whereClause = "where patientUuid = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.action = "action_updated2";
*		inputArray[2].changeSet.createDate = "createDate_updated2";
*		inputArray[2].changeSet.createdBy = "createdBy_updated2";
*		inputArray[2].changeSet.followStepDesc = "followStepDesc_updated2";
*		inputArray[2].whereClause = "where facilityId = '2'";
*		inputArray[2].whereClause = "where notesId = '2'";
*		inputArray[2].whereClause = "where woundNo = '2'";
*		inputArray[2].whereClause = "where patientUuid = '2'";
*		com.healogic.offline.notes.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.healogic.offline.notes.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.healogic.offline.notes.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "notes";
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
			if(kony.sync.attributeValidation(valuestable,"notes",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.healogic.offline.notes.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.healogic.offline.notes.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.healogic.offline.notes.getPKTable());
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
		sync.log.trace("Entering  com.healogic.offline.notes.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.healogic.offline.notes.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes notes using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogic.offline.notes.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.healogic.offline.notes.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.healogic.offline.notes.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogic.offline.notes.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function notesTransactionCallback(tx){
		sync.log.trace("Entering com.healogic.offline.notes.deleteByPK->notes_PKPresent successcallback");
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
	
	function notesErrorCallback(){
		sync.log.error("Entering com.healogic.offline.notes.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function notesSuccessCallback(){
		sync.log.trace("Entering com.healogic.offline.notes.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogic.offline.notes.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, notesTransactionCallback, notesSuccessCallback, notesErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes notes(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.healogic.offline.notes.remove("where action like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.healogic.offline.notes.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogic.offline.notes.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function notes_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function notes_removeSuccess(){
		sync.log.trace("Entering com.healogic.offline.notes.remove->notes_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogic.offline.notes.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogic.offline.notes.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, notes_removeTransactioncallback, notes_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes notes using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogic.offline.notes.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.healogic.offline.notes.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.healogic.offline.notes.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function notesTransactionCallback(tx){
		sync.log.trace("Entering com.healogic.offline.notes.removeDeviceInstanceByPK -> notesTransactionCallback");
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
	
	function notesErrorCallback(){
		sync.log.error("Entering com.healogic.offline.notes.removeDeviceInstanceByPK -> notesErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function notesSuccessCallback(){
		sync.log.trace("Entering com.healogic.offline.notes.removeDeviceInstanceByPK -> notesSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogic.offline.notes.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, notesTransactionCallback, notesSuccessCallback, notesErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes notes(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogic.offline.notes.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function notes_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function notes_removeSuccess(){
		sync.log.trace("Entering com.healogic.offline.notes.remove->notes_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogic.offline.notes.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogic.offline.notes.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, notes_removeTransactioncallback, notes_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves notes using primary key from the local Database. 
*************************************************************************************/
com.healogic.offline.notes.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.healogic.offline.notes.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.healogic.offline.notes.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	var wcs = [];
	if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.healogic.offline.notes.getAllDetailsByPK-> success callback function");
		successcallback(com.healogic.offline.notes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves notes(s) using where clause from the local Database. 
* e.g. com.healogic.offline.notes.find("where action like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.healogic.offline.notes.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.notes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of notes with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogic.offline.notes.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.healogic.offline.notes.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogic.offline.notes.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.healogic.offline.notes.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of notes matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogic.offline.notes.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
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
		sync.log.trace("Entering com.healogic.offline.notes.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.healogic.offline.notes.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.healogic.offline.notes.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of notes pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.healogic.offline.notes.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
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
		sync.log.trace("Entering com.healogic.offline.notes.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.notes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of notes pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.healogic.offline.notes.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogic.offline.notes.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.notes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of notes deferred for upload.
*************************************************************************************/
com.healogic.offline.notes.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
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
		sync.log.trace("Entering com.healogic.offline.notes.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.notes.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to notes in local database to last synced state
*************************************************************************************/
com.healogic.offline.notes.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogic.offline.notes.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to notes's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.healogic.offline.notes.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.healogic.offline.notes.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.healogic.offline.notes.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	var wcs = [];
	if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogic.offline.notes.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogic.offline.notes.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether notes's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.healogic.offline.notes.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogic.offline.notes.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.healogic.offline.notes.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.healogic.offline.notes.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogic.offline.notes.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether notes's record  
* with given primary key is pending for upload
*************************************************************************************/
com.healogic.offline.notes.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogic.offline.notes.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.healogic.offline.notes.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.healogic.offline.notes.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogic.offline.notes.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogic.offline.notes.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogic.offline.notes.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogic.offline.notes.isRecordPendingForUpload->successcallback function");
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
com.healogic.offline.notes.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.healogic.offline.notes.removeCascade function");
	var tbname = com.healogic.offline.notes.getTableName();
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


com.healogic.offline.notes.convertTableToObject = function(res){
	sync.log.trace("Entering com.healogic.offline.notes.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.healogic.offline.notes();
			obj.action = res[i].action;
			obj.createDate = res[i].createDate;
			obj.createdBy = res[i].createdBy;
			obj.deleted = res[i].deleted;
			obj.facilityId = res[i].facilityId;
			obj.followStepDesc = res[i].followStepDesc;
			obj.lastUpdatedBy = res[i].lastUpdatedBy;
			obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
			obj.notesDesc = res[i].notesDesc;
			obj.notesId = res[i].notesId;
			obj.woundNo = res[i].woundNo;
			obj.patientName = res[i].patientName;
			obj.patientUuid = res[i].patientUuid;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.healogic.offline.notes.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.healogic.offline.notes.filterAttributes function");
	var attributeTable = {};
	attributeTable.action = "action";
	attributeTable.createDate = "createDate";
	attributeTable.createdBy = "createdBy";
	attributeTable.facilityId = "facilityId";
	attributeTable.followStepDesc = "followStepDesc";
	attributeTable.lastUpdatedBy = "lastUpdatedBy";
	attributeTable.notesDesc = "notesDesc";
	attributeTable.notesId = "notesId";
	attributeTable.woundNo = "woundNo";
	attributeTable.patientName = "patientName";
	attributeTable.patientUuid = "patientUuid";

	var PKTable = {};
	PKTable.facilityId = {}
	PKTable.facilityId.name = "facilityId";
	PKTable.facilityId.isAutoGen = false;
	PKTable.notesId = {}
	PKTable.notesId.name = "notesId";
	PKTable.notesId.isAutoGen = false;
	PKTable.woundNo = {}
	PKTable.woundNo.name = "woundNo";
	PKTable.woundNo.isAutoGen = false;
	PKTable.patientUuid = {}
	PKTable.patientUuid.name = "patientUuid";
	PKTable.patientUuid.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject notes. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject notes. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject notes. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.healogic.offline.notes.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.healogic.offline.notes.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.healogic.offline.notes.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.healogic.offline.notes.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.healogic.offline.notes.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.action = this.action;
	valuesTable.createDate = this.createDate;
	valuesTable.createdBy = this.createdBy;
	if(isInsert===true){
		valuesTable.facilityId = this.facilityId;
	}
	valuesTable.followStepDesc = this.followStepDesc;
	valuesTable.lastUpdatedBy = this.lastUpdatedBy;
	valuesTable.notesDesc = this.notesDesc;
	if(isInsert===true){
		valuesTable.notesId = this.notesId;
	}
	if(isInsert===true){
		valuesTable.woundNo = this.woundNo;
	}
	valuesTable.patientName = this.patientName;
	if(isInsert===true){
		valuesTable.patientUuid = this.patientUuid;
	}
	return valuesTable;
};

com.healogic.offline.notes.prototype.getPKTable = function(){
	sync.log.trace("Entering com.healogic.offline.notes.prototype.getPKTable function");
	var pkTable = {};
	pkTable.facilityId = {key:"facilityId",value:this.facilityId};
	pkTable.notesId = {key:"notesId",value:this.notesId};
	pkTable.woundNo = {key:"woundNo",value:this.woundNo};
	pkTable.patientUuid = {key:"patientUuid",value:this.patientUuid};
	return pkTable;
};

com.healogic.offline.notes.getPKTable = function(){
	sync.log.trace("Entering com.healogic.offline.notes.getPKTable function");
	var pkTable = [];
	pkTable.push("facilityId");
	pkTable.push("notesId");
	pkTable.push("woundNo");
	pkTable.push("patientUuid");
	return pkTable;
};

com.healogic.offline.notes.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.healogic.offline.notes.pkCheck function");
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
		sync.log.error("Primary Key facilityId not specified in " + opName + " an item in notes");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId",opName,"notes")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.notesId)){
		if(!kony.sync.isNull(pks.notesId.value)){
			wc.key = "notesId";
			wc.value = pks.notesId.value;
		}
		else{
			wc.key = "notesId";
			wc.value = pks.notesId;
		}
	}else{
		sync.log.error("Primary Key notesId not specified in " + opName + " an item in notes");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("notesId",opName,"notes")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.woundNo)){
		if(!kony.sync.isNull(pks.woundNo.value)){
			wc.key = "woundNo";
			wc.value = pks.woundNo.value;
		}
		else{
			wc.key = "woundNo";
			wc.value = pks.woundNo;
		}
	}else{
		sync.log.error("Primary Key woundNo not specified in " + opName + " an item in notes");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("woundNo",opName,"notes")));
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
		sync.log.error("Primary Key patientUuid not specified in " + opName + " an item in notes");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("patientUuid",opName,"notes")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.healogic.offline.notes.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.validateNull function");
	return true;
};

com.healogic.offline.notes.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogic.offline.notes.validateNullInsert function");
	return true;
};

com.healogic.offline.notes.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.healogic.offline.notes.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.healogic.offline.notes.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.healogic.offline.notes.getTableName = function(){
	return "notes";
};




// **********************************End notes's helper methods************************