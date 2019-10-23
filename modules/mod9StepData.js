/*
*Name: mod9StepData.js
*Purpose: For 9 Step healing Data related functionalities
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 02/23/2017        556600             Dynamic creation of 9step data Logic
*
*/

var healing9StepDataModule = {};
var healing9StepData_txtboxArr=[];

//Method for Notes on begin editing event
function frmPatientSummary_notesOnBeginEditing(){
  frmPatientSummary.lblerror.setVisibility(false);
  kony.print("----- Text box on Begin editing -----");
  kony.print("Notes:----->>>>> "+frmPatientSummary.textareanotes.text);
  kony.application.unregisterForIdleTimeout();
  var autoSaveTime = 2 ; 
  kony.print("----- autoSaveTime -----"+autoSaveTime);
  kony.application.registerForIdleTimeout(autoSaveTime, healing9StepDataModule.autoSaveNotes);
}

//Method for Notes on end editing event
function frmPatientSummary_notesOnEndEditing(){
  kony.print("----- Text box on End editing -----");
  kony.print("Notes:----->>>>> "+frmPatientSummary.textareanotes.text);
  if(frmPatientSummary.fcpopupnotes.isVisible){
    kony.print("isNotesOpen +"+isNotesOpen);
    var autoSaveTime = 2;
    kony.application.unregisterForIdleTimeout();
    kony.application.registerForIdleTimeout(autoSaveTime, healing9StepDataModule.autoSaveNotes);
  }else{
    healing9StepDataModule.registerForIdleTimeOut();
  }
}

//Method for Notes Auto save
healing9StepDataModule.autoSaveNotes = function(){
  kony.print("----- In healing9StepDataModule.autoSaveNotes -----");
  if(frmPatientSummary.textareanotes.text.trim().length>0){
    kony.print("----- frmPatientSummary.textareanotes.text.length>0 -----");
    notesModule.popupnotes_onclickSave();
    kony.timer.schedule("notesTimerid", healing9StepDataModule.setNotesTextBoxTextAsEmpty, 1, false);
  }
  healing9StepDataModule.registerForIdleTimeOut();
};

//Method for setting notes text as empty after save
healing9StepDataModule.setNotesTextBoxTextAsEmpty = function(){
  kony.print("----- healing9StepDataModule.setNotesTextBoxTextAsEmpty -----");
  frmPatientSummary.textareanotes.text = "";
  notesModule.setNotesDefaultMaximumCharactersLimit();
  frmPatientSummary.textareanotes.setFocus(false);
};

//Method to unregister timer for auto save & to Register form for Idle TimeOut
healing9StepDataModule.registerForIdleTimeOut = function(){
  kony.application.unregisterForIdleTimeout();
  registerTimeout();
};

//Method to handle Auto Save of 9 Heal steps data 
healing9StepDataModule.handleAutoSave = function(){
  kony.print("----- In healing9StepDataModule.handleAutoSave -------");
  try{
    kony.timer.cancel("autoSaveTimerid");
  }catch(error){
    kony.print("autoSaveTimerid error ---->>>>"+error);
  }
  kony.timer.schedule("autoSaveTimerid", function(){
    frmPatientSummary_btnSaveClick();
  }, patientSummaryObjects.autoSaveTimerValue, false);
};

// Method to set context of Calendar popup
function frmPatientSummary_SetCalendarContext(eventobject){
  kony.print("-------frmPatientSummary_SetCalendarContext -------");
  if(!isIpad){
    searchPatient_closeSearchList();
    kony.print("-------frmPatientSummary_SetCalendarContext eventobject is -------"+eventobject.id);
    var context = {"widget":frmPatientSummary.fcresulthdr,"anchor":"bottom"};
    eventobject.setContext(context);
    frmPatientSummary.forceLayout();
  }else{
    healing9StepDataModule.x = eventobject;
    frmPatientSummary_calendarDateOnSelection(eventobject,"onTouchStart");
  }
}

//Method to show follow_up Popup
function frmPatientSummary_followUpFieldClick(eventobject){
  searchPatient_closeSearchList();
  var eventObjectId = eventobject.id;
  kony.print("------- frmPatientSummary_createTask eventobject -------"+eventObjectId);
  
  if(eventObjectId.indexOf("fcsubstepedit") >=0){
    var rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "fcsubstepedit");
    kony.print("-------frmPatientSummary_followUpFieldClick rowIndex for Edit-------"+rowIndex);
  }else{
    var rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "fcfollowup");
    kony.print("-------frmPatientSummary_followUpFieldClick rowIndex -------"+rowIndex);
    kony.print("------- patientSummaryObjects.selectedStepData[rowIndex] -------"+JSON.stringify(patientSummaryObjects.selectedStepData[rowIndex]));
    kony.print("------- description -------"+patientSummaryObjects.selectedStepData[rowIndex].description);
    popupcreatetask.lblfollowupdesc.text=patientSummaryObjects.selectedStepData[rowIndex].description;
    popupcreatetask.lblpatientname.text=frmPatientSummary.lblpatientname1.text;
    var len=frmPatientSummary.btnstepsofhealing.text.length;
    popupcreatetask.lblWoundNo.text=  patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno; //frmPatientSummary.btnstepsofhealing.text.substring(len-2); //+" (WoundID: "+ patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno+")";
    popupcreatetask.datecal.clear();
    popupcreatetask.textareadesc.text="";
    popupcreatetask.hboxerror.setVisibility(false);
    frmPatientSummary_setWoundInfoForTask();
    popupcreatetask.show();
  }
  
}

//Method to select result value from list box dropdown
function frmPatientSummary_selectResultValueFromList(eventobject){
  healing9StepDataModule.x = eventobject;
  searchPatient_closeSearchList();
  kony.print("-------frmPatientSummary_selectResultValueFromList -------"+eventobject.id);
  kony.print("-------Selected list box value-------"+eventobject.selectedKeyValue);
  var rowIndex ;
  var selectedresultValue;
  var evenId = eventobject.id;
  if(evenId.includes("listbxresultsub")){ 
    rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "listbxresultsub");
    kony.print("------- drop down value-------"+frmPatientSummary["listbxresult"+rowIndex].selectedKeyValue);
    kony.print("------- complete drop down value-------"+frmPatientSummary["listbxresult"+rowIndex].selectedKeyValue[1]+"@#"+eventobject.selectedKeyValue[1]);
    selectedresultValue = frmPatientSummary["listbxresult"+rowIndex].selectedKeyValue[1]+"@#"+eventobject.selectedKeyValue[1];
  }else{
    rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "listbxresult");
    kony.print("-------patientSummaryObjects.selectedStepData-------"+JSON.stringify(patientSummaryObjects.selectedStepData));
    kony.print("-------patientSummaryObjects.selectedStepData of row-------"+JSON.stringify(patientSummaryObjects.selectedStepData[rowIndex]));
    var possibleValues = patientSummaryObjects.selectedStepData[rowIndex].data_possible_value;
    var keyValue = eventobject.selectedKeyValue[1];
    healing9StepDataModule.handleDropdowns(possibleValues, keyValue, rowIndex);
    selectedresultValue = eventobject.selectedKeyValue[1];
  }
  kony.print("----- selectedresultValue-----"+selectedresultValue);   
  patientSummaryObjects.selectedStepData[rowIndex].result=selectedresultValue;
  kony.print("------- patientSummaryObjects.selectedStepData[rowIndex] -------"+JSON.stringify(patientSummaryObjects.selectedStepData[rowIndex]));
  healing9StepDataModule.prepareEditedFieldsObject(patientSummaryObjects.selectedStepData[rowIndex]);
  healing9StepDataModule.handleAutoSave();
}

//Method for onTextChange event of Result textbox
function frmPatientSummary_onresultTextChange(eventobject){
  kony.print("-------frmPatientSummary_onresultTextChange-------"+eventobject.text);
  //To store the event object in this variable which is used to dismiss keyboard
  //and lose focus of result field before invoking the auto save functionality
  healing9StepDataModule.x = eventobject;
  frmPatientSummary_resultTxtBoxEndEditing(eventobject, "onTextChange");
}

//Method for validating result values based on minimum and maximum values
function frmPatientSummary_resultTxtBoxEndEditing(eventobject,fromWhere){
  kony.print("-------frmPatientSummary_resultTxtBoxEndEditing -------"+eventobject.id);
  kony.print("-------frmPatientSummary_resultTxtBoxEndEditing fromWhere-------"+fromWhere);
  var rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "txtfresult");
  kony.print("-------frmPatientSummary_resultTxtBoxEndEditing rowIndex -------"+rowIndex);
  var strTxt = eventobject.text;
  kony.print("-------strTxt -------"+strTxt);
  kony.print("------- patientSummaryObjects.lastEditedStep -------"+JSON.stringify(patientSummaryObjects.lastEditedStep));
  kony.print("------- patientSummaryObjects.lastEditedStep[rowIndex] -------"+JSON.stringify(patientSummaryObjects.lastEditedStep[rowIndex]));
  if(patientSummaryObjects.lastEditedStep[rowIndex] === undefined){
  	var strResult = "";
  } else {
  	var strResult = (com.healogics.utility.isEmpty(patientSummaryObjects.lastEditedStep[rowIndex].result)) ? "" : 	patientSummaryObjects.lastEditedStep[rowIndex].result; 
  }
  var strFirstLevelValue=strResult.includes("@#") ? strResult.split("@#")[0] : strResult ;
  kony.print("-------strFirstLevelValue-------"+strFirstLevelValue);
  var callSaveFunction = function(){
    if(strFirstLevelValue===strTxt && patientSummaryObjects.healing9stepEditedData.length==1){
      kony.print("-------Previous value & Edit value are same-------");
      try{
        kony.timer.cancel("autoSaveTimerid");
      }catch(error){
        kony.print("autoSaveTimerid error ---->>>>"+error);
      }
    }else{
      patientSummaryObjects.selectedStepData[rowIndex].result=strTxt;
      kony.print("------- patientSummaryObjects.selectedStepData[rowIndex] -------"+JSON.stringify(patientSummaryObjects.selectedStepData[rowIndex]));
      healing9StepDataModule.prepareEditedFieldsObject(patientSummaryObjects.selectedStepData[rowIndex]);
     // healing9StepDataModule.handleAutoSave();
    }
  };

  if(strTxt.length===0){
    kony.print("-------strTxt is empty-------"+strTxt);
    callSaveFunction();
  }else{
    kony.print("-------strTxt -------"+strTxt);
    kony.print("------- patientSummaryObjects.selectedStepData[rowIndex] -------"+JSON.stringify(patientSummaryObjects.selectedStepData[rowIndex]));
    var range = patientSummaryObjects.selectedStepData[rowIndex].data_possible_value;
    if(patientSummaryObjects.selectedStepData[rowIndex].data_possible_value == ""){
      callSaveFunction();
    }else{
      kony.print("-------range.split -------"+range.split("-"));
      var rangeLimits = range.split("-");
      var minimumLimit=rangeLimits[0];
      var maximumLimit=rangeLimits[1];
      var strValidationResultTxt = healing9StepDataModule.validateFloatingPointDecimals(range, strTxt, rowIndex);
      if(strValidationResultTxt === "In range" ){
        callSaveFunction();
      }else if(strValidationResultTxt === "Not in range" ){
        eventobject.text = strFirstLevelValue;
        frmPatientSummary.btnsave.setFocus(true);
        
        com.healogics.utility.displayAlert("Result value should be between "+minimumLimit+" and "+maximumLimit+" or 'N/A' ");
      }else{
        eventobject.text = strFirstLevelValue;
        kony.print("------- decimal error -------");
      }
    }
   
  }
}

//Method to set requested and completed dates and validation for completion date
function frmPatientSummary_calendarDateOnSelection(eventobject,fromWhere){
  kony.print("-------frmPatientSummary_calendarDateOnSelection -------"+eventobject.id);
  var strId = eventobject.id;
  var rowIndex;
  if(strId.includes("caldaterequested")){
    rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "caldaterequested");
  }else{
    rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "caldatecompleted");
  }
  kony.print("-------frmPatientSummary_calendarDateOnSelection rowIndex -------"+rowIndex);
  kony.print("-------formattedDate -------"+eventobject.formattedDate);
  var today = new Date();
  kony.print("-------today -------"+today);
  var currentDate = moment(today).format("MM/DD/YYYY");
  kony.print("-------currentDate -------"+currentDate);
  if(strId.includes("caldaterequested")){
    patientSummaryObjects.selectedStepData[rowIndex].order_date= (fromWhere=="onTouchStart" && eventobject.formattedDate == null) ? currentDate : eventobject.formattedDate; 
  }else{
    patientSummaryObjects.selectedStepData[rowIndex].completed_date= (fromWhere=="onTouchStart" && eventobject.formattedDate == null) ? currentDate : eventobject.formattedDate;
  }
  kony.print("------- patientSummaryObjects.selectedStepData[rowIndex] -------"+JSON.stringify(patientSummaryObjects.selectedStepData[rowIndex]));
  healing9StepDataModule.prepareEditedFieldsObject(patientSummaryObjects.selectedStepData[rowIndex]);
  healing9StepDataModule.handleAutoSave();
}

//Method for save button click
function frmPatientSummary_btnSaveClick(param){
  searchPatient_closeSearchList();
  kony.print("param--->"+param);
  kony.print("------- patientSummaryObjects -------"+JSON.stringify(patientSummaryObjects));
  kony.print("------- selectedWoundIndex -------"+patientSummaryObjects.selectedWoundIndex);
  kony.print("------- patientSummaryObjects.woundDescriptionDetails of selected wound index-------"+JSON.stringify(patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]));
  kony.print("------- patientSummaryObjects.selectedStep -------"+patientSummaryObjects.selectedStep);
  kony.print("------- patientSummaryObjects.selectedStepData -------"+JSON.stringify(patientSummaryObjects.selectedStepData));
  kony.print("------- patientSummaryObjects.healing9stepEditedData -------"+JSON.stringify(patientSummaryObjects.healing9stepEditedData));
  if(patientSummaryObjects.healing9stepEditedData.length===0){
    return;
  }
  //Co-5
  else{
   // var showAlert = false;
    var subSteps = "";
    try{
      
      for(var li=0; li<patientSummaryObjects.healing9stepEditedData.length ; li++){ //patientSummaryObjects.healing9stepEditedData.forEach(function(editedRowData)
        var editedRowData = patientSummaryObjects.healing9stepEditedData[li];

        if(editedRowData.record_level !==null && editedRowData.record_level === "PO" && (editedRowData.order_date === null || editedRowData.order_date === "" || editedRowData.wound_date_added === "")){ //editedRowData.completed_date;

          var _se = /\d/.exec(editedRowData.wnd_sub_desc_id)-1;
          showAlert = true;
          patientSummaryObjects.healing9stepEditedData[li].result = patientSummaryObjects.selectedStepData[_se].result;
          //patientSummaryObjects.healing9stepEditedData[li].order_date = patientSummaryObjects.selectedStepData[_se].order_date; 
          //patientSummaryObjects.healing9stepEditedData[li].completed_date = patientSummaryObjects.selectedStepData[_se].completed_date; 

          patientSummaryObjects.lastEditedStep[li].result = patientSummaryObjects.selectedStepData[_se].result;
         // patientSummaryObjects.lastEditedStep[li].order_date = patientSummaryObjects.selectedStepData[_se].order_date; 
         // patientSummaryObjects.lastEditedStep[li].completed_date = patientSummaryObjects.selectedStepData[_se].completed_date;

          subSteps = subSteps +", "+patientSummaryObjects.healing9stepEditedData[li].description;

        }else if(editedRowData.record_level === "PO" && (editedRowData.order_date !== null && editedRowData.order_date !== "" && editedRowData.wound_date_added !== "")){

          subSteps = subSteps +", "+patientSummaryObjects.healing9stepEditedData[li].description;
         
        }
      }
    }catch(err){
      return "save_error";
    }
   /* if(showAlert === true){
      
      subSteps = subSteps.replace(/,\s/, '');
      var alertMessage = "Please provide valid 'Result' and 'Date Requested' for "+ subSteps +" under "+patientSummaryObjects.selectedStep;
      //var alertMessage = "We could not save the changes for "+ subSteps +" under "+patientSummaryObjects.selectedStep+". Please provide both 'result' and 'ordered date' for the substeps mentioned."
      showErrorAlert(alertMessage, GENERAL_CONSTANTS.TEXT_CLOSE);
      return "save_error";
    }*/
    //Co-5 end
  }
  if(param==="save"){
    kony.print("----in flag true----");
    patientSummaryObjects.showLoadingIndicatorFlag = true;
  }else{
    kony.print("----in flag false----");
    patientSummaryObjects.showLoadingIndicatorFlag = false;
  }
  kony.print("flag--->"+patientSummaryObjects.showLoadingIndicatorFlag);
  //Sandeep offline changes for 9Healings
  if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
   
  var inputData = {
    "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
    "encounterId" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].encounterId,
    "woundId" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundid,
    "woundNo" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno,
    "docentityId" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].docentityId,
    "stepId" : patientSummaryObjects.selectedStep,
    "subStepList" : patientSummaryObjects.healing9stepEditedData,
    "accessToken" : userInfo.accessToken,
    "userName" : userInfo.fullName ////WTC-467, put full name then userName on screen
  };
  kony.print("------- Save heal steps inputData -------"+JSON.stringify(inputData));
  kony.print("--");
///Sandeep offline changes for 9Healings
//  if(isIpad){///Akshay - For Reading always the Offline DB in Online or Offline mode for iPad
//    healing9StepDataModule.disableFocusBeforeAutosave();
//     //changed according to the new table healingSubSteps
//     healingSubSteps_cntrl_offline.saveAllUpdated9StepData(inputData);
//     }
// else{
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_SAVEHEALSTEPS,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
        "facilityId" : userInfo.presentFacilityId,
		"userId" : userInfo.userId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
      },
      inputData,
      healing9StepDataModule.saveHealStepsSuccessCallback,
      healing9StepDataModule.saveHealStepsFailureCallback,
      patientSummaryObjects.showLoadingIndicatorFlag
    );
  //}
  patientSummaryObjects.healing9stepEditedData = [];
  try{
    kony.timer.cancel("autoSaveTimerid");
  }catch(error){
    kony.print("autoSaveTimerid error ---->>>>"+error);
  }

}}

//Success callback method for save 9 step heal
healing9StepDataModule.saveHealStepsSuccessCallback = function(response){
  com.healogics.utility.showLoading();
  saveHealFlag = true;
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
    kony.print("saveHealStepsSuccessCallback response:::"+JSON.stringify(response));
    var patientId=patientSummaryObjects.patientDemoGraphics.patientId;
    com.healogics.patientSummary.getPatientSummary(patientId, "", "", false);
  }
////Sandeep offline changes for 9Healings
    ////Akshay - Calling 9Steps Scope Download/Upload
//    if(isIpad && !SYNC_CONSTANTS.isAppOffline){///Only in online mode.
//      com.healogics.utility.showLoading("Updating Data!"); 
//      SYNC_CONSTANTS.isSyncInProgress = true; ////Akshay - using the flag to stop Sync Now button press.
//      modSyncScopes_offline_9StepsHealing();
//       syncInitialDownload(sync_9HealingStepSuccessCallback, sync_9HealingStepErrorCallBack, false);
//    }
//   }else{
//     showError = true;
//     var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE; 
//     if(response!==null && response.opstatus !== 0 && response.errmsg !== null){
//       error_label = response.errmsg;
//     }
//     com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
//   }
//}
};

//Failure callback method for save 9 step heal
healing9StepDataModule.saveHealStepsFailureCallback = function(response){
  kony.print("saveHealStepsFailureCallback response:::"+JSON.stringify(response));
  com.healogics.utility.showErrorAlert(response.errmsg);
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

// Method to handle dropdown in 9 step healing data description
healing9StepDataModule.handleDropdowns = function(possibleValues,keyValue,rowIndex){
  var arrTemp = possibleValues.split("+");
  if(arrTemp.length>1){
    var keyValueUpper = keyValue.toUpperCase();
    var listData = healing9StepDataModule.prepareResultListValues(possibleValues);
    kony.print("----- listData -----"+JSON.stringify(listData));
    kony.print("----- listData length-----"+listData.length);
    if((typeof listData === 'object') && listData.length===undefined){
      var listMasterData =[];
      kony.print("----- listData keys -----"+Object.keys(listData));
      for(var key=0;key<Object.keys(listData).length;key++){
        var keys = Object.keys(listData)[key].split("@~");
        kony.print("keys[0].toUpperCase()----"+keys[0].toUpperCase());
        kony.print("keyValueUpper----"+keyValueUpper);
        if(keys[0].toUpperCase()===keyValueUpper){
          var secondDropdownValues = listData[Object.keys(listData)[key]];
          kony.print("secondDropdownValues----"+secondDropdownValues);
          if(secondDropdownValues.length>0){
            listMasterData.push(["0","Select"]);
            for(var i=0;i<secondDropdownValues.length;i++){
              var strValue = secondDropdownValues[i];
              var keyValues = strValue.split("@~");
              var arr =  [keyValues[1],keyValues[0]];
              listMasterData.push(arr);
            }
            kony.print("------listMasterData------"+listMasterData);
          }
        }
      }
      if(listMasterData.length>0){
        frmPatientSummary["listbxresultsub"+rowIndex].setVisibility(true);
        frmPatientSummary["fcsubstepdescription"+rowIndex].height = "94dp";
        var strPossibleResultValues = (com.healogics.utility.isEmpty(arrTemp[1])) ? "" : arrTemp[1];
        var strResult = (com.healogics.utility.isEmpty(patientSummaryObjects.selectedStepData[rowIndex].result)) ? "" : patientSummaryObjects.selectedStepData[rowIndex].result;
        var strSecondLevelValue=strResult.includes("@#") ? strResult.split("@#")[1] : "" ;
        frmPatientSummary["listbxresultsub"+rowIndex].masterData=listMasterData; 
        frmPatientSummary["listbxresultsub"+rowIndex].selectedKey = healing9StepDataModule.setSelectedKeyForResultList(strSecondLevelValue,listMasterData);
        healing9StepDataModule.showSecondLevelDropDown(rowIndex);
      }else{
        healing9StepDataModule.hideSecondLevelDropDown(rowIndex);
      }
    }else{
      healing9StepDataModule.hideSecondLevelDropDown(rowIndex);
    } 
  }else{
    healing9StepDataModule.hideSecondLevelDropDown(rowIndex);
  }
  frmPatientSummary.forceLayout();

};

//Method to Show second level dropdown related UI
healing9StepDataModule.showSecondLevelDropDown = function(rowIndex){
  frmPatientSummary["listbxresult"+rowIndex].top = "6.5%";
  frmPatientSummary["listbxresult"+rowIndex].height = "37%";
  frmPatientSummary["listbxresultsub"+rowIndex].top = "56.5%";
  frmPatientSummary["listbxresultsub"+rowIndex].height = "37%"; 
  frmPatientSummary["lbldescription"+rowIndex].padding = [4, 10, 0, 0]; 
  frmPatientSummary["imgfollowup"+rowIndex].top = "30%"; 
  frmPatientSummary["caldaterequested"+rowIndex].padding = [12, 10, 0, 12]; 
  frmPatientSummary["caldatecompleted"+rowIndex].padding = [12, 25, 0, 12];
  frmPatientSummary["lbldatecompleted"+rowIndex].padding = [12, 20, 0, 12]; 
  frmPatientSummary["lbldateRequested"+rowIndex].padding = [12, 20, 0, 12]; 
 //////Sandeep offline changes for UI 
  frmPatientSummary.fcstepdatadescription.height = (patientSummaryObjects.selectedStepData.length)*47+57+"dp";
  frmPatientSummary.fscbody.height="97%";
};

//Method to hide second level dropdown related UI
healing9StepDataModule.hideSecondLevelDropDown = function(rowIndex){
  frmPatientSummary["listbxresultsub"+rowIndex].setVisibility(false);
  frmPatientSummary["fcsubstepdescription"+rowIndex].height = "47dp";
  frmPatientSummary["listbxresult"+rowIndex].top = "13%";
  frmPatientSummary["listbxresult"+rowIndex].height = "74%";
  frmPatientSummary["lbldescription"+rowIndex].padding = [4, 1, 0, 0]; 
  frmPatientSummary["imgfollowup"+rowIndex].top = "10%"; 
  frmPatientSummary["caldaterequested"+rowIndex].padding = [12, 12, 0, 12]; 
  frmPatientSummary["caldatecompleted"+rowIndex].padding = [12, 12, 0, 12]; 
  frmPatientSummary["lbldatecompleted"+rowIndex].padding = [12, 12, 0, 12]; 
  frmPatientSummary["lbldateRequested"+rowIndex].padding = [12, 12, 0, 12]; 
  frmPatientSummary.fcstepdatadescription.height =  (patientSummaryObjects.selectedStepData.length)*47+45+"dp";
};

//Method to extract index value from eventobject ID
healing9StepDataModule.returnIndexValue = function(eventObjectId,strToReplace){
  var selectedRowIndex = eventObjectId.replace(strToReplace, "");
  kony.print("------- selectedRowIndex -------"+selectedRowIndex);
  var index =parseInt(selectedRowIndex);
  kony.print("------- index -------"+index);  
  return index;
};

// Method to prepare edited fields object
healing9StepDataModule.prepareEditedFieldsObject = function(editedRowData){
  kony.print("------- healing9StepDataModule.prepareEditedFieldsObject editedObject -------"+JSON.stringify(editedRowData)); 
  kony.print("------- patientSummaryObjects.healing9stepEditedData before-------"+JSON.stringify(patientSummaryObjects.healing9stepEditedData)); 

  var tempEditedObject = {};
  tempEditedObject.description = editedRowData.description;
  tempEditedObject.wnd_sub_desc_id = editedRowData.wnd_sub_desc_id;
  tempEditedObject.result= (editedRowData.result == "Select") ? "" : editedRowData.result;
  tempEditedObject.order_date =  editedRowData.order_date.includes("-") ? com.healogics.utility.formatDate(editedRowData.order_date): editedRowData.order_date;
  tempEditedObject.completed_date = editedRowData.completed_date.includes("-") ? com.healogics.utility.formatDate(editedRowData.completed_date): editedRowData.completed_date;
  //Co-5
  tempEditedObject.record_level  = editedRowData.record_level;
  kony.print("------- tempEditedObject -------"+JSON.stringify(tempEditedObject)); 
  if(patientSummaryObjects.healing9stepEditedData.length===0){
    patientSummaryObjects.healing9stepEditedData.push(tempEditedObject);
  }else{
    var strStepContainsCheckFlag = false;
    for(var i=0;i<patientSummaryObjects.healing9stepEditedData.length;i++){
      var tempObj = patientSummaryObjects.healing9stepEditedData[i];
      kony.print("------- tempObj -------"+JSON.stringify(tempObj)); 
      if(tempObj.wnd_sub_desc_id===tempEditedObject.wnd_sub_desc_id){
        strStepContainsCheckFlag = true;
        break;
      }else{
        strStepContainsCheckFlag = false;
      }
    }
    if(strStepContainsCheckFlag===false){
      patientSummaryObjects.healing9stepEditedData.push(tempEditedObject);
    }else{
      patientSummaryObjects.healing9stepEditedData[i]=tempEditedObject;
    }
  }
  kony.print("------- patientSummaryObjects.healing9stepEditedData after-------"+JSON.stringify(patientSummaryObjects.healing9stepEditedData)); 
};

//Method to prepare UI for 9 step healing sub-step data 
healing9StepDataModule.prepareStepDecriptionUI = function(){
  kony.print("patientSummaryObjects.selectedStepData ----->>>>> "+JSON.stringify(patientSummaryObjects.selectedStepData));
  frmPatientSummary.fcstepdatadescription.removeAll();
  if(isIpad){
    //hiding the conflict message whenever the user changes a step
    frmPatientSummary.fcConflictMessage.setVisibility(false);
  }

  healing9StepData_txtboxArr = [];

  for(var i=0;i<patientSummaryObjects.selectedStepData.length;i++){

    var strDateRequested;
    var strDateCompleted;
    if(patientSummaryObjects.selectedStepData[i].order_date == null || patientSummaryObjects.selectedStepData[i].order_date == "null" || patientSummaryObjects.selectedStepData[i].order_date == "") {
      strDateRequested="";
    } else{
      strDateRequested = frmPatientSummary_formatWoundListDate1(patientSummaryObjects.selectedStepData[i].order_date);
    }
    if(patientSummaryObjects.selectedStepData[i].completed_date == null || patientSummaryObjects.selectedStepData[i].completed_date == "null" || patientSummaryObjects.selectedStepData[i].completed_date == "") {
      strDateCompleted="";
    } else {
      strDateCompleted = frmPatientSummary_formatWoundListDate1(patientSummaryObjects.selectedStepData[i].completed_date);
    }
    var strResult = (com.healogics.utility.isEmpty(patientSummaryObjects.selectedStepData[i].result)) ? "" : patientSummaryObjects.selectedStepData[i].result;
    var strFirstLevelValue=strResult.includes("@#") ? strResult.split("@#")[0] : strResult ;
    var strPossibleResultValues = (com.healogics.utility.isEmpty(patientSummaryObjects.selectedStepData[i].data_possible_value)) ? "" : patientSummaryObjects.selectedStepData[i].data_possible_value;
    kony.print("strDateRequested---->>> "+strDateRequested);
    kony.print("strDateCompleted---->>> "+strDateCompleted);
    var fcsubstepdescription = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "47dp",
      "id": "fcsubstepdescription"+i,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "0dp",
      "skin": "slFbox",
      "top": "0dp",
      "width": "100%",
      "zIndex": 1
    }, {}, {});
    fcsubstepdescription.setDefaultUnit(kony.flex.DP);
    if(i%2===0){
      //for checking whether the conflict data is editable and show red border in UI if conflict not editable 
      if(isIpad && patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
        kony.print("i and patientSummaryObjects.selectedStepData[i].conflict_editable_flag->::"+i+","+patientSummaryObjects.selectedStepData[i].conflict_editable_flag);
        fcsubstepdescription.skin="skfcredborder";
      }else{
        fcsubstepdescription.skin="slFbox";
      }
    }else{
      if(isIpad && patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
        kony.print("i and patientSummaryObjects.selectedStepData[i].conflict_editable_flag->::"+i+","+patientSummaryObjects.selectedStepData[i].conflict_editable_flag);
        fcsubstepdescription.skin="skfcaltgrayredborder";
      }else{
        fcsubstepdescription.skin="skfcaltgray";
      }
    }
    //for showing a message that says the data is not editable as it is conflict data 
    if(isIpad && patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
      frmPatientSummary.fcConflictMessage.setVisibility(true);      
    }
    var fcdescription = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "100%",
      "id": "fcdescription"+i,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "0%",
      "skin": "sknfctransbggrarybrd",
      "top": "0%",
      "width": "35%",
      "zIndex": 1
    }, {}, {});
    fcdescription.setDefaultUnit(kony.flex.DP); 
    var lbldescription = new kony.ui.Label({
      "top": "10%",
      "height": "80%",
      "id": "lbldescription"+i,
      "isVisible": true,
      "left": "1%",
      "skin": "sknlblgray80",
      "text": patientSummaryObjects.selectedStepData[i].description,
      "width": kony.flex.USE_PREFFERED_SIZE,
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [4, 1, 0, 0],
      "paddingInPixel": true 
    }, {});
    
    fcdescription.add(lbldescription);
    
    var fcfollowup = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "100%",
      "id": "fcfollowup"+i,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "35%",
      "skin": "sknfctransbggrarybrd",
      "onClick": AS_Image_7986e5df893e4d52ab9ebd4e56239d69,
      "top": "0%",
      "width": "8%",
      "zIndex": 1
    }, {}, {});
    fcfollowup.setDefaultUnit(kony.flex.DP);
    var imgfollowup = new kony.ui.Image2({
      "centerX": "50%",
      "top": "10%",
      "height": "40dp",
      "id": "imgfollowup"+i,
      "isVisible": true,
      "skin": "slImage",
      "src": "addtask.png",
      "width": "30dp",
      "zIndex": 1
    }, {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});
    fcfollowup.add(imgfollowup);
    
    
    var fcsubstepedit = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "100%",
      "id": "fcsubstepedit"+i,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "40%",
      "skin": "sknfctransbggrarybrd",
      "onClick": AS_Image_7986e5df893e4d52ab9ebd4e56239d69,
      "top": "0%",
      "width": "8%",
      "zIndex": 1
    }, {}, {});
    fcsubstepedit.setDefaultUnit(kony.flex.DP);
    var imgsubstepedit = new kony.ui.Image2({
      "centerX": "50%",
      "top": "10%",
      "height": "40dp",
      "id": "imgsubstepedit"+i,
      "isVisible": true,
      "skin": "slImage",
      "src": "editnormal.png",
      "width": "30dp",
      "zIndex": 1
    }, {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});
    fcsubstepedit.add(imgsubstepedit);
    
    
    
    
    var fcresult = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "100%",
      "id": "fcresult"+i,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "43%",
      "skin": "sknfctransbggrarybrd",
      "top": "0%",
      "width": "21%",
      "zIndex": 1
    }, {}, {});
    fcresult.setDefaultUnit(kony.flex.DP);
    var lblresult = new kony.ui.Label({
      "centerY": "50%",
      "id": "lblresult"+i,
      "left": "1%",
      "skin": "sknlblgray80",
      "text": strFirstLevelValue,
      "width": "99%",
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [1, 1, 0, 0],
      "paddingInPixel": false
    }, {});
    var listbxresult = new kony.ui.ListBox({
      "height": "74%",
      "id": "listbxresult"+i,
      "left": "5%",
      "onSelection": AS_ListBox_6c7103092d534bcf98e4f7747e2d7239,
      "skin": "sknlbgray80",
      "top": "13%",
      "width": "90%",
      "zIndex": 1,
      "dropDownImage":"listboxarrow.png"

    }, {
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [3, 3, 0, 0],
      "paddingInPixel": false
    }, {
      "multiSelect": false
    });
    var listbxresultsub = new kony.ui.ListBox({
      "height": "74%",
      "id": "listbxresultsub"+i,
      "left": "5%",
      "onSelection": AS_ListBox_6c7103092d534bcf98e4f7747e2d7239,
      "skin": "sknlbgray80",
      "top": "13%",
      "width": "90%",
      "zIndex": 1,
      "dropDownImage":"listboxarrow.png",
      "isVisible" : false
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [3, 3, 0, 0],
      "paddingInPixel": false
    }, {
      "multiSelect": false
    });
    var txtfResultBasic = {
      "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
      "centerX": "50%",
      "centerY": "50%",
      "id": "txtfresult"+i,
      "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
      "placeholder": "Result",
      "secureTextEntry": false,
      "skin": "skntxtftransbggray80",
      "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY, //(patientSummaryObjects.selectedStepData[i].data_possible_value != "") ? TEXTBOX_INPUT_MODE_NUMERIC : constants.TEXTBOX_INPUT_MODE_ANY, 
      "text": lblresult.text,
      "width": "90%",
      "height": "74%",
      "zIndex": 1
    };
    var txtBoxName = "frmPatientSummary_"+"txtfresult"+i;

    healing9StepData_txtboxArr.push(txtBoxName);
    var txtfresultPsp = {	
      "autoCorrect": false,
      "onEndEditing": AS_TextField_b2cc0c2f4a3a4921bcbdee9b0b882fcc,
      "onBeginEditing" : frmPatientSummary_txbox_onBeginediting//AS_NamedActions_a44b54f66a834bc2ac98d5aab7c42200
    };
    if(isIpad){
      txtfResultBasic.onTextChange = AS_TextField_e43e0595bae840908afc99f605494413;
    }else{
      txtfresultPsp.onKeyUp = AS_TextField_e43e0595bae840908afc99f605494413;
      txtfResultBasic.onTextChange = AS_TextField_e43e0595bae840908afc99f605494413;
    }
    var txtfresult = new kony.ui.TextBox2( txtfResultBasic, {
      "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [3, 1, 0, 0],
      "paddingInPixel": false
    }, txtfresultPsp);

    fcresult.add(lblresult, listbxresult, listbxresultsub, txtfresult);
    
    var fcdaterequested = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "100%",
      "id": "fcdaterequested"+i,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "64%",
      "skin": "sknfctransbggrarybrd",
      "top": "0%",
      "width": "18%",
      "zIndex": 1
    }, {}, {});
    fcdaterequested.setDefaultUnit(kony.flex.DP); 
    var lbldateRequested = new kony.ui.Label({
      "top": "10%",
      "height": "80%",
      "id": "lbldateRequested"+i,
      "left": "1%",
      "skin": "sknlblgray80",
      "text": strDateRequested,
      "width": kony.flex.USE_PREFFERED_SIZE,
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [12, 12, 0, 12],
      "paddingInPixel": false
    }, {});
    var caldaterequested = new kony.ui.Calendar({
      "calendarIcon": "calendar.png",
      "centerY": "50%",
      "dateComponents": strDateRequested==="" ? [] : healing9StepDataModule.prepareDateComponents(strDateRequested),
      "dateFormat": "MM/dd/yyyy",
      "height": "40dp",
      "id": "caldaterequested"+i,
      "left": "0%",
      "onTouchStart": AS_Calendar_3c346fad42a841818f7ccf1ee51395f4,
      "onSelection": AS_Calendar_a0c040a8753c44df960759b8bd6420cf,
      "placeholder": "MM/DD/YYYY",
      "skin": "skncalgray80",
      "viewConfig": {
        "gridConfig": {
          "gridCellSelectedSkin": "skcalendarselected100",
          "gridCellSkin": "skcalendarcell100",
          "gridCellTodaySkin": "skcalendartoday100",
          "gridCellWeekendSkin": "skcalendarweekend100",
          "gridSkin": "skcalendargrid100",
          "cancelButtonSkin":"skcalendarfont"
        }
      },
      "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
      "width": "96%",
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [12, 12, 0, 12],
      "paddingInPixel": false
    }, {
      "noOfMonths": 1
    });
    fcdaterequested.add(lbldateRequested, caldaterequested);
    var fcdatecompleted = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "100%",
      "id": "fcdatecompleted"+i,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "82%",
      "skin": "sknfctransbggrarybrd",
      "top": "0%",
      "width": "18%",
      "zIndex": 1
    }, {}, {});
    fcdatecompleted.setDefaultUnit(kony.flex.DP);
    var lbldatecompleted = new kony.ui.Label({
      "top": "10%",
      "height": "80%",
      "id": "lbldatecompleted"+i,
      "left": "1%",
      "skin": "sknlblgray80",
      "text": strDateCompleted,
      "width": kony.flex.USE_PREFFERED_SIZE,
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_CENTER,
      "padding": [12, 12, 0, 12],
      "paddingInPixel": false
    }, {});
    var caldatecompleted = new kony.ui.Calendar({
      "calendarIcon": "calendar.png",
      "centerY": "50%",
      "dateComponents": strDateCompleted==="" ? [] : healing9StepDataModule.prepareDateComponents(strDateCompleted),
      "dateFormat": "MM/dd/yyyy",
      "height": "100%",
      "id": "caldatecompleted"+i,
      "left": "0%",
      //"onTouchStart": isIpad ? "" : AS_Calendar_3c346fad42a841818f7ccf1ee51395f4,
      "onTouchStart": AS_Calendar_3c346fad42a841818f7ccf1ee51395f4,
      "onSelection": AS_Calendar_a0c040a8753c44df960759b8bd6420cf,
      "placeholder": "MM/DD/YYYY",
      "skin": "skncalgray80",
      "viewConfig": {
        "gridConfig": {
          "gridCellSelectedSkin": "skcalendarselected100",
          "gridCellSkin": "skcalendarcell100",
          "gridCellTodaySkin": "skcalendartoday100",
          "gridCellWeekendSkin": "skcalendarweekend100",
          "gridSkin": "skcalendargrid100",
          "cancelButtonSkin":"skcalendarfont"
        }
      },
      "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
      "width": "96%",
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [12, 12, 0, 12],
      "paddingInPixel": false
    }, {
      "noOfMonths": 1
    });
    fcdatecompleted.add(lbldatecompleted, caldatecompleted);
    fcsubstepdescription.add(fcdescription, fcfollowup, fcsubstepedit , fcresult, fcdaterequested, fcdatecompleted);
    frmPatientSummary.fcstepdatadescription.add(fcsubstepdescription);
    fcfollowup.hoverSkin="sknfcTransHover";

    var conflictEditableFlag = true;
    if(patientSummaryObjects.selectedStepData[i].conflict_editable_flag!=null &&  patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
      conflictEditableFlag = false;
    } 



    if((patientSummaryObjects.selectedStepData[i].result_data_avail_flag === false ||patientSummaryObjects.selectedStepData[i].result_data_avail_flag === "false") && conflictEditableFlag == true){
      lblresult.isVisible=false;
      kony.print("----- strPossibleResultValues -----"+strPossibleResultValues);
      kony.print("----- strPossibleResultValues.includes(#) -----"+strPossibleResultValues.includes("#"));
      if(strPossibleResultValues.includes("#")){
        listbxresult.isVisible=true;
        txtfresult.isVisible=false;
        var listData = healing9StepDataModule.prepareResultListValues(strPossibleResultValues);
        kony.print("----- listData -----"+JSON.stringify(listData));
        kony.print("----- listData length-----"+listData.length);
        var listMasterData =[];
        if((typeof listData === 'object') && listData.length===undefined){
          listMasterData =[];
          listMasterData.push(["0","Select"]);
          kony.print("----- listData keys -----"+Object.keys(listData));
          for(var key=0;key<Object.keys(listData).length;key++){
            var strValue = Object.keys(listData)[key];
            var keyValues = strValue.split("@~");
            var arr =  [keyValues[1],keyValues[0]];
            listMasterData.push(arr);
          }
        }else{
          listMasterData =listData;
        }
        listbxresult.masterData= listMasterData;
        listbxresult.selectedKey = healing9StepDataModule.setSelectedKeyForResultList(strFirstLevelValue,listbxresult.masterData);
        healing9StepDataModule.handleDropdowns(strPossibleResultValues,strFirstLevelValue,i);
      }else{
        listbxresult.isVisible=false;
        txtfresult.isVisible=true;
      }
    }else{
      lblresult.isVisible=true;
      listbxresult.isVisible=false;
      txtfresult.isVisible=false;
    }
    if((patientSummaryObjects.selectedStepData[i].date_data_avail_flag === false || patientSummaryObjects.selectedStepData[i].date_data_avail_flag === "false")
       && conflictEditableFlag == true){
      lbldateRequested.isVisible=false;
      caldaterequested.isVisible=true;
    }else{
      lbldateRequested.isVisible=true;
      caldaterequested.isVisible=false;
      fcsubstepedit.isVisible=true;
    }
    if((patientSummaryObjects.selectedStepData[i].completeddate_data_avail_flag === false || patientSummaryObjects.selectedStepData[i].completeddate_data_avail_flag === "false")
       && conflictEditableFlag == true){
      lbldatecompleted.isVisible=false;
      caldatecompleted.isVisible=true;
    }else{
      lbldatecompleted.isVisible=true;
      caldatecompleted.isVisible=false;
    }
    
    if(lblresult.isVisible==true || lbldateRequested.isVisible==true || lbldatecompleted.isVisible==true){
      fcsubstepedit.isVisible = false; //true; based on service 
    }else{
      fcsubstepedit.isVisible = false;
    }

    if(strDateCompleted===""){
      caldatecompleted.dateComponents=[];
    }else{
      caldatecompleted.dateComponents=healing9StepDataModule.prepareDateComponents(strDateCompleted);
    }
    frmPatientSummary.fcstepdatadescription.add(fcsubstepdescription);
    fcfollowup.hoverSkin="sknfcTransHover";
  }
  var fcstepdatadescriptionHeight;
  for(var idx=0;idx<patientSummaryObjects.selectedStepData.length;idx++){
    kony.print("listbxresultsub.isVisible----->>"+frmPatientSummary["listbxresultsub"+idx].isVisible);
    if(frmPatientSummary["listbxresultsub"+idx].isVisible){
      fcstepdatadescriptionHeight = (patientSummaryObjects.selectedStepData.length)*47+57+"dp";
      break;
    }else{
      fcstepdatadescriptionHeight =  (patientSummaryObjects.selectedStepData.length)*47+45+"dp";
    }
    kony.print("fcstepdatadescription height----->>"+fcstepdatadescriptionHeight);
  }
  frmPatientSummary.fcstepdatadescription.height = fcstepdatadescriptionHeight;
  frmPatientSummary.forceLayout();
  if(!isIpad){
    kony.timer.schedule("CalendarTxtfDisable", healing9StepDataModule.disableCalendarTextField, 0.5, false);
  }else{
    if(patientSummary_offline_response.showSubStepConflictError == true){
      com.healogics.utility.displayAlert(patientSummary_offline_response.subStepConflictErrorMsg);
    }
  }
  frmPatientSummary.segwoundslist.setFocus(true);
  if(isIpad){
    frmPatientSummary.scrollToEnd();
  }
};

healing9StepDataModule.disableCalendarTextField = function() {
  try{
    for(var i=0;i<patientSummaryObjects.selectedStepData.length;i++){
      var orderedCalId = "caldaterequested"+i;
      var completedCalId = "caldatecompleted"+i;
      kony.print("orderedCalId----->>>>> "+orderedCalId);
      kony.print("completedCalId----->>>>> "+completedCalId);
      document.getElementById(""+orderedCalId+"").disabled = true;
      document.getElementById(""+completedCalId+"").disabled = true;
    }
  }catch(error){
    kony.print("healing9StepDataModule.disableCalendarTextField error");
  }

};

//Method to Refresh 9 step healing sub-step data 
healing9StepDataModule.refreshStepDecription = function(){
  //Sandeep offline changes loading screen
  com.healogics.utility.showLoading();
  kony.print("---- In healing9StepDataModule.refreshStepDecription -----");
  kony.print("patientSummaryObjects.selectedStepData ----->>>>> "+JSON.stringify(patientSummaryObjects.selectedStepData));
  for(var i=0;i<patientSummaryObjects.selectedStepData.length;i++){
    var strDateRequested;
    var strDateCompleted;
    if(patientSummaryObjects.selectedStepData[i].order_date===null || patientSummaryObjects.selectedStepData[i].order_date==="null" || patientSummaryObjects.selectedStepData[i].order_date===undefined) {
      strDateRequested="";
    } else{
      strDateRequested = frmPatientSummary_formatWoundListDate1(patientSummaryObjects.selectedStepData[i].order_date);
    }
    if(patientSummaryObjects.selectedStepData[i].completed_date===null || patientSummaryObjects.selectedStepData[i].completed_date==="null" || patientSummaryObjects.selectedStepData[i].completed_date===undefined) {
      strDateCompleted="";
    } else {
      strDateCompleted = frmPatientSummary_formatWoundListDate1(patientSummaryObjects.selectedStepData[i].completed_date);
    }
    var strResult = (com.healogics.utility.isEmpty(patientSummaryObjects.selectedStepData[i].result)) ? "" : patientSummaryObjects.selectedStepData[i].result;
    var strFirstLevelValue=strResult.includes("@#") ? strResult.split("@#")[0] : strResult ;
    var strPossibleResultValues = (com.healogics.utility.isEmpty(patientSummaryObjects.selectedStepData[i].data_possible_value)) ? "" : patientSummaryObjects.selectedStepData[i].data_possible_value;
    kony.print("strDateRequested---->>> "+strDateRequested);
    kony.print("strDateCompleted---->>> "+strDateCompleted);

    frmPatientSummary["lbldescription"+i].text = patientSummaryObjects.selectedStepData[i].description; 
    frmPatientSummary["lblresult"+i].text = strFirstLevelValue;
    frmPatientSummary["txtfresult"+i].text = strFirstLevelValue;
    frmPatientSummary["lbldateRequested"+i].text = strDateRequested;
    frmPatientSummary["caldaterequested"+i].dateComponents = strDateRequested==="" ? [] : healing9StepDataModule.prepareDateComponents(strDateRequested);
    frmPatientSummary["lbldatecompleted"+i].text = strDateCompleted;
    frmPatientSummary["caldatecompleted"+i].dateComponents = strDateCompleted==="" ? [] : healing9StepDataModule.prepareDateComponents(strDateCompleted);

 
    
    if(i%2===0){
      //for checking whether the conflict data is editable and show red border in UI if conflict not editable 
      if(isIpad && patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
        kony.print("i and patientSummaryObjects.selectedStepData[i].conflict_editable_flag->::"+i+","+patientSummaryObjects.selectedStepData[i].conflict_editable_flag);
        frmPatientSummary["fcsubstepdescription"+i].skin="skfcredborder";
      }else{
        frmPatientSummary["fcsubstepdescription"+i].skin="slFbox";
      }
    }else{
      if(isIpad && patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
        kony.print("i and patientSummaryObjects.selectedStepData[i].conflict_editable_flag->::"+i+","+patientSummaryObjects.selectedStepData[i].conflict_editable_flag);
        frmPatientSummary["fcsubstepdescription"+i].skin="skfcaltgrayredborder";
      }else{
        frmPatientSummary["fcsubstepdescription"+i].skin="skfcaltgray";
      }
    }
    //for showing a message that says the data is not editable as it is conflict data 
    if(isIpad && patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
      frmPatientSummary.fcConflictMessage.setVisibility(true);      
    }

    var conflictEditableFlag = true;
    if(patientSummaryObjects.selectedStepData[i].conflict_editable_flag!=null &&  patientSummaryObjects.selectedStepData[i].conflict_editable_flag == false){
      conflictEditableFlag = false;
    } 

    if(patientSummaryObjects.selectedStepData[i].result_data_avail_flag === false ||patientSummaryObjects.selectedStepData[i].result_data_avail_flag === "false"){
      frmPatientSummary["lblresult"+i].isVisible=false;
      kony.print("----- strPossibleResultValues -----"+strPossibleResultValues);
      kony.print("----- strPossibleResultValues.includes(#) -----"+strPossibleResultValues.includes("#"));
      if(strPossibleResultValues.includes("#")){
        frmPatientSummary["listbxresult"+i].isVisible=true;
        frmPatientSummary["txtfresult"+i].isVisible=false;
        var listData = healing9StepDataModule.prepareResultListValues(strPossibleResultValues);
        kony.print("----- listData -----"+JSON.stringify(listData));
        kony.print("----- listData length-----"+listData.length);
        var listMasterData =[];
        if((typeof listData === 'object') && listData.length===undefined){
          listMasterData =[];
          listMasterData.push(["0","Select"]);
          kony.print("----- listData keys -----"+Object.keys(listData));
          for(var key=0;key<Object.keys(listData).length;key++){
            var strValue = Object.keys(listData)[key];
            var keyValues = strValue.split("@~");
            var arr =  [keyValues[1],keyValues[0]];
            listMasterData.push(arr);
          }
        }else{
          listMasterData =listData;
        }
        frmPatientSummary["listbxresult"+i].masterData= listMasterData;
        frmPatientSummary["listbxresult"+i].selectedKey = healing9StepDataModule.setSelectedKeyForResultList(strFirstLevelValue,frmPatientSummary["listbxresult"+i].masterData);
        healing9StepDataModule.handleDropdowns(strPossibleResultValues,strFirstLevelValue,i);
      }else{
        frmPatientSummary["listbxresult"+i].isVisible=false;
        frmPatientSummary["txtfresult"+i].isVisible=true;
      }
    }else{
      frmPatientSummary["lblresult"+i].isVisible=true;
      frmPatientSummary["listbxresult"+i].isVisible=false;
      frmPatientSummary["txtfresult"+i].isVisible=false;
    }
    if(patientSummaryObjects.selectedStepData[i].date_data_avail_flag === false || patientSummaryObjects.selectedStepData[i].date_data_avail_flag === "false" && conflictEditableFlag == true){
      frmPatientSummary["lbldateRequested"+i].isVisible=false;
      frmPatientSummary["caldaterequested"+i].isVisible=true;
    }else{
      frmPatientSummary["lbldateRequested"+i].isVisible=true;
      frmPatientSummary["caldaterequested"+i].isVisible=false;
    }
    if(patientSummaryObjects.selectedStepData[i].completeddate_data_avail_flag === false || patientSummaryObjects.selectedStepData[i].completeddate_data_avail_flag === "false" && conflictEditableFlag == true){
      frmPatientSummary["lbldatecompleted"+i].isVisible=false;
      frmPatientSummary["caldatecompleted"+i].isVisible=true;
    }else{
      frmPatientSummary["lbldatecompleted"+i].isVisible=true;
      frmPatientSummary["caldatecompleted"+i].isVisible=false;
    }
  }
  frmPatientSummary.btnmostrecentphysicianorders.setFocus(true);
};


//Method to prepare results list
healing9StepDataModule.prepareResultListValues = function(strValues){
  kony.print("----- strValues-----"+strValues);
  var arrResultValues = [];
  var finaObject = {};
  arrResultValues.push(["0","Select"]);
  if(strValues.includes("+")){
    var arrTemp = strValues.split("+");
    var arrKeys = [];
    var finalObject = {};
    kony.print("----- arrTemp-----"+arrTemp);
    for(var k=0;k<arrTemp.length;k++){
      var strTmp = arrTemp[k];
      kony.print("----- strTmp -----"+strTmp);
      if(strTmp.includes("#")){
        var temp = [];
        var arrResult = strTmp.split("#");
        kony.print("----- arrResult-----"+arrResult);
        for(var i=0;i<arrResult.length;i++){
          var strValue = arrResult[i];
          var keyValues = strValue.split("@~");
          if(keyValues[1].includes("S")){
            temp.push(strValue);
            kony.print("----- temp -----"+temp);
            finalObject[arrKeys[arrKeys.length-1]]=temp;
            kony.print("----- finalObject-----"+JSON.stringify(finalObject));
          }else{
            kony.print("----- finalObject-----"+JSON.stringify(finalObject));
            arrKeys.push(strValue);
            kony.print("----- arrKeys 1-----"+arrKeys);
            finalObject[strValue]=[];
          }
        }
      }else{
        arrKeys.push(strTmp);
        kony.print("----- arrKeys 2-----"+arrKeys);
        finalObject[strTmp]=[];
        kony.print("----- finalObject-----"+JSON.stringify(finalObject));
      }
    }
    kony.print("----- finalObject final-----"+JSON.stringify(finalObject));
    return finalObject;
  }else{
    var arrRst = strValues.split("#");
    kony.print("----- arrRst -----"+arrRst);
    for(var j=0;j<arrRst.length;j++){
      var strValue1 = arrRst[j];
      var keyValue = strValue1.split("@~");
      var arrKeyPair =  [keyValue[1],keyValue[0]];
      arrResultValues.push(arrKeyPair);
    }
    kony.print("----- arrResultValues -----"+JSON.stringify(arrResultValues));
    return arrResultValues;
  }
};

//Method to prepare date components of calendar
healing9StepDataModule.prepareDateComponents = function(date){
  kony.print("----- date ----- "+date);
  var requiredDateComponentsFormat = [];
  var dateComponents;
  if(date.includes("-")){
    dateComponents = date.split("-");
    kony.print("----- dateComponents ----- "+dateComponents);
    requiredDateComponentsFormat.push(dateComponents[1]);
    requiredDateComponentsFormat.push(dateComponents[2]);
    requiredDateComponentsFormat.push(dateComponents[0]);

  }else{
    dateComponents = date.split("/");
    kony.print("----- dateComponents ----- "+dateComponents);
    requiredDateComponentsFormat.push(dateComponents[1]);
    requiredDateComponentsFormat.push(dateComponents[0]);
    requiredDateComponentsFormat.push(dateComponents[2]);
  }
  kony.print("----- requiredDateComponentsFormat ----- "+requiredDateComponentsFormat);
  return requiredDateComponentsFormat;

};

//For converting the ordered  date and completed date format of sub step details ("mm/dd/yyyy" to "yyyy-MM-dd").
//In offline DB "yyyy-MM-dd" is being used while saving
healing9StepDataModule.formOfflineDateFormat = function(date){
  kony.print("----- date ----- "+date);
  if(date == ""){
    return "";
  }else{
    var offlineDateFormat;
    var returnedArray = healing9StepDataModule.prepareDateComponents(date);
    offlineDateFormat = returnedArray[2] + "-"+returnedArray[1] +"-"+ returnedArray[0];
    kony.print("----- offlineDateFormat ----- "+offlineDateFormat);
    return offlineDateFormat; 
  }
};

healing9StepDataModule.setSelectedKeyForResultList = function(strResult,arrList){
  kony.print("----- strResult ----- "+strResult);
  kony.print("----- arrList ----- "+arrList);
  kony.print("----- arrList length----- "+arrList.length);
  var selectedKey = "0";
  for(var i=0;i<arrList.length;i++){
    var tempArr = arrList[i];
    kony.print("----- tempArr ----- "+tempArr);
    if(strResult===tempArr[1]){
      selectedKey =  tempArr[0];
    }
  }
  kony.print("----- selectedKey ----- "+selectedKey);
  return selectedKey;  
};

healing9StepDataModule.validateFloatingPointDecimals = function(range,strTxt,rowIndex){
  
  
  if(healing9StepDataModule.validateForNA(strTxt)){
    return "In range";
  }
  
  var minimumLimit;
  var maximumLimit;
  var enteredNumber;
  var rangeLimits = range.split("-");
  kony.print("-------range[0] -------"+rangeLimits[0]);
  kony.print("-------range[1] -------"+rangeLimits[1]);
  if(parseInt(rangeLimits[1]).toString(10)===rangeLimits[1]){
    kony.print("------- Integer -------");
    minimumLimit = parseInt(rangeLimits[0]);
    maximumLimit = parseInt(rangeLimits[1]);
    kony.print("-------minimumLimit  "+minimumLimit+"  maximumLimit -------"+maximumLimit);
    if(strTxt.includes(".")){
      com.healogics.utility.displayAlert("Please enter integer values only");
      frmPatientSummary.btnsave.setFocus(true);
      return;
    }else{
      enteredNumber = parseInt(strTxt);
    }
  }else{
    kony.print("------- Float -------");
    minimumLimit = parseFloat(rangeLimits[0]);
    maximumLimit = parseFloat(rangeLimits[1]);
    kony.print("-------minimumLimit  "+minimumLimit+"  maximumLimit -------"+maximumLimit);
    if(strTxt.includes(".")){
      var enteredDecimals = strTxt.split(".");
      kony.print("------- enteredDecimals -------"+enteredDecimals);
      var limitDecimals = rangeLimits[1].split(".");
      kony.print("------- limitDecimals -------"+limitDecimals);
      if(enteredDecimals[1].length<=limitDecimals[1].length){
        enteredNumber = parseFloat(strTxt);
      }else{

        com.healogics.utility.displayAlert("Please enter value with max "+limitDecimals[1].length+" digits precision only.");
        return "Invalid";
      }      
    }else{
      enteredNumber = parseFloat(strTxt);
    }
  }
  if(enteredNumber<=maximumLimit && enteredNumber>=minimumLimit){
    return "In range";
  }else{
    return "Not in range";
  }
};

// Method for review MSR service call
healing9StepDataModule.reviewMSR = function(){
  kony.print("In healing9StepDataModule.reviewMSR ----->>>>>");
  var inputData = {
    "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
    "encounterId" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].encounterId,
    "woundId" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundid,
    "woundNo" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno,
    "docEntityId" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].docentityId,
    "weeksInTreatment" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].weeksInTreatment,
    "facilityId" : userInfo.presentFacilityId,
    "accessToken" : userInfo.accessToken,
    "userId" : userInfo.userId,
    "userName" : userInfo.userName
  };
  kony.print("healing9StepDataModule.reviewMSR inputData ----->>>>>"+JSON.stringify(inputData));
  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_MSRREVIEW,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    healing9StepDataModule.reviewMSRSuccessCallBack,
    healing9StepDataModule.reviewMSRFailureCallBack
  );
};

//Method for review MSR service success callback
healing9StepDataModule.reviewMSRSuccessCallBack = function(response){
  kony.print("In healing9StepDataModule.reviewMSRSuccessCallBack ----->>>>>"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){

    var woundLevelMSRReviewStatus = response.woundLevelMSRReviewStatus;
    var patientLevelMSRReviewStatus = response.patientLevelMSRReviewStatus;

    if(woundLevelMSRReviewStatus!=null && woundLevelMSRReviewStatus!=undefined && woundLevelMSRReviewStatus == "true"){
      frmPatientSummary.lblmsr1.text = "MSR Reviewed";
      patientSummaryObjects.patientDemoGraphics.msrReviewFlag = "true";
      frmPatientSummary.fcwounddetailsheader.forceLayout();
    }

    if(patientLevelMSRReviewStatus!=null && patientLevelMSRReviewStatus!=undefined && woundLevelMSRReviewStatus != ""){
      frmPatientSummary.lblmsrstatus.text = patientLevelMSRReviewStatus;
    }

    var lUserRole = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].role;
    if(lUserRole!=null && lUserRole!=undefined && lUserRole.toLowerCase() == "physician"){
      patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].physicianReviewFlag  = true;
    }else{
      patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].clinicianReviewFlag  = true;
    }

    //changing woundlevel status if user toggles between wounds
    patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].wound_review_flag  = "MSR Reviewed";
    //Changing patientlevel status if needed...
    if(patientLevelMSRReviewStatus.indexOf("Review") > 0){
      patientSummaryObjects.patientSummaryResponse.msrReviewFlag = true;
    }
    var snapShot  = response.SnapShot;
    if(snapShot!=null && snapShot!=undefined && snapShot != ""){ //woundLevelMSRReviewStatus!=null && woundLevelMSRReviewStatus == "true" && 
      com.healogics.utility.displayAlert(snapShot);
    }
    frmPatientSummary.btnReviewMSR.skin = "skngraybgbold";
    frmPatientSummary.btnReviewMSR.setEnabled(false);
    /*if(isIpad && !SYNC_CONSTANTS.isAppOffline){
      com.healogics.utility.showLoading("Updating Data!"); 
      SYNC_CONSTANTS.isSyncInProgress = true; ////Akshay - using the flag to stop Sync Now button press.
      modSyncScopes_offline_9StepsHealing();
      syncInitialDownload(sync_9HealingStepSuccessCallback, sync_9HealingStepErrorCallBack, false);
    }*/

  }else if(response.statuscode=="401"){
    com.healogics.utility.showErrorAlert(response.responsedesc);
  }else if(response.errmsg!==null){
    com.healogics.utility.showErrorAlert(response.errmsg);
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method for review MSR service failure callback
healing9StepDataModule.reviewMSRFailureCallBack = function(response){
  kony.print("In healing9StepDataModule.reviewMSRFailureCallBack ----->>>>>"+JSON.stringify(response));
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

// Method for MOST RECENT PHYSICIAN ORDERS service call
healing9StepDataModule.mostRecentPhysicianOrders = function(){
  kony.print("In healing9StepDataModule.mostRecentPhysicianOrders ----->>>>>");
  var inputData = {
    "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
    "type":"MRPO",
    "facilityId": userInfo.presentFacilityId,
    "documentUUID": "",
    "visitId" : patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].encounterId,
  };
  kony.print("healing9StepDataModule.mostRecentPhysicianOrders inputData ----->>>>>"+JSON.stringify(inputData));
  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_MOSTRECENTPHYSICIANORDERS, //MF_SERVICECONSTANTS.OPERATION_NAME_MOSTRECENTPHYSICIANORDERS,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    healing9StepDataModule.mostRecentPhysicianOrdersSuccessCallBack,
    healing9StepDataModule.mostRecentPhysicianOrdersFailureCallBack
  );
};

//Method for RECENT PHYSICIAN ORDERS  service success callback
healing9StepDataModule.mostRecentPhysicianOrdersSuccessCallBack = function(response){
  kony.print("In healing9StepDataModule.mostRecentPhysicianOrdersSuccessCallBack ----->>>>>"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200" && response.document!=null){
    showHTMLContent(response.document);
  }else if(response.responsedesc!=null && response.responsedesc!="" ){
    com.healogics.utility.displayNoTitleAlert(response.responsedesc);
  }else if(response.errmsg!==null){
    com.healogics.utility.showErrorAlert(response.errmsg);
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method for RECENT PHYSICIAN ORDERS  service failure callback
healing9StepDataModule.mostRecentPhysicianOrdersFailureCallBack = function(response){
  kony.print("In healing9StepDataModule.mostRecentPhysicianOrdersFailureCallBack ----->>>>>"+JSON.stringify(response));
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

//function to remove focus of a result textfield when invoking auto save
healing9StepDataModule.disableFocusBeforeAutosave = function(){
  kony.print("in healing9StepDataModule.disableFocusBeforeAutosave");
  try{
    if(healing9StepDataModule.x !== null && healing9StepDataModule.x.id !== null && healing9StepDataModule.x.id !== undefined){
      kony.print("inside if condition of loose focus");
      frmPatientSummary[healing9StepDataModule.x.id].setFocus(false);
    } 
  }catch(err){
    kony.print("healing9StepDataModule.disableFocusBeforeAutosave error");
  }

};


///callbacks
function sync_9HealingStepSuccessCallback(){
  kony.print("in sync_9HealingStepSuccessCallback");
  try{

    kony.print("in sync_9HealingStepSuccessCallback step1----->");
    resolveConflict_cntrl_offline_getCurrentConflictCount();

    kony.print("in sync_9HealingStepSuccessCallback step2----->");


    var woundNumber = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno;

    healingSubSteps_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo(
      patientSummaryObjects.patientDemoGraphics.patientId,
      woundNumber,
      patientSummaryObjects.selectedStep
    );

    kony.print("in sync_9HealingStepSuccessCallback step3----->");

    patientSummaryObjects.selectedStepData = patientSummary_offline_response.woundList[patientSummaryObjects.selectedWoundIndex].stepSummary[patientSummaryObjects.selectedStep].stepInfo.subStepDetails;

    healing9StepDataModule.prepareStepDecriptionUI();

  }catch(error){
    kony.print("sync_9HealingStepSuccessCallback error:::"+error);
  }
}

function sync_9HealingStepErrorCallBack(){
  kony.print("in sync_9HealingStepErrorCallBack");
}

function isNumberKeyTest(evt) {
  var e = evt && evt.type == 'keydown' ? evt : window.event;
  if (e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    kony.print("charCode---"+charCode); //50 //99
    
    if (charCode != 78 && charCode != 65 && charCode != 191 && charCode != 46 &&  charCode != 110 && charCode != 190 && charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
      e.preventDefault && e.preventDefault();
      e.returnValue = false;
    }
  }
}

function healingsubsteps_txtxboxListener(eventobject){
  
  kony.print("-------healingsubsteps_txtxboxListener -------"+eventobject.id);
  var rowIndex = 	healing9StepDataModule.returnIndexValue(eventobject.id, "txtfresult");
  kony.print("-------healingsubsteps_txtxboxListener rowIndex -------"+rowIndex);
  kony.print("-------healingsubsteps_txtxboxListener data_possible_value -------"+patientSummaryObjects.selectedStepData[rowIndex].data_possible_value);
  
   if(patientSummaryObjects.selectedStepData[rowIndex].data_possible_value != ""){
    if(!isIpad){
      kony.print("-----_txtboxArr--"+healing9StepData_txtboxArr);
      for(var i=0;i<healing9StepData_txtboxArr.length;i++){
        var id=healing9StepData_txtboxArr[i];
        var tNode = document.getElementById(id);
        if(tNode){
          tNode.addEventListener('keydown', isNumberKeyTest, false);
        }
      }
    }
  }	
}


healing9StepDataModule.validateForNA = function(strText){
  kony.print("healing9StepDataModule.validateForNA::::"+strText);
  if(strText!=null && (strText == "N" || strText == "N/" || strText == "N/A")){
    return true;
  }
  return false; 
};
//CO-5

function healing9StepDataModule_checkForSync(){
  com.healogics.utility.showLoading("Updating Data!"); 
  SYNC_CONSTANTS.isSyncInProgress = true; ////Akshay - using the flag to stop Sync Now button press.
  modSyncScopes_offline_9StepsHealing();
  syncInitialDownload(sync_9HealingStepSuccessCallback, sync_9HealingStepErrorCallBack, false);
}