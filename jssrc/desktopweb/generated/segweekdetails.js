function initializesegweekdetails() {
    fcweekdetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "14.30%",
        "id": "fcweekdetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "sknfctransbggrarybrd"
    }, {}, {});
    fcweekdetails.setDefaultUnit(kony.flex.DP);
    var fcdate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcdate",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "sktransparentBG",
        "top": "0%",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    fcdate.setDefaultUnit(kony.flex.DP);
    var lbldate = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldate",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblgray80",
        "text": "Date",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [7, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdate.add(lbldate);
    var lblline1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline1",
        "isVisible": true,
        "left": "35%",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcunit = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcunit",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "35%",
        "isModalContainer": false,
        "skin": "sktransparentBG",
        "top": "0%",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    fcunit.setDefaultUnit(kony.flex.DP);
    var lblunit = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblunit",
        "isVisible": true,
        "skin": "sknlblgray80",
        "text": "Area",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcunit.add(lblunit);
    var lblline2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline2",
        "isVisible": true,
        "left": "60%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcpercentagehealing = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcpercentagehealing",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "60%",
        "isModalContainer": false,
        "skin": "sktransparentBG",
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    fcpercentagehealing.setDefaultUnit(kony.flex.DP);
    var lblpercentagehealing = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblpercentagehealing",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblgray80",
        "text": "% Healing",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpercentagehealing.add(lblpercentagehealing);
    fcweekdetails.add(fcdate, lblline1, fcunit, lblline2, fcpercentagehealing);
}