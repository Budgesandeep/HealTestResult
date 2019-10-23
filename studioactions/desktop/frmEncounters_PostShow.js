function frmEncounters_PostShow(eventobject) {
    return AS_Form_030bc0d177d04f89b5cd82bee2887edf(eventobject);
}

function AS_Form_030bc0d177d04f89b5cd82bee2887edf(eventobject) {
    hideFormMenu.call(this);
    load_headerdata.call(this, null);
    registerTimeout.call(this);
}