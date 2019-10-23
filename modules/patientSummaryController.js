//global object for forming patient summary response from offline DB
var patientSummary_cntrl_offline = {};

//forming response structure
var patientSummary_offline_response = {
  woundSummary : [],
  woundList :[],
  clear : function(){
    this.woundSummary = [];
    this.woundList = [];
  }
};

//starting point of patientSummary_offline_response formation
patientSummary_cntrl_offline.getOfflinePatientSummary = function(patientId){
  kony.print("inside patientSummary_cntrl_offline.getOfflinePatientSummary, patientId"+patientId);

  //To fetch the patient demographic information from patientInfo table
  patientinfo_cntrl_offline.getAllPatientInfoForOffline(patientId);  
};