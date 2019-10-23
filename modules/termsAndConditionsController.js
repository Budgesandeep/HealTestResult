
var terms_and_conditions_offline =  {};

/************************************************************************************
* Get Terms and condtion offline
*************************************************************************************/

terms_and_conditions_offline.getTermsAndConditions = function(){

  function successCallBack(res){
    kony.print("getTermsAndConditionsForOffline success callback--------->");
    kony.print("getTermsAndConditionsForOffline success callback response--------->"+ JSON.stringify(res));
    var response = {};
    
    if ( !com.healogics.utility.isEmpty(res[0])){
      response.opstatus = 0;
      response.statuscode = "200";
      response.termsText = res[0]._termsText;
      response.acceptedDate = res[0]._acceptedDate;
      response.expiryDate = res[0]._expiryDate;
      response.timestamp = res[0]._timestamp;
      dashboardModule.getUserAcknowledgementSuccessCallback(response);
    }
    com.healogics.utility.dismissLoading();
  }
  
  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("getTermsAndConditionsForOffline failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }
  com.healogics.utility.showLoading();
  var wcs = "where facilityId = "+ JSON.stringify(userInfo.selectedFacilityId) +
      "and userId = " + JSON.stringify(userInfo.userId);///should check facility and logged in user Id to proceed
  com.healogics.offline.termsAndConditions.find(wcs,successCallBack,errorCallBack);

};

/************************************************************************************
* Delete Terms and Condition for Same Facility ID
*************************************************************************************/

terms_and_conditions_offline.deleteRecordForFacilityId = function(facilityId){
  
    function successCallBack(res){
      
        kony.print("Record Deleted Successfully >>>>>");
        kony.print("<<Error>>>"+JSON.stringify(res));
    }
  
    function errorCallBack(res){
        kony.print("Delete Record Error Call Back >>>>>");
        kony.print("<<Error>>>"+JSON.stringify(res));
    }
  
    var wcs = "where facilityId = "+ JSON.stringify(facilityId);

    com.healogics.offline.termsAndConditions.remove(wcs, successCallBack , errorCallBack, false);
 
};

/************************************************************************************
* Update Terms & Conditions accepted time in  Offline mode
*************************************************************************************/

terms_and_conditions_offline.updateTermsAndConditions = function(acceptedTermsAndConditions){ 
  
  
    function successCallBack(res){ 
    kony.print("updateTermsAndConditions success callback--------->");
    kony.print("updateTermsAndConditions Successfully--------->"+ JSON.stringify(res));

      var response = {};
      response.opstatus = 0;
      response.statuscode = "200";
      response.responsedesc = "Success";
      ///Akshay - Setting acceptedDate in the successCallback of UpdateTerms and Conditions
      userInfo.ackAcceptedDate = moment(systemDate).format("DD-MM-YYYY");
      
	dashboardModule.updateUserAcknowledgementSuccessCallback(response);  
    com.healogics.utility.dismissLoading();
    }

    function errorCallBack(res){
      com.healogics.utility.dismissLoading();
      kony.print("updateTermsAndConditions failure callback");
      kony.print("<<Error>>>"+JSON.stringify(res));
    }

	  com.healogics.utility.showLoading();
      var systemDate = new Date();
      var currentTimestamp = convertCurrentToEDTTime(true, false);

      var myObj = {
        acceptedDate: moment(systemDate).format("YYYY-MM-DD"),  
        expiryDate:moment(systemDate).add(365,'days').format("YYYY-MM-DD"),
        lastUpdatedBy:userInfo.userId,
        //lastUpdatedTimestamp:com.healogics.utility.convertEST_To_PST_CST_TimeZone(systemDate,userInfo.timezone,DATE_FORMAT.TASK_CREATED_DATE)///Akshay - created date at the app side
     	lastUpdatedTimestamp:currentTimestamp
      };
  
      var compPrimaryKey = {facilityId:userInfo.selectedFacilityId, userId:userInfo.userId};///Akshay : Removed userName and put userId
        kony.print("compPrimaryKey--------->"+ compPrimaryKey);
      kony.print("myObj updateTermsAndConditions--------->"+ JSON.stringify(myObj));
  
  com.healogics.offline.termsAndConditions.updateByPK(compPrimaryKey, myObj, 
                                             successCallBack, errorCallBack, true);
};