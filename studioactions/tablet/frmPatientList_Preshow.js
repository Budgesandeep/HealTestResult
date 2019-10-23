function frmPatientList_Preshow(eventobject) {
    return AS_Form_b8e8b7a0f1494eccb37c936cc4bc4c00(eventobject);
}

function AS_Form_b8e8b7a0f1494eccb37c936cc4bc4c00(eventobject) {
    changeConnectionStatus.call(this, null);
    hideSearchDropdown.call(this);
}