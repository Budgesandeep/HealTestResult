function addWidgetsfrmPatientList() {
    frmPatientList.setDefaultUnit(kony.flex.DP);
    var kmbb07e4e945e4ec39bd262a5fb4c4072 = new kony.ui.FlexContainer({
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
    kmbb07e4e945e4ec39bd262a5fb4c4072.setDefaultUnit(kony.flex.DP);
    var kma621d981d254832879aeb4d85fb1cf7 = new kony.ui.FlexContainer({
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
    kma621d981d254832879aeb4d85fb1cf7.setDefaultUnit(kony.flex.DP);
    var km13feec0d6d248bc860fa0e29726f05f = new kony.ui.Image2({
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
    var kmf12602da270460eb7c7422ed591c608 = new kony.ui.FlexContainer({
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
    kmf12602da270460eb7c7422ed591c608.setDefaultUnit(kony.flex.DP);
    kmf12602da270460eb7c7422ed591c608.add();
    var kmce06398967f48efa98d01c0c61c3bcd = new kony.ui.Label({
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
    var km377de4abd3e4a158614d8ce7b4f73e5 = new kony.ui.RichText({
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
    kma621d981d254832879aeb4d85fb1cf7.add(km13feec0d6d248bc860fa0e29726f05f, kmf12602da270460eb7c7422ed591c608, kmce06398967f48efa98d01c0c61c3bcd, km377de4abd3e4a158614d8ce7b4f73e5);
    var km7f04e8542dd4d82b4952e3ea03207d2 = new kony.ui.FlexContainer({
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
    km7f04e8542dd4d82b4952e3ea03207d2.setDefaultUnit(kony.flex.DP);
    var km02f2973b5834cf890f134df2f228c1e = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
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
    km02f2973b5834cf890f134df2f228c1e.setDefaultUnit(kony.flex.DP);
    var km5e72cad848c47fd8f287941e4fa3b24 = new kony.ui.Image2({
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
    var kmbe4f2681b644b24b9ea91cd0c0e5368 = new kony.ui.FlexContainer({
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
    kmbe4f2681b644b24b9ea91cd0c0e5368.setDefaultUnit(kony.flex.DP);
    var km8828ffd1b834519b671eabc5199f5c2 = new kony.ui.RichText({
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
    var km7dcd4911be14a00acd95bdd15e4cdf1 = new kony.ui.RichText({
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
    var km751977d5879473da5237ef5b2e8ffd4 = new kony.ui.RichText({
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
    kmbe4f2681b644b24b9ea91cd0c0e5368.add(km8828ffd1b834519b671eabc5199f5c2, km7dcd4911be14a00acd95bdd15e4cdf1, km751977d5879473da5237ef5b2e8ffd4);
    km02f2973b5834cf890f134df2f228c1e.add(km5e72cad848c47fd8f287941e4fa3b24, kmbe4f2681b644b24b9ea91cd0c0e5368);
    var km5a78ea43b014dd8a3a6d2d96a43abba = new kony.ui.FlexContainer({
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
    km5a78ea43b014dd8a3a6d2d96a43abba.setDefaultUnit(kony.flex.DP);
    var kmf496d171aaf49778b82257247d72225 = new kony.ui.FlexContainer({
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
    kmf496d171aaf49778b82257247d72225.setDefaultUnit(kony.flex.DP);
    kmf496d171aaf49778b82257247d72225.add();
    var kmc58427f4ea14948b0eeda7678cf5aff = new kony.ui.Image2({
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
    var km8f1eb4280a642909a38bcafe6d127fb = new kony.ui.Label({
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
    var kmc6a9890d8d648f1a885fdae7939f7a0 = new kony.ui.Label({
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
    km5a78ea43b014dd8a3a6d2d96a43abba.add(kmf496d171aaf49778b82257247d72225, kmc58427f4ea14948b0eeda7678cf5aff, km8f1eb4280a642909a38bcafe6d127fb, kmc6a9890d8d648f1a885fdae7939f7a0);
    var kmea973a345f04eca907d9f92a87114b0 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_79f88cb2c70649f0bf0c244ca965a102,
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
    kmea973a345f04eca907d9f92a87114b0.setDefaultUnit(kony.flex.DP);
    var km429e70b1f924bbfa9dc48bdc8c86ce4 = new kony.ui.Image2({
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
    var kmf89966c206342aaa985d82ae366729b = new kony.ui.FlexContainer({
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
    kmf89966c206342aaa985d82ae366729b.setDefaultUnit(kony.flex.DP);
    var km5584881719b4b99827ecb9c94f74338 = new kony.ui.Label({
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
    kmf89966c206342aaa985d82ae366729b.add(km5584881719b4b99827ecb9c94f74338);
    kmea973a345f04eca907d9f92a87114b0.add(km429e70b1f924bbfa9dc48bdc8c86ce4, kmf89966c206342aaa985d82ae366729b);
    var km778fa3f847d4377ab9ceb6bf3fb1797 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_3e9169a77a144139816e1c6beedd134e,
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
    km778fa3f847d4377ab9ceb6bf3fb1797.setDefaultUnit(kony.flex.DP);
    var km264c4ebb5564609aa6b719b31c71196 = new kony.ui.Image2({
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
    km778fa3f847d4377ab9ceb6bf3fb1797.add(km264c4ebb5564609aa6b719b31c71196);
    km7f04e8542dd4d82b4952e3ea03207d2.add(km02f2973b5834cf890f134df2f228c1e, km5a78ea43b014dd8a3a6d2d96a43abba, kmea973a345f04eca907d9f92a87114b0, km778fa3f847d4377ab9ceb6bf3fb1797);
    var kmc27143774b0466884a6dd731ef70f25 = new kony.ui.FlexContainer({
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
    kmc27143774b0466884a6dd731ef70f25.setDefaultUnit(kony.flex.DP);
    var km79109bc89b94a8da7dfbb9f98780be4 = new kony.ui.Label({
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
    kmc27143774b0466884a6dd731ef70f25.add(km79109bc89b94a8da7dfbb9f98780be4);
    kmbb07e4e945e4ec39bd262a5fb4c4072.add(kma621d981d254832879aeb4d85fb1cf7, km7f04e8542dd4d82b4952e3ea03207d2, kmc27143774b0466884a6dd731ef70f25);
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
    var fscbodyScroll = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fscbodyScroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "minHeight": "650dp",
        "isModalContainer": false,
        "right": "0dp",
        "skin": "slFbox",
        "top": "50dp",
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
        "height": "50dp",
        "id": "fcdashboardsubheader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "20dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "10dp",
        "width": "97%",
        "zIndex": 3
    }, {}, {});
    fcdashboardsubheader.setDefaultUnit(kony.flex.DP);
    var lblheaderhealingdashboard = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblheaderhealingdashboard",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblgrey125",
        "text": "MSR Dashboard",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcdashboardpatients = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "fcdashboardpatients",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    fcdashboardpatients.setDefaultUnit(kony.flex.DP);
    var btnallpatients = new kony.ui.Button({
        "centerY": "50%",
        "height": "25dp",
        "id": "btnallpatients",
        "isVisible": true,
        "left": "15%",
        "onClick": AS_Button_027cd66068804b21b3abe90c9b0a04e1,
        "skin": "sknbtnradioSelected",
        "text": "All Patients",
        "width": "25dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnradioSelectedtranshover"
    });
    var lblallpatients = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblallpatients",
        "isVisible": true,
        "left": "10dp",
        "skin": "sklblblackbold",
        "text": "All Patients",
        "width": "90dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnmypatients = new kony.ui.Button({
        "centerY": "50%",
        "height": "25dp",
        "id": "btnmypatients",
        "isVisible": true,
        "left": "25dp",
        "onClick": AS_Button_931b92bdc5bf4485843fe3c799e460f2,
        "skin": "sknbtnradionormal",
        "text": "My Patients",
        "width": "25dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnradioSelectedtranshover"
    });
    var lblmypatients = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmypatients",
        "isVisible": true,
        "left": "10dp",
        "skin": "sklblblackbold",
        "text": "My Patients   ",
        "width": "90dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdashboardpatients.add(btnallpatients, lblallpatients, btnmypatients, lblmypatients);
    var fcSearchPatient = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "fcSearchPatient",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "385dp",
        "zIndex": 2
    }, {}, {});
    fcSearchPatient.setDefaultUnit(kony.flex.DP);
    var lblSearch = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSearch",
        "isVisible": true,
        "left": "20dp",
        "right": "2dp",
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
        "height": "36dp",
        "id": "tbpatientsearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "2dp",
        "maxTextLength": null,
        "placeholder": "First Name / Last Name",
        "secureTextEntry": false,
        "skin": "sktb120graybrdr11",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "6dp",
        "width": "240dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onEndEditing": AS_TextField_f8c94633f6f14c029b6116605500e626,
        "onKeyUp": AS_TextField_1f2cbcd996e142db8f335a6568d52697
    });
    var fcsearchicon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "30dp",
        "id": "fcsearchicon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-35dp",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_e3ad0e5215304390a963b9690e251bfa,
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
    var fcsubhdrlinks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcsubhdrlinks",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "right": "3%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "23%",
        "zIndex": 1
    }, {}, {});
    fcsubhdrlinks.setDefaultUnit(kony.flex.DP);
    var btnwccdashboard = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "height": "100%",
        "id": "btnwccdashboard",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_67e850d409b34de7aed763d0b4300a79,
        "skin": "skbtntxtSkyBluebold113",
        "text": "WCC Dashboard",
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
    var fcvertsepline1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12dp",
        "id": "fcvertsepline1",
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
    fcvertsepline1.setDefaultUnit(kony.flex.DP);
    fcvertsepline1.add();
    var btnpatientlist = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtbold113",
        "height": "100%",
        "id": "btnpatientlist",
        "isVisible": true,
        "left": "0%",
        "skin": "skbtntxtbold113",
        "text": "Patient List",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcsubhdrlinks.add(btnwccdashboard, fcvertsepline1, btnpatientlist);
    var fcDownload = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "42dp",
        "id": "fcDownload",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-1.80%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_4a516ca742c84dba815c46c413dcd180,
        "skin": "slFbox",
        "top": "15%",
        "width": "42dp",
        "zIndex": 2
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
    fcdashboardsubheader.add(lblheaderhealingdashboard, fcdashboardpatients, fcSearchPatient, fcsubhdrlinks, fcDownload);
    var fchealiingdashboard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "140dp",
        "id": "fchealiingdashboard",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "isModalContainer": false,
        "skin": "skfctrans",
        "top": "1dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    fchealiingdashboard.setDefaultUnit(kony.flex.DP);
    var fchealingdashboardline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "fchealingdashboardline",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    fchealingdashboardline.setDefaultUnit(kony.flex.DP);
    fchealingdashboardline.add();
    var fchealingdashboardlist = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": false,
        "id": "fchealingdashboardlist",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcwhitebgshadow",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fchealingdashboardlist.setDefaultUnit(kony.flex.DP);
    var fchealingdashboardhdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fchealingdashboardhdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0",
        "width": "100%"
    }, {}, {});
    fchealingdashboardhdr.setDefaultUnit(kony.flex.DP);
    var lblhdrweeksintreatement = new kony.ui.Label({
        "centerY": "50.00%",
        "id": "lblhdrweeksintreatement",
        "isVisible": true,
        "left": "20dp",
        "skin": "sknlblsegmentheader",
        "text": "Weeks",
        "width": "18.60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcvertline1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline1.setDefaultUnit(kony.flex.DP);
    fcvertline1.add();
    var fcnoofpatients = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "fcnoofpatients",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20%",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcnoofpatients.setDefaultUnit(kony.flex.DP);
    var lblhdrweeks1 = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblhdrweeks1",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblsegmentheader",
        "text": "4-7",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 6, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnoofpatients.add(lblhdrweeks1);
    var fcvertline2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline2.setDefaultUnit(kony.flex.DP);
    fcvertline2.add();
    var lblhdrweeks2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrweeks2",
        "isVisible": true,
        "left": "40%",
        "skin": "sknlblsegmentheader",
        "text": "8-11",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcvertline3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "60%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline3.setDefaultUnit(kony.flex.DP);
    fcvertline3.add();
    var lblhdrweeks3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrweeks3",
        "isVisible": true,
        "left": "60%",
        "skin": "sknlblsegmentheader",
        "text": "12-13",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcvertline4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "80%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline4.setDefaultUnit(kony.flex.DP);
    fcvertline4.add();
    var lblhdrweeks4 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhdrweeks4",
        "isVisible": true,
        "left": "80%",
        "skin": "sknlblsegmentheader",
        "text": "14+",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcvertline5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline5",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline5.setDefaultUnit(kony.flex.DP);
    fcvertline5.add();
    fchealingdashboardhdr.add(lblhdrweeksintreatement, fcvertline1, fcnoofpatients, fcvertline2, lblhdrweeks2, fcvertline3, lblhdrweeks3, fcvertline4, lblhdrweeks4, fcvertline5);
    var lblline = new kony.ui.Label({
        "height": "1dp",
        "id": "lblline",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fchealingdashboard1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fchealingdashboard1",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0",
        "isModalContainer": false,
        "skin": "sknfcwhite",
        "top": "0",
        "width": "100%"
    }, {}, {});
    fchealingdashboard1.setDefaultUnit(kony.flex.DP);
    var lbldataweeks1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldataweeks1",
        "isVisible": true,
        "left": "1dp",
        "skin": "sknlblsegmentheader",
        "text": "MSR Patients",
        "width": "19.95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcnoofpatients1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "fcnoofpatients1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_9b786524d8fa47bf844900d7b9410299,
        "skin": "slFbox",
        "width": "20.02%",
        "zIndex": 1
    }, {}, {});
    fcnoofpatients1.setDefaultUnit(kony.flex.DP);
    var fcvertline6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline6.setDefaultUnit(kony.flex.DP);
    fcvertline6.add();
    var lbldatanoofpatients1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldatanoofpatients1",
        "isVisible": true,
        "left": "1dp",
        "skin": "sknlblbluebold",
        "text": "6",
        "width": "99.80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnoofpatients1.add(fcvertline6, lbldatanoofpatients1);
    var fcadvanced1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "fcadvanced1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_0c8b656d92d742598bf39f8913168235,
        "skin": "slFbox",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcadvanced1.setDefaultUnit(kony.flex.DP);
    var fcvertline7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline7.setDefaultUnit(kony.flex.DP);
    fcvertline7.add();
    var lbldataadvanced1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldataadvanced1",
        "isVisible": true,
        "left": "1dp",
        "skin": "sknlblbluebold",
        "text": "11",
        "width": "99.50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcadvanced1.add(fcvertline7, lbldataadvanced1);
    var fccomplex1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "fccomplex1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_bf2dc783430d449cafeef28f0dbc56e2,
        "skin": "slFbox",
        "width": "20.05%",
        "zIndex": 1
    }, {}, {});
    fccomplex1.setDefaultUnit(kony.flex.DP);
    var fcvertline8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline8.setDefaultUnit(kony.flex.DP);
    fcvertline8.add();
    var lbldatacomplex1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldatacomplex1",
        "isVisible": true,
        "left": "1dp",
        "skin": "sknlblbluebold",
        "text": "7",
        "width": "99.70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fccomplex1.add(fcvertline8, lbldatacomplex1);
    var fcpalliative1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcpalliative1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_8f9082ce7d264037a6f2c916e688df46,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcpalliative1.setDefaultUnit(kony.flex.DP);
    var fcvertline9 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcvertline9",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcvertline9.setDefaultUnit(kony.flex.DP);
    fcvertline9.add();
    var lbldatapalliative1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbldatapalliative1",
        "isVisible": true,
        "left": "1%",
        "skin": "sknlblbluebold",
        "text": "2",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpalliative1.add(fcvertline9, lbldatapalliative1);
    fchealingdashboard1.add(lbldataweeks1, fcnoofpatients1, fcadvanced1, fccomplex1, fcpalliative1);
    var lblline1 = new kony.ui.Label({
        "height": "1dp",
        "id": "lblline1",
        "isVisible": false,
        "left": "0%",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fchealingdashboard = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fchealingdashboard",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "isModalContainer": false,
        "skin": "sknfcwhitebgshadow",
        "top": "0",
        "width": "100%"
    }, {}, {});
    fchealingdashboard.setDefaultUnit(kony.flex.DP);
    var fcLine1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcLine1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcLine1.setDefaultUnit(kony.flex.DP);
    fcLine1.add();
    var fcMsr2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "fcMsr2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "20%",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcMsr2.setDefaultUnit(kony.flex.DP);
    var lblmsrcount10 = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblmsrcount10",
        "isVisible": false,
        "left": "0%",
        "skin": "sknlblblueboldul",
        "text": "6",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 6, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skLbltxtHoverSkyBlueboldUnderline"
    });
    var btncheckbox2 = new kony.ui.Button({
        "centerX": "45%",
        "centerY": "55%",
        "focusSkin": "sknbtnuncheck",
        "height": "30dp",
        "id": "btncheckbox2",
        "isVisible": true,
        "onClick": AS_Button_8b33a4471bae4bada8c8edff52cfb92f,
        "skin": "sknbtnuncheck",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnunchecktranshover"
    });
    var lblmsrcount1 = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnblack100",
        "id": "lblmsrcount1",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknbtnblack100",
        "text": "12",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnblack100"
    });
    fcMsr2.add(lblmsrcount10, btncheckbox2, lblmsrcount1);
    var fcMsr1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcMsr1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcMsr1.setDefaultUnit(kony.flex.DP);
    var btncheckbox1 = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnuncheck",
        "height": "30dp",
        "id": "btncheckbox1",
        "isVisible": true,
        "left": "30dp",
        "onClick": AS_Button_ea8ce00e4e1445a38c73d2586c4a293d,
        "skin": "sknbtnuncheck",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnunchecktranshover"
    });
    var lblPatients = new kony.ui.Label({
        "centerY": "55%",
        "id": "lblPatients",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblsegmentheader",
        "text": "MSR Patients",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcMsr1.add(btncheckbox1, lblPatients);
    var fcMsr3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcMsr3",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "40%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcMsr3.setDefaultUnit(kony.flex.DP);
    var btncheckbox3 = new kony.ui.Button({
        "centerX": "45%",
        "centerY": "55%",
        "focusSkin": "sknbtnuncheck",
        "height": "30dp",
        "id": "btncheckbox3",
        "isVisible": true,
        "onClick": AS_Button_cb83b2afcce44f56b326052f66e0a157,
        "skin": "sknbtnuncheck",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnunchecktranshover"
    });
    var lblmsrcount2 = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnblack100",
        "id": "lblmsrcount2",
        "isVisible": true,
        "left": "10dp",
        "right": "0%",
        "skin": "sknbtnblack100",
        "text": "12",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnblack100"
    });
    fcMsr3.add(btncheckbox3, lblmsrcount2);
    var fcMsr4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcMsr4",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "60%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcMsr4.setDefaultUnit(kony.flex.DP);
    var btncheckbox4 = new kony.ui.Button({
        "centerX": "45%",
        "centerY": "55%",
        "focusSkin": "sknbtnuncheck",
        "height": "30dp",
        "id": "btncheckbox4",
        "isVisible": true,
        "left": "100dp",
        "onClick": AS_Button_67e1612bdb6f4ddcbb42c21e8bdaad55,
        "skin": "sknbtnuncheck",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnunchecktranshover"
    });
    var lblmsrcount3 = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnblack100",
        "id": "lblmsrcount3",
        "isVisible": true,
        "left": "10dp",
        "right": "0%",
        "skin": "sknbtnblack100",
        "text": "12",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnblack100"
    });
    fcMsr4.add(btncheckbox4, lblmsrcount3);
    var fcMsr5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcMsr5",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "80%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcMsr5.setDefaultUnit(kony.flex.DP);
    var btncheckbox5 = new kony.ui.Button({
        "centerX": "45%",
        "centerY": "55%",
        "focusSkin": "sknbtnuncheck",
        "height": "30dp",
        "id": "btncheckbox5",
        "isVisible": true,
        "left": "40dp",
        "onClick": AS_Button_f0d713fef8ae442c90917aaedf66bfc6,
        "skin": "sknbtnuncheck",
        "width": "30dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnunchecktranshover"
    });
    var lblmsrcount4 = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnblack100",
        "id": "lblmsrcount4",
        "isVisible": true,
        "left": "10dp",
        "right": "0%",
        "skin": "sknbtnblack100",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnblack100"
    });
    fcMsr5.add(btncheckbox5, lblmsrcount4);
    var fcLine2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcLine2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcLine2.setDefaultUnit(kony.flex.DP);
    fcLine2.add();
    var lblmsrcount20 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmsrcount20",
        "isVisible": false,
        "left": "40%",
        "onTouchEnd": AS_Label_cfcde6f7c18a4fd4ad193fe06ab89493,
        "skin": "sknlblblueboldul",
        "text": "11",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skLbltxtHoverSkyBlueboldUnderline"
    });
    var fcLine3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcLine3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "60%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcLine3.setDefaultUnit(kony.flex.DP);
    fcLine3.add();
    var lblmsrcount30 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmsrcount30",
        "isVisible": false,
        "left": "60%",
        "onTouchEnd": AS_Label_f1c052b508a440539da8e4505486761a,
        "skin": "sknlblblueboldul",
        "text": "7",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skLbltxtHoverSkyBlueboldUnderline"
    });
    var fcLine4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcLine4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "80.05%",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcLine4.setDefaultUnit(kony.flex.DP);
    fcLine4.add();
    var lblmsrcount40 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmsrcount40",
        "isVisible": false,
        "left": "80%",
        "onTouchEnd": AS_Label_ce0209ffc83845f9b647e6e26f2080da,
        "skin": "sknlblblueboldul",
        "text": "2",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skLbltxtHoverSkyBlueboldUnderline"
    });
    var fcLine5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcLine5",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "isModalContainer": false,
        "skin": "skfcwhitenobrdr",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {}, {});
    fcLine5.setDefaultUnit(kony.flex.DP);
    fcLine5.add();
    fchealingdashboard.add(fcLine1, fcMsr2, fcMsr1, fcMsr3, fcMsr4, fcMsr5, fcLine2, lblmsrcount20, fcLine3, lblmsrcount30, fcLine4, lblmsrcount40, fcLine5);
    fchealingdashboardlist.add(fchealingdashboardhdr, lblline, fchealingdashboard1, lblline1, fchealingdashboard);
    var flxline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "2dp",
        "id": "flxline",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "110dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxline.setDefaultUnit(kony.flex.DP);
    flxline.add();
    var km38e9a21b918467aba27103ccbd77046 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "120dp",
        "id": "fcPrintMenu",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "right": "1dp",
        "width": "150dp",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "skin": "skfcwhitegraybdr",
        "top": "0dp"
    }, {}, {});
    km38e9a21b918467aba27103ccbd77046.setDefaultUnit(kony.flex.DP);
    var km22219e314324c88bf1f89030188b7cc = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcPrint",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_b3177fd8816546349bb69bfe577f6abb,
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
    km22219e314324c88bf1f89030188b7cc.setDefaultUnit(kony.flex.DP);
    var kmdc01a18ed1e4d35a8aa79108d6ef302 = new kony.ui.Image2({
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
    var km302eff2aca34325afb084d4fdbc48f0 = new kony.ui.Label({
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
    km22219e314324c88bf1f89030188b7cc.add(kmdc01a18ed1e4d35a8aa79108d6ef302, km302eff2aca34325afb084d4fdbc48f0);
    var km15479410c424373a22df331b4b529c7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportPdf",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_da5f1df1d4fd40479aac148f93a9dd60,
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
    km15479410c424373a22df331b4b529c7.setDefaultUnit(kony.flex.DP);
    var kmac91a76c4a449f8b5ab197cbacbca03 = new kony.ui.Image2({
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
    var km3bf0c9627d24330839107eadebabcd3 = new kony.ui.Label({
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
    km15479410c424373a22df331b4b529c7.add(kmac91a76c4a449f8b5ab197cbacbca03, km3bf0c9627d24330839107eadebabcd3);
    var km328ddc59c2041c5b9d3fdaf67407cc0 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "41dp",
        "id": "fcExportExcel",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_a71965f0913640c3bdd3d0657cb96d83,
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
    km328ddc59c2041c5b9d3fdaf67407cc0.setDefaultUnit(kony.flex.DP);
    var km1b649c8bcc841f39107c90240294c11 = new kony.ui.Image2({
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
    var kmb325a15259c4a9d8b1be476e91fc28c = new kony.ui.Label({
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
    var kmafd0bd5da284d2d801820b0237fb711 = new kony.ui.Label({
        "height": "1dp",
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
    km328ddc59c2041c5b9d3fdaf67407cc0.add(km1b649c8bcc841f39107c90240294c11, kmb325a15259c4a9d8b1be476e91fc28c, kmafd0bd5da284d2d801820b0237fb711);
    km38e9a21b918467aba27103ccbd77046.add(km22219e314324c88bf1f89030188b7cc, km15479410c424373a22df331b4b529c7, km328ddc59c2041c5b9d3fdaf67407cc0);
    fchealiingdashboard.add(fchealingdashboardline, fchealingdashboardlist, flxline, km38e9a21b918467aba27103ccbd77046);
    var fcparentpatientlist = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": false,
        "id": "fcparentpatientlist",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcparentpatientlist.setDefaultUnit(kony.flex.DP);
    var fcpatientlistcontainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "5dp",
        "clipBounds": false,
        "id": "fcpatientlistcontainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcwhitebgshadow",
        "top": "30dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    fcpatientlistcontainer.setDefaultUnit(kony.flex.DP);
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
        "text": "Patient List",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgsearch = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "imgsearch",
        "isVisible": true,
        "left": "-25dp",
        "skin": "slImage",
        "src": "search.png",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fclegend = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "fclegend",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10%",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "61%",
        "zIndex": 1
    }, {}, {});
    fclegend.setDefaultUnit(kony.flex.DP);
    var lblhealingstatus = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhealingstatus",
        "isVisible": true,
        "left": "4%",
        "skin": "sklblblackbold",
        "text": "Healing Status",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listhealingstatus = new kony.ui.ListBox({
        "centerY": "50%",
        "height": "40dp",
        "id": "listhealingstatus",
        "isVisible": true,
        "left": "2%",
        "masterData": [
            ["all", "All"],
            ["healingasplanned", "Healing as Planned"],
            ["healingatrisk", "Healing at Risk"]
        ],
        "selectedKey": "all",
        "selectedKeyValue": ["all", "All"],
        "skin": "sklsrnd100",
        "width": "220dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {
        "multiSelect": false
    });
    var lbltransferstatus = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltransferstatus",
        "isVisible": true,
        "left": "4%",
        "skin": "sklblblackbold",
        "text": "Transfer Status",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listtransferstatus = new kony.ui.ListBox({
        "centerY": "50%",
        "height": "40dp",
        "id": "listtransferstatus",
        "isVisible": true,
        "left": "1%",
        "masterData": [
            ["all", "All"],
            ["easypivotpatientlift", "Easy Pivot Patient Lift"],
            ["hoyerlift", "Hoyer Lift"],
            ["manual", "Manual"],
            ["stretcher", "Stretcher"],
            ["transferboard", "Transfer Board"],
            ["other", "Other"],
            ["none", "None"]
        ],
        "selectedKey": "all",
        "selectedKeyValue": ["all", "All"],
        "skin": "sklsrnd100",
        "width": "240dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false
    }, {
        "multiSelect": false
    });
    fclegend.add(lblhealingstatus, listhealingstatus, lbltransferstatus, listtransferstatus);
    var lblcategory = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblcategory",
        "isVisible": false,
        "left": "24%",
        "skin": "sklblblackbold",
        "text": "Category",
        "top": "14dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listboxcategory = new kony.ui.ListBox({
        "centerY": "50%",
        "height": "40dp",
        "id": "listboxcategory",
        "isVisible": false,
        "left": "1%",
        "masterData": [
            ["1", "All"],
            ["2", "Patient"],
            ["3", "Case Manager"],
            ["4", "Physician"],
            ["5", "Next Appt."],
            ["6", "Appt. Type"],
            ["7", "Wounds"],
            ["8", "Weeks"],
            ["9", "Advanced Procedures"],
            ["10", "Transfer Status"]
        ],
        "onSelection": AS_ListBox_3bf6ce962cd648b3931035afce1ed160,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "All"],
        "skin": "sklbgray120",
        "top": "16dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sklbgrayhover",
        "multiSelect": false
    });
    var lbltype = new kony.ui.Label({
        "centerY": "50%",
        "id": "lbltype",
        "isVisible": false,
        "left": "5%",
        "skin": "sklblblackbold",
        "text": "Type",
        "top": "23dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var listboxtype = new kony.ui.ListBox({
        "centerY": "50%",
        "height": "40dp",
        "id": "listboxtype",
        "isVisible": false,
        "left": "1%",
        "masterData": [
            ["1", "All"]
        ],
        "onSelection": AS_ListBox_1167b893441c4f84b15f22176bcc4a9d,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "All"],
        "skin": "sklbgray120",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sklbgrayhover",
        "multiSelect": false
    });
    var btnClearFilters = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "height": "100%",
        "id": "btnClearFilters",
        "isVisible": true,
        "onClick": AS_Button_371665c52e0f4fd2a69d389507ab617c,
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
    var btnTodaypatient = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold",
        "height": "100%",
        "id": "btnTodaypatient",
        "isVisible": true,
        "onClick": AS_Button_a92de14b61074899abd9c302de6671c7,
        "right": "12%",
        "skin": "skbtntxtSkyBluebold113",
        "text": "Today's Patients",
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
    fcpatienthdrbox.add(lblhdrpatientlist, imgsearch, fclegend, lblcategory, listboxcategory, lbltype, listboxtype, btnClearFilters, btnTodaypatient);
    var fcpatientlistline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1px",
        "id": "fcpatientlistline",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "isModalContainer": false,
        "skin": "sknfcdividerr",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientlistline.setDefaultUnit(kony.flex.DP);
    fcpatientlistline.add();
    if (typeof initializeFBox0bc8fdb1e40f94f === 'function') initializeFBox0bc8fdb1e40f94f();
    var segpatientlist = new kony.ui.SegmentedUI2({
        "alternateRowSkin": "sksegrowaltgray",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "Copylblline0ce112e327b7c46": "Label",
            "Copylblline0d30e270639d841": "Label",
            "Copylblline0e330e7a1762d4a": "Label",
            "Copylblline0ee0be844baa241": "Label",
            "Copylblline0f2b045b192c243": "Label",
            "Copylblline0g1f44f46216d48": "Label",
            "Copylblline0h755b71d7d6b47": "Label",
            "Copylblline0id5e45ebbfe944": "",
            "lblPrecautions": "Transmission-Based Precautions",
            "lblappttype": "Appt. Type",
            "lblcasemanager": "Case Manager",
            "lblhealper": "Advanced Procedures",
            "lblnextappt": "Next Appt.",
            "lblpatientmsrstatus": "Label",
            "lblpatientname": "Patient",
            "lblphysician": "Physician",
            "lbltransferstatus": "Transfer Status",
            "lblweeks": "Weeks",
            "lblwounds": "Wounds"
        }, {
            "Copylblline0ce112e327b7c46": "Label",
            "Copylblline0d30e270639d841": "Label",
            "Copylblline0e330e7a1762d4a": "Label",
            "Copylblline0ee0be844baa241": "Label",
            "Copylblline0f2b045b192c243": "Label",
            "Copylblline0g1f44f46216d48": "Label",
            "Copylblline0h755b71d7d6b47": "Label",
            "Copylblline0id5e45ebbfe944": "",
            "lblPrecautions": "Transmission-Based Precautions",
            "lblappttype": "Appt. Type",
            "lblcasemanager": "Case Manager",
            "lblhealper": "Advanced Procedures",
            "lblnextappt": "Next Appt.",
            "lblpatientmsrstatus": "Label",
            "lblpatientname": "Patient",
            "lblphysician": "Physician",
            "lbltransferstatus": "Transfer Status",
            "lblweeks": "Weeks",
            "lblwounds": "Wounds"
        }, {
            "Copylblline0ce112e327b7c46": "Label",
            "Copylblline0d30e270639d841": "Label",
            "Copylblline0e330e7a1762d4a": "Label",
            "Copylblline0ee0be844baa241": "Label",
            "Copylblline0f2b045b192c243": "Label",
            "Copylblline0g1f44f46216d48": "Label",
            "Copylblline0h755b71d7d6b47": "Label",
            "Copylblline0id5e45ebbfe944": "",
            "lblPrecautions": "Transmission-Based Precautions",
            "lblappttype": "Appt. Type",
            "lblcasemanager": "Case Manager",
            "lblhealper": "Advanced Procedures",
            "lblnextappt": "Next Appt.",
            "lblpatientmsrstatus": "Label",
            "lblpatientname": "Patient",
            "lblphysician": "Physician",
            "lbltransferstatus": "Transfer Status",
            "lblweeks": "Weeks",
            "lblwounds": "Wounds"
        }, {
            "Copylblline0ce112e327b7c46": "Label",
            "Copylblline0d30e270639d841": "Label",
            "Copylblline0e330e7a1762d4a": "Label",
            "Copylblline0ee0be844baa241": "Label",
            "Copylblline0f2b045b192c243": "Label",
            "Copylblline0g1f44f46216d48": "Label",
            "Copylblline0h755b71d7d6b47": "Label",
            "Copylblline0id5e45ebbfe944": "",
            "lblPrecautions": "Transmission-Based Precautions",
            "lblappttype": "Appt. Type",
            "lblcasemanager": "Case Manager",
            "lblhealper": "Advanced Procedures",
            "lblnextappt": "Next Appt.",
            "lblpatientmsrstatus": "Label",
            "lblpatientname": "Patient",
            "lblphysician": "Physician",
            "lbltransferstatus": "Transfer Status",
            "lblweeks": "Weeks",
            "lblwounds": "Wounds"
        }, {
            "Copylblline0ce112e327b7c46": "Label",
            "Copylblline0d30e270639d841": "Label",
            "Copylblline0e330e7a1762d4a": "Label",
            "Copylblline0ee0be844baa241": "Label",
            "Copylblline0f2b045b192c243": "Label",
            "Copylblline0g1f44f46216d48": "Label",
            "Copylblline0h755b71d7d6b47": "Label",
            "Copylblline0id5e45ebbfe944": "",
            "lblPrecautions": "Transmission-Based Precautions",
            "lblappttype": "Appt. Type",
            "lblcasemanager": "Case Manager",
            "lblhealper": "Advanced Procedures",
            "lblnextappt": "Next Appt.",
            "lblpatientmsrstatus": "Label",
            "lblpatientname": "Patient",
            "lblphysician": "Physician",
            "lbltransferstatus": "Transfer Status",
            "lblweeks": "Weeks",
            "lblwounds": "Wounds"
        }],
        "groupCells": false,
        "id": "segpatientlist",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegment",
        "rowTemplate": FBox0bc8fdb1e40f94f,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e3e3e300",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "135dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer": "FlexContainer",
            "fcSegPatientList": "fcSegPatientList",
            "lblPrecautions": "lblPrecautions",
            "lblappttype": "lblappttype",
            "lblcasemanager": "lblcasemanager",
            "lblhealper": "lblhealper",
            "lblnextappt": "lblnextappt",
            "lblpatientmsrstatus": "lblpatientmsrstatus",
            "lblpatientname": "lblpatientname",
            "lblphysician": "lblphysician",
            "lbltransferstatus": "lbltransferstatus",
            "lblweeks": "lblweeks",
            "lblwounds": "lblwounds"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcpatientlistlegends = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcpatientlistlegends",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcwhite",
        "top": "-1dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientlistlegends.setDefaultUnit(kony.flex.DP);
    var imgasplanned = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgasplanned",
        "isVisible": true,
        "left": "66%",
        "skin": "slImage",
        "src": "green.png",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblasplanned = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblasplanned",
        "isVisible": true,
        "left": "1%",
        "skin": "sklbldarkgray",
        "text": "Healing as Planned",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgatrisk = new kony.ui.Image2({
        "centerY": "50%",
        "height": "25dp",
        "id": "imgatrisk",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "downred.png",
        "width": "25dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblhealing = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhealing",
        "isVisible": true,
        "left": "1%",
        "skin": "sklbldarkgray",
        "text": "Healing at Risk",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientlistlegends.add(imgasplanned, lblasplanned, imgatrisk, lblhealing);
    var fcpatientlisthdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75dp",
        "id": "fcpatientlisthdr",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcdarkgraybg",
        "top": "60dp",
        "width": "100%"
    }, {}, {});
    fcpatientlisthdr.setDefaultUnit(kony.flex.DP);
    var fcpatientname = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcpatientname",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
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
        "left": "0dp",
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
        "left": "7%",
        "skin": "sklblwhite90bold",
        "text": "Patient",
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
        "onClick": AS_Button_4a861511b83c49cba0250917a0b4a20f,
        "right": "10%",
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
    var Copylblline01ff4304d598d47 = new kony.ui.Label({
        "height": "100%",
        "id": "Copylblline01ff4304d598d47",
        "isVisible": false,
        "right": "0dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientname.add(FlexContainer0b56dbe2f0c6e47, Copylblline01ff4304d598d47);
    var fccasemanager = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fccasemanager",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "11%",
        "zIndex": 2
    }, {}, {});
    fccasemanager.setDefaultUnit(kony.flex.DP);
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
    var lblcasemanager = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblcasemanager",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Case Manager",
        "width": "50%",
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
        "onClick": AS_Button_4345448892864300903cd1d8c1e1fdd7,
        "right": "10%",
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
    FlexContainer0c76bf83ca0b343.add(lblcasemanager, imgdown2);
    var lblline2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline2",
        "isVisible": false,
        "right": "0dp",
        "skin": "sklbllinewhite",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fccasemanager.add(FlexContainer0c76bf83ca0b343, lblline2);
    var fcphysician = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcphysician",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 3
    }, {}, {});
    fcphysician.setDefaultUnit(kony.flex.DP);
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
    var lblphysician = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblphysician",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Physician",
        "width": "50%",
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
        "onClick": AS_Button_deb6dc4c34f044fc962966a5f15f51fb,
        "right": "10%",
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
    FlexContainer0ad9260b685b747.add(lblphysician, imgdown3);
    var lblline3 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline3",
        "isVisible": false,
        "right": "0dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcphysician.add(FlexContainer0ad9260b685b747, lblline3);
    var fcnextappt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcnextappt",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "12%",
        "zIndex": 10
    }, {}, {});
    fcnextappt.setDefaultUnit(kony.flex.DP);
    var FlexContainer071f487a8c34642 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer071f487a8c34642",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    FlexContainer071f487a8c34642.setDefaultUnit(kony.flex.DP);
    var lblnextappt = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblnextappt",
        "isVisible": true,
        "left": "2%",
        "skin": "sklblwhite90bold",
        "text": "Next Appointment",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown4 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown4",
        "isVisible": true,
        "onClick": AS_Button_d261bcfa2ccc4cf9b99f532c13f80d4c,
        "right": "5%",
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
    FlexContainer071f487a8c34642.add(lblnextappt, imgdown4);
    var lblline4 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline4",
        "isVisible": false,
        "right": "0dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnextappt.add(FlexContainer071f487a8c34642, lblline4);
    var fcappttype = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcappttype",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 5
    }, {}, {});
    fcappttype.setDefaultUnit(kony.flex.DP);
    var FlexContainer01cdc97ef9e1243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer01cdc97ef9e1243",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01cdc97ef9e1243.setDefaultUnit(kony.flex.DP);
    var lblappttype = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblappttype",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblwhite90bold",
        "text": "Appointment Type",
        "width": "84%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown5 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown5",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_bd8f6d59489645ea97cf1c9bcbcbf42a,
        "skin": "skinBtnFilter",
        "top": "0",
        "width": "15dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skinBtnFiltertranshover"
    });
    FlexContainer01cdc97ef9e1243.add(lblappttype, imgdown5);
    var lblline5 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline5",
        "isVisible": false,
        "right": "2dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 6
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcappttype.add(FlexContainer01cdc97ef9e1243, lblline5);
    var fcwounds = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcwounds",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "6.50%",
        "zIndex": 6
    }, {}, {});
    fcwounds.setDefaultUnit(kony.flex.DP);
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
    var lblwounds = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwounds",
        "isVisible": true,
        "left": "5%",
        "skin": "sklblwhite90bold",
        "text": "Wounds",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown6 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown6",
        "isVisible": true,
        "left": "10%",
        "onClick": AS_Button_aa6e54ea9b0b42778c4b496631937671,
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
    FlexContainer003bf4c58a6f648.add(lblwounds, imgdown6);
    var lblline6 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline6",
        "isVisible": false,
        "right": "2dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcwounds.add(FlexContainer003bf4c58a6f648, lblline6);
    var fcweeks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcweeks",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "6.50%",
        "zIndex": 7
    }, {}, {});
    fcweeks.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f5b4c782f0824d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0f5b4c782f0824d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f5b4c782f0824d.setDefaultUnit(kony.flex.DP);
    var lblweeks = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblweeks",
        "isVisible": true,
        "left": "10%",
        "skin": "sklblwhite90bold",
        "text": "Weeks",
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
        "left": "10%",
        "onClick": AS_Button_2a9d6d06d9f440698bc19841e86dd62c,
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
    FlexContainer0f5b4c782f0824d.add(lblweeks, imgdown7);
    var lblline7 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline7",
        "isVisible": false,
        "right": "3dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcweeks.add(FlexContainer0f5b4c782f0824d, lblline7);
    var fchealper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fchealper",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "13%",
        "zIndex": 8
    }, {}, {});
    fchealper.setDefaultUnit(kony.flex.DP);
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
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0cddca5c7ce6e4a.setDefaultUnit(kony.flex.DP);
    var lblhealper = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblhealper",
        "isVisible": true,
        "left": "1%",
        "skin": "sklblwhite90bold",
        "text": "Advanced Procedures",
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
        "onClick": AS_Button_2af8b20d75b14d5c83300033318ac2c1,
        "right": "10%",
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
    FlexContainer0cddca5c7ce6e4a.add(lblhealper, imgdown8);
    var lblline8 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline8",
        "isVisible": false,
        "right": "4dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fchealper.add(FlexContainer0cddca5c7ce6e4a, lblline8);
    var fcTransmissionPrecautions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcTransmissionPrecautions",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "12.50%",
        "zIndex": 9
    }, {}, {});
    fcTransmissionPrecautions.setDefaultUnit(kony.flex.DP);
    var lblTransmissionPrecautions = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblTransmissionPrecautions",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblwhite90bold",
        "text": "Transmission-Based Precautions",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 2, 0, 1],
        "paddingInPixel": false
    }, {});
    var imgdown10 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown10",
        "isVisible": true,
        "onClick": AS_Button_87c2c6228db44f34b793413a12131c7a,
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
    var lblline9 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline9",
        "isVisible": false,
        "left": "39dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTransmissionPrecautions.add(lblTransmissionPrecautions, imgdown10, lblline9);
    var fctransferstatus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fctransferstatus",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": 0,
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 9
    }, {}, {});
    fctransferstatus.setDefaultUnit(kony.flex.DP);
    var FlexContainer0edbf3c8cde284b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0edbf3c8cde284b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0edbf3c8cde284b.setDefaultUnit(kony.flex.DP);
    var Copylbltransferstatus0584c847aaeb045 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Copylbltransferstatus0584c847aaeb045",
        "isVisible": true,
        "left": "1%",
        "skin": "sklblwhite90bold",
        "text": "Transfer Status",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdown9 = new kony.ui.Button({
        "centerY": "50%",
        "height": "15dp",
        "id": "imgdown9",
        "isVisible": true,
        "onClick": AS_Button_f1fdff86b10944c3896c85a224203d28,
        "right": "10%",
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
    FlexContainer0edbf3c8cde284b.add(Copylbltransferstatus0584c847aaeb045, imgdown9);
    fctransferstatus.add(FlexContainer0edbf3c8cde284b);
    fcpatientlisthdr.add(fcpatientname, fccasemanager, fcphysician, fcnextappt, fcappttype, fcwounds, fcweeks, fchealper, fcTransmissionPrecautions, fctransferstatus);
    var lblSeperator1 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator1",
        "isVisible": true,
        "left": "11%",
        "skin": "sklblline",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator2 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator2",
        "isVisible": true,
        "left": "21.50%",
        "skin": "sklblline",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator3 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator3",
        "isVisible": true,
        "left": "31.50%",
        "skin": "sklblline",
        "text": "Label",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator4 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator4",
        "isVisible": true,
        "left": "42.50%",
        "skin": "sklblline",
        "text": "Label",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator5 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator5",
        "isVisible": true,
        "left": "51.60%",
        "skin": "sklblline",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator6 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator6",
        "isVisible": true,
        "left": "58%",
        "skin": "sklblline",
        "text": "Label",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator7 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator7",
        "isVisible": true,
        "left": "64%",
        "skin": "sklblline",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator8 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator8",
        "isVisible": true,
        "left": "77%",
        "skin": "sklblline",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSeperator9 = new kony.ui.Label({
        "height": "220dp",
        "id": "lblSeperator9",
        "isVisible": true,
        "left": "89%",
        "skin": "sklblline",
        "top": "60dp",
        "width": "1dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNoPatients = new kony.ui.Label({
        "id": "lblNoPatients",
        "isVisible": false,
        "left": "45%",
        "skin": "skblack120",
        "text": "No Patient List",
        "top": "175dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientlistcontainer.add(fcpatienthdrbox, fcpatientlistline, segpatientlist, fcpatientlistlegends, fcpatientlisthdr, lblSeperator1, lblSeperator2, lblSeperator3, lblSeperator4, lblSeperator5, lblSeperator6, lblSeperator7, lblSeperator8, lblSeperator9, lblNoPatients);
    var fcpatientlinebottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "fcpatientlinebottom",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcline",
        "top": "-1dp",
        "width": "96%",
        "zIndex": 3
    }, {}, {});
    fcpatientlinebottom.setDefaultUnit(kony.flex.DP);
    fcpatientlinebottom.add();
    fcparentpatientlist.add(fcpatientlistcontainer, fcpatientlinebottom);
    var fcempty = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20dp",
        "id": "fcempty",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcempty.setDefaultUnit(kony.flex.DP);
    fcempty.add();
    fscbody.add(fcdashboardsubheader, fchealiingdashboard, fcparentpatientlist, fcempty);
    var fcsearchdropdown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcsearchdropdown",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "701dp",
        "maxHeight": "300dp",
        "isModalContainer": false,
        "skin": "sknfcwhitebg",
        "top": "52dp",
        "width": "240dp",
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
    fscbodyScroll.add(fscbody, fcsearchdropdown);
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
        "onClick": AS_Button_8039f944c93b43f39ab42240b04ef78e,
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
        "onClick": AS_Button_8471a87d8dba41b3b00ddcb1d9722e8d,
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
        "text": "Patient List",
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
    var km8638c04a2bd46de90db2fb09508b775 = new kony.ui.FlexContainer({
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
    km8638c04a2bd46de90db2fb09508b775.setDefaultUnit(kony.flex.DP);
    var kme42484f85e94e6e8842449b6949598d = new kony.ui.FlexContainer({
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
    kme42484f85e94e6e8842449b6949598d.setDefaultUnit(kony.flex.DP);
    var kma43b2cfb97642d1a5317de79f1a1449 = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "onClick": AS_Button_08f4778929c745558da0c1aa42ad008b,
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
    kme42484f85e94e6e8842449b6949598d.add(kma43b2cfb97642d1a5317de79f1a1449);
    var kmb733ceadf2b41afab514bb93a9f1b9a = new kony.ui.FlexContainer({
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
    kmb733ceadf2b41afab514bb93a9f1b9a.setDefaultUnit(kony.flex.DP);
    var km3ecbbc9e1154f229ff6af1da28a847c = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "onClick": AS_Button_1b2d4a2469164fec96973f9b13fe8dd5,
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
    kmb733ceadf2b41afab514bb93a9f1b9a.add(km3ecbbc9e1154f229ff6af1da28a847c);
    var km6fb153ab5814b76b5710a84a71ac767 = new kony.ui.FlexContainer({
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
    km6fb153ab5814b76b5710a84a71ac767.setDefaultUnit(kony.flex.DP);
    var kmc5cd30e42654a338d93055c0e331148 = new kony.ui.Button({
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
    km6fb153ab5814b76b5710a84a71ac767.add(kmc5cd30e42654a338d93055c0e331148);
    var kmbabfcbf7fc14dae89e2861e1e709bd8 = new kony.ui.FlexContainer({
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
    kmbabfcbf7fc14dae89e2861e1e709bd8.setDefaultUnit(kony.flex.DP);
    var kmdffb5e64b394991bae36147b60ef702 = new kony.ui.Button({
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
    kmbabfcbf7fc14dae89e2861e1e709bd8.add(kmdffb5e64b394991bae36147b60ef702);
    var km11d1f90cacd4e18955bd31fd4d18f61 = new kony.ui.FlexContainer({
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
    km11d1f90cacd4e18955bd31fd4d18f61.setDefaultUnit(kony.flex.DP);
    var km2c5a2a1583a482cb4dc06cf59b5dfd3 = new kony.ui.Button({
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
    km11d1f90cacd4e18955bd31fd4d18f61.add(km2c5a2a1583a482cb4dc06cf59b5dfd3);
    var km66e952f8c414eab93d1b866f8acd0b9 = new kony.ui.FlexContainer({
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
    km66e952f8c414eab93d1b866f8acd0b9.setDefaultUnit(kony.flex.DP);
    var km9a241315a57469f967267600203399f = new kony.ui.Button({
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
    km66e952f8c414eab93d1b866f8acd0b9.add(km9a241315a57469f967267600203399f);
    var km22bfe646306407698b035c630a96ef5 = new kony.ui.FlexContainer({
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
    km22bfe646306407698b035c630a96ef5.setDefaultUnit(kony.flex.DP);
    var kmb2bd5c96d0443459cae8b4d2512bca9 = new kony.ui.Button({
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
    km22bfe646306407698b035c630a96ef5.add(kmb2bd5c96d0443459cae8b4d2512bca9);
    var km19fde54bced4d48a3159e9fbf26ead0 = new kony.ui.FlexContainer({
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
    km19fde54bced4d48a3159e9fbf26ead0.setDefaultUnit(kony.flex.DP);
    var km11f8c390ebf4f30b6951439f3825cc8 = new kony.ui.Button({
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
    km19fde54bced4d48a3159e9fbf26ead0.add(km11f8c390ebf4f30b6951439f3825cc8);
    var km512200783334fff931cbb81d9a336c7 = new kony.ui.FlexContainer({
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
    km512200783334fff931cbb81d9a336c7.setDefaultUnit(kony.flex.DP);
    var km8defb09988949babe60424f88e0dd40 = new kony.ui.Button({
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
    km512200783334fff931cbb81d9a336c7.add(km8defb09988949babe60424f88e0dd40);
    var km77e823f30174815b82c5e787f7da7b4 = new kony.ui.FlexContainer({
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
    km77e823f30174815b82c5e787f7da7b4.setDefaultUnit(kony.flex.DP);
    var km083caaa7e0d41d6a811c14a7cf24012 = new kony.ui.Button({
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
    km77e823f30174815b82c5e787f7da7b4.add(km083caaa7e0d41d6a811c14a7cf24012);
    var km17c4d851d1d494499173412a313412b = new kony.ui.FlexContainer({
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
    km17c4d851d1d494499173412a313412b.setDefaultUnit(kony.flex.DP);
    var km58e2807d4c2456face1ba8b517825c0 = new kony.ui.Button({
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
    km17c4d851d1d494499173412a313412b.add(km58e2807d4c2456face1ba8b517825c0);
    var kmcbb1af1fd4b4eb690083ed1101b3fa8 = new kony.ui.FlexContainer({
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
    kmcbb1af1fd4b4eb690083ed1101b3fa8.setDefaultUnit(kony.flex.DP);
    var km3db7a6cd9464c0b98069f89d86511d6 = new kony.ui.Button({
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
    kmcbb1af1fd4b4eb690083ed1101b3fa8.add(km3db7a6cd9464c0b98069f89d86511d6);
    km8638c04a2bd46de90db2fb09508b775.add(kme42484f85e94e6e8842449b6949598d, kmb733ceadf2b41afab514bb93a9f1b9a, km6fb153ab5814b76b5710a84a71ac767, kmbabfcbf7fc14dae89e2861e1e709bd8, km11d1f90cacd4e18955bd31fd4d18f61, km66e952f8c414eab93d1b866f8acd0b9, km22bfe646306407698b035c630a96ef5, km19fde54bced4d48a3159e9fbf26ead0, km512200783334fff931cbb81d9a336c7, km77e823f30174815b82c5e787f7da7b4, km17c4d851d1d494499173412a313412b, kmcbb1af1fd4b4eb690083ed1101b3fa8);
    fscsidemenu.add(km8638c04a2bd46de90db2fb09508b775);
    var km7e390e51f7f44f6b48043e91c8c5cb1 = new kony.ui.FlexContainer({
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
    km7e390e51f7f44f6b48043e91c8c5cb1.setDefaultUnit(kony.flex.DP);
    var km29bd96dcd40417889441735cdb2f77c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_ac2b49337d5d4c8ab073d2d34be4ddec,
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
    km29bd96dcd40417889441735cdb2f77c.setDefaultUnit(kony.flex.DP);
    var kmb0dd26f03204e5bb709a7553e3b260e = new kony.ui.Image2({
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
    var kmb1d8108ec3943e6a5384bdf81b63c5a = new kony.ui.Label({
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
    km29bd96dcd40417889441735cdb2f77c.add(kmb0dd26f03204e5bb709a7553e3b260e, kmb1d8108ec3943e6a5384bdf81b63c5a);
    var km175e795f0b64d90a0f7934b87767b5b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_e35eef6a38524f13916c91cad22549c3,
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
    km175e795f0b64d90a0f7934b87767b5b.setDefaultUnit(kony.flex.DP);
    var km04361bc16b743f8a367ac4e9f5a32ac = new kony.ui.Image2({
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
    var km88f3898201c4c69a72d05e41367dd89 = new kony.ui.Label({
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
    km175e795f0b64d90a0f7934b87767b5b.add(km04361bc16b743f8a367ac4e9f5a32ac, km88f3898201c4c69a72d05e41367dd89);
    var km3421d4b98da44c09ffb553e60c1a5ea = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_1412fdce2c1c417aae30f807d542a406,
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
    km3421d4b98da44c09ffb553e60c1a5ea.setDefaultUnit(kony.flex.DP);
    var km26ecb2d8f5e45b9bf2267f44224fe78 = new kony.ui.Image2({
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
    var km562f7b28d734f0a9beb2caddf6d99c1 = new kony.ui.Label({
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
    km3421d4b98da44c09ffb553e60c1a5ea.add(km26ecb2d8f5e45b9bf2267f44224fe78, km562f7b28d734f0a9beb2caddf6d99c1);
    var km24f4ae3bba64039b08e5f0314fe8c93 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_e67fddcacc1e48e998e22b65e982e368,
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
    km24f4ae3bba64039b08e5f0314fe8c93.setDefaultUnit(kony.flex.DP);
    var km2110756ced0432d9cc2ac98fc104006 = new kony.ui.Image2({
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
    var km6fc91c92b824418a300bcb140435845 = new kony.ui.Label({
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
    km24f4ae3bba64039b08e5f0314fe8c93.add(km2110756ced0432d9cc2ac98fc104006, km6fc91c92b824418a300bcb140435845, km7846e0b51b5475aaa4d3aad88f0c972);
    km7e390e51f7f44f6b48043e91c8c5cb1.add(km29bd96dcd40417889441735cdb2f77c, km175e795f0b64d90a0f7934b87767b5b, km3421d4b98da44c09ffb553e60c1a5ea, km24f4ae3bba64039b08e5f0314fe8c93);
    fcmainbody.add(fscbodyScroll, fcbodyheader, fscsidemenu, km7e390e51f7f44f6b48043e91c8c5cb1);
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
        "centerX": "60%",
        "focusSkin": "sknbtnbluebold80",
        "height": "35dp",
        "id": "btnViewAll",
        "isVisible": true,
        "onClick": AS_Button_cc811036f3df41ad8366931b02002e3e,
        "skin": "sknbtnbluebg100",
        "text": "View All",
        "top": "8dp",
        "width": "200dp",
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
        "centerX": "40%",
        "focusSkin": "sknbtnbluebold80",
        "height": "35dp",
        "id": "btnViewMore",
        "isVisible": true,
        "onClick": AS_Button_41db03baff3a43d1b13575f37a0c3904,
        "skin": "sknbtnbluebg100",
        "text": "View More",
        "top": "8dp",
        "width": "200dp",
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
    var kmd3dfc25b1eb4345b2ef2092c7c1c4ec = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "40dp",
        "id": "fcmstfooter",
        "layoutType": kony.flex.FREE_FORM,
        "top": "6%",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcGrayBg"
    }, {}, {});
    kmd3dfc25b1eb4345b2ef2092c7c1c4ec.setDefaultUnit(kony.flex.DP);
    var km81fd332f14f418cb8c99c05c6afd2bd = new kony.ui.RichText({
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
    kmd3dfc25b1eb4345b2ef2092c7c1c4ec.add(km81fd332f14f418cb8c99c05c6afd2bd);
    frmPatientList.add(kmbb07e4e945e4ec39bd262a5fb4c4072, fcmainbody, fcpaginatebuttons, kmd3dfc25b1eb4345b2ef2092c7c1c4ec);
};

function frmPatientListGlobals() {
    frmPatientList = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPatientList,
        "enabledForIdleTimeout": true,
        "id": "frmPatientList",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onHide": AS_Form_4188d753f7c140c6ae2050e109bedb46,
        "onTouchEnd": AS_Form_298740b8e8794340a565cf6e0609e90e,
        "postShow": AS_Form_ea20b05608804242a106d1fc40b0eb36,
        "skin": "skfrmgray"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "onDeviceBack": AS_Form_da27652a02c542bba8dd1fd7052cc57e,
        "retainScrollPosition": false
    });
};