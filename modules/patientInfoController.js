
var patientinfo_cntrl_offline ={};

//To fetch the patient demographic information from patientInfo table
patientinfo_cntrl_offline.getAllPatientInfoForOffline = function(patientId){
  kony.print("inside patientinfo_cntrl_offline.getAllPatientInfoForOffline with patient Id------>"+ JSON.stringify(patientId));

  function successCallBack(res){
    kony.print("patientinfo_cntrl_offline.getAllPatientInfoForOffline success callback--------->");
    kony.print("patientinfo_cntrl_offline.getAllPatientInfoForOffline success callback response--------->"+ JSON.stringify(res));
    if(res != null && res.length > 0){   
      var i=0;
      patientSummary_offline_response.patientName = res[i]._name;
      patientSummary_offline_response.dateOfBirth = res[i]._dateOfBirth;
      patientSummary_offline_response.contactNumber = res[i]._contactNumber;
      patientSummary_offline_response.patientres = res[i]._patientId;
      patientSummary_offline_response.priInsur = res[i]._priInsur;
      patientSummary_offline_response.refPhy = res[i]._refPhy;
      patientSummary_offline_response.medicalRecNo = res[i]._medicalRecNo;
      patientSummary_offline_response.careApproach = res[i]._careApproach;
      patientSummary_offline_response.abiLeft = res[i]._abiLeft;
      patientSummary_offline_response.abiRight = res[i]._abiRight;
      patientSummary_offline_response.allergies = res[i]._allergies;
      patientSummary_offline_response.wccPhy = res[i]._wccPhy;
      patientSummary_offline_response.caseManager = res[i]._caseManager;
      patientSummary_offline_response.weeksInTreat = res[i]._weeksInTreat;
      patientSummary_offline_response.priCarePhy = res[i]._priCarePhy;
      patientSummary_offline_response.diabeticStatus = res[i]._diabeticStatus;
      patientSummary_offline_response.secInsur = res[i]._secInsur;
      patientSummary_offline_response.terInsur = res[i]._terInsur;
      if(moment(res[i]._nextAppointmentDt).format("MM/DD/YYYY")<moment(new Date()).format("MM/DD/YYYY")){
      	patientSummary_offline_response.nextAppointmentDt = "";
      } else {
        patientSummary_offline_response.nextAppointmentDt = res[i]._nextAppointmentDt;
      }
      patientSummary_offline_response.msrFlag = res[i]._msrFlag;
      patientSummary_offline_response.msrReviewFlag = res[i]._msrReviewFlag;

      kony.print("patientSummary_offline_response after patient info"+ JSON.stringify(patientSummary_offline_response));

      //To get the Wound Summary Data from patientWounds2 Table
      wound_summary_cntrl_offline.getWoundSummary(patientId);
    }else{
      com.healogics.utility.dismissLoading();
      com.healogics.utility.displayAlert(ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE);
      return;
    }
  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("getPatientInfoForOffline failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }

  com.healogics.utility.showLoading();
  var wcs = "where patientId = "+ JSON.stringify(patientId);
  kony.print("patientinfo_cntrl_offline.getAllPatientInfoForOffline where clause:-------->"+wcs);
  com.healogic.offline.patientInfo.find(wcs,successCallBack,errorCallBack);
};