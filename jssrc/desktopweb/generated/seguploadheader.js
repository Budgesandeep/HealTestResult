function initializeseguploadheader() {
    hboxmainbody = new kony.ui.Box({
        "id": "hboxmainbody",
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
    var vbox1 = new kony.ui.Box({
        "id": "vbox1",
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
    var hbox2 = new kony.ui.Box({
        "id": "hbox2",
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
    var lblsnoheader = new kony.ui.Label({
        "id": "lblsnoheader",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Label"
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
    hbox2.add(lblsnoheader, lbldocnameheader, lblstatusheader);
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "slLinegray"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    vbox1.add(hbox2, line1);
    hboxmainbody.add(vbox1);
}