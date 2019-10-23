function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var fcloginmainbody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcloginmainbody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "skflxbreadcrumb",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcloginmainbody.setDefaultUnit(kony.flex.DP);
    var imglogo = new kony.ui.Image2({
        "centerX": "50.00%",
        "height": "35dp",
        "id": "imglogo",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "loginlogo.png",
        "top": 260,
        "width": "342dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblredirection = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "45%",
        "id": "lblredirection",
        "isVisible": true,
        "skin": "sklblwhite125bold",
        "text": "Loading",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcloading = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "55%",
        "centerY": "45%",
        "clipBounds": true,
        "height": "25dp",
        "id": "fcloading",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "50dp",
        "zIndex": 1
    }, {}, {});
    fcloading.setDefaultUnit(kony.flex.DP);
    var img1 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "6dp",
        "id": "img1",
        "isVisible": true,
        "left": "3dp",
        "skin": "slImage",
        "src": "pageoffdot.png",
        "width": "6dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img2 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "6dp",
        "id": "img2",
        "isVisible": true,
        "left": "22dp",
        "skin": "slImage",
        "src": "pageoffdot.png",
        "width": "6dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var img3 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "6dp",
        "id": "img3",
        "isVisible": true,
        "left": "45dp",
        "skin": "slImage",
        "src": "pageoffdot.png",
        "width": "6dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcloading.add(img1, img2, img3);
    fcloginmainbody.add(imglogo, lblredirection, fcloading);
    frmHome.add(fcloginmainbody);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "onHide": AS_Form_f970dd483282468a8aa2006d3863c773,
        "postShow": AS_Form_h44072be3c3d457aa06f7a77865b41a5,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};