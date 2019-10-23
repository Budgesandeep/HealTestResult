//Type your code here
var mod_sync_utility_cntrl = {};
/************************************************************************************
 * Save First time Sync True or False
 *************************************************************************************/
mod_sync_utility_cntrl.saveFirstTimeSync = function() {
    saveDataLocally(SYNC_CONSTANTS.isFirstTime, true);
};
/************************************************************************************
 * Save Logged in User Detail
 *************************************************************************************/
mod_sync_utility_cntrl.saveLoggedInUserData = function() {
    saveDataLocally("loggedInUser", userInfo.userName);
    saveDataLocally("loggedInUserId", userInfo.userId);
    saveDataLocally("lastLoginTime", userInfo.timestamp);
    saveDataLocally("userZone", userInfo.timezone);
    saveDataLocally("selectedFacilityId", userInfo.selectedFacilityId);
};
/************************************************************************************
 *Remove User Data at Logout
 *************************************************************************************/
mod_sync_utility_cntrl.removeUserDataOnLogout = function() {
    saveDataLocally("loggedInUser", "");
    saveDataLocally("loggedInUserId", "");
    saveDataLocally("lastLoginTime", "");
    saveDataLocally("userZone", "");
    saveDataLocally("selectedFacilityId", "");
};
/************************************************************************************
 *Start Delta Download
 *************************************************************************************/
mod_sync_utility_cntrl.callDeltaDownload = function() {
    function errorCallBack(error) {
        kony.print('callDeltaDownloadSync->errorCallBack()' + JSON.stringify(error));
        kony.print('syncc errorCallBack>>>' + JSON.stringify(tt));
        kony.print("callDeltaDownloadSync->errorCallBack()");
    }

    function successCallBack() {
        kony.print('callDeltaDownloadSync.->successCallBack()');
        kony.print("callDeltaDownloadSync->successCallBack()");
    }
    kony.print('Delta Download Started');
    syncInitialDownload(successCallBack, errorCallBack);
};