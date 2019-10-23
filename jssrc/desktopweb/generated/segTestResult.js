function initializesegTestResult() {
    fcTestResult = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcTestResult",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcTestResult.setDefaultUnit(kony.flex.DP);
    var lblLine = new kony.ui.Label({
        "height": "1dp",
        "id": "lblLine",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblline",
        "text": "Label",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgBackground = new kony.ui.Image2({
        "height": "95%",
        "id": "imgBackground",
        "imageWhileDownloading": "onelinearrownormal.png",
        "isVisible": true,
        "left": "1dp",
        "skin": "slImage",
        "src": "onelinearrownormal.png",
        "top": "1dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTestType = new kony.ui.Label({
        "id": "lblTestType",
        "isVisible": true,
        "left": "5%",
        "skin": "sknlblblackbold90",
        "text": "Label",
        "top": "20dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcUpload = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcUpload",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "8%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 2
    }, {}, {});
    fcUpload.setDefaultUnit(kony.flex.DP);
    var imgTestResultUpload = new kony.ui.Image2({
        "height": "100%",
        "id": "imgTestResultUpload",
        "imageWhileDownloading": "upload.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "upload.png",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcUpload.add(imgTestResultUpload);
    fcTestResult.add(lblLine, imgBackground, lblTestType, fcUpload);
}