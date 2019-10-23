var PRINT_EXPORT_TEMPLATES = {
  PATIENT_SUMMARY_TABLE : "0",
  PATIENT_WOUND_STEPS : "1",
  PATIENT_SUMMARY_CHART : "2",
  PATIENT_LIST : "3",
  USER_TASK_LIST : "4",
  PRINT_DOCUMENT_TYPE_PDF : "0",
  PRINT_DOCUMENT_TYPE_EXCEL : "1",
  PRINT_ACTION :""
};

var printExportModule = {};

printExportModule.generatePdf = function(){
  var inputData = {
    templateName : printModuleConstants.templateName, //WoundSummary, 9steps, patientlist, tasklist
    fileType : printModuleConstants.fileType, //PDF, EXCEL, REVIEW
    fileName : printModuleConstants.fileName,  
    jsonInput : printModuleConstants.jsonInput,
    chartData : printModuleConstants.chartData,
    profileImage : printModuleConstants.profileImage
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_CPGLINK,
    MF_SERVICECONSTANTS.OPERATION_NAME_GENERATEPDF,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken
    },
    inputData,
    printExportModule.generatePdfSuccessCallback,
    printExportModule.generatePdfFailureCallback
  );
};

printExportModule.generatePdfSuccessCallback = function(response){
  kony.print("printExportModule.generatePdfSuccessCallback response::::"+JSON.stringify(response));
  if(response.base64Output===null ||   response.base64Output===""){
    var error_label = ERROR_CONSTANTS.EXPORT_DOCUMENTS_ERROR;
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    return;
  }
  printModuleConstants.base64Output = "data:application/pdf;base64,"+response.base64Output;
  printModuleConstants.enablePrint = true;
  if(isIpad){
    pdfViewer_iPad(response.base64Output);
  }else{
    if(PRINT_EXPORT_TEMPLATES.PRINT_ACTION === "Print")
      onclickViewPdf();
    else{
      var contentType = 'application/pdf';
      var blob = convertBase64ToBlob(response.base64Output, contentType);
      saveAs(blob,'HealogicsDoc.pdf'); 
    } 
  }
};



printExportModule.generatePdfFailureCallback = function(response){
  kony.print("printExportModule.generatePdfFailureCallback response::::"+JSON.stringify(response));
  var error_label = ERROR_CONSTANTS.EXPORT_DOCUMENTS_ERROR;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
};


printExportModule.generateExcel = function(){

  var inputData = {
    templateName : printModuleConstants.templateName, //WoundSummary, 9steps, patientlist, tasklist
    fileType : printModuleConstants.fileType, //PDF, EXCEL, REVIEW
    fileName : printModuleConstants.fileName,  
    jsonInput : printModuleConstants.jsonInput
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_CPGLINK,
    MF_SERVICECONSTANTS.OPERATION_NAME_GENERATEPDF,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken
    },
    inputData,
    printExportModule.generateExcelSuccessCallback,
    printExportModule.generatePdfFailureCallback
  );

};

printExportModule.generateExcelSuccessCallback = function(response){
  kony.print("printExportModule.generateExcelSuccessCallback response::::"+JSON.stringify(response));
  var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  var blob = convertBase64ToBlob(response.base64Output, contentType);
  saveAs(blob,'HealogicsDoc.xlsx'); // FileSaver.js function
};

//Patient List
printExportModule.patientListReport = function(templateName,fileType){
  var jsonInputObject = {};
  jsonInputObject.msrList = patientListConstants;
  jsonInputObject.patientList = frmPatientList.segpatientlist.data;
  kony.print("inside printExportModule.patientListReport:::"+JSON.stringify(patientSummaryObjects.patientSummaryResponse));
  printModuleConstants.jsonInput = jsonInputObject;
  printModuleConstants.templateName = templateName;
  printModuleConstants.fileName = "PatientList";
  printModuleConstants.fileType = fileType;

};

//Patient Summary Demographic details
printExportModule.patientWoundSummaryReport = function(templateName,fileType){  
  kony.print("inside printExportModule.patientWoundSummaryReport:::"+JSON.stringify(patientSummaryObjects.patientSummaryResponse));
  printModuleConstants.jsonInput = clone(patientSummaryObjects.patientSummaryResponse);
  kony.print("printModuleConstants.jsonInput:::"+JSON.stringify(printModuleConstants.jsonInput));
  var convertedDate = com.healogics.utility.convertEST_To_PST_CST_TimeZone(printModuleConstants.jsonInput.nextAppointmentDt,userInfo.timezone,DATE_FORMAT.NEXT_APPOINTMENT);
  printModuleConstants.jsonInput.nextAppointmentDt = frmPatientSummary_formatWoundListDate1(convertedDate);
  if(com.healogics.utility.listContainsValue("woundSummary", Object.keys(printModuleConstants.jsonInput))){
    var woundSummary = [];
    kony.print("printModuleConstants.jsonInput.woundSummary:::"+JSON.stringify(printModuleConstants.jsonInput.woundSummary));
    kony.print("woundsSelected----->>>>"+woundsSelected);
    for(var i=0;i<woundsSelected.length;i++){
      var strWoundNum = (typeof woundsSelected[i] === 'object') ? woundsSelected[i].woundNum : woundsSelected[i];
      var woundSummaryIndex = printExportModule.getSelectedWoundIndex(printModuleConstants.jsonInput.woundSummary, strWoundNum);
      if(woundSummaryIndex != null && woundSummaryIndex != "null" && woundSummaryIndex != undefined){
        woundSummary.push(printModuleConstants.jsonInput.woundSummary[woundSummaryIndex]);
      }
    }
    kony.print("woundsSelected:::"+woundsSelected);
    kony.print("woundSummary:::"+JSON.stringify(woundSummary));
    printModuleConstants.jsonInput.woundSummary = woundSummary;
  }
  //Filter the selected wounds and remove the rest of items from woundList ie. summary screen
  if(com.healogics.utility.listContainsValue("woundList", Object.keys(printModuleConstants.jsonInput))){
    var woundList = [];
    kony.print("printModuleConstants.jsonInput.woundList:::"+JSON.stringify(printModuleConstants.jsonInput.woundList));
    for(var i=0;i<woundsSelected.length;i++){
      var strWoundNum = (typeof woundsSelected[i] === 'object') ? woundsSelected[i].woundNum : woundsSelected[i];
      var woundListIndex = printExportModule.getSelectedWoundIndex(printModuleConstants.jsonInput.woundList, strWoundNum);
      if(woundListIndex != null && woundListIndex != "null" && woundListIndex != undefined){
        woundList.push(printModuleConstants.jsonInput.woundList[woundListIndex]);
      }
    }
    kony.print("woundList:::"+JSON.stringify(woundList));
    printModuleConstants.jsonInput.woundList = woundList;
  }
  //UI filters for PRINT 
  printModuleConstants.jsonInput.selectedWeekInGraph = selectedWeekValue;
  printModuleConstants.jsonInput.selectedTabIndex = selectedTab; //To toggle b/w tabs in summary screen
  printModuleConstants.jsonInput.measurementUnits = measurementUnits;

  printModuleConstants.templateName =templateName;
  printModuleConstants.fileName = "PatientSummary_patientName";
  printModuleConstants.fileType = fileType;
  if(printModuleConstants.chartImageAsBase64 !== null && printModuleConstants.chartImageAsBase64!== undefined){
    printModuleConstants.chartData = printModuleConstants.chartImageAsBase64;
  }
};


printExportModule.getSelectedWoundIndex = function(arr,index){
   kony.print("----- arr ------->>>>> "+JSON.stringify(arr));
   kony.print("----- index ------->>>>> "+index);
  var selectedWoundindex;
  var strWoundNum = (typeof index === 'object') ? index.woundNum : index ;
  for(var temp=0; temp<arr.length; temp++){
    var str = (com.healogics.utility.listContainsValue("woundLabel", Object.keys(arr[temp]))) ? arr[temp].woundLabel.replace("Wound ", "") :  arr[temp].woundno;
    kony.print("----- str ------->>>>> "+str);
    kony.print("----- strWoundNum ------->>>>> "+strWoundNum);
    kony.print("----- parseInt(str) ------->>>>> "+parseInt(str));
    if(parseInt(str) == strWoundNum ){
      selectedWoundindex = temp;
      break;
    }
  }
  kony.print("----- selected wound label index ------->>>>> "+selectedWoundindex);
  return selectedWoundindex;
};

//9 steps details
printExportModule.patientWoundLevelStepReport = function(templateName,fileType){
  var woundListReviewObject = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary;
  woundListReviewObject.caseManager = patientSummaryObjects.patientDemoGraphics.caseManager;
  woundListReviewObject.wccPhy = patientSummaryObjects.patientDemoGraphics.wccPhy;
  woundListReviewObject.woundId = frmPatientSummary.btnstepsofhealing.text;
  kony.print("patientSummaryObjects.selectedWoundIndexname---->>" +frmPatientSummary.btnstepsofhealing.text);
  var patientName = patientSummaryObjects.patientDemoGraphics.patientName;//patientSummaryObjects.patientDemoGraphics.firstName +" "+ patientSummaryObjects.patientDemoGraphics.lastName;
  woundListReviewObject.patientName = patientName;
  JSON.stringify(woundListReviewObject);
  printModuleConstants.jsonInput = woundListReviewObject;
  printModuleConstants.templateName = templateName;
  printModuleConstants.fileName = "_patientName";
  printModuleConstants.fileType = fileType;
};

printExportModule.taskListReport = function(templateName,fileType){
  var jsonInputObject = {};
  jsonInputObject.userName = userInfo.fullName;
  jsonInputObject.taskList = task_info.filterData;
  kony.print("inside printExportModule.taskListReport:::"+JSON.stringify(jsonInputObject));
  printModuleConstants.jsonInput = jsonInputObject;
  printModuleConstants.templateName = templateName;
  printModuleConstants.fileName = "TaskList";
  printModuleConstants.fileType = fileType;
};

function convertBase64ToBlob (b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;
  var byteCharacters = atob(b64Data);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

