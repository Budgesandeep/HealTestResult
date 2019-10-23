function initializeFBox0bc8fdb1e40f94f() {
    FBox0bc8fdb1e40f94f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "53dp",
        "id": "FBox0bc8fdb1e40f94f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0bc8fdb1e40f94f.setDefaultUnit(kony.flex.DP);
    var fcSegPatientList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2dp",
        "clipBounds": true,
        "height": "53dp",
        "id": "fcSegPatientList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    fcSegPatientList.setDefaultUnit(kony.flex.DP);
    var FlexContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "53dp",
        "id": "FlexContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c971f05975fe4290b7e0d147f4b2b3bd,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {
        "hoverSkin": "sknfcTransHover"
    });
    FlexContainer.setDefaultUnit(kony.flex.DP);
    var lblpatientname = new kony.ui.Button({
        "centerY": "40%",
        "focusSkin": "skbtntxtSkyBluebold16",
        "id": "lblpatientname",
        "isVisible": true,
        "left": "5%",
        "skin": "skbtntxtSkyBluebold16",
        "text": "Patient",
        "width": "95%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skbtntxtHoverSkyBlueboldUnderline16"
    });
    var lblpatientmsrstatus = new kony.ui.Label({
        "id": "lblpatientmsrstatus",
        "isVisible": true,
        "left": "5%",
        "skin": "sknlblblackbold80",
        "text": "Label",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    FlexContainer.add(lblpatientname, lblpatientmsrstatus);
    var lblcasemanager = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblcasemanager",
        "isVisible": true,
        "left": "11.20%",
        "skin": "sklblgraybold",
        "text": "Case Manager",
        "width": "10%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblphysician = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblphysician",
        "isVisible": true,
        "left": "21.50%",
        "skin": "sklblgraybold",
        "text": "Physician",
        "width": "10%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblnextappt = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblnextappt",
        "isVisible": true,
        "left": "32%",
        "skin": "sklblgraybold",
        "text": "Next Appt.",
        "width": "10%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblappttype = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblappttype",
        "isVisible": true,
        "left": "43%",
        "skin": "sklblgraybold",
        "text": "Appt. Type",
        "width": "9%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblwounds = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblwounds",
        "isVisible": true,
        "left": "52%",
        "skin": "sklblgraybold",
        "text": "Wounds",
        "width": "6%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblweeks = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblweeks",
        "isVisible": true,
        "left": "59%",
        "right": "1%",
        "skin": "sklblgraybold",
        "text": "Weeks",
        "width": "5%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblhealper = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblhealper",
        "isVisible": true,
        "left": "65%",
        "skin": "sklblgraybold",
        "text": "Advanced Procedures",
        "width": "12%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblPrecautions = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lblPrecautions",
        "isVisible": true,
        "left": "77%",
        "skin": "sklblgraybold",
        "text": "Transmission-Based Precautions",
        "width": "12%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbltransferstatus = new kony.ui.Label({
        "centerY": "25dp",
        "id": "lbltransferstatus",
        "isVisible": true,
        "left": "90%",
        "skin": "sklblgraybold",
        "text": "Transfer Status",
        "width": "9%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    fcSegPatientList.add(FlexContainer, lblcasemanager, lblphysician, lblnextappt, lblappttype, lblwounds, lblweeks, lblhealper, lblPrecautions, lbltransferstatus);
    FBox0bc8fdb1e40f94f.add(fcSegPatientList);
}