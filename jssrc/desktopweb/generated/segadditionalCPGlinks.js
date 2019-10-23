function initializesegadditionalCPGlinks() {
    fcadditionalCPGlinks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcadditionalCPGlinks",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    fcadditionalCPGlinks.setDefaultUnit(kony.flex.DP);
    var lbladditionalcpglinks = new kony.ui.Button({
        "focusSkin": "sknbtnbluebold14",
        "id": "lbladditionalcpglinks",
        "isVisible": true,
        "left": "0%",
        "skin": "sknbtnbluebold14",
        "text": "Vascular Assessment of Lower Extremity W05.01.01",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnbluebold15hover"
    });
    fcadditionalCPGlinks.add(lbladditionalcpglinks);
}