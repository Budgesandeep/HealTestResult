function popupSwitchFacilityFacilitySync_btnYes_onClick(eventobject) {
    return AS_Button_aa8b3e271daf4897b3e6941caba3ca50(eventobject);
}

function AS_Button_aa8b3e271daf4897b3e6941caba3ca50(eventobject) {
    dismiss_currentPopup.call(this, eventobject);
    if (isIpad) {
        if (isSearchFacility) {
            clearSearchFacilityText();
        }
        frmSelectFacility.show();
    }
}