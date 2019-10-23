function initializesegsystemnotificationlist() {
    Copyfcnotificationlisthdr0if626c45cfc54f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "Copyfcnotificationlisthdr0if626c45cfc54f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "isModalContainer": false,
        "skin": "slFbox"
    }, {}, {});
    Copyfcnotificationlisthdr0if626c45cfc54f.setDefaultUnit(kony.flex.DP);
    var fcnotificationdate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcnotificationdate",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1.50%",
        "minHeight": "50dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    fcnotificationdate.setDefaultUnit(kony.flex.DP);
    var lblnotificationdate = new kony.ui.Label({
        "bottom": "20dp",
        "id": "lblnotificationdate",
        "isVisible": true,
        "left": "5dp",
        "skin": "sklblgraybold",
        "text": "Label",
        "top": "20dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnotificationdate.add(lblnotificationdate);
    var fccasemanager = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fccasemanager",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1.70%",
        "minHeight": "50dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%",
        "zIndex": 2
    }, {}, {});
    fccasemanager.setDefaultUnit(kony.flex.DP);
    var lbldescription = new kony.ui.Label({
        "bottom": "1dp",
        "id": "lbldescription",
        "isVisible": true,
        "left": "0%",
        "right": 10,
        "skin": "sklblgraybold",
        "text": "asdadasdasdsaddasdasdass release release . release release release release",
        "top": "20dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fccasemanager.add(lbldescription);
    var fchealper = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fchealper",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "2.80%",
        "minHeight": "50dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "15.70%",
        "zIndex": 8
    }, {}, {});
    fchealper.setDefaultUnit(kony.flex.DP);
    var lblcreatedby = new kony.ui.Label({
        "bottom": "1dp",
        "id": "lblcreatedby",
        "isVisible": true,
        "left": "0%",
        "right": "2dp",
        "skin": "sklblgraybold",
        "text": "Advanced Procedures",
        "top": "20dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fchealper.add(lblcreatedby);
    var fctransferstatus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fctransferstatus",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "minHeight": "50dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "14%",
        "zIndex": 9
    }, {}, {});
    fctransferstatus.setDefaultUnit(kony.flex.DP);
    var lblstatus = new kony.ui.Label({
        "id": "lblstatus",
        "isVisible": true,
        "left": "0%",
        "right": "2dp",
        "skin": "sklblgraybold",
        "text": "Transfer Status",
        "top": "20dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fctransferstatus.add(lblstatus);
    var Copyfctransferstatus0e1b3a80c5b1946 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "Copyfctransferstatus0e1b3a80c5b1946",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "minHeight": "50dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "16%",
        "zIndex": 9
    }, {}, {});
    Copyfctransferstatus0e1b3a80c5b1946.setDefaultUnit(kony.flex.DP);
    var btnEdit = new kony.ui.Button({
        "height": "30dp",
        "id": "btnEdit",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_dee8a4a3508847a6bd51031172f68dfa,
        "skin": "sknbtntransbgblue85",
        "text": "Edit",
        "top": "15dp",
        "width": "15.08%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "Copysknbtntransbgblue0daf1b91352324a"
    });
    Copyfctransferstatus0e1b3a80c5b1946.add(btnEdit);
    Copyfcnotificationlisthdr0if626c45cfc54f.add(fcnotificationdate, fccasemanager, fchealper, fctransferstatus, Copyfctransferstatus0e1b3a80c5b1946);
}