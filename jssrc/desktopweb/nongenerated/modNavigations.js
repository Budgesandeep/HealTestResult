/*
 *Name: modNavigations.js
 *Purpose: For form navigations related functionalities
 *Change Log:
 *---------------------------------------------------------------------------
 * Date              Developer            Comments
 *---------------------------------------------------------------------------
 * 12/19/2016        Naresh,Mona                 Show and dismiss popups,menu and forms
 *
 *
 */
var dashboardModule = {};
var print_flag = false;
var print_flag2 = false;
var sideMenuVisibilityFlag = false;
var isNotesOpen = false;
//services related 
var serviceIntegration = {};
serviceIntegration.initMF = function() {
    kony.print("inside service_InitMF:::" + appConfig.appVersion);
    com.healogics.mfutility.mfInit();
};
//=========================
//landing screen
//=========================
var showLandingScreen = function() {
    patientListConstants.weekRange = "";
    var currentForm = kony.application.getCurrentForm();
    if (currentForm != null && currentForm.id === "frmPatientSummary") {
        kony.print("patientSummaryObjects.healing9stepEditedData.length----->>>>>" + patientSummaryObjects.healing9stepEditedData.length);
        if (patientSummaryObjects.healing9stepEditedData.length > 0) {
            frmPatientSummary_btnSaveClick();
        }
    }
    if (currentForm.id == frmPatientList.id || currentForm.id == frmPatientSummary.id) {
        logcounter = 1;
    }
    frmLanding.fscmainbody.setVisibility(true);
    frmLanding.fctopmenu.setVisibility(false);
    frmLanding.show();
};
//Method to load header data
function load_headerdata(currentForm) {
    if (currentForm == null) {
        currentForm = kony.application.getCurrentForm();
    }
    kony.print("userInfo::::" + JSON.stringify(userInfo));
    var convertedDate = com.healogics.utility.convertEST_To_PST_CST_TimeZone(userInfo.loginTime, userInfo.timezone, DATE_FORMAT.LOGIN);
    if (isIpad && !isIphone) {
        //tasks_cntrl_offline.getOpenTaskLists();
        currentForm.fcmstheader.lbltaskcount.text = userInfo.taskCount;
    }
    var strWelcomeUser = "<p>Welcome <b>" + userInfo.fullName + ", </b></p>";
    //Woun-1491 removal of Facility ID
    var strUserFacility = "<p>Facility: <b>" + userInfo.presentFacilityName + "</b></p>";
    //var strUserFacility = "<p>Facility: <b>"+userInfo.presentFacilityId+"- "+userInfo.presentFacilityName+"</b></p>";
    if (isIphone && currentForm.id != "frmLogin" && currentForm.id != "frmSelectFacility") {
        currentForm.rchusername.text = strWelcomeUser;
        currentForm.rchfacility.text = strUserFacility;
    } else if (currentForm.id != "frmLogin" && currentForm.id != "frmSelectFacility") {
        currentForm.fcmstheader.rchwelcome.text = strWelcomeUser;
        currentForm.fcmstheader.rchdatelogin.text = convertedDate; //strUserLogin ;
        currentForm.fcmstheader.rchfacility.text = strUserFacility;
        currentForm.fcmstheader.lblcontactnumber.text = (com.healogics.utility.isEmpty(userInfo.helpdeskNumber)) ? "" : userInfo.helpdeskNumber;
        currentForm.fcmstheader.lbltaskcount.text = userInfo.taskCount;
        currentForm.fcmstheader.fcvertline.setVisibility(false);
        currentForm.fcmstheader.lblprojname.setVisibility(false);
        currentForm.forceLayout();
        if (!isIphone) {
            if (currentForm.id !== frmLanding.id) {
                loginModule.processSideMenuList();
            }
        }
    }
    kony.print(" currentform id in load header data----->>>>>>> " + currentForm.id);
    displayAppVersion(currentForm);
}
//Hide Top LogOutMenu
function hide_fctopmenu() {
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.fctopmenu.isVisible) {
        currentForm.fctopmenu.setVisibility(false);
    }
}
//Method to hide sidemenu and topmenu 
var hideFormMenu = function() {
    kony.print("In hideFormMenu");
    var currentForm = kony.application.getCurrentForm();
    currentForm.fctopmenu.setVisibility(false);
    if (currentForm.fscsidemenu.isVisible) {
        currentForm.fscsidemenu.setVisibility(false);
        if (!sideMenuVisibilityFlag) sideMenuVisibilityFlag = !sideMenuVisibilityFlag;
    } else {
        if (sideMenuVisibilityFlag) sideMenuVisibilityFlag = !sideMenuVisibilityFlag;
    }
    if (currentForm.id === "frmPatientSummary") {
        if (!isIpad && currentForm.fcPrintMenu2.isVisible) {
            currentForm.fcPrintMenu2.setVisibility(false);
            currentForm.fcDownload1.skin = "slFbox";
            if (!print_flag2) print_flag2 = !print_flag2;
        } else {
            if (print_flag2) print_flag2 = !print_flag2;
        }
    }
    //CO-666 changes   currentForm.id === "frmPatientTestResults" ||
    if (currentForm.id === "frmPatientTestResults" || currentForm.id === "frmPatientList" || currentForm.id === "frmViewTasksNew" || currentForm.id === "frmPatientRecords" || currentForm.id === "frmPatientSummary") {
        if (currentForm.fcsearchdropdown != null) {
            currentForm.fcsearchdropdown.setVisibility(false);
            currentForm.tbpatientsearch.text = "";
        }
        if (!isIpad && currentForm.fcPrintMenu.isVisible) {
            currentForm.fcPrintMenu.setVisibility(false);
            currentForm.fcDownload.skin = "slFbox";
            if (!print_flag) print_flag = !print_flag;
        } else {
            if (print_flag) print_flag = !print_flag;
        }
    } else if (currentForm.id == "frmWCCDashboard") {
        if (currentForm.fcsearchdropdown != null) {
            currentForm.fcsearchdropdown.setVisibility(false);
            currentForm.tbpatientsearch.text = "";
        }
    }
};
//=========================
//WCC Dashboard
//=========================
var dashboard_showWCCDashboard = function() {
    patientListConstants.weekRange = "";
    kony.print("In dashboard_showWCCDashboard");
    var currentForm = kony.application.getCurrentForm().id;
    if (currentForm.id === "frmPatientList") {
        searchPatient_closeSearchList();
    } else if (currentForm == frmWCCDashboard.id) { //Close the Menu if is on same form
        menu_toggleSideMenu();
    } else {
        //CO-403
        //if(isIpad){///Akshay - Always Reading from Offline DB either Offline/Online mode in iPad
        //  terms_and_conditions_offline.getTermsAndConditions();
        //}
        //else{
        dashboardModule.getUserAcknowledgementStatus();
        //}
    }
};
//Serice call for UserAcknowledgementStatus
dashboardModule.getUserAcknowledgementStatus = function() {
    var inputData = {
        "userName": userInfo.userId,
        "presentFacilityId": userInfo.presentFacilityId,
        "accessToken": userInfo.accessToken
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_GETUSERACKNOWLEDGEMENT, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, dashboardModule.getUserAcknowledgementSuccessCallback, dashboardModule.userAcknowledgementFailureCallback);
};
//Successcallback for getUserAcknowledgement
dashboardModule.getUserAcknowledgementSuccessCallback = function(response) {
    kony.print("dashboardModule.getUserAcknowledgementSuccessCallback start::" + JSON.stringify(response));
    if (response !== null && response.opstatus === 0 && response.statuscode == "200") {
        userInfo.termsConditions = response.termsText;
        userInfo.ackAcceptedDate = response.acceptedDate;
        userInfo.ackExpiryDate = response.expiryDate;
        kony.print("----- response.timestamp -----" + response.timestamp);
        kony.print("----- response.expiryDate -----" + response.expiryDate);
        kony.print("----- userInfo.ackAcceptedDate -----" + userInfo.ackAcceptedDate);
        var strTimeStamp = response.timestamp.split(" ")[0];
        kony.print("----- strTimeStamp -----" + strTimeStamp);
        var arrTemp2 = strTimeStamp.split("-");
        var todaysDate = new Date(parseInt(arrTemp2[0]), parseInt(arrTemp2[1]) - 1, parseInt(arrTemp2[2]));
        var arrTemp1 = response.expiryDate.split("-");
        var expiryDate = new Date(parseInt(arrTemp1[2]), parseInt(arrTemp1[1]) - 1, parseInt(arrTemp1[0]));
        if (isIpad) {
            var expiryDate_temp = response.expiryDate;
            var ackDate_temp = response.acceptedDate;
            kony.print("inside isIpad condition for timeformat check ::::" + expiryDate_temp);
            if (expiryDate_temp.indexOf("-") >= 4) {
                arrTemp1 = expiryDate_temp.split("-");
                ////changing it to a different date format in offline mode : Saved in YYYY-MM-DD and function input is DD-MM-YYYY
                userInfo.ackAcceptedDate = moment(ackDate_temp).format("DD-MM-YYYY"); ///Akshay - we were showing wrong date
                kony.print("----- userInfo.ackAcceptedDate -----Inside isIPad logic" + userInfo.ackAcceptedDate);
                expiryDate = new Date(parseInt(arrTemp1[0]), parseInt(arrTemp1[1]) - 1, parseInt(arrTemp1[2]));
            }
        }
        kony.print("----- expiryDate -----" + expiryDate);
        kony.print("----- todaysDate -----" + todaysDate);
        if (userInfo.ackAcceptedDate !== null && userInfo.ackAcceptedDate !== "" && (todaysDate <= expiryDate)) {
            //please check for validate of expiryDate if goes below todays date then show user ack popup
            userInfo.userAcknowledgementFlag = true;
            metrics_module.load_monthsdata();
        } else {
            frmLanding.fscmainbody.setVisibility(false);
            if (!isIpad) frmLanding.fcmstfooter.top = "600dp";
            popupUserAcknowledgement.rttermsconditions.text = response.termsText;
            popupUserAcknowledgement.hboxAcceptAck.setVisibility(false);
            popupUserAcknowledgement.hboxsave.setVisibility(true);
            popupUserAcknowledgement.show();
        }
    } else {
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        if (response !== null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)) {
            error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
            loginModule.showLoginScreen(error_label);
        } else if (response.responsedesc !== null && response.responsedesc !== "") {
            com.healogics.utility.showErrorAlert(response.responsedesc, GENERAL_CONSTANTS.TEXT_CLOSE);
        } else {
            com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        }
    }
};
//Service call to updateUserAcknowledgementStatus
dashboardModule.updateUserAcknowledgementStatus = function() {
    var d = new Date();
    var month = d.getMonth();
    if (month < 9) {
        month = "0" + (month + 1);
    } else {
        month = month + 1;
    }
    var day = d.getDate();
    if (day < 9) {
        day = "0" + day;
    }
    var formattedDate = d.getFullYear() + "-" + month + "-" + day;
    userInfo.ackAcceptedDate = day + "-" + month + "-" + d.getFullYear();
    var inputData = {
        "userName": userInfo.userId,
        "presentFacilityId": userInfo.presentFacilityId,
        "acceptedDate": formattedDate,
        "accessToken": userInfo.accessToken
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_UPDATEACKNOWLEDGEMENT, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, dashboardModule.updateUserAcknowledgementSuccessCallback, dashboardModule.userAcknowledgementFailureCallback);
};
//Success callback for updateUserAcknowledgement
dashboardModule.updateUserAcknowledgementSuccessCallback = function(response) {
    kony.print("dashboardModule.updateUserAcknowledgementSuccessCallback start::" + JSON.stringify(response));
    if (response !== null && response.opstatus === 0 && response.statuscode == "200") {
        if (response.responsedesc != null && response.responsedesc == "Success") {
            //please check for validate of expiryDate if goes below todays date then show user ack popup
            userInfo.userAcknowledgementFlag = true;
            frmLanding.fscmainbody.setVisibility(true);
            popupUserAcknowledgement.dismiss();
            metrics_module.load_monthsdata();
        } else {
            //show some error message indicating that accepting user ack failed.....
        }
    } else {
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        if (response !== null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)) {
            error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
            loginModule.showLoginScreen(error_label);
        } else if (response.responsedesc !== null && response.responsedesc !== "") {
            com.healogics.utility.showErrorAlert(response.responsedesc, GENERAL_CONSTANTS.TEXT_CLOSE);
        } else {
            com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        }
    }
};
//Failure callback for userAcknowledgement
dashboardModule.userAcknowledgementFailureCallback = function(response) {
    kony.print("dashboardModule.getUserAcknowledgementFailureCallback start::" + JSON.stringify(response));
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if (response !== null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)) {
        error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
        loginModule.showLoginScreen(error_label);
    } else {
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
};
//=========================
//Patient List
//=========================
//Method to get data for frmPatientList
var dashboard_showPatientList = function(str) {
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.id != "frmLanding") {
        searchPatient_closeSearchList();
    }
    if (currentForm.id === "frmPatientSummary") {
        kony.print("patientSummaryObjects.healing9stepEditedData.length----->>>>>" + patientSummaryObjects.healing9stepEditedData.length);
        if (patientSummaryObjects.healing9stepEditedData.length > 0) {
            frmPatientSummary_btnSaveClick("save");
        }
    }
    paginationConstants.clear();
    kony.print("In dashboard_showPatientList");
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.id == frmPatientList.id) { //Close the Menu if is on same form
        if (str == "reload") {
            if (!isIphone) {
                patientListConstants.clearSortAndFilter();
                patientSummaryObjects.selectedStep = "Step1";
                patientSummaryObjects.selectedWoundIndex = 0;
            }
            if (userInfo.viewPatientList == GENERAL_CONSTANTS.TEXT_TRUE) {
                kony.print("--log counter--" + logcounter);
                userapreference();
                //      if(logcounter===0)
                //         {
                //            patientListModule.getAllPatientList(); 
                //         }
                //      else
                //        {
                //          userapreference();
                //        }
            }
        } else {
            menu_toggleSideMenu();
        }
    } else {
        if (!isIphone) {
            patientListConstants.clearSortAndFilter();
            patientSummaryObjects.selectedStep = "Step1";
            patientSummaryObjects.selectedWoundIndex = 0;
        }
        if (userInfo.viewPatientList == GENERAL_CONSTANTS.TEXT_TRUE) {
            kony.print("--log counter--" + logcounter);
            userapreference();
            //       if(logcounter===0)
            //         {
            //            patientListModule.getAllPatientList(); 
            //         }
            //      else
            //        {
            //          userapreference();
            //        }
            // patientListModule.getAllPatientList();
            //PatientList Optimization Flow
            ///Sandeep offline changes
            if (isIpad && !isNetworkAvailable()) {
                var error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
                com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
            } else {
                // patientListModule.getAllPatientList();
                //Chnages for the Co-385 by default todays patient list should show
                //sortAndFilterConstants.todayPatient = true;     
                patientListModule_getTodaypatient(true);
            }
        }
    }
};
//Method to get patient details for patientSummary
var showPatientDashboard = function() {
    userInfo.patientId = "";
    try {
        kony.print("Row data::" + JSON.stringify(frmPatientList.segpatientlist.selectedItems[0]));
        userInfo.patientId = frmPatientList.segpatientlist.selectedItems[0].lblpatientid;
    } catch (error) {
        var previousForm = kony.application.getPreviousForm();
        userInfo.patientId = previousForm.segSearch.selectedItems[0].lblpatientid;
        kony.print("error getting patientId")
    }
    kony.print("patientId::" + userInfo.patientId);
    ///Sandeep offline changes
    if (isIpad && !isNetworkAvailable()) {
        var error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    } else {
        com.healogics.patientSummary.getPatientSummary(userInfo.patientId, "", "", true);
    }
};
//Method to toggle visibility of topmenu
var menu_toggleSubMenu = function() {
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.fctopmenu.isVisible) {
        currentForm.fctopmenu.setVisibility(false);
    } else {
        currentForm.fctopmenu.setVisibility(true);
    }
    currentForm.forceLayout();
};
//Method to hide topmenu
var menu_hideSubMenu = function() {
    popuptopmenu.dismiss();
};
//Method to toggle visibility of sidemenu
var menu_toggleSideMenu = function() {
    var currentForm = kony.application.getCurrentForm();
    kony.print("currentForm.fscsidemenu.isVisible---->" + currentForm.fscsidemenu.isVisible);
    sideMenuVisibilityFlag = !sideMenuVisibilityFlag;
    if (sideMenuVisibilityFlag) {
        currentForm.fscsidemenu.setVisibility(true);
    } else {
        currentForm.fscsidemenu.setVisibility(false);
    }
    currentForm.forceLayout();
};
var dashboard_showPatientListHelp = function() {
    var patientSrchString = frmDashboard.tbpatientsearch.text.trim();
    if (!com.healogics.utility.isEmpty(patientSrchString)) {
        frmDashboard.fcpatientsearchresult.setVisibility(true);
        var searchData = [{
            "lblpatient": "Smith, John"
        }, {
            "lblpatient": "Smith, One"
        }, {
            "lblpatient": "Smith, Two"
        }, {
            "lblpatient": "Smith, Three"
        }, {
            "lblpatient": "Smith, Four"
        }];
        var modifiedData = [];
        if (searchData.length > patientSrchString.length) {
            modifiedData = searchData.slice(0, searchData.length - patientSrchString.length);
        } else {
            modifiedData = searchData;
        }
        kony.print("in the function::" + JSON.stringify(modifiedData));
        frmDashboard.segpatientsearch.setData(searchData);
    } else {
        frmDashboard.fcpatientsearchresult.setVisibility(false);
    }
};
//Method called on click of topmenu options
function onClick_Menu(option) {
    var currentForm = kony.application.getCurrentForm();
    if (option == "settings") {} else if (option == "help") {} else if (option == "switchfacility" || option == "reports") {
        //Changing for Offline
        kony.print("Inside switch Facility");
        if (isIpad && !SYNC_CONSTANTS.isAppOffline) { //ipad and Online
            //Show popover to choose Sync or Not Sync when Online
            kony.print("Inside IPad and Online");
            popupSwitchFacilitySync.show();
            //Hide the Top menu 
            if (currentForm.fctopmenu.isVisible) {
                currentForm.fctopmenu.setVisibility(false);
            }
        }
        //CO-346
        /*else if(isIpad && SYNC_CONSTANTS.isAppOffline){ //ipad and Offline//Pending
          kony.print("Inside IPad and Offline");
           if(isSearchFacility){
            clearSearchFacilityText();
           }
          switchFacility_module.setFacilityData();
          popupSwitchFacility.hboxerror.setVisibility(false);
        }*/
        else { //Web 
            kony.print("Inside Web Online");
            if (isSearchFacility) {
                clearSearchFacilityText();
            }
            popupSwitchFacility.btnSelect.setEnabled(true);
            popupSwitchFacility.hboxFacilities.setVisibility(true);
            popupSwitchFacility.hboxsearcherror.setVisibility(false);
            popupSwitchFacility.hboxerror.setVisibility(false);
            switchFacility_module.setFacilityData();
        }
    } else if (option == "logout") {
        //CO-346
        /*if(isIpad){////Akshay - Offline message for iPad only
          ///Akshay - For data purging of more than 30 days
          com.healogics.utility.showLoading();
          mod_purge_data.removeDeviceInstanceForPatientList(); 
          popuplogout.lblmsg.text = SYNC_CONSTANTS.offlineLogoutMessage;
        }*/
        popuplogout.show();
        com.healogics.utility.dismissLoading();
        //Hide the Top menu 
        if (currentForm.fctopmenu.isVisible) {
            currentForm.fctopmenu.setVisibility(false);
        }
    }
}
//Method to select all patients radio button in frmPatientList
function patientList_allPatientDashboard() {
    frmPatientList.btnallpatients.skin = "skbtnrbselected";
    frmPatientList.btnmypatients.skin = "skbtnrbnormal";
}
//Method to select mypatient radio button in frmPatientList
function patientList_myPatientDashboard() {
    frmPatientList.btnallpatients.skin = "skbtnrbnormal";
    frmPatientList.btnmypatients.skin = "skbtnrbselected";
}
//Method to show frmEncounters
function frmEncounters_showForm() {
    kony.print("frmEncounters_showForm");
    frmEncounters.segEncounters.setData(encounters_data());
    frmEncounters.lblPatientName.text = patientSummaryObjects.patientDemoGraphics.firstName + " " + patientSummaryObjects.patientDemoGraphics.lastName;
    frmEncounters.show();
    frmEncounters.fcpatientinfo.fcpatientinfodetails.setVisibility(false);
    frmEncounters.fcpatientinfo.imgarrow.src = "sidearrowblack.png";
    com.healogics.patientSummary.setPatientDemoGraphics(patientSummaryObjects.patientDemoGraphics, "frmEncounters");
    frmEncounters.forceLayout();
}
//Method to show loginform
function showform_loginForm() {
    ///Delete the Old data on Yes Button Click
    ///AKSHAY - COMMENTED FOR TEMPORARY PURPOSE ONLY
    //mod_purge_data.removeDeviceInstanceForPatientList();
    if (!isIpad && !isIphone) {
        loginModule.clearUserStoreItems(); //kony.store.clear();
    }
    userInfo.clear();
    deepLinkInfo.clear();
    frmLogin.show();
    frmLogin.txtusername.text = "";
    frmLogin.txtpassword.text = "";
    frmLogin.txtusername.placeholder = "User Name";
    frmLogin.txtpassword.placeholder = "Password";
    popupuploadstatus.dismiss();
    if (isIpad || isIphone) popupSyncIncomplete.dismiss();
}
//Method to dismiss all the popups
var dismiss_currentPopup = function(eventobject) {
    var currform = kony.application.getCurrentForm();
    if (eventobject.id == "btntnccancel") {
        popupUserAcknowledgement.dismiss();
        frmLanding.fscmainbody.setVisibility(true);
        if (!isIpad) frmLanding.fcmstfooter.top = "18.5%";
        showLandingScreen();
        kony.print("eventobject------>" + eventobject.id);
    } else if (eventobject.id == "vboxtncclose") {
        popupUserAcknowledgement.dismiss();
        kony.print("eventobject------>" + eventobject.id);
    } else if (eventobject.id == "btnlogoutno") {
        popuplogout.dismiss();
        kony.print("eventobject------>" + eventobject.id);
    } else if (eventobject.id == "fcimageclose") {
        frmPatientSummary.fcwoundimages.setVisibility(false);
        frmPatientSummary.fcpatientsummaryheaderhover.setVisibility(false);
        frmPatientSummary.fcpatientsummaryfooterhover.setVisibility(false);
        kony.print("eventobject------>" + eventobject.id);
    } else if (eventobject.id == "vboxsortclose") {
        isSelectAllCheckMarkSelected = false;
        popupsortandfilter.dismiss();
    } else if (eventobject.id == "vboxsortclose1") {
        isSelectAllCheckMarkSelected = false;
        popupAdminSortFilter.dismiss();
    } else if (eventobject.id == "vboxcreatetaskclose" || eventobject.id == "btncreatetaskcancel") {
        popupcreatetask.dismiss();
        kony.print("eventobject------>" + eventobject.id);
    } else if (eventobject.id == "fcimageclosenotes" || eventobject.id == "btnnotescancel") {
        isNotesOpen = false;
        frmPatientSummary.fcpopupnotes.setVisibility(false);
        frmPatientSummary.fcpatientsummaryheaderhover.setVisibility(false);
        frmPatientSummary.fcpatientsummaryfooterhover.setVisibility(false);
        notesModule.setNotesDefaultMaximumCharactersLimit();
        kony.print("eventobject------>" + eventobject.id);
        frmPatientSummary.forceLayout();
    }
    //   else if(eventobject.id==="hboxtaskcompletionclose"||eventobject.id==="btnoktaskcompletion"){
    //     //popuptaskcomplete.dismiss();
    //   }
    else if (eventobject.id === "vboxsortclose") {
        popupsortandfilter.dismiss();
    } else if (eventobject.id === "vboxprintclose") {
        popuppdfviewer.dismiss();
        try {
            if (isIpad) {
                popuppdfviewer.destroy(); //Akshay - No need to destroy the popup
            }
        } catch (err) {
            kony.print("dismiss_currentPopup -- issue with popuppdfviewer destroy");
        }
    } else if (eventobject.id === "btnCancel") {
        popupSwitchFacility.dismiss();
    } else if (eventobject.id === "btnAcceptClose") {
        popupUserAcknowledgement.dismiss();
    } else if (eventobject.id === "btnCloseOffline") {
        if (isIpad) {
            ///AKSHAY
            if (SYNC_CONSTANTS.isSyncSuccess === true && popupCustomOne.lblHeader.text != ERROR_CONSTANTS.PRINT_IPAD_FEATURE_UNAVAILABLE) {
                reloadScreen();
            }
            popupCustomOne.dismiss();
            popupSyncLogout.dismiss();
        }
        popupSyncIncomplete.dismiss();
    } //Modified for offline Switch Facility Alert Dismiss
    else if (eventobject.id == "btnSwitchFacilitySyncNo" || eventobject.id == "btnSwitchFacilitySyncYes") {
        popupSwitchFacilitySync.dismiss();
        kony.print("eventobject------>" + eventobject.id);
    } else if (eventobject.id === "btnclosealert") {
        popupAlert.dismiss();
    }
    if (isIpad && eventobject.id === "btnCloseOffline" && currform.id === "frmPatientSummary") {
        //currform.forceLayout(); //Please don't do forceLayout -- blank screen issue
        if (popupCustomOne.lblHeader.text != ERROR_CONSTANTS.PRINT_IPAD_FEATURE_UNAVAILABLE) {
            kony.print("here inside frmPatientSummary with userInfo.patientId:::" + userInfo.patientId);
            com.healogics.patientSummary.getPatientSummary(userInfo.patientId, "", "", true); //Need to check 
        }
        popupCustomOne.lblHeader.text = "";
        popupCustomOne.lblmessage.text = "";
    } else {
        currform.forceLayout();
    }
};
//Method to dismiss sidemenu
function menu_closeSideMenu() {
    kony.print("In menu_closeSideMenu");
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.fscsidemenu.isVisible) {
        currentForm.fscbodyScroll.left = "0dp";
        currentForm.fscsidemenu.setVisibility(false);
    }
}
var printMenu_onClick = function(eventobject) {
    var template = "";
    var file = "";
    kony.print("printMenu_onClick");
    kony.print("eventobject parent--->" + eventobject.id);
    printModuleConstants.clear();
    printModuleConstants.fileType = "PDF";
    printModuleConstants.jsonInput = JSON.stringify(patientSummaryObjects);
    var currentForm = kony.application.getCurrentForm().id;
    if (eventobject.id === "fcPrint" || eventobject.id === "fcExportPdf") {
        if (currentForm === "frmPatientList") {
            kony.print("---in frmPatientList print----");
            printExportModule.patientListReport(PRINT_EXPORT_TEMPLATES.PATIENT_LIST, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_PDF);
        } else if (currentForm === "frmPatientSummary") {
            if (eventobject.parent.id === "fcPrintMenu") {
                kony.print("---in frmPatientSummary print demographic details----");
                printExportModule.patientWoundSummaryReport(PRINT_EXPORT_TEMPLATES.PATIENT_SUMMARY_TABLE, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_PDF);
            } else if (eventobject.parent.id === "fcPrintMenu2") {
                kony.print("---in frmPatientSummary print 9 step details----");
                printExportModule.patientWoundLevelStepReport(PRINT_EXPORT_TEMPLATES.PATIENT_WOUND_STEPS, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_PDF);
            }
        } else if (currentForm === "frmViewTasksNew") {
            kony.print("---in frmPatientList print----");
            printExportModule.taskListReport(PRINT_EXPORT_TEMPLATES.USER_TASK_LIST, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_PDF);
        }
        if (eventobject.id === "fcExportPdf") {
            PRINT_EXPORT_TEMPLATES.PRINT_ACTION = "Export";
        } else {
            PRINT_EXPORT_TEMPLATES.PRINT_ACTION = "Print";
        }
        printExportModule.generatePdf();
    } else if (eventobject.id === "fcExportExcel") {
        if (currentForm === "frmPatientList") {
            kony.print("---in frmPatientList excel----");
            printExportModule.patientListReport(PRINT_EXPORT_TEMPLATES.PATIENT_LIST, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_EXCEL);
        } else if (currentForm === "frmPatientSummary") {
            if (eventobject.parent.id === "fcPrintMenu") {
                kony.print("---in frmPatientSummary excel demographic details----");
                printExportModule.patientWoundSummaryReport(PRINT_EXPORT_TEMPLATES.PATIENT_SUMMARY_TABLE, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_EXCEL);
            } else if (eventobject.parent.id === "fcPrintMenu2") {
                kony.print("---in frmPatientSummary excel 9 step details----");
                printExportModule.patientWoundLevelStepReport(PRINT_EXPORT_TEMPLATES.PATIENT_WOUND_STEPS, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_EXCEL);
            }
        } else if (currentForm === "frmViewTasksNew") {
            kony.print("---in frmPatientList print----");
            printExportModule.taskListReport(PRINT_EXPORT_TEMPLATES.USER_TASK_LIST, PRINT_EXPORT_TEMPLATES.PRINT_DOCUMENT_TYPE_EXCEL);
        }
        printExportModule.generateExcel();
    }
};
var show_printMenu = function(eventobject) {
    searchPatient_closeSearchList();
    kony.print("-------in show printmenu function-----");
    if (isIpad) {
        showCustomPopup(ERROR_CONSTANTS.PRINT_IPAD_FEATURE_UNAVAILABLE, ERROR_CONSTANTS.PRINT_IPAD_RESTRICT_MESSAGE);
    } else {
        var currentForm = kony.application.getCurrentForm();
        if (eventobject.id == "fcDownload1") {
            kony.print("in eventobject fcDownload1");
            print_flag2 = !print_flag2;
            if (print_flag2) {
                kony.print("in print_flag2 true");
                currentForm.fcPrintMenu2.setVisibility(true);
                currentForm.fcDownload1.skin = "sknfcgray";
            } else {
                kony.print("in print_flag2 false");
                currentForm.fcPrintMenu2.setVisibility(false);
                currentForm.fcDownload1.skin = "slFbox";
            }
        } else {
            kony.print("in eventobject fcDownload");
            print_flag = !print_flag;
            if (print_flag) {
                kony.print("in print_flag true");
                if (currentForm.id == "frmPatientList" && !isIpad && !isIphone) {
                    //currentForm.fcPrintMenu.left=frmPatientList.fcDownload.frame.x-frmPatientList.fcPrintMenu.width+frmPatientList.fcDownload.width;
                    var devWidth = kony.os.deviceInfo().deviceWidth;
                    var printMenuWidth = parseInt(frmPatientList.fcPrintMenu.width.replace("dp", ""));
                    var gapIn = devWidth - (frmPatientList.fcDownload.frame.x + parseInt((frmPatientList.fcDownload.width).replace("dp", "")))
                    var marginRight = devWidth - (printMenuWidth) - gapIn
                    currentForm.fcPrintMenu.left = marginRight;
                }
                currentForm.fcPrintMenu.setVisibility(true);
                currentForm.fcDownload.skin = "sknfcgray";
            } else {
                kony.print("in print_flag false");
                currentForm.fcPrintMenu.setVisibility(false);
                currentForm.fcDownload.skin = "slFbox";
            }
        }
        currentForm.forceLayout();
    }
};
//=========================
//Administration
//=========================
var dashboard_showAdministration = function() {
    patientListConstants.weekRange = "";
    kony.print("In dashboard_showAdministration");
    var currentForm = kony.application.getCurrentForm().id;
    if (!isIpad && currentForm != null && currentForm == frmAdmin.id) { //Close the Menu if is on same form
        menu_toggleSideMenu();
    } else {
        if (!isIpad && (userInfo.viewAdministration == GENERAL_CONSTANTS.TEXT_TRUE || userInfo.editAdminstration == GENERAL_CONSTANTS.TEXT_TRUE)) {
            facilityListModule.getFilteredFacilityList();
            facilityListConstants.clearSortAndFilter();
        }
    }
};
var displayAppVersion = function(currentForm) {
    var currentfrm = currentForm; // kony.application.getCurrentForm();
    if (currentfrm == null) {
        currentfrm = kony.application.getCurrentForm();
    }
    kony.print("appConfig.appVersion----" + appConfig.appVersion + " currentform " + currentfrm.id);
    if (currentfrm.id === "frmLogin") {
        frmLogin.lblversion.text = "Version: " + appConfig.appVersion;
    } else if (currentfrm.id === "frmSelectFacility") {
        kony.print("frmSelectFacility----");
        frmSelectFacility.lblversion.text = "Version: " + appConfig.appVersion;
    } else {
        kony.print("currentfrm----" + currentfrm.id + "currentfrm.rcfooter.text" + currentfrm.fcmstfooter.rcfooter.text);
        currentfrm.fcmstfooter.rcfooter.left = "25dp";
        if (isIphone) {
            if (SYNC_CONSTANTS.isAppOffline) {
                currentfrm.fcmstfooter.rcfooter.text = "Version: " + appConfig.appVersion + "    You are in offline mode; any changes made will be saved to the server when a connection is available.";
            } else {
                currentfrm.fcmstfooter.rcfooter.text = "Version: " + appConfig.appVersion;
            }
        } else {
            if (SYNC_CONSTANTS.isAppOffline && isIpad) {
                currentfrm.fcmstfooter.rcfooter.text = "Version: " + appConfig.appVersion + "    &copy; All Rights Reserved." + "                     You are in offline mode; any changes made will be saved to the server when a connection is available.";
            } else {
                currentfrm.fcmstfooter.rcfooter.text = "Version: " + appConfig.appVersion + "    &copy; All Rights Reserved.";
            }
        }
    }
    com.healogics.utility.dismissLoading();
};
/*********************Popupnotification****************************/
var popupnotification_okayButtonHandler = function() {
    var selectedNotifications = [];
    for (var index in popupnotification.segmentPushNotifications.data) {
        var segmentObj = popupnotification.segmentPushNotifications.data[index];
        if (segmentObj.btnDoNotShow.skin === "sknbtncheck") {
            selectedNotifications.push(segmentObj.notificationID);
        }
    }
    if (selectedNotifications.length > 0) {
        popupnotification_dismissNotification(selectedNotifications);
    }
    popupnotification.dismiss();
};
var popupnotification_doNotShowButtonHandler = function(eventObj) {
    var selectedItem = "";
    var selectedIndex = "";
    if (isIpad) {
        selectedItem = popupnotification.segmentPushNotifications.focusedItem;
        selectedIndex = popupnotification.segmentPushNotifications.focusedIndex[1];
    } else {
        selectedItem = popupnotification.segmentPushNotifications.focuseditem;
        selectedIndex = popupnotification.segmentPushNotifications.focusedindex;
    }
    if (eventObj.skin === "sknbtnuncheck") {
        selectedItem.btnDoNotShow = {
            "skin": "sknbtncheck"
        };
    } else {
        selectedItem.btnDoNotShow = {
            "skin": "sknbtnuncheck"
        };
    }
    popupnotification.segmentPushNotifications.setDataAt(selectedItem, selectedIndex);
};
var popupnotification_getPushNotifications = function() {
    var inputData = {
        "facilityID": userInfo.presentFacilityId,
        "blueBookCode": "",
        "userID": userInfo.userId
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_GETPUSHNOTIFICATION, {
        "Authorization": userInfo.headerAccessToken,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, popupnotification_getPushNotificationSuccessCallback, popupnotification_getPushNotificationFailureCallback, true);
};
var popupnotification_getPushNotificationSuccessCallback = function(response) {
    kony.print("Notification List------->" + JSON.stringify(response));
    if (response !== null && response !== "" && response.opstatus === 0 && response.statusCode === "200") {
        var segmentArray = [];
        for (var item in response.Notification) {
            var notification = response.Notification[item];
            var segmentObj = {
                "lblTitle": com.healogics.utility.isEmpty(notification.title) ? "" : notification.title,
                "lblDescription": notification.description,
                "btnDoNotShow": {
                    "skin": "sknbtnuncheck"
                },
                "notificationID": notification.notificationID,
                "lblDoNotShow": "Do not show this message again"
            };
            if (!com.healogics.utility.isEmpty(notification.hyperlink)) {
                segmentObj.lnkWebsite = {
                    "text": notification.hyperlink,
                    "externalURL": notification.hyperlink
                };
                segmentObj.hyperlink = notification.hyperlink;
            } else {
                //segmentObj.lnkWebsite = {"isVisible":false};
            }
            segmentArray.push(segmentObj);
        }
        popupnotification.segmentPushNotifications.setData(segmentArray);
        if (segmentArray.length >= 2) {
            if (!isIpad) {
                //popupnotification.containerHeight = 52;
                popupnotification.segmentPushNotifications.containerHeight = 68;
            } else {
                popupnotification.containerHeight = 45;
                popupnotification.segmentPushNotifications.containerHeight = 68;
            }
        } else {
            if (!isIpad) {
                popupnotification.containerHeight = 33;
                popupnotification.segmentPushNotifications.containerHeight = 33;
            } else {
                popupnotification.containerHeight = 28;
                popupnotification.segmentPushNotifications.containerHeight = 32;
            }
        }
        if (segmentArray.length > 0) {
            popupnotification.enableScrolling = false;
            popupnotification.show();
        }
    }
};
var popupnotification_getPushNotificationFailureCallback = function(response) {};
var popupnotification_dismissNotification = function(selectedNotifications) {
    var inputData = {
        "facilityID": userInfo.presentFacilityId,
        "userName": userInfo.userName,
        "userID": userInfo.userId,
        "notificationDetails": selectedNotifications
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_DISMISSNOTIFICATION, {
        "Authorization": userInfo.headerAccessToken,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, popupnotification_dismissNotificationSuccessCallback, popupnotification_dismissNotificationFailureCallback, true);
};
var popupnotification_dismissNotificationSuccessCallback = function(response) {
    kony.print(response);
};
var popupnotification_dismissNotificationFailureCallback = function(response) {};
var popupnotification_onHyperlinkClick = function() {
    kony.application.openURL(popupnotification.segmentPushNotifications.selectedItems[0].hyperlink);
};
/*********************Popupnotification****************************/
//----iPhone------
var onClick_back = function() {
    frmPatientList.fcmenu.skin = "slFbox";
    frmPatientList.show();
    isUploadButtonClicked = false;
};
var onClick_searchPatients = function() {
    frmPatientList.fcmenu.skin = "slFbox";
    frmPatientList.fcoptionsmenu.setVisibility(false);
    frmPatientList.tbpatientsearch.text = "";
    if (frmPatientList.tbpatientsearch.isVisible) frmPatientList.tbpatientsearch.setVisibility(false);
    else {
        frmPatientList.tbpatientsearch.setFocus(true);
        frmPatientList.tbpatientsearch.setVisibility(true);
    }
};
var switchFaclityonClick = function() {
    patientId_iPhone = "";
    frmPatientList.fcmenu.skin = "slFbox";
    SwitchFacility_UpdateFacility();
};

function showConflictResolution() {
    kony.print("inside showConflictResolution");
    resolveConflictConstants.isFirstTime = true;
    resolveConflict_cntrl_offline.mapSubStepDetailsByFacilityId();
}

function searchPatient_closeSearchList() {
    kony.print("---- In searchPatient_closeSearchList ----");
    var currentform = kony.application.getCurrentForm();
    kony.print("---- In searchPatient_closeSearchList currentform----" + currentform.id);
    try {
        if (deepLinkInfo.isDeepLinkFlow != true && currentform.fcsearchdropdown != null && currentform.fcsearchdropdown.isVisible) {
            currentform.imgSearchIcon.src = "search.png";
            currentform.tbpatientsearch.text = "";
            currentform.segSearch.setFocus(true);
            currentform.fcsearchdropdown.setVisibility(false);
        }
    } catch (error) {
        kony.print("---- In searchPatient_closeSearchList error----" + error);
    }
    if (currentform.id == "frmPatientSummary") {
        frmPatientSummary.fcwoundslist.setVisibility(false);
    }
}
//--------------------------