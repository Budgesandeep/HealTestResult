function frmPatientList_txtsearch_onTextChange(eventobject, changedtext) {
    return AS_TextField_fc11124fb98044d0b4364ed2f2bfad9e(eventobject, changedtext);
}

function AS_TextField_fc11124fb98044d0b4364ed2f2bfad9e(eventobject, changedtext) {
    return frmPatientList_onSearchStart.call(this);
}