/*
FileName            : modSyncDelta.js
 Description        : Implmentation file for the Delta download related activities
 
* Change Log:
*---------------------------------------------------------------------------
* Date              Developer          Comments
*---------------------------------------------------------------------------
* 2017/04/30        325664             Initial logic
* 2017/05/02		325664			   Various Validations added
=============================================================================
 */
var sessionScopes = {
    "AuthorizedAccess": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "Patients": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "appList": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "metrics": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "login": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "scopeWoundHealingSteps": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "woundSummary2": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    }, ///new Scope by Muzib created
    "healingStepsConf": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "userMetrics": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "taskAndNotes": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "healingSteps": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "OfflinePhotoUpload": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    },
    "OfflinePatientRecords": {
        doupload: false,
        dodownload: false,
        uploaderrorpolicy: "continueonerror"
    }
};
/*
 * Method Name	: modSyncDelta_offline_createSyncSession
 * Purpose		: the common function to call the different sync scopes according to required inpu
 					conditions.
 * Parameters	: 
 * Return value	: callbacks - success or failure
 */
function modSyncDelta_offline_createUniqueSyncSession(requiredScopes) {
    //	var allSessionKeys = Object.keys(sessionScopes);  
    //	var newKey  = Object.keys(requiredScopes);
    Object.keys(sessionScopes).forEach(function(key) {
        //key = key;
        Object.keys(requiredScopes).forEach(function(key2) {
            if (key == key2) {
                var value = requiredScopes[key2];
                sessionScopes[key] = value;
            }
        });
    });
    kony.print("modSyncDelta_offline_createUniqueSyncSession::::" + JSON.stringify(sessionScopes));
    //syncInitialDownload();
}