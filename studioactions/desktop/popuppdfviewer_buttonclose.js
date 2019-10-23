function popuppdfviewer_buttonclose(eventobject) {
    return AS_Button_bf13b5ddbcb24ed7ad0577229b702386(eventobject);
}

function AS_Button_bf13b5ddbcb24ed7ad0577229b702386(eventobject) {
    //WOUN 1851- Resetting the scroll in the PDFViewer browser instance to 1st page, and closing the popup after a minor delay
    popuppdfviewer.brwsWidget.evaluateJavaScript("PDFViewerApplication.pdfViewer.scrollPageIntoView({pageNumber : 1});");
    popuppdfviewer.brwsWidget.evaluateJavaScript("PDFViewerApplication.page =1  ");
    setTimeout(function() {
        popuppdfviewer.dismiss();
    }, 150);
}