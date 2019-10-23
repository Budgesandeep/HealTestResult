function popupSwitchFacility_tablet_segment_onRowClick(eventobject, sectionNumber, rowNumber) {
    return AS_Segment_e04c173af9aa49ce96ccaa4f7191dbd1(eventobject, sectionNumber, rowNumber);
}

function AS_Segment_e04c173af9aa49ce96ccaa4f7191dbd1(eventobject, sectionNumber, rowNumber) {
    return selectFacility_onRowClick.call(this, eventobject);
}