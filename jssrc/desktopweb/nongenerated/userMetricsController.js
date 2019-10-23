var userMetrics_cntrl_offline = {};
userMetrics_cntrl_offline.getMonthYearUserMetricsByFacilityidandUserId = function(month, year, userId) {
    function successCallBack(res) {
        kony.print("getMonthYearUserMetricsByFacilityidandUserId success callback--------->");
        kony.print("getMonthYearUserMetricsByFacilityidandUserId success callback response--------->" + JSON.stringify(res));
        var metrics = [];
        for (i = 0; i < res.length; i++) {
            var temp = {};
            temp.actual = res[i]._actual;
            metrics.push(temp);
        }
        kony.print("after parsing data -------" + JSON.stringify(metrics));
        kony.print("role exists response----->" + userInfo.userMetrics);
        if (userInfo.userMetrics === GENERAL_CONSTANTS.TEXT_TRUE) {
            if (metrics.length > 0) {
                frmWCCDashboard.fcmetricsdata.setVisibility(true);
                frmWCCDashboard.lblnousermetrics.setVisibility(false);
                frmWCCDashboard.lblchrvalue.text = metrics[0].actual;
                frmWCCDashboard.lblhealedwoundvalue.text = metrics[1].actual;
                frmWCCDashboard.lblnothealedwoundvalue.text = metrics[2].actual;
                frmWCCDashboard.lbladvancevalue.text = metrics[3].actual;
                frmWCCDashboard.lblcomplexvalue.text = metrics[4].actual;
                frmWCCDashboard.lblpalliativevalue.text = metrics[5].actual;
                frmWCCDashboard.lbldebridementratevalue.text = metrics[6].actual;
            }
            com.healogics.utility.dismissLoading();
        } else {
            com.healogics.utility.dismissLoading();
            frmWCCDashboard.fcusermetrics.setVisibility(false);
            frmWCCDashboard.lblnousermetrics.setVisibility(false);
            frmWCCDashboard.lblnousermetrics.text = "";
            frmWCCDashboard.fcmetricsdata.setVisibility(false);
        }
    }

    function errorCallBack(res) {
        com.healogics.utility.dismissLoading();
        kony.print("getMonthYearUserMetricsByFacilityidandUserId failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    com.healogics.utility.showLoading();
    var wcs = "where metricsmonth = " + JSON.stringify(month) + " and" + " metricsyear = " + JSON.stringify(year) + " and" + " userId = " + JSON.stringify(userId);
    kony.print("Where Clause--------->" + JSON.stringify(wcs));
    com.healogics.offline.userMetrics.find(wcs, successCallBack, errorCallBack);
};