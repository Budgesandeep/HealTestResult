function Desktop_appservice_event_call(eventobject) {
    return AS_AppEvents_ib0bddbfba16446ca255c7ff36d2d4b8(eventobject);
}

function AS_AppEvents_ib0bddbfba16446ca255c7ff36d2d4b8(eventobject) {
    kony.print("appservice event start-->");
    frmHome_loadingIndicator();
    kony.print("appservice eventobject:::" + JSON.stringify(eventobject.launchmode))
        //serviceIntegration.initMF();
        //alert(JSON.stringify(params));
        // if (eventobject.launchparams['formID']) {
        //   var formID = eventobject.launchparams['formID'];
        //   return formID;
        // }
    deepLinkInfo.clear();
    if (eventobject.launchmode == "3" && eventobject.launchparams.from == "epic") {
        var launchParams = eventobject.launchparams;
        //kony.print("appservice launchParams:::"+JSON.stringify(launchParams))
        deepLinkInfo.isDeepLinkFlow = true;
        deepLinkInfo.isFromEpic = true;
        deepLinkInfo.isRefreshFlow = false;
        deepLinkInfo.epicUserID = launchParams.epicUserID != null ? launchParams.epicUserID : "";
        deepLinkInfo.epicInstanceToken = launchParams.epicInstanceToken != null ? launchParams.epicInstanceToken : "";
        deepLinkInfo.facilityID = launchParams.facilityID != null ? launchParams.facilityID : "";
        deepLinkInfo.patientID = launchParams.patientID != null ? launchParams.patientID : "";
        deepLinkInfo.action = launchParams.action != null ? launchParams.action : "";
        deepLinkInfo.lastName = launchParams.lastName != null ? launchParams.lastName : "";
        deepLinkInfo.firstName = launchParams.firstName != null ? launchParams.firstName : "";
        deepLinkInfo.blueBookId = launchParams.blueBookId != null ? launchParams.blueBookId : "";
        deepLinkInfo.facilityName = launchParams.facilityName != null ? launchParams.facilityName : "";
        deepLinkInfo.userName = launchParams.userName != null ? launchParams.userName : "";
        kony.print("appService deepLinkInfo:::" + JSON.stringify(deepLinkInfo));
        loginModule.epicUser(deepLinkInfo); //loginModule.loginAuthenticateByToken();
        return frmHome;
    } else if (eventobject.launchmode == "3") {
        var launchParams = eventobject.launchparams;
        //kony.print("appservice launchParams:::"+JSON.stringify(launchParams))
        deepLinkInfo.isDeepLinkFlow = true;
        deepLinkInfo.isRefreshFlow = false;
        deepLinkInfo.iHealUserID = launchParams.iHealUserID != null ? launchParams.iHealUserID : "";
        deepLinkInfo.iHealAccessToken = launchParams.iHealAccessToken != null ? launchParams.iHealAccessToken : "";
        deepLinkInfo.facilityID = launchParams.facilityID != null ? launchParams.facilityID : "";
        deepLinkInfo.patientID = launchParams.patientID != null ? launchParams.patientID : "";
        deepLinkInfo.action = launchParams.action != null ? launchParams.action : "";
        deepLinkInfo.cipherTexts = launchParams.cipherTexts != null ? launchParams.cipherTexts : "";
        kony.print("appService deepLinkInfo:::" + JSON.stringify(deepLinkInfo));
        loginModule.loginAuthenticateByToken();
        return frmHome;
    } else {
        //   var launchParams = eventobject.launchparams;
        //   kony.print("appservice launchParams:::"+JSON.stringify(launchParams))
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.clickcount) {
                sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            } else {
                sessionStorage.clickcount = 1;
            }
            kony.print("sessionStorage.clickcount" + sessionStorage.clickcount);
            deepLinkInfo.isDeepLinkFlow = false;
            var userName = kony.store.getItem("userName");
            var password = kony.store.getItem("password");
            if (sessionStorage.clickcount > 1 && eventobject.launchparams['formID']) {
                var formID = eventobject.launchparams['formID'];
                kony.print("deepLinkInfo.formId1::::" + formID);
                deepLinkInfo.formId = formID;
                kony.print("deepLinkInfo.formId2::::" + formID);
                if (userName != null && userName != "" && password != null && password != "" && formID != "frmSelectFacility" && formID != "frmLanding") {
                    deepLinkInfo.isRefreshFlow = true;
                    loginModule.loginAuthentication(userName, password);
                    return frmHome;
                } else {
                    loginModule.clearUserStoreItems(); //kony.store.clear();
                    return frmLogin;
                }
            } else {
                loginModule.clearUserStoreItems(); //kony.store.clear();
                return frmLogin;
            }
        } else {
            loginModule.clearUserStoreItems(); //kony.store.clear();
            return frmLogin;
        }
    }
    //userInfo.clear();
    //patientListConstants.clear();
    kony.print("appservice event end-->");
    loginModule.clearUserStoreItems(); //kony.store.clear();
    return frmLogin;
}