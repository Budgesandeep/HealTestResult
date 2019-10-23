function frmWCCDashboard_lbwccmetrics_onSelection(eventobject) {
    return AS_ListBox_d7d21c0595d04cc8addcc71e46aabc59(eventobject);
}

function AS_ListBox_d7d21c0595d04cc8addcc71e46aabc59(eventobject) {
    return wccMetrics_OnMonthSelection.call(this);
}