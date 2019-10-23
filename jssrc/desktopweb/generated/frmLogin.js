function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
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
    var fclogo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "fclogo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "12%",
        "width": "40.30%",
        "zIndex": 1
    }, {}, {});
    fclogo.setDefaultUnit(kony.flex.DP);
    var imglogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35dp",
        "id": "imglogo",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "loginlogo.png",
        "top": 100,
        "width": "342dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcwidgets = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcwidgets",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "40dp",
        "width": "100%"
    }, {}, {});
    fcwidgets.setDefaultUnit(kony.flex.DP);
    var fcusername = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "fcusername",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    fcusername.setDefaultUnit(kony.flex.DP);
    var txtusername = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtusername",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "maxTextLength": 32,
        "onDone": AS_TextField_95b105eb1a924e23960991f0af80975b,
        "placeholder": "User Name",
        "right": "0%",
        "secureTextEntry": false,
        "skin": "sknloginboxwhite",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
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
    var imguser = new kony.ui.Image2({
        "centerY": "50%",
        "height": "34dp",
        "id": "imguser",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "loginuser.png",
        "top": "0dp",
        "width": "36dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcusername.add(txtusername, imguser);
    var fcpassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "fcpassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%"
    }, {}, {});
    fcpassword.setDefaultUnit(kony.flex.DP);
    var txtpassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtpassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "maxTextLength": 24,
        "onDone": AS_TextField_95ec7292a39e4e08a40e383a41c0613b,
        "placeholder": "Password",
        "right": "0%",
        "secureTextEntry": true,
        "skin": "sknloginboxwhite",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
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
    var imgpassword = new kony.ui.Image2({
        "centerY": "50%",
        "height": "34dp",
        "id": "imgpassword",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "loginpassword.png",
        "top": "0dp",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpassword.add(txtpassword, imgpassword);
    var fcForgotPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcForgotPassword",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    fcForgotPassword.setDefaultUnit(kony.flex.DP);
    var btnForgotPassword = new kony.ui.Button({
        "bottom": 0,
        "focusSkin": "sknbtnForgotPassword",
        "height": "40dp",
        "id": "btnForgotPassword",
        "isVisible": true,
        "left": "0%",
        "skin": "sknbtnForgotPassword",
        "text": "Forgot your Password? ",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnReset = new kony.ui.Button({
        "bottom": 0,
        "focusSkin": "sknbtnWhiteTransbgUnderline",
        "height": "40dp",
        "id": "btnReset",
        "isVisible": true,
        "left": "2dp",
        "onClick": AS_Button_95fd92b43f014281a0d450c6e35eca47,
        "skin": "sknbtnWhiteTransbgUnderline",
        "text": "Reset it.",
        "top": "15dp",
        "width": "50.00%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnHoverForgotPassword"
    });
    fcForgotPassword.add(btnForgotPassword, btnReset);
    var fcbtnlogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "fcbtnlogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "10dp",
        "width": "100%"
    }, {}, {});
    fcbtnlogin.setDefaultUnit(kony.flex.DP);
    var btnlogin = new kony.ui.Button({
        "focusSkin": "sknbtnloginblue",
        "height": "100%",
        "id": "btnlogin",
        "isVisible": true,
        "onClick": AS_Button_58c6c088aa5e404790bd2404bb62ab74,
        "right": 0,
        "skin": "sknbtnloginblue",
        "text": "Login",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "sknbtnloginbluehover"
    });
    fcbtnlogin.add(btnlogin);
    fcwidgets.add(fcusername, fcpassword, fcForgotPassword, fcbtnlogin);
    var fcloginerror = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcloginerror",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "10dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    fcloginerror.setDefaultUnit(kony.flex.DP);
    var lbluseriderror = new kony.ui.Label({
        "id": "lbluseriderror",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklblred",
        "text": "User Name is required for password recovery.",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblpwderror = new kony.ui.Label({
        "id": "lblpwderror",
        "isVisible": false,
        "left": "0dp",
        "skin": "sklblred",
        "text": "Password is required for login.",
        "top": "30dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcloginerror.add(lbluseriderror, lblpwderror);
    fclogo.add(imglogo, fcwidgets, fcloginerror);
    var lblversion = new kony.ui.Label({
        "bottom": "2%",
        "centerX": "50%",
        "id": "lblversion",
        "isVisible": false,
        "skin": "sklblwhite100",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcloginmainbody.add(fclogo, lblversion);
    frmLogin.add(fcloginmainbody);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "onDeviceBack": AS_Form_g7e44d8968a34bca92685592cefc344c,
        "retainScrollPosition": false
    });
};