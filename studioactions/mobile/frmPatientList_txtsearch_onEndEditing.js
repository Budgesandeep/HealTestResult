function frmPatientList_txtsearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_5b51ad18e6a649d4ba36afe77ea133e3(eventobject, changedtext);
}

function AS_TextField_5b51ad18e6a649d4ba36afe77ea133e3(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}