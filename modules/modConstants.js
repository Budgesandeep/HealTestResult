/*
*Name: modConstants.js
*Purpose: For Global variables for holding data and constants
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer                 Comments
*---------------------------------------------------------------------------
* 12/19/2016        492306    Validations/Integration Logic
*
*
*/

var MF_CONSTANTS = {

//   //HEALOGICS - DEV
//   providerName : "UserAuthenticationDev",
//   appkey:"healogics-devcloud-key-829474159919",
//   appsecret:"healogics-devcloud-secret-829474159919",
//   appurl:"https://100014810.auth.konycloud.com/appconfig",
//   CLOUD_URL:"https://healogics-dev.konycloud.com",

//   //HEALOGICS - QA
 	providerName : "UserAuthentication",
  	appkey:"healogics-uatcloud-key-829474159919",
   	appsecret:"healogics-uatcloud-secret-829474159919", 
  	appurl:"https://100014810.auth.konycloud.com/appconfig",
   	CLOUD_URL:"https://healogics-uat.konycloud.com",

  //HEALOGICS - PROD
  /*providerName : "UserAuthenticationProd",
  	appkey:"healogics-prodcloud-key-829474159919",
  	appsecret:"healogics-prodcloud-secret-829474159919",
  	appurl:"https://100014810.auth.konycloud.com/appconfig",
 	CLOUD_URL:"https://healogics.konycloud.com",*/
  
};

// To Check Whether the device is IPad or IPhone 
// Hardcoding is mandatory for iPhone for flag values incase user downloads app from iPad
var isIpad = (kony.os.deviceInfo().name == "iPad") ? true : false;
var isIphone = (kony.os.deviceInfo().name == "iPhone") ? true: false;
 //var isIpad = false;  
 //var isIphone = true;
 var saveHealFlag = false;


var PUSH_CONSTANTS = {
  USER_PUSH_REGISTRATION_ID : "USER_PUSH_REGISTRATION_ID",
  USER_DEVICE_REGISTERED_FOR_PUSH : "USER_DEVICE_REGISTERED_FOR_PUSH",
  KSID : "KSID",
  MANDATORY_UPGRADE_AT_VERSION : "MANDATORY_UPGRADE_AT_VERSION",
  MANDATORY_UPGRADE_MESSAGE : "MANDATORY_UPGRADE_MESSAGE",
  MANDATORY_UPGRADE_TITLE : "MANDATORY_UPGRADE_TITLE"
};

var MF_SERVICECONSTANTS = {

  ///TEST RESULTS SERIVCE //
  SERVICE_NAME_TESTRESULTS:"IHealDocumentationService",
  OPERATION_NAME_GETTESTRESULTS:"getTestResults",
  OPERATION_NAME_GETTESTRESULTSLIST :"getTestResultsList",
 ///////     ///////
  
  SERVICE_NAME_ACTUAL : "Wound360",
  SERVICE_NAME_MOCKUP : "HealogicsMockup",
  SERVICE_NAME_LOGOUT : "Wound360Logout", 
  SERVICE_NAME_USERLOGIN : "UserLogin",
  
  SERVICE_NAME_CPGLINK : "PrintExport",// "PrintExportFile", //"CPGLinks",
  OPERATION_NAME_GETCPGLINKDATA : "cpgPdf", //"getCPGLinkData",
  OPERATION_NAME_GENERATEPDF : "generatePdf",

  OPERATION_NAME_USERLOGIN : "login",
  OPERATION_NAME_USERPREFERENCELIST :"userpreferencelist",
  OPERATION_NAME_USERPREFERENCE:"userpreference",
  OPERATION_NAME_AUTHENTICATEBYTOKEN : "loginByToken",
  OPERATION_NAME_LOCATION:"userFacilityList",
  OPERATION_NAME_APPLIST : "applist",
  OPERATION_NAME_PATIENTLIST : "patientlist",
  OPERATION_NAME_PATIENTSUMMARY : "patientSummary",
  OPERATION_NAME_LOGOUT : "logout",
  OPERATION_NAME_CREATETASK : "createTask",
  OPERATION_NAME_GETTASKLIST : "getTaskList",
  OPERATION_NAME_UPDATETASK : "updateTask",
  OPERATION_NAME_GETNOTELIST: "getNoteList",
  OPERATION_NAME_WCCMETRICS:"wccMetrics",
  ORCHESTRATION_SERVICE_NAME_ACTUAL : "Wound360Orchestration",
   
  ORCHESTRATION_SERVICE_NAME_MOCKUP : "HealogicsMockupOrchestration",

  ORCHESTRATION_OPERATION_NAME_USERLOGIN : "userLogin",
  OPERATION_NAME_FILTERPREFERENCE : "filterPreference",
  OPERATION_NAME_UPDATEFACILITY : "updateFacility",
  OPERATION_NAME_FACILITYLIST : "getUserFacilityList",
  OPERATION_NAME_SWITCHFACILITY : "switchFacility",
  OPERATION_NAME_USERMETRICS:"userMetrics",
  OPERATION_NAME_METRICS : "metrics",
  OPERATION_NAME_GETUSERACKNOWLEDGEMENT : "getTermsConditions",
  OPERATION_NAME_UPDATEACKNOWLEDGEMENT : "updateTermsConditions",
  OPERATION_NAME_SAVEHEALSTEPS : "saveHealSteps",
  OPERATION_NAME_SAVEHEALSTEPS_OFFLINE : "saveHealStepsOffline",
  OPERATION_NAME_ADMINFACILITYLIST : "adminFacilityList",
  OPERATION_NAME_ADMINSEARCHBYID : "adminSearchById",
  OPERATION_NAME_ADMINSEARCHBYNAME : "adminSearchByName",
  OPERATION_NAME_ADMINSEARCHBYBID : "adminSearchByBid",
  OPERATION_NAME_ADMINFACILITYUPDATE : "adminFacilityUpdate",
  OPERATION_NAME_GETMSRDOCUMENTLIST : "getMSRDocumentList",
  OPERATION_NAME_VIEWPDF : "viewPdf",
  OPERATION_NAME_MSRREVIEW : "msrReview",
  OPERATION_NAME_MOSTRECENTPHYSICIANORDERS : "mostRecentPhysicianOrders", 
  OPERATION_NAME_UPLOADDOCUMENT : "uploadDocument",
  OPERATION_NAME_UPLOADPDFDOCUMENT : "uploadPdfDocument",
  OPERATION_NAME_PHOTOMOBILE : "photomobile",
  OPERATION_NAME_GETWOUNDIMAGE : "getWoundImage",
  OPERATION_NAME_MOREMETRICS : "moreMetricsDocument",
  OPERATION_NAME_VIEWDOCUMENT : "viewDocument",
  OPERATION_NAME_VIEWDOCUMENTLIST : "viewDocumentList",
  OPERATION_NAME_GETDOCUMENTTYPES : "getDocumentTypes",
  OPERATION_NAME_GETDOCUMENTLIST : "viewDocumentTypeSummary",
  OPERATION_NAME_DELETEDOCUMENT : "updateDeleteDocument",
  
  OPERATION_NAME_APPPATIENTLIST : "appPatientList", //This service for deeplink patientlist to fetch appList and PatientList, MSRList
  OPERATION_NAME_APPPATIENTSUMMARY : "appPatientSummary", //This service for deeplink patientSummary
  OPERATION_NAME_WOUNDSUMMARY : "woundSummary",
  OPERATION_NAME_NOTIFICATIONLIST : "getNotificationList",
  OPERATION_NAME_CREATENOTIFICATION : "createNotification",
  OPERATION_NAME_EDITNOTIFICATION : "UpdateNotification",
  OPERATION_NAME_NOTIFICATION_FACILITYLIST : "getLiveFacilities",
  OPERATION_NAME_GETPUSHNOTIFICATION : "UserNotifications",
  OPERATION_NAME_DISMISSNOTIFICATION : "dismissNotifications",
  
};
var REGEX_STRING = {
  USERID_REGEX: /^[a-zA-Z0-9]{3,32}$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{4,32}$/,
};

//============

var GENERAL_CONSTANTS = {
  TEXT_CLOSE : "Close",
  TEXT_OK : "Ok",
  TEXT_YES : "Yes",
  TEXT_NO : "No",
  TEXT_INFO : "Info",
  TEXT_ERROR : "Error",
  TEXT_TRUE : "true",
  TEXT_FALSE : "false",
  TIMEOUT_VALUE:25,
  TIMEOUT_MINUTES:04,
  TIMEOUT_SECONDS:59,
  RESPONSE_UNAUTHORIZED : "Unauthorised",
  INVALID_TOKEN : "invalid_token",
  USER_ROLE_PHYSICIAN : "Physician",
  USER_ROLE_CORPORATEADMIN : "Corporate Admin",
  USER_ROLE_CASEMANAGER : "Case Manger",
  USER_ROLE_CORPORATEUSER : "Corporate User",
  
  DEEPLINK_PATIENTLIST_ACTION : "PatientList",
  DEEPLINK_PATIENTSUMMARY_ACTION : "9StepHealing",
  
  DEEPLINK_TASKLIST_ACTION : "taskList",
  DEEPLINK_PATIENTRECORDS_ACTION : "patientRecords",
  DEEPLINK_WCCDASHBOARD_ACTION : "wccDashBoard",
  DEEPLINK_ADMINFACILITY_ACTION : "adminFacility",
  
  IDLE_TIMEOUT_STARTTIME : 0,
  IDLE_TIMEOUT_ENDTIME : 0 ,
  PATIENTFLAG :"false",
};

var ERROR_CONSTANTS = {

  GENERAL_ERROR_MESSAGE : "We're sorry. Please try again or contact help desk number.",
  SERVICE_LOAD_ERROR : "Application failed to load, please try to login again. If problem persists, please contact Healogics support.",
  USERNAME_REQUIRED : "User Name is required for application login.",
  PASSWORD_REQUIRED : "Password is required for application login.",
  USERNAME_PASSWORD_REQUIRED : "Enter valid User Name and Password for application login.",
  LOGIN_ERROR_MESSAGE : "The Username or Password was incorrect.",
  LOGOUT_SUCCESS_MESSAGE : "You have successfully logged out!",
  SESSION_EXPIRED_MESSAGE : "Your session has expired. Please login again.",
  RESPONSE_COMPOSITE_FAILURE_MESSAGE : "One or more of the services failed in composite service.",
  TASKDESC_ERROR_MESSAGE:"Task description is required.",
  TASKDATE_ERROR_MESSAGE:"Task Due Date is required.",
  TASK_ERROR_MESSAGE:"Task description and Task creation date are required.", 
  NOTES_ERROR_MESSAGE:"Notes description is required.",
  LOGIN_FACILITY_LIST_EMPTY: "You have no facilities available to login. Please try again or contact help desk number.",
  SAMEFACILITY_ERROR_MESSAGE:"The facility you selected and current facility are same.",
  SAMELOCATION_ERROR_MESSAGE:"The Location you selected and current Location are same.",
  FACILITYDATA_OFFLINE_ERROR_MESSAGE:"Offline data is not available for selected facility.",
  NOFACILITY_SELECTION_ERROR_MESSAGE:"Please select a facility",
  FORGOTPASSWORD_ERROR_MESSAGE : "User Name is required for password recovery.",
  NO_OFFLINE_DATA_FOR_ENTERED_USERNAME : "User Name entered doesn't have any stored offline data. Please try again or contact help desk number.",////OFFLINE RELATED ERROR MESSAGE
  NO_NETWORK_CONNECTION : "Please check your network connection and try again",
  SYNC_DOWNLOAD_ERROR : "Error while downloading data. Please login and try again.",
  SYNC_DOWNLOAD_SESSION_EXPIRY_ERROR : "Backend session expired. Please try again or contact help desk number.",
  UPLOADDOCUMENT_MAXFILE_LIMIT_ERROR : "You have reached the maximum number of files allowed for a patient record (100).",
  UPLOADDOCUMENT_MAXPAGE_LIMIT_ERROR : "You have reached the maximum number of pages allowed for file uploads (20).",
  UPLOADDOCUMENT_MAXSIZE_LIMIT_ERROR : "This upload exceeds the maximum upload size of 10MB.",
  UPLOADDOCUMENT_UPLOAD_GENERAL_ERROR : "One or more images upload failed. Please try again",
  UPLOADDOCUMENT_SUPPORTFILE_ERROR : "The file type you selected is not supported. Please choose an image or PDF document to upload.",
  EXPORT_DOCUMENTS_ERROR: "Failed to fetch document. Please try again.",
  NOACCESS_PATIENTLIST:"You do not have access to this module. Please contact the help desk at 1-866-412-3680 for additional assistance.",
  PRINT_IPAD_RESTRICT_MESSAGE: "We're sorry, you can only print and export while on a PC or desktop computer",
  PRINT_IPAD_FEATURE_UNAVAILABLE: "Feature not available on tablet",
  NOTIFICATION_TITLE_ERROR_MESSAGE: "Notification title is required.",
  NOTIFICATION_DESCRIPTION_ERROR_MESSAGE: "Notification description is required.",
  NOTIFICATION_HYPERLINK_ERROR_MESSAGE: "Please enter a valid hyperlink.",
  NOTIFICATION_DATE_ERROR_MESSAGE: "Please enter a valid date.",
  NOTIFICATION_GENERAL_EMPTY_ERROR_MESSAGE: "Please enter data for the highlighted fields.",
  NOTIFICATION_TIME_ERROR_MESSAGE: "Please enter a valid time.",
  NOTIFICATION_FACILITY_ERROR_MESSAGE: "Please select a facility.",
  NOTIFICATION_SAVE_ERROR_MESSAGE: "Error while saving the notification. Please try again."
  
};
var CONSTANTS={
  USER_ACK_TITLE:"User Acknowledgement",
  USER_ACK:"Healogics data, reports and other tools should only be used by Healogics employees in a manner that is consistent with the following conflict of interest standards:",
  USER_ACK1:"1. Healogics employees may not apply utilization/conversion quotas or requirements on physicians or other persons serving in clinical roles.",
  USER_ACK2:"2. To the extent observational financial or clinical data is used as a comparator, it should not be used to establish minimum utiilization quotas or requirements on persons serving in clinical roles.",
  USER_ACK3:"3. Clinical decisions related to patient care are made only by persons licensed and functioning in clinical roles.The treating provider is responsible for determining the appropriate diagnosis and course of treatment for each patient, based on the treating provider's independent professional medical judgement and desired patient outcome. Persons functioning in non-clinical roles should not be involved in critiquing, or advising on, physician prescribing behaviour or other clinical decisions.",
  USER_ACK_ACCEPT:"You accepted the above User Acknowledgement on"
};

var POPUP_CONSTANTS={
  SWITCH_USER_MSG:"Are you sure you want to Switch Facility ?",
};


var DATE_FORMAT={
  
  LOGIN:"login",
  NEXT_APPOINTMENT:"nextAppointment",
  NOTES_CREATE_DATE: "notesCreateDate",
  TASK_CREATED_DATE:"taskCreatedDate",
  TASK_DUE_DATE:"taskDueDate"
  
};

var deepLinkInfo = {
  isDeepLinkFlow:false,
  isRefreshFlow:false,
  iHealAccessToken : "",
  iHealUserID : "",
  facilityID : "",
  patientID : "",
  action : "",
  cipherTexts: "",
  isFromEpic : "",
  role : "",
  
  clear : function(){
    this.isDeepLinkFlow = false;
    this.isRefreshFlow = false;
    this.iHealAccessToken = "";
    this.iHealUserID = "";
    this.facilityID = "";
    this.patientID = "";
    this.action = "";
    this.cipherTexts = "";
    this.isFromEpic = false;
	this.role = "";
  }
  
};

//=============
var userInfo = {
locationList:[],
  userName : "",
  firstName : "",
  lastName : "",
  fullName : "",
  timestamp : "",
  userPassword : "",////ADDED FOR OFFLINE SAVE AND VALIDATION
  userId : "",
  taskCount : "",
  loginTime : "",
  loginDate : "",
  helpdeskNumber : "1-866-412-3680",
  appList : [],
  accessToken : "",
  presentFacilityId : "",
  presentFacilityName : "",
  timezone : "",
  selectedFacilityId : "",
  presentFacilitybluebookid:"",
  SelectedFacilitybluebookid:"",
  roleId : "",
  facilityList : [],
  userAcknowledgementFlag : false,
  termsConditions : "",
  ackAcceptedDate : "",
  ackExpiryDate : "",
  roles : [],
  acknowledgeMSR : GENERAL_CONSTANTS.FALSE,
  facilityMetrics : GENERAL_CONSTANTS.FALSE,
  userMetrics : GENERAL_CONSTANTS.FALSE,
  viewAdministration : GENERAL_CONSTANTS.FALSE,
  editAdminstration : GENERAL_CONSTANTS.FALSE,
  viewPatientList : GENERAL_CONSTANTS.FALSE,
  syncFacilityId : "",
  headerAccessToken : "",
  documentTypeName:[],
  documentTypeCode:[],
  processedFacilityList : [],
  presentLocationId:"",
  patientId:"",
  login_UIID:"",
  deviceType:"",
  sessionId:"",
  version:"",
  masterToken:"",
  
  clear : function(){
    this.userName = "";  
    this.userPassword = "";
    this.userId = "";
    this.firstName = "";
    this.lastName = "";
    this.fullName = "";
    this.taskCount = "";
    this.loginDate = "";
    this.loginTime = "";
    this.appList = [];
    this.accessToken = "";
    this.facilityList = [];
    this.presentFacilityId = "";
    this.presentFacilityName = "";
    this.presentFacilitybluebookid="";
    this.SelectedFacilitybluebookid="";
    this.timezone = "";
    this.selectedFacilityId = "";
    this.userAcknowledgementFlag = false;
    this.termsConditions = "";
    this.ackAcceptedDate = "";
    this.ackExpiryDate = "";
    this.roleId = "";
    this.roles = [];
  	this.acknowledgeMSR = GENERAL_CONSTANTS.FALSE;
  	this.facilityMetrics = GENERAL_CONSTANTS.FALSE;
  	this.userMetrics = GENERAL_CONSTANTS.FALSE;
  	this.viewAdministration = GENERAL_CONSTANTS.FALSE;
  	this.editAdminstration = GENERAL_CONSTANTS.FALSE;
    this.viewPatientList = GENERAL_CONSTANTS.FALSE;
    this.headerAccessToken = "";
    this.documentTypeName = [];
    this.documentTypeCode = [];
    this.processedFacilityList = [];
    this.patientId = "";
    this.login_UIID = "";
    this.deviceType = "";
  	this.sessionId = "";
    this.version = "";
  }
};

var userApps = {

  totalApps :11,

  landingIcons : [
    "btnwccdashboard","btnpatientsafety","btnadministration","btnSystemNotification","btnbilling","btnsystemnotification","btnregistration","btncommunity","btnscheduling","btnprocedures","btndme","btnspotfire"
  ],

  submenuIcons : [
    "btsmwcc","btsmpatientsafety","btsmadministration","btsmhbo","btsmbilling","btnregistration","btnsmcommunity","btnscheduling","btnprocedures","btndme","btnspotfire"
  ]
};

var patientListConstants = {

  msrList : [],
  filterData: [],
  
  ascendingOrder : "a",
  descendingOrder : "d",

  showForm : "true",  
  start : "0",
  limit : "0",
  sortOrder : "",
  sortColumn : "",
  filterField : "",
  filterField1 :"",
  filterValue : "",
  referKey: "",
  weekRange : "",
  myPatients : "N",
  selectedWeek : "",
  isPatientSearchInProgress : false,
  searchText : "",

  clearSortAndFilter : function(){
    this.showForm = "true";
    this.start = "0";
    this.limit = "0";
    this.sortOrder = "a";
    this.sortColumn = "name";
    this.filterField = "";
    this.filterValue = "";
    this.referKey = "";
    this.weekRange = "";
    this.myPatients = "N";
    this.selectedWeek = "";
  },

  patientListColumn : {
    "1" : "name", 
    "2" : "caseManager", 
    "3" : "physician", 
    "4" : "nextAppointment", 
    "5" : "appointmentType", 
    "6" : "wounds", 
    "7" : "weeks", 
    "8" : "advanceProcedures", 
    "9" : "transferStatus",
    "10": "txBasedPrecaution",
  },

  patientListHeader : {

    "imgdown1": "headerarrow.png",
    "imgdown2": "headerarrow.png",
    "imgdown3": "headerarrow.png",
    "imgdown4": "headerarrow.png",
    "imgdown5": "headerarrow.png",
    "imgdown6": "headerarrow.png",
    "imgdown7": "headerarrow.png",
    "imgdown8": "headerarrow.png",
    "imgdown9": "headerarrow.png",
    "lblappttype": "Appt. Type",
    "lblcasemanager": "Case Manager",
    "lblhealper": "Advanced Procedures",
    "lblline": "Label",
    "lblline2": "",
    "lblline3": "Label",
    "lblline4": "Label",
    "lblline5": "Label",
    "lblline6": "Label",
    "lblline7": "Label",
    "lblline8": "Label",
    "lblnextappt": "Next Appt.",
    "lblpatientname": "Patient",
    "lblphysician": "Physician",
    "lbltransferstatus": "Transfer Status",
    "lblweeks": "Weeks",
    "lblwounds": "Wounds",
    "lblPrecautions":"Transmission-Based Precautions"
  },


  patientListRecord : {	
    lblappttype: "",
    lblcasemanager: "",
    lblhealper: "",
    lblline: "",
    lblline2: "",
    lblline3: "",
    lblline4: "",
    lblline5: "",
    lblline6: "",
    lblline7: "",
    lblline8: "",
    lblnextappt: "",
    lblpatientname: "",
    lblphysician: "",
    lbltransferstatus: "",
    lblweeks: "",
    lblwounds: "",
    lblPrecautions: "",
    

    clear : function(){
      this.lblappttype = "";
      this.lblcasemanager = "";
      this.lblhealper = "";
      this.lblline =  "";
      this.lblline2 = "";
      this.lblline3 = "";
      this.lblline4 = "";
      this.lblline5 = "";
      this.lblline6 = "";
      this.lblline7 = "";
      this.lblline8 = "";
      this.lblnextappt = "";
      this.lblpatientname = "";
      this.lblphysician = "";
      this.lbltransferstatus = "";
      this.lblweeks = "";
      this.lblwounds = "";
      this.lblPrecautions = "";
    }
  },

  clear : function(){
    this.msrList = [];
    this.filterData = [];
    this.clearSortAndFilter();
    this.patientListRecord.clear();
  }

};
var task_info={

  STATUS_OPEN : "OPEN",
  STATUS_COMPLETE : "COMPLETE",
  STATUS_ALL : "ALL",

  followup:"",
  duedate:"",
  description:"",  

  patientname:"",
  patientId : "",
  woundId : "",
  woundNo : "",
  encounterId : "",
  medicalRecordNo : "",
  docentityId : "",
  filterData: [],
  taskList : [],
 
 clear: function(){
    this.followup = "";
    this.duedate = "";
    this.description = "";
    this.filterData=[];
    this.taskList = [];
  },
  
  reset: function(){
    this.followup = "";
    this.duedate = "";
    this.description = "";
  	this.patientId = "";
  	this.patientname = "";
  	this.woundId = "";
    this.woundNo = "";
  	this.encounterId = "";
  	this.medicalRecordNo = "";
  	this.docentityId = "";
    this.filterData=[];
    this.taskList = [];
  }
};

var notes_list=[];

var notes_info={
  notesMaximumCharacterCount : 1000,
  notes : "",
  patientId : "",
  woundId : "",
  patientname : "",
  medicalRecordNo : "",
  dueDate : "",
  followup:"",
  
  clear: function(){
      this.notes = "";
      this.patientId = "";
      this.woundId = "";
      this.patientname = "";
      this.medicalRecordNo = "";
}
};


//Patient Summary related objects

var patientSummaryObjects = {
  
  woundIdMapping : [],
    //for print/review
  patientSummaryResponse : {},

  patientDemoGraphics : {
    patientId : "",
    dob : "",
    patientName : "",
    contactNumber : "",
    medicalRecNo : "",
    careApproach : "",
    caseManager : "",
    weeksInTreat : "",
    priCarePhy : "",
    refPhy : "",
    wccPhy : "",
    priInsur : "",
    nextAppointmentDt : "",
    abileft : "",
    abiright : "",
    allergies : "",
    diabeticStatus : "",
    secondaryInsurance : "",
    teritaryInsurance : "",
    msrFlag : "",
    msrReviewFlag : "",

    reset : function(){
      this.patientId = "";
      this.dob = "";
      this.patientName = "";
      this.contactNumber = "";
      this.medicalRecNo = "";
      this.careApproach  = "";
      this.caseManager = "";
      this.weeksInTreat = "";
      this.priCarePhy = "";
      this.refPhy = "";
      this.wccPhy = "";
      this.priInsur = "";
      this.nextAppointmentDt = "";
      this.abileft = "";
      this.abiright = "";
      this.allergies = "";
      this.diabeticStatus = "";
      this.secondaryInsurance = "";
      this.teritaryInsurance = "";
      this.msrFlag = "";
      this.msrReviewFlag = "";

    }
  },
  selectedWoundIndex : 0,
  woundDescriptionDetails : [],
  arrWound9Points : [],
  CPGLinks : [],
  patientListAndGraphData : [],
  selectedStep : "Step1",
  selectedStepData : [],
  healing9stepEditedData : [],
  showLoadingIndicatorFlag : true,
  lastEditedStep : {},
  autoSaveTimerValue : 10,
  saveButtonFlag : false,
  arrwoundListColors : ["sknlblbluebold80", "sknlblorangebold80", 
                      "sknlblyellowbold80", "sknlblvoiletbold80", 
                      "sknlblgreenbold80", "sknlblredbold80",
                      "sknlblbluegreenbold80", "sknlblredorangebold80", 
                      "sknlblbluevioletbold80", "sknlblyelloworangebold80",
                      "sknlblredvioletbold80", "sknlblyellowgreenbold80" 
                     ],
  clear : function () {
    this.woundDescriptionDetails = [];
    this.patientListAndGraphData = [];
    this.showLoadingIndicatorFlag = true;
    this.healing9stepEditedData = [];
    this.lastEditedStep = {};
  }

};

var metrics_info={
  month:"",
  year:"",
  wccMetrics:[],
  userMetrics : [],
  info_title: ["New Patients","Wound Care Encounters","Patient Satisfaction","Median Days to Heal","Patient Outlier Rate","Healing Rate","Comprehensive Healing Rate","Treatment Outcomes","Debridement Rate"],
  info_description : ["Shows the number of patients who have their first made encounter within the date range of the report. Excludes all consult patients. In order to count as a new patient, there must be more than 30 calendar days since the patient’s previous discharge date.",
                      "Identified by made encounter with any appointment type other than ‘HBO’. Only one encounter per calendar day/patient can be counted. The count excludes any non-billed encounters.",
                      "Patient Satisfaction averages each satisfaction score for all sections of the patient satisfaction survey submitted electronically through Press Ganey within the selected analysis period.",
                      "The mathematical median of days from first visit to last visit for each wound with an outcome of “Healed-Epithelialized,” “Healed-Surgical Closure,” “Healed-Flap,” or “Healed-Graft.”All results for the timeframe in question are placed in ascending order and the median result is selected.",
                      "Reported as a rate. The rate is calculated using the denominator of all patients with an Active status at the time the report is run. The numerator is any patient with a wound in treatment for 14 or more weeks. Excluded from this calculation are any patients designated as palliative or complex wound care.",
                      "Reported as a rate. The rate is calculated using the denominator of all wounds with an outcome, the numerator is all wounds with an outcome of either “Healed-Epithelialized” “Healed-Surgical Closure,” “Healed-Flap,” or “Healed-Graft.”",
                      "Calculated by dividing the total number of wounds healed by the total number of wounds given an outcome during the timeframe noted. This does not include expired patients, those in palliative care or consultations. CHR includes complex patients. This is a different metric and should not be compared to any existing i-Heal or clinical reports. While challenging to heal, the inclusion of complex patients provides a more comprehensive and accurate representation of true patient outcomes.",
                      "The outcomes assigned to patients that have been discharged from the center over the previous 3 months. Category options include healed and not healed.\nNeutral outcomes are included in the ‘not healed’ category.\nA ‘neutral’ outcome is defined as:\n1.Anticipated amputation upon presentation to the Wound Care Center\n2.Wounds treated outside the Wound Care Center (by another provider)\n3.Converted wounds (smaller wounds that have anatomically coalesced into a single, larger wound",
                      "Calculated by dividing the total number of debridements by the total number of wounds assessed. This is further divided into Selective and Excisional categories."],
  info_exclusions:"The following patient discharge statuses are excluded from outcome calculations such as Healing Rate and Days to Heal:"+"\n \n"+
"1. Consult Only patients (one visit with no intent to treat)"+"\n \n"+
"2. Expired (patient dies during course of treatment) \n \n 3. Medical reason – Admitted to partner hospital \n \n 4. Medical reason – Admitted to other healthcare facility\n \n 5. Quit-Financial (e.g. patient quits due to insurance denial or co-pays)\n \n 6. Quit-Moved\n \n 7. Quit-Transfer to other provider for wound care\n \n 8. Patients who are receiving palliative wound care\n\nThe following wound outcomes are excluded from outcome calculations such as Healing Rate and Days to Heal:\n \n 1. Amputation-Anticipated (Above Knee, Below Knee, etc.)\n \n2. Converted",
  clear : function(){
    this.month="";
    this.year="";
    this.wccMetrics=[];
    this.userMetrics = [];
  }
};
var facility_info={
  "facility":"",
  "selectedFacilityId":"",
  clear:function(){
  this.facility="";
}
};

var userAck_info={
  userAcknowledgementFlag:false,
  ackAcceptDate:"01/08/2017",
  clear:function(){
    this.ackAcceptDate="";
  }
};
var CPGLinksUrl={
  "Url_1":["W.05.01_Enhance Perfusion and Oxygenation.pdf","W.05.01.1_Vascular Assessment of the Lower Extremity.pdf","W.05.01.2_Transcutaneous PO2_PtcO2_Interpretation.pdf"],
  "Url_2":["ES2_W.05.02_Remove Non_Viable Tissue.pdf","W.05.02.01_Remove Non_Viable Tissue_Supplement on Hydrotherapy in Wound Care.pdf"],
  "Url_3":["ES3_W.05.03_Resolve Infection and Control Inflammation.pdf"],
  "Url_4":["ES4_W.05.04_Resolve Edema.pdf"],
  "Url_5":["ES5_W.05.05_Optimize Wound Bed Moisture Balance, Exudate, Odor.pdf"],
  "Url_6":["ES6_W.05.06_Enhance Tissue Growth.pdf"],
  "Url_7":["ES7_W.05.07_Relieve Pressure_Provide Effective Offloading Presrve.pdf"],
  "Url_8":["ES8_W.05.08_Control and Diminish Pain.pdf"],
  "Url_9":["ES9_W.05.09_Optimize Host Factors.pdf", "ES9_W.05.09.2_Optimize Host Factors_Enhance Nutrition.pdf"]
};

var CPG_Links={                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  "pdfLink":"CPGDocs/pdfGenerator?fileName",
  "fileName":"W.05.01_Enhance%20Perfusion%20and%20Oxygenation.pdf"
};

var facilityListConstants = {

  adminFacilityList: [],
  popupSaveData : [],
  selectedRow : [],
  selectedRowData : [],
  popupselectedRowData : [],

  updateRecordData : [],
  filterData: [],
  sortOrder : "",
  sortColumn : "",
  clearSortAndFilter : function(){
    this.showForm = "true";
    this.start = "0";
    this.limit = "0";
    this.sortOrder = "a";
    this.sortColumn = "name";
    this.filterField = "";
    this.filterValue = "";
    this.referKey = "";
    
    
  },
  
  clear : function(){
    this.selectedRow =[];
    this.selectedRowData = [];
    this.popupselectedRowData = [];
    this.updateRecordData = [];
    this.popupSaveData = [];
    
  }
  
	};

// To Check Whether the device is IPad
//var isIpad = (kony.os.deviceInfo().name == "iPad") ? true : false;
//var isIphone = (kony.os.deviceInfo().name == "iPhone") ? true: false;

  
var recordListConstants={
  recordList:[],
  documentList:[],
  progressNotesList : [],
  labScansList : [],
  radScansList : [],
  photosList : [],
  physicianOrdersList : [],
  consentsList : [],
  faceSheetsList : [],
  otherList : [],
  records : [["progressNotes", "Progress Notes"],["labScans", "Lab Scans"],["radScans", "Rad Scans"],
               ["photos", "Photos"],["msrReviewDocs", "MSR Review Docs"],["physicianOrders", "Physician Orders"],
               ["consents", "Consents"],["faceSheets", "Face Sheets"],["other", "Other"]
              ]
}; 

var printModuleConstants = {
  
  templateName : "", //WoundSummary, 9steps, patientlist, tasklist
  fileType : "PDF", //PDF, EXCEL, REVIEW
  fileName : "",  
  jsonInput : "",
  base64Output : "",
  chartData : "",
  profileImage : "",
  currentRunningTimerId :"",
  chartImageAsBase64 : "",
  
  enablePrint : false,

  clear:function(){
    this.templateName = "";
    this.fileName = "";
    this.fileType = "PDF";
    this.base64Output = "";
    this.chartData = "";
    this.profileImage = "";
    this.currentRunningTimerId = "";
    this.enablePrint = true;
  }
  
};

var paginationConstants = {
  initialCount : (kony.os.deviceInfo().name == "thinclient" && kony.os.deviceInfo().category == "Firefox") ? 20 : 40,
  growCount : (kony.os.deviceInfo().name == "thinclient" && kony.os.deviceInfo().category == "Firefox") ? 20 : 40,
  paginationData : [],
  paginationDataIndex : 0,
  clear : function(){
    this.paginationDataIndex = 0;
    this.paginationData = [];
  }
};

var woundImageConstants = {
  encounterId : "",
  woundId : "",
  woundImagesList : [],
  woundName : "",
  docEntityId : "",
  imagesLoaded : 0,
  imageListLength : 0,
  selectedWound : 0,
  
  clear : function(){
    this.encounterId = "";
    this.woundId = "";
    this.woundImagesList = [];
    this.woundName = "";
    this.docEntityId = "";
    this.imagesLoaded = 0;
    this.imageListLength = 0;
    this.selectedWound = 0;
  }
};

var uploadDocumentConstants = {
  docWithSerialNumberObj : [],
  uploadedDocumentsCount : 0,
  selectedDocumentType : "",
  uploadedDocumentName : "",
  selectedDocumentName : "",
  inputDocumentType : "" ,
  docUploadStatus : "In Progress",
  selectedRow : 0,
  deleteRowIndex : 0,
  base64String : [],
  statusPopupVisible : false,
  fileSize : 10485760,
  maxDocumentsListSize:100,
  fileObjArr : [],
  fileTypeArr:["pdf","image"],
  duplicateDocumentNames : "",
  userDefinedName : false,
  
  clear : function(){
    this.docWithSerialNumberObj = [];
    this.uploadedDocumentsCount = 0;
    this.selectedDocumentType = "";
    this.base64String = [];
    this.uploadedDocumentName = "";
    this.selectedDocumentName = "";
    this.inputDocumentType = "";
    this.docUploadStatus = "In Progress";
    this.statusPopupVisible = false;
    this.fileObjArr = [];
    this.deleteRowIndex = 0;
    this.duplicateDocumentNames = "";
    this.userDefinedName = false;
  }
};

///////////////////////OFFLINE///////////////////

var SYNC_CONSTANTS ={
  isSyncInitSuccess: false,
  syncInit:'syncInit',
  isFirstTime:true,
  isAppListDownload:"isAppListDownload",///for finding whether the applist exists in offline or not.
  isAppOffline: !(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)), //Rahul
  wccMetricsFirstTimeFlag: false,
  deviceEncryptionKey: "WoUnD36OHE@L0g!c",///Encryption Key
  tblAppListOffline: com.healogics.offline.appListOffline,
  tblCreateNotes: com.healogics.offline.craeateNotes,
  tblCreateTask: com.healogics.offline.createTask,
  tblFacilityList: com.healogics.offline.facilityList,
  tblLogin: com.healogics.offline.login,
  tblMsrList: com.healogic.offline.msrList,
  tblNotes: com.healogic.offline.notes,
  tblObjHealingStep: com.healogics.offline.objHealingStep,
  tblObjHealingSubStep: com.healogics.offline.objHealingSubStep,
  tblObjWounds: com.healogics.offline.objWounds,
  tblPatientInfo: com.healogic.offline.patientInfo,
  tblPatientList: com.healogic.offline.patientList,
  tblPatientWounds: com.healogics.offline.patientWounds,
  tblTasks: com.healogic.offline.tasks,
  tblTermsAndConditions: com.healogics.offline.termsAndConditions,
  tblUserMetrics: com.healogics.offline.userMetrics,
  tblWccMetrics: com.healogics.offline.wccMetrics,
  scopeAuthorizedAccess: "AuthorizedAccess",
  scopePatients: "Patients",
  scopeAppList: "appList",
  scopeMetrics: "metrics",
  scopeTaskDeltaDownload: "taskDeltaDownload",
  scopeLogin: "login",
  scopeWoundHealingSteps: "scopeWoundHealingSteps",
  scopeWoundSummary: "woundSummary",
  scopeCreateTaskAndNotes: "taskAndNotes",
  scopeUserMetrics: "userMetrics",
  scopePhotoUpload:"OfflinePhotoUpload",
  scopeGetPatientRecords:"OfflinePatientRecords",
  totalScopeCount: isIpad ? 11 : 5,
  scopeCountInMF : 13,
  purgeDataInDays : 30,
  isSyncSuccess : false,
  isSyncInProgress : false,
  syncIncompleteMessage : "The device can’t find an active network connection. Please ensure a working network connection is available and try syncing again.",
  offlineLogoutMessage : "Before you logout, be sure you’ve clicked the “Sync Now” button to sync any changes you have made.\n\nIf you’re currently in offline mode, please find a working network connection is available and try syncing. Any changes not synced now will attempt to be synced at next log in while connected to a network.\n\nAre you sure you want to logout?",
  syncChangesUploaded : "Your changes have been uploaded and are saved to the patient's profile.",
  ROLLBACK_DURATION_INDAYS : 3,
};

var SYNC_FACILITY_TIMEZONES = {
  EST : -5.0,
  CST : -9.0
};

var SYNC_FACILITY_TIMESTAMP = {
  EST : "-0500", //-0400
  CST : "-0900"
};

var sortAndFilterConstants ={
  selectedFilter : "",
  selectedFilterID : "",
  arrThisWeek : [],
  arrNextWeek : [],
  tasksFilterObject : {},
  patientListFilterObject : {},
  adminFilterObject : {},
  arrPatientListFilterValues : {
    "imgdown1":"lblpatientname",
    "imgdown2":"lblcasemanager",
    "imgdown3":"lblphysician",
    "imgdown4":"lblnextappt",
    "imgdown5":"lblappttype",
    "imgdown6":"lblwounds",
    "imgdown7":"lblweeks",
    "imgdown8":"lblhealper",
    "imgdown9":"lbltransferstatus",
    "imgdown10":"lblPrecautions"
  },
  arrTasksFilterValues : {
    "imgdown1":"lblpatientname",
    "imgdown2":"lblwoundnumber",
    "imgdown3":"lbltasks",
    "imgdown4":"lbldatecreated",
    "imgdown5":"lblduedate",
    "imgdown6":"lblnotes",
    "imgdown7":"lblstatus",
    "imgdown8":"lbldatecompleted"
  },
  arrAdminFilterValues : {
    "imgdown1":"lblcity",
    "imgdown2":"lblstate",
    "imgdown3":"lblzone",
    "imgdown4":"lblfacilitytype",
    "imagedown5":"huddleTool",
    "imagedown6":"photoMobile"
  },
  adminSelectedSortingType : false,
  userFilter : false,
  todayPatient : false,
};
