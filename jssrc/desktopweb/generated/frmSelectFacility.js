function addWidgetsfrmSelectFacility() {
    frmSelectFacility.setDefaultUnit(kony.flex.DP);
    var fcloginmainbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcloginmainbody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skflxbreadcrumb",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcloginmainbody.setDefaultUnit(kony.flex.DP);
    var imglogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35dp",
        "id": "imglogo",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "loginlogo.png",
        "top": "100dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var richtextHead = new kony.ui.RichText({
        "centerX": "50%",
        "id": "richtextHead",
        "isVisible": true,
        "left": "116dp",
        "skin": "sknrtforgotpassword",
        "text": "Welcome <b>Wendy Grube!</b> Please select your facility:",
        "top": "20dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtfldsearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "35dp",
        "id": "txtfldsearch",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Search Facility",
        "secureTextEntry": false,
        "skin": "sktb120graybrdr11",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onKeyUp": AS_TextField_e1553a0990ff443d93f6251fd43ceea7
    });
    var fcFacilities = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "fcFacilities",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "maxHeight": "280dp",
        "isModalContainer": false,
        "skin": "skfctransroundedcorners",
        "top": "17dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    fcFacilities.setDefaultUnit(kony.flex.DP);
    var segmentFacilities = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imgFacility": "facility.png",
            "lblFacility": "Label"
        }, {
            "imgFacility": "facility.png",
            "lblFacility": "Label"
        }, {
            "imgFacility": "facility.png",
            "lblFacility": "Label"
        }],
        "groupCells": false,
        "id": "segmentFacilities",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": "300dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_c44b01a7b28544c0a2d1b7e6a139c677,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": true,
        "rowFocusSkin": "seg2Focus",
        "rowTemplate": fcFacility,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": true,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "fcFacility": "fcFacility",
            "imgFacility": "imgFacility",
            "lblFacility": "lblFacility"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcFacilities.add(segmentFacilities);
    var lblsearcherror = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblsearcherror",
        "isVisible": false,
        "skin": "sklblred",
        "text": "No Records Found",
        "top": "2dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcpagination = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "52dp",
        "id": "fcpagination",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "5dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    fcpagination.setDefaultUnit(kony.flex.DP);
    var btnprevious = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnloginblue",
        "height": "40dp",
        "id": "btnprevious",
        "isVisible": true,
        "left": "5dp",
        "onClick": AS_Button_b9172c3280794f08accb2841deea2759,
        "skin": "sknbtnloginblue",
        "text": "<< Previous",
        "top": "0dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnnext = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnloginblue",
        "height": "40dp",
        "id": "btnnext",
        "isVisible": true,
        "onClick": AS_Button_aa5072f1eb8e4b08ac6d84db48a5bffe,
        "right": "5dp",
        "skin": "sknbtnloginblue",
        "text": "Next >>",
        "top": "0dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpagination.add(btnprevious, btnnext);
    var btnSelectFacility = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnloginblue",
        "height": "50dp",
        "id": "btnSelectFacility",
        "isVisible": true,
        "left": "30%",
        "onClick": AS_Button_dff1a30c84684dda85c8404dfc9bb84a,
        "skin": "sknbtnloginblue",
        "text": "Select",
        "top": "20dp",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnloginbluehover"
    });
    var fcerror = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "fcerror",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "20dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    fcerror.setDefaultUnit(kony.flex.DP);
    var lblerror = new kony.ui.Label({
        "id": "lblerror",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblred",
        "text": "Please select a facility",
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcerror.add(lblerror);
    fcloginmainbody.add(imglogo, richtextHead, txtfldsearch, fcFacilities, lblsearcherror, fcpagination, btnSelectFacility, fcerror);
    var lblversion = new kony.ui.Label({
        "bottom": "2%",
        "centerX": "50%",
        "id": "lblversion",
        "isVisible": false,
        "skin": "sklblwhite100",
        "text": "Version: ",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmSelectFacility.add(fcloginmainbody, lblversion);
};

function frmSelectFacilityGlobals() {
    frmSelectFacility = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSelectFacility,
        "enabledForIdleTimeout": true,
        "id": "frmSelectFacility",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_572bd58bcfb0481f937b5cf31bb78258,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};