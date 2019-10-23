function addWidgetsfrmAdmin() {
    frmAdmin.setDefaultUnit(kony.flex.DP);
    var km5bdbe74ce994fbe990f0786389898e2 = new kony.ui.FlexContainer({
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
    km5bdbe74ce994fbe990f0786389898e2.setDefaultUnit(kony.flex.DP);
    var km7e7255ceeb7404ba8b5c2a9854c19c4 = new kony.ui.FlexContainer({
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
    km7e7255ceeb7404ba8b5c2a9854c19c4.setDefaultUnit(kony.flex.DP);
    var kmbfc22ccea254b18a35decf671c602d7 = new kony.ui.Image2({
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
    var kmd8091ee40ea4f9db14a49d7934e91b9 = new kony.ui.FlexContainer({
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
    kmd8091ee40ea4f9db14a49d7934e91b9.setDefaultUnit(kony.flex.DP);
    kmd8091ee40ea4f9db14a49d7934e91b9.add();
    var km00aa2de21474466b863094e6f03a190 = new kony.ui.Label({
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
    var km18193a11935412caa24b3ea4cf78a6a = new kony.ui.RichText({
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
    km7e7255ceeb7404ba8b5c2a9854c19c4.add(kmbfc22ccea254b18a35decf671c602d7, kmd8091ee40ea4f9db14a49d7934e91b9, km00aa2de21474466b863094e6f03a190, km18193a11935412caa24b3ea4cf78a6a);
    var km1099cc750004f59afbf98589328ed08 = new kony.ui.FlexContainer({
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
    km1099cc750004f59afbf98589328ed08.setDefaultUnit(kony.flex.DP);
    var kmb50702175524323924dd7b42af1b9d3 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcuserinfo",
        "layoutType": kony.flex.FREE_FORM,
        "left": "11%",
        "width": "49%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0dp"
    }, {}, {});
    kmb50702175524323924dd7b42af1b9d3.setDefaultUnit(kony.flex.DP);
    var km56f3fd5effd407aac0d010d006bdf98 = new kony.ui.Image2({
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
    var km71bdcaedd014bc480a05a8d5f906b2f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fcusername",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "78%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "isVisible": true,
        "left": "60dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%"
    }, {}, {});
    km71bdcaedd014bc480a05a8d5f906b2f.setDefaultUnit(kony.flex.DP);
    var km1fcb094d2034b8897f2a5ebc502b7bc = new kony.ui.RichText({
        "height": "18dp",
        "id": "rchwelcome",
        "text": "Welcome <b> James </b>\n",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0%",
        "skin": "sknrchgray95",
        "top": "8dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmc84b68172d84999bba5e11b23799654 = new kony.ui.RichText({
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
    var kmb76771e248a4a278badbbc2a3f04553 = new kony.ui.RichText({
        "id": "rchfacility",
        "text": "Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility ",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0%",
        "skin": "sknrchgray95",
        "top": "2dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km71bdcaedd014bc480a05a8d5f906b2f.add(km1fcb094d2034b8897f2a5ebc502b7bc, kmc84b68172d84999bba5e11b23799654, kmb76771e248a4a278badbbc2a3f04553);
    kmb50702175524323924dd7b42af1b9d3.add(km56f3fd5effd407aac0d010d006bdf98, km71bdcaedd014bc480a05a8d5f906b2f);
    var km162431fdb804b80a1f6419ae1e062e8 = new kony.ui.FlexContainer({
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
    km162431fdb804b80a1f6419ae1e062e8.setDefaultUnit(kony.flex.DP);
    var kmbb73cce49254e03b630e2f4691be475 = new kony.ui.FlexContainer({
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
    kmbb73cce49254e03b630e2f4691be475.setDefaultUnit(kony.flex.DP);
    kmbb73cce49254e03b630e2f4691be475.add();
    var kmadb402f055445afb079f569c9c11956 = new kony.ui.Image2({
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
    var km886c76f95e64902aa1a261bdd66ace5 = new kony.ui.Label({
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
    var km373d6cd8ae8489185ec565fcfa09201 = new kony.ui.Label({
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
    km162431fdb804b80a1f6419ae1e062e8.add(kmbb73cce49254e03b630e2f4691be475, kmadb402f055445afb079f569c9c11956, km886c76f95e64902aa1a261bdd66ace5, km373d6cd8ae8489185ec565fcfa09201);
    var km05828143921408a9f184088bdaf098a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_d113805ab5ae4722b3126cc5e38a1a8b,
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
    km05828143921408a9f184088bdaf098a.setDefaultUnit(kony.flex.DP);
    var kme06a2fb93824561875b4d28e89ffae0 = new kony.ui.Image2({
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
    var kmd09730a77f14e6a8b5fd444ca3c7cfd = new kony.ui.FlexContainer({
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
    kmd09730a77f14e6a8b5fd444ca3c7cfd.setDefaultUnit(kony.flex.DP);
    var kmb9c6a811aaf4df39b90f2fb6fde61f0 = new kony.ui.Label({
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
    kmd09730a77f14e6a8b5fd444ca3c7cfd.add(kmb9c6a811aaf4df39b90f2fb6fde61f0);
    km05828143921408a9f184088bdaf098a.add(kme06a2fb93824561875b4d28e89ffae0, kmd09730a77f14e6a8b5fd444ca3c7cfd);
    var kmfeec3d930ca4fa4bed6554604b8a003 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_725f48ced9dc4ca99fd9529b576edcc8,
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
    kmfeec3d930ca4fa4bed6554604b8a003.setDefaultUnit(kony.flex.DP);
    var km4d7c6fd4b58480ab6fcfd29a9f9f12a = new kony.ui.Image2({
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
    kmfeec3d930ca4fa4bed6554604b8a003.add(km4d7c6fd4b58480ab6fcfd29a9f9f12a);
    km1099cc750004f59afbf98589328ed08.add(kmb50702175524323924dd7b42af1b9d3, km162431fdb804b80a1f6419ae1e062e8, km05828143921408a9f184088bdaf098a, kmfeec3d930ca4fa4bed6554604b8a003);
    var km8a5a7b29f1447a6b0e04ffb1d166393 = new kony.ui.FlexContainer({
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
    km8a5a7b29f1447a6b0e04ffb1d166393.setDefaultUnit(kony.flex.DP);
    var km4e23cc4d6cf46ccaac142abb446d91b = new kony.ui.Label({
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
    km8a5a7b29f1447a6b0e04ffb1d166393.add(km4e23cc4d6cf46ccaac142abb446d91b);
    km5bdbe74ce994fbe990f0786389898e2.add(km7e7255ceeb7404ba8b5c2a9854c19c4, km1099cc750004f59afbf98589328ed08, km8a5a7b29f1447a6b0e04ffb1d166393);
    var fcmainbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcmainbody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcmainbody.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_Button_d05a730a100f45fd8cb9122a91a94ba5,
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
        "onClick": AS_Button_5244d913f8c84c39bbcac973099a9f82,
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
    var lblhdrsubtitle2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrsubtitle2",
        "isVisible": true,
        "left": "5%",
        "skin": "sknlblstatuswhite",
        "text": "Administration",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcbreadcrumb.add(btnhome, lbltitlesep1, lblhdrsubtitle2);
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
        "onClick": AS_FlexContainer_906fa4c3669f4d17865168d3b825b6a0,
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
    var km0ae11f3de5744ed815bc187b474ab90 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "isMaster": true,
        "id": "fcmenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "top": "0dp",
        "width": "200dp",
        "isVisible": true,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    km0ae11f3de5744ed815bc187b474ab90.setDefaultUnit(kony.flex.DP);
    var km1e07bb006874df181083fd4e1dd52a6 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "54dp",
        "id": "fcmenuitemone",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km1e07bb006874df181083fd4e1dd52a6.setDefaultUnit(kony.flex.DP);
    var kmc6068a2a0744517b45b7db391444f8c = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "left": 0,
        "onClick": AS_Button_ce119eb7ea38462897992fe82237a607,
        "text": "Button",
        "top": 0,
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnsmwcccfocus",
        "isVisible": true,
        "skin": "skbtnsmwcc"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skWccbtnHover"
    });
    km1e07bb006874df181083fd4e1dd52a6.add(kmc6068a2a0744517b45b7db391444f8c);
    var km499afa2b7ec46b19d53111cfbfa2966 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenuitemtwo",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km499afa2b7ec46b19d53111cfbfa2966.setDefaultUnit(kony.flex.DP);
    var km8f7400b143a4e51bd8ce27a3ea57a2f = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "left": "0dp",
        "onClick": AS_Button_56276de70b8e479d97120879b5b08748,
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnpatientsafetyfocus",
        "isVisible": true,
        "skin": "skbtnpatientsafety"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnMenuHuddleHover"
    });
    km499afa2b7ec46b19d53111cfbfa2966.add(km8f7400b143a4e51bd8ce27a3ea57a2f);
    var km1d3aea5365e4c61bad947226f058c11 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenuitemthree",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km1d3aea5365e4c61bad947226f058c11.setDefaultUnit(kony.flex.DP);
    var km0b0f52a6c39417e8b6b8d593ceb2a4c = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmhbo",
        "left": "0dp",
        "onClick": AS_Button_h3289854061445689d8427b00bb736d4,
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnhbofocus",
        "isVisible": true,
        "skin": "skbtnhbo"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skmenubtnHbohover"
    });
    km1d3aea5365e4c61bad947226f058c11.add(km0b0f52a6c39417e8b6b8d593ceb2a4c);
    var kmcc1b4b5ba3a49d582f56f1dbd36f483 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenufour",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    kmcc1b4b5ba3a49d582f56f1dbd36f483.setDefaultUnit(kony.flex.DP);
    var kmbf8ee2bbc144b368fc90d4e93f51a53 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmadministration",
        "left": "0dp",
        "onClick": AS_Button_9bcd1c341bc24a5090e8965f00279887,
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnadministrationfocus",
        "isVisible": true,
        "skin": "skbtnadministration"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnadministrationhover"
    });
    kmcc1b4b5ba3a49d582f56f1dbd36f483.add(kmbf8ee2bbc144b368fc90d4e93f51a53);
    var kmab2674954f84d6497d294621cc641d5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenufive",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    kmab2674954f84d6497d294621cc641d5.setDefaultUnit(kony.flex.DP);
    var km460c4ca9a0848a6b592f9ab524a41c1 = new kony.ui.Button({
        "height": "64dp",
        "id": "skbtnphotomobile",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "sknphotomobilefocus",
        "isVisible": true,
        "skin": "sknphotomobile"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknphotomobilehover"
    });
    kmab2674954f84d6497d294621cc641d5.add(km460c4ca9a0848a6b592f9ab524a41c1);
    var km1ecb73edda14f649aa25caea50b1dc6 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenusix",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km1ecb73edda14f649aa25caea50b1dc6.setDefaultUnit(kony.flex.DP);
    var kmb30d6d6ba644986937439cc2c2872c2 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmbilling",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnbillingfocus",
        "isVisible": true,
        "skin": "skbtnbilling"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnbillinghover"
    });
    km1ecb73edda14f649aa25caea50b1dc6.add(kmb30d6d6ba644986937439cc2c2872c2);
    var kmdc3fb5342b94024baafa89e5ec8371d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "57dp",
        "id": "fcmenseven",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    kmdc3fb5342b94024baafa89e5ec8371d.setDefaultUnit(kony.flex.DP);
    var km0fac0f9b6fa4f36bbb40677f7635f8b = new kony.ui.Button({
        "height": "64dp",
        "id": "btnregistration",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnregistrationfocus",
        "isVisible": true,
        "skin": "skbtnregistration"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnregistrationhover"
    });
    kmdc3fb5342b94024baafa89e5ec8371d.add(km0fac0f9b6fa4f36bbb40677f7635f8b);
    var km10ab4eea11e4444bcd4a0c6b3bb1fe3 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "52dp",
        "id": "fcmenueight",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km10ab4eea11e4444bcd4a0c6b3bb1fe3.setDefaultUnit(kony.flex.DP);
    var km0795d04e6d24b2eb0b8254f4870c00a = new kony.ui.Button({
        "height": "64dp",
        "id": "btnsmcommunity",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtncommunityfocus",
        "isVisible": true,
        "skin": "skbtncommunity"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtncommunityhover"
    });
    km10ab4eea11e4444bcd4a0c6b3bb1fe3.add(km0795d04e6d24b2eb0b8254f4870c00a);
    var km7288231247a4b768fa3734ae5a07194 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenunine",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km7288231247a4b768fa3734ae5a07194.setDefaultUnit(kony.flex.DP);
    var km08ec290186c4ed48362890e0ea9c5b4 = new kony.ui.Button({
        "height": "64dp",
        "id": "btnscheduling",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnschedulingfocus",
        "isVisible": true,
        "skin": "skbtnscheduling"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnschedulinghover"
    });
    km7288231247a4b768fa3734ae5a07194.add(km08ec290186c4ed48362890e0ea9c5b4);
    var km7706fd17b4945ca9235de74a6c2c836 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenuten",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km7706fd17b4945ca9235de74a6c2c836.setDefaultUnit(kony.flex.DP);
    var km1c598e6ff0e47f0b6df66c86970d1d6 = new kony.ui.Button({
        "height": "64dp",
        "id": "btnprocedures",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnproceduresfocus",
        "isVisible": true,
        "skin": "skbtnprocedures"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnprocedureshover"
    });
    km7706fd17b4945ca9235de74a6c2c836.add(km1c598e6ff0e47f0b6df66c86970d1d6);
    var kme40ceac12b3489f80cf80ca5a53b0a5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenueleven",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    kme40ceac12b3489f80cf80ca5a53b0a5.setDefaultUnit(kony.flex.DP);
    var kmcac55e8a1f24f7a98bfcf490218778e = new kony.ui.Button({
        "height": "64dp",
        "id": "btndme",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtndmefocus",
        "isVisible": true,
        "skin": "skbtndme"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtndmehover"
    });
    kme40ceac12b3489f80cf80ca5a53b0a5.add(kmcac55e8a1f24f7a98bfcf490218778e);
    var km77f048fe6ff4679abac7303e826704f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "64dp",
        "id": "fcmenutweleve",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100.00%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "isModalContainer": false,
        "skin": "sknfcdividergray"
    }, {}, {});
    km77f048fe6ff4679abac7303e826704f.setDefaultUnit(kony.flex.DP);
    var km12ac7381a584fe0bcff830fa1bbc9e6 = new kony.ui.Button({
        "height": "64dp",
        "id": "btnspotfire",
        "left": "0dp",
        "text": "Button",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "focusSkin": "skbtnspotfirefocus",
        "isVisible": true,
        "skin": "skbtnspotfire"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnspotfirehover"
    });
    km77f048fe6ff4679abac7303e826704f.add(km12ac7381a584fe0bcff830fa1bbc9e6);
    km0ae11f3de5744ed815bc187b474ab90.add(km1e07bb006874df181083fd4e1dd52a6, km499afa2b7ec46b19d53111cfbfa2966, km1d3aea5365e4c61bad947226f058c11, kmcc1b4b5ba3a49d582f56f1dbd36f483, kmab2674954f84d6497d294621cc641d5, km1ecb73edda14f649aa25caea50b1dc6, kmdc3fb5342b94024baafa89e5ec8371d, km10ab4eea11e4444bcd4a0c6b3bb1fe3, km7288231247a4b768fa3734ae5a07194, km7706fd17b4945ca9235de74a6c2c836, kme40ceac12b3489f80cf80ca5a53b0a5, km77f048fe6ff4679abac7303e826704f);
    fscsidemenu.add(km0ae11f3de5744ed815bc187b474ab90);
    var fscbodyScroll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": 1,
        "bounces": true,
        "clipBounds": true,
        "contentSize": {
            "width": "100%"
        },
        "enableScrolling": true,
        "height": "700dp",
        "horizontalScrollIndicator": true,
        "id": "fscbodyScroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "right": "1dp",
        "scrollDirection": kony.flex.SCROLL_BOTH,
        "top": "50dp",
        "verticalScrollIndicator": true,
        "zIndex": 3
    }, {}, {});
    fscbodyScroll.setDefaultUnit(kony.flex.DP);
    var fscbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "98%",
        "id": "fscbody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10dp",
        "isModalContainer": false,
        "right": "10dp",
        "skin": "skfcwhitegraybdr",
        "top": "20dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    fscbody.setDefaultUnit(kony.flex.DP);
    var fcdashboardsubheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcdashboardsubheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcnavyblue",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcdashboardsubheader.setDefaultUnit(kony.flex.DP);
    var lblline = new kony.ui.Label({
        "bottom": "1dp",
        "height": "1dp",
        "id": "lblline",
        "isVisible": false,
        "left": "0dp",
        "right": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "top": "46dp",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbladminheader = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbladminheader",
        "isVisible": true,
        "left": "25dp",
        "skin": "sklblwhite125bold",
        "text": "Administration",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdashboardsubheader.add(lblline, lbladminheader);
    var fcadminsearch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcadminsearch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcadminsearch.setDefaultUnit(kony.flex.DP);
    var lbadminsearchby = new kony.ui.ListBox({
        "height": "40dp",
        "id": "lbadminsearchby",
        "isVisible": false,
        "left": "2%",
        "masterData": [
            ["1", "Search by"],
            ["2", "Facility ID"],
            ["3", "Facility Name"],
            ["4", "Bluebook ID"]
        ],
        "onSelection": AS_ListBox_c26e96ccaf8b4fa2b80a47a753d0aac3,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Search by"],
        "skin": "sklbgray120",
        "top": "6dp",
        "width": "260dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sklbgrayhover",
        "multiSelect": false
    });
    var tbadminsearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sktb120graybgblueborder",
        "height": "40dp",
        "id": "tbadminsearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "24%",
        "placeholder": "Search",
        "secureTextEntry": false,
        "skin": "skntxtbxrounded",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "6dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 2, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onEndEditing": AS_TextField_2689ba0168f54d098c5bec48008aa25c,
        "onKeyUp": AS_TextField_f6739110ccc34848a5740e027c24fa15
    });
    var btnadminsearch = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "height": "40dp",
        "id": "btnadminsearch",
        "isVisible": true,
        "left": "47%",
        "onClick": AS_Button_a4439baa4d3e4af4ad00ac37f3b005c3,
        "skin": "sknbtnbluebg",
        "text": "Search",
        "top": "6dp",
        "width": "80dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var fcadminsearchimg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "20dp",
        "id": "fcadminsearchimg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "42%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_991cbf34aed04df3804768ebaae446dd,
        "skin": "slFbox",
        "width": "20dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcadminsearchimg.setDefaultUnit(kony.flex.DP);
    var adminsearchimg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "100%",
        "id": "adminsearchimg",
        "imageWhileDownloading": "search.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "search.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadminsearchimg.add(adminsearchimg);
    var fcadminsearchby = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "fcadminsearchby",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_f3e8ddbf9b2248d1b3a7e6484dfd19f3,
        "skin": "skfcadminsearchby",
        "top": "6dp",
        "width": "20%",
        "zIndex": 3
    }, {}, {});
    fcadminsearchby.setDefaultUnit(kony.flex.DP);
    var lbadminsearchbynew = new kony.ui.Label({
        "height": "95%",
        "id": "lbadminsearchbynew",
        "isVisible": true,
        "left": "4%",
        "skin": "sklbadminsearchbynew",
        "text": "Search by ",
        "top": "0dp",
        "width": "86%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgadminsearchbynew = new kony.ui.Image2({
        "height": "95%",
        "id": "imgadminsearchbynew",
        "imageWhenFailed": "headerarrow.png",
        "imageWhileDownloading": "headerarrow.png",
        "isVisible": true,
        "left": "90%",
        "skin": "slImage",
        "src": "headerarrow.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadminsearchby.add(lbadminsearchbynew, imgadminsearchbynew);
    var fcadminsearchbypopup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "fcadminsearchbypopup",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_e19b61fcf8904e9cb6fb84bc7cfb17cc,
        "skin": "skfcadminsearchbypopup",
        "top": "6dp",
        "width": "261px",
        "zIndex": 3
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcadminsearchbypopup.setDefaultUnit(kony.flex.DP);
    var lbadminsearchbydropdown = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbadminsearchbydropdown",
        "isVisible": true,
        "left": "4%",
        "skin": "sklbadminsearchbydropdown",
        "text": "Search by",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgadminsearchbydropdown = new kony.ui.Image2({
        "centerY": "50%",
        "height": "60%",
        "id": "imgadminsearchbydropdown",
        "imageWhenFailed": "headerarrow.png",
        "imageWhileDownloading": "headerarrow.png",
        "isVisible": true,
        "left": "86%",
        "skin": "slImage",
        "src": "headerarrow.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadminsearchbypopup.add(lbadminsearchbydropdown, imgadminsearchbydropdown);
    fcadminsearch.add(lbadminsearchby, tbadminsearch, btnadminsearch, fcadminsearchimg, fcadminsearchby, fcadminsearchbypopup);
    var fcalphabets = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "32dp",
        "id": "fcalphabets",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "isModalContainer": false,
        "right": "22%",
        "skin": "skfcwhitegraybdr",
        "top": "10dp",
        "width": "867dp",
        "zIndex": 3
    }, {}, {});
    fcalphabets.setDefaultUnit(kony.flex.DP);
    var lbline = new kony.ui.Label({
        "bottom": "0dp",
        "height": "2dp",
        "id": "lbline",
        "isVisible": true,
        "left": "0%",
        "right": "0%",
        "skin": "sklblline",
        "top": "28dp",
        "width": "100%",
        "zIndex": 4
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetall = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtnwhitebgblack85",
        "height": "32dp",
        "id": "btnalphabetall",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_9cee48648c964493afe6f59868574a3e,
        "skin": "sknbtnwhitebgblack85",
        "text": "All",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lbllineall = new kony.ui.Label({
        "height": "100%",
        "id": "lbllineall",
        "isVisible": true,
        "left": "32dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabeta = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabeta",
        "isVisible": true,
        "left": "33dp",
        "onClick": AS_Button_d85d4b6e6532424aad9b3403b344ac97,
        "skin": "sknbtntransbgblue85",
        "text": "A",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinea = new kony.ui.Label({
        "height": "100%",
        "id": "lblinea",
        "isVisible": true,
        "left": "65dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetb = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetb",
        "isVisible": true,
        "left": "66dp",
        "onClick": AS_Button_3494a848131d422f96542e1d6e57bce8,
        "skin": "sknbtntransbgblue85",
        "text": "B",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblineb = new kony.ui.Label({
        "height": "100%",
        "id": "lblineb",
        "isVisible": true,
        "left": "97dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetc = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetc",
        "isVisible": true,
        "left": "97dp",
        "onClick": AS_Button_d485538c2a7445a385d6fb50005412da,
        "skin": "sknbtntransbgblue85",
        "text": "C",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinec = new kony.ui.Label({
        "height": "100%",
        "id": "lblinec",
        "isVisible": true,
        "left": "129dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetd = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetd",
        "isVisible": true,
        "left": "129dp",
        "onClick": AS_Button_06701fc61e774bf79d04423965852795,
        "skin": "sknbtntransbgblue85",
        "text": "D",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lbllined = new kony.ui.Label({
        "height": "100%",
        "id": "lbllined",
        "isVisible": true,
        "left": "161dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabete = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabete",
        "isVisible": true,
        "left": "161dp",
        "onClick": AS_Button_717905db347f49c39ce6838f4fa4c2a6,
        "skin": "sknbtntransbgblue85",
        "text": "E",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinee = new kony.ui.Label({
        "height": "100%",
        "id": "lblinee",
        "isVisible": true,
        "left": "193dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetf = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetf",
        "isVisible": true,
        "left": "193dp",
        "onClick": AS_Button_580a85eaf36e4e3e845a7ba813240317,
        "skin": "sknbtntransbgblue85",
        "text": "F",
        "top": "0dp",
        "width": "33dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinef = new kony.ui.Label({
        "height": "100%",
        "id": "lblinef",
        "isVisible": true,
        "left": "225dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetg = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetg",
        "isVisible": true,
        "left": "225dp",
        "onClick": AS_Button_a12b8d906f7f473495749a6a87cc5b7d,
        "skin": "sknbtntransbgblue85",
        "text": "G",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblineg = new kony.ui.Label({
        "height": "100%",
        "id": "lblineg",
        "isVisible": true,
        "left": "257dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabeth = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabeth",
        "isVisible": true,
        "left": "257dp",
        "onClick": AS_Button_bea1e240bdda4ff5a95fdea97d6ccb62,
        "skin": "sknbtntransbgblue85",
        "text": "H",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblineh = new kony.ui.Label({
        "height": "100%",
        "id": "lblineh",
        "isVisible": true,
        "left": "289dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabeti = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabeti",
        "isVisible": true,
        "left": "289dp",
        "onClick": AS_Button_9cfcd273396c40df99415079fcdf0154,
        "skin": "sknbtntransbgblue85",
        "text": "I",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinei = new kony.ui.Label({
        "height": "100%",
        "id": "lblinei",
        "isVisible": true,
        "left": "321dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetj = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetj",
        "isVisible": true,
        "left": "321dp",
        "onClick": AS_Button_229d3f15aac24399a77e03d376920ec1,
        "skin": "sknbtntransbgblue85",
        "text": "J",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinej = new kony.ui.Label({
        "height": "100%",
        "id": "lblinej",
        "isVisible": true,
        "left": "353dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetk = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetk",
        "isVisible": true,
        "left": "353dp",
        "onClick": AS_Button_85711641ebed4825bff7fbe07c2dbbf7,
        "skin": "sknbtntransbgblue85",
        "text": "K",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinek = new kony.ui.Label({
        "height": "100%",
        "id": "lblinek",
        "isVisible": true,
        "left": "385dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetl = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetl",
        "isVisible": true,
        "left": "385dp",
        "onClick": AS_Button_fb8dc062795143c491e68427adfc5f1a,
        "skin": "sknbtntransbgblue85",
        "text": "L",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinel = new kony.ui.Label({
        "height": "100%",
        "id": "lblinel",
        "isVisible": true,
        "left": "417dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetm = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetm",
        "isVisible": true,
        "left": "417dp",
        "onClick": AS_Button_b0d9580affb64ff8b9c906fa3fbc30fe,
        "skin": "sknbtntransbgblue85",
        "text": "M",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinem = new kony.ui.Label({
        "height": "100%",
        "id": "lblinem",
        "isVisible": true,
        "left": "449dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetn = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetn",
        "isVisible": true,
        "left": "449dp",
        "onClick": AS_Button_4b680f0625ed4831b400918dc02d3418,
        "skin": "sknbtntransbgblue85",
        "text": "N",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinen = new kony.ui.Label({
        "height": "100%",
        "id": "lblinen",
        "isVisible": true,
        "left": "481dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabeto = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabeto",
        "isVisible": true,
        "left": "481dp",
        "onClick": AS_Button_6fbdc408371042eba8fb702f01a336dd,
        "skin": "sknbtntransbgblue85",
        "text": "O",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblineno = new kony.ui.Label({
        "height": "100%",
        "id": "lblineno",
        "isVisible": true,
        "left": "513dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetp = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetp",
        "isVisible": true,
        "left": "513dp",
        "onClick": AS_Button_9c4b0c40a9404d29a41dc81f5fc74e90,
        "skin": "sknbtntransbgblue85",
        "text": "P",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinenp = new kony.ui.Label({
        "height": "100%",
        "id": "lblinenp",
        "isVisible": true,
        "left": "545dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetq = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetq",
        "isVisible": true,
        "left": "545dp",
        "onClick": AS_Button_26926c44588d4220ad214637971d2f81,
        "skin": "sknbtntransbgblue85",
        "text": "Q",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinenq = new kony.ui.Label({
        "height": "100%",
        "id": "lblinenq",
        "isVisible": true,
        "left": "577dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetr = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetr",
        "isVisible": true,
        "left": "577dp",
        "onClick": AS_Button_441e0129af3c4657a6d0e663a8dbc9e9,
        "skin": "sknbtntransbgblue85",
        "text": "R",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinenr = new kony.ui.Label({
        "height": "100%",
        "id": "lblinenr",
        "isVisible": true,
        "left": "609dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabets = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabets",
        "isVisible": true,
        "left": "609dp",
        "onClick": AS_Button_856a3b1c63e840b0a8e8948d02efadde,
        "skin": "sknbtntransbgblue85",
        "text": "S",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinens = new kony.ui.Label({
        "height": "100%",
        "id": "lblinens",
        "isVisible": true,
        "left": "641dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabett = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabett",
        "isVisible": true,
        "left": "641dp",
        "onClick": AS_Button_799fc7e4fc2b438889af0b7fce954840,
        "skin": "sknbtntransbgblue85",
        "text": "T",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinet = new kony.ui.Label({
        "height": "100%",
        "id": "lblinet",
        "isVisible": true,
        "left": "673dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetu = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetu",
        "isVisible": true,
        "left": "673dp",
        "onClick": AS_Button_ff5ee11d61c3401fbfe755e22be02611,
        "skin": "sknbtntransbgblue85",
        "text": "U",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblineu = new kony.ui.Label({
        "height": "100%",
        "id": "lblineu",
        "isVisible": true,
        "left": "705dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetv = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetv",
        "isVisible": true,
        "left": "705dp",
        "onClick": AS_Button_58f753f2e4424912b5581e00e88bf62c,
        "skin": "sknbtntransbgblue85",
        "text": "V",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinev = new kony.ui.Label({
        "height": "100%",
        "id": "lblinev",
        "isVisible": true,
        "left": "737dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetw = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetw",
        "isVisible": true,
        "left": "737dp",
        "onClick": AS_Button_0d1bcc892cc243bf811a783ee8ccf0c8,
        "skin": "sknbtntransbgblue85",
        "text": "W",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinew = new kony.ui.Label({
        "height": "100%",
        "id": "lblinew",
        "isVisible": true,
        "left": "769dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetx = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetx",
        "isVisible": true,
        "left": "769dp",
        "onClick": AS_Button_86110813593346318551eb2ccf76a4e5,
        "skin": "sknbtntransbgblue85",
        "text": "X",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lblinex = new kony.ui.Label({
        "height": "100%",
        "id": "lblinex",
        "isVisible": true,
        "left": "801dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabety = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabety",
        "isVisible": true,
        "left": "801dp",
        "onClick": AS_Button_bed8b8226abd48d3b24aff4b3e0b38ef,
        "skin": "sknbtntransbgblue85",
        "text": "Y",
        "top": "0dp",
        "width": "33dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var lbliney = new kony.ui.Label({
        "height": "100%",
        "id": "lbliney",
        "isVisible": true,
        "left": "832dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnalphabetz = new kony.ui.Button({
        "bottom": "1dp",
        "focusSkin": "sknbtngraybgrnd",
        "height": "32dp",
        "id": "btnalphabetz",
        "isVisible": true,
        "left": "832dp",
        "onClick": AS_Button_450cfe81e5bc415a86c3f9523568c0cb,
        "skin": "sknbtntransbgblue85",
        "text": "Z",
        "top": "0dp",
        "width": "32dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    fcalphabets.add(lbline, btnalphabetall, lbllineall, btnalphabeta, lblinea, btnalphabetb, lblineb, btnalphabetc, lblinec, btnalphabetd, lbllined, btnalphabete, lblinee, btnalphabetf, lblinef, btnalphabetg, lblineg, btnalphabeth, lblineh, btnalphabeti, lblinei, btnalphabetj, lblinej, btnalphabetk, lblinek, btnalphabetl, lblinel, btnalphabetm, lblinem, btnalphabetn, lblinen, btnalphabeto, lblineno, btnalphabetp, lblinenp, btnalphabetq, lblinenq, btnalphabetr, lblinenr, btnalphabets, lblinens, btnalphabett, lblinet, btnalphabetu, lblineu, btnalphabetv, lblinev, btnalphabetw, lblinew, btnalphabetx, lblinex, btnalphabety, lbliney, btnalphabetz);
    var fcadminclearsave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "fcadminclearsave",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "2%",
        "skin": "slFbox",
        "top": "-38dp",
        "width": "20.01%",
        "zIndex": 1
    }, {}, {});
    fcadminclearsave.setDefaultUnit(kony.flex.DP);
    var btnadminclear = new kony.ui.Button({
        "height": "40dp",
        "id": "btnadminclear",
        "isVisible": true,
        "onClick": AS_Button_67a5a06581994a33ac2548bee103173b,
        "right": "92dp",
        "skin": "skngraybgbold",
        "text": "Clear",
        "top": "1dp",
        "width": "74dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    var btnadminsave = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "height": "40dp",
        "id": "btnadminsave",
        "isVisible": true,
        "onClick": AS_Button_e0511fe9a3ee466e9fd9898196bba9db,
        "right": "0dp",
        "skin": "sknbtnbluebg",
        "text": "Save",
        "top": "1dp",
        "width": "74dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtntranshover"
    });
    fcadminclearsave.add(btnadminclear, btnadminsave);
    var fcseg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "68%",
        "id": "fcseg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "isModalContainer": false,
        "right": "2%",
        "skin": "skfcwhitegraybdr",
        "top": "20dp",
        "width": "96%",
        "zIndex": 6
    }, {}, {});
    fcseg.setDefaultUnit(kony.flex.DP);
    var fcfacilitylisthdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcfacilitylisthdr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    fcfacilitylisthdr.setDefaultUnit(kony.flex.DP);
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
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcfacilitynames.setDefaultUnit(kony.flex.DP);
    var lblfacilityname = new kony.ui.Label({
        "centerX": "37%",
        "centerY": "50%",
        "id": "lblfacilityname",
        "isVisible": true,
        "left": "2%",
        "right": "4%",
        "skin": "sklblwhite90bold",
        "text": "Facility Name",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfacilitynames.add(lblfacilityname);
    var lblinefacilityname = new kony.ui.Label({
        "height": "100%",
        "id": "lblinefacilityname",
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
    fcfacilityname.add(fcfacilitynames, lblinefacilityname);
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
        "width": "10.80%",
        "zIndex": 2
    }, {}, {});
    fcfacilityid.setDefaultUnit(kony.flex.DP);
    var fcfacilityids = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilityids",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcfacilityids.setDefaultUnit(kony.flex.DP);
    var lblfacilityid = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblfacilityid",
        "isVisible": true,
        "left": "20%",
        "right": "5%",
        "skin": "sklblwhite90bold",
        "text": "Facility ID",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "width": "11%",
        "zIndex": 3
    }, {}, {});
    fccitys.setDefaultUnit(kony.flex.DP);
    var fccity = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fccity",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fccity.setDefaultUnit(kony.flex.DP);
    var lblcity = new kony.ui.Label({
        "centerX": "40%",
        "centerY": "50%",
        "id": "lblcity",
        "isVisible": true,
        "left": "30%",
        "right": "3%",
        "skin": "sklblwhite90bold",
        "text": "City",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown1 = new kony.ui.Button({
        "centerY": "52%",
        "height": "15dp",
        "id": "imgdown1",
        "isVisible": true,
        "left": "28%",
        "onClick": AS_Image_cb0e1be798774346b6ec62456ce80f2b,
        "skin": "skinBtnFilter",
        "width": "15dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    fccity.add(lblcity, imgdown1);
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
    fccitys.add(fccity, lblline3);
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
        "width": "11%",
        "zIndex": 4
    }, {}, {});
    fcstates.setDefaultUnit(kony.flex.DP);
    var fcstate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcstate",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcstate.setDefaultUnit(kony.flex.DP);
    var lblstate = new kony.ui.Label({
        "centerX": "40%",
        "centerY": "50%",
        "id": "lblstate",
        "isVisible": true,
        "left": "30%",
        "right": "3%",
        "skin": "sklblwhite90bold",
        "text": "State",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown2 = new kony.ui.Button({
        "centerY": "52%",
        "height": "15dp",
        "id": "imgdown2",
        "isVisible": true,
        "left": "28%",
        "onClick": AS_Image_71bb63014f0d4bd9b5b1d25ab3a4c41e,
        "skin": "skinBtnFilter",
        "width": "15dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    fcstate.add(lblstate, imgdown2);
    var lblline4 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline4",
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
    fcstates.add(fcstate, lblline4);
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
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fczones.setDefaultUnit(kony.flex.DP);
    var lblzone = new kony.ui.Label({
        "centerX": "40%",
        "centerY": "50%",
        "id": "lblzone",
        "isVisible": true,
        "left": "30%",
        "right": "3%",
        "skin": "sklblwhite90bold",
        "text": "Zone",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown3 = new kony.ui.Button({
        "centerY": "52%",
        "height": "15dp",
        "id": "imgdown3",
        "isVisible": true,
        "left": "28%",
        "onClick": AS_Image_709336afde0c46b4809ab3f2f807e0f8,
        "skin": "skinBtnFilter",
        "width": "15dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    fczones.add(lblzone, imgdown3);
    var lblline5 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline5",
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
        "width": "10.80%",
        "zIndex": 6
    }, {}, {});
    fcbluebookid.setDefaultUnit(kony.flex.DP);
    var fcbluebookids = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcbluebookids",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcbluebookids.setDefaultUnit(kony.flex.DP);
    var lblbluebookid = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblbluebookid",
        "isVisible": true,
        "left": "18%",
        "right": "1%",
        "skin": "sklblwhite90bold",
        "text": "Bluebook ID",
        "width": kony.flex.USE_PREFFERED_SIZE,
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
        "right": "0px",
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
        "width": "10.70%",
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
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcfacilitytypes.setDefaultUnit(kony.flex.DP);
    var lblfacilitytype = new kony.ui.Label({
        "centerX": "40%",
        "centerY": "50%",
        "id": "lblfacilitytype",
        "isVisible": true,
        "left": "14%",
        "right": "3%",
        "skin": "sklblwhite90bold",
        "text": "Facility Type",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown4 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown4",
        "isVisible": true,
        "left": "13%",
        "onClick": AS_Image_6371602b40044288abccb710c62e4679,
        "skin": "skinBtnFilter",
        "width": "15dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    fcfacilitytypes.add(lblfacilitytype, imgdown4);
    var lblline7 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline7",
        "isVisible": false,
        "left": "0px",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "2dp",
        "zIndex": 8
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
        "width": "11.90%",
        "zIndex": 8
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
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fchuddletools.setDefaultUnit(kony.flex.DP);
    var lblhuddletool = new kony.ui.Label({
        "centerX": "40%",
        "centerY": "50%",
        "id": "lblhuddletool",
        "isVisible": true,
        "left": "20%",
        "right": "5%",
        "skin": "sklblwhite90bold",
        "text": "Huddle Tool",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imagedown5 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imagedown5",
        "isVisible": true,
        "left": "14%",
        "onClick": AS_Image_c20bc676ccee460a8e672657eb88957d,
        "skin": "skinBtnFilter",
        "width": "15dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    fchuddletools.add(lblhuddletool, imagedown5);
    var lblline08 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline08",
        "isVisible": false,
        "left": "1dp",
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
    fchuddletool.add(fchuddletools, lblline08);
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
        "zIndex": 9
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
        "zIndex": 1
    }, {}, {});
    fcphotomobiles.setDefaultUnit(kony.flex.DP);
    var lblphotomobile = new kony.ui.Label({
        "centerX": "40%",
        "centerY": "50%",
        "id": "lblphotomobile",
        "isVisible": true,
        "left": "10%",
        "right": "5%",
        "skin": "sklblwhite90bold",
        "text": "Photo Mobile",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imagedown6 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imagedown6",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Image_87d376c9ff72493797bfd98ba1ac5c1d,
        "skin": "skinBtnFilter",
        "width": "15dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    fcphotomobiles.add(lblphotomobile, imagedown6);
    fcphotomobile.add(fcphotomobiles);
    fcfacilitylisthdr.add(fcfacilityname, fcfacilityid, fccitys, fcstates, fczone, fcbluebookid, fcfacilitytype, fchuddletool, fcphotomobile);
    var lblnorecords = new kony.ui.Label({
        "id": "lblnorecords",
        "isVisible": false,
        "left": "45%",
        "skin": "skblack120",
        "text": "Label",
        "top": "45dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segfacilitylist = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblbluebookid": "12345",
            "lblcity": "New York",
            "lblfacilityid": "10",
            "lblfacilityname": "WCC1",
            "lblfacilitytype": "WCC",
            "lblline": "Label",
            "lblline2": "",
            "lblline3": "Label",
            "lblline4": "Label",
            "lblline5": "Label",
            "lblline6": "Label",
            "lblline7": "Label",
            "lblline9": "Label",
            "lbllineseperator": "Label",
            "lblstate": "NY",
            "lblzone": "2"
        }, {
            "lblbluebookid": "12345",
            "lblcity": "New York",
            "lblfacilityid": "10",
            "lblfacilityname": "WCC1",
            "lblfacilitytype": "WCC",
            "lblline": "Label",
            "lblline2": "",
            "lblline3": "Label",
            "lblline4": "Label",
            "lblline5": "Label",
            "lblline6": "Label",
            "lblline7": "Label",
            "lblline9": "Label",
            "lbllineseperator": "Label",
            "lblstate": "NY",
            "lblzone": "2"
        }, {
            "lblbluebookid": "12345",
            "lblcity": "New York",
            "lblfacilityid": "10",
            "lblfacilityname": "WCC1",
            "lblfacilitytype": "WCC",
            "lblline": "Label",
            "lblline2": "",
            "lblline3": "Label",
            "lblline4": "Label",
            "lblline5": "Label",
            "lblline6": "Label",
            "lblline7": "Label",
            "lblline9": "Label",
            "lbllineseperator": "Label",
            "lblstate": "NY",
            "lblzone": "2"
        }, {
            "lblbluebookid": "12345",
            "lblcity": "New York",
            "lblfacilityid": "10",
            "lblfacilityname": "WCC1",
            "lblfacilitytype": "WCC",
            "lblline": "Label",
            "lblline2": "",
            "lblline3": "Label",
            "lblline4": "Label",
            "lblline5": "Label",
            "lblline6": "Label",
            "lblline7": "Label",
            "lblline9": "Label",
            "lbllineseperator": "Label",
            "lblstate": "NY",
            "lblzone": "2"
        }, {
            "lblbluebookid": "12345",
            "lblcity": "New York",
            "lblfacilityid": "10",
            "lblfacilityname": "WCC1",
            "lblfacilitytype": "WCC",
            "lblline": "Label",
            "lblline2": "",
            "lblline3": "Label",
            "lblline4": "Label",
            "lblline5": "Label",
            "lblline6": "Label",
            "lblline7": "Label",
            "lblline9": "Label",
            "lbllineseperator": "Label",
            "lblstate": "NY",
            "lblzone": "2"
        }],
        "groupCells": false,
        "height": "89%",
        "id": "segfacilitylist",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegment",
        "rowTemplate": fcfacilitylist,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "45dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0ccbb3bc6038d4e": "FlexContainer0ccbb3bc6038d4e",
            "btncheckbox1": "btncheckbox1",
            "btncheckbox2": "btncheckbox2",
            "fcbluebookid": "fcbluebookid",
            "fcbluebookids": "fcbluebookids",
            "fccity": "fccity",
            "fccitys": "fccitys",
            "fcfacilityid": "fcfacilityid",
            "fcfacilityids": "fcfacilityids",
            "fcfacilitylist": "fcfacilitylist",
            "fcfacilityname": "fcfacilityname",
            "fcfacilitynames": "fcfacilitynames",
            "fcfacilitytype": "fcfacilitytype",
            "fcfacilitytypes": "fcfacilitytypes",
            "fchuddletool": "fchuddletool",
            "fchuddletools": "fchuddletools",
            "fcphotomobile": "fcphotomobile",
            "fcphotomobiles": "fcphotomobiles",
            "fcstate": "fcstate",
            "fcstates": "fcstates",
            "fczone": "fczone",
            "fczones": "fczones",
            "lblbluebookid": "lblbluebookid",
            "lblcity": "lblcity",
            "lblfacilityid": "lblfacilityid",
            "lblfacilityname": "lblfacilityname",
            "lblfacilitytype": "lblfacilitytype",
            "lblline": "lblline",
            "lblline2": "lblline2",
            "lblline3": "lblline3",
            "lblline4": "lblline4",
            "lblline5": "lblline5",
            "lblline6": "lblline6",
            "lblline7": "lblline7",
            "lblline9": "lblline9",
            "lbllineseperator": "lbllineseperator",
            "lblstate": "lblstate",
            "lblzone": "lblzone"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lnseglast = new kony.ui.Label({
        "height": "1dp",
        "id": "lnseglast",
        "isVisible": true,
        "left": "0%",
        "right": "0%",
        "skin": "sklblline",
        "top": "1px",
        "width": "100%",
        "zIndex": 6
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator1 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator1",
        "isVisible": true,
        "left": "11%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator2 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator2",
        "isVisible": true,
        "left": "22%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator3 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator3",
        "isVisible": true,
        "left": "33.10%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator4 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator4",
        "isVisible": true,
        "left": "55.50%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator5 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator5",
        "isVisible": true,
        "left": "65%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator6 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator6",
        "isVisible": true,
        "left": "77.50%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator7 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator7",
        "isVisible": true,
        "left": "89%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator8 = new kony.ui.Label({
        "height": "45dp",
        "id": "lblSeperator8",
        "isVisible": true,
        "left": "44.50%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcseg.add(fcfacilitylisthdr, lblnorecords, segfacilitylist, lnseglast, lblSeperator1, lblSeperator2, lblSeperator3, lblSeperator4, lblSeperator5, lblSeperator6, lblSeperator7, lblSeperator8);
    var FlexContainer0a3bf80e31c7648 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "FlexContainer0a3bf80e31c7648",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 6
    }, {}, {});
    FlexContainer0a3bf80e31c7648.setDefaultUnit(kony.flex.DP);
    var btnpageprevious = new kony.ui.Button({
        "height": "36dp",
        "id": "btnpageprevious",
        "isVisible": true,
        "left": "38%",
        "onClick": AS_Button_8d7b1663616e45c8b224a4461c95b48e,
        "skin": "sknbtnbluebg",
        "text": "Previous",
        "top": "6dp",
        "width": "80dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblpagenumber = new kony.ui.Label({
        "id": "lblpagenumber",
        "isVisible": true,
        "left": "4%",
        "skin": "sklblgraybold",
        "text": "-",
        "top": "14dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnpagenext = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "height": "36dp",
        "id": "btnpagenext",
        "isVisible": true,
        "left": "4%",
        "onClick": AS_Button_f6b6d12d2f3846e4b4f5cebca1dfa602,
        "skin": "sknbtnbluebg",
        "text": "Next",
        "top": "6dp",
        "width": "80dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0a3bf80e31c7648.add(btnpageprevious, lblpagenumber, btnpagenext);
    fscbody.add(fcdashboardsubheader, fcadminsearch, fcalphabets, fcadminclearsave, fcseg, FlexContainer0a3bf80e31c7648);
    var flxctnradminsave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxctnradminsave",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfctransbg",
        "top": "-50dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxctnradminsave.setDefaultUnit(kony.flex.DP);
    var frxscrladminsave = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "54%",
        "horizontalScrollIndicator": true,
        "id": "frxscrladminsave",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "sknfscwhitebgradius",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "50%",
        "zIndex": 2
    }, {}, {});
    frxscrladminsave.setDefaultUnit(kony.flex.DP);
    var fcadminsaveheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcadminsaveheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcnavyblue",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    fcadminsaveheader.setDefaultUnit(kony.flex.DP);
    var Copylblline0cbe10ad2858f4d = new kony.ui.Label({
        "bottom": "1dp",
        "height": "1dp",
        "id": "Copylblline0cbe10ad2858f4d",
        "isVisible": false,
        "left": "0dp",
        "right": "0dp",
        "skin": "sklblline",
        "text": "Label",
        "top": "46dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lbladminsaveheader = new kony.ui.Label({
        "id": "lbladminsaveheader",
        "isVisible": true,
        "left": "40dp",
        "skin": "sklblwhite125bold",
        "text": "Confirm Changes",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadminsaveheader.add(Copylblline0cbe10ad2858f4d, lbladminsaveheader);
    var fcadminfacilitysave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "70%",
        "id": "fcadminfacilitysave",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "right": "0%",
        "skin": "skfcwhitegraybdr",
        "top": "60dp",
        "width": "90%",
        "zIndex": 2
    }, {}, {});
    fcadminfacilitysave.setDefaultUnit(kony.flex.DP);
    var fcfacilitylistsavehdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcfacilitylistsavehdr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    fcfacilitylistsavehdr.setDefaultUnit(kony.flex.DP);
    var fcfacilitynamesave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcfacilitynamesave",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    fcfacilitynamesave.setDefaultUnit(kony.flex.DP);
    var fcfacilitynam = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfacilitynam",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 1
    }, {}, {});
    fcfacilitynam.setDefaultUnit(kony.flex.DP);
    var Copylblfacilityname098d9b705d2ca46 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Copylblfacilityname098d9b705d2ca46",
        "isVisible": true,
        "left": "10%",
        "right": "4%",
        "skin": "sklblwhite90bold",
        "text": "Facility Name",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfacilitynam.add(Copylblfacilityname098d9b705d2ca46);
    var line1 = new kony.ui.Label({
        "height": "100%",
        "id": "line1",
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
    fcfacilitynamesave.add(fcfacilitynam, line1);
    var fchuddletoolsave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fchuddletoolsave",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 8
    }, {}, {});
    fchuddletoolsave.setDefaultUnit(kony.flex.DP);
    var fchdrhuddletools = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fchdrhuddletools",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 1
    }, {}, {});
    fchdrhuddletools.setDefaultUnit(kony.flex.DP);
    var Copylblhuddletool05fa6f2be5b624b = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Copylblhuddletool05fa6f2be5b624b",
        "isVisible": true,
        "left": "0%",
        "right": "0%",
        "skin": "sklblwhite90bold",
        "text": "Huddle Tool",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fchdrhuddletools.add(Copylblhuddletool05fa6f2be5b624b);
    var line2 = new kony.ui.Label({
        "height": "100%",
        "id": "line2",
        "isVisible": true,
        "left": "1dp",
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
    fchuddletoolsave.add(fchdrhuddletools, line2);
    var fcphotomobilesave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcphotomobilesave",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 9
    }, {}, {});
    fcphotomobilesave.setDefaultUnit(kony.flex.DP);
    var fchdrphotomobiles = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fchdrphotomobiles",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97.90%",
        "zIndex": 1
    }, {}, {});
    fchdrphotomobiles.setDefaultUnit(kony.flex.DP);
    var lblphotomobilesave = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblphotomobilesave",
        "isVisible": true,
        "left": "0%",
        "right": "0%",
        "skin": "sklblwhite90bold",
        "text": "Photo Mobile",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fchdrphotomobiles.add(lblphotomobilesave);
    fcphotomobilesave.add(fchdrphotomobiles);
    fcfacilitylistsavehdr.add(fcfacilitynamesave, fchuddletoolsave, fcphotomobilesave);
    var segfacilitylistsave = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btncheckbox1": "",
            "btncheckbox2": "",
            "lblfacilityidhidden": "Label",
            "lblfacilityname": "W",
            "lblline": "Label",
            "lblline1": "Label"
        }, {
            "btncheckbox1": "",
            "btncheckbox2": "",
            "lblfacilityidhidden": "Label",
            "lblfacilityname": "W",
            "lblline": "Label",
            "lblline1": "Label"
        }, {
            "btncheckbox1": "",
            "btncheckbox2": "",
            "lblfacilityidhidden": "Label",
            "lblfacilityname": "W",
            "lblline": "Label",
            "lblline1": "Label"
        }, {
            "btncheckbox1": "",
            "btncheckbox2": "",
            "lblfacilityidhidden": "Label",
            "lblfacilityname": "W",
            "lblline": "Label",
            "lblline1": "Label"
        }, {
            "btncheckbox1": "",
            "btncheckbox2": "",
            "lblfacilityidhidden": "Label",
            "lblfacilityname": "W",
            "lblline": "Label",
            "lblline1": "Label"
        }],
        "groupCells": false,
        "height": "82%",
        "id": "segfacilitylistsave",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegment",
        "rowTemplate": fcsegadminsave,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "46dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btncheckbox1": "btncheckbox1",
            "btncheckbox2": "btncheckbox2",
            "fcfacilityname": "fcfacilityname",
            "fcfacilitynames": "fcfacilitynames",
            "fchuddletool": "fchuddletool",
            "fchuddletools": "fchuddletools",
            "fcphotomobile": "fcphotomobile",
            "fcphotomobiles": "fcphotomobiles",
            "fcsegadminsave": "fcsegadminsave",
            "lblfacilityidhidden": "lblfacilityidhidden",
            "lblfacilityname": "lblfacilityname",
            "lblline": "lblline",
            "lblline1": "lblline1"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadminfacilitysave.add(fcfacilitylistsavehdr, segfacilitylistsave);
    var fcadmincancelsave = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "fcadmincancelsave",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "53%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "88%",
        "width": "50%",
        "zIndex": 2
    }, {}, {});
    fcadmincancelsave.setDefaultUnit(kony.flex.DP);
    var btnadmincancel = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "height": "40dp",
        "id": "btnadmincancel",
        "isVisible": true,
        "left": "34%",
        "onClick": AS_Button_68b83347346a4b4f997f7188113598ae,
        "skin": "skngraybg",
        "text": "Cancel",
        "top": "1dp",
        "width": "74dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnadminsaveselection = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "height": "40dp",
        "id": "btnadminsaveselection",
        "isVisible": true,
        "left": "63%",
        "onClick": AS_Button_a13f5d770d9b4cd0b0aee87ae2c50d02,
        "skin": "sknbtnbluebg",
        "text": "Save",
        "top": "1dp",
        "width": "74dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadmincancelsave.add(btnadmincancel, btnadminsaveselection);
    frxscrladminsave.add(fcadminsaveheader, fcadminfacilitysave, fcadmincancelsave);
    flxctnradminsave.add(frxscrladminsave);
    fscbodyScroll.add(fscbody, flxctnradminsave);
    var km010b038ee934abbbe654cf32e8549b0 = new kony.ui.FlexContainer({
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
    km010b038ee934abbbe654cf32e8549b0.setDefaultUnit(kony.flex.DP);
    var km0a6a6a095964e26b09dcd05ddd1b8fc = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_b3f1764aa9894e0f85179219470f6b38,
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
    km0a6a6a095964e26b09dcd05ddd1b8fc.setDefaultUnit(kony.flex.DP);
    var km1a1ac4ad8fc4069a3c120fab331b711 = new kony.ui.Image2({
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
    var km03112e21ba943659f31267f4076da14 = new kony.ui.Label({
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
    km0a6a6a095964e26b09dcd05ddd1b8fc.add(km1a1ac4ad8fc4069a3c120fab331b711, km03112e21ba943659f31267f4076da14);
    var km060191ce07d4775907668d3e7247f77 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_0485abe763fc4eea9f822c6609f535e4,
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
    km060191ce07d4775907668d3e7247f77.setDefaultUnit(kony.flex.DP);
    var kmd2d2cdbc287498689834831c05185c9 = new kony.ui.Image2({
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
    var kme743b4b5d1d4606ad94460f1cb03303 = new kony.ui.Label({
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
    km060191ce07d4775907668d3e7247f77.add(kmd2d2cdbc287498689834831c05185c9, kme743b4b5d1d4606ad94460f1cb03303);
    var km5e2ccf0b69144b3a78442002753b0bd = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_c10b1d734a5a4ee4a93e0e8f24945f8d,
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
    km5e2ccf0b69144b3a78442002753b0bd.setDefaultUnit(kony.flex.DP);
    var km4205308d2074b84b047da1e7ffa7ef6 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgreports",
        "left": "8dp",
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
    var km09fdb3cda4448739ffba4bc6b31b6c5 = new kony.ui.Label({
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
    km5e2ccf0b69144b3a78442002753b0bd.add(km4205308d2074b84b047da1e7ffa7ef6, km09fdb3cda4448739ffba4bc6b31b6c5);
    var km92a2d9eaab44975ab8a0e1d3363fd08 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_834decb4c3aa433fbe9729fdfd9c1d1c,
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
    km92a2d9eaab44975ab8a0e1d3363fd08.setDefaultUnit(kony.flex.DP);
    var kmfd35c0929fc40bca0c68cdceed35502 = new kony.ui.Image2({
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
    var kmb2df6c0376a44f79b8992b3c6d94977 = new kony.ui.Label({
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
    var kmf8d9209e1fe4bb8b2c9b6554fd0fc3b = new kony.ui.Label({
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
    km92a2d9eaab44975ab8a0e1d3363fd08.add(kmfd35c0929fc40bca0c68cdceed35502, kmb2df6c0376a44f79b8992b3c6d94977, kmf8d9209e1fe4bb8b2c9b6554fd0fc3b);
    km010b038ee934abbbe654cf32e8549b0.add(km0a6a6a095964e26b09dcd05ddd1b8fc, km060191ce07d4775907668d3e7247f77, km5e2ccf0b69144b3a78442002753b0bd, km92a2d9eaab44975ab8a0e1d3363fd08);
    fcmainbody.add(fcbodyheader, fscsidemenu, fscbodyScroll, km010b038ee934abbbe654cf32e8549b0);
    var km93a6e2359d145d6b2bfe0434e6cdec9 = new kony.ui.FlexContainer({
        "bottom": "0dp",
        "clipBounds": true,
        "isMaster": true,
        "height": "40dp",
        "id": "fcmstfooter",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcGrayBg"
    }, {}, {});
    km93a6e2359d145d6b2bfe0434e6cdec9.setDefaultUnit(kony.flex.DP);
    var kmd40d4e93c164dc0905ce4036bab2adf = new kony.ui.RichText({
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
    km93a6e2359d145d6b2bfe0434e6cdec9.add(kmd40d4e93c164dc0905ce4036bab2adf);
    frmAdmin.add(km5bdbe74ce994fbe990f0786389898e2, fcmainbody, km93a6e2359d145d6b2bfe0434e6cdec9);
};

function frmAdminGlobals() {
    frmAdmin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAdmin,
        "enabledForIdleTimeout": true,
        "id": "frmAdmin",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "postShow": AS_Form_13487752a2074711946e789409749663,
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