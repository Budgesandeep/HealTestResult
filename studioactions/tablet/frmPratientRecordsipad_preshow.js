function frmPratientRecordsipad_preshow(eventobject) {
    return AS_Form_e1db9b9dd58e4201889b831688f43f72(eventobject);
}

function AS_Form_e1db9b9dd58e4201889b831688f43f72(eventobject) {
    changeConnectionStatus.call(this, null);
    hideSearchDropdown.call(this);
}