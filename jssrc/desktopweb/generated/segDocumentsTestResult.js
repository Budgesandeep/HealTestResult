function initializesegDocumentsTestResult() {
    flxTestResultsList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "flxTestResultsList",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "CopyslFbox0c30bbddb20ef4e",
        "top": "0dp",
        "width": "100%"
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    flxTestResultsList.setDefaultUnit(kony.flex.DP);
    var fcTestResultDescription = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcTestResultDescription",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "22%",
        "zIndex": 1
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    fcTestResultDescription.setDefaultUnit(kony.flex.DP);
    var btnTestResultDescription = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold13",
        "id": "btnTestResultDescription",
        "isVisible": true,
        "skin": "skbtntxtSkyBluebold13",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTestResultDescription.add(btnTestResultDescription);
    var lblLine1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine1",
        "isVisible": true,
        "left": "0%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxDateOrdered = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxDateOrdered",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    flxDateOrdered.setDefaultUnit(kony.flex.DP);
    var lblTestResultDateOrdered = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTestResultDateOrdered",
        "isVisible": true,
        "skin": "sknlbldarkgray85",
        "text": "03/21/2017",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDateOrdered.add(lblTestResultDateOrdered);
    var lblLine2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine2",
        "isVisible": false,
        "left": "0%",
        "skin": "sklblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxDateCompleted = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxDateCompleted",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    flxDateCompleted.setDefaultUnit(kony.flex.DP);
    var lblTestResultsDateCompleted = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTestResultsDateCompleted",
        "isVisible": true,
        "skin": "sknlbldarkgray85",
        "text": "03/21/2017",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDateCompleted.add(lblTestResultsDateCompleted);
    var lblLine3 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine3",
        "isVisible": true,
        "left": "0%",
        "skin": "slLabel",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcTestResultAttachment = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcTestResultAttachment",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "16%",
        "zIndex": 1
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    fcTestResultAttachment.setDefaultUnit(kony.flex.DP);
    var btnTestResultAttachment = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold13",
        "id": "btnTestResultAttachment",
        "isVisible": true,
        "skin": "skbtntxtSkyBluebold13",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcTestResultAttachment.add(btnTestResultAttachment);
    var lblLine4 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine4",
        "isVisible": true,
        "left": "0%",
        "skin": "slLabel",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxTestResultResults = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTestResultResults",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "CopyslFbox0ca141ce5880743",
        "top": "0dp",
        "width": "31%",
        "zIndex": 1
    }, {
        "retainFlowHorizontalAlignment": false
    }, {});
    flxTestResultResults.setDefaultUnit(kony.flex.DP);
    var lblTestResultResults = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTestResultResults",
        "isVisible": false,
        "left": 0,
        "skin": "sknlbldarkgray85",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtRichTestResult = new kony.ui.RichText({
        "id": "txtRichTestResult",
        "isVisible": true,
        "left": "2%",
        "linkSkin": "defRichTextLink",
        "skin": "sknrchdarkgray80",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnOnHoverResult = new kony.ui.Button({
        "height": "100%",
        "id": "btnOnHoverResult",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_f37b7ffe21264662aa5d0667d8a4ad59,
        "skin": "skbtn",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTestResultResults.add(lblTestResultResults, txtRichTestResult, btnOnHoverResult);
    flxTestResultsList.add(fcTestResultDescription, lblLine1, flxDateOrdered, lblLine2, flxDateCompleted, lblLine3, fcTestResultAttachment, lblLine4, flxTestResultResults);
}