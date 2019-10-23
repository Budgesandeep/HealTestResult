//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:30 UTC 2019offlinePhotoUpload*******************
// **********************************Start offlinePhotoUpload's helper methods************************
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
* Creates new offlinePhotoUpload
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload = function(){
	this.docName = null;
	this.docType = null;
	this.document = null;
	this.id = null;
	this.lastPage = null;
	this.pageNumber = null;
	this.timestamp = null;
	this.userId = null;
	this.photoId = null;
	this.statuscode = null;
	this.responsedesc = null;
	this.responsecode = null;
	this.documentCreatedDate = null;
	this.image_Timestamp = null;
	this.markForUpload = true;
};

com.healogics.offline.offlinePhotoUpload.prototype = {
	get docName(){
		return this._docName;
	},
	set docName(val){
		this._docName = val;
	},
	get docType(){
		return this._docType;
	},
	set docType(val){
		this._docType = val;
	},
	get document(){
		return this._document;
	},
	set document(val){
		this._document = val;
	},
	get id(){
		return this._id;
	},
	set id(val){
		this._id = val;
	},
	get lastPage(){
		return this._lastPage;
	},
	set lastPage(val){
		this._lastPage = val;
	},
	get pageNumber(){
		return this._pageNumber;
	},
	set pageNumber(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidNumberType(val)){
			sync.log.error("Invalid data type for the attribute pageNumber in offlinePhotoUpload.\nExpected:\"integer\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._pageNumber = val;
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
	get photoId(){
		return this._photoId;
	},
	set photoId(val){
		this._photoId = val;
	},
	get statuscode(){
		return this._statuscode;
	},
	set statuscode(val){
		this._statuscode = val;
	},
	get responsedesc(){
		return this._responsedesc;
	},
	set responsedesc(val){
		this._responsedesc = val;
	},
	get responsecode(){
		return this._responsecode;
	},
	set responsecode(val){
		this._responsecode = val;
	},
	get documentCreatedDate(){
		return this._documentCreatedDate;
	},
	set documentCreatedDate(val){
		this._documentCreatedDate = val;
	},
	get image_Timestamp(){
		return this._image_Timestamp;
	},
	set image_Timestamp(val){
		this._image_Timestamp = val;
	},
};

/************************************************************************************
* Retrieves all instances of offlinePhotoUpload SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "docName";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "docType";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.healogics.offline.offlinePhotoUpload.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	orderByMap = kony.sync.formOrderByClause("offlinePhotoUpload",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getAll->successcallback");
		successcallback(com.healogics.offline.offlinePhotoUpload.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of offlinePhotoUpload present in local database.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getAllCount function");
	com.healogics.offline.offlinePhotoUpload.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of offlinePhotoUpload using where clause in the local Database
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getCount->successcallback");
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
* Creates a new instance of offlinePhotoUpload in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.healogics.offline.offlinePhotoUpload.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.offlinePhotoUpload.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"offlinePhotoUpload",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.healogics.offline.offlinePhotoUpload.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of offlinePhotoUpload in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].docName = "docName_0";
*		valuesArray[0].docType = "docType_0";
*		valuesArray[0].document = "document_0";
*		valuesArray[0].id = "id_0";
*		valuesArray[0].lastPage = "lastPage_0";
*		valuesArray[0].pageNumber = 0;
*		valuesArray[0].timestamp = "timestamp_0";
*		valuesArray[0].userId = "userId_0";
*		valuesArray[0].statuscode = "statuscode_0";
*		valuesArray[0].responsedesc = "responsedesc_0";
*		valuesArray[0].responsecode = "responsecode_0";
*		valuesArray[0].documentCreatedDate = "documentCreatedDate_0";
*		valuesArray[0].image_Timestamp = "image_Timestamp_0";
*		valuesArray[1] = {};
*		valuesArray[1].docName = "docName_1";
*		valuesArray[1].docType = "docType_1";
*		valuesArray[1].document = "document_1";
*		valuesArray[1].id = "id_1";
*		valuesArray[1].lastPage = "lastPage_1";
*		valuesArray[1].pageNumber = 1;
*		valuesArray[1].timestamp = "timestamp_1";
*		valuesArray[1].userId = "userId_1";
*		valuesArray[1].statuscode = "statuscode_1";
*		valuesArray[1].responsedesc = "responsedesc_1";
*		valuesArray[1].responsecode = "responsecode_1";
*		valuesArray[1].documentCreatedDate = "documentCreatedDate_1";
*		valuesArray[1].image_Timestamp = "image_Timestamp_1";
*		valuesArray[2] = {};
*		valuesArray[2].docName = "docName_2";
*		valuesArray[2].docType = "docType_2";
*		valuesArray[2].document = "document_2";
*		valuesArray[2].id = "id_2";
*		valuesArray[2].lastPage = "lastPage_2";
*		valuesArray[2].pageNumber = 2;
*		valuesArray[2].timestamp = "timestamp_2";
*		valuesArray[2].userId = "userId_2";
*		valuesArray[2].statuscode = "statuscode_2";
*		valuesArray[2].responsedesc = "responsedesc_2";
*		valuesArray[2].responsecode = "responsecode_2";
*		valuesArray[2].documentCreatedDate = "documentCreatedDate_2";
*		valuesArray[2].image_Timestamp = "image_Timestamp_2";
*		com.healogics.offline.offlinePhotoUpload.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"offlinePhotoUpload",errorcallback,true)===false){
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
				errMsg = "id=" + valuestable.id;
				pks["id"] = {key:"id",value:valuestable.id};
				errMsg = errMsg + ", pageNumber=" + valuestable.pageNumber;
				pks["pageNumber"] = {key:"pageNumber",value:valuestable.pageNumber};
				errMsg = errMsg + ", userId=" + valuestable.userId;
				pks["userId"] = {key:"userId",value:valuestable.userId};
				errMsg = errMsg + ", photoId=" + valuestable.photoId;
				pks["photoId"] = {key:"photoId",value:valuestable.photoId};
				var wcs = [];
				if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.offlinePhotoUpload.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates offlinePhotoUpload using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.healogics.offline.offlinePhotoUpload.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.offlinePhotoUpload.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"offlinePhotoUpload",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.healogics.offline.offlinePhotoUpload.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates offlinePhotoUpload(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"offlinePhotoUpload",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.offlinePhotoUpload.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.healogics.offline.offlinePhotoUpload.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.offlinePhotoUpload.getPKTable());
	}
};

/************************************************************************************
* Updates offlinePhotoUpload(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.docName = "docName_updated0";
*		inputArray[0].changeSet.docType = "docType_updated0";
*		inputArray[0].changeSet.document = "document_updated0";
*		inputArray[0].changeSet.lastPage = "lastPage_updated0";
*		inputArray[0].whereClause = "where id = '0'";
*		inputArray[0].whereClause = "where pageNumber = 0";
*		inputArray[0].whereClause = "where userId = '0'";
*		inputArray[0].whereClause = "where photoId = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.docName = "docName_updated1";
*		inputArray[1].changeSet.docType = "docType_updated1";
*		inputArray[1].changeSet.document = "document_updated1";
*		inputArray[1].changeSet.lastPage = "lastPage_updated1";
*		inputArray[1].whereClause = "where id = '1'";
*		inputArray[1].whereClause = "where pageNumber = 1";
*		inputArray[1].whereClause = "where userId = '1'";
*		inputArray[1].whereClause = "where photoId = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.docName = "docName_updated2";
*		inputArray[2].changeSet.docType = "docType_updated2";
*		inputArray[2].changeSet.document = "document_updated2";
*		inputArray[2].changeSet.lastPage = "lastPage_updated2";
*		inputArray[2].whereClause = "where id = '2'";
*		inputArray[2].whereClause = "where pageNumber = 2";
*		inputArray[2].whereClause = "where userId = '2'";
*		inputArray[2].whereClause = "where photoId = '2'";
*		com.healogics.offline.offlinePhotoUpload.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "offlinePhotoUpload";
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
			if(kony.sync.attributeValidation(valuestable,"offlinePhotoUpload",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.healogics.offline.offlinePhotoUpload.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.healogics.offline.offlinePhotoUpload.getPKTable());
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
		sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.healogics.offline.offlinePhotoUpload.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes offlinePhotoUpload using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.offlinePhotoUpload.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.offlinePhotoUpload.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function offlinePhotoUploadTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.deleteByPK->offlinePhotoUpload_PKPresent successcallback");
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
	
	function offlinePhotoUploadErrorCallback(){
		sync.log.error("Entering com.healogics.offline.offlinePhotoUpload.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function offlinePhotoUploadSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.offlinePhotoUpload.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, offlinePhotoUploadTransactionCallback, offlinePhotoUploadSuccessCallback, offlinePhotoUploadErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes offlinePhotoUpload(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.healogics.offline.offlinePhotoUpload.remove("where docName like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function offlinePhotoUpload_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function offlinePhotoUpload_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.remove->offlinePhotoUpload_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, offlinePhotoUpload_removeTransactioncallback, offlinePhotoUpload_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes offlinePhotoUpload using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function offlinePhotoUploadTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK -> offlinePhotoUploadTransactionCallback");
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
	
	function offlinePhotoUploadErrorCallback(){
		sync.log.error("Entering com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK -> offlinePhotoUploadErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function offlinePhotoUploadSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK -> offlinePhotoUploadSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.offlinePhotoUpload.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, offlinePhotoUploadTransactionCallback, offlinePhotoUploadSuccessCallback, offlinePhotoUploadErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes offlinePhotoUpload(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function offlinePhotoUpload_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function offlinePhotoUpload_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.remove->offlinePhotoUpload_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, offlinePhotoUpload_removeTransactioncallback, offlinePhotoUpload_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves offlinePhotoUpload using primary key from the local Database. 
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.offlinePhotoUpload.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.offlinePhotoUpload.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	var wcs = [];
	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getAllDetailsByPK-> success callback function");
		successcallback(com.healogics.offline.offlinePhotoUpload.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves offlinePhotoUpload(s) using where clause from the local Database. 
* e.g. com.healogics.offline.offlinePhotoUpload.find("where docName like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.offlinePhotoUpload.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of offlinePhotoUpload with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.healogics.offline.offlinePhotoUpload.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.offlinePhotoUpload.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of offlinePhotoUpload matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.healogics.offline.offlinePhotoUpload.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of offlinePhotoUpload pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.offlinePhotoUpload.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of offlinePhotoUpload pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.offlinePhotoUpload.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of offlinePhotoUpload deferred for upload.
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.offlinePhotoUpload.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to offlinePhotoUpload in local database to last synced state
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to offlinePhotoUpload's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	var wcs = [];
	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether offlinePhotoUpload's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.offlinePhotoUpload.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.offlinePhotoUpload.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether offlinePhotoUpload's record  
* with given primary key is pending for upload
*************************************************************************************/
com.healogics.offline.offlinePhotoUpload.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.offlinePhotoUpload.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.offlinePhotoUpload.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.offlinePhotoUpload.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.offlinePhotoUpload.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.offlinePhotoUpload.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.isRecordPendingForUpload->successcallback function");
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
com.healogics.offline.offlinePhotoUpload.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.removeCascade function");
	var tbname = com.healogics.offline.offlinePhotoUpload.getTableName();
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


com.healogics.offline.offlinePhotoUpload.convertTableToObject = function(res){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.healogics.offline.offlinePhotoUpload();
			obj.docName = res[i].docName;
			obj.docType = res[i].docType;
			obj.document = res[i].document;
			obj.id = res[i].id;
			obj.lastPage = res[i].lastPage;
			obj.pageNumber = res[i].pageNumber;
			obj.timestamp = res[i].timestamp;
			obj.userId = res[i].userId;
			obj.photoId = res[i].photoId;
			obj.statuscode = res[i].statuscode;
			obj.responsedesc = res[i].responsedesc;
			obj.responsecode = res[i].responsecode;
			obj.documentCreatedDate = res[i].documentCreatedDate;
			obj.image_Timestamp = res[i].image_Timestamp;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.healogics.offline.offlinePhotoUpload.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.filterAttributes function");
	var attributeTable = {};
	attributeTable.docName = "docName";
	attributeTable.docType = "docType";
	attributeTable.document = "document";
	attributeTable.id = "id";
	attributeTable.lastPage = "lastPage";
	attributeTable.pageNumber = "pageNumber";
	attributeTable.timestamp = "timestamp";
	attributeTable.userId = "userId";
	attributeTable.photoId = "photoId";
	attributeTable.statuscode = "statuscode";
	attributeTable.responsedesc = "responsedesc";
	attributeTable.responsecode = "responsecode";
	attributeTable.documentCreatedDate = "documentCreatedDate";
	attributeTable.image_Timestamp = "image_Timestamp";

	var PKTable = {};
	PKTable.id = {}
	PKTable.id.name = "id";
	PKTable.id.isAutoGen = false;
	PKTable.pageNumber = {}
	PKTable.pageNumber.name = "pageNumber";
	PKTable.pageNumber.isAutoGen = false;
	PKTable.userId = {}
	PKTable.userId.name = "userId";
	PKTable.userId.isAutoGen = false;
	PKTable.photoId = {}
	PKTable.photoId.name = "photoId";
	PKTable.photoId.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject offlinePhotoUpload. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject offlinePhotoUpload. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject offlinePhotoUpload. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.healogics.offline.offlinePhotoUpload.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.healogics.offline.offlinePhotoUpload.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.healogics.offline.offlinePhotoUpload.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.docName = this.docName;
	valuesTable.docType = this.docType;
	valuesTable.document = this.document;
	if(isInsert===true){
		valuesTable.id = this.id;
	}
	valuesTable.lastPage = this.lastPage;
	if(isInsert===true){
		valuesTable.pageNumber = this.pageNumber;
	}
	valuesTable.timestamp = this.timestamp;
	if(isInsert===true){
		valuesTable.userId = this.userId;
	}
	if(isInsert===true){
		valuesTable.photoId = this.photoId;
	}
	valuesTable.statuscode = this.statuscode;
	valuesTable.responsedesc = this.responsedesc;
	valuesTable.responsecode = this.responsecode;
	valuesTable.documentCreatedDate = this.documentCreatedDate;
	valuesTable.image_Timestamp = this.image_Timestamp;
	return valuesTable;
};

com.healogics.offline.offlinePhotoUpload.prototype.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.prototype.getPKTable function");
	var pkTable = {};
	pkTable.id = {key:"id",value:this.id};
	pkTable.pageNumber = {key:"pageNumber",value:this.pageNumber};
	pkTable.userId = {key:"userId",value:this.userId};
	pkTable.photoId = {key:"photoId",value:this.photoId};
	return pkTable;
};

com.healogics.offline.offlinePhotoUpload.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getPKTable function");
	var pkTable = [];
	pkTable.push("id");
	pkTable.push("pageNumber");
	pkTable.push("userId");
	pkTable.push("photoId");
	return pkTable;
};

com.healogics.offline.offlinePhotoUpload.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.pkCheck function");
	var wc = [];
	if(!kony.sync.isNull(pks.id)){
		if(!kony.sync.isNull(pks.id.value)){
			wc.key = "id";
			wc.value = pks.id.value;
		}
		else{
			wc.key = "id";
			wc.value = pks.id;
		}
	}else{
		sync.log.error("Primary Key id not specified in " + opName + " an item in offlinePhotoUpload");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("id",opName,"offlinePhotoUpload")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.pageNumber)){
		if(!kony.sync.isNull(pks.pageNumber.value)){
			wc.key = "pageNumber";
			wc.value = pks.pageNumber.value;
		}
		else{
			wc.key = "pageNumber";
			wc.value = pks.pageNumber;
		}
	}else{
		sync.log.error("Primary Key pageNumber not specified in " + opName + " an item in offlinePhotoUpload");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("pageNumber",opName,"offlinePhotoUpload")));
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
		sync.log.error("Primary Key userId not specified in " + opName + " an item in offlinePhotoUpload");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("userId",opName,"offlinePhotoUpload")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.photoId)){
		if(!kony.sync.isNull(pks.photoId.value)){
			wc.key = "photoId";
			wc.value = pks.photoId.value;
		}
		else{
			wc.key = "photoId";
			wc.value = pks.photoId;
		}
	}else{
		sync.log.error("Primary Key photoId not specified in " + opName + " an item in offlinePhotoUpload");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("photoId",opName,"offlinePhotoUpload")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.healogics.offline.offlinePhotoUpload.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.validateNull function");
	return true;
};

com.healogics.offline.offlinePhotoUpload.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.validateNullInsert function");
	if(kony.sync.isNull(valuestable.id) || kony.sync.isEmptyString(valuestable.id)){
		sync.log.error("Mandatory attribute id is missing for the SyncObject offlinePhotoUpload.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "offlinePhotoUpload", "id")));
		return false;
	}
	if(kony.sync.isNull(valuestable.pageNumber) || kony.sync.isEmptyString(valuestable.pageNumber)){
		sync.log.error("Mandatory attribute pageNumber is missing for the SyncObject offlinePhotoUpload.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "offlinePhotoUpload", "pageNumber")));
		return false;
	}
	if(kony.sync.isNull(valuestable.userId) || kony.sync.isEmptyString(valuestable.userId)){
		sync.log.error("Mandatory attribute userId is missing for the SyncObject offlinePhotoUpload.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "offlinePhotoUpload", "userId")));
		return false;
	}
	return true;
};

com.healogics.offline.offlinePhotoUpload.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.healogics.offline.offlinePhotoUpload.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.healogics.offline.offlinePhotoUpload.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.healogics.offline.offlinePhotoUpload.getTableName = function(){
	return "offlinePhotoUpload";
};




// **********************************End offlinePhotoUpload's helper methods************************