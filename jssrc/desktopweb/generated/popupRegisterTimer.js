function addWidgetspopupRegisterTimer() {
    var hboxlogout = new kony.ui.Box({
        "id": "hboxlogout",
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
    var vboxlogout = new kony.ui.Box({
        "id": "vboxlogout",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 6, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    var HBox0f8e515bee7cc4a = new kony.ui.Box({
        "id": "HBox0f8e515bee7cc4a",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    var lblmsg = new kony.ui.Label({
        "id": "lblmsg",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Your session will expire in 04:59. Do you want to remain logged in?"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 2, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    HBox0f8e515bee7cc4a.add(lblmsg);
    var hboxoptions = new kony.ui.Box({
        "id": "hboxoptions",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [35, 2, 0, 8],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnregisteryes = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "id": "btnregisteryes",
        "isVisible": true,
        "onClick": AS_Button_d7c153fbb12b419f96fa9db92b0b3549,
        "skin": "sknbtnbluebg",
        "text": "Yes"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skbtnbluehover"
    });
    var btnregisterno = new kony.ui.Button({
        "focusSkin": "skngraybg",
        "id": "btnregisterno",
        "isVisible": true,
        "onClick": AS_Button_d327330ac4074997a4f62436e2fdd7af,
        "skin": "skngraybg",
        "text": "No"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skngraybghover"
    });
    hboxoptions.add(btnregisteryes, btnregisterno);
    vboxlogout.add(HBox0f8e515bee7cc4a, hboxoptions);
    hboxlogout.add(vboxlogout);
    popupRegisterTimer.add(hboxlogout);
};

function popupRegisterTimerGlobals() {
    popupRegisterTimer = new kony.ui.Popup({
        "addWidgets": addWidgetspopupRegisterTimer,
        "id": "popupRegisterTimer",
        "isModal": true,
        "skin": "slPopup",
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 35,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};