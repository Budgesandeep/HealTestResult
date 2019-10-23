function addWidgetspopupUserAcknowledgement() {
    var hboxtermsandconditions = new kony.ui.Box({
        "id": "hboxtermsandconditions",
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
    var vboxtermsandconditions = new kony.ui.Box({
        "id": "vboxtermsandconditions",
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
    var hboxheader = new kony.ui.Box({
        "id": "hboxheader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxgraybg"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblheader = new kony.ui.Label({
        "id": "lblheader",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "User Acknowledgement"
    }, {
        "containerWeight": 62,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vboxtncclose = new kony.ui.Box({
        "id": "vboxtncclose",
        "isVisible": false,
        "onClick": AS_VBox_045ee2ad9d3c4217ac43f88002981ead,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 38,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [20, 0, 0, 0],
        "marginInPixel": false,
        "padding": [9, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgtncclose = new kony.ui.Image2({
        "id": "imgtncclose",
        "isVisible": true,
        "skin": "slImage",
        "src": "closepopup.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxtncclose.add(imgtncclose);
    hboxheader.add(lblheader, vboxtncclose);
    var hboxtnc = new kony.ui.Box({
        "id": "hboxtnc",
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
    var vboxtnc = new kony.ui.Box({
        "id": "vboxtnc",
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
    var rttermsconditions = new kony.ui.RichText({
        "id": "rttermsconditions",
        "isVisible": true,
        "skin": "sknrchgray100",
        "text": "user acknowledgement text..."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxtnc.add(rttermsconditions);
    hboxtnc.add(vboxtnc);
    var hboxAcceptAck = new kony.ui.Box({
        "id": "hboxAcceptAck",
        "isVisible": false,
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
    var vboxAcceptAck = new kony.ui.Box({
        "id": "vboxAcceptAck",
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
    var lblAcceptAck = new kony.ui.Label({
        "id": "lblAcceptAck",
        "isVisible": true,
        "skin": "sknlblblackbold80",
        "text": "You Accepted the above User Acknowledgement on 01/18/2017"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnAcceptClose = new kony.ui.Button({
        "focusSkin": "skngraybg",
        "id": "btnAcceptClose",
        "isVisible": true,
        "onClick": AS_Button_7ab30bebe4f049a3b507355ce45e81bc,
        "skin": "skngraybg",
        "text": "Close"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [82, 2, 3, 3],
        "marginInPixel": false,
        "padding": [3, 2, 3, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skngraybghover"
    });
    vboxAcceptAck.add(lblAcceptAck, btnAcceptClose);
    hboxAcceptAck.add(vboxAcceptAck);
    var hboxsave = new kony.ui.Box({
        "id": "hboxsave",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btntnccancel = new kony.ui.Button({
        "focusSkin": "skngraybg",
        "id": "btntnccancel",
        "isVisible": true,
        "onClick": AS_Button_7ab30bebe4f049a3b507355ce45e81bc,
        "skin": "skngraybg",
        "text": "Cancel"
    }, {
        "containerWeight": 85,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [70, 1, 2, 1],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skngraybghover"
    });
    var btntncagree = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "id": "btntncagree",
        "isVisible": true,
        "onClick": AS_Button_8a89f73938364e4a811d3469ee499e39,
        "skin": "sknbtnbluebg",
        "text": "Accept"
    }, {
        "containerWeight": 15,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "sknbtnbluebgrndhover"
    });
    hboxsave.add(btntnccancel, btntncagree);
    vboxtermsandconditions.add(hboxheader, hboxtnc, hboxAcceptAck, hboxsave);
    hboxtermsandconditions.add(vboxtermsandconditions);
    popupUserAcknowledgement.add(hboxtermsandconditions);
};

function popupUserAcknowledgementGlobals() {
    popupUserAcknowledgement = new kony.ui.Popup({
        "addWidgets": addWidgetspopupUserAcknowledgement,
        "id": "popupUserAcknowledgement",
        "isModal": true,
        "skin": "slPopup",
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 45,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};