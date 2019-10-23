function popupSwitchFacilityFacilitySync_btnYes_onClick(eventobject) {
    return AS_Button_cde0b303a89442ee99609b5c4559c4a7(eventobject);
}

function AS_Button_cde0b303a89442ee99609b5c4559c4a7(eventobject) {
    dismiss_currentPopup.call(this, eventobject);
    if (isIphone) {
        if (isSearchFacility) {
            clearSearchFacilityText();
        }
        frmSelectFacility.show();
    }
}