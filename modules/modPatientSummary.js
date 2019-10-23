/*
*Name: modPatientSummary.js
*Purpose: For Patient details,9 step healing related functionalities
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 01/05/2017        556600                 Integration Logic
*
*
*/
var selectedTab = 0; //Selected tab  0 for Graph 1 for Table. PRINT & Export function
var measurementUnits ="Area"; //Selected units of measurement. defaults to area. PRINT & Export module
woundImagesModule={};
var additionalLinks = [];
if(typeof(com)=== "undefined"){ com = {}; }  
if(typeof(com.healogics)=== "undefined"){ com.healogics = {}; }

//Javascript namespace for patient dashboard
com.healogics.patientSummary = (function () {

  //Method to get patient dashboard summary from service
  var _getPatientSummary = function(patientId, patientFirstName, patientLastName,showStepOne){
   //Sandeep offline changes loading screen
    patientListConstants.weekRange = "";
    com.healogics.utility.showLoading();
    kony.print("--------- showStepOne  -----------"+showStepOne);
    kony.print("--------- !showStepOne  -----------"+!showStepOne);
    patientSummaryObjects.saveButtonFlag = !showStepOne;
    kony.print("--------- patientSummaryObjects.saveButtonFlag  -----------"+patientSummaryObjects.saveButtonFlag);
    if(showStepOne!=null && showStepOne == true){
      patientSummaryObjects.clear();
      patientSummaryObjects.selectedStep = "Step1";
      patientSummaryObjects.healing9stepEditedData=[];
    }

    kony.store.setItem("patientId", patientId);
       
    ///Sandeep offline changes
        var inputData = {
        "userIdValue" : userInfo.userId,
        "patientId" : patientId,
        "firstName" : patientFirstName,
        "lastName" : patientLastName,
        "accessToken" : userInfo.accessToken,
        "facilityId" : userInfo.presentFacilityId,
        "no_of_weeks":"12W",
        "wound_details":"0"// ADDED ACCODING TO CO-4  
      };
	  kony.print("input data PS>>>"+JSON.stringify(inputData));
      com.healogics.mfutility.invokeIntegrationService(
        MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
        MF_SERVICECONSTANTS.OPERATION_NAME_PATIENTSUMMARY,
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
        _patientSummarySuccessCallback,
        _patientSummaryFailureCallback,
        patientSummaryObjects.showLoadingIndicatorFlag
      );
    };

  //Patient dashboard service Sucess callback function
  var _patientSummarySuccessCallback = function(response){
    //Sandeep offline changes loading screen
    com.healogics.utility.showLoading();
    if(deepLinkInfo.isFromEpic == true) {
      	frmPatientSummary.fchamburgermenu.setVisibility(false);
	 	frmPatientSummary.btnhome.setVisibility(false);
		frmPatientSummary.lbltitlesep1.setVisibility(false);
		frmPatientSummary.btnhdrsubtitle2.setVisibility(false);
		frmPatientSummary.seperatorImage.setVisibility(false);
        frmPatientSummary.lblSearch.setVisibility(false);
        frmPatientSummary.tbpatientsearch.setVisibility(false);
        frmPatientSummary.imgSearchIcon.setVisibility(false);
		frmPatientSummary.fcmstheader.fcsubmenu.setVisibility(false);
    }
    kony.print("_patientSummarySuccessCallback response:::"+JSON.stringify(response));
    patientSummaryObjects.patientSummaryResponse = clone(response);
 	//Set default 12W for 1st Patient Details call
  
   // if(isIpad){
     	kony.store.setItem(userInfo.userId+"_summaryWeekRange", 12); 
   //}
     kony.print("patientSummaryObjects.patientSummaryResponse:::"+JSON.stringify(patientSummaryObjects.patientSummaryResponse));
    
    
    patientSummaryObjects.clear();
    patientSummaryObjects.woundDescriptionDetails = response.woundList;
    
    patientSummaryObjects.woundIdMapping = []; 
    for(i=0 ; i<patientSummaryObjects.woundDescriptionDetails.length ; i++)
    {
          kony.print(patientSummaryObjects.woundDescriptionDetails[i].woundno+"#@#"+patientSummaryObjects.woundDescriptionDetails[i].docentityId); 
          patientSummaryObjects.woundIdMapping[(parseInt(patientSummaryObjects.woundDescriptionDetails[i].woundno)) - 1] = patientSummaryObjects.woundDescriptionDetails[i].docentityId; 
          kony.print(patientSummaryObjects.woundIdMapping);
    }
    
    //muzib
     woundCount = patientSummaryObjects.woundDescriptionDetails.length ;
     woundSummaryCount = 0;
    kony.print("patientSummaryObjects.woundDescriptionDetails ------>>> "+JSON.stringify(patientSummaryObjects.woundDescriptionDetails));
    kony.print("woundCount ------>>> "+woundCount);
    
    //muzib
    //if(response.woundSummary!==undefined && response.woundSummary!==null){
	if (! com.healogics.utility.isEmpty(response.woundSummary)){
      
      woundSummaryCount = response.woundSummary.length;
      
      patientSummaryObjects.patientListAndGraphData = response.woundSummary;
      kony.print("patientSummaryObjects.patientListAndGraphData ------>>> "+JSON.stringify(patientSummaryObjects.patientListAndGraphData));
      kony.print("patientSummaryObjects.patientListAndGraphData length ------>>> "+patientSummaryObjects.patientListAndGraphData.length);
    }
    patientSummaryObjects.patientDemoGraphics.reset();
    patientSummaryObjects.patientDemoGraphics.caseManager = frmPatientSummary_validateValue(response.caseManager);
    patientSummaryObjects.patientDemoGraphics.contactNumber = frmPatientSummary_validateValue(response.contactNumber);
    patientSummaryObjects.patientDemoGraphics.dob = frmPatientSummary_validateValue(response.dateOfBirth); 
    patientSummaryObjects.patientDemoGraphics.medicalRecNo = frmPatientSummary_validateValue(response.medicalRecNo);
    patientSummaryObjects.patientDemoGraphics.nextAppointmentDt = frmPatientSummary_validateValue(response.nextAppointmentDt);
    patientSummaryObjects.patientDemoGraphics.patientId = frmPatientSummary_validateValue(response.patientres);
    patientSummaryObjects.patientDemoGraphics.careApproach = frmPatientSummary_validateValue(response.careApproach);
    patientSummaryObjects.patientDemoGraphics.priCarePhy = frmPatientSummary_validateValue(response.priCarePhy);
    patientSummaryObjects.patientDemoGraphics.priInsur = frmPatientSummary_validateValue(response.priInsur);
    patientSummaryObjects.patientDemoGraphics.refPhy = frmPatientSummary_validateValue(response.refPhy);
    patientSummaryObjects.patientDemoGraphics.wccPhy = frmPatientSummary_validateValue(response.wccPhy);
    patientSummaryObjects.patientDemoGraphics.weeksInTreat = frmPatientSummary_validateValue(response.weeksInTreat);
    patientSummaryObjects.patientDemoGraphics.abileft = frmPatientSummary_validateValue(response.abiLeft);
    patientSummaryObjects.patientDemoGraphics.abiright = frmPatientSummary_validateValue(response.abiRight);
    patientSummaryObjects.patientDemoGraphics.allergies = frmPatientSummary_validateValue(response.allergies);
    patientSummaryObjects.patientDemoGraphics.secondaryInsurance = frmPatientSummary_validateValue(response.secInsur);
    patientSummaryObjects.patientDemoGraphics.teritaryInsurance = frmPatientSummary_validateValue(response.terInsur);
    patientSummaryObjects.patientDemoGraphics.diabeticStatus = frmPatientSummary_validateValue(response.diabeticStatus);
    patientSummaryObjects.patientDemoGraphics.msrFlag = frmPatientSummary_validateValue(response.msrFlag);
    patientSummaryObjects.patientDemoGraphics.msrReviewFlag = frmPatientSummary_validateValue(response.msrReviewFlag);
    var strPatientName = frmPatientSummary_validateValue(response.patientName);
    if(strPatientName!==null && strPatientName!==undefined && strPatientName!==""){
      patientSummaryObjects.patientDemoGraphics.patientName = strPatientName;
    }
    kony.print("patientDemoGraphics ------>>> "+JSON.stringify(patientSummaryObjects.patientDemoGraphics));
    if(( patientSummaryObjects.selectedStep === "Step1" && patientSummaryObjects.selectedWoundIndex===0) || (kony.application.getCurrentForm().id !== "frmPatientSummary") ){
      patientSummaryObjects.selectedStepData = [];
      frmPatientSummary_resetFormData();
      if(woundCount===0){//Wound Summary can be empty as well} || woundSummaryCount===0){
        frmPatientSummary.fscwounddetails.setVisibility(false);
        frmPatientSummary.fcwoundsummary.setVisibility(false);
        frmPatientSummary.lblnowounddata.setVisibility(true);
      }else{
        kony.print("--------- patientSummaryObjects.saveButtonFlag  -----------"+patientSummaryObjects.saveButtonFlag);
        if(patientSummaryObjects.saveButtonFlag){
          kony.print("--------- refresh UI when auto save  -----------");
          var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step1.stepInfo.subStepDetails;
          kony.print("data>>>"+data);
          if(frmPatientSummary_isValidStepData(data)){
            patientSummaryObjects.selectedStepData = clone(data) ;
            patientSummaryObjects.lastEditedStep = clone(patientSummaryObjects.selectedStepData);
            healing9StepDataModule.refreshStepDecription();
          }
          if(isNotesOpen){
            frmPatientSummary.fcpopupnotes.setVisibility(true);
            frmPatientSummary.fcpatientsummaryheaderhover.setVisibility(true);
            frmPatientSummary.fcpatientsummaryfooterhover.setVisibility(true);
            frmPatientSummary.fcwoundimages.setVisibility(false);   
            notesModule.setNotesDefaultMaximumCharactersLimit();
          }
		  if(isIpad && saveHealFlag){
		  	saveHealFlag = false;
		  	frmPatientSummary.scrollToEnd();
		  }
		  com.healogics.utility.dismissLoading();
          return;
        }

        frmPatientSummary_prepare9stepTitlesData(patientSummaryObjects.woundDescriptionDetails[0]);
        frmPatientSummary_setWound9PointData();

        var gapTime = 1.5;
        if(!isIpad){
          gapTime = 0.5;
        }
        try{
          kony.timer.cancel("chartTimerid");
        }catch(error){
          kony.print("Timer id error----->>>>>"+error);
        }
        kony.timer.schedule("chartTimerid", frmPatientSummary_showGraphicalView, gapTime, false);
      }
      
      _setPatientDemoGraphics(patientSummaryObjects.patientDemoGraphics, "frmPatientSummary");
      
      frmPatientSummary.scrollToBeginning(); 
      
      kony.print("_patientSummarySuccessCallback before frmPatientSummary.show call");
      frmPatientSummary.show();
    }else{
      kony.print("--------- refresh current step -----------");
      if(isIpad){
        healing9StepDataModule.refreshStepDecription();
      }else{
        frmPatientSummary.btnsave.setFocus(true);
      }

    }
    kony.print("_patientSummarySuccessCallback ends");
	if(isIpad && saveHealFlag){
		saveHealFlag = false;
		frmPatientSummary.scrollToEnd();
	} else {
		frmPatientSummary.forceLayout();
	}
    com.healogics.utility.dismissLoading();
  };

  //Patient dashboard service Failure callback function
  var _patientSummaryFailureCallback = function(response){

    kony.print("_patientSummaryFailureCallback response:::"+JSON.stringify(response));
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && response.opstatus === 1582 && response.statuscode === ""){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(response.errmsg, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  };

  //Method to set selected patient demographic details 
  var _setPatientDemoGraphics = function(patientInfo,formName) {
    kony.print("---------patientInformation-------"+patientInfo.patientName);
    var currentForm;

    if(formName!=null && formName!=undefined && formName === "frmPatientRecords"){
      kony.print("inside frmPatientRecords");
      currentForm = frmPatientRecords;
    } else if (formName!=null && formName!=undefined && formName === "frmPatientTestResults"){
      currentForm = frmPatientTestResults;
    } else{
      currentForm = frmPatientSummary;
    }
	
   if(!isIpad){
    if(patientInfo.diabeticStatus===null||patientInfo.diabeticStatus==""){
      currentForm.lbldiabeticstatusvalue.height="1dp";
    }else if(patientInfo.diabeticStatus.length<=70){
      currentForm.lbldiabeticstatusvalue.height="25dp";
    }else{
      currentForm.lbldiabeticstatusvalue.height="42dp";
    }
   }
    
    frmPatientSummary.lbldiabeticstatusvalue.setEnabled(false);
    kony.print("---------currentForm-------"+currentForm.id);
    currentForm.lblpatientname1.text = patientInfo.patientName; 
    currentForm.lbldobvalue.text = patientInfo.dob;
    currentForm.lblmedicalrecordnumbervalue.text = patientInfo.medicalRecNo;
    currentForm.lblcareapproachvalue.text = patientInfo.careApproach;
    currentForm.lblabileftvalue.text = patientInfo.abileft;
    currentForm.lblabirightvalue.text = patientInfo.abiright;
    currentForm.lblallergiesvalue.text = patientInfo.allergies;
    currentForm.lblwoundcarephysicianvalue.text = patientInfo.wccPhy;
    currentForm.lblcasemanagervalue.text = patientInfo.caseManager;
    currentForm.lblweeksoftreatmentvalue.text = frmPatientSummary_appendWeeksText(patientInfo.weeksInTreat);
    currentForm.lblprimarycarephysicianvalue.text = patientInfo.priCarePhy;
    currentForm.lblreferringphysicianvalue.text = patientInfo.refPhy;
    currentForm.lbldiabeticstatusvalue.text = patientInfo.diabeticStatus;
    currentForm.lblprimaryinsurancesvalue.text = patientInfo.priInsur;
   // currentForm.lblsecondaryinsurancevalue.text = patientInfo.secondaryInsurance;
   // currentForm.lblteritaryinsurancevalue.text = patientInfo.teritaryInsurance;
     		
        //Woun: 1705 When there is no secondary or tertiary insurance for a patient, the labels should disappear
    
     var secondary=patientInfo.secondaryInsurance;
  var teritary=patientInfo.teritaryInsurance;
 
 if((secondary===""||secondary===null)&&(teritary===""||teritary===null))
    {
      currentForm.fcpatientinfo3.lblteritaryinsurance.setVisibility(false);
      currentForm.fcpatientinfo3.lblteritaryinsurancevalue.setVisibility(false);
      currentForm.fcpatientinfo3.lblweeksoftreatment.top="25dp";
      currentForm.fcpatientinfo3.lblweeksoftreatmentvalue.top="25dp";
      currentForm.fcpatientinfo3.lblnextapptdate.top="50dp";
      currentForm.fcpatientinfo3.lblnextapptvalue.top="50dp";
      currentForm.fcpatientinfo3.lblsecondaryinsurance.setVisibility(false);
      currentForm.fcpatientinfo3.lblsecondaryinsurancevalue.setVisibility(false);
    
  }
  else if((secondary===""||secondary===null)&&(teritary!==""||teritary!==null))
    {
     currentForm.fcpatientinfo3.lblteritaryinsurance.setVisibility(true);
      currentForm.fcpatientinfo3.lblteritaryinsurancevalue.setVisibility(true);
      currentForm.fcpatientinfo3.lblteritaryinsurance.top="25dp";
      currentForm.fcpatientinfo3.lblteritaryinsurancevalue.top="25dp";
     currentForm.fcpatientinfo3.lblweeksoftreatment.top="50dp";
      currentForm.fcpatientinfo3.lblweeksoftreatmentvalue.top="50dp";
      currentForm.fcpatientinfo3.lblnextapptdate.top="75dp";
      currentForm.fcpatientinfo3.lblnextapptvalue.top="75dp";
      currentForm.fcpatientinfo3.lblsecondaryinsurance.setVisibility(false);
      currentForm.fcpatientinfo3.lblsecondaryinsurancevalue.setVisibility(false);
     
    }
  else if((secondary!==""||secondary!==null)&&(teritary===""||teritary===null))
    {
      currentForm.fcpatientinfo3.lblweeksoftreatment.top="50dp";
      currentForm.fcpatientinfo3.lblweeksoftreatmentvalue.top="50dp";
      currentForm.fcpatientinfo3.lblnextapptdate.top="75dp";
      currentForm.fcpatientinfo3.lblnextapptvalue.top="75dp";
      currentForm.fcpatientinfo3.lblsecondaryinsurance.setVisibility(true);
      currentForm.fcpatientinfo3.lblsecondaryinsurancevalue.setVisibility(true);
       currentForm.fcpatientinfo3.lblteritaryinsurance.setVisibility(false);
      currentForm.fcpatientinfo3.lblteritaryinsurancevalue.setVisibility(false);
    }
  else if((secondary!==""||secondary!==null)&&(teritary!==""||teritary!==null))
    {
      currentForm.fcpatientinfo3.lblweeksoftreatment.top="75dp";
      currentForm.fcpatientinfo3.lblweeksoftreatmentvalue.top="75dp";
      currentForm.fcpatientinfo3.lblnextapptdate.top="100dp";
      currentForm.fcpatientinfo3.lblnextapptvalue.top="100dp";
      currentForm.fcpatientinfo3.lblteritaryinsurance.setVisibility(true);
      currentForm.fcpatientinfo3.lblteritaryinsurancevalue.setVisibility(true);
      currentForm.fcpatientinfo3.lblsecondaryinsurance.setVisibility(true);
      currentForm.fcpatientinfo3.lblsecondaryinsurancevalue.setVisibility(true);
    }
     else
    {
      kony.print("Secondary Teritary field error---->");
    }
    
    var convertedDate = patientInfo.nextAppointmentDt;
	var dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;

    
    if(patientInfo.nextAppointmentDt!=null && patientInfo.nextAppointmentDt.toUpperCase().indexOf("CANCEL")<0){
      convertedDate = com.healogics.utility.convertEST_To_PST_CST_TimeZone(patientInfo.nextAppointmentDt,userInfo.timezone,DATE_FORMAT.NEXT_APPOINTMENT);
      currentForm.lblnextapptvalue.text = frmPatientSummary_formatWoundListDate1(convertedDate);
      
    }else{
      currentForm.lblnextapptvalue.text = convertedDate;
    }
    
    
    
    var strMsrFlag = patientInfo.msrFlag;
     var msrLabel="";
    kony.print("---------- strMsrFlag ---------- "+strMsrFlag);
    kony.print("-----msrReviewFlag------"+patientInfo.msrReviewFlag);

    if(strMsrFlag==="Y" || strMsrFlag === true || strMsrFlag  === GENERAL_CONSTANTS.TEXT_TRUE){
      if(patientInfo.msrReviewFlag == "true" || patientInfo.msrReviewFlag == true ){
        msrLabel="MSR Reviewed";
      }if(patientInfo.msrReviewFlag.toLowerCase() == "pending" ){
        msrLabel="MSR In Progress";
      }else{
        msrLabel="MSR";
      }
      currentForm.lblmsrstatus.text = msrLabel;
      currentForm.lblmsrstatus.setVisibility(true);
    }else {
      currentForm.lblmsrstatus.setVisibility(false);
    }

    currentForm.fcpatientinfodetails.setVisibility(true);
    currentForm.imgarrow.src = "arrowsouth.png";
    currentForm.lblPatientName.text = patientSummaryObjects.patientDemoGraphics.patientName;//patientSummaryObjects.patientDemoGraphics.firstName +" " + patientSummaryObjects.patientDemoGraphics.lastName;
    currentForm.forceLayout();     
  };	

  //Method to prepare list of wounds for wounds dropdown
  var _setSegWoundListData = function(){
    var segWoundData = [];
    //var msrLabelLength = 0;
    for (var i=0;i<woundCount;i++) {
      
      var lmsrLabel = frmPatientSummary_getWoundMSRStatus(i);
      var tempRow = {
        "lblwound" : {"text" : "Wound "+ patientSummaryObjects.woundDescriptionDetails[i].woundno + lmsrLabel}
      };
      segWoundData.push(tempRow);
    }
    kony.print("segWoundsListData--------->>>>"+JSON.stringify(segWoundData));
    frmPatientSummary.segwoundslist.setData(segWoundData);
	kony.print("frmPatientSummary.segwoundslist segWoundData>>"+segWoundData);
  };

  //Method to set Step-1 healing data
  var _setEnhancePerfusionOxygenationData = function(){
    patientSummaryObjects.selectedStep = "Step1";
    patientSummaryObjects.selectedStepData = [];
    kony.print("patientSummaryObjects.selectedWoundIndex:  -------->>>> "+patientSummaryObjects.selectedWoundIndex);
    kony.print("patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]:  -------->>>> "+JSON.stringify(patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]));
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step1.stepInfo.subStepDetails;
    kony.print("Step1 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data) ;
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step1.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("1", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_1.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_1[i]);
    }

  };

  //Method to set Step-2 healing data
  var _setRemoveNonVialTissueData = function(){ 
    patientSummaryObjects.selectedStep = "Step2";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step2.stepInfo.subStepDetails;
    kony.print("Step2 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step2.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("2", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_2.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_2[i]);
    }
  };

  //Method to set Step-3 healing data
  var _setRemoveInfectionMaintainMicrobialBalanceData = function(){ 
    patientSummaryObjects.selectedStep = "Step3";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step3.stepInfo.subStepDetails;
    kony.print("Step3 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step3.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("3", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_3.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_3[i]);
    }
  };

  //Method to set Step-4 healing data
  var _setResolveEdemaData = function(){ 
    patientSummaryObjects.selectedStep = "Step4";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step4.stepInfo.subStepDetails;
    kony.print("Step4 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step4.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("4", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_4.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_4[i]);
    }
  };

  //Method to set Step-5 healing data
  var _setOptimizeWoundData = function(){ 
    patientSummaryObjects.selectedStep = "Step5";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step5.stepInfo.subStepDetails;
    kony.print("Step5 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step5.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("5", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_5.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_5[i]);
    }
  };

  //Method to set Step-6 healing data
  var _setEnhancedTissueData = function(){ 
    patientSummaryObjects.selectedStep = "Step6";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step6.stepInfo.subStepDetails;
    kony.print("Step6 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step6.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("6", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_6.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_6[i]);
    }
  };

  //Method to set Step-7 healing data
  var _setRelievePressureData = function(){ 
    patientSummaryObjects.selectedStep = "Step7";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step7.stepInfo.subStepDetails;
    kony.print("Step7 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step7.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("7", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_7.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_7[i]);
    }
  };

  //Method to set Step-8 healing data
  var _setControlDiminishPainData = function(){ 
    patientSummaryObjects.selectedStep = "Step8";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step8.stepInfo.subStepDetails;
    kony.print("Step8 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step8.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("8", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_8.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_8[i]);
    }
  };

  //Method to set Step-9 healing data
  var _setOptimizeHostData = function(){
    patientSummaryObjects.selectedStep = "Step9";
    patientSummaryObjects.selectedStepData = [];
    var data = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step9.stepInfo.subStepDetails;
    kony.print("Step9 subStep details:  -------->>>> "+JSON.stringify(data));
    if(frmPatientSummary_isValidStepData(data)){
      patientSummaryObjects.selectedStepData = clone(data);
      healing9StepDataModule.prepareStepDecriptionUI();
    }
    additionalLinks = [];
    additionalLinks = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary.Step9.stepInfo.cpgLinks;
    frmPatientSummary_prepareCPGLinksData("9", additionalLinks);
    patientSummaryObjects.CPGLinks=[];
    var l=CPGLinksUrl.Url_9.length;
    for(i=0;i<l;i++){
      patientSummaryObjects.CPGLinks.push(CPGLinksUrl.Url_9[i]);
    }
  };

//   var _showCPGPDF = function(link){
//     var inputData = {    
//       "cpgLink":link
//     };
//     com.healogics.mfutility.invokeIntegrationService(
//       MF_SERVICECONSTANTS.SERVICE_NAME_CPGLINK,
//       MF_SERVICECONSTANTS.OPERATION_NAME_GETCPGLINKDATA,
//       {
//         "Content-Type":"application/json",
//       	"Authorization" : userInfo.headerAccessToken
//       },
//       inputData,
//       _cpgLinkDataSuccessCallback,
//       _cpgLinkDataFailureCallback
//     );
//   };

//   var _cpgLinkDataSuccessCallback = function(response){
//     kony.print("cpgLinkDataSuccessCallback response:::"+JSON.stringify(response));
//     var config = {"mimeType":"application/pdf", "encoding":"UTF-8"};
//     var browserString = "<html><body><object data=\"data:application/pdf;base64,"+response.cpgData+"\""+"width=\"100%\" height=\"100%\">alt:<a href=\"cpgLink\">cpgLink</a></object></body></html>";
//     popupcpglinks.browserpdf.htmlString = browserString;
//     popupcpglinks.show();
//   };

//   var _cpgLinkDataFailureCallback = function(respone){
//     kony.print("cpgLinkDataFailureCallback response:::"+JSON.stringify(response));
//   };
  var _openCPGLink=function(link){
    kony.application.openURL(link);
  };

  return {
    enhancePerfusionOxygenationData  : function(){
      return _setEnhancePerfusionOxygenationData();
    },
    removeNonVialTissueData  : function(){
      return _setRemoveNonVialTissueData();
    },
    removeInfectionMaintainMicrobialBalanceData  : function(){
      return _setRemoveInfectionMaintainMicrobialBalanceData();
    },
    resolveEdemaData  : function(){
      return _setResolveEdemaData();
    },
    optimizeWoundData : function(){
      return _setOptimizeWoundData();
    },
    enhancedTissueData : function(){
      return _setEnhancedTissueData();
    },
    relievePressureData : function(){
      return _setRelievePressureData();
    },
    controlDiminishPainData : function(){
      return _setControlDiminishPainData();
    },
    optimizeHostData : function(){
      return _setOptimizeHostData();
    },
    setPatientDemoGraphics  : function(patientInfo, formName){
      return _setPatientDemoGraphics(patientInfo, formName);
    },
    setSegWoundListData : function() {
      return _setSegWoundListData();
    },
    getPatientSummary : function(patientId, firstName, lastName, showStepOne){
      return _getPatientSummary(patientId, firstName, lastName, showStepOne);
    },    
//     showCPGPdf : function(link){
//       return _showCPGPDF(link);
//     },
   patientSummarySuccessCallback:function(response){
      return _patientSummarySuccessCallback(response);
    },
    openCPGLink : function(link){
      return _openCPGLink(link);
    }
  };
})();
var patientSummary_onTouchEnd = function(){
  hide_fctopmenu();
  frmPatientSummary_hideDropDownsOnFormclick();
  hideFormMenu();
};
//Method to prepare 9 step healing segment data
var frmPatientSummary_setWound9PointSegmentData = function(woundFeatures) {
  var row_data = [];
  for (var i=0;i<woundFeatures.length;i++) {
    var tempRow = {
      "lblfeaturetype": {"text": woundFeatures[i]},
      "template" : fcfeaturetype
    };
    if(i===0) {
      tempRow.imgfeaturetype = {"src": "onelinearrow.png",
                                "width" : "100%"};
    } else {
      tempRow.imgfeaturetype = {"src": "onelinearrownormal.png",
                                "width" : "95%"};
    }
    row_data.push(tempRow);
  }
  frmPatientSummary.segwoundfeaturetypes.setData(row_data);
  frmPatientSummary.segwoundfeaturetypes.separatorColor = "#ffffff";
};

// 9 Step healing segment rowClick method
function frmPatientSummary_segWound9PointsRowClick(eventobject) {
  /////Sandeep offline changes for 9Healings
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
   
  }else{
  com.healogics.utility.showLoading();
  searchPatient_closeSearchList();
  frmPatientSummary_btnSaveClick("save");
  var segRowData = frmPatientSummary.segwoundfeaturetypes.data;
  var selectedRowData = segRowData[eventobject];
  var row_data = [];
  for (var i=0;i<segRowData.length;i++) {
    var tempRow = segRowData[i];
    if(i===eventobject) {
      tempRow.imgfeaturetype = {"src": "onelinearrow.png",
                                "width" : "100%"};
    } else {
      tempRow.imgfeaturetype = {"src": "onelinearrownormal.png",
                                "width" : "95%"};
    }
    row_data.push(tempRow);
  }
  frmPatientSummary.segwoundfeaturetypes.setData(row_data);
  frmPatientSummary.segwoundfeaturetypes.separatorColor = "#ffffff";
  if(frmPatientSummary_isValidStepData(patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].stepSummary)){
    if(eventobject===0){
      com.healogics.patientSummary.enhancePerfusionOxygenationData();
    } else if(eventobject===1){
      com.healogics.patientSummary.removeNonVialTissueData();
    } else if(eventobject===2){
      com.healogics.patientSummary.removeInfectionMaintainMicrobialBalanceData();
    } else if(eventobject===3){
      com.healogics.patientSummary.resolveEdemaData();
    } else if(eventobject===4){
      com.healogics.patientSummary.optimizeWoundData();
    } else if(eventobject===5){
      com.healogics.patientSummary.enhancedTissueData();
    } else if(eventobject===6){
      com.healogics.patientSummary.relievePressureData();
    } else if(eventobject===7){
      com.healogics.patientSummary.controlDiminishPainData();
    } else if(eventobject===8){
      com.healogics.patientSummary.optimizeHostData();
    }
    patientSummaryObjects.healing9stepEditedData=[];
    patientSummaryObjects.lastEditedStep = clone(patientSummaryObjects.selectedStepData);
  }else{
    kony.print("--------- Invalid patientSummaryObjects.woundDescriptionDetails ---------");
  }
  com.healogics.utility.dismissLoading();
}}

//Method to append "Weeks" text to the parameter weeksInTreatment of Patient demographic details
var frmPatientSummary_appendWeeksText = function(weeksInTreatment){
  var numberOfWeeks = parseInt(weeksInTreatment);
  if(numberOfWeeks===1){
    return weeksInTreatment+" Week";
  }else{
    return weeksInTreatment+" Weeks";
  }
};

//Method to set visibility of Wounds list segment
function frmPatientSummary_showSegWounds() {
   searchPatient_closeSearchList();
  kony.print("------frmPatientSummary_showSegWounds---->>");
  if(frmPatientSummary.fcwoundslist.isVisible) {
    frmPatientSummary.fcwoundslist.setVisibility(false);
  } else {
    frmPatientSummary.fcwoundslist.setVisibility(true);
  }
  frmPatientSummary.fcunitslist.setVisibility(false);
  frmPatientSummary.forceLayout();
}

//Method to set selected wound number from wound list
function frmPatientSummary_setWoundNumber() {
  ///Sandeep offline changes for 9Healings
  if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
      frmPatientSummary.fcwoundslist.setVisibility(false);

   
  }else{
  
  frmPatientSummary_btnSaveClick("save");
  frmPatientSummary.btnstepsofhealing.text=frmPatientSummary.segwoundslist.selectedItems[0].lblwound.text;
  frmPatientSummary.fcwoundslist.setVisibility(false);
  patientSummaryObjects.selectedWoundIndex = frmPatientSummary.segwoundslist.selectedRowIndex[1];
  kony.print("patientSummaryObjects.selectedWoundIndex---->>" +patientSummaryObjects.selectedWoundIndex);
  frmPatientSummary_segWound9PointsRowClick(0);
  frmPatientSummary_setWoundInfoForTask();
  frmPatientSummary_handleMSRStatus();
  frmPatientSummary.forceLayout();
}
//frmPatientSummary.forceLayout();
}

//Method to set wound information for task
var frmPatientSummary_setWoundInfoForTask=function(){
  task_info.clear();
  task_info.encounterId = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].encounterId;
  task_info.patientId = patientSummaryObjects.patientDemoGraphics.patientId;
  task_info.medicalRecordNo = task_info.patientId;
  task_info.patientname = frmPatientSummary.lblpatientname1.text;  
  task_info.woundId = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundid;
  task_info.woundNo = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno;
  task_info.docentityId = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].docentityId;
  kony.print("-----task_info------>"+JSON.stringify(task_info));
};

//Method to set visibility of Wound Units segment
function frmPatientSummary_showSegUnits() {
  searchPatient_closeSearchList();
  kony.print("------frmPatientSummary_showSegUnits---->>");
  if(frmPatientSummary.fcunitslist.isVisible) {
    frmPatientSummary.fcunitslist.setVisibility(false);
  } else {
    frmPatientSummary.fcunitslist.setVisibility(true);
  }
  frmPatientSummary.fcwoundslist.setVisibility(false);
  frmPatientSummary.forceLayout();
}

//Method to set selected wound unit from wound measuring units list
function frmPatientSummary_setUnit() {
  frmPatientSummary.btnunits.text=frmPatientSummary.segunitslist.selectedItems[0].lblunit;
  measurementUnits = frmPatientSummary.segunitslist.selectedItems[0].lblunit;
  frmPatientSummary.fcunitslist.setVisibility(false);
  frmPatientSummary_addWoundSummarySegments();
  var selectedRange = kony.store.getItem(userInfo.userId+"_summaryWeekRange");
  if(selectedRange!=null){
    patientSummary_changeChartTimeLine(selectedRange,false);
  }else{
    patientSummary_changeChartTimeLine(12,false);
  }
  //patientSummary_changeChartTimeLine(12);
  frmPatientSummary_addWound360Column();
  frmPatientSummary_cancelTimer("timerToStorePreviousWoundSelection");
  kony.timer.schedule("timerToStorePreviousWoundSelection", frmPatientSummary_storePreviousWoundSelection, 0.2, false);

}

//Method to show previously selected wound details in wound list
var frmPatientSummary_storePreviousWoundSelection = function(){
   kony.print("In frmPatientSummary_storePreviousWoundSelection --->>>");
  if(woundsSelected.length>0){
    var expandFirstSelectedWound = 1;
    for(var i=0;i<woundsSelected.length;i++){
      var index =1;
      for(var j=1;j<=patientSummaryObjects.woundDescriptionDetails.length;j++){
        var selectedWoundNum = patientSummaryObjects.woundDescriptionDetails[j-1].woundno;
        kony.print("selectedWoundNum: --->>>"+selectedWoundNum);
        var strWoundNum = (typeof woundsSelected[i] === 'object') ? woundsSelected[i].woundNum : woundsSelected[i];
        if(parseInt(strWoundNum) == parseInt(selectedWoundNum)){
          index = j;
        }
      }
//       var index = woundsSelected[i];
      kony.print("Selected wound list index: --->>>"+index);
      var strWoundNum = (typeof woundsSelected[i] === 'object') ? woundsSelected[i].woundNum : woundsSelected[i];
      strWoundNum = parseInt(strWoundNum);
      var strObjectID = "fccheckuncheck"+strWoundNum;
      frmPatientSummary["imgcheckuncheck"+index].src = "checkboxselected.png";
      if(i==0){
        expandFirstSelectedWound = index;
      }
    }
    var eventObject1 = {};
    eventObject1.id =  "fcexpandarrow"+expandFirstSelectedWound;
    frmPatientSummary_showHideFcWoundDescription(eventObject1);
    frmPatientSummary_cancelTimer("timerToStorePreviousWoundSelection");
  }else{
    var eventObject = {};
    eventObject.id =  "fcexpandarrow1";
    frmPatientSummary_showHideFcWoundDescription(eventObject);
  }
  
};

var frmPatientSummary_cancelTimer = function(timerID){
  kony.print("------ Cancel timer -------");
};

//Method to prepare Patient Dashboard form 
var frmPatientSummary_setWound9PointData = function() {

  kony.print("---------arrWound9Points-------"+patientSummaryObjects.arrWound9Points);

  frmPatientSummary_setWound9PointSegmentData(patientSummaryObjects.arrWound9Points);
  com.healogics.patientSummary.enhancePerfusionOxygenationData();
  patientSummaryObjects.lastEditedStep = clone(patientSummaryObjects.selectedStepData);

  frmPatientSummary_addWound360Column();
  com.healogics.patientSummary.setSegWoundListData();
  woundsSelected=[];
  frmPatientSummary_addWoundSummarySegments();
  frmPatientSummary.btntableview.skin = "skbtntablevwselected";
  frmPatientSummary.btngraphview.skin = "skbtngraphvwnormal";
  frmPatientSummary.fcwoundwisesummary.setVisibility(true);
  frmPatientSummary.fcchart.setVisibility(false);
  frmPatientSummary.fccharttimeline.setVisibility(false);
  frmPatientSummary_handleMSRStatus();
  
  var eventObject1 = {};
  eventObject1.id =  "fcexpandarrow1";
  frmPatientSummary_showHideFcWoundDescription(eventObject1);

  var eventObjectIdTwo = {};
  eventObjectIdTwo.id =  "fccheckuncheck1stload";
  frmPatientSummary_checkuncheck(eventObjectIdTwo);
  frmPatientSummary.forceLayout();
  
};


var frmPatientSummary_handleMSRStatus = function(){
  kony.print("---------- In frmPatientSummary_handleMSRStatus ---------- ");
  var strMsrFlag = patientSummaryObjects.patientDemoGraphics.msrFlag;
  kony.print("---------- strMsrFlag ---------- "+strMsrFlag);

  var wccPhy = patientSummaryObjects.patientDemoGraphics.wccPhy.includes("Dr.") ? patientSummaryObjects.patientDemoGraphics.wccPhy.replace("Dr. ", "") : patientSummaryObjects.patientDemoGraphics.wccPhy;
  var caseManager = patientSummaryObjects.patientDemoGraphics.caseManager.includes("Dr.") ? patientSummaryObjects.patientDemoGraphics.caseManager.replace("Dr. ", "") : patientSummaryObjects.patientDemoGraphics.caseManager;
  var refPhy = patientSummaryObjects.patientDemoGraphics.refPhy.includes("Dr.") ? patientSummaryObjects.patientDemoGraphics.refPhy.replace("Dr. ", "") : patientSummaryObjects.patientDemoGraphics.refPhy;
  var priCarePhy = patientSummaryObjects.patientDemoGraphics.priCarePhy.includes("Dr.") ? patientSummaryObjects.patientDemoGraphics.priCarePhy.replace("Dr. ", "") : patientSummaryObjects.patientDemoGraphics.priCarePhy;

  frmPatientSummary.btnReviewMSR.setVisibility(false);
  frmPatientSummary.lblmsr1.setVisibility(false);

  var woundMsrStatus = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].wound_review_flag;


  var clinicianReviewFlag = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].clinicianReviewFlag; //MSR review not available for offline
  var physicianReviewFlag = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].physicianReviewFlag;
  var userPatientRole = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].role; //userPatientRole;

  ///for amcgill2 this was failing.
  //if(isIpad){
  //  userPatientRole = userInfo.userPatientRole;
  //}else{
    userPatientRole = userPatientRole != null ? userPatientRole : "";
  //}

  kony.print("---------- woundMsrStatus ---------- "+woundMsrStatus);
  if(strMsrFlag === "Y" || strMsrFlag === true || strMsrFlag == "true")
  {
    if(woundMsrStatus!=null && woundMsrStatus!=""){
      frmPatientSummary.lblmsr1.text = woundMsrStatus;
      frmPatientSummary.lblmsr1.setVisibility(true);
    }else{
      frmPatientSummary.lblmsr1.setVisibility(false);
    }

    if(userInfo.acknowledgeMSR == GENERAL_CONSTANTS.TEXT_TRUE  && woundMsrStatus!=null && woundMsrStatus!="" &&
       (
      (clinicianReviewFlag!=null && (clinicianReviewFlag == "false" || clinicianReviewFlag == false) && userPatientRole.toLowerCase() == "clinician") || 
      (physicianReviewFlag!=null && (physicianReviewFlag == "false" || physicianReviewFlag == false) && userPatientRole.toLowerCase() == "physician")
    )
      )
    {

      kony.print("inside show btnReviewMSR");
      frmPatientSummary.btnReviewMSR.text = "Review MSR";
      frmPatientSummary.btnReviewMSR.setEnabled(true);
      frmPatientSummary.btnReviewMSR.skin = "sknbtnbluebg100";
      frmPatientSummary.btnReviewMSR.setVisibility(true);

    }else{

      if(userInfo.acknowledgeMSR == GENERAL_CONSTANTS.TEXT_TRUE  && woundMsrStatus!=null && woundMsrStatus!="" &&
         (
        (clinicianReviewFlag!=null && (clinicianReviewFlag == true && physicianReviewFlag == false) && userPatientRole.toLowerCase() == "clinician") || 
        (physicianReviewFlag!=null && (physicianReviewFlag == true && clinicianReviewFlag == false) && userPatientRole.toLowerCase() == "physician")
      )
        )
      {
        frmPatientSummary.btnReviewMSR.setVisibility(true);
        frmPatientSummary.btnReviewMSR.text = "Review MSR";
        frmPatientSummary.btnReviewMSR.skin = "skngraybgbold";
        frmPatientSummary.btnReviewMSR.setEnabled(false);
      }else{
        frmPatientSummary.btnReviewMSR.setVisibility(false);
      }
    }
  }
};


// Method to save note
function popupnotes_onclickSave()
{
  notes_info.notes=frmPatientSummary.textareanotes.text.trim();
  notes_list.push(notes_info);
  frmPatientSummary.fcpopupnotes.setVisibility(false);
  frmPatientSummary.fcpatientsummaryheaderhover.setVisibility(false);
  frmPatientSummary.fcpatientsummaryfooterhover.setVisibility(false);
}

//Method to show Notes popup
function frmPatientSummary_showpopupnotes()
{
  searchPatient_closeSearchList();
  frmPatientSummary.lbltitle.text=frmPatientSummary.btnstepsofhealing.text;
  frmPatientSummary.lblerror.setVisibility(false);
  frmPatientSummary.textareanotes.text="";
  notesModule.frmPatientSummaryAddNotes();
}

//Method to open main CPG link
function frmPatientSummary_btnOpenCPGLinksClick() {
   searchPatient_closeSearchList();
  kony.print("frmPatientSummary.btnreftxt.text---->>>" +frmPatientSummary.btnreftxt.text);
  CPG_Links.fileName="";
  CPG_Links.fileName=patientSummaryObjects.CPGLinks[0];
  var link = MF_CONSTANTS.CLOUD_URL+"/"+CPG_Links.pdfLink+"="+CPG_Links.fileName;
  kony.print("CPG link ---->>>" +link);
  com.healogics.patientSummary.openCPGLink(link);
}


// Method to hide all drops on form click
function frmPatientSummary_hideDropDownsOnFormclick() {
  frmPatientSummary.fcunitslist.setVisibility(false);
}

//Method to validate string value
var frmPatientSummary_validateValue = function(strValue){
  if(strValue === null || strValue === undefined || strValue === '' || strValue === "null"){
    return "";
  }else{
    return strValue.trim();
  }
};

// Method to create "Create Task" popup
var popupcreatetask_onCreate=function()
{
  task_info.followup=popupcreatetask.lblfollowupdesc.text;
  task_info.duedate=popupcreatetask.datecal.formattedDate;
  task_info.description=popupcreatetask.textareadesc.text.trim();
  kony.print("task info is "+JSON.stringify(task_info));

  //if(isIpad){///Akshay - Always read from local db whether in Online/Offline for iPad
    kony.print("task info offline is "+JSON.stringify(task_info));
   // tasks_cntrl_offline.createNewTaskOffline(task_info);
//Sandeep offline changes
//     
//   }else{
    taskListModule.createTask();
 
};

//Method to show/hide patient demograpic details
var frmPatientSummary_togglePatientInfo = function(){
  searchPatient_closeSearchList();
  var currentForm = kony.application.getCurrentForm();
  if(currentForm.imgarrow.src == "sidearrowblack.png"){    
    currentForm.fcpatientinfodetails.setVisibility(true);
    currentForm.fcpatientinfofooter.setVisibility(true);
    currentForm.imgarrow.src = "arrowsouth.png";
  }else{
    currentForm.imgarrow.src = "sidearrowblack.png";
    currentForm.fcpatientinfodetails.setVisibility(false);
    currentForm.fcpatientinfofooter.setVisibility(false);
  }
  currentForm.forceLayout();
};


// Method to show wound list Graph view
var frmPatientSummary_showGraphicalView = function(){
  searchPatient_closeSearchList();
  if(frmPatientSummary.btngraphview.skin === "skbtngraphvwnormal") {
	selectedTab = 0;
    frmPatientSummary.btngraphview.skin = "skbtngraphvwselected";
    frmPatientSummary.btntableview.skin = "skbtntablevwnormal";
    frmPatientSummary.fcchart.setVisibility(true);
    frmPatientSummary.fccharttimeline.setVisibility(true);
    frmPatientSummary.fcwoundwisesummary.setVisibility(false);
    var selectedRange = kony.store.getItem(userInfo.userId+"_summaryWeekRange");
    if(selectedRange!=null){
      patientSummary_changeChartTimeLine(selectedRange,true);
    }else{
      patientSummary_changeChartTimeLine(12,true);
    }
    
  } 
  
  try{
    kony.timer.cancel("chartTimerid");
  }catch(error){
    kony.print("Timer id error----->>>>>"+error);
  }
};

// Method to show wound list Table view
var frmPatientSummary_showTableView = function(){
  searchPatient_closeSearchList();
  if(frmPatientSummary.btntableview.skin === "skbtntablevwnormal") {
    selectedTab = 1;
    kony.print("frmPatientSummary_showTableView selectedTab>>"+selectedTab);
    frmPatientSummary.btntableview.skin = "skbtntablevwselected";
    frmPatientSummary.btngraphview.skin = "skbtngraphvwnormal";
    frmPatientSummary.fcwoundwisesummary.setVisibility(true);    
    frmPatientSummary.fcchart.setVisibility(false);
    frmPatientSummary.fccharttimeline.setVisibility(false);
    frmPatientSummary_addWoundSummarySegments();
  } 
};

var frmPatientSummary_getWoundMSRStatus = function(selectedWoundIndex){
  
  var lmsrLabel = "";
  if(selectedWoundIndex!=null){
    var woundMsrStatus = patientSummaryObjects.woundDescriptionDetails[selectedWoundIndex]!= null ? patientSummaryObjects.woundDescriptionDetails[selectedWoundIndex].wound_review_flag : "";
    if(woundMsrStatus != null && woundMsrStatus != ""){

      var clinicianReviewFlag = patientSummaryObjects.woundDescriptionDetails[selectedWoundIndex].clinicianReviewFlag; //MSR review not available for offline
      var physicianReviewFlag = patientSummaryObjects.woundDescriptionDetails[selectedWoundIndex].physicianReviewFlag;
      var userPatientRole = patientSummaryObjects.woundDescriptionDetails[selectedWoundIndex].role; //userPatientRole;

      if(userPatientRole == null || userPatientRole == undefined){
        userPatientRole = patientSummaryObjects.woundDescriptionDetails[selectedWoundIndex].userPatientRole;
        if(userPatientRole == null || userPatientRole == undefined){
          userPatientRole = "";
        }
      }
      var deductedMSRStatus = patientSummaryObjects.woundDescriptionDetails[selectedWoundIndex].wound_review_flag;

      if(userInfo.acknowledgeMSR == GENERAL_CONSTANTS.TEXT_TRUE  && woundMsrStatus!=null && woundMsrStatus!="" &&
         (
        (clinicianReviewFlag!=null && (clinicianReviewFlag == "false" || clinicianReviewFlag == false) && userPatientRole.toLowerCase() == "clinician") || 
        (physicianReviewFlag!=null && (physicianReviewFlag == "false" || physicianReviewFlag == false) && userPatientRole.toLowerCase() == "physician")
      )
        )
      {
        deductedMSRStatus = "MSR Pending";
      }else{

        //       if(userInfo.acknowledgeMSR == GENERAL_CONSTANTS.TEXT_TRUE  && woundMsrStatus!=null && woundMsrStatus!="" &&
        //          (
        //         (clinicianReviewFlag!=null && (clinicianReviewFlag == true && physicianReviewFlag == false) && userPatientRole.toLowerCase() == "clinician") || 
        //         (physicianReviewFlag!=null && (physicianReviewFlag == true && clinicianReviewFlag == false) && userPatientRole.toLowerCase() == "physician")
        //       )
        //         )
        if(
          (clinicianReviewFlag!=null && physicianReviewFlag!=null && clinicianReviewFlag == true && physicianReviewFlag == false) || 
          (clinicianReviewFlag!=null && physicianReviewFlag!=null && physicianReviewFlag == true && clinicianReviewFlag == false)
        ){
          deductedMSRStatus = "MSR In Progress";
        }
      }

      lmsrLabel = " ("+deductedMSRStatus+")";
    }
  }
  
  
  return lmsrLabel;
  
}


// Method to reset Patient dashboard data
var frmPatientSummary_resetFormData=function(){
  frmPatientSummary.fcsearchdropdown.setVisibility(false);
  frmPatientSummary.tbpatientsearch.text="";
  frmPatientSummary.imgSearchIcon.src="search.png";
  frmPatientSummary.btnstepsofhealing.text= (patientSummaryObjects.woundDescriptionDetails.length>0) ? "Wound "+patientSummaryObjects.woundDescriptionDetails[0].woundno : "";
  

  //if(patientSummaryObjects.selectedWoundIndex!=null && patientSummaryObjects.selectedWoundIndex!=""){
	var lmsrLabel = frmPatientSummary.btnstepsofhealing.text + frmPatientSummary_getWoundMSRStatus(patientSummaryObjects.selectedWoundIndex);
    frmPatientSummary.btnstepsofhealing.text = lmsrLabel;
  //}
   
  
  frmPatientSummary.btnunits.text= "Area";
  frmPatientSummary.fcwoundimages.setVisibility(false);
  frmPatientSummary.fcpopupnotes.setVisibility(false);
  frmPatientSummary.fcwoundslist.setVisibility(false);
  frmPatientSummary.fcunitslist.setVisibility(false);
  frmPatientSummary.fcpatientsummaryheaderhover.setVisibility(false);
  frmPatientSummary.fcpatientsummaryfooterhover.setVisibility(false);
  frmPatientSummary.forceLayout();
  if(!isIpad){
  frmPatientSummary.fcPrintMenu.setVisibility(false);
  frmPatientSummary.fcPrintMenu2.setVisibility(false);
  }
  frmPatientSummary.fcDownload.skin="slFbox";
  frmPatientSummary.fcDownload1.skin="slFbox";
  changeConnectionStatus(isNetworkAvailable());
  disableCopyPasteOfNotes();
  frmPatientSummary.textareanotes.maxTextLength = notes_info.notesMaximumCharacterCount;
};

// Method to set additional CPG links segment data
var frmPatientSummary_setAdditionalCPGLinks = function(stepNum,tempAdditionalLinks){
  if(tempAdditionalLinks.length===0) {
    frmPatientSummary.segadditionalcpglinks.setVisibility(false);
    frmPatientSummary.fcstepdescriptionheader.top="4%";
	if(isIpad){
      frmPatientSummary.scrollToEnd(); 
    }
  } else{
    frmPatientSummary.segadditionalcpglinks.setVisibility(true);
    frmPatientSummary.fcstepdescriptionheader.top="2%";
    frmPatientSummary.segadditionalcpglinks.removeAll();
    kony.print("--------- stepNum --------"+stepNum);
    kony.print("--------- tempAdditionalLinks --------"+JSON.stringify(tempAdditionalLinks));
    var segData = [];
    for (var i=0;i<tempAdditionalLinks.length;i++) {
      var rowData = {
        "lbladditionalcpglinks": tempAdditionalLinks[i].displayname,
      };
      kony.print("--------- rowData --------"+JSON.stringify(rowData));
      segData.push(rowData);
    }
    kony.print("--------- segData --------"+segData.length);
    var data = [[{
      "lbladditionalcpglinkshdr": "Additional CPG’s for Essential Step "+stepNum+":"
    },segData]];

    kony.print("--------- data --------"+JSON.stringify(data));
    frmPatientSummary.segadditionalcpglinks.setData(data);
    frmPatientSummary.segadditionalcpglinks.separatorColor = "#ffffff";
    if(isIpad){
      frmPatientSummary.scrollToEnd(); 
    } else {
     frmPatientSummary.forceLayout();  
    }
  }
};

// Method to prepare 9 steps healing titles data from service response
var frmPatientSummary_prepare9stepTitlesData = function(selectedwoundData){
  kony.print("------- selectedwoundData -------"+JSON.stringify(selectedwoundData));
  var woundlist= selectedwoundData.stepSummary;
  kony.print("------- woundlist -------"+JSON.stringify(woundlist));
  var woundAllKeys = Object.keys(woundlist);
  kony.print("------- woundAllKeys -------"+woundAllKeys);
  if(woundAllKeys.length===0){
    frmPatientSummary.fscwounddetails.setVisibility(false);
    frmPatientSummary.fcwoundsummary.setVisibility(false);
    frmPatientSummary.lblnowounddata.setVisibility(true);
    return;
  }else{
    frmPatientSummary.fscwounddetails.setVisibility(true);
    frmPatientSummary.fcwoundsummary.setVisibility(true);
    frmPatientSummary.lblnowounddata.setVisibility(false);
    var sortedOrder = woundAllKeys.sort();
    kony.print("------- sortedOrder -------"+sortedOrder);
    patientSummaryObjects.arrWound9Points=[];
    for(var j=0;j<sortedOrder.length;j++){
      kony.print("------- sortedOrder[j] -------"+sortedOrder[j]);
      kony.print("------- woundlist sortedOrder[i] -------"+JSON.stringify(woundlist[sortedOrder[j]]));
      var title = (j+1)+". "+woundlist[sortedOrder[j]].stepInfo.title;
      kony.print("------- title -------"+title);
      patientSummaryObjects.arrWound9Points.push(title);
    }
  }
};

// Method to validate each step healing data
var frmPatientSummary_isValidStepData = function(data){
  kony.print("------- data is -------"+JSON.stringify(data));
  if(data===null || data==="null" || data===undefined || data==="") {
    frmPatientSummary.fcsegData.setVisibility(false);
    frmPatientSummary.lblnodatatxt.setVisibility(true);
    frmPatientSummary.forceLayout();
    return false;
  }else {
    frmPatientSummary.fcsegData.setVisibility(true);
    frmPatientSummary.lblnodatatxt.setVisibility(false);
    frmPatientSummary.forceLayout();
    return true;
  }
};

// Method to prepare additional CPG links segment data
var frmPatientSummary_prepareCPGLinksData = function(strStep,tempAdditionalLinks){
  if(tempAdditionalLinks.length===0){
    frmPatientSummary.segadditionalcpglinks.setVisibility(false);
    frmPatientSummary.fcstepdescriptionheader.top="4%";
    frmPatientSummary.btnreftxt.text = "";
  }else{
    frmPatientSummary.segadditionalcpglinks.setVisibility(true);
    frmPatientSummary.fcstepdescriptionheader.top="2%";
    frmPatientSummary.btnreftxt.text = tempAdditionalLinks[0].displayname;
    kony.print("additionalLinks before:  -------->>>> "+JSON.stringify(tempAdditionalLinks));
    tempAdditionalLinks = tempAdditionalLinks.slice(1,tempAdditionalLinks.length);
    kony.print("tempAdditionalLinks after:  -------->>>> "+JSON.stringify(tempAdditionalLinks));
    frmPatientSummary_setAdditionalCPGLinks(strStep, tempAdditionalLinks);
    kony.print("patientSummaryObjects.woundDescriptionDetails after------>>> "+JSON.stringify(patientSummaryObjects.woundDescriptionDetails));
  }
};

// Method to open additional CPG links
function frmPatientSummary_openAdditionalCPGLinks(){
  var selectedIndices = frmPatientSummary.segadditionalcpglinks.selectedIndices; 
  kony.print("selectedIndex:  -------->>>> "+JSON.stringify(selectedIndices[0][1][0]));
  var selectedIndex = selectedIndices[0][1][0];
  CPG_Links.fileName="";
  CPG_Links.fileName=patientSummaryObjects.CPGLinks[selectedIndex+1];
  var link = MF_CONSTANTS.CLOUD_URL+"/"+CPG_Links.pdfLink+"="+CPG_Links.fileName;
  kony.print("CPG link ---->>>" +link);
  com.healogics.patientSummary.openCPGLink(link);
}

// Method to set notes info data
var frmPatientSummary_setDataFotNotesInfo=function(){
  notes_info.clear();
  notes_info.notes=frmPatientSummary.textareanotes.text.trim();
  notes_info.patientId = patientSummaryObjects.patientDemoGraphics.patientId;
  notes_info.medicalRecordNo = notes_info.patientId;
  notes_info.patientname = frmPatientSummary.lblpatientname1.text;
  notes_info.woundId = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundno;
  kony.print("---notes info---->"+JSON.stringify(notes_info));
};


var Review_MSR=function(){
  searchPatient_closeSearchList();
  kony.print("---Review_MSR---->");
  if(!isIpad || (isIpad && !SYNC_CONSTANTS.isAppOffline)){
    healing9StepDataModule.reviewMSR();
  }else{
    showCustomPopup("Feature not available while offline", "MSR can only be reviewed while in online mode. Please establish a wireless connection.");
  }
  if(isIpad && SYNC_CONSTANTS.isAppOffline){
     showCustomPopup(syncMessageConstants.FEATURE_NOT_AVAILABLE, syncMessageConstants.MSR_FEATURE_NOT_AVAILABLE_MESSAGE);
  }  
};

var frmPatientSummary_showMostRecentPhysicianOrders = function() {
  searchPatient_closeSearchList();
 if(isNetworkAvailable()){
  kony.print("---frmPatientSummary_showMostRecentPhysicianOrders---->");
  healing9StepDataModule.mostRecentPhysicianOrders();
 }else{
   showCustomPopup(syncMessageConstants.FEATURE_NOT_AVAILABLE, syncMessageConstants.FEATURE_NOT_AVAILABLE_MESSAGE);   
 }
  
};


var frmPatientRecords_btnWoundSummary_onclick_call = function(){
  searchPatient_closeSearchList();
  kony.print("frmPatientRecords_btnWoundSummary_onclick_call start===>");
  patientSummaryFromTaskList();
  kony.print("frmPatientRecords_btnWoundSummary_onclick_call end===>");
};



woundImagesModule.frmPatientSummary_getWoundImages = function(){
  kony.print("----on frmPatientSummary_getWoundImages start---");
  
  woundImageConstants.imagesLoaded = 0;
  woundImageConstants.imageListLength = 0;
  
  var inputData = {
    "id" : patientSummaryObjects.patientDemoGraphics.patientId,
    "visitId" : woundImageConstants.encounterId,
    "woundId" : woundImageConstants.woundId,
    "docEntityId" : woundImageConstants.docEntityId,
    "documentType" : "photomobile",
    "accessToken" : userInfo.accessToken
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_PHOTOMOBILE,
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
    woundImagesModule.getWoundImagesSuccessCallback,
    woundImagesModule.getWoundImagesFailureCallback
  );

};

woundImagesModule.getWoundImagesSuccessCallback = function(response){
  kony.print("inside woundImagesModule.getWoundImagesSuccessCallback start::"+JSON.stringify(response));

  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
    woundImageConstants.woundImagesList = response.documents;
    woundImageConstants.imageListLength = woundImageConstants.woundImagesList.length;
     if(woundImageConstants.imageListLength > 0) {
      woundImagesModule.setImagesVisibility(true);
      var wound_images=[];
      for(i = 0 ; i< woundImageConstants.imageListLength ; i++){
        wound_data={
          "lbltimestamp": moment(woundImageConstants.woundImagesList[i].documentDate).format('dddd, MM/DD/YYYY, hh:mm A'),//woundImageConstants.woundImagesList[i].documentDate,
          "imgwound":{base64: woundImageConstants.woundImagesList[i].docBase64}
          //"imgwound":{src: "https://openclipart.org/image/800px/svg_to_png/214209/sample2.png"}
        }
        ;
        wound_images.push(wound_data);
      }
      frmPatientSummary.segmentimages.removeAll();
      frmPatientSummary.segmentimages.setData(wound_images);
      frmPatientSummary.imgdesc.base64 = woundImageConstants.woundImagesList[0].docBase64 ;
      // frmPatientSummary.imgdesc.src = "https://openclipart.org/image/800px/svg_to_png/214209/sample2.png";
      frmPatientSummary.lbltimestamp.text = moment(woundImageConstants.woundImagesList[0].documentDate).format('dddd, MM/DD/YYYY, hh:mm A');
      frmPatientSummary.lblheader.text = woundImageConstants.woundName;
      
      
    }else{
      
      kony.print(" No images ");
      woundImagesModule.setImagesVisibility(false);
    
    }
    frmPatientSummary.fcwoundimages.setVisibility(true);
    frmPatientSummary.forceLayout();
    
    kony.print("inside woundImagesModule.getWoundImagesSuccessCallback with Image count:::"+woundImageConstants.imageListLength);
    if(woundImageConstants.imageListLength > 1){
      woundImageConstants.imagesLoaded = 1;
      woundImagesModule.frmPatientSummary_getNextWoundImage();
    }
    
  } else if(response.statuscode=="401"){
    com.healogics.utility.showErrorAlert(response.responsedesc);
  }else{ 
    var error_label = response.responsedesc;
    if(com.healogics.utility.isEmpty(error_label)){
      error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }

};

woundImagesModule.getWoundImagesFailureCallback = function(response){
   kony.print("In woundImagesModule.getWoundImagesFailureCallback ----->>>>>"+JSON.stringify(response));
  if(response.statuscode=="204"){
    woundImagesModule.setImagesVisibility(false);
    frmPatientSummary.fcwoundimages.setVisibility(true);
  }else{
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
  }
};

woundImagesModule.setImagesVisibility=function(x){
  frmPatientSummary.fcsegimages.setVisibility(x);
  frmPatientSummary.imgdesc.setVisibility(x);
  frmPatientSummary.lbltimestamp.setVisibility(x);
  if(x===true){
    frmPatientSummary.lblNoWounds.setVisibility(false);
  }else if(x===false){
    frmPatientSummary.lblNoWounds.setVisibility(true);
  }
};



woundImagesModule.frmPatientSummary_getNextWoundImage = function(){
  kony.print("----on frmPatientSummary_getNextWoundImage start---"+woundImageConstants.imagesLoaded);
  
  var inputData = {
    "documentData" : woundImageConstants.woundImagesList[woundImageConstants.imagesLoaded].documentData,
    "swiftexistinImage" : woundImageConstants.woundImagesList[woundImageConstants.imagesLoaded].swiftexistinImage
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_GETWOUNDIMAGE,
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
    woundImagesModule.getWoundImageDownloadSuccessCallback,
    woundImagesModule.getWoundImageDownloadFailureCallback,
    false
  );

};

woundImagesModule.getWoundImageDownloadSuccessCallback = function(response){
  kony.print("inside woundImagesModule.getWoundImageDownloadSuccessCallback start::");

  if(response!==null && response.opstatus === 0 && response.httpStatusCode == "200"){
    //woundImageConstants.woundImagesList[woundImageConstants.imagesLoaded].docBase64 = response.document;
    var woundImgData={
      "lbltimestamp": moment(woundImageConstants.woundImagesList[woundImageConstants.imagesLoaded].documentDate).format('dddd, MM/DD/YYYY, hh:mm A'),
      "imgwound":{base64: response.document}
    }
    
    frmPatientSummary.segmentimages.setDataAt(woundImgData, woundImageConstants.imagesLoaded);
    

    kony.print("inside woundImagesModule.getWoundImageDownloadSuccessCallback imagesLoaded::"+woundImageConstants.imagesLoaded);
    
    
    kony.print("inside woundImagesModule.getWoundImageDownloadSuccessCallback selectedIndex::"+woundImageConstants.selectedWound);

    if(woundImageConstants.selectedWound == woundImageConstants.imagesLoaded){
      frmPatientSummary.imgdesc.base64 = response.document;
    }
    
    woundImageConstants.imagesLoaded = woundImageConstants.imagesLoaded+1;
    if(woundImageConstants.imageListLength > woundImageConstants.imagesLoaded){
      woundImagesModule.frmPatientSummary_getNextWoundImage();
    }
  }
}

woundImagesModule.getWoundImageDownloadFailureCallback = function(response){
  kony.print("inside woundImagesModule.getWoundImageDownloadFailureCallback start::"+JSON.stringify(response));
  woundImageConstants.imagesLoaded = woundImageConstants.imagesLoaded+1;
}

var patientSummaryFromTaskList = function(){
  
  userInfo.patientId = patientSummaryObjects.patientDemoGraphics.patientId;
  if(userInfo.patientId!=null && userInfo.patientId != ""){
      com.healogics.patientSummary.getPatientSummary(userInfo.patientId, "", "", true);
  }
};

function patientSummaryPostShow(){
  if(isIpad && !SYNC_CONSTANTS.isAppOffline){
    resolveConflict_cntrl_offline.setBadgeValueForUI();
  }
}