function frmNotificationDashboard_onlinktextchange(eventobject, changedtext) {
    return AS_TextField_c637dde2bae740a599ddcb88a5c1e96d(eventobject, changedtext);
}

function AS_TextField_c637dde2bae740a599ddcb88a5c1e96d(eventobject, changedtext) {
    return frmNotificationDashboard_textBoxEditing.call(this, eventobject);
}