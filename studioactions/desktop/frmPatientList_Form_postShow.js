function frmPatientList_Form_postShow(eventobject) {
    return AS_Form_ea20b05608804242a106d1fc40b0eb36(eventobject);
}

function AS_Form_ea20b05608804242a106d1fc40b0eb36(eventobject) {
    hideFormMenu.call(this);
    load_headerdata.call(this);
    registerTimeout.call(this);
}