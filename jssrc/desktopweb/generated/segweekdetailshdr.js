function initializesegweekdetailshdr() {
    fcweeknumber = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "28.60%",
        "id": "fcweeknumber",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "isModalContainer": false,
        "skin": "skfcwhite"
    }, {}, {});
    fcweeknumber.setDefaultUnit(kony.flex.DP);
    var fcweeknum = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "fcweeknum",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcweeknum.setDefaultUnit(kony.flex.DP);
    var lblwoundnum = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwoundnum",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblblackbold",
        "text": "Wound 1",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparotaor = new kony.ui.Label({
        "height": "2dp",
        "id": "lblseparotaor",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblline",
        "top": "98%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcweeknum.add(lblwoundnum, lblseparotaor);
    var fcweekdetailshdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "fcweekdetailshdr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcweekdetailshdr.setDefaultUnit(kony.flex.DP);
    var fcdate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcdate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
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
        "skin": "sknlblgray80bold",
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
        "left": "0dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
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
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
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
        "skin": "sknlblgray80bold",
        "text": "Unit",
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
        "left": "0dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
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
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
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
        "skin": "sknlblgray80bold",
        "text": "% Healing",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpercentagehealing.add(lblpercentagehealing);
    fcweekdetailshdr.add(fcdate, lblline1, fcunit, lblline2, fcpercentagehealing);
    fcweeknumber.add(fcweeknum, fcweekdetailshdr);
}