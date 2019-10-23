/*
 *Name: modServiceUtil.js
 *Purpose: For Service call API invocation
 *Change Log:
 *---------------------------------------------------------------------------
 * Date              Developer          Comments
 *---------------------------------------------------------------------------
 * 12/19/2016        492306             Service call functions
 *
 *
 */
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
//client=null;
com.healogics.mfutility = (function() {
    var appKey, appSecret, serviceURL, isMFInitialized = false; //,client=null;
    //_connect() is used to initilize mobile fabric
    var _connect = function() {
        //Mobile fabric initilization success call back
        var _initSuccess = function(result) {
            //alert("mf init success");
            com.healogics.utility.dismissLoading();
            kony.print("MF Init successs");
            //com.healogics.utility.displayAlert("MF Init successs");
            isMFInitialized = true;
            //kony.print("KNYMobileFabric object1:::"+JSON.stringify(KNYMobileFabric)) 
            if (deepLinkInfo.isDeepLinkFlow) {
                //               	KNYMobileFabric = client;
                //               	kony.print("KNYMobileFabric object2:::"+JSON.stringify(KNYMobileFabric)) 
                loginModule.loginAuthenticateByToken();
            }
        };
        //Mobile fabric initilization failure call back
        var _initFailure = function(error) {
            //alert("mf init failure");
            com.healogics.utility.dismissLoading();
            com.healogics.utility.displayAlert("MF init Failure" + JSON.stringify(error));
            kony.print("MF init Failure" + JSON.stringify(error));
        };
        //Check Network state
        //var isNetworkAvailable = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        if (isNetworkAvailable()) {
            try {
                //com.healogics.utility.showLoading("Initilizing App Service!!!");
                kony_sdk_client = kony.sdk.getCurrentInstance(); //new kony.sdk();
                //com.healogics.utility.showLoading();
                //client.init(appKey, appSecret, serviceURL, _initSuccess, _initFailure);
            } catch (error) {
                com.healogics.utility.dismissLoading();
                com.healogics.utility.displayAlert("Error" + JSON.stringify(error));
                kony.print("Error" + JSON.stringify(error));
            }
        } else {
            com.healogics.utility.dismissLoading();
            com.healogics.utility.displayAlert("Please check your network connection and try again");
        }
    };
    //Integration service initilization
    var _invokeIntegrationService = function(serviceName, operationName, headers, inputData, successcallback, errorcallback, showLoadingScreen) {
        kony.print("com.healogics.mfutility::showLoadingScreen::" + showLoadingScreen);
        if (showLoadingScreen === null || showLoadingScreen === undefined || showLoadingScreen === true) {
            com.healogics.utility.showLoading(); //"Please wait..."
        }
        //com.healogics.utility.showLoading();
        /*if (KNYMobileFabric != null) {
            client = KNYMobileFabric;
        } else{
            client = new kony.sdk();
            client.init(appKey, appSecret, serviceURL, _initSuccess, _initFailure);
        }*/
        //client = kony.sdk.getCurrentInstance();
        kony.print("MF Client : " + JSON.stringify(kony_sdk_client));
        if (kony_sdk_client !== null) {
            var deviceDetails = kony.os.deviceInfo();
            var deviceID = deviceDetails.deviceid !== "" ? deviceDetails.deviceid : "Dummy DeviceID";
            kony.store.setItem("deviceID", deviceID);
            kony.store.setItem("konyUUID", "Kony User");
            //alert("Device type : "+ deviceDetails.name);
            // alert("Device type : "+ deviceDetails.type);
            kony.print("Kony Device Info : " + JSON.stringify(kony.os.deviceInfo()));
            var integrationObj = kony_sdk_client.getIntegrationService(serviceName);
            kony.print("Client serviceName " + serviceName);
            kony.print("Client operationName " + operationName);
            kony.print("Client headers " + JSON.stringify(headers));
            kony.print("Client inputData " + JSON.stringify(inputData));
            integrationObj.invokeOperation(operationName, headers, inputData, function(res) {
                kony.print("SUCCESS RESPONSE :::" + JSON.stringify(res));
                kony.print("Dismiss in  in MF integration");
                if (showLoadingScreen === null || showLoadingScreen === undefined || showLoadingScreen === true) {
                    com.healogics.utility.dismissLoading();
                }
                successcallback(res);
            }, function(error) {
                kony.print("FAILURE RESPONSE :::" + JSON.stringify(error));
                com.healogics.utility.dismissLoading();
                if (error != null && error.opstatus != null && (error.opstatus == 104 || error.opstatus == "104")) {
                    var message = (error.message != null && error.message != "") ? error.message : GENERAL_CONSTANTS.SESSION_EXPIRED_MESSAGE;
                    frmLogin.lbluseriderror.text = message;
                    frmLogin.fcloginerror.setVisibility(true);
                    frmLogin.show();
                } else {
                    errorcallback(error);
                    if (deepLinkInfo.isDeepLinkFlow) {
                        frmLogin.show();
                    }
                }
            });
        } else {
            com.healogics.utility.dismissLoading();
            com.healogics.utility.displayAlert("Not Connected with Mobile Fabric. Please re-launch application.");
        }
    };
    var _isResultNotNull = function(resultTable) {
        if (resultTable !== null && resultTable !== undefined && resultTable !== "") {
            return true;
        } else {
            return false;
        }
    };
    return {
        //Initilize mfInit variables & call _connect
        mfInit: function() {
            appKey = MF_CONSTANTS.appkey;
            appSecret = MF_CONSTANTS.appsecret;
            serviceURL = MF_CONSTANTS.appurl;
            if (com.healogics.utility.isEmpty(appKey)) {
                com.healogics.utility.displayAlert("Invalid AppKey");
                return;
            } else if (com.healogics.utility.isEmpty(appSecret)) {
                com.healogics.utility.displayAlert("Invalid AppSecret");
                return;
            } else if (com.healogics.utility.isEmpty(serviceURL)) {
                com.healogics.utility.displayAlert("Invalid ServiceURL");
                return;
            }
            _connect();
        },
        mfConnected: function() {
            return isMFInitialized;
        },
        // Invoke the integration service
        invokeIntegrationService: function(serviceName, operationName, headers, inputData, successcallback, errorcallback, showLoadingScreen) {
            //       if(com.healogics.utility.isNetworkConnected()){
            kony.print("inside invokeIntegrationService 1");
            if (true) {
                if (com.healogics.utility.isEmpty(serviceName)) {
                    com.healogics.utility.displayAlert("Invalid servicename");
                    return;
                } else if (com.healogics.utility.isEmpty(operationName)) {
                    com.healogics.utility.displayAlert("Invalid operationName");
                    return;
                } else if (com.healogics.utility.isEmpty(inputData)) {
                    com.healogics.utility.displayAlert("Invalid inputData");
                    return;
                } else if (com.healogics.utility.isEmpty(successcallback)) {
                    com.healogics.utility.displayAlert("Invalid successcallback");
                    return;
                }
                //Integration service call
                kony.print("before calling  invokeIntegrationService 2");
                _invokeIntegrationService(serviceName, operationName, headers, inputData, successcallback, errorcallback, showLoadingScreen);
            } else {
                com.healogics.utility.displayAlert("Please check your network connection and try again");
            }
        },
        isResultNotNull: function(resultTable) {
            return _isResultNotNull(resultTable);
        }
    };
})();