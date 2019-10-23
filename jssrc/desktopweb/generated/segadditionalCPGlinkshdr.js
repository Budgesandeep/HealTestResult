function initializesegadditionalCPGlinkshdr() {
    fcadditionalCPGlinkshdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcadditionalCPGlinkshdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    fcadditionalCPGlinkshdr.setDefaultUnit(kony.flex.DP);
    var lbladditionalcpglinkshdr = new kony.ui.Label({
        "id": "lbladditionalcpglinkshdr",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblgray80bold",
        "text": "Additional CPG’s for Essential Step 1:",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadditionalCPGlinkshdr.add(lbladditionalcpglinkshdr);
}