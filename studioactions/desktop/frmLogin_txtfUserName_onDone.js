function frmLogin_txtfUserName_onDone(eventobject, changedtext) {
    return AS_TextField_95b105eb1a924e23960991f0af80975b(eventobject, changedtext);
}

function AS_TextField_95b105eb1a924e23960991f0af80975b(eventobject, changedtext) {
    loginModule.ValidateCredentials();
}