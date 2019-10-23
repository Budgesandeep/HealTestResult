/*
 *Name: modUploadDocuments.js
 *Purpose: For Upload documents related functionalities
 *Change Log:
 *---------------------------------------------------------------------------
 * Date              Developer            Comments
 *---------------------------------------------------------------------------
 * 04/19/2017        556600              Service integration & implementation
 *
 *
 */
var documentUpload = {};
var isUploadButtonClicked = false;
var uploadDocumentObject;
var isFailure = false;
//Method to call Upload document FFI
function frmPatientRecords_callFFIforUploadDocuments(eventObjectType) {
    isFailure = false;
    uploadDocumentConstants.fileObjArr = [];
    kony.print("----- In calliOSCacheFFI function ----- ");
    uploadDocumentConstants.clear();
    if (eventObjectType === "button") {
        var currentForm = kony.application.getCurrentForm();
        if (currentForm.id === "frmPatientDetails") {
            isUploadButtonClicked = true;
            uploadDocumentConstants.selectedDocumentType = frmPatientDetails.listboxDocType.selectedKey;
            if (uploadDocumentConstants.selectedDocumentType === null) {
                com.healogics.utility.displayAlert("Please select document type");
                return;
            }
            recordsModule.getRecords(onUploadRecordsResponseCalback, onUploadRecordsFailureCallback);
        } else {
            uploadDocumentConstants.selectedDocumentType = frmPatientRecords.listboxDocType.selectedKey;
            uploadDocumentConstants.selectedRow = recordsModule.getDocumentType(frmPatientRecords.listboxDocType.selectedKeyValue[1]);
        }
    } else {
        frmPatientRecords_segRecords_onRowClick();
        kony.print("uploadDocumentConstants.selectedDocumentName----" + uploadDocumentConstants.selectedDocumentName);
        kony.print(" uploadDocumentConstants.selectedDocumentType----" + uploadDocumentConstants.selectedDocumentType);
        kony.print(" uploadDocumentConstants.selectedDocumentType ---->>>>>> " + uploadDocumentConstants.selectedDocumentType);
        var lengthofrecord = getUploadedRecordCount();
        kony.print("lenth records" + lengthofrecord);
        if (lengthofrecord >= uploadDocumentConstants.maxDocumentsListSize) {
            com.healogics.utility.displayAlert(ERROR_CONSTANTS.UPLOADDOCUMENT_MAXFILE_LIMIT_ERROR);
        } else {
            if (uploadDocumentObject == undefined) {
                uploadDocumentObject = new DocumentUpload.uploadDocument();
            }
            //Invokes method 'openNativeiOSCamera' on the object
            uploadDocumentObject.openNativeiOSCamera(documentUpload.FFICallBackFunction);
        }
    }
}

function onUploadRecordsResponseCalback(response) {
    kony.print("onUploadRecordsResponseCalback" + JSON.stringify(response));
    kony.print("frmPatientDetails.listboxDocType.selectedKeyValue" + frmPatientDetails.listboxDocType.selectedKeyValue);
    var documentNameOptional = frmPatientDetails.txtflddocname.text;
    if (documentNameOptional != null && documentNameOptional.trim() != "") {
        uploadDocumentConstants.selectedDocumentName = documentNameOptional.trim();
        uploadDocumentConstants.userDefinedName = true;
    } else {
        uploadDocumentConstants.selectedDocumentName = com.healogics.utility.isEmpty(frmPatientDetails.listboxDocType.selectedKeyValue) ? "" : frmPatientDetails.listboxDocType.selectedKeyValue[1];
        uploadDocumentConstants.userDefinedName = false;
    }
    uploadDocumentConstants.selectedRow = com.healogics.utility.isEmpty(frmPatientDetails.listboxDocType.selectedKeyValue) ? 0 : recordsModule.getDocumentType(frmPatientDetails.listboxDocType.selectedKeyValue[1]);
    kony.print(" uploadDocumentConstants.selectedDocumentType ---->>>>>> " + uploadDocumentConstants.selectedDocumentType);
    var lengthofrecord = getUploadedRecordCount();
    kony.print("lenth records --->" + lengthofrecord);
    if (lengthofrecord >= uploadDocumentConstants.maxDocumentsListSize) {
        com.healogics.utility.displayAlert(ERROR_CONSTANTS.UPLOADDOCUMENT_MAXFILE_LIMIT_ERROR);
    } else {
        if (uploadDocumentObject == undefined) {
            uploadDocumentObject = new DocumentUpload.uploadDocument();
        }
        //Invokes method 'openNativeiOSCamera' on the object
        uploadDocumentObject.openNativeiOSCamera(documentUpload.FFICallBackFunction);
    }
    //frmPatientDetails.txtflddocname.text = "";
    isUploadButtonClicked = false;
}

function onUploadRecordsFailureCallback(response) {
    kony.print('onUploadRecordsFailureCallback' + JSON.stringify(response));
    isUploadButtonClicked = false;
}
//Call back function of FFI
documentUpload.FFICallBackFunction = function(strBase64) {
    kony.print("----- In Kony call back function ----- " + JSON.stringify(strBase64));
    if (strBase64 === undefined || strBase64 === "" || strBase64 === null || strBase64 === "null") {
        return;
    }
    var arrAllKeys = Object.keys(strBase64);
    kony.print("----- arrAllKeys ----- " + arrAllKeys);
    kony.print(" documentUpload.FFICallBackFunction ---->>>>>> " + uploadDocumentConstants.selectedDocumentType);
    var file;
    var imageRawBytes;
    var base64Image;
    var documentRecord;
    var fileObj;
    for (var index = 0; index < arrAllKeys.length; index++) {
        file = kony.io.FileSystem.getFile(strBase64[index]);
        imageRawBytes = file.read();
        base64Image = kony.convertToBase64(imageRawBytes);
        documentRecord = {};
        var d = new Date();
        var n = moment(d).format("YYYYMMDD"); //d.toJSON();
        var lengthofrecord = recordsModule.getTotalCountOfEachRecordType(uploadDocumentConstants.selectedDocumentType);
        fileObj = {};
        fileObj.name = file.name;
        var imageTimeStamp = (fileObj.name).substring(0, 18);
        if (uploadDocumentConstants.userDefinedName == true) {
            uploadDocumentConstants.uploadedDocumentName = uploadDocumentConstants.selectedDocumentName; //+"_"+n+"_"+lengthofrecord;
        } else {
            var docname = n + "_" + uploadDocumentConstants.selectedDocumentName; //+"_"+lengthofrecord;
            uploadDocumentConstants.uploadedDocumentName = docname;
        }
        if (isIphone) documentRecord.id = patientId_iPhone;
        else documentRecord.id = patientSummaryObjects.patientDemoGraphics.patientId;
        documentRecord.pageNumber = index + 1;
        documentRecord.image_Timestamp = imageTimeStamp; //CO-13
        documentRecord.document = base64Image;
        documentRecord.userId = userInfo.userId;
        documentRecord.docType = uploadDocumentConstants.selectedDocumentType;
        documentRecord.docName = uploadDocumentConstants.uploadedDocumentName;
        documentRecord.documentCreatedDate = convertCurrentToEDTTime(false, false);
        kony.print("----- documentRecord.documentCreatedDate ----- " + documentRecord.documentCreatedDate);
        if (index + 1 === arrAllKeys.length) {
            documentRecord.lastPage = "true";
        } else {
            documentRecord.lastPage = "false";
        }
        uploadDocumentConstants.fileObjArr[index] = fileObj;
        uploadDocumentConstants.docWithSerialNumberObj.push(documentRecord);
        file.remove(true);
    }
    if (uploadDocumentObject == undefined) {
        uploadDocumentObject = new DocumentUpload.uploadDocument();
    }
    uploadDocumentObject.deleteAllCachedImages();
    if ((isIpad || isIphone) && SYNC_CONSTANTS.isAppOffline) {
        kony.print("----Store in DB----");
    } else {
        show_uploadstatus();
    }
    documentUpload.documentToUpload();
};
documentUpload.documentToUpload = function() {
    var tempDocumentRecord = uploadDocumentConstants.docWithSerialNumberObj[uploadDocumentConstants.uploadedDocumentsCount];
    kony.print("tempDocumentRecord------>>>>>" + tempDocumentRecord.pageNumber);
    if (com.healogics.utility.listContainsValue("pdfFlag", Object.keys(tempDocumentRecord))) {
        documentUpload.uploadPdfDocuments(tempDocumentRecord);
    } else {
        if (isIpad || isIphone) {
          ///Sandeep offline changes
          documentUpload.uploadDocuments(tempDocumentRecord);
           // photoUpload_offline.createNewPhotoOffline(tempDocumentRecord);
        } else {
            documentUpload.uploadDocuments(tempDocumentRecord);
        }
    }
};
//Upload document service call for PDF
documentUpload.uploadPdfDocuments = function(documentRecord) {
    kony.print("----- In documentUpload.uploadPdfDocuments starts -----");
    var inputData = {
        "id": documentRecord.id,
        "userId": documentRecord.userId,
        "accessToken": userInfo.accessToken,
        "docType": documentRecord.docType,
        "docName": documentRecord.docName,
        "document": documentRecord.document,
        "pdfFlag": documentRecord.pdfFlag,
        "image_Timestamp": documentRecord.image_Timestamp
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_UPLOADPDFDOCUMENT, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
        "patientId": documentRecord.userId,
      	"facilityId" : userInfo.presentFacilityId,
		"userId" : userInfo.userId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
    }, inputData, documentUpload.uploadDocumentSuccessCallBack, documentUpload.uploadDocumentFailureCallBack, false);
};
//Upload document service call
documentUpload.uploadDocuments = function(documentRecord) {
    kony.print("----- In documentUpload.uploadDocuments starts -----");
    var inputData = {
        "id": documentRecord.id,
        "pageNumber": documentRecord.pageNumber,
        "image_Timestamp": documentRecord.image_Timestamp,
        "userId": documentRecord.userId,
        "lastPage": documentRecord.lastPage,
        "accessToken": userInfo.accessToken,
        "docType": documentRecord.docType,
        "docName": documentRecord.docName,
        "document": documentRecord.document
    };
    com.healogics.mfutility.invokeIntegrationService(MF_SERVICECONSTANTS.SERVICE_NAME_ACTUAL, MF_SERVICECONSTANTS.OPERATION_NAME_UPLOADDOCUMENT, {
        "Content-Type": "application/json",
        "Authorization": userInfo.headerAccessToken,
      	"patientId" : documentRecord.userId,
      	"facilityId" : userInfo.presentFacilityId,
		"userId" : userInfo.userId,
		"userName" : userInfo.userName,
		"deviceType" : userInfo.deviceType,
		"deviceId" : userInfo.sessionId
    }, inputData, documentUpload.uploadDocumentSuccessCallBack, documentUpload.uploadDocumentFailureCallBack, false);
};
//Upload document service call Success callBack 
documentUpload.uploadDocumentSuccessCallBack = function(response) {
    if (response !== null && response.opstatus === 0 && response.statuscode == "200") {
        kony.print("uploadDocumentSuccessCallBack response:::" + JSON.stringify(response));
        var statusMsg = "Success";
        loadSegmentData(statusMsg);
        recordsModule.getRecords(function(a) {}, function(b) {});
        uploadDocumentConstants.inputDocumentType = recordListConstants.recordList[uploadDocumentConstants.selectedRow].documentType;
        frmPatientRecords_getDocumentList();
        kony.print("uploadDocumentConstants.uploadedDocumentsCount before increment------->" + uploadDocumentConstants.uploadedDocumentsCount);
        uploadDocumentConstants.uploadedDocumentsCount = uploadDocumentConstants.uploadedDocumentsCount + 1;
        kony.print("uploadDocumentConstants.uploadedDocumentsCount after increment------->" + uploadDocumentConstants.uploadedDocumentsCount);
        if (uploadDocumentConstants.uploadedDocumentsCount === uploadDocumentConstants.docWithSerialNumberObj.length) {
            if (isFailure && !isIpad && !isIphone) {
                popupuploadstatus.lblMsg.text = ERROR_CONSTANTS.UPLOADDOCUMENT_UPLOAD_GENERAL_ERROR;
                popupuploadstatus.lblMsg.setVisibility(true);
            }
            popupuploadstatus.btnok.skin = "sknbtnbluebg100";
            popupuploadstatus.btnok.hoverSkin = "skbtntranshover";
            popupuploadstatus.btnok.setEnabled(true);
            if (isIpad || isIphone) {
                if (SYNC_CONSTANTS.isAppOffline) {
                    popupSyncIncomplete.lblHeader.text = "Upload Documents";
                    popupSyncIncomplete.lblmessage.text = "Your changes have been saved locally and will be sent to the server on the next sync.";
                    popupSyncIncomplete.show();
                } else {
                    com.healogics.utility.showLoading(); ///COMMENTED
                    modSyncScopes_offline_photoUpload();
                    syncInitialDownload(sync_notesSuccessCallback, sync_notesErrorCallBack);
                }
            }
        } else {
            documentUpload.documentToUpload();
        }
    } else {
        isFailure = true;
        var statusMsg = "Failure";
        loadSegmentData(statusMsg);
        if (!isIpad && !isIphone) {
            if (response != null && response.responsedesc != null && response.responsedesc != "") {
                documentUpload.failedMaxLimitError(response.responsedesc);
            } else {
                uploadDocumentConstants.uploadedDocumentsCount = uploadDocumentConstants.uploadedDocumentsCount + 1;
                if (uploadDocumentConstants.uploadedDocumentsCount !== uploadDocumentConstants.docWithSerialNumberObj.length) {
                    documentUpload.documentToUpload();
                } else {
                    if (isFailure) {
                        popupuploadstatus.lblMsg.text = ERROR_CONSTANTS.UPLOADDOCUMENT_UPLOAD_GENERAL_ERROR;
                        popupuploadstatus.lblMsg.setVisibility(true);
                    }
                    popupuploadstatus.btnok.skin = "sknbtnbluebg100";
                    popupuploadstatus.btnok.hoverSkin = "skbtntranshover";
                    popupuploadstatus.btnok.setEnabled(true);
                }
            }
        } else {
            //iPhone or iPad
            uploadFailedData();
            popupuploadstatus.lblMsg.text = "Upload Failed.Please try again.";
            popupuploadstatus.lblMsg.setVisibility(true);
            popupuploadstatus.btnok.skin = "sknbtnbluebg100";
            popupuploadstatus.btnok.hoverSkin = "skbtntranshover";
            popupuploadstatus.btnok.setEnabled(true);
        }
        showError = true;
        var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
        if (response !== null && response.opstatus !== 0 && response.errmsg !== null) {
            error_label = response.errmsg;
        }
    }
};
//Upload document service call Failure callBack 
documentUpload.uploadDocumentFailureCallBack = function(response) {
    kony.print(" documentUpload.uploadDocumentFailureCallBack starts------>");
    isFailure = true;
    var statusMsg = "Failure";
    loadSegmentData(statusMsg);
    if (!isIpad && !isIphone) {
        if (response != null && response.responsedesc != null && response.responsedesc != "") {
            documentUpload.failedMaxLimitError(response.responsedesc);
        } else {
            uploadDocumentConstants.uploadedDocumentsCount = uploadDocumentConstants.uploadedDocumentsCount + 1;
            if (uploadDocumentConstants.uploadedDocumentsCount !== uploadDocumentConstants.docWithSerialNumberObj.length) {
                documentUpload.documentToUpload();
            } else {
                if (isFailure) {
                    popupuploadstatus.lblMsg.text = ERROR_CONSTANTS.UPLOADDOCUMENT_UPLOAD_GENERAL_ERROR;
                    popupuploadstatus.lblMsg.setVisibility(true);
                }
                popupuploadstatus.btnok.skin = "sknbtnbluebg100";
                popupuploadstatus.btnok.hoverSkin = "skbtntranshover";
                popupuploadstatus.btnok.setEnabled(true);
            }
        }
    } else {
        //Iphone or Ipad
        uploadFailedData();
        popupuploadstatus.lblMsg.text = "Upload Failed. Please try again.";
        popupuploadstatus.lblMsg.setVisibility(true);
        popupuploadstatus.btnok.skin = "sknbtnbluebg100";
        popupuploadstatus.btnok.hoverSkin = "skbtntranshover";
        popupuploadstatus.btnok.setEnabled(true);
    }
    kony.print("In documentUpload.uploadDocumentFailureCallBack ----->>>>>" + JSON.stringify(response));
    var error_label = ERROR_CONSTANTS.GENERAL_ERROR_MESSAGE;
    if (response !== null && (response.opstatus === 8009 || response.error === GENERAL_CONSTANTS.INVALID_TOKEN)) {
        error_label = ERROR_CONSTANTS.SESSION_EXPIRED_MESSAGE;
        loginModule.showLoginScreen(error_label);
    } else {
        //com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
    }
};
//Document upload failed case -- error from service response
documentUpload.failedMaxLimitError = function(diplayError) {
    popupuploadstatus.lblMsg.text = diplayError;
    popupuploadstatus.lblMsg.setVisibility(true);
    popupuploadstatus.btnok.skin = "sknbtnbluebg100";
    popupuploadstatus.btnok.hoverSkin = "skbtntranshover";
    uploadFailedData();
    popupuploadstatus.btnok.setEnabled(true);
    uploadDocumentConstants.clear();
};
var uploadFailedData = function() {
    var statusData = popupuploadstatus.segstatus.data;
    kony.print("uploadFailedData------ statusData---" + JSON.stringify(statusData));
    for (var i = 0; i < statusData.length; i++) {
        if (statusData[i].lblstatus == "In Progress") {
            statusData[i].lblstatus = "Failure";
        }
    }
    kony.print("uploadFailedData------ statusData--- after----" + JSON.stringify(statusData));
    popupuploadstatus.segstatus.removeAll();
    popupuploadstatus.segstatus.setData(statusData);
    kony.print("uploadFailedData --->" + JSON.stringify(popupuploadstatus.segstatus.data));
};
var loadSegmentData = function(status) {
    var data = popupuploadstatus.segstatus.data;
    kony.print("data-------------" + JSON.stringify(data));
    kony.print("uploadDocumentConstants.uploadedDocumentsCount before loop------->" + uploadDocumentConstants.uploadedDocumentsCount);
    if (data !== null) {
        kony.print("segment data---->" + JSON.stringify(data));
        for (i = 0; i < data.length; i++) {
            if (i === uploadDocumentConstants.uploadedDocumentsCount) {
                kony.print("i------>" + i);
                kony.print("uploadDocumentConstants.uploadedDocumentsCount------->" + uploadDocumentConstants.uploadedDocumentsCount);
                data[i].lblstatus = status;
                kony.print("----------in success after-----" + data[i].lblstatus);
            }
        }
        popupuploadstatus.segstatus.removeAll();
        popupuploadstatus.segstatus.setData(data);
        kony.print("after success--->" + JSON.stringify(popupuploadstatus.segstatus.data));
    }
};
var pdfViewer_iPad = function(base64String) {
    var uploadDocumentObject = new DocumentUpload.uploadDocument();
    uploadDocumentObject.showPDFViewer(base64String);
};
////For the photo upload successcallback and then start the data download for patient
function photoUpload_SuccessCallback() {
    dismissLoadingScreen();
    com.healogics.utility.showLoading("Downloading Patient Data!");
    modSyncScopes_offline_patientRecords();
    syncInitialDownload(sync_notesSuccessCallback, sync_notesErrorCallBack);
}