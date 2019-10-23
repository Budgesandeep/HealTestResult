function frmLogin_txtfPassword_onDone(eventobject, changedtext) {
    return AS_TextField_95ec7292a39e4e08a40e383a41c0613b(eventobject, changedtext);
}

function AS_TextField_95ec7292a39e4e08a40e383a41c0613b(eventobject, changedtext) {
    loginModule.ValidateCredentials();
}