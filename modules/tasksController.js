tasks_cntrl_offline = {};


/************************************************************************************
* Get TaskList
*************************************************************************************/
tasks_cntrl_offline.getTasksList = function(){  
  var response = {};
  function successCallBack(res){
    // To perform any thing after getting the response
    kony.print("getTasksList success callback--------->");
    kony.print("getTasksList--------->"+ JSON.stringify(res));

    if(res!==null){
      response.taskList = [];
      for (i = 0; i< res.length; i++){
        var temp = {};
        temp.facilityId = res[i]._facilityId;
        temp.patientUuid = res[i]._patientUuid;
        temp.taskUuid = res[i]._taskUuid;
        temp.completedDate = res[i]._completedDate;
        temp.createDate = res[i]._createDate.replace("T", " ").replace(SYNC_FACILITY_TIMESTAMP.EST, "");
        temp.deleted = res[i]._deleted;
        temp.dueDate = res[i]._dueDate;
        temp.followstepdesc = res[i]._followstepdesc;//_followstepdesc //_followStepDesc
        temp.lastUpdatedBy = res[i]._lastUpdatedBy;
        temp.lastUpdatedTimestamp = res[i]._lastUpdatedTimestamp;
        temp.patientName = res[i]._patientName;
        temp.createdBy = res[i]._createdBy;
        temp.taskDesc = res[i]._taskDesc;
        temp.taskStatus = res[i]._taskStatus;
        temp.timestamp = res[i]._timestamp;
        temp.woundNo = res[i]._woundNo;
        response.taskList.push(temp);
      }
      response.opstatus =0;
      response.statuscode = "200";
      response.timestamp ="";
      taskListModule.getTaskListSuccessCallback(response);
      com.healogics.utility.dismissLoading();
    }else{
      com.healogics.utility.dismissLoading();
      var error_label = res.responsedesc;
      if(com.healogics.utility.isEmpty(error_label)){
        error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      }
      kony.print("inside getTaskList else end::");  
    }
  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("getTaskList failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }
  com.healogics.utility.showLoading();
  var wcs = 
      "where userID =" + JSON.stringify(userInfo.userName) +///UserName is now UserId as per ERSS, Where clause modified 
      "and facilityId =" + JSON.stringify(userInfo.selectedFacilityId) +" order by createDate desc";
  kony.print("Where Clause getTasksList :" + wcs);
  com.healogics.offline.tasksList.find(wcs, successCallBack , errorCallBack, true);

  return response.taskList;
};


/************************************************************************************
* Create New Task Offline
*************************************************************************************/


tasks_cntrl_offline.createNewTaskOffline = function(task_info){ 

  function successCallBack(res){
    kony.print("createNewTaskOffline success callback--------->");
    kony.print("createNewTaskOffline inserted Successfully--------->"+ JSON.stringify(res));
    var response = {};
    response.opstatus =0;
    response.statuscode = "200";
    response.timestamp ="";
    taskListModule.createTaskSuccessCallback(response);
    com.healogics.utility.dismissLoading();
  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("createNewTaskOffline failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
    com.healogics.utility.showErrorAlert(JSON.stringify(res));

  }
  com.healogics.utility.showLoading();
  var getLatestCreateDate = convertCurrentToEDTTime(true, false);
  var systemDate = new Date();

  var randomUuid = generateUUID();
  kony.print("The random UUID is -> "+ randomUuid);

  var myObj = {
    userId:userInfo.userName,///AKSHAY - changed as per Jayasree/Ranjith for tasks
    patientUuid:task_info.patientId,
    encounterId:task_info.encounterId,
    woundNo:task_info.woundNo,
    taskDesc:encodeURIComponent(task_info.description),
    dueDate : moment(task_info.duedate + " 23:59:59").format("MM/DD/YYYY"),
    followstepdesc:task_info.followup,//task_info.followup
    patientName:task_info.patientname,
    medicalRecordNo:task_info.medicalRecordNo,
    taskStatus: task_info.STATUS_OPEN,
    deleted: false,
    lastUpdatedTimestamp: convertCurrentToEDTTime(true, false),
    taskUuid : randomUuid,
    facilityId : userInfo.selectedFacilityId,
    lastUpdatedBy:userInfo.userName,
    createDate:getLatestCreateDate,///Akshay - created date at the app side
    completedDate:""
  };

  kony.print("My Object Print createNewTaskOffline--------->"+ JSON.stringify(myObj));
  com.healogics.offline.tasksList.create(myObj, successCallBack, errorCallBack, true);
};


/************************************************************************************
* Update Task Offline
*************************************************************************************/
//flag to identify whether the form to be shown or the segment data to be refreshed 
//in frmViewTasks after marking a task as complete
tasks_cntrl_offline.updateTaskFlag = false;
tasks_cntrl_offline.updateTaskOffline = function(selectedTask){ 
  function successCallBack(res){
    kony.print("updateTaskOffline success callback--------->");
    kony.print("updateTaskOffline Successfully--------->"+ JSON.stringify(res));
    tasks_cntrl_offline.updateTaskFlag = true;
    tasks_cntrl_offline.getTasksList(); //This will handle the fetching ofupdated tasks from DB and populate them in the UI.
    tasks_cntrl_offline.updateTaskFlag = false;
    //for setting the count of open tasks in the Header  
    tasks_cntrl_offline.getOpenTaskLists();
    var valueToShow = parseInt(userInfo.taskCount);
    if(valueToShow === 0)
      frmViewTasksNew.fcmstheader.lbltaskcount.text = valueToShow;
    else
      frmViewTasksNew.fcmstheader.lbltaskcount.text=userInfo.taskCount;
    //for performing the sync after updation of DB   
    if(isIpad && !SYNC_CONSTANTS.isAppOffline){///Only in online mode.
      com.healogics.utility.showLoading("Updating Data!"); 
      modSyncScopes_offline_tasksAndNotes();
      syncInitialDownload(sync_notesSuccessCallback, sync_notesErrorCallBack);
    }
  }
  function errorCallBack(res){
    kony.print("updateTaskOffline failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
    com.healogics.utility.showErrorAlert(res.errmsg);
  }
  var getLatestCreateDate = convertCurrentToEDTTime(true, false);
  kony.print("getLatestCreateDate--------->"+ getLatestCreateDate);
  kony.print("selectedTask--------->"+ JSON.stringify(selectedTask));
  var systemDate = new Date();
  var taskCompleteDate = getCreateTaskDate();
  var myObj = {
    taskStatus : 'COMPLETE',
    completedDate : moment(taskCompleteDate).format("MM/DD/YYYY"),        
    lastUpdatedBy:userInfo.userName,///AKSHAY - changed as per Jayasree/Ranjith for tasks
    lastUpdatedTimestamp:com.healogics.utility.convertEST_To_PST_CST_TimeZone(systemDate,userInfo.timezone,DATE_FORMAT.TASK_CREATED_DATE)///Akshay - created date at the app side
  };
  var taskId = selectedTask[0].taskId;    
  kony.print("taskId--------->"+ taskId);
  kony.print("compPrimaryKey--------->"+ compPrimaryKey);
  var compPrimaryKey = {facilityId:userInfo.selectedFacilityId, taskUuid:selectedTask[0].taskId,userId:userInfo.userName, patientUuid:selectedTask[0].patientId};///Akshay - Fixed the error for completing of the data.
  kony.print("myObj updateTaskOffline--------->"+ JSON.stringify(myObj));
  com.healogics.offline.tasksList.updateByPK(compPrimaryKey, myObj, 
                                             successCallBack,errorCallBack, true);
};

tasks_cntrl_offline.getOpenTaskLists = function()
{
  //var response;
  function successCallBack(res){
    kony.print("createNewTaskOffline success callback--------->");
    kony.print("createNewTaskOffline inserted Successfully--------->"+ JSON.stringify(res));
    kony.print("Count of Values -> " + res.count);
    userInfo.taskCount = res.count;
  }

  function errorCallBack(){
    kony.print("getOpenTaskLists failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }

  var wcs = 
      "where userID =" + JSON.stringify(userInfo.userName) +///UserName is now UserId as per ERSS, Where clause modified 
      "and facilityId =" + JSON.stringify(userInfo.selectedFacilityId) +
      "and completedDate = ''";
  kony.print("Where Clause getOpenTaskLists :" + wcs);
  com.healogics.offline.tasksList.getCount(wcs, successCallBack, errorCallBack);
};

function generateUUID () {
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now(); //use high-precision timer if available
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
