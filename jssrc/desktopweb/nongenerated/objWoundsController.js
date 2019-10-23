var objWounds_cntrl_offline = {};
//To get the WoundList for patient summary except StepSummary
objWounds_cntrl_offline.getAllWoundsForPatientId = function(patientId) {
    kony.print("inside objWounds_cntrl_offline.getAllWoundsForPatientId with patient Id--------------->" + JSON.stringify(patientId));

    function successCallBack(res) {
        kony.print("objWounds_cntrl_offline.getAllWoundsForPatientId success callback--------->");
        kony.print("objWounds_cntrl_offline.getAllWoundsForPatientId success callback response--------->" + JSON.stringify(res));
        for (var i = 0; i < res.length; i++) {
            var temp = {};
            var tempWoundAttribute = JSON.parse(res[i]._woundAttributes);
            kony.print("after parsing woundAttribute" + JSON.stringify(tempWoundAttribute));
            temp.abi = tempWoundAttribute.abi;
            temp.area = tempWoundAttribute.area;
            temp.areaChange = tempWoundAttribute.areaChange;
            temp.class_value = tempWoundAttribute.classValue;
            temp.dateAcquired = tempWoundAttribute.dateAcquired;
            temp.diabetic = tempWoundAttribute.diabetic;
            temp.dressing = tempWoundAttribute.dressing;
            temp.encounterId = tempWoundAttribute.encounterId;
            temp.etiology = tempWoundAttribute.etiology;
            temp.lastUpdatedByUser = res[i]._lastUpdatedByUser;
            temp.lastUpdatedTime = res[i]._lastUpdatedTimestamp;
            temp.location = tempWoundAttribute.location;
            temp.name = tempWoundAttribute.name;
            temp.patient_uuid = res[i]._patientUuid;
            temp.photoText = tempWoundAttribute.photoText;
            temp.stepSummary = {};
            temp.vol = tempWoundAttribute.vol;
            temp.volChange = tempWoundAttribute.volChange;
            temp.weeksInTreatment = tempWoundAttribute.weeksInTreatment;
            temp.woundno = res[i]._woundNumber;
            temp.docentityId = res[i]._docEntityId;
            temp.clinicianReviewFlag = tempWoundAttribute.clinicianReviewFlag;
            temp.physicianReviewFlag = tempWoundAttribute.physicianReviewFlag;
            temp.wound_review_flag = tempWoundAttribute.woundReviewFlag;
            temp.woundid = res[i]._woundId;
            temp.userPatientRole = userInfo.userPatientRole;
            patientSummary_offline_response.woundList.push(temp);
        }
        kony.print("after adding woundList without stepSummary, patientSummary_offline_response----->" + JSON.stringify(patientSummary_offline_response));
        kony.print("starting step summary for loop with woundlist length----->" + patientSummary_offline_response.woundList.length);
        for (var j = 0; j < patientSummary_offline_response.woundList.length; j++) {
            kony.print("inside woundlist for loop with wound value " + (j));
            for (var k = 1; k <= 9; k++) {
                var step = "Step" + JSON.stringify(k);
                kony.print("step number" + step);
                kony.print("inside step forloop with woundvalue and step value " + (j) + "," + k);
                kony.print("patientSummary_offline_response.woundList[" + j + "]>>>>>>" + JSON.stringify(patientSummary_offline_response.woundList[j]));
                //changed according to the new table healingSubSteps
                healingSubSteps_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo(patientSummary_offline_response.woundList[j].patient_uuid, patientSummary_offline_response.woundList[j].woundno, step);
            }
            //this function is used to retrieve the cpg links and step title from the objwounds table in DB
            objWounds_cntrl_offline.getCPGLinksAndTitle(patientSummary_offline_response.woundList[j].patient_uuid, patientSummary_offline_response.woundList[j].woundno);
        }
        kony.print("patientSummary_offline_response after forming complete response----------->" + JSON.stringify(patientSummary_offline_response));
        try {
            kony.print("before calling successcallback");
            com.healogics.patientSummary.patientSummarySuccessCallback(patientSummary_offline_response);
        } catch (e) {
            kony.print(e.message);
        }
        com.healogics.utility.dismissLoading();
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("getAllWoundsForPatientId error callback");
        kony.print("getAllWoundsForPatientId error callback response--------->" + JSON.stringify(res));
    }
    var wcs = "where patientUuid = " + JSON.stringify(patientId) + " and facilityId = " + JSON.stringify(userInfo.selectedFacilityId) + " order by CAST(woundNumber as INTEGER) asc";
    kony.print("objWounds_cntrl_offline.getAllWoundsForPatientId where clause:--->" + wcs);
    objWounds.find(wcs, successCallBack, errorCallBack);
};
//To get the CPGlinks and title for each step for a patient from DB(objWounds table) 
//and add it to patient summary response
objWounds_cntrl_offline.getCPGLinksAndTitle = function(patientId, woundNo) {
    kony.print("inside objWounds_cntrl_offline.getCPGLinksAndTitle with patient Id, woundNo--------------->" + JSON.stringify(patientId) + "," + JSON.stringify(woundNo));

    function successCallBack(res) {
        kony.print("getCPGLinksAndTitle success callback--------->");
        kony.print("getCPGLinksAndTitle success callback response--------->" + JSON.stringify(res));
        var stepDetailJSON = JSON.parse(res[0]._stepDetailJSON);
        for (var i = 0, length = stepDetailJSON.length; i < length; i++) {
            kony.print("entered getCPGLinksAndTitle for loop with i, length--->" + i + " " + length);
            var stepNo = stepDetailJSON[i].stepNumber;
            for (var m = 0; m < patientSummary_offline_response.woundList.length; m++) {
                if (patientSummary_offline_response.woundList[m].woundno == woundNo) {
                    patientSummary_offline_response.woundList[m].stepSummary[stepNo].stepInfo.title = stepDetailJSON[i].stepTitle;
                    patientSummary_offline_response.woundList[m].stepSummary[stepNo].stepInfo.cpgLinks = stepDetailJSON[i].cpgLinks;
                    break;
                }
            }
        }
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("getCPGLinksAndTitle error callback");
        kony.print("getCPGLinksAndTitle error callback response--------->" + JSON.stringify(res));
    }
    var wcs = "where patientUuid = " + JSON.stringify(patientId) + " and woundNumber = " + JSON.stringify(woundNo) + " and facilityId = " + JSON.stringify(userInfo.selectedFacilityId) + " order by CAST(woundNumber as INTEGER) asc";
    kony.print("objWounds_cntrl_offline.getCPGLinksAndTitle where clause:--->" + wcs);
    objWounds.find(wcs, successCallBack, errorCallBack);
};