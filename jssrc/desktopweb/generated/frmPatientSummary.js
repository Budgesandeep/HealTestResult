function addWidgetsfrmPatientSummary() {
    frmPatientSummary.setDefaultUnit(kony.flex.DP);
    var fcpatientsummaryheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "fcpatientsummaryheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientsummaryheader.setDefaultUnit(kony.flex.DP);
    var km234f0e021d3427596312ed15772a459 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "85dp",
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
    km234f0e021d3427596312ed15772a459.setDefaultUnit(kony.flex.DP);
    var km0bf7d8e772940deb95f60f59bbc39e9 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "85dp",
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
    km0bf7d8e772940deb95f60f59bbc39e9.setDefaultUnit(kony.flex.DP);
    var km5f0e28039d449779d948626ba5b4fa4 = new kony.ui.Image2({
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
    var km4c479f8aebc4098ab6ec325cf64e9d7 = new kony.ui.FlexContainer({
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
    km4c479f8aebc4098ab6ec325cf64e9d7.setDefaultUnit(kony.flex.DP);
    km4c479f8aebc4098ab6ec325cf64e9d7.add();
    var kmbbcda09cc30405cb1f8cda1569f2770 = new kony.ui.Label({
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
    var kmfe90aa3123c494583c4d43f1a3439f9 = new kony.ui.RichText({
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
    km0bf7d8e772940deb95f60f59bbc39e9.add(km5f0e28039d449779d948626ba5b4fa4, km4c479f8aebc4098ab6ec325cf64e9d7, kmbbcda09cc30405cb1f8cda1569f2770, kmfe90aa3123c494583c4d43f1a3439f9);
    var km00e006567c7415ab4d4c62d88ecb9aa = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "85dp",
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
    km00e006567c7415ab4d4c62d88ecb9aa.setDefaultUnit(kony.flex.DP);
    var km37e63d7c8684a53b819c10c1ea639ee = new kony.ui.FlexContainer({
        "centerY": "50%",
        "clipBounds": true,
        "height": "85dp",
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
    km37e63d7c8684a53b819c10c1ea639ee.setDefaultUnit(kony.flex.DP);
    var km90bf671b4734fd79e27a4f7f5a46b69 = new kony.ui.Image2({
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
    var km919540394144ff08235ebefb7ba5f32 = new kony.ui.FlexContainer({
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
    km919540394144ff08235ebefb7ba5f32.setDefaultUnit(kony.flex.DP);
    var km39146596e0c4d36b328ccfafec09758 = new kony.ui.RichText({
        "height": "18dp",
        "id": "rchwelcome",
        "text": "Welcome <b> James </b>\n",
        "top": "7dp",
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
    var kmeb1a0bd57c54dc9988b30f8b81fd185 = new kony.ui.RichText({
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
    var kmca3b8807bf240ba8defeea681f2d015 = new kony.ui.RichText({
        "id": "rchfacility",
        "text": "Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility Facility: AA007 Training Facility ",
        "top": "1dp",
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
    km919540394144ff08235ebefb7ba5f32.add(km39146596e0c4d36b328ccfafec09758, kmeb1a0bd57c54dc9988b30f8b81fd185, kmca3b8807bf240ba8defeea681f2d015);
    km37e63d7c8684a53b819c10c1ea639ee.add(km90bf671b4734fd79e27a4f7f5a46b69, km919540394144ff08235ebefb7ba5f32);
    var km355ba4cb23244d788b71a3fef08a835 = new kony.ui.FlexContainer({
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
    km355ba4cb23244d788b71a3fef08a835.setDefaultUnit(kony.flex.DP);
    var km6d8a623d98f44ae9954b93dfad38809 = new kony.ui.FlexContainer({
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
    km6d8a623d98f44ae9954b93dfad38809.setDefaultUnit(kony.flex.DP);
    km6d8a623d98f44ae9954b93dfad38809.add();
    var kmae7a898a9844d06be1b2428fb6d3434 = new kony.ui.Image2({
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
    var kme9db03ae4cb4b518bb79df38033f3ba = new kony.ui.Label({
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
    var km3b7d98a5e054ea982c93596b1dd19ab = new kony.ui.Label({
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
    km355ba4cb23244d788b71a3fef08a835.add(km6d8a623d98f44ae9954b93dfad38809, kmae7a898a9844d06be1b2428fb6d3434, kme9db03ae4cb4b518bb79df38033f3ba, km3b7d98a5e054ea982c93596b1dd19ab);
    var kmac1d0702d87454ba408056a620e8934 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "85dp",
        "id": "fctaskcount",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_d9187724234949babd3358d2ac21a288,
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
    kmac1d0702d87454ba408056a620e8934.setDefaultUnit(kony.flex.DP);
    var km3db12fbe3d74e879295b54e3dca47c4 = new kony.ui.Image2({
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
    var km00f31ce9d014efaa186b0f65eeda301 = new kony.ui.FlexContainer({
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
    km00f31ce9d014efaa186b0f65eeda301.setDefaultUnit(kony.flex.DP);
    var km461f3f3d5bf48f6af2694828f24e91d = new kony.ui.Label({
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
    km00f31ce9d014efaa186b0f65eeda301.add(km461f3f3d5bf48f6af2694828f24e91d);
    kmac1d0702d87454ba408056a620e8934.add(km3db12fbe3d74e879295b54e3dca47c4, km00f31ce9d014efaa186b0f65eeda301);
    var kmd7a4cd08d364f2981399d71ce273eca = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "85dp",
        "id": "fcsubmenu",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_3e95b117e77240a0b9815c446b3fb93b,
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
    kmd7a4cd08d364f2981399d71ce273eca.setDefaultUnit(kony.flex.DP);
    var km9b66e2ca1734edba1d97e1741581435 = new kony.ui.Image2({
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
    kmd7a4cd08d364f2981399d71ce273eca.add(km9b66e2ca1734edba1d97e1741581435);
    km00e006567c7415ab4d4c62d88ecb9aa.add(km37e63d7c8684a53b819c10c1ea639ee, km355ba4cb23244d788b71a3fef08a835, kmac1d0702d87454ba408056a620e8934, kmd7a4cd08d364f2981399d71ce273eca);
    var kmffc366ca8d3483d893a8ba913100ea9 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "fcheaderline",
        "layoutType": kony.flex.FREE_FORM,
        "top": 80,
        "width": "100%",
        "zIndex": 2,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "left": "0",
        "isModalContainer": false,
        "skin": "skfcline"
    }, {}, {});
    kmffc366ca8d3483d893a8ba913100ea9.setDefaultUnit(kony.flex.DP);
    var km27ae04fac0f442c96a7806f967d263a = new kony.ui.Label({
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
    kmffc366ca8d3483d893a8ba913100ea9.add(km27ae04fac0f442c96a7806f967d263a);
    km234f0e021d3427596312ed15772a459.add(km0bf7d8e772940deb95f60f59bbc39e9, km00e006567c7415ab4d4c62d88ecb9aa, kmffc366ca8d3483d893a8ba913100ea9);
    var fcpatientsummaryheaderhover = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcpatientsummaryheaderhover",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfctransbg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientsummaryheaderhover.setDefaultUnit(kony.flex.DP);
    fcpatientsummaryheaderhover.add();
    fcpatientsummaryheader.add(km234f0e021d3427596312ed15772a459, fcpatientsummaryheaderhover);
    var fscmainbody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "1645dp",
        "horizontalScrollIndicator": true,
        "id": "fscmainbody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
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
        "height": "20dp",
        "id": "btnmenu",
        "isVisible": false,
        "left": "1.50%",
        "onClick": AS_Button_9f632d0295c5417da81fa2fea35e2099,
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
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    fcbreadcrumb.setDefaultUnit(kony.flex.DP);
    var btnhome = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtnwhiteboldtrans",
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
        "left": "5dp",
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
        "id": "btnhdrsubtitle2",
        "isVisible": true,
        "left": "8dp",
        "onClick": AS_Button_b3bb7f616a7e4e4aa65697fbea944c50,
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
        "left": "5dp",
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
        "left": "8dp",
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
        "onClick": AS_FlexContainer_02c94e08d37a4c1da62f2107da190508,
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
    var km64c885ce31d438eb5ae9c0d24e4f83e = new kony.ui.FlexContainer({
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
    km64c885ce31d438eb5ae9c0d24e4f83e.setDefaultUnit(kony.flex.DP);
    var km296a3ed2f0a417cbc52c0eb838d693c = new kony.ui.FlexContainer({
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
    km296a3ed2f0a417cbc52c0eb838d693c.setDefaultUnit(kony.flex.DP);
    var km693dc445b8648ff818c4fa2d53d036b = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmwcc",
        "onClick": AS_Button_ced6dfcc03cb4045956458bb8e679127,
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
    km296a3ed2f0a417cbc52c0eb838d693c.add(km693dc445b8648ff818c4fa2d53d036b);
    var kmecb764534ee4ee0af82745f07b66fe3 = new kony.ui.FlexContainer({
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
    kmecb764534ee4ee0af82745f07b66fe3.setDefaultUnit(kony.flex.DP);
    var km42437b12b47468ebf4547bfe65a713e = new kony.ui.Button({
        "height": "64dp",
        "id": "btsmpatientsafety",
        "onClick": AS_Button_004de50f776e422d92e526f2e7075c43,
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
    kmecb764534ee4ee0af82745f07b66fe3.add(km42437b12b47468ebf4547bfe65a713e);
    var km636d8dbf7d3496fa8d410c6d843245f = new kony.ui.FlexContainer({
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
    km636d8dbf7d3496fa8d410c6d843245f.setDefaultUnit(kony.flex.DP);
    var km49940614f2343a9ab06e590c4ca3eb1 = new kony.ui.Button({
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
    km636d8dbf7d3496fa8d410c6d843245f.add(km49940614f2343a9ab06e590c4ca3eb1);
    var kma8147215d1a40619c30b4a538d4ad0f = new kony.ui.FlexContainer({
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
    kma8147215d1a40619c30b4a538d4ad0f.setDefaultUnit(kony.flex.DP);
    var km5bb46b2cdde478ca0a73883f2890201 = new kony.ui.Button({
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
    kma8147215d1a40619c30b4a538d4ad0f.add(km5bb46b2cdde478ca0a73883f2890201);
    var km7434832c22145a2bd0e4ce3e7e38d79 = new kony.ui.FlexContainer({
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
    km7434832c22145a2bd0e4ce3e7e38d79.setDefaultUnit(kony.flex.DP);
    var kmd74eb601b8e463d955e33fac5552750 = new kony.ui.Button({
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
    km7434832c22145a2bd0e4ce3e7e38d79.add(kmd74eb601b8e463d955e33fac5552750);
    var km54f41a6a6214674aa84a06260129b3f = new kony.ui.FlexContainer({
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
    km54f41a6a6214674aa84a06260129b3f.setDefaultUnit(kony.flex.DP);
    var km6b90d6b6f404927bcfe8349a315a071 = new kony.ui.Button({
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
    km54f41a6a6214674aa84a06260129b3f.add(km6b90d6b6f404927bcfe8349a315a071);
    var kmcf782db3ea04b2bb7966d2b3ed64146 = new kony.ui.FlexContainer({
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
    kmcf782db3ea04b2bb7966d2b3ed64146.setDefaultUnit(kony.flex.DP);
    var km5f4a3b1581b416c9283fcbe01976d2e = new kony.ui.Button({
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
    kmcf782db3ea04b2bb7966d2b3ed64146.add(km5f4a3b1581b416c9283fcbe01976d2e);
    var km5b7feafb33443b8a84ebce39b654d25 = new kony.ui.FlexContainer({
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
    km5b7feafb33443b8a84ebce39b654d25.setDefaultUnit(kony.flex.DP);
    var km8811a6dddc341708bcbff8199c84291 = new kony.ui.Button({
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
    km5b7feafb33443b8a84ebce39b654d25.add(km8811a6dddc341708bcbff8199c84291);
    var kmdae0f40c3b14d5f96ccd23407b87e4f = new kony.ui.FlexContainer({
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
    kmdae0f40c3b14d5f96ccd23407b87e4f.setDefaultUnit(kony.flex.DP);
    var kmb3ba12c9967448880c1826b2f1cf7a6 = new kony.ui.Button({
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
    kmdae0f40c3b14d5f96ccd23407b87e4f.add(kmb3ba12c9967448880c1826b2f1cf7a6);
    var km081282322fa4a66a9cffacb04a74073 = new kony.ui.FlexContainer({
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
    km081282322fa4a66a9cffacb04a74073.setDefaultUnit(kony.flex.DP);
    var kmcc8296c3f404e40804f034bec7b8f24 = new kony.ui.Button({
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
    km081282322fa4a66a9cffacb04a74073.add(kmcc8296c3f404e40804f034bec7b8f24);
    var kme4ef80a45854778898490feacea494f = new kony.ui.FlexContainer({
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
    kme4ef80a45854778898490feacea494f.setDefaultUnit(kony.flex.DP);
    var kmd6ff80dda504b2a8adda240189ab56a = new kony.ui.Button({
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
    kme4ef80a45854778898490feacea494f.add(kmd6ff80dda504b2a8adda240189ab56a);
    var kmf9e8bc6efb8494b9778f819763b15a0 = new kony.ui.FlexContainer({
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
    kmf9e8bc6efb8494b9778f819763b15a0.setDefaultUnit(kony.flex.DP);
    var km299020cd5b64cd596209644fd5e4572 = new kony.ui.Button({
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
    kmf9e8bc6efb8494b9778f819763b15a0.add(km299020cd5b64cd596209644fd5e4572);
    km64c885ce31d438eb5ae9c0d24e4f83e.add(km296a3ed2f0a417cbc52c0eb838d693c, kmecb764534ee4ee0af82745f07b66fe3, km636d8dbf7d3496fa8d410c6d843245f, kma8147215d1a40619c30b4a538d4ad0f, km7434832c22145a2bd0e4ce3e7e38d79, km54f41a6a6214674aa84a06260129b3f, kmcf782db3ea04b2bb7966d2b3ed64146, km5b7feafb33443b8a84ebce39b654d25, kmdae0f40c3b14d5f96ccd23407b87e4f, km081282322fa4a66a9cffacb04a74073, kme4ef80a45854778898490feacea494f, kmf9e8bc6efb8494b9778f819763b15a0);
    fscsidemenu.add(km64c885ce31d438eb5ae9c0d24e4f83e);
    var fscbodyScroll = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "1595dp",
        "horizontalScrollIndicator": true,
        "id": "fscbodyScroll",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_NONE,
        "skin": "slFSbox",
        "top": "50dp",
        "verticalScrollIndicator": true,
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
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatienthdrbox.setDefaultUnit(kony.flex.DP);
    var fcDownload = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": false,
        "height": "40dp",
        "id": "fcDownload",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_4a516ca742c84dba815c46c413dcd180,
        "right": "19dp",
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
    var fcSearchPatient = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "fcSearchPatient",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "right": "80dp",
        "skin": "slFbox",
        "top": "3dp",
        "width": "380dp",
        "zIndex": 2
    }, {}, {});
    fcSearchPatient.setDefaultUnit(kony.flex.DP);
    var lblSearch = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSearch",
        "isVisible": true,
        "left": "1dp",
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
        "height": "35dp",
        "id": "tbpatientsearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "First Name / Last Name",
        "secureTextEntry": false,
        "skin": "sktb120graybrdr11",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "250dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onEndEditing": AS_TextField_20a44614dd724e26a69c60da84e4cb36,
        "onKeyUp": AS_TextField_f8e3233713d648b39a633d8a4ab66376
    });
    var fcsearchicon = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "30dp",
        "id": "fcsearchicon",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-40dp",
        "isModalContainer": false,
        "onClick": AS_FlexContainer_ea81ca2c52ea424aba974fd1168c9386,
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
    fcpatienthdrbox.add(fcDownload, fcSearchPatient);
    var fcsearchdropdown = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcsearchdropdown",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "maxHeight": "300dp",
        "isModalContainer": false,
        "right": "103dp",
        "skin": "sknfcwhitebg",
        "top": "2.60%",
        "width": "250dp",
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
    var fscbody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "1515dp",
        "horizontalScrollIndicator": true,
        "id": "fscbody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "1%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_NONE,
        "skin": "skfscwhiteshadow",
        "top": "60dp",
        "verticalScrollIndicator": true,
        "width": "98%",
        "zIndex": 1
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
        "onClick": AS_FlexContainer_c44774ad0e65440a8a774a0b2ee7131d,
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
        "onClick": AS_FlexContainer_ff235672374b42c9b537241246f3789c,
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
        "left": "2%",
        "skin": "sknlblblackbold85",
        "text": "John Smith",
        "width": "150dp",
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
        "width": "150dp",
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
        "top": "100dp",
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
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "fscdiabeticsvalue",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30.50%",
        "maxHeight": "80dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "103dp",
        "verticalScrollIndicator": true,
        "width": "500dp",
        "zIndex": 1
    }, {}, {});
    fscdiabeticsvalue.setDefaultUnit(kony.flex.DP);
    var lbldiabeticstatusvalue1 = new kony.ui.Label({
        "id": "lbldiabeticstatusvalue1",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlbldarkgray85",
        "text": "Vasculitis,Peripheral Arterial Disease,Lymphedema,Neuropathy,Scleroderma,Hypertension,Raynaud’s,Congestive Heart Failure,Quadriplegia,Osteomyelitis,End Stage Renal Disease,Lupus Erythematosus,Phlebitis,Type II Diabetes,Type I Diabetes,Peripheral Venous Disease,Osteoarthritis,Rheumatoid Arthritis,Coronary Artery Disease,History of Burn,Paraplegia,Anemia",
        "top": "0dp",
        "width": "490dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fscdiabeticsvalue.add(lbldiabeticstatusvalue1);
    var lbldiabeticstatusvalue = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "50dp",
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
        "top": "2dp",
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
        "top": "4dp",
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
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fctreatmentbar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcnavyblue",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fctreatmentbar.setDefaultUnit(kony.flex.DP);
    var btnwoundsummary = new kony.ui.Button({
        "focusSkin": "skbtnblack85whitebg",
        "height": "40dp",
        "id": "btnwoundsummary",
        "isVisible": true,
        "left": "0dp",
        "skin": "skbtnblack85whitebg",
        "text": "Wound Summary",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnencounters = new kony.ui.Button({
        "focusSkin": "sknbtnwhitebgblack85",
        "height": "40dp",
        "id": "btnencounters",
        "isVisible": false,
        "left": "0%",
        "onClick": AS_Button_d5c83c445b7c4be48a959a51a800e7f2,
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
        "focusSkin": "sknbtntransbgwhite85",
        "height": "40dp",
        "id": "btnpatientrecords",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_64be67cf27314725a05a880f5fb25cbc,
        "skin": "sknbtntransbgwhite85",
        "text": "Patient Records",
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
    var Copybtnpatientrecords0g33b8a4e4bdf42 = new kony.ui.Button({
        "focusSkin": "sknbtntransbgwhite85",
        "height": "40dp",
        "id": "Copybtnpatientrecords0g33b8a4e4bdf42",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_h3b11eb67137471799a8c0b131daa9f5,
        "skin": "sknbtntransbgwhite85",
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
    var btnpatienttask = new kony.ui.Button({
        "focusSkin": "sknbtnwhitebgblack85",
        "height": "40dp",
        "id": "btnpatienttask",
        "isVisible": false,
        "left": "0%",
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
    fctreatmentbar.add(btnwoundsummary, btnencounters, btnpatientrecords, Copybtnpatientrecords0g33b8a4e4bdf42, btnpatienttask);
    var lblnowounddata = new kony.ui.Label({
        "id": "lblnowounddata",
        "isVisible": false,
        "left": "0%",
        "skin": "sknlblgray120",
        "text": "No Wound Details",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcwoundsummary = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "550dp",
        "id": "fcwoundsummary",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1.50%",
        "isModalContainer": false,
        "skin": "sknfcwhitebg",
        "top": "3.00%",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    fcwoundsummary.setDefaultUnit(kony.flex.DP);
    var fcviewchoice = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "11%",
        "id": "fcviewchoice",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcviewchoice.setDefaultUnit(kony.flex.DP);
    var btngraphview = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtngraphvwnormal",
        "height": "80%",
        "id": "btngraphview",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_6541e84a897d434c8c50f3ea576d1c27,
        "skin": "skbtngraphvwnormal",
        "text": "Button",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtngraphvwnormalhover"
    });
    var btntableview = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "skbtntablevwnormal",
        "height": "80%",
        "id": "btntableview",
        "isVisible": true,
        "left": "7%",
        "onClick": AS_Button_fee174f18796414b8cb5b775dc2dbe92,
        "skin": "skbtntablevwnormal",
        "text": "Button",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntablevwnormalhover"
    });
    var fccharttimeline = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "45dp",
        "id": "fccharttimeline",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "14.50%",
        "isModalContainer": false,
        "skin": "skfcwhitegraybdr",
        "top": "0dp",
        "width": "48.84%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fccharttimeline.setDefaultUnit(kony.flex.DP);
    var btn4weeks = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnbluebold15hover",
        "height": "100%",
        "id": "btn4weeks",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_9cdb5f623e4047c0bd231f56e2625380,
        "skin": "sknbtnbluebold14",
        "text": "4 Weeks",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var lblline1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline1",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btn8weeks = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnbluebold15hover",
        "height": "100%",
        "id": "btn8weeks",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_56920231820147ec8171c88a34c53301,
        "skin": "sknbtnbluebold14",
        "text": "8 Weeks",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var lblline2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline2",
        "isVisible": true,
        "left": "1dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btn12weeks = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnbluebold15hover",
        "height": "45dp",
        "id": "btn12weeks",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_1d8d85c6658b4d58bb4948ae711b1b07,
        "skin": "sknbtnbluebold14",
        "text": "12 Weeks",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var lblline3 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline3",
        "isVisible": true,
        "left": "1dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btn6months = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnbluebold15hover",
        "height": "45dp",
        "id": "btn6months",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_d583a61009894a23a9aba0354520c136,
        "skin": "sknbtnbluebold14",
        "text": "6 Months",
        "top": "0dp",
        "width": "17%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var lblline4 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline4",
        "isVisible": true,
        "left": "1dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnyear = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnbluebold15hover",
        "height": "45dp",
        "id": "btnyear",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_b12605b8cc59473a9f0467972d841f58,
        "skin": "sknbtnbluebold14",
        "text": "1 Year",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    var lblline5 = new kony.ui.Label({
        "height": "100%",
        "id": "lblline5",
        "isVisible": true,
        "left": "1dp",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnallweeks = new kony.ui.Button({
        "centerY": "50.00%",
        "focusSkin": "sknbtnbluebold15hover",
        "height": "45dp",
        "id": "btnallweeks",
        "isVisible": true,
        "left": "0.00%",
        "onClick": AS_Button_f84e16bc94c148bca684c900d4478070,
        "skin": "skbtntxtbold113",
        "text": "All",
        "top": "2dp",
        "width": "17%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    fccharttimeline.add(btn4weeks, lblline1, btn8weeks, lblline2, btn12weeks, lblline3, btn6months, lblline4, btnyear, lblline5, btnallweeks);
    var fcunits = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "fcunits",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "1%",
        "skin": "slFbox",
        "width": "18%",
        "zIndex": 1
    }, {}, {});
    fcunits.setDefaultUnit(kony.flex.DP);
    var lblunits = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblunits",
        "isVisible": true,
        "left": "27%",
        "skin": "sklblblackbold",
        "text": "Units",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnunits = new kony.ui.Button({
        "centerY": "47.50%",
        "focusSkin": "sknbtngraybgrnd",
        "height": "35dp",
        "id": "btnunits",
        "isVisible": true,
        "right": "0%",
        "skin": "sknbtngraybgrnd",
        "text": "Area",
        "width": "52%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgunits = new kony.ui.Image2({
        "centerY": "50%",
        "height": "20dp",
        "id": "imgunits",
        "imageWhileDownloading": "headerarrow.png",
        "isVisible": true,
        "right": "4%",
        "skin": "slImage",
        "src": "headerarrow.png",
        "width": "20dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcunit = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35dp",
        "id": "fcunit",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_Button_e941beaeeaf3407b8b0329bb0b12f113,
        "right": "0%",
        "skin": "slFbox",
        "top": 16,
        "width": "52%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcunit.setDefaultUnit(kony.flex.DP);
    fcunit.add();
    fcunits.add(lblunits, btnunits, imgunits, fcunit);
    fcviewchoice.add(btngraphview, btntableview, fccharttimeline, fcunits);
    var fscwoundsummarytable = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "fscwoundsummarytable",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "sknfscwhitebg",
        "top": "15%",
        "verticalScrollIndicator": true,
        "width": "71%",
        "zIndex": 1
    }, {}, {});
    fscwoundsummarytable.setDefaultUnit(kony.flex.DP);
    var fcchart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "480dp",
        "id": "fcchart",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcchart.setDefaultUnit(kony.flex.DP);
    var tpmultiline1 = new kony.ui.CustomWidget({
        "id": "tpmultiline1",
        "isVisible": true,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "height": "460dp",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "highchartmultiline",
        "data": "Data",
        "subtitle": "SubTitle",
        "title": "Title",
        "tooltip": "Tooltip",
        "xAxis": "xAxis",
        "yAxis": "yAxis"
    });
    fcchart.add(tpmultiline1);
    var fcwoundwisesummary = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "fcwoundwisesummary",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcwoundwisesummary.setDefaultUnit(kony.flex.DP);
    fcwoundwisesummary.add();
    fscwoundsummarytable.add(fcchart, fcwoundwisesummary);
    var fscwound360table = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "fscwound360table",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "pagingEnabled": false,
        "right": "1%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "15%",
        "verticalScrollIndicator": true,
        "width": "21%",
        "zIndex": 2
    }, {}, {});
    fscwound360table.setDefaultUnit(kony.flex.DP);
    fscwound360table.add();
    var fcunitslist = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcunitslist",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "0.90%",
        "skin": "sknfcgraybgrgd",
        "top": "10%",
        "width": "9.40%",
        "zIndex": 3
    }, {}, {
        "hoverSkin": "sknfcgraybgrgdhover"
    });
    fcunitslist.setDefaultUnit(kony.flex.DP);
    if (typeof initializeFBox0678e4f1c17fd4d === 'function') initializeFBox0678e4f1c17fd4d();
    var segunitslist = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblunit": "Area"
        }, {
            "lblunit": "Volume"
        }],
        "groupCells": false,
        "id": "segunitslist",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_757dc97032b8427f9341392322c6c82f,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegtrans",
        "rowTemplate": FBox0678e4f1c17fd4d,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblunit": "lblunit"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcunitslist.add(segunitslist);
    fcwoundsummary.add(fcviewchoice, fscwoundsummarytable, fscwound360table, fcunitslist);
    var fscwounddetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "2%",
        "clipBounds": true,
        "id": "fscwounddetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1.50%",
        "isModalContainer": false,
        "skin": "sknfcwhitebg",
        "top": "1%",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    fscwounddetails.setDefaultUnit(kony.flex.DP);
    var fcwounddetailsheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "86dp",
        "id": "fcwounddetailsheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfcnavyblue",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcwounddetailsheader.setDefaultUnit(kony.flex.DP);
    var lblstepsofhealing = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblstepsofhealing",
        "isVisible": true,
        "left": "1%",
        "skin": "sknlblstatuswhite",
        "text": "Steps of Healing",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnstepsofhealing = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtngraybgrnd",
        "height": "35dp",
        "id": "btnstepsofhealing",
        "isVisible": true,
        "left": "12%",
        "skin": "sknbtngraybgrnd",
        "text": "Wound 1",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgdownarrow = new kony.ui.Image2({
        "centerY": "50%",
        "id": "imgdownarrow",
        "imageWhileDownloading": "headerarrow.png",
        "isVisible": true,
        "left": "25%",
        "skin": "slImage",
        "src": "headerarrow.png",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcstepsofhealing = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "35dp",
        "id": "fcstepsofhealing",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "12%",
        "isModalContainer": false,
        "onClick": AS_Button_f133cbdeacca41f2aea5424a3acc5e87,
        "skin": "slFbox",
        "width": "15%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcstepsofhealing.setDefaultUnit(kony.flex.DP);
    fcstepsofhealing.add();
    var lblmsr1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblmsr1",
        "isVisible": true,
        "left": "30%",
        "skin": "sknlblred100bold",
        "text": "MSR",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcwritenotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "52%",
        "clipBounds": true,
        "height": "50%",
        "id": "fcwritenotes",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_35cd05d997fa4033a6978f7ae953ad56,
        "right": "6%",
        "skin": "slFbox",
        "width": "3%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcwritenotes.setDefaultUnit(kony.flex.DP);
    var imgnote = new kony.ui.Image2({
        "centerY": "50%",
        "id": "imgnote",
        "imageWhileDownloading": "editnotes.png",
        "isVisible": true,
        "right": "5%",
        "skin": "slImage",
        "src": "editnotes.png",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcwritenotes.add(imgnote);
    var fcDownload1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "56%",
        "clipBounds": true,
        "height": "40dp",
        "id": "fcDownload1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_4a516ca742c84dba815c46c413dcd180,
        "right": "14dp",
        "skin": "slFbox",
        "width": "50dp",
        "zIndex": 3
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcDownload1.setDefaultUnit(kony.flex.DP);
    var imgDownload1 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgDownload1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "download.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDownload1.add(imgDownload1);
    var btnReviewMSR = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknbtnbluebg100",
        "height": "45dp",
        "id": "btnReviewMSR",
        "isVisible": true,
        "onClick": AS_Button_7954326210c242ab968c70f12cc4edd8,
        "right": "10%",
        "skin": "sknbtnbluebg100",
        "text": "Review MSR",
        "width": "170dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnbluehover"
    });
    fcwounddetailsheader.add(lblstepsofhealing, btnstepsofhealing, imgdownarrow, fcstepsofhealing, lblmsr1, fcwritenotes, fcDownload1, btnReviewMSR);
    var lblheaderseparator = new kony.ui.Label({
        "height": "1dp",
        "id": "lblheaderseparator",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblgraybg",
        "text": "Label",
        "top": "86dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblnodatatxt = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "150dp",
        "id": "lblnodatatxt",
        "isVisible": false,
        "skin": "sknlblgray80bold",
        "text": "No data",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segwoundfeaturetypes = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgfeaturetype": "",
            "lblfeaturetype": ""
        }, {
            "imgfeaturetype": "",
            "lblfeaturetype": ""
        }, {
            "imgfeaturetype": "",
            "lblfeaturetype": ""
        }, {
            "imgfeaturetype": "",
            "lblfeaturetype": ""
        }],
        "groupCells": false,
        "height": "542dp",
        "id": "segwoundfeaturetypes",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_d1dd0d6db7774e419eab77b06b8d2f23,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegrowaltgray",
        "rowTemplate": fcfeaturetype,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "showScrollbars": false,
        "top": "87dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "fcfeaturetype": "fcfeaturetype",
            "imgfeaturetype": "imgfeaturetype",
            "lblfeaturetype": "lblfeaturetype"
        },
        "width": "22%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcsegData = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "530dp",
        "horizontalScrollIndicator": true,
        "id": "fcsegData",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "22.50%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "87dp",
        "verticalScrollIndicator": true,
        "width": "76%",
        "zIndex": 1
    }, {}, {});
    fcsegData.setDefaultUnit(kony.flex.DP);
    var btnreftxt = new kony.ui.Button({
        "focusSkin": "sknbtnbluebold14",
        "id": "btnreftxt",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_5fdb82c57089419f88c406c810262438,
        "skin": "sknbtnbluebold14",
        "text": "(Refer to CPG W05.01)",
        "top": "2.20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnbluebold15hover"
    });
    var segadditionalcpglinks = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [
            [{
                    "lbladditionalcpglinkshdr": "Additional CPG’s for Essential Step 1:"
                },
                [{
                    "lbladditionalcpglinks": "Button"
                }, {
                    "lbladditionalcpglinks": "Button"
                }]
            ]
        ],
        "groupCells": false,
        "id": "segadditionalcpglinks",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_7001ff076bd44896bbd1964a27686988,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": fcadditionalCPGlinks,
        "sectionHeaderSkin": "sksegtrans",
        "sectionHeaderTemplate": fcadditionalCPGlinkshdr,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "fcadditionalCPGlinks": "fcadditionalCPGlinks",
            "fcadditionalCPGlinkshdr": "fcadditionalCPGlinkshdr",
            "lbladditionalcpglinks": "lbladditionalcpglinks",
            "lbladditionalcpglinkshdr": "lbladditionalcpglinkshdr"
        },
        "width": "60%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcstepdescriptionheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "fcstepdescriptionheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "4%",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    fcstepdescriptionheader.setDefaultUnit(kony.flex.DP);
    var fcdescriptionhdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcdescriptionhdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "sknfctransbggrarybrd",
        "top": "0%",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    fcdescriptionhdr.setDefaultUnit(kony.flex.DP);
    var lblwoundfeaturedescription = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwoundfeaturedescription",
        "isVisible": true,
        "left": "1%",
        "skin": "sknlblgray80bold",
        "text": "Description",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdescriptionhdr.add(lblwoundfeaturedescription);
    var fcfollowuphdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcfollowuphdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "35%",
        "isModalContainer": false,
        "skin": "sknfctransbggrarybrd",
        "top": "0%",
        "width": "8%",
        "zIndex": 1
    }, {}, {});
    fcfollowuphdr.setDefaultUnit(kony.flex.DP);
    var lblfollowuphdr = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblfollowuphdr",
        "isVisible": true,
        "skin": "sknlblgray80bold",
        "text": "Follow-up",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcfollowuphdr.add(lblfollowuphdr);
    var fcsubstepedit = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcsubstepedit",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "40%",
        "isModalContainer": false,
        "skin": "sknfctransbggrarybrd",
        "top": "0%",
        "width": "8%",
        "zIndex": 1
    }, {}, {});
    fcsubstepedit.setDefaultUnit(kony.flex.DP);
    var lblsubstepedit = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblsubstepedit",
        "isVisible": true,
        "skin": "sknlblgray80bold",
        "text": "Edit",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcsubstepedit.add(lblsubstepedit);
    var fcresulthdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcresulthdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "43%",
        "isModalContainer": false,
        "skin": "sknfctransbggrarybrd",
        "top": "0%",
        "width": "21%",
        "zIndex": 1
    }, {}, {});
    fcresulthdr.setDefaultUnit(kony.flex.DP);
    var lblwoundfeatureresult = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwoundfeatureresult",
        "isVisible": true,
        "left": "8%",
        "skin": "sknlblgray80bold",
        "text": "Result",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcresulthdr.add(lblwoundfeatureresult);
    var fcdaterequestedhdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcdaterequestedhdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "64%",
        "isModalContainer": false,
        "skin": "sknfctransbggrarybrd",
        "top": "0%",
        "width": "18%",
        "zIndex": 1
    }, {}, {});
    fcdaterequestedhdr.setDefaultUnit(kony.flex.DP);
    var lblwoundfeaturedateordered = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwoundfeaturedateordered",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblgray80bold",
        "text": "Date Requested",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [8, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdaterequestedhdr.add(lblwoundfeaturedateordered);
    var fcdatecompletedhdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcdatecompletedhdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "82%",
        "isModalContainer": false,
        "skin": "sknfctransbggrarybrd",
        "top": "0%",
        "width": "18%",
        "zIndex": 1
    }, {}, {});
    fcdatecompletedhdr.setDefaultUnit(kony.flex.DP);
    var lblwoundfeaturedatecompleted = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblwoundfeaturedatecompleted",
        "isVisible": true,
        "left": "0%",
        "skin": "sknlblgray80bold",
        "text": "Date Completed",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [8, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdatecompletedhdr.add(lblwoundfeaturedatecompleted);
    fcstepdescriptionheader.add(fcdescriptionhdr, fcfollowuphdr, fcsubstepedit, fcresulthdr, fcdaterequestedhdr, fcdatecompletedhdr);
    var fcstepdatadescription = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcstepdatadescription",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0%",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    fcstepdatadescription.setDefaultUnit(kony.flex.DP);
    fcstepdatadescription.add();
    var btnsave = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg100",
        "height": "6.80%",
        "id": "btnsave",
        "isVisible": true,
        "onClick": AS_Button_e938ef1ee2b34b2e88a5c7d088057f2b,
        "right": "3%",
        "skin": "sknbtnbluebg100",
        "text": "Save",
        "top": "1px",
        "width": "7%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    fcsegData.add(btnreftxt, segadditionalcpglinks, fcstepdescriptionheader, fcstepdatadescription, btnsave);
    var fcwoundslist = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcwoundslist",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "12%",
        "maxHeight": "320dp",
        "isModalContainer": false,
        "skin": "sknfcgraybgrgd",
        "top": "60dp",
        "width": "15%",
        "zIndex": 3
    }, {}, {
        "hoverSkin": "sknfcgraybgrgdhover"
    });
    fcwoundslist.setDefaultUnit(kony.flex.DP);
    if (typeof initializeFBox0f60e588e50e840 === 'function') initializeFBox0f60e588e50e840();
    var segwoundslist = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "lblwound": "Label"
        }],
        "groupCells": false,
        "id": "segwoundslist",
        "isVisible": true,
        "left": "0%",
        "maxHeight": "320dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_aa082b8563044c02acb0bd90f1860486,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "sksegtrans",
        "rowTemplate": FBox0f60e588e50e840,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblwound": "lblwound"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcwoundslist.add(segwoundslist);
    var fcMstPrintMenu2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcMstPrintMenu2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "10dp",
        "skin": "slFbox",
        "top": "68dp",
        "width": "15%",
        "zIndex": 2
    }, {}, {});
    fcMstPrintMenu2.setDefaultUnit(kony.flex.DP);
    var km71f9042be6740f49ccca9452f920a74 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "126dp",
        "id": "fcPrintMenu2",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "width": "150dp",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "isModalContainer": false,
        "right": "1dp",
        "skin": "skfcwhitegraybdr",
        "top": "0dp"
    }, {}, {});
    km71f9042be6740f49ccca9452f920a74.setDefaultUnit(kony.flex.DP);
    var kmb5c43e4f964486298442e85993f1a6b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcPrint",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_6d35034513514c0fa15b99fcf17c5d08,
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
    kmb5c43e4f964486298442e85993f1a6b.setDefaultUnit(kony.flex.DP);
    var km64830829bd2429ca8f041d74e34e9bb = new kony.ui.Image2({
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
    var km2bf997ec9d845b19af4ff9f131b0cd0 = new kony.ui.Label({
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
    kmb5c43e4f964486298442e85993f1a6b.add(km64830829bd2429ca8f041d74e34e9bb, km2bf997ec9d845b19af4ff9f131b0cd0);
    var kmd9539be32ad4ca495cd3d7acd7a7295 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportPdf",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_e00c8f9a1fb24ef18bd8b140f2b6d1b0,
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
    kmd9539be32ad4ca495cd3d7acd7a7295.setDefaultUnit(kony.flex.DP);
    var km969821247db475cb027d9d21bc37ab2 = new kony.ui.Image2({
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
    var km09a0403eed44850bf34b396f8f00fef = new kony.ui.Label({
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
    kmd9539be32ad4ca495cd3d7acd7a7295.add(km969821247db475cb027d9d21bc37ab2, km09a0403eed44850bf34b396f8f00fef);
    var km978ee8fe96f42ea9038409f2ac9cd2a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportExcel",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_c5bb699224b94c82a2e8b792a271a59d,
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
    km978ee8fe96f42ea9038409f2ac9cd2a.setDefaultUnit(kony.flex.DP);
    var km9ac06941ead43d1bc4477a4e3944566 = new kony.ui.Image2({
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
    var km23e3ff38423493083a9cc8a9efee8a3 = new kony.ui.Label({
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
    var km752b937517948d49ae2ea12c4a0eebe = new kony.ui.Label({
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
    km978ee8fe96f42ea9038409f2ac9cd2a.add(km9ac06941ead43d1bc4477a4e3944566, km23e3ff38423493083a9cc8a9efee8a3, km752b937517948d49ae2ea12c4a0eebe);
    km71f9042be6740f49ccca9452f920a74.add(kmb5c43e4f964486298442e85993f1a6b, kmd9539be32ad4ca495cd3d7acd7a7295, km978ee8fe96f42ea9038409f2ac9cd2a);
    fcMstPrintMenu2.add(km71f9042be6740f49ccca9452f920a74);
    var btnmostrecentphysicianorders = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg100",
        "height": "30dp",
        "id": "btnmostrecentphysicianorders",
        "isVisible": true,
        "onClick": AS_Button_e9281603353e4c9ba5a8cc967b956327,
        "right": "3.50%",
        "skin": "sknbtnbluebg100",
        "text": "Most Recent Physician Orders",
        "top": "100dp",
        "width": "24%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnbluehover"
    });
    var txtfTemp = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "0dp",
        "id": "txtfTemp",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "550dp",
        "secureTextEntry": false,
        "skin": "skntxtftransbg",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "33dp",
        "width": "0dp",
        "zIndex": 3
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false
    });
    fscwounddetails.add(fcwounddetailsheader, lblheaderseparator, lblnodatatxt, segwoundfeaturetypes, fcsegData, fcwoundslist, fcMstPrintMenu2, btnmostrecentphysicianorders, txtfTemp);
    var fcempty = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "15dp",
        "id": "fcempty",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1.50%",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    fcempty.setDefaultUnit(kony.flex.DP);
    fcempty.add();
    fscbody.add(fcpatientinfo, fctreatmentbar, lblnowounddata, fcwoundsummary, fscwounddetails, fcempty);
    var fcmstPrintMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "150dp",
        "id": "fcmstPrintMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "right": "16dp",
        "skin": "slFbox",
        "top": "2.90%",
        "width": "15%",
        "zIndex": 3
    }, {}, {});
    fcmstPrintMenu.setDefaultUnit(kony.flex.DP);
    var km5bf525a2e354cf6acacd20891fefc54 = new kony.ui.FlexContainer({
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
    km5bf525a2e354cf6acacd20891fefc54.setDefaultUnit(kony.flex.DP);
    var kmade49152520410da863889f7f71b138 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcPrint",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_31e6869c8f6541b6867f8814588a04fd,
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
    kmade49152520410da863889f7f71b138.setDefaultUnit(kony.flex.DP);
    var kmb652d23f5db4cd68e9d37aa26a83665 = new kony.ui.Image2({
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
    var km3e831cd26c9453fb83e6b1b0d6677c0 = new kony.ui.Label({
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
    kmade49152520410da863889f7f71b138.add(kmb652d23f5db4cd68e9d37aa26a83665, km3e831cd26c9453fb83e6b1b0d6677c0);
    var km3d35720bffd491d86d89f940e1064d7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportPdf",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_ff31a21435db48fd89971bf6032c5485,
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
    km3d35720bffd491d86d89f940e1064d7.setDefaultUnit(kony.flex.DP);
    var km602a483a3164550b909d748af429e3c = new kony.ui.Image2({
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
    var kmdded996f2294793b9bf861f8e633b9a = new kony.ui.Label({
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
    km3d35720bffd491d86d89f940e1064d7.add(km602a483a3164550b909d748af429e3c, kmdded996f2294793b9bf861f8e633b9a);
    var km9b5c3780afc4affaaddbc34fc6f4339 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "42dp",
        "id": "fcExportExcel",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_e060ff0dd6904046b7787842fff921fc,
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
    km9b5c3780afc4affaaddbc34fc6f4339.setDefaultUnit(kony.flex.DP);
    var km9c8b2c1e13c42e2a82b3a42ee49cace = new kony.ui.Image2({
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
    var km406dc04438147058b94e1447a51fa2b = new kony.ui.Label({
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
    var kmd96d895ded24ed29a6aceffe29a7010 = new kony.ui.Label({
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
    km9b5c3780afc4affaaddbc34fc6f4339.add(km9c8b2c1e13c42e2a82b3a42ee49cace, km406dc04438147058b94e1447a51fa2b, kmd96d895ded24ed29a6aceffe29a7010);
    km5bf525a2e354cf6acacd20891fefc54.add(kmade49152520410da863889f7f71b138, km3d35720bffd491d86d89f940e1064d7, km9b5c3780afc4affaaddbc34fc6f4339);
    fcmstPrintMenu.add(km5bf525a2e354cf6acacd20891fefc54);
    fscbodyScroll.add(fcpatienthdrbox, fcsearchdropdown, fscbody, fcmstPrintMenu);
    var kmf6098b842ad4fdda4eb17b923a10e39 = new kony.ui.FlexContainer({
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
    kmf6098b842ad4fdda4eb17b923a10e39.setDefaultUnit(kony.flex.DP);
    var kmc272ded6d8749349592c066de1711d1 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsettings",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_9ee3dedc4bb44d3a80cbbc0c2d9a8f05,
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
    kmc272ded6d8749349592c066de1711d1.setDefaultUnit(kony.flex.DP);
    var kmdb3b9ec8c874414a8a9010efdedd8e9 = new kony.ui.Image2({
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
    var kmc261a17bcab46e094f1a89e346a2898 = new kony.ui.Label({
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
    kmc272ded6d8749349592c066de1711d1.add(kmdb3b9ec8c874414a8a9010efdedd8e9, kmc261a17bcab46e094f1a89e346a2898);
    var kma26ea9a59d143baacbadce50441e987 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fchelp",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_90071741e31b43d69e9d03bf763c647d,
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
    kma26ea9a59d143baacbadce50441e987.setDefaultUnit(kony.flex.DP);
    var km3b23970d72c4e67a4c5a94fd15db484 = new kony.ui.Image2({
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
    var kma3a11f827a24f9494aada3096addc05 = new kony.ui.Label({
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
    kma26ea9a59d143baacbadce50441e987.add(km3b23970d72c4e67a4c5a94fd15db484, kma3a11f827a24f9494aada3096addc05);
    var km910c47c07fd4039a4a8d08d21002be3 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcreports",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_05db7bfdadb842179eb6de2f4e6aa53e,
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
    km910c47c07fd4039a4a8d08d21002be3.setDefaultUnit(kony.flex.DP);
    var kmc3964f74c9b459f94512a86186afaa7 = new kony.ui.Image2({
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
    var km14a8b84470d431da1814705bc8998cc = new kony.ui.Label({
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
    km910c47c07fd4039a4a8d08d21002be3.add(kmc3964f74c9b459f94512a86186afaa7, km14a8b84470d431da1814705bc8998cc);
    var km053b91058ce4cf9a7fbf35f0ca999df = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "45dp",
        "id": "fcsignout",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_2ec374ec56ca4595bdf4b30660b83e54,
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
    km053b91058ce4cf9a7fbf35f0ca999df.setDefaultUnit(kony.flex.DP);
    var kme03df99e91f42bcaecd7240d2e74583 = new kony.ui.Image2({
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
    var km1490f82e1564346be38a27160032167 = new kony.ui.Label({
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
    km053b91058ce4cf9a7fbf35f0ca999df.add(kme03df99e91f42bcaecd7240d2e74583, km1490f82e1564346be38a27160032167, km7846e0b51b5475aaa4d3aad88f0c972);
    kmf6098b842ad4fdda4eb17b923a10e39.add(kmc272ded6d8749349592c066de1711d1, kma26ea9a59d143baacbadce50441e987, km910c47c07fd4039a4a8d08d21002be3, km053b91058ce4cf9a7fbf35f0ca999df);
    var fcwoundimages = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcwoundimages",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfctransbg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcwoundimages.setDefaultUnit(kony.flex.DP);
    var flximage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "44%",
        "clipBounds": true,
        "height": "450dp",
        "id": "flximage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "167dp",
        "isModalContainer": false,
        "skin": "sknfcwhite",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flximage.setDefaultUnit(kony.flex.DP);
    var flxheader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "flxheader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxheader.setDefaultUnit(kony.flex.DP);
    var lblheader = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblheader",
        "isVisible": true,
        "left": "2%",
        "skin": "sklblblackbold",
        "text": "Wound 1",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcimageclose = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "38dp",
        "id": "fcimageclose",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_379732ddc12841279737bf05cbd5ca90,
        "right": "1%",
        "skin": "slFbox",
        "top": "12dp",
        "width": "50dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcimageclose.setDefaultUnit(kony.flex.DP);
    var imgclose = new kony.ui.Image2({
        "id": "imgclose",
        "isVisible": true,
        "left": "10dp",
        "skin": "slImage",
        "src": "closepopup.png",
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcimageclose.add(imgclose);
    flxheader.add(lblheader, fcimageclose);
    var fcsegimages = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "85%",
        "id": "fcsegimages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "sknfcwhite",
        "top": "12%",
        "width": "25%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcsegimages.setDefaultUnit(kony.flex.DP);
    var segmentimages = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgwound": "imagedrag.png",
            "lbltimestamp": "Label"
        }, {
            "imgwound": "imagedrag.png",
            "lbltimestamp": "Label"
        }, {
            "imgwound": "imagedrag.png",
            "lbltimestamp": "Label"
        }],
        "groupCells": false,
        "height": "98%",
        "id": "segmentimages",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_6f70070265864e57a92ba62e881204f2,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": fcimages,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 8,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "fcimages": "fcimages",
            "imgwound": "imgwound",
            "lbltimestamp": "lbltimestamp"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [5, 5, 5, 0],
        "paddingInPixel": false
    }, {});
    fcsegimages.add(segmentimages);
    var imgdesc = new kony.ui.Image2({
        "height": "80%",
        "id": "imgdesc",
        "isVisible": true,
        "left": "25%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "13%",
        "width": "75%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [2, 0, 2, 0],
        "paddingInPixel": false
    }, {});
    var lbltimestamp = new kony.ui.Label({
        "id": "lbltimestamp",
        "isVisible": true,
        "left": "27%",
        "skin": "sklblblackbgwhitefont",
        "text": "Label",
        "top": "89%",
        "width": "70%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 1, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNoWounds = new kony.ui.Label({
        "id": "lblNoWounds",
        "isVisible": false,
        "left": "35%",
        "skin": "skblack120",
        "text": "No Wound Images",
        "top": "40%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flximage.add(flxheader, fcsegimages, imgdesc, lbltimestamp, lblNoWounds);
    fcwoundimages.add(flximage);
    var fcpopupnotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcpopupnotes",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfctransbg",
        "top": "0%",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    fcpopupnotes.setDefaultUnit(kony.flex.DP);
    var fcnotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "70%",
        "clipBounds": true,
        "height": "500dp",
        "id": "fcnotes",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "30%",
        "isModalContainer": false,
        "skin": "sknfcwhitebg",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    fcnotes.setDefaultUnit(kony.flex.DP);
    var flxheadernotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxheadernotes",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "skfcaltgray",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxheadernotes.setDefaultUnit(kony.flex.DP);
    var lblheadernotes = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblheadernotes",
        "isVisible": true,
        "left": "2%",
        "skin": "sklblblack120",
        "text": "Notes",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcimageclosenotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "fcimageclosenotes",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "onClick": AS_FlexContainer_c40c8fb076ae49278a7b13daf7748657,
        "right": "1%",
        "skin": "slFbox",
        "width": "50dp",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcimageclosenotes.setDefaultUnit(kony.flex.DP);
    var imgclosenotes = new kony.ui.Image2({
        "height": "100%",
        "id": "imgclosenotes",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "closepopup.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcimageclosenotes.add(imgclosenotes);
    flxheadernotes.add(lblheadernotes, fcimageclosenotes);
    var lbltitle = new kony.ui.Label({
        "id": "lbltitle",
        "isVisible": true,
        "left": "2%",
        "skin": "sklblblackbold",
        "text": "Wound 1",
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false
    }, {});
    var textareanotes = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "20%",
        "id": "textareanotes",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "2%",
        "maxTextLength": 1000,
        "numberOfVisibleLines": 3,
        "placeholder": "Enter text",
        "skin": "skntxtareagraybg",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "2%",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "onBeginEditing": AS_TextArea_ae3e9e5440764978aa1aae3f20f560cf,
        "onEndEditing": AS_TextArea_f13690dfbf4d4458980e02483882f87d,
        "onKeyUp": AS_TextArea_b0c4d98d05d642f48d2ef631af34a3ca
    });
    var fcerror = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "fcerror",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcerror.setDefaultUnit(kony.flex.DP);
    var lblerror = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblerror",
        "isVisible": false,
        "left": "2%",
        "skin": "sknlblrednormal",
        "text": "Label",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMaxCharacter = new kony.ui.Label({
        "centerY": "60%",
        "id": "lblMaxCharacter",
        "isVisible": true,
        "right": "4%",
        "skin": "sknlblgray60",
        "text": "(Maximum characters: 1000) You have 1000 characters left.",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcerror.add(lblerror, lblMaxCharacter);
    var fcoptions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "fcoptions",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcoptions.setDefaultUnit(kony.flex.DP);
    var btnnotescancel = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "skngraybg",
        "height": "35dp",
        "id": "btnnotescancel",
        "isVisible": true,
        "left": "62%",
        "onClick": AS_Button_0b6bb8706b58452d9e6d3cab8a4aeb46,
        "skin": "skngraybg",
        "text": "Cancel",
        "width": "90dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skngraybghover"
    });
    var btnnotessave = new kony.ui.Button({
        "centerY": "55%",
        "focusSkin": "sknbtnbluebg",
        "height": "35dp",
        "id": "btnnotessave",
        "isVisible": true,
        "left": "82%",
        "onClick": AS_Button_566ba64e17464e1295f443d42d6cc21e,
        "skin": "sknbtnbluebg",
        "text": "Save",
        "top": "196%",
        "width": "80dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtnbluehover"
    });
    fcoptions.add(btnnotescancel, btnnotessave);
    var fcdata = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "fcdata",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcdata.setDefaultUnit(kony.flex.DP);
    var segmentnotes = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2%",
        "data": [{
            "imgpoint": "radioclick.png",
            "lblFollowDesc": "Follow-up",
            "lblindicator": "",
            "lbllineindicator": "",
            "lblnotesdesc": "Notes Desc",
            "lblnotestitle": "Dr.Robot ,  Thursday,12/5/2016 , 11:30 am"
        }, {
            "imgpoint": "radioclick.png",
            "lblFollowDesc": "Follow-up",
            "lblindicator": "",
            "lbllineindicator": "",
            "lblnotesdesc": "Notes Desc",
            "lblnotestitle": "Dr.Robot ,  Thursday,12/5/2016 , 11:30 am"
        }, {
            "imgpoint": "radioclick.png",
            "lblFollowDesc": "Follow-up",
            "lblindicator": "",
            "lbllineindicator": "",
            "lblnotesdesc": "Notes Desc",
            "lblnotestitle": "Dr.Robot ,  Thursday,12/5/2016 , 11:30 am"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "segmentnotes",
        "isVisible": true,
        "left": "2.70%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowTemplate": fcsegnotes,
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 0,
        "showScrollbars": false,
        "top": "5%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer03c0b7e0d6e9b41": "FlexContainer03c0b7e0d6e9b41",
            "FlexContainer0ff78ae22d6a94c": "FlexContainer0ff78ae22d6a94c",
            "fcsegnotes": "fcsegnotes",
            "imgpoint": "imgpoint",
            "lblFollowDesc": "lblFollowDesc",
            "lblindicator": "lblindicator",
            "lbllineindicator": "lbllineindicator",
            "lblnotesdesc": "lblnotesdesc",
            "lblnotestitle": "lblnotestitle"
        },
        "width": "92%",
        "zIndex": 2
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblIndicatorLine = new kony.ui.Label({
        "height": "85%",
        "id": "lblIndicatorLine",
        "isVisible": true,
        "left": "8%",
        "skin": "sknlblline",
        "text": "Label",
        "top": "20dp",
        "width": "2dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblNoNotes = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblNoNotes",
        "isVisible": false,
        "left": "191dp",
        "skin": "sklblblackbold",
        "text": "No notes available",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdata.add(segmentnotes, lblIndicatorLine, lblNoNotes);
    fcnotes.add(flxheadernotes, lbltitle, textareanotes, fcerror, fcoptions, fcdata);
    fcpopupnotes.add(fcnotes);
    fscmainbody.add(fcbodyheader, fscsidemenu, fscbodyScroll, kmf6098b842ad4fdda4eb17b923a10e39, fcwoundimages, fcpopupnotes);
    var fcpatientsummaryfooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "37dp",
        "id": "fcpatientsummaryfooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientsummaryfooter.setDefaultUnit(kony.flex.DP);
    var kme71d709a8ff4a55a93f42b4a07dba2f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "37dp",
        "id": "fcmstfooter",
        "layoutType": kony.flex.FREE_FORM,
        "top": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "isVisible": true,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfcGrayBg"
    }, {}, {});
    kme71d709a8ff4a55a93f42b4a07dba2f.setDefaultUnit(kony.flex.DP);
    var km30f7eb8fe37468fb039210bd4abb4e5 = new kony.ui.RichText({
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
    kme71d709a8ff4a55a93f42b4a07dba2f.add(km30f7eb8fe37468fb039210bd4abb4e5);
    var fcpatientsummaryfooterhover = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcpatientsummaryfooterhover",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skfctransbg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcpatientsummaryfooterhover.setDefaultUnit(kony.flex.DP);
    fcpatientsummaryfooterhover.add();
    fcpatientsummaryfooter.add(kme71d709a8ff4a55a93f42b4a07dba2f, fcpatientsummaryfooterhover);
    frmPatientSummary.add(fcpatientsummaryheader, fscmainbody, fcpatientsummaryfooter);
};

function frmPatientSummaryGlobals() {
    frmPatientSummary = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPatientSummary,
        "enabledForIdleTimeout": true,
        "id": "frmPatientSummary",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "onHide": AS_Form_b78de7641e5b493e9c3ca0c445213c51,
        "onTouchEnd": AS_Form_52dab6b337764ef2ad61bc05d7782d40,
        "postShow": AS_Form_330e4b0de5824fff878d7fb7a37278b1,
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