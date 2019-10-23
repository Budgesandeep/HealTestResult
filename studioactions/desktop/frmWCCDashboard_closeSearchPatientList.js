function frmWCCDashboard_closeSearchPatientList(eventobject, x, y) {
    return AS_ListBox_jdc2ae987ef54144be21fbc76df0a741(eventobject, x, y);
}

function AS_ListBox_jdc2ae987ef54144be21fbc76df0a741(eventobject, x, y) {
    return searchPatient_closeSearchList.call(this);
}