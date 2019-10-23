function initializesegmetricsheader() {
    flxmetricsheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flxmetricsheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "skfctrans"
    }, {}, {});
    flxmetricsheader.setDefaultUnit(kony.flex.DP);
    var lblMeasureshdr = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblMeasureshdr",
        "isVisible": true,
        "left": "3%",
        "skin": "sknlblsegmentheader",
        "text": "Measures",
        "width": "57%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblActualhdr = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblActualhdr",
        "isVisible": true,
        "left": "60%",
        "skin": "sknlblsegmentheader",
        "text": "Actual",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTargethdr = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTargethdr",
        "isVisible": true,
        "left": "80%",
        "skin": "sknlblsegmentheader",
        "text": "Target",
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
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxmetricsheader.add(lblMeasureshdr, lblActualhdr, lblTargethdr, imgVLine1, imgVLine2);
}