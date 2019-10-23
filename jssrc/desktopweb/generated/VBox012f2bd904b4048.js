function initializeVBox012f2bd904b4048() {
    VBox012f2bd904b4048 = new kony.ui.Box({
        "id": "VBox012f2bd904b4048",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    var lbsegpopupAdminSearchby = new kony.ui.Label({
        "id": "lbsegpopupAdminSearchby",
        "isVisible": true,
        "skin": "sklbsegpopupAdminSearchby",
        "text": "Label"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [4, 3, 1, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "hoverSkin": "sklbsegpopupAdminSearchbyhover"
    });
    VBox012f2bd904b4048.add(lbsegpopupAdminSearchby);
}