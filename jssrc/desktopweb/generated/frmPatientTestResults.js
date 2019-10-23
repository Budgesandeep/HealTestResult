function addWidgetsfrmPatientTestResults() {
    frmPatientTestResults.setDefaultUnit(kony.flex.DP);
    var km16b6c1b06eb4f09b8658482808a897b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "83dp",
        "id": "fcmstheader",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0dp"
    }, {}, {});
    km16b6c1b06eb4f09b8658482808a897b.setDefaultUnit(kony.flex.DP);
    var km826f6710b084f9ab6bd7fd866045b84 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcheaderleft",
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "35%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp"
    }, {}, {});
    km826f6710b084f9ab6bd7fd866045b84.setDefaultUnit(kony.flex.DP);
    var kmea5fb8bf859455485d91162b85e2de3 = new kony.ui.Image2({
        "height": "35dp",
        "id": "imglogo",
        "imageWhenFailed": "healogics_logo.png",
        "imageWhileDownloading": "healogics_logo.png",
        "src": "healogics_logo.png",
        "width": "176dp",
        "zIndex": 1,
        "bottom": "10%",
        "centerY": "50%",
        "isVisible": true,
        "left": "30dp",
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmb85058b700944b6af1cb3283f82d98d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "50%",
        "id": "fcvertline",
        "layoutType": kony.flex.FREE_FORM,
        "width": "1dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "isVisible": true,
        "left": "15dp",
        "isModalContainer": false,
        "skin": "skfcGrayBg",
        "top": 0
    }, {}, {});
    kmb85058b700944b6af1cb3283f82d98d.setDefaultUnit(kony.flex.DP);
    kmb85058b700944b6af1cb3283f82d98d.add();
    var km537bc0382cf456b98944ed9360f4c7f = new kony.ui.Label({
        "id": "lblprojname",
        "text": "i-heal 3.0",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "15dp",
        "skin": "sklbl220vb"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmfff1ec7434143dbb98b6747bec295bf = new kony.ui.RichText({
        "id": "rtregsymbol",
        "text": "&reg;",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "isVisible": false,
        "left": "0dp",
        "skin": "skrtsmall60vb",
        "top": "25dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km826f6710b084f9ab6bd7fd866045b84.add(kmea5fb8bf859455485d91162b85e2de3, kmb85058b700944b6af1cb3283f82d98d, km537bc0382cf456b98944ed9360f4c7f, kmfff1ec7434143dbb98b6747bec295bf);
    var km5ee4686a8c241eab7bd1fc691c31b98 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcheaderright",
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "65%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp"
    }, {}, {});
    km5ee4686a8c241eab7bd1fc691c31b98.setDefaultUnit(kony.flex.DP);
    var kmd1f9d9338f643899cf51be81993ccc2 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcuserinfo",
        "layoutType": kony.flex.FREE_FORM,
        "left": "12%",
        "width": "48%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0dp"
    }, {}, {});
    kmd1f9d9338f643899cf51be81993ccc2.setDefaultUnit(kony.flex.DP);
    var km3d738a65f08491d94a292678272b34a = new kony.ui.Image2({
        "height": "40dp",
        "id": "imguser",
        "imageWhenFailed": "user.png",
        "imageWhileDownloading": "user.png",
        "src": "user.png",
        "width": "40dp",
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "12dp",
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmdb8502dd34a4b4bbfea76aefcec5f2e = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fcusername",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "82%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "isVisible": true,
        "left": "60dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%"
    }, {}, {});
    kmdb8502dd34a4b4bbfea76aefcec5f2e.setDefaultUnit(kony.flex.DP);
    var km4c06dbde68a4369ad2b8c3440b39ba4 = new kony.ui.RichText({
        "height": "18dp",
        "id": "rchwelcome",
        "text": "Welcome <b> James </b>\n",
        "top": "8dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0%",
        "skin": "sknrchgray95"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmde95314167a47679555c547244f667a = new kony.ui.RichText({
        "height": "18dp",
        "id": "rchdatelogin",
        "text": "December 5<sup>th</sup>, 2016",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0%",
        "skin": "sknrchgray95",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km8cbfcff0bb249139aa0611ec3775e94 = new kony.ui.RichText({
        "id": "rchfacility",
        "text": "Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility ",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0%",
        "skin": "sknrchgray95"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmdb8502dd34a4b4bbfea76aefcec5f2e.add(km4c06dbde68a4369ad2b8c3440b39ba4, kmde95314167a47679555c547244f667a, km8cbfcff0bb249139aa0611ec3775e94);
    kmd1f9d9338f643899cf51be81993ccc2.add(km3d738a65f08491d94a292678272b34a, kmdb8502dd34a4b4bbfea76aefcec5f2e);
    var km593e8774b2045ee96b42b87e24d4111 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fccontacthelp",
        "layoutType": kony.flex.FREE_FORM,
        "width": "20%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp"
    }, {}, {});
    km593e8774b2045ee96b42b87e24d4111.setDefaultUnit(kony.flex.DP);
    var km941abe0ac1a4aa0b7c6750cdb51882b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcvertlinehelp",
        "layoutType": kony.flex.FREE_FORM,
        "width": "1dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "15dp"
    }, {}, {});
    km941abe0ac1a4aa0b7c6750cdb51882b.setDefaultUnit(kony.flex.DP);
    km941abe0ac1a4aa0b7c6750cdb51882b.add();
    var km00926a052294d329a8c5fcccb8ded99 = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgphone",
        "imageWhileDownloading": "phoneicon.png",
        "src": "phoneicon.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": false,
        "left": 13,
        "skin": "slImage",
        "top": "28dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmfc87cd7a2514b88b554d8b118fb7c08 = new kony.ui.Label({
        "id": "lblhelpdesk",
        "text": "Helpdesk",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerY": "35%",
        "isVisible": true,
        "left": "20dp",
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km12e0dee97814bdf9a172ab1385e4bee = new kony.ui.Label({
        "id": "lblcontactnumber",
        "text": "1-866-412-3680 ",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerY": "65%",
        "isVisible": true,
        "left": "20dp",
        "skin": "sklblgraybold"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km593e8774b2045ee96b42b87e24d4111.add(km941abe0ac1a4aa0b7c6750cdb51882b, km00926a052294d329a8c5fcccb8ded99, kmfc87cd7a2514b88b554d8b118fb7c08, km12e0dee97814bdf9a172ab1385e4bee);
    var kmfbb6fca00fe47928607ce2afc1487b4 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_g088ef8745c64df4a783f6e4edcb43bb,
        "width": "10%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcbrdr",
        "top": "0dp"
    }, {}, {
        "hoverSkin": "skfcheadermenuHover"
    });
    kmfbb6fca00fe47928607ce2afc1487b4.setDefaultUnit(kony.flex.DP);
    var kmba2d406113943a684d62a26786f6f81 = new kony.ui.Image2({
        "height": "40dp",
        "id": "imgtasks",
        "imageWhileDownloading": "tasks.png",
        "src": "tasklistheader.png",
        "width": "32dp",
        "zIndex": 1,
        "centerX": "50%",
        "centerY": "50%",
        "isVisible": true,
        "left": "20dp",
        "skin": "slImage",
        "top": "0dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kme872e056d11473da16f865b0e1870f5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "24dp",
        "id": "inboxcircle",
        "layoutType": kony.flex.FREE_FORM,
        "width": "24dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "70%",
        "centerY": "30%",
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skninboxcircle"
    }, {}, {});
    kme872e056d11473da16f865b0e1870f5.setDefaultUnit(kony.flex.DP);
    var km8cf81476b75498cbe4fbce4e553da04 = new kony.ui.Label({
        "id": "lbltaskcount",
        "text": "13",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerX": "45%",
        "centerY": "50%",
        "isVisible": true,
        "skin": "sklblwhite88"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kme872e056d11473da16f865b0e1870f5.add(km8cf81476b75498cbe4fbce4e553da04);
    kmfbb6fca00fe47928607ce2afc1487b4.add(kmba2d406113943a684d62a26786f6f81, kme872e056d11473da16f865b0e1870f5);
    var km1f079e29fa347699c7eac93cbe235e4 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_c33937a1bce24d0fb8bf571d5c58d625,
        "width": "10%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "right": "0dp",
        "skin": "skfcbrdr",
        "top": "0dp"
    }, {}, {
        "hoverSkin": "skfcheadermenuHover"
    });
    km1f079e29fa347699c7eac93cbe235e4.setDefaultUnit(kony.flex.DP);
    var kmbb34474044c45a6936cd59b3dca59d4 = new kony.ui.Image2({
        "height": "8dp",
        "id": "imgmenu",
        "imageWhenFailed": "downarrow.png",
        "imageWhileDownloading": "downarrow.png",
        "src": "headerarrow.png",
        "width": "13dp",
        "zIndex": 1,
        "centerX": "50%",
        "centerY": "50%",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "top": "0dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km1f079e29fa347699c7eac93cbe235e4.add(kmbb34474044c45a6936cd59b3dca59d4);
    km5ee4686a8c241eab7bd1fc691c31b98.add(kmd1f9d9338f643899cf51be81993ccc2, km593e8774b2045ee96b42b87e24d4111, kmfbb6fca00fe47928607ce2afc1487b4, km1f079e29fa347699c7eac93cbe235e4);
    var km4b57939b33940bc893f9829edb888ee = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "fcheaderline",
        "layoutType": kony.flex.FREE_FORM,
        "top": 82,
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcline"
    }, {}, {});
    km4b57939b33940bc893f9829edb888ee.setDefaultUnit(kony.flex.DP);
    var km99619b5cbef40e78893a071b8de4c83 = new kony.ui.Label({
        "height": "5dp",
        "id": "sklblheaderline",
        "textStyle": {},
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km4b57939b33940bc893f9829edb888ee.add(km99619b5cbef40e78893a071b8de4c83);
    km16b6c1b06eb4f09b8658482808a897b.add(km826f6710b084f9ab6bd7fd866045b84, km5ee4686a8c241eab7bd1fc691c31b98, km4b57939b33940bc893f9829edb888ee);
    var fscmainbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fscmainbody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fscmainbody.setDefaultUnit(kony.flex.DP);
    var fcbodyheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcbodyheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skflxbreadcrumb",
        "top": "-1dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcbodyheader.setDefaultUnit(kony.flex.DP);
    var btnmenu = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnmenufocus",
        "height": "30dp",
        "id": "btnmenu",
        "isVisible": false,
        "left": "1.50%",
        "skin": "sknbtnmenu",
        "text": "=",
        "top": "0dp",
        "width": "28dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnmenuhover"
    });
    var fchamburgermenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "skfcmenufocus",
        "height": "30dp",
        "id": "fchamburgermenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1.50%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c476a22ec2f049af9c9445b3ae9dfe3f,
        "skin": "skfcmenu",
        "top": "15dp",
        "width": "30dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "skfcmenuhover"
    });
    fchamburgermenu.setDefaultUnit(kony.flex.DP);
    fchamburgermenu.add();
    var fcbreadcrumb = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcbreadcrumb",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "6%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    fcbreadcrumb.setDefaultUnit(kony.flex.DP);
    var btnhome = new kony.ui.Button({
        "focusSkin": "skbtnwhiteboldtrans",
        "height": "50dp",
        "id": "btnhome",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_j1564cdcde3e4fa693422597c9848878,
        "skin": "skbtnwhiteboldtrans",
        "text": "Home",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnwhiteboldtranshover"
    });
    var lbltitlesep1 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "lbltitlesep1",
        "imageWhileDownloading": "arrow.png",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0%",
        "width": "9dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnhdrsubtitle2 = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtnwhiteboldtrans",
        "height": "50dp",
        "id": "btnhdrsubtitle2",
        "isVisible": true,
        "left": "3%",
        "onClick": AS_Button_h7567427691e434eb317a1be82d73e50,
        "skin": "skbtnwhiteboldtrans",
        "text": "Patient List",
        "top": "4dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnwhiteboldtranshover"
    });
    var lblhdrsubtitle2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrsubtitle2",
        "isVisible": false,
        "left": "3%",
        "skin": "sknlblstatuswhite",
        "text": "Patient List",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var seperatorImage = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "seperatorImage",
        "imageWhileDownloading": "arrow.png",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0%",
        "width": "9dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblPatientName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPatientName",
        "isVisible": true,
        "left": "3%",
        "skin": "sknlblstatuswhite",
        "text": "Patient Name",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcbreadcrumb.add(btnhome, lbltitlesep1, btnhdrsubtitle2, lblhdrsubtitle2, seperatorImage, lblPatientName);
    fcbodyheader.add(btnmenu, fchamburgermenu, fcbreadcrumb);
    var fscsidemenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fscsidemenu",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "Copyskfcdarkblue07392fc7bfce847",
        "top": "50dp",
        "width": "209dp",
        "zIndex": 10
    }, {}, {});
    fscsidemenu.setDefaultUnit(kony.flex.DP);
    var kmc22297663b34977b45fd21a0de0a670 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "isMaster": true,
        "id": "fcmenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "200dp",
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp"
    }, {}, {});
    kmc22297663b34977b45fd21a0de0a670.setDefaultUnit(kony.flex.DP);
    var km81434c7cb234cf89ee0263b912fac8c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "54dp",
        "id": "fcmenuitemone",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km81434c7cb234cf89ee0263b912fac8c.setDefaultUnit(kony.flex.DP);
    var kmf37d204ed49411da3a1ef7d09a4dce2 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "onClick": AS_Button_i2f8c482066e4cb88aaee2d8c350313d,
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnsmwcccfocus",
        "isVisible": true,
        "left": 0,
        "skin": "skbtnsmwcc",
        "top": 0
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skWccbtnHover"
    });
    km81434c7cb234cf89ee0263b912fac8c.add(kmf37d204ed49411da3a1ef7d09a4dce2);
    var kma46059d5cd74a7f8857a59658466e2e = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenuitemtwo",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    kma46059d5cd74a7f8857a59658466e2e.setDefaultUnit(kony.flex.DP);
    var kme5380085a644dc1b9b893f62ebc0fb8 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "onClick": AS_Button_d69a4b34053245e29173011bf89fa5b3,
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnpatientsafetyfocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnpatientsafety",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnMenuHuddleHover"
    });
    kma46059d5cd74a7f8857a59658466e2e.add(kme5380085a644dc1b9b893f62ebc0fb8);
    var km67fe89df83646b9bf8086b3a42d0357 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenuitemthree",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km67fe89df83646b9bf8086b3a42d0357.setDefaultUnit(kony.flex.DP);
    var kmb41ef5c229c4cb5a146057a3cbac2f7 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmhbo",
        "onClick": AS_Button_a06c53188a044e58b44c68a997628d74,
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnhbofocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnhbo",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skmenubtnHbohover"
    });
    km67fe89df83646b9bf8086b3a42d0357.add(kmb41ef5c229c4cb5a146057a3cbac2f7);
    var km1a4b1ab386a4d16a5cbf57c9cbcfb31 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenufour",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km1a4b1ab386a4d16a5cbf57c9cbcfb31.setDefaultUnit(kony.flex.DP);
    var km68e9d8134df46d2818b8ea1999efda8 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmadministration",
        "onClick": AS_Button_d47028d0612145e08b34ab2a36743f43,
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnadministrationfocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnadministration",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnadministrationhover"
    });
    km1a4b1ab386a4d16a5cbf57c9cbcfb31.add(km68e9d8134df46d2818b8ea1999efda8);
    var kma628cea0e5541b3a427c50adbaf26f4 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenufive",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    kma628cea0e5541b3a427c50adbaf26f4.setDefaultUnit(kony.flex.DP);
    var kmff9d5d3bd754b5cafe2c8f5f0b8ba36 = new kony.ui.Button({
        "height": "64dp",
        "id": "skbtnphotomobile",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "sknphotomobilefocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknphotomobile",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknphotomobilehover"
    });
    kma628cea0e5541b3a427c50adbaf26f4.add(kmff9d5d3bd754b5cafe2c8f5f0b8ba36);
    var km0634cf7c4fd4c0e823d5a99f200ac30 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenusix",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km0634cf7c4fd4c0e823d5a99f200ac30.setDefaultUnit(kony.flex.DP);
    var km4091fe84d3d4a2896de373cdaf52aef = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmbilling",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnbillingfocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnbilling",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnbillinghover"
    });
    km0634cf7c4fd4c0e823d5a99f200ac30.add(km4091fe84d3d4a2896de373cdaf52aef);
    var kme25a2e6873d426c9b2af4769163dec6 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "57dp",
        "id": "fcmenseven",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    kme25a2e6873d426c9b2af4769163dec6.setDefaultUnit(kony.flex.DP);
    var kme9d26156c2c4f5b80d3602fee2cd9c2 = new kony.ui.Button({
        "height": "64dp",
        "id": "btnregistration",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnregistrationfocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnregistration",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnregistrationhover"
    });
    kme25a2e6873d426c9b2af4769163dec6.add(kme9d26156c2c4f5b80d3602fee2cd9c2);
    var km23ab0e1f4e343ce8eb767d6fcb54dea = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "52dp",
        "id": "fcmenueight",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km23ab0e1f4e343ce8eb767d6fcb54dea.setDefaultUnit(kony.flex.DP);
    var km852fc40ab6248be95179d7fe0f3dfd0 = new kony.ui.Button({
        "height": "64dp",
        "id": "btnsmcommunity",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtncommunityfocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtncommunity",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtncommunityhover"
    });
    km23ab0e1f4e343ce8eb767d6fcb54dea.add(km852fc40ab6248be95179d7fe0f3dfd0);
    var kmb04438683c4480fbdbaf512cdebee02 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenunine",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    kmb04438683c4480fbdbaf512cdebee02.setDefaultUnit(kony.flex.DP);
    var kmdd1068f8c7c4117a4d8189cce16d9d8 = new kony.ui.Button({
        "height": "64dp",
        "id": "btnscheduling",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnschedulingfocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnscheduling",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnschedulinghover"
    });
    kmb04438683c4480fbdbaf512cdebee02.add(kmdd1068f8c7c4117a4d8189cce16d9d8);
    var km08f516eb0664e018b28e3f9b7e00bb3 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenuten",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km08f516eb0664e018b28e3f9b7e00bb3.setDefaultUnit(kony.flex.DP);
    var km810373394a64249a970c62b2eabfc87 = new kony.ui.Button({
        "height": "64dp",
        "id": "btnprocedures",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnproceduresfocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnprocedures",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnprocedureshover"
    });
    km08f516eb0664e018b28e3f9b7e00bb3.add(km810373394a64249a970c62b2eabfc87);
    var km47e1cd82d41425fb08ee032c2da38c9 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenueleven",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km47e1cd82d41425fb08ee032c2da38c9.setDefaultUnit(kony.flex.DP);
    var kmc1ccc630ec744619b0e6d60d68d6d85 = new kony.ui.Button({
        "height": "64dp",
        "id": "btndme",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtndmefocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtndme",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtndmehover"
    });
    km47e1cd82d41425fb08ee032c2da38c9.add(kmc1ccc630ec744619b0e6d60d68d6d85);
    var km374dd4203ce4af4b5f851e4a480f4ad = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenutweleve",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcdividergray",
        "top": "0dp"
    }, {}, {});
    km374dd4203ce4af4b5f851e4a480f4ad.setDefaultUnit(kony.flex.DP);
    var km143d620dcac4311ac7a943b31e1389a = new kony.ui.Button({
        "height": "64dp",
        "id": "btnspotfire",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnspotfirefocus",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnspotfire",
        "top": "0dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnspotfirehover"
    });
    km374dd4203ce4af4b5f851e4a480f4ad.add(km143d620dcac4311ac7a943b31e1389a);
    kmc22297663b34977b45fd21a0de0a670.add(km81434c7cb234cf89ee0263b912fac8c, kma46059d5cd74a7f8857a59658466e2e, km67fe89df83646b9bf8086b3a42d0357, km1a4b1ab386a4d16a5cbf57c9cbcfb31, kma628cea0e5541b3a427c50adbaf26f4, km0634cf7c4fd4c0e823d5a99f200ac30, kme25a2e6873d426c9b2af4769163dec6, km23ab0e1f4e343ce8eb767d6fcb54dea, kmb04438683c4480fbdbaf512cdebee02, km08f516eb0664e018b28e3f9b7e00bb3, km47e1cd82d41425fb08ee032c2da38c9, km374dd4203ce4af4b5f851e4a480f4ad);
    fscsidemenu.add(kmc22297663b34977b45fd21a0de0a670);
    var fscbodyScroll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fscbodyScroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "48dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fscbodyScroll.setDefaultUnit(kony.flex.DP);
    var fcpatienthdrbox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcpatienthdrbox",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatienthdrbox.setDefaultUnit(kony.flex.DP);
    var lblhdrpatientlist = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrpatientlist",
        "isVisible": true,
        "right": "23%",
        "skin": "sknlblblackbold85",
        "text": "Search Patient:",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tbpatientsearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "71%",
        "id": "tbpatientsearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "First Name / Last Name",
        "right": "5%",
        "secureTextEntry": false,
        "skin": "skntxtgraybrdblack85",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "17%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onEndEditing": AS_TextField_ff1f930c0d4941dbaac816bd7d05ca76,
        "onKeyUp": AS_TextField_ibff771ff82e42ecacf4f8cfaad50264
    });
    var fcsearchicon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "30dp",
        "id": "fcsearchicon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_f7609b2260b241a3ba9f326c4f025f70,
        "right": "5%",
        "skin": "slFbox",
        "width": "40dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcsearchicon.setDefaultUnit(kony.flex.DP);
    var imgSearchIcon = new kony.ui.Image2({
        "centerY": "50%",
        "height": "60%",
        "id": "imgSearchIcon",
        "imageWhileDownloading": "search.png",
        "isVisible": true,
        "left": "10%",
        "skin": "slImage",
        "src": "search.png",
        "width": "80%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcsearchicon.add(imgSearchIcon);
    var fcDownload = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "fcDownload",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_da13bd23582d4a7bbdf89159af6b95bd,
        "right": "10dp",
        "skin": "slFbox",
        "width": "50dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcDownload.setDefaultUnit(kony.flex.DP);
    var imgDownload = new kony.ui.Image2({
        "height": "100%",
        "id": "imgDownload",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "download.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDownload.add(imgDownload);
    fcpatienthdrbox.add(lblhdrpatientlist, tbpatientsearch, fcsearchicon, fcDownload);
    var fcsearchdropdown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcsearchdropdown",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "maxHeight": "300dp",
        "isModalContainer": false,
        "right": "5%",
        "skin": "sknfcwhitebg",
        "top": "43dp",
        "width": "17%",
        "zIndex": 10
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcsearchdropdown.setDefaultUnit(kony.flex.DP);
    var segSearch = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblsearchname": "Label"
        }, {
            "lblsearchname": "Label"
        }, {
            "lblsearchname": "Label"
        }],
        "groupCells": false,
        "id": "segSearch",
        "isVisible": true,
        "left": "0%",
        "maxHeight": "300dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_j23b1ddc18d2470db0d11b3b0d5ba406,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "skSearchSegment",
        "rowTemplate": FlexContainer01549dbee75a74f,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer01549dbee75a74f": "FlexContainer01549dbee75a74f",
            "lblsearchname": "lblsearchname"
        },
        "width": "100%",
        "zIndex": 10
    }, {
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {});
    fcsearchdropdown.add(segSearch);
    var fscbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": false,
        "id": "fscbody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "1%",
        "isModalContainer": false,
        "skin": "sknfcwhitebgshadow",
        "top": "60dp",
        "width": "98%",
        "zIndex": 3
    }, {}, {});
    fscbody.setDefaultUnit(kony.flex.DP);
    var fcpatientinfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientinfo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientinfo.setDefaultUnit(kony.flex.DP);
    var fcpatientinfoheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientinfoheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientinfoheader.setDefaultUnit(kony.flex.DP);
    var fcpatientinfoarrow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "32dp",
        "id": "fcpatientinfoarrow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_e3291c727f0a4793bc4d50ff93bb9032,
        "skin": "slFbox",
        "top": "10dp",
        "width": "40dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcpatientinfoarrow.setDefaultUnit(kony.flex.DP);
    var imgarrow = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "45%",
        "id": "imgarrow",
        "isVisible": true,
        "skin": "slImage",
        "src": "headerarrow.png",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientinfoarrow.add(imgarrow);
    var fcpatientnamemsr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "32dp",
        "id": "fcpatientnamemsr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "40dp",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_d631d7a1d59c4ff59f0312b1fb7848dd,
        "skin": "slFbox",
        "top": "10dp",
        "width": "14%",
        "zIndex": 1
    }, {}, {});
    fcpatientnamemsr.setDefaultUnit(kony.flex.DP);
    var lblmsr = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmsr",
        "isVisible": false,
        "left": "0%",
        "skin": "sknlblred90bold",
        "text": "MSR",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblpatientname1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblpatientname1",
        "isVisible": true,
        "left": "5%",
        "skin": "sknlblblackbold85",
        "text": "John Smith",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientnamemsr.add(lblmsr, lblpatientname1);
    var lbldob = new kony.ui.Label({
        "id": "lbldob",
        "isVisible": true,
        "left": "17%",
        "skin": "sknlblblackbold85",
        "text": "DOB:",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbldobvalue = new kony.ui.Label({
        "id": "lbldobvalue",
        "isVisible": true,
        "left": "30.30%",
        "skin": "sknlbldarkgray85",
        "text": "12/12/1954",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientinfoheader.add(fcpatientinfoarrow, fcpatientnamemsr, lbldob, lbldobvalue);
    var fcpatientinfodetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientinfodetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientinfodetails.setDefaultUnit(kony.flex.DP);
    var imgpatient = new kony.ui.Image2({
        "id": "imgpatient",
        "imageWhileDownloading": "patient_photo.png",
        "isVisible": true,
        "left": "1%",
        "skin": "sknimggrayshadow",
        "src": "patient_photo.png",
        "top": "0dp",
        "width": "8%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcpatientinfo1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientinfo1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "17%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "27%",
        "zIndex": 1
    }, {}, {});
    fcpatientinfo1.setDefaultUnit(kony.flex.DP);
    var lblmedicalrecordnumber = new kony.ui.Label({
        "height": "25dp",
        "id": "lblmedicalrecordnumber",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Medical Record Number:",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcareapproach = new kony.ui.Label({
        "height": "25dp",
        "id": "lblcareapproach",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Care Approach:",
        "top": "25dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblabileft = new kony.ui.Label({
        "height": "25dp",
        "id": "lblabileft",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "ABI Left:",
        "top": "50dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblabiright = new kony.ui.Label({
        "height": "25dp",
        "id": "lblabiright",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "ABI Right:",
        "top": "75dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblmedicalrecordnumbervalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblmedicalrecordnumbervalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "453",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcareapproachvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblcareapproachvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Palliative",
        "top": "25dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblabileftvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblabileftvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "1.1",
        "top": "50dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblabirightvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblabirightvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "1.2",
        "top": "75dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbldiabeticstatus = new kony.ui.Label({
        "height": "25dp",
        "id": "lbldiabeticstatus",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Comorbidities:",
        "top": "101dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientinfo1.add(lblmedicalrecordnumber, lblcareapproach, lblabileft, lblabiright, lblmedicalrecordnumbervalue, lblcareapproachvalue, lblabileftvalue, lblabirightvalue, lbldiabeticstatus);
    var fcpatientinfo2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientinfo2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "44%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "27%",
        "zIndex": 1
    }, {}, {});
    fcpatientinfo2.setDefaultUnit(kony.flex.DP);
    var lblwoundcarephysician = new kony.ui.Label({
        "height": "25dp",
        "id": "lblwoundcarephysician",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Wound Care Physician:",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcasemanager = new kony.ui.Label({
        "height": "25dp",
        "id": "lblcasemanager",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Case Manager:",
        "top": "25dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblprimarycarephysician = new kony.ui.Label({
        "height": "25dp",
        "id": "lblprimarycarephysician",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Primary Care Physician:",
        "top": "50dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblwoundcarephysicianvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblwoundcarephysicianvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Dr. Loreta",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcasemanagervalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblcasemanagervalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Dr. Eric Mathew",
        "top": "25dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblprimarycarephysicianvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblprimarycarephysicianvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Dr. Loreta",
        "top": "50dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblreferringphysician = new kony.ui.Label({
        "height": "25dp",
        "id": "lblreferringphysician",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Referring Physician:",
        "top": "75dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblreferringphysicianvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblreferringphysicianvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Karen Phelps",
        "top": "75dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientinfo2.add(lblwoundcarephysician, lblcasemanager, lblprimarycarephysician, lblwoundcarephysicianvalue, lblcasemanagervalue, lblprimarycarephysicianvalue, lblreferringphysician, lblreferringphysicianvalue);
    var fcpatientinfo3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientinfo3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "72%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "26%",
        "zIndex": 1
    }, {}, {});
    fcpatientinfo3.setDefaultUnit(kony.flex.DP);
    var lblsecondaryinsurance = new kony.ui.Label({
        "height": "25dp",
        "id": "lblsecondaryinsurance",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Secondary Insurance:",
        "top": "25dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblteritaryinsurance = new kony.ui.Label({
        "height": "25dp",
        "id": "lblteritaryinsurance",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Tertiary Insurance:",
        "top": "50dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblnextapptdate = new kony.ui.Label({
        "height": "25dp",
        "id": "lblnextapptdate",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Next Appt. Date:",
        "top": "100dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblsecondaryinsurancevalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblsecondaryinsurancevalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Yes",
        "top": "25dp",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblteritaryinsurancevalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblteritaryinsurancevalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Yes",
        "top": "50dp",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblnextapptvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblnextapptvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "12/08/2016",
        "top": "100dp",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblprimaryinsurances = new kony.ui.Label({
        "height": "25dp",
        "id": "lblprimaryinsurances",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Primary Insurance:",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblprimaryinsurancesvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblprimaryinsurancesvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Yes",
        "top": "0dp",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblweeksoftreatment = new kony.ui.Label({
        "height": "25dp",
        "id": "lblweeksoftreatment",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblblackbold85",
        "text": "Weeks In Treatment:",
        "top": "75dp",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblweeksoftreatmentvalue = new kony.ui.Label({
        "height": "25dp",
        "id": "lblweeksoftreatmentvalue",
        "isVisible": true,
        "right": "0%",
        "skin": "sknlbldarkgray85",
        "text": "9 Weeks",
        "top": "75dp",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientinfo3.add(lblsecondaryinsurance, lblteritaryinsurance, lblnextapptdate, lblsecondaryinsurancevalue, lblteritaryinsurancevalue, lblnextapptvalue, lblprimaryinsurances, lblprimaryinsurancesvalue, lblweeksoftreatment, lblweeksoftreatmentvalue);
    var fscdiabeticsvalue = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "50dp",
        "horizontalScrollIndicator": true,
        "id": "fscdiabeticsvalue",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30.50%",
        "maxHeight": "50dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "103dp",
        "verticalScrollIndicator": true,
        "width": "164dp",
        "zIndex": 1
    }, {}, {});
    fscdiabeticsvalue.setDefaultUnit(kony.flex.DP);
    var lbldiabeticstatusvalue1 = new kony.ui.Label({
        "id": "lbldiabeticstatusvalue1",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlbldarkgray85",
        "top": "0dp",
        "width": "158dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fscdiabeticsvalue.add(lbldiabeticstatusvalue1);
    var lbldiabeticstatusvalue = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "42dp",
        "id": "lbldiabeticstatusvalue",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "30.50%",
        "numberOfVisibleLines": 3,
        "skin": "sknTextAreanobg",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "105dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    fcpatientinfodetails.add(imgpatient, fcpatientinfo1, fcpatientinfo2, fcpatientinfo3, fscdiabeticsvalue, lbldiabeticstatusvalue);
    var fcpatientinfofooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientinfofooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientinfofooter.setDefaultUnit(kony.flex.DP);
    var lblmsrstatus = new kony.ui.Label({
        "id": "lblmsrstatus",
        "isVisible": true,
        "left": "2dp",
        "skin": "sknlblred90bold",
        "text": "MSR",
        "top": "0dp",
        "width": "130dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblallergies = new kony.ui.Label({
        "id": "lblallergies",
        "isVisible": true,
        "left": "17%",
        "skin": "sknlblblackbold85",
        "text": "Allergies:",
        "top": "3dp",
        "width": "13%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 1],
        "paddingInPixel": false
    }, {});
    var lblallergiesvalue = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lblallergiesvalue",
        "isVisible": true,
        "left": "30.50%",
        "skin": "sknlbldarkgray85",
        "text": "None Lorem ipsum dolor sit met, consetetur sadipscing eliter, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        "top": "4dp",
        "width": "58%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 1],
        "paddingInPixel": false
    }, {});
    fcpatientinfofooter.add(lblmsrstatus, lblallergies, lblallergiesvalue);
    fcpatientinfo.add(fcpatientinfoheader, fcpatientinfodetails, fcpatientinfofooter);
    var fctreatmentbar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fctreatmentbar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcnavyblue",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fctreatmentbar.setDefaultUnit(kony.flex.DP);
    var btnwoundsummary = new kony.ui.Button({
        "focusSkin": "skntbtnwhite85transbg",
        "height": "100%",
        "id": "btnwoundsummary",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_b75851678a294fe7adaafecfe10f4f0e,
        "skin": "skntbtnwhite85transbg",
        "text": "Wound Summary",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var btnTestResults = new kony.ui.Button({
        "focusSkin": "skntbtnwhite85transbg",
        "height": "100%",
        "id": "btnTestResults",
        "isVisible": true,
        "left": "20%",
        "skin": "skbtnblack85whitebg",
        "text": "Test Results",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var btnencounters = new kony.ui.Button({
        "focusSkin": "sknbtnwhitebgblack85",
        "height": "100%",
        "id": "btnencounters",
        "isVisible": false,
        "left": "20%",
        "skin": "sknbtntransbgwhite85",
        "text": "Encounters",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnpatientrecords = new kony.ui.Button({
        "focusSkin": "skbtnblack85whitebg",
        "height": "100%",
        "id": "btnpatientrecords",
        "isVisible": true,
        "left": "10%",
        "onClick": AS_Button_jcc21b25f37b4f12a121738781d29658,
        "skin": "skntbtnwhite85transbg",
        "text": "Patient Records",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnpatienttask = new kony.ui.Button({
        "focusSkin": "sknbtnwhitebgblack85",
        "height": "100%",
        "id": "btnpatienttask",
        "isVisible": false,
        "left": "30%",
        "skin": "sknbtntransbgwhite85",
        "text": "Patient Task",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcUploadFile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "fcUploadFile",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_h0e8f5f5e054422fabd6744698e1cad0,
        "right": "5dp",
        "skin": "slFbox",
        "width": "50dp",
        "zIndex": 3
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcUploadFile.setDefaultUnit(kony.flex.DP);
    var imgUpload = new kony.ui.Image2({
        "height": "100%",
        "id": "imgUpload",
        "isVisible": false,
        "left": "0dp",
        "skin": "slImage",
        "src": "upload.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcUploadFile.add(imgUpload);
    var FlexContainer08a085f93a8df4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "FlexContainer08a085f93a8df4f",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "right": "5.00%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    FlexContainer08a085f93a8df4f.setDefaultUnit(kony.flex.DP);
    var lblDocumentType = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblDocumentType",
        "isVisible": true,
        "left": "25%",
        "skin": "sknlblstatuswhite",
        "text": "Document Type",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listboxDocType = new kony.ui.ListBox({
        "centerY": "50.00%",
        "height": "35dp",
        "id": "listboxDocType",
        "isVisible": true,
        "left": "3%",
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "skin": "sknlbgray100roundcorner",
        "top": "5dp",
        "width": "180dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "multiSelect": false
    });
    FlexContainer08a085f93a8df4f.add(lblDocumentType, listboxDocType);
    fctreatmentbar.add(btnwoundsummary, btnTestResults, btnencounters, btnpatientrecords, btnpatienttask, fcUploadFile, FlexContainer08a085f93a8df4f);
    var fcTestResults = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcTestResults",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcTestResults.setDefaultUnit(kony.flex.DP);
    var segmentTestResults = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imgBackground": "onelinearrownormal.png",
            "imgTestResultUpload": "upload.png",
            "lblLine": "",
            "lblTestType": "Consults"
        }, {
            "imgBackground": "onelinearrownormal.png",
            "imgTestResultUpload": "upload.png",
            "lblLine": "",
            "lblTestType": "Laboratory"
        }, {
            "imgBackground": "onelinearrownormal.png",
            "imgTestResultUpload": "upload.png",
            "lblLine": "",
            "lblTestType": "Radiology"
        }],
        "groupCells": false,
        "id": "segmentTestResults",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_f11c2d432de2455e85af51c415d877b5,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegrowaltgray",
        "rowTemplate": fcTestResult,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "fcTestResult": "fcTestResult",
            "fcUpload": "fcUpload",
            "imgBackground": "imgBackground",
            "imgTestResultUpload": "imgTestResultUpload",
            "lblLine": "lblLine",
            "lblTestType": "lblTestType"
        },
        "width": "22%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segmentTestResultsDocuments = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "btnOnHoverResult": "",
            "btnTestResultAttachment": "View Document",
            "btnTestResultDescription": "",
            "lblLine1": "",
            "lblLine2": "",
            "lblLine3": "",
            "lblLine4": "",
            "lblTestResultDateOrdered": "03/21/2017",
            "lblTestResultResults": "",
            "lblTestResultsDateCompleted": "03/21/2017",
            "txtRichTestResult": "Please raise a Kony ticket for CO-126 Hover capability"
        }],
        "groupCells": false,
        "id": "segmentTestResultsDocuments",
        "isVisible": true,
        "left": "25%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Normal",
        "rowTemplate": flxTestResultsList,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "adadad00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "101dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btnOnHoverResult": "btnOnHoverResult",
            "btnTestResultAttachment": "btnTestResultAttachment",
            "btnTestResultDescription": "btnTestResultDescription",
            "fcTestResultAttachment": "fcTestResultAttachment",
            "fcTestResultDescription": "fcTestResultDescription",
            "flxDateCompleted": "flxDateCompleted",
            "flxDateOrdered": "flxDateOrdered",
            "flxTestResultResults": "flxTestResultResults",
            "flxTestResultsList": "flxTestResultsList",
            "lblLine1": "lblLine1",
            "lblLine2": "lblLine2",
            "lblLine3": "lblLine3",
            "lblLine4": "lblLine4",
            "lblTestResultDateOrdered": "lblTestResultDateOrdered",
            "lblTestResultResults": "lblTestResultResults",
            "lblTestResultsDateCompleted": "lblTestResultsDateCompleted",
            "txtRichTestResult": "txtRichTestResult"
        },
        "widgetSkin": "sknsegrowgraybrd",
        "width": "73%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTestResults = new kony.ui.Label({
        "id": "lblTestResults",
        "isVisible": true,
        "left": "25%",
        "skin": "sknlblblackbold90",
        "text": "Consults",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcTestResultsListHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcTestResultsListHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "25%",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "55dp",
        "width": "73%"
    }, {}, {});
    fcTestResultsListHeader.setDefaultUnit(kony.flex.DP);
    var fcTestResultsDescription = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcTestResultsDescription",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {}, {});
    fcTestResultsDescription.setDefaultUnit(kony.flex.DP);
    var lblTestResultsDescription = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTestResultsDescription",
        "isVisible": true,
        "skin": "sklblwhite90bold",
        "text": "Description",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTestResultsDescription.add(lblTestResultsDescription);
    var lblLine1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine1",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcTestResultsDateOrdered = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcTestResultsDateOrdered",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    fcTestResultsDateOrdered.setDefaultUnit(kony.flex.DP);
    var lblTestResultsDateOrdered = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTestResultsDateOrdered",
        "isVisible": true,
        "skin": "sklblwhite90bold",
        "text": "Date Ordered",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var sortFlexOrderDate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80.00%",
        "id": "sortFlexOrderDate",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "3dp",
        "width": "13dp",
        "zIndex": 1
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    sortFlexOrderDate.setDefaultUnit(kony.flex.DP);
    var imgDateOrderAscending = new kony.ui.Image2({
        "height": "50%",
        "id": "imgDateOrderAscending",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_e5004eaf0c474191a95ac15909c0a369,
        "skin": "CopyslImage0a289a87f9e5c41",
        "src": "uparrowheadwhite.png",
        "top": 6,
        "width": "9dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgDateOrderDecending = new kony.ui.Image2({
        "height": "50%",
        "id": "imgDateOrderDecending",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_a53d4db3453e47a49bf725bb1bdb975b,
        "skin": "CopyslImage0a289a87f9e5c41",
        "src": "downarrowheadwhite.png",
        "top": -8,
        "width": "9dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    sortFlexOrderDate.add(imgDateOrderAscending, imgDateOrderDecending);
    fcTestResultsDateOrdered.add(lblTestResultsDateOrdered, sortFlexOrderDate);
    var lblLine2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine2",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcTestResultsDateCompleted = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcTestResultsDateCompleted",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": 0,
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    fcTestResultsDateCompleted.setDefaultUnit(kony.flex.DP);
    var lblTestResultsDateCompleted = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTestResultsDateCompleted",
        "isVisible": true,
        "skin": "sklblwhite90bold",
        "text": "Date of Test",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTestResultsDateCompleted.add(lblTestResultsDateCompleted);
    var lblLine3 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine3",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcTestResultsAttachment = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcTestResultsAttachment",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "14%",
        "zIndex": 1
    }, {}, {});
    fcTestResultsAttachment.setDefaultUnit(kony.flex.DP);
    var lblTestResultsAttachment = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTestResultsAttachment",
        "isVisible": true,
        "skin": "sklblwhite90bold",
        "text": "Attachment",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTestResultsAttachment.add(lblTestResultsAttachment);
    var lblLine4 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine4",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fctestResultsResults = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fctestResultsResults",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    fctestResultsResults.setDefaultUnit(kony.flex.DP);
    var lblTestResultsResults = new kony.ui.Label({
        "centerX": "38%",
        "centerY": "50%",
        "id": "lblTestResultsResults",
        "isVisible": true,
        "skin": "sklblwhite90bold",
        "text": "Results",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var sortFlexResults = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80.00%",
        "id": "sortFlexResults",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": 3,
        "width": "13dp",
        "zIndex": 1
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    sortFlexResults.setDefaultUnit(kony.flex.DP);
    var imgResultsAscending = new kony.ui.Image2({
        "height": "50%",
        "id": "imgResultsAscending",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_bb36086601884f2181098e7f9e3946a2,
        "skin": "CopyslImage0a289a87f9e5c41",
        "src": "uparrowheadwhite.png",
        "top": 6,
        "width": "9dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgResultsDecending = new kony.ui.Image2({
        "height": "50%",
        "id": "imgResultsDecending",
        "isVisible": true,
        "left": "0%",
        "onTouchStart": AS_Image_b67b13455a4044ecb530fc178f043655,
        "skin": "CopyslImage0a289a87f9e5c41",
        "src": "downarrowheadwhite.png",
        "top": -8,
        "width": "9dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    sortFlexResults.add(imgResultsAscending, imgResultsDecending);
    fctestResultsResults.add(lblTestResultsResults, sortFlexResults);
    fcTestResultsListHeader.add(fcTestResultsDescription, lblLine1, fcTestResultsDateOrdered, lblLine2, fcTestResultsDateCompleted, lblLine3, fcTestResultsAttachment, lblLine4, fctestResultsResults);
    var lblNoRecords = new kony.ui.Label({
        "id": "lblNoRecords",
        "isVisible": false,
        "left": "45%",
        "skin": "skblack120",
        "text": "Label",
        "top": "100dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTestResults.add(segmentTestResults, segmentTestResultsDocuments, lblTestResults, fcTestResultsListHeader, lblNoRecords);
    var fcpaginatebuttons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "fcpaginatebuttons",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "3.93%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 3
    }, {}, {});
    fcpaginatebuttons.setDefaultUnit(kony.flex.DP);
    var btnViewAll = new kony.ui.Button({
        "centerX": "75%",
        "focusSkin": "sknbtnbluebold80",
        "height": "35dp",
        "id": "btnViewAll",
        "isVisible": true,
        "onClick": AS_Button_b297fb60e29a482a89c5a4519c2ea48e,
        "skin": "sknbtnbluebg100",
        "text": "View All",
        "top": "15dp",
        "width": "180dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var btnViewMore = new kony.ui.Button({
        "centerX": "55%",
        "focusSkin": "sknbtnbluebold80",
        "height": "35dp",
        "id": "btnViewMore",
        "isVisible": true,
        "onClick": AS_Button_c6112e4d8608404583d47c95ead26167,
        "skin": "sknbtnbluebg100",
        "text": "View More",
        "top": "15dp",
        "width": "180dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    fcpaginatebuttons.add(btnViewAll, btnViewMore);
    fscbody.add(fcpatientinfo, fctreatmentbar, fcTestResults, fcpaginatebuttons);
    var fcmstPrintMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcmstPrintMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "10dp",
        "skin": "slFbox",
        "top": "45dp",
        "width": "250dp",
        "zIndex": 3
    }, {}, {});
    fcmstPrintMenu.setDefaultUnit(kony.flex.DP);
    var km35041d5bcc14b74adcfbc9722b406d7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "126dp",
        "id": "fcPrintMenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "150dp",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "right": "1dp",
        "skin": "skfcwhitegraybdr",
        "top": "0dp"
    }, {}, {});
    km35041d5bcc14b74adcfbc9722b406d7.setDefaultUnit(kony.flex.DP);
    var km046739bf1da4ae3a2bca07c6cad3bda = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcPrint",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_jd3734101d994009817ea96093cc06bb,
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcgray",
        "top": "0dp"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    km046739bf1da4ae3a2bca07c6cad3bda.setDefaultUnit(kony.flex.DP);
    var kmd34808ae89544f3ae1e87b3ce32f684 = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgPrint",
        "src": "print.png",
        "width": "25dp",
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "3dp",
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km1b8233a2f9540afaa4dc4352bd65f8f = new kony.ui.Label({
        "id": "lblPrint",
        "text": "Print",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "35dp",
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km046739bf1da4ae3a2bca07c6cad3bda.add(kmd34808ae89544f3ae1e87b3ce32f684, km1b8233a2f9540afaa4dc4352bd65f8f);
    var kmf91ae73265748f1b638186338313bd5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportPdf",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_ca30298ee96e49bcbec9c291fdf843cf,
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0dp"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    kmf91ae73265748f1b638186338313bd5.setDefaultUnit(kony.flex.DP);
    var km61aa7e8bb254132ab811fc569db81a1 = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgExportPdf",
        "src": "pdf.png",
        "width": "25dp",
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "3dp",
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km6b88608209349b38797b8b9cc02a778 = new kony.ui.Label({
        "id": "lblExportPdf",
        "text": "Export PDF",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "35dp",
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmf91ae73265748f1b638186338313bd5.add(km61aa7e8bb254132ab811fc569db81a1, km6b88608209349b38797b8b9cc02a778);
    var km063d1b4a5644a62ba953234348d1b5e = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportExcel",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_d53d2c1a41ae42408ee1c89160101b18,
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcgray",
        "top": "0dp"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    km063d1b4a5644a62ba953234348d1b5e.setDefaultUnit(kony.flex.DP);
    var km0c45644a8914c7ca7323d07bf3d734b = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgExportExcel",
        "src": "excel.png",
        "width": "25dp",
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "3dp",
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmf6594ac9c644db4a14a4b90477acfca = new kony.ui.Label({
        "id": "lblExportExcel",
        "text": "Export Excel",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "35dp",
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km923db1c37ae4b64ab2b30f12a5c9199 = new kony.ui.Label({
        "height": "2dp",
        "id": "lblmenuline",
        "textStyle": {},
        "width": "100%",
        "zIndex": 3,
        "bottom": "1dp",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km063d1b4a5644a62ba953234348d1b5e.add(km0c45644a8914c7ca7323d07bf3d734b, kmf6594ac9c644db4a14a4b90477acfca, km923db1c37ae4b64ab2b30f12a5c9199);
    km35041d5bcc14b74adcfbc9722b406d7.add(km046739bf1da4ae3a2bca07c6cad3bda, kmf91ae73265748f1b638186338313bd5, km063d1b4a5644a62ba953234348d1b5e);
    fcmstPrintMenu.add(km35041d5bcc14b74adcfbc9722b406d7);
    fscbodyScroll.add(fcpatienthdrbox, fcsearchdropdown, fscbody, fcmstPrintMenu);
    var kme9505db85aa46e1a2215925dfcf9c38 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "isMaster": true,
        "id": "fctopmenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "right": "0dp",
        "top": "-1dp",
        "width": "150dp",
        "zIndex": 4,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcwhitebg"
    }, {}, {});
    kme9505db85aa46e1a2215925dfcf9c38.setDefaultUnit(kony.flex.DP);
    var kmceb1f8ae73547f59959e891fcd8e60c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_f44aa2ebacda4b45a0725971135ee0b9,
        "top": "0dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "isModalContainer": false,
        "skin": "sknfcgray"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    kmceb1f8ae73547f59959e891fcd8e60c.setDefaultUnit(kony.flex.DP);
    var kmefd5816ffe0464582256898b3473b5c = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgsettings",
        "left": "3dp",
        "src": "settings.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km643a153961a41d192bbe5760c45af50 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblsettings",
        "left": "35dp",
        "text": "Settings",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "isVisible": true,
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmceb1f8ae73547f59959e891fcd8e60c.add(kmefd5816ffe0464582256898b3473b5c, km643a153961a41d192bbe5760c45af50);
    var km04434bdef1646deba51b1b1a99f41bb = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_ff58c665b7e3438c985378e7c27e59b9,
        "top": "0dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcgray"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    km04434bdef1646deba51b1b1a99f41bb.setDefaultUnit(kony.flex.DP);
    var km3d3eaf2a2b846589bf0de109a6bc082 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imghelp",
        "left": "3dp",
        "src": "help.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km454aed609904dadb665b3e042f47b76 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhelp",
        "left": "35dp",
        "text": "Help",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "isVisible": true,
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km04434bdef1646deba51b1b1a99f41bb.add(km3d3eaf2a2b846589bf0de109a6bc082, km454aed609904dadb665b3e042f47b76);
    var kmd556e7a6f7d4d439413f93a64cf334d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_b03864c56ad0428d828aca3e8d59b820,
        "top": "0dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    kmd556e7a6f7d4d439413f93a64cf334d.setDefaultUnit(kony.flex.DP);
    var kmc5d2c51727d462c9218c64d083d4415 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgreports",
        "left": "3dp",
        "src": "facilitysmall.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km6084eb80e1945da88f1fd289562faf3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblreports",
        "left": "35dp",
        "text": "Switch Facility",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "isVisible": true,
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmd556e7a6f7d4d439413f93a64cf334d.add(kmc5d2c51727d462c9218c64d083d4415, km6084eb80e1945da88f1fd289562faf3);
    var km813010e75da4c63968cdac9236c68ed = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_b51b74590992417c8ed7abe4ec15ec11,
        "top": "0dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcgray"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    km813010e75da4c63968cdac9236c68ed.setDefaultUnit(kony.flex.DP);
    var km388f351777e44da96cd333a9e2e3240 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgsignout",
        "left": "3dp",
        "src": "logout.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km6c19ed933a7485eb790448018e8331a = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblsignout",
        "left": "35dp",
        "text": "Logout",
        "textStyle": {},
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "isVisible": true,
        "skin": "sklblgray100"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km7495acbeb18490c9d16ecb7ec102c43 = new kony.ui.Label({
        "bottom": "1dp",
        "height": "1dp",
        "id": "lblmenuline",
        "left": "0dp",
        "textStyle": {},
        "width": "100%",
        "zIndex": 3,
        "isVisible": true,
        "skin": "sknlblline"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km813010e75da4c63968cdac9236c68ed.add(km388f351777e44da96cd333a9e2e3240, km6c19ed933a7485eb790448018e8331a, km7495acbeb18490c9d16ecb7ec102c43);
    kme9505db85aa46e1a2215925dfcf9c38.add(kmceb1f8ae73547f59959e891fcd8e60c, km04434bdef1646deba51b1b1a99f41bb, kmd556e7a6f7d4d439413f93a64cf334d, km813010e75da4c63968cdac9236c68ed);
    fscmainbody.add(fcbodyheader, fscsidemenu, fscbodyScroll, kme9505db85aa46e1a2215925dfcf9c38);
    var km1393bcc16c443a19102c27e81d1e90d = new kony.ui.FlexContainer({
        "bottom": "0dp",
        "clipBounds": true,
        "isMaster": true,
        "height": "40dp",
        "id": "fcmstfooter",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "10dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcGrayBg"
    }, {}, {});
    km1393bcc16c443a19102c27e81d1e90d.setDefaultUnit(kony.flex.DP);
    var kmb80decb70ef4c2db65a0232b3cd86c3 = new kony.ui.RichText({
        "centerY": "50%",
        "id": "rcfooter",
        "left": "40dp",
        "text": "&copy; All Rights Reserved.",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "isVisible": true,
        "skin": "skrcfooter"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km1393bcc16c443a19102c27e81d1e90d.add(kmb80decb70ef4c2db65a0232b3cd86c3);
    frmPatientTestResults.add(km16b6c1b06eb4f09b8658482808a897b, fscmainbody, km1393bcc16c443a19102c27e81d1e90d);
};

function frmPatientTestResultsGlobals() {
    frmPatientTestResults = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPatientTestResults,
        "enabledForIdleTimeout": true,
        "id": "frmPatientTestResults",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onHide": AS_Form_fa2033c578224368a257f6d42dc3695b,
        "onTouchEnd": AS_Form_g192296341d54591827a4837fb7764e9,
        "postShow": AS_Form_b3b851be9d0e4e189756ccd4ceac1edf,
        "skin": "skfrmgray"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "onDeviceBack": AS_Form_f36cad2d1baa42d192f052453074a3c3,
        "retainScrollPosition": false
    });
};