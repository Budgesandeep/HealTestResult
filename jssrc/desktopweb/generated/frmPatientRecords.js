function addWidgetsfrmPatientRecords() {
    frmPatientRecords.setDefaultUnit(kony.flex.DP);
    var km3ce6faef05e4e44b499d1fec6dd83c4 = new kony.ui.FlexContainer({
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
    km3ce6faef05e4e44b499d1fec6dd83c4.setDefaultUnit(kony.flex.DP);
    var kmff962ccb19d4596b57ece6b24ebed6f = new kony.ui.FlexContainer({
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
    kmff962ccb19d4596b57ece6b24ebed6f.setDefaultUnit(kony.flex.DP);
    var kmd335a200eaf4ef582567f2501ea4c99 = new kony.ui.Image2({
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
    var km3dd896af02045e884caaab125826603 = new kony.ui.FlexContainer({
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
    km3dd896af02045e884caaab125826603.setDefaultUnit(kony.flex.DP);
    km3dd896af02045e884caaab125826603.add();
    var kme09df4a49fa41c7b9bc2cf3adb304d6 = new kony.ui.Label({
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
    var kmf0d1bb5f02843f69bb4c58879169dc1 = new kony.ui.RichText({
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
    kmff962ccb19d4596b57ece6b24ebed6f.add(kmd335a200eaf4ef582567f2501ea4c99, km3dd896af02045e884caaab125826603, kme09df4a49fa41c7b9bc2cf3adb304d6, kmf0d1bb5f02843f69bb4c58879169dc1);
    var kmc3d89992d2343b5b5d3a0b73c636b1e = new kony.ui.FlexContainer({
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
    kmc3d89992d2343b5b5d3a0b73c636b1e.setDefaultUnit(kony.flex.DP);
    var kmbcbe26a03184e1285dfa68f5372adbc = new kony.ui.FlexContainer({
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
    kmbcbe26a03184e1285dfa68f5372adbc.setDefaultUnit(kony.flex.DP);
    var km33b470605a34aa59d194d3eb1e2a1e9 = new kony.ui.Image2({
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
    var km402864e8f684174ab7aa6689bdf651d = new kony.ui.FlexContainer({
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
    km402864e8f684174ab7aa6689bdf651d.setDefaultUnit(kony.flex.DP);
    var kmb2a696d41d44951add7e1dab5296c90 = new kony.ui.RichText({
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
    var kmf63659b0e67496799c05557150aa354 = new kony.ui.RichText({
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
    var km27815c899ca497a848b48545c205534 = new kony.ui.RichText({
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
    km402864e8f684174ab7aa6689bdf651d.add(kmb2a696d41d44951add7e1dab5296c90, kmf63659b0e67496799c05557150aa354, km27815c899ca497a848b48545c205534);
    kmbcbe26a03184e1285dfa68f5372adbc.add(km33b470605a34aa59d194d3eb1e2a1e9, km402864e8f684174ab7aa6689bdf651d);
    var km502b161943d4669b92e763be654d809 = new kony.ui.FlexContainer({
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
    km502b161943d4669b92e763be654d809.setDefaultUnit(kony.flex.DP);
    var km2a32458df8747f2834a21571b524d06 = new kony.ui.FlexContainer({
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
    km2a32458df8747f2834a21571b524d06.setDefaultUnit(kony.flex.DP);
    km2a32458df8747f2834a21571b524d06.add();
    var km6141cafaba44e04a45aa6ec0d929918 = new kony.ui.Image2({
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
    var km36e48d74c6643679af28871482faceb = new kony.ui.Label({
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
    var kma2745803a0f444292a5ce2d84580fe6 = new kony.ui.Label({
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
    km502b161943d4669b92e763be654d809.add(km2a32458df8747f2834a21571b524d06, km6141cafaba44e04a45aa6ec0d929918, km36e48d74c6643679af28871482faceb, kma2745803a0f444292a5ce2d84580fe6);
    var km99f19d2f0ad4d69aba158f4ddcbdf35 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_0e6a3451ead644658d866fefd3f4ebbd,
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
    km99f19d2f0ad4d69aba158f4ddcbdf35.setDefaultUnit(kony.flex.DP);
    var kmc80002ffdd24771a9c84f25a02ef4e6 = new kony.ui.Image2({
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
    var kmf8146d007d44d18a271f0633a11cb4f = new kony.ui.FlexContainer({
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
    kmf8146d007d44d18a271f0633a11cb4f.setDefaultUnit(kony.flex.DP);
    var kme64ee361f0645eca654f9e4df44c1a0 = new kony.ui.Label({
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
    kmf8146d007d44d18a271f0633a11cb4f.add(kme64ee361f0645eca654f9e4df44c1a0);
    km99f19d2f0ad4d69aba158f4ddcbdf35.add(kmc80002ffdd24771a9c84f25a02ef4e6, kmf8146d007d44d18a271f0633a11cb4f);
    var km665c31c04414999b2cfb5bc2226eb23 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "83dp",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_3efaa9a7103d4d35938c16cc73733bd2,
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
    km665c31c04414999b2cfb5bc2226eb23.setDefaultUnit(kony.flex.DP);
    var kmf86351993fb47529194522dfaf0395a = new kony.ui.Image2({
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
    km665c31c04414999b2cfb5bc2226eb23.add(kmf86351993fb47529194522dfaf0395a);
    kmc3d89992d2343b5b5d3a0b73c636b1e.add(kmbcbe26a03184e1285dfa68f5372adbc, km502b161943d4669b92e763be654d809, km99f19d2f0ad4d69aba158f4ddcbdf35, km665c31c04414999b2cfb5bc2226eb23);
    var km9645268dca6468e96f9b416d7b55f72 = new kony.ui.FlexContainer({
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
    km9645268dca6468e96f9b416d7b55f72.setDefaultUnit(kony.flex.DP);
    var kmff14a1a1a2544669592a80c9dcf25f8 = new kony.ui.Label({
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
    km9645268dca6468e96f9b416d7b55f72.add(kmff14a1a1a2544669592a80c9dcf25f8);
    km3ce6faef05e4e44b499d1fec6dd83c4.add(kmff962ccb19d4596b57ece6b24ebed6f, kmc3d89992d2343b5b5d3a0b73c636b1e, km9645268dca6468e96f9b416d7b55f72);
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
        "onClick": AS_FlexContainer_bca9281f3d3844ec90f66b432fc5546a,
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
        "onClick": AS_Button_ff2ff78d9cec4a038b5d86d945727e36,
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
        "onClick": AS_Button_f2ad6175aa8940238c22fd3caf259a21,
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
    var km13876f987bb4cc9a867fe8b0c8a4cb0 = new kony.ui.FlexContainer({
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
    km13876f987bb4cc9a867fe8b0c8a4cb0.setDefaultUnit(kony.flex.DP);
    var km60e8f36810e4970a7cc0a7010a6823d = new kony.ui.FlexContainer({
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
    km60e8f36810e4970a7cc0a7010a6823d.setDefaultUnit(kony.flex.DP);
    var kmf963e10982d456d8fc09423539e8d64 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "onClick": AS_Button_50ee6fb464204e2ea5cefe077ef56562,
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
    km60e8f36810e4970a7cc0a7010a6823d.add(kmf963e10982d456d8fc09423539e8d64);
    var kmc73357605f34b199057690f06e30651 = new kony.ui.FlexContainer({
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
    kmc73357605f34b199057690f06e30651.setDefaultUnit(kony.flex.DP);
    var kmc1216a12ba84040afc5e2910da3438e = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "onClick": AS_Button_8571bd5e5bbe4c48ab3e1e836c4968e2,
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
    kmc73357605f34b199057690f06e30651.add(kmc1216a12ba84040afc5e2910da3438e);
    var kmb91ba93fbaa4f738d7fa0beafee26f1 = new kony.ui.FlexContainer({
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
    kmb91ba93fbaa4f738d7fa0beafee26f1.setDefaultUnit(kony.flex.DP);
    var kmde17da8a6224202abae237714110c5e = new kony.ui.Button({
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
    kmb91ba93fbaa4f738d7fa0beafee26f1.add(kmde17da8a6224202abae237714110c5e);
    var km32deaa6f2b24f1b8b6db3ffcaed2558 = new kony.ui.FlexContainer({
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
    km32deaa6f2b24f1b8b6db3ffcaed2558.setDefaultUnit(kony.flex.DP);
    var kmd15816c017a431ba679d10cf5571a19 = new kony.ui.Button({
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
    km32deaa6f2b24f1b8b6db3ffcaed2558.add(kmd15816c017a431ba679d10cf5571a19);
    var km06281a327624d01beca36c3955d6994 = new kony.ui.FlexContainer({
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
    km06281a327624d01beca36c3955d6994.setDefaultUnit(kony.flex.DP);
    var kmdf855bbaecc4c8fb14d0a59587cea92 = new kony.ui.Button({
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
    km06281a327624d01beca36c3955d6994.add(kmdf855bbaecc4c8fb14d0a59587cea92);
    var kmc9ae12294564f188cc766a51a0d3335 = new kony.ui.FlexContainer({
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
    kmc9ae12294564f188cc766a51a0d3335.setDefaultUnit(kony.flex.DP);
    var kmcadfd41ea7f4f26b3c1880381e9a939 = new kony.ui.Button({
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
    kmc9ae12294564f188cc766a51a0d3335.add(kmcadfd41ea7f4f26b3c1880381e9a939);
    var km6e19a4aca3b405baa7e43fba12e2c9b = new kony.ui.FlexContainer({
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
    km6e19a4aca3b405baa7e43fba12e2c9b.setDefaultUnit(kony.flex.DP);
    var km85e533302974acd8c01b23a8da503ba = new kony.ui.Button({
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
    km6e19a4aca3b405baa7e43fba12e2c9b.add(km85e533302974acd8c01b23a8da503ba);
    var km6c9023d6efb4939baf2c540325160cc = new kony.ui.FlexContainer({
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
    km6c9023d6efb4939baf2c540325160cc.setDefaultUnit(kony.flex.DP);
    var km2f85fea2be5496ab72f55c2bcdfd5c2 = new kony.ui.Button({
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
    km6c9023d6efb4939baf2c540325160cc.add(km2f85fea2be5496ab72f55c2bcdfd5c2);
    var kmdf096c171fa42f980a660d5435bd7fb = new kony.ui.FlexContainer({
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
    kmdf096c171fa42f980a660d5435bd7fb.setDefaultUnit(kony.flex.DP);
    var kmf33f32cee954762b76ef259f1b6286a = new kony.ui.Button({
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
    kmdf096c171fa42f980a660d5435bd7fb.add(kmf33f32cee954762b76ef259f1b6286a);
    var km7deb2e492fe42b0a4d58f04e646d5e8 = new kony.ui.FlexContainer({
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
    km7deb2e492fe42b0a4d58f04e646d5e8.setDefaultUnit(kony.flex.DP);
    var kmd1b27a268ee475ebec5dcf58c85d403 = new kony.ui.Button({
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
    km7deb2e492fe42b0a4d58f04e646d5e8.add(kmd1b27a268ee475ebec5dcf58c85d403);
    var km7c9521112874cb585eb6ed04cb4dc21 = new kony.ui.FlexContainer({
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
    km7c9521112874cb585eb6ed04cb4dc21.setDefaultUnit(kony.flex.DP);
    var km508669bc9ef432680bc9f3279af9a05 = new kony.ui.Button({
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
    km7c9521112874cb585eb6ed04cb4dc21.add(km508669bc9ef432680bc9f3279af9a05);
    var km580c2a009ca4d7e926989cc19917355 = new kony.ui.FlexContainer({
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
    km580c2a009ca4d7e926989cc19917355.setDefaultUnit(kony.flex.DP);
    var km137a4d33c3745bd9665a6bbdb792a5f = new kony.ui.Button({
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
    km580c2a009ca4d7e926989cc19917355.add(km137a4d33c3745bd9665a6bbdb792a5f);
    km13876f987bb4cc9a867fe8b0c8a4cb0.add(km60e8f36810e4970a7cc0a7010a6823d, kmc73357605f34b199057690f06e30651, kmb91ba93fbaa4f738d7fa0beafee26f1, km32deaa6f2b24f1b8b6db3ffcaed2558, km06281a327624d01beca36c3955d6994, kmc9ae12294564f188cc766a51a0d3335, km6e19a4aca3b405baa7e43fba12e2c9b, km6c9023d6efb4939baf2c540325160cc, kmdf096c171fa42f980a660d5435bd7fb, km7deb2e492fe42b0a4d58f04e646d5e8, km7c9521112874cb585eb6ed04cb4dc21, km580c2a009ca4d7e926989cc19917355);
    fscsidemenu.add(km13876f987bb4cc9a867fe8b0c8a4cb0);
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
        "onEndEditing": AS_TextField_2ba41fb6e1a44cf89d43193681f981cd,
        "onKeyUp": AS_TextField_27a37eda67c042f8abbcd31b4e5e0199
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
        "onClick": AS_FlexContainer_ea81ca2c52ea424aba974fd1168c9386,
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
        "onClick": AS_FlexContainer_4a516ca742c84dba815c46c413dcd180,
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
        "onRowClick": AS_Segment_d6901e2b85334feabdb50dd288cbce12,
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
        "onClick": AS_FlexContainer_ad9a74173f6e4677bfe81685bdff0232,
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
        "onClick": AS_FlexContainer_c2d92598ce5a4c3eb6ada938aae8d097,
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
        "onClick": AS_Button_fea4a0aaceec4239ba67651fb60f67db,
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
        "onClick": AS_Button_d2a27b96818b44d7932777055861adce,
        "skin": "skntbtnwhite85transbg",
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
        "skin": "skbtnblack85whitebg",
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
        "onClick": AS_FlexContainer_c89cdff5d3bd44f185debde568543b30,
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
    var fcPatientRecords = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcPatientRecords",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcPatientRecords.setDefaultUnit(kony.flex.DP);
    var segmentRecords = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imgBackground": "onelinearrownormal.png",
            "imgUpload": "upload.png",
            "lblLine": "Label",
            "lblRecordType": "Label"
        }, {
            "imgBackground": "onelinearrownormal.png",
            "imgUpload": "upload.png",
            "lblLine": "Label",
            "lblRecordType": "Label"
        }, {
            "imgBackground": "onelinearrownormal.png",
            "imgUpload": "upload.png",
            "lblLine": "Label",
            "lblRecordType": "Label"
        }],
        "groupCells": false,
        "id": "segmentRecords",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_a723b34b9bc64bd2bf9d11800c0547de,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegrowaltgray",
        "rowTemplate": fcRecords,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "10dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "fcRecords": "fcRecords",
            "fcUpload": "fcUpload",
            "imgBackground": "imgBackground",
            "imgUpload": "imgUpload",
            "lblLine": "lblLine",
            "lblRecordType": "lblRecordType"
        },
        "width": "22%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segmentDocuments = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "btnDelete": "",
            "btnDocument": "Button",
            "lblDateUploaded": "03/21/2017",
            "lblLine1": "Label",
            "lblLine2": "Label"
        }, {
            "btnDelete": "",
            "btnDocument": "Button",
            "lblDateUploaded": "03/21/2017",
            "lblLine1": "Label",
            "lblLine2": "Label"
        }, {
            "btnDelete": "",
            "btnDocument": "Button",
            "lblDateUploaded": "03/21/2017",
            "lblLine1": "Label",
            "lblLine2": "Label"
        }],
        "groupCells": false,
        "id": "segmentDocuments",
        "isVisible": true,
        "left": "25%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Normal",
        "rowTemplate": fcDocumentList,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "adadad00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "100dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btnDelete": "btnDelete",
            "btnDocument": "btnDocument",
            "fcDateUploaded": "fcDateUploaded",
            "fcDocument": "fcDocument",
            "fcDocumentList": "fcDocumentList",
            "lblDateUploaded": "lblDateUploaded",
            "lblLine1": "lblLine1",
            "lblLine2": "lblLine2"
        },
        "widgetSkin": "sknsegrowgraybrd",
        "width": "73%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDocType = new kony.ui.Label({
        "id": "lblDocType",
        "isVisible": true,
        "left": "25%",
        "skin": "sknlblblackbold90",
        "text": "Label",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcDocumentListHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcDocumentListHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "25%",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "55dp",
        "width": "73%"
    }, {}, {});
    fcDocumentListHeader.setDefaultUnit(kony.flex.DP);
    var fcDateUploaded = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcDateUploaded",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcDateUploaded.setDefaultUnit(kony.flex.DP);
    var lblDateUploaded = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDateUploaded",
        "isVisible": true,
        "skin": "sklblwhite90bold",
        "text": "Date uploaded",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDateUploaded.add(lblDateUploaded);
    var lblLine1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine1",
        "isVisible": true,
        "left": "20%",
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
    var fcDocument = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcDocument",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20.50%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    fcDocument.setDefaultUnit(kony.flex.DP);
    var lblDocument = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDocument",
        "isVisible": true,
        "skin": "sklblwhite90bold",
        "text": "Document Name",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDocument.add(lblDocument);
    var lblLine2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine2",
        "isVisible": true,
        "left": "50.50%",
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
    var fcDelete = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcDelete",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "51%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "48%",
        "zIndex": 1
    }, {}, {});
    fcDelete.setDefaultUnit(kony.flex.DP);
    var lblDelete = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblDelete",
        "isVisible": true,
        "left": "50dp",
        "skin": "sklblwhite90bold",
        "text": "Remove",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDelete.add(lblDelete);
    fcDocumentListHeader.add(fcDateUploaded, lblLine1, fcDocument, lblLine2, fcDelete);
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
    fcPatientRecords.add(segmentRecords, segmentDocuments, lblDocType, fcDocumentListHeader, lblNoRecords);
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
        "onClick": AS_Button_cc811036f3df41ad8366931b02002e3e,
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
        "onClick": AS_Button_41db03baff3a43d1b13575f37a0c3904,
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
    fscbody.add(fcpatientinfo, fctreatmentbar, fcPatientRecords, fcpaginatebuttons);
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
    var km080fa0a440f4e9ab78b1e694b229e58 = new kony.ui.FlexContainer({
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
    km080fa0a440f4e9ab78b1e694b229e58.setDefaultUnit(kony.flex.DP);
    var km012b13057ef4286b8402041d1599919 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcPrint",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_8d9b0dad6e33464a880db783d0b3f43d,
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
    km012b13057ef4286b8402041d1599919.setDefaultUnit(kony.flex.DP);
    var km60b0b8dccbd4c59859ceafc4c7f5afe = new kony.ui.Image2({
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
    var km15e78069557468f8856891ed77cd4a3 = new kony.ui.Label({
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
    km012b13057ef4286b8402041d1599919.add(km60b0b8dccbd4c59859ceafc4c7f5afe, km15e78069557468f8856891ed77cd4a3);
    var kma8b9231ea7c4907af44d005abde7686 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportPdf",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_0165c9138dd14b44a8fc7e66bf2d5342,
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
    kma8b9231ea7c4907af44d005abde7686.setDefaultUnit(kony.flex.DP);
    var kmb3661e0db4b4422be613d120daa6248 = new kony.ui.Image2({
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
    var kmdbe0b9445c544a594318da4a2a1ff91 = new kony.ui.Label({
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
    kma8b9231ea7c4907af44d005abde7686.add(kmb3661e0db4b4422be613d120daa6248, kmdbe0b9445c544a594318da4a2a1ff91);
    var kme671095c88840069dbe869cdb4c13a0 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportExcel",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_9aa0a17a988848328590b4df8d576511,
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
    kme671095c88840069dbe869cdb4c13a0.setDefaultUnit(kony.flex.DP);
    var kmfda896e2dea4d7485e5f09982ee5806 = new kony.ui.Image2({
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
    var km40faeb3f8aa49369434e513aa69c6b6 = new kony.ui.Label({
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
    var km07736ecf7b44427833a311d8421cf95 = new kony.ui.Label({
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
    kme671095c88840069dbe869cdb4c13a0.add(kmfda896e2dea4d7485e5f09982ee5806, km40faeb3f8aa49369434e513aa69c6b6, km07736ecf7b44427833a311d8421cf95);
    km080fa0a440f4e9ab78b1e694b229e58.add(km012b13057ef4286b8402041d1599919, kma8b9231ea7c4907af44d005abde7686, kme671095c88840069dbe869cdb4c13a0);
    fcmstPrintMenu.add(km080fa0a440f4e9ab78b1e694b229e58);
    fscbodyScroll.add(fcpatienthdrbox, fcsearchdropdown, fscbody, fcmstPrintMenu);
    var km2ec7220dd77410ea699c23400dde44c = new kony.ui.FlexContainer({
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
    km2ec7220dd77410ea699c23400dde44c.setDefaultUnit(kony.flex.DP);
    var km1132daac22942789717d9ae26ac73cb = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_9489401620994d1198134f587acd52cb,
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
    km1132daac22942789717d9ae26ac73cb.setDefaultUnit(kony.flex.DP);
    var km5fc1419dd0f43878f31b217690ed44c = new kony.ui.Image2({
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
    var kmaea00524bfc4c0eaa0a1a3fcf27d86d = new kony.ui.Label({
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
    km1132daac22942789717d9ae26ac73cb.add(km5fc1419dd0f43878f31b217690ed44c, kmaea00524bfc4c0eaa0a1a3fcf27d86d);
    var km24c5edbb6d643028fd8fcf5dffbd8f2 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_40151ee90a6f4cfa952fc393cf5cf16e,
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
    km24c5edbb6d643028fd8fcf5dffbd8f2.setDefaultUnit(kony.flex.DP);
    var km89f24a57b1b41ee8a94e6ce20be6782 = new kony.ui.Image2({
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
    var km562ff3d158b4315ad26364eadb6fcd6 = new kony.ui.Label({
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
    km24c5edbb6d643028fd8fcf5dffbd8f2.add(km89f24a57b1b41ee8a94e6ce20be6782, km562ff3d158b4315ad26364eadb6fcd6);
    var kmd9ffdaa468e43b780adcfae9b318e32 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_ed454bddfbc6483b84e059d05003bab5,
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
    kmd9ffdaa468e43b780adcfae9b318e32.setDefaultUnit(kony.flex.DP);
    var km85174b52dd84ea8b4610ffc5294e10a = new kony.ui.Image2({
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
    var kmed0bf6c8691434b9db193c7b4e2c3fd = new kony.ui.Label({
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
    kmd9ffdaa468e43b780adcfae9b318e32.add(km85174b52dd84ea8b4610ffc5294e10a, kmed0bf6c8691434b9db193c7b4e2c3fd);
    var km92e3c0055314c53a126d298190ae59e = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_34668269ba384ab78b4def814c8c6585,
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
    km92e3c0055314c53a126d298190ae59e.setDefaultUnit(kony.flex.DP);
    var kmeac029fe94045258804b225b5e22108 = new kony.ui.Image2({
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
    var km26a908f6d544d8eadaf19238b3f38a8 = new kony.ui.Label({
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
    var km616ccd909fd41a38b51827cfc528b60 = new kony.ui.Label({
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
    km92e3c0055314c53a126d298190ae59e.add(kmeac029fe94045258804b225b5e22108, km26a908f6d544d8eadaf19238b3f38a8, km616ccd909fd41a38b51827cfc528b60);
    km2ec7220dd77410ea699c23400dde44c.add(km1132daac22942789717d9ae26ac73cb, km24c5edbb6d643028fd8fcf5dffbd8f2, kmd9ffdaa468e43b780adcfae9b318e32, km92e3c0055314c53a126d298190ae59e);
    fscmainbody.add(fcbodyheader, fscsidemenu, fscbodyScroll, km2ec7220dd77410ea699c23400dde44c);
    var kma6017432397456faf8c996f62e9906b = new kony.ui.FlexContainer({
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
    kma6017432397456faf8c996f62e9906b.setDefaultUnit(kony.flex.DP);
    var km5ae32a70dcd4419a12929d0ed03dd50 = new kony.ui.RichText({
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
    kma6017432397456faf8c996f62e9906b.add(km5ae32a70dcd4419a12929d0ed03dd50);
    frmPatientRecords.add(km3ce6faef05e4e44b499d1fec6dd83c4, fscmainbody, kma6017432397456faf8c996f62e9906b);
};

function frmPatientRecordsGlobals() {
    frmPatientRecords = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPatientRecords,
        "enabledForIdleTimeout": true,
        "id": "frmPatientRecords",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onHide": AS_Form_b78de7641e5b493e9c3ca0c445213c51,
        "onTouchEnd": AS_Form_c40abb213f474ce0aa82648e62bac0e0,
        "postShow": AS_Form_afcba20560ee4750b01990005279eb22,
        "skin": "skfrmgray"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "onDeviceBack": AS_Form_f1ed812b5bab4fb6ab60ad6252c37681,
        "retainScrollPosition": false
    });
};