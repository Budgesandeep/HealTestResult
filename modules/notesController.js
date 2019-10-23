notes_cntrl_offline = {};


/************************************************************************************
* Get Notes List Offline
*************************************************************************************/
notes_cntrl_offline.getNotesList = function(notes_info){  
  var response = {};

  function successCallBack(res){
    // To perform any thing after getting the response
    kony.print("getNotesList success callback--------->");
    kony.print("getNotesList--------->"+ JSON.stringify(res));
    if(res!==null){
      response.noteslist = [];
      var arrNotes = notes_cntrl_offline.getCreatedTasksInOffline();
      kony.print("arrNotes--------->"+ JSON.stringify(arrNotes));
      if(arrNotes.length>0){
        response.noteslist = arrNotes;
      }
      kony.print("response.noteslist before--------->"+ JSON.stringify(response.noteslist));
      for (i = 0; i< res.length; i++){
        var temp = {};
        temp.facilityId = res[i]._facilityId;
        temp.notesId = res[i]._notesId;
        temp.action = res[i]._action;
        temp.createdBy = res[i]._createdBy;
        temp.createDate =res[i]._createDate ;
        //temp.createdBy = res[i]._createdBy;
        temp.followStepDesc = res[i]._followStepDesc;
        temp.lastUpdatedBy = res[i]._lastUpdatedBy;
        temp.lastUpdatedTimestamp = res[i]._lastUpdatedTimestamp;
        temp.notesDesc = res[i]._notesDesc;
        response.noteslist.push(temp);
      }
      kony.print("response.noteslist after--------->"+ JSON.stringify(response.noteslist));
      response.opstatus =0;
      response.statuscode = "200";
      response.timestamp ="";
      notesModule.getNotesSuccessCallback(response);

    }else{
      var error_label = res.responsedesc;
      if(com.healogics.utility.isEmpty(error_label)){
        error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      }

      kony.print("inside getNotesList else end::");  
    }

  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("getNotesList failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }

  kony.print("Notes Info"+ JSON.stringify(notes_info));

  var wcs = 
      "where patientName =" + JSON.stringify(notes_info.patientname) + 
      " and woundNo =" + JSON.stringify(notes_info.woundId) +
      " and patientUuid =" + JSON.stringify(notes_info.patientId) +
      //         " and medicalRecordNo =" + JSON.stringify(notes_info.medicalRecordNo) +
      " and facilityId =" + JSON.stringify(userInfo.selectedFacilityId) +
      "order by createDate desc";

  kony.print("Where Clause getNotesList : "+ wcs);


  com.healogics.offline.notesList.find(wcs, successCallBack , errorCallBack, false);

  return response.noteslist;
};


/************************************************************************************
* Create New Notes Offline
*************************************************************************************/


notes_cntrl_offline.createNewNotesOffline = function(notes_info){ 

  function successCallBack(res){
    kony.print("createNewNotesOffline success callback--------->");
    kony.print("createNewNotesOffline inserted Successfully--------->"+ JSON.stringify(res));

    var response = {};
    response.opstatus =0;
    response.statuscode = "200";
    response.timestamp ="";
    notesModule.createNotesSuccessCallback(response);
    com.healogics.utility.dismissLoading();
  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("createNewNotesOffline failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
    kony.print("notesModule.NotesModuleFailureCallback  start::"+JSON.stringify(res));

    com.healogics.utility.showErrorAlert(res.errmsg);

  }
  com.healogics.utility.showLoading();
  kony.print("<---notes info Create Notes---->"+JSON.stringify(notes_info));
  var getLatestCreateDate = convertCurrentToEDTTime(true, false);
  var systemDate = new Date();

  var myObj = {
    userId:userInfo.userName,
    patientUuid:notes_info.patientId,
    woundNo:notes_info.woundId,
    notesDesc:encodeURIComponent(notes_info.notes),
    patientName:notes_info.patientname,
    medicalRecordNo:notes_info.medicalRecordNo,
    deleted:"false",
    lastUpdatedTimestamp: convertCurrentToEDTTime(true, false),
    dueDate:notes_info.duedate,
    followStepDesc:notes_info.followStepDesc,
    facilityId : userInfo.selectedFacilityId,
    lastUpdatedBy: userInfo.userName,///According to inputs from Jayasree/Ranjith(userName removed and userId added)
    createdBy: userInfo.userName,///According to inputs from Jayasree/Ranjith (userName added again for UI)
    createDate:getLatestCreateDate///Akshay - created date at the app side

  };
  kony.print("My Object Print--------->"+ JSON.stringify(myObj));
  com.healogics.offline.notesList.create(myObj, successCallBack, errorCallBack, true);
};

notes_cntrl_offline.getCreatedTasksInOffline = function(){
  var noteslist = [];
  function successCallBack(res){
    // To perform any thing after getting the response
    kony.print("gettasksList in notes success callback--------->");
    kony.print("gettasksList in notes--------->"+ JSON.stringify(res));
    if(res!==null){
      noteslist = [];
      for (i = 0; i< res.length; i++){
        var temp = {};
        temp.facilityId = res[i]._facilityId;
        temp.patientUuid = res[i]._patientUuid;
        temp.userId = res[i]._userId;
        temp.createDate =res[i]._createDate ;
        temp.followStepDesc = res[i]._followStepDesc;
        temp.patientName = res[i]._patientName;
        temp.notesDesc = res[i]._taskDesc;
        temp.woundNo = res[i]._woundNo;
        temp.createdBy = res[i]._userId;
        temp.lastUpdatedBy = res[i]._lastUpdatedBy;
        noteslist.push(temp);
      }
      kony.print("noteslist in notes--------->"+ JSON.stringify(noteslist));
    }else{
      var error_label = res.responsedesc;
      if(com.healogics.utility.isEmpty(error_label)){
        error_label = ERROR_CONSTANTS.LOGIN_ERROR_MESSAGE;
      }
      kony.print("inside gettasksList in notes else end::");  
    }
  }

  function errorCallBack(res){
    com.healogics.utility.dismissLoading();
    kony.print("gettasksList in notes failure callback");
    kony.print("<<Error>>>"+JSON.stringify(res));
  }

  var wcs = 
      "where userId =" + JSON.stringify(userInfo.userName) + 
      " and patientUuid =" + JSON.stringify(patientSummaryObjects.patientDemoGraphics.patientId) +
      " and facilityId =" + JSON.stringify(userInfo.selectedFacilityId) +
      " and deleted = 0 order by createDate desc";
  kony.print("Where Clause getNotesList : "+ wcs);
  com.healogics.offline.tasksList.find(wcs, successCallBack , errorCallBack, true);

  return noteslist;
};