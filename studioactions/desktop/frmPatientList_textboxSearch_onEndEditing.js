function frmPatientList_textboxSearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_f8c94633f6f14c029b6116605500e626(eventobject, changedtext);
}

function AS_TextField_f8c94633f6f14c029b6116605500e626(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}