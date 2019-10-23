function frmPatientDetails_Post_Show(eventobject) {
    return AS_Form_c475d6d51ac54904bfba77f2daccf7c9(eventobject);
}

function AS_Form_c475d6d51ac54904bfba77f2daccf7c9(eventobject) {
    changeConnectionStatus(isNetworkAvailable());
}