/*
 *Name: modNotes.js
 *Purpose: For User Notes related functionalities
 *Change Log:
 *---------------------------------------------------------------------------
 * Date              Developer            Comments
 *---------------------------------------------------------------------------
 * 01/19/2017        Mona                 Integration and Validations Logic
 *
 *
 */
var notesModule = {};
//Method for Service call of create notes
notesModule.createNotes = function() {
    kony.print("<---notes info---->" + JSON.stringify(notes_info));
    var inputData = {
        "userIdValue": userInfo.userName,
        "patientUuid": notes_info.patientId,
        "woundNo": notes_info.woundId,
        "taskDesc": encodeURIComponent(notes_info.notes),
        "patientName": notes_info.patientname,
        "medicalRecordNo": notes_info.medicalRecordNo,
        "accessToken": userInfo.accessToken,
        "dueDate": notes_info.dueDate,
        "followStepDesc": notes_info.followup,
        "facilityId": userInfo.presentFacilityId
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_CREATETASK, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "patientId": notes_info.patientId,
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, notesModule.createNotesSuccessCallback, notesModule.NotesModuleFailureCallback);
    healing9StepDataModule.registerForIdleTimeOut();
};
//Success callback for create notes
notesModule.createNotesSuccessCallback = function(response) {
    kony.print("notesModule.createNotesSuccessCallback start::" + JSON.stringify(response));
    if (response !== null && response.opstatus === 0 && response.statuscode == "200") {
        frmPatientSummary.textareanotes.text = "";
        notesModule.setNotesDefaultMaximumCharactersLimit();
        ///Sandeep offline changes
        notesModule.getNotes();
    } else if (response.errmsg !== null || isNetworkAvailable()) {
        com.healogics.utility.showErrorAlert(response.errmsg);
        var error_label = ERROR_CONSTANTS.GENERAL_NO_NETWORK_CONNECTION;
        // ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        if (response !== null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)) {
            error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
            loginModule.showLoginScreen(error_label);
        } else {
            com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        }
    }
};
//Failure callback for notes module
notesModule.NotesModuleFailureCallback = function(response) {
    kony.print("notesModule.NotesModuleFailureCallback  start::" + JSON.stringify(response));
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if (response !== null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)) {
        error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
        loginModule.showLoginScreen(error_label);
    } else {
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
};
//Validation for popupNotes
var validate_Notes = function() {
    if (isIpad && !isNetworkAvailable()) {
        var error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    } else {
        var notes_desc = frmPatientSummary.textareanotes.text.trim();
        if (com.healogics.utility.isEmpty(notes_desc)) {
            frmPatientSummary.lblerror.setVisibility(true);
            frmPatientSummary.lblerror.text = ERROR_CONSTANTS.NOTES_ERROR_MESSAGE;
        } else {
            notesModule.popupnotes_onclickSave();
        }
    }
};
//Method to call createNotes service
notesModule.popupnotes_onclickSave = function() {
    frmPatientSummary_setDataFotNotesInfo();
    ///Sandeep offline changes
    notesModule.createNotes();
};
//Method for service call of getNotesList
notesModule.getNotes = function() {
    kony.print("<---notes info---->" + JSON.stringify(notes_info));
    var inputData = {
        "patientName": "",
        "woundNo": notes_info.woundId,
        "patientUuid": notes_info.patientId,
        "medicalRecordNo": notes_info.medicalRecordNo,
        "accessToken": userInfo.accessToken,
        "facilityId": userInfo.presentFacilityId
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_GETNOTELIST, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "patientId": notes_info.patientId,
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, notesModule.getNotesSuccessCallback, notesModule.getNotesModuleFailureCallback);
};
//Success callback for getNotes
notesModule.getNotesSuccessCallback = function(response) {
    notes_info.notesList = [];
    kony.print("notesModule.getNotesSuccessCallbackk start noteslist::" + response);
    kony.print("---noteslist--->" + JSON.stringify(response.noteslist));
    if (response !== null && response.opstatus === 0 && response.statuscode == "200") {
        kony.print("in stsuscode 200");
        kony.print("noteslist---->" + JSON.stringify(response.noteslist));
        if (response.noteslist !== null) { //&& response.noteslist.length > 0){
            kony.print("----in response.noteslist length >0-------");
            notes_info.notesList = response.noteslist;
            kony.print("----notes_info.notesList-------" + notes_info.notesList);
            notesModule.frmPatientSummarySetNotes(notes_info.notesList);
        }
    } else if (response.statuscode == "401") {
        if (response.noteslist !== null) {
            kony.print("----in response.noteslist length  == 0-------");
            notes_info.notesList = response.noteslist;
            notesModule.frmPatientSummarySetNotes(notes_info.notesList, response.errordesc);
        } else {
            com.healogics.utility.showErrorAlert(response.errordesc);
        }
    } else if (response.errmsg !== null) {
        ///Sandeep offline changes
        var error_label;
        com.healogics.utility.showErrorAlert(response.errmsg);
        if (isIpad && !isNetworkAvailable()) {
            error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
        } else {
            error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        }
        if (response !== null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)) {
            error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
            loginModule.showLoginScreen(error_label);
        } else {
            com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        }
    }
};
//Sandeep offline changes
notesModule.getNotesModuleFailureCallback = function(res) {
    kony.print("<<Error>>>" + JSON.stringify(res));
    if (isIpad && !isNetworkAvailable()) {
        var error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
    } else {
        var error_label = res.errmsg;
    }
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    kony.print("notesModule.NotesModuleFailureCallback  start::" + JSON.stringify(res));
    // com.healogics.utility.showErrorAlert(res.errmsg);
}
notesModule.frmPatientSummarySetNotes = function(notes_data, message) {
    kony.print("---in frmPatientSummarySetNotes---");
    var timeZone = userInfo.timezone;
    var d = new Date();
    d = d.toString().match(/\(([A-Za-z\s].*)\)/)[1];
    if (d == "EST" || d == "Eastern Standard Time") {
        timeZone = "EST";
    } else if (d == "EDT" || d == "Eastern Daylight Time") {
        timeZone = "EDT";
    } else if (d == "CST" || d == "Central Standard Time") {
        timeZone = "CST";
    } else if (d == "CDT" || d == "Central Daylight Time") {
        timeZone = "CDT";
    } else if (d == "MST" || d == "Mountain Standard Time") {
        timeZone = "MST";
    } else if (d == "MDT" || d == "Mountain Daylight Time") {
        timeZone = "MDT";
    } else if (d == "PST" || d == "Pacific Standard Time") {
        timeZone = "PST";
    } else if (d == "PDT" || d == "Pacific Daylight Time") {
        timeZone = "PDT";
    }
    var notes_array = [];
    for (i = 0; i < notes_data.length; i++) {
        var tempRecord = notes_data[i];
        var inputDate = tempRecord.createDate.replace("T", " ");
        var convertedDate = com.healogics.utility.convertEST_To_PST_CST_TimeZone(inputDate, timeZone, DATE_FORMAT.NOTES_CREATE_DATE);
        kony.print("--- convertedDate--- " + convertedDate);
        if (!com.healogics.utility.isEmpty(convertedDate)) {
            var notes = {
                "lblindicator": "",
                "imgpoint": {
                    src: "timeline.png"
                },
                "lblnotestitle": tempRecord.createdBy + ",  " + convertedDate,
                "lblnotesdesc": decodeURIComponent(tempRecord.notesDesc),
                "lblFollowDesc": tempRecord.followStepDesc,
                "lbllineindicator": {}
            };
            notes_array.push(notes);
        }
    }
    if (notes_array.length === 0) {
        frmPatientSummary.lblNoNotes.setVisibility(true);
        frmPatientSummary.segmentnotes.removeAll();
        if (message !== null && message !== "") {
            frmPatientSummary.lblNoNotes.text = message;
            frmPatientSummary.lblIndicatorLine.setVisibility(false);
        } else {
            frmPatientSummary.lblNoNotes.text = "No notes available";
        }
    } else {
        frmPatientSummary.lblNoNotes.setVisibility(false);
        frmPatientSummary.segmentnotes.setData(notes_array);
        frmPatientSummary.lblIndicatorLine.setVisibility(true);
    }
    isNotesOpen = true;
    frmPatientSummary.fcpopupnotes.setVisibility(true);
    frmPatientSummary.fcpatientsummaryheaderhover.setVisibility(true);
    frmPatientSummary.fcpatientsummaryfooterhover.setVisibility(true);
    frmPatientSummary.fcwoundimages.setVisibility(false);
    notesModule.setNotesDefaultMaximumCharactersLimit();
    frmPatientSummary.forceLayout();
};
//Method to call getNotes service
notesModule.frmPatientSummaryAddNotes = function() {
    frmPatientSummary_setDataFotNotesInfo();
    ///Sandeep offline changes
    notesModule.getNotes();
};

function frmPatientSummary_notes_onKeyUp(eventobject) {
    var numberOfCharactersLeft = notes_info.notesMaximumCharacterCount - eventobject.text.length;
    if (numberOfCharactersLeft >= 0) {
        frmPatientSummary.lblMaxCharacter.text = "(Maximum characters " + notes_info.notesMaximumCharacterCount + ") You have " + numberOfCharactersLeft + " characters left.";
    }
}
notesModule.setNotesDefaultMaximumCharactersLimit = function() {
    frmPatientSummary.lblMaxCharacter.text = "(Maximum characters " + notes_info.notesMaximumCharacterCount + ") You have " + notes_info.notesMaximumCharacterCount + " characters left.";
};
var preventer = function(e) {
    e.preventDefault();
};

function disableCopyPasteOfNotes() {
    if (!isIpad) {
        var tNode = document.getElementById("frmPatientSummary_textareanotes");
        if (tNode) {
            tNode.addEventListener('paste', preventer, true);
            tNode.addEventListener('copy', preventer, true);
            tNode.addEventListener('cut', preventer, true);
        }
    }
}