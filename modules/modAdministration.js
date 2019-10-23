
var  ARRAY_SEARCH_NOT_FOUND_INDEX = -1;
var  FACILITY_LIST_SERVICE_DATA = [];
var  FACILITY_LIST_ALPHABTICAL_DATA = []; 
var adminsavedata = [];
var adminsavedata1 = [];
var paginationsData = [];
var selectedRow = [];
var selectedRowData = [];
var	popupselectedRowData = [];
var popupSaveData = [];
var flag1 = "false";
var updateRecordData = [];
glbStartingRecord = "";
glbEndingRecord = "";
var startingIndex1 ;
var endingIndex1;
var noOfRecords;
var facilityListCollTotal;
var facilityList; 
var count;
var pagenumber;
var totalRecords;
var lastDataCount=0;
var lastid= "btnalphabetall";
var facilityListModule = {};

facilityListModule.getFilteredFacilityList = function(){
  var inputData = {
    "userId" : userInfo.userId,
    "accessToken" : userInfo.accessToken,
    "facilityId" : userInfo.presentFacilityId
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL,
    MF_SERVICECONSTANTS.OPERATION_NAME_ADMINFACILITYLIST,
    {
      "Content-Type":"application/json",
      "Authorization" : userInfo.headerAccessToken,
      "userName" : userInfo.userName,
      "facilityId" : userInfo.presentFacilityId,
	  "userId" : userInfo.userId,
	  "deviceType" : userInfo.deviceType,
	  "deviceId" : userInfo.sessionId
    },
    inputData,
    facilityListModule.facilityListSuccessCallback,
    facilityListModule.facilityListFailureCallback
  );

};


//Success callback for facilityList
facilityListModule.facilityListSuccessCallback = function(response){
  kony.print("Facility List Success Callback Response:::"+JSON.stringify(response));
  if(response!==null && response.opstatus === 0 && response.statuscode == "200"){
    userInfo.loginTime = (userInfo.loginTime!=null && userInfo.loginTime!="")? userInfo.loginTime : response.timestamp;
    kony.print("-------facilitylist timestamp-------");
    if(response.facilityList!==undefined  && response.facilityList.length>0){
      facilityListConstants.adminFacilityList = response.facilityList;
      kony.print("Facility List Success Callback Response:::"+JSON.stringify(response.facilityList));
    }
    else{
      kony.print("-------facilitylist empty-------");
    }
  } 
  facilityList = response.facilityList;
  facilityList.sort(sort_by("name", false, function(a){return a.toUpperCase()}));
  glbStartingRecord=0;
  glbEndingRecord=40;
  var facilityListSegArr = [];
  var facilityListDataArr = [];
  FACILITY_LIST_SERVICE_DATA = [];
  facilityListConstants.sortColumn = "name";
  facilityListConstants.sortOrder = "a";

  if(facilityList!==null  &&  facilityList !== undefined && facilityList.length > 0)
  {
    for(var i in facilityList){
      var tempRecord = {
        "lblline": "l",       
        "lblline2": "l",
        "lblline3": "l",
        "lblline4": "l",
        "lblline5": "l",
        "lblline6": "l",
        "lblline7": "l",
        "lblline9": "l"
      }; 
      tempRecord["lblfacilityname"] = facilityList[i]["name"];
      tempRecord["lblfacilityid"] = facilityList[i]["facilityId"];
      tempRecord["lblcity"] = facilityList[i]["city"];
      tempRecord["lblstate"]= facilityList[i]["state"];// "None";

      tempRecord["lblzone"] = facilityList[i]["zone"];
      tempRecord["lblbluebookid"] = facilityList[i]["blueBookId"];
      tempRecord["lblfacilitytype"] = facilityList[i]["facilityType"];
      tempRecord["lbllineseperator"]={text:"",isVisible:true};
      var objFacilityScreens = facilityList[i]["facilityScreens"];
      if(objFacilityScreens==="" || objFacilityScreens===undefined || objFacilityScreens.length===undefined || objFacilityScreens.length===0){
        tempRecord["btncheckbox1"] = {skin:"sknbtnuncheck",hoverSkin:"skbtntranshover"};
        tempRecord["btncheckbox2"] = {skin:"sknbtnuncheck",hoverSkin:"skbtntranshover"};
        tempRecord["huddleTool"] = "Unselected";
        tempRecord["photoMobile"] = "Unselected";

      }else{
        kony.print("---objFacilityScreens----"+JSON.stringify(objFacilityScreens));
        for(var j=0;j<objFacilityScreens.length;j++){
          var obj = objFacilityScreens[j];
          kony.print("---obj----"+JSON.stringify(obj));
          var screenId = obj.screenId;
          var enableFlag = obj.enableFlag;
          if(screenId==="1"){
            tempRecord["photoMobile"] = (enableFlag === "true" || enableFlag === true)? "Selected" : "Unselected";
            tempRecord["btncheckbox2"] = (enableFlag === "true" || enableFlag === true) ? {skin:"sknbtncheck",hoverSkin:"skbtntranshover"} : {skin:"sknbtnuncheck",hoverSkin:"skbtntranshover"};
          }else{
            tempRecord["huddleTool"] = (enableFlag === "true" || enableFlag === true)? "Selected" : "Unselected";
            tempRecord["btncheckbox1"] = (enableFlag === "true" || enableFlag === true) ? {skin:"sknbtncheck",hoverSkin:"skbtntranshover"} : {skin:"sknbtnuncheck",hoverSkin:"skbtntranshover"};
          }
        } 

      }
      FACILITY_LIST_SERVICE_DATA.push(tempRecord);
    } 

    totalRecords = FACILITY_LIST_SERVICE_DATA.length;
    facilityListConstants.filterData = FACILITY_LIST_SERVICE_DATA;
    kony.print("---noofpages----"+Math.ceil(totalRecords/40));
    showHidePageButtons(totalRecords);
    FACILITY_LIST_PAGE_DATA = paginationFacilityList(FACILITY_LIST_SERVICE_DATA,glbStartingRecord,glbEndingRecord,40);
    paginationsData = FACILITY_LIST_SERVICE_DATA;
    FACILITY_LIST_ALPHABTICAL_DATA = FACILITY_LIST_SERVICE_DATA;
    frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
    settingLinesAdmin(totalRecords);
    frmAdmin_userRole();
    count = 1;
    frmAdmin.lblpagenumber.text = count +" "+"out of" +" "+ Math.ceil(totalRecords/40);
    frmAdmin.tbadminsearch.text = "";
    frmAdmin.show();
    if(frmAdmin.lbadminsearchby.isVisible){
      frmAdmin.lbadminsearchby.selectedKey = "1";
    }else{
      frmAdmin.lbadminsearchbydropdown.text="Search by";
      selected_value = "Search by";
    }
    frmAdmin.btnpageprevious.skin = "skngraybgbold";
    frmAdmin.btnpageprevious.hoverSkin="";
    frmAdmin.btnpagenext.skin = "sknbtnbluebg";
    frmAdmin.btnpagenext.hoverSkin="skbtntranshover";
    frmAdmin.btnpagenext.setEnabled(true);
    frmAdmin.btnpageprevious.setEnabled(true);
    frmAdmin.forceLayout();
  }else{
    frmAdmin_noRecords();
  }
}

//Method to set the lines for frmAdmin segment
function settingLinesAdmin(recordsLength){
  var lineHeight=0;
  if(recordsLength<=7){
    for(var i=0;i<recordsLength;i++){
      kony.print("type of  lineHeight"+typeof lineHeight);
      lineHeight=lineHeight+54;
    }
    kony.print("lineHeight"+lineHeight);
    frmAdmin.lblSeperator1.height=lineHeight+47+"dp";
    frmAdmin.lblSeperator2.height=lineHeight+47+"dp";
    frmAdmin.lblSeperator3.height=lineHeight+47+"dp";
    frmAdmin.lblSeperator4.height=lineHeight+47+"dp";
    frmAdmin.lblSeperator5.height=lineHeight+47+"dp";
    frmAdmin.lblSeperator6.height=lineHeight+47+"dp";
    frmAdmin.lblSeperator7.height=lineHeight+47+"dp";
    frmAdmin.lblSeperator8.height=lineHeight+47+"dp";
  }
  else{
    frmAdmin.lblSeperator1.height="100%";
    frmAdmin.lblSeperator2.height="100%";
    frmAdmin.lblSeperator3.height="100%";
    frmAdmin.lblSeperator4.height="100%";
    frmAdmin.lblSeperator5.height="100%";
    frmAdmin.lblSeperator6.height="100%";
    frmAdmin.lblSeperator7.height="100%";
    frmAdmin.lblSeperator8.height="100%";

  }
}

//Facility ListFailureCallback
facilityListModule.facilityListFailureCallback = function(response){
  kony.print("Facility List Error Callback Response:::"+JSON.stringify(response));
  var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
  if(response!=null && response.opstatus === 1582 && response.statuscode === ""){
    error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
    loginModule.showLoginScreen(error_label);
  }else{
    com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }
};

//This function called On click of  checkbox1
function frmAdmin_checkbox1(eventobject){
  if(userInfo.editAdminstration == GENERAL_CONSTANTS.TEXT_TRUE){
    var selectedIndex = frmAdmin.segfacilitylist.selectedIndex[1];
    kony.print("selectedIndex::"+selectedIndex);
    kony.print("eventobject::"+eventobject);
    if(selectedRow.indexOf(selectedIndex) == -1){
      selectedRow.push(selectedIndex);
      if(flag1=="false"){
        flag1="true";}else{flag1="false";}
      kony.print("flag1::"+flag1);
    }

    var selectedIndexData = frmAdmin.segfacilitylist.selectedItems[0];
    if(selectedRowData.indexOf(selectedIndexData) == -1){
      selectedRowData.push(selectedIndexData);}
    kony.print("selectedRowData::"+JSON.stringify(selectedRowData));
    kony.print("Row data::"+JSON.stringify(frmAdmin.segfacilitylist.selectedItems[0]));
    var facilityId = frmAdmin.segfacilitylist.selectedItems[0].btncheckbox1;
    var huddleTool = frmAdmin.segfacilitylist.selectedItems[0].huddleTool;
    kony.print("facilityId::"+JSON.stringify(facilityId));
    kony.print("facilityId::"+facilityId.skin);

    if(facilityId.skin=="sknbtncheck"){
      facilityId.skin="sknbtnuncheck";
      huddleTool = "Unselected";
    }
    else if(facilityId.skin=="sknbtnuncheck"){
      facilityId.skin="sknbtncheck";
      huddleTool = "Selected";
    }
    kony.print("Row data::"+JSON.stringify(frmAdmin.segfacilitylist.selectedItems[0]));
    frmAdmin.segfacilitylist.setDataAt(frmAdmin.segfacilitylist.selectedItems[0],selectedIndex);
    frmAdmin.forceLayout();
  }
}

//This function called On click of  checkbox2
function frmAdmin_checkbox2(eventobject){
  if(userInfo.editAdminstration == GENERAL_CONSTANTS.TEXT_TRUE){
    var selectedIndex = frmAdmin.segfacilitylist.selectedIndex[1];
    if(selectedRow.indexOf(selectedIndex) == -1){
      selectedRow.push(selectedIndex);
    }
    var selectedIndexData = frmAdmin.segfacilitylist.selectedItems[0];
    if(selectedRowData.indexOf(selectedIndexData) == -1){
      selectedRowData.push(selectedIndexData);}
    kony.print("selectedRowData::"+JSON.stringify(selectedRowData));
    kony.print("selectedIndex::"+selectedIndex);
    kony.print("selectedRow::"+selectedRow);
    kony.print("Row data::"+JSON.stringify(frmAdmin.segfacilitylist.selectedItems[0]));
    var facilityId = frmAdmin.segfacilitylist.selectedItems[0].btncheckbox2;
    var photoMobile = frmAdmin.segfacilitylist.selectedItems[0].photoMobile;
    kony.print("facilityId::"+JSON.stringify(facilityId));
    kony.print("facilityId::"+facilityId.skin);
    if(facilityId.skin=="sknbtncheck"){
      facilityId.skin="sknbtnuncheck";
      photoMobile = "Unselected";
    }
    else if(facilityId.skin=="sknbtnuncheck"){
      facilityId.skin="sknbtncheck";
      photoMobile = "Selected";    
    }
    kony.print("Row data::"+JSON.stringify(frmAdmin.segfacilitylist.selectedItems[0]));
    frmAdmin.segfacilitylist.setDataAt(frmAdmin.segfacilitylist.selectedItems[0],selectedIndex);
    frmAdmin.forceLayout();
  }
}

// Onclick of save button on Admin page show's confirmation popup with selected data
popupadmin_selectedSaveList = function(){
  for(var i in selectedRowData){
    var tempRecord = { "lblline": "",       
                      "lblline1": ""};
    tempRecord["lblfacilityname"] = selectedRowData[i].lblfacilityname;
    kony.print("popup Row data::"+selectedRowData[i].lblfacilityname);
    tempRecord["btncheckbox1"] = selectedRowData[i].btncheckbox1;
    tempRecord["btncheckbox2"] = selectedRowData[i].btncheckbox2;
    tempRecord["lblfacilityidhidden"] = selectedRowData[i].lblfacilityid ;
     tempRecord["lblfacilitynamehidden"] = selectedRowData[i].lblfacilityname;
    tempRecord["lblfacilitytypehidden"] = selectedRowData[i].lblfacilitytype;
   tempRecord["lblfacilitybluebookidhidden"] = selectedRowData[i].lblbluebookid;

    popupSaveData.push(tempRecord);
    kony.print("popupSaveData::"+JSON.stringify(popupSaveData));

  }
  if(userInfo.editAdminstration == GENERAL_CONSTANTS.TEXT_TRUE && popupSaveData != ""){
    frmAdmin.segfacilitylistsave.setData(popupSaveData);
    frmAdmin.flxctnradminsave.setVisibility(true);
    frmAdmin.forceLayout();
  }
  for(var j in popupSaveData){
    var updateRecord1={};
    updateRecord1["facilityId"] = popupSaveData[j].lblfacilityidhidden;
    updateRecord1["facilityName"] = popupSaveData[j].lblfacilitynamehidden;
    updateRecord1["facilityType"] = popupSaveData[j].lblfacilitytypehidden;
   updateRecord1["blueBookCode"] = popupSaveData[j].lblfacilitybluebookidhidden;
    updateRecord1["screenId"] = "1";
    kony.print("btncheckbox2::"+JSON.stringify(popupSaveData[j].btncheckbox2.skin));
    if (popupSaveData[j].btncheckbox2.skin == "sknbtncheck"){
      updateRecord1["enableFlag"] = "true";
    }else{
      updateRecord1["enableFlag"] = "false"; 
    }
    updateRecordData.push(updateRecord1);
  }
  for(var k in popupSaveData){
    var updateRecord2={};
    updateRecord2["facilityId"] = popupSaveData[k].lblfacilityidhidden;
    updateRecord2["facilityName"] = popupSaveData[k].lblfacilitynamehidden;
    updateRecord2["facilityType"] = popupSaveData[k].lblfacilitytypehidden;
   updateRecord2["blueBookCode"] = popupSaveData[k].lblfacilitybluebookidhidden;
    updateRecord2["screenId"] = "2";
    if (popupSaveData[k].btncheckbox1.skin == "sknbtncheck"){
      updateRecord2["enableFlag"] = "true";
    }else{
      updateRecord2["enableFlag"] = "false"; 
    }
    updateRecordData.push(updateRecord2);
  }
  kony.print("updateRecordData::"+JSON.stringify(updateRecordData));
}

// cancels the popup
var popupAdmin_Cancel = function(){
  popupSaveData = [];
  frmAdmin.flxctnradminsave.setVisibility(false);
}

//This function called On click of  popup checkbox
function frmAdmin_popupcheckbox(eventobject){
  kony.print("eventobject id::"+eventobject.id);
  var selectedIndex2 = frmAdmin.segfacilitylistsave.selectedIndex[1];
  kony.print("selectedIndex2::"+selectedIndex2);
  var facilityId ;
  if(eventobject.id == "btncheckbox1"){
    facilityId = frmAdmin.segfacilitylistsave.selectedItems[0].btncheckbox1;
  }else{
    facilityId = frmAdmin.segfacilitylistsave.selectedItems[0].btncheckbox2;
  }
  if(facilityId.skin=="sknbtncheck"){
    facilityId.skin="sknbtnuncheck";
  }else{
    facilityId.skin="sknbtncheck";
  }
  var selectedIndexData = frmAdmin.segfacilitylistsave.selectedItems[0];
  if(popupselectedRowData.indexOf(selectedIndexData) == -1){
    popupselectedRowData.push(selectedIndexData);
  }
  kony.print("popupselectedRowData::"+JSON.stringify(popupselectedRowData));
  kony.print("Row data::"+JSON.stringify(frmAdmin.segfacilitylistsave.selectedItems[0]));
  frmAdmin.segfacilitylistsave.setDataAt(frmAdmin.segfacilitylistsave.selectedItems[0],selectedIndex2);
  frmAdmin.forceLayout();
  updatePopupdatacheckbox();
}


//Confirm the Save Update
var popupadmin_SaveConfirmation = function(){ 

  facilityUpdateModule.getFacilityUpdated();

  for(var i in popupselectedRowData){
    for(var j in FACILITY_LIST_SERVICE_DATA){

      if (popupselectedRowData[i].lblfacilityname == FACILITY_LIST_SERVICE_DATA[j].lblfacilityname){

        FACILITY_LIST_SERVICE_DATA[j].btncheckbox1 = popupselectedRowData[i].btncheckbox1;
        FACILITY_LIST_SERVICE_DATA[j].btncheckbox2 = popupselectedRowData[i].btncheckbox2;

      }
    }
  }
  for(var k in FACILITY_LIST_SERVICE_DATA){
    if( FACILITY_LIST_SERVICE_DATA[k].btncheckbox1.skin =="sknbtnuncheck"){

      FACILITY_LIST_SERVICE_DATA[k].huddleTool = "Unselected"
    }else{ 
      FACILITY_LIST_SERVICE_DATA[k].huddleTool = "Selected"
    }

    if( FACILITY_LIST_SERVICE_DATA[k].btncheckbox2.skin =="sknbtnuncheck"){

      FACILITY_LIST_SERVICE_DATA[k].photoMobile = "Unselected"
    }else{ 
      FACILITY_LIST_SERVICE_DATA[k].photoMobile = "Selected"
    }


  }
  kony.print("bfore facilityListConstants:");
  kony.print("popupselectedRowData:::"+JSON.stringify(popupselectedRowData));
  adminsavedata = popupselectedRowData;
  adminsavedata1 = popupSaveData;
  kony.print("adminsavedata1:"+JSON.stringify(adminsavedata1));
  facilityListConstants.clear();
  updateRecordData = [];
  selectedRowData = [];
  popupselectedRowData = [];
  selectedRow = [];
  popupSaveData = [];
  kony.print("adminsavedata::"+adminsavedata);
  kony.print("popupselectedRowData::"+popupselectedRowData);
  kony.print("after facilityListConstants:"+JSON.stringify(updateRecordData));
  kony.print("FACILITY_LIST_SERVICE_DATA::"+JSON.stringify(FACILITY_LIST_SERVICE_DATA));
  glbStartingRecord=0;
  glbEndingRecord=40;
  totalRecords = FACILITY_LIST_SERVICE_DATA.length;

  showHidePageButtons(totalRecords);
  FACILITY_LIST_PAGE_DATA = paginationFacilityList(FACILITY_LIST_SERVICE_DATA,glbStartingRecord,glbEndingRecord,40);
  paginationsData= FACILITY_LIST_SERVICE_DATA;
  frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
  settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
}


function highlightAlphabet(selectedId){
  if(selectedId==lastid){
    return;
  }
  frmAdmin[lastid].skin="sknbtntransbgblue85";
  lastid=selectedId;
  frmAdmin[selectedId].skin="sknbtnwhitebgblack85";
}
//Sort Alphabetically
var frmAdmin_filterAlphabetically = function(Str,eventobject){
  var selectedId;
  kony.print("eventobject----"+eventobject)
  frmAdmin.btnalphabetall.skin="sknbtntransbgblue85";
  selectedId=eventobject.id;
  highlightAlphabet(selectedId);
  var filteredRowData = [];
  frmAdmin.segfacilitylist.removeAll();
  for(var i in FACILITY_LIST_SERVICE_DATA){
    var facilityName = FACILITY_LIST_SERVICE_DATA[i].lblfacilityname ;
    if (facilityName.charAt(0) == Str ){
      kony.print("FACILITYname::"+facilityName);
      kony.print("FACILITY[i]::"+JSON.stringify(FACILITY_LIST_SERVICE_DATA[i]));
      filteredRowData.push(FACILITY_LIST_SERVICE_DATA[i]);
      kony.print("filteredRowData::"+filteredRowData);
    }
  }
  FACILITY_LIST_ALPHABTICAL_DATA = filteredRowData;
  facilityListConstants.filterData = FACILITY_LIST_ALPHABTICAL_DATA;
  kony.print("filteredRowDatalen::"+filteredRowData.length);
  totalRecords = filteredRowData.length;
  showHidePageButtons(totalRecords);
  count = 1;
  frmAdmin.lblpagenumber.text = count +" "+"out of" +" "+ Math.ceil(totalRecords/40);
  if(filteredRowData.length >40){
    glbStartingRecord=0;
    glbEndingRecord=40;
    FACILITY_LIST_PAGE_DATA = paginationFacilityList(filteredRowData,glbStartingRecord,glbEndingRecord,40);
    paginationsData = filteredRowData;
    frmAdmin.btnpagenext.setEnabled(true);  
    frmAdmin.btnpageprevious.setEnabled(true);
    kony.print("inside filteredRow");
  }else{
    FACILITY_LIST_PAGE_DATA = filteredRowData;
    frmAdmin.btnpagenext.setEnabled(false);
    frmAdmin.btnpageprevious.setEnabled(false);
  }
  if(FACILITY_LIST_PAGE_DATA!==null  &&  FACILITY_LIST_PAGE_DATA !== undefined && FACILITY_LIST_PAGE_DATA.length > 0){
    kony.print("FACILITY_LIST_PAGE_DATA.length"+FACILITY_LIST_PAGE_DATA.length)
    frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
    frmAdmin.lblnorecords.setVisibility(false);
    settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
  }else{
    frmAdmin_noRecords();
    kony.print("-------No Records------");
  }
  frmAdmin.tbadminsearch.text = "";
  if(frmAdmin.lbadminsearchby.isVisible){
    frmAdmin.lbadminsearchby.selectedKey = "1";
  }else{
    frmAdmin.lbadminsearchbydropdown.text="Search by";
    selected_value = "Search by";
  }
  frmAdmin.btnpageprevious.skin = "skngraybgbold";
  frmAdmin.btnpageprevious.hoverSkin="";
  frmAdmin.btnpagenext.skin = "sknbtnbluebg";
  frmAdmin.btnpagenext.hoverSkin="skbtntranshover";
  frmAdmin_Clear_filter();
  facilityListConstants.clearSortAndFilter();
}

//ALL Button
var frmAdmin_unFilterAll = function(eventobject){
  frmAdmin.btnpagenext.setEnabled(true);
  frmAdmin.btnpageprevious.setEnabled(true);
  frmAdmin.btnpageprevious.hoverSkin="skbtntranshover";
  frmAdmin.btnpagenext.hoverSkin="skbtntranshover";
  var selectedId=eventobject.id;
  highlightAlphabet(selectedId);
  glbStartingRecord=0;
  glbEndingRecord=40;
  totalRecords = FACILITY_LIST_SERVICE_DATA.length;
  showHidePageButtons(totalRecords);
  count = 1;
  frmAdmin.lblpagenumber.text = count +" "+"out of" +" "+ Math.ceil(totalRecords/40);
  FACILITY_LIST_PAGE_DATA = paginationFacilityList(FACILITY_LIST_SERVICE_DATA,glbStartingRecord,glbEndingRecord,40);
  paginationsData= FACILITY_LIST_SERVICE_DATA;
  FACILITY_LIST_ALPHABTICAL_DATA= FACILITY_LIST_SERVICE_DATA;
  facilityListConstants.filterData = FACILITY_LIST_ALPHABTICAL_DATA;
  frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
  settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
  frmAdmin_userRole();
  frmAdmin.show();
  frmAdmin.tbadminsearch.text = "";
  if(frmAdmin.lbadminsearchby.isVisible){
    frmAdmin.lbadminsearchby.selectedKey = "1";
  }else{
    frmAdmin.lbadminsearchbydropdown.text="Search by";
    selected_value = "Search by";
  }
  frmAdmin.btnpageprevious.skin = "skngraybgbold";
  frmAdmin.btnpageprevious.hoverSkin="";
  frmAdmin.btnpagenext.skin = "sknbtnbluebg";
  frmAdmin.btnpagenext.hoverSkin="skbtntranshover";
  frmAdmin.lblnorecords.setVisibility(false);
  frmAdmin.forceLayout();
  facilityListConstants.clearSortAndFilter();
  frmAdmin_Clear_All_filter();
}



// User Access Admin or Corporate Action
var frmAdmin_userRole = function(){ 
  var userRole = userInfo.role;
  kony.print("USERROLE::"+userRole);
  if(userInfo.viewAdministration == GENERAL_CONSTANTS.TEXT_TRUE && userInfo.editAdminstration != GENERAL_CONSTANTS.TEXT_TRUE){ //if(userRole == GENERAL_CONSTANTS.USER_ROLE_CORPORATEUSER){
    kony.print("USERROLE::CORPORATEUSER");
    for(var i in FACILITY_LIST_SERVICE_DATA){
      if( FACILITY_LIST_SERVICE_DATA[i].btncheckbox1.skin =="sknbtnuncheck"){
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox1.skin ="sknbtnuncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox1.focusskin ="sknbtnuncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox1.hoverSkin =""

      }else{
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox1.skin ="sknbtncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox1.focusskin ="sknbtncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox1.hoverSkin =""
      }
      if( FACILITY_LIST_SERVICE_DATA[i].btncheckbox2.skin =="sknbtnuncheck"){
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox2.skin ="sknbtnuncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox2.focusskin ="sknbtnuncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox2.hoverSkin =""

      }else{
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox2.skin ="sknbtncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox2.focusskin ="sknbtncheckdisable"
        FACILITY_LIST_SERVICE_DATA[i].btncheckbox2.hoverSkin =""
      }

    }

  }else if(userInfo.editAdminstration == GENERAL_CONSTANTS.TEXT_TRUE){ //if(userRole == GENERAL_CONSTANTS.USER_ROLE_CORPORATEADMIN ) {
    frmAdmin.segfacilitylist.setEnabled(true);
    //Do Nothing.
    kony.print("USERROLE::ADMIN");
  }

}



//Form PostShow for load the header data and reset the values 
var frmAdmin_PostShow=function(){ 
  registerTimeout();
  hideFormMenu();
  load_headerdata();
  clear_FacilityList();
  updateRecordData = [];
  selectedRowData = [];
  popupSaveData = [];
  popupselectedRowData = [];
  adminsavedata =[];
  adminsavedata1 =[];
  facilityListConstants.clearSortAndFilter();
  frmAdmin_Clear_All_filter();
  facilityListConstants.clear();
  glbStartingRecord = "";
  glbEndingRecord = "";
  frmAdmin_alphabetsskin();

};

//Method to set the skin for Alphabets
function frmAdmin_alphabetsskin(){
  frmAdmin.btnalphabetall.skin="sknbtnwhitebgblack85";
  frmAdmin.btnalphabeta.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetb.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetc.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetd.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabete.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetf.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetg.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabeth.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabeti.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetj.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetk.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetl.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetm.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetn.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabeto.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetp.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetq.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetr.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabets.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabett.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetu.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetv.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetw.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetx.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabety.skin="sknbtntransbgblue85";
  frmAdmin.btnalphabetz.skin="sknbtntransbgblue85";
}

var clear_FacilityList=function(){
  frmAdmin.tbadminsearch.text = "";
  if(frmAdmin.lbadminsearchby.isVisible){
    frmAdmin.lbadminsearchby.selectedKey = "1";
  }else{
    frmAdmin.lbadminsearchbydropdown.text="Search by";
    selected_value = "Search by";
  }
  flag1 = "false";
  updateRecordData = [];
  facilityListConstants.clearSortAndFilter();
  popupAdmin_Cancel();
};

/////// Clear button
var frmAdmin_onClearSearchFilter =function(){
  frmAdmin.segfacilitylist.removeAll();
  frmAdmin_alphabetsskin();
  FACILITY_LIST_SERVICE_DATA.sort(sort_by("lblfacilityname", false, function(a){return a.toUpperCase()}))

  for (var j in FACILITY_LIST_SERVICE_DATA){
    if( FACILITY_LIST_SERVICE_DATA[j].huddleTool == "Unselected"){
      FACILITY_LIST_SERVICE_DATA[j].btncheckbox1.skin = "sknbtnuncheck"

    }else{ 
      FACILITY_LIST_SERVICE_DATA[j].btncheckbox1.skin = "sknbtncheck"
    }

    if( FACILITY_LIST_SERVICE_DATA[j].photoMobile == "Unselected"){
      FACILITY_LIST_SERVICE_DATA[j].btncheckbox2.skin = "sknbtnuncheck"

    }else{ 
      FACILITY_LIST_SERVICE_DATA[j].btncheckbox2.skin ="sknbtncheck"
    }

  }
  kony.print("adminsavedata1::"+JSON.stringify(adminsavedata1));
  for(var i in adminsavedata1){
    for(var j in FACILITY_LIST_SERVICE_DATA){

      if (adminsavedata1[i].lblfacilityname == FACILITY_LIST_SERVICE_DATA[j].lblfacilityname){

        FACILITY_LIST_SERVICE_DATA[j].btncheckbox1 = adminsavedata1[i].btncheckbox1;
        FACILITY_LIST_SERVICE_DATA[j].btncheckbox2 = adminsavedata1[i].btncheckbox2;
      }

    }
  }
  kony.print("adminsavedata1:::"+JSON.stringify(adminsavedata1));
  frmAdmin_userRole();
  glbStartingRecord=0;
  glbEndingRecord=40; 
  totalRecords = FACILITY_LIST_SERVICE_DATA.length;
  showHidePageButtons(totalRecords);
  count = 1;
  frmAdmin.lblpagenumber.text = count +" "+"out of" +" "+ Math.ceil(totalRecords/40);
  FACILITY_LIST_PAGE_DATA = paginationFacilityList(FACILITY_LIST_SERVICE_DATA,glbStartingRecord,glbEndingRecord,40);
  paginationsData= FACILITY_LIST_SERVICE_DATA;
  facilityListConstants.filterData = FACILITY_LIST_SERVICE_DATA;
  frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
  frmAdmin.lblnorecords.setVisibility(false);
  settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);

  kony.print("FACILITY_LIST_SERVICE_DATA:::"+JSON.stringify(FACILITY_LIST_SERVICE_DATA));
  frmAdmin.forceLayout();
  frmAdmin.btnpageprevious.skin = "skngraybgbold";
  frmAdmin.btnpageprevious.hoverSkin="";
  frmAdmin.btnpagenext.skin = "sknbtnbluebg";
  frmAdmin.btnpagenext.hoverSkin="skbtntranshover";
  facilityListConstants.clearSortAndFilter();
  frmAdmin_Clear_All_filter();
  facilityListConstants.clear();
  updateRecordData = [];
  selectedRowData = [];
  selected_value = "Search by";
  popupselectedRowData = [];
  var currentForm=kony.application.getCurrentForm();
  currentForm.tbadminsearch.text = "";
  if(frmAdmin.lbadminsearchby.isVisible){
    currentForm.lbadminsearchby.selectedKey = "1";
  }else{
    currentForm.lbadminsearchbydropdown.text="Search by";
  }

}

var updatePopupdatacheckbox = function(){
  kony.print("updatePopupdatacheckbox----->>>>");
  for(var i=0; i<popupselectedRowData.length; i++){
    kony.print("popupselectedRowData----->>>>"+JSON.stringify(popupselectedRowData));
    for (var j=0; j<updateRecordData.length; j++){
      kony.print("updateRecordData initial----->>>>"+JSON.stringify(updateRecordData[j]));
      if (popupselectedRowData[i].lblfacilityidhidden == updateRecordData[j].facilityId){
        if(updateRecordData[j].screenId == "1"){
          if(popupselectedRowData[i].btncheckbox2.skin == "sknbtncheck"){
            updateRecordData[j].enableFlag = "true";
          }else{
            updateRecordData[j].enableFlag = "false";
          }
        }else{
          if(popupselectedRowData[i].btncheckbox1.skin == "sknbtncheck"){
            updateRecordData[j].enableFlag = "true";
          }else{
            updateRecordData[j].enableFlag = "false";
          }
        }
      }
      kony.print("updateRecordData final----->>>>"+JSON.stringify(updateRecordData[j]));
    }
  }
}



function frmAdmin_Clear_filter(){

  sortAndFilterConstants.adminFilterObject = {};
  isSelectAllCheckMarkSelected = false ;
  frmAdmin.imgdown1.skin = "skinBtnFilter";
  frmAdmin.imgdown2.skin = "skinBtnFilter";
  frmAdmin.imgdown3.skin = "skinBtnFilter";
  frmAdmin.imgdown4.skin = "skinBtnFilter";
  frmAdmin.imagedown5.skin = "skinBtnFilter";
  frmAdmin.imagedown6.skin = "skinBtnFilter";

}



//Pagination
function paginationFacilityList(resultRecords,startingIndex,endingIndex,noOfRecords){
  kony.print("IN SIDE pagination "+noOfRecords);
  kony.print("IN SIDE pagination- endingIndex --  "+endingIndex+"  startingIndex -- "+startingIndex);
  try{
    if(count == 1 || count == "1"){
      frmAdmin.btnpageprevious.skin = "skngraybgbold";
      frmAdmin.btnpageprevious.hoverSkin="";
    }else{
      frmAdmin.btnpageprevious.skin = "sknbtnbluebg";
      frmAdmin.btnpageprevious.hoverSkin="skbtntranshover";
    }
    totalrecords = resultRecords;

    if (totalrecords != null && totalrecords != "" )
    {
      totalrecords = resultRecords.length;
    }
    if(endingIndex >= totalrecords ){
      endingIndex=totalrecords;
      frmAdmin.btnpagenext.setEnabled(false);
      frmAdmin.btnpagenext.skin = "skngraybgbold";
      frmAdmin.btnpagenext.hoverSkin="";
    }else{
      frmAdmin.btnpagenext.setEnabled(true);
      frmAdmin.btnpagenext.skin = "sknbtnbluebg";
      frmAdmin.btnpagenext.hoverSkin="skbtntranshover";
    }
    kony.print("IN SIDE pagination- endingIndex1 --  "+endingIndex+"  startingIndex1 -- "+startingIndex +"  totalrecords -- "+totalrecords );
    var recordsInsert = new Array();

    for (startingIndex; startingIndex < endingIndex;startingIndex++)
    {
      recordsInsert.push(resultRecords[startingIndex])
    }  
    startingIndex1 = startingIndex;
    endingIndex1 = endingIndex ;

  }catch(e)
  {
    kony.print(e);
  }
  kony.print("pagination end");
  return recordsInsert;
}

//NExt Button
frmAdmin_onClickNext_Pagination =  function(){
  if(count != Math.ceil(totalRecords/40)){
    count = count + 1;
  }
  frmAdmin.lblpagenumber.text = count +" "+"out of" +" "+ Math.ceil(totalRecords/40);
  noOfRecords =40;
  startingIndex1 = endingIndex1;
  endingIndex1 = endingIndex1+ noOfRecords;
  glbStartingRecord =startingIndex1;
  glbEndingRecord = endingIndex1;
  kony.print("glbStartingRecord "+glbStartingRecord);
  kony.print("glbEndingRecord "+glbEndingRecord);
  kony.print("paginationsData "+JSON.stringify(paginationsData));
  FACILITY_LIST_PAGE_DATA = paginationFacilityList(paginationsData,glbStartingRecord,glbEndingRecord,40);
  if(count==Math.ceil(totalRecords/40)){
    lastDataCount=FACILITY_LIST_PAGE_DATA.length;
  }
  frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
  settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);

}


//Previous Button

frmAdmin_onClickPrevious_Pagination =  function(){
  if( count !=1){count = count - 1;}
  if( count ===1){frmAdmin.btnpageprevious.skin = "skngraybgbold";}
  frmAdmin.lblpagenumber.text = count +" "+"out of" +" "+ Math.ceil(totalRecords/40);
  noOfRecords =40;
  if(glbStartingRecord > 0) {
    if(endingIndex1%40!=0){
      endingIndex1 = startingIndex1 -lastDataCount;
      startingIndex1 = endingIndex1-noOfRecords ;
    }else{
      endingIndex1 = startingIndex1-noOfRecords;
      startingIndex1 = endingIndex1-noOfRecords ;
    }
    glbStartingRecord = startingIndex1;
    glbEndingRecord = endingIndex1;
    kony.print("glbStartingRecord111 "+glbStartingRecord);
    kony.print("glbEndingRecord11 "+glbEndingRecord);
    if(glbStartingRecord < 0){
      glbStartingRecord = 0;
      glbEndingRecord = 40;
    }
    kony.print("glbStartingRecord111 "+glbStartingRecord);
    kony.print("glbEndingRecord11 "+glbEndingRecord);

    FACILITY_LIST_PAGE_DATA = paginationFacilityList(paginationsData,glbStartingRecord,glbEndingRecord,40);
    frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
    settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
  }
}

function showHidePageButtons(totalRecords){
  if(totalRecords >40){
    frmAdmin.btnpagenext.setVisibility(true);
    frmAdmin.btnpageprevious.setVisibility(true);
    frmAdmin.lblpagenumber.setVisibility(true);
  }else{
    frmAdmin.btnpagenext.setVisibility(false);
    frmAdmin.btnpageprevious.setVisibility(false);
    frmAdmin.lblpagenumber.setVisibility(false);
  }
}

function pagenumber(count){
  pagenumber = count +" "+"out of" +" "+ Math.ceil(totalRecords/40);
}

function frmAdmin_noRecords(){
  frmAdmin.lblnorecords.text = "No Facility Records";
  frmAdmin.lblnorecords.setVisibility(true);
  frmAdmin.lblSeperator1.height="45dp";
  frmAdmin.lblSeperator2.height="45dp";
  frmAdmin.lblSeperator3.height="45dp";
  frmAdmin.lblSeperator4.height="45dp";
  frmAdmin.lblSeperator5.height="45dp";
  frmAdmin.lblSeperator6.height="45dp";
  frmAdmin.lblSeperator7.height="45dp";
  frmAdmin.lblSeperator8.height="45dp";

}