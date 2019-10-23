function frmWCCDashboard_tbsearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_337d2ded58b2411d9dcc071627ad83b5(eventobject, changedtext);
}

function AS_TextField_337d2ded58b2411d9dcc071627ad83b5(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}