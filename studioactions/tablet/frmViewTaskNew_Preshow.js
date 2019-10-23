function frmViewTaskNew_Preshow(eventobject) {
    return AS_Form_d159291f1b324711a9e384024141fdc9(eventobject);
}

function AS_Form_d159291f1b324711a9e384024141fdc9(eventobject) {
    changeConnectionStatus.call(this, null);
    hideSearchDropdown.call(this);
}