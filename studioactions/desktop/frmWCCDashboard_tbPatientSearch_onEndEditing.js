function frmWCCDashboard_tbPatientSearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_93c97b49ba9c4178857491ab3a179167(eventobject, changedtext);
}

function AS_TextField_93c97b49ba9c4178857491ab3a179167(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}