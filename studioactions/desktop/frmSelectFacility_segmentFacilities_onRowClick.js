function frmSelectFacility_segmentFacilities_onRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_c44b01a7b28544c0a2d1b7e6a139c677(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_c44b01a7b28544c0a2d1b7e6a139c677(eventobject, sectionNumber, rowNumber) {
    return selectFacility_onRowClick.call(this, eventobject);
}