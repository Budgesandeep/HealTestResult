/*
 *Name: modDynamicWounds360.js
 *Purpose: For Wound List Data related functionalities
 *Change Log:
 *---------------------------------------------------------------------------
 * Date              Developer            Comments
 *---------------------------------------------------------------------------
 * 01/19/2017        556600             Dynamic creation of wound data Logic
 *
 *
 */
var woundCount = 0;
var woundsSelected = [];
//Method to create Wound List dynamically based on service response
var frmPatientSummary_addWound360Column = function() {
    if (!isIpad) {
        frmPatientSummary.fscwound360table.left = "75%";
        frmPatientSummary.fscwound360table.width = "28%";
    }
    var widthlblwound;
    var leftfcpicture;
    var widthimgpicture;
    var leftlbllinesep;
    var leftfccheckuncheck;
    var lmsrLabel = "";
    if (!isIpad) {
        widthlblwound = "142px"; //CO-647 changes   //kony.flex.USE_PREFFERED_SIZE,
        leftfcpicture = "0";
        widthimgpicture = "24px";
        leftlbllinesep = "0";
        leftfccheckuncheck = "0";
    } else {
        widthlblwound = "148px"; //kony.flex.USE_PREFFERED_SIZE;
        leftfcpicture = leftPaddingFactor;
        widthimgpicture = kony.flex.USE_PREFFERED_SIZE;
        leftlbllinesep = (lmsrLabel.length > 15) ? "0%" : "2%";
        leftfccheckuncheck = (lmsrLabel.length > 15) ? "0%" : "1%";
    }
    frmPatientSummary.fscwound360table.removeAll();
    for (var i = 1; i <= woundCount; i++) {
        kony.print("patientSummaryObjects.woundDescriptionDetails[i] ------>>> " + JSON.stringify(patientSummaryObjects.woundDescriptionDetails[i - 1]));
        var fscwounds = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "top": "0%",
            "clipBounds": true,
            "id": "fscwounds" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fscwounds.setDefaultUnit(kony.flex.DP);
        var fcwoundhdr = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcwoundhdr" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "sknfctransbggraybrdrnd",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcwoundhdr.setDefaultUnit(kony.flex.DP);
        var fcexpandarrow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "fcexpandarrow" + i,
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": AS_FlexContainer_ce132c3bb2494140834415fb39bc3832,
            "skin": "slFbox",
            "top": "0dp",
            "width": "14%",
            "zIndex": 1
        }, {}, {});
        fcexpandarrow.setDefaultUnit(kony.flex.DP);
        var imgexpandarrow = new kony.ui.Image2({
            "id": "imgexpandarrow" + i,
            "isVisible": true,
            "left": "15dp",
            "skin": "slImage",
            "src": "sidearrow.png",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fcexpandarrow.add(imgexpandarrow);
        var leftPaddingFactor = (patientSummaryObjects.woundDescriptionDetails[i - 1].woundno.length < 2) ? "30%" : "27%";
        if (patientSummaryObjects.woundDescriptionDetails[i - 1].wound_review_flag != "") {
            var lmsrLabel = frmPatientSummary_getWoundMSRStatus(i - 1);
            //lmsrLabel = " ("+patientSummaryObjects.woundDescriptionDetails[i-1].wound_review_flag+")";
            if (lmsrLabel.length > 15) {
                leftPaddingFactor = "0%";
            } else if (lmsrLabel.length > 6) {
                leftPaddingFactor = (patientSummaryObjects.woundDescriptionDetails[i - 1].woundno.length < 2) ? "2%" : "0%";
            } else {
                leftPaddingFactor = (patientSummaryObjects.woundDescriptionDetails[i - 1].woundno.length < 2) ? "15%" : "12%";
            }
        }
        var lblwound = new kony.ui.Label({
            "id": "lblwound" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblbluebold80",
            "text": "Wound " + patientSummaryObjects.woundDescriptionDetails[i - 1].woundno + lmsrLabel, //i,
            "top": "14dp",
            "width": widthlblwound, //"142px", //CO-647 changes   //kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        lblwound.skin = frmPatientSummary_setWoundLabelColor(parseInt(patientSummaryObjects.woundDescriptionDetails[i - 1].woundno));
        var fcpicture = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "fcpicture" + i,
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": leftfcpicture, //"0",//CO-647 changes . //leftPaddingFactor, //(i<10) ? "24%" : "21.5%",
            "onClick": AS_FlexContainer_5275e381dba14212871827e616dfbb03,
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        fcpicture.setDefaultUnit(kony.flex.DP);
        var imgpicture = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "id": "imgpicture" + i,
            "isVisible": true,
            "skin": "slImage",
            "src": "image.png",
            "height": "75%",
            "width": widthimgpicture, //"24px",// imgpicture////CO-647 changes    kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fcpicture.add(imgpicture);
        var lbllinesep = new kony.ui.Label({
            "height": "25dp",
            "id": "lbllinesep" + i,
            "isVisible": true,
            "left": leftlbllinesep, //  "0",     ////CO-647 changes  (lmsrLabel.length > 15) ? "0%" : "2%",
            "skin": "sklblline",
            "top": "8dp",
            "width": "1dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var fccheckuncheck = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "fccheckuncheck" + i,
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": leftfccheckuncheck, //"0", ////CO-647 changes .  (lmsrLabel.length > 15) ? "0%" : "1%",
            "right": "2%",
            "onClick": AS_FlexContainer_8b671ca2ea9840ef97f7e7ad832f229e,
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        fccheckuncheck.setDefaultUnit(kony.flex.DP);
        var imgcheckuncheck = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "id": "imgcheckuncheck" + i,
            "isVisible": true,
            "skin": "slImage",
            "src": "checkboxunselected.png",
            "height": "75%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fccheckuncheck.add(imgcheckuncheck);
        fcwoundhdr.add(fcexpandarrow, lblwound, fcpicture, lbllinesep, fccheckuncheck);
        var fcwounddesc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcwounddesc" + i,
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "sknfctransbggraybrdrnd",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcwounddesc.setDefaultUnit(kony.flex.DP);
        var fcdressing = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcdressing" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcdressing.setDefaultUnit(kony.flex.DP);
        var lbldressing = new kony.ui.Label({
            "id": "lbldressing" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Dressing:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbldressingvalue = new kony.ui.Label({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "lbldressingvalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": healing9StepDataModule.wordWrapCheck((com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].dressing)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].dressing),
            "top": "5dp",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {
            wrapping: constants.WIDGET_TEXT_CHAR_WRAP
        });
        fcdressing.add(lbldressing, lbldressingvalue);
        var fcetiology = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcetiology" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcetiology.setDefaultUnit(kony.flex.DP);
        var lbletiology = new kony.ui.Label({
            "id": "lbletiology" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Etiology:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbletiologyvalue = new kony.ui.Label({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "lbletiologyvalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": healing9StepDataModule.wordWrapCheck((com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].etiology)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].etiology),
            "top": "5dp",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {
            wrapping: constants.WIDGET_TEXT_CHAR_WRAP
        });
        fcetiology.add(lbletiology, lbletiologyvalue);
        var fcclass = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcclass" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcclass.setDefaultUnit(kony.flex.DP);
        var lblclass = new kony.ui.Label({
            "id": "lblclass" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Classification:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblclasssvalue = new kony.ui.Label({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "lblclasssvalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": healing9StepDataModule.wordWrapCheck((com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].class_value)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].class_value),
            "top": "5dp",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {
            wrapping: constants.WIDGET_TEXT_CHAR_WRAP
        });
        fcclass.add(lblclass, lblclasssvalue);
        var fclocation = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fclocation" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fclocation.setDefaultUnit(kony.flex.DP);
        var lbllocation = new kony.ui.Label({
            "id": "lbllocation" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Location:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbllocationvalue = new kony.ui.Label({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "id": "lbllocationvalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": healing9StepDataModule.wordWrapCheck((com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].location)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].location),
            "top": "5dp",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {
            wrapping: constants.WIDGET_TEXT_CHAR_WRAP
        });
        fclocation.add(lbllocation, lbllocationvalue);
        var fcarea = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcarea" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcarea.setDefaultUnit(kony.flex.DP);
        var lblarea = new kony.ui.Label({
            "id": "lblarea" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Area:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var areaValue = (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].area)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].area;
        areaValue = areaValue.substr(0, areaValue.length - 1);
        var fcareaValue = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "id": "fcareaValue" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "top": "5dp",
            "width": "45%",
            "height": "16dp",
            "zIndex": 1
        }, {}, {});
        fcareaValue.setDefaultUnit(kony.flex.DP);
        var lblareavalue = new kony.ui.Label({
            "id": "lblareavalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": areaValue,
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "height": "16dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblareaunits = new kony.ui.Label({
            "id": "lblareaunits" + i,
            "isVisible": true,
            "left": "1dp",
            "skin": "sknlblgray60",
            "text": (areaValue === "") ? "" : "2",
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fcareaValue.add(lblareavalue, lblareaunits);
        fcarea.add(lblarea, fcareaValue);
        var fcareachange = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcareachange" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcareachange.setDefaultUnit(kony.flex.DP);
        var lblareachange = new kony.ui.Label({
            "id": "lblareachange" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Area Change:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblareachangevalue = new kony.ui.Label({
            "id": "lblareachangevalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].areaChange)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].areaChange,
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fcareachange.add(lblareachange, lblareachangevalue);
        if (frmPatientSummary.btnunits.text === "Area") {
            lblarea.text = "Area:";
            areaValue = (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].area)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].area;
            lblareavalue.text = areaValue.substr(0, areaValue.length - 1);
            lblareaunits.text = (areaValue === "") ? "" : "2";
            lblareachange.text = "Area Change:";
            lblareachangevalue.text = (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].areaChange)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].areaChange;
        } else {
            lblarea.text = "Volume:";
            areaValue = (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].vol)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].vol;
            lblareavalue.text = areaValue.substr(0, areaValue.length - 1);
            lblareaunits.text = (areaValue === "") ? "" : "3";
            lblareachange.text = "Volume Change:";
            lblareachangevalue.text = (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].volChange)) ? "" : patientSummaryObjects.woundDescriptionDetails[i - 1].volChange;
        }
        var fcdateacquired = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcdateacquired" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcdateacquired.setDefaultUnit(kony.flex.DP);
        var lbldateacquired = new kony.ui.Label({
            "id": "lbldateacquired" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Date Acquired:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbldateacquiredvalue = new kony.ui.Label({
            "id": "lbldateacquiredvalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].dateAcquired)) ? "" : frmPatientSummary_formatDateAcquired(patientSummaryObjects.woundDescriptionDetails[i - 1].dateAcquired),
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fcdateacquired.add(lbldateacquired, lbldateacquiredvalue);
        var fcweeksintreatment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "fcweeksintreatment" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcweeksintreatment.setDefaultUnit(kony.flex.DP);
        var lblweeksintreatment = new kony.ui.Label({
            "id": "lblweeksintreatment" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": "Weeks In Treatment:",
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblweeksintreatmentvalue = new kony.ui.Label({
            "id": "lblweeksintreatmentvalue" + i,
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblgray80",
            "text": (com.healogics.utility.isEmpty(patientSummaryObjects.woundDescriptionDetails[i - 1].weeksInTreatment)) ? "" : frmPatientSummary_appendWeeksText(patientSummaryObjects.woundDescriptionDetails[i - 1].weeksInTreatment),
            "top": "5dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fcweeksintreatment.add(lblweeksintreatment, lblweeksintreatmentvalue);
        var fcempty = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "fcempty" + i,
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        fcempty.setDefaultUnit(kony.flex.DP);
        fcempty.add();
        fcwounddesc.add(fcdressing, fcetiology, fcclass, fclocation, fcarea, fcareachange, fcdateacquired, fcweeksintreatment, fcempty);
        fscwounds.add(fcwoundhdr, fcwounddesc);
        frmPatientSummary.fscwound360table.add(fscwounds);
        fccheckuncheck.hoverSkin = "sknfcTransHover";
        fcpicture.hoverSkin = "sknfcTransHover";
        fcexpandarrow.hoverSkin = "sknfcTransHover";
    }
    frmPatientSummary.forceLayout();
};
//Method to set wound color in wound list
var frmPatientSummary_setWoundLabelColor = function(i) {
    try {
        if (i % 12 === 1) {
            return patientSummaryObjects.arrwoundListColors[0];
        } else if (i % 12 === 2) {
            return patientSummaryObjects.arrwoundListColors[1];
        } else if (i % 12 === 3) {
            return patientSummaryObjects.arrwoundListColors[2];
        } else if (i % 12 === 4) {
            return patientSummaryObjects.arrwoundListColors[3];
        } else if (i % 12 === 5) {
            return patientSummaryObjects.arrwoundListColors[4];
        } else if (i % 12 === 6) {
            return patientSummaryObjects.arrwoundListColors[5];
        } else if (i % 12 === 7) {
            return patientSummaryObjects.arrwoundListColors[6];
        } else if (i % 12 === 8) {
            return patientSummaryObjects.arrwoundListColors[7];
        } else if (i % 12 === 9) {
            return patientSummaryObjects.arrwoundListColors[8];
        } else if (i % 12 === 10) {
            return patientSummaryObjects.arrwoundListColors[9];
        } else if (i % 12 === 11) {
            return patientSummaryObjects.arrwoundListColors[10];
        } else {
            return patientSummaryObjects.arrwoundListColors[11];
        }
    } catch (error) {
        return patientSummaryObjects.arrwoundListColors[11];
    }
};
//Method to expand/collapse wound description
function frmPatientSummary_showHideFcWoundDescription(eventobject) {
    searchPatient_closeSearchList();
    var evenObjectId;
    if (isIpad && !isNetworkAvailable()) {} else {
        evenObjectId = eventobject.id;
        var index = evenObjectId.replace("fcexpandarrow", "");
        if (frmPatientSummary["fcwounddesc" + index].isVisible) {
            frmPatientSummary["fcwounddesc" + index].setVisibility(false);
            frmPatientSummary["imgexpandarrow" + index].src = "sidearrow.png";
        } else {
            frmPatientSummary["fcwounddesc" + index].setVisibility(true);
            frmPatientSummary["imgexpandarrow" + index].src = "headerarrow.png";
        }
        var indexNum = parseInt(index);
        for (var i = 1; i <= woundCount; i++) {
            if (indexNum !== i) {
                var currentIndex = i.toString();
                if (frmPatientSummary["fcwounddesc" + i].isVisible) {
                    frmPatientSummary["fcwounddesc" + i].setVisibility(false);
                    frmPatientSummary["imgexpandarrow" + i].src = "sidearrow.png";
                }
            }
        }
    }
    frmPatientSummary.forceLayout();
}
//Method to select/unselect wound from wound list
function frmPatientSummary_checkuncheck(eventobject) {
    com.healogics.utility.showLoading();
    searchPatient_closeSearchList();
    //Sandeep offline changes for chart
    if (isIpad && !isNetworkAvailable()) {
        var error_label = ERROR_CONSTANTS.NO_NETWORK_CONNECTION;
        com.healogics.utility.showErrorAlert(error_label, GENERAL_CONSTANTS.TEXT_CLOSE);
        com.healogics.utility.dismissLoading();
    } else {
        var evenObjectId = eventobject.id;
        if (evenObjectId === "fccheckuncheck1stload") {
            evenObjectId = "fccheckuncheck1";
        }
        //Sandeep offline changes for chart on 23 may
        if (evenObjectId !== "fccheckuncheck1stload") {
            var selectedRange = kony.store.getItem(userInfo.userId + "_summaryWeekRange");
            //if(flagcheck ==true && eventobject.id !== "fccheckuncheck1stload"){
            //if(eventobject.id !== "fccheckuncheck1stload"){
            kony.print("in else wound selected or not first time load");
            // if(selectedRange!=null){
            //     	OnclickTimeline(selectedRange);  
            //        frmPatientSummary.forceLayout();
            //     }
            // 	  else{
            // 	    	OnclickTimeline(12);
            // 	     frmPatientSummary.forceLayout();
            //}
        } else {
            kony.print("wound unselected or first time loaded");
            frmPatientSummary_WoundSummaryChart();
            frmPatientSummary.forceLayout();
        }
        kony.print("Doll evenObjectId" + evenObjectId);
        var tempindex = evenObjectId.replace("fccheckuncheck", "");
        kony.print("tempindex: --->>>" + tempindex);
        var selectedWoundNum = patientSummaryObjects.woundDescriptionDetails[parseInt(tempindex) - 1].woundno;
        //kony.print("gbl_PatientData in CheckUncheck>>>"+JSON.stringify(gbl_PatientData));
        kony.print("In CheckUncheck patientSummaryObjects.woundDescriptionDetails>>" + JSON.stringify(patientSummaryObjects.woundDescriptionDetails));
        kony.print("In CheckUncheck patientSummaryObjects.patientListAndGraphData>>" + JSON.stringify(patientSummaryObjects.patientListAndGraphData));
        kony.print("selectedWoundNum: --->>>" + selectedWoundNum);
        var index;
        var flagcheck;
        if (patientSummaryObjects.patientListAndGraphData !== undefined && patientSummaryObjects.patientListAndGraphData !== null) {
            for (var i = 0; i < patientSummaryObjects.patientListAndGraphData.length; i++) {
                var str = patientSummaryObjects.patientListAndGraphData[i].woundLabel.replace("Wound ", "");
                kony.print("str: --->>>" + parseInt(str));
                if (parseInt(str) == parseInt(selectedWoundNum)) {
                    kony.print("Doll Index>>>" + index);
                    index = str;
                    kony.print("Doll Index after>>>" + index);
                    break;
                }
            }
        } else {
            kony.print("Complete uncheck eliminate breaking");
        }
        if (index == undefined || index == null || index == "null") {
            index = "noData";
        }
        kony.print("index: --->>>" + index);
        kony.print("Doll woundsSelected>>>" + woundsSelected);
        if (frmPatientSummary["imgcheckuncheck" + tempindex].src === "checkboxunselected.png") {
            flagcheck = true;
            frmPatientSummary["imgcheckuncheck" + tempindex].src = "checkboxselected.png";
            if (index == "noData") {
                var tempObj = {};
                tempObj.woundNum = selectedWoundNum;
                tempObj.index = index;
                woundsSelected.push(tempObj);
                kony.print("Doll tempObj.woundNum>>" + tempObj.woundNum);
                kony.print("Doll tempObj.index>>" + tempObj.index);
                kony.print("Dollindex woundsSelected>>" + woundsSelected);
            } else {
                woundsSelected.push(index);
                kony.print("Dollindex else woundsSelected" + woundsSelected);
            }
        } else {
            flagcheck = false;
            frmPatientSummary["imgcheckuncheck" + tempindex].src = "checkboxunselected.png";
            var popElementIndex;
            // alert("else selected wounds ::" + woundsSelected.length);
            kony.print("in Else WoundsSelected>>" + JSON.stringify(woundsSelected));
            if (index == "noData") {
                for (var k = 0; k < woundsSelected.length; k++) {
                    if (parseInt(woundsSelected[k].woundNum) == parseInt(selectedWoundNum)) {
                        popElementIndex = k;
                        kony.print("Doll popElementIndex>>" + popElementIndex);
                        break;
                    }
                }
            } else {
                for (var i = 0; i < woundsSelected.length; i++) {
                    if (typeof woundsSelected[i] === "object") { //[1, {wound: 2: wound}, {}]
                        index = (parseInt(index) == Number(parseInt(woundsSelected[i].woundNum))) ? woundsSelected[i] : index;
                        kony.print("new index" + index);
                    } else {
                        index = (parseInt(index) == parseInt(woundsSelected[i])) ? woundsSelected[i] : index;
                        kony.print("new index in else" + index);
                    }
                }
                kony.print("new index final" + index);
                popElementIndex = woundsSelected.indexOf(index);
                kony.print("Doll Else popElementIndex>>" + popElementIndex + "WoundSelected>>" + JSON.stringify(woundsSelected));
                //}
                //kony.print("popElementIndex: --->>>"+popElementIndex);
            }
            if (popElementIndex > -1) {
                woundsSelected.splice(popElementIndex, 1);
            }
            // alert("else selected wounds ::" + woundsSelected.length);
            kony.print("Prat>>" + JSON.stringify(patientSummaryObjects.woundDescriptionDetails));
            kony.print("Doll wounddSelected after splice>>" + JSON.stringify(woundsSelected));
        }
        kony.print("before sorting numbers: --->>>" + woundsSelected);
        woundsSelected = woundsSelected.sort(frmPatientSummary_sortNumber);
        kony.print("Sorted numbers: --->>>" + woundsSelected);
        //Sandeep offline changes for chart  on 24 may
        var selectedRange = kony.store.getItem(userInfo.userId + "_summaryWeekRange");
        //if(flagcheck ==true && eventobject.id !== "fccheckuncheck1stload"){
        //if(isIpad){
        if (eventobject.id !== "fccheckuncheck1stload") {
            kony.print("wound selected or not first time load");
            if (selectedRange !== null) {
                OnclickTimeline(selectedRange);
            } else {
                OnclickTimeline(12);
            }
        } else {
            kony.print("wound unselected or first time loaded")
            frmPatientSummary_addWoundSummarySegments();
            frmPatientSummary_WoundSummaryChart();
            frmPatientSummary.forceLayout();
        }
        //}
        // else {
        //  frmPatientSummary_addWoundSummarySegments();
        //  frmPatientSummary_WoundSummaryChart();
        //  frmPatientSummary.forceLayout();
        // }
    }
}
//Method to sort wound numbers
var frmPatientSummary_sortNumber = function(a, b) {
    if (typeof a === 'object') {
        a = a.woundNum;
    }
    if (typeof b === 'object') {
        b = b.woundNum;
    }
    a = a.toString();
    b = b.toString();
    if (isNaN(a) || isNaN(b)) {
        return a > b ? 1 : -1;
    }
    return a - b;
};
//Method to show wound photos
function frmPatientSummary_showPicture(eventobject) {
    searchPatient_closeSearchList();
    if (isIpad && SYNC_CONSTANTS.isAppOffline) {
        showCustomPopup(syncMessageConstants.FEATURE_NOT_AVAILABLE, syncMessageConstants.FEATURE_NOT_AVAILABLE_MESSAGE);
    } else {
        var evenObjectId = eventobject.id;
        var index = evenObjectId.replace("fcpicture", "");
        kony.print("index: --->>>" + index);
        kony.print("Selected wound text is : --->>>" + frmPatientSummary["lblwound" + index].text);
        var selectedWoundTxt = frmPatientSummary["lblwound" + index].text;
        woundImageConstants.clear();
        kony.print("parseInt index--->" + parseInt(index));
        woundImageConstants.encounterId = patientSummaryObjects.woundDescriptionDetails[parseInt(index) - 1].encounterId;
        woundImageConstants.woundId = patientSummaryObjects.woundDescriptionDetails[parseInt(index) - 1].woundid; //woundno
        woundImageConstants.docEntityId = patientSummaryObjects.woundDescriptionDetails[parseInt(index) - 1].docentityId; //woundno
        woundImagesModule.frmPatientSummary_getWoundImages();
        woundImageConstants.woundName = selectedWoundTxt;
        frmPatientSummary.fcpatientsummaryheaderhover.setVisibility(true);
        frmPatientSummary.fcpatientsummaryfooterhover.setVisibility(true);
        frmPatientSummary.fcpopupnotes.setVisibility(false);
    }
}
//Method to show selected photo
function onWoundSelection() {
    if (isIpad && frmPatientSummary.segmentimages.selectedIndex != null) {
        woundImageConstants.selectedWound = frmPatientSummary.segmentimages.selectedIndex[1];
    } else if (frmPatientSummary.segmentimages.selectedRowIndex != null) {
        woundImageConstants.selectedWound = frmPatientSummary.segmentimages.selectedRowIndex[1];
    }
    woundImageConstants.selectedWound = frmPatientSummary.segmentimages.selectedIndex[1];
    frmPatientSummary.imgdesc.base64 = frmPatientSummary.segmentimages.selectedItems[0].imgwound.base64;
    frmPatientSummary.lbltimestamp.text = frmPatientSummary.segmentimages.selectedItems[0].lbltimestamp;
}
//Method to add/remove selected/unselected wound data from wound summary
var frmPatientSummary_addWoundSummarySegments = function() {
    kony.print(" frmPatientSummary_addWoundSummarySegments woundsSelected ------->>>>> " + JSON.stringify(woundsSelected));
    kony.print("CO4 woundid>>" + patientSummaryObjects.woundDescriptionDetails[patientSummaryObjects.selectedWoundIndex].woundid);
    var patientData = patientSummaryObjects.patientListAndGraphData;
    kony.print("patientData ------->>>>> " + JSON.stringify(patientData));
    woundSummaryGraphData.woundData = [];
    frmPatientSummary.fcwoundwisesummary.removeAll();
    kony.print("grid Data woundsSelected.length" + woundsSelected.length);
    for (var i = 0; i < woundsSelected.length; i++) {
        var segGridData = [];
        var strWoundNum;
        var lWoundData = {};
        if (typeof woundsSelected[i] === 'object') {
            strWoundNum = woundsSelected[i].woundNum;
        } else {
            strWoundNum = woundsSelected[i];
        }
        lWoundData = {};
        lWoundData.woundLabel = "Wound " + strWoundNum;
        lWoundData.woundSummaryList = [{
            "comprehensiveTreatment": "",
            "negPressureWoundTherapy": "",
            "volumeOfWound": "",
            "biopsy": "",
            "areaOfWound": "",
            "ionisionAndDriange": "",
            "debridement": "",
            "encounterDate": "",
            "encounterId": "",
            "volumePercentageOfHealing": "",
            "areaPercentageOfHealing": "",
            "totalContactCost": "",
            "npwApplicationTherapy": "",
            "y": "",
            "x": null
        }];
        if (patientData !== undefined) {
            for (var temp = 0; temp < patientData.length; temp++) {
                if (parseInt(patientData[temp].woundLabel.replace("Wound ", "")) === parseInt(lWoundData.woundLabel.replace("Wound ", ""))) {
                    lWoundData.woundSummaryList = patientData[temp].woundSummaryList;
                    var gridData = patientData[temp].woundSummaryList;
                    var woundSummaaryList = [];
                    for (var j = 0; j < gridData.length; j++) {
                        kony.print("gridData date ------->>>>> " + gridData[j].encounterDate);
                        kony.print("gridData ------->>>>> " + JSON.stringify(gridData[j]));
                        var rowData = {};
                        var showInTable = false;
                        var lEncounterDate = gridData[j].encounterDate;
                        //changed as per JIRA# CO-4 
                        if (frmPatientSummary.btnunits.text === "Area" && !com.healogics.utility.isEmpty(gridData[j].encounterDate) && !com.healogics.utility.isEmpty(gridData[j].areaOfWound)) {
                            rowData.lbldate = frmPatientSummary_formatWoundListDate1(lEncounterDate);
                            rowData.lblunit = gridData[j].areaOfWound;
                            if (isIpad) {
                                rowData.lblpercentagehealing = gridData[j].areaPercentageOfHealing;
                            } else {
                                rowData.lblpercentagehealing = (gridData[j].area_healing_rate) + '%';
                            }
                            showInTable = true;
                        } else if (!com.healogics.utility.isEmpty(gridData[j].encounterDate) && !com.healogics.utility.isEmpty(gridData[j].volumeOfWound)) {
                            rowData.lbldate = frmPatientSummary_formatWoundListDate1(lEncounterDate);
                            rowData.lblunit = gridData[j].volumeOfWound;
                            if (isIpad) {
                                rowData.lblpercentagehealing = gridData[j].volumePercentageOfHealing;
                            } else {
                                rowData.lblpercentagehealing = (gridData[j].volume_healing_rate) + '%';
                            }
                            showInTable = true;
                        }
                        rowData.lblline1 = "";
                        rowData.lblline2 = "";
                        if (showInTable) {
                            segGridData.push(rowData);
                            woundSummaaryList.push(gridData[j]);
                        }
                    }
                    break;
                }
            }
        }
        kony.print("lWoundData----->>>>> " + JSON.stringify(lWoundData));
        woundSummaryGraphData.woundData.push(lWoundData);
        /*}else{
          	var index ;
          	strWoundNum = woundsSelected[i];
          
            for(var temp=0; temp<patientData.length; temp++){
              var str = patientData[temp].woundLabel.replace("Wound ", "");
              kony.print("----- str ------->>>>> "+str);
                  if(parseInt(str) == woundsSelected[i] ){
                  index = temp;
                  break;
              }
            }	
          kony.print("----- selected wound label index ------->>>>> "+index);

          if(com.healogics.utility.isEmpty(patientData[index]) || patientData.length===0){
            kony.print("----- No wound summary data ------->>>>> ");
            return;
          }else{
            var gridData = patientData[index].woundSummaryList;
            lWoundData = patientData[index];
            
            var woundSummaaryList = [];
            for(var j=0; j<gridData.length; j++){
              kony.print("gridData date ------->>>>> "+gridData[j].encounterDate);
              kony.print("gridData ------->>>>> "+JSON.stringify(gridData[j]));
              var rowData = {};
              var showInTable = false;
              var lEncounterDate = gridData[j].encounterDate;
              //changed as per JIRA# CO-4 
              if(frmPatientSummary.btnunits.text === "Area" && !com.healogics.utility.isEmpty(gridData[j].encounterDate) && !com.healogics.utility.isEmpty(gridData[j].areaOfWound))
              {
                rowData.lbldate = frmPatientSummary_formatWoundListDate1(lEncounterDate);  
                rowData.lblunit  = gridData[j].areaOfWound;
                rowData.lblpercentagehealing  = (gridData[j].area_healing_rate) +'%';
                showInTable = true;
              }
              else if(!com.healogics.utility.isEmpty(gridData[j].encounterDate) && !com.healogics.utility.isEmpty(gridData[j].volumeOfWound))
              {
                rowData.lbldate = frmPatientSummary_formatWoundListDate1(lEncounterDate);
                rowData.lblunit  = gridData[j].volumeOfWound;
                rowData.lblpercentagehealing  = (gridData[j].volume_healing_rate) +'%';
                showInTable = true;
              }
              rowData.lblline1 = "";
              rowData.lblline2 = "";
              if(showInTable){
                segGridData.push(rowData);
                woundSummaaryList.push(gridData[j]);
              }
            }
            if(woundSummaaryList.length > 0){
              lWoundData.woundSummaryList = woundSummaaryList;
              woundSummaryGraphData.woundData.push(lWoundData);
            }else{
              lWoundData.woundSummaryList = [
                {
                  "comprehensiveTreatment": "",
                  "negPressureWoundTherapy": "",
                  "volumeOfWound": "",
                  "biopsy": "",
                  "areaOfWound": "",
                  "ionisionAndDriange": "",
                  "debridement": "",
                  "encounterDate": "",
                  "encounterId": "",
                  "volumePercentageOfHealing": "",
                  "areaPercentageOfHealing": "",
                  "totalContactCost": "",
                  "npwApplicationTherapy": "",
                  "y": "",
                  "x": null
                }
              ];
              woundSummaryGraphData.woundData.push(lWoundData);
            }
            kony.print("segGridData ------->>>>> "+JSON.stringify(segGridData));
          }
        }*/
        var skinIndex;
        var displayWoundNum = "";
        for (var t = 1; t <= patientSummaryObjects.woundDescriptionDetails.length; t++) {
            kony.print("woundsSelected[i] ------->>>>> " + strWoundNum);
            kony.print("parseInt(patientSummaryObjects.woundDescriptionDetails[woundsSelected[t-1].woundno) ------->>>>> " + parseInt(patientSummaryObjects.woundDescriptionDetails[t - 1].woundno));
            if (parseInt(strWoundNum) == parseInt(patientSummaryObjects.woundDescriptionDetails[t - 1].woundno)) {
                skinIndex = parseInt(strWoundNum); //t;
                break;
            }
        }
        kony.print("skinIndex ------->>>>> " + skinIndex);
        var segwoundwisedata = new kony.ui.SegmentedUI2({
            "alternateRowSkin": "sksegrowaltgray",
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [
                [{
                    "lbldate": "Date",
                    "lblline1": "",
                    "lblline2": "",
                    "lblpercentagehealing": "% Healing",
                    "lblseparotaor": "Label",
                    "lblunit": frmPatientSummary.btnunits.text,
                    "lblwoundnum": {
                        "text": lWoundData.woundLabel,
                        "skin": frmPatientSummary_setWoundLabelColor(skinIndex)
                    }
                }, segGridData]
            ],
            "groupCells": false,
            "height": "100%",
            "id": "segwoundwisedata" + i,
            "isVisible": true,
            "left": "0%",
            "bounces": false,
            "indicator": "none",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "sksegment",
            "rowTemplate": fcweekdetails,
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "sectionHeaderTemplate": fcweeknumber,
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "ffffff00",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "fcdate": "fcdate",
                "fcpercentagehealing": "fcpercentagehealing",
                "fcunit": "fcunit",
                "fcweekdetails": "fcweekdetails",
                "fcweekdetailshdr": "fcweekdetailshdr",
                "fcweeknum": "fcweeknum",
                "fcweeknumber": "fcweeknumber",
                "lbldate": "lbldate",
                "lblline1": "lblline1",
                "lblline2": "lblline2",
                "lblpercentagehealing": "lblpercentagehealing",
                "lblseparotaor": "lblseparotaor",
                "lblunit": "lblunit",
                "lblwoundnum": "lblwoundnum"
            },
            "width": "33.3%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        frmPatientSummary.fcwoundwisesummary.add(segwoundwisedata);
        frmPatientSummary.fcwoundwisesummary.forceLayout();
    }
    frmPatientSummary.forceLayout();
    com.healogics.utility.dismissLoading();
};
//Methods to format date
var frmPatientSummary_formatHealStepDate = function(strDate) {
    kony.print("frmPatientSummary_formatHealStepDate start::" + strDate);
    if (strDate != "") {
        return moment(strDate).format("MM/DD/YYYY");
    } else {
        return "";
    }
};
var frmPatientSummary_formatWoundListDate = function(str) {
    var strDate = (com.healogics.utility.isEmpty(str)) ? "" : str;
    if (strDate === "") {
        return "";
    }
    kony.print("strDate ------->>>>> " + strDate);
    return moment(strDate).format("MM/DD/YYYY")
};
var frmPatientSummary_formatWoundListDate1 = function(str) {
    var strDate = (com.healogics.utility.isEmpty(str)) ? "" : str;
    if (strDate === "") {
        return "";
    } else {
        strDate = str.split(" ")[0];
    }
    kony.print("frmPatientSummary_formatWoundListDate1 strDate ------->>>>> " + strDate);
    return moment(strDate + " 23:59:59").format("MM/DD/YYYY");
};
var frmPatientSummary_formatDateAcquired = function(str) {
    var strDate = (com.healogics.utility.isEmpty(str)) ? "" : str;
    if (strDate === "") {
        return "";
    } else {
        strDate = strDate.split("T")[0];
    }
    return moment(strDate).format("MM/DD/YYYY");
};
healing9StepDataModule.wordWrapCheck = function(str) {
    if (isIpad) {
        return str;
    } else {
        var finalStr = "";
        if (str.length > 18) {
            var strTemp = str.slice(0, 18);
            if (strTemp.includes(" ")) {
                finalStr = str;
            } else {
                finalStr = str.slice(0, 18) + " " + str.slice(18, str.length);
            }
        } else {
            finalStr = str;
        }
        return finalStr;
    }
};