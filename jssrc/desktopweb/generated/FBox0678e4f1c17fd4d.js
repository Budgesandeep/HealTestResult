function initializeFBox0678e4f1c17fd4d() {
    FBox0678e4f1c17fd4d = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "40dp",
        "id": "FBox0678e4f1c17fd4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0678e4f1c17fd4d.setDefaultUnit(kony.flex.DP);
    var lblunit = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "lblunit",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblgray100",
        "text": "Label",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [15, 8, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "sknlblhoverblue100"
    });
    FBox0678e4f1c17fd4d.add(lblunit);
}