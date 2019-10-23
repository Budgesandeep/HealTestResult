function AS_Button_j442f48d0f984e72a2963a76db1ca889(eventobject) {
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