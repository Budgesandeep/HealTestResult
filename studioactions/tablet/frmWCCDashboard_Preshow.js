function frmWCCDashboard_Preshow(eventobject) {
    return AS_Form_ge4c0049eb4c49f3a056f8b519c5ac12(eventobject);
}

function AS_Form_ge4c0049eb4c49f3a056f8b519c5ac12(eventobject) {
    changeConnectionStatus.call(this, null);
    hideSearchDropdown.call(this);
}