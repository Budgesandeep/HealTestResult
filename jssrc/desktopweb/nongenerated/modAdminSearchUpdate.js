//Type your code here
FACILITY_LIST_SEARCH_DATA = [];
var selected_value = "Search by";
var selected_Row = "";
//Search By Drop down Selection - listbox
var frmAdmin_OnSearchTypeSelection = function() {
    selected_value = frmAdmin.lbadminsearchby.selectedKeyValue[1];
    kony.print("selected_value--->" + selected_value);
};
//Method to highlight on focus -change skin
var frmAdmin_togglefcadminpopupSearchbySkin = function() {
    frmAdmin.fcadminsearchbypopup.skin = "skfcadminsearchbypopup";
};
//Method to Search By Drop down Selection - popup with segment/Hbox
var frmAdmin_OnSearchTypeSegmentSelection = function(selectedRow) {
    if (popupAdminSearchby.segpopupAdminSearchby.isVisible) {
        selected_value = popupAdminSearchby.segpopupAdminSearchby.data[selectedRow].lbsegpopupAdminSearchby;
        kony.print("selected_value--->" + selected_value);
    } else if (popupAdminSearchby.hboxpopupAdminSearchby.isVisible) {
        selected_Row = selectedRow;
        setskinSearchByPopup(selected_Row);
        kony.print("obj event--->" + selectedRow.id);
        if (selectedRow.id == "hboxpopupFacilityname") {
            selected_value = "Facility Name";
            frmAdmin.tbadminsearch.textInputMode = constants.TEXTBOX_INPUT_MODE_ANY;
            kony.print("selected_value--->" + selected_value);
        } else if (selectedRow.id == "hboxpopupFacilityID") {
            selected_value = "Facility ID";
            frmAdmin.tbadminsearch.textInputMode = constants.TEXTBOX_INPUT_MODE_NUMERIC;
            kony.print("selected_value--->" + selected_value);
        } else if (selectedRow.id == "hboxpopupBluebookID") {
            selected_value = "Bluebook ID";
            frmAdmin.tbadminsearch.textInputMode = constants.TEXTBOX_INPUT_MODE_ANY;
            kony.print("selected_value--->" + selected_value);
        }
    }
    frmAdmin.lbadminsearchbydropdown.text = selected_value;
    popupAdminSearchby.dismiss();
};
//Method to toggle skin on hover of Search By Drop down
var frmAdmin_toggleSkinSearchByPopup = function(hoverRow) {
    setskinSearchByPopup(hoverRow);
};
//Method to set skin of selected Search By Value and display popup
var frmAdmin_setSkinSearchByPopup = function() {
    frmAdmin.fcadminsearchbypopup.skin = "skfcblueroundedcorners";
    setskinSearchByPopup(selected_Row);
    popupAdminSearchby.setContext({
        widget: frmAdmin.fcadminsearchbypopup,
        anchor: "bottom"
    });
    popupAdminSearchby.show();
};
var setskinSearchByPopup = function(selectedorHoverRow) {
    if (selectedorHoverRow !== "") {
        popupAdminSearchby.hboxpopupFacilityname.skin = "skhboxdarkgray";
        popupAdminSearchby.hboxpopupBluebookID.skin = "skhboxdarkgray";
        popupAdminSearchby.hboxpopupFacilityID.skin = "skhboxdarkgray";
        popupAdminSearchby.lbpopupAdminSearchbyBluebookID.skin = "sklbsegpopupAdminSearchby";
        popupAdminSearchby.lbpopupAdminSearchbyFacilityID.skin = "sklbsegpopupAdminSearchby";
        popupAdminSearchby.lbpopupAdminSearchbyFacilityName.skin = "sklbsegpopupAdminSearchby";
        if (selectedorHoverRow.id == "hboxpopupFacilityname") {
            popupAdminSearchby.hboxpopupFacilityname.skin = "skhboxdarkbluehover";
            popupAdminSearchby.lbpopupAdminSearchbyFacilityName.skin = "sklbsegpopupAdminSearchbyhover";
        } else if (selectedorHoverRow.id == "hboxpopupFacilityID") {
            popupAdminSearchby.hboxpopupFacilityID.skin = "skhboxdarkbluehover";
            popupAdminSearchby.lbpopupAdminSearchbyFacilityID.skin = "sklbsegpopupAdminSearchbyhover";
        } else if (selectedorHoverRow.id == "hboxpopupBluebookID") {
            popupAdminSearchby.hboxpopupBluebookID.skin = "skhboxdarkbluehover";
            popupAdminSearchby.lbpopupAdminSearchbyBluebookID.skin = "sklbsegpopupAdminSearchbyhover";
        }
    }
};
var frmAdmin_OnSearchButtonClick = function() {
    frmAdmin.lblSeperator1.height = "45dp";
    frmAdmin.lblSeperator2.height = "45dp";
    frmAdmin.lblSeperator3.height = "45dp";
    frmAdmin.lblSeperator4.height = "45dp";
    frmAdmin.lblSeperator5.height = "45dp";
    frmAdmin.lblSeperator6.height = "45dp";
    frmAdmin.lblSeperator7.height = "45dp";
    frmAdmin.lblSeperator8.height = "45dp";
    if (selected_value != "Search by") {
        frmAdmin_alphabetsskin();
        if (frmAdmin.tbadminsearch.text.trim() != "") {
            FACILITY_LIST_SEARCH_DATA = [];
            if (selected_value == "Facility ID") {
                frmAdmin.segfacilitylist.removeAll();
                facilitySearchByModule.getSearchedById();
            } else if (selected_value == "Facility Name") {
                frmAdmin.segfacilitylist.removeAll();
                facilitySearchByModule.getSearchedByName();
            } else if (selected_value == "Bluebook ID") {
                frmAdmin.segfacilitylist.removeAll();
                facilitySearchByModule.getSearchedByBid();
            }
        } else {
            frmAdmin_onClearSearchFilter();
        }
    } else {
        // code to alert if Search by option is not selected - not asked so far
    }
};
//Search Facility Module
var facilitySearchByModule = {};
facilitySearchByModule.getSearchedById = function() {
    var inputData = {
        "userId": userInfo.userId,
        "accessToken": userInfo.accessToken,
        "facilityId": userInfo.presentFacilityId,
        "id": frmAdmin.tbadminsearch.text.trim()
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_ADMINSEARCHBYID, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "facilityId": userInfo.presentFacilityId,
        "userName": userInfo.userName, //pranav
        "userId": userInfo.userId,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, facilitySearchByModule.SearchBySuccessCallback, facilitySearchByModule.SearchByFailureCallback);
};
facilitySearchByModule.getSearchedByName = function() {
    var inputData = {
        "userId": userInfo.userId,
        "accessToken": userInfo.accessToken,
        "facilityId": userInfo.presentFacilityId,
        "name": encodeURIComponent(frmAdmin.tbadminsearch.text.trim())
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_ADMINSEARCHBYNAME, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, facilitySearchByModule.SearchBySuccessCallback, facilitySearchByModule.SearchByFailureCallback);
};
facilitySearchByModule.getSearchedByBid = function() {
    var inputData = {
        "userId": userInfo.userId,
        "accessToken": userInfo.accessToken,
        "facilityId": userInfo.presentFacilityId,
        "bid": frmAdmin.tbadminsearch.text.trim()
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_ADMINSEARCHBYBID, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, facilitySearchByModule.SearchBySuccessCallback, facilitySearchByModule.SearchByFailureCallback);
};
//successCallback for facility search 
facilitySearchByModule.SearchBySuccessCallback = function(response) {
        kony.print("Facility List Search Success Callback Response:::" + JSON.stringify(response));
        if (response !== null && response.opstatus === 0 && response.statuscode == "200") {
            if (response.facilityList !== undefined && response.facilityList.length > 0) {
                kony.print("Facility List Success Callback Response:::" + JSON.stringify(response.facilityList));
            } else {
                kony.print("-------facilitylist empty-------");
            }
        }
        var facilityList = response.facilityList;
        var facilityListSegArr = [];
        var facilityListDataArr = [];
        if (facilityList !== null && facilityList !== undefined && facilityList.length > 0) {
            for (var i in facilityList) {
                var tempRecord = {
                    "lblline": "",
                    "lblline2": "",
                    "lblline3": "",
                    "lblline4": "",
                    "lblline5": "",
                    "lblline6": "",
                    "lblline7": "",
                    "lblline9": ""
                };
                tempRecord["lblfacilityname"] = facilityList[i]["name"];
                tempRecord["lblfacilityid"] = facilityList[i]["facilityId"];
                tempRecord["lblcity"] = facilityList[i]["city"];
                tempRecord["lblstate"] = facilityList[i]["state"]; // "None";
                tempRecord["lblzone"] = facilityList[i]["zone"];
                tempRecord["lblbluebookid"] = facilityList[i]["blueBookId"];
                tempRecord["lblfacilitytype"] = facilityList[i]["facilityType"];
                if (facilityList[i]["facilityScreens"] != null) {
                    if (Array.isArray(facilityList[i]["facilityScreens"])) {
                        for (var j in facilityList[i]["facilityScreens"]) {
                            if (facilityList[i]["facilityScreens"][j]["screenId"] == "2") {
                                tempRecord["btncheckbox1"] = facilityList[i]["facilityScreens"][j]["enableFlag"];
                            } else {
                                tempRecord["btncheckbox2"] = facilityList[i]["facilityScreens"][j]["enableFlag"];
                            }
                        }
                    } else {
                        var facilityScreenObject = JSON.parse(facilityList[i]["facilityScreens"]);
                        if (facilityScreenObject["screenId"] == "2") {
                            tempRecord["btncheckbox1"] = facilityScreenObject["enableFlag"];
                        } else if (facilityScreenObject["screenId"] == "1") {
                            tempRecord["btncheckbox2"] = facilityScreenObject["enableFlag"];
                        }
                    }
                    kony.print("---tempRecord[btncheckbox1] :::" + tempRecord["btncheckbox1"]);
                    kony.print("---tempRecord[btncheckbox2] :::" + tempRecord["btncheckbox2"])
                    if (tempRecord["btncheckbox1"] == "false" || tempRecord["btncheckbox1"] == false) {
                        tempRecord["btncheckbox1"] = {
                            skin: "sknbtnuncheck",
                            hoverSkin: "skbtntranshover"
                        };
                    } else {
                        tempRecord["btncheckbox1"] = {
                            skin: "sknbtncheck",
                            hoverSkin: "skbtntranshover"
                        };
                    }
                    if (tempRecord["btncheckbox2"] == "false" || tempRecord["btncheckbox2"] == false) {
                        tempRecord["btncheckbox2"] = {
                            skin: "sknbtnuncheck",
                            hoverSkin: "skbtntranshover"
                        };
                    } else {
                        tempRecord["btncheckbox2"] = {
                            skin: "sknbtncheck",
                            hoverSkin: "skbtntranshover"
                        };
                    }
                } else {
                    tempRecord["btncheckbox1"] = {
                        skin: "sknbtnuncheck",
                        hoverSkin: "skbtntranshover"
                    };
                    tempRecord["btncheckbox2"] = {
                        skin: "sknbtnuncheck",
                        hoverSkin: "skbtntranshover"
                    };
                }
                FACILITY_LIST_SEARCH_DATA.push(tempRecord);
                kony.print("FACILITY_LIST_SEARCHBYID_DATA values--" + JSON.stringify(FACILITY_LIST_SEARCH_DATA));
            }
            frmAdmin.lblnorecords.setVisibility(false);
        } else {
            frmAdmin_noRecords();
        }
        adminSearchSkin_userRole();
        glbStartingRecord = 0;
        glbEndingRecord = 40;
        totalRecords = FACILITY_LIST_SEARCH_DATA.length;
        showHidePageButtons(totalRecords);
        count = 1;
        frmAdmin.lblpagenumber.text = count + " " + "out of" + " " + Math.ceil(totalRecords / 40);
        FACILITY_LIST_PAGE_DATA = paginationFacilityList(FACILITY_LIST_SEARCH_DATA, glbStartingRecord, glbEndingRecord, 40);
        paginationsData = FACILITY_LIST_SEARCH_DATA;
        frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
        settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
        frmAdmin.btnpageprevious.skin = "skngraybgbold";
        frmAdmin.btnpageprevious.hoverSkin = "";
        frmAdmin.btnpagenext.skin = "sknbtnbluebg";
        frmAdmin.btnpagenext.hoverSkin = "skbtntranshover";
        frmAdmin.forceLayout();
    }
    //Facility ListFailureCallback
facilitySearchByModule.SearchByFailureCallback = function(response) {
    kony.print("Facility List Error Callback Response:::" + JSON.stringify(response));
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if (response != null && response.opstatus === 1582 && response.statuscode === "") {
        error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
        loginModule.showLoginScreen(error_label);
    } else {
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
};
// Update Facility Module
var facilityUpdateModule = {};
facilityUpdateModule.getFacilityUpdated = function() {
    kony.print("updateRecordData111:::" + JSON.stringify(updateRecordData));
    var inputData = {
        "accessToken": userInfo.accessToken,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "facilityScreens": JSON.stringify(updateRecordData),
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_ADMINFACILITYUPDATE, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "facilityId": userInfo.presentFacilityId,
        "userId": userInfo.userId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, facilityUpdateModule.updateSuccessCallback, facilityUpdateModule.updateFailureCallback);
};
//Success
facilityUpdateModule.updateSuccessCallback = function(response) {
        kony.print("Facility List Update Success Callback Response:::" + JSON.stringify(response));
        if (response !== null && response.opstatus === 0 && response.statuscode == "200") {
            //LiveFacilities are updated.. Clearing listfacilities list...
            if (addNotificationModule !== null && addNotificationModule !== '' && addNotificationModule !== 'undefined') {
                addNotificationModule.facilityListFromService = [];
            }
            var statusdesc = response.statusdesc;
            kony.print("statusdesc:::" + statusdesc);
            facilityListConstants.clearSortAndFilter();
            popupAdmin_Cancel();
            frmAdmin.tbadminsearch.text = "";
            if (frmAdmin.lbadminsearchby.isVisible) {
                frmAdmin.lbadminsearchby.selectedKey = "1";
            } else {
                frmAdmin.lbadminsearchbydropdown.text = "Search by";
                selected_value = "Search by";
            }
        }
    }
    //Failure
facilityUpdateModule.updateFailureCallback = function(response) {
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if (response != null && response.opstatus === 1582 && response.statuscode === "") {
        error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
        loginModule.showLoginScreen(error_label);
    } else {
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
};
var adminSearchSkin_userRole = function() {
    if (userInfo.viewAdministration == GENERAL_CONSTANTS.TEXT_TRUE && userInfo.editAdminstration != GENERAL_CONSTANTS.TEXT_TRUE) {
        for (var i in FACILITY_LIST_SEARCH_DATA) {
            if (FACILITY_LIST_SEARCH_DATA[i].btncheckbox1.skin == "sknbtnuncheck") {
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox1.skin = "sknbtnuncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox1.focusskin = "sknbtnuncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox1.hoverSkin = ""
            } else {
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox1.skin = "sknbtncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox1.focusskin = "sknbtncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox1.hoverSkin = ""
            }
            if (FACILITY_LIST_SEARCH_DATA[i].btncheckbox2.skin == "sknbtnuncheck") {
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox2.skin = "sknbtnuncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox2.focusskin = "sknbtnuncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox2.hoverSkin = ""
            } else {
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox2.skin = "sknbtncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox2.focusskin = "sknbtncheckdisable"
                FACILITY_LIST_SEARCH_DATA[i].btncheckbox2.hoverSkin = ""
            }
        }
    }
}