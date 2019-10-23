function Start_Manual_Sync(eventobject) {
    return AS_Button_bef25843bfc34e1ebf3177eb97aa3bab(eventobject);
}

function AS_Button_bef25843bfc34e1ebf3177eb97aa3bab(eventobject) {
    if (isIpad && !SYNC_CONSTANTS.isAppOffline) { ///Only work when the app is in online mode
        if (SYNC_CONSTANTS.isSyncInProgress == true) {
            com.healogics.utility.displayAlert("Sync in Progress. Please try after some time.");
        } else {
            if (userInfo.headerAccessToken != null && userInfo.headerAccessToken != "") {
                SYNC_CONSTANTS.isSyncInProgress = true;
                searchPatient_closeSearchList();
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