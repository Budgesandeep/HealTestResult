function addWidgetsfrmWCCDashboard() {
    frmWCCDashboard.setDefaultUnit(kony.flex.DP);
    var kmcea3f5fff95436c935bb083a51b67fb = new kony.ui.FlexContainer({
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
    kmcea3f5fff95436c935bb083a51b67fb.setDefaultUnit(kony.flex.DP);
    var kmbbc5021ed4a4510aaef40b481b0fabe = new kony.ui.FlexContainer({
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
    kmbbc5021ed4a4510aaef40b481b0fabe.setDefaultUnit(kony.flex.DP);
    var km157e6fe271c49a4a965d1d8c97919bf = new kony.ui.Image2({
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
    var km3a4b57e3de7443eb6a39b7d12b84e62 = new kony.ui.FlexContainer({
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
    km3a4b57e3de7443eb6a39b7d12b84e62.setDefaultUnit(kony.flex.DP);
    km3a4b57e3de7443eb6a39b7d12b84e62.add();
    var kmb61f977d93949d598e91ec22f4a5c41 = new kony.ui.Label({
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
    var kmd5ed5fbb09744f78374d5a6049006a8 = new kony.ui.RichText({
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
    kmbbc5021ed4a4510aaef40b481b0fabe.add(km157e6fe271c49a4a965d1d8c97919bf, km3a4b57e3de7443eb6a39b7d12b84e62, kmb61f977d93949d598e91ec22f4a5c41, kmd5ed5fbb09744f78374d5a6049006a8);
    var km0f0c112b16e44d1921d34e50cca52e4 = new kony.ui.FlexContainer({
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
    km0f0c112b16e44d1921d34e50cca52e4.setDefaultUnit(kony.flex.DP);
    var km1f374468b034b0db805a2c8f78443c3 = new kony.ui.FlexContainer({
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
    km1f374468b034b0db805a2c8f78443c3.setDefaultUnit(kony.flex.DP);
    var km8ed2cc306be4b61aba730c31067fed4 = new kony.ui.Image2({
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
    var kmb430c3c04304f02a89bc4ad09922a14 = new kony.ui.FlexContainer({
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
    kmb430c3c04304f02a89bc4ad09922a14.setDefaultUnit(kony.flex.DP);
    var kmcb0ccfd599740eeb9cf5f11a9e2a6ee = new kony.ui.RichText({
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
    var kma8ffc8bda0549b997222e0ca27b03a3 = new kony.ui.RichText({
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
    var kmbabc04d3f844d13a53773556eb8b7bd = new kony.ui.RichText({
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
    kmb430c3c04304f02a89bc4ad09922a14.add(kmcb0ccfd599740eeb9cf5f11a9e2a6ee, kma8ffc8bda0549b997222e0ca27b03a3, kmbabc04d3f844d13a53773556eb8b7bd);
    km1f374468b034b0db805a2c8f78443c3.add(km8ed2cc306be4b61aba730c31067fed4, kmb430c3c04304f02a89bc4ad09922a14);
    var km7d4afc6a5894285b2d0ff498d801820 = new kony.ui.FlexContainer({
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
    km7d4afc6a5894285b2d0ff498d801820.setDefaultUnit(kony.flex.DP);
    var km1c99ee3d382471fb0a3417ded231635 = new kony.ui.FlexContainer({
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
    km1c99ee3d382471fb0a3417ded231635.setDefaultUnit(kony.flex.DP);
    km1c99ee3d382471fb0a3417ded231635.add();
    var kmac73999ab3e41c48416002d17af79fd = new kony.ui.Image2({
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
    var kmabe5ab818a342a9843b0d025538b456 = new kony.ui.Label({
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
    var kmf3edaaf45cf4b77a0dd5705c1897a7f = new kony.ui.Label({
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
    km7d4afc6a5894285b2d0ff498d801820.add(km1c99ee3d382471fb0a3417ded231635, kmac73999ab3e41c48416002d17af79fd, kmabe5ab818a342a9843b0d025538b456, kmf3edaaf45cf4b77a0dd5705c1897a7f);
    var km33a0aa87630483f82f1c1044df1e112 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_2e665f72011541ed9ed29f8436103026,
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
    km33a0aa87630483f82f1c1044df1e112.setDefaultUnit(kony.flex.DP);
    var km7bf00f3175845dca28f6dc86390a258 = new kony.ui.Image2({
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
    var kmbacdbf93c4146e3b06e293922a63f72 = new kony.ui.FlexContainer({
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
    kmbacdbf93c4146e3b06e293922a63f72.setDefaultUnit(kony.flex.DP);
    var kmfd7b8d3bdcb4c84aed75d1647e04fc8 = new kony.ui.Label({
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
    kmbacdbf93c4146e3b06e293922a63f72.add(kmfd7b8d3bdcb4c84aed75d1647e04fc8);
    km33a0aa87630483f82f1c1044df1e112.add(km7bf00f3175845dca28f6dc86390a258, kmbacdbf93c4146e3b06e293922a63f72);
    var km25aee1b27394da0a5a5db90a17175a7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_4ff0901d6d4f4774a814f93a354a25c7,
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
    km25aee1b27394da0a5a5db90a17175a7.setDefaultUnit(kony.flex.DP);
    var km897c6e8d5d14f42a595359adbeaca4a = new kony.ui.Image2({
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
    km25aee1b27394da0a5a5db90a17175a7.add(km897c6e8d5d14f42a595359adbeaca4a);
    km0f0c112b16e44d1921d34e50cca52e4.add(km1f374468b034b0db805a2c8f78443c3, km7d4afc6a5894285b2d0ff498d801820, km33a0aa87630483f82f1c1044df1e112, km25aee1b27394da0a5a5db90a17175a7);
    var km2c1e600ef4c45a2810d5e1a387ea5eb = new kony.ui.FlexContainer({
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
    km2c1e600ef4c45a2810d5e1a387ea5eb.setDefaultUnit(kony.flex.DP);
    var km626690b8972455fbc3632468ca9fb8e = new kony.ui.Label({
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
    km2c1e600ef4c45a2810d5e1a387ea5eb.add(km626690b8972455fbc3632468ca9fb8e);
    kmcea3f5fff95436c935bb083a51b67fb.add(kmbbc5021ed4a4510aaef40b481b0fabe, km0f0c112b16e44d1921d34e50cca52e4, km2c1e600ef4c45a2810d5e1a387ea5eb);
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
        "top": "0dp",
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
        "onClick": AS_Button_796967a12ef44c0eaa13798d8f6d3285,
        "skin": "sknbtnmenu",
        "text": "=",
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
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcbreadcrumb.setDefaultUnit(kony.flex.DP);
    var btnhome = new kony.ui.Button({
        "focusSkin": "skbtnwhiteboldtrans",
        "height": "50dp",
        "id": "btnhome",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f4a0a088ba164e78989ca9dda8c0e7b0,
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
    var imgrightarrow = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "imgrightarrow",
        "isVisible": true,
        "left": "5%",
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
    var lblWCCDashboardtxt = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblWCCDashboardtxt",
        "isVisible": true,
        "left": "5%",
        "skin": "sknlblstatuswhite",
        "text": "WCC Dashboard",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcbreadcrumb.add(btnhome, imgrightarrow, lblWCCDashboardtxt);
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
        "onClick": AS_FlexContainer_235dd8492ccf48dc8e0ae7860c25cccb,
        "skin": "skfcmenu",
        "top": "15dp",
        "width": "30dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "skfcmenuhover"
    });
    fchamburgermenu.setDefaultUnit(kony.flex.DP);
    fchamburgermenu.add();
    fcbodyheader.add(btnmenu, fcbreadcrumb, fchamburgermenu);
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
    var km85b6ac9a0324ed086c4ec0631b89f40 = new kony.ui.FlexContainer({
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
    km85b6ac9a0324ed086c4ec0631b89f40.setDefaultUnit(kony.flex.DP);
    var km08f438307ac471a86c524256d01758d = new kony.ui.FlexContainer({
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
    km08f438307ac471a86c524256d01758d.setDefaultUnit(kony.flex.DP);
    var kmc2f57273179466ea74a6f194c30ab1e = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "onClick": AS_Button_0da81b8a855448bb9c6616b7fb968c99,
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
    km08f438307ac471a86c524256d01758d.add(kmc2f57273179466ea74a6f194c30ab1e);
    var km2bacaa26441413694c76e1bca2b0f4a = new kony.ui.FlexContainer({
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
    km2bacaa26441413694c76e1bca2b0f4a.setDefaultUnit(kony.flex.DP);
    var km979febcc5554dfd83d3d4bf97f185fb = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "onClick": AS_Button_f0254de7357b48b495b30fb5c196563b,
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
    km2bacaa26441413694c76e1bca2b0f4a.add(km979febcc5554dfd83d3d4bf97f185fb);
    var kmfcce5789b584741b81dd51628f7b234 = new kony.ui.FlexContainer({
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
    kmfcce5789b584741b81dd51628f7b234.setDefaultUnit(kony.flex.DP);
    var km58a0bb404a947fca4f0fba059ccd4a8 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmhbo",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnhbofocus",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_ab7ab38888854e648fe58aaa2438a1a3,
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
    kmfcce5789b584741b81dd51628f7b234.add(km58a0bb404a947fca4f0fba059ccd4a8);
    var km5c862d32d974de8a1c18be4e6c1304e = new kony.ui.FlexContainer({
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
    km5c862d32d974de8a1c18be4e6c1304e.setDefaultUnit(kony.flex.DP);
    var kmce876728b794b7abb05c8477a678e4b = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmadministration",
        "text": "Button",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnadministrationfocus",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_9769c581ebfc4e919708eb09fcdaabc2,
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
    km5c862d32d974de8a1c18be4e6c1304e.add(kmce876728b794b7abb05c8477a678e4b);
    var kmf8908ad22b543238838bd13071e1c0f = new kony.ui.FlexContainer({
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
    kmf8908ad22b543238838bd13071e1c0f.setDefaultUnit(kony.flex.DP);
    var km9934fab571840e58ab1a4148086df01 = new kony.ui.Button({
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
    kmf8908ad22b543238838bd13071e1c0f.add(km9934fab571840e58ab1a4148086df01);
    var kmd48abddf45041149a870bbcccd6eff1 = new kony.ui.FlexContainer({
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
    kmd48abddf45041149a870bbcccd6eff1.setDefaultUnit(kony.flex.DP);
    var km0a1880c7775456ba6a797e52d413e8c = new kony.ui.Button({
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
    kmd48abddf45041149a870bbcccd6eff1.add(km0a1880c7775456ba6a797e52d413e8c);
    var km5b3f5a8b0064a7f8e8dc1543e5b04cd = new kony.ui.FlexContainer({
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
    km5b3f5a8b0064a7f8e8dc1543e5b04cd.setDefaultUnit(kony.flex.DP);
    var km880e752689b4f9296c481fac12b8f06 = new kony.ui.Button({
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
    km5b3f5a8b0064a7f8e8dc1543e5b04cd.add(km880e752689b4f9296c481fac12b8f06);
    var km3a24bf9776b4ed6841f0cef1deb6a67 = new kony.ui.FlexContainer({
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
    km3a24bf9776b4ed6841f0cef1deb6a67.setDefaultUnit(kony.flex.DP);
    var km3bf3dedc97a46d2a3ecf619f6b1cd73 = new kony.ui.Button({
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
    km3a24bf9776b4ed6841f0cef1deb6a67.add(km3bf3dedc97a46d2a3ecf619f6b1cd73);
    var kmec6b2204d9c4aafbe343a05d8081a68 = new kony.ui.FlexContainer({
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
    kmec6b2204d9c4aafbe343a05d8081a68.setDefaultUnit(kony.flex.DP);
    var kmcea8d056eae46f0bcbcb97c48b0a608 = new kony.ui.Button({
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
    kmec6b2204d9c4aafbe343a05d8081a68.add(kmcea8d056eae46f0bcbcb97c48b0a608);
    var km7fd0e184a164bc68c4c65ca9ef9a59e = new kony.ui.FlexContainer({
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
    km7fd0e184a164bc68c4c65ca9ef9a59e.setDefaultUnit(kony.flex.DP);
    var km383b0720af74d8f8553764cc058ec46 = new kony.ui.Button({
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
    km7fd0e184a164bc68c4c65ca9ef9a59e.add(km383b0720af74d8f8553764cc058ec46);
    var km621996d2ac94a128cfa7b1683569921 = new kony.ui.FlexContainer({
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
    km621996d2ac94a128cfa7b1683569921.setDefaultUnit(kony.flex.DP);
    var km9b33b0d506e41ae8770549ce3ce71cc = new kony.ui.Button({
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
    km621996d2ac94a128cfa7b1683569921.add(km9b33b0d506e41ae8770549ce3ce71cc);
    var km05014f2824840f38b2b97d9df0fa32c = new kony.ui.FlexContainer({
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
    km05014f2824840f38b2b97d9df0fa32c.setDefaultUnit(kony.flex.DP);
    var km8d42b04cc3a4651970e72c5caceeac2 = new kony.ui.Button({
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
    km05014f2824840f38b2b97d9df0fa32c.add(km8d42b04cc3a4651970e72c5caceeac2);
    km85b6ac9a0324ed086c4ec0631b89f40.add(km08f438307ac471a86c524256d01758d, km2bacaa26441413694c76e1bca2b0f4a, kmfcce5789b584741b81dd51628f7b234, km5c862d32d974de8a1c18be4e6c1304e, kmf8908ad22b543238838bd13071e1c0f, kmd48abddf45041149a870bbcccd6eff1, km5b3f5a8b0064a7f8e8dc1543e5b04cd, km3a24bf9776b4ed6841f0cef1deb6a67, kmec6b2204d9c4aafbe343a05d8081a68, km7fd0e184a164bc68c4c65ca9ef9a59e, km621996d2ac94a128cfa7b1683569921, km05014f2824840f38b2b97d9df0fa32c);
    fscsidemenu.add(km85b6ac9a0324ed086c4ec0631b89f40);
    var fscbodyScroll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "contentSize": {
            "width": "100%"
        },
        "enableScrolling": true,
        "height": "600dp",
        "horizontalScrollIndicator": true,
        "id": "fscbodyScroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "right": "0dp",
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "50dp",
        "verticalScrollIndicator": true,
        "zIndex": 3
    }, {}, {});
    fscbodyScroll.setDefaultUnit(kony.flex.DP);
    var fscbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fscbody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    fscbody.setDefaultUnit(kony.flex.DP);
    var fcdashboardsubheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "fcdashboardsubheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "10dp",
        "width": "96%",
        "zIndex": 3
    }, {}, {});
    fcdashboardsubheader.setDefaultUnit(kony.flex.DP);
    var lblwccmetrics = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwccmetrics",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblblack160",
        "text": "WCC Dashboard",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcsubhdrlinks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "fcsubhdrlinks",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "right": "0%",
        "skin": "slFbox",
        "top": "50%",
        "width": "26%",
        "zIndex": 1
    }, {}, {});
    fcsubhdrlinks.setDefaultUnit(kony.flex.DP);
    var btnwccdashboard = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtbold113",
        "height": "100%",
        "id": "btnwccdashboard",
        "isVisible": true,
        "left": "1%",
        "skin": "skbtntxtbold113",
        "text": "WCC Dashboard",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fclineseparator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "12dp",
        "id": "fclineseparator",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "isModalContainer": false,
        "right": "5%",
        "skin": "skfcline",
        "top": "18dp",
        "width": "2dp",
        "zIndex": 3
    }, {}, {});
    fclineseparator.setDefaultUnit(kony.flex.DP);
    fclineseparator.add();
    var btnpatientlist = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "height": "100%",
        "id": "btnpatientlist",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_eaf00fc9ca61425689e0e3d5be677fda,
        "skin": "skbtntxtSkyBluebold113",
        "text": "Patient List",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntxtHoverSkyBlueboldUnderline"
    });
    fcsubhdrlinks.add(btnwccdashboard, fclineseparator, btnpatientlist);
    var fcconflictbtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "fcconflictbtn",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "1%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "26%",
        "zIndex": 1
    }, {}, {});
    fcconflictbtn.setDefaultUnit(kony.flex.DP);
    var btnconflict = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "id": "btnconflict",
        "isVisible": false,
        "left": "27%",
        "onClick": AS_Button_7ebcdc7ef16e4daea144c1faa3ecad8b,
        "skin": "skbtntxtSkyBluebold",
        "text": "Conflict of interest statement",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntxtHoverSkyBlueboldUnderline"
    });
    var imgaccept = new kony.ui.Image2({
        "height": "85%",
        "id": "imgaccept",
        "isVisible": false,
        "left": "18%",
        "skin": "slImage",
        "src": "minimundate.png",
        "top": "2dp",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcconflictbtn.add(btnconflict, imgaccept);
    var fcSearchPatient = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcSearchPatient",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "27%",
        "skin": "slFbox",
        "top": "12dp",
        "width": "380dp",
        "zIndex": 2
    }, {}, {});
    fcSearchPatient.setDefaultUnit(kony.flex.DP);
    var lblSearch = new kony.ui.Label({
        "centerY": "60%",
        "id": "lblSearch",
        "isVisible": true,
        "right": "262dp",
        "skin": "sknlblblackbold95",
        "text": "Search Patient:",
        "width": "106dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var tbpatientsearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "tbpatientsearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": null,
        "placeholder": "First Name / Last Name",
        "right": "0%",
        "secureTextEntry": false,
        "skin": "sktb120graybrdr11",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "8dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onEndEditing": AS_TextField_337d2ded58b2411d9dcc071627ad83b5,
        "onKeyUp": AS_TextField_2fdf96ef28fd4ed4be424c92a692ed81
    });
    var fcsearchicon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "55%",
        "clipBounds": true,
        "height": "30dp",
        "id": "fcsearchicon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_e3ad0e5215304390a963b9690e251bfa,
        "right": "10dp",
        "skin": "slFbox",
        "width": "30dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcsearchicon.setDefaultUnit(kony.flex.DP);
    var imgSearchIcon = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "imgSearchIcon",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "search.png",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcsearchicon.add(imgSearchIcon);
    fcSearchPatient.add(lblSearch, tbpatientsearch, fcsearchicon);
    fcdashboardsubheader.add(lblwccmetrics, fcsubhdrlinks, fcconflictbtn, fcSearchPatient);
    var fcbeachnsummary = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "490dp",
        "id": "fcbeachnsummary",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2.00%",
        "isModalContainer": false,
        "skin": "sktransparentBG",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    fcbeachnsummary.setDefaultUnit(kony.flex.DP);
    var fcwccmetrics = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "460dp",
        "id": "fcwccmetrics",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "sknfcwhitebgshadow",
        "top": "10dp",
        "width": "48%",
        "zIndex": 1
    }, {}, {});
    fcwccmetrics.setDefaultUnit(kony.flex.DP);
    var fcwccline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "fcwccline",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "sknfcdividerr",
        "top": "55dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcwccline.setDefaultUnit(kony.flex.DP);
    fcwccline.add();
    var fcwccsegline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "fcwccsegline",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "sknfcdividerr",
        "top": "108dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcwccsegline.setDefaultUnit(kony.flex.DP);
    fcwccsegline.add();
    var lblline = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblline",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblline",
        "top": "449dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbwccmetrics = new kony.ui.ListBox({
        "height": "40dp",
        "id": "lbwccmetrics",
        "isVisible": true,
        "left": "22%",
        "masterData": [
            ["1", "September, 2016"],
            ["2", "October, 2016"],
            ["3", "November, 2016"],
            ["4", "December, 2016"],
            ["5", "January, 2017"],
            ["6", "February, 2017"],
            ["7", "March, 2017"]
        ],
        "onSelection": AS_ListBox_d7d21c0595d04cc8addcc71e46aabc59,
        "onTouchStart": AS_ListBox_c76920cfeff24e51b1ae88c8e3b43909,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "September, 2016"],
        "skin": "sklbgray120",
        "top": "63dp",
        "width": "220dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sklbgrayhover",
        "multiSelect": false
    });
    var lblwccmetricsmonth = new kony.ui.Label({
        "id": "lblwccmetricsmonth",
        "isVisible": true,
        "left": "24dp",
        "skin": "sknstatusblack",
        "text": "Metrics for",
        "top": "72dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNoRecords = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblNoRecords",
        "isVisible": false,
        "skin": "sklbldarkgray120",
        "text": "No records found",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxmetricsheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "flxmetricsheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": 110,
        "width": "100%"
    }, {}, {});
    flxmetricsheader.setDefaultUnit(kony.flex.DP);
    var lblMeasureshdr = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblMeasureshdr",
        "isVisible": true,
        "left": "3%",
        "skin": "sknlblstatuswhite",
        "text": "Measures",
        "width": "57%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblActualhdr = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblActualhdr",
        "isVisible": true,
        "left": "60%",
        "skin": "sknlblstatuswhite",
        "text": "Actual",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTargethdr = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTargethdr",
        "isVisible": true,
        "left": "80%",
        "skin": "sknlblstatuswhite",
        "text": "Plan",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVlineHeader = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVlineHeader",
        "isVisible": false,
        "left": "60%",
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
    var imgVlineHeader2 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVlineHeader2",
        "isVisible": false,
        "left": "80%",
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
    var lblMetricsLine = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblMetricsLine",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHeadLine1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblHeadLine1",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblHeadLine2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblHeadLine2",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxmetricsheader.add(lblMeasureshdr, lblActualhdr, lblTargethdr, imgVlineHeader, imgVlineHeader2, lblMetricsLine, lblHeadLine1, lblHeadLine2);
    var fcmetrics = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcmetrics",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "153dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    fcmetrics.setDefaultUnit(kony.flex.DP);
    var flxmetrics1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxmetrics1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfctrans",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxmetrics1.setDefaultUnit(kony.flex.DP);
    var fcMeasures = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcMeasures",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    fcMeasures.setDefaultUnit(kony.flex.DP);
    var lblmeasures1 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblmeasures1",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "New Patients",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo1.setDefaultUnit(kony.flex.DP);
    var imgInfo1 = new kony.ui.Image2({
        "id": "imgInfo1",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo1.add(imgInfo1);
    fcMeasures.add(lblmeasures1, fcInfo1);
    var lblactual1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual1",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltarget1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltarget1",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine1 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine1",
        "isVisible": true,
        "left": "60%",
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
    var imgVLine2 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine2",
        "isVisible": true,
        "left": "80%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMetricsLine1 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblMetricsLine1",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxmetrics1.add(fcMeasures, lblactual1, lbltarget1, imgVLine1, imgVLine2, lblMetricsLine1);
    var flxmetrics2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxmetrics2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxmetrics2.setDefaultUnit(kony.flex.DP);
    var lblactual2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual2",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltarget2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltarget2",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine3 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine3",
        "isVisible": true,
        "left": "60%",
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
    var imgVLine4 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine4",
        "isVisible": true,
        "left": "80%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMetricsLine2 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblMetricsLine2",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcMeasures2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcMeasures2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 10
    }, {}, {});
    fcMeasures2.setDefaultUnit(kony.flex.DP);
    var lblmeasures2 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblmeasures2",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Wound Care Encounters",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo2.setDefaultUnit(kony.flex.DP);
    var imgInfo2 = new kony.ui.Image2({
        "id": "imgInfo2",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo2.add(imgInfo2);
    fcMeasures2.add(lblmeasures2, fcInfo2);
    flxmetrics2.add(lblactual2, lbltarget2, imgVLine3, imgVLine4, lblMetricsLine2, fcMeasures2);
    var flxmetrics3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxmetrics3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfctrans",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxmetrics3.setDefaultUnit(kony.flex.DP);
    var lblactual3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual3",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltarget3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltarget3",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine5 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine5",
        "isVisible": true,
        "left": "60%",
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
    var imgVLine6 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine6",
        "isVisible": true,
        "left": "80%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMetricsLine3 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblMetricsLine3",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcMeasures3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcMeasures3",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 10
    }, {}, {});
    fcMeasures3.setDefaultUnit(kony.flex.DP);
    var lblmeasures3 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblmeasures3",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Patient Satisfaction",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo3.setDefaultUnit(kony.flex.DP);
    var imgInfo3 = new kony.ui.Image2({
        "id": "imgInfo3",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo3.add(imgInfo3);
    fcMeasures3.add(lblmeasures3, fcInfo3);
    flxmetrics3.add(lblactual3, lbltarget3, imgVLine5, imgVLine6, lblMetricsLine3, fcMeasures3);
    var flxmetrics4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "flxmetrics4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxmetrics4.setDefaultUnit(kony.flex.DP);
    var lblactual4 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual4",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltarget4 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltarget4",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine7 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine7",
        "isVisible": true,
        "left": "60%",
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
    var imgVLine8 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine8",
        "isVisible": true,
        "left": "80%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMetricsLine4 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblMetricsLine4",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcMeasures4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "fcMeasures4",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    fcMeasures4.setDefaultUnit(kony.flex.DP);
    var Label0b6ad78f7cc6f49 = new kony.ui.Label({
        "centerY": "40%",
        "id": "Label0b6ad78f7cc6f49",
        "isVisible": true,
        "left": "110dp",
        "skin": "sklbldarkgray",
        "text": "*",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0d8b6ecf9d0f04b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "55dp",
        "id": "FlexContainer0d8b6ecf9d0f04b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "38%",
        "zIndex": 2
    }, {}, {});
    FlexContainer0d8b6ecf9d0f04b.setDefaultUnit(kony.flex.DP);
    var lblmeasures4 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "40%",
        "id": "lblmeasures4",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Median Days to Heal",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0d70b79cb4a664f = new kony.ui.Label({
        "centerX": "49%",
        "id": "Label0d70b79cb4a664f",
        "isVisible": true,
        "skin": "sklbldarkgray80",
        "text": "(*  - Under Construction)",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0d8b6ecf9d0f04b.add(lblmeasures4, Label0d70b79cb4a664f);
    var fcInfo4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo4.setDefaultUnit(kony.flex.DP);
    var imgInfo4 = new kony.ui.Image2({
        "id": "imgInfo4",
        "isVisible": true,
        "left": "9dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo4.add(imgInfo4);
    fcMeasures4.add(Label0b6ad78f7cc6f49, FlexContainer0d8b6ecf9d0f04b, fcInfo4);
    flxmetrics4.add(lblactual4, lbltarget4, imgVLine7, imgVLine8, lblMetricsLine4, fcMeasures4);
    var flxmetrics5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxmetrics5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfctrans",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxmetrics5.setDefaultUnit(kony.flex.DP);
    var lblactual5 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual5",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltarget5 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltarget5",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine9 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine9",
        "isVisible": true,
        "left": "60%",
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
    var imgVLine10 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine10",
        "isVisible": true,
        "left": "80%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMetricsLine5 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblMetricsLine5",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcMeasures5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcMeasures5",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 2
    }, {}, {});
    fcMeasures5.setDefaultUnit(kony.flex.DP);
    var lblmeasures5 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblmeasures5",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Patient Outlier Rate",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo5.setDefaultUnit(kony.flex.DP);
    var imgInfo5 = new kony.ui.Image2({
        "id": "imgInfo5",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo5.add(imgInfo5);
    fcMeasures5.add(lblmeasures5, fcInfo5);
    flxmetrics5.add(lblactual5, lbltarget5, imgVLine9, imgVLine10, lblMetricsLine5, fcMeasures5);
    var flxmetrics6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxmetrics6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxmetrics6.setDefaultUnit(kony.flex.DP);
    var lblactual6 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual6",
        "isVisible": true,
        "left": "60%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbltarget6 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltarget6",
        "isVisible": true,
        "left": "80%",
        "skin": "sklbldarkgray",
        "text": "Label",
        "width": "19%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgVLine11 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine11",
        "isVisible": true,
        "left": "60%",
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
    var imgVLine12 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgVLine12",
        "isVisible": true,
        "left": "80%",
        "skin": "skImagVseprator",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMetricsLine6 = new kony.ui.Label({
        "bottom": "1dp",
        "height": "1dp",
        "id": "lblMetricsLine6",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcMeasures6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcMeasures6",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 10
    }, {}, {});
    fcMeasures6.setDefaultUnit(kony.flex.DP);
    var lblmeasures6 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblmeasures6",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Healing Rate",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo6.setDefaultUnit(kony.flex.DP);
    var imgInfo6 = new kony.ui.Image2({
        "id": "imgInfo6",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo6.add(imgInfo6);
    fcMeasures6.add(lblmeasures6, fcInfo6);
    flxmetrics6.add(lblactual6, lbltarget6, imgVLine11, imgVLine12, lblMetricsLine6, fcMeasures6);
    fcmetrics.add(flxmetrics1, flxmetrics2, flxmetrics3, flxmetrics4, flxmetrics5, flxmetrics6);
    var fcFacility = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcFacility",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcFacility.setDefaultUnit(kony.flex.DP);
    var fcMetricsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1dp",
        "clipBounds": true,
        "height": "52dp",
        "id": "fcMetricsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "isModalContainer": false,
        "right": "1dp",
        "skin": "skfcnavyblue",
        "top": "2dp",
        "width": "99.50%",
        "zIndex": 2
    }, {}, {});
    fcMetricsHeader.setDefaultUnit(kony.flex.DP);
    var lblwccmetricsheader = new kony.ui.Label({
        "id": "lblwccmetricsheader",
        "isVisible": true,
        "left": "24dp",
        "skin": "sklblwhite125",
        "text": "Center KPIs",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFacility = new kony.ui.Label({
        "id": "lblFacility",
        "isVisible": true,
        "right": "2%",
        "skin": "sklblwhite125",
        "text": "AA002-Downtown",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcMetricsHeader.add(lblwccmetricsheader, lblFacility);
    fcFacility.add(fcMetricsHeader);
    fcwccmetrics.add(fcwccline, fcwccsegline, lblline, lbwccmetrics, lblwccmetricsmonth, lblNoRecords, flxmetricsheader, fcmetrics, fcFacility);
    var fcusermetrics = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "460dp",
        "id": "fcusermetrics",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "isModalContainer": false,
        "skin": "sknfcwhitebgshadow",
        "top": "10dp",
        "width": "48%",
        "zIndex": 1
    }, {}, {});
    fcusermetrics.setDefaultUnit(kony.flex.DP);
    var fcuserline1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "fcuserline1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "sknfcdividerr",
        "top": "55dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcuserline1.setDefaultUnit(kony.flex.DP);
    fcuserline1.add();
    var lblusermetricsmonth = new kony.ui.Label({
        "id": "lblusermetricsmonth",
        "isVisible": true,
        "left": "24dp",
        "skin": "sknstatusblack",
        "text": "Metrics for",
        "top": "72dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcusersegline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "fcusersegline",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "sknfcdividerr",
        "top": "105dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcusersegline.setDefaultUnit(kony.flex.DP);
    fcusersegline.add();
    var lblline1 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "2dp",
        "id": "lblline1",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblline",
        "top": "453dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcmetricsdata = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcmetricsdata",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "110dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    fcmetricsdata.setDefaultUnit(kony.flex.DP);
    var fcheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcheader.setDefaultUnit(kony.flex.DP);
    var lblmeasures = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmeasures",
        "isVisible": true,
        "left": "18.50%",
        "skin": "sknlblstatuswhite",
        "text": "Measures",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblvertline = new kony.ui.Label({
        "centerX": "45%",
        "height": "100%",
        "id": "lblvertline",
        "isVisible": true,
        "skin": "sklbllinewhite",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblactual = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblactual",
        "isVisible": true,
        "left": "70%",
        "skin": "sknlblstatuswhite",
        "text": "Actual",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhrzntalline = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblhrzntalline",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcheader.add(lblmeasures, lblvertline, lblactual, lblhrzntalline);
    var fcrow1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcrow1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrow1.setDefaultUnit(kony.flex.DP);
    var lblvertline1 = new kony.ui.Label({
        "centerX": "45%",
        "height": "100%",
        "id": "lblvertline1",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhrzntalline1 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblhrzntalline1",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblchrvalue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblchrvalue",
        "isVisible": true,
        "left": "70%",
        "skin": "sklbldarkgray",
        "text": "70%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexContainer0b6ecf42e67d643 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "FlexContainer0b6ecf42e67d643",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%",
        "zIndex": 2
    }, {}, {});
    FlexContainer0b6ecf42e67d643.setDefaultUnit(kony.flex.DP);
    var lblchr = new kony.ui.Label({
        "centerX": "45%",
        "centerY": "50%",
        "id": "lblchr",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Comprehensive Healing Rate (CHR)",
        "width": "50%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo7.setDefaultUnit(kony.flex.DP);
    var imgInfo7 = new kony.ui.Image2({
        "id": "imgInfo7",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo7.add(imgInfo7);
    FlexContainer0b6ecf42e67d643.add(lblchr, fcInfo7);
    fcrow1.add(lblvertline1, lblhrzntalline1, lblchrvalue, FlexContainer0b6ecf42e67d643);
    var fcrow2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcrow2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrow2.setDefaultUnit(kony.flex.DP);
    var lblvertline2 = new kony.ui.Label({
        "centerX": "45%",
        "height": "100%",
        "id": "lblvertline2",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhrzntalline2 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblhrzntalline2",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcsummary = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "119dp",
        "id": "fcsummary",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "45.10%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "55%",
        "zIndex": 2
    }, {}, {});
    fcsummary.setDefaultUnit(kony.flex.DP);
    var fchealedwound = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "24dp",
        "id": "fchealedwound",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcwhite",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fchealedwound.setDefaultUnit(kony.flex.DP);
    var lblhealedwound = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhealedwound",
        "isVisible": true,
        "left": "5%",
        "skin": "sklbldarkgray",
        "text": "Healed Wound",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblrowsep1 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblrowsep1",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblverticallinesep1 = new kony.ui.Label({
        "centerX": "75%",
        "height": "100%",
        "id": "lblverticallinesep1",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhealedwoundvalue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhealedwoundvalue",
        "isVisible": true,
        "left": "83%",
        "skin": "sklbldarkgray",
        "text": "30.8%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fchealedwound.add(lblhealedwound, lblrowsep1, lblverticallinesep1, lblhealedwoundvalue);
    var fcnothealedwound = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25dp",
        "id": "fcnothealedwound",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcwhite",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcnothealedwound.setDefaultUnit(kony.flex.DP);
    var lblnothealedwound = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblnothealedwound",
        "isVisible": true,
        "left": "5%",
        "skin": "sklbldarkgray",
        "text": "Not Healed Wound",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblrowsep2 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblrowsep2",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblverticallinesep2 = new kony.ui.Label({
        "centerX": "75%",
        "height": "100%",
        "id": "lblverticallinesep2",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblnothealedwoundvalue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblnothealedwoundvalue",
        "isVisible": true,
        "left": "83%",
        "skin": "sklbldarkgray",
        "text": "69.2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnothealedwound.add(lblnothealedwound, lblrowsep2, lblverticallinesep2, lblnothealedwoundvalue);
    var fcpalliative = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "24dp",
        "id": "fcpalliative",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpalliative.setDefaultUnit(kony.flex.DP);
    var lblpalliative = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblpalliative",
        "isVisible": true,
        "left": "5%",
        "skin": "sklbldarkgray",
        "text": "Advance",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblrowsep3 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblrowsep3",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblverticallinesep3 = new kony.ui.Label({
        "centerX": "75%",
        "height": "100%",
        "id": "lblverticallinesep3",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblpalliativevalue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblpalliativevalue",
        "isVisible": true,
        "left": "83%",
        "skin": "sklbldarkgray",
        "text": "15%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpalliative.add(lblpalliative, lblrowsep3, lblverticallinesep3, lblpalliativevalue);
    var fccomplex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "24dp",
        "id": "fccomplex",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fccomplex.setDefaultUnit(kony.flex.DP);
    var lblcomplex = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblcomplex",
        "isVisible": true,
        "left": "5%",
        "skin": "sklbldarkgray",
        "text": "Complex",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblrowsep4 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblrowsep4",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblverticallinesep4 = new kony.ui.Label({
        "centerX": "75%",
        "height": "100%",
        "id": "lblverticallinesep4",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcomplexvalue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblcomplexvalue",
        "isVisible": true,
        "left": "83%",
        "skin": "sklbldarkgray",
        "text": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fccomplex.add(lblcomplex, lblrowsep4, lblverticallinesep4, lblcomplexvalue);
    var fcadvance = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "23dp",
        "id": "fcadvance",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcadvance.setDefaultUnit(kony.flex.DP);
    var lbladvance = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbladvance",
        "isVisible": true,
        "left": "5%",
        "skin": "sklbldarkgray",
        "text": "Palliative",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblverticallinesep5 = new kony.ui.Label({
        "centerX": "75%",
        "height": "100%",
        "id": "lblverticallinesep5",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbladvancevalue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbladvancevalue",
        "isVisible": true,
        "left": "83%",
        "skin": "sklbldarkgray",
        "text": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadvance.add(lbladvance, lblverticallinesep5, lbladvancevalue);
    fcsummary.add(fchealedwound, fcnothealedwound, fcpalliative, fccomplex, fcadvance);
    var lblhrzntalline3 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblhrzntalline3",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblline",
        "top": "47dp",
        "width": "45%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblcaredesignation = new kony.ui.Label({
        "centerY": "70%",
        "id": "lblcaredesignation",
        "isVisible": false,
        "left": "3%",
        "skin": "sklbldarkgray",
        "text": "Care Designation",
        "top": "75dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo90 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "42%",
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo90",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_Button_750e06c9b2544049907da1b49aa1ebce,
        "skin": "slFbox",
        "top": "70dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo90.setDefaultUnit(kony.flex.DP);
    var imgInfo90 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgInfo90",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "info.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo90.add(imgInfo90);
    var fcMeasures8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcMeasures8",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%",
        "zIndex": 2
    }, {}, {});
    fcMeasures8.setDefaultUnit(kony.flex.DP);
    var lbltreatmentoutcomes = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lbltreatmentoutcomes",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Treatment Outcomes",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo8.setDefaultUnit(kony.flex.DP);
    var imgInfo8 = new kony.ui.Image2({
        "id": "imgInfo8",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo8.add(imgInfo8);
    fcMeasures8.add(lbltreatmentoutcomes, fcInfo8);
    fcrow2.add(lblvertline2, lblhrzntalline2, fcsummary, lblhrzntalline3, lblcaredesignation, fcInfo90, fcMeasures8);
    var fcrow3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcrow3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "-1dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrow3.setDefaultUnit(kony.flex.DP);
    var lblvertline3 = new kony.ui.Label({
        "centerX": "45%",
        "height": "100%",
        "id": "lblvertline3",
        "isVisible": true,
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhrzntalline4 = new kony.ui.Label({
        "bottom": "0dp",
        "height": "1dp",
        "id": "lblhrzntalline4",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhrzntalline6 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblhrzntalline6",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbldebridementratevalue = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldebridementratevalue",
        "isVisible": true,
        "left": "70%",
        "skin": "sklbldarkgray",
        "text": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcMeasures10 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcMeasures10",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%",
        "zIndex": 2
    }, {}, {});
    fcMeasures10.setDefaultUnit(kony.flex.DP);
    var lbldebridementrate = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lbldebridementrate",
        "isVisible": true,
        "skin": "sklbldarkgray",
        "text": "Debridement Rate",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcInfo9 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "fcInfo9",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c34f938f0a7a4b3b9e2468c7c039fb81,
        "skin": "slFbox",
        "top": "10dp",
        "width": "30dp",
        "zIndex": 2
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcInfo9.setDefaultUnit(kony.flex.DP);
    var imgInfo9 = new kony.ui.Image2({
        "id": "imgInfo9",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "infoimage.png",
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcInfo9.add(imgInfo9);
    fcMeasures10.add(lbldebridementrate, fcInfo9);
    fcrow3.add(lblvertline3, lblhrzntalline4, lblhrzntalline6, lbldebridementratevalue, fcMeasures10);
    var fcrow4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcrow4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrow4.setDefaultUnit(kony.flex.DP);
    var lblhrzntalline5 = new kony.ui.Label({
        "bottom": "2dp",
        "height": "1dp",
        "id": "lblhrzntalline5",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnmore = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "id": "btnmore",
        "isVisible": true,
        "onTouchEnd": AS_Button_2e15832337cd4441a4b49c1a91277b4a,
        "right": "3%",
        "skin": "skbtntxtSkyBluebold113",
        "text": "More",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntxtHoverSkyBlueboldUnderline"
    });
    fcrow4.add(lblhrzntalline5, btnmore);
    fcmetricsdata.add(fcheader, fcrow1, fcrow2, fcrow3, fcrow4);
    var lbfocusmetrics = new kony.ui.ListBox({
        "height": "40dp",
        "id": "lbfocusmetrics",
        "isVisible": true,
        "left": "22%",
        "masterData": [
            ["1", "September, 2016"],
            ["2", "October, 2016"],
            ["3", "November, 2016"],
            ["4", "December, 2016"],
            ["5", "January, 2017"],
            ["6", "February, 2017"],
            ["7", "March, 2017"]
        ],
        "onSelection": AS_ListBox_37bc499c2e074582a6acc9d97a2427ed,
        "onTouchStart": AS_ListBox_jdc2ae987ef54144be21fbc76df0a741,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "September, 2016"],
        "skin": "sklbgray120",
        "top": "62dp",
        "width": "220dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sklbgrayhover",
        "multiSelect": false
    });
    var lblnousermetrics = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblnousermetrics",
        "isVisible": false,
        "skin": "sklbldarkgray120",
        "text": "No data found for the given search criteria",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcFocusMetrics = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "56dp",
        "id": "fcFocusMetrics",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcFocusMetrics.setDefaultUnit(kony.flex.DP);
    var fcFocusMetricsHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1dp",
        "clipBounds": true,
        "height": "52dp",
        "id": "fcFocusMetricsHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "isModalContainer": false,
        "right": "1dp",
        "skin": "skfcnavyblue",
        "top": "2dp",
        "width": "99.50%",
        "zIndex": 2
    }, {}, {});
    fcFocusMetricsHeader.setDefaultUnit(kony.flex.DP);
    var lblusermetricsheader = new kony.ui.Label({
        "id": "lblusermetricsheader",
        "isVisible": true,
        "left": "24dp",
        "skin": "sklblwhite125",
        "text": "Physician KPIs",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcFocusMetricsHeader.add(lblusermetricsheader);
    fcFocusMetrics.add(fcFocusMetricsHeader);
    fcusermetrics.add(fcuserline1, lblusermetricsmonth, fcusersegline, lblline1, fcmetricsdata, lbfocusmetrics, lblnousermetrics, fcFocusMetrics);
    fcbeachnsummary.add(fcwccmetrics, fcusermetrics);
    var btnuseracknowledgementKpi = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "height": "50dp",
        "id": "btnuseracknowledgementKpi",
        "isVisible": true,
        "onClick": AS_Button_7d637c6180a7430e89087031ff7452ec,
        "skin": "skbtntxtSkyBluebold113",
        "text": "User Acknowledgement",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntxtHoverSkyBlueboldUnderline"
    });
    var fcempty = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcempty",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfctrans",
        "top": "8dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcempty.setDefaultUnit(kony.flex.DP);
    fcempty.add();
    var fcsearchdropdown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcsearchdropdown",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "maxHeight": "300dp",
        "isModalContainer": false,
        "right": "27%",
        "skin": "sknfcwhitebg",
        "top": "-5dp",
        "width": "260dp",
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
        "onRowClick": AS_Segment_4d28bbf3e7b54852aed8426bf8ce2f70,
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
        "top": "2dp",
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
    fscbody.add(fcdashboardsubheader, fcbeachnsummary, btnuseracknowledgementKpi, fcempty, fcsearchdropdown);
    fscbodyScroll.add(fscbody);
    var kmb0c61b2746e4fa4ae5d29491a5c8f92 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "isMaster": true,
        "id": "fctopmenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "150dp",
        "zIndex": 4,
        "isVisible": true,
        "isModalContainer": false,
        "right": "0dp",
        "skin": "sknfcwhitebg",
        "top": "-1dp"
    }, {}, {});
    kmb0c61b2746e4fa4ae5d29491a5c8f92.setDefaultUnit(kony.flex.DP);
    var kmd03fb77d10d4c018815b1f21a81e194 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_b506a00f659d45068fb460b51eb7d4f5,
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcgray",
        "top": "0dp"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    kmd03fb77d10d4c018815b1f21a81e194.setDefaultUnit(kony.flex.DP);
    var kme383ee436a945ce8a47d88292471fbb = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgsettings",
        "src": "settings.png",
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
    var km6d3aa890a3e4d889fcad3d899cba06d = new kony.ui.Label({
        "id": "lblsettings",
        "text": "Settings",
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
    kmd03fb77d10d4c018815b1f21a81e194.add(kme383ee436a945ce8a47d88292471fbb, km6d3aa890a3e4d889fcad3d899cba06d);
    var km45173c3ebe74f97b050e4e182db880a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_382049925b274009aa1183b92102b17b,
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
    km45173c3ebe74f97b050e4e182db880a.setDefaultUnit(kony.flex.DP);
    var km8e8668bb9ab459b89a19125601b5f34 = new kony.ui.Image2({
        "height": "25dp",
        "id": "imghelp",
        "src": "help.png",
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
    var kmfb868f5ec324c71bae3b7e7fb1c571c = new kony.ui.Label({
        "id": "lblhelp",
        "text": "Help",
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
    km45173c3ebe74f97b050e4e182db880a.add(km8e8668bb9ab459b89a19125601b5f34, kmfb868f5ec324c71bae3b7e7fb1c571c);
    var km6f96e8eaed04acf8dd3d996d4210f20 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_5c6720b9ef324256879da60243ab853d,
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
    km6f96e8eaed04acf8dd3d996d4210f20.setDefaultUnit(kony.flex.DP);
    var km8ac81d15b1547868b9b837bd6d3f42c = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgreports",
        "src": "facilitysmall.png",
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
    var km0fa6816c02c460a856672e287333f01 = new kony.ui.Label({
        "id": "lblreports",
        "text": "Switch Facility",
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
    km6f96e8eaed04acf8dd3d996d4210f20.add(km8ac81d15b1547868b9b837bd6d3f42c, km0fa6816c02c460a856672e287333f01);
    var km01fa3550f0741568404ef73c982fe39 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_b5f1aa08fd0b4b1792d0d0376c8a25de,
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
    km01fa3550f0741568404ef73c982fe39.setDefaultUnit(kony.flex.DP);
    var kmb303e0adae3457eae1675f2c8eb83bb = new kony.ui.Image2({
        "height": "25dp",
        "id": "imgsignout",
        "src": "logout.png",
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
    var kmb3ea6269e0f43ec935936bfdc445143 = new kony.ui.Label({
        "id": "lblsignout",
        "text": "Logout",
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
    var km7846e0b51b5475aaa4d3aad88f0c972 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblmenuline",
        "textStyle": {},
        "width": "100%",
        "zIndex": 3,
        "bottom": "1dp",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknlblline"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km01fa3550f0741568404ef73c982fe39.add(kmb303e0adae3457eae1675f2c8eb83bb, kmb3ea6269e0f43ec935936bfdc445143, km7846e0b51b5475aaa4d3aad88f0c972);
    kmb0c61b2746e4fa4ae5d29491a5c8f92.add(kmd03fb77d10d4c018815b1f21a81e194, km45173c3ebe74f97b050e4e182db880a, km6f96e8eaed04acf8dd3d996d4210f20, km01fa3550f0741568404ef73c982fe39);
    fscmainbody.add(fcbodyheader, fscsidemenu, fscbodyScroll, kmb0c61b2746e4fa4ae5d29491a5c8f92);
    var km173c1184a354bde9e26147d2fdac2fe = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "40dp",
        "id": "fcmstfooter",
        "layoutType": kony.flex.FREE_FORM,
        "top": "11.50%",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcGrayBg"
    }, {}, {});
    km173c1184a354bde9e26147d2fdac2fe.setDefaultUnit(kony.flex.DP);
    var km74354a4388e416b985097850e9ce147 = new kony.ui.RichText({
        "id": "rcfooter",
        "text": "&copy; All Rights Reserved.",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1,
        "centerY": "50%",
        "isVisible": true,
        "left": "40dp",
        "skin": "skrcfooter"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km173c1184a354bde9e26147d2fdac2fe.add(km74354a4388e416b985097850e9ce147);
    frmWCCDashboard.add(kmcea3f5fff95436c935bb083a51b67fb, fscmainbody, km173c1184a354bde9e26147d2fdac2fe);
};

function frmWCCDashboardGlobals() {
    frmWCCDashboard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmWCCDashboard,
        "enabledForIdleTimeout": true,
        "id": "frmWCCDashboard",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onHide": AS_Form_2bac9521333f4ed08506bc14196b1da2,
        "onTouchEnd": AS_Form_298740b8e8794340a565cf6e0609e90e,
        "postShow": AS_Form_9c2afef232ce4398bb1674879449f646,
        "skin": "skfrmgray"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};