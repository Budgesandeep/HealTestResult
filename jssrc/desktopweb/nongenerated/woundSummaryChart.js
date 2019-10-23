	//Type your code here
	//WoundSummary service call
	//var selectedWounds=[];
	//gbl_PatientData=[];
	function OnclickTimeline(timeline) {
	    var selectedRange = "";
	    switch (timeline) {
	        case 4:
	            selectedRange = "4W";
	            break;
	        case 8:
	            selectedRange = "8W";
	            break;
	        case 12:
	            selectedRange = "12W";
	            break;
	        case 26:
	            selectedRange = "6M";
	            break;
	        case 52:
	            selectedRange = "1Y";
	            break;
	        default:
	            selectedRange = "ALL";
	            break;
	    }
	    // kony.print("docEntity>>"+ patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].docentityId);
	    kony.print("woundsSelected index>>>" + JSON.stringify(woundsSelected));
	    kony.print("woundData>>>>" + JSON.stringify(woundSummaryGraphData.woundData));
	    // kony.print(" patientSummaryObjects.woundDescriptionDetails[i] ------>>>"+JSON.stringify(patientSummaryObjects.woundDescriptionDetails[1].docentityId));
	    //kony.print("selected wound data" + JSON.stringify(woundSummaryGraphData.woundData[woundsSelected[0]]));
	    kony.print("timeline>>>" + timeline);
	    kony.print(" deepLinkInfo.patientID>>>" + deepLinkInfo.patientID);
	    kony.print(" patientSummaryObjects.patientDemoGraphics.patientId : " + patientSummaryObjects.patientDemoGraphics.patientId);
	    //kony.print("Doll DocEId>>"+DocEId);
	    /*var xxx = []; 
	    for(i=0 ; i<patientSummaryObjects.woundDescriptionDetails.length ; i++)
	    {
	      	kony.print(patientSummaryObjects.woundDescriptionDetails[i].woundno+"#@#"+patientSummaryObjects.woundDescriptionDetails[i].docentityId); 
	      	xxx[(patientSummaryObjects.woundDescriptionDetails[i].woundno) - 1] = patientSummaryObjects.woundDescriptionDetails[i].docentityId; 
	      	kony.print(xxx);
	    }*/
	    var wounddetails = '';
	    var j;
	    kony.print("length is>>" + woundsSelected.length);
	    for (var i = 0; i < woundsSelected.length; i++) {
	        if (typeof woundsSelected[i] === "object") { //[1, {wound: 2: wound}, {}]
	            j = Number(parseInt(woundsSelected[i].woundNum)) - 1;
	        } else {
	            j = parseInt(woundsSelected[i]) - 1;
	        }
	        kony.print("j value:: " + j); //change required
	        wounddetails = wounddetails + patientSummaryObjects.woundIdMapping[j] + "#@#";
	        kony.print("in Loop wounddetails>>" + wounddetails);
	    }
	    kony.print(" wounddetails>>>" + wounddetails);
	    var inputData = {
	        //"patientId" : userInfo.patientId,
	        "patientId": patientSummaryObjects.patientDemoGraphics.patientId,
	        "wound_details": wounddetails, // all seclected woundIds
	        "no_of_weeks": selectedRange //"6M","1Y","ALL"
	    };
	    kony.print("WS inputData>>>" + JSON.stringify(inputData));
	    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_WOUNDSUMMARY, {
	            "Content-Type": "application/json",
	            "Authorization": userInfo.headerAccessToken,
	            "patientId": patientSummaryObjects.patientDemoGraphics.patientId,
	            "facilityId": userInfo.presentFacilityId,
	            "userId": userInfo.userId,
	            "userName": userInfo.userName,
	            "deviceType": userInfo.deviceType,
	            "deviceId": userInfo.sessionId
	        }, inputData, woundSummarySuccessCallback, woundSummaryFailureCallback
	        //Loading indicator for Graph alone
	    );
	}

	function woundSummarySuccessCallback(response) {
	    kony.print("woundSummarySuccessCallback response>>" + JSON.stringify(response));
	    // if(response.hasOwnProperty("woundSummary") && response.woundSummary.length >0 ){
	    //woundSummaryGraphData.woundData = response.woundSummary;
	    patientSummaryObjects.patientListAndGraphData = response.woundSummary;
	    kony.print("WoundSummarySR patientListAndGraphData>>" + JSON.stringify(patientSummaryObjects.patientListAndGraphData));
	    //Sandeep offline changes for chart
	    if (isIpad && !isNetworkAvailable()) {
	        var error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
	        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
	    } else {
	        frmPatientSummary_addWoundSummarySegments();
	        frmPatientSummary_WoundSummaryChart();
	        frmPatientSummary.forceLayout();
	    }
	    //--kony.print("WoundSummary Successcallback1>>"+JSON.stringify(woundSummaryGraphData.woundData));
	    //--kony.print("WoundSummary Successcallback2>>"+JSON.stringify(patientSummaryObjects.patientListAndGraphData));
	    //gbl_PatientData =response.woundSummary;
	    //--kony.print("gbl_PatientData>>"+JSON.stringify(gbl_PatientData));
	    //   } else{
	    //    // woundSummaryGraphData.woundData = [];
	    //   }
	    //    var eventObjectIdd = {};
	    //   eventObjectIdd.id =  "fccheckuncheck1stload";
	    //   frmPatientSummary_checkuncheck(eventobjectIdd);
	    //frmPatientSummary_WoundSummaryChart();
	    //frmPatientSummary_addWoundSummarySegments();
	    //patientSummaryObjects.patientListAndGraphData.push(response.woundSummary[i]);
	    //--kony.print("End of TimeLine");
	    //frmPatientSummary.forceLayout();
	}

	function woundSummaryFailureCallback(response) {
	    //--kony.print("woundSummaryFailureCallback response >>"+JSON.stringify(response));
	    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
	    if (response != null && response.opstatus === 1582 && response.statuscode === "") {
	        error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
	        loginModule.showLoginScreen(error_label);
	    } else {
	        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
	    }
	}