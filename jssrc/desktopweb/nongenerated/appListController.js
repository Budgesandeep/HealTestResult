var applist_cntrl_offline = {};
/************************************************************************************
 * Get All Data of AppList
 *************************************************************************************/
applist_cntrl_offline.getAppListForOffline = function() {
    function successCallBack(res) {
        kony.print("getAppListForOffline success callback--------->");
        kony.print("getAppListForOffline success callback response--------->" + JSON.stringify(res));
        var response = {};
        if (res !== null) {
            response.appList = [];
            kony.print("<<RESPONSE>>>" + JSON.stringify(res[0]));
            if (!com.healogics.utility.isEmpty(res[0])) {
                response.taskCount = res[0]._taskCount;
                response.helpDeskNumber = res[0]._helpDeskNumber;
                for (i = 0; i < res.length; i++) {
                    var temp = {};
                    temp.appid = res[i]._appid;
                    temp.displayFlag = res[i]._displayFlag;
                    temp.enabledFlag = res[i]._enabledFlag;
                    response.appList.push(temp);
                }
                response.opstatus = 0;
                response.statuscode = "200";
                response.timestamp = res[0]._timestamp;
                switchFacility_module.updateFacilitySuccessCallback(response);
                kony.print("<<Success>>>" + JSON.stringify(res));
            } else {
                alert("No Data Returned for Applist from Service. Please contact Helpdesk.");
                kony.print("<<FAILURE>>>" + JSON.stringify(res));
            }
        }
    }

    function errorCallBack(res) {
        kony.print("getAppListForOffline failure callback");
        kony.print("getAppListForOffline Error callback response------->" + JSON.stringify(res));
    }
    com.healogics.offline.appListOffline.getAll(successCallBack, errorCallBack);
};
/************************************************************************************
 * Delete Terms and Condition for Same Facility ID
 *************************************************************************************/
applist_cntrl_offline.deleteRecordForUserId = function(userId) {
    function successCallBack(res) {
        kony.print("Record Deleted Successfully >>>>>");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }

    function errorCallBack(res) {
        kony.print("Delete Record Error Call Back >>>>>");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var wcs = "where userId = " + JSON.stringify(userId);
    com.healogics.offline.appListOffline.remove(wcs, successCallBack, errorCallBack, false);
};
/************************************************************************************
 * Get App List Data based on the Where Clause
 *************************************************************************************/
applist_cntrl_offline.getAppListForDiplay = function() {
    function successCallBack(res) {
        kony.print("getAppListForDiplay success callback--------->");
        kony.print("getAppListForDiplay success callback response--------->" + JSON.stringify(res));
        var response = {};
        if (res !== null) {
            response.appList = [];
            kony.print("<<RESPONSE>>>" + JSON.stringify(res[0]));
            if (!com.healogics.utility.isEmpty(res[0])) {
                response.taskCount = res[0]._taskCount;
                response.helpDeskNumber = res[0]._helpDeskNumber;
                ///Akshay - for purging and setting the document name and code
                SYNC_CONSTANTS.purgeDataInDays = res[0]._OfflineDateLimit;
                userInfo.documentTypeCode = res[0]._documentTypeCodeList;
                userInfo.documentTypeName = res[0]._documentTypeNameList;
                for (i = 0; i < res.length; i++) {
                    var temp = {};
                    temp.appid = res[i]._appid;
                    temp.displayFlag = res[i]._displayFlag;
                    temp.enabledFlag = res[i]._enabledFlag;
                    response.appList.push(temp);
                }
                response.opstatus = 0;
                response.statuscode = "200";
                response.timestamp = res[0]._timestamp;
                switchFacility_module.updateFacilitySuccessCallback(response);
                kony.print("<<Success>>>" + JSON.stringify(res));
            } else {
                alert("No Data Returned for Applist from Service. Please contact Helpdesk.");
                kony.print("<<FAILURE>>>" + JSON.stringify(res));
            }
        }
        com.healogics.utility.dismissLoading();
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("Fetch Error CallBack >>>>>");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var wcs = "where userId =" + JSON.stringify(userInfo.userId); ///To solve the WOUN- 1797
    kony.print("Where Clause--------->" + JSON.stringify(wcs));
    com.healogics.offline.appListOffline.find(wcs, successCallBack, errorCallBack);
};