function frmPatientDetails_lstbox_onTouchStart(eventobject, x, y) {
    return AS_ListBox_d068ee2a32e54d63a8baaa2be76e46f5(eventobject, x, y);
}

function AS_ListBox_d068ee2a32e54d63a8baaa2be76e46f5(eventobject, x, y) {
    return frmPatientDetails_recordType_onTouchStart.call(this);
}