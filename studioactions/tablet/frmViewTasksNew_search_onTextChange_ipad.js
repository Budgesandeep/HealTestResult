function frmViewTasksNew_search_onTextChange_ipad(eventobject, changedtext) {
    return AS_TextField_180f725b5a084422bfb654d4bc180424(eventobject, changedtext);
}

function AS_TextField_180f725b5a084422bfb654d4bc180424(eventobject, changedtext) {
    return frmPatientList_onSearchStart.call(this);
}