/*
*Name: modIpadSpecific.js
*Purpose: For Specific iPad related functionalities
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 04/06/2017        Vamshi, Madhu        
*
*
*/

var syncMessageConstants = {
  SYNC_COMPLETE : "Sync Complete",
  SYNC_COMPLETE_MESSAGE : "Your changes have been uploaded and are saved to the patient’s profile",
  FEATURE_NOT_AVAILABLE : "Feature not available while offline ",
  MSR_FEATURE_NOT_AVAILABLE_MESSAGE : "Please establish a wireless connection to perform this feature on this device ",
  FEATURE_NOT_AVAILABLE_MESSAGE : "Please establish a wireless connection to view images, documents, and to print on this device ",
  DELETE_ARE_YOU_SURE : "Are you sure? ",
  DELETE_ARE_YOU_SURE_MESSAGE : "Please confirm if you’d like to delete this file. Any changes you make will be reflected in the system when a working connection is made. ",
  SYNC_INCOMPLETE : "Sync Incomplete",
  SYNC_INCOMPLETE_MESSAGE : "The device can’t find an active network connection. Please ensure a working network connection is available and try syncing again."
};

var setPatientDemographicsIpad = function(){
  changeConnectionStatus(isNetworkAvailable());
  com.healogics.patientSummary.setPatientDemoGraphics(patientSummaryObjects.patientDemoGraphics);
};


var showCustomPopup = function(title, message){
  popupCustomOne.lblHeader.text = title;
  popupCustomOne.lblmessage.text = message;
  popupCustomOne.show();
};


var startManualSync = function(){

};

var pqcrBtnCLicked = function(){
  if (isIpad && SYNC_CONSTANTS.isAppOffline){
    showCustomPopup(syncMessageConstants.FEATURE_NOT_AVAILABLE, syncMessageConstants.FEATURE_NOT_AVAILABLE_MESSAGE);
  }
};

var iPadNetworkConfig = {};

iPadNetworkConfig.statusChange = function (isOnLine)
{

  kony.print("iPadNetworkConfig.statusChange:::"+isOnLine);
  var currentfrm=kony.application.getCurrentForm();
  
  if(!currentfrm){
    currentfrm = frmLogin;
  }
  kony.print("currentfrom----------"+currentfrm);

  if((isIpad || isIphone) && isOnLine)
  {
    changeConnectionStatus(isOnLine);
    SYNC_CONSTANTS.isAppOffline = false;
    
    if(currentfrm.id!="frmLogin" && currentfrm.id!="frmSelectFacility" )	
    {
      currentfrm.fcmstfooter.rcfooter.left = "25dp";
      if(isIphone){
        currentfrm.fcmstfooter.rcfooter.text ="Version: "+appConfig.appVersion;
      }else{
        currentfrm.fcmstfooter.rcfooter.text = "Version: "+ appConfig.appVersion+"    &copy; All Rights Reserved."; 
      }
    }

    if(currentfrm.id!="frmLogin" && currentfrm.id!="frmSelectFacility" && currentfrm.id!="frmSwitchFacility" ){
      SYNC_CONSTANTS.isSyncInProgress = true;
      ///Delta Download will now call same function as first time - Akshay
      com.healogics.utility.showLoading("Updating Data!"); 
      modSyncScopes_offline_initialAndDeltaScopes();///only for delta
      syncInitialDownload(sync_autoSuccessCallback, sync_autoErrorCallBack);////Display popup message
    }
  }
  else
  {
    if(currentfrm.id!="frmLogin" && currentfrm.id!="frmSelectFacility")		
    {
      currentfrm.fcmstfooter.rcfooter.left = "25dp";
      if(isIpad){
        currentfrm.fcmstfooter.rcfooter.text = "Version: "+ appConfig.appVersion+"    &copy; All Rights Reserved." +"                     You are in offline mode; any changes made will be saved to the server when a connection is available.";
      }else if(isIphone){
        currentfrm.fcmstfooter.rcfooter.text = "Version: "+ appConfig.appVersion+"    You are in offline mode; any changes made will be saved to the server when a connection is available.";
      }else{
        currentfrm.fcmstfooter.rcfooter.text = "Version: "+ appConfig.appVersion+"    &copy; All Rights Reserved.";
      }
    }

    changeConnectionStatus(!isOnLine);
    SYNC_CONSTANTS.isAppOffline = true;
  }
};

kony.net.setNetworkCallbacks(iPadNetworkConfig);

var changeConnectionStatus = function(isOnLine){
  //kony.print("changeConnectionStatus::::onlineStatus::::"+isOnLine);
  kony.print("kony.net.isNetworkAvailable::::"+isNetworkAvailable());
  var currentform = kony.application.getCurrentForm();
  kony.print("currentform::::"+ currentform.id);
  
  // //CO-666 changes   currentForm.id === "frmPatientTestResults" ||
  if ((isIpad || isIphone)&& (currentform.id === "frmPatientTestResults" || currentform.id == "frmPatientDetails" || currentform.id == "frmWCCDashboard" || currentform.id == "frmPatientList" ||currentform.id == "frmPatientSummary" || currentform.id == "frmPatientRecords"|| currentform.id == "frmViewTasksNew" || currentform.id == "frmConflictResolve")){
    kony.print("inside currentform & ipad check::::");
    currentform.btnConnected.setEnabled(false);
    if(isNetworkAvailable()){

      //In order to connect to the MF in case, the app started in offline without MF being Initialized.
      if (! com.healogics.mfutility.mfConnected()) {
        kony.print("com.healogics.mfutility.mfConnected() ::::"+ com.healogics.mfutility.mfConnected());  
        com.healogics.mfutility.mfInit();
      }
      currentform.btnConnected.text = "Connected";
      currentform.btnConnected.skin = "skbtnonforestgreen";
      if(currentform.id !== "frmConflictResolve"){
        //CO-346
        //currentform.btnSyncNow.setVisibility(true);
      }
      if(currentform.id == "frmPatientSummary"){
      }
      kony.print("Network available::::");
    }else{
      currentform.btnConnected.text = "Offline";
      currentform.btnConnected.skin = "skbtnoffcrimsonred";
      //CO-346
      //currentform.btnSyncNow.setVisibility(false);
      if(currentform.id == "frmPatientSummary"){
      }
      if(SYNC_CONSTANTS.isSyncInProgress == true){
        SYNC_CONSTANTS.isSyncInProgress = false;
        sync_autoErrorCallBack();
      }
      kony.print("Network not available::::");
    }    
  }
};

///callbacks for Automatic Sync Only
function sync_autoSuccessCallback(){
  ///Akshay - correcting the flag
  SYNC_CONSTANTS.isSyncSuccess = true;
  SYNC_CONSTANTS.isSyncInProgress = false;

  showLastSync();///display the last Sync Time on screen

  kony.print("sync_autoSuccessCallback for Conflict Function----->");
  ////Akshay - for getting conflict in offline to online sync
  //   resolveConflict_cntrl_offline_getCurrentConflictCount();
  sync_9HealingStepSuccessCallback();

  ///display the popup on screen

  var currentForm = kony.application.getCurrentForm().id;
  kony.print("sync_autoSuccessCallback current form ---->"+currentForm);
  if(currentForm == "frmConflictResolve"){
    frmConflictResolve.btnresolvenext.setEnabled(false);
    frmConflictResolve.btnresolvenext.skin = "skngraybgbold";

    taskListModule.formBackHandler();
  }else{
    dismissLoadingScreen();
    popupSyncIncomplete.lblHeader.text = syncMessageConstants.SYNC_COMPLETE;
    popupSyncIncomplete.lblmessage.text = syncMessageConstants.SYNC_COMPLETE_MESSAGE;
    popupSyncIncomplete.show();
  }
}

function sync_autoErrorCallBack(){
  ///Akshay - correcting the flag
  SYNC_CONSTANTS.isSyncSuccess = false;
  SYNC_CONSTANTS.isSyncInProgress = false;

  var currentForm = kony.application.getCurrentForm().id;
  if(currentForm == "frmConflictResolve"){
    frmConflictResolve.btnresolvenext.setEnabled(false);
    frmConflictResolve.btnresolvenext.skin = "skngraybgbold";
  }

  dismissLoadingScreen();
  popupSyncIncomplete.lblHeader.text = syncMessageConstants.SYNC_INCOMPLETE;
  popupSyncIncomplete.lblmessage.text = syncMessageConstants.SYNC_INCOMPLETE_MESSAGE;
  popupSyncIncomplete.show();

}

//Constants used for idleTimeout issue inIpad
var idleTimeoutConstants = {
  timeAtBackground: 0,  //used to capture device time when application enters background mode
  timeAtForeground: 0,	//used to capture device time when application enters foreground mode
  minutes: 0, 			//for passing minutes remaining to setClock method to resume the timer when application comes to foreground
  seconds: 0,			//for passing seconds remaining to setClock method to resume the timer when application comes to foreground
  timeCompletedinPopup:"", // To get the time which is already completed when popup is displayed after idletimeout
  didTimerStartAfterIdleTimeout: false, 
  remainingTimeFlow: false, //flag used to check whether time is left or not
  clear: function(){
    timeAtBackground = 0;
    timeAtForeground = 0;
    didTimerStartAfterIdleTimeout = false;
    minutes = 0;
    seconds = 0;
  }
};

//*********************************************************//
//APPLICATION CALLBACKS
//*********************************************************//

//onactive function 
function test(){
  kony.print("===============Test executed=======");
}


//onbackground function 
function iPadOnEnteringBackground(){
  kony.print("===============iPadOnEnteringBackground=======");
  idleTimeoutConstants.timeAtBackground = getDeviceCurrentTime();
  kony.print("--------->idleTimeoutConstants.timeAtBackground"+idleTimeoutConstants.timeAtBackground);
}

//onforeground function
function iPadOnEnteringForeground(){
  kony.print("===============iPadOnEnteringForeground=======");
  idleTimeoutConstants.timeAtForeground = getDeviceCurrentTime();
  kony.print("--------->idleTimeoutConstants.timeAtForeground"+idleTimeoutConstants.timeAtForeground);
  try{
    if(idleTimeoutConstants.didTimerStartAfterIdleTimeout && idleTimeoutConstants.timeCompletedinPopup!=null && idleTimeoutConstants.timeCompletedinPopup!=""){

      //getting the remaining time from popup which is already running
      var remainingSeconds = parseInt(idleTimeoutConstants.timeCompletedinPopup.substring(0,2))*60 + 
          parseInt(idleTimeoutConstants.timeCompletedinPopup.substring(3,5));
      //getting the time elapsed between application entering the background and foreground
      var differenceInTime = Math.floor((idleTimeoutConstants.timeAtForeground-idleTimeoutConstants.timeAtBackground)/(1000));
      kony.print("--------->differenceInTime"+differenceInTime);

      //time has passed 5 min condition(logging out the user)
      if((remainingSeconds - differenceInTime) <= 0){
        idletimeoutcallback(); 
      }else{
        idleTimeoutConstants.remainingTimeFlow = true;
        idleTimeoutConstants.minutes = Math.floor((remainingSeconds - differenceInTime)/60);
        kony.print("--------->on foreground idleTimeoutConstants.minutes"+idleTimeoutConstants.minutes);
        idleTimeoutConstants.seconds = (remainingSeconds - differenceInTime) - idleTimeoutConstants.minutes*60;
        kony.print("--------->on foreground idleTimeoutConstants.seconds"+idleTimeoutConstants.seconds);
        setClock();
      } 
    }
    idleTimeoutConstants.clear();
  }catch(err){
    idleTimeoutConstants.clear();
    kony.print("===============iPadOnEnteringForeground======="+err);
  }

}

//setcallbackfunction
function setCallBacks(){
  kony.print("===============setApplicationCallbacks executed=======");
  var callbacksObj = {onactive:test,oninactive:test,onbackground:iPadOnEnteringBackground,onforeground:iPadOnEnteringForeground,onappterminate:test};
  kony.application.setApplicationCallbacks(callbacksObj);
  
  //For Offline notifications to be visible on login screen
  var deviceRegisteredForPush = kony.store.getItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH);
  if(deviceRegisteredForPush!=null && deviceRegisteredForPush == true){
    pushNotification_registerDeviceForPushNotifications();
  }
    
}


