function frmLogin_txtpassword_onDone(eventobject, changedtext) {
    return AS_TextField_2877d0f4b0b34f1c948e409a177b9796(eventobject, changedtext);
}

function AS_TextField_2877d0f4b0b34f1c948e409a177b9796(eventobject, changedtext) {
    loginModule.ValidateCredentials();
}