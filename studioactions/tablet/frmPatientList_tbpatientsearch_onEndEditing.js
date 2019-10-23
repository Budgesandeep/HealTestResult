function frmPatientList_tbpatientsearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_3527076b445b428890b6fa83dd0db4c9(eventobject, changedtext);
}

function AS_TextField_3527076b445b428890b6fa83dd0db4c9(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}