function frmNotificationDashboard_ontextchange(eventobject, changedtext) {
    return AS_TextField_c7528c3f7e1a44df9415276aeab9acf7(eventobject, changedtext);
}

function AS_TextField_c7528c3f7e1a44df9415276aeab9acf7(eventobject, changedtext) {
    return frmNotificationDashboard_textBoxEditing.call(this, eventobject);
}