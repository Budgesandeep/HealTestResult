function initializesegmetrics() {
    flxmetrics = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxmetrics",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "skfctrans"
    }, {}, {});
    flxmetrics.setDefaultUnit(kony.flex.DP);
    var lblmeasures = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmeasures",
        "isVisible": true,
        "left": "3%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "57%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblactual = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltarget = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltarget",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine1 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine1",
        "isVisible": true,
        "left": "60%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine2 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine2",
        "isVisible": true,
        "left": "80%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxmetrics.add(lblmeasures, lblactual, lbltarget, imgVLine1, imgVLine2);
}