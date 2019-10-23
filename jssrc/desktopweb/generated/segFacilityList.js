function initializesegFacilityList() {
    fcfacilitylist = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "fcfacilitylist",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "sknfctransborder"
    }, {}, {});
    fcfacilitylist.setDefaultUnit(kony.flex.DP);
    var FlexContainer0ccbb3bc6038d4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "FlexContainer0ccbb3bc6038d4e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    FlexContainer0ccbb3bc6038d4e.setDefaultUnit(kony.flex.DP);
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
        "width": "11%",
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
        "left": "5%",
        "skin": "sklblgraybold",
        "text": "Winconsin University of College Degree in Wisconsin",
        "width": "95%",
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
        "isVisible": false,
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
    var fcfacilityid = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilityid",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 2
    }, {}, {});
    fcfacilityid.setDefaultUnit(kony.flex.DP);
    var fcfacilityids = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilityids",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    fcfacilityids.setDefaultUnit(kony.flex.DP);
    var lblfacilityid = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblfacilityid",
        "isVisible": true,
        "skin": "sklblgraybold",
        "text": "10",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfacilityids.add(lblfacilityid);
    var lblline2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline2",
        "isVisible": false,
        "left": "0%",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfacilityid.add(fcfacilityids, lblline2);
    var fccity = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fccity",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 3
    }, {}, {});
    fccity.setDefaultUnit(kony.flex.DP);
    var fccitys = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fccitys",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.70%",
        "zIndex": 1
    }, {}, {});
    fccitys.setDefaultUnit(kony.flex.DP);
    var lblcity = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblcity",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblgraybold",
        "text": "New York",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fccitys.add(lblcity);
    var lblline3 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline3",
        "isVisible": false,
        "left": "97.70%",
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
    fccity.add(fccitys, lblline3);
    var fcstate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcstate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 4
    }, {}, {});
    fcstate.setDefaultUnit(kony.flex.DP);
    var fcstates = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcstates",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.80%",
        "zIndex": 1
    }, {}, {});
    fcstates.setDefaultUnit(kony.flex.DP);
    var lblstate = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblstate",
        "isVisible": true,
        "skin": "sklblgraybold",
        "text": "NY",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcstates.add(lblstate);
    var lblline4 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline4",
        "isVisible": false,
        "left": "97.80%",
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
    fcstate.add(fcstates, lblline4);
    var fczone = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fczone",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 5
    }, {}, {});
    fczone.setDefaultUnit(kony.flex.DP);
    var fczones = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fczones",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 1
    }, {}, {});
    fczones.setDefaultUnit(kony.flex.DP);
    var lblzone = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblzone",
        "isVisible": true,
        "skin": "sklblgraybold",
        "text": "2",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fczones.add(lblzone);
    var lblline5 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline5",
        "isVisible": false,
        "left": "97.90%",
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
    fczone.add(fczones, lblline5);
    var fcbluebookid = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcbluebookid",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 6
    }, {}, {});
    fcbluebookid.setDefaultUnit(kony.flex.DP);
    var fcbluebookids = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcbluebookids",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 1
    }, {}, {});
    fcbluebookids.setDefaultUnit(kony.flex.DP);
    var lblbluebookid = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblbluebookid",
        "isVisible": true,
        "skin": "sklblgraybold",
        "text": "12345",
        "top": "35%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcbluebookids.add(lblbluebookid);
    var lblline6 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline6",
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
    fcbluebookid.add(fcbluebookids, lblline6);
    var fcfacilitytype = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilitytype",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 7
    }, {}, {});
    fcfacilitytype.setDefaultUnit(kony.flex.DP);
    var fcfacilitytypes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilitytypes",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 1
    }, {}, {});
    fcfacilitytypes.setDefaultUnit(kony.flex.DP);
    var lblfacilitytype = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblfacilitytype",
        "isVisible": true,
        "skin": "sklblgraybold",
        "text": "WCC",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfacilitytypes.add(lblfacilitytype);
    var lblline7 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline7",
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
    fcfacilitytype.add(fcfacilitytypes, lblline7);
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
        "width": "12%",
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
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "97%",
        "zIndex": 2
    }, {}, {});
    fchuddletools.setDefaultUnit(kony.flex.DP);
    var btncheckbox1 = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "30dp",
        "id": "btncheckbox1",
        "isVisible": true,
        "onClick": AS_Button_5a6d44e821ba436a92ed31c9b92d7db0,
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
    var lblline9 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline9",
        "isVisible": false,
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
    fchuddletool.add(fchuddletools, lblline9);
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
        "width": "12%",
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
        "centerX": "50%",
        "centerY": "50%",
        "height": "30dp",
        "id": "btncheckbox2",
        "isVisible": true,
        "onClick": AS_Button_ab64e78517f84e74aec92f4b60662d2f,
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
    FlexContainer0ccbb3bc6038d4e.add(fcfacilityname, fcfacilityid, fccity, fcstate, fczone, fcbluebookid, fcfacilitytype, fchuddletool, fcphotomobile);
    var lbllineseperator = new kony.ui.Label({
        "bottom": "0px",
        "height": "1px",
        "id": "lbllineseperator",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfacilitylist.add(FlexContainer0ccbb3bc6038d4e, lbllineseperator);
}