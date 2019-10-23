function frmPatientsummary_txtSearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_8d8dddc36bea45a39202bfc3c080f6fc(eventobject, changedtext);
}

function AS_TextField_8d8dddc36bea45a39202bfc3c080f6fc(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}