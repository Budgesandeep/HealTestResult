function addWidgetspopupSwitchFacility() {
    var hboxSwitchFacility = new kony.ui.Box({
        "id": "hboxSwitchFacility",
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
    var vboxSwitchFacility = new kony.ui.Box({
        "id": "vboxSwitchFacility",
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
    var hboxTitle = new kony.ui.Box({
        "id": "hboxTitle",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxgraybgborder"
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
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
        "isVisible": true,
        "skin": "sknlblblack120",
        "text": "Switch Facility"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [5, 3, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    hboxTitle.add(lblHeader);
    var hboxsearch = new kony.ui.Box({
        "id": "hboxsearch",
        "isVisible": false,
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
    var txtfldsearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "id": "txtfldsearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Search Facility",
        "secureTextEntry": false,
        "skin": "sktb120graybrdr11",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeight": null,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 86,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [18, 3, 0, 1],
        "marginInPixel": false,
        "padding": [1, 2, 0, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false,
        "onKeyUp": AS_TextField_b3dc02433d4f422987e15a64dae47dfe
    });
    hboxsearch.add(txtfldsearch);
    var hboxFacilities = new kony.ui.Box({
        "id": "hboxFacilities",
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
    var vboxFacilities = new kony.ui.Box({
        "id": "vboxFacilities",
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
    var segmentFacilities = new kony.ui.SegmentedUI2({
        "data": [{
            "imgFacility": "facilitysmall.png",
            "lblFacility": "Label"
        }, {
            "imgFacility": "facilitysmall.png",
            "lblFacility": "Label"
        }, {
            "imgFacility": "facilitysmall.png",
            "lblFacility": "Label"
        }],
        "groupCells": false,
        "id": "segmentFacilities",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": AS_Segment_c44b01a7b28544c0a2d1b7e6a139c677,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": hboxFacility,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 5,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hboxFacility": "hboxFacility",
            "imgFacility": "imgFacility",
            "lblFacility": "lblFacility"
        }
    }, {
        "containerHeight": 40,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 5],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxFacilities.add(segmentFacilities);
    hboxFacilities.add(vboxFacilities);
    var hboxsearcherror = new kony.ui.Box({
        "id": "hboxsearcherror",
        "isVisible": false,
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
    var lblsearcherror = new kony.ui.Label({
        "id": "lblsearcherror",
        "isVisible": true,
        "skin": "sknlblrednormal",
        "text": "No Records Found"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [18, 2, 1, 1],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxsearcherror.add(lblsearcherror);
    var hboxerror = new kony.ui.Box({
        "id": "hboxerror",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hboxwhitebg"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblerror = new kony.ui.Label({
        "id": "lblerror",
        "isVisible": true,
        "skin": "sknlblrednormal",
        "text": "Please select a facility"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxerror.add(lblerror);
    var hboxsave = new kony.ui.Box({
        "id": "hboxsave",
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
    var btnSelect = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "id": "btnSelect",
        "isVisible": true,
        "onClick": AS_Button_dff1a30c84684dda85c8404dfc9bb84a,
        "skin": "sknbtnbluebg",
        "text": "Select"
    }, {
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [45, 1, 2, 5],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skbtnbluehover"
    });
    var btnCancel = new kony.ui.Button({
        "focusSkin": "skngraybg",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": AS_Button_31124aeac89a4c63a6594832a0bfc6ef,
        "skin": "skngraybg",
        "text": "Close"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 1, 7, 5],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skngraybghover"
    });
    hboxsave.add(btnSelect, btnCancel);
    vboxSwitchFacility.add(hboxTitle, hboxsearch, hboxFacilities, hboxsearcherror, hboxerror, hboxsave);
    hboxSwitchFacility.add(vboxSwitchFacility);
    popupSwitchFacility.add(hboxSwitchFacility);
};

function popupSwitchFacilityGlobals() {
    popupSwitchFacility = new kony.ui.Popup({
        "addWidgets": addWidgetspopupSwitchFacility,
        "id": "popupSwitchFacility",
        "isModal": true,
        "skin": "skpopuproundedcorner",
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 25,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};