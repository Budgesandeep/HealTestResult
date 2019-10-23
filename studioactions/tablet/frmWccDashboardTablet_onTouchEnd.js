function frmWccDashboardTablet_onTouchEnd(eventobject, x, y) {
    return AS_Form_c4310b35458e4f8f93488af739836741(eventobject, x, y);
}

function AS_Form_c4310b35458e4f8f93488af739836741(eventobject, x, y) {
    frmPatientList_TouchEnd.call(this);
    hideFormMenu.call(this);
}