
var login_sync_session = {};

var syncSuccessCallBack, syncErrorCallBack;
var syncUserID = "ostanley",
syncPwd = "05T@nleyv3";

//For user authentation service call
login_sync_session.syncLoginStartSession = function(successCallBack, errorCallBack){  
  kony.print("Inside syncLoginStartSession" );
  
  kony.print("Sync ID, Sync Pwd--------->"+syncUserID,syncPwd);
  syncSuccessCallBack = successCallBack;
  syncErrorCallBack =  errorCallBack;
	var config = {};
	config.appid = syncAppID;
  	config.issecure = true;
	config.serverhost = syncServerHost;
	config.serverport = syncServerPort;
  	config.batchsize = syncBatchSize;
    config.uploadbatchsize = syncUploadBatchSize;
  	config.sessiontasks = {
                           "login":{doupload:false, dodownload:true},
                           "AuthorizedAccess":{doupload:false, dodownload:false},
                           "Patients":{doupload:false, dodownload:false},
                           "Patient":{doupload:false, dodownload:false},
                           "appList":{doupload:false, dodownload:false},
                           "metrics":{doupload:false, dodownload:false},
                           "taskDeltaDownload":{doupload:false, dodownload:false}
                          };
	config.onsyncstart = onLoginsyncstartCallback;
	config.onscopestart = onLoginscopestartCallback;
  	config.onscopeerror = onLoginscopeerrorCallback;
	config.onscopesuccess =onLoginscopesuccessCallback;
	config.onuploadstart = onLoginuploadstartCallback;
	config.onuploadsuccess = onLoginuploadsuccessCallback;
	config.ondownloadstart = onLogindownloadstartCallback;
	config.ondownloadsuccess = onLogindownloadsuccessCallback;
	config.onsyncsuccess = login_sync_session.onLoginsyncsuccessCallback;
	config.onsyncerror = login_sync_session.onLoginsyncerrorCallback;
  	kony.print("before starting sync start session in syncLoginStartSession");
  	kony.print("config params"+ config.userid + config.password);
	sync.startSession(config);  
};

login_sync_session.onLoginsyncerrorCallback = function(outputparams){
    //alert("Sync Session Error>>" +JSON.stringify(outputparams));
   kony.print("login_sync_session.onLoginsyncerrorCallbackSync Session Error >>" +JSON.stringify(outputparams));
  syncErrorCallBack();
};

login_sync_session.onLoginsyncsuccessCallback = function(outputparams){
  	 //alert("Sync Session Success>>" +JSON.stringify(outputparams));
   kony.print("login_sync_session.onLoginsyncsuccessCallback Sync Session Success >>" +JSON.stringify(outputparams));
  	syncSuccessCallBack();

};

function resetSyncSession(){
	function resetSucc(){
// 		alert("syncResetSuccess");
      kony.print("syncResetSuccess");
	}
	function resetFail(){
		kony.print("syncResetFailure");
	}
	sync.reset(resetSucc, resetFail);
}

function rollbackSyncSession(){
	function resetSucc(){
		kony.print("rollbackSuccess");
		
	}
	function resetFail(){
		kony.print("rollbackFailure");
	}
	sync.rollbackPendingLocalChanges(resetSucc, resetFail);
}

function onLoginsyncstartCallback(outputparams){
// 	alert("Sync Started");
  kony.print("syncResetSuccess");
}

function onLoginuploadstartCallback(outputparams){
// 	alert("onuploadstartCallback");
  	kony.print("onuploadstartCallback");

   try{
  	var req = outputparams.uploadRequest;
  	if(req.clientcontext === undefined){
      	req.clientcontext = {};
    }
  req.clientContext.accessToken = userInfo.accessToken;
  return req;
  }catch(ee){
    kony.print("catch>>"+ee.message);
  }
  
//   alert("Upload Started:::::" + JSON.stringify(outputparams));
    kony.print("Upload Started:::::" + JSON.stringify(outputparams));

}

function onLoginuploadsuccessCallback(outputparams){
// 	alert("Upload Success");
    sync.log.info("Upload Success");
}

function onLogindownloadstartCallback(outputparams){
  try{
	
  	sync.log.info("ondownloadstartCallback>>>>>> "+JSON.stringify(outputparams));
  	var req = outputparams.downloadRequest;
  	if(req.clientcontext === undefined){
      	req.clientcontext = {};
    }
//    	 alert(req.scopename);
     sync.log.info(req.scopename);
    if(req.scopename == "login"){ //AuthorizedAccess
       req.clientcontext.userName = syncUserID;
       req.clientcontext.password = syncPwd;
    }
       sync.log.info("Download Started:::::" + JSON.stringify(outputparams));

    return req;
  }catch(ee){
    kony.print("catch>>"+ee.message);
  }
  
}

function onLogindownloadsuccessCallback(outputparams){
	//alert("Download Success"  +JSON.stringify(outputparams));
  sync.log.info("Download Success>>>>>> "+JSON.stringify(outputparams));
}

function onLoginbatchstoredCallback(outputparams){
	kony.print("Batch Stored");
}

function onLoginbatchprocessingstartCallback(outputparams){
	kony.print("Batch Processing");
}

function onLoginbatchprocessingsuccessCallback(outputparams){
	kony.print("Batch Processing Success");
}


function onLoginscopestartCallback(outputparams){
	//alert("Scope Started");
     sync.log.info("Sync start Success callback>>" +JSON.stringify(outputparams));
}

function onLoginscopeerrorCallback(outputparams){
	//alert("Sync Scope Error>>" + JSON.stringify(outputparams));
  sync.log.info("Sync Scope Error>>" + JSON.stringify(outputparams));
}

function onLoginscopesuccessCallback(outputparams){
	//alert("Sync Scope Success>>" + JSON.stringify(outputparams));
  sync.log.info("Sync Scope Success>>" + JSON.stringify(outputparams));

}

// function cancelSyncSession(){
//   setPercentageForLoader(0);
//   sync.stopSession(function(){
//     alert("Sync has been stopped"); 
// });
// }


