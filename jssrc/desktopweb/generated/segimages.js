function initializesegimages() {
    fcimages = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95dp",
        "id": "fcimages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    fcimages.setDefaultUnit(kony.flex.DP);
    var imgwound = new kony.ui.Image2({
        "height": "98%",
        "id": "imgwound",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltimestamp = new kony.ui.Label({
        "centerX": "50%",
        "id": "lbltimestamp",
        "isVisible": true,
        "skin": "sklblblackbgwhitefont60",
        "text": "Label",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 1, 1, 1],
        "paddingInPixel": false
    }, {});
    fcimages.add(imgwound, lbltimestamp);
}