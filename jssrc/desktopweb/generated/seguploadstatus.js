function initializeseguploadstatus() {
    hboxbody = new kony.ui.Box({
        "id": "hboxbody",
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
    var lblsno = new kony.ui.Label({
        "id": "lblsno",
        "isVisible": true,
        "skin": "sklblblackbold",
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
    var lbldocname = new kony.ui.Label({
        "id": "lbldocname",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Label"
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
    var lblstatus = new kony.ui.Label({
        "id": "lblstatus",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Label"
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
    hboxbody.add(lblsno, lbldocname, lblstatus);
}