function frmViewTasksNew_search_onEndEditing_ipad(eventobject, changedtext) {
    return AS_TextField_56d21a3a973043509d1e44bbd7fc80a8(eventobject, changedtext);
}

function AS_TextField_56d21a3a973043509d1e44bbd7fc80a8(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}