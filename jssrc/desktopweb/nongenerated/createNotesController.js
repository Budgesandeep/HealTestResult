/*
FileName            : createNotesController.js
 Description        :  This file handles all the create activities for the create
 						tasks and create notes functionalities in the offline module.

* Change Log:
*---------------------------------------------------------------------------
* Date              Developer          Comments
*---------------------------------------------------------------------------
* 2017/05/03        327069             Initial logic
  2017/05/05		325664				Added code for create notes
=============================================================================
*/
var createNotes_cntrl_offline = {};
/************************************************************************************
 * Create New Notes Offline
 *************************************************************************************/
createNotes_cntrl_offline.createNewNotesOffline = function(notes_info) {
    function successCallBack(res) {
        kony.print("createNewNotesOffline success callback--------->");
        kony.print("createNewNotesOffline inserted Successfully--------->" + JSON.stringify(res));
        frmPatientSummary.textareanotes.text = "";
        notes_info.notesList = res.noteslist;
        notes_cntrl_offline.showOfflineNotesList();
    }

    function errorCallBack(res) {
        kony.print("<<Error>>>" + JSON.stringify(res));
        kony.print("notesModule.NotesModuleFailureCallback  start::" + JSON.stringify(res));
        com.healogics.utility.showErrorAlert(res.errmsg);
    }
    kony.print("<---notes info---->" + JSON.stringify(notes_info));
    var getLatestCreateDate = convertCurrentToEDTTime(true);
    var systemDate = new Date();
    var myObj = {
        userIdValue: userInfo.userName,
        patientUuid: notes_info.patientId,
        woundNo: notes_info.woundId,
        taskDesc: encodeURIComponent(notes_info.notes),
        patientName: notes_info.patientname,
        medicalRecordNo: notes_info.medicalRecordNo,
        deleted: "false",
        dueDate: notes_info.duedate,
        followStepDesc: notes_info.followup,
        facilityId: userInfo.selectedFacilityId,
        lastUpdatedBy: userInfo.userName, ///Akshay Added
        createDate: com.healogics.utility.convertEST_To_PST_CST_TimeZone(systemDate, userInfo.timezone, DATE_FORMAT.TASK_CREATED_DATE)
    };
    kony.print("My Object Print--------->" + JSON.stringify(myObj));
    com.healogics.offline.notesList.create(myObj, successCallBack, errorCallBack, true);
};
/************************************************************************************
 * Get Created Notes Offline
 *************************************************************************************/
createNotes_cntrl_offline.getCreatedNotesList = function() {
    var response = {};

    function successCallBack(res) {
        // To perform any thing after getting the response
        kony.print("getCreatedNotesList success callback--------->");
        kony.print("getCreatedNotesList--------->" + JSON.stringify(res));
        if (res !== null) {
            response.createdNotesList = [];
            for (i = 0; i < res.length; i++) {
                var temp = {};
                temp.facilityId = res[i]._facilityId;
                temp.patientUuid = res[i]._patientUuid;
                temp.userId = res[i]._userIdValue;
                temp.notesId = res[i]._notesId;
                temp.createDate = res[i]._createDate;
                temp.deleted = res[i]._deleted;
                temp.dueDate = res[i]._dueDate;
                temp.followStepDesc = res[i]._followStepDesc;
                temp.lastUpdatedBy = res[i]._lastUpdatedBy;
                temp.notesDesc = res[i]._taskDesc;
                temp.patientName = res[i]._patientName;
                temp.createdBy = res[i]._lastUpdatedBy;
                temp.timestamp = res[i]._timestamp;
                temp.woundNo = res[i]._woundNo;
                response.createdNotesList.push(temp);
            }
        } else {
            var error_label = res.responsedesc;
            if (com.healogics.utility.isEmpty(error_label)) {
                error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
            }
            kony.print("inside getcreatedNotesList else end::");
        }
    }

    function errorCallBack(res) {
        kony.print("getcreatedNotesList failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var wcs = "where userIdValue =" + JSON.stringify(userInfo.userName) + " and facilityId =" + JSON.stringify(userInfo.selectedFacilityId);
    kony.print("Where Clause" + wcs);
    com.healogics.offline.craeateNotes.find(wcs, successCallBack, errorCallBack); //(wcs, successCallBack , errorCallBack, true);
    return response.createdNotesList;
};