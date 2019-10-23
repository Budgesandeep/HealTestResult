var patientList_cntrl_offline = {};
var weekSelected;
var weeks = [];
var isweek = false;
/************************************************************************************
 * Get All Patient List for facility ID
 *************************************************************************************/
patientList_cntrl_offline.getAllPatientListForFacilityID = function(facilityID, userID) {
    function successCallBack(res) {
        kony.print("getAllpatientListForOffline success callback--------->");
        kony.print("getAllpatientListForOffline success callback response--------->" + JSON.stringify(res));
        if (res === null || res.length === 0) {
            patientList_cntrl_offline.showNoRecordsAvailableMessage();
            return;
        }
        var response = {};
        response.patientslist = [];
        for (i = 0; i < res.length; i++) {
            var temp = {};
            temp.patientId = res[i]._patientId;
            temp.name = res[i]._name;
            temp.caseManager = res[i]._caseManager;
            temp.physician = res[i]._physician;
            if (moment(res[i]._nextAppointment).format("MM/DD/YYYY") < moment(new Date()).format("MM/DD/YYYY")) {
                temp.nextAppointment = "";
            } else {
                temp.nextAppointment = res[i]._nextAppointment;
            }
            temp.appointmentType = res[i]._appointmentType;
            temp.wounds = res[i]._wounds;
            temp.weeks = res[i]._weeks;
            temp.advanceProcedures = res[i]._advanceProcedures;
            temp.transferStatus = res[i]._transferStatus;
            temp.msrWeek = res[i]._msrWeek;
            temp.txBasedPrecaution = res[i]._txBasedPrecaution;
            temp.msrReviewFlag = res[i]._msrReviewFlag;
            temp.facilityId = res[i]._facilityId;
            temp.msrFlag = res[i]._msrFlag;
            response.patientslist.push(temp);
        }
        patientList_cntrl_offline.patientListSuccessCallback(response, facilityID);
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("getAllpatientListForOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        showError = true;
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
    com.healogics.utility.showLoading();
    var wcs = "";
    kony.print("userInfo--------" + JSON.stringify(userInfo));
    kony.print("userInfo.userId" + userInfo.userId);
    if (patientListConstants.myPatients == "Y") {
        wcs = "where physicianUserId = " + JSON.stringify(userID) + " or caseManagerUserId = " + JSON.stringify(userID) + " and facilityId = " + JSON.stringify(facilityID) + " ORDER BY name";
    } else {
        wcs = "where facilityId = " + JSON.stringify(facilityID) + " ORDER BY name";
    }
    kony.print("wcs-------------" + wcs + " patientListConstants.myPatients" + patientListConstants.myPatients);
    com.healogic.offline.patientList.find(wcs, successCallBack, errorCallBack);
};
/************************************************************************************
 * Patient List Success Callback
 *************************************************************************************/
patientList_cntrl_offline.patientListSuccessCallback = function(response, facilityID) {
    msrList_cntrl_offline.getAllMsrListForFacilityID(facilityID, callBack);

    function callBack(msrList) {
        response.msrList = msrList;
        response.opstatus = 0;
        response.statuscode = "200";
        response.timestamp = "";
        patientListModule.patientListSuccessCallback(response);
        com.healogics.utility.dismissLoading();
    }
};
/************************************************************************************
 * Patient List For MSR Week
 *************************************************************************************/
patientList_cntrl_offline.getAllPatientListForMsrWeek = function(week) {
    weekSelected = week;

    function successCallBack(res) {
        kony.print("getAllpatientListForOffline success callback--------->");
        kony.print("getAllpatientListForOffline success callback response--------->" + JSON.stringify(res));
        if (isweek) res = getMsrList(res);
        if (res === null || res.length === 0) {
            patientList_cntrl_offline.showNoRecordsAvailableMessage();
            return;
        }
        kony.print("res for 14------" + JSON.stringify(res));
        var response = {};
        response.patientslist = [];
        for (i = 0; i < res.length; i++) {
            var temp = {};
            temp.patientId = res[i]._patientId;
            temp.name = res[i]._name;
            temp.caseManager = res[i]._caseManager;
            temp.physician = res[i]._physician;
            if (moment(res[i]._nextAppointment).format("MM/DD/YYYY") < moment(new Date()).format("MM/DD/YYYY")) {
                temp.nextAppointment = "";
            } else {
                temp.nextAppointment = res[i]._nextAppointment;
            }
            temp.appointmentType = res[i]._appointmentType;
            temp.wounds = res[i]._wounds;
            temp.weeks = res[i]._weeks;
            temp.advanceProcedures = res[i]._advanceProcedures;
            temp.transferStatus = res[i]._transferStatus;
            temp.msrWeek = res[i]._msrWeek;
            temp.txBasedPrecaution = res[i]._txBasedPrecaution;
            temp.msrReviewFlag = res[i]._msrReviewFlag;
            temp.facilityId = res[i]._facilityId;
            temp.msrFlag = res[i]._msrFlag;
            response.patientslist.push(temp);
        }
        patientList_cntrl_offline.patientListSuccessCallback(response, userInfo.selectedFacilityId);
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("getAllpatientListForOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        showError = true;
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
    com.healogics.utility.showLoading();
    kony.print("week in listtttt:::::" + week);
    var wcs = "";
    kony.print("patientListConstants.myPatients==Y" + patientListConstants.myPatients);
    kony.print("userInfo------" + JSON.stringify(userInfo))
    var querySubString = "";
    if (week === null || week === "" || week === undefined) {
        if (patientListConstants.myPatients == "Y") {
            wcs = "where (physicianUserId = " + JSON.stringify(userInfo.userId) + " or caseManagerUserId = " + JSON.stringify(userInfo.userId) + ") and facilityId = " + JSON.stringify(userInfo.selectedFacilityId) + " ORDER BY name";
        } else {
            wcs = "where  facilityId =" + JSON.stringify(userInfo.selectedFacilityId) + " ORDER BY name";
        }
    } else if (week.toLowerCase() == "all") {
        if (patientListConstants.myPatients == "Y") {
            wcs = "where (physicianUserId = " + JSON.stringify(userInfo.userId) + " or caseManagerUserId = " + JSON.stringify(userInfo.userId) + ") and facilityId = " + JSON.stringify(userInfo.selectedFacilityId) + " and msrFlag = 'true'" + " ORDER BY name";
        } else {
            wcs = "where msrFlag = 'true' and facilityId =" + JSON.stringify(userInfo.selectedFacilityId) + " ORDER BY name";
        }
    } else {
        isweek = true;
        if (patientListConstants.myPatients == "Y") {
            wcs = "where (physicianUserId = " + JSON.stringify(userInfo.userId) + " or caseManagerUserId = " + JSON.stringify(userInfo.userId) + ") and facilityId = " + JSON.stringify(userInfo.selectedFacilityId) + " and msrFlag = 'true'" + " ORDER BY name";
        } else {
            wcs = "where msrFlag = 'true' and facilityId =" + JSON.stringify(userInfo.selectedFacilityId) + " ORDER BY name";
        }
    }
    kony.print("WCS--------" + wcs);
    com.healogic.offline.patientList.find(wcs, successCallBack, errorCallBack);
};
/************************************************************************************
 * Patient List By search
 *************************************************************************************/
patientList_cntrl_offline.getAllPatientListBySearch = function(userName) {
    var facilityID = userInfo.selectedFacilityId;

    function successCallBack(res) {
        kony.print("getAllPatientListBySearch success callback--------->");
        kony.print("getAllPatientListBySearch success callback response--------->" + JSON.stringify(res));
        var response = {};
        response.patientslist = [];
        for (i = 0; i < res.length; i++) {
            var temp = {};
            temp.patientId = res[i]._patientId;
            temp.name = res[i]._name;
            temp.caseManager = res[i]._caseManager;
            temp.physician = res[i]._physician;
            if (moment(res[i]._nextAppointment).format("MM/DD/YYYY") < moment(new Date()).format("MM/DD/YYYY")) {
                temp.nextAppointment = "";
            } else {
                temp.nextAppointment = res[i]._nextAppointment;
            }
            temp.appointmentType = res[i]._appointmentType;
            temp.wounds = res[i]._wounds;
            temp.weeks = res[i]._weeks;
            temp.advanceProcedures = res[i]._advanceProcedures;
            temp.transferStatus = res[i]._transferStatus;
            temp.msrWeek = res[i]._msrWeek;
            temp.txBasedPrecaution = res[i]._txBasedPrecaution;
            temp.msrReviewFlag = res[i]._msrReviewFlag;
            temp.facilityId = res[i]._facilityId;
            temp.msrFlag = res[i]._msrFlag;
            response.patientslist.push(temp);
        }
        patientList_cntrl_offline.patientSearchSuccessCallback(response);
    }

    function errorCallBack(res) {
        kony.print("getAllpatientListForOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        showError = true;
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
    var wcs = "where name like " + "'%" + userName + "%' and facilityId = " + JSON.stringify(facilityID);
    com.healogic.offline.patientList.find(wcs, successCallBack, errorCallBack);
};
patientList_cntrl_offline.patientSearchSuccessCallback = function(response) {
    response.opstatus = 0;
    response.statuscode = "200";
    response.timestamp = "";
    patientListModule.patientSearchSuccessCallback(response);
};
/************************************************************************************
 * Patient List Count For Facility ID
 *************************************************************************************/
patientList_cntrl_offline.getPatientListCountForFacilityID = function(facilityID) {
    var response = {};

    function successCallBack(res) {
        kony.print("getPatientListCountForFacilityID success callback--------->");
        kony.print("getPatientListCountForFacilityID success callback response--------->" + JSON.stringify(res));
        response = res.count;
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("getPatientListCountForFacilityID failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        showError = true;
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
    var wcs = "where facilityId = " + JSON.stringify(facilityID);
    com.healogic.offline.patientList.getCount(wcs, successCallBack, errorCallBack);
    return response;
};

function getMsrList(res) {
    var flag = false;
    isweek = false;
    var msrResponse = [];
    kony.print("weekkkkkkk  " + weekSelected);
    if (!com.healogics.utility.isEmpty(res) && !com.healogics.utility.isEmpty(weekSelected)) {
        msrResponse = [];
        for (var i = 0; i < res.length; i++) {
            if (checkForValueInString(res[i]._msrWeek, weekSelected)) {
                msrResponse.push(res[i]);
            }
        }
        kony.print("msrResponse------" + JSON.stringify(msrResponse));
        return msrResponse;
    }
}

function checkForValueInString(strWeeks, weekNum) {
    kony.print("strWeeks------" + strWeeks + "  weekNum-------" + weekNum + "parseInt(weekNum)------" + parseInt(weekNum));
    var weeks = [];
    var weekRanges = [];
    var containsFlag = false;
    if (strWeeks.includes(",")) {
        weeks = strWeeks.split(",");
    } else {
        weeks.push(strWeeks);
    }
    if (weekNum.includes(",")) {
        weekRanges = weekNum.split(",");
    } else {
        weekRanges.push(weekNum);
    }
    kony.print("weeks------" + weeks);
    kony.print("weekRanges------" + weekRanges);
    if (weekRanges.length == 1) {
        for (var i = 0; i < weeks.length; i++) {
            //        kony.print("parseInt(weeks[i]---------"+parseInt(weeks[i])+"-----"+i);
            if (parseInt(weekRanges[0]) === 14) {
                if (parseInt(weeks[i]) >= parseInt(weekRanges[0])) {
                    containsFlag = true;
                    return containsFlag;
                } else {
                    containsFlag = false;
                }
            } else {
                if (parseInt(weeks[i]) === parseInt(weekNum)) {
                    containsFlag = true;
                    break;
                } else {
                    containsFlag = false;
                }
            }
        }
    } else {
        for (var k = 0; k < weekRanges.length; k++) {
            for (var i = 0; i < weeks.length; i++) {
                if (parseInt(weekRanges[k]) === 14) {
                    if (parseInt(weeks[i]) >= parseInt(weekRanges[k])) {
                        containsFlag = true;
                        return containsFlag;
                    } else {
                        containsFlag = false;
                    }
                } else {
                    if (parseInt(weeks[i]) === parseInt(weekRanges[k])) {
                        containsFlag = true;
                        return containsFlag;
                    } else {
                        containsFlag = false;
                    }
                }
            }
        }
    }
    return containsFlag;
}
patientList_cntrl_offline.showNoRecordsAvailableMessage = function() {
    com.healogics.utility.dismissLoading();
    com.healogics.utility.showErrorAlert("No Records Found");
    if (patientListConstants.weekRange == "") {
        patientListConstants.myPatients = "N";
        patientListConstants.weekRange = patientListConstants.selectedWeek;
    } else {
        patientListModule.showNoPatientsLabel();
    }
}