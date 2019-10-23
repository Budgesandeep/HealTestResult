function addWidgetspopupcreatetask() {
    var hboxaddtask = new kony.ui.Box({
        "id": "hboxaddtask",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhbwhitebgbrdr"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxaddtask = new kony.ui.Box({
        "id": "vboxaddtask",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hboxheader = new kony.ui.Box({
        "id": "hboxheader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxgraybg"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblcreatetask = new kony.ui.Label({
        "id": "lblcreatetask",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Create Task"
    }, {
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vboxcreatetaskclose = new kony.ui.Box({
        "id": "vboxcreatetaskclose",
        "isVisible": true,
        "onClick": AS_VBox_ae2da990ec99471497311d5dfeb7d412,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 26,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [9, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skvboxhover"
    });
    var imgclose = new kony.ui.Image2({
        "id": "imgclose",
        "isVisible": true,
        "skin": "slImage",
        "src": "closepopup.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [82, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxcreatetaskclose.add(imgclose);
    hboxheader.add(lblcreatetask, vboxcreatetaskclose);
    var hboxpatient = new kony.ui.Box({
        "id": "hboxpatient",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblpatient = new kony.ui.Label({
        "id": "lblpatient",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Patient:"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblpatientname = new kony.ui.Label({
        "id": "lblpatientname",
        "isVisible": true,
        "skin": "sklblgray100",
        "text": "John Smith"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxpatient.add(lblpatient, lblpatientname);
    var hboxWound = new kony.ui.Box({
        "id": "hboxWound",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblWound = new kony.ui.Label({
        "id": "lblWound",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Wound:"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblWoundNo = new kony.ui.Label({
        "id": "lblWoundNo",
        "isVisible": true,
        "skin": "sklblgray100",
        "text": "1"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxWound.add(lblWound, lblWoundNo);
    var hboxfollowup = new kony.ui.Box({
        "id": "hboxfollowup",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblfollowup = new kony.ui.Label({
        "id": "lblfollowup",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Follow Up:"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblfollowupdesc = new kony.ui.Label({
        "id": "lblfollowupdesc",
        "isVisible": true,
        "skin": "sklblgray100",
        "text": "Completed nutritional risk screening"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxfollowup.add(lblfollowup, lblfollowupdesc);
    var hboxduedate = new kony.ui.Box({
        "id": "hboxduedate",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblduedate = new kony.ui.Label({
        "id": "lblduedate",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Due Date:"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var datecal = new kony.ui.Calendar({
        "calendarIcon": "calendar.png",
        "dateComponents": ["8", "2", "2017"],
        "dateFormat": "MM/dd/yyyy",
        "day": 8,
        "formattedDate": "02/08/2017",
        "hour": 15,
        "id": "datecal",
        "isVisible": true,
        "minutes": 35,
        "month": 2,
        "placeholder": "MM/DD/YYYY",
        "seconds": 22,
        "skin": "skncalender",
        "viewConfig": {
            "gridConfig": {
                "gridCellSelectedSkin": "skcalendarselected100",
                "gridCellSkin": "skcalendarcell100",
                "gridCellTodaySkin": "skcalendartoday100",
                "gridCellWeekendSkin": "skcalendarweekend100",
                "gridSkin": "skcalendargrid100"
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "year": 2017
    }, {
        "containerWeight": 28,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "noOfMonths": 1
    });
    hboxduedate.add(lblduedate, datecal);
    var hboxdesc = new kony.ui.Box({
        "id": "hboxdesc",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lbldesc = new kony.ui.Label({
        "id": "lbldesc",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Description:"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    var textareadesc = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "skntxtareagraybg",
        "id": "textareadesc",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "skin": "skntxtareagraybg",
        "text": "\n",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 78,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoCorrect": false
    });
    hboxdesc.add(lbldesc, textareadesc);
    var hboxerror = new kony.ui.Box({
        "id": "hboxerror",
        "isVisible": false,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblerror = new kony.ui.Label({
        "id": "lblerror",
        "isVisible": true,
        "skin": "sknlblrednormal",
        "text": "Label"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxerror.add(lblerror);
    var hboxcreate = new kony.ui.Box({
        "id": "hboxcreate",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btncreatetaskcancel = new kony.ui.Button({
        "focusSkin": "skngraybg",
        "id": "btncreatetaskcancel",
        "isVisible": true,
        "onClick": AS_Button_707d5cc9fa9d45afa6139f89a83b65ee,
        "skin": "skngraybg",
        "text": "Cancel"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [65, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skngraybghover"
    });
    var btncreate = new kony.ui.Button({
        "focusSkin": "sknbtnbluebg",
        "id": "btncreate",
        "isVisible": true,
        "onClick": AS_Button_0a2161418a09482aad30b1c81af59c86,
        "skin": "sknbtnbluebg",
        "text": "Create"
    }, {
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 1, 2, 1],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skbtnbluehover"
    });
    hboxcreate.add(btncreatetaskcancel, btncreate);
    vboxaddtask.add(hboxheader, hboxpatient, hboxWound, hboxfollowup, hboxduedate, hboxdesc, hboxerror, hboxcreate);
    hboxaddtask.add(vboxaddtask);
    popupcreatetask.add(hboxaddtask);
};

function popupcreatetaskGlobals() {
    popupcreatetask = new kony.ui.Popup({
        "addWidgets": addWidgetspopupcreatetask,
        "id": "popupcreatetask",
        "isModal": true,
        "skin": "slPopup",
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 40,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};