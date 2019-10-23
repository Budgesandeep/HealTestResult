/*
FileName            : createTaskController.js
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
var createTask_cntrl_offline = {};
/************************************************************************************
 * Create New Task Offline
 *************************************************************************************/
createTask_cntrl_offline.createNewTaskOffline = function(task_info) {
    function successCallBack(res) {
        kony.print("createNewTaskOffline success callback--------->");
        kony.print("createNewTaskOffline inserted Successfully--------->" + JSON.stringify(res));
        popupcreatetask.dismiss();
        userInfo.taskCount = parseInt(parseInt(userInfo.taskCount) + 1);
        frmPatientSummary.fcmstheader.lbltaskcount.text = userInfo.taskCount;
        frmPatientSummary.forceLayout();
    }

    function errorCallBack(res) {
        kony.print("createNewTaskOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        com.healogics.utility.showErrorAlert(JSON.stringify(res));
    }
    var getLatestCreateDate = convertCurrentToEDTTime(true);
    var systemDate = new Date();
    var myObj = {
        userID: userInfo.userName,
        patientUuid: task_info.patientId,
        encounterId: task_info.encounterId,
        woundNo: task_info.woundId,
        taskDesc: encodeURIComponent(task_info.description),
        dueDate: task_info.duedate,
        followStepDesc: task_info.followup,
        patientName: task_info.patientname,
        medicalRecordNo: task_info.medicalRecordNo,
        taskStatus: task_info.STATUS_OPEN,
        deleted: false,
        lastUpdatedTimestamp: convertCurrentToEDTTime(true),
        facilityId: userInfo.selectedFacilityId,
        lastUpdatedBy: userInfo.userName, ///Akshay Added
        createDate: com.healogics.utility.convertEST_To_PST_CST_TimeZone(systemDate, userInfo.timezone, DATE_FORMAT.TASK_CREATED_DATE)
    };
    kony.print("My Object Print--------->" + JSON.stringify(myObj));
    com.healogics.offline.tasksList.create(myObj, successCallBack, errorCallBack, true);
};
/************************************************************************************
 * Update Task Offline
 *************************************************************************************/
createTask_cntrl_offline.updateTaskOffline = function(selectedTask) {
    function successCallBack(res) {
        kony.print("updateTaskOffline success callback--------->");
        kony.print("updateTaskOffline Successfully--------->" + JSON.stringify(res));
        tasks_cntrl_offline.getTasksList();
        kony.print("task_info.taskList" + JSON.stringify(task_info.taskList));
        //check which tab is selcted to refresh
        kony.print(" task_info.filterData" + JSON.stringify(task_info.filterData));
        userInfo.taskCount = parseInt(userInfo.taskCount) - 1;
        frmViewTasksNew.fcmstheader.lbltaskcount.text = userInfo.taskCount;
    }

    function errorCallBack(res) {
        kony.print("updateTaskOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        com.healogics.utility.showErrorAlert(res.errmsg);
    }
    var getLatestCreateDate = convertCurrentToEDTTime(true);
    kony.print("getLatestCreateDate--------->" + getLatestCreateDate);
    kony.print("selectedTask--------->" + JSON.stringify(selectedTask));
    var systemDate = new Date();
    var myObj = {
        taskStatus: 'COMPLETE',
        lastUpdatedBy: userInfo.userName, ///Akshay Added
        lastUpdatedTimestamp: com.healogics.utility.convertEST_To_PST_CST_TimeZone(systemDate, userInfo.timezone, DATE_FORMAT.TASK_CREATED_DATE) ///Akshay - created date at the app side
    };
    var taskId = selectedTask[0].taskId;
    kony.print("taskId--------->" + taskId);
    kony.print("compPrimaryKey--------->" + compPrimaryKey);
    var compPrimaryKey = {
        facilityId: userInfo.selectedFacilityId,
        taskUuid: selectedTask[0].taskId,
        userID: userInfo.userName
    };
    kony.print("myObj--------->" + myObj);
    com.healogics.offline.tasksList.updateByPK(compPrimaryKey, myObj, successCallBack, errorCallBack, true);
};
/************************************************************************************
 * Get Created Task Offline
 *************************************************************************************/
createTask_cntrl_offline.getCreatedTasksList = function() {
    var response = {};

    function successCallBack(res) {
        // To perform any thing after getting the response
        kony.print("getCreatedTasksList success callback--------->");
        kony.print("getCreatedTasksList--------->" + JSON.stringify(res));
        if (res !== null) {
            response.createdTaskList = [];
            for (i = 0; i < res.length; i++) {
                var temp = {};
                temp.facilityId = res[i]._facilityId;
                temp.patientUuid = res[i]._patientUuid;
                temp.taskUuid = res[i]._taskId;
                temp.completedDate = res[i]._completedDate;
                temp.createDate = res[i]._createDate;
                temp.deleted = res[i]._deleted;
                temp.dueDate = res[i]._dueDate;
                temp.followStepDesc = res[i]._followStepDesc;
                temp.lastUpdatedBy = res[i]._lastUpdatedBy;
                temp.patientName = res[i]._patientName;
                temp.createdBy = res[i]._createdBy;
                temp.taskDesc = res[i]._taskDesc;
                temp.taskStatus = res[i]._taskStatus;
                temp.timestamp = res[i]._timestamp;
                temp.woundNo = res[i]._woundNo;
                response.createdTaskList.push(temp);
            }
        } else {
            var error_label = res.responsedesc;
            if (com.healogics.utility.isEmpty(error_label)) {
                error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
            }
            kony.print("inside getCreatedTasksList else end::");
        }
    }

    function errorCallBack(res) {
        kony.print("getCreatedTasksList failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var wcs = "where userIdValue =" + JSON.stringify(userInfo.userName) + " and facilityId =" + JSON.stringify(userInfo.selectedFacilityId);
    kony.print("Where Clause" + wcs);
    com.healogics.offline.createTask.find(wcs, successCallBack, errorCallBack, true);
    return response.createdTaskList;
};