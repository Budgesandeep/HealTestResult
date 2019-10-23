function addWidgetsfrmNotificationDashboard() {
    frmNotificationDashboard.setDefaultUnit(kony.flex.DP);
    var km43e78b74c914cd2b1130d9763d2b8e4 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "80dp",
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
    km43e78b74c914cd2b1130d9763d2b8e4.setDefaultUnit(kony.flex.DP);
    var kmad1b0d65a0b47d5b9f1dc0945a5a434 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "79dp",
        "id": "fcheaderleft",
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "30%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp"
    }, {}, {});
    kmad1b0d65a0b47d5b9f1dc0945a5a434.setDefaultUnit(kony.flex.DP);
    var km0f555a6798c486bb8b1ab037a96b8ca = new kony.ui.Image2({
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
    var kmf06ed58d9224d709451b945217a7723 = new kony.ui.FlexContainer({
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
    kmf06ed58d9224d709451b945217a7723.setDefaultUnit(kony.flex.DP);
    kmf06ed58d9224d709451b945217a7723.add();
    var km41ed5e5738040a9892dd9c77a9e7fe9 = new kony.ui.Label({
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
    var kmf1d69776e924171bb87d62cb4b78395 = new kony.ui.RichText({
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
    kmad1b0d65a0b47d5b9f1dc0945a5a434.add(km0f555a6798c486bb8b1ab037a96b8ca, kmf06ed58d9224d709451b945217a7723, km41ed5e5738040a9892dd9c77a9e7fe9, kmf1d69776e924171bb87d62cb4b78395);
    var kme0fadb53c064ff18f88f80bb66da0e9 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "79dp",
        "id": "fcheaderright",
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "70%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp"
    }, {}, {});
    kme0fadb53c064ff18f88f80bb66da0e9.setDefaultUnit(kony.flex.DP);
    var km84032dc602943ad84834ba33dd27caf = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "80dp",
        "id": "fcuserinfo",
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "width": "50%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0dp"
    }, {}, {});
    km84032dc602943ad84834ba33dd27caf.setDefaultUnit(kony.flex.DP);
    var km82b893366be4da19ca16fdbbf01ab74 = new kony.ui.Image2({
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
    var km54eac24484d4ee28b86671167cab694 = new kony.ui.FlexContainer({
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
    km54eac24484d4ee28b86671167cab694.setDefaultUnit(kony.flex.DP);
    var kme4f4f0d4ced4bcfb4328d3c6be9a7ff = new kony.ui.RichText({
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
    var kmcbc9198707a430d89fc383d6366a8fb = new kony.ui.RichText({
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
    var km732aaeca9314b6e871cdda9ef988949 = new kony.ui.RichText({
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
    km54eac24484d4ee28b86671167cab694.add(kme4f4f0d4ced4bcfb4328d3c6be9a7ff, kmcbc9198707a430d89fc383d6366a8fb, km732aaeca9314b6e871cdda9ef988949);
    km84032dc602943ad84834ba33dd27caf.add(km82b893366be4da19ca16fdbbf01ab74, km54eac24484d4ee28b86671167cab694);
    var kmc81bd7d79a5486cb0924fdda222cd92 = new kony.ui.FlexContainer({
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
    kmc81bd7d79a5486cb0924fdda222cd92.setDefaultUnit(kony.flex.DP);
    var kme2831e15cf14704ac0c4fcf9c391e0e = new kony.ui.FlexContainer({
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
    kme2831e15cf14704ac0c4fcf9c391e0e.setDefaultUnit(kony.flex.DP);
    kme2831e15cf14704ac0c4fcf9c391e0e.add();
    var km1c2122c6d424217bb7a3202f4a3f20a = new kony.ui.Image2({
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
    var km4d5f2d2f7174911a502bd775f5dea1a = new kony.ui.Label({
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
    var km3293950964c4eae873c4a95e4686cc2 = new kony.ui.Label({
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
    kmc81bd7d79a5486cb0924fdda222cd92.add(kme2831e15cf14704ac0c4fcf9c391e0e, km1c2122c6d424217bb7a3202f4a3f20a, km4d5f2d2f7174911a502bd775f5dea1a, km3293950964c4eae873c4a95e4686cc2);
    var kmdb6e011e8704aec9068cfad386c59be = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "80dp",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_g398134c408143bc99f39654ca4f3a65,
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
    kmdb6e011e8704aec9068cfad386c59be.setDefaultUnit(kony.flex.DP);
    var kmb5b1da4cee1407989bdff9a20d08cac = new kony.ui.Image2({
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
    var km0a788b7a8a1425e9dafcc7c7b3461d8 = new kony.ui.FlexContainer({
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
    km0a788b7a8a1425e9dafcc7c7b3461d8.setDefaultUnit(kony.flex.DP);
    var km27fe00a86a340dc83ccd1fcdb318240 = new kony.ui.Label({
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
    km0a788b7a8a1425e9dafcc7c7b3461d8.add(km27fe00a86a340dc83ccd1fcdb318240);
    kmdb6e011e8704aec9068cfad386c59be.add(kmb5b1da4cee1407989bdff9a20d08cac, km0a788b7a8a1425e9dafcc7c7b3461d8);
    var km06a9749799e45c48e25bd05daa949fa = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "80dp",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_e6514df70c47432c90ed0e47d9ce1821,
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
    km06a9749799e45c48e25bd05daa949fa.setDefaultUnit(kony.flex.DP);
    var km3d4881205714d7b98380db85109331a = new kony.ui.Image2({
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
    km06a9749799e45c48e25bd05daa949fa.add(km3d4881205714d7b98380db85109331a);
    kme0fadb53c064ff18f88f80bb66da0e9.add(km84032dc602943ad84834ba33dd27caf, kmc81bd7d79a5486cb0924fdda222cd92, kmdb6e011e8704aec9068cfad386c59be, km06a9749799e45c48e25bd05daa949fa);
    var km006eaa4ff0c47c08cb97bccd530e0da = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "fcheaderline",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": 79
    }, {}, {});
    km006eaa4ff0c47c08cb97bccd530e0da.setDefaultUnit(kony.flex.DP);
    var kme4e1d6f78c34c7f9ea295a61f487616 = new kony.ui.Label({
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
    km006eaa4ff0c47c08cb97bccd530e0da.add(kme4e1d6f78c34c7f9ea295a61f487616);
    km43e78b74c914cd2b1130d9763d2b8e4.add(kmad1b0d65a0b47d5b9f1dc0945a5a434, kme0fadb53c064ff18f88f80bb66da0e9, km006eaa4ff0c47c08cb97bccd530e0da);
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
        "height": "20dp",
        "id": "btnmenu",
        "isVisible": true,
        "left": "1.50%",
        "onClick": AS_Button_fe2141b56ddd45d598a140ea9969b7a4,
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
    }, {});
    var fcbreadcrumb = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcbreadcrumb",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "7%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%",
        "width": "32.23%",
        "zIndex": 1
    }, {}, {});
    fcbreadcrumb.setDefaultUnit(kony.flex.DP);
    var btnhome = new kony.ui.Button({
        "focusSkin": "skbtnwhiteboldtrans",
        "height": "50dp",
        "id": "btnhome",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_d025b576aeed4c9ca2c523ddabdcc895,
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
        "hoverSkin": "Copyskbtnwhiteboldtrans0cff561c4db7544"
    });
    var lbltitlesep1 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "lbltitlesep1",
        "isVisible": true,
        "left": "15dp",
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
        "left": "15dp",
        "skin": "sknlblstatuswhite",
        "text": "System Notification Admin",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcbreadcrumb.add(btnhome, lbltitlesep1, lblhdrsubtitle2);
    var fcResolveConflict = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": false,
        "height": "60%",
        "id": "fcResolveConflict",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_j8423720ed3e49a08c1ae0d06ae71c4a,
        "right": "46.50%",
        "skin": "slFbox",
        "width": "9%",
        "zIndex": 1
    }, {}, {});
    fcResolveConflict.setDefaultUnit(kony.flex.DP);
    var btnResolveConflict = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "skbtnbluebg",
        "height": "100%",
        "id": "btnResolveConflict",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_g249030cfea44d8c85917ca0e8ff17e8,
        "skin": "skbtnbluebg",
        "text": "Conflicts   ",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcResolveConflict.add(btnResolveConflict);
    var fcConflictButton = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100%",
        "id": "fcConflictButton",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "44.50%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    fcConflictButton.setDefaultUnit(kony.flex.DP);
    var btnConflict = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtnbluebg",
        "height": "30dp",
        "id": "btnConflict",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_b623900acffb43d1a0dced0f8655e6b7,
        "skin": "skbtnbluebg",
        "text": "Conflicts",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblConflictCount = new kony.ui.Label({
        "centerY": "26%",
        "id": "lblConflictCount",
        "isVisible": true,
        "right": "14%",
        "skin": "sklblredbgnotificationbadge",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [5, 1, 6, 0],
        "paddingInPixel": false
    }, {});
    fcConflictButton.add(btnConflict, lblConflictCount);
    fcbodyheader.add(btnmenu, fcbreadcrumb, fcResolveConflict, fcConflictButton);
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
        "zIndex": 4
    }, {}, {});
    fscsidemenu.setDefaultUnit(kony.flex.DP);
    var km345f535cf6446feb3b8223f9458116c = new kony.ui.FlexContainer({
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
    km345f535cf6446feb3b8223f9458116c.setDefaultUnit(kony.flex.DP);
    var km77819d5cdb94ca0aa371dfea336fed3 = new kony.ui.FlexContainer({
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
    km77819d5cdb94ca0aa371dfea336fed3.setDefaultUnit(kony.flex.DP);
    var kmca7485ab0ed47a1ace4381da2b2cfdf = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "left": 0,
        "onClick": AS_Button_e701d87bd12644a6a6cf8d39507e1399,
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
    km77819d5cdb94ca0aa371dfea336fed3.add(kmca7485ab0ed47a1ace4381da2b2cfdf);
    var kmab8dfe3dc2b4cb6bb9790a313283290 = new kony.ui.FlexContainer({
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
    kmab8dfe3dc2b4cb6bb9790a313283290.setDefaultUnit(kony.flex.DP);
    var kmb03b705066043deb8cf95f2618962a9 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "left": "0dp",
        "onClick": AS_Button_h3aa03318fe547078fa3efe569912979,
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
    kmab8dfe3dc2b4cb6bb9790a313283290.add(kmb03b705066043deb8cf95f2618962a9);
    var km57b842d15c043b3a6bfc55e2107136c = new kony.ui.FlexContainer({
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
    km57b842d15c043b3a6bfc55e2107136c.setDefaultUnit(kony.flex.DP);
    var km2702b345bb84f5abdb3c0a3b5e1c597 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmhbo",
        "left": "0dp",
        "onClick": AS_Button_e10bfb575d47479d856c83d2b87765ba,
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
    km57b842d15c043b3a6bfc55e2107136c.add(km2702b345bb84f5abdb3c0a3b5e1c597);
    var km403462db35441c59c6a5d663f1f9a7e = new kony.ui.FlexContainer({
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
    km403462db35441c59c6a5d663f1f9a7e.setDefaultUnit(kony.flex.DP);
    var kmdfaa5478bc94f50aaa428699f03b949 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmadministration",
        "left": "0dp",
        "onClick": AS_Button_i2fcd0c2c18046d7b007859935138dc7,
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
    km403462db35441c59c6a5d663f1f9a7e.add(kmdfaa5478bc94f50aaa428699f03b949);
    var km7ce5d3422d749d1a6ad07ee283f422d = new kony.ui.FlexContainer({
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
    km7ce5d3422d749d1a6ad07ee283f422d.setDefaultUnit(kony.flex.DP);
    var km4f80649bcce4ee3b2f7e5e54d7fa83e = new kony.ui.Button({
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
    km7ce5d3422d749d1a6ad07ee283f422d.add(km4f80649bcce4ee3b2f7e5e54d7fa83e);
    var km273be720d3640d5832183d4789fd675 = new kony.ui.FlexContainer({
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
    km273be720d3640d5832183d4789fd675.setDefaultUnit(kony.flex.DP);
    var km79363e50f00436f955e8c37da02fa51 = new kony.ui.Button({
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
    km273be720d3640d5832183d4789fd675.add(km79363e50f00436f955e8c37da02fa51);
    var km4d1fb01ec524d6094bc8643ba87e42b = new kony.ui.FlexContainer({
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
    km4d1fb01ec524d6094bc8643ba87e42b.setDefaultUnit(kony.flex.DP);
    var km203c88f45124e2e8f63aa4e328374cd = new kony.ui.Button({
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
    km4d1fb01ec524d6094bc8643ba87e42b.add(km203c88f45124e2e8f63aa4e328374cd);
    var kmddb4950b99f4494a15f73cf24aa7123 = new kony.ui.FlexContainer({
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
    kmddb4950b99f4494a15f73cf24aa7123.setDefaultUnit(kony.flex.DP);
    var km1a291f571ab4f85b1f2a7acb5ad0e27 = new kony.ui.Button({
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
    kmddb4950b99f4494a15f73cf24aa7123.add(km1a291f571ab4f85b1f2a7acb5ad0e27);
    var km62aab2ab29b46dca9625db7cdc32bee = new kony.ui.FlexContainer({
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
    km62aab2ab29b46dca9625db7cdc32bee.setDefaultUnit(kony.flex.DP);
    var kmf6a5c348efb4a279fe325d918f4852a = new kony.ui.Button({
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
    km62aab2ab29b46dca9625db7cdc32bee.add(kmf6a5c348efb4a279fe325d918f4852a);
    var km9de126f5f384ea5804fd42cf2561134 = new kony.ui.FlexContainer({
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
    km9de126f5f384ea5804fd42cf2561134.setDefaultUnit(kony.flex.DP);
    var km8da3a080e9c42bfa33b56bd1b3ae4f7 = new kony.ui.Button({
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
    km9de126f5f384ea5804fd42cf2561134.add(km8da3a080e9c42bfa33b56bd1b3ae4f7);
    var km60cf595a6e1481f9e7a488ebecaf963 = new kony.ui.FlexContainer({
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
    km60cf595a6e1481f9e7a488ebecaf963.setDefaultUnit(kony.flex.DP);
    var km9e271bc6328404c88495eaa19c4ec04 = new kony.ui.Button({
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
    km60cf595a6e1481f9e7a488ebecaf963.add(km9e271bc6328404c88495eaa19c4ec04);
    var km0367a06218a4bbdaeb28a1e0e36e14f = new kony.ui.FlexContainer({
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
    km0367a06218a4bbdaeb28a1e0e36e14f.setDefaultUnit(kony.flex.DP);
    var km5c6c8a8c123406292271a28ddc2d3d1 = new kony.ui.Button({
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
    km0367a06218a4bbdaeb28a1e0e36e14f.add(km5c6c8a8c123406292271a28ddc2d3d1);
    km345f535cf6446feb3b8223f9458116c.add(km77819d5cdb94ca0aa371dfea336fed3, kmab8dfe3dc2b4cb6bb9790a313283290, km57b842d15c043b3a6bfc55e2107136c, km403462db35441c59c6a5d663f1f9a7e, km7ce5d3422d749d1a6ad07ee283f422d, km273be720d3640d5832183d4789fd675, km4d1fb01ec524d6094bc8643ba87e42b, kmddb4950b99f4494a15f73cf24aa7123, km62aab2ab29b46dca9625db7cdc32bee, km9de126f5f384ea5804fd42cf2561134, km60cf595a6e1481f9e7a488ebecaf963, km0367a06218a4bbdaeb28a1e0e36e14f);
    fscsidemenu.add(km345f535cf6446feb3b8223f9458116c);
    var km83bf1bada35467eb5bae46426ed18e8 = new kony.ui.FlexContainer({
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
    km83bf1bada35467eb5bae46426ed18e8.setDefaultUnit(kony.flex.DP);
    var km933104cce5e4836b2531a4af58220fe = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_i18e07bab6d841d28d749e1d8f678c86,
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
    km933104cce5e4836b2531a4af58220fe.setDefaultUnit(kony.flex.DP);
    var km0b3dd79989d46348eb29001996cbc53 = new kony.ui.Image2({
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
    var kmca363e5b5134fedbf9fec3d739daddd = new kony.ui.Label({
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
    km933104cce5e4836b2531a4af58220fe.add(km0b3dd79989d46348eb29001996cbc53, kmca363e5b5134fedbf9fec3d739daddd);
    var kmd217971bc0d4923ad569d21d08242da = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_h0f94da87c214cc599d5211098e246ab,
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
    kmd217971bc0d4923ad569d21d08242da.setDefaultUnit(kony.flex.DP);
    var km5cb38fd8f184289bb1b3feb8b2dc0ad = new kony.ui.Image2({
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
    var km5ac4043180e4661a66c1b7b43ac446e = new kony.ui.Label({
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
    kmd217971bc0d4923ad569d21d08242da.add(km5cb38fd8f184289bb1b3feb8b2dc0ad, km5ac4043180e4661a66c1b7b43ac446e);
    var km64c28dc60a74a5ea89523f39fb1ef37 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_de9a79da85d247e285c728c3d2bb751a,
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
    km64c28dc60a74a5ea89523f39fb1ef37.setDefaultUnit(kony.flex.DP);
    var km414188872024140b1373d201ab87052 = new kony.ui.Image2({
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
    var kmdbe512b9c8c4833990e215cbe07c102 = new kony.ui.Label({
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
    km64c28dc60a74a5ea89523f39fb1ef37.add(km414188872024140b1373d201ab87052, kmdbe512b9c8c4833990e215cbe07c102);
    var kme5ec4e8ba934695818eb26a90769092 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_cd405421887c41a0b21529a8f94db30b,
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
    kme5ec4e8ba934695818eb26a90769092.setDefaultUnit(kony.flex.DP);
    var km4da3406c0994dda971a3c6e48413eb7 = new kony.ui.Image2({
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
    var km6d3c37d2ce647028981bd7dc1dd8540 = new kony.ui.Label({
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
    kme5ec4e8ba934695818eb26a90769092.add(km4da3406c0994dda971a3c6e48413eb7, km6d3c37d2ce647028981bd7dc1dd8540);
    km83bf1bada35467eb5bae46426ed18e8.add(km933104cce5e4836b2531a4af58220fe, kmd217971bc0d4923ad569d21d08242da, km64c28dc60a74a5ea89523f39fb1ef37, kme5ec4e8ba934695818eb26a90769092);
    var fscbodyScroll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": false,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "580dp",
        "horizontalScrollIndicator": true,
        "id": "fscbodyScroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_NONE,
        "skin": "slFSbox",
        "top": "50dp",
        "verticalScrollIndicator": false,
        "width": "100%",
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
    var fcnotification = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": false,
        "id": "fcnotification",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "1%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    fcnotification.setDefaultUnit(kony.flex.DP);
    var fcpatienthdrbox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "60dp",
        "id": "fcpatienthdrbox",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcnavyblue",
        "top": "9dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatienthdrbox.setDefaultUnit(kony.flex.DP);
    var lblhdrnotification = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrnotification",
        "isVisible": true,
        "left": "2%",
        "skin": "sklblwhite125bold",
        "text": "System Notification",
        "width": "17.94%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0a6247455dffb4d = new kony.ui.Button({
        "height": "37dp",
        "id": "Button0a6247455dffb4d",
        "isVisible": true,
        "left": "52%",
        "onClick": AS_Button_id309d0a7355474db8900991f79618a4,
        "skin": "sknbtntransbgbluebold",
        "text": "+ Add Notification",
        "top": "13dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "Copysknbtntransbgbluebold0gca7635014d241"
    });
    fcpatienthdrbox.add(lblhdrnotification, Button0a6247455dffb4d);
    var fcnotificationcontainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": false,
        "id": "fcnotificationcontainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "skfcGrayBg",
        "top": "-2dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcnotificationcontainer.setDefaultUnit(kony.flex.DP);
    var fcsegnotificationlist = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "440dp",
        "id": "fcsegnotificationlist",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "75dp",
        "width": "100%",
        "zIndex": 10
    }, {}, {});
    fcsegnotificationlist.setDefaultUnit(kony.flex.PERCENTAGE);
    var segnotificationlist = new kony.ui.SegmentedUI2({
        "data": [{
            "btnEdit": "Edit",
            "lblcreatedby": "asdasdas",
            "lbldescription": "asjkdhjashd aksjhdakjshdkjashdjakshdjkashjkdhsakjdhasjhdajkshdkajshdajskhdjkashdjashdjahskdajshjdkashkjdhasjkdhasjkdhasjkdhsjkadhkasjhdsajkdhsajhdjkashdjksad",
            "lblnotificationdate": "03/20/2010",
            "lblstatus": "Inactive"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segnotificationlist",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegment",
        "rowTemplate": Copyfcnotificationlisthdr0if626c45cfc54f,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "Copyfcnotificationlisthdr0if626c45cfc54f": "Copyfcnotificationlisthdr0if626c45cfc54f",
            "Copyfctransferstatus0e1b3a80c5b1946": "Copyfctransferstatus0e1b3a80c5b1946",
            "btnEdit": "btnEdit",
            "fccasemanager": "fccasemanager",
            "fchealper": "fchealper",
            "fcnotificationdate": "fcnotificationdate",
            "fctransferstatus": "fctransferstatus",
            "lblcreatedby": "lblcreatedby",
            "lbldescription": "lbldescription",
            "lblnotificationdate": "lblnotificationdate",
            "lblstatus": "lblstatus"
        },
        "width": "100%",
        "zIndex": 3
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNoNotifications = new kony.ui.Label({
        "id": "lblNoNotifications",
        "isVisible": false,
        "left": "50%",
        "skin": "sklblgrey125bold",
        "text": "No Notifications",
        "top": "40dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcsegnotificationlist.add(segnotificationlist, lblNoNotifications);
    var FlexContainer0db6a976bb7ec40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75dp",
        "id": "FlexContainer0db6a976bb7ec40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "0dp",
        "width": "100.06%",
        "zIndex": 10
    }, {}, {});
    FlexContainer0db6a976bb7ec40.setDefaultUnit(kony.flex.DP);
    var Copyfcnotificationlisthdr0jf8a79e3f13442 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75dp",
        "id": "Copyfcnotificationlisthdr0jf8a79e3f13442",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "0dp",
        "width": "101.63%"
    }, {}, {});
    Copyfcnotificationlisthdr0jf8a79e3f13442.setDefaultUnit(kony.flex.DP);
    var Copyfcdate0ddec0ef5884d48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Copyfcdate0ddec0ef5884d48",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "2%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "8%",
        "zIndex": 1
    }, {}, {});
    Copyfcdate0ddec0ef5884d48.setDefaultUnit(kony.flex.DP);
    var Copylblnotificationdate0b94534438e4249 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Copylblnotificationdate0b94534438e4249",
        "isVisible": true,
        "left": "0%",
        "right": "0%",
        "skin": "sklblwhite90bold",
        "text": "Start Date",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Copyfcdate0ddec0ef5884d48.add(Copylblnotificationdate0b94534438e4249);
    var CopyLabel0b98faeabb15344 = new kony.ui.Label({
        "height": "75dp",
        "id": "CopyLabel0b98faeabb15344",
        "isVisible": true,
        "right": "2%",
        "skin": "sknlbllinelightgray",
        "text": "Label",
        "top": "-1dp",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Copyfcdate0b67a41cb084341 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Copyfcdate0b67a41cb084341",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    Copyfcdate0b67a41cb084341.setDefaultUnit(kony.flex.DP);
    var Copylblline0b8472160788846 = new kony.ui.Label({
        "height": "100%",
        "id": "Copylblline0b8472160788846",
        "isVisible": false,
        "left": "0dp",
        "right": "3dp",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Copylblnotificationdate0d6bb14fc0f2649 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Copylblnotificationdate0d6bb14fc0f2649",
        "isVisible": true,
        "left": "2%",
        "right": "4%",
        "skin": "sklblwhite90bold",
        "text": "Description",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Copyfcdate0b67a41cb084341.add(Copylblline0b8472160788846, Copylblnotificationdate0d6bb14fc0f2649);
    var CopyLabel0be3be7bcb96e4d = new kony.ui.Label({
        "height": "75dp",
        "id": "CopyLabel0be3be7bcb96e4d",
        "isVisible": true,
        "left": "0dp",
        "right": "2%",
        "skin": "sknlbllinelightgray",
        "text": "Label",
        "top": "-1dp",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Copyfcdate0c8763604ec294e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Copyfcdate0c8763604ec294e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "14%",
        "zIndex": 1
    }, {}, {});
    Copyfcdate0c8763604ec294e.setDefaultUnit(kony.flex.DP);
    var Copylblline0b34b9d1ab78d4f = new kony.ui.Label({
        "height": "100%",
        "id": "Copylblline0b34b9d1ab78d4f",
        "isVisible": false,
        "left": "0dp",
        "right": "3dp",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Copylblnotificationdate0jdabc9d2eff44d = new kony.ui.Label({
        "centerY": "50%",
        "id": "Copylblnotificationdate0jdabc9d2eff44d",
        "isVisible": true,
        "left": "4%",
        "right": "4%",
        "skin": "sklblwhite90bold",
        "text": "Created by",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Copyfcdate0c8763604ec294e.add(Copylblline0b34b9d1ab78d4f, Copylblnotificationdate0jdabc9d2eff44d);
    var CopyLabel0fc0a008b67d04d = new kony.ui.Label({
        "height": "75dp",
        "id": "CopyLabel0fc0a008b67d04d",
        "isVisible": true,
        "left": "0dp",
        "right": "2%",
        "skin": "sknlbllinelightgray",
        "text": "Label",
        "top": "-1dp",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Copyfcdate0eb08e1d7d15e47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Copyfcdate0eb08e1d7d15e47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    Copyfcdate0eb08e1d7d15e47.setDefaultUnit(kony.flex.DP);
    var Copylblline0ea51176546584c = new kony.ui.Label({
        "height": "100%",
        "id": "Copylblline0ea51176546584c",
        "isVisible": false,
        "left": "0dp",
        "right": "3dp",
        "skin": "sknlblline",
        "text": "Label",
        "top": "0dp",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Copylblnotificationdate0bd9015a2ee5a4b = new kony.ui.Label({
        "centerY": "50%",
        "id": "Copylblnotificationdate0bd9015a2ee5a4b",
        "isVisible": true,
        "left": "2%",
        "right": "4%",
        "skin": "sklblwhite90bold",
        "text": "Status",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Copyfcdate0eb08e1d7d15e47.add(Copylblline0ea51176546584c, Copylblnotificationdate0bd9015a2ee5a4b);
    var CopyLabel0ebfc82d9cec94d = new kony.ui.Label({
        "height": "75dp",
        "id": "CopyLabel0ebfc82d9cec94d",
        "isVisible": true,
        "left": "0dp",
        "right": "2%",
        "skin": "sknlbllinelightgray",
        "text": "Label",
        "top": "-1dp",
        "width": "1px",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Copyfcnotificationlisthdr0jf8a79e3f13442.add(Copyfcdate0ddec0ef5884d48, CopyLabel0b98faeabb15344, Copyfcdate0b67a41cb084341, CopyLabel0be3be7bcb96e4d, Copyfcdate0c8763604ec294e, CopyLabel0fc0a008b67d04d, Copyfcdate0eb08e1d7d15e47, CopyLabel0ebfc82d9cec94d);
    FlexContainer0db6a976bb7ec40.add(Copyfcnotificationlisthdr0jf8a79e3f13442);
    fcnotificationcontainer.add(fcsegnotificationlist, FlexContainer0db6a976bb7ec40);
    var fccreatenotification = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "530dp",
        "id": "fccreatenotification",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcwhite",
        "top": "0dp",
        "width": "100.03%",
        "zIndex": 10
    }, {}, {});
    fccreatenotification.setDefaultUnit(kony.flex.DP);
    var fcFacilityList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "324dp",
        "id": "fcFacilityList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "36%",
        "isModalContainer": false,
        "skin": "sknfcwhiternd",
        "top": "41dp",
        "width": "23%",
        "zIndex": 1
    }, {}, {});
    fcFacilityList.setDefaultUnit(kony.flex.DP);
    var FlexGroup0j31bef59d20941 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "FlexGroup0j31bef59d20941",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    FlexGroup0j31bef59d20941.setDefaultUnit(kony.flex.DP);
    var btnSelectAll = new kony.ui.Button({
        "bottom": "9%",
        "height": "25dp",
        "id": "btnSelectAll",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_d4ab7bee2d054c26841fbc5ae6dacdbe,
        "right": 25,
        "skin": "sknbtnuncheck",
        "top": "0%",
        "width": "25dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "Copysknbtnuncheck0gf31f4959c494b"
    });
    var CopyLabel0g51ed93945ef40 = new kony.ui.Label({
        "height": "30dp",
        "id": "CopyLabel0g51ed93945ef40",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblgraybold",
        "text": "Select All",
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexGroup0j31bef59d20941.add(btnSelectAll, CopyLabel0g51ed93945ef40);
    var FlexContainer0g1bdd5dea0874d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "310dp",
        "id": "FlexContainer0g1bdd5dea0874d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "40dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    FlexContainer0g1bdd5dea0874d.setDefaultUnit(kony.flex.DP);
    var Copylblline0g78d90d9cf8544 = new kony.ui.Label({
        "height": "1px",
        "id": "Copylblline0g78d90d9cf8544",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlbllinedark",
        "top": "0.00%",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segmentFacilty = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnSelection": "",
            "lblBlueBookCode": "Label"
        }, {
            "btnSelection": "",
            "lblBlueBookCode": "Label"
        }, {
            "btnSelection": "",
            "lblBlueBookCode": "Label"
        }],
        "groupCells": false,
        "height": "270dp",
        "id": "segmentFacilty",
        "isVisible": true,
        "left": "1dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexContainer0a5d2094bd62f49,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "6464644e",
        "separatorRequired": true,
        "showScrollbars": false,
        "top": "1%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer0a5d2094bd62f49": "CopyFlexContainer0a5d2094bd62f49",
            "btnSelection": "btnSelection",
            "lblBlueBookCode": "lblBlueBookCode"
        },
        "width": "99.40%",
        "zIndex": 3
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0g1bdd5dea0874d.add(Copylblline0g78d90d9cf8544, segmentFacilty);
    fcFacilityList.add(FlexGroup0j31bef59d20941, FlexContainer0g1bdd5dea0874d);
    var Button0g1882ea7fecb4d = new kony.ui.Button({
        "focusSkin": "sknbtnbluebgtablet",
        "height": "50dp",
        "id": "Button0g1882ea7fecb4d",
        "isVisible": true,
        "left": "770dp",
        "onClick": AS_Button_b62b4e7452f64334b9dd88cc936be1f8,
        "skin": "sknbtnbluebgtablet",
        "text": "Save",
        "top": "431dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "Copysknbtnbluebgtablet0a6fd0620e2cb40"
    });
    var CopyButton0da4e7f8b49c64b = new kony.ui.Button({
        "focusSkin": "sknbtngraybgrnd",
        "height": "50dp",
        "id": "CopyButton0da4e7f8b49c64b",
        "isVisible": true,
        "left": "630dp",
        "onClick": AS_Button_i84b818de8574427a548b72c698333cd,
        "skin": "sknbtngraybgrnd",
        "text": "Cancel",
        "top": "431dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "Copysknbtngraybgrnd0b81b84e85b694f"
    });
    var FlexContainer0a11e90f4538d4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "400dp",
        "id": "FlexContainer0a11e90f4538d4b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "65%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "41dp",
        "width": "34.86%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0a11e90f4538d4b.setDefaultUnit(kony.flex.PERCENTAGE);
    var CopyLabel0afc990be6f4c4f = new kony.ui.Label({
        "id": "CopyLabel0afc990be6f4c4f",
        "isVisible": true,
        "left": "20%",
        "skin": "sklblblack160",
        "text": "Notification Settings",
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexGroup0d51932b1eb2843 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlexGroup0d51932b1eb2843",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexGroup0d51932b1eb2843.setDefaultUnit(kony.flex.PERCENTAGE);
    var Label0h704f5aea24147 = new kony.ui.Label({
        "id": "Label0h704f5aea24147",
        "isVisible": true,
        "left": "39dp",
        "skin": "sklblgrey125bold",
        "text": "Start Date",
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0ba0285dbc9d649 = new kony.ui.Label({
        "id": "Label0ba0285dbc9d649",
        "isVisible": true,
        "left": "30%",
        "skin": "sklblgrey125bold",
        "text": "Start Time",
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexGroup0d51932b1eb2843.add(Label0h704f5aea24147, Label0ba0285dbc9d649);
    var CopyFlexGroup0fc6d0387cca641 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "14%",
        "id": "CopyFlexGroup0fc6d0387cca641",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0.50%",
        "width": "100%"
    }, {}, {});
    CopyFlexGroup0fc6d0387cca641.setDefaultUnit(kony.flex.PERCENTAGE);
    var calStartDate = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateFormat": "MM/dd/yyyy",
        "height": "30dp",
        "id": "calStartDate",
        "isVisible": true,
        "left": "40dp",
        "onSelection": AS_Calendar_cc34eab860c8404185a2f5ac572325dd,
        "placeholder": "MM/DD/YYYY",
        "skin": "skncalender",
        "top": "5dp",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "31%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "noOfMonths": 1
    });
    var lboxStartTime = new kony.ui.ListBox({
        "height": "30dp",
        "id": "lboxStartTime",
        "isVisible": true,
        "left": "17%",
        "onSelection": AS_ListBox_be14ff8c49994808941b02f7585abe86,
        "skin": "sklbdarkgray100",
        "top": "5dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "multiSelect": false
    });
    CopyFlexGroup0fc6d0387cca641.add(calStartDate, lboxStartTime);
    var CopyFlexGroup0hea75f7cdd194e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "14%",
        "id": "CopyFlexGroup0hea75f7cdd194e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0.50%",
        "width": "100%"
    }, {}, {});
    CopyFlexGroup0hea75f7cdd194e.setDefaultUnit(kony.flex.PERCENTAGE);
    var CopyLabel0g80f87e149ea49 = new kony.ui.Label({
        "id": "CopyLabel0g80f87e149ea49",
        "isVisible": true,
        "left": "39dp",
        "skin": "sklblgrey125bold",
        "text": "End Date",
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0d57acebdd10e4e = new kony.ui.Label({
        "id": "CopyLabel0d57acebdd10e4e",
        "isVisible": true,
        "left": "32%",
        "skin": "sklblgrey125bold",
        "text": "End Time",
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexGroup0hea75f7cdd194e.add(CopyLabel0g80f87e149ea49, CopyLabel0d57acebdd10e4e);
    var CopyFlexGroup0be26dc369f134f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "CopyFlexGroup0be26dc369f134f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0.50%",
        "width": "100%"
    }, {}, {});
    CopyFlexGroup0be26dc369f134f.setDefaultUnit(kony.flex.PERCENTAGE);
    var calEndDate = new kony.ui.Calendar({
        "calendarIcon": "calbtn.png",
        "dateFormat": "MM/dd/yyyy",
        "height": "30dp",
        "id": "calEndDate",
        "isVisible": true,
        "left": "40dp",
        "onSelection": AS_Calendar_b9553bb576554a7f80bf1abc0c8b3424,
        "placeholder": "MM/DD/YYYY",
        "skin": "skncalender",
        "top": "5dp",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "31%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {
        "noOfMonths": 1
    });
    var lboxEndTime = new kony.ui.ListBox({
        "height": "30dp",
        "id": "lboxEndTime",
        "isVisible": true,
        "left": "17%",
        "onSelection": AS_ListBox_b0f5b4dbf06f463baed08dd60df01835,
        "skin": "sklbdarkgray100",
        "top": "5dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "multiSelect": false
    });
    CopyFlexGroup0be26dc369f134f.add(calEndDate, lboxEndTime);
    var FlexContainer0ccc449f7ade44b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "FlexContainer0ccc449f7ade44b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "1%",
        "width": "100.00%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ccc449f7ade44b.setDefaultUnit(kony.flex.PERCENTAGE);
    var CopyLabel0af3a3f454b534a = new kony.ui.Label({
        "id": "CopyLabel0af3a3f454b534a",
        "isVisible": true,
        "left": "39dp",
        "skin": "sklblgrey125bold",
        "text": "Set as active",
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var swtchStatus = new kony.ui.Switch({
        "height": "28dp",
        "id": "swtchStatus",
        "isVisible": true,
        "left": "57%",
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "selectedIndex": 0,
        "skin": "CopyslSwitch0fb427754ba4343",
        "top": "20.96%",
        "width": "100dp",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0ccc449f7ade44b.add(CopyLabel0af3a3f454b534a, swtchStatus);
    FlexContainer0a11e90f4538d4b.add(CopyLabel0afc990be6f4c4f, FlexGroup0d51932b1eb2843, CopyFlexGroup0fc6d0387cca641, CopyFlexGroup0hea75f7cdd194e, CopyFlexGroup0be26dc369f134f, FlexContainer0ccc449f7ade44b);
    var FlexContainer0h98f0e1b741c4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "410dp",
        "id": "FlexContainer0h98f0e1b741c4e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "41dp",
        "width": "27.89%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0h98f0e1b741c4e.setDefaultUnit(kony.flex.PERCENTAGE);
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "left": "5dp",
        "skin": "sklblblack160",
        "text": "Title",
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtTitle = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtTitle",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5dp",
        "onDone": AS_TextField_fee7e818582143a8b4545ba99b4c60fb,
        "onTextChange": AS_TextField_c7528c3f7e1a44df9415276aeab9acf7,
        "secureTextEntry": false,
        "skin": "skntxtbxrounded",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "left": "5dp",
        "skin": "sklblblack160",
        "text": "Description",
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtAreaDescription = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "120dp",
        "id": "txtAreaDescription",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "5dp",
        "maxTextLength": 250,
        "numberOfVisibleLines": 3,
        "onDone": AS_TextArea_b931b698c0c34567909da1ce2f5ad51c,
        "onTextChange": AS_TextArea_ga235b94e0ce402a99fe9a058b83b906,
        "skin": "sknTxtAreaWhiteRnd",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    var lblLink = new kony.ui.Label({
        "id": "lblLink",
        "isVisible": true,
        "left": "5dp",
        "skin": "sklblblack160",
        "text": "Hyperlink",
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtLink = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtLink",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_URL,
        "left": "5dp",
        "onDone": AS_TextField_e991562babfc47398ae7b46eb337a36a,
        "onTextChange": AS_TextField_c637dde2bae740a599ddcb88a5c1e96d,
        "secureTextEntry": false,
        "skin": "skntxtbxrounded",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    FlexContainer0h98f0e1b741c4e.add(lblTitle, txtTitle, lblDescription, txtAreaDescription, lblLink, txtLink);
    fccreatenotification.add(fcFacilityList, Button0g1882ea7fecb4d, CopyButton0da4e7f8b49c64b, FlexContainer0a11e90f4538d4b, FlexContainer0h98f0e1b741c4e);
    fcnotification.add(fcpatienthdrbox, fcnotificationcontainer, fccreatenotification);
    fscbody.add(fcnotification);
    var fcsearchdropdown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcsearchdropdown",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "52.85%",
        "maxHeight": "300dp",
        "isModalContainer": false,
        "skin": "sknfcwhitebg",
        "top": "52dp",
        "width": "19.75%",
        "zIndex": 10
    }, {}, {});
    fcsearchdropdown.setDefaultUnit(kony.flex.DP);
    var segSearch = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "groupCells": false,
        "id": "segSearch",
        "isVisible": true,
        "left": "0%",
        "maxHeight": "300dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_dec32755b9f348f28f57e537be1b024a,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "skSearchSegment",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {},
        "width": "100%",
        "zIndex": 10
    }, {
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false
    }, {});
    fcsearchdropdown.add(segSearch);
    fscbodyScroll.add(fscbody, fcsearchdropdown);
    fcmainbody.add(fcbodyheader, fscsidemenu, km83bf1bada35467eb5bae46426ed18e8, fscbodyScroll);
    var km15a49cfe3764ef89692fea07c052ee3 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "40dp",
        "id": "fcmstfooter",
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcGrayBg"
    }, {}, {});
    km15a49cfe3764ef89692fea07c052ee3.setDefaultUnit(kony.flex.DP);
    var km0962eda380f439787fd3c7919365425 = new kony.ui.RichText({
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
    km15a49cfe3764ef89692fea07c052ee3.add(km0962eda380f439787fd3c7919365425);
    frmNotificationDashboard.add(km43e78b74c914cd2b1130d9763d2b8e4, fcmainbody, km15a49cfe3764ef89692fea07c052ee3);
};

function frmNotificationDashboardGlobals() {
    frmNotificationDashboard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNotificationDashboard,
        "bounces": false,
        "enableScrolling": true,
        "enabledForIdleTimeout": true,
        "id": "frmNotificationDashboard",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "postShow": AS_Form_i0b72b36465f4c969bb076e548413d18,
        "preShow": function(eventobject) {
            AS_Form_c08dd78a1448426da7099257ab293c95(eventobject);
        },
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