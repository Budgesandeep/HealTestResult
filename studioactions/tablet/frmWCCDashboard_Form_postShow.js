function frmWCCDashboard_Form_postShow(eventobject) {
    return AS_Form_9c2afef232ce4398bb1674879449f646(eventobject);
}

function AS_Form_9c2afef232ce4398bb1674879449f646(eventobject) {
    hideFormMenu.call(this);
    load_headerdata.call(this, null);
    registerTimeout.call(this);
}