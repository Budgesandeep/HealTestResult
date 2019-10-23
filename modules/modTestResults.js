//Type your code here


//CO-666 changes
//Method to show frmPatientTestResults

var cloneSegmantDate = null;

function frmPatientTestResults_showForm(){
 registerTimeout();
 hideFormMenu();
 load_headerdata();
  
 if(kony.application.getCurrentForm().id != "frmPatientTestResults"){
    com.healogics.patientSummary.setPatientDemoGraphics(patientSummaryObjects.patientDemoGraphics,"frmPatientTestResults");
    //frmPatientTestResults.show(); 
  }

getTestResultsList();


}

var privateKey="5285db9a24ebbcefe5f5";
var lblTestType="Consults";
var response;
var resultStr;

getTestResultsList = function(){

  var inputData = {
    "privateKey" : privateKey,
    "masterToken":userInfo.masterToken,
    "userId" : userInfo.userId,
    "facilityId" : userInfo.presentFacilityId,
    "patientId" : patientSummaryObjects.patientDemoGraphics.patientId,
    
  };

  com.healogics.mfutility.invokeIntegrationService(
    MF_SERVICECONSTANTS.SERVICE_NAME_TESTRESULTS,
    MF_SERVICECONSTANTS.OPERATION_NAME_GETTESTRESULTSLIST,
    {


    },
    inputData,
    getTestResultsListSuccesscall,
    getTestResultsListFailurecall

  );
};

function getTestResultsListSuccesscall(res){

  response=res;
  showSelectedGroup(response,"Consults");
  frmPatientTestResults.lblTestResults.text="Consults";

}

function getTestResultsListFailurecall(res){
  kony.print(res);
  com.healogics.utility.showErrorAlert(res.errorMessage, GENERAL_CONSTANTS.TEXT_CLOSE);
}

//////// testGroupSelction///////////////
function testGroupSelction(){
  if(frmPatientTestResults.segmentTestResults.selectedItems !==null && frmPatientTestResults.segmentTestResults.selectedItems[0]!== null )
  {
    lblTestType= frmPatientTestResults.segmentTestResults.selectedItems[0].lblTestType;
    frmPatientTestResults.lblTestResults.text=lblTestType;
  }else{

  }
  showSelectedGroup(response,lblTestType);

}


function CallextenstionResultTest(context){
  var showInfo=frmPatientTestResults.segmentTestResultsDocuments.selectedRowItems[0].lblTestResultResults;
    if((showInfo.text.length)>=50){
    	com.healogics.utility.showErrorAlert(showInfo.text, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
}

function showSelectedGroup(res,lblTestType){
  //frmPatientTestResults.show();
  var lblTestResultResults;
  var lblTestResultsDateCompleted;
  var count=0;
  var  segResultData=[];
  var segroupName=[];
  var btnFlag=false;
  cloneSegmantDate = [];
////For getting resultsObservation length//////
  if(res !== null && res.results !== null && res.results !== undefined){
    frmPatientTestResults.lblNoRecords.setVisibility(false);
  	frmPatientTestResults.segmentTestResultsDocuments.setVisibility(true);
  	frmPatientTestResults.fcTestResultsListHeader.setVisibility(true);
  	for(i=0;i<res.results.length;i++){
          if(res.results[i].resultsObservation!=="null" && res.results[i].resultsObservation.length>=50){
            resultStr=res.results[i].resultsObservation;
            lblTestResultResults=resultStr.substring(0,40); 
            lblTestResultResults=lblTestResultResults+"<a href="+"><font size="+1+"> View More</font></a>";
            btnFlag=true;

          }
          else if(res.results[i].resultsObservation!=="null" && res.results[i].resultsObservation.length<50) 
          {
            lblTestResultResults=res.results[i].resultsObservation+"<a href="+"></a>";
            btnFlag=false;  
            resultStr="";
          }
          else
          {
            lblTestResultResults="";
            btnFlag=false;
            resultStr="";
          }

         ///check  testDate 

          if(res.results[i].testDate!=="null"){
            lblTestResultsDateCompleted=res.results[i].testDate;
          }else{
            lblTestResultsDateCompleted="";
          }


          if(res.results[i].groupName=="Consults" && lblTestType=="Consults"){   
            frmPatientTestResults.segmentTestResultsDocuments.removeAll();


            //////////Assign the lblTestResultResults value///////


            var tempConsults =   {
              "btnTestResultDescription":{"text": res.results[i].testDescription},
              "lblTestResultDateOrdered":{"text":res.results[i].orderDate },
              "lblTestResultsDateCompleted":{"text":lblTestResultsDateCompleted},
              "btnTestResultAttachment":{"text":"View Document"},
              "txtRichTestResult":{"text":lblTestResultResults},
              "btnOnHoverResult": {"text": "" },
             "lblTestResultResults":{"text":res.results[i].resultsObservation},

            };
            segResultData.push(tempConsults);
            cloneSegmantDate = clone(segResultData);
          }
          else if(res.results[i].groupName=="Laboratory" && lblTestType=="Laboratory")
          {

            frmPatientTestResults.segmentTestResultsDocuments.removeAll();

            var tempLaboratory =   {

             "btnTestResultDescription":{"text": res.results[i].testDescription},
              "lblTestResultDateOrdered":{"text":res.results[i].orderDate },
              "lblTestResultsDateCompleted":{"text":lblTestResultsDateCompleted},
              "btnTestResultAttachment":{"text":"View Document"},
              "txtRichTestResult":{"text":lblTestResultResults},
              "btnOnHoverResult": {"text": "" },
             "lblTestResultResults":{"text":res.results[i].resultsObservation},
            };

            segResultData.push(tempLaboratory);
			cloneSegmantDate = clone(segResultData);
          }else if(res.results[i].groupName=="Radiology" && lblTestType=="Radiology"){

            frmPatientTestResults.segmentTestResultsDocuments.removeAll();
            var tempRadiology =   {

             "btnTestResultDescription":{"text": res.results[i].testDescription},
              "lblTestResultDateOrdered":{"text":res.results[i].orderDate },
              "lblTestResultsDateCompleted":{"text":lblTestResultsDateCompleted},
              "btnTestResultAttachment":{"text":"View Document"},
              "txtRichTestResult":{"text":lblTestResultResults},
              "btnOnHoverResult": {"text": "" },
             "lblTestResultResults":{"text":res.results[i].resultsObservation},
            };
            segResultData.push(tempRadiology);
            cloneSegmantDate = clone(segResultData);
          }

  	}
    paginate(segResultData,"frmPatientTestResults");
  } else {
    	//testResultsResponse = null;
      	frmPatientTestResults.lblNoRecords.text = "No Test Results";
  		frmPatientTestResults.lblNoRecords.setVisibility(true);
  		frmPatientTestResults.segmentTestResultsDocuments.removeAll();
  		frmPatientTestResults.segmentTestResultsDocuments.setVisibility(false);
  		frmPatientTestResults.fcTestResultsListHeader.setVisibility(false);
  		frmPatientTestResults.fcpaginatebuttons.setVisibility(false);
    	frmPatientTestResults.segmentTestResultsDocuments.setData(segResultData);
    
  }
   frmPatientTestResults.show();
  //frmPatientTestResults.segmentTestResultsDocuments.setData(segResultData);  
}


function sortTestResultSelection(eventName){

    var  tempSort=cloneSegmantDate;
  	if(tempSort!== null || tempSort !== "" || tempSort !== "null"){
      	frmPatientTestResults.lblNoRecords.setVisibility(false);
  		frmPatientTestResults.segmentTestResultsDocuments.setVisibility(true);
  		frmPatientTestResults.fcTestResultsListHeader.setVisibility(true);
      	if(eventName === "A"){
         	tempSort.sort(function(a, b){
            var nameA = "";
            var nameB = "";
            if(a.lblTestResultResults.text !== "null" || a.lblTestResultResults.text !== ""){
            	nameA=a.lblTestResultResults.text.toLowerCase(); 
            }
            if(b.lblTestResultResults.text !== "null" || b.lblTestResultResults.text !== ""){
            	nameB=b.lblTestResultResults.text.toLowerCase(); 
            }
            if (nameA < nameB) //sort string ascending
                return -1 ;
            if (nameA > nameB)
                return 1;
            return 0; //default return value (no sorting)
          }); 
        }
      	if(eventName === "D"){
          	tempSort.sort(function(a, b){
          	var nameA = "";
            var nameB = "";
            if(a.lblTestResultResults.text !== "null" || a.lblTestResultResults.text !== ""){
            	nameA=a.lblTestResultResults.text.toLowerCase(); 
            }
            if(b.lblTestResultResults.text !== "null" || b.lblTestResultResults.text !== ""){
            	nameB=b.lblTestResultResults.text.toLowerCase(); 
            }
            if (nameA > nameB) //sort string ascending
                return -1 ;
            if (nameA < nameB)
                return 1;
            return 0; //default return value (no sorting)
          }); 
        }
      
      paginate(tempSort,"frmPatientTestResults");
    } else {
      	cloneSegmantDate = null;
      	frmPatientTestResults.lblNoRecords.text = "No Test Results";
  		frmPatientTestResults.lblNoRecords.setVisibility(true);
  		frmPatientTestResults.segmentTestResultsDocuments.removeAll();
  		frmPatientTestResults.segmentTestResultsDocuments.setVisibility(false);
  		frmPatientTestResults.fcTestResultsListHeader.setVisibility(false);
  		frmPatientTestResults.fcpaginatebuttons.setVisibility(false);
      	frmPatientTestResults.segmentTestResultsDocuments.setData(tempSort);
    }
  frmPatientTestResults.forceLayout();
}



function sortOrderDateTestResultSelection(eventName){
    var  tempSort=cloneSegmantDate;
  	if(tempSort!== null || tempSort !== "" || tempSort !== "null"){
      
      	frmPatientTestResults.lblNoRecords.setVisibility(false);
  		frmPatientTestResults.segmentTestResultsDocuments.setVisibility(true);
  		frmPatientTestResults.fcTestResultsListHeader.setVisibility(true);
      	if(eventName === "A"){
         	tempSort.sort(function(a, b){
              var dateA=new Date(a.lblTestResultDateOrdered.text);
              var dateB=new Date(b.lblTestResultDateOrdered.text);
              return dateA-dateB; //sort by date ascending
			});
        }
      	if(eventName === "D"){
          	tempSort.sort(function(a, b){
              var dateA=new Date(a.lblTestResultDateOrdered.text);
              var dateB=new Date(b.lblTestResultDateOrdered.text);
              return dateB-dateA; //sort by date ascending
			});
        }
      paginate(tempSort,"frmPatientTestResults");
      
    } else {
      	cloneSegmantDate = null;
      	frmPatientTestResults.lblNoRecords.text = "No Test Results";
  		frmPatientTestResults.lblNoRecords.setVisibility(true);
  		frmPatientTestResults.segmentTestResultsDocuments.removeAll();
  		frmPatientTestResults.segmentTestResultsDocuments.setVisibility(false);
  		frmPatientTestResults.fcTestResultsListHeader.setVisibility(false);
  		frmPatientTestResults.fcpaginatebuttons.setVisibility(false);
      	frmPatientTestResults.segmentTestResultsDocuments.setData(tempSort);
    }
  frmPatientTestResults.forceLayout();
}

  
   






