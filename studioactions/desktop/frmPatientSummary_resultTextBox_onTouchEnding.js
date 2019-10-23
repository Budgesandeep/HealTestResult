function frmPatientSummary_resultTextBox_onTouchEnding(eventobject, changedtext) {
    return AS_TextField_b2cc0c2f4a3a4921bcbdee9b0b882fcc(eventobject, changedtext);
}

function AS_TextField_b2cc0c2f4a3a4921bcbdee9b0b882fcc(eventobject, changedtext) {
    return frmPatientSummary_resultTxtBoxEndEditing.call(this, eventobject, "onEndEditing");
}