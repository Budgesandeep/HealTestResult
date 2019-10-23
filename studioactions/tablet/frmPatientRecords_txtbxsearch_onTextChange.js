function frmPatientRecords_txtbxsearch_onTextChange(eventobject, changedtext) {
    return AS_TextField_477be3393b9a432f8899f44d6fc58340(eventobject, changedtext);
}

function AS_TextField_477be3393b9a432f8899f44d6fc58340(eventobject, changedtext) {
    return frmPatientList_onSearchStart.call(this);
}