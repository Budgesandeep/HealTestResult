//****************Sync Version:Sync-Dev-8.0.0_v201711101237_r14*******************
// ****************Generated On Mon Jul 08 08:08:29 UTC 2019healingSubSteps*******************
// **********************************Start healingSubSteps's helper methods************************
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
* Creates new healingSubSteps
*************************************************************************************/
com.healogics.offline.healingSubSteps = function(){
	this.completeddateDataAvailFlag = null;
	this.dataPossibleValue = null;
	this.dateDataAvailFlag = null;
	this.deleteFlag = null;
	this.docEntityId = null;
	this.facilityId = null;
	this.lastSyncTime = null;
	this.lastUpdatedByUser = null;
	this.lastUpdatedByUser_Client = null;
	this.lastUpdatedTimestamp = null;
	this.lastUpdatedTimestamp_Client = null;
	this.patientUuid = null;
	this.resultDataAvailFlag = null;
	this.stepNumber = null;
	this.subStepCompletedDate = null;
	this.subStepDescription = null;
	this.subStepOrderDate = null;
	this.subStepResult = null;
	this.wndSubDescId = null;
	this.woundId = null;
	this.woundNumber = null;
	this.subStepResult_Client = null;
	this.subStepOrderDate_Client = null;
	this.subStepCompletedDate_Client = null;
	this.conflictRaisedByUser = null;
	this.conflictRaisedByUser_Client = null;
	this.stepTitle = null;
	this.lastUpdatedTimestamp_Server = null;
	this.encounterId = null;
	this.is_field_edited = null;
	this.record_level = null;
	this.wound_date_added = null;
	this.physician_document_date = null;
	this.wound_left_right = null;
	this.markForUpload = true;
};

com.healogics.offline.healingSubSteps.prototype = {
	get completeddateDataAvailFlag(){
		return this._completeddateDataAvailFlag;
	},
	set completeddateDataAvailFlag(val){
		this._completeddateDataAvailFlag = val;
	},
	get dataPossibleValue(){
		return this._dataPossibleValue;
	},
	set dataPossibleValue(val){
		this._dataPossibleValue = val;
	},
	get dateDataAvailFlag(){
		return this._dateDataAvailFlag;
	},
	set dateDataAvailFlag(val){
		this._dateDataAvailFlag = val;
	},
	get deleteFlag(){
		return this._deleteFlag;
	},
	set deleteFlag(val){
		this._deleteFlag = val;
	},
	get docEntityId(){
		return this._docEntityId;
	},
	set docEntityId(val){
		this._docEntityId = val;
	},
	get facilityId(){
		return this._facilityId;
	},
	set facilityId(val){
		this._facilityId = val;
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
	get lastUpdatedByUser_Client(){
		return this._lastUpdatedByUser_Client;
	},
	set lastUpdatedByUser_Client(val){
		this._lastUpdatedByUser_Client = val;
	},
	get lastUpdatedTimestamp(){
		return this._lastUpdatedTimestamp;
	},
	set lastUpdatedTimestamp(val){
		this._lastUpdatedTimestamp = val;
	},
	get lastUpdatedTimestamp_Client(){
		return this._lastUpdatedTimestamp_Client;
	},
	set lastUpdatedTimestamp_Client(val){
		this._lastUpdatedTimestamp_Client = val;
	},
	get patientUuid(){
		return this._patientUuid;
	},
	set patientUuid(val){
		this._patientUuid = val;
	},
	get resultDataAvailFlag(){
		return this._resultDataAvailFlag;
	},
	set resultDataAvailFlag(val){
		this._resultDataAvailFlag = val;
	},
	get stepNumber(){
		return this._stepNumber;
	},
	set stepNumber(val){
		this._stepNumber = val;
	},
	get subStepCompletedDate(){
		return this._subStepCompletedDate;
	},
	set subStepCompletedDate(val){
		this._subStepCompletedDate = val;
	},
	get subStepDescription(){
		return this._subStepDescription;
	},
	set subStepDescription(val){
		this._subStepDescription = val;
	},
	get subStepOrderDate(){
		return this._subStepOrderDate;
	},
	set subStepOrderDate(val){
		this._subStepOrderDate = val;
	},
	get subStepResult(){
		return this._subStepResult;
	},
	set subStepResult(val){
		this._subStepResult = val;
	},
	get wndSubDescId(){
		return this._wndSubDescId;
	},
	set wndSubDescId(val){
		this._wndSubDescId = val;
	},
	get woundId(){
		return this._woundId;
	},
	set woundId(val){
		this._woundId = val;
	},
	get woundNumber(){
		return this._woundNumber;
	},
	set woundNumber(val){
		this._woundNumber = val;
	},
	get subStepResult_Client(){
		return this._subStepResult_Client;
	},
	set subStepResult_Client(val){
		this._subStepResult_Client = val;
	},
	get subStepOrderDate_Client(){
		return this._subStepOrderDate_Client;
	},
	set subStepOrderDate_Client(val){
		this._subStepOrderDate_Client = val;
	},
	get subStepCompletedDate_Client(){
		return this._subStepCompletedDate_Client;
	},
	set subStepCompletedDate_Client(val){
		this._subStepCompletedDate_Client = val;
	},
	get conflictRaisedByUser(){
		return this._conflictRaisedByUser;
	},
	set conflictRaisedByUser(val){
		this._conflictRaisedByUser = val;
	},
	get conflictRaisedByUser_Client(){
		return this._conflictRaisedByUser_Client;
	},
	set conflictRaisedByUser_Client(val){
		this._conflictRaisedByUser_Client = val;
	},
	get stepTitle(){
		return this._stepTitle;
	},
	set stepTitle(val){
		this._stepTitle = val;
	},
	get lastUpdatedTimestamp_Server(){
		return this._lastUpdatedTimestamp_Server;
	},
	set lastUpdatedTimestamp_Server(val){
		this._lastUpdatedTimestamp_Server = val;
	},
	get encounterId(){
		return this._encounterId;
	},
	set encounterId(val){
		this._encounterId = val;
	},
	get is_field_edited(){
		return this._is_field_edited;
	},
	set is_field_edited(val){
		this._is_field_edited = val;
	},
	get record_level(){
		return this._record_level;
	},
	set record_level(val){
		this._record_level = val;
	},
	get wound_date_added(){
		return this._wound_date_added;
	},
	set wound_date_added(val){
		this._wound_date_added = val;
	},
	get physician_document_date(){
		return this._physician_document_date;
	},
	set physician_document_date(val){
		this._physician_document_date = val;
	},
	get wound_left_right(){
		return this._wound_left_right;
	},
	set wound_left_right(val){
		this._wound_left_right = val;
	},
};

/************************************************************************************
* Retrieves all instances of healingSubSteps SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "completeddateDataAvailFlag";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "dataPossibleValue";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* com.healogics.offline.healingSubSteps.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
com.healogics.offline.healingSubSteps.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	orderByMap = kony.sync.formOrderByClause("healingSubSteps",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.getAll->successcallback");
		successcallback(com.healogics.offline.healingSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of healingSubSteps present in local database.
*************************************************************************************/
com.healogics.offline.healingSubSteps.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getAllCount function");
	com.healogics.offline.healingSubSteps.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of healingSubSteps using where clause in the local Database
*************************************************************************************/
com.healogics.offline.healingSubSteps.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.getCount->successcallback");
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
* Creates a new instance of healingSubSteps in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.healingSubSteps.prototype.create function");
	var valuestable = this.getValuesTable(true);
	com.healogics.offline.healingSubSteps.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.healingSubSteps.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  com.healogics.offline.healingSubSteps.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"healingSubSteps",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.healingSubSteps.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	var pks = [];
	var errMsg = "";
	
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.healingSubSteps.getRelationshipMap(relationshipMap,valuestable);
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
		errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
		pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
		errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
		pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
		errMsg = errMsg + ", stepNumber=" + valuestable.stepNumber;
		pks["stepNumber"] = {key:"stepNumber",value:valuestable.stepNumber};
		errMsg = errMsg + ", wndSubDescId=" + valuestable.wndSubDescId;
		pks["wndSubDescId"] = {key:"wndSubDescId",value:valuestable.wndSubDescId};
		errMsg = errMsg + ", woundId=" + valuestable.woundId;
		pks["woundId"] = {key:"woundId",value:valuestable.woundId};
		errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
		pks["woundNumber"] = {key:"woundNumber",value:valuestable.woundNumber};
		com.healogics.offline.healingSubSteps.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of healingSubSteps in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].completeddateDataAvailFlag = "completeddateDataAvailFlag_0";
*		valuesArray[0].dataPossibleValue = "dataPossibleValue_0";
*		valuesArray[0].dateDataAvailFlag = "dateDataAvailFlag_0";
*		valuesArray[0].docEntityId = "docEntityId_0";
*		valuesArray[0].facilityId = "facilityId_0";
*		valuesArray[0].lastSyncTime = "lastSyncTime_0";
*		valuesArray[0].lastUpdatedByUser = "lastUpdatedByUser_0";
*		valuesArray[0].lastUpdatedByUser_Client = "lastUpdatedByUser_Client_0";
*		valuesArray[0].lastUpdatedTimestamp_Client = "lastUpdatedTimestamp_Client_0";
*		valuesArray[0].patientUuid = "patientUuid_0";
*		valuesArray[0].resultDataAvailFlag = "resultDataAvailFlag_0";
*		valuesArray[0].stepNumber = "stepNumber_0";
*		valuesArray[0].subStepCompletedDate = "subStepCompletedDate_0";
*		valuesArray[0].subStepDescription = "subStepDescription_0";
*		valuesArray[0].subStepOrderDate = "subStepOrderDate_0";
*		valuesArray[0].subStepResult = "subStepResult_0";
*		valuesArray[0].wndSubDescId = "wndSubDescId_0";
*		valuesArray[0].woundId = "woundId_0";
*		valuesArray[0].woundNumber = "woundNumber_0";
*		valuesArray[0].subStepResult_Client = "subStepResult_Client_0";
*		valuesArray[0].subStepOrderDate_Client = "subStepOrderDate_Client_0";
*		valuesArray[0].subStepCompletedDate_Client = "subStepCompletedDate_Client_0";
*		valuesArray[0].conflictRaisedByUser = "conflictRaisedByUser_0";
*		valuesArray[0].conflictRaisedByUser_Client = "conflictRaisedByUser_Client_0";
*		valuesArray[0].stepTitle = "stepTitle_0";
*		valuesArray[0].lastUpdatedTimestamp_Server = "lastUpdatedTimestamp_Server_0";
*		valuesArray[0].encounterId = "encounterId_0";
*		valuesArray[0].is_field_edited = "is_field_edited_0";
*		valuesArray[0].record_level = "record_level_0";
*		valuesArray[0].wound_date_added = "wound_date_added_0";
*		valuesArray[0].physician_document_date = "physician_document_date_0";
*		valuesArray[0].wound_left_right = "wound_left_right_0";
*		valuesArray[1] = {};
*		valuesArray[1].completeddateDataAvailFlag = "completeddateDataAvailFlag_1";
*		valuesArray[1].dataPossibleValue = "dataPossibleValue_1";
*		valuesArray[1].dateDataAvailFlag = "dateDataAvailFlag_1";
*		valuesArray[1].docEntityId = "docEntityId_1";
*		valuesArray[1].facilityId = "facilityId_1";
*		valuesArray[1].lastSyncTime = "lastSyncTime_1";
*		valuesArray[1].lastUpdatedByUser = "lastUpdatedByUser_1";
*		valuesArray[1].lastUpdatedByUser_Client = "lastUpdatedByUser_Client_1";
*		valuesArray[1].lastUpdatedTimestamp_Client = "lastUpdatedTimestamp_Client_1";
*		valuesArray[1].patientUuid = "patientUuid_1";
*		valuesArray[1].resultDataAvailFlag = "resultDataAvailFlag_1";
*		valuesArray[1].stepNumber = "stepNumber_1";
*		valuesArray[1].subStepCompletedDate = "subStepCompletedDate_1";
*		valuesArray[1].subStepDescription = "subStepDescription_1";
*		valuesArray[1].subStepOrderDate = "subStepOrderDate_1";
*		valuesArray[1].subStepResult = "subStepResult_1";
*		valuesArray[1].wndSubDescId = "wndSubDescId_1";
*		valuesArray[1].woundId = "woundId_1";
*		valuesArray[1].woundNumber = "woundNumber_1";
*		valuesArray[1].subStepResult_Client = "subStepResult_Client_1";
*		valuesArray[1].subStepOrderDate_Client = "subStepOrderDate_Client_1";
*		valuesArray[1].subStepCompletedDate_Client = "subStepCompletedDate_Client_1";
*		valuesArray[1].conflictRaisedByUser = "conflictRaisedByUser_1";
*		valuesArray[1].conflictRaisedByUser_Client = "conflictRaisedByUser_Client_1";
*		valuesArray[1].stepTitle = "stepTitle_1";
*		valuesArray[1].lastUpdatedTimestamp_Server = "lastUpdatedTimestamp_Server_1";
*		valuesArray[1].encounterId = "encounterId_1";
*		valuesArray[1].is_field_edited = "is_field_edited_1";
*		valuesArray[1].record_level = "record_level_1";
*		valuesArray[1].wound_date_added = "wound_date_added_1";
*		valuesArray[1].physician_document_date = "physician_document_date_1";
*		valuesArray[1].wound_left_right = "wound_left_right_1";
*		valuesArray[2] = {};
*		valuesArray[2].completeddateDataAvailFlag = "completeddateDataAvailFlag_2";
*		valuesArray[2].dataPossibleValue = "dataPossibleValue_2";
*		valuesArray[2].dateDataAvailFlag = "dateDataAvailFlag_2";
*		valuesArray[2].docEntityId = "docEntityId_2";
*		valuesArray[2].facilityId = "facilityId_2";
*		valuesArray[2].lastSyncTime = "lastSyncTime_2";
*		valuesArray[2].lastUpdatedByUser = "lastUpdatedByUser_2";
*		valuesArray[2].lastUpdatedByUser_Client = "lastUpdatedByUser_Client_2";
*		valuesArray[2].lastUpdatedTimestamp_Client = "lastUpdatedTimestamp_Client_2";
*		valuesArray[2].patientUuid = "patientUuid_2";
*		valuesArray[2].resultDataAvailFlag = "resultDataAvailFlag_2";
*		valuesArray[2].stepNumber = "stepNumber_2";
*		valuesArray[2].subStepCompletedDate = "subStepCompletedDate_2";
*		valuesArray[2].subStepDescription = "subStepDescription_2";
*		valuesArray[2].subStepOrderDate = "subStepOrderDate_2";
*		valuesArray[2].subStepResult = "subStepResult_2";
*		valuesArray[2].wndSubDescId = "wndSubDescId_2";
*		valuesArray[2].woundId = "woundId_2";
*		valuesArray[2].woundNumber = "woundNumber_2";
*		valuesArray[2].subStepResult_Client = "subStepResult_Client_2";
*		valuesArray[2].subStepOrderDate_Client = "subStepOrderDate_Client_2";
*		valuesArray[2].subStepCompletedDate_Client = "subStepCompletedDate_Client_2";
*		valuesArray[2].conflictRaisedByUser = "conflictRaisedByUser_2";
*		valuesArray[2].conflictRaisedByUser_Client = "conflictRaisedByUser_Client_2";
*		valuesArray[2].stepTitle = "stepTitle_2";
*		valuesArray[2].lastUpdatedTimestamp_Server = "lastUpdatedTimestamp_Server_2";
*		valuesArray[2].encounterId = "encounterId_2";
*		valuesArray[2].is_field_edited = "is_field_edited_2";
*		valuesArray[2].record_level = "record_level_2";
*		valuesArray[2].wound_date_added = "wound_date_added_2";
*		valuesArray[2].physician_document_date = "physician_document_date_2";
*		valuesArray[2].wound_left_right = "wound_left_right_2";
*		com.healogics.offline.healingSubSteps.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
com.healogics.offline.healingSubSteps.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"healingSubSteps",errorcallback,true)===false){
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
				errMsg = errMsg + ", facilityId=" + valuestable.facilityId;
				pks["facilityId"] = {key:"facilityId",value:valuestable.facilityId};
				errMsg = errMsg + ", patientUuid=" + valuestable.patientUuid;
				pks["patientUuid"] = {key:"patientUuid",value:valuestable.patientUuid};
				errMsg = errMsg + ", stepNumber=" + valuestable.stepNumber;
				pks["stepNumber"] = {key:"stepNumber",value:valuestable.stepNumber};
				errMsg = errMsg + ", wndSubDescId=" + valuestable.wndSubDescId;
				pks["wndSubDescId"] = {key:"wndSubDescId",value:valuestable.wndSubDescId};
				errMsg = errMsg + ", woundId=" + valuestable.woundId;
				pks["woundId"] = {key:"woundId",value:valuestable.woundId};
				errMsg = errMsg + ", woundNumber=" + valuestable.woundNumber;
				pks["woundNumber"] = {key:"woundNumber",value:valuestable.woundNumber};
				var wcs = [];
				if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering  com.healogics.offline.healingSubSteps.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  com.healogics.offline.healingSubSteps.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = com.healogics.offline.healingSubSteps.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates healingSubSteps using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.healingSubSteps.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	com.healogics.offline.healingSubSteps.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.healingSubSteps.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  com.healogics.offline.healingSubSteps.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"healingSubSteps",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = com.healogics.offline.healingSubSteps.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates healingSubSteps(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.healingSubSteps.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"healingSubSteps",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  com.healogics.offline.healingSubSteps.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.healingSubSteps.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = com.healogics.offline.healingSubSteps.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, com.healogics.offline.healingSubSteps.getPKTable());
	}
};

/************************************************************************************
* Updates healingSubSteps(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.completeddateDataAvailFlag = "completeddateDataAvailFlag_updated0";
*		inputArray[0].changeSet.dataPossibleValue = "dataPossibleValue_updated0";
*		inputArray[0].changeSet.dateDataAvailFlag = "dateDataAvailFlag_updated0";
*		inputArray[0].changeSet.lastSyncTime = "lastSyncTime_updated0";
*		inputArray[0].whereClause = "where docEntityId = '0'";
*		inputArray[0].whereClause = "where facilityId = '0'";
*		inputArray[0].whereClause = "where patientUuid = '0'";
*		inputArray[0].whereClause = "where stepNumber = '0'";
*		inputArray[0].whereClause = "where wndSubDescId = '0'";
*		inputArray[0].whereClause = "where woundId = '0'";
*		inputArray[0].whereClause = "where woundNumber = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.completeddateDataAvailFlag = "completeddateDataAvailFlag_updated1";
*		inputArray[1].changeSet.dataPossibleValue = "dataPossibleValue_updated1";
*		inputArray[1].changeSet.dateDataAvailFlag = "dateDataAvailFlag_updated1";
*		inputArray[1].changeSet.lastSyncTime = "lastSyncTime_updated1";
*		inputArray[1].whereClause = "where docEntityId = '1'";
*		inputArray[1].whereClause = "where facilityId = '1'";
*		inputArray[1].whereClause = "where patientUuid = '1'";
*		inputArray[1].whereClause = "where stepNumber = '1'";
*		inputArray[1].whereClause = "where wndSubDescId = '1'";
*		inputArray[1].whereClause = "where woundId = '1'";
*		inputArray[1].whereClause = "where woundNumber = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.completeddateDataAvailFlag = "completeddateDataAvailFlag_updated2";
*		inputArray[2].changeSet.dataPossibleValue = "dataPossibleValue_updated2";
*		inputArray[2].changeSet.dateDataAvailFlag = "dateDataAvailFlag_updated2";
*		inputArray[2].changeSet.lastSyncTime = "lastSyncTime_updated2";
*		inputArray[2].whereClause = "where docEntityId = '2'";
*		inputArray[2].whereClause = "where facilityId = '2'";
*		inputArray[2].whereClause = "where patientUuid = '2'";
*		inputArray[2].whereClause = "where stepNumber = '2'";
*		inputArray[2].whereClause = "where wndSubDescId = '2'";
*		inputArray[2].whereClause = "where woundId = '2'";
*		inputArray[2].whereClause = "where woundNumber = '2'";
*		com.healogics.offline.healingSubSteps.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.healingSubSteps.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "1000148102b32778a";
	var tbname = "healingSubSteps";
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
			if(kony.sync.attributeValidation(valuestable,"healingSubSteps",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, com.healogics.offline.healingSubSteps.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  com.healogics.offline.healingSubSteps.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, com.healogics.offline.healingSubSteps.getPKTable());
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
		sync.log.trace("Entering  com.healogics.offline.healingSubSteps.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = com.healogics.offline.healingSubSteps.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes healingSubSteps using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.prototype.deleteByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.healingSubSteps.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
com.healogics.offline.healingSubSteps.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function healingSubStepsTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.deleteByPK->healingSubSteps_PKPresent successcallback");
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
	
	function healingSubStepsErrorCallback(){
		sync.log.error("Entering com.healogics.offline.healingSubSteps.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function healingSubStepsSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.healingSubSteps.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, healingSubStepsTransactionCallback, healingSubStepsSuccessCallback, healingSubStepsErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes healingSubSteps(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. com.healogics.offline.healingSubSteps.remove("where completeddateDataAvailFlag like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
com.healogics.offline.healingSubSteps.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;
	var record = "";

	function healingSubSteps_removeTransactioncallback(tx){
			wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function healingSubSteps_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.remove->healingSubSteps_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, healingSubSteps_removeTransactioncallback, healingSubSteps_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes healingSubSteps using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function healingSubStepsTransactionCallback(tx){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK -> healingSubStepsTransactionCallback");
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
	
	function healingSubStepsErrorCallback(){
		sync.log.error("Entering com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK -> healingSubStepsErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function healingSubStepsSuccessCallback(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK -> healingSubStepsSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.healingSubSteps.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, healingSubStepsTransactionCallback, healingSubStepsSuccessCallback, healingSubStepsErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes healingSubSteps(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
com.healogics.offline.healingSubSteps.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function healingSubSteps_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function healingSubSteps_removeSuccess(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.remove->healingSubSteps_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, healingSubSteps_removeTransactioncallback, healingSubSteps_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves healingSubSteps using primary key from the local Database. 
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.healingSubSteps.getAllDetailsByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.healingSubSteps.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	var wcs = [];
	if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.getAllDetailsByPK-> success callback function");
		successcallback(com.healogics.offline.healingSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};






/************************************************************************************
* Retrieves healingSubSteps(s) using where clause from the local Database. 
* e.g. com.healogics.offline.healingSubSteps.find("where completeddateDataAvailFlag like 'A%'", successcallback,errorcallback);
*************************************************************************************/
com.healogics.offline.healingSubSteps.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.healingSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of healingSubSteps with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	com.healogics.offline.healingSubSteps.markForUploadbyPK(pks, successcallback, errorcallback);
};
com.healogics.offline.healingSubSteps.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(com.healogics.offline.healingSubSteps.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of healingSubSteps matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
com.healogics.offline.healingSubSteps.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering com.healogics.offline.healingSubSteps.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of healingSubSteps pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
com.healogics.offline.healingSubSteps.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.healingSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of healingSubSteps pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
com.healogics.offline.healingSubSteps.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.healingSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of healingSubSteps deferred for upload.
*************************************************************************************/
com.healogics.offline.healingSubSteps.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
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
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, com.healogics.offline.healingSubSteps.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to healingSubSteps in local database to last synced state
*************************************************************************************/
com.healogics.offline.healingSubSteps.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to healingSubSteps's record with given primary key in local 
* database to last synced state
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	com.healogics.offline.healingSubSteps.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
com.healogics.offline.healingSubSteps.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	var wcs = [];
	if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering com.healogics.offline.healingSubSteps.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether healingSubSteps's record  
* with given primary key got deferred in last sync
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.healingSubSteps.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.healingSubSteps.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.healingSubSteps.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether healingSubSteps's record  
* with given primary key is pending for upload
*************************************************************************************/
com.healogics.offline.healingSubSteps.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  com.healogics.offline.healingSubSteps.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	com.healogics.offline.healingSubSteps.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
com.healogics.offline.healingSubSteps.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "com.healogics.offline.healingSubSteps.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	var wcs = [] ;
	var flag;
	if(com.healogics.offline.healingSubSteps.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering com.healogics.offline.healingSubSteps.isRecordPendingForUpload->successcallback function");
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
com.healogics.offline.healingSubSteps.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.removeCascade function");
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
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


com.healogics.offline.healingSubSteps.convertTableToObject = function(res){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new com.healogics.offline.healingSubSteps();
			obj.completeddateDataAvailFlag = res[i].completeddateDataAvailFlag;
			obj.dataPossibleValue = res[i].dataPossibleValue;
			obj.dateDataAvailFlag = res[i].dateDataAvailFlag;
			obj.deleteFlag = res[i].deleteFlag;
			obj.docEntityId = res[i].docEntityId;
			obj.facilityId = res[i].facilityId;
			obj.lastSyncTime = res[i].lastSyncTime;
			obj.lastUpdatedByUser = res[i].lastUpdatedByUser;
			obj.lastUpdatedByUser_Client = res[i].lastUpdatedByUser_Client;
			obj.lastUpdatedTimestamp = res[i].lastUpdatedTimestamp;
			obj.lastUpdatedTimestamp_Client = res[i].lastUpdatedTimestamp_Client;
			obj.patientUuid = res[i].patientUuid;
			obj.resultDataAvailFlag = res[i].resultDataAvailFlag;
			obj.stepNumber = res[i].stepNumber;
			obj.subStepCompletedDate = res[i].subStepCompletedDate;
			obj.subStepDescription = res[i].subStepDescription;
			obj.subStepOrderDate = res[i].subStepOrderDate;
			obj.subStepResult = res[i].subStepResult;
			obj.wndSubDescId = res[i].wndSubDescId;
			obj.woundId = res[i].woundId;
			obj.woundNumber = res[i].woundNumber;
			obj.subStepResult_Client = res[i].subStepResult_Client;
			obj.subStepOrderDate_Client = res[i].subStepOrderDate_Client;
			obj.subStepCompletedDate_Client = res[i].subStepCompletedDate_Client;
			obj.conflictRaisedByUser = res[i].conflictRaisedByUser;
			obj.conflictRaisedByUser_Client = res[i].conflictRaisedByUser_Client;
			obj.stepTitle = res[i].stepTitle;
			obj.lastUpdatedTimestamp_Server = res[i].lastUpdatedTimestamp_Server;
			obj.encounterId = res[i].encounterId;
			obj.is_field_edited = res[i].is_field_edited;
			obj.record_level = res[i].record_level;
			obj.wound_date_added = res[i].wound_date_added;
			obj.physician_document_date = res[i].physician_document_date;
			obj.wound_left_right = res[i].wound_left_right;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

com.healogics.offline.healingSubSteps.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.filterAttributes function");
	var attributeTable = {};
	attributeTable.completeddateDataAvailFlag = "completeddateDataAvailFlag";
	attributeTable.dataPossibleValue = "dataPossibleValue";
	attributeTable.dateDataAvailFlag = "dateDataAvailFlag";
	attributeTable.docEntityId = "docEntityId";
	attributeTable.facilityId = "facilityId";
	attributeTable.lastSyncTime = "lastSyncTime";
	attributeTable.lastUpdatedByUser = "lastUpdatedByUser";
	attributeTable.lastUpdatedByUser_Client = "lastUpdatedByUser_Client";
	attributeTable.lastUpdatedTimestamp_Client = "lastUpdatedTimestamp_Client";
	attributeTable.patientUuid = "patientUuid";
	attributeTable.resultDataAvailFlag = "resultDataAvailFlag";
	attributeTable.stepNumber = "stepNumber";
	attributeTable.subStepCompletedDate = "subStepCompletedDate";
	attributeTable.subStepDescription = "subStepDescription";
	attributeTable.subStepOrderDate = "subStepOrderDate";
	attributeTable.subStepResult = "subStepResult";
	attributeTable.wndSubDescId = "wndSubDescId";
	attributeTable.woundId = "woundId";
	attributeTable.woundNumber = "woundNumber";
	attributeTable.subStepResult_Client = "subStepResult_Client";
	attributeTable.subStepOrderDate_Client = "subStepOrderDate_Client";
	attributeTable.subStepCompletedDate_Client = "subStepCompletedDate_Client";
	attributeTable.conflictRaisedByUser = "conflictRaisedByUser";
	attributeTable.conflictRaisedByUser_Client = "conflictRaisedByUser_Client";
	attributeTable.stepTitle = "stepTitle";
	attributeTable.lastUpdatedTimestamp_Server = "lastUpdatedTimestamp_Server";
	attributeTable.encounterId = "encounterId";
	attributeTable.is_field_edited = "is_field_edited";
	attributeTable.record_level = "record_level";
	attributeTable.wound_date_added = "wound_date_added";
	attributeTable.physician_document_date = "physician_document_date";
	attributeTable.wound_left_right = "wound_left_right";

	var PKTable = {};
	PKTable.docEntityId = {}
	PKTable.docEntityId.name = "docEntityId";
	PKTable.docEntityId.isAutoGen = false;
	PKTable.facilityId = {}
	PKTable.facilityId.name = "facilityId";
	PKTable.facilityId.isAutoGen = false;
	PKTable.patientUuid = {}
	PKTable.patientUuid.name = "patientUuid";
	PKTable.patientUuid.isAutoGen = false;
	PKTable.stepNumber = {}
	PKTable.stepNumber.name = "stepNumber";
	PKTable.stepNumber.isAutoGen = false;
	PKTable.wndSubDescId = {}
	PKTable.wndSubDescId.name = "wndSubDescId";
	PKTable.wndSubDescId.isAutoGen = false;
	PKTable.woundId = {}
	PKTable.woundId.name = "woundId";
	PKTable.woundId.isAutoGen = false;
	PKTable.woundNumber = {}
	PKTable.woundNumber.name = "woundNumber";
	PKTable.woundNumber.isAutoGen = false;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject healingSubSteps. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject healingSubSteps. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject healingSubSteps. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

com.healogics.offline.healingSubSteps.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = com.healogics.offline.healingSubSteps.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

com.healogics.offline.healingSubSteps.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.completeddateDataAvailFlag = this.completeddateDataAvailFlag;
	valuesTable.dataPossibleValue = this.dataPossibleValue;
	valuesTable.dateDataAvailFlag = this.dateDataAvailFlag;
	if(isInsert===true){
		valuesTable.docEntityId = this.docEntityId;
	}
	if(isInsert===true){
		valuesTable.facilityId = this.facilityId;
	}
	valuesTable.lastSyncTime = this.lastSyncTime;
	valuesTable.lastUpdatedByUser = this.lastUpdatedByUser;
	valuesTable.lastUpdatedByUser_Client = this.lastUpdatedByUser_Client;
	valuesTable.lastUpdatedTimestamp_Client = this.lastUpdatedTimestamp_Client;
	if(isInsert===true){
		valuesTable.patientUuid = this.patientUuid;
	}
	valuesTable.resultDataAvailFlag = this.resultDataAvailFlag;
	if(isInsert===true){
		valuesTable.stepNumber = this.stepNumber;
	}
	valuesTable.subStepCompletedDate = this.subStepCompletedDate;
	valuesTable.subStepDescription = this.subStepDescription;
	valuesTable.subStepOrderDate = this.subStepOrderDate;
	valuesTable.subStepResult = this.subStepResult;
	if(isInsert===true){
		valuesTable.wndSubDescId = this.wndSubDescId;
	}
	if(isInsert===true){
		valuesTable.woundId = this.woundId;
	}
	if(isInsert===true){
		valuesTable.woundNumber = this.woundNumber;
	}
	valuesTable.subStepResult_Client = this.subStepResult_Client;
	valuesTable.subStepOrderDate_Client = this.subStepOrderDate_Client;
	valuesTable.subStepCompletedDate_Client = this.subStepCompletedDate_Client;
	valuesTable.conflictRaisedByUser = this.conflictRaisedByUser;
	valuesTable.conflictRaisedByUser_Client = this.conflictRaisedByUser_Client;
	valuesTable.stepTitle = this.stepTitle;
	valuesTable.lastUpdatedTimestamp_Server = this.lastUpdatedTimestamp_Server;
	valuesTable.encounterId = this.encounterId;
	valuesTable.is_field_edited = this.is_field_edited;
	valuesTable.record_level = this.record_level;
	valuesTable.wound_date_added = this.wound_date_added;
	valuesTable.physician_document_date = this.physician_document_date;
	valuesTable.wound_left_right = this.wound_left_right;
	return valuesTable;
};

com.healogics.offline.healingSubSteps.prototype.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.prototype.getPKTable function");
	var pkTable = {};
	pkTable.docEntityId = {key:"docEntityId",value:this.docEntityId};
	pkTable.facilityId = {key:"facilityId",value:this.facilityId};
	pkTable.patientUuid = {key:"patientUuid",value:this.patientUuid};
	pkTable.stepNumber = {key:"stepNumber",value:this.stepNumber};
	pkTable.wndSubDescId = {key:"wndSubDescId",value:this.wndSubDescId};
	pkTable.woundId = {key:"woundId",value:this.woundId};
	pkTable.woundNumber = {key:"woundNumber",value:this.woundNumber};
	return pkTable;
};

com.healogics.offline.healingSubSteps.getPKTable = function(){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getPKTable function");
	var pkTable = [];
	pkTable.push("docEntityId");
	pkTable.push("facilityId");
	pkTable.push("patientUuid");
	pkTable.push("stepNumber");
	pkTable.push("wndSubDescId");
	pkTable.push("woundId");
	pkTable.push("woundNumber");
	return pkTable;
};

com.healogics.offline.healingSubSteps.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.pkCheck function");
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
		sync.log.error("Primary Key docEntityId not specified in " + opName + " an item in healingSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("docEntityId",opName,"healingSubSteps")));
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
		sync.log.error("Primary Key facilityId not specified in " + opName + " an item in healingSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("facilityId",opName,"healingSubSteps")));
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
		sync.log.error("Primary Key patientUuid not specified in " + opName + " an item in healingSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("patientUuid",opName,"healingSubSteps")));
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
		sync.log.error("Primary Key stepNumber not specified in " + opName + " an item in healingSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("stepNumber",opName,"healingSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	var wc = [];
	if(!kony.sync.isNull(pks.wndSubDescId)){
		if(!kony.sync.isNull(pks.wndSubDescId.value)){
			wc.key = "wndSubDescId";
			wc.value = pks.wndSubDescId.value;
		}
		else{
			wc.key = "wndSubDescId";
			wc.value = pks.wndSubDescId;
		}
	}else{
		sync.log.error("Primary Key wndSubDescId not specified in " + opName + " an item in healingSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("wndSubDescId",opName,"healingSubSteps")));
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
		sync.log.error("Primary Key woundId not specified in " + opName + " an item in healingSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("woundId",opName,"healingSubSteps")));
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
		sync.log.error("Primary Key woundNumber not specified in " + opName + " an item in healingSubSteps");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("woundNumber",opName,"healingSubSteps")));
		return;
	}
	kony.table.insert(wcs,wc);
	return true;
};

com.healogics.offline.healingSubSteps.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.validateNull function");
	return true;
};

com.healogics.offline.healingSubSteps.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.validateNullInsert function");
	return true;
};

com.healogics.offline.healingSubSteps.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering com.healogics.offline.healingSubSteps.getRelationshipMap function");
	var r1 = {};

	return relationshipMap;
};


com.healogics.offline.healingSubSteps.checkPKValueTables = function (valuetables)	{
	var checkPksNotNullFlag = true;
	for(var i = 0; i < valuetables.length; i++)	{
		if(kony.sync.isNull(valuetables[i])){
			checkPksNotNullFlag = false;
			break;
		}
	}
	return checkPksNotNullFlag;
};

com.healogics.offline.healingSubSteps.getTableName = function(){
	return "healingSubSteps";
};




// **********************************End healingSubSteps's helper methods************************