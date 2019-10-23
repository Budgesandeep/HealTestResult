function AS_Button_ga1917a61f5b49189ab9a05d62c9b866(eventobject) {
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