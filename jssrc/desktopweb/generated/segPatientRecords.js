function initializesegPatientRecords() {
    flxPatientRecords = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flxPatientRecords",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "skfctrans"
    }, {}, {});
    flxPatientRecords.setDefaultUnit(kony.flex.DP);
    var FlexContainer024244a21dc8646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer024244a21dc8646",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "34%",
        "zIndex": 1
    }, {}, {});
    FlexContainer024244a21dc8646.setDefaultUnit(kony.flex.DP);
    var lblConsentForms = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblConsentForms",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblbluebold",
        "text": "Consent Forms",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skLbltxtHoverSkyBlueboldUnderline"
    });
    var imgVLine1 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine1",
        "isVisible": true,
        "right": "1dp",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer024244a21dc8646.add(lblConsentForms, imgVLine1);
    var CopyFlexContainer011074c267b6345 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer011074c267b6345",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "34%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer011074c267b6345.setDefaultUnit(kony.flex.DP);
    var lblReferralForms = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblReferralForms",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblbluebold",
        "text": "Referral Forms",
        "width": "99%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skLbltxtHoverSkyBlueboldUnderline"
    });
    var imgVLine2 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine2",
        "isVisible": true,
        "right": "0%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer011074c267b6345.add(lblReferralForms, imgVLine2);
    var CopyFlexContainer0a0679f49ca4c45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0a0679f49ca4c45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "67%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a0679f49ca4c45.setDefaultUnit(kony.flex.DP);
    var lblInsuranceForms = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblInsuranceForms",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblbluebold",
        "text": "Insurance Forms",
        "width": "99%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skLbltxtHoverSkyBlueboldUnderline"
    });
    CopyFlexContainer0a0679f49ca4c45.add(lblInsuranceForms);
    flxPatientRecords.add(FlexContainer024244a21dc8646, CopyFlexContainer011074c267b6345, CopyFlexContainer0a0679f49ca4c45);
}