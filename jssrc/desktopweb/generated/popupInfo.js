function addWidgetspopupInfo() {
    var hboxInfo = new kony.ui.Box({
        "id": "hboxInfo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxwhitebg"
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
    var vboxInfo = new kony.ui.Box({
        "id": "vboxInfo",
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
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "skin": "sknlblblackbold100",
        "text": "Label"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 2, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblInfo = new kony.ui.RichText({
        "id": "lblInfo",
        "isVisible": true,
        "skin": "sknrchdarkgray90",
        "text": "RichText"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 1, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnExclusions = new kony.ui.Button({
        "focusSkin": "skbtntransbgblueunderline",
        "id": "btnExclusions",
        "isVisible": false,
        "onClick": AS_Button_b39d5094892d4e90863f7ab7e38eaa3b,
        "skin": "skbtntransbgblueunderline",
        "text": "See Exclusions from Outcome Calculations"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 1, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var richtextExclusions = new kony.ui.RichText({
        "id": "richtextExclusions",
        "isVisible": false,
        "skin": "sknrchdarkgray80",
        "text": "RichText"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxInfo.add(lblTitle, lblInfo, btnExclusions, richtextExclusions);
    hboxInfo.add(vboxInfo);
    popupInfo.add(hboxInfo);
};

function popupInfoGlobals() {
    popupInfo = new kony.ui.Popup({
        "addWidgets": addWidgetspopupInfo,
        "id": "popupInfo",
        "isModal": false,
        "skin": "skpopuptransbordergray",
        "transparencyBehindThePopup": 0
    }, {
        "containerWeight": 23,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};