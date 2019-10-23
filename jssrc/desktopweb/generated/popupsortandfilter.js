function addWidgetspopupsortandfilter() {
    var hboxsortandfilter = new kony.ui.Box({
        "id": "hboxsortandfilter",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhbwhitebgbrdr"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vboxsortandfilter = new kony.ui.Box({
        "id": "vboxsortandfilter",
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
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblheader = new kony.ui.Label({
        "id": "lblheader",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Sorting"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vboxsortclose = new kony.ui.Box({
        "id": "vboxsortclose",
        "isVisible": true,
        "onClick": AS_VBox_4618db5962c84684a9bd856a4072fbaf,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 23,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skvboxhover"
    });
    var imgtncclose = new kony.ui.Image2({
        "id": "imgtncclose",
        "isVisible": true,
        "skin": "slImage",
        "src": "closepopup.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxsortclose.add(imgtncclose);
    hboxheader.add(lblheader, vboxsortclose);
    var hboxsorting = new kony.ui.Box({
        "id": "hboxsorting",
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
    var vboxsorting = new kony.ui.Box({
        "id": "vboxsorting",
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
    var lblsort = new kony.ui.Label({
        "id": "lblsort",
        "isVisible": false,
        "skin": "sklblblackbold",
        "text": "Sorting"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [3, 5, 0, 5],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hboxascending = new kony.ui.Box({
        "focusSkin": "skhboxbluebg",
        "id": "hboxascending",
        "isVisible": true,
        "onClick": AS_HBox_0b8d7c74e5ca4d019959c56aed3af638,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxbluebg"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [5, 8, 5, 5],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "hoverSkin": "skhboxhover"
    });
    var vboxAZ = new kony.ui.Box({
        "id": "vboxAZ",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 25,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [5, 0, 0, 0],
        "marginInPixel": false,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lbla = new kony.ui.Label({
        "id": "lbla",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "A"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [10, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblz = new kony.ui.Label({
        "id": "lblz",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Z"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [10, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxAZ.add(lbla, lblz);
    var imguparrow = new kony.ui.Image2({
        "id": "imguparrow",
        "isVisible": true,
        "skin": "slImage",
        "src": "uparrowwhite.png"
    }, {
        "containerWeight": 13,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblascending = new kony.ui.Label({
        "id": "lblascending",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Ascending"
    }, {
        "containerWeight": 54,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxascending.add(vboxAZ, imguparrow, lblascending);
    var hboxdescending = new kony.ui.Box({
        "focusSkin": "skhboxbluebg",
        "id": "hboxdescending",
        "isVisible": true,
        "onClick": AS_HBox_469a560f2669470b99e5dda78a48acaa,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxbluebg"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [5, 0, 5, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "hoverSkin": "skhboxhover"
    });
    var vboxdescAZ = new kony.ui.Box({
        "id": "vboxdescAZ",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slVbox"
    }, {
        "containerWeight": 25,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [5, 0, 0, 0],
        "marginInPixel": false,
        "padding": [10, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lbldesa = new kony.ui.Label({
        "id": "lbldesa",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Z"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [10, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbldesz = new kony.ui.Label({
        "id": "lbldesz",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "A"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [10, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vboxdescAZ.add(lbldesa, lbldesz);
    var imgdownarrow = new kony.ui.Image2({
        "id": "imgdownarrow",
        "isVisible": true,
        "skin": "slImage",
        "src": "downarrowwhite.png"
    }, {
        "containerWeight": 13,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbldescending = new kony.ui.Label({
        "id": "lbldescending",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Descending"
    }, {
        "containerWeight": 54,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxdescending.add(vboxdescAZ, imgdownarrow, lbldescending);
    vboxsorting.add(lblsort, hboxascending, hboxdescending);
    hboxsorting.add(vboxsorting);
    var lblline = new kony.ui.Label({
        "id": "lblline",
        "isVisible": false,
        "skin": "sklblline"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [5, 5, 5, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgline = new kony.ui.Image2({
        "id": "imgline",
        "isVisible": true,
        "skin": "slImage",
        "src": "divider.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 5, 0, 0],
        "marginInPixel": false,
        "padding": [0, 5, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblfilter = new kony.ui.Label({
        "id": "lblfilter",
        "isVisible": true,
        "skin": "sklblblackbold",
        "text": "Filter"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 2, 1, 2],
        "marginInPixel": false,
        "padding": [2, 2, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var ScrollBox0fbb558316eb440 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "ScrollBox0fbb558316eb440",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_PARENT_WIDTH,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false,
        "percent": false
    }, {});
    var CheckBoxGroupFilterPopUp = new kony.ui.CheckBoxGroup({
        "id": "CheckBoxGroupFilterPopUp",
        "isVisible": true,
        "masterData": [
            ["cbg1", "Checkbox"],
            ["cbg2", "Checkbox"],
            ["cbg3", "Checkbox"],
            ["Key849", "Value"],
            ["Key463", "Value"],
            ["Key479", "Value"],
            ["Key659", "Value"],
            ["Key400", "Value"],
            ["Key326", "Value"]
        ],
        "onSelection": AS_CheckBoxGroup_3b33280f9eb9496da0eb39c39cf9696d,
        "skin": "CheckBoxGroupFilterPopUpCustomSkin"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "hoverSkin": "CheckBoxGroupFilterPopUpHover"
    });
    ScrollBox0fbb558316eb440.add(CheckBoxGroupFilterPopUp);
    var hboxsave = new kony.ui.Box({
        "id": "hboxsave",
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
    var btnfilterclear = new kony.ui.Button({
        "id": "btnfilterclear",
        "isVisible": true,
        "onClick": AS_Button_479981452258472fa32521612c5cd8aa,
        "skin": "skngraybg",
        "text": "Clear"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [15, 5, 2, 5],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skngraybghover"
    });
    var btnfilterapply = new kony.ui.Button({
        "focusSkin": "sknbtnbluebgrnd",
        "id": "btnfilterapply",
        "isVisible": true,
        "onClick": AS_Button_4f4bb9f9524245348b4bf40237bde71c,
        "skin": "sknbtnbluebgrnd",
        "text": "Apply"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 2, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "sknbtnbluebgrndhover"
    });
    hboxsave.add(btnfilterclear, btnfilterapply);
    vboxsortandfilter.add(hboxheader, hboxsorting, lblline, imgline, lblfilter, ScrollBox0fbb558316eb440, hboxsave);
    hboxsortandfilter.add(vboxsortandfilter);
    popupsortandfilter.add(hboxsortandfilter);
};

function popupsortandfilterGlobals() {
    popupsortandfilter = new kony.ui.Popup({
        "addWidgets": addWidgetspopupsortandfilter,
        "id": "popupsortandfilter",
        "isModal": true,
        "skin": "slPopup",
        "transparencyBehindThePopup": 30
    }, {
        "containerWeight": 15,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};