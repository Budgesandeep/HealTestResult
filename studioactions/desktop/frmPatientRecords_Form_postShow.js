function frmPatientRecords_Form_postShow(eventobject) {
    return AS_Form_1be38764c05f433d82d4302972cf1f59(eventobject);
}

function AS_Form_1be38764c05f433d82d4302972cf1f59(eventobject) {
    hideFormMenu.call(this);
    load_headerdata.call(this, null);
    registerTimeout.call(this);
}