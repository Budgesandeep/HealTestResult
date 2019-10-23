/*
*Name: modPagination.js
*Purpose: For Pagination functionalities
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 04/14/2017        Vamshi                 
*
*
*/
var startTime ;
//Method to handle pagination for PatientList,viewTasks,patientRecords
var paginate = function(serviceData, formName){
  startTime = getDeviceCurrentTime();
  paginationConstants.clear();
  paginationConstants.paginationData = serviceData; 
  kony.print("paginationConstants.paginationDataIndexlength-------->"+paginationConstants.paginationDataIndex);
  showHideButtons(formName,true);
  if(serviceData.length <= paginationConstants.initialCount){
    kony.print("in break condition-------->");
    showHideButtons(formName,false);    
  }
  if(formName == "frmPatientList"){
    if(!frmPatientList.segpatientlist.isVisible){
      frmPatientList.segpatientlist.setVisibility(true);
      frmPatientList.lblNoPatients.setVisibility(false);
    }
    
    frmPatientList.segpatientlist.setData(serviceData.slice(0,paginationConstants.initialCount));
    if(!isIpad)
      kony.timer.schedule("timerForLines", frmPatientList_setHeightForLines, 0.5, false);
    else{
      try{
        kony.timer.cancel("timerForLines");
      }
      catch(e){
        kony.print("error---"+e);
      }
      kony.timer.schedule("timerForLines", frmPatientList_setHeightForLines, 1, false);
    }
  }else if(formName == "frmPatientRecords"){
    frmPatientRecords.segmentDocuments.setData(serviceData.slice(0,paginationConstants.initialCount));
  }
  /////frmPatientTestResults
  else if(formName == "frmPatientTestResults"){
    frmPatientTestResults.segmentTestResultsDocuments.setData(serviceData.slice(0,paginationConstants.initialCount));
  }
    else{
    frmViewTasksNew.segviewtasks.setData(serviceData.slice(0,paginationConstants.initialCount));
    stopTimer();
    var timerValue = 1;
    if(!isIpad){
      timerValue = 0.1;
    }
    kony.timer.schedule("taskListTimer", frmViewTasksNew_segdivider, timerValue, false);
  }
  frmViewTasksNew_settingFooter();
  paginationConstants.paginationDataIndex += paginationConstants.initialCount;    
};

var showHideButtons = function (formName, x){
  if(formName == "frmPatientList"){
    frmPatientList.fcpaginatebuttons.setVisibility(x);
    frmPatientList.btnViewAll.setEnabled(x);
    frmPatientList.btnViewMore.setEnabled(x);
  }else if(formName == "frmPatientRecords"){
    frmPatientRecords.fcpaginatebuttons.setVisibility(x);
    frmPatientRecords.forceLayout();
  }
  /////frmPatientTestResults
  else if(formName == "frmPatientTestResults"){
    frmPatientTestResults.fcpaginatebuttons.setVisibility(x);
    frmPatientTestResults.forceLayout();
  }
  else{
    frmViewTasksNew.fcpaginatebuttons.setVisibility(x);
    frmViewTasksNew.forceLayout();
  }
};

//Method to call for viewMore or viewAll buttons clicked
var viewOptionClicked = function(eventobject){
  
  kony.print(" ---------------->click function start");
  com.healogics.utility.showLoading("Loading....");
  viewOptionClickedModified(eventobject.id);
  
};

//Method to call for viewMore or viewAll buttons clicked
var viewOptionClickedModified = function(eventName){
  
  startTime = getDeviceCurrentTime();

   com.healogics.utility.showLoading("Loading....");
  //kony.application.showLoadingScreen("sknloading", "Loading....", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
  searchPatient_closeSearchList();
  var currentForm = kony.application.getCurrentForm().id;
  kony.print("entered viewOptionClicked");
  kony.print("eventobject------->" + eventName);
  if (eventName == "btnViewMore"){
    kony.print(" ---------------->view More start");
    if( paginationConstants.paginationData.length <= (paginationConstants.paginationDataIndex + paginationConstants.growCount) ){
      kony.print("in break condition-------->");
      if (currentForm == "frmPatientList"){
        if(isIpad){
          frmPatientList.segpatientlist.setData(paginationConstants.paginationData);
        }else{
          
          frmPatientList.btnViewAll.setEnabled(false);
          frmPatientList.btnViewMore.setEnabled(false);
          
          frmPatientList.segpatientlist.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
        }
        kony.timer.schedule("timerForLines", frmPatientList_setHeightForLines, 0.5, false);
      }else if(currentForm  == "frmPatientRecords"){
        frmPatientRecords.segmentDocuments.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
      }
      ////frmPatientTestResults
      else if(currentForm  == "frmPatientTestResults"){
        frmPatientTestResults.segmentTestResultsDocuments.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
      }
      
      else{
        if(isIpad){
          frmViewTasksNew.segviewtasks.setData(paginationConstants.paginationData);
        }else{
          frmViewTasksNew.segviewtasks.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
        }
        stopTimer();
        kony.timer.schedule("taskListTimer", frmViewTasksNew_segdivider, 0.1, false);
      }
      showHideButtons(currentForm, false);
      kony.print(" ---------------->view More End");
    }else{
      if (currentForm == "frmPatientList"){
        if(isIpad){
          frmPatientList.segpatientlist.setData(paginationConstants.paginationData.slice(0, paginationConstants.paginationDataIndex + paginationConstants.growCount));
        }else{
          frmPatientList.btnViewAll.setEnabled(false);
          frmPatientList.btnViewMore.setEnabled(false);
          frmPatientList.segpatientlist.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex, paginationConstants.paginationDataIndex + paginationConstants.growCount));
        }
        kony.timer.schedule("timerForLines", frmPatientList_setHeightForLines, 0.5, false);
      }else if(currentForm == "frmPatientRecords"){
        var arr=[];
        arr=paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex, paginationConstants.paginationDataIndex + paginationConstants.growCount);
        frmPatientRecords.segmentDocuments.addAll(arr);
      }
      /////frmPatientTestResults
      
       else  if(currentForm == "frmPatientTestResults"){
        var arrResult=[];
        arrResult=paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex, paginationConstants.paginationDataIndex + paginationConstants.growCount);
       frmPatientTestResults.segmentTestResultsDocuments.addAll(arrResult);
      }
         
       
      
      
      else{
        if(isIpad){
          var dataObject = paginationConstants.paginationData.slice(0, paginationConstants.paginationDataIndex + paginationConstants.growCount)
          frmViewTasksNew.segviewtasks.setData(dataObject);
        }else{

          
          var startIndex = paginationConstants.paginationDataIndex;
          var endIndex = paginationConstants.paginationDataIndex + paginationConstants.growCount;
          var dataObject = paginationConstants.paginationData.slice(startIndex, endIndex);

          frmViewTasksNew.segviewtasks.addAll(dataObject);

          
        }
        
        stopTimer();
        kony.timer.schedule("taskListTimer", frmViewTasksNew_segdivider, 0.5, false);
      }
      paginationConstants.paginationDataIndex = paginationConstants.paginationDataIndex + paginationConstants.growCount; 
    }       
  }else if(eventName == "btnViewAll"){
    kony.print(" ---------------->view All start");
    if(currentForm == "frmPatientList"){
      if(isIpad){
        frmPatientList.segpatientlist.setData(paginationConstants.paginationData);
      }else{
        frmPatientList.btnViewAll.setEnabled(false);
        frmPatientList.btnViewMore.setEnabled(false);
        frmPatientList.segpatientlist.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
      }
      kony.timer.schedule("timerForLines", frmPatientList_setHeightForLines, 0.5, false);      
    }else if(currentForm == "frmPatientRecords"){
      frmPatientRecords.segmentDocuments.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
    }
    /////frmPatientTestResults
    else if(currentForm == "frmPatientTestResults"){
      frmPatientTestResults.segmentTestResultsDocuments.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
    }
    else{
      if(isIpad){
        frmViewTasksNew.segviewtasks.setData(paginationConstants.paginationData);
      }else{
        frmViewTasksNew.segviewtasks.addAll(paginationConstants.paginationData.slice(paginationConstants.paginationDataIndex));
      }
      stopTimer();
      kony.timer.schedule("taskListTimer", frmViewTasksNew_segdivider, 0.1, false);
    }
    showHideButtons(currentForm, false);
    kony.print(" ---------------->view All End");
  }  
  
  if(currentForm != "frmPatientList" && currentForm != "frmViewTasksNew"){
  	com.healogics.utility.dismissLoading();
  }
  kony.print(" ---------------->click function end");
}