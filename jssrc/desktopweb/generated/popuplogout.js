function addWidgetspopuplogout() {
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
        "margin": [0, 8, 0, 0],
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
        "text": "Are you sure you want to logout ?"
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
    var btnyes = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "id": "btnyes",
        "isVisible": true,
        "onClick": AS_Button_795de2f8cdf749b699ccdb83017d76ee,
        "skin": "sknbtnbluebg",
        "text": "Yes"
    }, {
        "containerWeight": 25,
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
    var btnlogoutno = new kony.ui.Button({
        "focusSkin": "skngraybg",
        "id": "btnlogoutno",
        "isVisible": true,
        "onClick": AS_Button_ccd50229a992480e9a18a97799882dde,
        "skin": "skngraybg",
        "text": "No"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skngraybghover"
    });
    hboxoptions.add(btnyes, btnlogoutno);
    vboxlogout.add(lblmsg, hboxoptions);
    hboxlogout.add(vboxlogout);
    popuplogout.add(hboxlogout);
};

function popuplogoutGlobals() {
    popuplogout = new kony.ui.Popup({
        "addWidgets": addWidgetspopuplogout,
        "id": "popuplogout",
        "isModal": true,
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 30,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};