function addWidgetsfrmLanding() {
    frmLanding.setDefaultUnit(kony.flex.DP);
    var kmf839cd9d693486886527751d4162589 = new kony.ui.FlexContainer({
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
    kmf839cd9d693486886527751d4162589.setDefaultUnit(kony.flex.DP);
    var kmcefb0edca2345558a8ed06c0ab51379 = new kony.ui.FlexContainer({
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
    kmcefb0edca2345558a8ed06c0ab51379.setDefaultUnit(kony.flex.DP);
    var kma1a6a893568481bb20e4fe671901e4a = new kony.ui.Image2({
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
    var km52e403d88c3493395533683145dae0b = new kony.ui.FlexContainer({
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
    km52e403d88c3493395533683145dae0b.setDefaultUnit(kony.flex.DP);
    km52e403d88c3493395533683145dae0b.add();
    var km7e2ba2756154ae89ab805babde817bd = new kony.ui.Label({
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
    var kme94297ff83b4c4ab851a55e5e6c0ee8 = new kony.ui.RichText({
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
    kmcefb0edca2345558a8ed06c0ab51379.add(kma1a6a893568481bb20e4fe671901e4a, km52e403d88c3493395533683145dae0b, km7e2ba2756154ae89ab805babde817bd, kme94297ff83b4c4ab851a55e5e6c0ee8);
    var kmbe548fb0cc04473b07eb6514dfaca31 = new kony.ui.FlexContainer({
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
    kmbe548fb0cc04473b07eb6514dfaca31.setDefaultUnit(kony.flex.DP);
    var kmed4260c4340490baca320ef4b75c8b0 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
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
    kmed4260c4340490baca320ef4b75c8b0.setDefaultUnit(kony.flex.DP);
    var kme05f8cce55141cc819bc96a1e16e9b2 = new kony.ui.Image2({
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
    var kme552ebdcfce4d59b5f8fda023e58c6e = new kony.ui.FlexContainer({
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
    kme552ebdcfce4d59b5f8fda023e58c6e.setDefaultUnit(kony.flex.DP);
    var km4a5e0afda04419bb0b4bf9dd988c0bd = new kony.ui.RichText({
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
    var km065d602baae4a498ce9a1cbacf6ee66 = new kony.ui.RichText({
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
    var kmf634c05d54b4028b396618ccc61a75e = new kony.ui.RichText({
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
    kme552ebdcfce4d59b5f8fda023e58c6e.add(km4a5e0afda04419bb0b4bf9dd988c0bd, km065d602baae4a498ce9a1cbacf6ee66, kmf634c05d54b4028b396618ccc61a75e);
    kmed4260c4340490baca320ef4b75c8b0.add(kme05f8cce55141cc819bc96a1e16e9b2, kme552ebdcfce4d59b5f8fda023e58c6e);
    var kmbd26645943345a4886d01133c316326 = new kony.ui.FlexContainer({
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
    kmbd26645943345a4886d01133c316326.setDefaultUnit(kony.flex.DP);
    var km8d30384d8c346f2806558dc8cb92d0a = new kony.ui.FlexContainer({
        "centerY": "50%",
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
    km8d30384d8c346f2806558dc8cb92d0a.setDefaultUnit(kony.flex.DP);
    km8d30384d8c346f2806558dc8cb92d0a.add();
    var kma1f5196000b4020993591925ac69abc = new kony.ui.Image2({
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
    var kmbce5f9f887045bcad0d196ff57b14f3 = new kony.ui.Label({
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
    var km66e0973a6784a3eb33aa5254834e4d3 = new kony.ui.Label({
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
    kmbd26645943345a4886d01133c316326.add(km8d30384d8c346f2806558dc8cb92d0a, kma1f5196000b4020993591925ac69abc, kmbce5f9f887045bcad0d196ff57b14f3, km66e0973a6784a3eb33aa5254834e4d3);
    var kmc1d22ca4ec34a3b8ddfcaa90340d7e0 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_1ffb4a5959934abe99e6b5b092eb6fdc,
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
    kmc1d22ca4ec34a3b8ddfcaa90340d7e0.setDefaultUnit(kony.flex.DP);
    var km660d468ae614bd0a0ec0eda17dccb53 = new kony.ui.Image2({
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
    var kmbc48520270144898a0412e1ca75b6b9 = new kony.ui.FlexContainer({
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
    kmbc48520270144898a0412e1ca75b6b9.setDefaultUnit(kony.flex.DP);
    var km15d3b2300a640e48696ccdc9cfd50f6 = new kony.ui.Label({
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
    kmbc48520270144898a0412e1ca75b6b9.add(km15d3b2300a640e48696ccdc9cfd50f6);
    kmc1d22ca4ec34a3b8ddfcaa90340d7e0.add(km660d468ae614bd0a0ec0eda17dccb53, kmbc48520270144898a0412e1ca75b6b9);
    var km36aacd83cf5417ead4858d9243ccb8b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_5aa302a7537240d6b3c299fa41b41796,
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
    km36aacd83cf5417ead4858d9243ccb8b.setDefaultUnit(kony.flex.DP);
    var km10bbe4134ed42d1a06071cd5d853476 = new kony.ui.Image2({
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
    km36aacd83cf5417ead4858d9243ccb8b.add(km10bbe4134ed42d1a06071cd5d853476);
    kmbe548fb0cc04473b07eb6514dfaca31.add(kmed4260c4340490baca320ef4b75c8b0, kmbd26645943345a4886d01133c316326, kmc1d22ca4ec34a3b8ddfcaa90340d7e0, km36aacd83cf5417ead4858d9243ccb8b);
    var km5852dd40e9d410f8fe881e92ddbc2eb = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "fcheaderline",
        "layoutType": kony.flex.FREE_FORM,
        "top": "82dp",
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcline"
    }, {}, {});
    km5852dd40e9d410f8fe881e92ddbc2eb.setDefaultUnit(kony.flex.DP);
    var kmae906a34b364074b5d8aea25e39b7f5 = new kony.ui.Label({
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
    km5852dd40e9d410f8fe881e92ddbc2eb.add(kmae906a34b364074b5d8aea25e39b7f5);
    kmf839cd9d693486886527751d4162589.add(kmcefb0edca2345558a8ed06c0ab51379, kmbe548fb0cc04473b07eb6514dfaca31, km5852dd40e9d410f8fe881e92ddbc2eb);
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
        "zIndex": 2
    }, {}, {});
    fscmainbody.setDefaultUnit(kony.flex.DP);
    var fcheadershadow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "fcheadershadow",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": 0,
        "skin": "sknfcheadershadow",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    fcheadershadow.setDefaultUnit(kony.flex.DP);
    fcheadershadow.add();
    var fcrowonecopy = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "focusSkin": "slFbox",
        "height": "160dp",
        "id": "fcrowonecopy",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrowonecopy.setDefaultUnit(kony.flex.DP);
    fcrowonecopy.add();
    var fcrowone = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "focusSkin": "slFbox",
        "height": "160dp",
        "id": "fcrowone",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "50dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrowone.setDefaultUnit(kony.flex.DP);
    var btnwccdashboard = new kony.ui.Button({
        "centerX": "30%",
        "focusSkin": "sknbtnwcc",
        "height": "160dp",
        "id": "btnwccdashboard",
        "isVisible": true,
        "onClick": AS_Button_3bf21698f9c74b4b823685f2daa8c5c7,
        "skin": "sknbtnwcc",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnwcchover"
    });
    var btnpatientsafety = new kony.ui.Button({
        "focusSkin": "sknbtnpatientsafety",
        "height": "160dp",
        "id": "btnpatientsafety",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_87296c06a76444d799be5b86f4a94e3e,
        "skin": "sknbtnpatientsafety",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnpatientsafetyhover"
    });
    var btnadministration = new kony.ui.Button({
        "focusSkin": "sknbtnadmin",
        "height": "160dp",
        "id": "btnadministration",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_3ebf16d6c7804591a07f376ae05558ab,
        "skin": "sknbtnadmin",
        "text": "Button",
        "top": "0.00%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnadminhover"
    });
    var btnSystemNotification = new kony.ui.Button({
        "height": "154dp",
        "id": "btnSystemNotification",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_b36750d5ec9043498d41ce4c956e5c5d,
        "skin": "sknBtnSystemNotification",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknBtnSystemNotificationhover"
    });
    fcrowone.add(btnwccdashboard, btnpatientsafety, btnadministration, btnSystemNotification);
    var fcrowtwocopy = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "160dp",
        "id": "fcrowtwocopy",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "220dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrowtwocopy.setDefaultUnit(kony.flex.DP);
    fcrowtwocopy.add();
    var fcrowtwo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "160dp",
        "id": "fcrowtwo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "220dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrowtwo.setDefaultUnit(kony.flex.DP);
    var btnphotomobile = new kony.ui.Button({
        "centerX": "30%",
        "focusSkin": "sknbtnphotomobile",
        "height": "160dp",
        "id": "btnphotomobile",
        "isVisible": false,
        "skin": "sknbtnphotomobile",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnphotomobilehover"
    });
    var btnbilling = new kony.ui.Button({
        "centerX": "30%",
        "focusSkin": "sknbtnbilling",
        "height": "160dp",
        "id": "btnbilling",
        "isVisible": true,
        "skin": "sknbtnbilling",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnbillinghover"
    });
    var btnregistration = new kony.ui.Button({
        "focusSkin": "sknbtnregistration",
        "height": "160dp",
        "id": "btnregistration",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknbtnregistration",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnregistrationhover"
    });
    var btncommunity = new kony.ui.Button({
        "focusSkin": "sknbtncommunityed",
        "height": "160dp",
        "id": "btncommunity",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknbtncommunityed",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtncommunityedhover"
    });
    var btnscheduling = new kony.ui.Button({
        "focusSkin": "sknbtnscheduling",
        "height": "160dp",
        "id": "btnscheduling",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknbtnscheduling",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnschedulinghover"
    });
    fcrowtwo.add(btnphotomobile, btnbilling, btnregistration, btncommunity, btnscheduling);
    var fcrowthreecopy = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "200dp",
        "id": "fcrowthreecopy",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "390dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrowthreecopy.setDefaultUnit(kony.flex.DP);
    fcrowthreecopy.add();
    var fcrowthree = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "200dp",
        "id": "fcrowthree",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "390dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcrowthree.setDefaultUnit(kony.flex.DP);
    var btnprocedures = new kony.ui.Button({
        "centerX": "30%",
        "focusSkin": "sknbtnprocedures",
        "height": "160dp",
        "id": "btnprocedures",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknbtnprocedures",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnprocedureshover"
    });
    var btndme = new kony.ui.Button({
        "focusSkin": "sknbtndme",
        "height": "160dp",
        "id": "btndme",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknbtndme",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtndmehover"
    });
    var btnspotfire = new kony.ui.Button({
        "focusSkin": "sknbtnspotfire",
        "height": "160dp",
        "id": "btnspotfire",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknbtnspotfire",
        "text": "Button",
        "top": "0%",
        "width": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnspotfirehover"
    });
    fcrowthree.add(btnprocedures, btndme, btnspotfire);
    var kmdc224aa24594067afbebea6d78e61f9 = new kony.ui.FlexContainer({
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
    kmdc224aa24594067afbebea6d78e61f9.setDefaultUnit(kony.flex.DP);
    var kmab3a96f6bf4474d828c7f3a91e5742a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_eb648110393044b2933489597c90be9f,
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
    kmab3a96f6bf4474d828c7f3a91e5742a.setDefaultUnit(kony.flex.DP);
    var kme6b17c220de4f659b3ce8080d397f6c = new kony.ui.Image2({
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
    var km155071895d74f6d800e042246998618 = new kony.ui.Label({
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
    kmab3a96f6bf4474d828c7f3a91e5742a.add(kme6b17c220de4f659b3ce8080d397f6c, km155071895d74f6d800e042246998618);
    var km6a2b39b7445483097405c568a1d9ee2 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_52aa211c839d44d1ae7630a491e4e9a6,
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
    km6a2b39b7445483097405c568a1d9ee2.setDefaultUnit(kony.flex.DP);
    var km19487446f704d81b2b73c02a99090c0 = new kony.ui.Image2({
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
    var km627ead515174414a9f99d31f1ff16af = new kony.ui.Label({
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
    km6a2b39b7445483097405c568a1d9ee2.add(km19487446f704d81b2b73c02a99090c0, km627ead515174414a9f99d31f1ff16af);
    var km266747041724d079b939361fe53d65a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_54675ad7028542c6abddd2634ded5bfb,
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
    km266747041724d079b939361fe53d65a.setDefaultUnit(kony.flex.DP);
    var km22739d6de8643f7ad712496c9477b2b = new kony.ui.Image2({
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
    var km0341e6023644a77908f900fa76cad45 = new kony.ui.Label({
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
    km266747041724d079b939361fe53d65a.add(km22739d6de8643f7ad712496c9477b2b, km0341e6023644a77908f900fa76cad45);
    var kma49d108271044009f93a8a1983d7dbd = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_2ea2d7134dc54cc193ed16fcdf1712a9,
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
    kma49d108271044009f93a8a1983d7dbd.setDefaultUnit(kony.flex.DP);
    var kmb3423cf0d184ecda198920c014772ed = new kony.ui.Image2({
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
    var km22a4c0040684413a3d3de666bea131f = new kony.ui.Label({
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
    kma49d108271044009f93a8a1983d7dbd.add(kmb3423cf0d184ecda198920c014772ed, km22a4c0040684413a3d3de666bea131f, km7846e0b51b5475aaa4d3aad88f0c972);
    kmdc224aa24594067afbebea6d78e61f9.add(kmab3a96f6bf4474d828c7f3a91e5742a, km6a2b39b7445483097405c568a1d9ee2, km266747041724d079b939361fe53d65a, kma49d108271044009f93a8a1983d7dbd);
    fscmainbody.add(fcheadershadow, fcrowonecopy, fcrowone, fcrowtwocopy, fcrowtwo, fcrowthreecopy, fcrowthree, kmdc224aa24594067afbebea6d78e61f9);
    var kmc1307545e584949b92f081249fb2dff = new kony.ui.FlexContainer({
        "bottom": "0dp",
        "clipBounds": true,
        "isMaster": true,
        "height": "40dp",
        "id": "fcmstfooter",
        "layoutType": kony.flex.FREE_FORM,
        "top": "18.50%",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcGrayBg"
    }, {}, {});
    kmc1307545e584949b92f081249fb2dff.setDefaultUnit(kony.flex.DP);
    var km29a72b610cb4a12a1b0f141cde40f21 = new kony.ui.RichText({
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
    kmc1307545e584949b92f081249fb2dff.add(km29a72b610cb4a12a1b0f141cde40f21);
    frmLanding.add(kmf839cd9d693486886527751d4162589, fscmainbody, kmc1307545e584949b92f081249fb2dff);
};

function frmLandingGlobals() {
    frmLanding = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLanding,
        "enabledForIdleTimeout": true,
        "id": "frmLanding",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onTouchEnd": AS_Form_c1064143ce5549f7a172f769c1250917,
        "postShow": AS_Form_62df27efbbc245c6ba196ddc389438ec,
        "skin": "skfrmgray"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "onDeviceBack": AS_Form_ib168b761319426fa9fc6a66c3469845,
        "retainScrollPosition": false
    });
};