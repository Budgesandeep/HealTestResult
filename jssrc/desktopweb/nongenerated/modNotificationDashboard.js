//Type your code here
var notificationModule = {};
var notificationList = [];
var notificationListFromService = [];
var frmNotificationDashboard_init = function() {
    //frmNotificationDashboard.txtTitle.onBeginEditing =  notificationModule.textBoxBeginEditing;
    //frmNotificationDashboard.txtAreaDescription.onBeginEditing =  notificationModule.textBoxBeginEditing;
    //frmNotificationDashboard.txtLink.onBeginEditing =  notificationModule.textBoxBeginEditing;
};
var frmNotificationDashboard_textBoxEditing = function(eventObj) {
    if (eventObj.id === "txtAreaDescription") {
        eventObj.skin = "sknTxtAreaWhiteRnd";
    } else {
        eventObj.skin = "skntxtbxrounded";
    }
    addNotificationModule.shouldCreateNewNotificationID = "yes";
};
var frmNotificationDashboard_show = function() {
    patientListConstants.weekRange = "";
    frmNotificationDashboard.show();
};
var frmNotificationDashboard_preShow = function() {
    changeConnectionStatus();
    frmNotificationDashboard.fctopmenu.setVisibility(false);
    //notificationModule.facilityListSuccessCallback();
};
var frmNotificationDashboard_PostShow = function() {
    addNotificationModule.shouldCreateNewNotificationID = "no";
    menu_closeSideMenu();
    load_headerdata(frmNotificationDashboard);
    frmNotificationDashboard.segnotificationlist.removeAll();
    frmNotificationDashboard_showNotificationListView();
    kony.print("<------Input Params from frmNotificationDashboard_PostShow------->" + userInfo.headerAccessToken + userInfo.userId + getUserFacilityId + JSON.stringify(userInfo));
    var inputData = {};
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_NOTIFICATIONLIST, {
        "Authorization": userInfo.headerAccessToken,
        "userId": userInfo.userId,
        "facilityId": userInfo.presentFacilityId,
        "userName": userInfo.userName,
        "deviceType": userInfo.deviceType,
        "deviceId": userInfo.sessionId
    }, inputData, notificationModule.notificationListSuccessCallback, notificationModule.notificationListFailureCallback, true);
};
notificationModule.notificationListSuccessCallback = function(response) {
    kony.print("<---------Success Response from NotificationList Service-------->" + JSON.stringify(response));
    notificationList = [];
    notificationListFromService = response.Notification;
    for (var i in response.Notification) {
        var notification = response.Notification[i];
        kony.print("<------Notification Object from Array---->" + JSON.stringify(notification));
        var notificationObject = {
            "lblnotificationdate": notification.start_date,
            "lbldescription": notification.title + " - " + notification.description,
            "lblcreatedby": notification.created_user,
            "lblstatus": notification.notification_status,
            "btnEdit": {
                "text": "Edit"
            }
        };
        notificationList.push(notificationObject);
    }
    kony.print("Notification List=========" + JSON.stringify(notificationList));
    if (notificationList.length === 0) {
        frmNotificationDashboard.lblNoNotifications.setVisibility(true);
        frmNotificationDashboard.lblNoNotifications.parent.forceLayout();
    } else {
        frmNotificationDashboard.lblNoNotifications.setVisibility(false);
        frmNotificationDashboard.segnotificationlist.setData(notificationList);
        frmNotificationDashboard.forceLayout();
    }
    if (addNotificationModule.facilityListFromService.length === 0 || addNotificationModule.facilityListFromService === null) {
        addNotificationModule.fetchFacilityList();
    }
};
notificationModule.notificationListFailureCallback = function(response) {
    kony.print("<---------Failure Response from NotificationList Service-------->" + JSON.stringify(response));
};
var frmNotificationDashboard_editNotification = function(selected) {
    kony.print("Selected Notification----->" + JSON.stringify(selected.rowIndex));
    addNotificationModule.isEdit = true;
    addNotificationModule.clearAllFields();
    addNotificationModule.setTimeData();
    var selectedNotification = notificationListFromService[selected.rowIndex];
    addNotificationModule.setNotificationDetails(selectedNotification);
    addNotificationModule.setFacilityData(addNotificationModule.facilityListFromService);
    notificationModule.showAddNotificationView();
};
var frmNotificationDashboard_addNotification = function(eventObj) {
    addNotificationModule.isEdit = false;
    addNotificationModule.clearAllFields();
    addNotificationModule.segFacilityList = [];
    addNotificationModule.setFacilityData(addNotificationModule.facilityListFromService);
    var today = new Date();
    frmNotificationDashboard.calStartDate.validStartDate = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
    frmNotificationDashboard.calEndDate.validStartDate = [today.getDate(), today.getMonth() + 1, today.getFullYear()];
    addNotificationModule.setTimeData();
    notificationModule.showAddNotificationView();
};
var frmNotificationDashboard_showNotificationListView = function() {
    frmNotificationDashboard.fcnotificationcontainer.setVisibility(true);
    frmNotificationDashboard.fccreatenotification.setVisibility(false);
};
notificationModule.showAddNotificationView = function() {
    frmNotificationDashboard.fcnotificationcontainer.setVisibility(false);
    frmNotificationDashboard.fccreatenotification.setVisibility(true);
};