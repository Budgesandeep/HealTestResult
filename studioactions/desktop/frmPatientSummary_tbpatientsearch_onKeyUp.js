function frmPatientSummary_tbpatientsearch_onKeyUp(eventobject) {
    return AS_TextField_f8e3233713d648b39a633d8a4ab66376(eventobject);
}

function AS_TextField_f8e3233713d648b39a633d8a4ab66376(eventobject) {
    return frmPatientList_onSearchStart.call(this);
}