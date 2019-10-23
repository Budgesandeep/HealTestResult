var wccMetrics_cntrl_offline = {};

wccMetrics_cntrl_offline.getMonthYearWccMetricsByFacilityid = function(month, year, facilityID){
  
  function successCallBack(res){
    kony.print("getMonthYearWccMetricsByFacilityid success callback--------->");
    kony.print("getMonthYearWccMetricsByFacilityid success callback response--------->"+ JSON.stringify(res));
    var metrics = [];
    for (i = 0; i< res.length; i++){
	  var temp = {};
      temp.actual = res[i]._actual;
      temp.plan = res[i]._plan;
      metrics.push(temp);
    }
    kony.print("after parsing data -------"+ JSON.stringify(metrics));
    if(SYNC_CONSTANTS.wccMetricsFirstTimeFlag){
      frmWCCDashboard.lblFacility.text=userInfo.selectedFacilityId + " - "+ userInfo.presentFacilityName;
       userMetrics_cntrl_offline.getMonthYearUserMetricsByFacilityidandUserId(metrics_info.month, metrics_info.year, userInfo.userId);///Akshay - From userName to userId
      com.healogics.utility.dismissLoading();
      frmWCCDashboard.forceLayout();
      frmWCCDashboard.show();
      SYNC_CONSTANTS.wccMetricsFirstTimeFlag = false;
    }
    if(metrics.length === 0){
      com.healogics.utility.dismissLoading();
      frmWCCDashboard.lblNoRecords.setVisibility(true);
      frmWCCDashboard.lblNoRecords.text = "No records available";
      frmWCCDashboard.fcmetrics.setVisibility(false);
      frmWCCDashboard.flxmetricsheader.setVisibility(false);
    }else{
      com.healogics.utility.dismissLoading();
      frmWCCDashboard.lblNoRecords.setVisibility(false);
      frmWCCDashboard.fcmetrics.setVisibility(true);
      frmWCCDashboard.flxmetricsheader.setVisibility(true);
    }
    metrics_module.setMetricsData(metrics);
  }
  
  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("getMonthYearWccMetricsByFacilityid failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }
  com.healogics.utility.showLoading();
  var wcs = "where metricsmonth = "+ JSON.stringify(month) + " and" + " metricsyear = "+ JSON.stringify(year) + " and" + " facilityid = "+ JSON.stringify(facilityID);
  kony.print("Where Clause--------->"+ JSON.stringify(wcs));
  com.healogics.offline.wccMetrics.find(wcs,successCallBack,errorCallBack);
  
};