function frmPatientSummaryipad_postshow(eventobject) {
    return AS_Form_53076a2b3c8247fc9bf0156ba45151c7(eventobject);
}

function AS_Form_53076a2b3c8247fc9bf0156ba45151c7(eventobject) {
    registerTimeout.call(this);
    hideFormMenu.call(this);
    load_headerdata.call(this, null);
    frmPatientSummary_resetFormData.call(this);
    patientSummaryPostShow.call(this);
}