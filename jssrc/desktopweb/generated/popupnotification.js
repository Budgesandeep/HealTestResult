function addWidgetspopupnotification() {
    var hboxaddtask = new kony.ui.Box({
        "id": "hboxaddtask",
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
    var VBox0c8cc7711e6b540 = new kony.ui.Box({
        "id": "VBox0c8cc7711e6b540",
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
    var HBox0ca5c85a6d72146 = new kony.ui.Box({
        "id": "HBox0ca5c85a6d72146",
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
    var VBox0b082cec0600b41 = new kony.ui.Box({
        "id": "VBox0b082cec0600b41",
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
    var segmentPushNotifications = new kony.ui.SegmentedUI2({
        "data": [{
            "btnDoNotShow": "",
            "lblDescription": "",
            "lblDoNotShow": "",
            "lblTitle": "",
            "lnkWebsite": ""
        }],
        "groupCells": false,
        "id": "segmentPushNotifications",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyhbxNotificaion0c8e1246337794d,
        "screenLevelWidget": true,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyhbxNotificaion0c8e1246337794d": "CopyhbxNotificaion0c8e1246337794d",
            "Line0f7133c202d9a4c": "Line0f7133c202d9a4c",
            "VBox0f9550ea125514d": "VBox0f9550ea125514d",
            "btnDoNotShow": "btnDoNotShow",
            "hboxDoNotShow": "hboxDoNotShow",
            "hboxHyperlink": "hboxHyperlink",
            "hboxdesc": "hboxdesc",
            "hbxRelease": "hbxRelease",
            "lblDescription": "lblDescription",
            "lblDoNotShow": "lblDoNotShow",
            "lblTitle": "lblTitle",
            "lnkWebsite": "lnkWebsite",
            "vboxNotification": "vboxNotification"
        }
    }, {
        "containerHeight": 40,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    VBox0b082cec0600b41.add(segmentPushNotifications);
    HBox0ca5c85a6d72146.add(VBox0b082cec0600b41);
    var HBox0b279ac06f36945 = new kony.ui.Box({
        "id": "HBox0b279ac06f36945",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var Label0d2e01eb5fa3a45 = new kony.ui.Label({
        "id": "Label0d2e01eb5fa3a45",
        "isVisible": true,
        "skin": "slLabel"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var CopyButton0d7e183e558ff41 = new kony.ui.Button({
        "id": "CopyButton0d7e183e558ff41",
        "isVisible": true,
        "onClick": AS_Button_ccfde7bba4a14ce3b221c64d568f42c0,
        "skin": "sknbtnbluebg",
        "text": "Okay"
    }, {
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 1, 0, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "Copysknbtnbluebg0fcb7b78ee41c4b"
    });
    var CopyLabel0dc941d824e5e44 = new kony.ui.Label({
        "id": "CopyLabel0dc941d824e5e44",
        "isVisible": true,
        "skin": "slLabel"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    HBox0b279ac06f36945.add(Label0d2e01eb5fa3a45, CopyButton0d7e183e558ff41, CopyLabel0dc941d824e5e44);
    VBox0c8cc7711e6b540.add(HBox0ca5c85a6d72146, HBox0b279ac06f36945);
    hboxaddtask.add(VBox0c8cc7711e6b540);
    popupnotification.add(hboxaddtask);
};

function popupnotificationGlobals() {
    popupnotification = new kony.ui.Popup({
        "addWidgets": addWidgetspopupnotification,
        "headers": [hboxheader],
        "id": "popupnotification",
        "isModal": true,
        "skin": "skpopupwhite",
        "transparencyBehindThePopup": 60
    }, {
        "containerHeight": null,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 30,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "transitionMoveIn"
        },
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};