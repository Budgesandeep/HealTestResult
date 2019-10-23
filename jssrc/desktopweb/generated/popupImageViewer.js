function addWidgetspopupImageViewer() {
    var hboxviewer = new kony.ui.Box({
        "id": "hboxviewer",
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
    var VBox0feb211df39254d = new kony.ui.Box({
        "id": "VBox0feb211df39254d",
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
    var HBox0f663b4ccd16b45 = new kony.ui.Box({
        "id": "HBox0f663b4ccd16b45",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "skhboxheadergray"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT
    }, {});
    var Copybtnclosepdf0cd6ffbc5ed6f4e = new kony.ui.Button({
        "id": "Copybtnclosepdf0cd6ffbc5ed6f4e",
        "isVisible": true,
        "skin": "skbtnwhiteboldtrans"
    }, {
        "containerWeight": 96,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 1, 1, 0],
        "marginInPixel": false,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {});
    var btnclosepdf = new kony.ui.Button({
        "id": "btnclosepdf",
        "isVisible": true,
        "onClick": AS_Button_g76f2951b6d2474c997d5c355ffc015e,
        "skin": "skbtncloseimg"
    }, {
        "containerWeight": 3,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "hoverSkin": "skbtntranshover"
    });
    HBox0f663b4ccd16b45.add(Copybtnclosepdf0cd6ffbc5ed6f4e, btnclosepdf);
    var imgViewer = new kony.ui.Image2({
        "id": "imgViewer",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    VBox0feb211df39254d.add(HBox0f663b4ccd16b45, imgViewer);
    hboxviewer.add(VBox0feb211df39254d);
    popupImageViewer.add(hboxviewer);
};

function popupImageViewerGlobals() {
    popupImageViewer = new kony.ui.Popup({
        "addWidgets": addWidgetspopupImageViewer,
        "id": "popupImageViewer",
        "isModal": true,
        "skin": "sknpopupgray",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeight": 90,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_DEVICE_REFERENCE,
        "containerWeight": 90,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "minimizeOnLostFocus": false,
        "resizable": false,
        "titleBarConfig": {}
    });
};