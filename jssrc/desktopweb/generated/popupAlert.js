function addWidgetspopupAlert() {
    var hboxlogout = new kony.ui.Box({
        "id": "hboxlogout",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhbwhitebggraybrdr"
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
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    var lbltitle = new kony.ui.Label({
        "id": "lbltitle",
        "isVisible": true,
        "skin": "sknlblblackboldbggray",
        "text": "Info"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblmsg = new kony.ui.Label({
        "id": "lblmsg",
        "isVisible": true,
        "skin": "sknlbldarkgray85",
        "text": "Alert message Alert message Alert message Alert message Alert message Alert message Alert message"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 4, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
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
        "padding": [45, 5, 0, 8],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnclosealert = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "id": "btnclosealert",
        "isVisible": true,
        "onClick": AS_Button_e1f78c825fe84c1ca2fbf941254e2286,
        "skin": "sknbtnbluebg",
        "text": "Ok"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skbtnbluehover"
    });
    hboxoptions.add(btnclosealert);
    vboxlogout.add(lbltitle, lblmsg, hboxoptions);
    hboxlogout.add(vboxlogout);
    popupAlert.add(hboxlogout);
};

function popupAlertGlobals() {
    popupAlert = new kony.ui.Popup({
        "addWidgets": addWidgetspopupAlert,
        "id": "popupAlert",
        "isModal": true,
        "skin": "slPopup",
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 20,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};