
//Method to view pdf documents
function onclickViewPdf(){
  
  popuppdfviewer.show();
  
  if(isIpad){
    loadPDFWithKonyTimer(); //For ipad only with Kony timer as time out is unavailable
  }
  else{
    loadPDFPopup();
  }
  
}

//Method to load PDF
function loadPDFPopup(){
  
  setTimeout(function() { 
    popuppdfviewer.brwsWidget.evaluateJavaScript("var pdfAsArray = convertDataURIToBinary('" + printModuleConstants.base64Output + "',"+printModuleConstants.enablePrint+"); PDFViewerApplication.open(pdfAsArray);");
  },4000);
  
  /*
  popuppdfviewer.show();
  
   setTimeout(function() { 
    popuppdfviewer.brwsWidget.evaluateJavaScript("var BASE64_MARKER = ';base64,'; var pdfAsArray = convertDataURIToBinary('" + printModuleConstants.base64Output + "',"+true+"); PDFViewerApplication.open(pdfAsArray); function convertDataURIToBinary(dataURI, showPrint) { var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length; var base64 =  dataURI.substring(base64Index);var raw = window.atob(base64);var rawLength = raw.length; var array = new Uint8Array(new ArrayBuffer(rawLength));for (var i = 0; i < rawLength; i++) {array[i] = raw.charCodeAt(i);}  return array;}");
  },3000);
  */
}

function loadPDFWithKonyTimer(){
  var randId = Math.floor((Math.random()*1000) + 1);
  printModuleConstants.currentRunningTimerId = "pdfTimer"+randId;
  kony.print("onclickViewPdf:::"+printModuleConstants.currentRunningTimerId);
  kony.timer.schedule(printModuleConstants.currentRunningTimerId,function(){
    
  popuppdfviewer.brwsWidget.evaluateJavaScript("var pdfAsArray = convertDataURIToBinary('" + printModuleConstants.base64Output + "',"+printModuleConstants.enablePrint+"); PDFViewerApplication.open(pdfAsArray);");
  try{
    kony.print("loadPDFPopup:::"+printModuleConstants.currentRunningTimerId);
    kony.timer.cancel(printModuleConstants.currentRunningTimerId);
  }catch(err){
    kony.print("loadPDFPopup error with timer cancellation::"+err);
  }
    
  }, 3, false);
}


var htmlString = "";

//Method to view HTML content in browserwidget
function showHTMLContent(strhtml){
  kony.print("----- strhtml ---- "+strhtml);
  htmlString = strhtml;
  if(htmlString!==null && htmlString.trim() !==""){
    kony.timer.schedule("viewDocumentTimer",loadViewDocumentPopup, 1, false); 
    popupHTMLviewer.show();
  }else{
    alert("Please enter encrypted html string. window.btoa(document.documentElement.innerHTML);");
  }
}

//Method to load HTML content
function loadViewDocumentPopup(){
  kony.print("loadViewDocumentPopup start----->>>> "+htmlString);
  popupHTMLviewer.brwsWidget.evaluateJavaScript("showContent('" + htmlString +"');");
  try{
    kony.timer.cancel("viewDocumentTimer");
  }catch(err){
    kony.print("loadViewDocumentPopup error with timer cancellation::"+err);
  }
}

function dismissHTMLContent(){
  popupHTMLviewer.dismiss();
}