/*
*Name: modViewTasks.js
*Purpose: For Task related functionalities
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 01/19/2017        Mona                 Integration and Validations Logic
*
*
*/
var taskListModule={};
var view_task_servicedata=[];
var  taskListArr = [];

//Method called on PostShow event of frmViewTasks
var frmViewTasks_postShow=function(){
  hideFormMenu();
  load_headerdata();
  registerTimeout(); 
  frmViewTasks.btnall.skin="sknbtnwhitebgblack85";
  frmViewTasks.btnopentask.skin="sknbtntransbgwhite85";
  frmViewTasks.btnCompleted.skin="sknbtntransbgwhite85";
  frmViewTasks.lblpatientname.text=userInfo.userName;
};

var frmViewTasks_onTouchEnd=function(){
  hide_fctopmenu();
  hideFormMenu();
};

//Method called on onTouchEnd event of frmViewTasks
var frmViewTasksNew_onTouchEnd_call = function(){
  hide_fctopmenu();
  hideFormMenu();
};


var clear_taskList=function(){
  frmViewTasksNew.fcsearchdropdown.setVisibility(false);
  frmViewTasksNew.tbpatientsearch.text="";
  frmViewTasksNew.imgSearchIcon.src="search.png";
};

//Method called on PostShow event of frmViewTasksNew
var frmViewTasksNew_postShow=function(){
  registerTimeout();
  hideFormMenu();
  load_headerdata();
  frmViewTasksNew_Clear_All_filter();
  clear_taskList();
  changeConnectionStatus(isNetworkAvailable());
  if(isIpad && !SYNC_CONSTANTS.isAppOffline){
    resolveConflict_cntrl_offline.setBadgeValueForUI();
  }
};

var stopTimer=function(){
  try{
    kony.timer.cancel("taskListTimer");
  }catch(e){
    kony.print("error"+e);
  }
};


//Method for service call of create task
taskListModule.createTask = function(){
  kony.print("taskListModule.createTask start::"+JSON.stringify(task_info));
  var inputData = {
    "userIdValue" : userInfo.userName,
    "patientUuid" : task_info.patientId,
    "encounterId" : task_info.encounterId,
    "woundId" : task_info.woundId,
    "woundNo" : task_info.woundNo,
    "docentityId" : task_info.docentityId,
    "taskDesc" : encodeURIComponent(task_info.description),
    "dueDate" : task_info.duedate,
    "followStepDesc" : task_info.followup,
    "patientName" : task_info.patientname,
    "medicalRecordNo" : task_info.medicalRecordNo,     
    "accessToken" : userInfo.accessToken,
    "facilityId" : userInfo.presentFacilityId,
    
    "lastUpdatedBy" : userInfo.userName,
    "createDate" : getCreateTaskDate(),
    "deleted" : "false"
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_CREATETASK,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "patientId" : task_info.patientId,
      "facilityId" : userInfo.presentFacilityId,
      "userId" : userInfo.userId,
      "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    taskListModule.createTaskSuccessCallback,
    taskListModule.TaskListModuleFailureCallback
  );
};

//Success callback for service call of create task
taskListModule.createTaskSuccessCallback = function(response){

  kony.print("taskListModule.createTaskSuccessCallback start::"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
    popupcreatetask.dismiss(); 
    //if(isIpad){
    //  tasks_cntrl_offline.getOpenTaskLists();
    //}else{
      userInfo.taskCount= parseInt(parseInt(userInfo.taskCount)+1);
    //}
    kony.print(" userInfo.taskCount after creation--->"+ userInfo.taskCount);
    frmPatientSummary.fcmstheader.lbltaskcount.text= userInfo.taskCount;
    frmPatientSummary.forceLayout();

    /*if(isIpad && !SYNC_CONSTANTS.isAppOffline){///Only in online mode.
      com.healogics.utility.showLoading("Updating Data!"); 
      modSyncScopes_offline_tasksAndNotes();
      syncInitialDownload(sync_notesSuccessCallback, sync_notesErrorCallBack);
    }*/	
  }
  else if(response.errmsg!==null){
    com.healogics.utility.showErrorAlert(response.errmsg);
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Failure callback fro taskmodule
taskListModule.TaskListModuleFailureCallback = function(response){
  kony.print("taskListModule.createTaskFailureCallback start::"+JSON.stringify(response));
  ///Sandeep offline changes
if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION
  }else{
    var error_label= ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  }
   
  
  //var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

//Method for service call of getTaskList
taskListModule.getTaskList = function(){
  if(deepLinkInfo.isFromEpic == true) {
   	frmViewTasksNew.fchamburgermenu.setVisibility(false);
 	frmViewTasksNew.btnhome.setVisibility(false);
	frmViewTasksNew.lbltitlesep1.setVisibility(false);
    frmViewTasksNew.lblSearch.setVisibility(false);
    frmViewTasksNew.tbpatientsearch.setVisibility(false);
    frmViewTasksNew.imgSearchIcon.setVisibility(false);
	frmViewTasksNew.fcmstheader.fcsubmenu.setVisibility(false);
  } 
  kony.print("taskListModule.createTask start::"+JSON.stringify(task_info));

  var inputData = {
    "userIdValue" : userInfo.userName,        
    "accessToken" : userInfo.accessToken,
    "facilityId" : userInfo.presentFacilityId
  };
  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_GETTASKLIST,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "userId" : userInfo.userId,
      "facilityId" : userInfo.presentFacilityId,
      "userName" : userInfo.userName,
      "deviceType" : userInfo.deviceType,
      "deviceId" : userInfo.sessionId
    },
    inputData,
    taskListModule.getTaskListSuccessCallback,
    taskListModule.TaskListModuleFailureCallback
  );

  // Method for using dummy data
  //  taskListModule.getTaskListSuccessCallback(TaskListData());
};

//Success callback for getTaskList service call
taskListModule.getTaskListSuccessCallback = function(response){
  kony.print("taskListModule.getTaskListSuccessCallback start::"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
    if(response.taskList!==null && response.taskList.length > 0){
      task_info.taskList = response.taskList;
      kony.print("task response"+JSON.stringify(response.taskList));
      taskListModule.processTaskList(task_info.STATUS_ALL); 
      frmViewTasksNew.segviewtasks.setVisibility(true);
      frmViewTasksNew.lblEmptyList.setVisibility(false);
      frmViewTasksNew.fctaskbody.skin="sknfcwhitebgshadow";
    }else{
      kony.print("---- No Records found ----");
      taskListModule.showNoTaskListLabel();
    }
    frmViewTasksNew.lblname.text=userInfo.fullName;
  
    frmViewTasksNew_settingFooter();

    //Form not be displayed in Ipad when Mark as complete is clicked for a Task in frmViewTasks
    //Just the Segment data to be refreshed
    //if(!isIpad || tasks_cntrl_offline.updateTaskFlag == false){
      frmViewTasksNew.show();
    //}    
  }else if(response.statuscode=="401" && response.responsedesc=="No Records found"){
    kony.print("---- No Records found ----+401---");
    frmViewTasksNew.lblname.text=userInfo.fullName;	
    frmViewTasksNew_settingFooter();
    taskListModule.showNoTaskListLabel();
    frmViewTasksNew.show();
  }
  else if(response.statuscode=="401"){
    com.healogics.utility.showErrorAlert(response.responsedesc);
  }
  else if(response.errmsg!==null){
    com.healogics.utility.showErrorAlert(response.errmsg);
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method to set the height of the lines for frmViewTasksNew segment
taskListModule.showNoTaskListLabel = function(){
  frmViewTasksNew.segviewtasks.setVisibility(false);
  frmViewTasksNew.lblEmptyList.setVisibility(true);
  frmViewTasksNew.lblEmptyList.text="No Active Tasks";
  frmViewTasksNew.fcpaginatebuttons.setVisibility(false);
  frmViewTasksNew.fctaskbody.skin="slFbox";
  frmViewTasksNew.lblseparator1.height="50dp";
  frmViewTasksNew.lblseparator2.height="50dp";
  frmViewTasksNew.lblseparator3.height="50dp";
  frmViewTasksNew.lblseparator4.height="50dp";
  frmViewTasksNew.lblseparator5.height="50dp"; 
  frmViewTasksNew.lblseparator6.height="50dp";
  frmViewTasksNew.lblseparator7.height="50dp";
};

//Method to set the footer for frmViewTasksNew
function frmViewTasksNew_settingFooter(){
   var data=frmViewTasksNew.segviewtasks.data;
    if(data!=null && data.length<=7){
      frmViewTasksNew.fcfooter.top="300dp";
    }else{
       frmViewTasksNew.fcfooter.top="0dp";
    }
}

//Method to display lines in frmViewTasksNew segment
var frmViewTasksNew_segdivider=function(){
  try{
  var segHeight=frmViewTasksNew.segviewtasks.frame.height;
  var flxHeight=frmViewTasksNew.fcviewtaskhdr.frame.height;
  var finalHeight=segHeight+flxHeight;
  kony.print("segHeight "+segHeight+" "+"flxHeight "+flxHeight+" "+"plus "+flxHeight+segHeight);
  frmViewTasksNew.lblseparator1.height=finalHeight;
  frmViewTasksNew.lblseparator2.height=finalHeight;
  frmViewTasksNew.lblseparator3.height=finalHeight;
  frmViewTasksNew.lblseparator4.height=finalHeight;
  frmViewTasksNew.lblseparator5.height=finalHeight; 
  frmViewTasksNew.lblseparator6.height=finalHeight;
  frmViewTasksNew.lblseparator7.height=finalHeight;
  frmViewTasksNew.forceLayout();
  stopTimer();
  }catch(e){
    kony.print("error---"+e);
  }
  com.healogics.utility.dismissLoading();
};

//Method to set tasklist data in frmViewTasks
taskListModule.processTaskList = function(lTaskStatus){
  taskListArr = [];
  kony.print("-----task_info.taskList--->"+JSON.stringify(task_info.taskList));
  for(var i in task_info.taskList){
    var taskRecord = task_info.taskList[i];
    var tempRecord = {};
    var updatedCreatedDate = com.healogics.utility.convertEST_To_PST_CST_TimeZone(taskRecord.createDate,userInfo.timezone,DATE_FORMAT.TASK_CREATED_DATE);
    kony.print("-----taskRecord.dueDate--->"+ taskRecord.dueDate );
    //var lTaskDesc = decodeURIComponent(taskRecord.taskDesc);
    task_info.taskList[i].taskDesc = taskRecord.taskDesc; 
    task_info.taskList[i].createDate = updatedCreatedDate;
    //task_info.taskList[i].completedDate = (taskRecord.completedDate !="null")? taskRecord.completedDate : ""; //dont need this because Change made in Java end. 
    tempRecord = {
      "lblpatientname":taskRecord.patientName,
      "lbldatecreated":updatedCreatedDate,
      "lblduedate":moment(taskRecord.dueDate +" 23:59:59").format("MM/DD/YYYY"),    //com.healogics.utility.getDateDescription(taskRecord.dueDate), 			//need format change
      "lblwoundnumber":taskRecord.woundNo,
      "lbltasks":taskRecord.followstepdesc,
      "lblnotes":decodeURIComponent(taskRecord.taskDesc),
      "patientId":taskRecord.patientUuid,
      "taskId":taskRecord.taskUuid,
      "medicalRecordNo":taskRecord.medicalRecordNo,
      "btnmarkcomplete":taskRecord.taskStatus=="OPEN"?{isVisible:true,text:"Mark as Complete"}:{isVisible:false,text:"Mark as Complete"},
      "lbldatecompleted":taskRecord.taskStatus=="COMPLETE"?{isVisible:true,text:taskRecord.completedDate}:{isVisible:false,text:"Mark as Complete"},//taskRecord.completedDate

      "lblstatus":taskRecord.taskStatus=="OPEN"?{text:"Open"}:{text:"Completed"},//=="OPEN"?{skin:"sklblgray100"}:{"skin":"sknlblstatuswhite"},
    };
    taskListArr.push(tempRecord);
  }
  kony.print("final taskListArr:::"+JSON.stringify(taskListArr));
  if(Object.keys(sortAndFilterConstants.tasksFilterObject).length>0){
    kony.print("Object.keys(sortAndFilterConstants.tasksFilterObject).length ifff"+Object.keys(sortAndFilterConstants.tasksFilterObject).length);
    sortAndFilterModule.filterDataBasedonParameters(taskListArr, sortAndFilterConstants.tasksFilterObject);
  }else{
    kony.print("else paginate");
    frmViewTasksNew.segviewtasks.setVisibility(true);
    frmViewTasksNew.lblEmptyList.setVisibility(false);
    task_info.filterData=taskListArr;
    paginate(taskListArr,"frmViewTasksNew");
    com.healogics.utility.dismissLoading();
  }
};

//Method for service call for updating a task
taskListModule.updateTask = function(selectedTask){
  kony.print("taskListModule.updateTask start::"+JSON.stringify(selectedTask));
  var inputData = {
    "userIdValue" : userInfo.userName,
    "taskId" : selectedTask[0].taskId,     
    "patientId" : selectedTask[0].patientId,
    "medicalRecordNo" : selectedTask[0].medicalRecordNo,
    "status" : 'COMPLETE',
    "accessToken" : userInfo.accessToken,    
    "facilityId" : userInfo.presentFacilityId,
    
    "lastUpdatedBy" : userInfo.userName,
    "createDate" : getCreateTaskDate(),
    "deleted" : "false"
  };
  kony.print("taskListModule.updateTask inputData::"+JSON.stringify(inputData));
  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_UPDATETASK,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "patientId" : selectedTask[0].patientId,
      "facilityId" : userInfo.presentFacilityId,
      "userId" :	userInfo.userId,
      "userName" : userInfo.userName,
      "deviceType" : userInfo.deviceType,
      "deviceId" : userInfo.sessionId
    },
    inputData,
    taskListModule.updateTaskSuccessCallback,
    taskListModule.TaskListModuleFailureCallback
  );
};

//Success callback for update task
taskListModule.updateTaskSuccessCallback = function(response){
  kony.print("taskListModule.updateTaskSuccessCallback start::"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){   	
    if(response.taskList!==null && response.taskList.length > 0){
      task_info.taskList = response.taskList;
      kony.print("task_info.taskList"+JSON.stringify(task_info.taskList));
      kony.print(" task_info.filterData"+JSON.stringify(task_info.filterData));
      if(sortAndFilterConstants.selectedFilter=="lbldatecompleted")
        taskListModule.processTaskList(task_info.STATUS_OPEN); //
      else
        taskListModule.processTaskList(task_info.STATUS_ALL);
      var valueToShow;
      /*if(isIpad){
        tasks_cntrl_offline.getOpenTaskLists();
        valueToShow = parseInt(userInfo.taskCount);
        if(valueToShow === 0)
          frmViewTasksNew.fcmstheader.lbltaskcount.text = valueToShow;
        else
          frmViewTasksNew.fcmstheader.lbltaskcount.text=userInfo.taskCount;
      }else{*/
        valueToShow = parseInt(userInfo.taskCount);
        if(valueToShow === 0){
          frmViewTasksNew.fcmstheader.lbltaskcount.text = valueToShow;
        }else{
          userInfo.taskCount = parseInt(userInfo.taskCount)-1;
          frmViewTasksNew.fcmstheader.lbltaskcount.text=userInfo.taskCount;
        }
      /*}
      ////Akshay - Calling Notes/Tasks Scope Download/Upload
      if(isIpad && !SYNC_CONSTANTS.isAppOffline){///Only in online mode.
        com.healogics.utility.showLoading("Updating Data!"); 
        modSyncScopes_offline_tasksAndNotes();
        syncInitialDownload(sync_notesSuccessCallback, sync_notesErrorCallBack);
      }*/	
    }
  }else if(response.errmsg!==null){
    com.healogics.utility.showErrorAlert(response.errmsg);
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if(response!==null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)){
      error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
      loginModule.showLoginScreen(error_label);
    }else{
      com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
  }
};

//Method called when task is completed
var frmViewTasks_onClick_Complete=function(){
  searchPatient_closeSearchList();
  var selectedTask = frmViewTasksNew.segviewtasks.selectedItems;
  kony.print("frmViewTasks_onClick_Complete selectedTask:::"+JSON.stringify(selectedTask));
  //if(isIpad){///Akshay - For Reading always the Offline DB in Online or Offline mode for iPad
  //  tasks_cntrl_offline.updateTaskOffline(selectedTask);
  //}else{
    taskListModule.updateTask(selectedTask);
  //}
};

//Method to clear the values
var show_frmViewTasks=function(){
  paginationConstants.clear();
  task_info.reset();
  taskListArr=[];
  sortAndFilterConstants.tasksFilterObject={};
  isSelectAllCheckMarkSelected = false ;
  frmViewTasksNew.imgdown1.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown2.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown3.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown4.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown5.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown7.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown8.skin = "skinBtnFilter";
  //if(isIpad && SYNC_CONSTANTS.isAppOffline){
  //if(isIpad){///Akshay - For Reading always the Offline DB in Online or Offline mode for iPad
  //  tasks_cntrl_offline.getTasksList();
  //}else{
    taskListModule.getTaskList();
  //}
};

//Method to show popup when task is completed
// var show_popuptaskcomplete=function(){
//   popuptaskcomplete.ricktexttaskcomplete.text = "Task has been successfully <b>COMPLETED!</b>";
//   popuptaskcomplete.show();
// };



var frmViewTasks_addCirclesOnVerticalLine = function(){
  taskListModule.frmViewTaks_removeCircles();
  kony.print("segmen height in function is : --------->>>> "+frmViewTasks.segtasklist.frame.height);
  frmViewTasks.lblverticalline.height = frmViewTasks.segtasklist.frame.height-50;
  frmViewTasks.fcCircles.height=frmViewTasks.segtasklist.frame.height-50;
  var segViewTaskData = frmViewTasks.segtasklist.data;
  kony.print("segViewTaskData--->"+JSON.stringify(segViewTaskData));
  kony.print("segViewTaskData--->"+frmViewTasks.segtasklist.height);
  kony.print("frmViewTasks.lblverticalline.height--->"+frmViewTasks.lblverticalline.height);
  kony.print("frmViewTasks.lblverticalline.height--->"+frmViewTasks.lblverticalline.height/segViewTaskData.length);

  var height = frmViewTasks.segtasklist.frame.height/segViewTaskData.length;
  var top = 80;
  for(var i=0;i<segViewTaskData.length;i++){

    var imgcircle = new kony.ui.Image2({
      "id": "imgcircle"+i,
      "isVisible": true,
      "left": "47.5%",
      "skin": "slImage",
      "src": "timeline.png",
      "top": top+"dp",
      "width": kony.flex.USE_PREFFERED_SIZE,
      "zIndex": 5
    }, {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});
    //     frmViewTasks.fcCircles.add(imgcircle);
    top = top+height;
  }
  frmViewTasks.forceLayout();
  com.healogics.utility.dismissLoading();
  //Remove the segment scroll
  frmViewTasks.segtasklist.showScrollbars = false ;
  frmViewTasks.segtasklist.enableScrolling = false ;
  frmViewTasks.forceLayout();
  frmPatientSummary_cancelTimer("timerToAddCircles");
};

taskListModule.frmViewTaks_removeCircles=function(){
  var taskDataLength=frmViewTasks.segtasklist.data;
  for(i=0;i<taskDataLength.length;i++){
    frmViewTasks.fcCircles.removeAll();
    // kony.print("image id--->"+frmViewTasks.fscbodyScroll["imgcircle"+i]);
    //frmViewTasks.remove(frmViewTasks.fscbodyScroll["imgcircle"+i]);
  }
  frmViewTasks.forceLayout();
};

taskListModule.formBackHandler = function(){
  var previousForm = kony.application.getPreviousForm().id;
  kony.print("taskListModule.formBackHandler previousForm form ---->"+previousForm);
  if(previousForm == "frmPatientSummary"){
    patientSummaryFromTaskList();
  }else{
    kony.print("taskListModule.formBackHandler::::"+previousForm);
    kony.application.getPreviousForm().show();
  }
};

//Method to get all tasks
var frmViewTasks_getAllTasks=function(){
  com.healogics.utility.showLoading();
  taskListModule.frmViewTaks_removeCircles();
  frmViewTasks.btnopentask.skin="sknbtntransbgwhite85";
  frmViewTasks.btnCompleted.skin="sknbtntransbgwhite85";
  frmViewTasks.btnall.skin="sknbtnwhitebgblack85";
  taskListModule.processTaskList(task_info.STATUS_ALL);
};

//Method for validation for creation of task
var popupCreateTask_ValidateTask=function(){
  var task_desc= popupcreatetask.textareadesc.text.trim();
  var task_date=popupcreatetask.datecal.formattedDate;
  if(com.healogics.utility.isEmpty(task_date)){
    popupcreatetask.hboxerror.setVisibility(true);
    popupcreatetask.lblerror.text=ERROR_CONSTANTS.TASKDATE_ERROR_MESSAGE;
  }
  else{
    popupcreatetask.hboxerror.setVisibility(false);
    popupcreatetask_onCreate();
  }
};


//Method to get open tasks
var frmViewTasks_getOpenTasks=function(){
  com.healogics.utility.showLoading();
  taskListModule.frmViewTaks_removeCircles();
  frmViewTasks.btnopentask.skin="sknbtnwhitebgblack85";
  frmViewTasks.btnCompleted.skin="sknbtntransbgwhite85";
  frmViewTasks.btnall.skin="sknbtntransbgwhite85";
  taskListModule.processTaskList(task_info.STATUS_OPEN);
  frmViewTasks.forceLayout();
};

//Method to get completed tasks
var frmViewTasks_getCompletedTasks=function(){
  com.healogics.utility.showLoading();
  taskListModule.frmViewTaks_removeCircles();
  frmViewTasks.btnopentask.skin="sknbtntransbgwhite85";
  frmViewTasks.btnCompleted.skin="sknbtnwhitebgblack85";
  frmViewTasks.btnall.skin="sknbtntransbgwhite85";
  taskListModule.processTaskList(task_info.STATUS_COMPLETE);
  frmViewTasks.forceLayout();
};


///callbacks
function sync_notesSuccessCallback(){
  SYNC_CONSTANTS.isSyncSuccess = true;
  SYNC_CONSTANTS.isSyncInProgress = false;
  showLastSync();///display the last Sync Time on screen
  kony.print("sync_notesSuccessCallback for Conflict Function----->");
  var currentForm = kony.application.getCurrentForm().id;
  kony.print("sync_notesSuccessCallback current form ---->"+currentForm);
  if(currentForm == "frmConflictResolve"){
    frmConflictResolve.btnresolvenext.setEnabled(false);
    frmConflictResolve.btnresolvenext.skin = "skngraybgbold";
    taskListModule.formBackHandler();
  }else{
    dismissLoadingScreen();
    reloadScreen();///Needs to refresh the data and get user pushed back.
  }
}

function sync_notesErrorCallBack(){
  SYNC_CONSTANTS.isSyncSuccess = false;
  SYNC_CONSTANTS.isSyncInProgress = false;

  var currentForm = kony.application.getCurrentForm().id;
  if(currentForm == "frmConflictResolve"){
    frmConflictResolve.btnresolvenext.setEnabled(false);
    frmConflictResolve.btnresolvenext.skin = "skngraybgbold";
  }
  dismissLoadingScreen();
}
