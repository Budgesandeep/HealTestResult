/*
*Name: modLogin.js
*Purpose: For Login and AppList funtionality (Service calls & Integration)
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer          Comments
*---------------------------------------------------------------------------
* 12/19/2016        492306             Validations/Integration Logic
*
*
*/

var loginModule = {};
var kony_sdk_client = null;
var authClient = null;
var devicetype_input;
var selectfacilityId;
var selectLocationId;
var logcounter=0;
//For user authentation service call
loginModule.loginAuthentication1 = function(userName, password){  
  
  userInfo.clear();
  
  devicetype_input = getDeviceType();
  userInfo.userName = userName;
  userInfo.password = password;
  
  var inputData = {
    "userName" : userName,
    "password" : password,
    "deviceType":devicetype_input,
  };

  com.healogics.mfutility.invokeIntegrationService(

    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_USERLOGIN,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken
    },
    inputData,
    loginModule.userLoginSuccessCallback,
    loginModule.userLoginFailureCallback,
    false
  );
};

/************************************************************************************
* For Offline Authentication check.
*************************************************************************************/


loginModule.offlineLoginAuthentication = function(userName, password){  
    
  var checkIfUserExist = login_cntrl_offline.checkIfUserExist(userName,password);
 kony.print("checkIfUserExist:" + JSON.stringify(checkIfUserExist));
  
  if( !com.healogics.utility.isEmpty(checkIfUserExist) && checkIfUserExist.count == 1){
     ///got the value in the local dict.
     //userInfo.clear();
      var offlineUserInfo = login_cntrl_offline.fetchLoginDataByUserName(userName);
        kony.print("offlineUserInfo:" + JSON.stringify(offlineUserInfo));

//       alert("offlineUserInfo Value Returned from Local PLIST -> "+JSON.stringify(offlineUserInfo));
          //userInfo.clear();          
          userInfo.userName = offlineUserInfo[0]._userName;
          userInfo.userId = offlineUserInfo[0]._userId;
          userInfo.loginDate = offlineUserInfo[0]._timestamp;
          userInfo.loginTime = offlineUserInfo[0]._timestamp;
//           userInfo.accessToken = offlineUserInfo[0]._accessToken;
          userInfo.headerAccessToken = offlineUserInfo[0]._accessToken;///HEADER SERVICE CHANGES
          userInfo.role=offlineUserInfo[0]._role;
          userInfo.roles=offlineUserInfo[0]._roles;
    	  userInfo.presentFacilityId = offlineUserInfo[0]._lastLoginFacilityId;///Akshay - TO SAVE LAST SELECTED FACILITY

        ///for top screen header user full name - Akshay
    userInfo.fullName = offlineUserInfo[0]._firstName + " " + offlineUserInfo[0]._lastName;

    
    var facilities = facilityList_cntrl_offline.getAllFacilityListForUserID(userInfo.userId);
      kony.print("Offline FacilitY List:::"+facilities);

   
    var enabledFacilities = [];
    var k=0;
        for(var i=0; i<facilities.length; i++){
         if(facilities[i].externalSystems!=null && facilities[i].externalSystems.length > 0){
           
           kony.print("inside externalSystems check i:::"+i);
          for(var j=0; j<facilities[i].externalSystems.length; j++){
            if(facilities[i].externalSystems[j].name == "Wound360" && (facilities[i].externalSystems[j].enabled != "false" && facilities[i].externalSystems[j].enabled != false )){
              kony.print("inside externalSystems !false i::: "+i)
              enabledFacilities[k++] = facilities[i];
            }
           }
          }else{
            kony.print("outside externalSystems i::: "+i)
            enabledFacilities[k++] = facilities[i];
          }
        }
    
    //enabledFacilities = facilities;
    if(enabledFacilities  !== null && enabledFacilities.length  > 0 ){
       	userInfo.facilityList = enabledFacilities; 

      ///FOR GETTING TIMESTAMP
      userInfo.timezone = facilities.timeZone;///AKSHAY

      // offline changes only need to check with condition for this
      userInfo.userPassword = offlineUserInfo[0]._password;
      switchFacility_module.setFacilityData();
    }
    else{///userName and Passwords entered do not match - show an alert
          frmLogin.lbluseriderror.text = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
          frmLogin.fcloginerror.setVisibility(true);
          frmLogin.forceLayout();
      }
    }else{
      frmLogin.lbluseriderror.text = ERROR_CONSTANTS.NO_OFFLINE_DATA_FOR_ENTERED_USERNAME;
      frmLogin.fcloginerror.setVisibility(true);
      frmLogin.forceLayout();
      com.healogics.utility.dismissLoading();
  }
};




loginModule.loginAuthentication = function(userName, password) {
  com.healogics.utility.showLoading();
  devicetype_input = getDeviceType();
  var providerName = MF_CONSTANTS.providerName; //"UserAuthentication"; //"HealogicsIDMLogin";//UserAuthentication

  try {
    kony_sdk_client = kony.sdk.getCurrentInstance();
    authClient = kony_sdk_client.getIdentityService(providerName);  //KNYMobileFabric.getIdentityService(providerName);

  } catch (exception) {
    kony.print("Exception invoking getIdentityService" + JSON.stringify(exception));
  }
  var loginOptions = {};
  loginOptions.isSSOEnabled = false;

  //loginOptions.continueOnRefreshError = true;
  //loginOptions.persistLoginResponse = true;

  kony.print("authClient in login: "+JSON.stringify(authClient));

  
  authClient.login({
    "userName": userName,
    "password": password,
    "deviceType":devicetype_input,
    "include_profile": true,
    "loginOptions": loginOptions
    
  }, function(response) {
    kony.print("Login success:::" + JSON.stringify(response));

    var forceFromServer = true;

    authClient.getUserAttributes(
      function(response2) {
        kony.print("User profile 1is  :" + JSON.stringify(response2));
        

        response2.userId = response2.user_id;

        //response2.roles = response2["roles"];
        response2.facilities = response2["facilitiesList"]; //response2["facilities"];

     
        kony.print("response2:::"+JSON.stringify(response2));
        
        if(!isIpad && !isIphone){
          kony.store.setItem("userName", userName);
          kony.store.setItem("password", password);
        }
        
        kony.store.removeItem("isretrylogin");
        //moreFacilitiesAvailable 
		
        if(response2.moreFacilitiesAvailable!=null &&  response2.moreFacilitiesAvailable == "true"){
          kony.print("response2.moreFacilitiesAvailable ----- "+response2.moreFacilitiesAvailable);
          userInfo.idenityResponse = response2;
          userInfo.userId = response2.userId;
          userInfo.encrypteduserId  = response2.encrypteduserId;
          userInfo.headerAccessToken = "Bearer "+response2.accessToken;
          loginModule.getUserFacilityList();
        }
        else{
          kony.print("response2.moreFacilitiesAvailable ----- "+false);
          loginModule.userLoginSuccessCallback(response2);
        }
        
        
        //com.healogics.utility.dismissLoading();

      }, function(error) {
        kony.print("Failed to fetch profile : " + JSON.stringify(error));
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE; 

        frmLogin.lbluseriderror.text = error_label;
        frmLogin.fcloginerror.setVisibility(true);
        frmLogin.forceLayout();
        com.healogics.utility.dismissLoading();
       
      }
    );

  }, function(error) {
    kony.print("Login failure::::" + JSON.stringify(error));
    
    //var isNetworkAvailable = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    kony.print("identity failure -- isIpad -- isNetworkAvailable():::"+isIpad +"----"+isNetworkAvailable());
    
    if((isIpad || isIphone) && !isNetworkAvailable()){
      SYNC_CONSTANTS.isAppOffline = true;
      frmLogin.fcloginerror.setVisibility(false);
      loginModule.offlineLoginAuthentication(userName, password);
    }else{
      var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE; 

      frmLogin.lbluseriderror.text = error_label;
      frmLogin.fcloginerror.setVisibility(true);
      frmLogin.forceLayout();
      com.healogics.utility.dismissLoading();
    }
    
    

    
  });



};

loginModule.getUserFacilityList = function(){
  
  //com.healogics.utility.showLoading();

  var inputData = {
    "userId" : userInfo.userId
  };

  
  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_FACILITYLIST,
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
    loginModule.getUserFacilityListSuccessCallback,
    loginModule.userLoginFailureCallback,
    false
  );
  
  //loginModule.userLoginSuccessCallback(userInfo.idenityResponse);
}

loginModule.getUserFacilityListSuccessCallback = function(response){
  kony.print("inside getUserFacilityListSuccessCallback start::"+JSON.stringify(response));

  if(response!==null && response.opstatus == 0 && response.facilitiesList!=null && response.facilitiesList.length>0  ){
    userInfo.idenityResponse.facilities = response.facilitiesList;
  }

  loginModule.userLoginSuccessCallback(userInfo.idenityResponse);

  com.healogics.utility.dismissLoading();
}



//For user authentation credentials validation
loginModule.ValidateCredentials = function(){

  var userName = frmLogin.txtusername.text;
  var password = frmLogin.txtpassword.text;  

  kony.print("userName:::"+userName);
  kony.print("password:::"+password);

  var showError = false;
  var error_label = "";
  try{

    userName = userName.trim();
    password = password.trim();
    if(com.healogics.utility.isEmpty(userName)){
      showError = true;
//       error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;  
      error_label = "";    
    }else if(com.healogics.utility.isEmpty(password)){    
      showError = true;
//       error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE; 
      error_label = "";    
    } /*else if(!com.healogics.utility.validateUserID(userName) || !com.healogics.utility.validatePassword(password)){
      showError = true;
      error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;   
    } */
  }catch(err){
    showError = true;
    error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE; 
  }


  if(showError){
    frmLogin.lbluseriderror.text = error_label;
    frmLogin.fcloginerror.setVisibility(true);
    frmLogin.forceLayout();
  }else{
    ////OFFLINE CHECK////  
    //Check Network state
    //var isNetworkAvailable = isNetworkAvailable();
    kony.print("isIpad -- isNetworkAvailable:::"+isIpad +"----"+isNetworkAvailable());
    
    if(isNetworkAvailable()){
      	if(isIpad || isIphone){
          SYNC_CONSTANTS.isAppOffline = false;
        }
        frmLogin.fcloginerror.setVisibility(false);
      	//CO-346
    	loginModule.loginAuthentication(userName, password);
      	//loginModule.rollBackClientData(userName, password);
    }
    //CO-346
    /*else if((isIpad || isIphone)){
      	SYNC_CONSTANTS.isAppOffline = true;
        frmLogin.fcloginerror.setVisibility(false);
    	loginModule.offlineLoginAuthentication(userName, password);
    }*/
    else{
      frmLogin.lbluseriderror.text = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
      frmLogin.fcloginerror.setVisibility(true);
      frmLogin.forceLayout();
      com.healogics.utility.dismissLoading();
    }
  }
};

loginModule.rollBackClientData = function(userName, password){
  
  kony.print("loginModule.rollBackClientData start");
  var previousSyncTime = kony.store.getItem("userSyncTime");
  
  if(previousSyncTime!=null){
    var curentTime = getDeviceCurrentTime();
    var daysSinceLastSync = (curentTime-previousSyncTime)/(1*24*60*60*1000);
    //var daysSinceLastSync = (curentTime-previousSyncTime)/(1*60*1000); // to test for 3 min (gives 1 min delay here but comparison for 3 min down)
    
    kony.print("loginModule.rollBackClientData curentTime:::"+curentTime);
    kony.print("loginModule.rollBackClientData previousSyncTime:::"+previousSyncTime);
    kony.print("loginModule.rollBackClientData daysSinceLastSync:::"+daysSinceLastSync);
    
    if(daysSinceLastSync!=null && Number(daysSinceLastSync) >= SYNC_CONSTANTS.ROLLBACK_DURATION_INDAYS){
    //if(daysSinceLastSync!=null) {
      kony.print("loginModule.rollBackClientData inside rollback start --->");
      
      var rollbackCount = 0;
      
      function rollbackSuccessCallback()
      { 
        rollbackCount = rollbackCount+1;
        kony.print("loginModule.rollBackClientData inside rollback success --->"+rollbackCount);
        
        if(rollbackCount == 5){
          kony.store.removeItem("userSyncTime");
          loginModule.loginAuthentication(userName, password);
        }
        
      }

      function rollbackFailCallback(res)
      { 
        kony.print("loginModule.rollBackClientData inside rollback error ---> with Error Code:"+ JSON.stringify(res));
		rollbackCount = rollbackCount+1;
        kony.print("loginModule.rollBackClientData inside rollback error rollbackCount --->"+rollbackCount);
        if(rollbackCount == 5){
          //kony.store.removeItem("userSyncTime");
          loginModule.loginAuthentication(userName, password);
        }
      }
	  
      //sync.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    
      
        //com.healogics.offline.appListOffline.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
      	//com.healogics.offline.facilityList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
      	com.healogics.offline.getPatientRecords.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        com.healogics.offline.healingSubSteps.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //healingWounds.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
       // healingWoundSteps.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //healingWoundSubSteps.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //com.healogic.offline.msrList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        com.healogics.offline.notesList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
      	com.healogics.offline.tasksList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //com.healogic.offline.notes.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //objHealingStep.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //objHealingSubStep.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //objWounds.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        com.healogics.offline.offlinePhotoUpload.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //com.healogic.offline.patientInfo.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //com.healogic.offline.patientList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //com.healogics.offline.patientWounds2.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        
        //com.healogics.offline.termsAndConditions.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //com.healogics.offline.userMetrics.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        //com.healogics.offline.wccMetrics.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
        

    }else{
      
      kony.print("loginModule.rollBackClientData inside non rollback end --->");
      loginModule.loginAuthentication(userName, password);
    }
  }else{
    kony.print("loginModule.rollBackClientData inside first time call --->");
    loginModule.loginAuthentication(userName, password);
  }
};

//For user authentation failure callback
loginModule.userLoginFailureCallback =  function(response){
  userInfo.clear();

  showError = true;
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE; 

  if(response!==null && response.opstatus != 0 && response.errmsg != null){
    if(response.opstatus_login!=null && response.opstatus_login == 0 && 
       response.responsedesc == GENERAL_CONSTANTS.RESPONSE_UNAUTHORIZED){
      
      error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      
    }else if(response.errmsg != ERROR_CONSTANTS.RESPONSE_COMPOSITE_FAILURE_MESSAGE){      
      error_label = response.errmsg;
    }
    
  }

  frmLogin.lbluseriderror.text = error_label;
  frmLogin.fcloginerror.setVisibility(true);
  com.healogics.utility.dismissLoading();
  frmLogin.forceLayout();

};

//For user authentation success callback
loginModule.userLoginSuccessCallback =  function(response){


  kony.print("inside userLoginSuccessCallback start::"+JSON.stringify(response));
  
  if(response!==null && 
     ( (response.statuscode !=null && response.statuscode == 200 ) || ( response.responsecode !=null && response.responsecode == 0 ) ) 
     && (response.userName != null && response.userName != "null" && response.userName != "" && response.accessToken!=null && response.accessToken!="") 
    ){

    //userInfo.clear(); 
    
    userInfo.idenityResponse = null;

    userInfo.userName = response.userName;
    userInfo.userId = response.userId;
    userInfo.encrypteduserId = response.encrypteduserId;
    userInfo.loginDate = (response.time_stamp!=null && response.time_stamp!="") ? response.time_stamp : response.timestamp;
    userInfo.loginTime = (response.time_stamp!=null && response.time_stamp!="") ? response.time_stamp : response.timestamp;

    userInfo.accessToken = response.accessToken;
    userInfo.firstName = response.firstName;
    userInfo.lastName = response.lastName;
    userInfo.presentFacilityId = response.lastLoginFacilityId;
    userInfo.roles = response.roles;
    userInfo.headerAccessToken = "Bearer "+userInfo.accessToken;
    userInfo.masterToken=response.masterToken;
    userInfo.login_UIID = response.login_UIID;
    userInfo.userPatientRole = "";
    if(isIpad || isIphone){
		userInfo.deviceType = kony.os.deviceInfo().name +" - "+ kony.os.deviceInfo().model;
     } else {
        userInfo.deviceType = getDeviceType(); 
     }
  	userInfo.sessionId = kony.license.getSessionId();
    userInfo.version = kony.os.deviceInfo().version;
    
    ////Akshay - adding another userInfo attribute
    	userInfo.timestamp = (response.time_stamp!=null && response.time_stamp!="") ? response.time_stamp : response.timestamp;
    
      if(userInfo.firstName!=null && userInfo.firstName!="null"){

        if(userInfo.lastName!=null && userInfo.lastName!="null"){
          userInfo.fullName = userInfo.firstName+" "+userInfo.lastName;
        }else{
          userInfo.fullName = userInfo.firstName;
        }
      }
      
      
      for(var i=0; i<userInfo.roles.length; i++){ 
        userInfo.roleId = (i==0)? userInfo.roles[i] : userInfo.roleId+"#"+userInfo.roles[i];
        
        if((isIpad || isIphone) && userInfo.roles[i]!=null && (userInfo.roles[i].toLowerCase() == "clinician" || userInfo.roles[i].toLowerCase() == "physician")){
          userInfo.userPatientRole = userInfo.roles[i];
        }
        
      }
      kony.print("response.facilities----->>>>>"+response.facilities);
    var enabledFacilities = [];
	if (! com.healogics.utility.isEmpty(response.facilities)){
      enabledFacilities = response.facilities;
    }
   
    if(enabledFacilities  !== null && enabledFacilities.length  > 0 ){
       	userInfo.facilityList = enabledFacilities; 
      
        // offline changes only need to check with condition for this
    	userInfo.userPassword = frmLogin.txtpassword.text;
		  //CO-346      	
          //var checkIfUserExist = null;
          if(isIpad || isIphone){
            //CO-346
            //checkIfUserExist = login_cntrl_offline.checkIfUserExist(userInfo.userName,userInfo.userPassword);
            kony.print("push notifications call -- pushNotification_registerDeviceForPushNotifications")
            var deviceRegisteredForPush = kony.store.getItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH);
            if(!deviceRegisteredForPush)
            	pushNotification_registerDeviceForPushNotifications();
          }
      	  //CO-346
          //Delete data if Exist and Insert It back
          /*if(checkIfUserExist!=null && checkIfUserExist.count === 1){///if the DB has the value this will not be NULL.
            
              login_cntrl_offline.deleteRecordByUserName(userInfo.userName);
              login_cntrl_offline.insertOfflineLoginInfo();
              facilityList_cntrl_offline.deleteRecordByUserId(userInfo.userId);
              facilityList_cntrl_offline.insertOfflineFacilityList();
           
            	kony.print("deepLinkInfo.isDeepLinkFlow:::"+deepLinkInfo.isDeepLinkFlow)
              
				kony.print("deepLinkInfo.isDeepLinkFlow2:::"+deepLinkInfo.isDeepLinkFlow)
//                 if(userInfo.facilityList!=null && userInfo.facilityList.length == 1){
//                   userInfo.presentFacilityId = userInfo.facilityList[0].facilityId;
//                   userInfo.selectedFacilityId = userInfo.facilityList[0].facilityId;
//                   userInfo.syncFacilityId = userInfo.facilityList[0].facilityId;
//                   switchFacility_module.updateFacility();
//                 }else{
                  switchFacility_module.setFacilityData();
                //}
              
            }
          else{
            if(isIpad || isIphone){
              login_cntrl_offline.insertOfflineLoginInfo();
              facilityList_cntrl_offline.insertOfflineFacilityList();
            }*/
            if(deepLinkInfo.isDeepLinkFlow){

              kony.print("deepLinkInfo.isDeepLinkFlow1:::"+deepLinkInfo.isDeepLinkFlow)
              deepLinkInfo.facilityID = response.facilityId;
              deepLinkInfo.patientID = response.patientId;
              userInfo.presentFacilityId = response.facilityId;
              userInfo.selectedFacilityId = response.facilityId;
              switchFacility_module.updateFacility();

            }else if(deepLinkInfo.isRefreshFlow){
              com.healogics.utility.showLoading();
              var facilityId = kony.store.getItem("facilityId");
              
              kony.print("deepLinkInfo.isRefreshFlow:::"+deepLinkInfo.isRefreshFlow)
              deepLinkInfo.facilityID = facilityId;
              //deepLinkInfo.patientID = patientId;
              userInfo.presentFacilityId = facilityId;
              userInfo.selectedFacilityId = facilityId;
              switchFacility_module.updateFacility();
              
            }else{
              kony.print("deepLinkInfo.isDeepLinkFlow2:::"+deepLinkInfo.isDeepLinkFlow)
              if((!isIpad && !isIphone) && userInfo.facilityList!=null && userInfo.facilityList.length == 1){
                userInfo.presentFacilityId = userInfo.facilityList[0].facilityId;
                userInfo.selectedFacilityId = userInfo.facilityList[0].facilityId;
                userInfo.presentFacilitybluebookid=userInfo.facilityList[0].facilityBluebookId;
                userInfo.syncFacilityId = userInfo.facilityList[0].facilityId;
                switchFacility_module.updateFacility();
              }else{
                switchFacility_module.setFacilityData();
              }
            }
      	  //CO-346
          //}
      
         // com.healogics.utility.dismissLoading();

      
    }else{
      
      frmLogin.lbluseriderror.text = ERROR_CONSTANTS.LOGIN_FACILITY_LIST_EMPTY;
      frmLogin.fcloginerror.setVisibility(true);
      kony.print("inside facility list empty else end::");  
      if(deepLinkInfo.isDeepLinkFlow){
        deepLinkInfo.clear();
        frmLogin.show();
      }
      frmLogin.forceLayout();
    }

  }else{
    //var error_label = response.responsedesc !="" ? response.responsedesc : ((response.errdesc !=null && response.errdesc!="") ? response.errdesc : response.errorMessage);
    
    var error_label = (response.errorMessage!== null && response.errorMessage !== "") ? response.errorMessage : ((response.errdesc !== null && response.errdesc!== "") ? response.errdesc : response.responsedesc);

    kony.print("error_label:::::"+error_label);
    if(com.healogics.utility.isEmpty(error_label)){
      error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
    }
    frmLogin.lbluseriderror.text = error_label;
    frmLogin.fcloginerror.setVisibility(true);
    kony.print("inside userLoginSuccessCallback else end::");  
    if(deepLinkInfo.isDeepLinkFlow){
      deepLinkInfo.clear();
      frmLogin.show();
    }
    frmLogin.forceLayout();
  }
  
      com.healogics.utility.dismissLoading();


};


//For user functionalities List processing
loginModule.processUserAppList = function(response){
  kony.print("inside processUserAppList start response::"+JSON.stringify(response));
  kony.print("inside processUserAppList start ::"+kony.application.getCurrentForm().id);
  kony.print("inside helpdesknumber start response::"+JSON.stringify(userInfo));
  
 // if("frmLanding" != kony.application.getCurrentForm().id){
 //   frmLanding.destroy();

  //   var response = landing_data();
    userInfo.taskCount = response.taskCount;///AKSHAY - SHOULD NOT BE READ FROM THE APPLIST
    userInfo.helpdeskNumber = (response.helpDeskNumber !== null && response.helpDeskNumber !== "" && response.helpDeskNumber !== "null") ? response.helpDeskNumber : userInfo.helpdeskNumber;
    userInfo.appList = response.appList;
    userInfo.loginDate = (response.time_stamp!== null && response.time_stamp!== "") ? response.time_stamp : response.timestamp;
    userInfo.loginTime = (response.time_stamp!== null && response.time_stamp!== "" && response.time_stamp !== undefined) ? response.time_stamp : response.timestamp;


    function compare(a,b) {
      if (parseInt(a.appid) < parseInt(b.appid))
        return -1;
      if (parseInt(a.appid) > parseInt(b.appid))
        return 1;
      return 0;
    }

    userInfo.appList.sort(compare);

    kony.print("inside processUserAppList appList::"+JSON.stringify(userInfo.appList));

    var i=0; 



    var disableAppIcons = function(i){

      kony.print("i value being disabled::"+i);

      var y = parseInt(userInfo.appList[i].appid)-1;

      kony.print("appId value being disabled::"+y);
  //     if(!isIpad){
  //    	 frmLanding[userApps.landingIcons[y]].onClick = loginModule.doNothing();
  //     }
  //     frmLanding[userApps.landingIcons[y]].hoverSkin = frmLanding[userApps.landingIcons[y]].skin;
  //     frmLanding[userApps.landingIcons[y]].focusSkin = frmLanding[userApps.landingIcons[y]].skin;


    };

    var tileCount = 0;
    var rowCount = 0;




    var rowSections = ["fcrowone", "fcrowtwo", "fcrowthree"];


    var rowSectionscopy = ["fcrowonecopy", "fcrowtwocopy", "fcrowthreecopy"];

    while(i < userApps.totalApps){

      var enabledFlag = userInfo.appList[i].enabledFlag;
      var displayFlag = userInfo.appList[i].displayFlag;
      var appId = parseInt(userInfo.appList[i].appid);

      kony.print("i:::"+i+"---appId:::"+appId+"---displayFlag:::"+displayFlag+"---enabledFlag:::"+enabledFlag);

      if(displayFlag != null && displayFlag == "Y"){

        
          kony.print("rowCount:::"+rowCount+"---userApps.landingIcons[i]:::"+userApps.landingIcons[i]+"---tileCount:::"+tileCount);

        kony.print("rowSectionscopy[rowCount]:::"+rowSectionscopy[rowCount]);

        var tilePosition = tileCount % 4;
        frmLanding[rowSectionscopy[rowCount]].removeAt(tilePosition);
        frmLanding[rowSectionscopy[rowCount]].addAt(frmApps[userApps.landingIcons[i]], tilePosition);

        
        if(enabledFlag !=null && enabledFlag != "Y"){
          
          kony.print("i-----"+i+"-----"+userApps.landingIcons[i])
          frmLanding[userApps.landingIcons[i]].hoverSkin = frmApps[userApps.landingIcons[i]].skin;
          frmLanding[userApps.landingIcons[i]].focusSkin = frmApps[userApps.landingIcons[i]].skin;
          frmLanding[userApps.landingIcons[i]].setEnabled(false);
        }else{
          frmLanding[userApps.landingIcons[i]].hoverSkin = frmApps[userApps.landingIcons[i]].skin+"hover";
          frmLanding[userApps.landingIcons[i]].focusSkin = frmApps[userApps.landingIcons[i]].skin+"hover";
          frmLanding[userApps.landingIcons[i]].setEnabled(true);
          if(i==3){
             frmLanding.btnSystemNotification.onClick = frmNotificationDashboard_show;
             frmLanding[userApps.landingIcons[i]].onClick = frmNotificationDashboard_show;
          } 
        }

        if(tilePosition == 0){

          if(!isIpad){
            frmLanding[rowSectionscopy[rowCount]][userApps.landingIcons[i]].centerX = "30%";
          }else{
            frmLanding[rowSectionscopy[rowCount]][userApps.landingIcons[i]].centerX = "23.5%";
          }
          frmLanding[rowSectionscopy[rowCount]][userApps.landingIcons[i]].left = "10dp";
        }else{
          frmLanding[rowSectionscopy[rowCount]][userApps.landingIcons[i]].left = "10dp";
          frmLanding[rowSectionscopy[rowCount]][userApps.landingIcons[i]].centerX = null;
        }





       tileCount = tileCount+1;

        kony.print("tileCount:::"+tileCount);
        if( tileCount % 4 === 0){
          frmLanding[rowSectionscopy[rowCount]].forceLayout();
          rowCount = rowCount+1;
        }

      }
      
      i++;
    }

      frmLanding.fcrowone.setVisibility(false);
      frmLanding.fcrowtwo.setVisibility(false);
      frmLanding.fcrowthree.setVisibility(false);

    kony.print("userInfo appList i value:::"+i);

    kony.print("userInfo.appList---------->>>>>>>>>>"+JSON.stringify(userInfo.appList));
    if(userInfo.appList.length >= 16){
      userInfo.viewPatientList = userInfo.appList[1].enabledFlag == "Y" ? GENERAL_CONSTANTS.TEXT_TRUE : GENERAL_CONSTANTS.TEXT_FALSE;
      userInfo.acknowledgeMSR = userInfo.appList[11].enabledFlag == "Y" ? GENERAL_CONSTANTS.TEXT_TRUE : GENERAL_CONSTANTS.TEXT_FALSE;
      userInfo.facilityMetrics = userInfo.appList[12].enabledFlag == "Y" ? GENERAL_CONSTANTS.TEXT_TRUE : GENERAL_CONSTANTS.TEXT_FALSE;
      userInfo.userMetrics = userInfo.appList[13].enabledFlag == "Y" ? GENERAL_CONSTANTS.TEXT_TRUE : GENERAL_CONSTANTS.TEXT_FALSE;
      userInfo.viewAdministration = userInfo.appList[14].enabledFlag == "Y" ? GENERAL_CONSTANTS.TEXT_TRUE : GENERAL_CONSTANTS.TEXT_FALSE;
      userInfo.editAdminstration = userInfo.appList[15].enabledFlag == "Y" ? GENERAL_CONSTANTS.TEXT_TRUE : GENERAL_CONSTANTS.TEXT_FALSE;
    }

   if (userInfo.editAdminstration === "true") {
        frmLanding.btnSystemNotification.setVisibility(true);
    } else {
        frmLanding.btnSystemNotification.setVisibility(false);
    }
    
    frmLanding[rowSectionscopy[0]].forceLayout();
  popupnotification_getPushNotifications();
	//kony.print("HBO button properties----->"+JSON.stringify(frmLanding.btnSystemNotification));
    //kony.print("Patient button properties----->"+JSON.stringify(frmLanding.btnpatientsafety));

    if(deepLinkInfo.isDeepLinkFlow){
     if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_PATIENTSUMMARY_ACTION.toLowerCase()){

		kony.print("deepLinkInfo patientSummary ========>"+deepLinkInfo.patientID);
        //com.healogics.patientSummary.getPatientSummary(deepLinkInfo.patientID, "", "", true);
		com.healogics.patientSummary.patientSummarySuccessCallback(response);
      }else if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_TASKLIST_ACTION.toLowerCase()){
        kony.print("deepLinkInfo task list ========>"+deepLinkInfo.facilityID);
        taskListModule.getTaskList();
      }else if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_PATIENTRECORDS_ACTION.toLowerCase()){
        kony.print("deepLinkInfo patient records ========>"+deepLinkInfo.facilityID);
        patientSummaryObjects.patientDemoGraphics.patientId = deepLinkInfo.patientID;
        frmPatientRecords_showForm();
      }
      else if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_WCCDASHBOARD_ACTION.toLowerCase()){
        metrics_module.load_monthsdata();
        
      }else if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_ADMINFACILITY_ACTION.toLowerCase()){
        dashboard_showAdministration();
        
      }else {
        // if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_PATIENTLIST_ACTION.toLowerCase()){
        kony.print("deepLinkInfo patient list ========>"+deepLinkInfo.facilityID);
		//patientListModule.getAllPatientList1();
		patientListModule.patientListSuccessCallback(response);
      }
    }
    
      
    
	
};

//For user functionalities List/Side Menu processing
loginModule.processSideMenuList = function(){

  var i=0;
  var currentForm = kony.application.getCurrentForm();

  var sideMenuList = ["fcmenuitemone", "fcmenuitemtwo", 
                            "fcmenuitemthree", "fcmenufour",//"femenuitemfive", 
                            "fcmenusix", "fcmenseven", 
                            "fcmenueight", "fcmenunine", 
                            "fcmenuten", "fcmenueleven", "fcmenutwelve"];
  
  while(i < userInfo.appList.length){
    kony.print("i value:::"+i+"&&&"+userInfo.appList[i].displayFlag);
    var appId = parseInt(userInfo.appList[i].appid);

    kony.print("i value:::"+i+"&&&"+userInfo.appList[i].appid +":::"+userInfo.appList[i].enabledFlag);

    if(appId <= userApps.totalApps){  
		
      if(userInfo.appList[i].displayFlag != "Y"){
        kony.print("i value:::"+i+"&&&sideMenuList[i]:::"+sideMenuList[i]);
        
       // null check
        //currentForm.fcmenu[sideMenuList[i]].setVisibility(false);      
        if (! com.healogics.utility.isEmpty (currentForm.fcmenu[sideMenuList[i]])){
                currentForm.fcmenu[sideMenuList[i]].setVisibility(false);
        }      
        //currentForm.fcmenu.removeAt(parseInt(userInfo.appList[i].appid));
      }else if(currentForm.fcmenu !==null && userInfo.appList[i].enabledFlag != "Y"){
        kony.print("userApps.submenuIcons[i]:::"+userApps.submenuIcons[i])
        currentForm.fcmenu[userApps.submenuIcons[i]].setEnabled(false);
      }
    }
    i++;
  }
  
    //currentForm.fcmenu["fcmenutwelve"].setVisibility(false);//spotfire not in list
   if (userInfo.editAdminstration === "false"){
	currentForm.fcmenu["fcmenuitemthree"].setVisibility(false);
   }
  currentForm.fcmenu.forceLayout();
};

loginModule.doNothing = function(){
  kony.print("user clicked on disabled app");
};

//For user Logout service
loginModule.logoutUserService = function(){
   var currentForm = kony.application.getCurrentForm();
  if(currentForm.id==frmPatientList.id || currentForm.id==frmPatientSummary.id)
    {
     logcounter=1; 
    }
  popuplogout.dismiss();
  //jack's code
  if(!isIphone){
      loginModule.clearUserStoreItems(); //kony.store.clear();
  }

  
  try{
    var options = {};
    options["slo"] = false;

    authClient.logout(loginModule.userLogoutCallback, loginModule.userLogoutCallback, options);
    
  }catch(error){
    var inputData = {
      "accessToken" : userInfo.accessToken
    };

    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_LOGOUT,
      MF_SERVICECONSTANTS.OPERATION_NAME_LOGOUT,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken
      },
      inputData,
      loginModule.userLogoutCallback,
      loginModule.userLogoutCallback
    );
  }
};

//For user Logout service callback
loginModule.userLogoutCallback = function(response){

  kony.print("logout service response:::"+JSON.stringify(response));
  if(!isIphone){
      loginModule.clearUserStoreItems(); //kony.store.clear();
  }

  userInfo.clear();
  deepLinkInfo.clear();
  showError = true;
  var error_label = ERROR_CONSTANTS.LOGOUT_SUCCESS_MESSAGE; 

  loginModule.showLoginScreen(error_label);
  
};

//For Login screen show
loginModule.showLoginScreen = function(error_label){
  kony.print("logcounter after logout"+logcounter);
  frmLogin.lbluseriderror.text = error_label;
  frmLogin.fcloginerror.setVisibility(true);
  userInfo.clear();
 // patientListConstants.clear();
  frmLogin.txtusername.text="";
  frmLogin.txtpassword.text="";
  if(!isIphone){
    popupnotification.dismiss();
    popuppdfviewer.dismiss();
    popupImageViewer.dismiss();
    popupHTMLviewer.dismiss();
    popupSwitchFacility.dismiss();
    popupcreatetask.dismiss();
   // popuptaskcomplete.dismiss();
    popupUserAcknowledgement.dismiss();
    popupsortandfilter.dismiss();
    stopClock();
    frmLanding.destroy();
    frmWCCDashboard.destroy();
    frmViewTasksNew.destroy();
    frmPatientSummary.destroy();
    frmPatientRecords.destroy();
    if(!isIpad){
      frmAdmin.destroy();
      popupAlert.dismiss();
      popupAdminSearchby.dismiss();
      popupAdminSortFilter.dismiss();
    }
    kony.application.unregisterForIdleTimeout();
  }
  
  popupuploadstatus.dismiss();
  popuplogout.dismiss();
  
  frmLogin.forceLayout();
  frmSelectFacility.destroy();
  frmPatientList.destroy();
  frmLogin.show();
};

function frmLogin_forgotPasswordClick(){
  var userName = frmLogin.txtusername.text;
  if(com.healogics.utility.isEmpty(userName) || !com.healogics.utility.validateUserID(userName)){
    frmLogin.lbluseriderror.text = ERROR_CONSTANTS.FORGOTPASSWORD_ERROR_MESSAGE;
    frmLogin.fcloginerror.setVisibility(true);
    frmLogin.forceLayout();
    }else{
      frmLogin.fcloginerror.setVisibility(false);
      
      var strForgotUrl = "https://iheal.healogics.com/PublicPages/ResetPassword.aspx?UserName="+userName;

      if(appConfig.secureurl.indexOf("healogics-uat") >= 0 || appConfig.secureurl.indexOf("healogics-dev") >= 0){
        strForgotUrl = "https://ihealinternal.woundexpert.com/PublicPages/ResetPassword.aspx?UserName="+userName;
      }
      
      //window.open(strForgotUrl);
      kony.application.openURL(strForgotUrl);
    }
}

//==============authenticateByToken=================
//For user authentation service call
loginModule.loginAuthenticateByToken = function(){  
  

  
  kony.print("loginModule.loginAuthenticateByToken:::"+JSON.stringify(deepLinkInfo));



  var providerName = MF_CONSTANTS.providerName; //"UserAuthentication"; //"HealogicsIDMLogin";//UserAuthentication
  devicetype_input=getDeviceType();

  try {
    kony_sdk_client = kony.sdk.getCurrentInstance();
    authClient = kony_sdk_client.getIdentityService(providerName);  //KNYMobileFabric.getIdentityService(providerName);
  } catch (exception) {
    kony.print("Exception invoking getIdentityService" + JSON.stringify(exception));
  }
  var loginOptions = {};
  loginOptions.isSSOEnabled = false;

  //loginOptions.continueOnRefreshError = true;
  //loginOptions.persistLoginResponse = true;

  kony.print("authClient in appservie:::"+JSON.stringify(authClient));


  authClient.login({
    "authenticateToken" : deepLinkInfo.iHealAccessToken,
    "userId" : deepLinkInfo.iHealUserID,
    "deviceType":devicetype_input,
    "patientId" : deepLinkInfo.patientID,
    "facilityID" : deepLinkInfo.facilityID,

    "include_profile": true,
    "loginOptions": loginOptions
  }, function(response) {
    kony.print("Login success:::" + JSON.stringify(response));

    var forceFromServer = true;

    authClient.getUserAttributes(
      function(response2) {
        kony.print("User profile 1is  :" + JSON.stringify(response2));
        userInfo.clear();


        kony.print("User profile 1is  :" + JSON.stringify(response2));


        response2.userId = response2.user_id;

        //response2.roles = response2.roles; // resultJson["roles"];

        response2.facilities = response2.facilitiesList; // resultJson["facilities"];

        kony.print("response2:::"+JSON.stringify(response2));

        //loginModule.userLoginSuccessCallback(response2);

		if(response2.moreFacilitiesAvailable!=null &&  response2.moreFacilitiesAvailable == "true"){
          kony.print("response2.moreFacilitiesAvailable ----- "+response2.moreFacilitiesAvailable);
          userInfo.idenityResponse = response2;
          userInfo.userId = response2.userId;
          userInfo.encrypteduserId  = response2.encrypteduserId;
          userInfo.headerAccessToken = "Bearer "+response2.accessToken;
          loginModule.getUserFacilityList();
        }
        else{
          kony.print("response2.moreFacilitiesAvailable ----- "+false);
          loginModule.userLoginSuccessCallback(response2);
        }


      }, function(error) {
        kony.print("Failed to fetch profile : " + JSON.stringify(error));
      }
    );

  }, function(error) {
    kony.print("Login failure::::" + JSON.stringify(error));
    if(error!=null && error.opstatus!=null && (error.opstatus == 100 || error.opstatus == "100") ){

      kony.print("Login failure authenticateByToken 2: " + JSON.stringify(error));
    }
  });
  
};

loginModule.epicUser = function(){
  
  //Make a service call to send encode value to backend
  
  kony.print("Epic Flow");
  
  
  var providerName = MF_CONSTANTS.providerName; //"UserAuthentication"; //"HealogicsIDMLogin";//UserAuthentication
  devicetype_input=getDeviceType();
  var loginOptions = {};
  loginOptions.isSSOEnabled = false;

  try {
    kony_sdk_client = kony.sdk.getCurrentInstance();
    authClient = kony_sdk_client.getIdentityService(providerName);  //KNYMobileFabric.getIdentityService(providerName);
  } catch (exception) {
    kony.print("Exception invoking getIdentityService" + JSON.stringify(exception));
  }
  
  var inputData = {
    "instanceToken":deepLinkInfo.epicInstanceToken,
    "patientId":deepLinkInfo.patientID,
    "userLastName":deepLinkInfo.lastName,
    "userFirstName":deepLinkInfo.firstName,
    "blueBookId":deepLinkInfo.blueBookId,
    "facilityName":deepLinkInfo.facilityName,
    "userName":deepLinkInfo.userName,
    "facilityId":deepLinkInfo.facilityID,
    "userId":deepLinkInfo.epicUserID,
    "role":deepLinkInfo.role
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_USERLOGIN,
    MF_SERVICECONSTANTS.OPERATION_NAME_AUTHENTICATEBYTOKENEPIC,
    {
      "Content-Type":"application/json",
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    loginModule.userEpicLoginSuccessCallback,
    loginModule.userEpicLoginFailureCallback
  );
  
}

loginModule.userEpicLoginSuccessCallback = function(response){

  kony.print("inside userLoginSuccessCallback start::"+JSON.stringify(response));
  
  if(response!==null && 
     ( (response.statuscode !=null && response.statuscode == 200 ) || ( response.responsecode !=null && response.responsecode == 0 ) ) 
     && (response.userName != null && response.userName != "null" && response.userName != "" && response.accessToken!=null && response.accessToken!="") 
    ){

    //userInfo.clear(); 
    
    userInfo.idenityResponse = null;

    userInfo.userName = response.userName;
    userInfo.userId = response.userId;
    userInfo.encrypteduserId = response.encrypteduserId;
    userInfo.loginDate = (response.time_stamp!=null && response.time_stamp!="") ? response.time_stamp : response.timestamp;
    userInfo.loginTime = (response.time_stamp!=null && response.time_stamp!="") ? response.time_stamp : response.timestamp;
    userInfo.patientId = response.patientId;
    userInfo.accessToken = response.accessToken;
    userInfo.firstName = response.userFirstName;
    userInfo.lastName = response.userLastName;
    userInfo.presentFacilityId = response.facilityId;
    userInfo.selectedFacilityId = response.facilityId;
    userInfo.presentFacilityName = response.facilityName;
	userInfo.taskCount = response.taskCount;
    userInfo.roles = response.roles;
    userInfo.headerAccessToken = "Bearer "+userInfo.accessToken;
    

    userInfo.login_UIID = response.login_UIID;
    userInfo.userPatientRole = "";
    
    ////Akshay - adding another userInfo attribute
    	userInfo.timestamp = (response.time_stamp!=null && response.time_stamp!="") ? response.time_stamp : response.timestamp;
    
      if(userInfo.firstName!=null && userInfo.firstName!="null"){

        if(userInfo.lastName!=null && userInfo.lastName!="null"){
          userInfo.fullName = userInfo.firstName+" "+userInfo.lastName;
        }else{
          userInfo.fullName = userInfo.firstName;
        }
      }
    
  //com.healogics.utility.showLoading();
  devicetype_input = getDeviceType();
  var providerName = MF_CONSTANTS.providerName; //"UserAuthentication"; //"HealogicsIDMLogin";//UserAuthentication

  try {
    kony_sdk_client = kony.sdk.getCurrentInstance();
    authClient = kony_sdk_client.getIdentityService(providerName);  //KNYMobileFabric.getIdentityService(providerName);

  } catch (exception) {
    kony.print("Exception invoking getIdentityService" + JSON.stringify(exception));
  }
  var loginOptions = {};
  loginOptions.isSSOEnabled = false;

  //loginOptions.continueOnRefreshError = true;
  //loginOptions.persistLoginResponse = true;

  kony.print("authClient in login: "+JSON.stringify(authClient));

    kony.print("Login success:::" + JSON.stringify(response));

    var forceFromServer = true;
    
    if(deepLinkInfo.isDeepLinkFlow == true){
      
      patientListConstants.clearSortAndFilter();
      _operationName = MF_SERVICECONSTANTS.OPERATION_NAME_APPPATIENTSUMMARY;
		kony.print("deeplink AppPatientsummary call");
      inputData = {
        "accessToken" : userInfo.accessToken,
        "userName" : userInfo.userName,
        "userId":userInfo.userId,
        "timestamp":userInfo.loginTime,
        "oldFacilityId": userInfo.presentFacilityId,
        "facilityId":userInfo.selectedFacilityId,
        "timezone":"",
        "roleId":"",
        "roleIdList":"",
        "login_UIID" : userInfo.login_UIID,
        "userIdValue" : userInfo.userId,
        "patientId" : userInfo.patientId,
        "firstName" : "",
        "lastName" : "",
        "accessToken" : userInfo.accessToken,
        "no_of_weeks" : "12W",
        "wound_details" : "0",
      };
      
      _headerData = {
          "Content-Type":"application/json",
          "Authorization" : userInfo.headerAccessToken,
          "patientId" : userInfo.patientId,
          "facilityId" : userInfo.presentFacilityId,
          "userId" : userInfo.userId,
        };
  }
    
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
      _operationName,
      _headerData,
      inputData,
      com.healogics.patientSummary.patientSummarySuccessCallback,
      com.healogics.patientSummary.patientSummaryFailureCallback
    );

  }else{
    //var error_label = response.responsedesc !="" ? response.responsedesc : ((response.errdesc !=null && response.errdesc!="") ? response.errdesc : response.errorMessage);
    
    var error_label = (response.errorMessage!== null && response.errorMessage !== "") ? response.errorMessage : ((response.errdesc !== null && response.errdesc!== "") ? response.errdesc : response.responsedesc);

    kony.print("error_label:::::"+error_label);
    if(com.healogics.utility.isEmpty(error_label)){
      error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
    }
    frmLogin.lbluseriderror.text = error_label;
    frmLogin.fcloginerror.setVisibility(true);
    kony.print("inside userLoginSuccessCallback else end::");  
    if(deepLinkInfo.isDeepLinkFlow){
      deepLinkInfo.clear();
      frmLogin.show();
    }
    frmLogin.forceLayout();
  }
  
  com.healogics.utility.dismissLoading();
  
}

loginModule.userEpicLoginFailureCallback =  function(response){
  userInfo.clear();

  showError = true;
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE; 

  if(response!==null && response.opstatus != 0 && response.errmsg != null){
    if(response.opstatus_login!=null && response.opstatus_login == 0 && 
       response.responsedesc == GENERAL_CONSTANTS.RESPONSE_UNAUTHORIZED){
      
      error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      
    }else if(response.errmsg != ERROR_CONSTANTS.RESPONSE_COMPOSITE_FAILURE_MESSAGE){      
      error_label = response.errmsg;
    }
    
  }

  frmLogin.lbluseriderror.text = error_label;
  frmLogin.fcloginerror.setVisibility(true);
  com.healogics.utility.dismissLoading();
  frmLogin.forceLayout();

};

loginModule.clearUserStoreItems = function(){
 // var lSortAndFilterConstants = kony.store.getItem("sortAndFilterConstants");
 // kony.store.clear();
 // kony.store.setItem("sortAndFilterConstants", lSortAndFilterConstants);
}

function frmHome_loadingIndicator(){
  kony.timer.cancel("loadingTimer");
  kony.timer.schedule("loadingTimer",loadingIndicatorFunc, 0.3, true);
  //pageoffdot.png
  //pageondot.png
  var i=0;
  function loadingIndicatorFunc(){
	
    if((i%10 == 0) && !isNetworkAvailable()){
      kony.timer.cancel("loadingTimer");
      displayConfirmAlert("Network is not available. Please establish network connection and try again.", "Close", openAppWithLoginScreen);
    }
   i = i+1;
    if(frmHome.img1.src == "pageondot.png"){
      offdot(frmHome.img1);
      ondot(frmHome.img2);
      offdot(frmHome.img3);
    }else if(frmHome.img2.src == "pageondot.png"){
      offdot(frmHome.img1);
      offdot(frmHome.img2);
      ondot(frmHome.img3);
    }else{
      ondot(frmHome.img1);
      offdot(frmHome.img2);
      offdot(frmHome.img3);
    }
    
  }
  
  function offdot(img){
    img.src = "pageoffdot.png";
    img.width = "6dp";
    img.height = "6dp";
  }
  
  function ondot(img){
    img.src = "pageondot.png";
    img.width = "7dp";
    img.height = "7dp";
  }
  
  function openAppWithLoginScreen(){
    window.open("https://healogics-uat.konycloud.com/Healogics/kdw", "_self");
  }
}



