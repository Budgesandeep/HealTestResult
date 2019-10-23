function addWidgetsfrmApps() {
    frmApps.setDefaultUnit(kony.flex.DP);
    var kma6f6b61c71a4a0789334eed4decdda6 = new kony.ui.FlexContainer({
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
    kma6f6b61c71a4a0789334eed4decdda6.setDefaultUnit(kony.flex.DP);
    var km264acb5990f416e90ae720961c51c64 = new kony.ui.FlexContainer({
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
    km264acb5990f416e90ae720961c51c64.setDefaultUnit(kony.flex.DP);
    var km348673bb8404b59a416aec3192ac02a = new kony.ui.Image2({
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
    var km74050dab2ab4351b6318c440422c426 = new kony.ui.FlexContainer({
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
    km74050dab2ab4351b6318c440422c426.setDefaultUnit(kony.flex.DP);
    km74050dab2ab4351b6318c440422c426.add();
    var km3cc8c9c365e48b18529af126c85fff1 = new kony.ui.Label({
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
    var kmc4a6b6a1dcc4aae9a0b3fd7f88e33b5 = new kony.ui.RichText({
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
    km264acb5990f416e90ae720961c51c64.add(km348673bb8404b59a416aec3192ac02a, km74050dab2ab4351b6318c440422c426, km3cc8c9c365e48b18529af126c85fff1, kmc4a6b6a1dcc4aae9a0b3fd7f88e33b5);
    var kmf28d79f5a9d47d8b3140107d7812a1f = new kony.ui.FlexContainer({
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
    kmf28d79f5a9d47d8b3140107d7812a1f.setDefaultUnit(kony.flex.DP);
    var kmd0772103368480e8f07d53c16c21cae = new kony.ui.FlexContainer({
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
    kmd0772103368480e8f07d53c16c21cae.setDefaultUnit(kony.flex.DP);
    var km07b0c65da3743b589c171cb76fecb35 = new kony.ui.Image2({
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
    var km253d557cf3e4cc49eb14f7d94b470c1 = new kony.ui.FlexContainer({
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
    km253d557cf3e4cc49eb14f7d94b470c1.setDefaultUnit(kony.flex.DP);
    var km69d59a8a6954ac488bceb9dcc07a6cf = new kony.ui.RichText({
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
    var km5276099858a49418b68a58a0075c7c0 = new kony.ui.RichText({
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
    var km78346bbe3c14939a5af95f1ada499b7 = new kony.ui.RichText({
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
    km253d557cf3e4cc49eb14f7d94b470c1.add(km69d59a8a6954ac488bceb9dcc07a6cf, km5276099858a49418b68a58a0075c7c0, km78346bbe3c14939a5af95f1ada499b7);
    kmd0772103368480e8f07d53c16c21cae.add(km07b0c65da3743b589c171cb76fecb35, km253d557cf3e4cc49eb14f7d94b470c1);
    var kme634d9988c646c6aee9e66e396c950c = new kony.ui.FlexContainer({
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
    kme634d9988c646c6aee9e66e396c950c.setDefaultUnit(kony.flex.DP);
    var km0614cea0b7140358443e68c5350384f = new kony.ui.FlexContainer({
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
    km0614cea0b7140358443e68c5350384f.setDefaultUnit(kony.flex.DP);
    km0614cea0b7140358443e68c5350384f.add();
    var km23c9c5718304aa89533007c19130bec = new kony.ui.Image2({
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
    var km9f0e83519c147219c55919c512ce7ad = new kony.ui.Label({
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
    var kmad44a8928ea4be8af56362e32366b1d = new kony.ui.Label({
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
    kme634d9988c646c6aee9e66e396c950c.add(km0614cea0b7140358443e68c5350384f, km23c9c5718304aa89533007c19130bec, km9f0e83519c147219c55919c512ce7ad, kmad44a8928ea4be8af56362e32366b1d);
    var kmb70cc6747154a14b616009f9e822f31 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_e61a392e53d74793a9f07b144cef98fd,
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
    kmb70cc6747154a14b616009f9e822f31.setDefaultUnit(kony.flex.DP);
    var km697cbe448f049af979521ef805277b7 = new kony.ui.Image2({
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
    var km7ba49604de4475c99f59968f064bf7d = new kony.ui.FlexContainer({
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
    km7ba49604de4475c99f59968f064bf7d.setDefaultUnit(kony.flex.DP);
    var km4322651f105441b9c2fe54560d70980 = new kony.ui.Label({
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
    km7ba49604de4475c99f59968f064bf7d.add(km4322651f105441b9c2fe54560d70980);
    kmb70cc6747154a14b616009f9e822f31.add(km697cbe448f049af979521ef805277b7, km7ba49604de4475c99f59968f064bf7d);
    var km9fbe767d4564c56a432347936eec97f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_f67e75285b6a4c1d94a870d7f28d94b1,
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
    km9fbe767d4564c56a432347936eec97f.setDefaultUnit(kony.flex.DP);
    var km0715d60543943ceb974e192ff68680a = new kony.ui.Image2({
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
    km9fbe767d4564c56a432347936eec97f.add(km0715d60543943ceb974e192ff68680a);
    kmf28d79f5a9d47d8b3140107d7812a1f.add(kmd0772103368480e8f07d53c16c21cae, kme634d9988c646c6aee9e66e396c950c, kmb70cc6747154a14b616009f9e822f31, km9fbe767d4564c56a432347936eec97f);
    var kma12022a0d0b42c1b9eab0f2567387c4 = new kony.ui.FlexContainer({
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
    kma12022a0d0b42c1b9eab0f2567387c4.setDefaultUnit(kony.flex.DP);
    var km4ae63504b124b0dbc5101d5a07857a0 = new kony.ui.Label({
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
    kma12022a0d0b42c1b9eab0f2567387c4.add(km4ae63504b124b0dbc5101d5a07857a0);
    kma6f6b61c71a4a0789334eed4decdda6.add(km264acb5990f416e90ae720961c51c64, kmf28d79f5a9d47d8b3140107d7812a1f, kma12022a0d0b42c1b9eab0f2567387c4);
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
    var fcrowone = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "slFbox",
        "height": "160dp",
        "id": "fcrowone",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox",
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
        "onClick": AS_Button_ebc1c67f374b4d0b819bb91a66174748,
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
        "onClick": AS_Button_gbdd2314e60e47c98a2cb417b8c8735f,
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
        "onClick": AS_Button_bce931856d354399bb5aa7a073c7a7c1,
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
        "focusSkin": "sknBtnSystemNotificationhover",
        "height": "154dp",
        "id": "btnSystemNotification",
        "isVisible": true,
        "left": "10dp",
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
    var kmd98944d1d18454e99fae6c28868c980 = new kony.ui.FlexContainer({
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
    kmd98944d1d18454e99fae6c28868c980.setDefaultUnit(kony.flex.DP);
    var km5f06c65bf6c4d4d9b2c65cdad874186 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_d1c06d4b696940c0974dd8331ca4aa8f,
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
    km5f06c65bf6c4d4d9b2c65cdad874186.setDefaultUnit(kony.flex.DP);
    var kmc3eabf2beee447b82afa7b718c15f18 = new kony.ui.Image2({
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
    var km206e96ea1384c018b8d1550602c2760 = new kony.ui.Label({
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
    km5f06c65bf6c4d4d9b2c65cdad874186.add(kmc3eabf2beee447b82afa7b718c15f18, km206e96ea1384c018b8d1550602c2760);
    var km84a00ff70ab47b6a820073b4eaf0372 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_ac3c9c5c52ef4a199e8a585996c4dd72,
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
    km84a00ff70ab47b6a820073b4eaf0372.setDefaultUnit(kony.flex.DP);
    var kmcaaf325a0bf4222bea098a9cf4b5ccb = new kony.ui.Image2({
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
    var kmd6173ffcfad4392a6e8b8d3588bae43 = new kony.ui.Label({
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
    km84a00ff70ab47b6a820073b4eaf0372.add(kmcaaf325a0bf4222bea098a9cf4b5ccb, kmd6173ffcfad4392a6e8b8d3588bae43);
    var km8860fbbd5d349848c26bd80679191b3 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_e95685e7cbc449f290503d735c2e10b5,
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
    km8860fbbd5d349848c26bd80679191b3.setDefaultUnit(kony.flex.DP);
    var kmeddb115e5404a73aedabef1d4b261da = new kony.ui.Image2({
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
    var km5a0cf86da7d43c48a62b5baad7a8191 = new kony.ui.Label({
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
    km8860fbbd5d349848c26bd80679191b3.add(kmeddb115e5404a73aedabef1d4b261da, km5a0cf86da7d43c48a62b5baad7a8191);
    var km0fd2a9c7d2f473abe148e90a52d9a02 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_ce02d1a5648447fcaf5f3510d579b2ee,
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
    km0fd2a9c7d2f473abe148e90a52d9a02.setDefaultUnit(kony.flex.DP);
    var kmd52eff886ac494abd718c4e6a4f013f = new kony.ui.Image2({
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
    var km9a5b9f15c374e0dac82dd7261f99d1e = new kony.ui.Label({
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
    var km8a9ad0cb5564d139454ea15ec876575 = new kony.ui.Label({
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
    km0fd2a9c7d2f473abe148e90a52d9a02.add(kmd52eff886ac494abd718c4e6a4f013f, km9a5b9f15c374e0dac82dd7261f99d1e, km8a9ad0cb5564d139454ea15ec876575);
    kmd98944d1d18454e99fae6c28868c980.add(km5f06c65bf6c4d4d9b2c65cdad874186, km84a00ff70ab47b6a820073b4eaf0372, km8860fbbd5d349848c26bd80679191b3, km0fd2a9c7d2f473abe148e90a52d9a02);
    fscmainbody.add(fcheadershadow, fcrowone, fcrowtwo, fcrowthree, kmd98944d1d18454e99fae6c28868c980);
    var km219788e50364cdd815c524076cc99ab = new kony.ui.FlexContainer({
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
    km219788e50364cdd815c524076cc99ab.setDefaultUnit(kony.flex.DP);
    var km34219e4007948228605c27e04dbefb0 = new kony.ui.RichText({
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
    km219788e50364cdd815c524076cc99ab.add(km34219e4007948228605c27e04dbefb0);
    frmApps.add(kma6f6b61c71a4a0789334eed4decdda6, fscmainbody, km219788e50364cdd815c524076cc99ab);
};

function frmAppsGlobals() {
    frmApps = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmApps,
        "enabledForIdleTimeout": true,
        "id": "frmApps",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onTouchEnd": AS_Form_cb39361455fb4f3782a3fed079d69522,
        "postShow": AS_Form_de5547d203a44090822bd2ea803fd21a,
        "skin": "skfrmgray"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "onDeviceBack": AS_Form_geae8a637590447b88594e83633635d9,
        "retainScrollPosition": false
    });
};