function initializesegwoundfeaturetype() {
    fcfeaturetype = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "fcfeaturetype",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcfeaturetype.setDefaultUnit(kony.flex.DP);
    var imgfeaturetype = new kony.ui.Image2({
        "height": "100%",
        "id": "imgfeaturetype",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "onelinearrownormal.png",
        "top": "-0.50%",
        "width": "90%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblfeaturetype = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblfeaturetype",
        "isVisible": true,
        "left": "5%",
        "skin": "sknlblblackbold90",
        "text": "9. Optimize Host Factors",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfeaturetype.add(imgfeaturetype, lblfeaturetype);
}