/*
FileName            : modSwitchFacility.js
 Description        :  
 
* Change Log:
*---------------------------------------------------------------------------
* Date              Developer          Comments
*---------------------------------------------------------------------------
=============================================================================
*/
///Global variables
var switchFacility_module={};
var isSearchFacility=false;
var isSwitchFacilityPopupOpen=false;

var FACILITY_LOOP_LENGTH = 50; 
switchFacility_module.currentIndex = 0;
switchFacility_module.filteredFacilityList = [];

switchFacility_module.presentSelectedIndex = 0;

//Method to display facility list
switchFacility_module.setFacilityData=function(){ 
  var facility_array=[];
  
  switchFacility_module.currentIndex = FACILITY_LOOP_LENGTH;
  switchFacility_module.filteredFacilityList = [];

  isSwitchFacilityPopupOpen=false;
  kony.print("facilityList data received--->"+JSON.stringify(userInfo.facilityList));
 
  var len = userInfo.facilityList.length;  
  var currentForm = kony.application.getCurrentForm().id;
  kony.print("curent form---->"+currentForm);
  kony.print("length---->"+len);
  for(var i=0;i<len;i++)
  {
    var data={
      "lblFacility":{text : userInfo.facilityList[i].facilityId +" - "+userInfo.facilityList[i].facilityName},  
      "rowIndex":i,
      "imgFacility":{isVisible:true},
      "facilityId":userInfo.facilityList[i].facilityId,
      "timeZone" : userInfo.facilityList[i].timeZone,
      "facilityBlueBookId":userInfo.facilityList[i].facilityBluebookId
    };
    if(currentForm === "frmLogin")
    {
      if(userInfo.facilityList[i].lastLoginFacility == GENERAL_CONSTANTS.TEXT_TRUE){
        userInfo.timezone = userInfo.facilityList[i].timeZone;
        userInfo.presentFacilityId = userInfo.facilityList[i].facilityId;
        userInfo.presentFacilityName = userInfo.facilityList[i].facilityName;
        userInfo.presentFacilitybluebookid=userInfo.facilityList[i].facilityBluebookId;
      } 
      data.fcFacility = {skin:"slFbox"};
      if(data.facilityId===userInfo.presentFacilityId){
        data.fcFacility.skin="skfcgraydark";
        switchFacility_module.presentSelectedIndex = i;
      }
    }else if(isIphone && currentForm === "frmSelectFacility"){
      if(data.facilityId===userInfo.presentFacilityId){
        data.fcFacility.skin="skfcgraydark";
        
      }
      else{
        data.fcFacility.skin="slFbox";
      }
    }else if(isIphone && currentForm === "frmPatientList"){
      data.lblFacility={"text":userInfo.facilityList[i].facilityId +" - "+userInfo.facilityList[i].facilityName,skin:"sknlbldarkgray85"};
      data.fcFacility = {skin:"slFbox"};
      if(data.facilityId===userInfo.presentFacilityId){
        data.fcFacility.skin="skfcgraydark";
      }
    }else{
      data.lblFacility={"text":userInfo.facilityList[i].facilityId +" - "+userInfo.facilityList[i].facilityName,skin:"sknlbldarkgray85"};
   	  if(data.facilityId===userInfo.presentFacilityId){
        data.lblFacility.skin="sknlblblackbold85";
      }
    }  
    facility_array.push(data);    
  }
  var length= facility_array.length;
  kony.print("facility_array------->"+JSON.stringify(facility_array));
  if(com.healogics.utility.isEmpty(userInfo.presentFacilityId)){
    if(com.healogics.utility.listContainsValue("fcFacility", Object.keys(facility_array[0]))){
      facility_array[0].fcFacility.skin="skfcgraydark";
    }
  }
  if(currentForm === "frmLogin" || currentForm === "frmSelectFacility"){
    
    if(isIphone || isIpad){
      frmSelectFacility.segmentFacilities.setData(facility_array);
    }else{
      
      frmSelectFacility.segmentFacilities.removeAll();
      if(facility_array.length > FACILITY_LOOP_LENGTH){
        frmSelectFacility.segmentFacilities.addAll(facility_array.slice(0, FACILITY_LOOP_LENGTH));
        //setFacilityData_showAll(); //moved to postshow
        //frmSelectFacility.txtfldsearch.setVisibility(true);
      }else{
        //frmSelectFacility.txtfldsearch.setVisibility(false);
        frmSelectFacility.segmentFacilities.addAll(facility_array);
      }
      
    }
    
    userInfo.processedFacilityList = facility_array;
    
    if(userInfo.facilityList.length>FACILITY_LOOP_LENGTH){
      frmSelectFacility.txtfldsearch.text = "";
      frmSelectFacility.txtfldsearch.setVisibility(true);
    }else{
      frmSelectFacility.txtfldsearch.setVisibility(false);
    }
    
    frmSelectFacility.richtextHead.text="Welcome, "+"<b>"+userInfo.fullName+"! </b>"+"Please select your facility:";   
    
    frmSelectFacility.show();
  	
  }else if(isIphone&&currentForm === "frmPatientList"){
    kony.print("iphone facility"+JSON.stringify(facility_array));
    frmSwitchFacility.segmentFacilities.setData(facility_array);
    if(userInfo.facilityList.length>FACILITY_LOOP_LENGTH){ 
      frmSwitchFacility.txtfldsearch.setVisibility(true);
    }else{
      frmSwitchFacility.txtfldsearch.setVisibility(false);
    }
    frmSwitchFacility.show();
    frmSwitchFacility.fcerror.setVisibility(false);
  }else{
    popupSwitchFacility.segmentFacilities.setData(facility_array);
    if(userInfo.facilityList.length>FACILITY_LOOP_LENGTH){ 
      popupSwitchFacility.hboxsearch.setVisibility(true);
    }else{
      popupSwitchFacility.hboxsearch.setVisibility(false);
    }
    popupSwitchFacility.show();
    popupSwitchFacility.hboxsearch.txtfldsearch.text = "";
    isSwitchFacilityPopupOpen=true;
  }
  kony.print("segment data---->"+JSON.stringify(facility_array));
  //kony.print("segment data after setting--->"+JSON.stringify(popupSwitchFacility.segmentFacilities.data));
  frmSelectFacility.btnSelectFacility.setEnabled(true);
  if(isIpad){
    frmSelectFacility.fcloginmainbody.fcloader.isVisible = false;
  }else if(isIphone){
    frmSelectFacility.fcloginmainbody.fcloader.isVisible = false;
  }
  
  
  
};

//Method to highlight the selected facility
var selectFacility_onRowClick=function(eventobject){
  com.healogics.utility.showLoading();
 
 
  kony.print("eventobject id is---->"+eventobject.id);
  kony.print("event object selected items--->"+JSON.stringify(eventobject.selectedItems));
	///Akshay - setting the value at the row click itself so that hardcoding can be removed.
  userInfo.selectedFacilityId = eventobject.selectedItems[0].facilityId;
  userInfo.syncFacilityId = userInfo.selectedFacilityId;
  userInfo.SelectedFacilitybluebookid=userInfo.SelectedFacilitybluebookid;
  
  
  var currentForm=kony.application.getCurrentForm().id;
  var data=[];
  var len=eventobject.data.length;
  data=eventobject.data;
  var selected_row=eventobject.selectedItems[0].rowIndex;
  
  var index = 0;
  if(currentForm == "frmSelectFacility"){
    index = frmSelectFacility.segmentFacilities.selectedIndex[1]
  }
  kony.print("eventobject length---->"+len+":::"+switchFacility_module.currentIndex); 
  for(var i=0;i<len;i++){  
    if(eventobject.parent.id==="fcFacilities"){
      kony.print("eventobject parent id---->"+i+":"+selected_row);
      if((switchFacility_module.currentIndex-FACILITY_LOOP_LENGTH +i)=== selected_row){
        data[i].fcFacility.skin="skfcgraydark";
        if(isIphone && currentForm=="frmSwitchFacility")
          frmSwitchFacility.fcerror.setVisibility(false);
        else{
          frmSelectFacility.fcerror.setVisibility(false);
        } 
        
        if(switchFacility_module.filteredFacilityList.length > switchFacility_module.presentSelectedIndex){
          switchFacility_module.filteredFacilityList[switchFacility_module.presentSelectedIndex].fcFacility.skin="slFbox";
          switchFacility_module.filteredFacilityList[selected_row].fcFacility.skin="skfcgraydark";
          switchFacility_module.presentSelectedIndex = selected_row;
        }
        
      }
      else{
        data[i].fcFacility.skin="slFbox";
      }
    }else{
      if(i===selected_row){
        data[i].lblFacility.skin="sknlblblackbold85";
        popupSwitchFacility.hboxerror.setVisibility(false);
      }
      else{
        data[i].lblFacility.skin="sknlbldarkgray85";
      }
    }
  }
  if(isIphone || isIpad){
      eventobject.setData(data);
  }else{
    if(currentForm == "frmSelectFacility"){
      
      kony.print("selected data:::"+JSON.stringify(data));
      
      frmSelectFacility.segmentFacilities.removeAll();
      if(data.length > FACILITY_LOOP_LENGTH){
        frmSelectFacility.segmentFacilities.addAll(data.slice(0, FACILITY_LOOP_LENGTH));
        setFacilityData_selectedData(data, index);
      }else{
        frmSelectFacility.segmentFacilities.addAll(data);
      }
       
    }else{
      eventobject.setData(data);
    }
    
  }

  kony.print("eventobject setData done---->"); 
  if(currentForm == "frmSelectFacility"){
    frmSelectFacility.segmentFacilities.selectedIndex=[0,index];
  }
  com.healogics.utility.dismissLoading();
};

//Method to update the facility selected
var SwitchFacility_UpdateFacility=function(){
  
  kony.print("SwitchFacility_UpdateFacility start");
  
  com.healogics.utility.showLoading(); 
  if((isIpad || isIphone) && !SYNC_CONSTANTS.isAppOffline){
    var currentForm = kony.application.getCurrentForm().id;
    kony.print("inside SwitchFacility_UpdateFacility if condition---currentForm---->"+currentForm);
    if(currentForm === "frmSelectFacility"){
      var data=frmSelectFacility.segmentFacilities.data;
      if(switchFacility_module.filteredFacilityList.length > FACILITY_LOOP_LENGTH){
        data = switchFacility_module.filteredFacilityList;
      }
      for(var i=0;i<data.length;i++){
        if(data[i].fcFacility.skin==="skfcgraydark"){
          
          frmSelectFacility.fcerror.setVisibility(false);
          userInfo.selectedFacilityId=data[i].facilityId;
          userInfo.timezone = data[i].timeZone;
          userInfo.SelectedFacilitybluebookid=data[i].facilityBlueBookId;
          if((isIpad || isIphone) && !SYNC_CONSTANTS.isAppOffline){
            userInfo.presentFacilityId = data[i].facilityId; //--Added for facilityId still with old value
            userInfo.syncFacilityId = data[i].facilityId;
            userInfo.presentFacilitybluebookid=data[i].facilityBlueBookId;

            frmSelectFacility.btnSelectFacility.setEnabled(false);
            frmSelectFacility.fcFacilities.segmentFacilities.setEnabled(false);

            switchFacility_module.updateFacility();
          }
        }
      }  
    }
 
  }else{
    SwitchFacility_UpdateFacility_New();
  }
  
  
};

//Method to update the facility selected
var SwitchFacility_UpdateFacility_New =function(){
  
  
  function _validateFacilitySelection(){
    // success callback after all the sync is completed
    kony.print("success callback for sync , entering login");
    kony.print("success callback for Update facility start------->");
    kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, null);
    
    var count=0;
    var currentForm=kony.application.getCurrentForm();
	var data;
    if(currentForm.id==="frmSelectFacility"){
      data=frmSelectFacility.segmentFacilities.data;
      kony.print("FACILITY_LOOP_LENGTH >>"+FACILITY_LOOP_LENGTH);
      kony.print("switchFacility_module.filteredFacilityList.length>>"+switchFacility_module.filteredFacilityList.length);
      if(switchFacility_module.filteredFacilityList.length > FACILITY_LOOP_LENGTH){
        data = switchFacility_module.filteredFacilityList;
      }
    }
    else if(isIphone && currentForm.id==="frmSwitchFacility"){
      data=frmSwitchFacility.segmentFacilities.data;
    }
    else{
      deepLinkInfo.clear();
      data=popupSwitchFacility.segmentFacilities.data;
    }
    var len=data.length;
    kony.print("------len------ "+len);
    for(var i=0;i<len;i++){
      
      if(currentForm.id === "frmSelectFacility"){
        frmSelectFacility.fcerror.setVisibility(false);
        kony.print("------in frmSelectFacility select------ "+i);
        if(data[i].fcFacility.skin==="skfcgraydark"){
          count=1;
          frmSelectFacility.fcerror.setVisibility(false);
          userInfo.selectedFacilityId=data[i].facilityId;
          userInfo.SelectedFacilitybluebookid=data[i].facilityBlueBookId;
          userInfo.timezone = data[i].timeZone;
			kony.print("SYNC_CONSTANTS.isAppOffline in _validateFacilitySelection fucntion>>"+SYNC_CONSTANTS.isAppOffline);
          if((isIpad || isIphone) && !SYNC_CONSTANTS.isAppOffline){
            userInfo.presentFacilityId = data[i].facilityId;
            //--Added for facilityId still with old value
          	userInfo.syncFacilityId = data[i].facilityId;
            
            modSyncScopes_offline_initialAndDeltaScopes();///New function only for delta - Akshay
            syncInitialDownload(successCallBack, errorCallBack);
            //Disable select button

            frmSelectFacility.btnSelectFacility.setEnabled(false);
            frmSelectFacility.fcFacilities.segmentFacilities.setEnabled(false);

            ///Akshay
            if(isIpad){
              frmSelectFacility.fcloginmainbody.fcloader.isVisible = true;
            }else{
              frmSelectFacility.fcloginmainbody.fcloader.isVisible = true;
            }
          }else{
            successCallBack();
          }
        }
      }
      else if(isIphone && currentForm.id==="frmSwitchFacility"){
        kony.print("------in frmSwitchFacility select------"+data[i].facilityId+ "  -----  "+userInfo.presentFacilityId);
        if(data[i].fcFacility.skin==="skfcgraydark"){
          count=1;
            frmSwitchFacility.fcerror.setVisibility(false);
            userInfo.selectedFacilityId=data[i].facilityId;
            userInfo.timezone = data[i].timeZone;
          userInfo.SelectedFacilitybluebookid=data[i].facilityBlueBookId;
            var patientCountForFacilityId = patientList_cntrl_offline.getPatientListCountForFacilityID(data[i].facilityId);
            kony.print("PatientCountForFacilityId  "+patientCountForFacilityId);
            if(patientCountForFacilityId === 0){
              if(SYNC_CONSTANTS.isAppOffline){
                frmSwitchFacility.lblerror.text=ERROR_CONSTANTS.FACILITYDATA_OFFLINE_ERROR_MESSAGE;
                frmSwitchFacility.fcerror.setVisibility(true);
                com.healogics.utility.dismissLoading();
                break;
              }else{
                SYNC_CONSTANTS.isSyncInProgress = true;
                modSyncScopes_offline_initialAndDeltaScopes();
                syncInitialDownload(successCallBack, errorCallBack);
              }
            }else{
              applist_cntrl_offline.getAppListForDiplay();
            }
        }

      }
      else{
        kony.print("------in popup select------");
        if(data[i].lblFacility.skin==="sknlblblackbold85"){
          if(data[i].facilityId===userInfo.presentFacilityId){
            popupSwitchFacility.lblerror.text=ERROR_CONSTANTS.SAMEFACILITY_ERROR_MESSAGE;
            popupSwitchFacility.hboxerror.setVisibility(true);
            com.healogics.utility.dismissLoading();
          }
          else{
            popupSwitchFacility.hboxerror.setVisibility(false);
            userInfo.selectedFacilityId=data[i].facilityId;
            userInfo.SelectedFacilitybluebookid=data[i].facilityBlueBookId;
            userInfo.timezone = data[i].timeZone;
		      if(isIpad){ ///Akshay - For Reading always the Offline DB in Online or Offline mode for iPad
              //Modified for Offline If data is not Downloaded for any selected Facility
              var patientCountForFacilityId = patientList_cntrl_offline.getPatientListCountForFacilityID(data[i].facilityId);
              kony.print("PatientCountForFacilityId"+patientCountForFacilityId);
              if(patientCountForFacilityId === 0 && !isIphone){
                popupSwitchFacility.lblerror.text=ERROR_CONSTANTS.FACILITYDATA_OFFLINE_ERROR_MESSAGE;
                popupSwitchFacility.hboxerror.setVisibility(true);
                com.healogics.utility.dismissLoading();
              }
              else{
                applist_cntrl_offline.getAppListForDiplay();///WOUN-1813 : Changed for Offline Bug
              }
            }
            else{
              switchFacility_module.updateFacility();
            }
          }    
        }
      }  
    }
    if(count===0){
      
      com.healogics.utility.dismissLoading();
      
      if(currentForm.id==="frmSelectFacility"){
        frmSelectFacility.fcerror.setVisibility(true);
        frmSelectFacility.lblerror.text=ERROR_CONSTANTS.NOFACILITY_SELECTION_ERROR_MESSAGE;
      }
      else if(isIphone&&currentForm.id==="frmSwitchFacility"){
        frmSwitchFacility.fcerror.setVisibility(true);
        frmSwitchFacility.lblerror.text=ERROR_CONSTANTS.NOFACILITY_SELECTION_ERROR_MESSAGE;
      } 
    }
  }
  
  function successCallBack(){
    kony.print("inside SwitchFacility_UpdateFacility and successCallBack......");
    if(isIpad || isIphone){ ///Akshay - For Reading always the Offline DB in Online or Offline mode for iPad

      kony.print("inside SwitchFacility_UpdateFacility and successCallBack if......");
      
      if(!SYNC_CONSTANTS.isAppOffline){
        kony.print("inside SwitchFacility_UpdateFacility and successCallBack setting userSyncTime......");
        kony.store.setItem("userSyncTime", getDeviceCurrentTime());
      }
      
      applist_cntrl_offline.getAppListForDiplay();///WOUN-1813 : Changed for Offline Bug
      
      showLastSync();///display the last Sync Time on screen
      dismissLoadingScreen();
      
    }else{
      kony.print("inside SwitchFacility_UpdateFacility and successCallBack else......");
      switchFacility_module.updateFacility();
    }
    
  }
    
  function errorCallBack(response){
    kony.print("inside SwitchFacility_UpdateFacility and errorCallBack......" +JSON.stringify(response));
    sync_errorCallBack(response);
  }
  
  
  _validateFacilitySelection();
  
};

//Service call for update Facility
switchFacility_module.updateFacility = function(){
  
  com.healogics.utility.showLoading();
  
  userInfo.roleId = "";
  for(var i=0; i<userInfo.roles.length; i++){ 
    userInfo.roleId = (i==0)? userInfo.roles[i] : userInfo.roleId+"#"+userInfo.roles[i];
  }
  
  kony.print("switchFacility_module.updateFacility roleId::::"+JSON.stringify(userInfo));
  
  var inputData = {
    "accessToken" : userInfo.accessToken,
    "userName" : userInfo.userName,
    "userId":userInfo.userId,
    "timestamp":userInfo.loginTime,
    "oldFacilityId": userInfo.presentFacilityId,
    "facilityId":userInfo.selectedFacilityId,
    "timezone":userInfo.timezone,
    "roleId":userInfo.roleId,
    "roleIdList":userInfo.roleId,
    "login_UIID" : userInfo.login_UIID
  };
  
  var _headerData = {
    "Content-Type": "application/json",
    "Authorization" : userInfo.headerAccessToken,
    "facilityId" : userInfo.selectedFacilityId,
	"userId" :	userInfo.userId,
	"userName" : userInfo.userName,
	"deviceType" : userInfo.deviceType,
	"deviceId" : userInfo.sessionId
  }
  
  
  var _operationName = MF_SERVICECONSTANTS.OPERATION_NAME_UPDATEFACILITY;
  
  if(deepLinkInfo.isDeepLinkFlow == true){
    
    if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_PATIENTSUMMARY_ACTION.toLowerCase()){
      
      patientListConstants.clearSortAndFilter();
      _operationName = MF_SERVICECONSTANTS.OPERATION_NAME_APPPATIENTSUMMARY;
		kony.print("deeplink AppPatientsummary call");
      inputData = {
        "accessToken" : userInfo.accessToken,
        "userName" : userInfo.userName,
        "userId":userInfo.userId,
        "timestamp":userInfo.loginTime,
        "oldFacilityId": userInfo.presentFacilityId,
        "facilityId":userInfo.selectedFacilityId,
        "timezone":userInfo.timezone,
        "roleId":userInfo.roleId,
        "roleIdList":userInfo.roleId,
        "login_UIID" : userInfo.login_UIID,
        
        "userIdValue" : userInfo.userId,
        "patientId" : deepLinkInfo.patientID,
        "firstName" : "",
        "lastName" : "",
        "accessToken" : userInfo.accessToken,
        "facilityId" : userInfo.presentFacilityId,
        "no_of_weeks" : "12W",
        "wound_details" : "0",
        //"patientId":userInfo.patientId// ADDED ACCODING TO CO-4
      };
      
      _headerData = {
          "Content-Type":"application/json",
          "Authorization" : userInfo.headerAccessToken,
          "patientId" : deepLinkInfo.patientID,
          "facilityId" : userInfo.presentFacilityId,
          "userId" : userInfo.userId,
          "userName" : userInfo.userName,
	  	  "deviceType" : userInfo.deviceType,
	  	  "deviceId" : userInfo.sessionId
        };
      
    }else if(deepLinkInfo.action.toLowerCase() == GENERAL_CONSTANTS.DEEPLINK_PATIENTLIST_ACTION.toLowerCase()){
      patientListConstants.clearSortAndFilter();
      _operationName = MF_SERVICECONSTANTS.OPERATION_NAME_APPPATIENTLIST;

      inputData = {
        "accessToken" : userInfo.accessToken,
        "userName" : userInfo.userName,
        "userId":userInfo.userId,
        "timestamp":userInfo.loginTime,
        "oldFacilityId": userInfo.presentFacilityId,
        "facilityId":userInfo.selectedFacilityId,
        "timezone":userInfo.timezone,
        "roleId":userInfo.roleId,
        "roleIdList":userInfo.roleId,
        "login_UIID" : userInfo.login_UIID,

        "userIdValue" : userInfo.userId, //userInfo.encrypteduserId, // 
        "start" : patientListConstants.start,
        "limit" : patientListConstants.limit,
        "filterField" : patientListConstants.filterField1,
        "filterVal" : patientListConstants.filterValue,
        "sortField" : patientListConstants.sortColumn,
        "sortOrder" : patientListConstants.sortOrder,
        "referKey" : patientListConstants.referKey,
        "myPatients" : patientListConstants.myPatients,
        "weekRange" : patientListConstants.weekRange,
        "facilityId" : userInfo.presentFacilityId
      };

    }
  } 
   
  //CO-346
  /*if((isIpad || isIphone) && !SYNC_CONSTANTS.isAppOffline){
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_UPDATEFACILITY,
      {
        "Content-Type": "application/json",
        "Authorization" : userInfo.headerAccessToken
      },
      inputData,
      switchFacility_module.updateFacilityServiceCallbackForIPad,
      switchFacility_module.updateFacilityServiceCallbackForIPad
    );
  }else{*/
    
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
      _operationName,
      _headerData,
      inputData,
      switchFacility_module.updateFacilitySuccessCallback,
      switchFacility_module.updateFacilityFailureCallback
    );
  //CO-346
  //}
};

switchFacility_module.updateFacilityServiceCallbackForIPad = function(response){
  kony.print("response for updateFacilitySuccessCallback service---->"+JSON.stringify(response));
  //applist_cntrl_offline.getAppListForDiplay();
  SwitchFacility_UpdateFacility_New();
}

//Update Facility Service Success Callback
switchFacility_module.updateFacilitySuccessCallback = function(response){
  kony.print("response for updateFacilitySuccessCallback service---->"+JSON.stringify(response));
  if(response!==null && response.opstatus===0 && response.statuscode==="200" && response.appList!=null){
    //userInfo.facilityList = response.facilitylist;
    userInfo.taskCount=response.taskCount; ///AKSHAY - SHOULD NOT BE READ FROM TASK COUNT
    var len = userInfo.facilityList.length;
    for(var i=0;i<len;i++)
    {
    
      if(userInfo.selectedFacilityId == userInfo.facilityList[i].facilityId){
        userInfo.timezone = userInfo.facilityList[i].timeZone;
        userInfo.presentFacilityId = userInfo.facilityList[i].facilityId;
        userInfo.presentFacilityName = userInfo.facilityList[i].facilityName;
        
        if(!isIpad && !isIphone){
          kony.store.setItem("facilityId", userInfo.selectedFacilityId);
        }
        break;
      } 
    }
    
    
    
    if(!deepLinkInfo.isDeepLinkFlow && !deepLinkInfo.isRefreshFlow){
      if(!isIphone){	
        loginModule.processUserAppList(response);
        //Akshay - 2 lines added here since on Switch, the loader was still showing.
        if(isIpad){
          frmSelectFacility.btnSelectFacility.setEnabled(true);
          frmSelectFacility.fcFacilities.segmentFacilities.setEnabled(true);

          frmSelectFacility.fcloginmainbody.fcloader.isVisible = false;
          setPercentageForLoader(0);
        }

      	showLandingScreen();
    	load_headerdata(frmLanding); 
        
    	popupSwitchFacility.dismiss();
      }else if(isIphone){
        var flag=0;
        userInfo.appList=response.appList;
        kony.print("userInfo.appList--"+JSON.stringify(userInfo.appList));
        for(var i=0;i<userInfo.appList.length;i++){
          if(userInfo.appList[i].appid == "2" && userInfo.appList[i].enabledFlag=="Y"){
            flag=1;
            break;
          }
        }
        
        if(flag==1){
          frmSelectFacility.btnSelectFacility.setEnabled(true);
          frmSelectFacility.fcFacilities.segmentFacilities.setEnabled(true);
          frmSelectFacility.fcloginmainbody.fcloader.isVisible = false;
          setPercentageForLoader(0);
          load_headerdata(frmPatientList);
          patientListcallback();
          userInfo.viewPatientList = GENERAL_CONSTANTS.TEXT_TRUE ;
        }else{
          com.healogics.utility.displayAlert(ERROR_CONSTANTS.NOACCESS_PATIENTLIST);
        }
      }
    }else if(deepLinkInfo.isRefreshFlow){
      if(deepLinkInfo.formId == "frmPatientList"){
        deepLinkInfo.isDeepLinkFlow = deepLinkInfo.isRefreshFlow;
        deepLinkInfo.action = GENERAL_CONSTANTS.DEEPLINK_PATIENTLIST_ACTION;
        loginModule.processUserAppList(response);
      }else if(deepLinkInfo.formId == "frmPatientSummary"){
        deepLinkInfo.isDeepLinkFlow = deepLinkInfo.isRefreshFlow;
        deepLinkInfo.patientID = kony.store.getItem("patientId");
        deepLinkInfo.action = GENERAL_CONSTANTS.DEEPLINK_PATIENTSUMMARY_ACTION;
        loginModule.processUserAppList(response);
      }else if(deepLinkInfo.formId == "frmViewTasksNew"){
        deepLinkInfo.isDeepLinkFlow = deepLinkInfo.isRefreshFlow;
        deepLinkInfo.action = GENERAL_CONSTANTS.DEEPLINK_TASKLIST_ACTION;
        loginModule.processUserAppList(response);
      }else if(deepLinkInfo.formId == "frmPatientRecords"){
        deepLinkInfo.isDeepLinkFlow = deepLinkInfo.isRefreshFlow;
        deepLinkInfo.patientID = kony.store.getItem("patientId");
        deepLinkInfo.action = GENERAL_CONSTANTS.DEEPLINK_PATIENTRECORDS_ACTION;
        loginModule.processUserAppList(response);
      }
      else if(deepLinkInfo.formId == "frmWCCDashboard"){
        deepLinkInfo.isDeepLinkFlow = deepLinkInfo.isRefreshFlow;
        deepLinkInfo.action = GENERAL_CONSTANTS.DEEPLINK_WCCDASHBOARD_ACTION;
        loginModule.processUserAppList(response);
      }
      else if(deepLinkInfo.formId == "frmAdmin"){
        deepLinkInfo.isDeepLinkFlow = deepLinkInfo.isRefreshFlow;
        deepLinkInfo.action = GENERAL_CONSTANTS.DEEPLINK_ADMINFACILITY_ACTION;
        loginModule.processUserAppList(response);
      }else{
        loginModule.processUserAppList(response);
        showLandingScreen();
        load_headerdata(frmLanding); 
      }
    }else{
      if(!isIphone)
      loginModule.processUserAppList(response);
    }
    
    if(isIpad && !SYNC_CONSTANTS.isAppOffline){
      resolveConflict_cntrl_offline_getCurrentConflictCount();
    }
    
  }else{
    com.healogics.utility.dismissLoading();
    switchFacility_module.updateFacilityFailureCallback(response);
  }
};
//Update Facility Service Failure Callback
switchFacility_module.updateFacilityFailureCallback = function(response){
  kony.print("metrics_module.appListFailureCallback  start::"+JSON.stringify(response));
  com.healogics.utility.dismissLoading();
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

//Applist Service Success callback
switchFacility_module.appListSuccessCallback = function(response){
  kony.print("response for appListSuccessCallback service---->"+JSON.stringify(response));
  if(response!==null && response.opstatus===0 && response.statuscode==="200" && response.appList!=null){

    loginModule.processUserAppList(response);
    load_headerdata(frmLanding);
    showLandingScreen();
    popupSwitchFacility.dismiss();
  }
  else if(response!==null){    
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      if(response.errdesc!==null && response.errdesc!==""){
        error_label = response.errdesc;
      }
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }else{
    com.healogics.utility.showErrorAlert(ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};
//Applist service Failure Callback
switchFacility_module.appListFailureCallback = function(response){
  kony.print("metrics_module.appListFailureCallback  start::"+JSON.stringify(response));
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};


function sync_successCallBack(respnose){
  ///updating the flag
  SYNC_CONSTANTS.isSyncSuccess = true;
  SYNC_CONSTANTS.isSyncInProgress = false;
  showLastSync();///display the last Sync Time on screen
  ///display the popup on screen
  dismissLoadingScreen();
  popupSyncIncomplete.lblHeader.text = "Sync Complete";
  popupSyncIncomplete.lblmessage.text = "Your changes have been uploaded and are saved to the patient's profile.";
  popupSyncIncomplete.show();
  
  kony.store.setItem("userSyncTime", getDeviceCurrentTime());
  resolveConflict_cntrl_offline_getCurrentConflictCount();
}

function sync_errorCallBack(response){
    SYNC_CONSTANTS.isSyncSuccess = false;
    SYNC_CONSTANTS.isSyncInProgress = false;

    kony.print("inside sync_errorCallBack ......" +JSON.stringify(response));
    //Enable select button
    frmSelectFacility.btnSelectFacility.setEnabled(true);
    frmSelectFacility.fcFacilities.segmentFacilities.setEnabled(true);
	///Akshay
    setPercentageForLoader(0);
    if(isIpad){
      frmSelectFacility.fcloginmainbody.fcloader.isVisible = false;
    }else{
      frmSelectFacility.fcloginmainbody.fcloader.isVisible = false;
    }
    
    var errorCode = response!=null && response.errocode!=null ? response.errorcode : response.errorCode;
    kony.print('syncc errorCallBack errorCode >>>' + errorCode);
    if(errorCode == 1011 || errorCode == "SY0000E" || 
       (response.errorInfo!=null && response.errorInfo.woundSummary2 !=null && 
        response.errorInfo.woundSummary2.errorCode!=null && response.errorInfo.woundSummary2.errorCode!="" && 
        response.errorInfo.woundSummary2.errorCode == "SY0000E")){

      dismissLoadingScreen();

      if(isNetworkAvailable()){

        if(response.errorInfo!=null && response.errorInfo.OfflinePatientRecords!=null && response.errorInfo.OfflinePatientRecords.errorCode == "SY0000E"){
          frmLogin.lbluseriderror.text = ERROR_CONSTANTS.SYNC_DOWNLOAD_SESSION_EXPIRY_ERROR;
        }else{
          frmLogin.lbluseriderror.text = ERROR_CONSTANTS.SYNC_DOWNLOAD_ERROR;
        }
        frmLogin.fcloginerror.setVisibility(true);
        frmLogin.show();
      }else{
        com.healogics.utility.displayAlert(ERROR_CONSTANTS.SYNC_DOWNLOAD_ERROR);
      }
    }else{
      dismissLoadingScreen();
      frmLogin.lbluseriderror.text = ERROR_CONSTANTS.SYNC_DOWNLOAD_ERROR;
      frmLogin.fcloginerror.setVisibility(true);
      frmLogin.show();
    }
    kony.print('syncc errorCallBack errorMessage display end>>>');
  }

var selectFacility_search=function(){
  //showLoadingScreen();
  var search_input="";
  isSearchFacility=true;
  var searchFacilityDataArr=[];
  var currentForm=kony.application.getCurrentForm().id;
  if(currentForm=="frmSelectFacility"){
    search_input=frmSelectFacility.txtfldsearch.text.trim();
  }else if(isIphone && currentForm=="frmSwitchFacility"){
    search_input=frmSwitchFacility.txtfldsearch.text.trim();
  }else{
    search_input=popupSwitchFacility.txtfldsearch.text.trim();
  }
  kony.print("search_input-------"+search_input);
  if(search_input.length ===0){
    if(!isIphone){
      if(currentForm=="frmSelectFacility"){
        frmSelectFacility.fcerror.setVisibility(false);
        frmSelectFacility.lblsearcherror.setVisibility(false);
      }else{
        popupSwitchFacility.hboxerror.setVisibility(false);
        popupSwitchFacility.hboxsearcherror.setVisibility(false);        
      }
    }else{
      frmSwitchFacility.fcerror.setVisibility(false);
      frmSwitchFacility.lblsearcherror.setVisibility(false);
    }
    searchFacility_data(userInfo.processedFacilityList, false);  //userInfo.facilityList
  }else if(search_input.length >= 2){
    
    search_input = search_input.toLowerCase();
    kony.print("selectFacility_search start time--->"+getDeviceCurrentTime())
    for(var i=0;i<userInfo.facilityList.length;i++){
      var facility=userInfo.facilityList[i].facilityName.toLowerCase();
      var facilityNo=userInfo.facilityList[i].facilityId.toLowerCase();
      var facBlueBookId = userInfo.facilityList[i].facilityBluebookId;
      if(facBlueBookId!=null){
        facBlueBookId = facBlueBookId.toLowerCase();
      }else{
        facBlueBookId = facility;
      }
      if(facility.includes(search_input)|| facilityNo.includes(search_input) || facBlueBookId.includes(search_input)){
        searchFacilityDataArr.push(userInfo.facilityList[i]);
        
      }
    }
    if(searchFacilityDataArr.length===0){
      kony.print("no records");
      if(isSwitchFacilityPopupOpen){
        popupSwitchFacility.btnSelect.setEnabled(false);
        popupSwitchFacility.hboxFacilities.setVisibility(false);
        popupSwitchFacility.hboxsearcherror.setVisibility(true);
        popupSwitchFacility.segmentFacilities.removeAll();
      }
      else if(isIphone &&  currentForm == "frmSwitchFacility"){
        frmSwitchFacility.btnselectfacility.setEnabled(false);
        frmSwitchFacility.segmentFacilities.setVisibility(false);
        frmSwitchFacility.lblsearcherror.setVisibility(true);
        frmSwitchFacility.segmentFacilities.removeAll();
        frmSwitchFacility.forceLayout();
      }else if(currentForm == "frmSelectFacility"){
        frmSelectFacility.fcFacilities.setVisibility(false);
        frmSelectFacility.lblsearcherror.setVisibility(true);
        frmSelectFacility.btnSelectFacility.setEnabled(false);
        frmSelectFacility.segmentFacilities.removeAll();
        frmSelectFacility.forceLayout();
      }

    }else{
      frmSelectFacility.btnSelectFacility.setEnabled(true);
      searchFacility_data(searchFacilityDataArr, true);
    }
  }else{
    //stop the timer if user trying for another serarch
    try{
      kony.timer.cancel("facilitytimer12");
    }catch(error){
      kony.print("error in cancelling timer facilitytimer12")
    }
  }
  dismissLoadingScreen();
};
 
var searchFacility_data=function(setFacilityData, processingNeeded){
  var facility_array=[];
  kony.print("searchFacility_data-----"+JSON.stringify(setFacilityData));
  var currentForm = kony.application.getCurrentForm().id;
  
  if(processingNeeded!==null && processingNeeded === true){
  
    for(var i=0;i<setFacilityData.length;i++)
    {
      var data={
        "lblFacility":{text : setFacilityData[i].facilityId +" - "+setFacilityData[i].facilityName},  
        "rowIndex":i,
        "imgFacility":{isVisible:true},
        "facilityId":setFacilityData[i].facilityId,
        "timeZone" : setFacilityData[i].timeZone
      };
      if(isSwitchFacilityPopupOpen){

        if(data.facilityId===userInfo.presentFacilityId || setFacilityData.length==1){
          data.lblFacility.skin="sknlblblackbold85";
        }
        else{
          data.lblFacility.skin="sknlbldarkgray85";
        }
      }
      else if(currentForm !== null){
        data.fcFacility = {skin:"slFbox"};
        if(data.facilityId===userInfo.presentFacilityId || setFacilityData.length==1){
          data.fcFacility.skin="skfcgraydark";
          userInfo.selectedFacilityId = data.facilityId;
        }
        else{
          data.fcFacility.skin="slFbox";
        }
      }
      facility_array.push(data);    
    }
  }else{
    facility_array = userInfo.processedFacilityList;
  }
  
  kony.print("facility_array------"+JSON.stringify(facility_array));
  if(isSwitchFacilityPopupOpen){
    popupSwitchFacility.btnSelect.setEnabled(true);
    popupSwitchFacility.hboxFacilities.setVisibility(true);
    popupSwitchFacility.hboxsearcherror.setVisibility(false);
    popupSwitchFacility.segmentFacilities.removeAll();
    if(isIpad || isIphone){
    	popupSwitchFacility.segmentFacilities.setData(facility_array);
    }else{
      	popupSwitchFacility.segmentFacilities.addAll(facility_array);
    }
    
  }
  else if(isIphone && (currentForm == "frmSwitchFacility" || currentForm == "frmPatientList")){
    frmSwitchFacility.btnselectfacility.setEnabled(true);
    frmSwitchFacility.segmentFacilities.setVisibility(true);
    frmSwitchFacility.lblsearcherror.setVisibility(false);
    frmSwitchFacility.segmentFacilities.removeAll();
    
    if(isIpad || isIphone){
    	frmSwitchFacility.segmentFacilities.setData(facility_array);
    }else{
      	frmSwitchFacility.segmentFacilities.addAll(facility_array);
    }
    
    frmSwitchFacility.forceLayout();
  }else if(currentForm!==null){
    frmSelectFacility.btnSelectFacility.setEnabled(true);
    frmSelectFacility.fcFacilities.setVisibility(true);
    frmSelectFacility.lblsearcherror.setVisibility(false);
    frmSelectFacility.segmentFacilities.removeAll();
    if(isIpad || isIphone){
    	frmSelectFacility.segmentFacilities.setData(facility_array);
    }else{
      
      if(processingNeeded!==null && processingNeeded === false && facility_array.length > FACILITY_LOOP_LENGTH){
        
          facility_array = userInfo.processedFacilityList.slice(0, FACILITY_LOOP_LENGTH);
          frmSelectFacility.segmentFacilities.addAll(facility_array);
          setFacilityData_showAll();
       
      }else{
        frmSelectFacility.segmentFacilities.addAll(facility_array.slice(0, FACILITY_LOOP_LENGTH));
        setFacilityData_showPagination(facility_array);
        
      }
      
      
    }
    frmSelectFacility.forceLayout();
  }
};



var clearSearchFacilityText=function(){
  var currentForm = kony.application.getCurrentForm().id;
  if(isSwitchFacilityPopupOpen){
    popupSwitchFacility.txtfldsearch.text="";
  }else if(isIphone && currentForm == "frmPatientList"){
    frmSwitchFacility.txtfldsearch.text="";
   }
  else if(currentForm !== null){
    frmSelectFacility.txtfldsearch.text="";
  }
  if(isIphone || isIpad)
  //searchFacility_data(userInfo.facilityList);
    searchFacility_data(userInfo.processedFacilityList, false);  //userInfo.facilityList
  isSearchFacility=false;
};

var setFacilityData_showAll = function(){
  
  //switchFacility_module.filteredFacilityList = userInfo.processedFacilityList;
  setFacilityData_showPagination(userInfo.processedFacilityList);
  
  //setFacilityData_selectedData(userInfo.processedFacilityList);
}

var setFacilityData_showPagination = function(dataList){
  
  switchFacility_module.filteredFacilityList = dataList;
  switchFacility_module.currentIndex = FACILITY_LOOP_LENGTH;
  
  if(switchFacility_module.filteredFacilityList.length > FACILITY_LOOP_LENGTH){
    frmSelectFacility.fcpagination.setVisibility(true);
    frmSelectFacility.btnnext.setVisibility(true);
    frmSelectFacility.btnprevious.setVisibility(false);
    
  }else{
    frmSelectFacility.fcpagination.setVisibility(false);
  }
};

var setFacilityData_showPreviousFacilityList = function(){

  frmSelectFacility.segmentFacilities.removeAll();
  switchFacility_module.currentIndex = switchFacility_module.currentIndex - FACILITY_LOOP_LENGTH;
  if(switchFacility_module.currentIndex <= FACILITY_LOOP_LENGTH){
    switchFacility_module.currentIndex = FACILITY_LOOP_LENGTH;
    frmSelectFacility.btnprevious.setVisibility(false);
  }
  
  var startIndex = switchFacility_module.currentIndex - FACILITY_LOOP_LENGTH;
  var endIndex = switchFacility_module.currentIndex;
  
  
  frmSelectFacility.segmentFacilities.addAll(switchFacility_module.filteredFacilityList.slice(startIndex, endIndex));
  
  frmSelectFacility.btnnext.setVisibility(true);
  //setFacilityData_selectedData(userInfo.processedFacilityList);
}

var setFacilityData_showNextFacilityList = function(){
  
  frmSelectFacility.segmentFacilities.removeAll();
  

  var startIndex = switchFacility_module.currentIndex;
  var endIndex = switchFacility_module.currentIndex + FACILITY_LOOP_LENGTH;
  if(endIndex >= switchFacility_module.filteredFacilityList.length){
    switchFacility_module.currentIndex = switchFacility_module.filteredFacilityList.length;
    frmSelectFacility.btnnext.setVisibility(false);
  }
  
  switchFacility_module.currentIndex = endIndex;

  frmSelectFacility.segmentFacilities.addAll(switchFacility_module.filteredFacilityList.slice(startIndex, endIndex));

  frmSelectFacility.btnprevious.setVisibility(true);
}

var setFacilityData_selectedData = function(dataList, index){
  //frmSelectFacility.segmentFacilities.addAll(userInfo.processedFacilityList.slice(200, userInfo.processedFacilityList.length));
  
  kony.print("in loop count start with loading screen");
  //var FACILITY_LOOP_LENGTH = 200;
  
  var CURRENT_DATA_COUNT = FACILITY_LOOP_LENGTH;
  if(CURRENT_DATA_COUNT<dataList.length){
    kony.print("start timer");
    com.healogics.utility.showLoading("Loading facilities...");
    kony.timer.schedule("facilitytimer12",timerFunc, 1, true);
    
  }
  
  function timerFunc() //nested function
  {
    com.healogics.utility.showLoading("Loading facilities...");
    kony.print("in loop count:"+CURRENT_DATA_COUNT)
    frmSelectFacility.segmentFacilities.addAll(dataList.slice(CURRENT_DATA_COUNT, CURRENT_DATA_COUNT+FACILITY_LOOP_LENGTH));
    CURRENT_DATA_COUNT = CURRENT_DATA_COUNT + FACILITY_LOOP_LENGTH;

    if(CURRENT_DATA_COUNT >= dataList.length){
      try{
        kony.timer.cancel("facilitytimer12");
      }catch(error){
        kony.print("error in cancelling timer facilitytimer12")
      }
      if(index !=null){
        kony.print("index value::::"+index);
        frmSelectFacility.segmentFacilities.selectedIndex=[0,index];
      }
	 com.healogics.utility.dismissLoading();
    }
  }

  
//   if(CURRENT_DATA_COUNT<dataList.length){
//     frmSelectFacility.segmentFacilities.addAll(dataList.slice(CURRENT_DATA_COUNT, userInfo.processedFacilityList.length));
//   }
 
  kony.print("in loop count end");
}