function initializeFBox0f60e588e50e840() {
    FBox0f60e588e50e840 = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "40dp",
        "id": "FBox0f60e588e50e840",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0f60e588e50e840.setDefaultUnit(kony.flex.DP);
    var lblwound = new kony.ui.Label({
        "height": "99%",
        "id": "lblwound",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblgray100",
        "text": "Label",
        "top": "4%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [5, 8, 0, 9],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "sknlblhoverblue100"
    });
    FBox0f60e588e50e840.add(lblwound);
}