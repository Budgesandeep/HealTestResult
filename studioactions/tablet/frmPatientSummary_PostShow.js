function frmPatientSummary_PostShow(eventobject) {
    return AS_Form_330e4b0de5824fff878d7fb7a37278b1(eventobject);
}

function AS_Form_330e4b0de5824fff878d7fb7a37278b1(eventobject) {
    hideFormMenu.call(this);
    load_headerdata.call(this, null);
    registerTimeout.call(this);
    clear_PatientSummary.call(this);
}