var objHealingSubStep_cntrl_offline = {};
objHealingSubStep_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo = function(patientId, woundNo, StepNo) {
    function successCallBack(res) {
        kony.print("mapSubStepDetailsByPatientIdAndWoundIdAndStepNo success callback--------->");
        kony.print("mapSubStepDetailsByPatientIdAndWoundIdAndStepNo success callback response--------->" + JSON.stringify(res));
        var subStepDetails = [];
        var x = {
            stepInfo: {
                subStepDetails: [],
                cpgLinks: [],
                title: "",
            }
        };
        for (i = 0; i < res.length; i++) {
            var temp = {};
            var subStepDesc = JSON.parse(res[i]._subStepDesc);
            kony.print("after parsing woundAttribute" + JSON.stringify(subStepDesc));
            temp.completeddate_data_avail_flag = subStepDesc.completeddateDataAvailFlag;
            temp.data_possible_value = subStepDesc.dataPossibleValue;
            temp.date_data_avail_flag = subStepDesc.dateDataAvailFlag;
            //temp.deleteFlag
            temp.lastUpdatedByUser = res[i]._subStepLastUpdatedByUser;
            temp.lastUpdatedTimestamp = res[i]._subStepLlastUpdatedTimestamp;
            temp.result_data_avail_flag = subStepDesc.resultDataAvailFlag;
            temp.wnd_sub_desc_id = res[i]._healingSubStepNumber;
            // Modified for Kony Conversion Issue.
            temp.result = res[i]._subStepResult;
            temp.description = res[i]._subStepDescription;
            temp.order_date = res[i]._subStepOrderDate;
            temp.completed_date = res[i]._subStepCompletedDate;
            subStepDetails.push(temp);
        }
        kony.print("subStepDetails------------>" + JSON.stringify(subStepDetails));
        kony.print("before for loop" + patientSummary_offline_response.woundList.length);
        for (i = 0; i < patientSummary_offline_response.woundList.length; i++) {
            if (patientSummary_offline_response.woundList[i].woundno == woundNo) {
                x.stepInfo.subStepDetails = subStepDetails;
                patientSummary_offline_response.woundList[i].stepSummary[StepNo] = x;
            }
        }
        kony.print("after for loop" + patientSummary_offline_response.woundList.length);
        kony.print("patientSummary_offline_response-------->" + JSON.stringify(patientSummary_offline_response));
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("mapSubStepDetailsByPatientIdAndWoundIdAndStepNo failure callback");
        kony.print("mapSubStepDetailsByPatientIdAndWoundIdAndStepNo failure callback response--------->" + JSON.stringify(res));
    }
    kony.print("------->inside objHealingSubStep_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo ");
    kony.print("patient Id, WoundNo, StepNo--------------->" + JSON.stringify(patientId) + " " + JSON.stringify(woundNo) + JSON.stringify(StepNo));
    var wcs = "where patientUuid = " + JSON.stringify(patientId) + " and " + "woundNumber = " + JSON.stringify(woundNo) + " and " + "healingStepNumber = " + JSON.stringify(StepNo) + " order by CAST(woundNumber as INTEGER) asc";
    kony.print("mapSubStepDetailsByPatientIdAndWoundNoAndStepNo - wcs --------------->" + JSON.stringify(wcs));
    objHealingSubStep.find(wcs, successCallBack, errorCallBack);
};
objHealingSubStep_cntrl_offline.updateSubStepDetails = function(patientId, WoundId, StepNo, SubStepNo, objModified) {
    kony.print("Inside objHealingSubStep_cntrl_offline.updateSubStepDetails with patientId, WoundId, StepNo, SubStepNo, objModified--->" + patientId + " " + WoundId + " " + StepNo + " " + SubStepNo + " " + JSON.stringify(objModified));

    function successCallBack(res) {
        kony.print("updateSubStepDetails success callback--------->");
        kony.print("updateSubStepDetails success callback response--------->" + JSON.stringify(res));
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("updateSubStepDetails failure callback");
        kony.print("updateSubStepDetails failure callback response--------->" + JSON.stringify(res));
    }
    var wcs = "where patientUuid = " + JSON.stringify(patientId) + " and woundNumber = " + JSON.stringify(WoundId) + " and healingStepNumber = " + JSON.stringify(StepNo) + " and healingSubStepNumber = " + JSON.stringify(SubStepNo);
    kony.print("where clause----->" + wcs);
    kony.print("objModified------>" + objModified);
    var stringvalue = JSON.stringify(objModified);
    kony.print("after JSON.stringify of objModified stringvalue------>" + stringvalue);
    // Modified for Kony Conversion Issue.
    var myObj = {
        subStepDesc: stringvalue,
        subStepResult: objModified.result,
        subStepDescription: objModified.description,
        subStepOrderDate: objModified.orderDate,
        subStepCompletedDate: objModified.completedDate
    };
    kony.print("myObj---->" + JSON.stringify(myObj));
    objHealingSubStep.update(wcs, myObj, successCallBack, errorCallBack, true);
};
objHealingSubStep_cntrl_offline.saveAllUpdated9StepData = function(temp) {
    kony.print("Inside objHealingSubStep_cntrl_offline.saveAllUpdated9StepData with temp--->" + JSON.stringify(temp));
    com.healogics.utility.showLoading();
    var tempObject = {
        result: "",
        dataPossibleValue: "",
        description: "",
        orderDate: "",
        completedDate: "",
        clear: function() {
            this.result = "";
            this.dataPossibleValue = "";
            this.description = "";
            this.orderDate = "";
            this.completedDate = "";
        }
    };
    var patientId = temp.patientId;
    var woundId = temp.woundNo;
    var stepId = temp.stepId;
    var subStepList = temp.subStepList;
    for (var x = 0; x < subStepList.length; x++) {
        tempObject.result = subStepList[x].result;
        tempObject.description = subStepList[x].description;
        tempObject.orderDate = subStepList[x].order_date;
        tempObject.completedDate = subStepList[x].completed_date;
        var flagDetails = objHealingSubStep_cntrl_offline.getAvailabilityFlags(woundId, stepId, subStepList[x].wnd_sub_desc_id);
        tempObject.dataPossibleValue = flagDetails.data_possible_value;
        tempObject.resultDataAvailFlag = flagDetails.result_data_avail_flag;
        tempObject.completeddateDataAvailFlag = flagDetails.completeddate_data_avail_flag;
        tempObject.dateDataAvailFlag = flagDetails.date_data_avail_flag;
        kony.print("Calling objHealingSubStep_cntrl_offline.updateSubStepDetails with patientId, woundId, stepId, subStepList[x].wnd_sub_desc_id, tempObject--->" + patientId + " " + woundId + " " + stepId + " " + subStepList[x].wnd_sub_desc_id + " " + JSON.stringify(tempObject));
        objHealingSubStep_cntrl_offline.updateSubStepDetails(patientId, woundId, stepId, subStepList[x].wnd_sub_desc_id, tempObject);
        tempObject.clear();
        com.healogics.utility.dismissLoading();
    }
};
objHealingSubStep_cntrl_offline.getAvailabilityFlags = function(woundId, stepId, subStepId) {
    kony.print("Inside objHealingSubStep_cntrl_offline.getAvailabilityFlags with woundId, stepId, subStepId--->" + woundId + " " + stepId + " " + subStepId);
    var temp = {};
    for (var m = 0; m < patientSummary_offline_response.woundList.length; m++) {
        if (patientSummary_offline_response.woundList[m].woundno == woundId) {
            var substepList = patientSummary_offline_response.woundList[m].stepSummary[stepId].stepInfo.subStepDetails;
            for (var n = 0; n < substepList.length; n++) {
                if (substepList[n].wnd_sub_desc_id == subStepId) {
                    temp.completeddate_data_avail_flag = substepList[n].completeddate_data_avail_flag;
                    temp.data_possible_value = substepList[n].data_possible_value;
                    temp.date_data_avail_flag = substepList[n].date_data_avail_flag;
                    temp.result_data_avail_flag = substepList[n].result_data_avail_flag;
                }
            }
        }
    }
    kony.print("objHealingSubStep_cntrl_offline.getAvailabilityFlags return statement---->" + JSON.stringify(temp));
    return temp;
};