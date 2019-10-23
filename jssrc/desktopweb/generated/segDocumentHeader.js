function initializesegDocumentHeader() {
    fcDocumentListHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "fcDocumentListHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "skfcdarkgraybg"
    }, {}, {});
    fcDocumentListHeader.setDefaultUnit(kony.flex.DP);
    var fcDateUploaded = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcDateUploaded",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    fcDateUploaded.setDefaultUnit(kony.flex.DP);
    var lblDateUploaded = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDateUploaded",
        "isVisible": true,
        "skin": "sklblwhite",
        "text": "Date uploaded",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDateUploaded.add(lblDateUploaded);
    var lblLine1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine1",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcDocument = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcDocument",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    fcDocument.setDefaultUnit(kony.flex.DP);
    var lblDocument = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDocument",
        "isVisible": true,
        "skin": "sklblwhite",
        "text": "Document Name",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDocument.add(lblDocument);
    var lblLine2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine2",
        "isVisible": true,
        "left": "0dp",
        "skin": "sklbllinewhite",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var fcDelete = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "fcDelete",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    fcDelete.setDefaultUnit(kony.flex.DP);
    var lblDelete = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblDelete",
        "isVisible": true,
        "left": "50dp",
        "skin": "sklblwhite",
        "text": "Remove",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDelete.add(lblDelete);
    fcDocumentListHeader.add(fcDateUploaded, lblLine1, fcDocument, lblLine2, fcDelete);
}