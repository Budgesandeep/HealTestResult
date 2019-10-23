function frmPatientSummary_Preshow(eventobject) {
    return AS_Form_cb66e79c83f3474aa2de1402ae918bd4(eventobject);
}

function AS_Form_cb66e79c83f3474aa2de1402ae918bd4(eventobject) {
    changeConnectionStatus.call(this, null);
    hideSearchDropdown.call(this);
}