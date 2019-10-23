function frmPatientSummary_tbpatientsearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_20a44614dd724e26a69c60da84e4cb36(eventobject, changedtext);
}

function AS_TextField_20a44614dd724e26a69c60da84e4cb36(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}