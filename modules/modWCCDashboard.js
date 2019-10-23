/*
*Name: modWCCdashboard.js
*Purpose: For WCC metrics related functionalities
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 02/01/2017        Mona                 Integration and set data Logic
*
*
*/
var wcc_flag="false";
var metrics_module={};

//Method called in postshow of frmWCCDashboard
var frmWCCDashboard_postShow=function(){
  registerTimeout();
  hideFormMenu();
  load_headerdata();
  frmWCCDashboard.fcsearchdropdown.setVisibility(false);
  frmWCCDashboard.tbpatientsearch.text="";
  frmWCCDashboard.imgSearchIcon.src="search.png";
  changeConnectionStatus(isNetworkAvailable());
  if(!isIpad && !isIphone){
    frmWCCDashboard_infoToolTip_hover();
  }
  if(isIpad && !SYNC_CONSTANTS.isAppOffline){
    resolveConflict_cntrl_offline.setBadgeValueForUI();
  }  
};


//Method to load last 12 months for metrics
metrics_module.load_monthsdata=function(){
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var d=new Date();
  var month=d.getMonth();
  var year = new Date().getFullYear();
  var metrics_months=[];
  for(i=month+1;i<12;i++){
    var month_data_past={
      "key":i,
      "value":months[i]+", "+(year-1)
    }; 
    metrics_months.push(month_data_past);
  }
  for(i=0;i<=month;i++){
    var month_data_present={
      "key":i,
      "value":months[i]+", "+year
    };
    metrics_months.push(month_data_present);
  }
  metrics_module.setListboxMetricsMonthsData(metrics_months);
  kony.print("month-->"+month);
  kony.print("year--->"+year);
  frmWCCDashboard.lbfocusmetrics.selectedKey=month-1;
  frmWCCDashboard.lbwccmetrics.selectedKey=month-1;
  metrics_info.month=(month).toString();
  metrics_info.year=(year).toString();
  //if(isIpad){
  //  SYNC_CONSTANTS.wccMetricsFirstTimeFlag = true;
  //  wccMetrics_cntrl_offline.getMonthYearWccMetricsByFacilityid(metrics_info.month, metrics_info.year, userInfo.presentFacilityId);
  //}else{
    metrics_module.load_MetricsData();
  //}
};

//Method to set months data to metrics listbox
metrics_module.setListboxMetricsMonthsData=function(wcc_metrics){  
  var metrics_masterData=[];
  var month=new Date().getMonth();
  for(i=0;i<wcc_metrics.length;i++)
  {
    var metrics_mapdata=[];
    metrics_mapdata.push(wcc_metrics[i].key);
    metrics_mapdata.push(wcc_metrics[i].value);
    kony.print("metrics_mapdata--->"+JSON.stringify(metrics_mapdata));
    metrics_masterData.push(metrics_mapdata);
  }   
  kony.print("metrics_masterData----->"+JSON.stringify(metrics_masterData));
  frmWCCDashboard.lbwccmetrics.masterData=metrics_masterData;
  frmWCCDashboard.lbfocusmetrics.masterData=metrics_masterData;
};

//Method called on selection of month for wccmetrics
var wccMetrics_OnMonthSelection = function(){ 
  var selected_value=frmWCCDashboard.lbwccmetrics.selectedKeyValue[1];
  var month_year=selected_value.split(",");
  kony.print("selected month--->"+(frmWCCDashboard.lbwccmetrics.selectedKey));
  metrics_info.month=(parseInt(frmWCCDashboard.lbwccmetrics.selectedKey)+1).toString();
  metrics_info.year=(month_year[1]).trim();
  kony.print("month--->"+metrics_info.month);
  kony.print("year---->"+metrics_info.year);
  //if(isIpad){ ///Akshay - For Reading always the Offline DB in Online or Offline mode for iPad
  //  wccMetrics_cntrl_offline.getMonthYearWccMetricsByFacilityid(metrics_info.month, metrics_info.year, userInfo.selectedFacilityId);
  //}else{
    metrics_module.loadWccMetricsData();
  //}
};

//Method called on selection of month for userMetrics
var userMetrics_OnMonthSelection = function(){ 
  var selected_value=frmWCCDashboard.lbfocusmetrics.selectedKeyValue[1];
  var month_year=selected_value.split(",");
  kony.print("selected month--->"+(frmWCCDashboard.lbfocusmetrics.selectedKey));
  metrics_info.month=(parseInt(frmWCCDashboard.lbfocusmetrics.selectedKey)+1).toString();
  metrics_info.year=(month_year[1]).trim();
  kony.print("month--->"+metrics_info.month);
  kony.print("year---->"+metrics_info.year);
  
//   if(isIpad){///Akshay - For Reading always the Offline DB in Online or Offline mode for iPad
//     if (metrics_info.month.toString().length == 1) {
//             metrics_info.month = "0" + metrics_info.month;
//         }
    
//       userMetrics_cntrl_offline.getMonthYearUserMetricsByFacilityidandUserId(metrics_info.year+metrics_info.month, metrics_info.year, userInfo.userId); ///Akshay - From userName to userId
//   }else{
    if(isNetworkAvailable()){
            metrics_module.loadUserMetricsData();
       }
  //}
};

//Method for service call of metrics data
metrics_module.load_MetricsData=function(){
  var inputData = {
    "accessToken" : userInfo.accessToken,
    "userIdValue" : userInfo.userId,
    "reqMonth": metrics_info.month,
    "reqYear":  metrics_info.year,
    "userDate":"",
    "syncDate":"",
    "facilityId" : userInfo.presentFacilityId
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_METRICS,
    {
      	"Content-Type":"application/json",
      	"Authorization" : userInfo.headerAccessToken,
      	"facilityId" : userInfo.presentFacilityId,
	  	"userId" : userInfo.userId,
	  	"userName" : userInfo.userName,
	  	"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
    },
    inputData,
    metrics_module.loadMetricsSuccessCallback,
    metrics_module.loadMetricsFailureCallback
  );
};

//Success callback for wccmetrics service
metrics_module.loadMetricsSuccessCallback=function(response){
  kony.print("metrics loadMetricsSuccessCallback start ::"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0){
    if(response.facilitydesc === "" && response.facilitydesc === ""){
      frmWCCDashboard.lblFacility.text="";
    }
    else{
      frmWCCDashboard.lblFacility.text=response.facilitycode+" - "+response.facilitydesc;
    } 
    if(response.opstatus_wccMetrics === 0 && response.wccmetrics!== null && response.wccmetrics!== undefined && response.wccmetrics.length > 0){
      metrics_module.loadWccMetricsSuccessCallback(response);
    }else{
      frmWCCDashboard.lblNoRecords.setVisibility(true);
      frmWCCDashboard.lblNoRecords.text = response.responsedesc;
      frmWCCDashboard.fcmetrics.setVisibility(false);
      frmWCCDashboard.flxmetricsheader.setVisibility(false);
    }
    kony.print("role exists response----->"+userInfo.userMetrics);
    if(userInfo.userMetrics === GENERAL_CONSTANTS.TEXT_TRUE ){
      metrics_module.loadUserMetricsSuccessCallback(response);
    }else{
      frmWCCDashboard.fcusermetrics.setVisibility(false);
    }        
    frmWCCDashboard.forceLayout();
    frmWCCDashboard.show();
  }
  else{  
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      if(!com.healogics.utility.isEmpty(response.errmsg)){
        com.healogics.utility.showErrorAlert(response.errmsg);
      }else{
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
      }
    }
  }
  frmLanding.fscmainbody.setVisibility(true);
  frmLanding.fcmstfooter.top="18.5%";
};


//Method for service call of metrics data
metrics_module.loadWccMetricsData=function(){
  var inputData = {
    "accessToken" : userInfo.accessToken,
    "userIdValue" : userInfo.userId,
    "reqMonth": metrics_info.month,
    "reqYear":  metrics_info.year,
    "userDate":"",
    "syncDate":"",
    "facilityId" : userInfo.presentFacilityId
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_WCCMETRICS,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    metrics_module.loadWccMetricsSuccessCallback,
    metrics_module.loadMetricsFailureCallback
  );
  //     var wcc_metrics=wccMetricsData();
  //     metrics_module.loadWccMetricsSuccessCallback(wcc_metrics);
};


//Success callback for wccmetrics service
metrics_module.loadWccMetricsSuccessCallback=function(response){
  kony.print("metrics loadWccMetricsSuccessCallback start::"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
    if(response.facilitydesc === "" && response.facilitydesc === ""){
      frmWCCDashboard.lblFacility.text="";
    }
    else{
      frmWCCDashboard.lblFacility.text=response.facilitycode+" - "+response.facilitydesc;
    }  
    kony.print("in stuscode 200");
    var wccMetrics = response.wccmetrics;
    var usreMetrics = response.usermetrics;
    var metrics_length = wccMetrics.length;
    kony.print("metricslist---->"+JSON.stringify(wccMetrics));
    if(wccMetrics!==null && metrics_length > 0){
      kony.print("----in response.metrics length >0-------");
      metrics_info.wccMetrics = wccMetrics;
      frmWCCDashboard.lblNoRecords.setVisibility(false);
      frmWCCDashboard.fcmetrics.setVisibility(true);
      frmWCCDashboard.flxmetricsheader.setVisibility(true);
       metrics_module.setMetricsData(wccMetrics);
    }
    else{ 
      frmWCCDashboard.lblNoRecords.setVisibility(true);
      frmWCCDashboard.lblNoRecords.text="No records found";
      //CO-501 changes
      //"No Records found";
      frmWCCDashboard.fcmetrics.setVisibility(false);
      frmWCCDashboard.flxmetricsheader.setVisibility(false);
    }
    frmWCCDashboard.forceLayout();
    frmWCCDashboard.show();
  }
  else if(response.statuscode=="401" && response.responsedesc=="No records found"){
    frmWCCDashboard.lblNoRecords.setVisibility(true); 
    //CO-501 changes
    //frmWCCDashboard.lblNoRecords.text="No Records found";
    frmWCCDashboard.fcmetrics.setVisibility(false);
    frmWCCDashboard.flxmetricsheader.setVisibility(false);
    frmWCCDashboard.forceLayout();
    frmWCCDashboard.show();
  }
  else{
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else if(response.errmsg!==null && response.errmsg!==""){
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
    else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method for service call of metrics data
metrics_module.loadUserMetricsData=function(){
  var inputData = {
    "accessToken" : userInfo.accessToken,
    "userIdValue" : userInfo.userId,
    "reqMonth": metrics_info.month,
    "reqYear":  metrics_info.year,
    "userDate":"",
    "syncDate":"",
    "facilityId" : userInfo.presentFacilityId
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_USERMETRICS,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "facilityId" : userInfo.presentFacilityId,
      "userId" : userInfo.userId,
      "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    metrics_module.loadUserMetricsSuccessCallback,
    metrics_module.loadMetricsFailureCallback
  );
};

//Success callback for wccmetrics service
metrics_module.loadUserMetricsSuccessCallback = function(response){
  kony.print("metrics loadUserMetricsSuccessCallback start ::"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0){
    var usreMetrics = response.usermetrics;    
    frmWCCDashboard.fcusermetrics.setVisibility(true);
    if(usreMetrics!==null && usreMetrics!==undefined && usreMetrics.length > 0){
      frmWCCDashboard.fcmetricsdata.setVisibility(true);
      frmWCCDashboard.lblnousermetrics.setVisibility(false);
      kony.print("----in response usreMetrics length >0-------");
      metrics_info.usreMetrics = usreMetrics;
      frmWCCDashboard.lblchrvalue.text = usreMetrics[0].actual;
      frmWCCDashboard.lblhealedwoundvalue.text = usreMetrics[1].actual;
      frmWCCDashboard.lblnothealedwoundvalue.text = usreMetrics[2].actual;
      frmWCCDashboard.lbladvancevalue.text = usreMetrics[3].actual;
      frmWCCDashboard.lblcomplexvalue.text = usreMetrics[4].actual;
      frmWCCDashboard.lblpalliativevalue.text = usreMetrics[5].actual;
      frmWCCDashboard.lbldebridementratevalue.text = usreMetrics[6].actual;

    }else{

      frmWCCDashboard.fcmetricsdata.setVisibility(false);
      var responseDescription = "No records found";//"No Records Found.";
      if(response.statuscode!=200 && response.responsedesc!=null && response.responsedesc!="Success"){
        responseDescription = response.responsedesc;
      }else{
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
          error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
          loginModule.showLoginScreen(error_label);
        }else if(response.errmsg!==null && response.errmsg!==""){
          //com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        }
        else{
          com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        }
      }
      frmWCCDashboard.lblnousermetrics.setVisibility(true);
      frmWCCDashboard.lblnousermetrics.text = responseDescription;
      frmWCCDashboard.forceLayout();

    }

  }else{
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else if(response.errmsg!==null && response.errmsg!==""){
      com.healogics.utility.showErrorAlert(response.errmsg, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
    else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};


//Failure callback for wccmetrics service
metrics_module.loadMetricsFailureCallback=function(response){
  kony.print("metrics_module.loadMetricsFailureCallback  start::"+JSON.stringify(response));
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

var measures=["New Patients","Wound Care Encounters","Patient Satisfaction","Median Days to Heal","Outliers","Healing Rate"];

//Method to set wccmetrics data
metrics_module.setMetricsData=function(metrics){
  var len=metrics.length;
  var metricsDataArray=[];
  var metricsArray=[];
  var metricsData=[];
  frmWCCDashboard.lblMeasureshdr.text="Measures";
  frmWCCDashboard.lblActualhdr.text="Actual";
  frmWCCDashboard.lblTargethdr.text="Plan";
  //metrics_module.addDynamicMetricsData(metrics);
  for(i=0;i<len;i++){
    frmWCCDashboard["lblmeasures"+(i+1)].text=measures[i];
    frmWCCDashboard["lblactual"+(i+1)].text=metrics[i].actual;
    frmWCCDashboard["lbltarget"+(i+1)].text=metrics[i].plan;    
  }
  kony.print("----metrics data--->"+JSON.stringify(metricsArray));
  frmWCCDashboard.forceLayout();
};


//Method called on accept of popupUserAcknowledgement
var popupUserAcknowledgement_onAccept=function()
{
  if (isIpad) { ///Akshay - Always have to be stored in local db and then synced
    terms_and_conditions_offline.updateTermsAndConditions();
  }   
   else {  //online
     dashboardModule.updateUserAcknowledgementStatus();
   }
};


//Method to show popupUserAcknowledgement
var show_popupUserAcknowledgement=function(){
  searchPatient_closeSearchList();
  popupUserAcknowledgement.lblheader.text="User Acknowledgement";
  popupUserAcknowledgement.rttermsconditions.text = userInfo.termsConditions;
  if(userInfo.userAcknowledgementFlag === true){
    popupUserAcknowledgement.hboxAcceptAck.setVisibility(true);
    popupUserAcknowledgement.hboxsave.setVisibility(false);
    var acceptedDate=com.healogics.utility.dateFormatForAck(userInfo.ackAcceptedDate);
    popupUserAcknowledgement.lblAcceptAck.text="You accepted the above User Acknowledgement on "+acceptedDate;
  }
  else if(userInfo.userAcknowledgementFlag === false){
    popupUserAcknowledgement.hboxAcceptAck.setVisibility(false);
    popupUserAcknowledgement.hboxsave.setVisibility(true);
  }
  popupUserAcknowledgement.show();
};

//Method to show popupInfo
var showPopupInfo=function(eventobject){
  searchPatient_closeSearchList();
   popupInfo.btnExclusions.setVisibility(false);
   popupInfo.richtextExclusions.setVisibility(false);
   popupInfo.btnExclusions.text="See Exclusions from Outcome Calculations";
  for(i=0;i<9;i++){
    if(eventobject.id=="fcInfo"+(i+1)){
      kony.print("----in if condition-----");
      popupInfo.lblInfo.text=metrics_info.info_description[i];
      popupInfo.lblTitle.text=metrics_info.info_title[i];
      if(i==3 || i===4 ||i===5){
        popupInfo.btnExclusions.setVisibility(true);
      }
      else{
        popupInfo.btnExclusions.setVisibility(false);
      }
    }
  }
  popupInfo.setContext({
    widget:frmWCCDashboard[eventobject.id],
    anchor:"top"
  });
  popupInfo.show();
};
 var  frmWCCMetrics_btnInfo_onClick=function(eventobject){
   if(document.getElementById("popupInfo")!==null){
    kony.print("-----in dismiss condition----");
    popupInfo.dismiss();
  }
  else{
    kony.print("-----in show condition----");
    showPopupInfo(eventobject);
    popupInfo.show();
  }
  if(wcc_flag==="false"){
    popupInfo.show();
    wcc_flag="true";
  }else{
    popupInfo.dismiss();
    wcc_flag="false";
  }
};

var popupInfo_showExclusionsData=function(){
  popupInfo.richtextExclusions.text=metrics_info.info_exclusions;
  if(popupInfo.btnExclusions.text=="Less"){
    popupInfo.richtextExclusions.setVisibility(false);
    popupInfo.btnExclusions.text="See Exclusions from Outcome Calculations";
  }
  else{
    popupInfo.richtextExclusions.setVisibility(true);
    popupInfo.btnExclusions.text="Less";
  } 
};

var frmWCCDashboard_infoToolTip_hover  = function(){
    document.getElementById("frmWCCDashboard_fcInfo8").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo8"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };

   document.getElementById("frmWCCDashboard_fcInfo9").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo9"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };

  document.getElementById("frmWCCDashboard_fcInfo7").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo7"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };
   document.getElementById("frmWCCDashboard_fcInfo6").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo6"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };
   document.getElementById("frmWCCDashboard_fcInfo5").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo5"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };

   document.getElementById("frmWCCDashboard_fcInfo4").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo4"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };

   document.getElementById("frmWCCDashboard_fcInfo3").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo3"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };

   document.getElementById("frmWCCDashboard_fcInfo2").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo2"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };

   document.getElementById("frmWCCDashboard_fcInfo1").onmouseover = function(){
      var eventobject = {}; 
      eventobject.id = "fcInfo1"; 
      kony.print("eventobject in frmWCCDashboard_infoToolTip_hover---->"+eventobject.id);
      frmWCCDashboard_btnInfo_onClick(eventobject);
    };
};

var frmWCCDashboard_getPQCRData = function(){
  searchPatient_closeSearchList();
  kony.print("In healing9StepDataModule.mostRecentPhysicianOrders ----->>>>>"+SYNC_CONSTANTS.isAppOffline);
  //var isNetworkAvailable = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
  //CO-403
  //if(isIpad && !isNetworkAvailable()){
  //  showCustomPopup(syncMessageConstants.FEATURE_NOT_AVAILABLE, syncMessageConstants.FEATURE_NOT_AVAILABLE_MESSAGE);
  //}
  //else{
  var inputData = {
    "userId" : userInfo.userId,
    "accessToken" : userInfo.accessToken,
    "documenType" : "PKPI", 
    "facilityId" : userInfo.presentFacilityId,
  };
  kony.print("healing9StepDataModule.mostRecentPhysicianOrders inputData ----->>>>>"+JSON.stringify(inputData));
  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_MOREMETRICS,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    metrics_module.getPQCRDataSuccessCallback,
    metrics_module.getPQCRDataFailureCallback 
  );
  //}
};

//Method for RECENT PHYSICIAN ORDERS  service success callback
metrics_module.getPQCRDataSuccessCallback = function(response){
  if(response!==null && response.opstatus === 0 && response.statuscode == "200" && response.documents.length>=1){
    kony.print("In getPQCRDataSuccessCallback ----->>>>>"+JSON.stringify(response.documents.document));
    printModuleConstants.base64Output = "data:application/pdf;base64,"+response.documents[0].document;
    printModuleConstants.enablePrint = false;
    onclickViewPdf();    
  }else if(response.responsedesc!=null && response.responsedesc!=""){
    com.healogics.utility.displayNoTitleAlert(response.responsedesc);
  }else if(response.errmsg!==null){
    com.healogics.utility.showErrorAlert(response.errmsg);
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method for RECENT PHYSICIAN ORDERS  service failure callback
metrics_module.getPQCRDataFailureCallback  = function(response){
  kony.print("In metrics_module.getPQCRDataFailureCallback  ----->>>>>"+JSON.stringify(response));
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

metrics_module.isRoleExistsInUserRoles=function(role){
  var flag=false;
  for(i=0;i<userInfo.roles.length;i++){
    if(role===userInfo.roles[i]){
      flag=true;
      break;
    }
  }
  return flag;
};


