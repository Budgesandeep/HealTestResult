function frmPatientRecords_tbSearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_2ba41fb6e1a44cf89d43193681f981cd(eventobject, changedtext);
}

function AS_TextField_2ba41fb6e1a44cf89d43193681f981cd(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}