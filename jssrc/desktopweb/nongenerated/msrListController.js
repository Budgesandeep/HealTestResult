var msrList_cntrl_offline = {};
//Controller to get the MSR count
msrList_cntrl_offline.getAllMsrListForFacilityID = function(facilityID, callBack) {
    function successCallBack(res) {
        kony.print("getAllmsrListListForOffline success callback--------->");
        kony.print("getAllmsrListListForOffline success callback response--------->" + JSON.stringify(res));
        if (res === null || res.length === 0) {
            patientList_cntrl_offline.showNoRecordsAvailableMessage();
            return;
        }
        var msrList = [];
        if (patientListConstants.myPatients == "Y") {
            msrList_cntrl_offline.getWeekRangesCount(res, callBack);
        } else {
            if (!com.healogics.utility.isEmpty(res) && res.length > 0) {
                for (i = 0; i < res.length; i++) {
                    var temp = {};
                    temp.referKey = res[i]._referKey;
                    temp.msrCount = res[i]._msrCount;
                    temp.weekRange = res[i]._weekRange;
                    temp.weeks = res[i]._weeks;
                    temp.facilityId = res[i]._facilityId;
                    msrList.push(temp);
                }
                callBack(msrList);
            } else {
                kony.print("getAllmsrListListForOffline res DATA FAILURE");
            }
        }
    }

    function errorCallBack(res) {
        kony.print("getAllmsrListForOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        showError = true;
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        callBack(undefined);
    }
    if (patientListConstants.myPatients == "Y") {
        wcs = "where (physicianUserId = " + JSON.stringify(userInfo.userId) + " or caseManagerUserId = " + JSON.stringify(userInfo.userId) + " ) and facilityId = " + JSON.stringify(facilityID) + " ORDER BY name";
        kony.print("My Where clause ------>>>>>" + wcs);
        com.healogic.offline.patientList.find(wcs, successCallBack, errorCallBack);
    } else {
        var wcs = "where facilityId = " + JSON.stringify(facilityID);
        com.healogic.offline.msrList.find(wcs, successCallBack, errorCallBack);
    }
};
msrList_cntrl_offline.getWeekRangesCount = function(response, callBack) {
    kony.print("getWeekRangesCount --------->" + JSON.stringify(response));
    var msrCount = 0;

    function callBackForCount(length) {
        msrCount = length;
    }

    function successcallback(res) {
        kony.print("msrList_cntrl_offline.getWeekRangesCount success--------->" + JSON.stringify(res));
        var arrWeeks = [];
        for (var index = 0; index < res.length; index++) {
            arrWeeks.push(res[index]._weeks);
        }
        kony.print("arrWeeks --------->" + arrWeeks);
        var arrMsr = [];
        if (response.length != 0) {
            for (var i = 0; i < arrWeeks.length; i++) {
                var obj = {};
                obj.facilityId = response[0].facilityId;
                obj.weekRange = (i + 1);
                var count = 0;
                for (var j = 0; j < response.length; j++) {
                    if (checkForValueInString(response[j].msrWeek, arrWeeks[i])) {
                        count++;
                    }
                }
                if (i == arrWeeks.length - 1) {
                    obj.weeks = "TotalCount";
                    obj.weekRange = "TotalCount";
                    //           obj.msrCount = ;//response.length;
                    msrList_cntrl_offline.getPatientCountForTotalCount(callBackForCount, obj.facilityId);
                    obj.msrCount = msrCount;
                    kony.print("total count msrCount --------->" + obj.msrCount);
                } else if (i == arrWeeks.length - 2) {
                    obj.weeks = "14+";
                    obj.msrCount = count;
                } else {
                    obj.weeks = arrWeeks[i];
                    obj.msrCount = count;
                }
                kony.print("obj --------->" + JSON.stringify(obj));
                arrMsr.push(obj);
            }
            kony.print("arrMsr --------->" + JSON.stringify(arrMsr));
        }
        callBack(arrMsr);
    }

    function errorcallback(res) {
        com.healogics.utility.dismissLoading();
        kony.print("msrList_cntrl_offline.getWeekRangesCount failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    sync.log.trace("Entering msrList_cntrl_offline.getWeekRangesCount function");
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    if (!kony.sync.validateInput(arguments, "msrList_cntrl_offline.getWeekRangesCount", "getWeekRangesCount", errorcallback)) {
        return;
    }
    //wcs will be a string formed by the user.
    var dbname = kony.sync.getDBName();
    var tbname = com.healogic.offline.msrList.getTableName();
    var sql = "select distinct weeks from \"" + tbname + "\" ";

    function mySuccCallback(res) {
        kony.sync.verifyAndCallClosure(successcallback, com.healogic.offline.msrList.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
    }
    kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};
msrList_cntrl_offline.getPatientCountForTotalCount = function(callBackForCount, facilityID) {
    var wcs = "where (physicianUserId = " + JSON.stringify(userInfo.userId) + " or caseManagerUserId = " + JSON.stringify(userInfo.userId) + " ) and facilityId = " + JSON.stringify(facilityID) + " and msrFlag = 'true'" + " ORDER BY name";
    kony.print("My Where clause for count------>>>>>" + wcs);
    com.healogic.offline.patientList.find(wcs, successCallBack, errorCallBack);

    function successCallBack(res) {
        kony.print("getPatientCountForTotalCount success callback--------->");
        kony.print("getPatientCountForTotalCount success callback response--------->" + JSON.stringify(res));
        if (!com.healogics.utility.isEmpty(res) && res.length > 0) {
            kony.print("count is --------->" + res.length);
            callBackForCount(res.length);
        } else {
            kony.print("getPatientCountForTotalCount res DATA FAILURE");
        }
    }

    function errorCallBack(res) {
        kony.print("getPatientCountForTotalCount failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
        showError = true;
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
};