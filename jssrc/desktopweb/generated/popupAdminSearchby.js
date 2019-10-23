function addWidgetspopupAdminSearchby() {
    if (typeof initializeVBox012f2bd904b4048 === 'function') initializeVBox012f2bd904b4048();
    var segpopupAdminSearchby = new kony.ui.SegmentedUI2({
        "data": [{
            "lbsegpopupAdminSearchby": "Facility ID"
        }, {
            "lbsegpopupAdminSearchby": "Facility Name"
        }, {
            "lbsegpopupAdminSearchby": "Bluebook ID"
        }],
        "groupCells": false,
        "id": "segpopupAdminSearchby",
        "isVisible": false,
        "needPageIndicator": true,
        "onRowClick": AS_Segment_d72937a394c54b379fc24158541a1275,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowSkin": "sksegpopupAdminSearchby",
        "rowTemplate": VBox012f2bd904b4048,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "efefef64",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lbsegpopupAdminSearchby": "lbsegpopupAdminSearchby"
        }
    }, {
        "containerHeight": null,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hboxpopupAdminSearchby = new kony.ui.Box({
        "id": "hboxpopupAdminSearchby",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxgraybg"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxpopupAdminSearchby = new kony.ui.Box({
        "id": "vboxpopupAdminSearchby",
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
    var hboxpopupFacilityname = new kony.ui.Box({
        "focusSkin": "skhboxdarkbluehover",
        "id": "hboxpopupFacilityname",
        "isVisible": true,
        "onClick": AS_HBox_335a046e7e254ea3ab5e561aac147366,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxdarkgray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "hoverSkin": "skhboxdarkbluehover",
        "onHover": AS_HBox_0e3cb15064c2416c8874c70de7a6c1ac
    });
    var lbpopupAdminSearchbyFacilityName = new kony.ui.Label({
        "id": "lbpopupAdminSearchbyFacilityName",
        "isVisible": true,
        "skin": "sklbsegpopupAdminSearchby",
        "text": "Facility Name"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 3, 1, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    hboxpopupFacilityname.add(lbpopupAdminSearchbyFacilityName);
    var hboxpopupFacilityID = new kony.ui.Box({
        "id": "hboxpopupFacilityID",
        "isVisible": true,
        "onClick": AS_HBox_e07a648c5f544bbea4b848cff06863b8,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxdarkgray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "hoverSkin": "skhboxdarkbluehover",
        "onHover": AS_HBox_bdffd400b3f44188a45fe495be6724af
    });
    var lbpopupAdminSearchbyFacilityID = new kony.ui.Label({
        "id": "lbpopupAdminSearchbyFacilityID",
        "isVisible": true,
        "skin": "sklbsegpopupAdminSearchby",
        "text": "Facility ID"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 3, 1, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    hboxpopupFacilityID.add(lbpopupAdminSearchbyFacilityID);
    var hboxpopupBluebookID = new kony.ui.Box({
        "id": "hboxpopupBluebookID",
        "isVisible": true,
        "onClick": AS_HBox_29f75ba7bab544e8a024564d2a671782,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxdarkgray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "hoverSkin": "skhboxdarkbluehover",
        "onHover": AS_HBox_02d06c6dfbd841bfb31b7b01aa075e3e
    });
    var lbpopupAdminSearchbyBluebookID = new kony.ui.Label({
        "id": "lbpopupAdminSearchbyBluebookID",
        "isVisible": true,
        "skin": "sklbsegpopupAdminSearchby",
        "text": "Bluebook ID"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 3, 1, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    hboxpopupBluebookID.add(lbpopupAdminSearchbyBluebookID);
    vboxpopupAdminSearchby.add(hboxpopupFacilityname, hboxpopupFacilityID, hboxpopupBluebookID);
    hboxpopupAdminSearchby.add(vboxpopupAdminSearchby);
    popupAdminSearchby.add(segpopupAdminSearchby, hboxpopupAdminSearchby);
};

function popupAdminSearchbyGlobals() {
    popupAdminSearchby = new kony.ui.Popup({
        "addWidgets": addWidgetspopupAdminSearchby,
        "id": "popupAdminSearchby",
        "isModal": false,
        "onHide": AS_Popup_0a2efdde6e544c49ba86aa897ac6061e,
        "skin": "skpopupAdminSearchby",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeight": null,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 19,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};