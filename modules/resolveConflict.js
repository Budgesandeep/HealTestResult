/*
Module to handle data conflicts in the DB after delta sync
*/

var RESOLVE_CONFLICT_FACILITYLEVEL_DATA = [];
var RESOLVE_CONFLICT_DATA = [];
//var editedRowData = [];
var healing9stepEditedData = [];
var resolveConflict_cntrl_offline ={};

var IS_RESOLVE_CONFLICT_FLOW = false;

var RESOLVE_CONFLICT_CURRENT_INDEX = 0;

var resolveConflictConstants = {
  currentConflictCount: 0,
  isFirstTime: true
};


var resolveConflict_cntrl_offline_getCurrentConflictCount = function(){
  kony.print("inside resolveConflict_cntrl_offline_getCurrentConflictCount  ------->");
  kony.print("resolveConflict_cntrl_offline_getCurrentConflictCount facility Id--------------->"+ userInfo.selectedFacilityId);
  
  function successCallBack(res){
    kony.print("resolveConflict_cntrl_offline_getCurrentConflictCount success callback response--------------->"+JSON.stringify(res));
    
    resolveConflictConstants.currentConflictCount = res.count;
    var currentForm = kony.application.getCurrentForm().id;
    kony.print("inside resolveConflict_cntrl_offline_getCurrentConflictCount currentForm ------->"+currentForm);
    if( currentForm!= "frmLanding" && currentForm!= "frmSelectFacility"){
      resolveConflict_cntrl_offline.setBadgeValueForUI();
    }
  }
  function errorCallBack(res){
    kony.print("resolveConflict_cntrl_offline_getCurrentConflictCount failure callback");
    kony.print("resolveConflict_cntrl_offline_getCurrentConflictCount failure callback response--------->"+JSON.stringify(res));
  }
    
  
  kony.print("resolveConflict_cntrl_offline_getCurrentConflictCount ----> ");
  //var wcs = "where facilityId = "+ JSON.stringify(userInfo.selectedFacilityId) + " and conflictRaisedByUser = "+JSON.stringify(userInfo.userName)+" and conflictRaisedByUser = conflictRaisedByUser_Client"; //false
  var wcs = "where facilityId = "+ JSON.stringify(userInfo.selectedFacilityId) + 
      " and conflictRaisedByUser IS NOT NULL and conflictRaisedByUser <> 'null' and conflictRaisedByUser <> ''" 
  	+ "and conflictRaisedByUser_Client IS NOT NULL and conflictRaisedByUser_Client <> 'null' and conflictRaisedByUser_Client <> ''"; //false

  kony.print("resolveConflict_cntrl_offline_getCurrentConflictCount wcs--------------->"+ wcs);
  com.healogics.offline.healingSubSteps.getCount(wcs, successCallBack, errorCallBack);
};

resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId = function(){
   
  RESOLVE_CONFLICT_FACILITYLEVEL_DATA = [];
  
  var facilityId = userInfo.presentFacilityId;
  
  kony.print("inside resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId ------->");
  kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId facility Id--------------->"+ facilityId);
  //var wcs = "where facilityId = "+ JSON.stringify(facilityId) + " order by CAST(patientUuid as INTEGER), CAST(woundNumber as INTEGER),  CAST(stepNumber as INTEGER ) asc" ;
   //var wcs = "where facilityId = "+ JSON.stringify(facilityId) + " order by CAST(patientUuid as INTEGER), CAST(woundNumber as INTEGER),  healingSubStepNumber asc" ;
 
  
  if(!kony.sync.isSyncInitialized(errorCallBack)){
		return;
	}
	
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = com.healogics.offline.healingSubSteps.getTableName();
	//wcs = kony.sync.validateWhereClause(wcs);
	//var sql = "select * from \"" + tbname + "\" " + wcs;
  
//   	var sql = "SELECT DISTINCT a.patientUuid AS patientId, a.woundNumber, a.stepNumber, a.docEntityId, a.encounterId, b.name AS patientName from healingSubSteps AS a, patientInfo AS b" + 
//         	  " where a.facilityId = "+JSON.stringify(facilityId)+" and a.patientUuid = b.patientId " +
//     		  " and a.conflictRaisedByUser_Client = "+JSON.stringify(userInfo.userName)+" and a.conflictRaisedByUser == a.conflictRaisedByUser_Client" +
//          " and a.conflictRaisedByUser_Client="+JSON.stringify(userInfo.userName) +
//               " order by CAST(patientUuid as INTEGER), CAST(woundNumber as INTEGER),  stepNumber asc";
  
var sql = "SELECT DISTINCT a.patientUuid AS patientId, a.woundNumber, a.stepNumber, a.docEntityId, a.encounterId, b.name AS patientName from healingSubSteps AS a, patientInfo AS b" + 
        	  " where a.facilityId = "+JSON.stringify(facilityId)+" and a.patientUuid = b.patientId " +
    		  " and a.conflictRaisedByUser_Client IS NOT NULL and a.conflictRaisedByUser_Client <> 'null' and a.conflictRaisedByUser_Client <> ''" +
         	  " and a.conflictRaisedByUser IS NOT NULL and a.conflictRaisedByUser <> 'null' and a.conflictRaisedByUser <> ''" +
              " order by CAST(patientUuid as INTEGER), CAST(woundNumber as INTEGER),  stepNumber asc";

	kony.sync.single_select_execute(dbname, sql, null, successCallBack, errorCallBack);
  
  
    RESOLVE_CONFLICT_CURRENT_INDEX = 0;
  
  //com.healogics.offline.healingSubSteps.find(wcs, successCallBack, errorCallBack); 
  //objHealingSubStep.find(wcs, successCallBack, errorCallBack); 
  
   function successCallBack(res){
     kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId success callback");
     kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId success callback response--------->"+JSON.stringify(res));
	/*
     var lRecord = {};
     for (var i = 0; i< res.length; i++){
       lRecord = {};//res[i];
       */

     /*
       var subStepDesc = lRecord._subStepDesc;
       if( subStepDesc!= null){
         
         var tempRecord = {
           "lblhdrresult": "Result",       
           "lblhdrorderdate": "Order Date",
           "lblhdrcompleteddate": "Completed Date",
           "lblhdrcompletedby": "Updated by",
           "lblhdrupdatedat": "Updated at",
           "lblhdrresolution": "Resolution",
           "lblserverversion": "Server Version",
           "lblmyversion": "My Version",
           "lblkeepotherversion": "Keep Others Version",
           "lblkeepmyversion": "Keep My Version"
         }; 
         
         subStepDesc = JSON.parse(subStepDesc);
         tempRecord["lblcompleteddate"] = subStepDesc.completedDate;
      	 tempRecord["lblcompleteddate2"] = subStepDesc.completedDate;
         tempRecord.completeddate_data_avail_flag = subStepDesc.completeddateDataAvailFlag;
         tempRecord.data_possible_value = subStepDesc.dataPossibleValue;
         tempRecord.date_data_avail_flag = subStepDesc.dateDataAvailFlag;
         //temp.deleteFlag
         tempRecord["lbldescription"] = subStepDesc.description;
         tempRecord["lblorderdate"] = subStepDesc.orderDate;
         tempRecord["lblorderdate2"] = subStepDesc.orderDate;
         tempRecord["lblresult"] = subStepDesc.result;
         tempRecord["lblresult2"] = subStepDesc.result;
         tempRecord.result_data_avail_flag = subStepDesc.resultDataAvailFlag;
         tempRecord.lastUpdatedByUser = lRecord._subStepLastUpdatedByUser!=null ? lRecord._subStepLastUpdatedByUser : "";
         tempRecord.lastUpdatedTimestamp = lRecord._subStepLlastUpdatedTimestamp ? lRecord._subStepLlastUpdatedTimestamp : "";
         tempRecord.healingSubStepNumber = lRecord._healingSubStepNumber? lRecord._healingSubStepNumber : "";
         
         
         tempRecord["btnkeepotherversion"] = {skin:"sknbtnradionormal"};
      	 tempRecord["btnkeepmyversion"] = {skin:"sknbtnradioSelected"};
         tempRecord["keepotherversion"] = "false";
         tempRecord["keepmyversion"] = "true";
         
         
         RESOLVE_CONFLICT_DATA.push(tempRecord);
       }
      */

    /*      
       lRecord["patientId"] = res[i].patientUuid;//_patientUuid
       lRecord["woundNumber"] = res[i].woundNumber; 
       lRecord["stepNumber"] = res[i].stepNumber;
       lRecord["patientName"] = res[i].name;
       RESOLVE_CONFLICT_FACILITYLEVEL_DATA.push(lRecord);
    }
	*/     
    RESOLVE_CONFLICT_FACILITYLEVEL_DATA = res;
   	kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId RESOLVE_CONFLICT_FACILITYLEVEL_DATA--------->"+JSON.stringify(RESOLVE_CONFLICT_FACILITYLEVEL_DATA));

     if(RESOLVE_CONFLICT_FACILITYLEVEL_DATA.length > 0){
       resolveConflict_cntrl_offline.getConflictData(0);
    }
   }
  
  function errorCallBack(res){
    kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId failure callback");
    kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId failure callback response--------->"+JSON.stringify(res));
  }
   
};

resolveConflict_cntrl_offline.getConflictData = function(index){
  kony.print("resolveConflict_cntrl_offline.getConflictData ---- index::"+index);
  var firstRecord = RESOLVE_CONFLICT_FACILITYLEVEL_DATA[index];
  
  frmConflictResolve.btnresolvenext.setEnabled(true);
  frmConflictResolve.btnresolvenext.skin = "sknbtnbluebg100";
  
  kony.print("resolveConflict_cntrl_offline.getConflictData ---- index data ::"+JSON.stringify(firstRecord));
  IS_RESOLVE_CONFLICT_FLOW = true;
  //objWounds_cntrl_offline.getAllWoundsForPatientId(firstRecord.patientId);
  resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo(firstRecord.patientId, firstRecord.woundNumber, firstRecord.stepNumber, firstRecord.patientName);
};


var resolveConflict_cntrl_offline_getNextConflictData = function(){
  
  ++RESOLVE_CONFLICT_CURRENT_INDEX;
  
  if(RESOLVE_CONFLICT_FACILITYLEVEL_DATA.length > RESOLVE_CONFLICT_CURRENT_INDEX){
    
    
    resolveConflict_cntrl_offline.getConflictData(RESOLVE_CONFLICT_CURRENT_INDEX);
  
  }else if(isIpad && !SYNC_CONSTANTS.isAppOffline){///Only in online mode.
    
    com.healogics.utility.showLoading("Updating Data!"); 
    SYNC_CONSTANTS.isSyncInProgress = true; ////Akshay - using the flag to stop Sync Now button press.
    modSyncScopes_offline_9StepsHealing();
    syncInitialDownload(sync_notesSuccessCallback, sync_notesErrorCallBack);
    
  }else{
    showLandingScreen();
  }
  
  
};

var resolveConflict_cntrl_offline_getPreviousConflictData = function(){
  --RESOLVE_CONFLICT_CURRENT_INDEX;
  resolveConflict_cntrl_offline.getConflictData(RESOLVE_CONFLICT_CURRENT_INDEX);  
};

resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo = function(patientId, woundNo, StepNo, patientName){
    
  function successCallBack(res){
    kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundIdAndStepNo success callback--------->");
    kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundIdAndStepNo success callback response--------->"+ JSON.stringify(res));
    
    RESOLVE_CONFLICT_DATA = [];
    var stepTitle = "";
    for (i = 0; i< res.length; i++){
      
      stepTitle = res[i]._stepTitle;
      
      var tempRecord = {
        "lblhdrresult": "Result",       
        "lblhdrorderdate": "Order Date",
        "lblhdrcompleteddate": "Completed Date",
        "lblhdrcompletedby": "Updated by",
        "lblhdrupdatedat": "Updated at",
        "lblhdrresolution": "Resolution",
        "lblserverversion": "Server Version",
        "lblmyversion": "My Version",
        "lblkeepotherversion": "Keep This Version",
        "lblkeepmyversion": "Keep My Version"
      }; 
      
      
      tempRecord["woundSubDescJSON"] = res[i]._woundSubDescJSON;
      tempRecord["woundSubDescJSON_Client"] = res[i]._woundSubDescJSON_Client;
      
      tempRecord["lbldescription"] = res[i]._subStepDescription;
      tempRecord["lblresult"] = res[i]._subStepResult;
      tempRecord["lblresult2"] = res[i]._subStepResult_Client;
      tempRecord["lblorderdate"] = modifyDateFormatWithOutTime(res[i]._subStepOrderDate);
      tempRecord["lblorderdate2"] = modifyDateFormatWithOutTime(res[i]._subStepOrderDate_Client);
      tempRecord["lblcompleteddate"] = modifyDateFormatWithOutTime(res[i]._subStepCompletedDate);
      tempRecord["lblcompleteddate2"] = modifyDateFormatWithOutTime(res[i]._subStepCompletedDate_Client);
      tempRecord["wndSubDescId"] = res[i]._wndSubDescId;
      
      tempRecord["lblupdatedby"] = res[i]._lastUpdatedByUser; 
      tempRecord["lblupdatedby2"] = res[i]._lastUpdatedByUser_Client;
      
      tempRecord["lblupdatedat"] = modifyDateFormatWithTime(res[i]._lastUpdatedTimestamp_Server);
      tempRecord["lblupdatedat2"] = modifyDateFormatWithTime(res[i]._lastUpdatedTimestamp_Client);
      
      tempRecord["record_editable_flag"] = (res[i]._resultDataAvailFlag == "false") && (res[i]._completeddateDataAvailFlag == "false") && (res[i]._dateDataAvailFlag == "false");

      if( tempRecord["record_editable_flag"] == "false" || tempRecord["record_editable_flag"] == false){
        tempRecord["keepotherversion"] = "true";
        tempRecord["keepmyversion"] = "false";
        tempRecord["btnkeepotherversion"] = {skin:"sknbtnradioSelected", setEnabled:false};
        tempRecord["btnkeepmyversion"] = {skin:"sknbtnradionormal", setEnabled:false};
      }else{
        tempRecord["keepotherversion"] = "false";
        tempRecord["keepmyversion"] = "true";
        tempRecord["btnkeepotherversion"] = {skin:"sknbtnradionormal", setEnabled:true};
        tempRecord["btnkeepmyversion"] = {skin:"sknbtnradioSelected", setEnabled:true};
      }
      
      
      
      
      tempRecord["recordObject"] = res[i];
      
      RESOLVE_CONFLICT_DATA.push(tempRecord);
      
      
      
      
    }
    
    kony.print("RESOLVE_CONFLICT_DATA------------>"+JSON.stringify(RESOLVE_CONFLICT_DATA));
   
    function modifyDateFormatWithTime(inputDate){
      kony.print("--------modifyDateFormat----");
        if(inputDate!=null && inputDate!=""){
          return getModifiedDate(moment(inputDate).format("YYYY-MM-DD HH:mm"), userInfo.timezone, "MMMM Do YYYY, hh:mm A"); 
        }
        return "";
      }
    
    function modifyDateFormatWithOutTime(inputDate){
      return (inputDate!=null && inputDate!="") ? moment(inputDate +" 23:59:59").format("MM/DD/YYYY") : "";
    }
    
  if(RESOLVE_CONFLICT_DATA!==null  &&  RESOLVE_CONFLICT_DATA !== undefined && RESOLVE_CONFLICT_DATA.length > 0){
    
    
    frmConflictResolve.lblpatientid.text = patientId;
    frmConflictResolve.lblwoundnumber.text = woundNo;
    frmConflictResolve.lblsubstepdescription.text = StepNo.replace("Step", "Step ") + " -- " + stepTitle;
    frmConflictResolve.lblpatientname.text = patientName;
    frmConflictResolve.lblfacilityname.text = userInfo.presentFacilityName;
    frmConflictResolve.segninestephealing.removeAll();
    frmConflictResolve.segninestephealing.setData(RESOLVE_CONFLICT_DATA);
    
    if(RESOLVE_CONFLICT_FACILITYLEVEL_DATA.length <=1 || RESOLVE_CONFLICT_CURRENT_INDEX == 0){
      frmConflictResolve.btnprevious.setEnabled(false);
      frmConflictResolve.btnprevious.skin = "skngraybgbold";
    }
    else if(RESOLVE_CONFLICT_FACILITYLEVEL_DATA.length > 1 && RESOLVE_CONFLICT_CURRENT_INDEX > 0){
      frmConflictResolve.btnprevious.setEnabled(true);
      frmConflictResolve.btnprevious.skin = "sknbtnbluebg100";
    }
    if(resolveConflictConstants.isFirstTime){
      resolveConflictConstants.isFirstTime = false;
      frmConflictResolve.show();
      frmConflictResolve.forceLayout();
    }

	
    }
    
  }
  
  function errorCallBack(res){
    kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundIdAndStepNo failure callback");
    kony.print("resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundIdAndStepNo failure callback response--------->"+JSON.stringify(res));
  }
  
  kony.print("------->inside resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo");
  kony.print("patient Id, WoundNo, StepNo--------------->"+ JSON.stringify(patientId)+ " "+ JSON.stringify(woundNo)+ JSON.stringify(StepNo));
//   var wcs = "where patientUuid = " + JSON.stringify(patientId) + " and woundNumber = "+ JSON.stringify(woundNo) 
//   		+ " and stepNumber = " + JSON.stringify(StepNo)
//   		+ " and conflictRaisedByUser_Client = "+JSON.stringify(userInfo.userName)
//   		+ " and conflictRaisedByUser = conflictRaisedByUser_Client"
//   		+ " order by wndSubDescId asc ";
  
  var wcs = "where patientUuid = " + JSON.stringify(patientId) + " and woundNumber = "+ JSON.stringify(woundNo) 
  		+ " and stepNumber = " + JSON.stringify(StepNo)
  		//+ " and conflictRaisedByUser_Client = "+JSON.stringify(userInfo.userName) //still can be commented naresh
  		+ " and conflictRaisedByUser IS NOT NULL and conflictRaisedByUser <> 'null' and conflictRaisedByUser <> ''"
  		+ " and conflictRaisedByUser_Client IS NOT NULL and conflictRaisedByUser_Client <> 'null' and conflictRaisedByUser_Client <> ''"
  		+ " order by wndSubDescId asc "
      
  kony.print(wcs);
  com.healogics.offline.healingSubSteps.find(wcs, successCallBack, errorCallBack); 
    
    //lbldescription lblhdrresult lblhdrorderdate lblhdrcompleteddate lblhdrcompletedby lblhdrupdatedat lblhdrresolution lblserverversion lblmyversion lblresult lblresult2 lblorderdate lblorderdate2 lblcompleteddate lblcompleteddate2  lblupdatedby 
   // lblupdatedby2 lblupdatedat lblupdatedat2 lblkeepotherversion lblkeepmyversion
};

var frmConflictResolve_rbKeepOtherVersion =function(){
  
  kony.print(JSON.stringify(frmConflictResolve.segninestephealing.selectedIndex));
  var selectedIndex = frmConflictResolve.segninestephealing.selectedIndex[1];
  kony.print("selectedIndex::"+selectedIndex);

  for(var j in RESOLVE_CONFLICT_DATA){
    if (j == selectedIndex && RESOLVE_CONFLICT_DATA[j].record_editable_flag == true ){
      if( RESOLVE_CONFLICT_DATA[j].btnkeepotherversion.skin =="sknbtnradionormal"){
        RESOLVE_CONFLICT_DATA[j].btnkeepotherversion.skin = "sknbtnradioSelected";
        RESOLVE_CONFLICT_DATA[j].btnkeepmyversion.skin = "sknbtnradionormal";
        RESOLVE_CONFLICT_DATA[j].keepotherversion = "true";
        RESOLVE_CONFLICT_DATA[j].keepmyversion = "false";
      }else{ 
        RESOLVE_CONFLICT_DATA[j].btnkeepotherversion.skin = "sknbtnradionormal";
        RESOLVE_CONFLICT_DATA[j].btnkeepmyversion.skin = "sknbtnradioSelected";
        RESOLVE_CONFLICT_DATA[j].keepotherversion = "false";
        RESOLVE_CONFLICT_DATA[j].keepmyversion = "true";
      }
    }
  }
  
  frmConflictResolve.segninestephealing.setData(RESOLVE_CONFLICT_DATA);
  frmConflictResolve.forceLayout();

};

var frmConflictResolve_btnResolveAndGoNext = function(){
  
  //Need to less the badge coount of remaining conflicts
//   --resolveConflictConstants.currentConflictCount;
//   resolveConflict_cntrl_offline.setBadgeValueForUI();
  
  kony.print("RESOLVE_CONFLICT_DATA------>"+JSON.stringify(RESOLVE_CONFLICT_DATA));
  kony.print("RESOLVE_CONFLICT_FACILITYLEVEL_DATA------>"+JSON.stringify(RESOLVE_CONFLICT_FACILITYLEVEL_DATA));
  kony.print("RESOLVE_CONFLICT_DATA------>"+RESOLVE_CONFLICT_CURRENT_INDEX);
  kony.print("RESOLVE_CONFLICT_DATA------>"+JSON.stringify(RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]));

  //var tempEditedObject = [];
  for(var i in RESOLVE_CONFLICT_DATA){
    
    var tempRecord = {};
    
    tempRecord["patientId"] = RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["patientId"]
    tempRecord["woundNumber"] = RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["woundNumber"]
    tempRecord["stepNumber"] = RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["stepNumber"]
    tempRecord["wndSubDescId"] = RESOLVE_CONFLICT_DATA[i]["wndSubDescId"];
    
    if(RESOLVE_CONFLICT_DATA[i].keepmyversion == "true"){
      
      tempRecord["result"] = RESOLVE_CONFLICT_DATA[i]["lblresult2"];
      tempRecord["orderDate"] = RESOLVE_CONFLICT_DATA[i]["lblorderdate2"];
      tempRecord["completedDate"] = RESOLVE_CONFLICT_DATA[i]["lblcompleteddate2"];
      tempRecord["lastUpdatedByUser"] = RESOLVE_CONFLICT_DATA[i]["lblupdatedby2"];
      tempRecord["lastUpdatedByUser_Client"] = "";
      tempRecord["conflictRaisedByUser_Client"] = "";
      tempRecord["conflictRaisedByUser"] = null;
      
      tempRecord["woundSubDescJSON"] = RESOLVE_CONFLICT_DATA[i]["woundSubDescJSON_Client"];
      tempRecord["woundSubDescJSON_Client"] = "";
      
      tempRecord["subStepResult_Client"] = "";
      tempRecord["subStepOrderDate_Client"] = "";
      tempRecord["subStepCompletedDate_Client"] = "";
      
      //make service call to update or sync call?
    }else{
      
      tempRecord["result"] = RESOLVE_CONFLICT_DATA[i]["lblresult"];
      tempRecord["orderDate"] = RESOLVE_CONFLICT_DATA[i]["lblorderdate"];
      tempRecord["completedDate"] = RESOLVE_CONFLICT_DATA[i]["lblcompleteddate"];
      tempRecord["lastUpdatedByUser"] = RESOLVE_CONFLICT_DATA[i]["lblupdatedby"];
      tempRecord["lastUpdatedByUser_Client"] = "";
      tempRecord["conflictRaisedByUser_Client"] = "";
      tempRecord["conflictRaisedByUser"] = null;
      
      tempRecord["woundSubDescJSON"] = RESOLVE_CONFLICT_DATA[i]["woundSubDescJSON"];
      tempRecord["woundSubDescJSON_Client"] = "";
      
      tempRecord["subStepResult_Client"] = "";
      tempRecord["subStepOrderDate_Client"] = "";
      tempRecord["subStepCompletedDate_Client"] = "";
      
      //update local db (user data columns) with server data, no need to make service call?
    }
    
    kony.print("tempRecord modified ------>"+JSON.stringify(tempRecord));
    
   // resolveConflict_cntrl_offline.formDataToInvokeIntegrationService(tempRecord);
    frmConflictResolve_saveUserSelectedRecords(tempRecord);
  }
  //make service call with all JSON objects at once
 // frmResolveConflict_saveStepDataWithIntegrationService("save");
  
  //another function for sync now initiation
  
  
  kony.print("frmConflictResolve_btnResolveAndGoNext --- processing end ---->")
  resolveConflict_cntrl_offline_getNextConflictData();
  
  //Need to less the badge coount of remaining conflicts
  resolveConflictConstants.currentConflictCount -= RESOLVE_CONFLICT_DATA.length;
  resolveConflict_cntrl_offline.setBadgeValueForUI();

  
};

var frmConflictResolve_saveUserSelectedRecords = function(objModified){
  
  //healingSubSteps_cntrl_offline.updateSubStepDetails = function(patientId, WoundId, StepNo, SubStepNo, objModified){
  kony.print("inside frmConflictResolve_saveUserSelectedRecords with temp record--->"+ JSON.stringify(objModified));    

  function successCallBack(res){
    kony.print("updateSubStepDetails success callback--------->");
    kony.print("updateSubStepDetails success callback response--------->"+ JSON.stringify(res));
  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("updateSubStepDetails failure callback");
    kony.print("updateSubStepDetails failure callback response--------->"+JSON.stringify(res));
  }

  kony.print("objModified------>"+objModified);
  
  var wcs = "where patientUuid = " + JSON.stringify(objModified.patientId) + 
            " and woundNumber = " + JSON.stringify(objModified.woundNumber) +
            " and stepNumber = " + JSON.stringify(objModified.stepNumber) +
            " and wndSubDescId = " + JSON.stringify(objModified.wndSubDescId);

  kony.print("where clause----->"+wcs);

  // Modified for Kony Conversion Issue.
  var myObj ={
    //subStepDescription : objModified.description,
    subStepResult : objModified.result,
    subStepOrderDate : objModified.orderDate,
    subStepCompletedDate  : objModified.completedDate,
    woundSubDescJSON : objModified.woundSubDescJSON,  //we can assign empty "" string?

    subStepResult_Client : objModified.subStepResult_Client,
    subStepOrderDate_Client : objModified.subStepOrderDate_Client,
    subStepCompletedDate_Client  : objModified.subStepCompletedDate_Client,
    woundSubDescJSON_Client: objModified.woundSubDescJSON_Client, 

    lastUpdatedByUser : objModified.lastUpdatedByUser,
    lastUpdatedByUser_Client : objModified.lastUpdatedByUser_Client,
    conflictRaisedByUser_Client : (objModified.conflictRaisedByUser_Client!=null && objModified.conflictRaisedByUser_Client!="") ? objModified.conflictRaisedByUser_Client : "",
    conflictRaisedByUser : (objModified.conflictRaisedByUser!=null && objModified.conflictRaisedByUser!="") ? objModified.conflictRaisedByUser : "",
  };

  kony.print("com.healogics.offline.healingSubSteps.update    -->  myObj---->"+JSON.stringify(myObj));

  com.healogics.offline.healingSubSteps.update(wcs, myObj, successCallBack,errorCallBack,true);

  
};

var frmConflictResolve_btnResolveAndGoNext_bk =function(){
  
 
  //Need to less the badge coount of remaining conflicts
  
  kony.print("RESOLVE_CONFLICT_DATA"+JSON.stringify(RESOLVE_CONFLICT_DATA));
  var tempEditedObject = [];
  for(var i in RESOLVE_CONFLICT_DATA){
    if(RESOLVE_CONFLICT_DATA[i].keepmyversion == "true"){
      var tempRecord = {};
      
      tempRecord["description"] = RESOLVE_CONFLICT_DATA[i]["lbldescription"];
      tempRecord["result"] = RESOLVE_CONFLICT_DATA[i]["lblresult"];
      tempRecord["order_date"] = RESOLVE_CONFLICT_DATA[i]["lblorderdate"].includes("-") ? com.healogics.utility.formatDate(RESOLVE_CONFLICT_DATA[i]["lblorderdate"]): RESOLVE_CONFLICT_DATA[i]["lblorderdate"];
      tempRecord["wnd_sub_desc_id"] = RESOLVE_CONFLICT_DATA[i]["wndSubDescId"];
      tempRecord["completed_date"] = RESOLVE_CONFLICT_DATA[i]["lblcompleteddate"].includes("-") ? com.healogics.utility.formatDate(RESOLVE_CONFLICT_DATA[i]["lblcompleteddate"]): RESOLVE_CONFLICT_DATA[i]["lblcompleteddate"];
      
      tempEditedObject.push(tempRecord);
      
    }
  }
  	patientSummaryObjects.healing9stepEditedData = [];
   if(patientSummaryObjects.healing9stepEditedData.length===0){
    patientSummaryObjects.healing9stepEditedData = tempEditedObject;
     kony.print("------- tempObjj -------"+JSON.stringify(patientSummaryObjects.healing9stepEditedData)); 
  }else{
    var strStepContainsCheckFlag = false;
    for(var i=0;i<patientSummaryObjects.healing9stepEditedData.length;i++){
      var tempObj = patientSummaryObjects.healing9stepEditedData[i];
      kony.print("------- tempObj -------"+JSON.stringify(tempObj)); 
      if(tempObj.wnd_sub_desc_id===tempEditedObject.wnd_sub_desc_id){
        strStepContainsCheckFlag = true;
        break;
      }else{
        strStepContainsCheckFlag = false;
      }
    }
    if(strStepContainsCheckFlag===false){
      patientSummaryObjects.healing9stepEditedData.push(tempEditedObject);
    }else{
      patientSummaryObjects.healing9stepEditedData[i]=tempEditedObject;
    }
  }
  kony.print("------- patientSummaryObjects.healing9stepEditedData after-------"+JSON.stringify(patientSummaryObjects.healing9stepEditedData)); 
  for(var k in patientSummaryObjects.healing9stepEditedData){
    healing9stepEditedData = patientSummaryObjects.healing9stepEditedData[k] ;
    kony.print("------- healing9stepEditedData -------"+JSON.stringify(healing9stepEditedData));
    frmResolveConflict_btnSaveClick("save");
      
    }
    
    
   //  resolveConflict_cntrl_offline_getNextConflictData();
}
  	//kony.print("editedRowData"+JSON.stringify(editedRowData));
  	//healing9StepDataModule.prepareEditedFieldsObject(editedRowData);
  	
  //Method for save button click
function frmResolveConflict_saveStepDataWithIntegrationService(param){
  kony.print("param--->"+param);
  var flag=false;
  kony.print("-------inside  frmResolveConflict_saveStepDataWithIntegrationService -------");
  kony.print("-------healing9stepEditedData -------"+JSON.stringify(healing9stepEditedData));
  if(healing9stepEditedData.length===0){
    return;
  }
  if(param==="save"){
    kony.print("----in flag true----");
    flag = true;
  }else{
    kony.print("----in flag false----");
    flag = false;
  }
  kony.print("flag--->"+flag);
  
  var inputData = {
    "patientUuid" : RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["patientId"],
	"encounterId" : RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["encounterId"],
    "docEntityid" : RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["docEntityid"],
    "woundNumber" : RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["woundNumber"],
    "wndSubDescId" : RESOLVE_CONFLICT_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["recordObject"]["_wndSubDescId"],   
	"stepId" : RESOLVE_CONFLICT_FACILITYLEVEL_DATA[RESOLVE_CONFLICT_CURRENT_INDEX]["stepNumber"],
    "subStepDesc" : healing9stepEditedData,
    "accessToken" : userInfo.accessToken,
//     "updatedUser" : userInfo.userName
    "updatedUser" : userInfo.fullName ///WTC-467 SPARK BATCH ISSUE

  };
    

  kony.print("-------frmResolveConflict_saveStepDataWithIntegrationService inputData -------"+JSON.stringify(inputData));
  
  if(isIpad && SYNC_CONSTANTS.isAppOffline){
    kony.print("Go Online");
  }
  else{
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_SAVEHEALSTEPS_OFFLINE,
      {},
      inputData,
      resolveConflict_cntrl_offline.rcsaveHealStepsSuccessCallback,
      resolveConflict_cntrl_offline.rcsaveHealStepsFailureCallback,
      flag
    );    
  }
}


resolveConflict_cntrl_offline.rcsaveHealStepsSuccessCallback = function(response){
  kony.print("resolveConflict_cntrl_offline.rcsaveHealStepsSuccessCallback start ------>")
  kony.print("resolveConflict_cntrl_offline.rcsaveHealStepsSuccessCallback response ------>"+JSON.stringify(response));
	
  resolveConflict_cntrl_offline.getNextConflictData();
}

resolveConflict_cntrl_offline.rcsaveHealStepsFailureCallback = function(response){
  kony.print("resolveConflict_cntrl_offline.rcsaveHealStepsFailureCallback start ------>")
  kony.print("resolveConflict_cntrl_offline.rcsaveHealStepsFailureCallback response ------>"+JSON.stringify(response));
  //alert("frmResolveConflict_saveStepDataWithIntegrationService failed");	
  //resolveConflict_cntrl_offline.getNextConflictData();
}

var frmResolveConflict_postShow=function(){
  kony.print("inside frmResolveConflict_postShow");
  hideFormMenu();
  load_headerdata();
  registerTimeout();
  resolveConflict_cntrl_offline.setBadgeValueForUI();
  changeConnectionStatus(isNetworkAvailable());
};


var frmPatientSummary_btnResolveConflict= function(){
  var patientId = patientSummaryObjects.patientDemoGraphics.patientId;
  var woundNo = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno;
  var stepId =  patientSummaryObjects.selectedStep;
	
  resolveConflict_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo(patientId,woundNo,stepId);
    
}

resolveConflict_cntrl_offline.setBadgeValueForUI = function(){
  var x = kony.application.getCurrentForm();
  try{
    if(resolveConflictConstants.currentConflictCount > 0 && x.lblConflictCount!=null && x.fcConflictButton!=null){
      //     x.fcResolveConflict.setBadge(JSON.stringify(resolveConflictConstants.currentConflictCount));
      // 	x.fcResolveConflict.setVisibility(true);
      x.lblConflictCount.text = JSON.stringify(resolveConflictConstants.currentConflictCount);
      x.fcConflictButton.setVisibility(true);
    }else if(x.fcConflictButton!=null){
      //     x.fcResolveConflict.setVisibility(false);
      x.fcConflictButton.setVisibility(false);
    }
  }catch(error){
    kony.print("resolveConflict_cntrl_offline.setBadgeValueForUI error")
  }
  
};

resolveConflict_cntrl_offline.formDataToInvokeIntegrationService = function(tempRecord){
  
  kony.print("-------inside resolveConflict_cntrl_offline.formDataToInvokeIntegrationService -------with tempRecord-------"+JSON.stringify(tempRecord)); 
  kony.print("------- healing9stepEditedData before-------"+JSON.stringify(healing9stepEditedData)); 

  var tempEditedObject = {};
  var woundSubDescJSON = JSON.parse(tempRecord.woundSubDescJSON);
  kony.print("woundSubDescJSON---->"+JSON.stringify(woundSubDescJSON));
  
  tempEditedObject.description = woundSubDescJSON.description;
//   kony.print("woundSubDescJSON--tempEditedObject.description-->"+tempEditedObject.description);
  
  tempEditedObject.wnd_sub_desc_id = tempRecord.wndSubDescId;
//   kony.print("woundSubDescJSON--tempEditedObject.wnd_sub_desc_id-->"+tempEditedObject.wnd_sub_desc_id);
  
//   kony.print("woundSubDescJSON--tempEditedObject.result-->"+woundSubDescJSON.result);
//   kony.print("woundSubDescJSON--tempEditedObject.order_date-->"+woundSubDescJSON.orderDate);
//   kony.print("woundSubDescJSON--tempEditedObject.completed_date-->"+woundSubDescJSON.completedDate);
  
  tempEditedObject.result= woundSubDescJSON.result;
  if(woundSubDescJSON.orderDate !== ""){
    tempEditedObject.order_date = com.healogics.utility.formatDate(woundSubDescJSON.orderDate);
  }
  if(woundSubDescJSON.completedDate !== ""){
    tempEditedObject.completed_date = com.healogics.utility.formatDate(woundSubDescJSON.completedDate);
  }
//   tempEditedObject.order_date = (woundSubDescJSON.orderDate == "") ? woundSubDescJSON.orderDate : com.healogics.utility.formatDate(woundSubDescJSON.orderDate);
//   tempEditedObject.completed_date = (woundSubDescJSON.completedDate == "") ? woundSubDescJSON.completedDate : com.healogics.utility.formatDate(woundSubDescJSON.completedDate);
  
//   kony.print("woundSubDescJSON--tempEditedObject.description-->"+tempEditedObject.description);
 

  kony.print("------- tempEditedObject -------"+JSON.stringify(tempEditedObject));
  healing9stepEditedData.push(tempEditedObject);
  kony.print("------- healing9stepEditedData after-------"+JSON.stringify(healing9stepEditedData));
};


