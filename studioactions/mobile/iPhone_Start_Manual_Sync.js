function iPhone_Start_Manual_Sync(eventobject) {
    return AS_Button_i43f165b53b442b890b2e6d8de414c04(eventobject);
}

function AS_Button_i43f165b53b442b890b2e6d8de414c04(eventobject) {
    if (isIphone && !SYNC_CONSTANTS.isAppOffline) { ///Only work when the app is in online mode
        if (SYNC_CONSTANTS.isSyncInProgress == true) {
            com.healogics.utility.displayAlert("Sync in Progress. Please try after some time.");
        } else {
            if (userInfo.headerAccessToken != null && userInfo.headerAccessToken != "") {
                SYNC_CONSTANTS.isSyncInProgress = true;
                com.healogics.utility.showLoading("Updating Data!");
                modSyncScopes_offline_initialAndDeltaScopes();
                syncInitialDownload(sync_successCallBack, sync_errorCallBack);
            } else {
                var error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
                loginModule.showLoginScreen(error_label);
            }
        }
    }
}