var objHealingStep_cntrlr_offline = {};
/************************************************************************************
* Get CPG links based on patientid, wound no, stepNo
*************************************************************************************/
objHealingStep_cntrlr_offline.getCPGLinksAndTitle = function(patientId, woundNo, stepNo){
  function successCallBack(res){
    kony.print("getCPGLinksAndTitle success callback--------->");
    kony.print("getCPGLinksAndTitle success callback response--------->"+ JSON.stringify(res));
    //patientSummary_offline_response.woundList.
    for (var m=0; m < patientSummary_offline_response.woundList.length;m++){
      if(patientSummary_offline_response.woundList[m].woundno == woundNo){ 
        patientSummary_offline_response.woundList[m].stepSummary[stepNo].stepInfo.title = res[0]._healingStepTitle;
        patientSummary_offline_response.woundList[m].stepSummary[stepNo].stepInfo.cpgLinks = res[0]._healingStepCPGLinks;
      }
    }
  }
  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("getCPGLinksAndTitle failure callback");
    kony.print("getCPGLinksAndTitle failure callback response--------->"+JSON.stringify(res));
  }
  kony.print("------->inside objHealingStep_cntrlr_offline.getCPGLinksAndTitle ");
  kony.print("patient Id,woundNo,stepNo--------------->"+ JSON.stringify(patientId)+ " "+ JSON.stringify(woundNo)+ " "+ JSON.stringify(stepNo));
  var wcs = "where patientUuid = "+ JSON.stringify(patientId) + " and " + "woundNumber = "+ JSON.stringify(woundNo)+ " and " + "healingStepNumber = "+ JSON.stringify(stepNo)+ " order by CAST(woundNumber as INTEGER) asc";
  objHealingStep.find(wcs, successCallBack, errorCallBack); 
};