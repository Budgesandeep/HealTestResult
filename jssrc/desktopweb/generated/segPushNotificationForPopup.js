function initializesegPushNotificationForPopup() {
    CopyhbxNotificaion0c8e1246337794d = new kony.ui.Box({
        "id": "CopyhbxNotificaion0c8e1246337794d",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhbwhitebgbrdr"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxNotification = new kony.ui.Box({
        "id": "vboxNotification",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbxRelease = new kony.ui.Box({
        "id": "hbxRelease",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Release Version"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxRelease.add(lblTitle);
    var hboxdesc = new kony.ui.Box({
        "id": "hboxdesc",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [3, 1, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "skin": "sklbldarkgray80",
        "text": "adadasdhagdah jkasdhjkagsd g hgahsgdjh . hgashdg ahjsdgajhgs djahgdjas ajskhdkaj djdjkasjdhasjdhasjdhjakshd sadahskjdhaskjd asjkdshdjas kjdahsjkd 111 asdasdasdas asdasdasda jashdkasjdhasjkd as jksah djkashdkjas sa hdkajsdhasjkh dkjashdjkh djkashd kj"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxdesc.add(lblDescription);
    var hboxHyperlink = new kony.ui.Box({
        "id": "hboxHyperlink",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lnkWebsite = new kony.ui.Link({
        "id": "lnkWebsite",
        "isVisible": true,
        "onClick": AS_Link_h3c72fb3643f4f6689a24c3be366e79a,
        "skin": "sknlnk",
        "text": "lnkWebsite"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxHyperlink.add(lnkWebsite);
    var hboxDoNotShow = new kony.ui.Box({
        "id": "hboxDoNotShow",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var VBox0f9550ea125514d = new kony.ui.Box({
        "id": "VBox0f9550ea125514d",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 8,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var btnDoNotShow = new kony.ui.Button({
        "id": "btnDoNotShow",
        "isVisible": true,
        "onClick": AS_Button_ae31b6eea4fa4b11884621397112bc2d,
        "skin": "sknbtnuncheck"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    VBox0f9550ea125514d.add(btnDoNotShow);
    var lblDoNotShow = new kony.ui.Label({
        "id": "lblDoNotShow",
        "isVisible": true,
        "skin": "sklbldarkgray80",
        "text": "Do not show this message again"
    }, {
        "containerWeight": 66,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxDoNotShow.add(VBox0f9550ea125514d, lblDoNotShow);
    var Line0f7133c202d9a4c = new kony.ui.Line({
        "id": "Line0f7133c202d9a4c",
        "isVisible": true,
        "skin": "slLinegray"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vboxNotification.add(hbxRelease, hboxdesc, hboxHyperlink, hboxDoNotShow, Line0f7133c202d9a4c);
    CopyhbxNotificaion0c8e1246337794d.add(vboxNotification);
}