//Type your code here
/*
Module for Push notifications
*/

var pushNotification_registerDeviceForPushNotifications = function() {
  kony.print("pushNotification_registerDeviceForPushNotifications ---- start ---->");
  
  var mandatoryUpgrade = kony.store.getItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_AT_VERSION);
  var appConfigVersion = appConfig.appVersion;
  if(mandatoryUpgrade!=null && mandatoryUpgrade == appConfigVersion){
    var message = kony.store.getItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_MESSAGE);
    var title = kony.store.getItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_TITLE);
    if(message.indexOf(appConfigVersion) >= 0){ //case -- user already updated to latest before push message triggered
      kony.store.removeItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_MESSAGE);
      kony.store.removeItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_TITLE);
      _setupPushCallbacks();
    }else{
      showPushNotificationsPopup(title, message, true);
    }
	
  }else{
    kony.store.removeItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_AT_VERSION);
    _setupPushCallbacks();
  }
  
};

var _setupPushCallbacks = function() {
    kony.print(" $$$$$$$ inside _setupPushCallbacks");
    var pushCallbacks = {
        onsuccessfulregistration: pushRegistrationSuccessCallback,
        onfailureregistration: pushRegistrationErrorCallback,
        onlinenotification: appOnlineCallback,
        offlinenotification: appOfflineCallback,
        onsuccessfulderegistration: pushDeregistrationSuccessCallback,
        onfailurederegistration: pushDeregistrationErrorCallback
    };
    kony.push.setCallbacks(pushCallbacks);
  	_registerDevice();
    kony.print(" $$$$$$$ inside _setupPushCallbacks done");
};

var pushRegistrationSuccessCallback = function(identifier) {
    kony.print(" inside pushRegistrationSuccessCallback. identifier ----> " + identifier);
    kony.store.setItem(PUSH_CONSTANTS.USER_PUSH_REGISTRATION_ID, identifier);
    kony.store.setItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH, true);
    kony.print(" inside pushRegistrationSuccessCallback isDeviceRegistered -----> " + kony.store.getItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH));
    kony.print(" $$$$$$$ inside pushRegistrationSuccessCallback done");
    subscribeToKonyPush();
};

var pushRegistrationErrorCallback = function(error) {
    kony.print("Registration Error!!!" + JSON.stringify(error));
    kony.store.setItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH, false);
};

var appOnlineCallback = function(message) {
    kony.print(" $$$$$$$ inside appOnlineCallback  " + JSON.stringify(message));
   	try{
      var title = "";
      var body = "";

      title = message.alert.title;
      body = message.alert.body;
      kony.print("body ---> "+body);
      kony.print("title ---> "+title);
      	//Below code is handled when app is come to foreground, so commented the below code.
      showPushNotificationsPopup(title, body, false);
      
    }catch(e){
      	kony.print("Exception ocurred in appOnlineCallback function in mfengagement.js ----> "+e.message);
    }
};

var appOfflineCallback = function(message) {
    kony.print(" $$$$$$$ inside appOfflineCallback " + JSON.stringify(message));
    try {
      var title = "";
      var body = "";

      title = message.alert.title;
      body = message.alert.body;
      showPushNotificationsPopup(title, body, false);
      
    } catch (err) {
        kony.print("offline callback issue:::" + err.message);
    }
};

var pushDeregistrationSuccessCallback = function(result) {
    kony.print(" $$$$$$$ inside pushDeregistrationSuccessCallback " + JSON.stringify(result));
    kony.print("Device de-registered with Provider " + JSON.stringify(result));
};

var pushDeregistrationErrorCallback = function(result) {
    kony.print(" $$$$$$$ inside pushDeregistrationErrorCallback " + JSON.stringify(result));
    kony.print("Device de-registered with Provider failed: " + JSON.stringify(result));
};

var subscribeToKonyPush = function() {
    kony.print(" $$$$$$$ inside subscribeToKonyPush to register mf");
    var isDeviceRegistered = kony.store.getItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH);
    kony.print(" $$$$$$$ inside subscribeToKonyPush isDeviceRegistered : " + isDeviceRegistered);
    if (isDeviceRegistered == true || isDeviceRegistered == "true") {
        try {
          
          var messagingClient = kony_sdk_client.getMessagingService();
          
			var osType = "ipad";
            if(isIphone){
              osType = "iphone";
            }

            var deviceId = kony.os.deviceInfo().deviceid;
            var userId = appConfig.appVersion+"_"+userInfo.presentFacilityId +"_"+ userInfo.userId; 
            var registrationId = kony.store.getItem(PUSH_CONSTANTS.USER_PUSH_REGISTRATION_ID);
            kony.print(" $$$$$$$ inside subscribeToKonyPush osType : " + osType+"--$$$$$$$ inside subscribeToKonyPush deviceId : " + deviceId+"--$$$$$$$ inside subscribeToKonyPush registrationId : " + registrationId+"--$$$$$$$ inside subscribeToKonyPush userId : " + userId);
            messagingClient.register(osType,
                deviceId,
                registrationId,
                userId,
                pushSubscriptionSuccessCallback,
                pushSubscriptionErrorCallback);
        } catch (e) {
            kony.print("Error while subscribing the device " + e.message);
            kony.print("Error while subscribing the device " + JSON.stringify(e));
        }
    } else {
        kony.print("Initialization of MF not completed or Device is not registered with Provider.");
    }

};

var unSubscribeToKonyPush = function() {
    kony.print(" $$$$$$$ inside unSubscribeToKonyPush inside else to register mf");
    var isDeviceRegistered = kony.store.getItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH);
    kony.print(" $$$$$$$ inside unSubscribeToKonyPush isDeviceRegistered : " + isDeviceRegistered);
    if (isDeviceRegistered === true) {
        try {
            messagingClient.unregister(
                function(response) {
                    kony.print("Unregistration Success " + JSON.stringify(response));
                },
                function(error) {
                    kony.print("Unregistration Failure " + JSON.stringify(error));
                });
        } catch (e) {
            kony.print("Error while unSubscribeToKonyPush the device " + e);
            kony.print("Error while unSubscribeToKonyPush the device " + JSON.stringify(e));
        }
    } else {
        kony.print("Initialization of MF not completed or Device is not registered with Provider.");
    }
};

var pushSubscriptionSuccessCallback = function(result) {
  
  kony.application.dismissLoadingScreen();
  kony.print("Subscribe with Kony MF Success with KONY Subscriber ID:------> " + JSON.stringify(result));
  var ksIDNumber = result.id;
  kony.store.setItem(PUSH_CONSTANTS.KSID, ksIDNumber);
    
};

var pushSubscriptionErrorCallback = function() {
    kony.application.dismissLoadingScreen();
    kony.print("Subscribe Error -----------> ");
};

var _registerDevice = function() {
    kony.print(" $$$$$$$ inside _registerDevice");
    var deviceStatus = kony.store.getItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH);
    var configObject = null;
    kony.print(" $$$$$$$ inside _registerDevice 1111 deviceInfo:::" + kony.os.deviceInfo().name);
	configObject = [0, 1, 2];

    var isDeviceRegistered = false;
    if (deviceStatus !== null && deviceStatus === true) {
        isDeviceRegistered = true;
    }
    try {
      var ksid = kony.store.getItem(PUSH_CONSTANTS.KSID);
      kony.print("ksid===" + ksid);
      if (!isDeviceRegistered || com.healogics.utility.isEmpty(ksid)) {
        kony.print(" $$$$$$$ inside _registerDevice 4444");
        kony.push.register(configObject);
      } else {
        kony.print(" $$$$$$$ inside _registerDevice 5555");
        kony.print("Device already registered!");
      }
    } catch (exp) {
        kony.print("Error while registering the device " + exp);
    }
    kony.print(" $$$$$$$ inside _registerDevice done");
};

var _pushDeRegister = function() {
    try {
      	kony.print(" $$$$$$$ inside _pushDeRegister ---- Start ---->");
        kony.store.setItem(PUSH_CONSTANTS.USER_DEVICE_REGISTERED_FOR_PUSH, false);
        
        var myhash = new Object();
        kony.push.deRegister();
        kony.store.setItem(PUSH_CONSTANTS.KSID, "");
    } catch (err) {
        kony.print("_pushDeRegister::" + err.message);
    }
  	kony.print(" $$$$$$$ inside _pushDeRegister ---- End ---->");
};

function showPushNotificationsPopup(title, message, appStore){
  
  var appConfigVersion = appConfig.appVersion;
  if(message.indexOf("mandatory upgrade") >= 0 && message.indexOf(appConfigVersion) < 0){
    
    kony.store.setItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_AT_VERSION, appConfigVersion);
    kony.store.setItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_MESSAGE, message);
    kony.store.setItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_TITLE, title);
    appStore = true;
  }
  
  popupPushNotifications.lblHeader.text = title;
  popupPushNotifications.lblmessage.text = message;
  if(appStore === true){
    popupPushNotifications.hboxbuttons.setVisibility(false);
    popupPushNotifications.btnClosePopup.setVisibility(false);
    popupPushNotifications.btnappstore.setVisibility(true);
  }else{
    
    popupPushNotifications.btnappstore.setVisibility(false);
    
    if(message.indexOf("AppStore") >= 0 || message.indexOf("App Store") >= 0 || message.indexOf("appstore") >= 0){
      popupPushNotifications.hboxbuttons.setVisibility(true);
      popupPushNotifications.btnClosePopup.setVisibility(false);
    }else{
      popupPushNotifications.hboxbuttons.setVisibility(false );
      popupPushNotifications.btnClosePopup.setVisibility(true);
    }
  }
  popupPushNotifications.show();
}

function _openAppStoreLink(){
  if(isIpad){
    kony.application.openURL("https://itunes.apple.com/us/app/healogics-woundsuite/id1296267316?ls=1&mt=8");
  }else if(isIphone){
    kony.application.openURL("https://itunes.apple.com/us/app/healogics-document-management/id1296304876?ls=1&mt=8");
  }
  
  if(kony.store.getItem(PUSH_CONSTANTS.MANDATORY_UPGRADE_TITLE) !=null){
    kony.application.exit();
  }else{
    _closePushNotificaitonsPopup();
  }

}

function _closePushNotificaitonsPopup(){
  popupPushNotifications.dismiss();
}