function initializesegPatientList() {
    fcSegPatientList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcSegPatientList",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    fcSegPatientList.setDefaultUnit(kony.flex.DP);
    var fcpatientname = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientname",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 1
    }, {}, {});
    fcpatientname.setDefaultUnit(kony.flex.DP);
    var FlexContainer0b56dbe2f0c6e47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0b56dbe2f0c6e47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "isModalContainer": false,
        "onClick": AS_Segment_4cbb68b697bc4f94a9fb2d346a85d16e,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    FlexContainer0b56dbe2f0c6e47.setDefaultUnit(kony.flex.DP);
    var lblpatientname = new kony.ui.Button({
        "focusSkin": "skbtntxtSkyBluebold16",
        "id": "lblpatientname",
        "isVisible": true,
        "left": "5%",
        "skin": "skbtntxtSkyBluebold16",
        "text": "Patient",
        "top": "8dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
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
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0b56dbe2f0c6e47.add(lblpatientname, lblpatientmsrstatus);
    var lblline = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline",
        "isVisible": false,
        "left": "0dp",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientname.add(FlexContainer0b56dbe2f0c6e47, lblline);
    var fccasemanager = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fccasemanager",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 2
    }, {}, {});
    fccasemanager.setDefaultUnit(kony.flex.DP);
    var lblline2 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline2",
        "isVisible": false,
        "left": "1dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcasemanager = new kony.ui.Label({
        "id": "lblcasemanager",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Case Manager",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fccasemanager.add(lblline2, lblcasemanager);
    var fcphysician = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcphysician",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 3
    }, {}, {});
    fcphysician.setDefaultUnit(kony.flex.DP);
    var lblline3 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline3",
        "isVisible": false,
        "left": "0%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblphysician = new kony.ui.Label({
        "id": "lblphysician",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Physician",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcphysician.add(lblline3, lblphysician);
    var fcnextappt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcnextappt",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "12%",
        "zIndex": 4
    }, {}, {});
    fcnextappt.setDefaultUnit(kony.flex.DP);
    var lblline4 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline4",
        "isVisible": false,
        "right": "0dp",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblnextappt = new kony.ui.Label({
        "id": "lblnextappt",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Next Appt.",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnextappt.add(lblline4, lblnextappt);
    var fcappttype = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcappttype",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 5
    }, {}, {});
    fcappttype.setDefaultUnit(kony.flex.DP);
    var lblline5 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline5",
        "isVisible": false,
        "right": "2.50%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblappttype = new kony.ui.Label({
        "id": "lblappttype",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Appt. Type",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcappttype.add(lblline5, lblappttype);
    var fcwounds = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcwounds",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "6.50%",
        "zIndex": 6
    }, {}, {});
    fcwounds.setDefaultUnit(kony.flex.DP);
    var lblline6 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline6",
        "isVisible": false,
        "right": "2.15%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblwounds = new kony.ui.Label({
        "id": "lblwounds",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Wounds",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcwounds.add(lblline6, lblwounds);
    var fcweeks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcweeks",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "6.50%",
        "zIndex": 7
    }, {}, {});
    fcweeks.setDefaultUnit(kony.flex.DP);
    var lblline7 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline7",
        "isVisible": false,
        "right": "2.50%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblweeks = new kony.ui.Label({
        "id": "lblweeks",
        "isVisible": true,
        "left": "5%",
        "right": "1%",
        "skin": "sklblgraybold",
        "text": "Weeks",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcweeks.add(lblline7, lblweeks);
    var fchealper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fchealper",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "13%",
        "zIndex": 8
    }, {}, {});
    fchealper.setDefaultUnit(kony.flex.DP);
    var lblline8 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline8",
        "isVisible": false,
        "right": "2.50%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhealper = new kony.ui.Label({
        "id": "lblhealper",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Advanced Procedures",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fchealper.add(lblline8, lblhealper);
    var fcTransmissionPrecautions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcTransmissionPrecautions",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "12%",
        "zIndex": 9
    }, {}, {});
    fcTransmissionPrecautions.setDefaultUnit(kony.flex.DP);
    var lblPrecautions = new kony.ui.Label({
        "id": "lblPrecautions",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Transmission-Based Precautions",
        "top": "20dp",
        "width": "82%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblline9 = new kony.ui.Label({
        "height": "100dp",
        "id": "lblline9",
        "isVisible": false,
        "right": "2.50%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTransmissionPrecautions.add(lblPrecautions, lblline9);
    var fctransferstatus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fctransferstatus",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "55dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 9
    }, {}, {});
    fctransferstatus.setDefaultUnit(kony.flex.DP);
    var lbltransferstatus = new kony.ui.Label({
        "id": "lbltransferstatus",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Transfer Status",
        "top": "20dp",
        "width": "94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fctransferstatus.add(lbltransferstatus);
    fcSegPatientList.add(fcpatientname, fccasemanager, fcphysician, fcnextappt, fcappttype, fcwounds, fcweeks, fchealper, fcTransmissionPrecautions, fctransferstatus);
}