function frMLogin_txtUser_onDone(eventobject, changedtext) {
    return AS_TextField_b1d2b55ead184533886a7da0659bcbb4(eventobject, changedtext);
}

function AS_TextField_b1d2b55ead184533886a7da0659bcbb4(eventobject, changedtext) {
    frmLogin.txtpassword.text = "";
    frmLogin.txtpassword.setFocus(true);
    //loginModule.ValidateCredentials();
}