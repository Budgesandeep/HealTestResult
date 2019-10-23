function frmPatientRecords_txtbxsearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_6737c29de5bb4c26953e1c5aae9c47c6(eventobject, changedtext);
}

function AS_TextField_6737c29de5bb4c26953e1c5aae9c47c6(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}