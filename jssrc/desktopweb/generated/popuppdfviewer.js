function addWidgetspopuppdfviewer() {
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
        "padding": [0, 0, 0, 2],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var VBox0bca7dd256ce349 = new kony.ui.Box({
        "id": "VBox0bca7dd256ce349",
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
        "onClick": AS_Button_bf13b5ddbcb24ed7ad0577229b702386,
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
    var brwsWidget = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "id": "brwsWidget",
        "isVisible": true,
        "requestURLConfig": {
            "URL": "pdfjs-1.6.210-dist/web/pdfViewer.html",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "screenLevelWidget": false
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false
    }, {});
    VBox0bca7dd256ce349.add(HBox0f663b4ccd16b45, brwsWidget);
    hboxaddtask.add(VBox0bca7dd256ce349);
    popuppdfviewer.add(hboxaddtask);
};

function popuppdfviewerGlobals() {
    popuppdfviewer = new kony.ui.Popup({
        "addWidgets": addWidgetspopuppdfviewer,
        "id": "popuppdfviewer",
        "isModal": true,
        "skin": "slPopup",
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