function addWidgetspopupuploadstatus() {
    var hboxmain = new kony.ui.Box({
        "id": "hboxmain",
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
    var vboxmain = new kony.ui.Box({
        "id": "vboxmain",
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
        "skin": "skhboxdarkbg"
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
    var lblsnoheader = new kony.ui.Label({
        "id": "lblsnoheader",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "S.No"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbldocnameheader = new kony.ui.Label({
        "id": "lbldocnameheader",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Selected Document Name"
    }, {
        "containerWeight": 44,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblstatusheader = new kony.ui.Label({
        "id": "lblstatusheader",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Status"
    }, {
        "containerWeight": 31,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxheader.add(lblsnoheader, lbldocnameheader, lblstatusheader);
    var hbxscroll = new kony.ui.Box({
        "id": "hbxscroll",
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
    var scrllbx1 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrllbx1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "skin": "skinScrllboxwhitebg"
    }, {
        "containerHeight": 35,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var segstatus = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sknsegrowgraybgbrd",
        "data": [{
            "lbldocname": "Label",
            "lblsno": "Label",
            "lblstatus": "Label"
        }, {
            "lbldocname": "Label",
            "lblsno": "Label",
            "lblstatus": "Label"
        }, {
            "lbldocname": "Label",
            "lblsno": "Label",
            "lblstatus": "Label"
        }],
        "groupCells": false,
        "id": "segstatus",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": hboxbody,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": true,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hboxbody": "hboxbody",
            "lbldocname": "lbldocname",
            "lblsno": "lblsno",
            "lblstatus": "lblstatus"
        }
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    scrllbx1.add(segstatus);
    hbxscroll.add(scrllbx1);
    var hboxok = new kony.ui.Box({
        "id": "hboxok",
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    var vboxok = new kony.ui.Box({
        "id": "vboxok",
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
    var lblMsg = new kony.ui.Label({
        "id": "lblMsg",
        "isVisible": false,
        "skin": "sknlblrednormal",
        "text": "Upload Failed.Please try again."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 2, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxbtnok = new kony.ui.Box({
        "id": "hboxbtnok",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "skin": "slLabel"
    }, {
        "containerWeight": 44,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnok = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "id": "btnok",
        "isVisible": true,
        "onClick": AS_Button_fa6e90ae072f45ea89171ac8346c8170,
        "skin": "sknbtnbluebg",
        "text": "Ok"
    }, {
        "containerWeight": 15,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [3, 1, 3, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "skin": "slLabel"
    }, {
        "containerWeight": 41,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxbtnok.add(lbl1, btnok, lbl2);
    vboxok.add(lblMsg, line1, hboxbtnok);
    hboxok.add(vboxok);
    vboxmain.add(hboxheader, hbxscroll, hboxok);
    hboxmain.add(vboxmain);
    popupuploadstatus.add(hboxmain);
};

function popupuploadstatusGlobals() {
    popupuploadstatus = new kony.ui.Popup({
        "addWidgets": addWidgetspopupuploadstatus,
        "id": "popupuploadstatus",
        "isModal": true,
        "skin": "skpopupwhite",
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