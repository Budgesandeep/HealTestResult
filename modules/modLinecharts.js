/*
*Name: modLinecharts.js
*Purpose: For Global variables for holding data and constants
*Change Log:
*---------------------------------------------------------------------------
* Date              Developer                 Comments
*---------------------------------------------------------------------------
* 12/19/2016        492306    Validations/Integration Logic
*
*
*/
var selectedWeekValue = 0; // Default selected week filter in charts timeline PRINT & Export module

//Type your code here
var woundSummaryGraphData = {
  
  //colors : ['#00b7d4', '#f57738', '#a3a7d4',  '#057738', '#10d7d4', '#CD5C5C', '#17202A', '#641E16', '#186A3B', '#4A235A', '#D4AC0D', '#00b7d4', '#00b7d4', '#00b7d4', '#00b7d4', '#00b7d4', '#00b7d4', '#00b7d4', '#00b7d4', '#00b7d4',],
  
  
//   colors : ['#00bce4','#f15a22', '#72bf44', '#ff0000', '#663300', '#666699', '#6600ff', '#17202A', '#D4AC0D', '#186A3B'],
  colors : ['#0a8dff','#ff6200', '#ffc902', '#7400ff', '#0a9f01', '#bf4040', '#00ffcf', '#ff2000', '#4a00ff', '#ffd200', '#a500ff', '#87ff00', 
            '#0a8dff','#ff6200', '#ffc902', '#7400ff', '#0a9f01', '#bf4040', '#00ffcf', '#ff2000', '#4a00ff', '#ffd200', '#a500ff', '#87ff00',
           	'#0a8dff','#ff6200', '#ffc902', '#7400ff', '#0a9f01', '#bf4040', '#00ffcf', '#ff2000', '#4a00ff', '#ffd200', '#a500ff', '#87ff00', 
            '#0a8dff','#ff6200', '#ffc902', '#7400ff', '#0a9f01', '#bf4040', '#00ffcf', '#ff2000', '#4a00ff', '#ffd200', '#a500ff', '#87ff00',
           	'#0a8dff','#ff6200', '#ffc902', '#7400ff', '#0a9f01', '#bf4040', '#00ffcf', '#ff2000', '#4a00ff', '#ffd200', '#a500ff', '#87ff00'],
  
  woundData : [],
  
  chartRangeDays : 0,
  
  xMin : 0,
  xMax : 0,
  yMin : 0,
  yMax : 0,
  
};

var patientSummary_changeChartTimeLine = function(selectedWeeks, isFirstTime){
  //Sandeep offline changes for chart june0319
 
  if( isIpad && !isNetworkAvailable()){
    var error_label= ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
  com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
  }else{
  
  searchPatient_closeSearchList();
   selectedWeekValue=selectedWeeks;
  kony.print("patientSummary_changeChartTimeLine::::"+selectedWeeks);
  
  if(selectedWeeks!==null){
    
    var skinNormal = "sknbtnbluebold14";
    var skinSelected = "skbtntxtbold113"; //sknbtnbluebold15hover";
  
  //kony.store.setItem(userInfo.userId+"_summaryWeekRange", selectedWeeks);
    switch(selectedWeeks){
      case 4:
        frmPatientSummary.btn4weeks.skin = skinSelected
        frmPatientSummary.btn8weeks.skin = skinNormal
        frmPatientSummary.btn12weeks.skin = skinNormal
        frmPatientSummary.btnallweeks.skin = skinNormal        
        frmPatientSummary.btn6months.skin = skinNormal
        frmPatientSummary.btnyear.skin = skinNormal
        woundSummaryGraphData.chartRangeDays = 35;
       break;
        
      case 8:
        frmPatientSummary.btn4weeks.skin = skinNormal
        frmPatientSummary.btn8weeks.skin = skinSelected
        frmPatientSummary.btn12weeks.skin = skinNormal
        frmPatientSummary.btnallweeks.skin = skinNormal
        frmPatientSummary.btn6months.skin = skinNormal
        frmPatientSummary.btnyear.skin = skinNormal
        woundSummaryGraphData.chartRangeDays = 63;
        break;
        
      case 12:
        frmPatientSummary.btn4weeks.skin = skinNormal
        frmPatientSummary.btn8weeks.skin = skinNormal
        frmPatientSummary.btn12weeks.skin = skinSelected
        frmPatientSummary.btnallweeks.skin = skinNormal
        frmPatientSummary.btn6months.skin = skinNormal
        frmPatientSummary.btnyear.skin = skinNormal
        woundSummaryGraphData.chartRangeDays = 91;
        break;
        
       case 26:
        frmPatientSummary.btn4weeks.skin = skinNormal
        frmPatientSummary.btn8weeks.skin = skinNormal
        frmPatientSummary.btn12weeks.skin = skinNormal
        frmPatientSummary.btnallweeks.skin = skinNormal
        frmPatientSummary.btn6months.skin = skinSelected
        frmPatientSummary.btnyear.skin = skinNormal
        woundSummaryGraphData.chartRangeDays = 188;
        break;
        
       case 52:
        frmPatientSummary.btn4weeks.skin = skinNormal
        frmPatientSummary.btn8weeks.skin = skinNormal
        frmPatientSummary.btn12weeks.skin = skinNormal
        frmPatientSummary.btnallweeks.skin = skinNormal
        frmPatientSummary.btn6months.skin = skinNormal
        frmPatientSummary.btnyear.skin = skinSelected
        woundSummaryGraphData.chartRangeDays = 373;
        break;
        
      default:
        frmPatientSummary.btn4weeks.skin = skinNormal
        frmPatientSummary.btn8weeks.skin = skinNormal
        frmPatientSummary.btn12weeks.skin = skinNormal
		frmPatientSummary.btn6months.skin = skinNormal
        frmPatientSummary.btnyear.skin = skinNormal
        frmPatientSummary.btnallweeks.skin = skinSelected
        
        woundSummaryGraphData.chartRangeDays = 0;
        //OnclickTimeline("ALL");//ADDED CO-4
             
    }
   kony.store.setItem(userInfo.userId+"_summaryWeekRange", selectedWeeks);
     

//     if(!isIpad){
//           if(isFirstTime){
//            frmPatientSummary_WoundSummaryChart();
//          }else{
//            OnclickTimeline(selectedWeeks);
//          }  
//          }else {
//       	frmPatientSummary_WoundSummaryChart();
//     }
      
  
    
   // if(isIpad){
       if(isFirstTime){
         frmPatientSummary_WoundSummaryChart();
       }else{
         OnclickTimeline(selectedWeeks);
       }  
   // } else {
   //   	frmPatientSummary_WoundSummaryChart();
   // }
       
  }
}};

//Defining the properties and creating the Column Chart.
function frmPatientSummary_WoundSummaryChart() {
  if(!isIpad){
    var widgetId = "tpmultiline1";
    var chartWidgetId = "#frmPatientSummary"+"_"+widgetId;
    var calTextbox = '<div id="'+widgetId+'" style="width:820; height:420;margin-left:0px;" ></div>';
    $(chartWidgetId).html(calTextbox); 
    //woundSummaryGraphData.woundData = [];
    kony.print("selected Wound Data::::"+JSON.stringify(woundSummaryGraphData.woundData)); 
    initiateChart(chartWidgetId, '#'+widgetId);
  }
  else{
    woundSummaryGraphData.avType = frmPatientSummary.btnunits.text;
    var data = formatWoundSummaryGraphDataForIPad();//JSON.stringify(woundSummaryGraphData);
//     frmPatientSummary.d3chartbrowser.evaluateJavaScript('initiateChart('+data+')'); //','+avType+')');    
    try{
      kony.timer.cancel("d3ChartLoadtimerid");
    }catch(error){
      kony.print("d3ChartLoadtimerid----->>>>"+error);
    }
    kony.timer.schedule("d3ChartLoadtimerid", function()  {
      frmPatientSummary.d3chartbrowser.evaluateJavaScript('initiateChart(' + data + ')');
    } , 1, false);
    
    //Graph Issue IPAD 
    //As Followed in Other modules , cancelling any previous timer 
    try{
    kony.timer.cancel("graphDataTimer");
  }catch(e){
    kony.print("error "+e);
  }
    
    kony.timer.schedule("graphDataTimer" , function()  {
      frmPatientSummary.d3chartbrowser.evaluateJavaScript('setBase64Data()');
    } , 2, false);
    //GraphIssue IPAD end --
    
  }
  frmPatientSummary.forceLayout();
}


function formatWoundSummaryGraphDataForIPad(){
  
  var dateArr = [];
  var yAxisArr = [];
  
  var tempWoundData = [];
  
  var dateArr2 = [];
  var yAxisArr2 = [];
  
  woundSummaryGraphData.woundData.forEach(function(d, i) {
    kony.print("1d ::::"+i+":"+JSON.stringify(d));
    if(frmPatientSummary.btnunits.text === "Area") {
      	d.woundSummaryList.forEach(function(d1, i1){
          kony.print("1d1 ::::"+i1+":"+JSON.stringify(d1));
		  if(d1.encounterDate!=null && d1.encounterDate!=""){
            d1.x = moment(d1.encounterDate); //new Date(d1.encounterDate); 
            d1.y = d1.areaOfWound; 
          }
           //d1.encounterDate = frmPatientSummary_formatWoundListDate1(d1.encounterDate);	
 		});
    }else{
      	d.woundSummaryList.forEach(function(d1, i1){
          kony.print("12d1 ::::"+i1+":"+JSON.stringify(d1));


          if(d1.encounterDate!=null && d1.encounterDate!=""){
            d1.x = moment(d1.encounterDate); //new Date(d1.encounterDate); 
            d1.y = d1.volumeOfWound;  
          }
           //d1.encounterDate = frmPatientSummary_formatWoundListDate1(d1.encounterDate);
 		});
    }
    
    kony.print("2d ::::"+i+":"+JSON.stringify(d));
    //var tempDates = [];
    dateArr.push(moment(Math.min.apply(Math,d.woundSummaryList.map(function(o){ if(o.x != null && !isNaN(o.x)) return o.x;}))));
    dateArr.push(moment(Math.max.apply(Math,d.woundSummaryList.map(function(o){ if(o.x != null && !isNaN(o.x)) return o.x;}))));

    dateArr2 = [];
        
    for(var i=0; i<dateArr.length; i++){
      if(dateArr[i] !=null && dateArr[i] !=undefined && !isNaN(dateArr[i])){
        kony.print("i value:::"+dateArr[i])
        dateArr2.push(dateArr[i]);
      }
    }
    
    yAxisArr.push(Math.min.apply(Math,d.woundSummaryList.map(function(o){return o.y;})));
    yAxisArr.push(Math.max.apply(Math,d.woundSummaryList.map(function(o){return o.y;})));
    
    
    
    yAxisArr2 = [];
        
    for(var i=0; i<yAxisArr.length; i++){
      if(yAxisArr[i] !=null && yAxisArr[i] !=undefined && !isNaN(yAxisArr[i])){
        kony.print("i value:::"+yAxisArr[i])
        yAxisArr2.push(yAxisArr[i]);
      }
    }
    
    //dateArr.push(tempDates);
  });
  kony.print("dateArr:::"+JSON.stringify(dateArr2));
  kony.print("yAxisArr:::"+JSON.stringify(yAxisArr2));
  //return new Date(Math.max.apply(Math,data.map(function(o){return o.x;})));

  var minDate = Math.min.apply(Math,dateArr2.map(function(o){ return new Date(o);}));
  kony.print("minDate:::"+moment(minDate));

  var maxDate = Math.max.apply(Math,dateArr2.map(function(o){ return new Date(o);}))
  kony.print("maxDate:::"+moment(maxDate));
  
  
  var yMin = Math.min.apply(Math,yAxisArr2.map(function(o){return o;}));
  kony.print("yMax:::"+yMin);

  var yMax = Math.max.apply(Math,yAxisArr2.map(function(o){return o;}))
  kony.print("yMax:::"+yMax);
  
  if(dateArr2!=null && dateArr2.length < 7){
    woundSummaryGraphData.xAxisTickSize = dateArr2.length;
  }
  
//   var xAxisPaddingValue = ((maxDate-minDate)/(24*60*60*1000));
//   if(parseInt(xAxisPaddingValue/7) > 1 ){
//     kony.print("inside xPadding:::"+parseInt(xAxisPaddingValue/7))

//     minDate = new Date(minDate - 7*24*60*60*1000);
//     maxDate = new Date(maxDate + 7*24*60*60*1000);
//     woundSummaryGraphData.xAxisTickSize = 7;
//   }
  
   woundSummaryGraphData.xAxisTickSize = 4;

    
    var xAxisPaddingValue = ((maxDate - minDate) / (24 * 60 * 60 * 1000));
    if (parseInt(xAxisPaddingValue / 7) > 1) {
        kony.print("inside xPadding:::" + parseInt(xAxisPaddingValue / 7))
        minDate = new Date(minDate - 7 * 24 * 60 * 60 * 1000);
        maxDate = new Date(maxDate + 7 * 24 * 60 * 60 * 1000);
        //woundSummaryGraphData.xAxisTickSize = 8;
      
      woundSummaryGraphData.xAxisTickSize = parseInt(xAxisPaddingValue/7);
      
    }else if(xAxisPaddingValue < 4){
      minDate = new Date(minDate - 2 * 24 * 60 * 60 * 1000);
      maxDate = new Date(maxDate + 2 * 24 * 60 * 60 * 1000);
      woundSummaryGraphData.xAxisTickSize = dateArr2.length+2;
    }else{
      minDate = new Date(minDate - 2 * 24 * 60 * 60 * 1000);
      maxDate = new Date(maxDate + 2 * 24 * 60 * 60 * 1000);
    }
  
  woundSummaryGraphData.xMin = new Date(minDate);
  
  //var maxDatePlus7 = new Date(maxDate);  
  //maxDatePlus7.setDate(maxDatePlus7.getDate()+7);
  woundSummaryGraphData.xMax = new Date(maxDate); //maxDatePlus7;
  
  var yAxisPaddingValue = parseInt((yMax - yMin)/10);
  
  if(yAxisPaddingValue == 0){
    yAxisPaddingValue = parseInt(1+yMax/5);
  }
  
  woundSummaryGraphData.yMin = parseInt(yMin); //-yAxisPaddingValue
  woundSummaryGraphData.yMax = parseInt(yMax+yAxisPaddingValue);
  
  var woundData = woundSummaryGraphData.woundData;
  
      
  /*[
    {
      name: 'Wound 1-V',
      data: [
        {y:9.6, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/01/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:13.9, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/02/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:25.2, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/03/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:26.5, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/04/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:23.3, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/05/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:18.3, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/06/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},				
        {y:9.6, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/07/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'}

      ]
    }
  ];
*/

  var mindate = new Date(woundSummaryGraphData.xMin); //new Date("07/01/2016"),
  var maxdate = new Date(woundSummaryGraphData.xMax); //new Date("07/18/2016");
  kony.print("mindate actual:::"+mindate);
  if(woundSummaryGraphData.chartRangeDays!=0){
    mindate = new Date(maxdate); 
  	mindate.setDate(maxdate.getDate() - woundSummaryGraphData.chartRangeDays);
    if(woundSummaryGraphData.xMin >= mindate){
      mindate = new Date(woundSummaryGraphData.xMin);
    }
    
//     woundData = [];
//     woundSummaryGraphData.woundData.forEach(function(d, i) {
//       var tempWoundList = {"woundLabel":"Wound "+(i+1)};
//       kony.print("tempWoundList ::::"+i+":"+JSON.stringify(d));
//       var tempWoundItemList = [];
//       d.woundSummaryList.forEach(function(d1, i1){        
//         kony.print("tempWoundData ::::"+i1+":"+JSON.stringify(d1));
//         var encoutnerDate = moment(d1.encounterDate);
//         if(encoutnerDate >= mindate){
          
//           kony.print("d1.encounterDate ::::"+encoutnerDate+"<----->minDate:::::"+mindate+"<----->"+(encoutnerDate > minDate));
          
// 			tempWoundItemList.push(d1);
//         }
//       });
//       tempWoundList["woundSummaryList"] = tempWoundItemList;
//       woundData.push(tempWoundList);

//   });
    
//     kony.print("Modified WOUnd ITem list::::"+JSON.stringify(tempWoundData));
  
  }
//   else{
//     woundData = woundSummaryGraphData.woundData;
//   }
	  
  woundSummaryGraphData.woundData2 = woundData;
  woundSummaryGraphData.mindate = mindate;
  woundSummaryGraphData.maxdate = maxdate;
  
	  	kony.print("woundSummaryGraphData modified:::"+JSON.stringify(woundSummaryGraphData));
  
  woundSummaryGraphData.woundsSelected = woundsSelected;
  
  return JSON.stringify(woundSummaryGraphData)
}

function initiateChart(chartWidgetId, lineElement) {
    var dateArr = [];
    var yAxisArr = [];
    var tempWoundData = [];
    
    var dateArr2 = [];
  	var yAxisArr2 = [];
    
    woundSummaryGraphData.woundData.forEach(function(d, i) {
        kony.print("1d ::::" + i + ":" + JSON.stringify(d));
        if (frmPatientSummary.btnunits.text === "Area") {
            d.woundSummaryList.forEach(function(d1, i1) {
                kony.print("1d1 ::::" + i1 + ":" + JSON.stringify(d1));
                d1.y = d1.areaOfWound;
                d1.x = moment(d1.encounterDate + " 23:59:59"); //new Date(d1.encounterDate); 
            });
        } else {
            d.woundSummaryList.forEach(function(d1, i1) {
                kony.print("12d1 ::::" + i1 + ":" + JSON.stringify(d1));
                d1.y = d1.volumeOfWound;
                d1.x = moment(d1.encounterDate + " 23:59:59"); //new Date(d1.encounterDate); 
            });
        }
        kony.print("2d ::::" + i + ":" + JSON.stringify(d));
        //var tempDates = [];
        dateArr.push(moment(Math.min.apply(Math, d.woundSummaryList.map(function(o) {
            kony.print("min o.x value:::" + o.x);
            if (o.x != null && !isNaN(o.x)){ 
               kony.print("1o.x value:::" + o.x);
               return o.x;
            }
        }))));
        dateArr.push(moment(Math.max.apply(Math, d.woundSummaryList.map(function(o) {
            kony.print("max o.x value:::" + o.x);
            if (o.x != null && !isNaN(o.x)){ 
               kony.print("2o.x value:::" + o.x);
               return o.x;
            }
        }))));
        
        dateArr2 = [];
        
        for(var i=0; i<dateArr.length; i++){
            if(dateArr[i] !=null && dateArr[i] !=undefined && !isNaN(dateArr[i])){
                kony.print("i value:::"+dateArr[i])
                dateArr2.push(dateArr[i]);
            }
        }
        yAxisArr.push(Math.min.apply(Math, d.woundSummaryList.map(function(o) {
            return o.y;
        })));
        yAxisArr.push(Math.max.apply(Math, d.woundSummaryList.map(function(o) {
            return o.y;
        })));
      
      	yAxisArr2 = [];
        
        for(var i=0; i<yAxisArr.length; i++){
            if(yAxisArr[i] !=null && yAxisArr[i] !=undefined && !isNaN(yAxisArr[i])){
                kony.print("i value:::"+yAxisArr[i])
                yAxisArr2.push(yAxisArr[i]);
            }
        }
      
      
      
        //dateArr.push(tempDates);
    });
    kony.print("dateArr:::"+JSON.stringify(dateArr2));
    kony.print("yAxisArr:::"+JSON.stringify(yAxisArr2));
    //return new Date(Math.max.apply(Math,data.map(function(o){return o.x;})));
    var minDate = Math.min.apply(Math, dateArr2.map(function(o) {
        kony.print("min2 o value:::" + o);
        return new Date(o);
    }));
    kony.print("minDate:::" + moment(minDate));
    var maxDate = Math.max.apply(Math, dateArr2.map(function(o) {
        kony.print("max2 o value:::" + o);
        return new Date(o);
    }))
    kony.print("maxDate:::" + moment(maxDate));
    var yMin = Math.min.apply(Math, yAxisArr2.map(function(o) {
        return o;
    }));
    kony.print("yMax:::" + yMin);
    var yMax = Math.max.apply(Math, yAxisArr2.map(function(o) {
        return o;
    }))
    kony.print("yMax:::" + yMax);
  
  var xAxisTickSize = 4;

    
    var xAxisPaddingValue = ((maxDate - minDate) / (24 * 60 * 60 * 1000));
    kony.print("xAxisPaddingValue -------------------------->"+xAxisPaddingValue);
    //if (parseInt(xAxisPaddingValue / 7) > 1) {
    if (parseInt(xAxisPaddingValue / 7) >= 1) {
      kony.print("inside xPadding:::" + parseInt(xAxisPaddingValue / 7))
      kony.print("minDate before-------------------------->"+minDate);
      minDate = new Date(minDate - 7 * 24 * 60 * 60 * 1000);
      kony.print("minDate after-------------------------->"+minDate);   
      kony.print("maxdate after-------------------------->"+maxDate);
      maxDate = new Date(maxDate + 7 * 24 * 60 * 60 * 1000);
      kony.print("maxdate after-------------------------->"+maxDate);
      //xAxisTickSize = 8;
      xAxisTickSize = parseInt(xAxisPaddingValue/7);
    }else if(xAxisPaddingValue < 4){
      kony.print("entered xAxisPaddingValue < 4-------------------------->"+maxDate);
      minDate = new Date(minDate - 2 * 24 * 60 * 60 * 1000);
      maxDate = new Date(maxDate + 2 * 24 * 60 * 60 * 1000);
      xAxisTickSize = dateArr2.length+2;
    }else{
      minDate = new Date(minDate - 2 * 24 * 60 * 60 * 1000);
      maxDate = new Date(maxDate + 2 * 24 * 60 * 60 * 1000);
    }
//   	kony.print("minDate before adding day-------------------------->"+minDate);
//   	minDate.setDate(minDate.getDate()+1);
//     kony.print("minDate before adding day-------------------------->"+minDate);
//     kony.print("maxDate before adding day-------------------------->"+maxDate);
//     maxDate.setDate(maxDate.getDate()+1);
//     kony.print("maxDate after adding day-------------------------->"+maxDate);
    woundSummaryGraphData.xMin = new Date(minDate);
    //var maxDatePlus7 = new Date(maxDate);  
    //maxDatePlus7.setDate(maxDatePlus7.getDate()+7);
    woundSummaryGraphData.xMax = new Date(maxDate); //maxDatePlus7;
    var yAxisPaddingValue = parseInt((yMax - yMin) / 10);
    if (yAxisPaddingValue == 0) {
        yAxisPaddingValue = parseInt(1 + yMax / 5);
    }
    woundSummaryGraphData.yMin = parseInt(yMin); //-yAxisPaddingValue
    woundSummaryGraphData.yMax = parseInt(yMax + yAxisPaddingValue);
    var woundData = woundSummaryGraphData.woundData;
    /*[
    {
      name: 'Wound 1-V',
      data: [
        {y:9.6, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/01/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:13.9, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/02/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:25.2, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/03/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:26.5, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/04/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:23.3, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/05/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},
        {y:18.3, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/06/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'},				
        {y:9.6, Location: 'Thigh', Etiology: 'V', Classification: 'Thigh', x: new Date('07/07/2016'), AreaVolumeHealed: '30%', DressingUsed: 'Medicated'}

      ]
    }
  ];
*/
    var mindate = new Date(woundSummaryGraphData.xMin); //new Date("07/01/2016"),
    maxdate = new Date(woundSummaryGraphData.xMax); //new Date("07/18/2016");
    kony.print("mindate actual:::" + mindate);
    if (woundSummaryGraphData.chartRangeDays != 0) {
        mindate = new Date(maxdate);
        mindate.setDate(maxdate.getDate() - woundSummaryGraphData.chartRangeDays);
        if (woundSummaryGraphData.xMin >= mindate) {
            mindate = new Date(woundSummaryGraphData.xMin);
        }
        //     woundData = [];
        //     woundSummaryGraphData.woundData.forEach(function(d, i) {
        //       var tempWoundList = {"woundLabel":"Wound "+(i+1)};
        //       kony.print("tempWoundList ::::"+i+":"+JSON.stringify(d));
        //       var tempWoundItemList = [];
        //       d.woundSummaryList.forEach(function(d1, i1){        
        //         kony.print("tempWoundData ::::"+i1+":"+JSON.stringify(d1));
        //         var encoutnerDate = moment(d1.encounterDate);
        //         if(encoutnerDate >= mindate){
        //           kony.print("d1.encounterDate ::::"+encoutnerDate+"<----->minDate:::::"+mindate+"<----->"+(encoutnerDate > mindate));
        // 			tempWoundItemList.push(d1);
        //         }
        //       });
        //       tempWoundList["woundSummaryList"] = tempWoundItemList;
        //       woundData.push(tempWoundList);
        //   });
        //     kony.print("Modified WOUnd ITem list::::"+JSON.stringify(woundData));
    }
    //   else{
    //     woundData = woundSummaryGraphData.woundData;
    //   }
    kony.print("mindate modified:::" + mindate);
    var ymin = woundSummaryGraphData.yMin; //-10;
    var ymax = woundSummaryGraphData.yMax; //50;
    var fontSize = '16px';
    var fontName = 'calibri';
    var areaVolumeMeasure = "-cm2";
    if (frmPatientSummary.btnunits.text === 'Volume') {
        areaVolumeMeasure = "-cm3";
    }
    // chart data
    var chartConfig = {
        lineConnectorLength: 40,
        axisLabel: {
            xAxis: 'Patient Visit',
            yAxis: 'Wound ' + frmPatientSummary.btnunits.text + areaVolumeMeasure,
        },
        lineLabel: {
            height: 20,
            width: 60,
        },
    };
    var chartWidth = parseInt(kony.os.deviceInfo().deviceWidth * .65);
    // enviornment setup
    var svgConfig = {
        id: "mySvg",
        width: chartWidth, //820,
        height: 420,
        padding: 60,
        margin: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 40
        }
    };
    // Define the div for the tooltip
    var tooltipDiv = d3.select(chartWidgetId).append("div").attr("class", "tooltip").style("position", "absolute").style("text-align", "left").style("padding", "8px").style("font", "15px calibri").style("border-radius", "8px").style("pointer-events", "none");
    // drawing
    // append svg element
    var bodySelection = d3.select(lineElement); //body
    var svgSelection = bodySelection.append("svg").attr("id", svgConfig.id).attr("width", svgConfig.width).attr("height", svgConfig.height).style("margin-top", "0px").style("margin-left", "20px")
        // create x scale
    
    //BHUVAN ADDED THIS ////////////////////////
	svgSelection.append("clipPath").attr("id", "clip").append("rect").attr("x", svgConfig.margin.left).attr("y", 0).attr("width", svgConfig.width).attr("height",svgConfig.height);
	/////////////////////////////////////
    
  // copied from d3js source, I guess this function is not exposed in the api
        function d3_time_range(floor, step, number) {
          return function(t0, t1, dt) {
            var time = floor(t0), times = [];
            if (time < t0) step(time);
            if (dt > 1) {
              while (time < t1) {
                var date = new Date(+time);
                if (!(number(date) % dt)) times.push(date);
                step(time);
              }
            } else {
              while (time < t1) times.push(new Date(+time)), step(time);
            }
            return times;
          };
        }

        d3.time.daysTotal = d3_time_range(d3.time.day, function(date) {
          date.setDate(date.getDate() + 1);
        }, function(date) {
          return ~~(date/86400000);
        });

  
  
  
    xScale = d3.time.scale().range([
        svgConfig.margin.left,
        svgConfig.width // - svgConfig.margin.right
    ]).domain( //[d3.min(chartConfig.data, function(d) {return +d.year;}),//d3.max(chartConfig.data, function(d) {return +d.year;})]
        [mindate, maxdate]);
    // create y scale
    yScale = d3.scale.linear().range(
        [svgConfig.height - svgConfig.padding,
            svgConfig.margin.bottom
        ]).domain([ymin, ymax]);
    //let's create the axes using the scales
    xAxis = d3.svg.axis().scale(xScale).ticks(d3.time.daysTotal, xAxisTickSize)
          .tickFormat(d3.time.format("%m/%d/%y"))
          .orient("bottom").innerTickSize(-(svgConfig.height - svgConfig.padding));
    yAxis = d3.svg.axis().orient("left").scale(yScale).innerTickSize(-(svgConfig.width - svgConfig.padding));
    // add xaxis to chart - it will add it to top of the svg
    svgSelection.append("svg:g").attr("id", "xAxis").call(xAxis).style("fill", "none").style("stroke", "#aaa") //#777
        .style("shape-rendering", "crispEdges");
    // The X axis is drawn but First, we need to position it vertically downwards using transform property
    d3.select("#xAxis").attr("transform", "translate(0," + (svgConfig.height - svgConfig.margin.bottom - svgConfig.margin.top) + ")").selectAll("text").attr("x", -20).attr("y", 0).attr("dy", "1.25em").attr("transform", "rotate(0)") //-30
        .attr('font-size', '10px').attr('font-family', fontName).style("stroke", "#444").style("text-anchor", "start");
    /*.selectAll("text")  
    .style("text-anchor", "before-edge")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-25)");
				//.attr("transform", "translate(0," + (svgConfig.height - svgConfig.margin.bottom) + ")");
		  */
    // give label to xaxis
    svgSelection.append('text').attr('text-anchor', 'bottom').attr('font-family', fontName).attr('font-size', fontSize).attr('font-weight', 'bold').attr('fill', '#444').attr("transform", "translate(" + (svgConfig.width / 2) + "," + (svgConfig.height) + ")").text(chartConfig.axisLabel.xAxis);
    // add yaxis to chart, but this will not add it to correct oorientation
    svgSelection.append("svg:g").attr("id", "yAxis").call(yAxis).style("fill", "none").style("stroke", "#aaa") //#777
        .style("shape-rendering", "crispEdges");
    svgSelection.append('text').attr('text-anchor', 'middle').attr('font-family', fontName).attr('font-size', fontSize).attr('font-weight', 'bold').attr('fill', '#444').attr("transform", "translate(" + 10 + "," + (svgConfig.height / 2) + ")rotate(-90)").text(chartConfig.axisLabel.yAxis);
    // apply transform logic to bring it to correct place
    d3.select("#yAxis").attr("transform", "translate(" + (svgConfig.margin.left) + ",0)").selectAll("text").attr("font-size", "10px").attr("font-family", fontName).style("stroke", "#444");
    // now lets generate line
    var lineSelection = d3.svg.line().x(function(d) {
        return xScale(d.x);
    }).y(function(d) {
        return yScale(d.y)
    });
    var marginLegend = 0; // this can be dynamic later and no need to call create legend per line
    kony.print("woundData length:::" + woundData.length);
    kony.print("woundsSelected:::" + woundsSelected);
    kony.print("mindate:::" + mindate);
    woundData.forEach(function(d, i) {
        var line = 'line' + (i + 1);
        var woundItem = woundData[i];
        kony.print("woundItem:::" + JSON.stringify(woundItem));
        //if(new Date(woundItem.x) > new Date(mindate)){
        var lWoundNumber = (typeof woundsSelected[i] === 'object') ? parseInt(woundsSelected[i].woundNum) : parseInt(woundsSelected[i]);
        kony.print("lWoundNumber----->>>>>" + lWoundNumber);
      //         var lWoundNumber = parseInt(woundsSelected[i] - 1);
        kony.print("iteration:" + i + "&&colors[i]" + woundSummaryGraphData.colors[lWoundNumber] + "&&" + JSON.stringify(woundItem));
      	var woundItemColor = woundSummaryGraphData.colors[parseInt(lWoundNumber)-1] ;
      	if(woundItemColor == null){
          woundItemColor = woundSummaryGraphData.colors[woundSummaryGraphData.colors.length-1];
        }
      
        var lineItem = drawLine(woundItem, woundItemColor, woundItem.woundLabel, line)
        drawPoints(woundItem, woundItemColor, lineItem);
        //createLegend(colors[i], line, woundItem.name);	
        maxLineItem = i;
        //}
    });
    // method to create legend
    function createLegend(legendColor, lineId, legendText) {
        var legendGroup = svgSelection.append("g");
        legendGroup.append("rect").attr("width", chartConfig.lineLabel.width + 5).attr("height", chartConfig.lineLabel.height).attr("x", (svgConfig.width + marginLegend - 45) / 1.3).attr("y", (svgConfig.margin.top - 15)).attr("stroke", legendColor).attr("fill", legendColor).attr("stroke-width", 1).style("opacity", 0).transition().duration(600).style("opacity", 1)
        legendGroup.append('text').attr('text-anchor', 'middle').attr('font-family', 'sans-serif').style('cursor', 'pointer').attr('font-size', '12px').attr('fill', 'white').attr("transform", "translate(" + ((svgConfig.width + marginLegend) / 1.3) + "," + (svgConfig.margin.top) + ")").text("X  " + legendText).on("click", function() {
            var opacity = d3.select("." + lineId).style("opacity") == 1 ? 0 : 1;
            d3.select("." + lineId).transition().duration(500).style("opacity", opacity)
        });
        marginLegend += 100;
    }

    function drawPoints(pointData, pointColor, onLine) {
        // create points for line
        //kony.print('drawPoints Wound: '+pointData.name);
        onLine.selectAll(".points").data(pointData.woundSummaryList).enter().append("svg:circle").style("cursor", "pointer").attr("stroke", pointColor).attr("fill", function(d, i) {
            return pointColor
        }).attr("cx", function(d, i) {
            return xScale(d.x)
        }).attr("cy", function(d, i) {
            return yScale(d.y)
        }).attr("r", function(d, i) {
            return 3
        }).on("mouseover", function(d) {
            if (d != null && d.x >= mindate) {
                //kony.print("point mouseover::::"+JSON.stringify(d))
                // animate point useful when we have points ploted close to each other.
                d3.select(this).transition().duration(300).attr("r", 6);
                // code block for tooltip
                tooltipDiv.transition().duration(200).style("opacity", .9);
                var ptYdeduct = 50;
                var woundInfoToolTip = "<b>Wound: </b>" + pointData.woundLabel + '<br/><b>Encounter Date:</b> ' + d.encounterDate
                if (frmPatientSummary.btnunits.text === 'Volume') {
                    if (d.volume_healing_rate  != null) {    //CO-4 : added Volume/Area Healting rates
                        woundInfoToolTip = woundInfoToolTip + '<br/><b>%Volume Healed :</b> ' + d.volume_healing_rate  + '%'     
                    }
                    /*
                    if(d.volumeOfWound != null){
                      woundInfoToolTip = woundInfoToolTip + '<br/><b>Wound Volume :</b> ' + d.volumeOfWound  
                    }*/
                } else {
                    if (d.area_healing_rate  != null) {
                        woundInfoToolTip = woundInfoToolTip + '<br/><b>%Area Healed :</b> ' + d.area_healing_rate +'%'
                    }
                    /*
                          if(d.areaOfWound  != null){
                            woundInfoToolTip = woundInfoToolTip + '<br/><b>Wound Area :</b> ' + d.areaOfWound  
                          }*/
                }
                if (d.biopsy != null && "" != d.biopsy.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Biopsy: </b>' + d.biopsy.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.debridement != null && "" != d.debridement.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Debridement: </b>' + d.debridement.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.comprehensiveTreatment != null && "" != d.comprehensiveTreatment.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Compression Therapy: </b>' + d.comprehensiveTreatment.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.ionisionAndDriange != null && "" != d.ionisionAndDriange.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Incision & Drainage: </b>' + d.ionisionAndDriange.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.negPressureWoundTherapy != null && "" != d.negPressureWoundTherapy.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Negative Pressure Wound Therapy: </b>' + d.negPressureWoundTherapy.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.totalContactCost != null && "" != d.totalContactCost.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Total Contact Cost: </b>' + d.totalContactCost.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
              	if (d.npwApplicationTherapy != null && "" != d.npwApplicationTherapy.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Negative-pressure Wound Therapy: </b>' + d.npwApplicationTherapy.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
              
              	if (d.dermal_matrix_substitute_type != null && "" != d.dermal_matrix_substitute_type.trim() && d.dermal_matrix_document_date != null && "" != d.dermal_matrix_document_date.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>'+d.dermal_matrix_substitute_type.trim()+': </b>' + d.dermal_matrix_document_date.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
              
                kony.print("Mouse COORDINATES drwa point:::" + JSON.stringify(d3.mouse(this)));
                kony.print("Mouse COORDINATES draw point:::" + d3.event.pageX + "|" + d3.event.pageY);
                var pointX = parseInt(d3.mouse(this)[0]);
                var pointY = parseInt(d3.mouse(this)[1]);
                /*
                if(pointY < 100){
                  pointY = pointY + 120;
                }
                if(pointX > 700){
                  pointX = pointX - 150;
                }
                */
                if (pointY > 200) {
                    pointY = pointY - ptYdeduct;
                    //topBottom = "bottom";
                }
                if (pointX > 700) {
                    pointX = pointX - 150;
                }
                kony.print("woundInfoToolTip::::" + JSON.stringify(woundInfoToolTip));
                tooltipDiv.html("<p align='left'>" + woundInfoToolTip + '</p>').style("background", pointColor).style("left", (pointX + 20) + "px").style("top", (pointY) + "px")
                    //.style("left", (d3.event.pageX-60) + "px")		
                    //.style("top", (d3.event.pageY-220) + "px");	
            }
        }).on("mouseout", function(d) {
            // animate point back to origional style
            d3.select(this).transition().duration(300).attr("r", 3);
            tooltipDiv.transition().duration(500).style("opacity", 0);
        });
    }

    function drawLine(lineData, lineColor, lineLabel, lineId) {
        // append line to svg
        var group = svgSelection.append("g").attr("clip-path", "url(#clip)").attr('class', lineId);
        group.append("svg:path").attr('d', lineSelection(lineData.woundSummaryList)).attr('stroke', lineColor).attr('stroke-width', 2).attr('fill', 'none').on("mouseover", function(d) {
            // animate point useful when we have points ploted close to each other.	
            //this.parentElement.appendChild();						
            drawPoints(lineData, lineColor, drawLine(lineData, lineColor, lineLabel, lineId));
            d3.select(this)
                //.moveToFront()
                .transition().duration(50).attr('stroke-width', 2).attr('stroke', lineColor)
                // code block for tooltip
            tooltipDiv.transition().duration(50).style("opacity", 0); //.9 to display
            if (d != null && d.x >= mindate) {
                var ptYdeduct = 50;
                var woundInfoToolTip = "<b>Wound: </b>" + pointData.woundLabel + '<br/><b>Encounter Date:</b> ' + d.encounterDate
                if (frmPatientSummary.btnunits.text === 'Volume') {
                    if (d.volumePercentageOfHealing != null) {
                        woundInfoToolTip = woundInfoToolTip + '<br/><b>%Volume Healed :</b> ' + d.volumePercentageOfHealing
                    }
                    /*
                    if(d.volumeOfWound != null){
                      woundInfoToolTip = woundInfoToolTip + '<br/><b>Wound Volume :</b> ' + d.volumeOfWound  
                    }*/
                } else {
                    if (d.areaPercentageOfHealing != null) {
                        woundInfoToolTip = woundInfoToolTip + '<br/><b>%Area Healed :</b> ' + d.areaPercentageOfHealing
                    }
                    /*
                          if(d.areaOfWound  != null){
                            woundInfoToolTip = woundInfoToolTip + '<br/><b>Wound Area :</b> ' + d.areaOfWound  
                          }*/
                }
                if (d.biopsy != null && "" != d.biopsy.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Biopsy: </b>' + d.biopsy.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.debridement != null && "" != d.debridement.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Debridement: </b>' + d.debridement.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.comprehensiveTreatment != null && "" != d.comprehensiveTreatment.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Compression Therapy: </b>' + d.comprehensiveTreatment.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.ionisionAndDriange != null && "" != d.ionisionAndDriange.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Incision & Drainage: </b>' + d.ionisionAndDriange.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.negPressureWoundTherapy != null && "" != d.negPressureWoundTherapy.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Negative Pressure Wound Therapy: </b>' + d.negPressureWoundTherapy.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                if (d.totalContactCost != null && "" != d.totalContactCost.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Total Contact Cost: </b>' + d.totalContactCost.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
              
              	if (d.npwApplicationTherapy != null && "" != d.npwApplicationTherapy.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>Negative-pressure Wound Therapy: </b>' + d.npwApplicationTherapy.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
              
              	if (d.dermal_matrix_substitute_type != null && "" != d.dermal_matrix_substitute_type.trim() && d.dermal_matrix_document_date != null && "" != d.dermal_matrix_document_date.trim()) {
                    woundInfoToolTip = woundInfoToolTip + '<br/><b>'+d.dermal_matrix_substitute_type.trim()+': </b>' + d.dermal_matrix_document_date.trim();
                    ptYdeduct = ptYdeduct + 20;
                }
                var pointX = parseInt(d3.mouse(this)[0]);
                var pointY = parseInt(d3.mouse(this)[1]);
                if (pointY > 200) {
                    pointY = pointY - ptYdeduct;
                    //topBottom = "bottom";
                }
                if (pointX > 700) {
                    pointX = pointX - 150;
                }
                kony.print("woundInfoToolTip::::" + JSON.stringify(woundInfoToolTip));
                tooltipDiv.html("<p align='left'>" + woundInfoToolTip + '</p>').style("background", pointColor).style("left", (pointX + 20) + "px").style("top", (pointY) + "px")
            }
        }).on("mouseout", function(d) {
            // animate point back to origional style
            d3.select(this)
                //.moveToBack()
                .transition().duration(300)
                //.attr("id", "arcSelection")
                .attr('stroke', lineColor).attr('stroke-width', 2)
            tooltipDiv.transition().duration(500).style("opacity", 0);
        });;
        return group;
    }

    function svgString2Image(svgString, width, height, callback) {
        var imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString))); // Convert SVG string to dataurl
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        //console.log("inside svgString2Image>>>>>>"+imgsrc);
        canvas.width = width;
        canvas.height = height;
        var image = new Image();
        image.onload = function() {
            //console.log("inside  canvas");
            context.clearRect(0, 0, width, height);
            context.drawImage(image, 0, 0, width - 50, height - 50);
            /*if (callback) {
              var canvasUrl = canvas.toDataURL("image/png");
              callback(canvasUrl);
            }*/
        };
        image.src = imgsrc;
        canvg(canvas, svgString);
        var imgAS = canvas.toDataURL("image/png");
        //console.log("inside svgString2Image>>>>>>" + imgAS);
        if (callback) {
            callback(imgAS);
        }
    }
    /*
  function svgString2Image(svgString, width, height, callback){
	var format = format ? format : 'png';
	
	var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to dataurl

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	//console.log("inside svgString2Image>>>>>>"+imgsrc);
	canvas.width = width;
	canvas.height = height;

	var image = new Image;

	image.onload = function() {
		console.log("inside  canvas");
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width - 50, height - 50);
        console.log('insideeeeeeeeeeee Ravi onload');
		canvas.toBlob( function(blob) {
			//console.log("inside  canvas svgString2Image>>>>>>"+blob);
			var filesize = Math.round( blob.length/1024 ) + ' KB';
			  console.log('insideeeeeeeeeeee Ravi saveAs');
            saveAs(blob,'D3 vis exported to PNG.png'); // FileSaver.js function
      

		});

		if (callback) {
      var canvasUrl = canvas.toDataURL("image/png");
      callback(canvasUrl);
    }
	};
		image.src = imgsrc;
	}
  */
    function getSVGString(svgNode) {
        svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
        var cssStyleText = getCSSStyles(svgNode);
        appendCSS(cssStyleText, svgNode)
        var serializer = new XMLSerializer();
        var svgString = serializer.serializeToString(svgNode);
        svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink=') // Fix root xlink without namespace
        svgString = svgString.replace(/NS\d+:href/g, 'xlink:href') // Safari NS namespace fix
        return svgString;

        function getCSSStyles(parentElement) {
            if (!("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
                var descr = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'classList');
                Object.defineProperty(SVGElement.prototype, 'classList', descr);
            }
            var selectorTextArr = [];
            // Add Parent element Id and Classes to the list
            selectorTextArr.push('#' + parentElement.id);
            if (parentElement.classList != null && parentElement.classList.length > 0) {
                for (var c = 0; c < parentElement.classList.length; c++)
                    if (!contains('.' + parentElement.classList[c], selectorTextArr)) selectorTextArr.push('.' + parentElement.classList[c]);
            }
            // Add Children element Ids and Classes to the list
            var nodes = parentElement.getElementsByTagName("*");
            for (var i = 0; i < nodes.length; i++) {
                var id = nodes[i].id;
                if (!contains('#' + id, selectorTextArr)) selectorTextArr.push('#' + id);
                var classes = nodes[i].classList;
                if (classes != null && classes.length > 0) {
                    for (var c = 0; c < classes.length; c++)
                        if (!contains('.' + classes[c], selectorTextArr)) selectorTextArr.push('.' + classes[c]);
                }
            }
            // Extract CSS Rules
            var extractedCSSText = "";
            for (var i = 0; i < document.styleSheets.length; i++) {
                var s = document.styleSheets[i];
                try {
                    if (!s.cssRules) continue;
                } catch (e) {
                    if (e.name !== 'SecurityError') throw e; // for Firefox
                    continue;
                }
                var cssRules = s.cssRules;
                for (var r = 0; r < cssRules.length; r++) {
                    if (contains(cssRules[r].selectorText, selectorTextArr)) extractedCSSText += cssRules[r].cssText;
                }
            }
            return extractedCSSText

            function contains(str, arr) {
                return arr.indexOf(str) === -1 ? false : true;
            }
        }

        function appendCSS(cssText, element) {
            var styleElement = document.createElement("style");
            styleElement.setAttribute("type", "text/css");
            styleElement.innerHTML = cssText;
            var refNode = element.hasChildNodes() ? element.childNodes[0] : null;
            element.insertBefore(styleElement, refNode);
        }
    }

    function exportChartImageAsString() {
        var svgSelection = d3.select("svg");
        if (svgSelection.node()) {
            var svgString = getSVGString(svgSelection.node());
            svgString2Image(svgString, 2 * (svgConfig.width + svgConfig.margin.left), 2 * (svgConfig.height + svgConfig.margin.top), function(base64AsMimeType) {
                //Do stuff like appending to response MF as b64
                printModuleConstants.chartImageAsBase64 = base64AsMimeType;
                //kony.print('exportChartImageAsString1 '+base64AsMimeType);
                return printModuleConstants.chartImageAsBase64;
            });
        }
        return printModuleConstants.chartImageAsBase64;
    }
    try {
        exportChartImageAsString();
    } catch (err) {
        kony.print("Error with exportChartImageAsString:::" + err);
    }
	frmPatientSummary.forceLayout();
    //kony.print('exportChartImageAsString val '+value);
}



