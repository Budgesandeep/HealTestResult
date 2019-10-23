function frmPatientRecords_btndocument_onRowClick(eventobject, context) {
    return AS_Button_f93d9a8cf7a4459c8ad0ba21fbf736de(eventobject, context);
}

function AS_Button_f93d9a8cf7a4459c8ad0ba21fbf736de(eventobject, context) {
    return frmPatientRecords_showDocument.call(this, context);
}