function popuplogout_btnyes_onClick(eventobject) {
    return AS_Button_73f86e2a5150432db9c0e72a0f5646a4(eventobject);
}

function AS_Button_73f86e2a5150432db9c0e72a0f5646a4(eventobject) {
    // loginModule.logoutUserService();
    var error_label = ERROR_CONSTANTS.LOGOUT_SUCCESS_MESSAGE;
    loginModule.showLoginScreen(error_label);
}