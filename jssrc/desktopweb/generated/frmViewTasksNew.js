function addWidgetsfrmViewTasksNew() {
    frmViewTasksNew.setDefaultUnit(kony.flex.DP);
    var kmeccfb9b5583420f946ab4cc0d6b2a30 = new kony.ui.FlexContainer({
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
    kmeccfb9b5583420f946ab4cc0d6b2a30.setDefaultUnit(kony.flex.DP);
    var km7850e4782e146189dda3d5761efa152 = new kony.ui.FlexContainer({
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
    km7850e4782e146189dda3d5761efa152.setDefaultUnit(kony.flex.DP);
    var km823988a029e485b8537782390814e7c = new kony.ui.Image2({
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
    var km57efd9de78a4e0480f0f23e17633590 = new kony.ui.FlexContainer({
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
    km57efd9de78a4e0480f0f23e17633590.setDefaultUnit(kony.flex.DP);
    km57efd9de78a4e0480f0f23e17633590.add();
    var km8d2c009bd38460990df9c34db9f88e3 = new kony.ui.Label({
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
    var km3fb249f0f354c6fa8892e2067825877 = new kony.ui.RichText({
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
    km7850e4782e146189dda3d5761efa152.add(km823988a029e485b8537782390814e7c, km57efd9de78a4e0480f0f23e17633590, km8d2c009bd38460990df9c34db9f88e3, km3fb249f0f354c6fa8892e2067825877);
    var km45ad77debfe42f89286b40aa9bb43a6 = new kony.ui.FlexContainer({
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
    km45ad77debfe42f89286b40aa9bb43a6.setDefaultUnit(kony.flex.DP);
    var kme9597501ef24bb88c237d78f883d756 = new kony.ui.FlexContainer({
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
    kme9597501ef24bb88c237d78f883d756.setDefaultUnit(kony.flex.DP);
    var km9d14dc8ecc948288dd8b15230bc43ec = new kony.ui.Image2({
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
    var km73234acb80245929a82f1cb6d1b6fb3 = new kony.ui.FlexContainer({
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
    km73234acb80245929a82f1cb6d1b6fb3.setDefaultUnit(kony.flex.DP);
    var km1318fd6aa00400cbbddea1379acc3cd = new kony.ui.RichText({
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
    var km3b2424cc6a041ceb0b282da5eb7ad4b = new kony.ui.RichText({
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
    var km79c6856df3d45df8fe7da43d239cc5f = new kony.ui.RichText({
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
    km73234acb80245929a82f1cb6d1b6fb3.add(km1318fd6aa00400cbbddea1379acc3cd, km3b2424cc6a041ceb0b282da5eb7ad4b, km79c6856df3d45df8fe7da43d239cc5f);
    kme9597501ef24bb88c237d78f883d756.add(km9d14dc8ecc948288dd8b15230bc43ec, km73234acb80245929a82f1cb6d1b6fb3);
    var kmb57c43982d748b69290d31d7eae719a = new kony.ui.FlexContainer({
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
    kmb57c43982d748b69290d31d7eae719a.setDefaultUnit(kony.flex.DP);
    var km7a8bc72a48f48e2bb33601466b64ff0 = new kony.ui.FlexContainer({
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
    km7a8bc72a48f48e2bb33601466b64ff0.setDefaultUnit(kony.flex.DP);
    km7a8bc72a48f48e2bb33601466b64ff0.add();
    var km16609b9ceb34bf5a853e9118600eb85 = new kony.ui.Image2({
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
    var km3ef89200f2d41b7bdd55ad73060be25 = new kony.ui.Label({
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
    var km746462b11eb4233a06e612c9b023cef = new kony.ui.Label({
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
    kmb57c43982d748b69290d31d7eae719a.add(km7a8bc72a48f48e2bb33601466b64ff0, km16609b9ceb34bf5a853e9118600eb85, km3ef89200f2d41b7bdd55ad73060be25, km746462b11eb4233a06e612c9b023cef);
    var km02f88a0c72245769905eeef0bdce9c7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_bbca17095a1a4f0a8dcc755f0a1cb380,
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
    km02f88a0c72245769905eeef0bdce9c7.setDefaultUnit(kony.flex.DP);
    var km3342bf1940c4ab49af6e51b99da9e5d = new kony.ui.Image2({
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
    var kmf225c09974843d393f762949738b744 = new kony.ui.FlexContainer({
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
    kmf225c09974843d393f762949738b744.setDefaultUnit(kony.flex.DP);
    var kmbc538105ba14f66bfda69275464cb26 = new kony.ui.Label({
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
    kmf225c09974843d393f762949738b744.add(kmbc538105ba14f66bfda69275464cb26);
    km02f88a0c72245769905eeef0bdce9c7.add(km3342bf1940c4ab49af6e51b99da9e5d, kmf225c09974843d393f762949738b744);
    var km8b0478d83124ae697bf0a4fc7edcc17 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_cb74bd8c614240a2bb795d6934be80f1,
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
    km8b0478d83124ae697bf0a4fc7edcc17.setDefaultUnit(kony.flex.DP);
    var km019657ee49b4f339b8f23c8e1039a96 = new kony.ui.Image2({
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
    km8b0478d83124ae697bf0a4fc7edcc17.add(km019657ee49b4f339b8f23c8e1039a96);
    km45ad77debfe42f89286b40aa9bb43a6.add(kme9597501ef24bb88c237d78f883d756, kmb57c43982d748b69290d31d7eae719a, km02f88a0c72245769905eeef0bdce9c7, km8b0478d83124ae697bf0a4fc7edcc17);
    var kmbba575d73d24c18a12290ec43ea826a = new kony.ui.FlexContainer({
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
    kmbba575d73d24c18a12290ec43ea826a.setDefaultUnit(kony.flex.DP);
    var km10f332c04be4e32afb08c1a763f4627 = new kony.ui.Label({
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
    kmbba575d73d24c18a12290ec43ea826a.add(km10f332c04be4e32afb08c1a763f4627);
    kmeccfb9b5583420f946ab4cc0d6b2a30.add(km7850e4782e146189dda3d5761efa152, km45ad77debfe42f89286b40aa9bb43a6, kmbba575d73d24c18a12290ec43ea826a);
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
        "onClick": AS_Button_9e27781643594821939a2e37ae3984a6,
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
        "onClick": AS_Button_0609b028a0f24e2288642869a0f64f97,
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
        "text": "Task List",
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
        "onClick": AS_FlexContainer_412fbf1cab9e4852a439997813183ac4,
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
    var km3d9773cd1554fcba95816b00b07bd6a = new kony.ui.FlexContainer({
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
    km3d9773cd1554fcba95816b00b07bd6a.setDefaultUnit(kony.flex.DP);
    var km4b95af9a99f4185a008d12ccfbad542 = new kony.ui.FlexContainer({
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
    km4b95af9a99f4185a008d12ccfbad542.setDefaultUnit(kony.flex.DP);
    var km660409e4ee749628addb48e9c34b7be = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "onClick": AS_Button_6c0df3b9fe3d44b29755978cd627319e,
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
    km4b95af9a99f4185a008d12ccfbad542.add(km660409e4ee749628addb48e9c34b7be);
    var kmea5302bc04e47a8871f9a2e3261a169 = new kony.ui.FlexContainer({
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
    kmea5302bc04e47a8871f9a2e3261a169.setDefaultUnit(kony.flex.DP);
    var km654be9fd5e04bb1831c02edee4ef968 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "onClick": AS_Button_2475bbe564a64ea3a01a60d84df25c14,
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
    kmea5302bc04e47a8871f9a2e3261a169.add(km654be9fd5e04bb1831c02edee4ef968);
    var kmdf3a95f2c504cc5919e6809f0f2e760 = new kony.ui.FlexContainer({
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
    kmdf3a95f2c504cc5919e6809f0f2e760.setDefaultUnit(kony.flex.DP);
    var km7787809604a4fd7b6b970515e25b532 = new kony.ui.Button({
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
    kmdf3a95f2c504cc5919e6809f0f2e760.add(km7787809604a4fd7b6b970515e25b532);
    var kmfada6ba56c64cc1b50ce0762fe86f25 = new kony.ui.FlexContainer({
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
    kmfada6ba56c64cc1b50ce0762fe86f25.setDefaultUnit(kony.flex.DP);
    var kmf4276c9427444f6a91b69e130abddce = new kony.ui.Button({
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
    kmfada6ba56c64cc1b50ce0762fe86f25.add(kmf4276c9427444f6a91b69e130abddce);
    var kme132a31362d4f76b616652e65824220 = new kony.ui.FlexContainer({
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
    kme132a31362d4f76b616652e65824220.setDefaultUnit(kony.flex.DP);
    var km1f98a6f9d9146088cf4b65e3dcfe875 = new kony.ui.Button({
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
    kme132a31362d4f76b616652e65824220.add(km1f98a6f9d9146088cf4b65e3dcfe875);
    var km32aee2a443c4cbda65154e8ea709009 = new kony.ui.FlexContainer({
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
    km32aee2a443c4cbda65154e8ea709009.setDefaultUnit(kony.flex.DP);
    var km78a21de40a348de973b628085df494f = new kony.ui.Button({
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
    km32aee2a443c4cbda65154e8ea709009.add(km78a21de40a348de973b628085df494f);
    var km40f755619d047a1b3047feac0dab958 = new kony.ui.FlexContainer({
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
    km40f755619d047a1b3047feac0dab958.setDefaultUnit(kony.flex.DP);
    var kmfe05676a5db48f3ae5ee1e6447c7095 = new kony.ui.Button({
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
    km40f755619d047a1b3047feac0dab958.add(kmfe05676a5db48f3ae5ee1e6447c7095);
    var km998568cb0a74b37b0b860e123e31eb0 = new kony.ui.FlexContainer({
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
    km998568cb0a74b37b0b860e123e31eb0.setDefaultUnit(kony.flex.DP);
    var kmdf582f9fd214278be60c3576a93e1b3 = new kony.ui.Button({
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
    km998568cb0a74b37b0b860e123e31eb0.add(kmdf582f9fd214278be60c3576a93e1b3);
    var km20d3a64202845cc9c4b1f64b4d6f5aa = new kony.ui.FlexContainer({
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
    km20d3a64202845cc9c4b1f64b4d6f5aa.setDefaultUnit(kony.flex.DP);
    var km4a8121cd5814d18a731832c7cabe91c = new kony.ui.Button({
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
    km20d3a64202845cc9c4b1f64b4d6f5aa.add(km4a8121cd5814d18a731832c7cabe91c);
    var kma2dec7cd4d9401d867c68a98b11c552 = new kony.ui.FlexContainer({
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
    kma2dec7cd4d9401d867c68a98b11c552.setDefaultUnit(kony.flex.DP);
    var km5a0584633bc44ae8a78802ca6465d51 = new kony.ui.Button({
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
    kma2dec7cd4d9401d867c68a98b11c552.add(km5a0584633bc44ae8a78802ca6465d51);
    var km9d192a708ed4267a86c653d85575121 = new kony.ui.FlexContainer({
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
    km9d192a708ed4267a86c653d85575121.setDefaultUnit(kony.flex.DP);
    var km840f77a13984fd39cf37197521337d9 = new kony.ui.Button({
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
    km9d192a708ed4267a86c653d85575121.add(km840f77a13984fd39cf37197521337d9);
    var km10417970398432c9d339a41eab77e7c = new kony.ui.FlexContainer({
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
    km10417970398432c9d339a41eab77e7c.setDefaultUnit(kony.flex.DP);
    var km8883864d5974c35810753cbf353e0bb = new kony.ui.Button({
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
    km10417970398432c9d339a41eab77e7c.add(km8883864d5974c35810753cbf353e0bb);
    km3d9773cd1554fcba95816b00b07bd6a.add(km4b95af9a99f4185a008d12ccfbad542, kmea5302bc04e47a8871f9a2e3261a169, kmdf3a95f2c504cc5919e6809f0f2e760, kmfada6ba56c64cc1b50ce0762fe86f25, kme132a31362d4f76b616652e65824220, km32aee2a443c4cbda65154e8ea709009, km40f755619d047a1b3047feac0dab958, km998568cb0a74b37b0b860e123e31eb0, km20d3a64202845cc9c4b1f64b4d6f5aa, kma2dec7cd4d9401d867c68a98b11c552, km9d192a708ed4267a86c653d85575121, km10417970398432c9d339a41eab77e7c);
    fscsidemenu.add(km3d9773cd1554fcba95816b00b07bd6a);
    var fscbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fscbody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    fscbody.setDefaultUnit(kony.flex.DP);
    var fctasksearch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65dp",
        "id": "fctasksearch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fctasksearch.setDefaultUnit(kony.flex.DP);
    var lbltasktxt = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltasktxt",
        "isVisible": false,
        "left": "1%",
        "skin": "sknlblblackbold110",
        "text": "Task List",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcsearch1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65dp",
        "id": "fcsearch1",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    fcsearch1.setDefaultUnit(kony.flex.DP);
    fcsearch1.add();
    var tbpatientsearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "35dp",
        "id": "tbpatientsearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "First Name / Last Name",
        "right": "6%",
        "secureTextEntry": false,
        "skin": "sktb120graybrdr11",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onEndEditing": AS_TextField_e28894c17a9843dc8a1c107f9361820b,
        "onKeyUp": AS_TextField_3c8878e5e4464656ac40d4ce19fa9734
    });
    var lblSearch = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSearch",
        "isVisible": true,
        "right": "23%",
        "skin": "sknlblblackbold90",
        "text": "Search Patient:",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcsearchicon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "30dp",
        "id": "fcsearchicon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_e3ad0e5215304390a963b9690e251bfa,
        "right": "6.80%",
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
        "right": "5%",
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
    var fcDownload = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "52%",
        "clipBounds": true,
        "height": "30dp",
        "id": "fcDownload",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_884f6192550848638aa9fbc7257966b4,
        "right": "25dp",
        "skin": "slFbox",
        "width": "35dp",
        "zIndex": 6
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcDownload.setDefaultUnit(kony.flex.DP);
    var imgDownload = new kony.ui.Image2({
        "height": "100%",
        "id": "imgDownload",
        "isVisible": true,
        "right": "0%",
        "skin": "slImage",
        "src": "download.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDownload.add(imgDownload);
    fctasksearch.add(lbltasktxt, fcsearch1, tbpatientsearch, lblSearch, fcsearchicon, fcDownload);
    var fcsearchdropdown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcsearchdropdown",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "maxHeight": "300dp",
        "isModalContainer": false,
        "right": "6%",
        "skin": "sknfcwhitebg",
        "top": "50dp",
        "width": "16%",
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
        "onRowClick": AS_Segment_a0325d99199a40e0acdbc7fcdcf77f2e,
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
    var fcprofile = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60dp",
        "id": "fcprofile",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "74dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcprofile.setDefaultUnit(kony.flex.DP);
    var imgprofile = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50dp",
        "id": "imgprofile",
        "isVisible": true,
        "left": "1%",
        "skin": "slImage",
        "src": "usericon.png",
        "top": "13dp",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblname = new kony.ui.Label({
        "centerY": "51%",
        "id": "lblname",
        "isVisible": true,
        "left": "74dp",
        "skin": "sknlblblackbold110",
        "text": "Wendy Grube",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcprofile.add(imgprofile, lblname);
    var fctaskbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "5dp",
        "clipBounds": false,
        "id": "fctaskbody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "isModalContainer": false,
        "skin": "sknfcwhitebgshadow",
        "top": "170dp",
        "width": "98%",
        "zIndex": 3
    }, {}, {});
    fctaskbody.setDefaultUnit(kony.flex.DP);
    var fcpatienthdrbox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "50dp",
        "id": "fcpatienthdrbox",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcnavyblue",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatienthdrbox.setDefaultUnit(kony.flex.DP);
    var lblhdrpatientlist = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrpatientlist",
        "isVisible": true,
        "left": "1%",
        "skin": "sklblwhite125bold",
        "text": "Task List",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnClearFilters = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "height": "100%",
        "id": "btnClearFilters",
        "isVisible": true,
        "onClick": AS_Button_27878179bec04587bbf969728d84cd86,
        "right": "2%",
        "skin": "skbtntxtSkyBluebold113",
        "text": "Clear Filters",
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
    fcpatienthdrbox.add(lblhdrpatientlist, btnClearFilters);
    var fcviewtaskhdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcviewtaskhdr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "50dp",
        "width": "100%"
    }, {}, {});
    fcviewtaskhdr.setDefaultUnit(kony.flex.DP);
    var fcpatientname = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcpatientname",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    fcpatientname.setDefaultUnit(kony.flex.DP);
    var FlexContainer0b56dbe2f0c6e47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0b56dbe2f0c6e47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b56dbe2f0c6e47.setDefaultUnit(kony.flex.DP);
    var lblpatientname = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblpatientname",
        "isVisible": true,
        "left": "6%",
        "skin": "sklblwhite90bold",
        "text": "Patient Name",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown1 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown1",
        "isVisible": true,
        "onClick": AS_Button_5e04292970bc49dcac5cf471286e395c,
        "right": "12%",
        "skin": "skinBtnFilter",
        "top": "0",
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
    FlexContainer0b56dbe2f0c6e47.add(lblpatientname, imgdown1);
    var lblline1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline1",
        "isVisible": false,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientname.add(FlexContainer0b56dbe2f0c6e47, lblline1);
    var fcwoundnumber = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcwoundnumber",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "8%",
        "zIndex": 2
    }, {}, {});
    fcwoundnumber.setDefaultUnit(kony.flex.DP);
    var FlexContainer0c76bf83ca0b343 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0c76bf83ca0b343",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0c76bf83ca0b343.setDefaultUnit(kony.flex.DP);
    var lblwoundnumber = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwoundnumber",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Wound Number",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown2 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown2",
        "isVisible": true,
        "onClick": AS_Button_479ea932b6c84281858d764b0f1272eb,
        "right": "15%",
        "skin": "skinBtnFilter",
        "top": "0",
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
    FlexContainer0c76bf83ca0b343.add(lblwoundnumber, imgdown2);
    var lblline2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline2",
        "isVisible": false,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcwoundnumber.add(FlexContainer0c76bf83ca0b343, lblline2);
    var fctasks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fctasks",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 3
    }, {}, {});
    fctasks.setDefaultUnit(kony.flex.DP);
    var FlexContainer0ad9260b685b747 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0ad9260b685b747",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ad9260b685b747.setDefaultUnit(kony.flex.DP);
    var lbltasks = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltasks",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Tasks",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown3 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown3",
        "isVisible": true,
        "onClick": AS_Button_950bebf79b2a4d7b80b635119c8d7212,
        "right": "7%",
        "skin": "skinBtnFilter",
        "top": "0",
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
    FlexContainer0ad9260b685b747.add(lbltasks, imgdown3);
    var lblline3 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline3",
        "isVisible": false,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fctasks.add(FlexContainer0ad9260b685b747, lblline3);
    var fcdatecreated = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcdatecreated",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 10
    }, {}, {});
    fcdatecreated.setDefaultUnit(kony.flex.DP);
    var FlexContainer071f487a8c34642 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer071f487a8c34642",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer071f487a8c34642.setDefaultUnit(kony.flex.DP);
    var lbldatecreated = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldatecreated",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Date created",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown4 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown4",
        "isVisible": true,
        "onClick": AS_Button_51f0b17389b141b5825ca7caeffe9014,
        "right": "15%",
        "skin": "skinBtnFilter",
        "top": "0",
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
    FlexContainer071f487a8c34642.add(lbldatecreated, imgdown4);
    var lblline4 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline4",
        "isVisible": false,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdatecreated.add(FlexContainer071f487a8c34642, lblline4);
    var fcduedate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcduedate",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 5
    }, {}, {});
    fcduedate.setDefaultUnit(kony.flex.DP);
    var FlexContainer01cdc97ef9e1243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer01cdc97ef9e1243",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01cdc97ef9e1243.setDefaultUnit(kony.flex.DP);
    var lblduedate = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblduedate",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Due Date",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown5 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown5",
        "isVisible": true,
        "onClick": AS_Button_68cd7468b11f4418b7549ec31247a567,
        "right": "19%",
        "skin": "skinBtnFilter",
        "top": "0",
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
    FlexContainer01cdc97ef9e1243.add(lblduedate, imgdown5);
    var lblline5 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline5",
        "isVisible": false,
        "left": "2dp",
        "right": "2dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 6
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcduedate.add(FlexContainer01cdc97ef9e1243, lblline5);
    var fcnotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcnotes",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 6
    }, {}, {});
    fcnotes.setDefaultUnit(kony.flex.DP);
    var FlexContainer003bf4c58a6f648 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer003bf4c58a6f648",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer003bf4c58a6f648.setDefaultUnit(kony.flex.DP);
    var lblnotes = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblnotes",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Notes",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer003bf4c58a6f648.add(lblnotes);
    var lblline6 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline6",
        "isVisible": false,
        "left": "1dp",
        "right": "2dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnotes.add(FlexContainer003bf4c58a6f648, lblline6);
    var fcstatus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcstatus",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "8.50%",
        "zIndex": 7
    }, {}, {});
    fcstatus.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f5b4c782f0824d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0f5b4c782f0824d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f5b4c782f0824d.setDefaultUnit(kony.flex.DP);
    var lblstatus = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblstatus",
        "isVisible": true,
        "left": "7%",
        "skin": "sklblwhite90bold",
        "text": "Status",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown7 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown7",
        "isVisible": true,
        "onClick": AS_Button_b1f9d8ac8cce4ad2b92d0a0a508f4c10,
        "right": "18%",
        "skin": "skinBtnFilter",
        "top": "0",
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
    FlexContainer0f5b4c782f0824d.add(lblstatus, imgdown7);
    var lblline7 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline7",
        "isVisible": false,
        "left": "1dp",
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
    fcstatus.add(FlexContainer0f5b4c782f0824d, lblline7);
    var fcdatecompleted = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcdatecompleted",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "13%",
        "zIndex": 8
    }, {}, {});
    fcdatecompleted.setDefaultUnit(kony.flex.DP);
    var FlexContainer0cddca5c7ce6e4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0cddca5c7ce6e4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "93%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0cddca5c7ce6e4a.setDefaultUnit(kony.flex.DP);
    var lbldatecompleted = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldatecompleted",
        "isVisible": true,
        "left": "8%",
        "skin": "sklblwhite90bold",
        "text": "Date Completed",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown8 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown8",
        "isVisible": true,
        "onClick": AS_Button_19cdd551792c4b9981fee45bcb805109,
        "right": "5%",
        "skin": "skinBtnFilter",
        "top": "0",
        "width": "15dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    FlexContainer0cddca5c7ce6e4a.add(lbldatecompleted, imgdown8);
    var lblline8 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline8",
        "isVisible": false,
        "right": "4dp",
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
    fcdatecompleted.add(FlexContainer0cddca5c7ce6e4a, lblline8);
    fcviewtaskhdr.add(fcpatientname, fcwoundnumber, fctasks, fcdatecreated, fcduedate, fcnotes, fcstatus, fcdatecompleted);
    var segviewtasks = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "btnmarkcomplete": "",
            "lbldatecompleted": "",
            "lbldatecreated": "",
            "lblduedate": "",
            "lblline1": "",
            "lblline2": "",
            "lblline3": "",
            "lblline4": "",
            "lblline5": "",
            "lblline6": "",
            "lblline7": "",
            "lblline8": "",
            "lblnotes": "",
            "lblpatientname": "",
            "lblstatus": "",
            "lbltasks": "",
            "lblwoundnumber": ""
        }],
        "groupCells": false,
        "id": "segviewtasks",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegment",
        "rowTemplate": fcviewtask,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "100dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer003bf4c58a6f648": "FlexContainer003bf4c58a6f648",
            "FlexContainer01cdc97ef9e1243": "FlexContainer01cdc97ef9e1243",
            "FlexContainer071f487a8c34642": "FlexContainer071f487a8c34642",
            "FlexContainer0ad9260b685b747": "FlexContainer0ad9260b685b747",
            "FlexContainer0b56dbe2f0c6e47": "FlexContainer0b56dbe2f0c6e47",
            "FlexContainer0c76bf83ca0b343": "FlexContainer0c76bf83ca0b343",
            "FlexContainer0cddca5c7ce6e4a": "FlexContainer0cddca5c7ce6e4a",
            "FlexContainer0f5b4c782f0824d": "FlexContainer0f5b4c782f0824d",
            "btnmarkcomplete": "btnmarkcomplete",
            "fcdatecompleted": "fcdatecompleted",
            "fcdatecreated": "fcdatecreated",
            "fcduedate": "fcduedate",
            "fcnotes": "fcnotes",
            "fcpatientname": "fcpatientname",
            "fcstatus": "fcstatus",
            "fctasks": "fctasks",
            "fcviewtask": "fcviewtask",
            "fcwoundnumber": "fcwoundnumber",
            "lbldatecompleted": "lbldatecompleted",
            "lbldatecreated": "lbldatecreated",
            "lblduedate": "lblduedate",
            "lblline1": "lblline1",
            "lblline2": "lblline2",
            "lblline3": "lblline3",
            "lblline4": "lblline4",
            "lblline5": "lblline5",
            "lblline6": "lblline6",
            "lblline7": "lblline7",
            "lblline8": "lblline8",
            "lblnotes": "lblnotes",
            "lblpatientname": "lblpatientname",
            "lblstatus": "lblstatus",
            "lbltasks": "lbltasks",
            "lblwoundnumber": "lblwoundnumber"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparator1 = new kony.ui.Label({
        "height": "50dp",
        "id": "lblseparator1",
        "isVisible": true,
        "left": "11%",
        "skin": "sknlblline",
        "top": "50dp",
        "width": "1dp",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparator2 = new kony.ui.Label({
        "height": "50dp",
        "id": "lblseparator2",
        "isVisible": true,
        "left": "19.50%",
        "skin": "sknlblline",
        "top": "50dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparator3 = new kony.ui.Label({
        "height": "50dp",
        "id": "lblseparator3",
        "isVisible": true,
        "left": "39%",
        "skin": "sknlblline",
        "top": "50dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparator4 = new kony.ui.Label({
        "height": "50dp",
        "id": "lblseparator4",
        "isVisible": true,
        "left": "48.50%",
        "skin": "sknlblline",
        "top": "50dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparator5 = new kony.ui.Label({
        "height": "50dp",
        "id": "lblseparator5",
        "isVisible": true,
        "left": "57%",
        "skin": "sknlblline",
        "top": "50dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparator6 = new kony.ui.Label({
        "height": "50dp",
        "id": "lblseparator6",
        "isVisible": true,
        "left": "77.50%",
        "skin": "sknlblline",
        "top": "50dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblseparator7 = new kony.ui.Label({
        "height": "50dp",
        "id": "lblseparator7",
        "isVisible": true,
        "left": "86%",
        "skin": "sknlblline",
        "top": "50dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhorzsptr = new kony.ui.Label({
        "bottom": "-2dp",
        "height": "1dp",
        "id": "lblhorzsptr",
        "isVisible": false,
        "left": "0dp",
        "skin": "sknlblhorzseprator",
        "width": "100%",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fctaskbody.add(fcpatienthdrbox, fcviewtaskhdr, segviewtasks, lblseparator1, lblseparator2, lblseparator3, lblseparator4, lblseparator5, lblseparator6, lblseparator7, lblhorzsptr);
    var fcprintshow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "137dp",
        "id": "fcprintshow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "24dp",
        "skin": "slFbox",
        "top": "51dp",
        "width": "12%",
        "zIndex": 5
    }, {}, {});
    fcprintshow.setDefaultUnit(kony.flex.DP);
    var km3a7ff3d9f1842f68d6c9dd7539f94e2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "isMaster": true,
        "id": "fcPrintMenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "right": "0dp",
        "top": "-1dp",
        "width": "150dp",
        "height": "126dp",
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcwhitegraybdr"
    }, {}, {});
    km3a7ff3d9f1842f68d6c9dd7539f94e2.setDefaultUnit(kony.flex.DP);
    var km0a6334da74042649cecf3f3d7bcda61 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcPrint",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_365e100466c34004b7d22542afc4bcdb,
        "skin": "sknfcgray"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    km0a6334da74042649cecf3f3d7bcda61.setDefaultUnit(kony.flex.DP);
    var km0d2f17bab8a4b0f888d9dccab992725 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgPrint",
        "left": "3dp",
        "src": "print.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmb962353270c46429ba97b583c78caa0 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPrint",
        "left": "35dp",
        "text": "Print",
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
    km0a6334da74042649cecf3f3d7bcda61.add(km0d2f17bab8a4b0f888d9dccab992725, kmb962353270c46429ba97b583c78caa0);
    var kmcd3cfa8167243249e92834461e43e3c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcExportPdf",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_15e764ba0b38408184de4529f3a50bdd,
        "skin": "skfcwhitenobrdr"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    kmcd3cfa8167243249e92834461e43e3c.setDefaultUnit(kony.flex.DP);
    var kmd20b61c3427485d8e5562f203efff3f = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgExportPdf",
        "left": "3dp",
        "src": "pdf.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km61257ebf17649d0a8eef7bfd801985a = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblExportPdf",
        "left": "35dp",
        "text": "Export PDF",
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
    kmcd3cfa8167243249e92834461e43e3c.add(kmd20b61c3427485d8e5562f203efff3f, km61257ebf17649d0a8eef7bfd801985a);
    var kmd996ef1c52c4db48e8146c8e459c7a5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcExportExcel",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_68f9ff553459408a9d48b64cf63df781,
        "skin": "sknfcgray"
    }, {}, {
        "hoverSkin": "sknfcdarkgray"
    });
    kmd996ef1c52c4db48e8146c8e459c7a5.setDefaultUnit(kony.flex.DP);
    var km9f573cf135d4092a766b45bcba5b690 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgExportExcel",
        "left": "3dp",
        "src": "excel.png",
        "width": "25dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmaaaf919999542bda57f5bd208810ce4 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblExportExcel",
        "left": "35dp",
        "text": "Export Excel",
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
    kmd996ef1c52c4db48e8146c8e459c7a5.add(km9f573cf135d4092a766b45bcba5b690, kmaaaf919999542bda57f5bd208810ce4);
    km3a7ff3d9f1842f68d6c9dd7539f94e2.add(km0a6334da74042649cecf3f3d7bcda61, kmcd3cfa8167243249e92834461e43e3c, kmd996ef1c52c4db48e8146c8e459c7a5);
    fcprintshow.add(km3a7ff3d9f1842f68d6c9dd7539f94e2);
    var lblEmptyList = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblEmptyList",
        "isVisible": false,
        "skin": "sklblblack120",
        "text": "Label",
        "top": "300dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fscbody.add(fctasksearch, fcsearchdropdown, fcprofile, fctaskbody, fcprintshow, lblEmptyList);
    var km205549e0e934338a642f66bd4540c79 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "isMaster": true,
        "id": "fctopmenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "right": "0dp",
        "top": "-1dp",
        "width": "150dp",
        "zIndex": 5,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "sknfcwhitebg"
    }, {}, {});
    km205549e0e934338a642f66bd4540c79.setDefaultUnit(kony.flex.DP);
    var kme93f1c2619f4de6a9cc3054d9719e10 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_6b5ec0bbac6142a893527d61458ddb62,
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
    kme93f1c2619f4de6a9cc3054d9719e10.setDefaultUnit(kony.flex.DP);
    var km7427229657b4ac59eb37fa4391c56c2 = new kony.ui.Image2({
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
    var kmcd312eeefb942b48446393d684a623a = new kony.ui.Label({
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
    kme93f1c2619f4de6a9cc3054d9719e10.add(km7427229657b4ac59eb37fa4391c56c2, kmcd312eeefb942b48446393d684a623a);
    var km562fee8ab144d46b1f93c5726db068c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_15a880df250d485bab10916ded78d5ae,
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
    km562fee8ab144d46b1f93c5726db068c.setDefaultUnit(kony.flex.DP);
    var km40cf344bb3a467885eab42711fa7d2c = new kony.ui.Image2({
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
    var km32148e1f2b544baa2cc09b72c7da8b6 = new kony.ui.Label({
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
    km562fee8ab144d46b1f93c5726db068c.add(km40cf344bb3a467885eab42711fa7d2c, km32148e1f2b544baa2cc09b72c7da8b6);
    var km10eee1e31ad454587e3f0799bf93ca7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_081895db97164393941a7fdb5072da20,
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
    km10eee1e31ad454587e3f0799bf93ca7.setDefaultUnit(kony.flex.DP);
    var kmdc88aed67c54118a0e3d6089785653a = new kony.ui.Image2({
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
    var km5846db4563846c8859fd11babd92f1c = new kony.ui.Label({
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
    km10eee1e31ad454587e3f0799bf93ca7.add(kmdc88aed67c54118a0e3d6089785653a, km5846db4563846c8859fd11babd92f1c);
    var km78ef8d897aa43c9afa5650c917da748 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_cf7166b45da049b9a910b203ad2fbfb0,
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
    km78ef8d897aa43c9afa5650c917da748.setDefaultUnit(kony.flex.DP);
    var kmf40529e36774ee1ba2a817b993eadb1 = new kony.ui.Image2({
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
    var kmd455fd02fd544b98d99e6d08b34894a = new kony.ui.Label({
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
    var km93d732b315b4d3ab49f21371e1a9ceb = new kony.ui.Label({
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
    km78ef8d897aa43c9afa5650c917da748.add(kmf40529e36774ee1ba2a817b993eadb1, kmd455fd02fd544b98d99e6d08b34894a, km93d732b315b4d3ab49f21371e1a9ceb);
    km205549e0e934338a642f66bd4540c79.add(kme93f1c2619f4de6a9cc3054d9719e10, km562fee8ab144d46b1f93c5726db068c, km10eee1e31ad454587e3f0799bf93ca7, km78ef8d897aa43c9afa5650c917da748);
    fcmainbody.add(fcbodyheader, fscsidemenu, fscbody, km205549e0e934338a642f66bd4540c79);
    var fcpaginatebuttons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70dp",
        "id": "fcpaginatebuttons",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "4%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 3
    }, {}, {});
    fcpaginatebuttons.setDefaultUnit(kony.flex.DP);
    var btnViewAll = new kony.ui.Button({
        "centerX": "64%",
        "centerY": "50%",
        "focusSkin": "sknbtnbluebold80",
        "height": "50%",
        "id": "btnViewAll",
        "isVisible": true,
        "onClick": AS_Button_cc811036f3df41ad8366931b02002e3e,
        "skin": "sknbtnbluebg100",
        "text": "View All",
        "width": "20%",
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
        "centerX": "38%",
        "centerY": "50%",
        "focusSkin": "sknbtnbluebold80",
        "height": "50%",
        "id": "btnViewMore",
        "isVisible": true,
        "onClick": AS_Button_41db03baff3a43d1b13575f37a0c3904,
        "skin": "sknbtnbluebg100",
        "text": "View More",
        "width": "20%",
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
    var fcfooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "45dp",
        "id": "fcfooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcfooter.setDefaultUnit(kony.flex.DP);
    var km2d19aca52444301aeef86b99a210b19 = new kony.ui.FlexContainer({
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
    km2d19aca52444301aeef86b99a210b19.setDefaultUnit(kony.flex.DP);
    var kmc86cee83bcd4870a2118cdea9cdccd8 = new kony.ui.RichText({
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
    km2d19aca52444301aeef86b99a210b19.add(kmc86cee83bcd4870a2118cdea9cdccd8);
    fcfooter.add(km2d19aca52444301aeef86b99a210b19);
    frmViewTasksNew.add(kmeccfb9b5583420f946ab4cc0d6b2a30, fcmainbody, fcpaginatebuttons, fcfooter);
};

function frmViewTasksNewGlobals() {
    frmViewTasksNew = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmViewTasksNew,
        "enabledForIdleTimeout": true,
        "id": "frmViewTasksNew",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onTouchEnd": AS_Form_2ecd3847727a48f78cde9e092956094d,
        "postShow": AS_Form_a102a56adeb048cbb69edab426db85be,
        "skin": "skfrmgray"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "onDeviceBack": AS_Form_ca6b5362560142b3b0c1a2031f4aa680,
        "retainScrollPosition": false
    });
};