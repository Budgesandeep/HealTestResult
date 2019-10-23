function frmPatientSummary_txbox_onBeginediting(eventobject, changedtext) {
    return AS_TextField_a23620c4343740b6915ad81b558df99b(eventobject, changedtext);
}

function AS_TextField_a23620c4343740b6915ad81b558df99b(eventobject, changedtext) {
    searchPatient_closeSearchList.call(this);
    healingsubsteps_txtxboxListener.call(this, eventobject);
}