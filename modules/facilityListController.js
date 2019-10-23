
var facilityList_cntrl_offline = {};

/************************************************************************************
* Get All Facility List By UserID
*************************************************************************************/

facilityList_cntrl_offline.getAllFacilityListForUserID = function(userID){
  var response = {};
  function successCallBack(res){
    kony.print("getAllFacilityListForOffline success callback--------->");
    kony.print("getAllFacilityListForOffline success callback response--------->"+ JSON.stringify(res));
    response.facilities = [];
    ///Akshay - Checking the Response values before pushing the data from db to array
    if (!com.healogics.utility.isEmpty(res) && res.length > 0 )
    {
      for (i = 0; i< res.length; i++){
        var temp = {};
        temp.facilityId  = res[i]._facilityId;
        temp.facilityName  = res[i]._facilityName;
        temp.userId  = res[i]._userId;
        temp.timeZone   = res[i]._timeZone ;
        temp.configuration   = res[i]._configuration;
        temp.facilityBluebookId   = res[i]._facilityBluebookId ;

        response.facilities.push(temp);
      }
    }
  }
  function errorCallBack(res){
    kony.print("getAllFacilityListForOffline failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }

  var wcs = "where userId = "+ JSON.stringify(userID);
  com.healogics.offline.facilityList.find(wcs,successCallBack,errorCallBack);
  return response.facilities;
};


/************************************************************************************
* Insert Facility List For User
*************************************************************************************/

facilityList_cntrl_offline.insertOfflineFacilityList = function(){  
  function successCallBack(res){
    // To perform any thing after getting the response
    kony.print("insertOfflineFacilityList success callback--------->");
    kony.print("insertOfflineFacilityList inserted Successfully--------->"+ JSON.stringify(res));
  }

  function errorCallBack(res){
    kony.print("insertOfflineFacilityList failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }

  var facilityLists = [];

  kony.print(JSON.stringify(userInfo.facilityList));
  for (i = 0; i< userInfo.facilityList.length; i++){
    facilityLists[i] = {};
    facilityLists[i].facilityId = userInfo.facilityList[i].facilityId;
    facilityLists[i].facilityName = userInfo.facilityList[i].facilityName;
    facilityLists[i].userId = userInfo.userId;
    facilityLists[i].timeZone = userInfo.facilityList[i].timeZone;
    facilityLists[i].configuration = userInfo.facilityList[i].configuration;
    facilityLists[i].facilityBluebookId = userInfo.facilityList[i].facilityBluebookId;
    facilityLists[i].userName = userInfo.userName;
    kony.print(JSON.stringify(facilityLists[i]));
  }

  kony.print("My Object Print Facility--------->"+ JSON.stringify(facilityLists));

  com.healogics.offline.facilityList.createAll(facilityLists, successCallBack, errorCallBack, false);
};

/************************************************************************************
* Remove record from DB for UserId
*************************************************************************************/

facilityList_cntrl_offline.deleteRecordByUserId = function(userId){  

  function successCallBack(res){
    // To perform any thing after getting the response
    kony.print("deleteRecordByUserId success callback--------->");
    kony.print("deleteRecordByUserId Successfully Json--------->"+ JSON.stringify(res));
  }

  function errorCallBack(res){
    kony.print("deleteRecordByUserId failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }

  var wcs = "where userId ="+ JSON.stringify(userId);
  kony.print("Where Clause--------->"+ JSON.stringify(wcs));

  com.healogics.offline.facilityList.remove (wcs, successCallBack, errorCallBack);
};


