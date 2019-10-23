function initializesegFacility() {
    hboxFacility = new kony.ui.Box({
        "id": "hboxFacility",
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
    }, {
        "hoverSkin": "skhboxhovergray"
    });
    var imgFacility = new kony.ui.Image2({
        "id": "imgFacility",
        "imageWhileDownloading": "facilitysmall.png",
        "isVisible": true,
        "skin": "slImage",
        "src": "facilitysmall.png"
    }, {
        "containerWeight": 12,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFacility = new kony.ui.Label({
        "id": "lblFacility",
        "isVisible": true,
        "skin": "sknlbldarkgray85",
        "text": "Label"
    }, {
        "containerWeight": 88,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "hExpand": true,
        "margin": [0, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_LEFT
    }, {});
    hboxFacility.add(imgFacility, lblFacility);
}