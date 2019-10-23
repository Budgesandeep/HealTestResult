//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:27 UTC 2019objWounds*******************
// **********************************Start objWounds's helper methods************************
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
* Creates new objWounds
*************************************************************************************/
objWounds = function(){
	this.deleted = null;
	this.lastUpdatedByUser = null;
	this.lastUpdatedTimestamp = null;
	this.patientUuid = null;
	this.woundNumber = null;
	this.woundAttributes = null;
	this.docEntityId = null;
	this.encounterId = null;
	this.facilityId = null;
	this.stepDetailJSON = null;
	this.woundId = null;
	this.markForUpload = true;
};

objWounds.prototype = {
	get deleted(){
		return this._deleted;
	},
	set deleted(val){
		this._deleted = val;
	},
	get lastUpdatedByUser(){
		return this._lastUpdatedByUser;
	},
	set lastUpdatedByUser(val){
		this._lastUpdatedByUser = val;
	},
	get lastUpdatedTimestamp(){
		return this._lastUpdatedTimestamp;
	},
	set lastUpdatedTimestamp(val){
		this._lastUpdatedTimestamp = val;
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
	get woundAttributes(){
		return this._woundAttributes;
	},
	set woundAttributes(val){
		this._woundAttributes = val;
	},
	get docEntityId(){
		return this._docEntityId;
	},
	set docEntityId(val){
		this._docEntityId = val;
	},
	get encounterId(){
		return this._encounterId;
	},
	set encounterId(val){
		this._encounterId = val;
	},
	get facilityId(){
		return this._facilityId;
	},
	set facilityId(val){
		this._facilityId = val;
	},
	get stepDetailJSON(){
		return this._stepDetailJSON;
	},
	set stepDetailJSON(val){
		this._stepDetailJSON = val;
	},
	get woundId(){
		return this._woundId;
	},
	set woundId(val){
		this._woundId = val;
	},
};

/************************************************************************************
* Retrieves all instances of objWounds SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "deleted";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "lastUpdatedByUser";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* objWounds.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
objWounds.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering objWounds.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	orderByMap = kony.sync.formOrderByClause("objWounds",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering objWounds.getAll->successcallback");
		successcallback(objWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of objWounds present in local database.
*************************************************************************************/
objWounds.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering objWounds.getAllCount function");
	objWounds.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of objWounds using where clause in the local Database
*************************************************************************************/
objWounds.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering objWounds.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering objWounds.getCount->successcallback");
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
* Creates a new instance of objWounds in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
objWounds.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  objWounds.prototype.create function");
	var valuestable = this.getValuesTable(true);
	objWounds.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
objWounds.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  objWounds.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "objWounds.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"objWounds",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  objWounds.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = objWounds.getRelationshipMap(relationshipMap,valuestable);
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	
	if(kony.sync.enableORMValidations){
		errMsg = "patientUuid=" + valuestable.patientUuid;
		pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
		errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
		pks["woundNumber"] = {key:"woundNumber",value:valuestable.woundNumber};
		errMsg = errMsg + ", docEntityId=" + valuestable.docEntityId;
		pks["docEntityId"] = {key:"docEntityId",value:valuestable.docEntityId};
		errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
		pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
		errMsg = errMsg + ", woundId=" + valuestable.woundId;
		pks["woundId"] = {key:"woundId",value:valuestable.woundId};
		objWounds.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of objWounds in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].lastUpdatedByUser = "lastUpdatedByUser_0";
*		valuesArray[0].patientUuid = "patientUuid_0";
*		valuesArray[0].woundNumber = "woundNumber_0";
*		valuesArray[0].woundAttributes = "woundAttributes_0";
*		valuesArray[0].docEntityId = "docEntityId_0";
*		valuesArray[0].encounterId = "encounterId_0";
*		valuesArray[0].facilityId = "facilityId_0";
*		valuesArray[0].stepDetailJSON = "stepDetailJSON_0";
*		valuesArray[0].woundId = "woundId_0";
*		valuesArray[1] = {};
*		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
*		valuesArray[1].patientUuid = "patientUuid_1";
*		valuesArray[1].woundNumber = "woundNumber_1";
*		valuesArray[1].woundAttributes = "woundAttributes_1";
*		valuesArray[1].docEntityId = "docEntityId_1";
*		valuesArray[1].encounterId = "encounterId_1";
*		valuesArray[1].facilityId = "facilityId_1";
*		valuesArray[1].stepDetailJSON = "stepDetailJSON_1";
*		valuesArray[1].woundId = "woundId_1";
*		valuesArray[2] = {};
*		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
*		valuesArray[2].patientUuid = "patientUuid_2";
*		valuesArray[2].woundNumber = "woundNumber_2";
*		valuesArray[2].woundAttributes = "woundAttributes_2";
*		valuesArray[2].docEntityId = "docEntityId_2";
*		valuesArray[2].encounterId = "encounterId_2";
*		valuesArray[2].facilityId = "facilityId_2";
*		valuesArray[2].stepDetailJSON = "stepDetailJSON_2";
*		valuesArray[2].woundId = "woundId_2";
*		objWounds.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
objWounds.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering objWounds.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"objWounds",errorcallback,true)===false){
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
				errMsg = "patientUuid=" + valuestable.patientUuid;
				pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
				errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
				pks["woundNumber"] = {key:"woundNumber",value:valuestable.woundNumber};
				errMsg = errMsg + ", docEntityId=" + valuestable.docEntityId;
				pks["docEntityId"] = {key:"docEntityId",value:valuestable.docEntityId};
				errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
				pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
				errMsg = errMsg + ", woundId=" + valuestable.woundId;
				pks["woundId"] = {key:"woundId",value:valuestable.woundId};
				var wcs = [];
				if(objWounds.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  objWounds.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  objWounds.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = objWounds.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates objWounds using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
objWounds.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  objWounds.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	objWounds.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
objWounds.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  objWounds.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(objWounds.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"objWounds",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = objWounds.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates objWounds(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
objWounds.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering objWounds.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"objWounds",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  objWounds.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, objWounds.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = objWounds.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, objWounds.getPKTable());
	}
};

/************************************************************************************
* Updates objWounds(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.lastUpdatedByUser = "lastUpdatedByUser_updated0";
*		inputArray[0].changeSet.woundAttributes = "woundAttributes_updated0";
*		inputArray[0].changeSet.encounterId = "encounterId_updated0";
*		inputArray[0].changeSet.stepDetailJSON = "stepDetailJSON_updated0";
*		inputArray[0].whereClause = "where patientUuid = '0'";
*		inputArray[0].whereClause = "where woundNumber = '0'";
*		inputArray[0].whereClause = "where docEntityId = '0'";
*		inputArray[0].whereClause = "where facilityId = '0'";
*		inputArray[0].whereClause = "where woundId = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.lastUpdatedByUser = "lastUpdatedByUser_updated1";
*		inputArray[1].changeSet.woundAttributes = "woundAttributes_updated1";
*		inputArray[1].changeSet.encounterId = "encounterId_updated1";
*		inputArray[1].changeSet.stepDetailJSON = "stepDetailJSON_updated1";
*		inputArray[1].whereClause = "where patientUuid = '1'";
*		inputArray[1].whereClause = "where woundNumber = '1'";
*		inputArray[1].whereClause = "where docEntityId = '1'";
*		inputArray[1].whereClause = "where facilityId = '1'";
*		inputArray[1].whereClause = "where woundId = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.lastUpdatedByUser = "lastUpdatedByUser_updated2";
*		inputArray[2].changeSet.woundAttributes = "woundAttributes_updated2";
*		inputArray[2].changeSet.encounterId = "encounterId_updated2";
*		inputArray[2].changeSet.stepDetailJSON = "stepDetailJSON_updated2";
*		inputArray[2].whereClause = "where patientUuid = '2'";
*		inputArray[2].whereClause = "where woundNumber = '2'";
*		inputArray[2].whereClause = "where docEntityId = '2'";
*		inputArray[2].whereClause = "where facilityId = '2'";
*		inputArray[2].whereClause = "where woundId = '2'";
*		objWounds.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
objWounds.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering objWounds.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "objWounds";
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
			if(kony.sync.attributeValidation(valuestable,"objWounds",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, objWounds.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  objWounds.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, objWounds.getPKTable());
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
		sync.log.trace("Entering  objWounds.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = objWounds.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes objWounds using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
objWounds.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering objWounds.prototype.deleteByPK function");
	var pks = this.getPKTable();
	objWounds.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
objWounds.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering objWounds.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(objWounds.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function objWoundsTransactionCallback(tx){
		sync.log.trace("Entering objWounds.deleteByPK->objWounds_PKPresent successcallback");
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
	
	function objWoundsErrorCallback(){
		sync.log.error("Entering objWounds.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function objWoundsSuccessCallback(){
		sync.log.trace("Entering objWounds.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering objWounds.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, objWoundsTransactionCallback, objWoundsSuccessCallback, objWoundsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes objWounds(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. objWounds.remove("where lastUpdatedByUser like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
objWounds.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering objWounds.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function objWounds_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function objWounds_removeSuccess(){
		sync.log.trace("Entering objWounds.remove->objWounds_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering objWounds.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering objWounds.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, objWounds_removeTransactioncallback, objWounds_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes objWounds using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
objWounds.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering objWounds.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	objWounds.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
objWounds.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering objWounds.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(objWounds.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function objWoundsTransactionCallback(tx){
		sync.log.trace("Entering objWounds.removeDeviceInstanceByPK -> objWoundsTransactionCallback");
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
	
	function objWoundsErrorCallback(){
		sync.log.error("Entering objWounds.removeDeviceInstanceByPK -> objWoundsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function objWoundsSuccessCallback(){
		sync.log.trace("Entering objWounds.removeDeviceInstanceByPK -> objWoundsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering objWounds.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, objWoundsTransactionCallback, objWoundsSuccessCallback, objWoundsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes objWounds(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
objWounds.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering objWounds.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function objWounds_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function objWounds_removeSuccess(){
		sync.log.trace("Entering objWounds.remove->objWounds_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering objWounds.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering objWounds.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, objWounds_removeTransactioncallback, objWounds_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves objWounds using primary key from the local Database. 
*************************************************************************************/
objWounds.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering objWounds.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	objWounds.getAllDetailsByPK(pks,successcallback,errorcallback);
};
objWounds.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering objWounds.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	var wcs = [];
	if(objWounds.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering objWounds.getAllDetailsByPK-> success callback function");
		successcallback(objWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves objWounds(s) using where clause from the local Database. 
* e.g. objWounds.find("where lastUpdatedByUser like 'A%'", successcallback,errorcallback);
*************************************************************************************/
objWounds.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering objWounds.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, objWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of objWounds with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
objWounds.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering objWounds.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	objWounds.markForUploadbyPK(pks, successcallback, errorcallback);
};
objWounds.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering objWounds.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(objWounds.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of objWounds matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
objWounds.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering objWounds.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
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
		sync.log.trace("Entering objWounds.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering objWounds.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering objWounds.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of objWounds pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
objWounds.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering objWounds.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
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
		sync.log.trace("Entering objWounds.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, objWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of objWounds pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
objWounds.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering objWounds.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering objWounds.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, objWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of objWounds deferred for upload.
*************************************************************************************/
objWounds.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering objWounds.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
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
		sync.log.trace("Entering objWounds.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, objWounds.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to objWounds in local database to last synced state
*************************************************************************************/
objWounds.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering objWounds.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering objWounds.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to objWounds's record with given primary key in local 
* database to last synced state
*************************************************************************************/
objWounds.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering objWounds.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	objWounds.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
objWounds.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering objWounds.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	var wcs = [];
	if(objWounds.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering objWounds.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering objWounds.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether objWounds's record  
* with given primary key got deferred in last sync
*************************************************************************************/
objWounds.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  objWounds.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	objWounds.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
objWounds.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering objWounds.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	var wcs = [] ;
	var flag;
	if(objWounds.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering objWounds.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether objWounds's record  
* with given primary key is pending for upload
*************************************************************************************/
objWounds.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  objWounds.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	objWounds.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
objWounds.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering objWounds.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "objWounds.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = objWounds.getTableName();
	var wcs = [] ;
	var flag;
	if(objWounds.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering objWounds.isRecordPendingForUpload->successcallback function");
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
objWounds.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering objWounds.removeCascade function");
	var tbname = objWounds.getTableName();
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


objWounds.convertTableToObject = function(res){
	sync.log.trace("Entering objWounds.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
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
			obj.stepDetailJSON = res[i].stepDetailJSON;
			obj.woundId = res[i].woundId;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

objWounds.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering objWounds.filterAttributes function");
	var attributeTable = {};
	attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
	attributeTable.patientUuid = "patientUuid";
	attributeTable.woundNumber = "woundNumber";
	attributeTable.woundAttributes = "woundAttributes";
	attributeTable.docEntityId = "docEntityId";
	attributeTable.encounterId = "encounterId";
	attributeTable.facilityId = "facilityId";
	attributeTable.stepDetailJSON = "stepDetailJSON";
	attributeTable.woundId = "woundId";

	var PKTable = {};
	PKTable.patientUuid = {}
	PKTable.patientUuid.name = "patientUuid";
	PKTable.patientUuid.isAutoGen = false;
	PKTable.woundNumber = {}
	PKTable.woundNumber.name = "woundNumber";
	PKTable.woundNumber.isAutoGen = false;
	PKTable.docEntityId = {}
	PKTable.docEntityId.name = "docEntityId";
	PKTable.docEntityId.isAutoGen = false;
	PKTable.facilityId = {}
	PKTable.facilityId.name = "facilityId";
	PKTable.facilityId.isAutoGen = false;
	PKTable.woundId = {}
	PKTable.woundId.name = "woundId";
	PKTable.woundId.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject objWounds. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject objWounds. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject objWounds. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

objWounds.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering objWounds.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = objWounds.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

objWounds.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering objWounds.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
	if(isInsert===true){
		valuesTable.patientUuid = this.patientUuid;
	}
	if(isInsert===true){
		valuesTable.woundNumber = this.woundNumber;
	}
	valuesTable.woundAttributes = this.woundAttributes;
	if(isInsert===true){
		valuesTable.docEntityId = this.docEntityId;
	}
	valuesTable.encounterId = this.encounterId;
	if(isInsert===true){
		valuesTable.facilityId = this.facilityId;
	}
	valuesTable.stepDetailJSON = this.stepDetailJSON;
	if(isInsert===true){
		valuesTable.woundId = this.woundId;
	}
	return valuesTable;
};

objWounds.prototype.getPKTable = function(){
	sync.log.trace("Entering objWounds.prototype.getPKTable function");
	var pkTable = {};
	pkTable.patientUuid = {key:"patientUuid",value:this.patientUuid};
	pkTable.woundNumber = {key:"woundNumber",value:this.woundNumber};
	pkTable.docEntityId = {key:"docEntityId",value:this.docEntityId};
	pkTable.facilityId = {key:"facilityId",value:this.facilityId};
	pkTable.woundId = {key:"woundId",value:this.woundId};
	return pkTable;
};

objWounds.getPKTable = function(){
	sync.log.trace("Entering objWounds.getPKTable function");
	var pkTable = [];
	pkTable.push("patientUuid");
	pkTable.push("woundNumber");
	pkTable.push("docEntityId");
	pkTable.push("facilityId");
	pkTable.push("woundId");
	return pkTable;
};

objWounds.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering objWounds.pkCheck function");
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
		sync.log.error("Primary Key patientUuid not specified in " + opName + " an item in objWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("patientUuid",opName,"objWounds")));
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
		sync.log.error("Primary Key woundNumber not specified in " + opName + " an item in objWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("woundNumber",opName,"objWounds")));
		return;
	}
	kony.table.insert(wcs,wc);
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
		sync.log.error("Primary Key docEntityId not specified in " + opName + " an item in objWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("docEntityId",opName,"objWounds")));
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
		sync.log.error("Primary Key facilityId not specified in " + opName + " an item in objWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId",opName,"objWounds")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.woundId)){
		if(!kony.sync.isNull(pks.woundId.value)){
			wc.key = "woundId";
			wc.value = pks.woundId.value;
		}
		else{
			wc.key = "woundId";
			wc.value = pks.woundId;
		}
	}else{
		sync.log.error("Primary Key woundId not specified in " + opName + " an item in objWounds");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("woundId",opName,"objWounds")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

objWounds.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering objWounds.validateNull function");
	return true;
};

objWounds.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering objWounds.validateNullInsert function");
	return true;
};

objWounds.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering objWounds.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


objWounds.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

objWounds.getTableName = function(){
	return "objWounds";
};




// **********************************End objWounds's helper methods************************