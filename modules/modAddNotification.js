//Type your code here
var addNotificationModule = {};
addNotificationModule.isEdit = false;
addNotificationModule.shouldCreateNewNotificationID = "no";
addNotificationModule.selectedNotification = {selectionNotificationID : "", facilities:[]};
addNotificationModule.segFacilitySelectAllList = [];
addNotificationModule.segFacilityList = [];
addNotificationModule.selectedFacilities = {};
addNotificationModule.selectedFacilityArray = [];
addNotificationModule.facilityListFromService = [];
addNotificationModule.facilityHashMap ={} ;
addNotificationModule.saveNotification = function (){
    var status = frmNotificationDashboard.swtchStatus.selectedIndex;
    var array = addNotificationModule.getFormattedFacility();
    var inputData = {
      "facilities":array,
      "title":frmNotificationDashboard.txtTitle.text,
      "description":frmNotificationDashboard.txtAreaDescription.text.replace(/(?:\r\n|\r|\n)/g,' '),
      "startDate":frmNotificationDashboard.calStartDate.date,
      "endDate":frmNotificationDashboard.calEndDate.date,
      "status":status === 0? "Active":"Inactive",
      "hyperLink":frmNotificationDashboard.txtLink.text,
      "startTime":frmNotificationDashboard.lboxStartTime.selectedKeyValue[1],
      "endTime":frmNotificationDashboard.lboxEndTime.selectedKeyValue[1],
      "createdUser":userInfo.userName,
  };
    var operationName = MF_SERVICECONSTANTS.OPERATION_NAME_CREATENOTIFICATION;
 	if (addNotificationModule.isEdit){
   		inputData.notificationID = addNotificationModule.selectedNotification.notificationID;
        operationName = MF_SERVICECONSTANTS.OPERATION_NAME_EDITNOTIFICATION;
        inputData.createNewNotificationID = addNotificationModule.shouldCreateNewNotificationID;
 	}
    com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    operationName,
    {
      "Authorization" : userInfo.headerAccessToken,
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
   addNotificationModule.addNotificationSuccessCallback,
   addNotificationModule.addNotificationErrorCallback,
    true
  );
};

addNotificationModule.addNotificationSuccessCallback = function (response){
  if(response !== null && response !== "" && response.opstatus ===0 && response.statusCode === "200" && response.errorCode === "0"){
      kony.print("<---------Success Response from add Notification Service-------->"+JSON.stringify(response));
    if(addNotificationModule.isEdit){
      com.healogics.utility.showErrorAlert("Notification was successfully updated");
    }else{
      com.healogics.utility.showErrorAlert("Notification was successfully created");
    }
      
    
      frmNotificationDashboard_showNotificationListView();
      frmNotificationDashboard_PostShow();
    }
};

addNotificationModule.addNotificationErrorCallback = function (response){
  kony.print("<---------Failure Response from add Notification Service-------->"+JSON.stringify(response));
  com.healogics.utility.showErrorAlert(ERROR_CONSTANTS.NOTIFICATION_SAVE_ERROR_MESSAGE);
};

addNotificationModule.clearAllFields = function (){
  	  addNotificationModule.selectedNotification = {};
	  frmNotificationDashboard.txtTitle.text = "";
      frmNotificationDashboard.txtAreaDescription.text = "";
      frmNotificationDashboard.calStartDate.clear();
      frmNotificationDashboard.calEndDate.clear();
      frmNotificationDashboard.swtchStatus.selectedIndex = 0;
      frmNotificationDashboard.txtLink.text = "";
      frmNotificationDashboard.lboxStartTime.selectedKey = "00:00";
      frmNotificationDashboard.lboxEndTime.selectedKey = "00:00";
  	  frmNotificationDashboard.txtTitle.skin = "skntxtbxrounded";
      frmNotificationDashboard.txtAreaDescription.skin = "sknTxtAreaWhiteRnd";
      frmNotificationDashboard.txtLink.skin = "skntxtbxrounded";
  	  frmNotificationDashboard.btnSelectAll.skin = "sknbtnuncheck";
      frmNotificationDashboard.calStartDate.skin = "skncalender"; 
      frmNotificationDashboard.calEndDate.skin = "skncalender"; 
      frmNotificationDashboard.lboxStartTime.skin = "sklbdarkgray100";
      frmNotificationDashboard.lboxEndTime.skin = "sklbdarkgray100";
};
addNotificationModule.setNotificationDetails = function (selectedNotification){
      kony.print("Selected Notification----->"+JSON.stringify(selectedNotification));
  	  addNotificationModule.selectedNotification.notificationID = selectedNotification.notification_id;
      addNotificationModule.selectedNotification.facilities = selectedNotification.facility_bluebook_map;
	  frmNotificationDashboard.txtTitle.text = selectedNotification.title;
      frmNotificationDashboard.txtAreaDescription.text = selectedNotification.description;
      var dateArray = selectedNotification.start_date.split('/');
      frmNotificationDashboard.calStartDate.dateComponents = [dateArray[1],dateArray[0],dateArray[2],"0","0","0"];
      frmNotificationDashboard.calStartDate.parent.forceLayout();
      dateArray = selectedNotification.end_date.split('/');
      frmNotificationDashboard.calEndDate.dateComponents = [dateArray[1],dateArray[0],dateArray[2],"0","0","0"];
      frmNotificationDashboard.calEndDate.parent.forceLayout();
      frmNotificationDashboard.swtchStatus.selectedIndex = selectedNotification.notification_status==="Active"?0:1;
      frmNotificationDashboard.txtLink.text = selectedNotification.hyperlink;
      frmNotificationDashboard.lboxStartTime.selectedKey = selectedNotification.start_time;
      frmNotificationDashboard.lboxEndTime.selectedKey = selectedNotification.end_time;
};
frmNotificationDashboard_validateNotificationDetails = function (){
   var status = true; 
   var errorMsg = ""; 
  if(!addNotificationModule.validateTextFields()) {
    errorMsg = ERROR_CONSTANTS.NOTIFICATION_GENERAL_EMPTY_ERROR_MESSAGE;
    status = false;
  }else if ((!com.healogics.utility.isEmpty(frmNotificationDashboard.txtLink.text)) && !addNotificationModule.validateHyperLink()){
    frmNotificationDashboard.txtLink.skin = "skntxterror"; 
    errorMsg = ERROR_CONSTANTS.NOTIFICATION_HYPERLINK_ERROR_MESSAGE;
    status = false;
  }else if(addNotificationModule.selectedFacilities === null || isEmptyObject(addNotificationModule.selectedFacilities)){
    errorMsg = ERROR_CONSTANTS.NOTIFICATION_FACILITY_ERROR_MESSAGE;
    status = false;
  }else {
    var result = addNotificationModule.validateDate();
    if(!result.status){
     errorMsg = result.error_msg;
     status = false;
   }
  }
  
  if(status){
    addNotificationModule.saveNotification();
  }else{
    com.healogics.utility.showErrorAlert(errorMsg);
  } 
};
addNotificationModule.validateTextFields = function (){
   var status = true;
   var errorMessages = [ERROR_CONSTANTS.NOTIFICATION_TITLE_ERROR_MESSAGE,ERROR_CONSTANTS.NOTIFICATION_DESCRIPTION_ERROR_MESSAGE,
                       ERROR_CONSTANTS.NOTIFICATION_START_DATE_ERROR_MESSAGE]; 
   var formTextFields =  [frmNotificationDashboard.txtTitle,frmNotificationDashboard.txtAreaDescription];
 
  var count = 0;
  for( count in formTextFields){
    currentTextField = formTextFields[count];
    if (currentTextField.text === null || currentTextField.text.trim() ===""){
      status = false;
      if(count === 1){
	            currentTextField.skin = "sknTxtAreaError";
      }else{
    	    currentTextField.skin = "skntxterror";    
      }
   }
  }
  return status;
};
addNotificationModule.validateHyperLink = function (){
  var status = true;
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  var hyperLink = frmNotificationDashboard.txtLink.text;
  if (!hyperLink.match(regex))  status = false;
  return status;
};
addNotificationModule.validateDate = function() {
    var result = {"status":true,"error_msg":ERROR_CONSTANTS.NOTIFICATION_DATE_ERROR_MESSAGE};
    var index = 0;
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    var startDate = frmNotificationDashboard.calStartDate.date; 
    var endDate = frmNotificationDashboard.calEndDate.date;
    if(startDate === null && endDate === null){
      frmNotificationDashboard.calStartDate.skin = "sknCalendarError"; 
      frmNotificationDashboard.calEndDate.skin = "sknCalendarError"; 
      result.status = false;
    }else if(startDate === null){
      result.status = false;
      frmNotificationDashboard.calStartDate.skin = "sknCalendarError"; 
    }else if (endDate === null){
      result.status = false;
      frmNotificationDashboard.calEndDate.skin = "sknCalendarError"; 
    }
    else{
       	var today = new Date();
      	var array = startDate.split('/');
      	var startTime = frmNotificationDashboard.lboxStartTime.selectedKeyValue[1];
        var endTime = frmNotificationDashboard.lboxEndTime.selectedKeyValue[1];
    	var dateString = array[2] + '-' + array[0] + '-'+array[1] + 'T' + startTime;
   		var startDateObj = new Date(dateString);
    	array = endDate.split('/'); 
    	var dateString1 = array[2] + '-' + array[0] + '-'+array[1] + 'T' + endTime;
    	var endDateObj = new Date(dateString1);
        if ((startDate === endDate) && (startTime === endTime)){
          frmNotificationDashboard.lboxEndTime.skin = "sklbdarkgrayerror";
          result.status = false;
          result.error_msg = ERROR_CONSTANTS.NOTIFICATION_TIME_ERROR_MESSAGE;
        }else if ( (Date.parse(endDateObj) <= Date.parse(startDateObj)) ){
        	result.status = false;
        	frmNotificationDashboard.calEndDate.skin = "sknCalendarError"; 
      	}else if((Date.parse(endDateObj) < Date.parse(today)) && !addNotificationModule.isEdit){
          result.status = false;
          frmNotificationDashboard.calEndDate.skin = "sknCalendarError";
        }
    }
      return result;
};
addNotificationModule.validateTime = function (){
    var result = true;
    var expression = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gi;/*/^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?$/gi;*/
    var regex = new RegExp(expression);
    var startTime = "";
    var endTime = "";
    if(isIpad){
      
    }else{
      startTime = frmNotificationDashboard.txtStartTime.text;
      endTime = frmNotificationDashboard.txtEndTime.text;
    }
   
  
    if(!startTime.match(regex) && !endTime.match(regex)){
          result = false;
         if(isIpad){
           
         }else {
           frmNotificationDashboard.txtStartTime.skin = "skntxterror";
           frmNotificationDashboard.txtEndTime.skin = "skntxterror"; 
         }
         
        }else if(!startTime.match(regex)){
          result = false;
          if(isIpad){
           
         }else {
           frmNotificationDashboard.txtStartTime.skin = "skntxterror";
           
         }
          frmNotificationDashboard.txtStartTime.skin = "skntxterror";
        }else if (!endTime.match(regex)){
          result = false;
          if(isIpad){
           
         }else {
           
           frmNotificationDashboard.txtEndTime.skin = "skntxterror"; 
         }
          
        }
    return result;
};

frmNotificationDashboard_cancelButtonHandler = function(){
  frmNotificationDashboard_showNotificationListView();
  frmNotificationDashboard.segmentFacilty.setData(addNotificationModule.segFacilityList);
};
/**************Notification Facility List**********************/

addNotificationModule.fetchFacilityList = function (){
  var inputData = {};
    com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_NOTIFICATION_FACILITYLIST,
    {
      "Authorization" : userInfo.headerAccessToken,
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "userName" : userInfo.userName,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
   addNotificationModule.facilityListSuccessCallback,
   addNotificationModule.facilityListFailureCallback,
    false
  );
};
addNotificationModule.facilityListFailureCallback = function (response){
  kony.print("<---------Failure Response from Facility list Service-------->"+JSON.stringify(response));
};
addNotificationModule.facilityListSuccessCallback = function (response){
  kony.print("<---------Success Response from Facility list Service-------->"+JSON.stringify(response));
  if(!com.healogics.utility.isEmpty(response) && response.opstatus ===0 && response.statusCode  === "200"){
   addNotificationModule.setFacilityData(response.Facilities);
   addNotificationModule.facilityListFromService = response.Facilities;
  }
};
addNotificationModule.setFacilityData = function(facilityList){
 	addNotificationModule.segFacilitySelectAllList = [];
    addNotificationModule.selectedFacilityArray = [];
    addNotificationModule.selectedFacilities = {};
    addNotificationModule.segFacilityList = [];
  if((!com.healogics.utility.isEmpty(addNotificationModule.selectedNotification.facilities) && (!com.healogics.utility.isEmpty(facilityList))) &&  addNotificationModule.selectedNotification.facilities.length === facilityList.length){
      frmNotificationDashboard.btnSelectAll.skin =  "sknbtncheck";
    }
   // if(!addNotificationModule.isEdit){
      for (var i in facilityList){
        var facilityObj = facilityList[i];
        var segObject = {lblBlueBookCode:facilityObj.bluebook_code,btnSelection:{"skin":"sknbtnuncheck"},"lblFacilityID":facilityObj.facility_id};
        var segObjectForSelectAll = {lblBlueBookCode:facilityObj.bluebook_code,btnSelection:{"skin":"sknbtncheck"},"lblFacilityID":facilityObj.facility_id};
        addNotificationModule.facilityHashMap[facilityObj.bluebook_code] = {"facility_id":facilityObj.facility_id,"bluebook_code":facilityObj.bluebook_code};
        addNotificationModule.segFacilityList.push(segObject);
        addNotificationModule.segFacilitySelectAllList.push(segObjectForSelectAll);
        addNotificationModule.selectedFacilityArray.push(facilityObj.bluebook_code);
  		}
    //}else{
  if(addNotificationModule.isEdit){
       addNotificationModule.shouldSelectPrevFacilities(true);
   }
  	frmNotificationDashboard.segmentFacilty.setData(addNotificationModule.segFacilityList);
};

addNotificationModule.shouldSelectPrevFacilities = function(flag){
  var prevSelectedFacilities = addNotificationModule.selectedNotification.facilities;
  if(flag && !com.healogics.utility.isEmpty(addNotificationModule.selectedNotification.facilities)){
 	 //addNotificationModule.selectedFacilities = addNotificationModule.selectedNotification.facilities;
}
       if(!com.healogics.utility.isEmpty(prevSelectedFacilities) && prevSelectedFacilities.length > 0){
       for (var count in prevSelectedFacilities){
          var facility = prevSelectedFacilities[count];
          var index = addNotificationModule.selectedFacilityArray.indexOf(facility.bluebook_code);
          if(index !== -1){
            var segmentObj = addNotificationModule.segFacilityList[index];
            if(flag){
	             segmentObj.btnSelection.skin = "sknbtncheck"; 
            }else{
              segmentObj.btnSelection.skin = "sknbtnuncheck";
            }
            addNotificationModule.segFacilityList[index] = segmentObj;
            addNotificationModule.selectedFacilities[facility.bluebook_code] = {"facility_id":facility.facility_id,"bluebook_code":facility.bluebook_code};
        	}
      	}
     }
  frmNotificationDashboard.segmentFacilty.setData(addNotificationModule.segFacilityList);
};

frmNotificationDashboard_selectAllButtonHandler = function(){
  if(frmNotificationDashboard.btnSelectAll.skin === "sknbtnuncheck"){
    frmNotificationDashboard.btnSelectAll.skin = "sknbtncheck";
    frmNotificationDashboard.segmentFacilty.setData(addNotificationModule.segFacilitySelectAllList);
    addNotificationModule.selectedFacilities = addNotificationModule.facilityHashMap;
  }else{
	addNotificationModule.selectedNotification.facilities = [];
    addNotificationModule.setFacilityData(addNotificationModule.facilityListFromService);
    frmNotificationDashboard.btnSelectAll.skin = "sknbtnuncheck";
    //frmNotificationDashboard.segmentFacilty.setData(addNotificationModule.segFacilityList);
    addNotificationModule.selectedFacilities = {};
  }
  frmNotificationDashboard.segmentFacilty.parent.forceLayout();
};
frmNotificationDashboard_segFacilityButtonHandler = function(selectedButtonObj,SegContext){
  var selectedFacility = {};
  if(isIpad){
    	selectedFacility = SegContext.widgetInfo.focusedItem;
  }
  else{
     	selectedFacility = SegContext.widgetInfo.focuseditem;
  }
  
  //var index =  addNotificationModule.selectedFacilities.indexOf(selectedFacility.lblBlueBookCode);
  if(selectedButtonObj.skin === "sknbtnuncheck"){
     selectedFacility.btnSelection.skin = "sknbtncheck";
    addNotificationModule.selectedFacilities[selectedFacility.lblBlueBookCode] = {"facility_id":selectedFacility.lblFacilityID,"bluebook_code":selectedFacility.lblBlueBookCode};
     //addNotificationModule.selectedFacilities[selectedFacility.lblBlueBookCode] = {"facility_id":selectedFacility.lblFacilityID,"bluebook_code":selectedFacility.lblBlueBookCode};
     //addNotificationModule.selectedFacilities.push(selectedFacility.lblBlueBookCode);
   }else{
     selectedFacility.btnSelection.skin = "sknbtnuncheck";
     delete addNotificationModule.selectedFacilities[selectedFacility.lblBlueBookCode];
     //addNotificationModule.selectedFacilities.removeRange(SegContext.rowIndex,1);
     /*if(selectedFacility.lblBlueBookCode in addNotificationModule.selectedFacilities){
       
     }
     if(addNotificationModule.selectedFacilities !== null && addNotificationModule.selectedFacilities.length >0 && index!== -1){
   		 addNotificationModule.selectedFacilities.splice(index,1);
   		}*/
//     addNotificationModule.selectedFacilities[selectedFacility.lblBlueBookCode] = {"facility_id":selectedFacility.lblFacilityID,"bluebook_code":selectedFacility.lblBlueBookCode};
   }  
  if((!com.healogics.utility.isEmpty(addNotificationModule.selectedFacilities) && (!com.healogics.utility.isEmpty(addNotificationModule.facilityListFromService))) &&  Object.keys(addNotificationModule.selectedFacilities).length !== addNotificationModule.facilityListFromService.length){
      frmNotificationDashboard.btnSelectAll.skin =  "sknbtnuncheck";
    }
  else{
      frmNotificationDashboard.btnSelectAll.skin =  "sknbtncheck";
    }
  frmNotificationDashboard.segmentFacilty.setDataAt(selectedFacility, SegContext.rowIndex);
  frmNotificationDashboard.segmentFacilty.parent.forceLayout();
};

addNotificationModule.toggleSelectionButton = function(selectedButton){
  if(selectedButton.skin === "sknbtnuncheck"){
    selectedButton.skin = "sknbtncheck";
  }else{
   selectedButton.skin = "sknbtnuncheck";
  }
  selectedButton.parent.forceLayout();
};
frmNotificationDashboard_startDateSelected = function(){
  frmNotificationDashboard.calEndDate.validStartDate = [frmNotificationDashboard.calStartDate.day,frmNotificationDashboard.calStartDate.month,frmNotificationDashboard.calStartDate.year];
  frmNotificationDashboard.calEndDate.validEndDate = [frmNotificationDashboard.calStartDate.day,frmNotificationDashboard.calStartDate.month,frmNotificationDashboard.calStartDate.year+1];
  frmNotificationDashboard.calStartDate.skin = "skncalender";
  frmNotificationDashboard.lboxStartTime.skin = "sklbdarkgray100";
};
var frmNotificationDashboard_endDateSelected = function(){
  frmNotificationDashboard.calEndDate.skin = "skncalender";
  frmNotificationDashboard.lboxEndTime.skin = "sklbdarkgray100";
};
var createNotificationEndDateSelected = function(){
  frmNotificationDashboard.calEndDate.skin = "skncalender";
  frmNotificationDashboard.lboxEndTime.skin = "sklbdarkgray100";
};
var frmNotificationDashboard_startTimeSelected = function(){
    frmNotificationDashboard.lboxStartTime.skin = "sklbdarkgray100";
};
var frmNotificationDashboard_endTimeSelected = function(){
    frmNotificationDashboard.lboxEndTime.skin = "sklbdarkgray100";
};
addNotificationModule.getFormattedFacility = function(){
  var formattedFacilityArray = [];
  for(var x in addNotificationModule.selectedFacilities){
    formattedFacilityArray.push(addNotificationModule.selectedFacilities[x]);
  }
  return formattedFacilityArray;
};
addNotificationModule.setTimeData = function (){
  var dataList = [
    ["00:00", "00:00"],["00:30", "00:30"],["01:00", "01:00"],["01:30", "01:30"],["02:00", "02:00"],["02:30", "02:30"],["03:00", "03:00"],
    ["03:30", "03:30"],["04:00", "04:00"],["04:30", "04:30"],["05:00", "05:00"],["05:30", "05:30"],["06:00", "06:00"],["06:30", "06:30"],
    ["07:00", "07:00"],["07:30", "07:30"],["08:00", "08:00"],["08:30", "08:30"],["09:00", "09:00"],["09:30", "09:30"],["10:00", "10:00"],
    ["10:30", "10:30"],["11:00", "11:00"],["11:30", "11:30"],["12:00", "12:00"],["12:30", "12:30"],["13:00", "13:00"],["13:30", "13:30"],
    ["14:00", "14:00"],["14:30", "14:30"],["15:00", "15:00"],["15:30", "15:30"],["16:00", "16:00"],["16:30", "16:30"],["17:00", "17:00"],
    ["17:30", "17:30"],["18:00", "18:00"],["18:30", "18:30"],["19:00", "19:00"],["19:30", "19:30"],["20:00", "20:00"],["20:30", "20:30"],
    ["21:00", "21:00"],["21:30", "21:30"],["22:00", "22:00"],["22:30", "22:30"],["23:00", "23:00"],["23:30", "23:30"],    
];
  frmNotificationDashboard.lboxStartTime.masterData = dataList;
  frmNotificationDashboard.lboxEndTime.masterData = dataList;
};
function isEmptyObject( obj ) {
    for ( var name in obj ) {
        return false;
    }
    return true;
}
