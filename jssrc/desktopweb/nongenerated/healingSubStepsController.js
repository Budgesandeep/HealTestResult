//Module for mapping the StepSummary data of patient summary from DB to UI and saving data to DB after editing
//Editing is for 9 step healing data
var healingSubSteps_cntrl_offline = {};
//for geting the substep details from healingSubSteps table
healingSubSteps_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo = function(patientId, woundNo, StepNo) {
    kony.print("inside healingSubSteps_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo with patient Id, WoundNo, StepNo--------------->" + JSON.stringify(patientId) + "," + JSON.stringify(woundNo) + "," + JSON.stringify(StepNo));

    function successCallBack(res) {
        kony.print("healingSubSteps_cntrl_offline - mapSubStepDetailsByPatientIdAndWoundIdAndStepNo success callback--------->");
        kony.print("healingSubSteps_cntrl_offline - mapSubStepDetailsByPatientIdAndWoundIdAndStepNo success callback response--------->" + JSON.stringify(res));
        var subStepDetails = [];
        var x = {
            stepInfo: {
                subStepDetails: [],
                cpgLinks: [],
                title: "",
            }
        };
        patientSummary_offline_response.showSubStepConflictError = false;
        for (i = 0; i < res.length; i++) {
            var temp = {};
            temp.completeddate_data_avail_flag = res[i]._completeddateDataAvailFlag;
            temp.data_possible_value = res[i]._dataPossibleValue;
            temp.date_data_avail_flag = res[i]._dateDataAvailFlag;
            temp.lastUpdatedByUser = res[i]._lastUpdatedByUser;
            temp.lastUpdatedTimestamp = res[i]._lastUpdatedTimestamp;
            temp.result_data_avail_flag = res[i]._resultDataAvailFlag;
            temp.wnd_sub_desc_id = res[i]._wndSubDescId;
            // Modified for Kony Conversion Issue.
            temp.result = res[i]._subStepResult;
            temp.description = res[i]._subStepDescription;
            temp.order_date = res[i]._subStepOrderDate;
            temp.completed_date = res[i]._subStepCompletedDate;
            //co-5
            temp.record_level = res[i]._record_level;
            temp.conflictRaisedByUser = res[i]._conflictRaisedByUser != null ? res[i]._conflictRaisedByUser : "";
            temp.conflictRaisedByUser_Client = res[i]._conflictRaisedByUser_Client != null ? res[i]._conflictRaisedByUser_Client : "";
            // New custom conflict conditions logic starts 
            //CO-5
            temp.lastUpdatedTimestamp_Server = res[i].lastUpdatedTimestamp_Server;
            //CO-5 end
            temp.conflict_editable_flag = true;
            if (temp.conflictRaisedByUser != "null" && temp.conflictRaisedByUser != "NULL" && temp.conflictRaisedByUser != "" //){
                && temp.conflictRaisedByUser_Client != "NULL" && temp.conflictRaisedByUser_Client != "") {
                temp.conflict_editable_flag = false;
                /////AKSHAY - CHECK THIS LOGIC HERE....CHECKING with the USERNAME VALUE here.
                if (temp.conflictRaisedByUser == userInfo.fullName) {
                    var result = res[i]._subStepResult_Client;
                    temp.result = (result != null && result != "null" && result != "NULL") ? result : res[i]._subStepResult;
                    var orderDate = res[i]._subStepOrderDate;
                    temp.order_date = modifyDateWithouTime((orderDate != null && orderDate != "null" && orderDate != "NULL") ? orderDate : res[i]._subStepOrderDate);
                    var completedDate = res[i]._subStepCompletedDate;
                    temp.completed_date = modifyDateWithouTime((completedDate != null && completedDate != "null" && completedDate != "NULL") ? completedDate : res[i]._subStepCompletedDate);
                }
                patientSummary_offline_response.showSubStepConflictError = true;
                patientSummary_offline_response.subStepConflictErrorMsg = "There are unresolved conflicts. You will not be able to edit the conflicted data unless they are resolved by " + temp.conflictRaisedByUser;
            }
            // New custom conflict conditions logic ends
            subStepDetails.push(temp);
        }

        function modifyDateWithouTime(inputDate) {
            return (inputDate != null && inputDate != "") ? moment(inputDate + " 23:59:59").format("YYYY-MM-DD") : "";
        }
        kony.print("subStepDetails------------>" + JSON.stringify(subStepDetails));
        for (var i = 0; i < patientSummary_offline_response.woundList.length; i++) {
            if (patientSummary_offline_response.woundList[i].woundno == woundNo) {
                x.stepInfo.subStepDetails = subStepDetails;
                patientSummary_offline_response.woundList[i].stepSummary[StepNo] = x;
                break;
            }
        }
        kony.print("patientSummary_offline_response after adding substep details of patientId,woundno,stepno-------->" + JSON.stringify(patientId) + "," + JSON.stringify(woundNo) + "," + JSON.stringify(StepNo) + "->" + JSON.stringify(patientSummary_offline_response));
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("healingSubSteps_cntrl_offline - mapSubStepDetailsByPatientIdAndWoundIdAndStepNo error callback");
        kony.print("healingSubSteps_cntrl_offline - mapSubStepDetailsByPatientIdAndWoundIdAndStepNo error callback response--------->" + JSON.stringify(res));
    }
    var wcs = "where patientUuid = " + JSON.stringify(patientId) + " and woundNumber = " + JSON.stringify(woundNo) + " and stepNumber = " + JSON.stringify(StepNo) + " and facilityId = " + JSON.stringify(userInfo.selectedFacilityId) + " order by wndSubDescId asc";
    kony.print("healingSubSteps_cntrl_offline - mapSubStepDetailsByPatientIdAndWoundNoAndStepNo - wcs --------------->" + JSON.stringify(wcs));
    com.healogics.offline.healingSubSteps.find(wcs, successCallBack, errorCallBack);
};
//to loop through the whole edited rows and update one by one in the DB
healingSubSteps_cntrl_offline.saveAllUpdated9StepData = function(temp) {
    kony.print("Inside healingSubSteps_cntrl_offline.saveAllUpdated9StepData with temp--->" + JSON.stringify(temp));
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
        // changing the date format while updating the DB
        tempObject.orderDate = subStepList[x].order_date; //healing9StepDataModule.formOfflineDateFormat(subStepList[x].order_date);
        tempObject.completedDate = subStepList[x].completed_date; //healing9StepDataModule.formOfflineDateFormat(subStepList[x].completed_date);
        var flagDetails = healingSubSteps_cntrl_offline.getAvailabilityFlags(woundId, stepId, subStepList[x].wnd_sub_desc_id);
        tempObject.dataPossibleValue = flagDetails.data_possible_value;
        tempObject.resultDataAvailFlag = flagDetails.result_data_avail_flag;
        tempObject.completeddateDataAvailFlag = flagDetails.completeddate_data_avail_flag;
        tempObject.dateDataAvailFlag = flagDetails.date_data_avail_flag;
        //co-5
        tempObject.record_level = flagDetails.record_level;
        kony.print("Calling healingSubSteps_cntrl_offline.updateSubStepDetails with patientId, woundId, stepId, subStepList[x].wnd_sub_desc_id, tempObject--->" + patientId + " " + woundId + " " + stepId + " " + subStepList[x].wnd_sub_desc_id + " " + JSON.stringify(tempObject));
        healingSubSteps_cntrl_offline.updateSubStepDetails(patientId, woundId, stepId, subStepList[x].wnd_sub_desc_id, tempObject);
        tempObject.clear();
        //CO-5
        if (!SYNC_CONSTANTS.isAppOffline) {
            healing9StepDataModule_checkForSync(); //revet this after testing
        }
        for (var j = 0; j < patientSummary_offline_response.woundList.length; j++) {
            kony.print("inside woundlist for loop with wound value " + (j));
            for (var k = 1; k <= 9; k++) {
                var step = "Step" + JSON.stringify(k);
                healingSubSteps_cntrl_offline.mapSubStepDetailsByPatientIdAndWoundNoAndStepNo(patientSummary_offline_response.woundList[j].patient_uuid, patientSummary_offline_response.woundList[j].woundno, step);
            }
        }
        patientSummaryObjects.woundDescriptionDetails = patientSummary_offline_response.woundList;
        //CO-5 end
        com.healogics.utility.dismissLoading();
    }
};
//for updating the edited data of 9 step healing pertaining to a specific substep in DB
healingSubSteps_cntrl_offline.updateSubStepDetails = function(patientId, WoundId, StepNo, SubStepNo, objModified) {
    kony.print("Inside healingSubSteps_cntrl_offline.updateSubStepDetails with patientId, WoundId, StepNo, SubStepNo, objModified--->" + patientId + " " + WoundId + " " + StepNo + " " + SubStepNo + " " + JSON.stringify(objModified));

    function successCallBack(res) {
        kony.print("updateSubStepDetails success callback--------->");
        kony.print("updateSubStepDetails success callback response--------->" + JSON.stringify(res));
        //Update the WoundSummary object with saved details to persist data in 9 healing steps UI
        var subStepNumber;
        var x = patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]["stepSummary"][StepNo]["stepInfo"]["subStepDetails"];
        for (var i = 0; i < x.length; i++) {
            if (x[i].wnd_sub_desc_id == SubStepNo) {
                subStepNumber = i;
                break;
            }
        }
        patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]["stepSummary"][StepNo]["stepInfo"]["subStepDetails"][subStepNumber].result = objModified.result;
        patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]["stepSummary"][StepNo]["stepInfo"]["subStepDetails"][subStepNumber].order_date = objModified.orderDate;
        patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]["stepSummary"][StepNo]["stepInfo"]["subStepDetails"][subStepNumber].completed_date = objModified.completedDate;
        kony.print("after updating local patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex] response::" + JSON.stringify(patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex]));
        if (!SYNC_CONSTANTS.isAppOffline) {
            com.healogics.utility.showLoading("Updating Data!");
            SYNC_CONSTANTS.isSyncInProgress = true; ////Akshay - using the flag to stop Sync Now button press.
            modSyncScopes_offline_9StepsHealing();
            syncInitialDownload(sync_9HealingStepSuccessCallback, sync_9HealingStepErrorCallBack, false);
        }
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("updateSubStepDetails failure callback");
        kony.print("updateSubStepDetails failure callback response--------->" + JSON.stringify(res));
    }
    /* var wcs = "where patientUuid = " + JSON.stringify(patientId) + 
         " and woundNumber = " + JSON.stringify(WoundId) +
         " and stepNumber = " + JSON.stringify(StepNo) +
         " and facilityId = " + JSON.stringify(userInfo.selectedFacilityId) +      
         " and wndSubDescId = " + JSON.stringify(SubStepNo);*/
    //C0-5
    var query = "where patientUuid = " + JSON.stringify(patientId) + " and stepNumber = " + JSON.stringify(StepNo) + " and wndSubDescId = " + JSON.stringify(SubStepNo) + " and facilityId = " + JSON.stringify(userInfo.selectedFacilityId);
    var wcs = "";
    var recordLevel = !com.healogics.utility.isEmpty(objModified.record_level) ? objModified.record_level : "";
    if (recordLevel == "P" || recordLevel == "Patient") {
        wcs = query;
    } else if (recordLevel == "PO" && !com.healogics.utility.isEmpty(objModified.orderDate)) { //&& !isEmpty(objModified.wound_date_added)
        var date1 = new Date(objModified.wound_date_added);
        var date2 = new Date(objModified.orderDate); //new Date(objModified.physician_document_date); //it can be either order date or completed date
        //As per Praveen/s clarification, we need to check if particular wound_added_date is less than completed date user entered.
        //wcs = query + " and wound_date_added < " + JSON.stringify(objModified.physician_document_date);
        // for all wounds of the patient -- update step/substep data if wound is added before result completed date 
        wcs = query + " and wound_date_added<>'' and wound_date_added<>'null' and wound_date_added <= " + JSON.stringify(objModified.orderDate);
    } else if (recordLevel == "W") { //existing query
        wcs = query + " and woundNumber = " + JSON.stringify(WoundId);
    } else if (recordLevel == "LE" && !com.healogics.utility.isEmpty(objModified.wound_left_right)) { //ABI Index
        wcs = query + " and wound_left_right = " + JSON.stringify(objModified.wound_left_right);
    } else {
        wcs = query + " and woundNumber = " + JSON.stringify(WoundId);
    }
    //C0-5 end
    kony.print("where clause----->" + wcs);
    kony.print("objModified------>" + JSON.stringify(objModified));
    var stringvalue = JSON.stringify(objModified);
    kony.print("after JSON.stringify of objModified stringvalue------>" + stringvalue);
    // Modified for Kony Conversion Issue.
    var myObj = {
        //co-5
        // woundSubDescJSON: stringvalue,  ////changed
        subStepResult: objModified.result,
        subStepDescription: objModified.description,
        subStepOrderDate: objModified.orderDate,
        subStepCompletedDate: objModified.completedDate,
        conflictRaisedByUser_Client: userInfo.fullName, ////WTC-467 Issue for User Full name then userName value
        //woundSubDescJSON_Client: stringvalue,
        subStepResult_Client: objModified.result,
        subStepOrderDate_Client: objModified.orderDate,
        subStepCompletedDate_Client: objModified.completedDate,
        lastUpdatedByUser: userInfo.fullName, ////WTC-467 Issue for User Full name then userName value
        lastUpdatedByUser_Client: userInfo.fullName, ////WTC-467 Issue for User Full name then userName value
        lastUpdatedTimestamp_Client: convertCurrentToEDTTime(true, false),
    };
    kony.print("com.healogics.offline.healingSubSteps.update    -->  myObj---->" + JSON.stringify(myObj));
    com.healogics.offline.healingSubSteps.update(wcs, myObj, successCallBack, errorCallBack, true);
};
//to get the flag details as we need to form the whole object(woundSubDescJSON column in healingSubStep) while updating it in the DB 
healingSubSteps_cntrl_offline.getAvailabilityFlags = function(woundId, stepId, subStepId) {
    kony.print("Inside healingSubSteps_cntrl_offline.getAvailabilityFlags with woundId, stepId, subStepId--->" + woundId + " " + stepId + " " + subStepId);
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
                    //co-5
                    temp.record_level = substepList[n].record_level;
                }
            }
            break;
        }
    }
    kony.print("healingSubSteps_cntrl_offline.getAvailabilityFlags return statement---->" + JSON.stringify(temp));
    return temp;
};