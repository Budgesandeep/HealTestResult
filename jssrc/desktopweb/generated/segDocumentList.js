function initializesegDocumentList() {
    fcDocumentList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "fcDocumentList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    fcDocumentList.setDefaultUnit(kony.flex.DP);
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
        "skin": "sknlbldarkgray85",
        "text": "03/21/2017",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDateUploaded.add(lblDateUploaded);
    var lblLine1 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine1",
        "isVisible": true,
        "left": "20%",
        "skin": "sklblline",
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
        "left": "20.50%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "30%",
        "zIndex": 1
    }, {}, {
        "hoverSkin": "sknfcTransHover"
    });
    fcDocument.setDefaultUnit(kony.flex.DP);
    var btnDocument = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "skbtntxtSkyBluebold13",
        "id": "btnDocument",
        "isVisible": true,
        "onClick": AS_Button_80612a6cc9354212a5dab9b6293bb8eb,
        "skin": "skbtntxtSkyBluebold13",
        "text": "Button",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    fcDocument.add(btnDocument);
    var lblLine2 = new kony.ui.Label({
        "height": "100%",
        "id": "lblLine2",
        "isVisible": true,
        "left": "50.50%",
        "skin": "sklblline",
        "text": "Label",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnDelete = new kony.ui.Button({
        "focusSkin": "skbtnDelete",
        "height": "50dp",
        "id": "btnDelete",
        "isVisible": true,
        "left": "55%",
        "onClick": AS_Button_35cec0f0254c4bf49f37b0ffa9bbede2,
        "skin": "skbtnDelete",
        "top": "9dp",
        "width": "30dp",
        "zIndex": 3
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcDocumentList.add(fcDateUploaded, lblLine1, fcDocument, lblLine2, btnDelete);
}