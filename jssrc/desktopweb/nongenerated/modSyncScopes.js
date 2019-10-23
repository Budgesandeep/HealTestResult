/*
FileName            : modSyncScopes.js
 Description        : All the initial scopes to be downloaded are made true here.

* Change Log:
*---------------------------------------------------------------------------
* Date              Developer          Comments
*---------------------------------------------------------------------------
* 2017/04/26        273652             Initial logic
* 2017/04/30        325664             Dividing the scopes and sessions code.
* 2017/05/01		515532			   Logic for the progress bar
* 2017/05/12		327069			   Updated the class logic and delta part added
=============================================================================
*/
//Sync Context Variables - Input Parameters
var syncAppId = "1000148102b32778a";
var syncServerHost = "healogics.konycloud.com";
var syncBatchSize = "2500";
var syncUploadBatchSize = "10";
var syncServerPort = "";
var syncSuccessCallBack, syncErrorCallBack;
var lastSyncTime = "";
var downloadedScopeCount = 0;
var isIndividualScopeSync = false; ///For individual set to true and false on success
var whichScope = ""; ///any of the scopes that have to be uploaded individually
var SYNC_NETWORK_TIMEOUT = 1200; //In seconds
/************************************************************************************
 * Initialize the initial initSyncSession
 *************************************************************************************/
function initSyncSession() {
    ///Encrpytion code added as per Kony Support ticket reply
    var config = {};
    config.oninitsuccess = syncinit_successcallback;
    config.oniniterror = syncinit_errorcallback;
    config.devicedbencryptionkey = SYNC_CONSTANTS.deviceEncryptionKey; //"KonySync";
    //config.insertNullForFieldsMissingPayload = false; //Meant for conflict resolution to avoid force cleaning up of missing attribute
    config.trackIntermediateUpdates = false;
    config.networktimeout = SYNC_NETWORK_TIMEOUT; //in seconds
    sync.init(config);
}
/************************************************************************************
 * SuccessCallBack initSyncSession
 *************************************************************************************/
function syncinit_successcallback(outputparams) {
    //   alert("syncinit_successcallback");
    kony.print("syncinit_successcallback");
    //SYNC_CONSTANTS.isSyncInitSuccess = true;
    //kony.store.setItem("syncInit",true);
    saveDataLocally(SYNC_CONSTANTS.syncInit, "true");
}
/************************************************************************************
 * errorCallBack initSyncSession
 *************************************************************************************/
function syncinit_errorcallback(outputparams) {
    kony.print("syncinit_errorcallback>>" + JSON.stringify(outputparams));
    //SYNC_CONSTANTS.isSyncInitSuccess = false;
    //kony.store.setItem("syncInit",false);
    saveDataLocally(SYNC_CONSTANTS.syncInit, "false");
}
/************************************************************************************
 * Sync Initial Download
 *************************************************************************************/
function syncInitialDownload(successCallBack, errorCallBack, removeAfterUpload) {
    //kony.print("Sync ID, Sync Pwd--------->"+syncUserId,syncPwd);
    kony.print("sessionScopes----->>>>>" + JSON.stringify(sessionScopes));
    syncSuccessCallBack = successCallBack;
    syncErrorCallBack = errorCallBack != null ? errorCallBack : sync_errorCallBack;
    var config = {};
    config.networktimeout = SYNC_NETWORK_TIMEOUT; //in seconds
    //config.chunksize = 2048; //This sets the chunksize to 512 KB.
    config.insertNullForFieldsMissingInPayload = false; //Meant for conflict resolution to avoid force cleaning up of missing attribute
    config.trackIntermediateUpdates = false;
    config.appid = syncAppId;
    config.issecure = true;
    config.serverhost = syncServerHost;
    config.serverport = syncServerPort;
    config.batchsize = syncBatchSize;
    config.uploadbatchsize = syncUploadBatchSize;
    config.sessiontasks = sessionScopes;
    config.onsyncstart = onsyncstartCallback;
    config.onscopestart = onscopestartCallback;
    config.onscopeerror = onscopeerrorCallback;
    config.onscopesuccess = onscopesuccessCallback;
    config.onuploadstart = onuploadstartCallback;
    config.onuploadsuccess = onuploadsuccessCallback;
    config.ondownloadstart = ondownloadstartCallback;
    config.ondownloadsuccess = ondownloadsuccessCallback;
    //config.onbatchstored = onbatchstoredCallback;
    //config.onbatchprocessingstart = onbatchprocessingstartCallback;
    //config.onbatchprocessingsuccess = onbatchprocessingsuccessCallback;
    config.onsyncsuccess = onsyncsuccessCallback;
    config.onsyncerror = onsyncerrorCallback;
    config.uploadbatchsize = 10;
    /////WRITTEN FOR DATA TO BE DELETED ON SUCCESSFULL SYNC UPLOAD
    if ((removeAfterUpload === null || removeAfterUpload === undefined) || (removeAfterUpload !== null && removeAfterUpload !== false)) {
        config.removeafterupload = {
            "taskAndNotes": ["notesList"],
            "OfflinePatientRecords": ["getPatientRecords"],
            "OfflinePhotoUpload": ["offlinePhotoUpload"]
        };
    }
    kony.print("before starting sync start session");
    //kony.print("config params"+ config.userid + config.password);
    sync.startSession(config);
}
/************************************************************************************
 * Reset Full Sync Session
 *************************************************************************************/
function resetSyncSession() {
    function resetSucc() {
        kony.print("syncResetSuccess");
    }

    function resetFail() {
        kony.print("syncResetFailure");
    }
    sync.reset(resetSucc, resetFail);
}
/************************************************************************************
 * Roll Back  Sync Session
 *************************************************************************************/
function rollbackSyncSession() {
    function rollbackSuccessCallback() {
        kony.print("All recent changes rollbacked successfully");
    }

    function rollbackFailCallback(res) {
        kony.print("Problem occurred in rollbacking recent changes." + " with Error Code:" + res.errorCode + ", error message:" + res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
    }
    ///Sync Level Rollback - for this to work, have to remove the Login Integration service and put Sync Config 
    //sync.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    ///Only to be used in case the Login/Facility integration services fail
    // com.healogics.offline.facilityList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //  com.healogics.offline.login.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   ///Scope Level Rollback - not tested
    //   com.healogics.offline.appListOffline.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   healingWounds.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   healingWoundSteps.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   healingWoundSubSteps.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogic.offline.msrList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogics.offline.notesList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   objHealingStep.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   objHealingSubStep.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   objWounds.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogic.offline.patientInfo.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogic.offline.patientList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   //com.healogics.offline.patientWoundEncounters.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogics.offline.patientWounds2.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogics.offline.tasksList.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogics.offline.termsAndConditions.rollbackPendingLocalChanges (rollbackSuccessCallback,rollbackFailCallback);
    //   com.healogics.offline.userMetrics.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
    //   //com.healogics.offline.wSummary.rollbackPendingLocalChanges(rollbackSuccessCallback,rollbackFailCallback);
}
/************************************************************************************
 * On Sync Start CallBack
 *************************************************************************************/
function onsyncstartCallback(outputparams) {
    kony.print("Sync Started");
    kony.print("syncResetSuccess");
    setPercentageForLoader(0);
}
/************************************************************************************
 * On Upload Start CallBack
 *************************************************************************************/
function onuploadstartCallback(outputparams) {
    kony.print("onuploadstartCallback");
    try {
        var req = outputparams.uploadRequest;
        if (req.clientcontext === undefined) {
            req.clientcontext = {};
        }
        //req.clientcontext.accessToken = userInfo.accessToken;
        req.clientcontext.Authorization = userInfo.headerAccessToken; ///HEADER SERVICE CHANGES
        var facilityId = getUserFacilityId(); //(userInfo.syncFacilityId !==null && userInfo.syncFacilityId !=="") ? userInfo.syncFacilityId : userInfo.presentFacilityId;
        facilityId = parseInt(facilityId);
        req.clientcontext.patientIds = "";
        req.clientcontext.BATCH_SIZE = syncBatchSize;
        req.clientcontext.facilities = facilityId;
        var keyLastSyncTime = facilityId + "." + req.scopename + ".lastSyncTime";
        //Setting for Applist and UserMetrics with UserID.
        if (req.scopename == SYNC_CONSTANTS.scopeAppList) {
            ////Akshay - setting the flag for ApplistOffline data as True
            saveDataLocally(SYNC_CONSTANTS.isAppListDownload, "true");
            keyLastSyncTime = userInfo.userId + "." + req.scopename + ".lastSyncTime";
            //If same facilityId comes then Remove and Insert else dont Remove
            applist_cntrl_offline.deleteRecordForUserId(userInfo.userName);
            kony.print("keyLastSyncTime ScopeList : -" + keyLastSyncTime);
        } else if (req.scopename == SYNC_CONSTANTS.scopeUserMetrics) {
            keyLastSyncTime = userInfo.userId + "." + req.scopename + ".lastSyncTime";
            kony.print("keyLastSyncTime scopeUserMetrics : -" + keyLastSyncTime);
        }
        //Setting LastSyncTime and CurrentSyncTime for FacilityID
        if (kony.store.getItem(keyLastSyncTime) !== null) {
            kony.print("Last Sync Time" + keyLastSyncTime + "\n" + kony.store.getItem(keyLastSyncTime));
            req.clientcontext.lastSyncTime = kony.store.getItem(keyLastSyncTime);
            req.clientcontext.LAST_SYNC_TIMESTAMP = kony.store.getItem(keyLastSyncTime);
            kony.print("keyLastSyncTime All Other : -" + keyLastSyncTime);
        } else {
            req.clientcontext.LAST_SYNC_TIMESTAMP = "";
            req.clientcontext.lastSyncTime = "";
            kony.print("keyLastSyncTime All Other Blank: -" + facilityId);
        }
        return req;
    } catch (ee) {
        kony.print("catch>>" + ee.message);
    }
    kony.print("Upload Started:::::" + JSON.stringify(outputparams));
}
/************************************************************************************
 * On Upload Success CallBack
 *************************************************************************************/
function onuploadsuccessCallback(outputparams) {
    // 	alert("Upload Success");
    sync.log.info("Upload Success");
}
/************************************************************************************
 * On ondownload star tCallback
 *************************************************************************************/
function ondownloadstartCallback(outputparams) {
    try {
        sync.log.info("ondownloadstartCallback>>>>>> " + JSON.stringify(outputparams));
        sync.log.info("ondownloadstartCallback>>>>>> " + JSON.stringify(userInfo));
        /***********************************/
        var req = outputparams.downloadRequest;
        if (req.clientcontext === undefined) {
            req.clientcontext = {};
        }
        var facilityId = getUserFacilityId(); //(userInfo.syncFacilityId !==null && userInfo.syncFacilityId !=="") ? userInfo.syncFacilityId : userInfo.presentFacilityId;
        facilityId = parseInt(facilityId);
        var keyLastSyncTime = facilityId + "." + req.scopename + ".lastSyncTime";
        kony.print("keyLastSyncTime : -" + keyLastSyncTime);
        req.clientcontext.userName = userInfo.userName; //"James";
        //req.clientcontext.password = userInfo.userPassword;
        //req.clientcontext.accessToken = userInfo.accessToken;
        req.clientcontext.Authorization = userInfo.headerAccessToken; ///HEADER SERVICE CHANGES
        req.clientcontext.presentFacilityId = facilityId; //"AA001";
        req.clientcontext.facilities = JSON.stringify(facilityId); //facilitiesList;
        req.clientcontext.facilityId = facilityId;
        //        req.clientcontext.userId = userInfo.userName;
        req.clientcontext.userIdList = JSON.stringify(userInfo.userName);
        ///as part of ERSS Changes, do not send userName but userId
        req.clientcontext.userId = userInfo.userId;
        //Co-5
        //batch time out setting -- mostly for UAT healsteps issue
        req.clientcontext.BATCH_SERVICE_COUNT_LIMIT = 15;
        req.clientcontext.BATCH_TIMEOUT = 40000;
        //Co-5 End
        req.clientcontext.roleIdList = userInfo.roleId; //"FacilityUser#Physician"; //Need to modify Later
        //Setting for Applist and UserMetrics with UserID.
        if (req.scopename == SYNC_CONSTANTS.scopeAppList) {
            ////Akshay - setting the flag for ApplistOffline data as True
            saveDataLocally(SYNC_CONSTANTS.isAppListDownload, "true");
            keyLastSyncTime = userInfo.userId + "." + req.scopename + ".lastSyncTime";
            //If same facilityId comes then Remove and Insert else dont Remove
            //           if(kony.store.getItem(keyLastSyncTime) !== null){
            applist_cntrl_offline.deleteRecordForUserId(userInfo.userName);
            //           }
            kony.print("keyLastSyncTime ScopeList : -" + keyLastSyncTime);
        } else if (req.scopename == SYNC_CONSTANTS.scopeUserMetrics) {
            keyLastSyncTime = userInfo.userId + "." + req.scopename + ".lastSyncTime";
            kony.print("keyLastSyncTime scopeUserMetrics : -" + keyLastSyncTime);
        }
        /////AKSHAY - ONLY FOR TERMS AND CONDITIONS (authorized access) VALUE ONLY
        if (req.scopename == SYNC_CONSTANTS.scopeAuthorizedAccess) {
            req.clientcontext.userName = userInfo.userId;
        } else {
            req.clientcontext.userName = userInfo.userName;
        }
        //Setting LastSyncTime and CurrentSyncTime for FacilityID
        if (kony.store.getItem(keyLastSyncTime) !== null) {
            kony.print("Last Sync Time" + keyLastSyncTime + "\n" + kony.store.getItem(keyLastSyncTime));
            req.clientcontext.lastSyncTime = kony.store.getItem(keyLastSyncTime);
            req.clientcontext.LAST_SYNC_TIMESTAMP = kony.store.getItem(keyLastSyncTime);
            kony.print("keyLastSyncTime All Other : -" + keyLastSyncTime);
        } else {
            req.clientcontext.LAST_SYNC_TIMESTAMP = "";
            req.clientcontext.lastSyncTime = "";
            kony.print("keyLastSyncTime All Other Blank: -" + facilityId);
        }
        return req;
    } catch (ee) {
        kony.print("catch>>" + ee.message);
    }
}
/************************************************************************************
 * On ondownload success Callback
 *************************************************************************************/
function ondownloadsuccessCallback(outputparams) {
    //alert("Download Success"  +JSON.stringify(outputparams));
    sync.log.info("Download Success Scopes>>>>>> " + JSON.stringify(outputparams));
}
/************************************************************************************
 * onbatchstored Callback
 *************************************************************************************/
function onbatchstoredCallback(outputparams) {
    kony.print("Batch Stored");
}
/************************************************************************************
 * onbatchprocessing start Callback
 *************************************************************************************/
function onbatchprocessingstartCallback(outputparams) {
    kony.print("Batch Processing");
}
/************************************************************************************
 * onbatchprocessing success Callback
 *************************************************************************************/
function onbatchprocessingsuccessCallback(outputparams) {
    kony.print("Batch Processing Success");
}
/************************************************************************************
 * on sync error  Callback
 *************************************************************************************/
function onsyncerrorCallback(outputparams) {
    kony.print("onsyncerrorCallback Sync Session Error>>" + JSON.stringify(outputparams));
    //sync.log.info("Sync Session Error>>" +JSON.stringify(outputparams));
    // To be implemented
    syncErrorCallBack(outputparams);
    //   syncRollBackToLastSyncState();
    kony.application.dismissLoadingScreen();
    stopSyncSession();
}
/************************************************************************************
 * on sync success Callback
 *************************************************************************************/
function onsyncsuccessCallback(outputparams) {
    //alert("Sync Session Success>>" +JSON.stringify(outputparams));
    kony.print("onsyncsuccessCallback Sync Session Success>>" + JSON.stringify(outputparams));
    //kony.print("outputparams lastsynctimestamp>>" +JSON.stringify(outputparams.lastsynctimestamp));
    kony.application.dismissLoadingScreen();
    syncSuccessCallBack();
    stopSyncSession();
    //Reset downloadedScopeCount to zero after everything Download
    downloadedScopeCount = 0;
}
/************************************************************************************
 * on scope start Callback
 *************************************************************************************/
function onscopestartCallback(outputparams) {
    kony.print("Scope Started");
    kony.print("onscopestartCallback Sync scope start Success callback>>" + JSON.stringify(outputparams));
    //Add Current Sync Time for Each Scope
    var facilityId = getUserFacilityId(); //(userInfo.syncFacilityId !== null && userInfo.syncFacilityId !== "") ? userInfo.syncFacilityId : userInfo.presentFacilityId;
    facilityId = parseInt(facilityId);
    var keyCurrentSyncTime = facilityId + "." + outputparams.currentScope + ".currentSyncTime";
    //Setting for Applist and UserMetrics with UserName.
    if (outputparams.currentScope == SYNC_CONSTANTS.scopeAppList || outputparams.currentScope == SYNC_CONSTANTS.scopeUserMetrics) {
        keyCurrentSyncTime = userInfo.userId + "." + outputparams.currentScope + ".currentSyncTime";
    }
    var currentSyncTime = convertCurrentToEDTTime(false, false);
    kony.store.setItem(keyCurrentSyncTime, currentSyncTime);
}
/************************************************************************************
 * on scope error Callback
 *************************************************************************************/
function onscopeerrorCallback(outputparams) {
    //alert("Sync Scope Error>>" + JSON.stringify(outputparams));
    kony.print("onscopeerrorCallback Sync Scope Error>>" + JSON.stringify(outputparams));
}
/************************************************************************************
 * on scope success Callback
 *************************************************************************************/
function onscopesuccessCallback(outputparams) {
    kony.print("Sync Scope Success CallBack>>" + JSON.stringify(outputparams));
    kony.print("Inside Onscope Success Call Back");
    downloadedScopeCount = downloadedScopeCount + 1;
    var downloadPercent = Math.round((downloadedScopeCount / SYNC_CONSTANTS.totalScopeCount) * 100);
    kony.print("downloadPercent----->>>>>" + downloadPercent);
    kony.print("SYNC_CONSTANTS.totalScopeCount----->>>>>" + SYNC_CONSTANTS.totalScopeCount);
    var scopeCnt = isIpad ? downloadPercent : downloadedScopeCount;
    setPercentageForLoader(scopeCnt);
    //var facilityId = parseInt(userInfo.syncFacilityId);
    //alert("Current Scope" + "\n" + outputparams.currentScope);
    //Setting LastSyncTime with CurrentSyncTime once scope is successful
    var facilityId = getUserFacilityId(); //(userInfo.syncFacilityId !== null && userInfo.syncFacilityId !== "") ? userInfo.syncFacilityId : userInfo.presentFacilityId;
    facilityId = parseInt(facilityId);
    var keyLastSyncTime = facilityId + "." + outputparams.currentScope + ".lastSyncTime";
    var keyCurrentSyncTime = facilityId + "." + outputparams.currentScope + ".currentSyncTime";
    //Setting for Applist and UserMetrics with userName.
    if (outputparams.currentScope == SYNC_CONSTANTS.scopeAppList || outputparams.currentScope == SYNC_CONSTANTS.scopeUserMetrics) {
        keyLastSyncTime = userInfo.userId + "." + outputparams.currentScope + ".lastSyncTime";
        keyCurrentSyncTime = userInfo.userId + "." + outputparams.currentScope + ".currentSyncTime";
    }
    kony.print("Key Current Sync Time" + "\n" + kony.store.getItem(keyCurrentSyncTime));
    kony.print("isIndividualScopeSync----->>>>>" + isIndividualScopeSync);
    /////Only update the lastSyncTime for all scopes if the flag is false.
    if (isIndividualScopeSync === false) {
        kony.print("i am in IF isIndividualScopeSync----->>>>>");
        if (kony.store.getItem(keyCurrentSyncTime) !== null) {
            kony.store.setItem(keyLastSyncTime, kony.store.getItem(keyCurrentSyncTime));
        }
    } else {
        ////Only update the time stamp for the flag and scope for which its required (Photo Upload and Delta download)
        kony.print("i am in Else isIndividualScopeSync----->>>>>");
        if ((isIndividualScopeSync === true) && ((whichScope == outputparams.currentScope) || (outputparams.currentScope == SYNC_CONSTANTS.scopeGetPatientRecords))) {
            kony.print("onscopesuccessCallback (flag and whichScope Values) -> " + isIndividualScopeSync + "& " + whichScope);
            if (kony.store.getItem(keyCurrentSyncTime) !== null) {
                kony.store.setItem(keyLastSyncTime, kony.store.getItem(keyCurrentSyncTime));
            }
        }
    }
}
/************************************************************************************
 * cancel Sync Session
 *************************************************************************************/
function stopSyncSession() {
    if (kony.application.getCurrentForm().id == "frmSelectFacility") {
        if (isSearchFacility) {
            frmSelectFacility.txtfldsearch.text = "";
            searchFacility_data(userInfo.facilityList);
        }
        frmSelectFacility.fcloader.setVisibility(false);
        frmSelectFacility.btnSelectFacility.setEnabled(true);
        frmSelectFacility.fcFacilities.segmentFacilities.setEnabled(true);
    }
    //rollbackSyncSession();
    kony.application.dismissLoadingScreen();
    //Reset downloadedScopeCount to zero after everything Download
    downloadedScopeCount = 0;
    kony.print("Individual Sync Flag Value -> " + isIndividualScopeSync + " & " + whichScope);
    isIndividualScopeSync = false;
    whichScope = "";
    SYNC_CONSTANTS.isSyncInProgress = false;
    sync.stopSession(function() {
        kony.print("Sync session has been stopped");
    });
}
/************************************************************************************
* This method resets the data to last synchronized state. You can use this method to
  undo the all the client side changes.
*************************************************************************************/
syncRollBackToLastSyncState = function() {
    function rollbackSuccessCallback() {
        kony.print("All recent changes rollbacked successfully");
    }

    function rollbackFailCallback(res) {
        kony.print("Problem occurred in rollbacking recent changes." + " with Error Code:" + res.errorCode + ", error message:" + res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
    }
    sync.rollbackPendingLocalChanges(rollbackSuccessCallback, rollbackFailCallback);
};
/************************************************************************************
* This method updates the global scopes values to be updated for the Initial and 
	Delta download
*************************************************************************************/
function modSyncScopes_offline_initialAndDeltaScopes() {
    kony.print("modSyncScopes_offline_initialAndDeltaScopes start -> ");
    var initialDownloadScopes = {};
    if (isIpad) {
        initialDownloadScopes = {
            "AuthorizedAccess": {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "Patients": {
                doupload: false,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "appList": {
                doupload: false,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "metrics": {
                doupload: false,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "login": {
                doupload: false,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            }, ///would be false
            "scopeWoundHealingSteps": {
                doupload: false,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "woundSummary2": {
                doupload: false,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            }, ///new Scope by Muzib created
            "healingStepsConf": {
                doupload: false,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            "userMetrics": {
                doupload: false,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "taskAndNotes": {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "healingSteps": {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "OfflinePhotoUpload": {
                doupload: true,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            "OfflinePatientRecords": {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            }
        };
    } else {
        initialDownloadScopes = {
            "AuthorizedAccess": {
                doupload: false,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            "Patients": {
                doupload: false,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            },
            "appList": {
                doupload: false,
                dodownload: true,
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
            }, ///would be false
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
                doupload: true,
                dodownload: false,
                uploaderrorpolicy: "continueonerror"
            },
            "OfflinePatientRecords": {
                doupload: true,
                dodownload: true,
                uploaderrorpolicy: "continueonerror"
            }
        };
    }
    modSyncDelta_offline_createUniqueSyncSession(initialDownloadScopes);
}
/************************************************************************************
* This method only sets the 9Steps healing scope to true for download/upload, rest all
	is kept to false
*************************************************************************************/
function modSyncScopes_offline_9StepsHealing() {
    //   var nineStepsDownloadScopes = {
    // 						   "scopeWoundHealingSteps":{doupload:true, dodownload:true, uploaderrorpolicy:"continueonerror"}
    // 						    };
    //   modSyncDelta_offline_createUniqueSyncSession(nineStepsDownloadScopes);
    sessionScopes = {
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
            dodownload: true,
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
            doupload: true,
            dodownload: true,
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
    isIndividualScopeSync = true;
    whichScope = SYNC_CONSTANTS.scopeWoundHealingSteps;
}
/************************************************************************************
* This method only sets the Tasks and Notes scope to true for download/upload, rest all
	is kept to false
*************************************************************************************/
function modSyncScopes_offline_tasksAndNotes() {
    sessionScopes = {
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
            doupload: true,
            dodownload: true,
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
    isIndividualScopeSync = true;
    whichScope = SYNC_CONSTANTS.scopeCreateTaskAndNotes;
    //alert("value in session scopes after changes are -> " + JSON.stringify(sessionScopes));
}
/************************************************************************************
 * This method only sets the photo upload related scopes to true for download and upload
 *************************************************************************************/
function modSyncScopes_offline_photoUpload() {
    sessionScopes = {
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
            doupload: true,
            dodownload: false,
            uploaderrorpolicy: "continueonerror"
        },
        "OfflinePatientRecords": {
            doupload: false,
            dodownload: true,
            uploaderrorpolicy: "continueonerror"
        }
    };
    isIndividualScopeSync = true;
    whichScope = SYNC_CONSTANTS.scopePhotoUpload;
}
/************************************************************************************
 * This method only sets the patient records related scopes to true for download and upload
 *************************************************************************************/
function modSyncScopes_offline_patientRecords() {
    sessionScopes = {
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
            doupload: true,
            dodownload: true,
            uploaderrorpolicy: "continueonerror"
        }
    };
    isIndividualScopeSync = true;
    whichScope = SYNC_CONSTANTS.scopeGetPatientRecords;
}
/************************************************************************************
* This method only sets the Tasks and Notes scope to true for download/upload, rest all
	is kept to false
*************************************************************************************/
function modSyncScopes_offline_onlyLogin() {
    var loginDownloadScopes = {
        "login": {
            doupload: false,
            dodownload: true,
            uploaderrorpolicy: "continueonerror"
        }
    };
    modSyncDelta_offline_createUniqueSyncSession(loginDownloadScopes);
    //alert("value in session scopes after changes are -> " + JSON.stringify(sessionScopes));
}

function getUserFacilityId() {
    var facilityId = (userInfo.syncFacilityId !== null && userInfo.syncFacilityId !== "") ? userInfo.syncFacilityId : userInfo.presentFacilityId;
    facilityId = (userInfo.presentFacilityId !== null && userInfo.presentFacilityId !== "") ? userInfo.presentFacilityId : userInfo.selectedFacilityId;
    facilityId = parseInt(facilityId);
    return facilityId;
}