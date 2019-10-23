function addWidgetspopupAdminSortFilter() {
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
    var vboxsortclose1 = new kony.ui.Box({
        "id": "vboxsortclose1",
        "isVisible": true,
        "onClick": AS_VBox_d7089db01b074cfb9bf563661e657dc5,
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
    vboxsortclose1.add(imgtncclose);
    hboxheader.add(lblheader, vboxsortclose1);
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
        "id": "hboxascending",
        "isVisible": true,
        "onClick": AS_HBox_0e04ed5d1a4248b9aed3596efc13dacb,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxbluebg"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 8, 10, 5],
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
    var lblascending = new kony.ui.Label({
        "id": "lblascending",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Ascending"
    }, {
        "containerWeight": 62,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxascending.add(vboxAZ, imgdownarrow, lblascending);
    var hboxdescending = new kony.ui.Box({
        "id": "hboxdescending",
        "isVisible": true,
        "onClick": AS_HBox_480ceecb3acd4bc4894459b34484a31d,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxbluebg"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [10, 0, 10, 0],
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
    var lbldescending = new kony.ui.Label({
        "id": "lbldescending",
        "isVisible": true,
        "skin": "sknlblstatuswhite",
        "text": "Descending"
    }, {
        "containerWeight": 62,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxdescending.add(vboxdescAZ, imguparrow, lbldescending);
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
        "onSelection": AS_CheckBoxGroup_37dba95bdefb4c79a2dadfecb41d4ed5,
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
        "onClick": AS_Button_c77072611d15472889a2248e1f98b558,
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
        "hoverSkin": "sknbtntranshover"
    });
    var btnfilterapply = new kony.ui.Button({
        "id": "btnfilterapply",
        "isVisible": true,
        "onClick": AS_Button_b754cf441bd942f8ada41e9e27d6d76c,
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
        "hoverSkin": "skbtntranshover"
    });
    hboxsave.add(btnfilterclear, btnfilterapply);
    vboxsortandfilter.add(hboxheader, hboxsorting, lblline, imgline, lblfilter, ScrollBox0fbb558316eb440, hboxsave);
    hboxsortandfilter.add(vboxsortandfilter);
    popupAdminSortFilter.add(hboxsortandfilter);
};

function popupAdminSortFilterGlobals() {
    popupAdminSortFilter = new kony.ui.Popup({
        "addWidgets": addWidgetspopupAdminSortFilter,
        "id": "popupAdminSortFilter",
        "isModal": true,
        "skin": "slPopup",
        "transparencyBehindThePopup": 30
    }, {
        "containerHeight": null,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
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