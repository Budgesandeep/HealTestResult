function initializesegNotificationFacility() {
    CopyFlexContainer0a5d2094bd62f49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer0a5d2094bd62f49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    CopyFlexContainer0a5d2094bd62f49.setDefaultUnit(kony.flex.PERCENTAGE);
    var btnSelection = new kony.ui.Button({
        "height": "25dp",
        "id": "btnSelection",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_fe9c233bbb37434fbc1d33798a6d10cc,
        "right": "15dp",
        "skin": "sknbtnuncheck",
        "top": "17.33%",
        "width": "25dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "Copysknbtnuncheck0cf9f717ce6224b"
    });
    var lblBlueBookCode = new kony.ui.Label({
        "id": "lblBlueBookCode",
        "isVisible": true,
        "left": "10dp",
        "skin": "sklblgraybold",
        "text": "Label",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0a5d2094bd62f49.add(btnSelection, lblBlueBookCode);
}