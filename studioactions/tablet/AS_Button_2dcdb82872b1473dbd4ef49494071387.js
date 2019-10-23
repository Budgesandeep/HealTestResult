function AS_Button_2dcdb82872b1473dbd4ef49494071387(eventobject) {
    //Akshay - for checking whether online or offline
    //     //var isNetworkAvailable = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    //     if (isNetworkAvailable()) {
    //         loginModule.logoutUserService();
    //     }
    ///need to check this condition - only be called if user is in iPad and offline
    //     if (isIpad) {
    //         login_cntrl_offline.invalidateUser();
    //     }
    var error_label = ERROR_CONSTANTS.LOGOUT_SUCCESS_MESSAGE;
    if (isIpad) {
        loginModule.showLoginScreen(error_label);
    }
}