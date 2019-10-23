/*
*Name: modSortAndFilter.js
*Purpose: For PatientList All Sorting and Filter functionality
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer            Comments
*---------------------------------------------------------------------------
* 01/19/2017        545496/556600       Validations/Integration Logic
*
*
*/
var sortAndFilterModule = {};
var isSelectAllCheckMarkSelected = false ;
var modSortAndFilter = {};

//jack's code

var selectedKeys;
var presentfiltercolumn="";
 var filter_name="";
//jack's code
function getFilter()
{
    var inputData={
       "facilityId":userInfo.selectedFacilityId,
       "userId":userInfo.userId,
       "userName":userInfo.userName,
      
    };
       com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_USERPREFERENCELIST,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "facilityId":userInfo.selectedFacilityId,
        "userId":userInfo.userId,
       "userName":userInfo.userName,
       "deviceType":"",
        "deviceId":"",
        
 
      },
      inputData,
     getUserFilter_SuccessCallback,
     getUserFilter_FailureCallback
    );
  
}

modSortAndFilter.getFilterListForIheal = function()
{
    var inputData={
       "facilityId":userInfo.selectedFacilityId,
       "userId":userInfo.userId,
       "userName":userInfo.userName,
      
    };
       com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_USERPREFERENCELIST,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "facilityId":userInfo.selectedFacilityId,
        "userId":userInfo.userId,
       "userName":userInfo.userName,
       "deviceType":"",
        "deviceId":"",
        
 
      },
      inputData,
     getUserFilter_SuccessCallback,
     getUserFilter_FailureCallback
    );
  
}

//user preference calling function
function userapreference()
{
   // kony.print("current form "+currentfrm.id);
      patientListConstants.myPatients = "N";
      logcounter=1;
    
     // patientListConstants.weekRange="ALL";
     //patientListModule.patientListSuccessCallback(allPatient);
      //patientListModule.getAllPatientList();
    //setTimeout(function() {getUserPreferenceList(); },1000); 
   getUserPreferenceList();
 
}
//
 function getUserFilter_SuccessCallback(response)
 {
    kony.print("get Filter service success call back"+JSON.stringify(response));
   var filterKeys=[];
   var counter=0;
   filterKeys=Object.keys(response);
    for(var i=0;i<filterKeys.length;i++)
    {
      
      var key=filterKeys[i];
      
      if(key==="lblappttype"||key==="lblcasemanager"||key==="lblweeks"||key==="lblwounds"|| key==="lblnextappt"||
         key==="lbltransferstatus"||key==="lblpatientmsrstatus"||key==="lblhealper"||key==="lblPrecautions"||key==="lblphysician")
      {
   var abc=response[filterKeys[i]];
       kony.print("--abc--"+abc);
        if(abc.length>0 && abc!==null)
          {
            counter++;
           // kony.print("filter is not empty");
           // getUserPreferenceList();
          }
       
     
      
      }
     }
   if(counter!==0)
     {
       kony.print("filter is not empty");
       userapreference();
       sortAndFilterConstants.todayPatient = false;
     }
   else
     {
       kony.print("filter is empty");
     // userapreference();
       	sortAndFilterConstants.todayPatient = true;
  		patientListModule_getTodaypatient(true);
       //patientListModule.getAllPatientList();
      // CalltodayspatentList("btnTodaypatient");
     }
   
 }
function getUserFilter_FailureCallback(response)
{
  kony.print("get filter service service failed");
}
//use preference service call back
function getUserPreferenceList()
{
  var inputData = {
     "userIdValue" : userInfo.userId, //userInfo.encrypteduserId, // 
    "start" : "0",
      "limit" : "0",
      "filterField" :"",
      "filterVal" :"",
      "sortField" : "",
      "sortOrder" : "",
      "timestamp" : userInfo.loginTime,
      "referKey" : "",
      "myPatients" : patientListConstants.myPatients,
      "weekRange" : patientListConstants.weekRange,
      "accessToken" : userInfo.accessToken,
      "facilityId" : userInfo.presentFacilityId,
     "userName":userInfo.userName,
     "location":""
    };

    com.healogics.mfutility.invokeIntegrationService(
     MF_SERVICECONSTANTS.ORCHESTRATION_SERVICE_NAME_ACTUAL ,
     // MF_SERVICECONSTANTS.SERVICE_NAME_FILTERPREFERENCE,
      MF_SERVICECONSTANTS.OPERATION_NAME_FILTERPREFERENCE ,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "facilityId": userInfo.selectedFacilityId,
       "userId": userInfo.userId,
       "userName":userInfo.userName,
      "deviceType" : "",
	   "deviceId" :"",
      },
      inputData,
      patientListModule_filterListSuccessCallback,
      patientListModule_filterListFailureCallback
    );
}

function  patientListModule_filterListSuccessCallback(response)
{
  	var patientListResponse = clone(response);
  	var filterKeys=[];
 	var tempObject=PATIENT_LIST_SERVICE_DATA;
  	var fliterarry=[];
  	var obj={};
  	filterKeys=Object.keys(response);
    
  	for(var i=0;i<filterKeys.length;i++)
    {
      var key=filterKeys[i];
      if(key==="lblappttype"||key==="lblcasemanager"||key==="lblweeks"||key==="lblwounds"|| key==="lblnextappt"||
         key==="lbltransferstatus"||key==="lblpatientmsrstatus"||key==="lblhealper"||key==="lblPrecautions"||key==="lblphysician")
      	{
   			var abc=response[filterKeys[i]];
      		var value="";
       			if(abc.length>0 && abc!==null)
                {
      				for(var a=0;a<abc.length;a++)
        				{
          					if(abc[a]!=="@" && abc[a]!=="null" && abc[a]!=="undefined")
            					{
              						value=value+abc[a]+"#@#"; 
								}
        				}
          		}
        	var index=value.lastIndexOf("@");
        	value=value.substring(0,index-1);
    		kony.print("value is"+value);
        	if(value!=="")
          		{
             		response[filterKeys[i]]=value;
          		}
        	else
                {
                  delete response[filterKeys[i]];
                }
  		}
      else
        {
          delete response[filterKeys[i]];
        }
    }
   	 kony.print("--obj--"+JSON.stringify(response));
  	 sortAndFilterConstants.patientListFilterObject = response;
  	 kony.store.setItem("patientListFilterObject",sortAndFilterConstants.patientListFilterObject);
  	
	 if(filterKeys.length===0)
       	{
          	sortAndFilterConstants.todayPatient = true;
        	//patientListConstants.filterData = PATIENT_LIST_SERVICE_DATA; 
       	}
     else
     	{
          	sortAndFilterConstants.todayPatient = false;
    		//sortAndFilterModule.filterDataBasedonParameters(tempObject,sortAndFilterConstants.patientListFilterObject);
   		}
   patientListModule.patientListSuccessCallback (patientListResponse);
}

//filter service failure call back
function  patientListModule_filterListFailureCallback(response)
{
  kony.print("get filter service service failed");
}


sortAndFilterModule.taskViewFilterParameters=function(){
  var filterKey = "";
  var filterValue = "";
  var arrSelectedChecks = popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeyValues;
  kony.print("-------arrSelectedChecks------- "+arrSelectedChecks);
  if(arrSelectedChecks===null){
    if(sortAndFilterConstants.selectedFilter==="lblpatientname"){
      delete sortAndFilterConstants.tasksFilterObject.lblpatientname;
    }else if(sortAndFilterConstants.selectedFilter==="lblwoundnumber"){
      delete sortAndFilterConstants.tasksFilterObject.lblwoundnumber;
    }else if(sortAndFilterConstants.selectedFilter==="lbltasks"){
      delete sortAndFilterConstants.tasksFilterObject.lbltasks;
    }else if(sortAndFilterConstants.selectedFilter==="lbldatecreated"){
      delete sortAndFilterConstants.tasksFilterObject.lbldatecreated;
    }else if(sortAndFilterConstants.selectedFilter==="lblduedate"){
      delete sortAndFilterConstants.tasksFilterObject.lblduedate;
    }else if(sortAndFilterConstants.selectedFilter==="lblnotes"){
      delete sortAndFilterConstants.tasksFilterObject.lblnotes;
    }else if(sortAndFilterConstants.selectedFilter==="lblstatus"){
      delete sortAndFilterConstants.tasksFilterObject.lblstatus;
    }else if(sortAndFilterConstants.selectedFilter==="lbldatecompleted"){
      delete sortAndFilterConstants.tasksFilterObject.lbldatecompleted;
    }
  }else{
    for(var i=0;i<arrSelectedChecks.length;i++){
      if(filterValue===""){
        filterValue= arrSelectedChecks[i][1];
      }else{
        filterValue= filterValue+"#@#"+arrSelectedChecks[i][1];
      }
    }
    kony.print("-------filterValue------- "+filterValue);
    if(sortAndFilterConstants.selectedFilter==="lblpatientname"){
      sortAndFilterConstants.tasksFilterObject.lblpatientname=filterValue;

    }else if(sortAndFilterConstants.selectedFilter==="lblwoundnumber"){
      sortAndFilterConstants.tasksFilterObject.lblwoundnumber=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lbltasks"){
      sortAndFilterConstants.tasksFilterObject.lbltasks=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lbldatecreated" || sortAndFilterConstants.selectedFilter==="lblduedate"){
      if(filterValue=="Today" || filterValue.indexOf("Today")>-1){
        filterValue= filterValue.replace("Today", com.healogics.utility.getTodaysDate("today")) ;
        kony.print("----filterValue in today-----"+filterValue);
      }
      if(filterValue=="Tomorrow" || filterValue.indexOf("Tomorrow")>-1){
        filterValue= filterValue.replace("Tomorrow", com.healogics.utility.getTodaysDate("tomorrow")) ;
        kony.print("----filterValue in tomorrow-----"+filterValue);
      }
      if(filterValue=="This Week" || filterValue.indexOf("This Week")>-1){
        filterValue= filterValue.replace("This Week", sortAndFilterConstants.arrThisWeek.join("#@#")) ;
        kony.print("----filterValue in This Week-----"+filterValue);
      }
      if(filterValue=="Next Week" || filterValue.indexOf("Next Week")>-1){
        filterValue= filterValue.replace("Next Week", sortAndFilterConstants.arrNextWeek.join("#@#")) ;
        kony.print("----filterValue in Next Week-----"+filterValue);
      }
      sortAndFilterConstants.tasksFilterObject[sortAndFilterConstants.selectedFilter] = filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblnotes"){
      sortAndFilterConstants.tasksFilterObject.lblnotes=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblstatus"){
      sortAndFilterConstants.tasksFilterObject.lblstatus=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lbldatecompleted"){
      if(filterValue=="Today"){
        kony.print("-----in filterValue today----");
        filterValue=com.healogics.utility.getTodaysDate("today");
        kony.print("----filterValue in today-----"+filterValue);
      }else if(filterValue=="Tomorrow"){
        kony.print("-----in filterValue tomorrow----");
        filterValue=com.healogics.utility.getTodaysDate("tomorrow");
        kony.print("----filterValue in tomorrow-----"+filterValue);
      }
      sortAndFilterConstants.tasksFilterObject.lbldatecompleted=filterValue;
    }
    if(filterValue==="Blank" || filterValue==="Not Scheduled"){
      filterValue = "";
    }
  } 

  kony.print("-------task view filterKey------- "+filterKey);
  kony.print("--------task view Filter Object-------"+JSON.stringify(sortAndFilterConstants.tasksFilterObject));

  sortAndFilterModule.filterDataBasedonParameters(taskListArr, sortAndFilterConstants.tasksFilterObject);

};

//On basis of filter object this method will Filter all the values from Data
sortAndFilterModule.filterDataBasedonParameters = function(arrList,arrParameters){

 
  if(currentfrm == null){
    currentfrm = kony.application.getCurrentForm();
  }
  
  kony.print("------ arrList ------ "+JSON.stringify(arrList));
  kony.print("------ arrList length ------ "+arrList.length);
  kony.print("------ arrParameters ------ "+JSON.stringify(arrParameters));  //lblnextappt
  patientListConstants.filterData = [];
  task_info.filterData=[];
  var appliedFilterParameters = Object.keys(arrParameters);
  kony.print("------ appliedFilterParameters ------ "+appliedFilterParameters);
  kony.print("------ appliedFilterParameters length ------ "+appliedFilterParameters.length);
  if(appliedFilterParameters.length===0){
    if(currentfrm.id=="frmViewTasksNew")
      task_info.filterData=taskListArr;//task list service data
    else
      patientListConstants.filterData = PATIENT_LIST_SERVICE_DATA;
  }
  else{
    for(var i=0;i<arrList.length;i++){
      var tempObject = arrList[i];
      var flag = false;
      kony.print("------ tempObject ------ "+JSON.stringify(tempObject));
      var filterVal = Object.keys(arrParameters);
      kony.print("------ filterVal ------ "+JSON.stringify(filterVal));

      for(var j=0;j<filterVal.length;j++) {
        kony.print("tempObject[filterVal[j]]"+tempObject[filterVal[j]]);
        kony.print("type of tempObject[filterVal[j]]"+typeof tempObject[filterVal[j]]);
        var str;
        if(typeof tempObject[filterVal[j]]==="object"){
          str = tempObject[filterVal[j]].text;
        }else{
          str = tempObject[filterVal[j]];
        }

        kony.print("------ str ------ "+JSON.stringify(str));
        var str1 = arrParameters[filterVal[j]];
        kony.print("------ str1 ------ "+JSON.stringify(str1));
        if(str1==="" || str1 === null || str1===undefined){
          continue;
        }
        //added
        if(str1==="Blank" || str1==="Not Scheduled" || str1.indexOf("Not Scheduled")>-1){
          var strTemp = str1.indexOf("Blank")>-1 ? "Blank" : "Not Scheduled";
          str1=str1.replace(strTemp,"");
        }
        var arr = str1.split("#@#");
        kony.print("------ arr ------ "+JSON.stringify(arr));      
        if(arr.length>1){

          if(filterVal[j] == "lblnextappt"){ //Split the time from date for Next Appointment 
            var value = str.split(" ") ;
            str = value[0];
          }

          if(com.healogics.utility.listContainsValue(str, arr)){
            kony.print("------ Contains ------ ");  
            flag = true;
          }else{
            kony.print("------ Not Contains ------ "); 
            flag = false;
            break;
          }

        } else {
          if(filterVal[j] == "lblnextappt"){ //Split the time from date for Next Appointment         
            kony.print("------in selectedFilter lblnextappt------");
            kony.print("str in selectedFilter--->"+str);
            var arrDateValue = str.split(" ") ;
            str = arrDateValue[0];
          }

          if(str===str1){
            flag = true;
          } else {
            flag = false;
            break;
          }

        }
      }
      kony.print("------ flag ------ "+flag);
      kony.print("current form "+currentfrm.id);
      if(currentfrm.id=="frmViewTasksNew"){
        if(flag===true || flag==="true") {
          if(com.healogics.utility.listContainsValue(tempObject, task_info.filterData)){
            kony.print("------ TRUE ------ ");
          }else {
            task_info.filterData.push(tempObject);
            kony.print("------ FALSE ------ ");
          }
        } 
      }
      else{
        if(flag===true || flag==="true") {
          if(com.healogics.utility.listContainsValue(tempObject, patientListConstants.filterData)){
            kony.print("------ TRUE ------ ");
          }else {
            patientListConstants.filterData.push(tempObject);
            kony.print("------ FALSE ------ ");
          }
        }
      }

    }
  }
  kony.print("------ patientListConstants.filterData ------ "+JSON.stringify(patientListConstants.filterData));
  kony.print("------ patientListConstants.filterData count ------ "+patientListConstants.filterData.length);
  kony.print("------tasklist filterdata-----"+JSON.stringify(task_info.filterData));
  kony.print("------tasklist filterdata count --------"+task_info.filterData.length);
  if(currentfrm.id=="frmViewTasksNew"){
    if(task_info.filterData.length===0 || task_info.filterData===null || task_info.filterData===[]){
      kony.print("------ Inside IF ----- ");
      if(sortAndFilterConstants.selectedFilter=="lbldatecompleted"){
        frmViewTasksNew.imgdown8.skin = "skinBtnFilter";
        delete sortAndFilterConstants.tasksFilterObject.lbldatecompleted;
        sortAndFilterModule.filterDataBasedonParameters(taskListArr,sortAndFilterConstants.tasksFilterObject);
      }else{
        taskListModule.showNoTaskListLabel();
      }
    } else{
      frmViewTasksNew.segviewtasks.setVisibility(true);
      frmViewTasksNew.lblEmptyList.setVisibility(false);
      paginate(task_info.filterData,"frmViewTasksNew");
    }
    frmViewTasksNew.forceLayout();  
  }
  else{
    if(patientListConstants.filterData.length===0 || patientListConstants.filterData===null || patientListConstants.filterData===[]){
      patientListModule.showNoPatientsLabel();
    }else{
      frmPatientList.segpatientlist.setVisibility(true);
      frmPatientList.lblNoPatients.setVisibility(false);
      paginate(patientListConstants.filterData,"frmPatientList");
    }
    frmPatientList.forceLayout();
  }
}

sortAndFilterModule.containsString=function(list,string){
  var flag=false;
  for(i = 0; i < list.length; i++){
    if(list[i][1] === string){
      flag=true;
    }
  }
  return flag;
};

//On Apply of Any Filter this method will create filter object to save all filter selected values 
sortAndFilterModule.prepareFilterParameters = function() {
  var filterKey = "";
  var filterValue = "";
  var arrSelectedChecks = popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeyValues;
  kony.print("-------arrSelectedChecks------- "+arrSelectedChecks);
  if(arrSelectedChecks===null){
    if(sortAndFilterConstants.selectedFilter==="lblpatientname"){
      delete sortAndFilterConstants.patientListFilterObject.lblpatientname;
    }else if(sortAndFilterConstants.selectedFilter==="lblcasemanager"){
      delete sortAndFilterConstants.patientListFilterObject.lblcasemanager;
    }else if(sortAndFilterConstants.selectedFilter==="lblphysician"){
      delete sortAndFilterConstants.patientListFilterObject.lblphysician;
    }else if(sortAndFilterConstants.selectedFilter==="lblnextappt"){
      delete sortAndFilterConstants.patientListFilterObject.lblnextappt;
    }else if(sortAndFilterConstants.selectedFilter==="lblappttype"){
      delete sortAndFilterConstants.patientListFilterObject.lblappttype;
    }else if(sortAndFilterConstants.selectedFilter==="lblwounds"){
      delete sortAndFilterConstants.patientListFilterObject.lblwounds;
    }else if(sortAndFilterConstants.selectedFilter==="lblweeks"){
      delete sortAndFilterConstants.patientListFilterObject.lblweeks;
    }else if(sortAndFilterConstants.selectedFilter==="lblhealper"){
      delete sortAndFilterConstants.patientListFilterObject.lblhealper;
    }else if(sortAndFilterConstants.selectedFilter==="lbltransferstatus"){
      delete sortAndFilterConstants.patientListFilterObject.lbltransferstatus;
    }else if(sortAndFilterConstants.selectedFilter==="lblPrecautions"){
      delete sortAndFilterConstants.patientListFilterObject.lblPrecautions;
    }
   // break;
  }else{
    for(var i=0;i<arrSelectedChecks.length;i++){
      if(filterValue===""){
        filterValue= arrSelectedChecks[i][1];
      }else{
        filterValue= filterValue+"#@#"+arrSelectedChecks[i][1];
      }
    }
    kony.print("-------filterValue------- "+filterValue);
    
    
    if(sortAndFilterConstants.selectedFilter==="lblpatientname"){
      sortAndFilterConstants.patientListFilterObject.lblpatientname=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblcasemanager"){
      sortAndFilterConstants.patientListFilterObject.lblcasemanager=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblphysician"){
      sortAndFilterConstants.patientListFilterObject.lblphysician=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblnextappt"){
      
      //sortAndFilterConstants.patientListFilterObject.lblnextapptoriginal = filterValue;
      
      if(filterValue=="Today" || filterValue.indexOf("Today")>-1){
        filterValue= filterValue.replace("Today", com.healogics.utility.getTodaysDate("today")) ;
        kony.print("----filterValue in today-----"+filterValue);
      }
      if(filterValue=="Tomorrow" || filterValue.indexOf("Tomorrow")>-1){
        filterValue= filterValue.replace("Tomorrow", com.healogics.utility.getTodaysDate("tomorrow")) ;
        kony.print("----filterValue in tomorrow-----"+filterValue);
      }
      if(filterValue=="This Week" || filterValue.indexOf("This Week")>-1){
        filterValue= filterValue.replace("This Week", sortAndFilterConstants.arrThisWeek.join("#@#")) ;
        kony.print("----filterValue in This Week-----"+filterValue);
      }
      if(filterValue=="Next Week" || filterValue.indexOf("Next Week")>-1){
        filterValue= filterValue.replace("Next Week", sortAndFilterConstants.arrNextWeek.join("#@#")) ;
        kony.print("----filterValue in Next Week-----"+filterValue);
      }

      sortAndFilterConstants.patientListFilterObject.lblnextappt=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblappttype"){
      sortAndFilterConstants.patientListFilterObject.lblappttype=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblwounds"){
      sortAndFilterConstants.patientListFilterObject.lblwounds=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblweeks"){
      sortAndFilterConstants.patientListFilterObject.lblweeks=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblhealper"){
      sortAndFilterConstants.patientListFilterObject.lblhealper=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lbltransferstatus"){
      sortAndFilterConstants.patientListFilterObject.lbltransferstatus=filterValue;
    }else if(sortAndFilterConstants.selectedFilter==="lblPrecautions"){
      sortAndFilterConstants.patientListFilterObject.lblPrecautions=filterValue;
    }
  } 

  kony.print("-------filterKey------- "+filterKey);
  kony.print("--------Filter Object-------"+JSON.stringify(sortAndFilterConstants.patientListFilterObject));

  //kony.store.setItem("sortAndFilterConstants", JSON.stringify(sortAndFilterConstants) );
  
  sortAndFilterModule.filterDataBasedonParameters(PATIENT_LIST_SERVICE_DATA, sortAndFilterConstants.patientListFilterObject);

};

sortAndFilterModule.sortSelectedColumnData = function(arr,selectedSortingType){
  kony.print("arr----->>>>"+JSON.stringify(arr));
  kony.print("selectedFilter----->>>>"+sortAndFilterConstants.selectedFilter);
  if(sortAndFilterConstants.selectedFilter=="lblnextappt"){
    arr = sortAndFilterModule.sortPatientListNextAppointmentDate(arr, selectedSortingType, false);
  }else if(sortAndFilterConstants.selectedFilter!="lblweeks" && sortAndFilterConstants.selectedFilter!="lblwounds" && sortAndFilterConstants.selectedFilter!="lblwoundnumber"){
    arr.sort(sortAndFilterModule.sortData(sortAndFilterConstants.selectedFilter, selectedSortingType, function(a){return a.toUpperCase();}));
  }else{ 
      arr.sort(
        function(a,b) {
          if(sortAndFilterConstants.selectedFilter == "lblweeks"){
            if ((a.lblweeks === 0) && (b.lblweeks === 0)){
              return b.lblweeks.localeCompare(a.value);
            }else{
              return b.lblweeks - a.lblweeks;
            }
          }else if(sortAndFilterConstants.selectedFilter == "lblwounds"){
            if ((a.lblwounds === 0) && (b.lblwounds === 0)){
              return b.lblwounds.localeCompare(a.value);
            }else{
              return b.lblwounds - a.lblwounds;
            }
          }else{
            if ((a.lblwoundnumber === 0) && (b.lblwoundnumber === 0)){
              return b.lblwoundnumber.localeCompare(a.value);
            }else{
              return parseInt(b.lblwoundnumber) - parseInt(a.lblwoundnumber);
            }
          }
        }
      );
    
    if(selectedSortingType === true){//Descending
      arr = arr;
    }else{ //Ascending
      arr.reverse();
    }
    kony.print("arr sort---->>>"+JSON.stringify(arr));
  }
  return arr;
};

sortAndFilterModule.sortPatientListNextAppointmentDate = function(arr, selectedSortingType, ignoreBlankInSorting){
  kony.print("selectedSortingType ---->>>"+JSON.stringify(selectedSortingType));
  kony.print("ignoreBlankInSorting ---->>>"+JSON.stringify(ignoreBlankInSorting));
  var arrNxtAptDts = [];
  var arrBlanks = [];
  var arrCancelled = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i].lblnextappt == ""){
      arrBlanks.push(i);
    }else if(arr[i].lblnextappt.indexOf("/")==-1 && arr[i].lblnextappt.indexOf(" ")==-1){
      arrCancelled.push(arr[i]);
    }else{
      arrNxtAptDts.push(arr[i]);
    }
  }
  kony.print("before sorting  arrStrings---->>>"+arrBlanks);
  arrBlanks.sort(function(a,b) {
    return a - b;
  });
  kony.print("after sorting  arrStrings---->>>"+arrBlanks);
  kony.print("before sorting  arrCancelled---->>>"+arrCancelled);
  arrCancelled.sort(sortAndFilterModule.sortData(sortAndFilterConstants.selectedFilter, selectedSortingType, function(a){if(a!=undefined) return a.toUpperCase();}));
  kony.print("after sorting  arrCancelled---->>>"+arrCancelled);
  kony.print("before sorting  arrNxtAptDts---->>>"+JSON.stringify(arrNxtAptDts));
  arrNxtAptDts.sort(function(a,b) {
    var aVal= moment(a.lblnextappt, "MM/DD/YYYYY hh:mm a").valueOf();
    var bVal= moment(b.lblnextappt, "MM/DD/YYYYY hh:mm a").valueOf();
    if ((a.lblnextappt === 0) && (b.lblnextappt === 0)){
      return b.lblnextappt.localeCompare(a.value);
    }else{
      return bVal - aVal;
    }
  });
  kony.print("after sorting  arrNxtAptDts---->>>"+JSON.stringify(arrNxtAptDts));
  var arrFinal =[];
  if(selectedSortingType === true){//Descending
    arrFinal = arrFinal.concat(arrNxtAptDts);
    arrFinal = arrFinal.concat(arrCancelled);
    for(var blankIndex = 0; blankIndex<arrBlanks.length; blankIndex++){
      arrFinal.push(arr[arrBlanks[blankIndex]]);
    }
  }else{ //Ascending
//     if(ignoreBlankInSorting!=null && ignoreBlankInSorting == true){
      
      arrFinal = arrFinal.concat(arrNxtAptDts.reverse());
      for(var blankIndex = 0; blankIndex<arrBlanks.length; blankIndex++){
        arrFinal.push(arr[arrBlanks[blankIndex]]);
      }
      arrFinal = arrFinal.concat(arrCancelled);
      
//     }else{
//       for(var blankIndex = 0; blankIndex<arrBlanks.length; blankIndex++){
//         arrFinal.push(arr[arrBlanks[blankIndex]]);
//       }
//       arrFinal = arrFinal.concat(arrCancelled);
//       arrFinal = arrFinal.concat(arrNxtAptDts.reverse());
//     }
    
  }
  kony.print("Final sort  arr---->>>"+JSON.stringify(arrFinal));
  return arrFinal;
};

//This Function will invoke when Any of the sorting button click of sorting popup
function frmPatientList_Shorting(eventobject){
  
    
  var currentFormName = kony.application.getCurrentForm().id;
  
  //Apply All Filter Here
  sortAndFilterModule.applySeletedFilter(currentFormName)
  

  var selectedSortingType;
  if(eventobject.id== "hboxascending"){//Ascending Order
    popupsortandfilter.hboxascending.skin = "skhboxbluebgSelected";
    popupsortandfilter.hboxdescending.skin = "skhboxbluebg";
    selectedSortingType =  false ;//false means"Ascending ";
  }
  else{//Descending Order
    popupsortandfilter.hboxascending.skin = "skhboxbluebg";
    popupsortandfilter.hboxdescending.skin = "skhboxbluebgSelected";
    selectedSortingType = true;  //true means "Descending ";
  }
  kony.print("selectedSortingType ->" + selectedSortingType);
  if(currentFormName === "frmPatientList"){
    kony.print("patientListConstants.filterData--->>"+JSON.stringify(patientListConstants.filterData));
    patient_data = sortAndFilterModule.sortSelectedColumnData(patientListConstants.filterData, selectedSortingType);
    kony.print("sortedList_data--->>"+patient_data);         
    paginate(patient_data,"frmPatientList");
    frmPatientList.forceLayout();
  }else if(currentFormName === "frmViewTasksNew"){

    kony.print("taskListArr in sort--->>"+JSON.stringify(taskListArr));
    patient_data = sortAndFilterModule.sortSelectedColumnData(taskListArr, selectedSortingType);
    kony.print(" task sortedList_data--->>"+patient_data);
    paginate(patient_data,"frmViewTasksNew");
    frmViewTasksNew.forceLayout();
  }
  
  popupsortandfilter.dismiss();
}

//This Function is called when popUp Close button clicked
function frmPatientList_FilterPopup_Close(){
  isSelectAllCheckMarkSelected = false ;
}

sortAndFilterModule.sortAndFilter_clearData = function(){
  popupsortandfilter.btnfilterclear.skin = "skngraybg";
  popupsortandfilter.hboxascending.skin = "skhboxbluebg";
  popupsortandfilter.hboxdescending.skin = "skhboxbluebg";
  popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys = [];//Uncheck all the values
  isSelectAllCheckMarkSelected = false ;
  if(currentfrm.id=="frmViewTasksNew"){
    if(sortAndFilterConstants.tasksFilterObject[sortAndFilterConstants.selectedFilter]==="Mark as Complete" && taskListArr.length===0){
      taskListModule.processTaskList(task_info.STATUS_ALL);
    }
    sortAndFilterModule.taskViewFilterParameters();
    frmViewTasksNew[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilter" ;  
  }else{
    sortAndFilterModule.prepareFilterParameters();
    frmPatientList[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilter" ;  
  }
  popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys = [];
};

sortAndFilterModule.applySeletedFilter = function(currentFormName){
  //Apply All Filter Here
  	popupsortandfilter.btnfilterclear.skin = "sknbtnbluebgrnd";
    if(popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys == undefined || popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys.indexOf("0") === undefined || popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeyValues===null ||
       popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys.length===0){
      //If No value is selected or All values are selected then no filter will Apply
      sortAndFilterModule.sortAndFilter_clearData();
    }else{
      if(currentFormName == "frmViewTasksNew"){
        sortAndFilterModule.taskViewFilterParameters();
        frmViewTasksNew[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilterHover"; 
      }else{
        sortAndFilterModule.prepareFilterParameters();
        frmPatientList[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilterHover";  
      }
    }
}; 


sortAndFilterModule.defaultToTodaysFilter = function(){
  currentfrm = frmPatientList;
  
  
  sortAndFilterConstants.selectedFilter = "lblnextappt";
  sortAndFilterConstants.selectedFilterID = "imgdown4";
  sortAndFilterModule.sortAndFilter_clearData();
  var objWeeks = sortAndFilterModule.getDatesOfThisWeekAndNextWeek();
  sortAndFilterConstants.arrThisWeek = objWeeks.thisWeek;
  sortAndFilterConstants.arrNextWeek = objWeeks.nextWeek;
  
  
  sortAndFilterConstants.tasksFilterObject = {};
  sortAndFilterConstants.patientListFilterObject = {
    "lblnextappt":com.healogics.utility.getTodaysDate("today")
  };

  sortAndFilterConstants.adminFilterObject = {};
  sortAndFilterConstants.arrPatientListFilterValues = 
    {
    "imgdown1":"lblpatientname",
    "imgdown2":"lblcasemanager",
    "imgdown3":"lblphysician",
    "imgdown4":"lblnextappt",
    "imgdown5":"lblappttype",
    "imgdown6":"lblwounds",
    "imgdown7":"lblweeks",
    "imgdown8":"lblhealper",
    "imgdown9":"lbltransferstatus",
    "imgdown10":"lblPrecautions"
  };
                           
  sortAndFilterConstants.arrTasksFilterValues = {
    "imgdown1":"lblpatientname",
    "imgdown2":"lblwoundnumber",
    "imgdown3":"lbltasks",
    "imgdown4":"lbldatecreated",
    "imgdown5":"lblduedate",
    "imgdown6":"lblnotes",
    "imgdown7":"lblstatus",
    "imgdown8":"lbldatecompleted"
  };
                           
  sortAndFilterConstants.arrAdminFilterValues = {
    "imgdown1":"lblcity",
    "imgdown2":"lblstate",
    "imgdown3":"lblzone",
    "imgdown4":"lblfacilitytype",
    "imagedown5":"huddleTool",
    "imagedown6":"photoMobile"
  };
  
  sortAndFilterConstants.adminSelectedSortingType = false;
  
  var eventobject = {};
  eventobject.id = "hboxascending";
  //frmPatientList_Shorting(eventobject);
  sortAndFilterModule.filterDataBasedonParameters(PATIENT_LIST_SERVICE_DATA, sortAndFilterConstants.patientListFilterObject);
  frmPatientList[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilterHover";
};

//This Function will invoke when Clear/Apply button click of sorting popup
function frmPatientList_FilterPopup_Clear_Apply(eventobject){
  kony.print("widget---12>"+eventobject.id);
  if(eventobject.id== "btnfilterclear"){//Clear selected value in selected Filter
    sortAndFilterModule.sortAndFilter_clearData();
    return;
  }
  else{
    
    sortAndFilterModule.applySeletedFilter(currentfrm.id);
     }
  createFilter();
  popupsortandfilter.dismiss();

}

sortAndFilterModule.checkObjTypeAndReturnPairValue = function(tempObject){
  var pairValue;
  if(typeof tempObject==="object"){
    pairValue = tempObject.text;
    kony.print("textttt "+pairValue);
  }
  else{
    pairValue = tempObject;
    kony.print("pair value "+pairValue);
  }
  return pairValue;
};

var currentfrm;
//frmPatientList show sortpopup and save all the related data that which filter is selected 
function frmPatientList_show_sortpopup (eventobject){
  searchPatient_closeSearchList();
  currentfrm=kony.application.getCurrentForm();
  //Clear shorting filter
  popupsortandfilter.hboxascending.skin = "skhboxbluebg";
  popupsortandfilter.hboxdescending.skin = "skhboxbluebg";
  //Clear shorting filter End----------------------
  if(currentfrm.id=="frmViewTasksNew"){
    sortAndFilterConstants.selectedFilter = sortAndFilterConstants.arrTasksFilterValues[eventobject.id];
  }else{
    sortAndFilterConstants.selectedFilter = sortAndFilterConstants.arrPatientListFilterValues[eventobject.id];
  }
  sortAndFilterConstants.selectedFilterID = eventobject.id;
  kony.print("selectedFilter-----"+ sortAndFilterConstants.selectedFilter);
  //Get and Set Master Data of Check Box Group-------------
  var arrPatientListSegData;
  if(currentfrm.id=="frmViewTasksNew"){
    arrPatientListSegData = clone(taskListArr);
  }else{
    arrPatientListSegData = clone(PATIENT_LIST_SERVICE_DATA);
  }
  arrPatientListSegData = sortAndFilterModule.sortSelectedColumnData(arrPatientListSegData, false);
  var arrCheckBoxValues = [["0","Select All"]];
  var arrCheckBoxAllPairOnlyValues = [];
  var arrCheckMarkedValues = [];
  var arrCheckMarkedKeys = [];
  var arrSelectedValues = [];
  var todayDate=com.healogics.utility.getTodaysDate("today");
  var tomorrowDate=com.healogics.utility.getTodaysDate("tomorrow");

  if(sortAndFilterConstants.selectedFilter ==  "lblnextappt" || sortAndFilterConstants.selectedFilter ==  "lbldatecreated" || sortAndFilterConstants.selectedFilter ==  "lblduedate"){
    var objWeeks = sortAndFilterModule.getDatesOfThisWeekAndNextWeek();
    sortAndFilterConstants.arrThisWeek = objWeeks.thisWeek;
    sortAndFilterConstants.arrNextWeek = objWeeks.nextWeek;
  }

  var tempFilterObject = (currentfrm.id=="frmViewTasksNew") ? clone(sortAndFilterConstants.tasksFilterObject) : clone(sortAndFilterConstants.patientListFilterObject) ;
  var tempFilterData = (currentfrm.id=="frmViewTasksNew") ? clone(task_info.filterData) : clone(patientListConstants.filterData) ;

  if(tempFilterObject[sortAndFilterConstants.selectedFilter] && tempFilterObject[sortAndFilterConstants.selectedFilter] !== undefined && tempFilterObject[sortAndFilterConstants.selectedFilter] !== null){
    arrSelectedValues = tempFilterObject[sortAndFilterConstants.selectedFilter];
    kony.print("arrSelectedValues-----"+ arrSelectedValues);
    kony.print("tempFilterObject[sortAndFilterConstants.selectedFilter]-----"+ tempFilterObject[sortAndFilterConstants.selectedFilter]);
    arrCheckMarkedValues =  arrSelectedValues.split("#@#");
    kony.print("arrCheckMarkedValues-----"+ arrCheckMarkedValues);
  }else{
    if(Object.keys(tempFilterObject).length>0){
      for(var key=0; key< tempFilterData.length; key++){
        var keyValue ;
        if(tempFilterData[key][sortAndFilterConstants.selectedFilter] != undefined && tempFilterData[key][sortAndFilterConstants.selectedFilter] != null){
          if((typeof tempFilterData[key][sortAndFilterConstants.selectedFilter] == 'string')){
            var blankValue =  (sortAndFilterConstants.selectedFilter ==  "lblnextappt") ? "Not Scheduled" : "Blank" ;
            var value = tempFilterData[key][sortAndFilterConstants.selectedFilter];
            if(sortAndFilterConstants.selectedFilter ==  "lblnextappt" || sortAndFilterConstants.selectedFilter ==  "lbldatecreated" || sortAndFilterConstants.selectedFilter ==  "lblduedate"){
              value = value.split(" ")[0];
              if(value == todayDate){
                value = todayDate;
              }else if(value == tomorrowDate){
                value = tomorrowDate;
              }else 
                if(sortAndFilterModule.checkForTodayTomorrowInThisWeekAndNextWeek(sortAndFilterConstants.arrThisWeek,value)){
                  value = sortAndFilterConstants.arrThisWeek;
                }else if(sortAndFilterModule.checkForTodayTomorrowInThisWeekAndNextWeek(sortAndFilterConstants.arrNextWeek,value)){
                  value = sortAndFilterConstants.arrNextWeek;
                }else{
                  kony.print("----- Normal date -----");
                }
            }
            keyValue = (tempFilterData[key][sortAndFilterConstants.selectedFilter] == "") ? blankValue : value;
          }else{
            keyValue = tempFilterData[key][sortAndFilterConstants.selectedFilter].text;
          }
          if(arrCheckMarkedValues.indexOf(keyValue) == -1){
            if((typeof keyValue == 'string')){
              arrCheckMarkedValues.push(keyValue);
            }else{
              arrCheckMarkedValues = arrCheckMarkedValues.concat(keyValue);
            }
          }
        }
      }
      kony.print("arrCheckMarkedValues of filtered data -----"+ arrCheckMarkedValues);
    }
  }
  if(arrPatientListSegData === null ){
    alert("No data to filter!");
    return;
  }
  if(arrPatientListSegData.length > 0){
    for(i=0;i<arrPatientListSegData.length;i++)
    {
      var  arrCheckBoxPair = [];
      var pairKey = (i+1).toString();
      arrCheckBoxPair.push(pairKey); //Push Pair Key
      var tempSegData = arrPatientListSegData[i];
      var pairValue ;
      var weekSequence ;
      if(sortAndFilterConstants.selectedFilter ==  "lblnextappt" || sortAndFilterConstants.selectedFilter ==  "lbldatecreated" || sortAndFilterConstants.selectedFilter ==  "lblduedate"){ 
        var value;//"lblnextappt"){//Split the time from date for Next Appointment 
        if(arrPatientListSegData[i] !== ""){
          value = arrPatientListSegData[i][sortAndFilterConstants.selectedFilter].split(" ") ;
          if(value.length > 1){
            pairValue = value [0];
          }else{
            pairValue = sortAndFilterModule.checkObjTypeAndReturnPairValue(arrPatientListSegData[i][sortAndFilterConstants.selectedFilter]);
          }
          weekSequence = sortAndFilterModule.CheckDateInWeeks(pairValue);
        }else{
          pairValue = "Not Scheduled";
        }
      }else{
        pairValue = sortAndFilterModule.checkObjTypeAndReturnPairValue(arrPatientListSegData[i][sortAndFilterConstants.selectedFilter]);
      }
      if(pairValue === todayDate){
        pairValue = "Today";
        arrCheckBoxPair[0]="today";
        pairKey="today";
      }else if(pairValue===tomorrowDate){
        pairValue = "Tomorrow";
        arrCheckBoxPair[0]="tomorrow";
        pairKey="tomorrow";
      }

      if(pairValue === ""){
        pairValue = (sortAndFilterConstants.selectedFilter == "lblnextappt") ? "Not Scheduled" : "Blank";
        arrCheckBoxPair[0]="blank";
        pairKey="blank";
      }
      if(weekSequence == "This Week" || weekSequence == "Next Week"){
        pairValue = weekSequence;
        arrCheckBoxPair[0]=weekSequence;
        pairKey=weekSequence;
      }          
      arrCheckBoxPair.push(pairValue);
      kony.print("arrCheckBoxPair----->>>>>"+arrCheckBoxPair);
      //Push Pair Value
      //Check For Duplicate value in Arrray
      if(arrCheckBoxAllPairOnlyValues.indexOf(pairValue) == -1  ){
        arrCheckBoxValues.push(arrCheckBoxPair);
        arrCheckBoxAllPairOnlyValues.push(pairValue);
        if(pairValue == "Today"){
          var thisWeek = [];
          thisWeek.push("This Week");
          thisWeek.push("This Week");
          arrCheckBoxValues.push(thisWeek);
          if(arrCheckBoxAllPairOnlyValues.indexOf("This Week") == -1  ){
            arrCheckBoxAllPairOnlyValues.push("This Week");
          }
        }else if(pairValue == "Tomorrow"){
          var week = [];
          if(sortAndFilterConstants.arrThisWeek.indexOf(com.healogics.utility.getTodaysDate("tomorrow")) > -1){
            week.push("This Week");
            week.push("This Week");
            if(arrCheckBoxAllPairOnlyValues.indexOf("This Week") == -1  ){
              arrCheckBoxAllPairOnlyValues.push("This Week");
              arrCheckBoxValues.push(week);
            }
          }else if(sortAndFilterConstants.arrNextWeek.indexOf(com.healogics.utility.getTodaysDate("tomorrow")) > -1){
            week.push("Next Week");
            week.push("Next Week");
            if(arrCheckBoxAllPairOnlyValues.indexOf("Next Week") == -1  ){
              arrCheckBoxAllPairOnlyValues.push("Next Week");
              arrCheckBoxValues.push(week);
            }
          }

        }
        //if arrCheckMarkedValues have values then get the key of those values so we can check mark those items 
        if(arrCheckMarkedValues.length >0){
          popupsortandfilter.btnfilterclear.skin = "sknbtnbluebgrnd";
          if(pairValue === "Today"){
            pairValue = com.healogics.utility.getTodaysDate("today");
          }else if(pairValue === "Tomorrow"){
            pairValue = com.healogics.utility.getTodaysDate("tomorrow");
          }else if(pairValue === "This Week"){
            pairValue = sortAndFilterConstants.arrThisWeek;
          }else if(pairValue === "Next Week"){
            pairValue = sortAndFilterConstants.arrNextWeek;
          }   
          var pairCheck = arrCheckMarkedValues.indexOf(pairValue)>-1 ? true : false;
          var checkFlag = (typeof pairValue == 'string') ?  pairCheck : sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, pairValue);
          if(checkFlag){//Search the value 
            if(pairKey === "today" || pairKey === "tomorrow"){
              var todayDay = moment(todayDate);
              kony.print("todayDay----->>>>>"+todayDay);
              var dayOfWeek = todayDay.day();
              kony.print("dow----->>>>>"+dayOfWeek);
              var weekCheckFlag ;
              if(pairKey == "today"){
                weekCheckFlag =  (sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrThisWeek));
              }else{
                if(dayOfWeek == 6){
                  weekCheckFlag =  (sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrNextWeek));
                }else{
                  weekCheckFlag =  (sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrThisWeek)); 
                }
              }
              var daySelectFlag = sortAndFilterModule.checkForTodayTomorrowInThisWeekAndNextWeek(arrCheckMarkedValues,pairValue);
              if(weekCheckFlag){
                var weekFlag;
                var arr;
                if(sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrThisWeek) && !sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrNextWeek)){
                  weekFlag = "This Week" ;
                  arr =  sortAndFilterConstants.arrThisWeek ;
                }else if(!sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrThisWeek) && sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrNextWeek)){
                  weekFlag = "Next Week" ;
                  arr =  sortAndFilterConstants.arrNextWeek ;
                }else if(sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrThisWeek) && sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrNextWeek)){
                  weekFlag = "This Week,Next Week" ;
                  arr =  sortAndFilterConstants.arrThisWeek.concat(sortAndFilterConstants.arrNextWeek) ;
                }else{
                  kony.print("----- This Week or Next week not selected for filter -----");
                }

                if(sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, arr)){
                  if(weekFlag == "This Week,Next Week"){
                    if(arrCheckMarkedKeys.indexOf("This Week") == -1){
                      arrCheckMarkedKeys.push("This Week");
                    }
                    if(arrCheckMarkedKeys.indexOf("Next Week") == -1){
                      arrCheckMarkedKeys.push("Next Week");
                    }
                  }else{
                    if(arrCheckMarkedKeys.indexOf(weekFlag) == -1){
                      arrCheckMarkedKeys.push(weekFlag);
                    }
                  }
                }
                if(daySelectFlag > 1){
                  if(arrCheckMarkedKeys.indexOf(pairKey) == -1){
                    arrCheckMarkedKeys.push(pairKey);
                  }
                  if(arrCheckMarkedKeys.indexOf(weekFlag) == -1 && weekFlag != "This Week,Next Week"){
                    arrCheckMarkedKeys.push(weekFlag);
                  }
                }
              }else{
                if(arrCheckMarkedKeys.indexOf(pairKey) == -1){
                  arrCheckMarkedKeys.push(pairKey);
                }
              }
            }else if(pairKey == "This Week" && sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrThisWeek) && arrCheckMarkedKeys.indexOf(pairKey) == -1){
              if(arrCheckMarkedKeys.indexOf("This Week") == -1  ){
                arrCheckMarkedKeys.push(pairKey);
              }
            }else if(pairKey == "Next Week" && sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedValues, sortAndFilterConstants.arrNextWeek) && arrCheckMarkedKeys.indexOf(pairKey) == -1){
              if(arrCheckMarkedKeys.indexOf("Next Week") == -1  ){
                arrCheckMarkedKeys.push(pairKey);
              }
            }else{
              if(arrCheckMarkedKeys.indexOf(pairKey) == -1){
                arrCheckMarkedKeys.push(pairKey);
              }
            }
            kony.print("arrCheckMarkedKeys--->"+arrCheckMarkedKeys);
            if(pairKey == "0"){//Check for Select all index is selected or not
              isSelectAllCheckMarkSelected = true;
            }
          }
        }
      }

    }
    var arr=[];
    var len=arrCheckBoxValues.length;
    var flag=0;
    arr.push(arrCheckBoxValues[0]);

    if(sortAndFilterModule.containsString(arrCheckBoxValues,"Today")){
      arr.push(["today","Today"]);
    }
    if(sortAndFilterModule.containsString(arrCheckBoxValues,"Tomorrow")){
      arr.push(["tomorrow","Tomorrow"]);
    }
    if(sortAndFilterModule.containsString(arrCheckBoxValues,"This Week")){
      arr.push(["This Week","This Week"]);
    }
    if(sortAndFilterModule.containsString(arrCheckBoxValues,"Next Week")){
      arr.push(["Next Week","Next Week"]);
    }
    if(sortAndFilterModule.containsString(arrCheckBoxValues,"Not Scheduled")){
      arr.push(["blank","Not Scheduled"]);
    }

    for(i=1;i<len;i++){
      if(arrCheckBoxValues[i][1] != "Today" && arrCheckBoxValues[i][1] != "Tomorrow" && arrCheckBoxValues[i][1] !="Select All" && arrCheckBoxValues[i][1] !="This Week" && arrCheckBoxValues[i][1] !="Next Week" && arrCheckBoxValues[i][1] !="Not Scheduled"){
        arr.push(arrCheckBoxValues[i]);
      }
    }
    arrCheckBoxValues=arr;
    kony.print("arr---->"+arr);
    popupsortandfilter.CheckBoxGroupFilterPopUp.masterData = arrCheckBoxValues;
    popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys = [];
    
    var tempArr = [];
    for(var temp=1; temp<arr.length; temp++){
      tempArr.push(arr[temp][0]);
    }
    var equalFlag = sortAndFilterModule.checkSubArrInMainArr(arrCheckMarkedKeys, tempArr);
    if(equalFlag){
      arrCheckMarkedKeys.push("0");
      isSelectAllCheckMarkSelected = true;
    }

    kony.print("arrCheckMarkedKeys in show popup------>"+arrCheckMarkedKeys);
    if(arrCheckMarkedKeys.length >0){
      popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys = arrCheckMarkedKeys;///Check previous selcted  values
    }
    //Get and Set Master Data of Check Box Group End----------------------
    var popupAnchor ;
    if(sortAndFilterConstants.selectedFilter == "lbltransferstatus"){
      popupAnchor = "left";
    }else{
      popupAnchor = "right";
    }
    if(currentfrm.id=="frmViewTasksNew"){
      popupsortandfilter.setContext({
        widget:frmViewTasksNew[eventobject.id],
        anchor:popupAnchor
      });
      popupsortandfilter.show();
      frmViewTasksNew.forceLayout();
    }else{
      popupsortandfilter.setContext({
        widget:frmPatientList[eventobject.id],
        anchor:popupAnchor
      });
      popupsortandfilter.show();
      frmPatientList.forceLayout();
    }
  }
}

//Shorting Method--------------
sortAndFilterModule.sortData = function(field, reverse, primer){
  var key = primer ? function(x) {
    if(typeof x[field]==="object"){
      return primer(x[field]["text"])}else{return primer(x[field])}} : function(x) {if(typeof x[field]==="object") return  x[field]["text"] else return x[field]
        };
  reverse = !reverse ? 1 : -1;
  // return function (a, b) {
  //   return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  // };
 // Jacquline's modified code to sort the tasklist for column duedate,datecreated and datecompleted
  if(field=="lblduedate"  || field=="lbldatecreated" ||field=="lbldatecompleted")
    {
      return function (a, b) {
          //a = a.split('/').reverse().join('');
       // b = b.split('/').reverse().join('');
       // moment(taskRecord.dueDate +" 23:59:59").format("MM/DD/YYYY")
        var key1=moment(key(a)).format("DD/MM/YYYY");
        var key2=moment(key(b)).format("DD/MM/YYYY");
        key1=key1.split('/').reverse().join('');
        key2=key2.split('/').reverse().join('');
       // var date1=key(a).
        
          return a=key(a), b = key(b),reverse*( key1 > key2 ? 1 : key1< key2 ? -1 : 0);
  //  return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  };
    }
  else
    {
        return function (a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  };
    }

};

//this method is called on selection of popup checkbox
function popupFilter_checkBox_onSelection(eventobject){

  kony.print("eventobject--->" + eventobject);

  var arrSelectedKeys = eventobject.selectedKeys ;
  kony.print("arrSelectedKeys --" + arrSelectedKeys);
  kony.print("arrSelectedvalues--"+eventobject.selectedKeyValues);
  kony.print("eventobject masterdata-->" + eventobject.masterData);
  kony.print("isSelectAllCheckMarkSelected -->" + isSelectAllCheckMarkSelected);

  if(isSelectAllCheckMarkSelected === true){
    if(arrSelectedKeys.indexOf("0") == ARRAY_SEARCH_NOT_FOUND_INDEX){//uncheck All the check boxes
      isSelectAllCheckMarkSelected = false;
      popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys  = [];
      return;
    }else{//uncheck selcet all option as some other value is unchecked
      var index = arrSelectedKeys.indexOf("0");
      if (index > -1) {
        kony.print("arrSelectedKeys --" + arrSelectedKeys);
        arrSelectedKeys.splice(index, 1);
        kony.print("arrSelectedKeys --" + arrSelectedKeys);
        isSelectAllCheckMarkSelected = false;
        popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys  = arrSelectedKeys;
        return;
      }
    }
  }
  if (popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys!=null && 
      ((popupsortandfilter.CheckBoxGroupFilterPopUp.masterData.length-1 == popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys.length) ||
       (eventobject.selectedKeyValues[0][0]==0)
      ) 
     ){//If Select All is checked then select All option OR  If All values are selected except Select All option than also check Select All option
    var arrAllKeys = [];
    for(i =0; i<eventobject.masterData.length ; i++){
      var pair = eventobject.masterData[i];
      arrAllKeys.push(pair[0]);
    }
    isSelectAllCheckMarkSelected = true;
    kony.print("arrAllKeys---"+arrAllKeys);
    popupsortandfilter.CheckBoxGroupFilterPopUp.selectedKeys  = arrAllKeys;
  }
}

//Clear All filter--Clear Filter Object and Reload original Patientlist values
function frmPatientList_Clear_All_filter(){
  
  searchPatient_closeSearchList();
  sortAndFilterConstants.patientListFilterObject = {};
  
  patientListConstants.filterData = PATIENT_LIST_SERVICE_DATA; 
  isSelectAllCheckMarkSelected = false ;
  frmPatientList.imgdown1.skin = "skinBtnFilter";
  frmPatientList.imgdown2.skin = "skinBtnFilter";
  frmPatientList.imgdown3.skin = "skinBtnFilter";
  frmPatientList.imgdown4.skin = "skinBtnFilter";
  frmPatientList.imgdown5.skin = "skinBtnFilter";
  frmPatientList.imgdown6.skin = "skinBtnFilter";
  frmPatientList.imgdown7.skin = "skinBtnFilter";
  frmPatientList.imgdown8.skin = "skinBtnFilter";
  frmPatientList.imgdown9.skin = "skinBtnFilter";
  frmPatientList.imgdown10.skin = "skinBtnFilter";
  //kony.store.removeItem("sortAndFilterConstants");
  
  paginate(PATIENT_LIST_SERVICE_DATA,"frmPatientList");
}


function frmViewTasksNew_Clear_All_filter(){
  sortAndFilterConstants.tasksFilterObject = {};
  task_info.filterData = taskListArr;
  isSelectAllCheckMarkSelected = false ;
  frmViewTasksNew.imgdown1.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown2.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown3.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown4.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown5.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown7.skin = "skinBtnFilter";
  frmViewTasksNew.imgdown8.skin = "skinBtnFilter";
  
  paginate(taskListArr,"frmViewTasksNew");
}

sortAndFilterModule.getDatesOfThisWeekAndNextWeek = function(){
  var todayDate = new Date();
  var arrThisWeek = [];
  var arrNextWeek = [];
  for(var i=1;i<=14;i++){
    var thisWeekStart = moment(todayDate).day(i);
    var formattedDate = moment(thisWeekStart).format("MM/DD/YYYY");
    if(i<=7){
      arrThisWeek.push(formattedDate);
    }else{
      arrNextWeek.push(formattedDate);
    }
  }
  kony.print("arrThisWeek--->>>"+arrThisWeek);
  kony.print("arrNextWeek--->>>"+arrNextWeek);

  var objWeeks = {};
  objWeeks.thisWeek = arrThisWeek;
  objWeeks.nextWeek = arrNextWeek;
  return objWeeks;
};

sortAndFilterModule.CheckDateInWeeks = function(apptDate){
  var weekSequence ;
  var todayDate=com.healogics.utility.getTodaysDate("today");
  var tomorrowDate=com.healogics.utility.getTodaysDate("tomorrow");
  if(apptDate == todayDate){
    weekSequence = "Today";
  }else if(apptDate == tomorrowDate){
    weekSequence = "Tomorrow";
  }else if(sortAndFilterConstants.arrThisWeek.indexOf(apptDate)>-1){
    weekSequence = "This Week";
  }else if(sortAndFilterConstants.arrNextWeek.indexOf(apptDate)>-1){
    weekSequence = "Next Week";
  }else{
    weekSequence = "";
  }
  kony.print("weekSequence--->>>"+weekSequence);
  return weekSequence;
};

sortAndFilterModule.checkSubArrInMainArr = function(arr1,arr2){
  var isSame = false;
  var found = arr2.every(function (a) {
    var i = arr1.indexOf(a);
    if (i>-1) {
      return true;
    }
  });
  return found;
};

sortAndFilterModule.checkForTodayTomorrowInThisWeekAndNextWeek = function(arr,date){
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]==date) {
      results.push(arr[i]);
    }
  }
  return results.length;
};

//jack's code
function createFilter()
{
 // kony.print("--selected filter--"+sortAndFilterConstants.selectedFilter);
 
//   var msr={};
//   msr="MSR1#MSR2#MSR3#MSR4";
  if(sortAndFilterConstants.selectedFilter==="lblphysician")
    {
      filter_name="physician";
    }
  else if(sortAndFilterConstants.selectedFilter==="lblcasemanager")
    {
      filter_name="case_manager";
    }
  else if(sortAndFilterConstants.selectedFilter==="lblnextappt")
    {
      filter_name="next_appointment";
    }
  else if(sortAndFilterConstants.selectedFilter==="lblappttype")
    {
      filter_name="appointment_type";
    }
  else if(sortAndFilterConstants.selectedFilter==="lblwounds")
    {
      filter_name="wounds";
    }
  else if(sortAndFilterConstants.selectedFilter==="lblweeks")
    {
      filter_name="weeks";
    }
  else if(sortAndFilterConstants.selectedFilter==="lblhealper")
    {
      filter_name="advanced_procedures";
    }
  else if(sortAndFilterConstants.selectedFilter==="lblPrecautions")
    {
      filter_name="transmission_precautions";
    }
  else if(sortAndFilterConstants.selectedFilter==="lbltransferstatus")
    {
      filter_name="transfer_status";
    }
// var filter_name=sortAndFilterConstants.selectedFilter.substr(3);
 // kony.print("--filter--"+filter_name);
//  kony.print("--ble book id--"+userInfo.presentFacilitybluebookid);
  var inputData = {
    "username":userInfo.userName,
    "bluebook_id":userInfo.presentFacilitybluebookid,
   "facility_id":userInfo.selectedFacilityId,
    "location_code":"",
    "user_id":userInfo.userId,
    "filterName":filter_name,
    "physician_list":(sortAndFilterConstants.patientListFilterObject.lblphysician===undefined?sortAndFilterConstants.patientListFilterObject.lblphysician="":sortAndFilterConstants.patientListFilterObject.lblphysician),
    "nextAppointment_list":(sortAndFilterConstants.patientListFilterObject.lblnextappt===undefined?sortAndFilterConstants.patientListFilterObject.lblnextappt="":sortAndFilterConstants.patientListFilterObject.lblnextappt),
    "appointmentType_list":(sortAndFilterConstants.patientListFilterObject.lblappttype===undefined?sortAndFilterConstants.patientListFilterObject.lblappttype="":sortAndFilterConstants.patientListFilterObject.lblappttype),
    "wounds_list":(sortAndFilterConstants.patientListFilterObject.lblwounds===undefined?sortAndFilterConstants.patientListFilterObject.lblwounds="":sortAndFilterConstants.patientListFilterObject.lblwounds),
    "caseManager_list":(sortAndFilterConstants.patientListFilterObject.lblcasemanager===undefined?sortAndFilterConstants.patientListFilterObject.lblcasemanager="":sortAndFilterConstants.patientListFilterObject.lblcasemanager),
    "weeks_list":(sortAndFilterConstants.patientListFilterObject.lblweeks===undefined?sortAndFilterConstants.patientListFilterObject.lblweeks="":sortAndFilterConstants.patientListFilterObject.lblweeks),
    "transferStatus_list":(sortAndFilterConstants.patientListFilterObject.lbltransferstatus===undefined?sortAndFilterConstants.patientListFilterObject.lbltransferstatus="":sortAndFilterConstants.patientListFilterObject.lbltransferstatus),
    "advancedProcedure_list":(sortAndFilterConstants.patientListFilterObject.lblhealper===undefined?sortAndFilterConstants.patientListFilterObject.lblhealper="":sortAndFilterConstants.patientListFilterObject.lblhealper),
    "my_patients_flag":"true",
    "msrDashBoard_list":msr,
    "transmission_based_procedures_list":(sortAndFilterConstants.patientListFilterObject.lblPrecautions===undefined?sortAndFilterConstants.patientListFilterObject.lblPrecautions="":sortAndFilterConstants.patientListFilterObject.lblPrecautions)
    };
    kony.print("input to filter"+JSON.stringify(inputData));
    com.healogics.mfutility.invokeIntegrationService(
      MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
      MF_SERVICECONSTANTS.OPERATION_NAME_USERPREFERENCE,
      {
        "Content-Type":"application/json",
        "Authorization" : userInfo.headerAccessToken,
        "userName":"",
       "deviceType" :"",
         "deviceId" :"",
         "facilityId": userInfo.selectedFacilityId,
       
      },
      inputData,
      patientListModule_createfilterListSuccessCallback,
      patientListModule_createfilterListFailureCallback
    );
}
function  patientListModule_createfilterListSuccessCallback(response)
{
  kony.print("Filter service call back"+JSON.stringify(response));
  
   // kony.print(" jack test Patient List create Success Callback Response:::"+JSON.stringify(response));
// sortAndFilterModule.filterDataBasedonParameters(PATIENT_LIST_SERVICE_DATA, sortAndFilterConstants.patientListFilterObject);
  // frmPatientList.show();
  
}
//filter service failure call back
function  patientListModule_createfilterListFailureCallback(response)
{
  kony.print("filter create service service failed");
}