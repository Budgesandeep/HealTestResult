/*
* kony widget updating LINE CHART 
*/
function updateLineKonyWigt(chart,widget){
  
	widget.titleText 			= chart.titleText;
	widget.xAxisArray 			= chart.xAxisArray;
	widget.yAxisTitle 			= chart.yAxisTitle;
    widget.enableToolTip 		= chart.enableToolTip;
    widget.enableDataLabel 		= chart.enableDataLabel;
    widget.enableMouseTracking 	= chart.enableMouseTracking;
    widget.seriesValue 			= chart.seriesValue;
}
    


function plotLineChartOnDashboard(chartHolderId, chartData, formWidget){
  
  var chartType				= chartData[0]["chartType"];

  var chart 					= {};
  chart.titleText 			= "Sample Line Chart";
  chart.enableToolTip 		= false;
  chart.enableDataLabel 		= false;
  chart.enableMouseTracking 	= false;
  chart.xAxisArray 			= chartData[0]["chartXAxisVal"];
  chart.seriesValue 			= chartData[0]["chartSeriesVal"];
  chart.yAxisTitle 			= chartData[0]["chartYAxisVal"];
  chart.chartStyle 			= 'width:100%; height:100%';
  chart.width					= 790;

  var chartWidgetId = formWidget.id+"_"+chartHolderId;

  kony.print("inside plotLineChartOnDashboard -- chartWidgetId value:::"+chartWidgetId);
  try{
    lineChartDashboard(chart, chartHolderId, chartWidgetId);
    updateLineKonyWigt(chart, formWidget[chartHolderId]);
  }catch(err){
    kony.print("plotLineChartOnDashboard:::::")
  }
}

function plotLineChartOn(chartHolderId, chartData){
  
	var chartType				= chartData[0]["chartType"];
		
	var chart 					= {};
	chart.titleText 			= "Sample Line Chart";
    chart.enableToolTip 		= false;
	chart.enableDataLabel 		= false;
	chart.enableMouseTracking 	= false;
	//chart.xAxisArray 			= chartData[0]["chartXAxisVal"];
	chart.seriesValue 			= chartData[0]["chartSeriesVal"];
	//chart.yAxisTitle 			= chartData[0]["chartYAxisVal"];
	chart.chartStyle 			= 'width:100%; height:100%';
	//chart.width					= 790;
		
	lineChartUpdate(chart, chartHolderId);
	updateLineKonyWigt(chart, frmLanding[chartHolderId]);
}
