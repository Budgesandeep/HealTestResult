function initializesegsearch() {
    FlexContainer01549dbee75a74f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35dp",
        "id": "FlexContainer01549dbee75a74f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer01549dbee75a74f.setDefaultUnit(kony.flex.DP);
    var lblsearchname = new kony.ui.Label({
        "centerY": "50%",
        "height": "98%",
        "id": "lblsearchname",
        "isVisible": true,
        "left": "2%",
        "skin": "sknlblbluebold",
        "text": "Label",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer01549dbee75a74f.add(lblsearchname);
}