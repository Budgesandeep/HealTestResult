function frmViewTasksNew_txtbxsearch_onEndEditing(eventobject, changedtext) {
    return AS_TextField_e28894c17a9843dc8a1c107f9361820b(eventobject, changedtext);
}

function AS_TextField_e28894c17a9843dc8a1c107f9361820b(eventobject, changedtext) {
    return frmPatientList_onSearchEnd.call(this);
}