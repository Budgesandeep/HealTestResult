function initializesegnotes() {
    fcsegnotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcsegnotes",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    fcsegnotes.setDefaultUnit(kony.flex.DP);
    var lblindicator = new kony.ui.Label({
        "height": "20dp",
        "id": "lblindicator",
        "isVisible": false,
        "left": "30dp",
        "skin": "sklblLightgraybgrnd",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer03c0b7e0d6e9b41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer03c0b7e0d6e9b41",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer03c0b7e0d6e9b41.setDefaultUnit(kony.flex.DP);
    var imgpoint = new kony.ui.Image2({
        "height": "20dp",
        "id": "imgpoint",
        "isVisible": true,
        "left": "21dp",
        "skin": "slImage",
        "src": "radioclick.png",
        "top": "3dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblnotestitle = new kony.ui.Label({
        "id": "lblnotestitle",
        "isVisible": true,
        "left": "20dp",
        "skin": "sknlblblackbold90",
        "text": "Dr.Robot ,  Thursday,12/5/2016 , 11:30 am",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer03c0b7e0d6e9b41.add(imgpoint, lblnotestitle);
    var FlexContainer0ff78ae22d6a94c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0ff78ae22d6a94c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ff78ae22d6a94c.setDefaultUnit(kony.flex.DP);
    var lbllineindicator = new kony.ui.Label({
        "height": "80dp",
        "id": "lbllineindicator",
        "isVisible": false,
        "left": "30dp",
        "skin": "sklblLightgraybgrnd",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFollowDesc = new kony.ui.Label({
        "id": "lblFollowDesc",
        "isVisible": true,
        "left": "60dp",
        "skin": "sknlblblackbold80",
        "top": "0dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblnotesdesc = new kony.ui.Label({
        "bottom": "10dp",
        "id": "lblnotesdesc",
        "isVisible": true,
        "left": "60dp",
        "skin": "sknlblgray80",
        "top": "3dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 2],
        "paddingInPixel": false
    }, {});
    FlexContainer0ff78ae22d6a94c.add(lbllineindicator, lblFollowDesc, lblnotesdesc);
    fcsegnotes.add(lblindicator, FlexContainer03c0b7e0d6e9b41, FlexContainer0ff78ae22d6a94c);
}