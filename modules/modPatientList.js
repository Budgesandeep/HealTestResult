/*
*Name: modPatientList.js
*Purpose: For User frmPatientList related services
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 01/19/2017        492306/545496                 Validations/Integration Logic
*
*
*/


var  ARRAY_SEARCH_NOT_FOUND_INDEX = -1;
var  PATIENT_LIST_SERVICE_DATA = [];
var patientId_iPhone;
var patientListModule = {};
var allPatient;
var msr="";
var msrcount=0;

//Woun-2471
function clearFilterClick(){
 // kony.print("before clearing filter"+JSON.stringify(filterData));
  filter_name="all";
  //logcounter=0;
  msr=0;
  msrcount=0;
  patientListConstants.clear();
  sortAndFilterConstants.selectedFilter="";
  sortAndFilterConstants.todayPatient=false;
  kony.store.setItem("patientListFilterObject",{});
  createFilter();
  patientListModule_getAllPatientList1(false);
  
 
 // kony.print("filter object while clearing filter"+JSON.stringify( sortAndFilterConstants.patientListFilterObject));
  // setTimeout(function() { createFilter(); },1000); 
  //patientListModule_getAllPatientList1(true);
}
function patientListModule_getAllPatientList1(PATIENTFLAG){
  ///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
    var inputData = {
      "userIdValue" : userInfo.userId, //userInfo.encrypteduserId, // 
      "start" : patientListConstants.start,
      "limit" : patientListConstants.limit,
      "filterField" : patientListConstants.filterField,
      "filterVal" : patientListConstants.filterValue,
      "sortField" : patientListConstants.sortColumn,
      "sortOrder" : patientListConstants.sortOrder,
      "timestamp" : userInfo.loginTime,
      "referKey" : patientListConstants.referKey,
      "myPatients" : patientListConstants.myPatients,
      "weekRange" : patientListConstants.weekRange,
      "accessToken" : userInfo.accessToken,
      "facilityId" : userInfo.presentFacilityId
      //"location" : ""
    };

    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_PATIENTLIST,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "userId" : userInfo.userId,
        "facilityId" : userInfo.presentFacilityId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId,//userInfo.encrypteduserId
        //"facilityId" : userInfo.presentFacilityId
      },
      inputData,
      patientListModule.patientListSuccessCallback,
      patientListModule.patientListFailureCallback
    );
  }

  
}


function CalltodayspatentList(eventobject){
  if(eventobject.id=="btnTodaypatient"){
    patientListModule_getTodaypatient(true,"currentAppointMent");
  }
  
}
function patientListModule_getTodaypatient(PATIENTFLAG,currentfilterField){
  
  	sortAndFilterConstants.todayPatient = true;
   	  
    frmPatientList.btncheckbox1.skin = "sknbtnuncheck";
    frmPatientList.btncheckbox2.skin = "sknbtnuncheck";
    frmPatientList.btncheckbox3.skin = "sknbtnuncheck";
    frmPatientList.btncheckbox4.skin = "sknbtnuncheck";
    frmPatientList.btncheckbox5.skin = "sknbtnuncheck";
  	
	var filterField;
  	var currentAppointMent=currentfilterField;
  
    if(currentAppointMent=="currentAppointMent"){
   		filterField=currentAppointMent;
    }else{
       	filterField=patientListConstants.filterField;
    }
      //createFilter();
    var inputData = {
      "userIdValue" : userInfo.userId, //userInfo.encrypteduserId, // 
      "start" : patientListConstants.start,
      "limit" : patientListConstants.limit,
      "filterField" :filterField ,
      "filterVal" : patientListConstants.filterValue,
      "sortField" : patientListConstants.sortColumn,
      "sortOrder" : patientListConstants.sortOrder,
      "timestamp" : userInfo.loginTime,
      "referKey" : patientListConstants.referKey,
      "myPatients" : patientListConstants.myPatients,
      "weekRange" : patientListConstants.weekRange,
      "accessToken" : userInfo.accessToken,
      "facilityId" : userInfo.presentFacilityId,
      "location":""//userInfo.presentLocationId
    };

    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_PATIENTLIST,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "userId" : userInfo.userId,
        "facilityId" : userInfo.presentFacilityId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId,//userInfo.encrypteduserId
        //"facilityId" : userInfo.presentFacilityId
      },
      inputData,
      patientListModule.patientListSuccessCallback,
      patientListModule.patientListFailureCallback
    );
 


};





//Set the values of frmPatientList MSR DATA
function frmPatientList_loadMsrListData() {
  kony.print("----in frmPatientList_loadMsrListData start----");
  frmPatientList.lblhdrweeksintreatement.text = "Weeks";
  for (i = 0; i < patientListConstants.msrList.length; i++) {
    kony.print("msrcount--->"+patientListConstants.msrList[i].msrCount);
    if(patientListConstants.msrList[i].weeks==="TotalCount"){
      frmPatientList.lblPatients.text="MSR Patients ("+patientListConstants.msrList[i].msrCount+")";
    }  
    if(frmPatientList["lblhdrweeks" + (i+1)]!=null && frmPatientList["lblhdrweeks" + (i+1)]!=undefined){

      frmPatientList["lblhdrweeks" + (i+1)].text = patientListConstants.msrList[i].weeks;

      if (patientListConstants.msrList[i].msrCount > 0 &&patientListConstants.msrList[i].msrCount!==null) {
        frmPatientList["lblmsrcount" + (i+1)].text = patientListConstants.msrList[i].msrCount;
      } else {
        frmPatientList["lblmsrcount" + (i+1)].text = patientListConstants.msrList[i].msrCount;
        frmPatientList["lblmsrcount" + (i+1)].skin = "sknlblsegmentheader";
        frmPatientList["lblmsrcount" + (i+1)].focusSkin = "sknlblsegmentheader";
        frmPatientList["lblmsrcount" + (i+1)].hoverSkin = "sknlblsegmentheader";
        frmPatientList.forceLayout();

      }
    }  
  } 
}

function frmPatientList_onClickPatientList(weeks)
{
  clear_PatientList();
  for(i=0;i<patientListConstants.msrList.length;i++){
    if(weeks===patientListConstants.msrList[i].weekRange){
      kony.print("msrCount is---->"+patientListConstants.msrList[i].msrCount);
      if(patientListConstants.msrList[i].msrCount>0){
        var referKey = patientListConstants.msrList[i].referKey;
        kony.print("refer key is---->"+referKey);
        patientListConstants.clearSortAndFilter();
        patientListConstants.referKey = referKey;

        patientListConstants.sortColumn = "name";
        patientListConstants.sortOrder = "a";
        patientListConstants.weekRange = patientListConstants.msrList[i].weeks.replace("+", "");
        patientListConstants.myPatients = "N";
        patientListModule.getFilteredPatientList();
      }
    }
  }
}


//Hide the drop Down and make search text to empty
var clear_PatientList=function(){
  var currentForm=kony.application.getCurrentForm();
  currentForm.fcsearchdropdown.setVisibility(false);
  currentForm.tbpatientsearch.text="";
  currentForm.imgSearchIcon.src="search.png";

};

//Hide the Top Menu
var frmPatientList_TouchEnd=function(){
  hide_fctopmenu();
  popupInfo.dismiss();
};

//Form PostShow for load the header data and reset the values 
var frmPatientList_PostShow=function(){ 
  registerTimeout();
  hideFormMenu();
  load_headerdata();
  clear_PatientList();

  //frmPatientList_Clear_All_filter(); //This has to be commented for save user configuration changes
  
  if(isIpad || isIphone){
	changeConnectionStatus(isNetworkAvailable());
    if(isIpad && !SYNC_CONSTANTS.isAppOffline){
      resolveConflict_cntrl_offline.setBadgeValueForUI();
    }
  }
};


//This function called On click of MSR checkbox's
function frmPatientList_check(eventobject){
///Sandeep offline changes
//   kony.print("eventobject---->"+eventobject);
  msrcount=1;
  var btnId = eventobject.id;
  if(btnId == "btncheckbox1" ){
    msr="MSR1#MSR2#MSR3#MSR4";
     patientListConstants.weekRange = (eventobject.skin=="sknbtnuncheck") ? "ALL" : "" ;  
    /*if(logcounter===0)
      {
       
      }
    else
      {
         patientListConstants.weekRange = (eventobject.skin=="sknbtnuncheck") ? "" : "ALL" ; 
      }
  */
    frmPatientList.btncheckbox1.skin = (eventobject.skin=="sknbtnuncheck") ? "sknbtncheck" : "sknbtnuncheck" ;
    frmPatientList.btncheckbox2.skin = "sknbtnuncheck";
    frmPatientList.btncheckbox3.skin = "sknbtnuncheck";
    frmPatientList.btncheckbox4.skin = "sknbtnuncheck";
    frmPatientList.btncheckbox5.skin = "sknbtnuncheck";
    if(patientListConstants.weekRange==="" || patientListConstants.weekRange===null || patientListConstants.weekRange==="null"){
      modSortAndFilter.getFilterListForIheal();
    } else {
      patientListModule.callPatientListServiceForOnlineAndOffline(); 
    }
  }else{

    kony.print("selected button id:::"+btnId);

    frmPatientList.btncheckbox1.skin = "sknbtnuncheck";
    if( frmPatientList[btnId]["skin"] == "sknbtncheck" ){
      kony.print("inside else condition:::set selected button skin unckeck");
      frmPatientList[btnId]["skin"] = "sknbtnuncheck";
    }else{
      kony.print("inside else condition:::set selected button skin check");
      frmPatientList[btnId]["skin"] = "sknbtncheck";
    }

    var selectedWeeks = "";
    var weekKey = ['4','8','12','14'];
    var anotherKeySelected = false;
    for(var i=2; i<=5; i++){
      kony.print("inside else condition:::"+i+"&&"+frmPatientList["btncheckbox"+i]["skin"]);
      if(frmPatientList["btncheckbox"+i]["skin"] == "sknbtncheck" ){
        if(selectedWeeks != ""){
          selectedWeeks = selectedWeeks+","+weekKey[i-2];          
          kony.print("inside else condition::1:"+selectedWeeks);
        }else{
          selectedWeeks = weekKey[i-2];
          kony.print("inside else condition::2:"+selectedWeeks);
        }
        kony.print("inside else condition:::"+i+"&&selectedWeeks&&"+selectedWeeks);
        anotherKeySelected = true;
      }
    }

    if(anotherKeySelected == true){ 
      kony.print("inside else condition::4:other");
      patientListConstants.weekRange = selectedWeeks;
    }else{
      kony.print("inside else condition::5:all");
      patientListConstants.weekRange = "";
    }
    if( patientListConstants.weekRange===4)
      {
       msr="MSR1" ;
      }
    if( patientListConstants.weekRange===8)
      {
       msr="MSR2" ;
      }
    if( patientListConstants.weekRange===12)
      {
       msr="MSR3" ;
      }
    if( patientListConstants.weekRange==="")
      {
       msr="MSR1#MSR2#MSR3#MSR4" ;
      }
    if(patientListConstants.weekRange==="" || patientListConstants.weekRange===null || patientListConstants.weekRange==="null"){
      modSortAndFilter.getFilterListForIheal();
    } else {
      patientListModule.callPatientListServiceForOnlineAndOffline(); 
    }

  }
  frmPatientList.forceLayout();
}

patientListModule.callPatientListServiceForOnlineAndOffline   = function(){
  ///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
    patientListModule.getAllPatientList();
  }
};



function check(eventobject){
  var referkeyarray=[];
  finalarray=[];
  kony.print("eventobject---->"+eventobject);
  if(eventobject.skin=="sknbtncheck"){
    eventobject.skin="sknbtnuncheck";
  }
  else if(eventobject.skin=="sknbtnuncheck"){
    eventobject.skin="sknbtncheck";
  }
  for(i=0;i<patientListConstants.msrList.length;i++){
    if(frmPatientList["btncheck"+(i+1)].skin==="sknbtncheck"){
      referkeyarray.push({"id":"btncheck"+(i+1),
                          "referkey":patientListConstants.msrList[i].referKey});

    }
  }
  for(i=0;i<referkeyarray.length;i++){
    patientListConstants.referKey=referkeyarray[i].referkey;
    patientListModule.getFilteredPatientList();
  }
  kony.print("finalarray----->"+finalarray);
  paginate(finalarray,"frmPatientList");
  kony.print("checked objects----->"+JSON.stringify(referkeyarray));
}


//This function called on radio button selection of AllPatient/My Patients
function frmPatientList_patientTypeSelected(eventobject){
  searchPatient_closeSearchList();
  patientListConstants.selectedWeek = clone(patientListConstants.weekRange);
 
  if(eventobject.id == "btnallpatients"){//All Patient Clicked 
    if(eventobject.skin != "sknbtnradioSelected"){
      frmPatientList.forceLayout();
      patientListConstants.weekRange = "";
      patientListConstants.myPatients = "N";
      patientListModule.getAllPatientList();
      //modSortAndFilter.getFilterListForIheal();
    }
  }
  else{//My Patient Clicked 
    if(eventobject.skin != "sknbtnradioSelected"){
      frmPatientList.forceLayout();
      patientListConstants.weekRange = "";
      patientListConstants.myPatients = "Y";
      patientListModule.getAllPatientList();
      //modSortAndFilter.getFilterListForIheal();
    }
  }
}
var patientListcallback=function(){
  patientListConstants.clearSortAndFilter();
  patientListConstants.sortOrder = "a";
  patientListConstants.sortColumn = "name";
  patientListModule.getAllPatientList();
  //modSortAndFilter.getFilterListForIheal();
};

patientListModule.getAllPatientList = function(){  
///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{

    var inputData = {
      "userIdValue" : userInfo.userId, //userInfo.encrypteduserId, // 
      "start" : patientListConstants.start,
      "limit" : patientListConstants.limit,
      "filterField" : patientListConstants.filterField,
      "filterVal" : patientListConstants.filterValue,
      "sortField" : patientListConstants.sortColumn,
      "sortOrder" : patientListConstants.sortOrder,
      "timestamp" : userInfo.loginTime,
      "referKey" : patientListConstants.referKey,
      "myPatients" : patientListConstants.myPatients,
      "weekRange" : patientListConstants.weekRange,
      "accessToken" : userInfo.accessToken,
      "facilityId" : userInfo.presentFacilityId
      //"location" : ""
    };

    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_PATIENTLIST,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "userId" : userInfo.userId,
        "facilityId" : userInfo.presentFacilityId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId //userInfo.encrypteduserId,
      },
      inputData,
      patientListModule.patientListSuccessCallback,
      patientListModule.patientListFailureCallback
    );
  }
};


patientListModule.getFilteredPatientList = function(){
  var inputData = {
    "userIdValue" : userInfo.userId, //userInfo.encrypteduserId,
    "start" : patientListConstants.start,
    "limit" : patientListConstants.limit,
    "filterField" : patientListConstants.filterField,
    "filterVal" : patientListConstants.filterValue,
    "sortField" : patientListConstants.sortColumn,
    "sortOrder" : patientListConstants.sortOrder,
    "timestamp" : userInfo.loginTime,
    "referKey" : patientListConstants.referKey,    
    "myPatients" : patientListConstants.myPatients,
    "weekRange" : patientListConstants.weekRange,
    "accessToken" : userInfo.accessToken,
    "facilityId" : userInfo.presentFacilityId
    //"location" : ""
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_PATIENTLIST,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "userId" : userInfo.userId,
      "facilityId" : userInfo.presentFacilityId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
      //"facilityId" : userInfo.presentFacilityId
    },
    inputData,
    patientListModule.patientListSuccessCallback,
    patientListModule.patientListFailureCallback
  );
};

//PatientList ListSuccessCallback
patientListModule.patientListSuccessCallback = function(response){
  if(isIphone){
    if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
      userInfo.loginTime = (userInfo.loginTime!=null && userInfo.loginTime!="")? userInfo.loginTime : response.timestamp;
      var patientList = response.patientslist;
      var patientListSegArr = [];
      PATIENT_LIST_SERVICE_DATA = [];
      var patientListDataArr = [];
      kony.print("patientList values--"+JSON.stringify(patientList));
      kony.print("patientListConstants values--"+JSON.stringify(patientListConstants));
      if(patientList!==null && patientList!==undefined && patientList.length > 0){
        for(var i in patientList){
          var msrReviewLabel = "";
          if(patientList[i].msrReviewFlag  == true || patientList[i].msrReviewFlag  == GENERAL_CONSTANTS.TEXT_TRUE){
            msrReviewLabel  = "(MSR Reviewed)";
          }else if(patientList[i].msrReviewFlag.toLowerCase() == "pending"){
            msrReviewLabel  = "(MSR In Progress)";
          }else{
            kony.print("patientListModule.patientListSuccessCallback i:"+i+"::::msrFlag:"+patientList[i].msrFlag+":");
            if(patientList[i].msrFlag == true || patientList[i].msrFlag  == GENERAL_CONSTANTS.TEXT_TRUE){
              msrReviewLabel = "(MSR)";
            }
          }
          var tempRecord={
            "lblpatientname":patientList[i].name,
            "lblpatientid":patientList[i].patientId,
            "lblpatientmsrstatus":msrReviewLabel
          };
          PATIENT_LIST_SERVICE_DATA.push(tempRecord);
        }
        frmPatientList.segpatientlist.setData(PATIENT_LIST_SERVICE_DATA);
        kony.print("PATIENT_LIST_SERVICE_DATA---"+JSON.stringify(PATIENT_LIST_SERVICE_DATA));
        frmPatientList.show();
        frmPatientList.forceLayout();
      }
    }
    else{
      showError = true;
      var error_label = response.responsedesc;
      if(response!==null && response.opstatus != 0 && response.errmsg != null){
        error_label = response.errmsg;
      }
      if(com.healogics.utility.isEmpty(error_label)){
        error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      }
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }

  }
  else{
    kony.print("Patient List Success Callback Response:::"+JSON.stringify(response));

    if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
	  
      frmPatientList.segpatientlist.setVisibility(true);
      frmPatientList.lblNoPatients.setVisibility(false);
      userInfo.loginTime = (userInfo.loginTime!=null && userInfo.loginTime!="")? userInfo.loginTime : response.timestamp;

      if(response.msrList!==undefined  && response.msrList.length>0){
        patientListConstants.msrList = response.msrList;
        frmPatientList_loadMsrListData();
      }
      else{
        kony.print("-------MsrList empty-------");
      }

      var patientList = response.patientslist;
      var patientListSegArr = [];
      PATIENT_LIST_SERVICE_DATA = [];
      var patientListDataArr = [];
      var msrArray=[];

      kony.print("patientList values--"+JSON.stringify(patientList));

      kony.print("patientListConstants values--"+JSON.stringify(patientListConstants));

      if(patientList!==null && patientList!==undefined && patientList.length > 0){
        for(var i in patientList){
          var msrReviewLabel = "";
          if(patientList[i].msrReviewFlag  == true || patientList[i].msrReviewFlag  == GENERAL_CONSTANTS.TEXT_TRUE){
            msrReviewLabel  = "(MSR Reviewed)";
          }else if(patientList[i].msrReviewFlag.toLowerCase() == "pending"){
            msrReviewLabel  = "(MSR In Progress)";
          }else{
            kony.print("patientListModule.patientListSuccessCallback i:"+i+"::::msrFlag:"+patientList[i].msrFlag+":");
            if(patientList[i].msrFlag == true || patientList[i].msrFlag  == GENERAL_CONSTANTS.TEXT_TRUE){
              msrReviewLabel = "(MSR)";
            }
          }
          var tempRecord = {
            "lblline": "",       
            "lblline2": "",
            "lblline3": "",
            "lblline4": "",
            "lblline5": "",
            "lblline6": "",
            "lblline7": "",
            "lblline8": "",
            "lblline9": ""
          };

          tempRecord["lblappttype"] = patientList[i]["appointmentType"];
          tempRecord["lblcasemanager"] = patientList[i]["caseManager"];
          tempRecord["lblhealper"] = patientList[i]["advanceProcedures"];
          tempRecord["lblPrecautions"]= patientList[i]["txBasedPrecaution"];// "None";
          //Convert EST Time to local Time Zone
          // var convertedDate = com.healogics.utility.getPatientListDateTimeFormatFromEST(patientList[i]["nextAppointment"], "PATIENT_LIST" );
          var convertedDate;
          if(patientList[i]["nextAppointment"] !== ""){
            convertedDate = com.healogics.utility.convertEST_To_PST_CST_TimeZone(patientList[i]["nextAppointment"],userInfo.timezone,DATE_FORMAT.NEXT_APPOINTMENT);
            if(convertedDate == "Invalid date"){
              convertedDate = patientList[i]["nextAppointment"];
            }
          }else{
            convertedDate = "";  
          }
          tempRecord["lblnextappt"] = convertedDate;
          if(msrReviewLabel=== "" || msrReviewLabel === null){
            tempRecord["lblpatientname"] = {"text" :patientList[i]["name"], "top":"15dp"};
          }else{ 
            tempRecord["lblpatientname"] = {"text" :patientList[i]["name"], "top":"8dp"};
          }
          tempRecord["lblphysician"] = patientList[i]["physician"];
          tempRecord["lbltransferstatus"] = patientList[i]["transferStatus"];
          tempRecord["lblweeks"] = patientList[i]["weeks"];
          tempRecord["lblwounds"] = patientList[i]["wounds"];
          tempRecord["lblpatientid"] = patientList[i]["patientId"];
          tempRecord["lblpatientmsrstatus"] = msrReviewLabel;
          PATIENT_LIST_SERVICE_DATA.push(tempRecord);

        }

      }
      /* msrArray=PATIENT_LIST_SERVICE_DATA;
        if(msrcount===1)
          {
            kony.print("msrArray"+msrArray);
            //sortAndFilterConstants.patientListFilterObject={};
            sortAndFilterConstants.patientListFilterObject.lblphysician="";
            sortAndFilterConstants.patientListFilterObject.lblnextappt="";
            sortAndFilterConstants.patientListFilterObject.lblappttype="";
            sortAndFilterConstants.patientListFilterObject.lblwounds="";
            sortAndFilterConstants.patientListFilterObject.lblcasemanager="";
            sortAndFilterConstants.patientListFilterObject.lblweeks="";
            sortAndFilterConstants.patientListFilterObject.lbltransferstatus="";
            sortAndFilterConstants.patientListFilterObject.lblhealper="";
            sortAndFilterConstants.patientListFilterObject.lblPrecautions="";
            for(var k=0;k< msrArray.length;k++)
              {
                var physician=msrArray[k].lblphysician;
                var nextappt=msrArray[k].lblnextappt;
                var appttype=msrArray[k].lblappttype;
                var wounds=msrArray[k].lblwounds;
                var weeks=msrArray[k].lblweeks;
                var casemanager=msrArray[k].lblcasemanager;
                var transferstatus=msrArray[k].lbltransferstatus;
                var helper=msrArray[k].lblhealper;
                var precaution=msrArray[k].lblPrecautions;
                sortAndFilterConstants.patientListFilterObject.lblPrecautions=precaution+"#@#"+sortAndFilterConstants.patientListFilterObject.lblPrecautions;
                sortAndFilterConstants.patientListFilterObject.lblhealper=helper+"#@#"+sortAndFilterConstants.patientListFilterObject.lblhealper;
                sortAndFilterConstants.patientListFilterObject.lbltransferstatus=transferstatus+"#@#"+sortAndFilterConstants.patientListFilterObject.lbltransferstatus;
                sortAndFilterConstants.patientListFilterObject.lblweeks=weeks+"#@#"+sortAndFilterConstants.patientListFilterObject.lblweeks;
                sortAndFilterConstants.patientListFilterObject.lblcasemanager=casemanager+"#@#"+sortAndFilterConstants.patientListFilterObject.lblcasemanager;
                sortAndFilterConstants.patientListFilterObject.lblwounds=wounds+"#@#"+sortAndFilterConstants.patientListFilterObject.lblwounds;
                sortAndFilterConstants.patientListFilterObject.lblappttype=appttype+"#@#"+sortAndFilterConstants.patientListFilterObject.lblappttype;
                sortAndFilterConstants.patientListFilterObject.lblnextappt=nextappt+"#@#"+sortAndFilterConstants.patientListFilterObject.lblnextappt;
                sortAndFilterConstants.patientListFilterObject.lblphysician=physician+"#@#"+ sortAndFilterConstants.patientListFilterObject.lblphysician;
               //sortAndFilterConstants.patientListFilterObject.lblphysician=msrArray[i].lblphysician ;
              }
           // kony.print("--physic--"+sortAndFilterConstants.patientListFilterObject.lblphysician);
           createFilter();
          }*/
      kony.print("patientListConstants.filterValue = " + patientListConstants.filterValue);
      kony.print("patientListConstants.sortColumn = " + patientListConstants.sortColumn);


      if(patientListConstants.filterValue == "" && patientListConstants.sortColumn != ""){//This condtion means sorting is hapening

        kony.print("Inside patientListConstants");
        kony.print("patientListConstants.patientListHeader = " + JSON.stringify( patientListConstants.patientListHeader));

        var sortedImagePatientListHeader = JSON.parse(JSON.stringify(patientListConstants.patientListHeader));

        var selectedPatientListColumn = {
          "name"  : "imgdown1",  
          "caseManager" : "imgdown2", 
          "physician"  : "imgdown3", 
          "nextAppointment": "imgdown4", 
          "appointmentType"  : "imgdown5", 
          "wounds"  : "imgdown6", 
          "weeks" : "imgdown7", 
          "advancedProcedures" : "imgdown8", 
          "transferStatus"  : "imgdown9"
        };
        var selectedImage = selectedPatientListColumn[patientListConstants.sortColumn];

        var imageName = "";
        if(patientListConstants.sortOrder == "a")
          imageName = "headerarrow.png";
        else
          imageName = "headerarrowup.png";

        sortedImagePatientListHeader[selectedImage] = imageName ; //Change the arrow image.

        patientListDataArr.push(sortedImagePatientListHeader);

        kony.print("sortedImagePatientListHeader = " + JSON.stringify(sortedImagePatientListHeader));

      }
      else{
        kony.print("Outside patientListConstants");
        patientListDataArr.push(patientListConstants.patientListHeader);
        kony.print("patientListConstants.patientListHeader = " + JSON.stringify( patientListConstants.patientListHeader));
      }
      // PATIENT_LIST_SERVICE_DATA = sortAndFilterModule.sortPatientListNextAppointmentDate(PATIENT_LIST_SERVICE_DATA, false, true); 
//       if(logcounter==0)
//        {
//       PATIENT_LIST_SERVICE_DATA = sortAndFilterModule.sortPatientListNextAppointmentDate(msrArray, false, true); 
//         }
      
     // PATIENT_LIST_SERVICE_DATA = sortAndFilterModule.sortPatientListNextAppointmentDate(PATIENT_LIST_SERVICE_DATA, false, true);  //Params: data, order(ascending-false, descending-true), ignoreBlank
      //patientListConstants.filterData = PATIENT_LIST_SERVICE_DATA;
//       patientListDataArr.push(PATIENT_LIST_SERVICE_DATA);
//       patientListSegArr.push(patientListDataArr);

//       kony.print("patientListSegArr data:::"+JSON.stringify(PATIENT_LIST_SERVICE_DATA));
      

//       var sortedPatientListData = sortAndFilterModule.sortPatientListNextAppointmentDate(PATIENT_LIST_SERVICE_DATA, false, true);
//       paginate(sortedPatientListData,"frmPatientList");
      

      
      //frmPatientList.segpatientlist.setData(PATIENT_LIST_SERVICE_DATA);
      //kony.timer.schedule("timerForLines", frmPatientList_setHeightForLines, 0.2, false);
      //frmPatientList.segpatientlist.setData(patientListSegArr);

      if(patientListConstants.myPatients == "Y"){
        frmPatientList.btnmypatients.skin = "sknbtnradioSelected";
        frmPatientList.btnallpatients.skin = "sknbtnradionormal";
      }else{
        frmPatientList.btnmypatients.skin = "sknbtnradionormal";
        frmPatientList.btnallpatients.skin = "sknbtnradioSelected";
      }
      if(patientListConstants.weekRange == ""){
        frmPatientList.btncheckbox1.skin = "sknbtnuncheck";
        frmPatientList.btncheckbox2.skin = "sknbtnuncheck";
        frmPatientList.btncheckbox3.skin = "sknbtnuncheck";
        frmPatientList.btncheckbox4.skin = "sknbtnuncheck";
        frmPatientList.btncheckbox5.skin = "sknbtnuncheck";
      }
      var currentformId = kony.application.getCurrentForm().id;
      kony.print("------ current form is -----   "+currentformId);
      
      if(currentformId == "frmPatientList"){
        patientListConstants.showForm = GENERAL_CONSTANTS.TEXT_FALSE; 
      }else{
        patientListConstants.showForm = GENERAL_CONSTANTS.TEXT_TRUE;      
      }
      
      frmPatientList_Clear_All_filter(); 
      //frmPatientList.forceLayout();
      if(patientListConstants.showForm!==null && patientListConstants.showForm == GENERAL_CONSTANTS.TEXT_TRUE){
        patientListConstants.showForm = GENERAL_CONSTANTS.TEXT_FALSE;
        frmPatientList.btncheckbox1.skin = "sknbtnuncheck"; //sknbtncheck
        frmPatientList.btncheckbox2.skin = "sknbtnuncheck";
        frmPatientList.btncheckbox3.skin = "sknbtnuncheck";
        frmPatientList.btncheckbox4.skin = "sknbtnuncheck";
        frmPatientList.btncheckbox5.skin = "sknbtnuncheck";
        
       
      	if(sortAndFilterConstants.todayPatient){
        	sortAndFilterModule.defaultToTodaysFilter(); //This is new change as per WOUN-2116 
        } else {
          sortAndFilterConstants.patientListFilterObject = kony.store.getItem("patientListFilterObject");
          sortAndFilterModule.filterDataBasedonParameters(PATIENT_LIST_SERVICE_DATA,sortAndFilterConstants.patientListFilterObject);
          //getUserPreferenceList();
        }
        frmPatientList.show();  
        //frmPatientList.forceLayout();
      } else if(patientListConstants.weekRange == "" || patientListConstants.weekRange == "null" || patientListConstants.weekRange == null){
        if(sortAndFilterConstants.todayPatient){
        	sortAndFilterModule.defaultToTodaysFilter(); //This is new change as per WOUN-2116 
        } else if(kony.store.getItem("patientListFilterObject") !== isNullUndefinedOrEmpty){
          sortAndFilterConstants.patientListFilterObject = kony.store.getItem("patientListFilterObject");
          sortAndFilterModule.filterDataBasedonParameters(PATIENT_LIST_SERVICE_DATA,sortAndFilterConstants.patientListFilterObject);
          //getUserPreferenceList();
        }
        frmPatientList.show();
      }
      
      
      /*frmPatientList.fcpatientlistcontainer.skin="sknfcwhitebg"; 
      var lSortAndFilterConstants = JSON.parse(kony.store.getItem("sortAndFilterConstants"));
      kony.print("patientListModule.patientListSuccessCallback lSortAndFilterConstants:::"+JSON.stringify(lSortAndFilterConstants))
      if(lSortAndFilterConstants!=null && lSortAndFilterConstants.patientListFilterObject !=null){
        sortAndFilterConstants = lSortAndFilterConstants;
        currentfrm = frmPatientList;
        sortAndFilterModule.filterDataBasedonParameters(PATIENT_LIST_SERVICE_DATA, sortAndFilterConstants.patientListFilterObject);
        frmPatientList[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilterHover";
      }*/
      
      
      frmPatientList.forceLayout();

    }else{
//       if( patientListConstants.filterField=="currentAppointMent")
//         {
//           patientListModule_getAllPatientList1(true);
//         }
        
      showError = true;

      var error_label = response.responsedesc;

      if(response!==null && response.opstatus != 0 && response.errmsg != null){
        error_label = response.errmsg;
      }

      if(com.healogics.utility.isEmpty(error_label)){
        error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      }
      if(response.responsedesc!=null && response.responsedesc!="" ){
        com.healogics.utility.displayNoTitleAlert(response.responsedesc);
        if(response.responsedesc=="No Records found"){
          if(patientListConstants.weekRange==""){
            patientListConstants.myPatients = "N";
            patientListConstants.weekRange = patientListConstants.selectedWeek;
          }else{
            patientListModule.showNoPatientsLabel();
          }
        }

      }else{
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
      }
    }
    
  }
};

patientListModule.showNoPatientsLabel = function(){
  frmPatientList.segpatientlist.setVisibility(false);
  frmPatientList.segpatientlist.removeAll();
  frmPatientList.lblNoPatients.setVisibility(true);
  frmPatientList.fcpatientlistcontainer.skin="slFbox"; 
  frmPatientList.lblSeperator1.height="50dp";
  frmPatientList.lblSeperator2.height="50dp";
  frmPatientList.lblSeperator3.height="50dp";
  frmPatientList.lblSeperator4.height="50dp";
  frmPatientList.lblSeperator5.height="50dp"; 
  frmPatientList.lblSeperator6.height="50dp";
  frmPatientList.lblSeperator7.height="50dp";
  frmPatientList.lblSeperator8.height="50dp";
  frmPatientList.lblSeperator9.height="50dp";
  frmPatientList.fcpaginatebuttons.setVisibility(false);
};

//Patient ListFailureCallback
patientListModule.patientListFailureCallback = function(response){
  kony.print("Patient List Error Callback Response:::"+JSON.stringify(response));
  //Woun-2466
  //var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  
  ///Sandeep offline changes  
  if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION
  }else{
    var error_label= ERROR_CONSTANTS.SERVICE_LOAD_ERROR;
  }
  
  //ERROR_CONSTANTS.SERVICE_LOAD_ERROR;
  if(response!=null && response.opstatus === 1582 && response.statuscode === ""){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }


};
//PatientSearch Failure Callback

patientListModule.patientSearchListFailureCallback = function(response){
  if(!isIpad && !isIphone){
    if(patientListConstants.filterValue != patientListConstants.searchText &&  patientListConstants.filterValue.length >= 3){
      patientListModule.searchPatientWithCharacters();
      return;
    }
    patientListConstants.isPatientSearchInProgress = false;
    patientListConstants.searchText = "";
  }
  var currentForm=kony.application.getCurrentForm();
  kony.print("Patient List Error Callback Response:::"+JSON.stringify(response));
  var browser=kony.os.deviceInfo().category;
  if(browser == "IE"){
    currentForm.tbpatientsearch.setFocus(false);
    currentForm.fcsearchicon.setVisibility(false);
  }
  ///Sandeep offline changes
  if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION
  }else{
    var error_label= ERROR_CONSTANTS.SERVICE_LOAD_ERROR;
  }
  
 //var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION
  //var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!=null && response.opstatus === 1582 && response.statuscode === ""){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }


};

//Search Patient List
patientListModule.searchPatientList = function(){  
  kony.print("userInfo.viewPatientList-----"+userInfo.viewPatientList);
  
  if(userInfo.viewPatientList == "true" || isIphone){
    patientListConstants.isPatientSearchInProgress = true;
    ///Sandeep offline changes
    if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
    var inputData = {
      "userIdValue" : userInfo.userId, //userInfo.encrypteduserId,//
      "start" : patientListConstants.start,
      "limit" : patientListConstants.limit,
      "filterField" : patientListConstants.filterField,
      "filterVal" : patientListConstants.filterValue,
      "sortField" : patientListConstants.sortColumn,
      "sortOrder" : patientListConstants.sortOrder,
      "timestamp" : userInfo.loginTime,
      "referKey" : patientListConstants.referKey,    
      "myPatients" : patientListConstants.myPatients,
      "weekRange" : patientListConstants.weekRange,
      "accessToken" : userInfo.accessToken,
      "facilityId" : userInfo.presentFacilityId
      //"location" : ""
    };

    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_PATIENTLIST,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "userId" : userInfo.userId,
        "facilityId" : userInfo.presentFacilityId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
        //"facilityId" : userInfo.presentFacilityId
      },
      inputData,
      patientListModule.patientSearchSuccessCallback,
      patientListModule.patientSearchListFailureCallback,
      "false"
    );
  }
}};

patientListModule.searchPatientWithCharacters = function(){
  patientListModule.searchPatientList(); 
  patientListConstants.isPatientSearchInProgress = false;
  patientListConstants.searchText = patientListConstants.filterValue;
};


//PatientList SearchSuccessCallback
patientListModule.patientSearchSuccessCallback = function(response){

  if(!isIpad && !isIphone){
    if(patientListConstants.filterValue != patientListConstants.searchText && patientListConstants.filterValue.length >= 3){
      patientListModule.searchPatientWithCharacters();
      return;
    }
    patientListConstants.isPatientSearchInProgress = false;
    patientListConstants.searchText = "";
  }  

  kony.print("Patient List Success Callback Response:::"+JSON.stringify(response));

  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){

    userInfo.loginTime = (userInfo.loginTime!=null && userInfo.loginTime!="")? userInfo.loginTime : response.timestamp;
    var patientList = response.patientslist;

    var PATIENT_LIST_SERVICE_DATA = [];

    if(patientList!=null && patientList.length > 0){
      for(var i in patientList){
        var tempRecord = {};


        tempRecord["lblsearchname"] = patientList[i]["name"];         
        tempRecord["lblpatientid"] = patientList[i]["patientId"];

        PATIENT_LIST_SERVICE_DATA.push(tempRecord);
      }

    }
    var currentForm = kony.application.getCurrentForm();
    kony.print("patientListSegArr data:::"+JSON.stringify(PATIENT_LIST_SERVICE_DATA));
    currentForm.segSearch.setData(PATIENT_LIST_SERVICE_DATA);
    if(currentForm.id == "frmPatientList" && !isIpad && !isIphone)
      currentForm.fcsearchdropdown.left=parseInt(currentForm.tbpatientsearch.frame.x)+parseInt(currentForm.fcSearchPatient.frame.x)+parseInt(currentForm.fcdashboardsubheader.frame.x);
    currentForm.segSearch.setVisibility(true);
    currentForm.fcsearchdropdown.setVisibility(true);
    currentForm.forceLayout(); 

  }else{

    showError = true;
   ///Sandeep offline changes
    
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION
  }else{
    var error_label= ERROR_CONSTANTS.SERVICE_LOAD_ERROR;
  }

   // var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE; 

    if(response!==null && response.opstatus != 0 && response.errmsg != null){
      error_label = response.errmsg;
    }
    var currentForm = kony.application.getCurrentForm();
    currentForm.segSearch.removeAll();
    currentForm.segSearch.setVisibility(false);
    currentForm.fcsearchdropdown.setVisibility(false);
    currentForm.forceLayout();
  }

};


var onClickSearchClose=function(){
  kony.print("---- In onClickSearchClose ----");
  var currentform=kony.application.getCurrentForm();
  currentform.imgSearchIcon.src="search.png";
  currentform.tbpatientsearch.text="";

  currentform.fcsearchdropdown.setVisibility(false);
};
//Method to call search patient service call
var frmPatientList_onSearchStart=function() {
  kony.print("onSearchStart");
  if(isIphone){
    frmPatientList.fcmenu.skin="slFbox";
    frmPatientList.fcoptionsmenu.setVisibility(false);
  }
  var data = [];
  var sdata = [];
  var currentform=kony.application.getCurrentForm();
  var search_data = frmPatientList.segpatientlist.data;
  if(currentform.tbpatientsearch.text.length===0){
    currentform.fcsearchdropdown.setVisibility(false);
    currentform.forceLayout();
    if(!isIphone)
      currentform.imgSearchIcon.src="search.png";
  }else{
    if(!isIphone)
      currentform.imgSearchIcon.src="closepopupsmall.png";
  }
  if(!isIphone){
    kony.print("kony.os.deviceInfo().category----->"+kony.os.deviceInfo().category);
    var browser=kony.os.deviceInfo().category;
    if(browser == "IE"){
      currentform.fcsearchicon.setVisibility(false);
    }
  }
  var skey=currentform.tbpatientsearch.text.trim();
  if (skey.length >= 3) {
    kony.print("currentform.tbpatientsearch----->"+currentform.tbpatientsearch.text);

    patientListConstants.clearSortAndFilter();
    patientListConstants.start = "0";
    patientListConstants.limit = "10";
    patientListConstants.filterField = "name";
    patientListConstants.filterValue = skey;
    patientListConstants.sortColumn = "";
    patientListConstants.sortOrder = "";

    if(!patientListConstants.isPatientSearchInProgress){
      patientListModule.searchPatientList(); 
      patientListConstants.searchText = skey;
    }
  }
};

//Method to dismiss search suggestions
var frmPatientList_onSearchEnd=function(){
  kony.print("onSearchEnd");
  patientListConstants.isPatientSearchInProgress = false;
  patientListConstants.searchText = "";
  var currform = kony.application.getCurrentForm();
  if( currform.segSearch.data === null || currform.segSearch.data.length === 0){
    currform.fcsearchdropdown.setVisibility(false);
    currform.forceLayout();
  }
  currform.fcsearchicon.setVisibility(true);
};

//Method to show frmPatientRecords
function frmPatientRecords_showForm(){
  searchPatient_closeSearchList();
  var currentForm = kony.application.getCurrentForm();
  if(currentForm.id === "frmPatientSummary"){
    kony.print("patientSummaryObjects.healing9stepEditedData.length----->>>>>"+patientSummaryObjects.healing9stepEditedData.length);
    if(patientSummaryObjects.healing9stepEditedData.length>0){
      frmPatientSummary_btnSaveClick("save");
    }
  }
  uploadDocumentConstants.clear();
  uploadDocumentConstants.selectedRow=0;
  if(!com.healogics.utility.isEmpty(patientSummaryObjects.patientDemoGraphics.patientId)){  
    recordsModule.getRecords(function(a){},function(b){});
  } 
}
//Method to search patient
var  frmPatientListAndSummary_searchPatient=function(){
  kony.print("-----frmPatientListAndSummary_searchPatient----" );
  var cform=kony.application.getCurrentForm();
  kony.print("-----cform----" +cform.id);
  patientSummaryObjects.selectedWoundIndex = 0;
  userInfo.patientId=cform.segSearch.selectedItems[0].lblpatientid;
  com.healogics.patientSummary.getPatientSummary(userInfo.patientId, "", "", true); 
};

function frmPatientList_setHeightForLines(){
  kony.print("inside frmPatientList_setHeightForLines---");
  try{
    var seg_height=frmPatientList.segpatientlist.frame.height;
    for(i=1;i<10;i++){
      frmPatientList["lblSeperator"+i].height=seg_height+75;
    }
    frmPatientList.forceLayout();
    
    frmPatientList.btnViewAll.setEnabled(true);
    frmPatientList.btnViewMore.setEnabled(true);
    
    try{
      kony.timer.cancel("timerForLines");
    }catch(e){
      kony.print("error----"+e);
    }
  }catch(e){
    kony.print("error----"+e);
  }
  
  com.healogics.utility.dismissLoading();
  if(startTime!=null){
    var endTime = getDeviceCurrentTime();
    kony.print("view more time . --->"+((endTime-startTime)/1000));
  }
  
}

//=======iPhone========
var frmPatientListiPhone_postShow=function(){
  if(frmPatientList.fcoptionsmenu.isVisible)
    frmPatientList.fcoptionsmenu.setVisibility(false);
  if(frmPatientList.tbpatientsearch.isVisible)
    frmPatientList.tbpatientsearch.setVisibility(false);
  if(frmPatientList.fcsearchdropdown.isVisible)
    frmPatientList.fcsearchdropdown.setVisibility(false);
  
  load_headerdata(frmPatientList);
  changeConnectionStatus(isNetworkAvailable());
};

function frmPatientListiPhone_PreShow(){
  changeConnectionStatus(isNetworkAvailable());
}

var frmPatientList_iPhone_onTouchEnd=function(){
  kony.print("---- frmPatientList_iPhone_onTouchEnd ----");
};

var onClickMenu_iPhone=function(){
  if(frmPatientList.fcoptionsmenu.isVisible){
    frmPatientList.fcmenu.skin="slFbox";
    frmPatientList.fcoptionsmenu.setVisibility(false);
  }else{
    frmPatientList.fcmenu.skin="sknfcgray";
    frmPatientList.fcoptionsmenu.setVisibility(true);
  }
  frmPatientList.forceLayout();
};

var onMenuOptionsClick=function(eventobject){

  if(eventobject.id == "fcswtchfacility"){
    kony.print("---- Inside switch Facility ----");	
    frmPatientList.fcmenu.skin="slFbox";
    frmPatientList.fcoptionsmenu.setVisibility(false);
    if (!SYNC_CONSTANTS.isAppOffline) { // Online
      //Show popover to choose Sync or Not Sync when Online
      kony.print("Inside Online");
      popupSwitchFacilitySync.show();
    }else{
      kony.print("Inside Offline");
      if(isSearchFacility){
        clearSearchFacilityText();
      }
      switchFacility_module.setFacilityData();
    }
  }else if(eventobject.id == "fclogout"){
    frmPatientList.fcoptionsmenu.setVisibility(false);
    frmPatientList.fcmenu.skin="slFbox";
    mod_purge_data.removeDeviceInstanceForPatientList(); 
    //popuplogout.lblmsg.text = SYNC_CONSTANTS.offlineLogoutMessage;
    popuplogout.show();
  }else if(eventobject.id == "fchelp"){

  }
}

var frmPatientListiPhone_onRowClick=function(){
  patientId_iPhone=frmPatientList.segpatientlist.selectedItems[0].lblpatientid;
  kony.print("patientId_iPhone"+patientId_iPhone);
  var patientName=frmPatientList.segpatientlist.selectedItems[0].lblpatientname;
  frmPatientDetails.lblfacility.text=patientName;
  recordsModule.getRecords(function(a){},function(b){});
};

var frmPatientListIPhone_searchRowClick=function(){
  patientId_iPhone=frmPatientList.segSearch.selectedItems[0].lblpatientid;
  kony.print("patientId_iPhone"+patientId_iPhone);
  var patientName=frmPatientList.segSearch.selectedItems[0].lblsearchname;
  kony.print("patientName patientName"+patientName);
  frmPatientDetails.lblfacility.text=patientName;
  frmPatientList.tbpatientsearch.setVisibility(false);
  frmPatientList.fcsearchdropdown.setVisibility(false);
  recordsModule.getRecords(function(a){},function(b){});
};

var onClickUploadDocument=function(){
  var selectedDocument=frmPatientDetails.listbxdoctype.selectedKey;
};

var hideSearchDropdown=function(){
  var currentForm=kony.application.getCurrentForm();
  currentForm.fcsearchdropdown.setVisibility(false);
  currentForm.tbpatientsearch.text="";
  currentForm.imgSearchIcon.src="search.png";
}