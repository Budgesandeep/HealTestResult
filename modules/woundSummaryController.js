var wound_summary_cntrl_offline =  {};

/************************************************************************************
* Get All Wound Summary Data
*************************************************************************************/

wound_summary_cntrl_offline.getWoundSummary = function(patientId){ 
  kony.print("inside wound_summary_cntrl_offline.getWoundSummary with patient Id------>"+ JSON.stringify(patientId));
  var tempEncounterDetails = {};
  function successCallBack(res){
    kony.print("wound_summary_cntrl_offline.getWoundSummary success callback--------->");
    kony.print("wound_summary_cntrl_offline.getWoundSummary success callback response--------->"+ JSON.stringify(res));
    patientSummary_offline_response.woundSummary = [];
    for (i = 0; i< res.length; i++){
      var WoundSummaryObj = {
        woundLabel : "",
        woundSummaryList : [],
        woundId : ""
      };
      tempEncounterDetails = JSON.parse(res[i]._patientEncounterDetails); 
      kony.print("after parsing _patientEncounterDetails, tempEncounterDetails --------->(i)"+ i +  JSON.stringify(tempEncounterDetails));
      WoundSummaryObj.woundLabel = res[i]._woundLabel;
      WoundSummaryObj.woundId = res[i]._woundId;
      //encounter details can be be more than 1 for a single wound
      for (entCounter=0; entCounter < tempEncounterDetails.length; entCounter++ ){
        var temp = {};      
        temp.areaOfWound = tempEncounterDetails[entCounter].areaOfWound;
        temp.areaPercentageOfHealing = tempEncounterDetails[entCounter].areaPercentageOfHealing;
        temp.biopsy = tempEncounterDetails[entCounter].biopsy;
        temp.comprehensiveTreatment = tempEncounterDetails[entCounter].comprehensiveTreatment;
        temp.debridement = tempEncounterDetails[entCounter].debridement;
        temp.encounterDate = tempEncounterDetails[entCounter].encounterDate;
        temp.encounterId = tempEncounterDetails[entCounter].encounterId;
        temp.ionisionAndDriange = tempEncounterDetails[entCounter].ionisionAndDriange;
        temp.negPressureWoundTherapy = tempEncounterDetails[entCounter].negPressureWoundTherapy;
        temp.totalContactCost = tempEncounterDetails[entCounter].totalContactCost;
        temp.volumeOfWound = tempEncounterDetails[entCounter].volumeOfWound;
        temp.volumePercentageOfHealing = tempEncounterDetails[entCounter].volumePercentageOfHealing;
        
        temp.npwApplicationTherapy = tempEncounterDetails[entCounter].npwApplicationTherapy;
        
        temp.dermal_matrix_substitute_type = tempEncounterDetails[entCounter].dermal_matrix_substitute_type;
        temp.dermal_matrix_document_date = tempEncounterDetails[entCounter].dermal_matrix_document_date;
        
        kony.print("getWoundSummary encounter details - temp for i,entCounter:"+ i + entCounter + JSON.stringify(temp));
        WoundSummaryObj.woundSummaryList.push(temp);
      }
      patientSummary_offline_response.woundSummary.push(WoundSummaryObj);  
      kony.print("getWoundSummary success callback - WoundSummaryObj:" + JSON.stringify(WoundSummaryObj));
    }
    kony.print("patientSummary_offline_response after WoundSummary"+ JSON.stringify(patientSummary_offline_response));

    //To get the WoundList for patient summary  except StepSummary
    objWounds_cntrl_offline.getAllWoundsForPatientId(patientId);       
  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("getWoundSummary error callback");
    kony.print("getWoundSummary error callback response------->"+JSON.stringify(res));
  }

  var wcs = 
      "where patientId =" + JSON.stringify(patientId) + 
      " and facilityId =" + JSON.stringify(userInfo.selectedFacilityId) ;

  kony.print("wound_summary_cntrl_offline.getWoundSummary - Where Clause" + wcs);
  com.healogics.offline.patientWounds2.find(wcs, successCallBack , errorCallBack, true);
};

