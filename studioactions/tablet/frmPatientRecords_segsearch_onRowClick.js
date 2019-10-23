function frmPatientRecords_segsearch_onRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_d091f1cd4634418d8958003c0b31a94f(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_d091f1cd4634418d8958003c0b31a94f(eventobject, sectionNumber, rowNumber) {
    return frmPatientListAndSummary_searchPatient.call(this);
}