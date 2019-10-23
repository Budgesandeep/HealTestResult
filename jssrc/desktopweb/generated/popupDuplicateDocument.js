function addWidgetspopupDuplicateDocument() {
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
        "text": "The file <filename> already exists. Do you want to replace it?"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var rchduplicatemsg = new kony.ui.RichText({
        "id": "rchduplicatemsg",
        "isVisible": true,
        "skin": "skrtdarkgray",
        "text": "<p> RichText </p>\n<p>  RichText </p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblmsginfo = new kony.ui.Label({
        "id": "lblmsginfo",
        "isVisible": true,
        "skin": "sknlblblue80",
        "text": "Please click 'Yes' to upload and replace, 'No' to select files again."
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
        "onClick": AS_Button_d4b75414a586462fb530d2061e15bbaf,
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
    var btnno = new kony.ui.Button({
        "focusSkin": "skngraybg",
        "id": "btnno",
        "isVisible": true,
        "onClick": AS_Button_b6e991dbb691408a87cee5d597032257,
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
    hboxoptions.add(btnyes, btnno);
    vboxlogout.add(lblmsg, rchduplicatemsg, lblmsginfo, hboxoptions);
    hboxlogout.add(vboxlogout);
    popupDuplicateDocument.add(hboxlogout);
};

function popupDuplicateDocumentGlobals() {
    popupDuplicateDocument = new kony.ui.Popup({
        "addWidgets": addWidgetspopupDuplicateDocument,
        "id": "popupDuplicateDocument",
        "isModal": true,
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 40,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};