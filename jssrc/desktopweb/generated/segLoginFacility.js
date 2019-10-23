function initializesegLoginFacility() {
    fcFacility = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcFacility",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcFacility.setDefaultUnit(kony.flex.DP);
    var imgFacility = new kony.ui.Image2({
        "height": "50dp",
        "id": "imgFacility",
        "imageWhileDownloading": "facility.png",
        "isVisible": true,
        "left": "30dp",
        "skin": "slImage",
        "src": "facility.png",
        "top": "0dp",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFacility = new kony.ui.Label({
        "id": "lblFacility",
        "isVisible": true,
        "left": "20dp",
        "skin": "sklbllightgray113",
        "text": "Label",
        "top": "15dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcFacility.add(imgFacility, lblFacility);
}