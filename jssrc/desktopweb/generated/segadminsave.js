function initializesegadminsave() {
    fcsegadminsave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcsegadminsave",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "sknfctransborder"
    }, {}, {});
    fcsegadminsave.setDefaultUnit(kony.flex.DP);
    var fcfacilityname = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilityname",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    fcfacilityname.setDefaultUnit(kony.flex.DP);
    var fcfacilitynames = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilitynames",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_87c33ecd1d334471944d11bec1fc1942,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 1
    }, {}, {});
    fcfacilitynames.setDefaultUnit(kony.flex.DP);
    var lblfacilityname = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblfacilityname",
        "isVisible": true,
        "left": "10%",
        "skin": "sklblgraybold",
        "text": "W",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfacilitynames.add(lblfacilityname);
    var lblline = new kony.ui.Label({
        "height": "100%",
        "id": "lblline",
        "isVisible": true,
        "left": "0dp",
        "right": "3dp",
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
    fcfacilityname.add(fcfacilitynames, lblline);
    var fchuddletool = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fchuddletool",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 9
    }, {}, {});
    fchuddletool.setDefaultUnit(kony.flex.DP);
    var fchuddletools = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fchuddletools",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 2
    }, {}, {});
    fchuddletools.setDefaultUnit(kony.flex.DP);
    var btncheckbox1 = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnuncheck",
        "height": "30dp",
        "id": "btncheckbox1",
        "isVisible": true,
        "left": "47%",
        "onClick": AS_Button_6c2760cb0506483ab6a7ec1109ab91b6,
        "skin": "sknbtnuncheck",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fchuddletools.add(btncheckbox1);
    var lblline1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline1",
        "isVisible": true,
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
    fchuddletool.add(fchuddletools, lblline1);
    var fcphotomobile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcphotomobile",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 10
    }, {}, {});
    fcphotomobile.setDefaultUnit(kony.flex.DP);
    var fcphotomobiles = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcphotomobiles",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcphotomobiles.setDefaultUnit(kony.flex.DP);
    var btncheckbox2 = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnuncheck",
        "height": "30dp",
        "id": "btncheckbox2",
        "isVisible": true,
        "left": "46%",
        "onClick": AS_Button_50ee04411936454a9627fd3552df6dd2,
        "skin": "sknbtnuncheck",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcphotomobiles.add(btncheckbox2);
    fcphotomobile.add(fcphotomobiles);
    var lblfacilityidhidden = new kony.ui.Label({
        "id": "lblfacilityidhidden",
        "isVisible": false,
        "left": "6dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "0dp",
        "width": "2dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcsegadminsave.add(fcfacilityname, fchuddletool, fcphotomobile, lblfacilityidhidden);
}