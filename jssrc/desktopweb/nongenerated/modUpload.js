var configFilter = null;
var config = null;
var filesQueue = []; // global variable to store filelist selected on browse
var filesize = 0;
var uploadStatusData = [];
var uploadDocumentModule = {};
//Method to browse the files for upload in Web
function onclick_selectFiles() { // Event on button click
    uploadDocumentConstants.fileObjArr = [];
    kony.print("  uploadDocumentConstants.selectedDocumentType =-------->" + uploadDocumentConstants.selectedDocumentType);
    uploadDocumentModule_processFileListObject();
}
//Method to prepare data to upload document
function uploadDocumentModule_postBase64DataProcess() {
    //process the fileObjArr and make service calls 
    filesize = 0;
    filetypearr = [];
    var count = 0;
    kony.print("uploadDocumentConstants.fileTypeArr-----" + uploadDocumentConstants.fileTypeArr);
    for (var i = 0; i < uploadDocumentConstants.fileObjArr.length; i++) {
        filesize += uploadDocumentConstants.fileObjArr[i].size;
        filetypearr.push(uploadDocumentConstants.fileObjArr[i].type);
    }
    for (var k = 0; k < filetypearr.length; k++) {
        for (var j = 0; j < uploadDocumentConstants.fileTypeArr.length; j++) {
            if (filetypearr[k].includes(uploadDocumentConstants.fileTypeArr[j])) {
                count = count + 1;
            }
        }
    }
    if (count != uploadDocumentConstants.fileObjArr.length) {
        com.healogics.utility.displayAlert(ERROR_CONSTANTS.UPLOADDOCUMENT_SUPPORTFILE_ERROR);
        return;
    }
    if (filesize > uploadDocumentConstants.fileSize) {
        com.healogics.utility.displayAlert(ERROR_CONSTANTS.UPLOADDOCUMENT_MAXSIZE_LIMIT_ERROR);
    } else {
        for (i = 0; i < uploadDocumentConstants.fileObjArr.length; i++) {
            var index = uploadDocumentConstants.fileObjArr[i].base64.indexOf(',');
            kony.print("Index value:::" + index);
            uploadDocumentConstants.base64String[i] = uploadDocumentConstants.fileObjArr[i].base64.substring(index + 1);
            var d = new Date();
            var n = d.toJSON();
            var docname = uploadDocumentConstants.fileObjArr[i].name; //n+"_"+uploadDocumentConstants.selectedDocumentType;
            uploadDocumentConstants.uploadedDocumentName = docname;
            var documentRecord = {};
            documentRecord.id = patientSummaryObjects.patientDemoGraphics.patientId;
            documentRecord.document = uploadDocumentConstants.base64String[i];
            documentRecord.userId = userInfo.userId;
            documentRecord.docType = uploadDocumentConstants.selectedDocumentType;
            documentRecord.docName = uploadDocumentConstants.uploadedDocumentName;
            var docType = uploadDocumentConstants.fileObjArr[i].type;
            if (docType == "application/pdf") {
                documentRecord.pdfFlag = true;
            } else {
                documentRecord.pageNumber = 1;
                documentRecord.lastPage = "true";
            }
            kony.print("documentRecord--------->" + JSON.stringify(documentRecord));
            uploadDocumentConstants.docWithSerialNumberObj.push(documentRecord);
        }
        show_uploadstatus();
        documentUpload.documentToUpload();
    }
}
//Method to browse files in web
var uploadDocumentModule_processFileListObject = function() {
    kony.print("uploadDocumentModule_processFileListObject start");

    function handleFileSelect(e) {
        kony.print("uploadDocumentModule_processFileListObject handleFileSelect:1::");
        if (!e.target.files || !window.FileReader) return;
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        kony.print("filesArr---->>>>>" + filesArr.length);
        var i = 0;
        filesArr.forEach(function(f) {
            kony.print("uploadDocumentModule_processFileListObject handleFileSelect:2::");
            var reader = new FileReader();
            reader.onload = function(e) {
                var fileObj = {};
                fileObj.name = f.name;
                fileObj.size = f.size;
                fileObj.type = f.type;
                fileObj.base64 = e.target.result;
                uploadDocumentConstants.fileObjArr[i++] = fileObj;
                kony.print("i == files.length::::" + i + "---" + filesArr.length);
                kony.print("Files uploaded handleFileSelect:::" + JSON.stringify(fileObj));
                if (i == filesArr.length) {
                    kony.print("inside final loop -- make other function call from here");
                    kony.print("Files uploaded handleFileSelect:::" + JSON.stringify(uploadDocumentConstants.fileObjArr));
                    uploadDocumentConstants.duplicateDocumentNames = "";
                    uploadDocumentModule.prepareDocumentsForUpload();
                }
            };
            reader.readAsDataURL(f);
        });
    }
    var fileElement = document.getElementById("konyFileElem");
    var fileElementName = "konyFileElem";
    kony.print("uploadDocumentModule_processFileListObject fileElement:::" + fileElementName);
    if (fileElement != null) {
        var fe = 0;
        fileElementName = "konyFileElem" + fe;
        fileElement = document.getElementById(fileElementName);
        while (fileElement != null) {
            fileElement.style.display = 'none';
            fileElementName = "konyFileElem" + (++fe);
            fileElement = document.getElementById(fileElementName);
        }
    }
    kony.print("uploadDocumentModule_processFileListObject fileElement:::" + fileElementName);
    if (!fileElement) {
        kony.print("uploadDocumentModule_processFileListObject fileElement:::" + fileElementName);
        htmlString = "<input type='file' multiple id='" + fileElementName + "'  accept='image/*,.pdf' style='opacity:0;width:0px;height:0px;' />";
        var wrapper = document.createElement('div');
        wrapper.innerHTML = htmlString;
        document.body.appendChild(wrapper);
        fileElement = document.getElementById(fileElementName);
        fileElement.addEventListener('change', handleFileSelect, false);
    }
    fileElement.click();
};
//Method to replace duplicate document
function frmPatientRecords_replaceDuplicateDocument() {
    var docName = popupDuplicateDocument.lblmsg.text.replace("The file ", "");
    kony.print("----- docName -----" + docName);
    docName = docName.replace(" already exists. Do you want to replace it?", "");
    kony.print("----- docName -----" + docName);
    kony.print("----- uploadDocumentConstants.duplicateDocumentNames -----" + uploadDocumentConstants.duplicateDocumentNames);
    popupDuplicateDocument.dismiss();
    uploadDocumentModule_postBase64DataProcess();
}

function frmPatientRecords_donotReplaceDuplicateDocument() {
    popupDuplicateDocument.dismiss();
}
//Method to handle duplicate documents while upload
uploadDocumentModule.prepareDocumentsForUpload = function() {
    var documentDuplicateFlag = false;
    for (var i = 0; i < uploadDocumentConstants.fileObjArr.length; i++) {
        documentDuplicateFlag = false;
        var uploadFileName = uploadDocumentConstants.fileObjArr[i].name;
        kony.print("----- uploadFileName -----" + uploadFileName);
        if (uploadDocumentConstants.duplicateDocumentNames.includes(uploadFileName)) {
            kony.print("----- continue loop -----");
            continue;
        }
        var documentList = frmPatientRecords.segmentDocuments.data;
        for (var j = 0; j < documentList.length; j++) {
            var docname = documentList[j].btnDocument.text;
            if (uploadFileName === docname) {
                documentDuplicateFlag = true;
                break;
            }
        }
        if (documentDuplicateFlag === true) {
            uploadDocumentConstants.duplicateDocumentNames = (uploadDocumentConstants.duplicateDocumentNames === "") ? uploadFileName : (uploadDocumentConstants.duplicateDocumentNames + "#@*@#" + uploadFileName);
            kony.print("Duplicate document names ----->>>>>" + uploadDocumentConstants.duplicateDocumentNames);
        }
    }
    if (uploadDocumentConstants.duplicateDocumentNames == "") {
        uploadDocumentModule_postBase64DataProcess();
    } else {
        var arrDuplicates = uploadDocumentConstants.duplicateDocumentNames.split("#@*@#");
        if (arrDuplicates.length > 1) {
            var str = "";
            for (var temp in arrDuplicates) {
                str = (str == "") ? "<p>" + arrDuplicates[temp] + "</p>" : str + "<p>" + arrDuplicates[temp] + "</p>";
            }
            popupDuplicateDocument.rchduplicatemsg.text = "<p>The following files already exists. Do you want to replace them?</p>" + str;
            popupDuplicateDocument.rchduplicatemsg.setVisibility(true);
            popupDuplicateDocument.lblmsg.setVisibility(false);
        } else {
            popupDuplicateDocument.rchduplicatemsg.setVisibility(false);
            popupDuplicateDocument.lblmsg.setVisibility(true);
            popupDuplicateDocument.lblmsg.text = "The file " + uploadDocumentConstants.duplicateDocumentNames + " already exists. Do you want to replace it?";
        }
        popupDuplicateDocument.show();
    }
};
//Mehod to show data in upload status popup
var show_uploadstatus = function() {
    kony.print("show_uploadstatus.uploadStatusData start-----" + JSON.stringify(uploadDocumentConstants.fileObjArr));
    var data1 = [];
    var final_array = [];
    uploadStatusData = [];
    var d = new Date();
    var n = moment(d).format("YYYYMMDD");
    var fileLength = uploadDocumentConstants.fileObjArr.length;
    for (i = 0; i < fileLength; i++) {
        var tempRecord;
        if (isIpad || isIphone) {
            tempRecord = {
                "lblsno": i + 1,
                "lbldocname": (uploadDocumentConstants.userDefinedName == true) ? uploadDocumentConstants.selectedDocumentName + ((i == 0 && fileLength == 1) ? "" : "_Img" + (i + 1)) : n + "_" + uploadDocumentConstants.selectedDocumentName + "_Img" + (i + 1),
                "lblstatus": "In Progress"
            };
        } else {
            tempRecord = {
                "lblsno": i + 1,
                "lbldocname": uploadDocumentConstants.fileObjArr[i].name,
                "lblstatus": "In Progress"
            };
        }
        uploadStatusData.push(tempRecord);
    }
    kony.print("show_uploadstatus.uploadStatusData -----" + JSON.stringify(uploadStatusData));
    popupuploadstatus.segstatus.setData(uploadStatusData);
    kony.print("----show_uploadstatus setting data to popup segment and show----");
    show_popupuploadstatus();
};
//Mehod to show upload status popup
var show_popupuploadstatus = function() {
        kony.print("---show_popupuploadstatus starts----uploadDocumentConstants.statusPopupVisible----" + uploadDocumentConstants.statusPopupVisible);
        if (!uploadDocumentConstants.statusPopupVisible) {
            uploadDocumentConstants.statusPopupVisible = true;
            popupuploadstatus.btnok.setEnabled(false);
            popupuploadstatus.btnok.skin = "skngraybgbold";
            popupuploadstatus.lblMsg.setVisibility(false);
            if (isIphone && uploadDocumentConstants.userDefinedName == true) {
                frmPatientDetails.txtflddocname.text = "";
            }
            popupuploadstatus.show();
        }
    }
    //Mehod to dismiss upload status popup
var dismiss_popupuploadstatus = function() {
    if (uploadDocumentConstants.statusPopupVisible) {
        uploadDocumentConstants.statusPopupVisible = false;
        popupuploadstatus.dismiss();
    }
}