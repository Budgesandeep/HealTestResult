function Mobile_postapponit_call(eventobject) {
    return AS_AppEvents_f252aa906b34423bb8e95c8261dfc192(eventobject);
}

function AS_AppEvents_f252aa906b34423bb8e95c8261dfc192(eventobject) {
    // serviceIntegration.initMF();
    var isFirstTimeSync = getDataFromLocalStore(SYNC_CONSTANTS.syncInit); ///To know whether this is firstTimeSync or not.
    kony.print("The value in isFirstTimeSync is -> ", isFirstTimeSync);
    if (isFirstTimeSync !== null) ////will not be null if value already stored for first time.
    {
        if (isNetworkAvailable()) { ///network is there and then go inside
            ///At all time mfInit has to be initialized but not initSyncSession
            if (!com.healogics.mfutility.mfConnected()) { ///If MF Init not initialized
                serviceIntegration.initMF();
                //if(isFirstTimeSync == "false")///if the value is set to false, we have to initialize the MF Init.
                {
                    initSyncSession(); ///if already once initSyncSession happens, no need to start again. 
                }
            }
            //   		if(isFirstTimeSync == "false")///if the value is set to false, we have to initialize the MF Init.
            //      	{
            //        		if (!com.healogics.mfutility.mfConnected()){///If MF Init not initialized
            // 				serviceIntegration.initMF();
            // 				initSyncSession();    
            //   			}
            //      	}else{///if key is true but the app was started again - will be called always when app is relaunched
            //           if (!com.healogics.mfutility.mfConnected()){///If MF Init not initialized
            // 				serviceIntegration.initMF();
            // 				initSyncSession();    
            //   			}
            //           kony.print("When isFirstTimeSync Key is True, initMF again -> ", isFirstTimeSync);
            //         }
        } else { ///if network not there, check whether values of applist is there or not.
            var isApplistAvailable = getDataFromLocalStore(SYNC_CONSTANTS.isAppListDownload);
            kony.print("The value in isApplistAvailable is -> ", isApplistAvailable);
            if (isApplistAvailable !== null) ////will not be null if value already stored for first time.
            {
                if (isApplistAvailable == "false") ///if the value is set to false, we have to initialize the MF Init.
                {
                    kony.print("The value in isApplistAvailable inside is -> ", isApplistAvailable);
                    ///No values saved yet for Applist
                    if (!com.healogics.mfutility.mfConnected()) { ///Since in offline and no data, user has to restart the app
                        kony.print("The value in isApplistAvailable deep inside is -> ", isApplistAvailable);
                        serviceIntegration.initMF();
                        //initSyncSession();
                    }
                } ///in true nothing needs to be done and let the user work
                initSyncSession();
            } else { ////check whether the data is available or not (for offline condition only)
                com.healogics.utility.displayAlert("Offline data not available, please relaunch the app when network is available.");
            }
        }
    } else { ///Doesn't matter if internet or not there. Have to get MF initialized before entering the app.
        if (!com.healogics.mfutility.mfConnected()) { ///If MF Init not initialized
            serviceIntegration.initMF();
            initSyncSession();
        }
    }
    setCallBacks();
}