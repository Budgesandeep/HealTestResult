function frmPatientSummary_SegmentSearch_onRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_d6901e2b85334feabdb50dd288cbce12(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_d6901e2b85334feabdb50dd288cbce12(eventobject, sectionNumber, rowNumber) {
    return frmPatientListAndSummary_searchPatient.call(this);
}