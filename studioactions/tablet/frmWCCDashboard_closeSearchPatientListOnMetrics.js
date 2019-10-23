function frmWCCDashboard_closeSearchPatientListOnMetrics(eventobject, x, y) {
    return AS_ListBox_c76920cfeff24e51b1ae88c8e3b43909(eventobject, x, y);
}

function AS_ListBox_c76920cfeff24e51b1ae88c8e3b43909(eventobject, x, y) {
    return searchPatient_closeSearchList.call(this);
}