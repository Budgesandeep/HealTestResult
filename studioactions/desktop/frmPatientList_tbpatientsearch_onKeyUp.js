function frmPatientList_tbpatientsearch_onKeyUp(eventobject) {
    return AS_TextField_acee6b36555b49b6a6e951b54bf5c55a(eventobject);
}

function AS_TextField_acee6b36555b49b6a6e951b54bf5c55a(eventobject) {
    return frmPatientList_onSearchStart.call(this);
}