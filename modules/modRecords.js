/*
*Name: modRecords.js
*Purpose: For Patient Records related functionalities
*Change Log:
*-------------------------------------------------------------------------------------------------------
* Date              Developer            Comments
*-------------------------------------------------------------------------------------------------------
* 31/03/2017        Mona                 UI,Service Integration and Functionality of frmPatientRecords 
*
*
*/
var recordsModule={};

//Method called on PostShow event of frmPatientRecords
function frmPatientRecords_postShowfunc(){
  registerTimeout();
  hideFormMenu();
  load_headerdata();
  if(isIpad)
    changeConnectionStatus(isNetworkAvailable());
  frmPatientRecords.tbpatientsearch.text="";
  frmPatientRecords.fcsearchdropdown.setVisibility(false);
  frmPatientRecords.imgSearchIcon.src="search.png";
  if(isIpad)
    frmPatientRecords.btnConnected.setEnabled(false);
  uploadDocumentConstants.selectedRow = 0;
  if(isIpad && !SYNC_CONSTANTS.isAppOffline){
    resolveConflict_cntrl_offline.setBadgeValueForUI();
  }
}

//Method called on onTouchEnd event of frmPatientRecords
var frmPatientRecords_onTouchEnd_call=function(){
  hideFormMenu();
};


//Method to getRecord types list
recordsModule.getRecordList=function(response){
  if(isIphone){
    if(!isUploadButtonClicked){
      recordListConstants.recordList = response.documentSummary;
      var len = recordListConstants.recordList.length;
      if(len>0){
        recordsModule.setListData();
        frmPatientDetails.btnUpload.skin="skbtnuploaddocplusgray";
        frmPatientDetails.show();
        displayAppVersion(frmPatientDetails);

      }else{
        com.healogics.utility.showErrorAlert(response.responsedesc, GENERAL_CONSTANTS.TEXT_CLOSE);
      }
    }
  }
  else{
    frmPatientRecords.segmentRecords.removeAll();
    recordListConstants.recordList = response.documentSummary;
    recordsModule.prepareRecordTypesSegment();
  }
};

recordsModule.prepareRecordTypesSegment = function(){
  var len = recordListConstants.recordList.length;
  kony.print("len----->"+len);
  if(len>0){
    if(isIphone){
      if(!isUploadButtonClicked){
        recordsModule.setListData();
        frmPatientDetails.btnUpload.skin="skbtnuploaddocplusgray";
        frmPatientDetails.show();
        displayAppVersion(frmPatientDetails);

      }
    }else{
      tempRecord=[];
      for(i=0;i<len;i++){
        var data={
          "lblRecordType": recordListConstants.recordList[i].documentCount == 0  ?  recordListConstants.recordList[i].documentName : (recordListConstants.recordList[i].documentName + " (" + recordListConstants.recordList[i].documentCount +")"),
          "documentType" : recordListConstants.recordList[i].documentType,
          "documentName" : recordListConstants.recordList[i].documentName ,
          "documentCount" : recordListConstants.recordList[i].documentCount,
          "rowIndex":i,
          "imgBackground":{src:"onelinearrownormal.png",width:"95%"},
          "fcUpload":{skin:"slFbox",isVisible:true},
          "imgUpload":{src:"upload.png",isVisible:true},
          "lblLine" : {isVisible:true}
        };
        if(data.documentName==="Photos" && data.documentCount > 0){
          data.lblRecordType="Uploaded Photos" +" (" + recordListConstants.recordList[i].documentCount +")";
        } else if (data.documentName==="Photos") {
          data.lblRecordType="Uploaded Photos";
        }
        tempRecord.push(data);   
      }
      tempRecord[uploadDocumentConstants.selectedRow].imgBackground={src:"onelinearrow.png",width:"100%"};
      frmPatientRecords.segmentRecords.setData(tempRecord);
      kony.print("tempRecord----->>>>>"+JSON.stringify(tempRecord));
      kony.print("frmPatientRecords.segmentRecords.data----->>>>>"+JSON.stringify(frmPatientRecords.segmentRecords.data));
      frmPatientRecords.lblDocType.text = recordListConstants.recordList[uploadDocumentConstants.selectedRow].documentName;
      uploadDocumentConstants.inputDocumentType = recordListConstants.recordList[uploadDocumentConstants.selectedRow].documentType;
      frmPatientRecords_getDocumentList();  
    }
  }else{
    com.healogics.utility.showErrorAlert( response.responsedesc, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};


recordsModule.getRecords = function(successCallback , failureCallback){
  kony.print("----in recordsModule.getRecordsCount start----");
  var patientId = "";
  if(isIphone){
    patientId = patientId_iPhone;
  }else{
    patientId = patientSummaryObjects.patientDemoGraphics.patientId;
  }
//   if(isIpad || isIphone){ 
//     // getDocumentTypes SELECT DISTINCT docTypeName FROM records;
//     patientRecords_offline.getAllPatientRecords(patientId);

//   }
  ///Sandeep offline changes
  if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
    var inputData = {
      "patientId" : patientId,
      "accessToken" : userInfo.accessToken
    };
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_GETDOCUMENTTYPES,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "patientId" : patientId,
        "facilityId" : userInfo.presentFacilityId,
		"userId" : userInfo.userId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
      },
      inputData,
      function(response){ //Success callback

        if(response.statuscode=== "200" && response.opstatus === 0){

          recordsModule.getRecordList(response);

          successCallback(response);
        }
      },
      function(response){ //failure mf callback
        kony.print("In recordsModule.showDocumentFailureCallback ----->>>>>"+JSON.stringify(response));

        if(response.statuscode === "204"){
          recordsModule.getRecordsType(response);
          failureCallback(response);
        }else{
          var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
          if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
            error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
            loginModule.showLoginScreen(error_label);
          }else{
            com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
          }
        }

      }
    );
  }
};


//Success Callback for recordsModule.getRecordList
recordsModule.getRecordsSuccessCallback = function(response){
  if(response.statuscode=== "200" && response.opstatus === 0){
    recordsModule.getRecordList(response);
  }
};

recordsModule.getRecordsFailureCallback = function(response){
  kony.print("In recordsModule.showDocumentFailureCallback ----->>>>>"+JSON.stringify(response));
  if(response.statuscode === "204"){
    recordsModule.getRecordsType(response);
  }else{
    ///Sandeep offline changes
    var error_label;
if( isIpad && !isNetworkAvailable()){
   error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  }else{
  error_label= ERROR_CONSTANTS.SERVICE_LOAD_ERROR;
  }
   // var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method called on rowClick of segRecords for change in UI for the focused row
var frmPatientRecords_segRecords_onRowClick=function(){
  searchPatient_closeSearchList();
  if(frmPatientRecords.segmentRecords.selectedItems!=null && frmPatientRecords.segmentRecords.selectedItems[0]!=null){
    var rowIndex=frmPatientRecords.segmentRecords.selectedItems[0].rowIndex;
    kony.print("rowIndex--->"+rowIndex);
    kony.print("uploadDocumentConstants.selectedRow--->"+uploadDocumentConstants.selectedRow);
    var docType=frmPatientRecords.segmentRecords.selectedItems[0].documentType;
    uploadDocumentConstants.selectedDocumentType=docType;
    uploadDocumentConstants.selectedDocumentName=frmPatientRecords.segmentRecords.selectedItems[0].documentName;
    if(uploadDocumentConstants.selectedRow === rowIndex){
      return;
    }
    kony.print("rowIndex--->"+rowIndex);
    uploadDocumentConstants.selectedRow = rowIndex ;
    kony.print("uploadDocumentConstants.selectedRow ----->"+uploadDocumentConstants.selectedRow);
    kony.print("uploadDocumentConstants.selectedDocumentName----"+uploadDocumentConstants.selectedDocumentName);
    kony.print(" uploadDocumentConstants.selectedDocumentType----"+ uploadDocumentConstants.selectedDocumentType);
    kony.print("docType-------->"+docType);
    uploadDocumentConstants.inputDocumentType = docType;  
    kony.print("uploadDocumentConstants.inputDocumentType------>"+uploadDocumentConstants.inputDocumentType);
    recordsModule.getRecords(function(a){},function(b){});
  }
  
};


recordsModule.frmPatientRecords_hideDocList = function (){
  frmPatientRecords.lblNoRecords.text = "No Patient Records";
  frmPatientRecords.lblNoRecords.setVisibility(true);
  frmPatientRecords.segmentDocuments.removeAll();
  frmPatientRecords.segmentDocuments.setVisibility(false);
  frmPatientRecords.fcDocumentListHeader.setVisibility(false);
  frmPatientRecords.fcpaginatebuttons.setVisibility(false);

};

recordsModule.frmPatientRecords_showDocList = function(){
  frmPatientRecords.lblNoRecords.setVisibility(false);
  frmPatientRecords.segmentDocuments.setVisibility(true);
  frmPatientRecords.fcDocumentListHeader.setVisibility(true);
};

//Method to get Documents list
var frmPatientRecords_getDocumentList=function(){
  kony.print("----on frmPatientRecords_getDocumentList start---");
  //alert("row Click");
  ///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
     var patientId = isIphone ? patientId_iPhone : patientSummaryObjects.patientDemoGraphics.patientId;

    var inputData = {
      "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
      "documentType" : uploadDocumentConstants.inputDocumentType,
      "accessToken" : userInfo.accessToken
    };

    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_GETDOCUMENTLIST,
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
      recordsModule.getDocumentsSuccessCallback,
      recordsModule.getDocumentListFailureCallback
    );
  }

};

//Success callback method for getDocumentList to show documentlist
recordsModule.getDocumentsSuccessCallback=function(response){
  if(response.statuscode == "200"  && response.opstatus === 0){
    recordsModule.getDocList(response);
  }
};

recordsModule.getDocList = function(response){

  recordListConstants.documentList=response.documentTypeSummary;
  var len=recordListConstants.documentList.length;
  kony.print("recordListConstants.documentList------>"+JSON.stringify(recordListConstants.documentList));
  if(com.healogics.utility.isEmpty(recordListConstants.documentList) || len===0){
    recordsModule.frmPatientRecords_hideDocList();
  }
  else{
    var document_data=[];
    for(i=0;i<len;i++){
      var tempRecord = {
        "btnDocument": {text:recordListConstants.documentList[i].documentName},//".pdf"
        "btnDelete" : {skin : "skbtnDelete",isVisible:true},
        "lblLine1" : {},
        "lblLine2" : {},
        "documentUUID" : recordListConstants.documentList[i].documentUUID,
        "lblDateUploaded": (recordListConstants.documentList[i].documentUploadedDate === "") || (recordListConstants.documentList[i].documentUploadedDate === null) || (recordListConstants.documentList[i].documentUploadedDate == "null") ? "" :com.healogics.utility.dateFormatForRecords(recordListConstants.documentList[i].documentUploadedDate)
      };
      document_data.push(tempRecord);
    }
    recordsModule.frmPatientRecords_showDocList();
    paginate(document_data,"frmPatientRecords");
  }
  if(kony.application.getCurrentForm().id != "frmPatientRecords"){
    com.healogics.patientSummary.setPatientDemoGraphics(patientSummaryObjects.patientDemoGraphics,"frmPatientRecords");
    frmPatientRecords.show(); 
  }
  frmPatientRecords.forceLayout();
};

recordsModule.getDocumentListFailureCallback = function(response){
  kony.print("In recordsModule.showDocumentFailureCallback ----->>>>>"+JSON.stringify(response));
  if(response.statuscode === "204"){
    recordsModule.getDocList(response);
  }else{
    ///Sandeep offline changes
    if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION
  }else{
    var error_label= ERROR_CONSTANTS.SERVICE_LOAD_ERROR;
  }
   // var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method for deletion of a document from document list
var frmPatientRecords_deleteDocument=function(context){
  searchPatient_closeSearchList();
  uploadDocumentConstants.deleteRowIndex = context.rowIndex;
  kony.print("eventobject--->"+JSON.stringify(context.rowIndex));
  var documentUuid = frmPatientRecords.segmentDocuments.selectedItems[0].documentUUID;
//   if(isIpad){ 
//     patientRecords_offline.deleteSelectedRecord(documentUuid);
//   }else{
  //Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
   com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
    var inputData = {
      "documentUUID" : documentUuid,
      "facilityId" : userInfo.presentFacilityId,
      "accessToken" : userInfo.accessToken
    };
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_DELETEDOCUMENT,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "facilityId" : userInfo.presentFacilityId,
		"userId" : userInfo.userId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
      },
      inputData,
      recordsModule.deleteDocumentSuccessCallback,
      recordsModule.RecordsModuleFailureCallback
    );
  }
};

recordsModule.deleteDocumentSuccessCallback = function(response){
  if(response.statuscode == "200" && response.opstatus === 0){
    recordsModule.reloadRecordsAfterDelete();
    if(isIpad && !SYNC_CONSTANTS.isAppOffline){///Only in online mode.
      com.healogics.utility.showLoading("Updating Data!"); 
      modSyncScopes_offline_patientRecords();
      syncInitialDownload(sync_notesSuccessCallback, sync_notesErrorCallBack);
    }
  } else{
    alert("Document delete failed !");
  }
};

recordsModule.reloadRecordsAfterDelete = function(){
  frmPatientRecords.segmentDocuments.removeAt(uploadDocumentConstants.deleteRowIndex);
  var len=frmPatientRecords.segmentRecords.data.length;
  var recordsData = frmPatientRecords.segmentRecords.data;
  for(i=0;i<len;i++){
    if(recordsData[i].imgBackground.src == "onelinearrow.png"){
      uploadDocumentConstants.selectedRow = i;
      uploadDocumentConstants.inputDocumentType = recordListConstants.recordList[i].documentType;
    }
  }
  recordsModule.getRecords(function(a){},function(b){});
  frmPatientRecords_getDocumentList();
};


function getRecordCount(){
  kony.print("--------getRecordCount-------");
  var documentCount = 0;
  for(var i=0;i<recordListConstants.recordList.length;i++){
    //if(uploadDocumentConstants.selectedDocumentType==recordListConstants.recordList[i]["documentType"]){
    if(recordListConstants.recordList[i]["documentCount"]!=null){
      documentCount = documentCount + parseInt(recordListConstants.recordList[i]["documentCount"]);

    }
  }
  kony.print("documentCount in records"+documentCount);
  return documentCount;
}

//for getting only non-url document count
function getUploadedRecordCount(){
  
  var documentCount = 0;

  var patientId = "";
  if(isIphone){
    patientId = patientId_iPhone;
  }else{
    patientId = patientSummaryObjects.patientDemoGraphics.patientId;
  }
  var wcs = "where patientId="+ patientId+ " and srcTypeCode <> 'url'";

  kony.print("getUploadedRecordCount WCS ----->>>>>"+wcs);
  com.healogics.offline.getPatientRecords.getCount(wcs,successcallback,errorcallback);

  function successcallback(resc){
    kony.print("getUploadedRecordCount successcallback --------->"+ JSON.stringify(resc));
    
    documentCount = resc.count;
    kony.print("documentCount in records"+documentCount);
  	return documentCount;
  }
  function errorcallback(resc){
    com.healogics.utility.dismissLoading();
    kony.print("getUploadedRecordCount failure callback");
    documentCount = getRecordCount();
  }
  
  return documentCount;
}

recordsModule.getTotalCountOfEachRecordType = function(docType){
  kony.print("----- docType ----"+docType);
  var documentCount = 0;
  for(var i=0;i<recordListConstants.recordList.length;i++){
    kony.print("----- recordListConstants.recordList[i].documentType ----"+recordListConstants.recordList[i].documentType);
    if(docType===recordListConstants.recordList[i].documentType){
      if(recordListConstants.recordList[i].documentCount!=null){
        documentCount = documentCount + parseInt(recordListConstants.recordList[i].documentCount);
      }
    }
  }
  return documentCount;
};

//Method to upload document
var onUpload_Click=function(eventobject){
  uploadDocumentConstants.clear();
  isFailure=false;
  kony.print("---in onUpload_Click function---");
  if(isIpad || isIphone){
    ///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
    frmPatientRecords_callFFIforUploadDocuments("segment");
  }
  }else{
    frmPatientRecords_segRecords_onRowClick();
    kony.print("-------in segment upload click--------");
    kony.print("uploadDocumentConstants.selectedRow------>"+uploadDocumentConstants.selectedRow);
    kony.print("selected document type === "+uploadDocumentConstants.selectedDocumentType);

//     var lengthofrecord=getRecordCount();
//     kony.print("lenth records"+lengthofrecord);
//     if(lengthofrecord>=uploadDocumentConstants.maxDocumentsListSize){
//       com.healogics.utility.displayAlert(ERROR_CONSTANTS.UPLOADDOCUMENT_MAXFILE_LIMIT_ERROR);
//       //com.healogics.utility.displayAlert("You have reached the maximum number of files allowed for a patient record (100).");
//     }else{
      onclick_selectFiles();
//     }

  }
};

//Method to set data for dropdown of document types 
recordsModule.setListData=function(){
  var docTypeArray=[];
  var len=recordListConstants.recordList.length;
  for(i=0;i<len;i++){
    var data_type=[];
    data_type.push(recordListConstants.recordList[i].documentType);
    data_type.push(recordListConstants.recordList[i].documentName);
    docTypeArray.push(data_type);  
  }
  kony.print("docTypeArray---->"+JSON.stringify(docTypeArray));
  if(isIphone)
    frmPatientDetails.listboxDocType.masterData = docTypeArray;
  else
    frmPatientRecords.listboxDocType.masterData = docTypeArray;
};

//Method to view document 
var frmPatientRecords_showDocument=function(context){
  searchPatient_closeSearchList();
  var woundhealingUUID="";
  kony.print("------in frmPatientRecords_showDocument start-------");
  //alert("document link clicked");
  var rowIndex=context.rowIndex;
  var data=frmPatientRecords.segmentDocuments.data;
  kony.print("segmentDocumets data----->"+JSON.stringify(data));
  var len=data.length;
  for(i=0;i<len;i++){
    if(i==rowIndex){
      woundhealingUUID=data[i].documentUUID;
    }
  }
  ///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
 
    var inputData = {
      "documentUUID" : woundhealingUUID,
      "facilityId" : userInfo.presentFacilityId,
      "accessToken" : userInfo.accessToken
    };
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_VIEWDOCUMENT,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "facilityId" : userInfo.presentFacilityId,
		"userId" : userInfo.userId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
      },
      inputData,
      recordsModule.showDocumentSuccessCallback,
      recordsModule.RecordsModuleFailureCallback
    );
  }
};

//success callback method for view Document 
recordsModule.showDocumentSuccessCallback=function(response){
  kony.print("---recordsModule.showDocumentSuccessCallback----"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
    var pdfOrHtmlFlag = (com.healogics.utility.isEmpty(response.documents[0].srcTypeCode)) ? "" : response.documents[0].srcTypeCode;
    if(pdfOrHtmlFlag==="url"){
      showHTMLContent(response.documents[0].document);
    }else{
      printModuleConstants.base64Output = "data:application/pdf;base64,"+response.documents[0].document;
      printModuleConstants.enablePrint = false;
      kony.print("response.documents[0].srcTypeCode------"+response.documents[0].srcTypeCode);
      if(response.documents[0].srcTypeCode=="image"){
        popupImageViewer.imgViewer.base64=response.documents[0].document;
        popupImageViewer.show();
      }else{
        onclickViewPdf();
      }
    }
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

recordsModule.RecordsModuleFailureCallback = function(response){
  kony.print("In recordsModule.showDocumentFailureCallback ----->>>>>"+JSON.stringify(response));
 ///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  }else{
    var error_label= ERROR_CONSTANTS.SERVICE_LOAD_ERROR;
  }
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

recordsModule.getDocumentType=function(string){
  var a;
  for(i=0;i<recordListConstants.recordList.length;i++){
    if(recordListConstants.recordList[i].documentName == string){
      a = i;
    }
  }
  return a;
};

function frmPatientRecords_formBackHandler(){
  var currentForm = kony.application.getCurrentForm().id;
  if(currentForm == "frmLanding"){
    kony.print("do nothing...be in the same form");
  }else if(currentForm == "frmPatientSummary"){
    patientListcallback();
  }else{
    var previousForm = kony.application.getPreviousForm().id;
    if(previousForm == "frmPatientSummary"){
      patientSummaryFromTaskList();
    }else{
      kony.print("frmPatientRecords_formBackHandler::::"+previousForm);
      kony.application.getPreviousForm().show();
    }
  }
}

function frmPatientDetails_recordType_onTouchStart(){
  frmPatientDetails.btnUpload.skin="skbtnuploaddocplus";
}
