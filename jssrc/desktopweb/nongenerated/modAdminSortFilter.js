//Type your code here
var isSelectAllCheckMarkSelected = false;
//On basis of filter object this method will Filter all the values from Data
function filterDataBasedonParameters1(arrList, arrParameters) {
    kony.print("------ arrList ------ " + JSON.stringify(arrList));
    kony.print("------ arrList length ------ " + arrList.length);
    kony.print("------ arrParameters ------ " + JSON.stringify(arrParameters)); //lblnextappt
    facilityListConstants.filterData = [];
    var filterArr;
    if (FACILITY_LIST_ALPHABTICAL_DATA !== null && FACILITY_LIST_ALPHABTICAL_DATA !== undefined && FACILITY_LIST_ALPHABTICAL_DATA.length > 0) {
        filterArr = FACILITY_LIST_ALPHABTICAL_DATA;
    } else {
        filterArr = FACILITY_LIST_SERVICE_DATA;
    }
    kony.print("------ FACILITY_LIST_SERVICE_DATA ------ " + JSON.stringify(FACILITY_LIST_SERVICE_DATA));
    var appliedFilterParameters = Object.keys(arrParameters);
    kony.print("------ appliedFilterParameters ------ " + appliedFilterParameters);
    kony.print("------ appliedFilterParameters length ------ " + appliedFilterParameters.length);
    if (appliedFilterParameters.length === 0) {
        facilityListConstants.filterData = filterArr;
    } else {
        for (var i = 0; i < arrList.length; i++) {
            var tempObject = arrList[i];
            var flag = false;
            kony.print("------ tempObject ------ " + JSON.stringify(tempObject));
            var filterVal = Object.keys(arrParameters);
            kony.print("------ filterVal ------ " + JSON.stringify(filterVal));
            for (var j = 0; j < filterVal.length; j++) {
                var str = tempObject[filterVal[j]];
                str = str.toString();
                kony.print("------ str ------ " + JSON.stringify(str));
                var str1 = arrParameters[filterVal[j]];
                str1 = str1.toString();
                kony.print("------ str1 ------ " + JSON.stringify(str1));
                if (str1 === "" || str1 === null || str1 === undefined) {
                    continue;
                }
                var arr = str1.split(",");
                kony.print("------ arr ------ " + JSON.stringify(arr));
                if (arr.length > 1) {
                    if (sortAndFilterConstants.selectedFilter == "lblnextappt") { //"lblnextappt"){//Split the time from date for Next Appointment 
                        var value = str.split(" ");
                        str = value[0];
                    }
                    if (com.healogics.utility.listContainsValue(str, arr)) {
                        kony.print("------ Contains ------ ");
                        flag = true;
                    } else {
                        kony.print("------ Not Contains ------ ");
                        flag = false;
                        break;
                    }
                } else {
                    if (sortAndFilterConstants.selectedFilter == "lblnextappt") { //"lblnextappt"){//Split the time from date for Next Appointment 
                        var arrDateValue = str.split(" ");
                        str = arrDateValue[0];
                    }
                    if (str === str1) {
                        flag = true;
                    } else {
                        flag = false;
                        break;
                    }
                }
            }
            kony.print("------ flag ------ " + flag);
            if (flag === true || flag === "true") {
                if (com.healogics.utility.listContainsValue(tempObject, facilityListConstants.filterData)) {
                    kony.print("------ TRUE ------ ");
                } else {
                    facilityListConstants.filterData.push(tempObject);
                    kony.print("------ FALSE ------ ");
                }
            }
        }
    }
    kony.print("------ facilityListConstants.filterData ------ " + JSON.stringify(facilityListConstants.filterData));
    kony.print("------ facilityListConstants.filterData count ------ " + facilityListConstants.filterData.length);
    totalRecords = facilityListConstants.filterData.length;
    count = 1;
    frmAdmin.lblpagenumber.text = count + " " + "out of" + " " + Math.ceil(totalRecords / 40);
    showHidePageButtons(totalRecords);
    if (facilityListConstants.filterData.length > 40) {
        glbStartingRecord = 0;
        glbEndingRecord = 40;
        FACILITY_LIST_PAGE_DATA = paginationFacilityList(facilityListConstants.filterData, glbStartingRecord, glbEndingRecord, 40);
        paginationsData = facilityListConstants.filterData;
        frmAdmin.btnpagenext.setVisibility(true);
        frmAdmin.btnpageprevious.setVisibility(true);
    } else {
        if (facilityListConstants.filterData.length === 0 || facilityListConstants.filterData === null || facilityListConstants.filterData === []) {
            frmAdmin.lblnorecords.setVisibility(true);
            frmAdmin.segfacilitylist.setVisibility(false);
            frmAdmin_noRecords();
        } else {
            FACILITY_LIST_PAGE_DATA = facilityListConstants.filterData;
            frmAdmin.lblnorecords.setVisibility(false);
            frmAdmin.segfacilitylist.setVisibility(true);
        }
        frmAdmin.btnpagenext.setVisibility(false);
        frmAdmin.btnpageprevious.setVisibility(false);
    }
    frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
    settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
    frmAdmin.forceLayout();
}
//On Apply of Any Filter this method will create filter object to save all filter selected values 
var prepareFilterParameters1 = function() {
    var filterKey = "";
    var filterValue = "";
    var arrSelectedChecks = popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeyValues;
    kony.print("-------arrSelectedChecks------- " + arrSelectedChecks);
    if (arrSelectedChecks === null) {
        if (sortAndFilterConstants.selectedFilter === "lblcity") {
            delete sortAndFilterConstants.adminFilterObject.lblcity;
        } else if (sortAndFilterConstants.selectedFilter === "lblstate") {
            delete sortAndFilterConstants.adminFilterObject.lblstate;
        } else if (sortAndFilterConstants.selectedFilter === "lblzone") {
            delete sortAndFilterConstants.adminFilterObject.lblzone;
        } else if (sortAndFilterConstants.selectedFilter === "lblfacilitytype") {
            delete sortAndFilterConstants.adminFilterObject.lblfacilitytype;
        } else if (sortAndFilterConstants.selectedFilter === "huddleTool") {
            delete sortAndFilterConstants.adminFilterObject.huddleTool;
        } else if (sortAndFilterConstants.selectedFilter === "photoMobile") {
            delete sortAndFilterConstants.adminFilterObject.photoMobile;
        }
    } else {
        for (var i = 0; i < arrSelectedChecks.length; i++) {
            if (filterValue === "") {
                filterValue = arrSelectedChecks[i][1];
            } else {
                filterValue = filterValue + "," + arrSelectedChecks[i][1];
            }
        }
        kony.print("-------filterValue------- " + filterValue);
        if (sortAndFilterConstants.selectedFilter === "lblcity") {
            sortAndFilterConstants.adminFilterObject.lblcity = filterValue;
        } else if (sortAndFilterConstants.selectedFilter === "lblstate") {
            sortAndFilterConstants.adminFilterObject.lblstate = filterValue;
        } else if (sortAndFilterConstants.selectedFilter === "lblzone") {
            sortAndFilterConstants.adminFilterObject.lblzone = filterValue;
        } else if (sortAndFilterConstants.selectedFilter === "lblfacilitytype") {
            sortAndFilterConstants.adminFilterObject.lblfacilitytype = filterValue;
        } else if (sortAndFilterConstants.selectedFilter === "huddleTool") {
            sortAndFilterConstants.adminFilterObject.huddleTool = filterValue;
        } else if (sortAndFilterConstants.selectedFilter === "photoMobile") {
            sortAndFilterConstants.adminFilterObject.photoMobile = filterValue;
        }
    }
    kony.print("-------filterKey------- " + filterKey);
    kony.print("--------Filter Object-------" + JSON.stringify(sortAndFilterConstants.adminFilterObject));
    var filterArr;
    if (FACILITY_LIST_ALPHABTICAL_DATA !== null && FACILITY_LIST_ALPHABTICAL_DATA !== undefined && FACILITY_LIST_ALPHABTICAL_DATA.length > 0) {
        filterArr = FACILITY_LIST_ALPHABTICAL_DATA;
    } else {
        filterArr = FACILITY_LIST_SERVICE_DATA;
    }
    filterDataBasedonParameters1(filterArr, sortAndFilterConstants.adminFilterObject);
};
//frmFacilityList show sortpopup and save all the related data that which filter is selected 
function frmFacilityList_show_sortpopup(eventobject) {
    //Clear shorting filter
    popupAdminSortFilter.hboxascending.skin = "skhboxbluebg";
    popupAdminSortFilter.hboxdescending.skin = "skhboxbluebg";
    //Clear shorting filter End----------------------
    sortAndFilterConstants.selectedFilter = sortAndFilterConstants.arrAdminFilterValues[eventobject.id];
    sortAndFilterConstants.selectedFilterID = eventobject.id;
    kony.print("sortAndFilterConstants.selectedFilter-----" + sortAndFilterConstants.selectedFilter);
    //Get and Set Master Data of Check Box Group-------------
    var arrFacilityListSegData = clone(FACILITY_LIST_ALPHABTICAL_DATA);
    if (sortAndFilterConstants.selectedFilter != "huddleTool" && sortAndFilterConstants.selectedFilter != "photoMobile") {
        arrFacilityListSegData = sortAndFilterModule.sortSelectedColumnData(arrFacilityListSegData, false);
    }
    var arrCheckBoxValues = [
        ["0", "Select All"]
    ];
    var arrCheckBoxAllPairOnlyValues = [];
    var arrCheckMarkedValues = [];
    var arrCheckMarkedKeys = [];
    kony.print("arrFacilityListSegData-----" + JSON.stringify(arrFacilityListSegData));
    if (sortAndFilterConstants.adminFilterObject[sortAndFilterConstants.selectedFilter] && sortAndFilterConstants.adminFilterObject[sortAndFilterConstants.selectedFilter] !== undefined && sortAndFilterConstants.adminFilterObject[sortAndFilterConstants.selectedFilter] !== null) {
        var arrSelectedValues = sortAndFilterConstants.adminFilterObject[sortAndFilterConstants.selectedFilter];
        kony.print("arrSelectedValues-----" + arrSelectedValues);
        kony.print("sortAndFilterConstants.adminFilterObject[sortAndFilterConstants.selectedFilter]-----" + sortAndFilterConstants.adminFilterObject[sortAndFilterConstants.selectedFilter]);
        arrCheckMarkedValues = arrSelectedValues.split(',');
        kony.print("arrCheckMarkedValues-----" + arrCheckMarkedValues);
    } else {
        if (Object.keys(sortAndFilterConstants.adminFilterObject).length > 0) {
            for (var key = 0; key < facilityListConstants.filterData.length; key++) {
                var keyValue;
                if (facilityListConstants.filterData[key][sortAndFilterConstants.selectedFilter] != undefined && facilityListConstants.filterData[key][sortAndFilterConstants.selectedFilter] != null) {
                    if ((typeof facilityListConstants.filterData[key][sortAndFilterConstants.selectedFilter] == 'string')) {
                        keyValue = facilityListConstants.filterData[key][sortAndFilterConstants.selectedFilter];
                    } else {
                        keyValue = tempFilterData[key][sortAndFilterConstants.selectedFilter].text;
                    }
                    if (arrCheckMarkedValues.indexOf(keyValue) == -1) {
                        if ((typeof keyValue == 'string')) {
                            arrCheckMarkedValues.push(keyValue);
                        } else {
                            arrCheckMarkedValues = arrCheckMarkedValues.concat(keyValue);
                        }
                    }
                }
            }
            kony.print("arrCheckMarkedValues of filtered data -----" + arrCheckMarkedValues);
        }
    }
    if (arrFacilityListSegData.length > 0) {
        for (i = 0; i < arrFacilityListSegData.length; i++) {
            var arrCheckBoxPair = [];
            var pairKey = (i + 1).toString();
            arrCheckBoxPair.push(pairKey); //Push Pair Key
            var tempSegData = arrFacilityListSegData[i];
            var pairValue;
            if (sortAndFilterConstants.selectedFilter == "lblnextappt") { //"lblnextappt"){//Split the time from date for Next Appointment 
                var value = arrFacilityListSegData[i][sortAndFilterConstants.selectedFilter].split(" ");
                if (value.length > 1) {
                    pairValue = value[0];
                } else {
                    pairValue = arrFacilityListSegData[i][sortAndFilterConstants.selectedFilter].toString();
                }
            } else {
                pairValue = arrFacilityListSegData[i][sortAndFilterConstants.selectedFilter].toString();
            }
            if (pairValue !== "") {
                arrCheckBoxPair.push(pairValue); //Push Pair Value
                if (arrCheckBoxAllPairOnlyValues.indexOf(pairValue) == ARRAY_SEARCH_NOT_FOUND_INDEX) {
                    arrCheckBoxValues.push(arrCheckBoxPair);
                    arrCheckBoxAllPairOnlyValues.push(pairValue);
                    //if arrCheckMarkedValues have values then get the key of those values so we can check mark those items 
                    if (arrCheckMarkedValues.length > 0) {
                        if (arrCheckMarkedValues.indexOf(pairValue) > -1) { //Search the value 
                            arrCheckMarkedKeys.push(pairKey);
                            if (pairKey == "0") { //Check for Select all index is selected or not
                                isSelectAllCheckMarkSelected = true;
                            }
                        }
                    }
                    //------------------------
                }
            }
            //Check For Duplicate value in Arrray
            kony.print("arrCheckBoxValues-----" + arrCheckBoxValues);
            kony.print("arrCheckMarkedKeys-----" + arrCheckMarkedKeys);
        }
        popupAdminSortFilter.CheckBoxGroupFilterPopUp.masterData = arrCheckBoxValues;
        popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys = []; //Uncheck all the values
        var equalFlag = false;
        for (var temp = 1; temp < arrCheckBoxValues.length; temp++) {
            equalFlag = (arrCheckMarkedKeys[temp - 1] == arrCheckBoxValues[temp][0]) ? true : false;
        }
        if (equalFlag) {
            arrCheckMarkedKeys.push("0");
            isSelectAllCheckMarkSelected = true;
        }
        if (arrCheckMarkedKeys.length > 0) {
            popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys = arrCheckMarkedKeys; ///Check previous selcted  values
        }
    }
    //Get and Set Master Data of Check Box Group End----------------------
    var popupAnchor;
    if (sortAndFilterConstants.selectedFilter == "lblPrecautions") {
        popupAnchor = "left"
    } else {
        popupAnchor = "right"
    }
    popupAdminSortFilter.setContext({
        widget: frmAdmin[eventobject.id],
        anchor: popupAnchor
    });
    if (sortAndFilterConstants.selectedFilter == "huddleTool" || sortAndFilterConstants.selectedFilter == "photoMobile") {
        popupAdminSortFilter.vboxsorting.setVisibility(false);
        popupAdminSortFilter.lblfilter.setVisibility(false);
        popupAdminSortFilter.lblheader.text = "Filter";
        popupAdminSortFilter.imgline.setVisibility(false);
    } else {
        popupAdminSortFilter.vboxsorting.setVisibility(true);
        popupAdminSortFilter.lblfilter.setVisibility(true);
        popupAdminSortFilter.lblheader.text = "Sorting";
        popupAdminSortFilter.imgline.setVisibility(true);
    }
    if (arrFacilityListSegData !== null && arrFacilityListSegData !== undefined && arrFacilityListSegData.length > 0) {
        popupAdminSortFilter.show();
        frmAdmin.forceLayout();
    }
}
//Shorting Method--------------
var sort_by = function(field, reverse, primer) {
    var key = primer ? function(x) {
        return primer(x[field])
    } : function(x) {
        return x[field]
    };
    reverse = !reverse ? 1 : -1;
    return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    };
};
//This Function will invoke when Any of the sorting button click of sorting popup
function frmAdministration_Shorting(eventobject) {
    if (eventobject.id == "hboxascending") { //Ascending Order
        popupAdminSortFilter.hboxascending.skin = "skhboxbluebgSelected";
        popupAdminSortFilter.hboxdescending.skin = "skhboxbluebg";
        sortAndFilterConstants.adminSelectedSortingType = false; //false means"Ascending ";
    } else { //Descending Order
        popupAdminSortFilter.hboxascending.skin = "skhboxbluebg";
        popupAdminSortFilter.hboxdescending.skin = "skhboxbluebgSelected";
        sortAndFilterConstants.adminSelectedSortingType = true; //true means "Descending ";
    }
    kony.print("sortAndFilterConstants.adminSelectedSortingType ->" + sortAndFilterConstants.adminSelectedSortingType);
    if (popupAdminSortFilter.hboxascending.skin == "skhboxbluebgSelected" || popupAdminSortFilter.hboxdescending.skin == "skhboxbluebgSelected") {
        var admin_data = facilityListConstants.filterData;
        kony.print("admin_data--->>" + JSON.stringify(admin_data));
        admin_data.sort(sort_by(sortAndFilterConstants.selectedFilter, sortAndFilterConstants.adminSelectedSortingType, function(a) {
            return a.toUpperCase()
        }));
        kony.print("sortedList_data--->>" + admin_data);
        glbStartingRecord = 0;
        glbEndingRecord = 40;
        totalRecords = admin_data.length;
        count = 1;
        frmAdmin.lblpagenumber.text = count + " " + "out of" + " " + Math.ceil(totalRecords / 40);
        showHidePageButtons(totalRecords);
        FACILITY_LIST_PAGE_DATA = paginationFacilityList(admin_data, glbStartingRecord, glbEndingRecord, 40);
        paginationsData = admin_data;
        frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
        settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
        frmAdmin.forceLayout();
        frmAdmin.btnpageprevious.skin = "skngraybgbold";
        frmAdmin.btnpageprevious.hoverSkin = "";
        frmAdmin.btnpagenext.skin = "sknbtnbluebg";
        frmAdmin.btnpagenext.hoverSkin = "skbtntranshover";
    } else {
        kony.print("END---------------------------");
    }
    popupAdminSortFilter.dismiss();
}
//this method is called on selection of popup checkbox
function popupFilter_checkBox_onSelection1(eventobject) {
    kony.print("eventobject--->" + eventobject);
    var arrSelectedKeys = eventobject.selectedKeys;
    kony.print("arrSelectedKeys --" + arrSelectedKeys);
    kony.print("eventobject masterdata-->" + eventobject.masterData);
    kony.print("isSelectAllCheckMarkSelected -->" + isSelectAllCheckMarkSelected);
    if (isSelectAllCheckMarkSelected == true) { //uncheck All the check boxes
        if (arrSelectedKeys.indexOf("0") == ARRAY_SEARCH_NOT_FOUND_INDEX) {
            isSelectAllCheckMarkSelected = false;
            popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys = [];
            return;
        } else { //uncheck selcet all option as some other value is unchecked
            var index = arrSelectedKeys.indexOf("0");
            if (index > -1) {
                arrSelectedKeys.splice(index, 1);
                isSelectAllCheckMarkSelected = false;
                popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys = arrSelectedKeys;
                return;
            }
        }
    }
    kony.print("=====>>>>>>" + popupAdminSortFilter.CheckBoxGroupFilterPopUp.masterData.length);
    var index = arrSelectedKeys.indexOf("0");
    if (index > -1 || (popupAdminSortFilter.CheckBoxGroupFilterPopUp.masterData.length - 1 == popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys.length)) { //If Select All is checked then select All option OR  If All values are selected except Select All option than also check Select All option
        var arrAllKeys = [];
        for (i = 0; i < eventobject.masterData.length; i++) {
            var pair = eventobject.masterData[i];
            arrAllKeys.push(pair[0]);
        }
        isSelectAllCheckMarkSelected = true;
        kony.print("arrAllKeys---" + arrAllKeys);
        popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys = arrAllKeys;
    }
}
var adminSortAndFilter_clearData = function() {
    popupAdminSortFilter.hboxascending.skin = "skhboxbluebg";
    popupAdminSortFilter.hboxdescending.skin = "skhboxbluebg";
    popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys = []; //Uncheck all the values
    isSelectAllCheckMarkSelected = false;
    prepareFilterParameters1();
    frmAdmin[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilter";
    popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys = [];
};
//This Function will invoke when Clear/Apply button click of sorting popup
function frmAdministration_FilterPopup_Clear_Apply(eventobject) {
    kony.print("widget---12>" + eventobject.id);
    if (eventobject.id == "btnfilterclear") { //Clear selected value in selected Filter
        adminSortAndFilter_clearData();
        return;
    } else {
        //Apply All Filter Here
        kony.print("popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeyValues.indexOf(0)-----" + popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys.indexOf("0"));
        if (popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys == undefined || popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys.indexOf("0") === undefined || popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeyValues === null || popupAdminSortFilter.CheckBoxGroupFilterPopUp.selectedKeys.length === 0) {
            //If No value is selected or All values are selected then no filter will Apply
            adminSortAndFilter_clearData();
        } else {
            prepareFilterParameters1();
            frmAdmin[sortAndFilterConstants.selectedFilterID].skin = "skinBtnFilterHover";
        }
        //Shorting-----------------------------------------------------------------
        //Apply Sorting only if any of the shorting clicked
        if (popupAdminSortFilter.hboxascending.skin == "skhboxbluebgSelected" || popupAdminSortFilter.hboxdescending.skin == "skhboxbluebgSelected") {
            kony.print("admin_data--->>" + JSON.stringify(admin_data));
            FACILITY_LIST_SERVICE_DATA.sort(sort_by(sortAndFilterConstants.selectedFilter, sortAndFilterConstants.adminSelectedSortingType, function(a) {
                return a.toUpperCase()
            }));
            kony.print("sortedList_data--->>" + admin_data);
            glbStartingRecord = 0;
            glbEndingRecord = 40;
            totalRecords = FACILITY_LIST_SERVICE_DATA.length;
            count = 1;
            frmAdmin.lblpagenumber.text = count + " " + "out of" + " " + Math.ceil(totalRecords / 40);
            showHidePageButtons(totalRecords);
            FACILITY_LIST_PAGE_DATA = paginationFacilityList(FACILITY_LIST_SERVICE_DATA, glbStartingRecord, glbEndingRecord, 40);
            paginationsData = FACILITY_LIST_SERVICE_DATA;
            frmAdmin.segfacilitylist.setData(FACILITY_LIST_PAGE_DATA);
            settingLinesAdmin(FACILITY_LIST_PAGE_DATA.length);
            frmAdmin.forceLayout();
            frmAdmin.btnpageprevious.skin = "skngraybgbold";
            frmAdmin.btnpageprevious.hoverSkin = "";
            frmAdmin.btnpagenext.skin = "sknbtnbluebg";
            frmAdmin.btnpagenext.hoverSkin = "skbtntranshover";
        } else {
            kony.print("END---------------------------");
        }
        //Shorting End-----------------------------------------------------------------
    }
    popupAdminSortFilter.dismiss();
}
//Clear All filter--Clear Filter Object and Reload original Facilitylist values
function frmAdmin_Clear_All_filter() {
    sortAndFilterConstants.adminFilterObject = {};
    isSelectAllCheckMarkSelected = false;
    frmAdmin.imgdown1.skin = "skinBtnFilter";
    frmAdmin.imgdown2.skin = "skinBtnFilter";
    frmAdmin.imgdown3.skin = "skinBtnFilter";
    frmAdmin.imgdown4.skin = "skinBtnFilter";
    frmAdmin.imagedown5.skin = "skinBtnFilter";
    frmAdmin.imagedown6.skin = "skinBtnFilter";
}