function initializesegViewTasks() {
    fcviewtask = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcviewtask",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    fcviewtask.setDefaultUnit(kony.flex.DP);
    var fcpatientname = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcpatientname",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "35dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    fcpatientname.setDefaultUnit(kony.flex.DP);
    var FlexContainer0b56dbe2f0c6e47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0b56dbe2f0c6e47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "1dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b56dbe2f0c6e47.setDefaultUnit(kony.flex.DP);
    var lblpatientname = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lblpatientname",
        "isVisible": true,
        "left": "8dp",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "Patient Name",
        "top": "18dp",
        "width": "120dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0b56dbe2f0c6e47.add(lblpatientname);
    var lblline1 = new kony.ui.Label({
        "height": "30dp",
        "id": "lblline1",
        "isVisible": false,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcpatientname.add(FlexContainer0b56dbe2f0c6e47, lblline1);
    var fcwoundnumber = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcwoundnumber",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "35dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "8%",
        "zIndex": 2
    }, {}, {});
    fcwoundnumber.setDefaultUnit(kony.flex.DP);
    var FlexContainer0c76bf83ca0b343 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0c76bf83ca0b343",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0c76bf83ca0b343.setDefaultUnit(kony.flex.DP);
    var lblwoundnumber = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lblwoundnumber",
        "isVisible": true,
        "left": "6dp",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "12",
        "top": "18dp",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0c76bf83ca0b343.add(lblwoundnumber);
    var lblline2 = new kony.ui.Label({
        "height": "30dp",
        "id": "lblline2",
        "isVisible": false,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcwoundnumber.add(FlexContainer0c76bf83ca0b343, lblline2);
    var fctasks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fctasks",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "minHeight": "35dp",
        "isModalContainer": false,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 3
    }, {}, {});
    fctasks.setDefaultUnit(kony.flex.DP);
    var FlexContainer0ad9260b685b747 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0ad9260b685b747",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0ad9260b685b747.setDefaultUnit(kony.flex.DP);
    var lbltasks = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lbltasks",
        "isVisible": true,
        "left": "6dp",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "Tasks",
        "top": "18dp",
        "width": "91%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0ad9260b685b747.add(lbltasks);
    var lblline3 = new kony.ui.Label({
        "height": "35dp",
        "id": "lblline3",
        "isVisible": false,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fctasks.add(FlexContainer0ad9260b685b747, lblline3);
    var fcdatecreated = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcdatecreated",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "35dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 10
    }, {}, {});
    fcdatecreated.setDefaultUnit(kony.flex.DP);
    var FlexContainer071f487a8c34642 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer071f487a8c34642",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer071f487a8c34642.setDefaultUnit(kony.flex.DP);
    var lbldatecreated = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lbldatecreated",
        "isVisible": true,
        "left": "5%",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "10/20/1775",
        "top": "18dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer071f487a8c34642.add(lbldatecreated);
    var lblline4 = new kony.ui.Label({
        "id": "lblline4",
        "isVisible": true,
        "left": "1dp",
        "right": "0dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 10
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdatecreated.add(FlexContainer071f487a8c34642, lblline4);
    var fcduedate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcduedate",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "minHeight": "35dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "9%",
        "zIndex": 5
    }, {}, {});
    fcduedate.setDefaultUnit(kony.flex.DP);
    var FlexContainer01cdc97ef9e1243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer01cdc97ef9e1243",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01cdc97ef9e1243.setDefaultUnit(kony.flex.DP);
    var lblduedate = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lblduedate",
        "isVisible": true,
        "left": "5%",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "10/56/4556",
        "top": "18dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer01cdc97ef9e1243.add(lblduedate);
    var lblline5 = new kony.ui.Label({
        "height": "30dp",
        "id": "lblline5",
        "isVisible": false,
        "left": "2dp",
        "right": "2dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 6
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcduedate.add(FlexContainer01cdc97ef9e1243, lblline5);
    var fcnotes = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcnotes",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "35dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 6
    }, {}, {});
    fcnotes.setDefaultUnit(kony.flex.DP);
    var FlexContainer003bf4c58a6f648 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer003bf4c58a6f648",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer003bf4c58a6f648.setDefaultUnit(kony.flex.DP);
    var lblnotes = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lblnotes",
        "isVisible": true,
        "left": "5%",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "Notes",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer003bf4c58a6f648.add(lblnotes);
    var lblline6 = new kony.ui.Label({
        "height": "35dp",
        "id": "lblline6",
        "isVisible": false,
        "left": "1dp",
        "right": "2dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcnotes.add(FlexContainer003bf4c58a6f648, lblline6);
    var fcstatus = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcstatus",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "35dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "8.50%",
        "zIndex": 7
    }, {}, {});
    fcstatus.setDefaultUnit(kony.flex.DP);
    var FlexContainer0f5b4c782f0824d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0f5b4c782f0824d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f5b4c782f0824d.setDefaultUnit(kony.flex.DP);
    var lblstatus = new kony.ui.Label({
        "bottom": "5dp",
        "id": "lblstatus",
        "isVisible": true,
        "left": "9%",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "completed",
        "top": "18dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0f5b4c782f0824d.add(lblstatus);
    var lblline7 = new kony.ui.Label({
        "height": "30dp",
        "id": "lblline7",
        "isVisible": false,
        "left": "1dp",
        "right": "3dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcstatus.add(FlexContainer0f5b4c782f0824d, lblline7);
    var fcdatecompleted = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fcdatecompleted",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "minHeight": "35dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "13%",
        "zIndex": 8
    }, {}, {});
    fcdatecompleted.setDefaultUnit(kony.flex.DP);
    var FlexContainer0cddca5c7ce6e4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0cddca5c7ce6e4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0cddca5c7ce6e4a.setDefaultUnit(kony.flex.DP);
    var lbldatecompleted = new kony.ui.Label({
        "bottom": "10dp",
        "id": "lbldatecompleted",
        "isVisible": true,
        "left": "9%",
        "minHeight": "35dp",
        "skin": "sklblgraybold",
        "text": "10/23/4567",
        "top": "18dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnmarkcomplete = new kony.ui.Button({
        "bottom": "5dp",
        "height": "30dp",
        "id": "btnmarkcomplete",
        "isVisible": false,
        "left": "8%",
        "onClick": AS_Button_30725be1dbf94aea845e07d26295796a,
        "skin": "sknbtnbluebgd",
        "text": "Mark as Complete",
        "top": "18dp",
        "width": "135dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "hoverSkin": "skbtntranshover"
    });
    FlexContainer0cddca5c7ce6e4a.add(lbldatecompleted, btnmarkcomplete);
    var lblline8 = new kony.ui.Label({
        "height": "30dp",
        "id": "lblline8",
        "isVisible": false,
        "right": "4dp",
        "skin": "sknlblline",
        "top": "0dp",
        "width": "1dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    fcdatecompleted.add(FlexContainer0cddca5c7ce6e4a, lblline8);
    fcviewtask.add(fcpatientname, fcwoundnumber, fctasks, fcdatecreated, fcduedate, fcnotes, fcstatus, fcdatecompleted);
}