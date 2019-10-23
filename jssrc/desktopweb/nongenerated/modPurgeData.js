var mod_purge_data = {};
/************************************************************************************
 * Get All Data of AppList
 *************************************************************************************/
mod_purge_data.purge30DaysOldDataEveryDay = function(patientList, objToDelete) {
    function successCallBack(res) {
        kony.print("purge30DaysOldDataEveryDay success callback--------->");
        kony.print("purge30DaysOldDataEveryDay success callback response--------->" + JSON.stringify(res));
        kony.print("purge30DaysOldDataEveryDay success For Patients and Sync Object--------->" + JSON.stringify(patientList) + objToDelete);
    }

    function errorCallBack(res) {
        kony.print("objToDelete" + " with Error Code:" + res.errorCode + ", error message:" + res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
    }
    var wcs = "";
    kony.print("objToDelete in Purge :-" + objToDelete);
    kony.print("PatientList :-" + JSON.stringify(patientList));
    if (objToDelete === com.healogic.offline.patientList || objToDelete === com.healogic.offline.patientInfo || objToDelete === com.healogics.offline.patientWounds2 || objToDelete === com.healogics.offline.getPatientRecords) {
        wcs = "where patientId in (" + patientList.join() + ")";
    } else {
        wcs = "where patientUuid in (" + patientList.join() + ")";
    }
    kony.print("where patientId in (:-" + JSON.stringify(wcs));
    objToDelete.removeDeviceInstance(wcs, successCallBack, errorCallBack);
};
/************************************************************************************
 * Get  30 Days prior Patient List from PatientList Table
 *************************************************************************************/
mod_purge_data.get30DaysPriorPatientList = function() {
    var response = {};

    function successCallBack(res) {
        kony.print("get30DaysPriorPatientList success callback--------->");
        kony.print("get30DaysPriorPatientList success callback response--------->" + JSON.stringify(res));
        if (res !== null) {
            response.patientList = [];
            for (i = 0; i < res.length; i++) {
                var temp = {};
                response.patientList.push(res[i]._patientId);
            }
        } else {
            var error_label = res.responsedesc;
            if (com.healogics.utility.isEmpty(error_label)) {
                error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
            }
            kony.print("inside get30DaysPriorPatientList else end::");
        }
    }

    function errorCallBack(res) {
        kony.print("get30DaysPriorPatientList Failed" + " with Error Code:" + res.errorCode + ", error message:" + res.errorMessage + ", error information:" + JSON.stringify(res.errorInfo));
    }
    //And not any future date appointment
    var numberOfDays = SYNC_CONSTANTS.purgeDataInDays;
    kony.print("numberOfDays for Purging -> " + numberOfDays);
    var prior30DaysDate = new Date(getDeviceCurrentTime() - numberOfDays * 24 * 60 * 60 * 1000);
    kony.print("Prior Date : - " + prior30DaysDate);
    var wcs = "where nextAppointment <" + JSON.stringify(prior30DaysDate);
    kony.print("Where Clause nextAppointment" + wcs);
    com.healogic.offline.patientList.find(wcs, successCallBack, errorCallBack, true);
    return response.patientList;
};
/************************************************************************************
 * Remove 30 Days prior Patient List 
 *************************************************************************************/
mod_purge_data.removeDeviceInstanceForPatientList = function() {
    if (isIpad) {
        var patientList = mod_purge_data.get30DaysPriorPatientList();
        kony.print("Total Patient List to purge" + JSON.stringify(patientList));
        if (patientList.length > 0) {
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, com.healogic.offline.patientList);
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, com.healogic.offline.patientInfo);
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, com.healogics.offline.notesList);
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, com.healogics.offline.tasksList);
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, com.healogics.offline.getPatientRecords);
            //       mod_purge_data.purge30DaysOldDataEveryDay(patientList,objHealingStep);
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, com.healogics.offline.healingSubSteps);
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, objWounds);
            mod_purge_data.purge30DaysOldDataEveryDay(patientList, com.healogics.offline.patientWounds2);
        }
    }
};
//kony.timer.schedule("purgeDataTimerId", mod_purge_data.removeDeviceInstanceForPatientList(), interval, repeat);