function initializesegRecords() {
    fcRecords = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcRecords",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcRecords.setDefaultUnit(kony.flex.DP);
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
    var lblRecordType = new kony.ui.Label({
        "id": "lblRecordType",
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
        "onClick": AS_FlexContainer_311254a6738a4888ba98c2dfafb3654a,
        "right": "8%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50dp",
        "zIndex": 2
    }, {}, {});
    fcUpload.setDefaultUnit(kony.flex.DP);
    var imgUpload = new kony.ui.Image2({
        "height": "100%",
        "id": "imgUpload",
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
    fcUpload.add(imgUpload);
    fcRecords.add(lblLine, imgBackground, lblRecordType, fcUpload);
}