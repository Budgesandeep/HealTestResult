function frmPatientsummary_txtSearch_onKeyUp(eventobject) {
    return AS_TextField_7c77cb4191d445a5a17e8755011d7d29(eventobject);
}

function AS_TextField_7c77cb4191d445a5a17e8755011d7d29(eventobject) {
    return frmPatientList_onSearchStart.call(this);
}