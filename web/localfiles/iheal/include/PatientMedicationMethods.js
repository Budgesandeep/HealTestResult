//Methods used by User Control PatientMedications.ascx. Put here so they'll get cached with the browser. 

var tblPatientMedicationsID;
var tblPatientMedicationsFirstRowID;
var medRowTemplate;
var tblPatientMedicationsRowCount; 
var currentPatientMedicationTxtBox;
var patientMedsHighlightedLink = 0;
var patientMedsMedicationLinkCount = 0;
var patientMedsSpanContainerID;
var patientMedsDivMedicationsID;
var patientMedsSearchingTimeOut;
var patientMedsSearchPageUrl;
var patientMedsHdnMedicationID;
var patientMedsRouteID;
var patientMedsClassID;
var patientMedsHdnClassID;
var patientMedsRowIndex = 0;
var patientMedsCalStartDate;
var patientMedsCalEndDate;
var patientMedsShowList = false;
var patientMedsValidators = "vldTxtStartDate,vldTxtEndDate,lenTxtMedication,lenTxtDose,lenTxtTime,lenTxtReason,lenTxtNumberOfPills,lenTxtNumberOfRefills,valTmTimeAdministered,valTmTimeDiscontinued";

function PatientMedsInitWithNoRows()
{    
    PatientMedsInit();    
    PatientMedsRemoveRow('lnkRemovePatientMedication', medRowTemplate.getElementsByTagName('a')[0], true);        
}

function PatientMedsInit()
{
    medRowTemplate = document.getElementById(tblPatientMedicationsFirstRowID).cloneNode(true);
    medRowTemplate.style.display = '';
    medRowTemplate.style.visibility = 'hidden';
    document.body.appendChild(medRowTemplate);
}

function PatientMedsAddRow()
{
    var tblMeds = document.getElementById(tblPatientMedicationsID).getElementsByTagName('tbody')[0];
    var newMedRow = medRowTemplate.cloneNode(true);
    newMedRow.style.visibility = '';
    var ctrlPrefix;
    var initStartDateCalendar;
    var initEndDateCalendar;
    
    tblPatientMedicationsRowCount++;
    
    newMedRow = PatientMedsFormatNewRow(newMedRow, tblPatientMedicationsRowCount);
    newMedRow.style.display = '';
    tblMeds.appendChild(newMedRow);
    
    PatientMedsAddModifiedMed(tblPatientMedicationsRowCount);
    
    ctrlPrefix = GetControlIDPrefix(tblPatientMedicationsID);
    
    //IE keeps events with elements when using cloneNode, so for the meds search we dont have to add the events again
    //But for the datecontrols we need to remove the events
    if(!IE)
    {
        addEvent(document.getElementById(ctrlPrefix + 'txtMedication' + tblPatientMedicationsRowCount), 'keyup', PatientMedsShowMedications, false); 
        addEvent(document.getElementById(ctrlPrefix + 'txtMedication' + tblPatientMedicationsRowCount), 'keydown', PatientMedsCheckForTab, false); 
    }    
    else
    {
//        var startDateIndex;
//        var endDateIndex;
//        var startDateCtrl;
//        var endDateCtrl;
//        
//        startDateCtrl = document.getElementById(ctrlPrefix + 'txtStartDate' + tblPatientMedicationsRowCount);
//        endDateCtrl = document.getElementById(ctrlPrefix + 'txtEndDate' + tblPatientMedicationsRowCount);
//        
//        startDateIndex = parseInt(startDateCtrl.getAttribute('cpWindowIndex'), 10);
//        endDateIndex = parseInt(endDateCtrl.getAttribute('cpWindowIndex'), 10);        
        //removeEvent(startDateCtrl, 'focus', window.popupWindowObjects[startDateIndex].gotFocus, false);
        //removeEvent(endDateCtrl, 'focus', window.popupWindowObjects[endDateIndex].gotFocus, false);
        //removeEvent(startDateCtrl, 'keydown', window.popupWindowObjects[startDateIndex].keyPressed, false);
        //removeEvent(endDateCtrl, 'keydown', window.popupWindowObjects[endDateIndex].keyPressed, false);
    }

    var rawDateControlID = ctrlPrefix + 'txtStartDate' + tblPatientMedicationsRowCount;
    var $tstCalendar = $("#" + rawDateControlID);
    $create(AjaxControlToolkit.CalendarBehavior, { "id": $tstCalendar.attr("id") + "cld" }, null, null, $get($tstCalendar.attr("id")));

    var rawEndDateControlID = ctrlPrefix + 'txtEndDate' + tblPatientMedicationsRowCount;
    var $tstEndCalendar = $("#" + rawEndDateControlID);
    $create(AjaxControlToolkit.CalendarBehavior, { "id": $tstEndCalendar.attr("id") + "cld" }, null, null, $get($tstEndCalendar.attr("id")));

    PatientMedsInitializeValidators(document.getElementById(newMedRow.id), tblPatientMedicationsRowCount);

    // CR 357 - Don't hide Number of Pills anymore.  It's now labeled "Number of Units". 
    //document.getElementById(ctrlPrefix + "divNumberOfPills" + tblPatientMedicationsRowCount).style.display = "none";
    document.getElementById(ctrlPrefix + "divNumberOfRefills" + tblPatientMedicationsRowCount).style.display = "none";
    
}

function PatientMedsInitializeValidators(medsRow, rowIndex)
{        
    var arrSpans;
    var ctrlID;        
    var idPrefix;
    var ctrlToValidateID;
    var ctrlToValidatePrefix;
    var newctrlToValidateID;
    var k;
    var spnValidator;
    var ctrlBaseID;        
    var key;
    
    arrSpans = medsRow.getElementsByTagName('span');
    
    for(k=0;k<arrSpans.length;k++)
    {            
        ctrlID = GetControlID(arrSpans[k].id);
        idPrefix = GetControlIDPrefix(arrSpans[k].id);
        
        ctrlBaseID = PatientMedsCheckIfValidator(ctrlID);
        
        if(ctrlBaseID)
        {                
            spnValidator = CopyASPNETValidator(idPrefix + ctrlBaseID + "1");            
            
            if(spnValidator)
            {                
                ctrlToValidateID = GetControlID(spnValidator.controltovalidate);
                ctrlToValidatePrefix = GetControlIDPrefix(spnValidator.controltovalidate);
                newctrlToValidateID = ctrlToValidatePrefix + ctrlToValidateID.substring(0, ctrlToValidateID.length - 1) + rowIndex;
                spnValidator.id = arrSpans[k].id;
                spnValidator.controltovalidate = newctrlToValidateID;
                AddDynamicValidator(spnValidator.id, spnValidator.controltovalidate, spnValidator.errormessage, spnValidator.validationexpression);                
            }
        }
    }
}

function PatientMedsResetValidators(rowID)
{
    var arrSpans;
    var arrValidators;
    var k;
    var editRow;
    var ctrlID;
    var idPrefix;    
    
    arrValidators = patientMedsValidators.split(',');    
    
    editRow = document.getElementById(rowID);
    
    arrSpans = editRow.getElementsByTagName('span');
    
    for(k=0;k<arrSpans.length;k++)
    {            
        ctrlID = GetControlID(arrSpans[k].id);        
        ctrlBaseID = PatientMedsCheckIfValidator(ctrlID, arrValidators);
        
        if(ctrlBaseID)
        {
            arrSpans[k].style.visibility = 'hidden';
            //Not Needed as of yet.
            //document.getElementById(arrSpans[k]).isValid = true;            
        }            
    }        
    
    
}

function PatientMedsCheckIfValidator(ctrlID, arrValidators)
{    
    var returnID = null;
    var validators = patientMedsValidators;
    var i;
    
    if(!arrValidators)        
        arrValidators = validators.split(',');
    
    for(i=0;i<arrValidators.length;i++)
    {
        if(ctrlID.substring(0, arrValidators[i].length) == arrValidators[i])
        {
            returnID = arrValidators[i];
            break;
        }
    }    
        
    return returnID;            
}

var patientMedsRemoveRow_baseID;
var patientMedsRemoveRow_lnkElement;

function PatientMedsStartRemoveRow(baseID, lnkElement)
{
    patientMedsRemoveRow_baseID = baseID;
    patientMedsRemoveRow_lnkElement = lnkElement;
    
    ShowCenteredDiv('patientMedicationsConfirmDeleteWindow', true, 0, 0, true, true);
}

function PatientMedsCancelRemove()
{
    CloseCenteredDiv('patientMedicationsConfirmDeleteWindow');
}

function PatientMedsFinishRemove()
{
    CloseCenteredDiv('patientMedicationsConfirmDeleteWindow');    
    PatientMedsRemoveRow(patientMedsRemoveRow_baseID, patientMedsRemoveRow_lnkElement);
}

function PatientMedsRemoveRow(baseID, lnkElement, keepValidators)
{
    var medRow;
    var rowIndex;
    var lnkID;
    var baseLnkID = baseID;
    var idPrefix;
    var ctrlID;
    var lnkCtrlID;    
    var basehdnPatientMedicationID = 'hdnPatientMedicationRecID';
    var hdnPatientMedicationRec;
    var hdnPatientMedsRemovedMeds = document.getElementById('hdnPatientMedsRemovedMeds');    
    
    ctrlID = GetControlID(tblPatientMedicationsFirstRowID);    
    idPrefix = GetControlIDPrefix(tblPatientMedicationsFirstRowID);
        
    lnkCtrlID = GetControlID(lnkElement.id);
    lnkID = lnkElement.id;    
    
    rowIndex = lnkCtrlID.substring(baseLnkID.length);   
    
    hdnPatientMedicationRec = document.getElementById(idPrefix + basehdnPatientMedicationID + rowIndex);
    
    medRow = document.getElementById(idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex);    
    
    if(medRow)
    {        
        var arrValidatorstoRemove;
        var i;
        
        if(!keepValidators)
        {
            arrValidatorstoRemove = patientMedsValidators.split(',');
            
            for(i=0;i<arrValidatorstoRemove.length;i++)
                RemoveDynamicValidator(idPrefix + arrValidatorstoRemove[i] + rowIndex);
        }
        
        medRow.parentNode.removeChild(medRow);
        
        PatientMedsRemoveModifiedMed(rowIndex);
        PatientMedsRemoveDiscontinuedMed(rowIndex);
        
        if((hdnPatientMedicationRec) && (!isBlank(hdnPatientMedicationRec.value)))
            hdnPatientMedsRemovedMeds.value += hdnPatientMedicationRec.value + ",";
            
    }
    
}

function PatientMedsFormatNewRow(medRow, rowIndex)
{
    var arrElements;    
    var ctrlID;
    var ctrlName;
    var namePrefix;
    var idPrefix;
    var ctrlToValidateID;
    var ctrlToValidatePrefix;
    var newctrlToValidateID;
    var i;
    var spnValidator;
    
    arrElements = medRow.getElementsByTagName('input');
    
    for(i=0;i<arrElements.length;i++)
    {
        ctrlID = GetControlID(arrElements[i].id);
        idPrefix = GetControlIDPrefix(arrElements[i].id);
        ctrlName = GetControlName(arrElements[i].name);
        namePrefix = GetControlNamePrefix(arrElements[i].name);
        arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;
        arrElements[i].name = namePrefix + ctrlName.substring(0, ctrlName.length - 1) + rowIndex;
        arrElements[i].value = "";
        if(arrElements[i].type == 'checkbox')
            arrElements[i].checked = false;
    }
    
    arrElements = medRow.getElementsByTagName('select');
    
    for(i=0;i<arrElements.length;i++)
    {
        ctrlID = GetControlID(arrElements[i].id);
        idPrefix = GetControlIDPrefix(arrElements[i].id);
        ctrlName = GetControlName(arrElements[i].name);
        namePrefix = GetControlNamePrefix(arrElements[i].name);
        arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;
        arrElements[i].name = namePrefix + ctrlName.substring(0, ctrlName.length - 1) + rowIndex;
        arrElements[i].disabled = false;
        arrElements[i].value = "";
    }
    
    arrElements = medRow.getElementsByTagName('label');
    
    for(i=0;i<arrElements.length;i++)
    {
        ctrlID = GetControlID(arrElements[i].id);
        idPrefix = GetControlIDPrefix(arrElements[i].id);                
        arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;        
        //arrElements[i].setAttribute('for', idPrefix + 'chkPrescriptionMedication' + rowIndex);
        arrElements[i].setAttribute('for', idPrefix + arrElements[i].getAttribute('forBase') + rowIndex);
    }
    
    arrElements = medRow.getElementsByTagName('textarea');
    
    for(i=0;i<arrElements.length;i++)
    {
        ctrlID = GetControlID(arrElements[i].id);
        idPrefix = GetControlIDPrefix(arrElements[i].id);
        ctrlName = GetControlName(arrElements[i].name);
        namePrefix = GetControlNamePrefix(arrElements[i].name);
        arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;
        arrElements[i].name = namePrefix + ctrlName.substring(0, ctrlName.length - 1) + rowIndex;
        arrElements[i].value = "";
    }
    
    arrElements = medRow.getElementsByTagName('span');
    
    for(i=0;i<arrElements.length;i++)
    {            
        spnValidator = CopyASPNETValidator(arrElements[i].id);
        ctrlID = GetControlID(arrElements[i].id);
        idPrefix = GetControlIDPrefix(arrElements[i].id);
        arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;            
        
        if(spnValidator)                
            arrElements[i].style.visibility = 'hidden';            
            
        if(arrElements[i].getAttribute('eraseMe') != null)
            arrElements[i].innerHTML = '';
    }
    
    arrElements = medRow.getElementsByTagName('tr');
    
    for(i=0;i<arrElements.length;i++)
    {          
        if(!isBlank(arrElements[i].id))
        {  
            ctrlID = GetControlID(arrElements[i].id);
            idPrefix = GetControlIDPrefix(arrElements[i].id);
            arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;
            arrElements[i].style.display = 'none';                   
        }
    }
    
    arrElements = medRow.getElementsByTagName('td');
    
    for(i=0;i<arrElements.length;i++)
    {          
        if(!isBlank(arrElements[i].id))
        {  
            ctrlID = GetControlID(arrElements[i].id);
            idPrefix = GetControlIDPrefix(arrElements[i].id);
            arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;
            if (arrElements[i].id.search('tdOneTimeUse') != -1)
                arrElements[i].style.display = 'none';
            else if (arrElements[i].id.search('tdAdministeredAtFacility') != -1)
                arrElements[i].style.display = '';
        }
    }
    
    arrElements = medRow.getElementsByTagName('div');
    
    for(i=0;i<arrElements.length;i++)
    {          
        if(!isBlank(arrElements[i].id))
        {  
            ctrlID = GetControlID(arrElements[i].id);
            idPrefix = GetControlIDPrefix(arrElements[i].id);
            arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;                   
        }
    }
    
    arrElements = medRow.getElementsByTagName('iframe');
    
    for(i=0;i<arrElements.length;i++)
    {          
        if(!isBlank(arrElements[i].id))
        {  
            ctrlID = GetControlID(arrElements[i].id);
            idPrefix = GetControlIDPrefix(arrElements[i].id);
            arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;                   
        }
    }
    
    arrElements = medRow.getElementsByTagName('a');
    
    for(i=0;i<arrElements.length;i++)
    {          
        if(!isBlank(arrElements[i].id))
        {  
            ctrlID = GetControlID(arrElements[i].id);
            idPrefix = GetControlIDPrefix(arrElements[i].id);
            arrElements[i].id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;
            
            if(arrElements[i].innerHTML.toLowerCase() == 'collapse details')
                arrElements[i].innerHTML = 'Expand Details';
        }
    }        
            
    ctrlID = GetControlID(medRow.id);
    idPrefix = GetControlIDPrefix(medRow.id);
    medRow.id = idPrefix + ctrlID.substring(0, ctrlID.length - 1) + rowIndex;
    
    return medRow;
}

function PatientMedsSwitchAdverseReaction(baseID, lnkElement)
{
    var rowIndex;
    var lnkID;
    var idPrefix;
    var ctrlID;
    var adverseReaction
    var adverseReactionBaseID = 'PatientMedsAdditionalInfo';
    var adverseReactionTxtBoxBaseID = 'txtAdverseReaction';
    var lnkLabel;
    var arrInputs;
    var arrSelects;
    var i;
    
    lnkID = lnkElement.id;    
    lnkLabel = lnkElement.innerHTML;        
    ctrlID = GetControlID(lnkID);    
    idPrefix = GetControlIDPrefix(lnkID);    
    rowIndex = ctrlID.substring(baseID.length);    
    
    adverseReaction = document.getElementById(idPrefix + adverseReactionBaseID + rowIndex);
    
    if(adverseReaction)
    {
        if(lnkLabel.toLowerCase() == 'expand details')
        {
            lnkElement.innerHTML = 'Collapse Details';
            adverseReaction.style.display = '';
        }
        else
        {
            lnkElement.innerHTML = 'Expand Details';
            //document.getElementById(idPrefix + adverseReactionTxtBoxBaseID + rowIndex).value = '';
            adverseReaction.style.display = 'none';
            
            arrInputs = adverseReaction.getElementsByTagName('input');
            for(i=0;i<arrInputs.length;i++)
                arrInputs[i].value = '';
                
            arrSelects = adverseReaction.getElementsByTagName('select');
            for(i=0;i<arrSelects.length;i++)
                arrSelects[i].value = '';
        }
    }    
}

var patientMedsEditRow_baseID;
var patientMedsEditRow_lnkElement;
var patientMedsEditRow_detailsRowID;
var patientMedsEditRow_editRowID;

function PatientMedsStartEditRow(baseID, lnkElement, detailsRowID, editRowID)
{
    patientMedsEditRow_baseID = baseID;
    patientMedsEditRow_lnkElement = lnkElement;
    patientMedsEditRow_detailsRowID = detailsRowID;
    patientMedsEditRow_editRowID = editRowID;
    
    ShowCenteredDiv('patientMedicationsConfirmEditWindow', true, 0, 0, true);
}

function PatientMedsCancelEditRow()
{
    CloseCenteredDiv('patientMedicationsConfirmEditWindow');
}

function PatientMedsFinishEditRow()
{
    CloseCenteredDiv('patientMedicationsConfirmEditWindow');
    PatientMedsEditRow(patientMedsEditRow_baseID, patientMedsEditRow_lnkElement, patientMedsEditRow_detailsRowID, patientMedsEditRow_editRowID);
}

function PatientMedsEditRow(baseID, lnkElement, detailsRowID, editRowID)
{
    var lnkID;
    var ctrlID;
    var idPrefix;
    var rowIndex;
    var detailsRow;
    var editRow;
    
    lnkID = lnkElement.id;
    ctrlID = GetControlID(lnkID);
    idPrefix = GetControlIDPrefix(lnkID);
    rowIndex = ctrlID.substring(baseID.length);
    
    detailsRow = document.getElementById(detailsRowID);
    editRow = document.getElementById(editRowID);
    
    if((detailsRow) && (editRow))
    {
        detailsRow.style.display = 'none';
        editRow.style.display = '';
        PatientMedsAddModifiedMed(rowIndex);
        PatientMedsMoveDiscontinuedToModified(rowIndex);        
    }
}

function PatientMedsEditRowCancel(baseID, lnkElement, detailsRowID, editRowID)
{
    var lnkID;
    var ctrlID;
    var idPrefix;
    var rowIndex;
    var detailsRow;
    var editRow;
    var arrInputs;
    var arrSelects;
    var arrTrs;
    var arrAnchors;
    var arrSpans;
    var i;
    var hdnPatientMedsDiscontinuedMeds;
    
    lnkID = lnkElement.id;
    ctrlID = GetControlID(lnkID);
    idPrefix = GetControlIDPrefix(lnkID);
    rowIndex = ctrlID.substring(baseID.length);
    
    detailsRow = document.getElementById(detailsRowID);
    editRow = document.getElementById(editRowID);
    
    hdnPatientMedsDiscontinuedMeds = document.getElementById('hdnPatientMedsDiscontinuedMeds');
    
    if((detailsRow) && (editRow))
    {
        detailsRow.style.display = '';
        editRow.style.display = 'none';        
        
        PatientMedsMoveModifiedToDiscontinued(rowIndex);
        PatientMedsRemoveModifiedMed(rowIndex);        
        
        arrInputs = editRow.getElementsByTagName('input');
        
        for(i=0;i<arrInputs.length;i++)
        {
            if(arrInputs[i].getAttribute('originalValue') != null)
            {
                if(arrInputs[i].type != 'checkbox')
                {
                    arrInputs[i].value = arrInputs[i].getAttribute('originalValue');
                }
                else
                {
                    if(arrInputs[i].getAttribute('originalValue').toLowerCase() == 'true')
                        arrInputs[i].checked = true;
                    else
                        arrInputs[i].checked = false;
                }   
            }
        }
        
        arrSelects = editRow.getElementsByTagName('select');
        
        for(i=0;i<arrSelects.length;i++)
        {
            if(arrSelects[i].getAttribute('originalValue') != null)
                arrSelects[i].value = arrSelects[i].getAttribute('originalValue');
        }
        
        arrAnchors = editRow.getElementsByTagName('a');
        
        for(i=0;i<arrAnchors.length;i++)
        {
            if(arrAnchors[i].getAttribute('originalValue') != null)
                arrAnchors[i].innerHTML = arrAnchors[i].getAttribute('originalValue');
        }
        
        arrSpans = editRow.getElementsByTagName('span');
        
        for(i=0;i<arrSpans.length;i++)
        {
            if(arrSpans[i].getAttribute('originalValue') != null)
                arrSpans[i].innerHTML = arrSpans[i].getAttribute('originalValue');
        }
        
        arrTrs = editRow.getElementsByTagName('tr');
        
        for(i=0;i<arrTrs.length;i++)
        {
            if(arrTrs[i].getAttribute('originalStyle') != null)
                arrTrs[i].style.display = arrTrs[i].getAttribute('originalStyle')
        }
        
        PatientMedsResetValidators(editRowID);
    }
}

function PatientMedsDiscontinueMed(baseID, chkElement)
{
    var rowIndex;
    var lnkID;
    var idPrefix;
    var ctrlID;
    var editLnkBaseID = 'lnkEditPatientMedication';
    var editLnk;
    var lblDiscontinueBaseID = 'lblDiscontinueStatus';
    var lblDiscontinue;
    var hdnPatientMedicationActiveBaseID = 'hdnPatientMedicationActive';
    var hdnPatientMedicationActive
    var lblDiscontinueDateBaseID = 'lblDiscontinueDate';
    var lblDiscontinueDate;
    var dtDiscontinueDateBaseID = 'dtDiscontinueDate';
    var dtDiscontinueDate;    
    var vldDtDiscontinueDateBaseID = 'vlddtDiscontinueDate';
    var vldDtDiscontinueDate;
    var containingTbl = chkElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;    
    var i;    
    
    lnkID = chkElement.id;
    ctrlID = GetControlID(lnkID);
    idPrefix = GetControlIDPrefix(lnkID);
    rowIndex = ctrlID.substring(baseID.length);
    
    editLnk = document.getElementById(idPrefix + editLnkBaseID + rowIndex);
    lblDiscontinue = document.getElementById(idPrefix + lblDiscontinueBaseID + rowIndex);
    hdnPatientMedicationActive = document.getElementById(idPrefix + hdnPatientMedicationActiveBaseID + rowIndex);
    lblDiscontinueDate = document.getElementById(idPrefix + lblDiscontinueDateBaseID + rowIndex);
    dtDiscontinueDate = document.getElementById(idPrefix + dtDiscontinueDateBaseID + rowIndex);
    vldDtDiscontinueDate = document.getElementById(idPrefix + vldDtDiscontinueDateBaseID + rowIndex);           
    
    if(chkElement.checked)
    {        
        if(editLnk)
            editLnk.style.visibility = 'hidden';
        
        if(lblDiscontinue)            
            lblDiscontinue.style.display = '';
            
        if(lblDiscontinueDate)
            lblDiscontinueDate.style.display = 'none';        
            
        if((dtDiscontinueDate))
        {            
            dtDiscontinueDate.style.display = '';            
        }        
        
        hdnPatientMedicationActive.value = "false";        
    }
    else
    {        
        if(editLnk)
            editLnk.style.visibility = 'visible';
        if(lblDiscontinue)
            lblDiscontinue.style.display = 'none';
            
        if(lblDiscontinueDate)
            lblDiscontinueDate.style.display = '';
            
        if((dtDiscontinueDate))
        {            
            dtDiscontinueDate.style.display = 'none';            
            dtDiscontinueDate.value = dtDiscontinueDate.getAttribute('originalValue');
        }
        
        if(vldDtDiscontinueDate)
            vldDtDiscontinueDate.style.display = 'none';        
        
        hdnPatientMedicationActive.value = "true";                
    }
    PatientMedsAddDiscontinuedMed(rowIndex);
}

function CheckModifiedValue()
{
    var hdnPatientMedsModifiedMeds = document.getElementById('hdnPatientMedsModifiedMeds');
    var hdnPatientMedsDiscontinuedMeds = document.getElementById('hdnPatientMedsDiscontinuedMeds');
    var hdnPatientMedsRemovedMeds = document.getElementById('hdnPatientMedsRemovedMeds');    
    
    alert("Modifyed: " + hdnPatientMedsModifiedMeds.value + "\n Discontinued: " + hdnPatientMedsDiscontinuedMeds.value + "\n Removed Rows: " + hdnPatientMedsRemovedMeds.value);
}

function PatientMedsAddModifiedMed(rowIndex)
{
    var hdnPatientMedsModifiedMeds = document.getElementById('hdnPatientMedsModifiedMeds');
    if(isBlank(hdnPatientMedsModifiedMeds.value))
        hdnPatientMedsModifiedMeds.value = ",";
    
    //Only add it to the modified values if its not already in there
    if(hdnPatientMedsModifiedMeds.value.indexOf(',' + rowIndex + ',') == -1)
        hdnPatientMedsModifiedMeds.value += rowIndex + ",";
}

function PatientMedsRemoveModifiedMed(rowIndex)
{    
    var hdnPatientMedsModifiedMeds = document.getElementById('hdnPatientMedsModifiedMeds');
    hdnPatientMedsModifiedMeds.value = hdnPatientMedsModifiedMeds.value.replace("," + rowIndex + ",", ",");
}

//Keep track of Discontinued medications so canceling an edit won't remove them
function PatientMedsAddDiscontinuedMed(rowIndex)
{
    var hdnPatientMedsDiscontinuedMeds = document.getElementById('hdnPatientMedsDiscontinuedMeds');
    if(isBlank(hdnPatientMedsDiscontinuedMeds.value))
        hdnPatientMedsDiscontinuedMeds.value = ",";
    
    //Only add it to the Discontinued values if its not already in there
    if(hdnPatientMedsDiscontinuedMeds.value.indexOf(',' + rowIndex + ',') == -1)
        hdnPatientMedsDiscontinuedMeds.value += rowIndex + ",";
}

function PatientMedsRemoveDiscontinuedMed(rowIndex)
{    
    var hdnPatientMedsDiscontinuedMeds = document.getElementById('hdnPatientMedsDiscontinuedMeds');
    hdnPatientMedsDiscontinuedMeds.value = hdnPatientMedsDiscontinuedMeds.value.replace("," + rowIndex + ",", ",");
}

//Moves a row when it was Discontinued and the user now wants to edit it.
//It moves the row index to a temp collection so we can keep track of which rows 
//were Discontinued and then edited so if the edit is canceled they can be moved back to Discontinued
function PatientMedsMoveDiscontinuedToModified(rowIndex)
{    
    var hdnPatientMedsDiscontinuedMeds = document.getElementById('hdnPatientMedsDiscontinuedMeds');
    
    if(hdnPatientMedsDiscontinuedMeds.value.indexOf(',' + rowIndex + ',') != -1)
    {
        PatientMedsRemoveDiscontinuedMed(rowIndex);
        PatientMedsAddOldDiscontinuedMed(rowIndex);
    }
}

//Moves a row back to being a Discontinued row when it is canceled being edited and was Discontinued before. 
function PatientMedsMoveModifiedToDiscontinued(rowIndex)
{
    var hdnOldDiscontinueMeds = document.getElementById('hdnOldDiscontinueMeds');    
    
    if(hdnOldDiscontinueMeds.value.indexOf(',' + rowIndex + ',') != -1)
    {
        PatientMedsRemoveOldDiscontinuedMed(rowIndex);
        PatientMedsAddDiscontinuedMed(rowIndex);
    }
}

function PatientMedsAddOldDiscontinuedMed(rowIndex)
{
    var hdnOldDiscontinueMeds = document.getElementById('hdnOldDiscontinueMeds');
    if(isBlank(hdnOldDiscontinueMeds.value))
        hdnOldDiscontinueMeds.value = ",";
    
    //Only add it to the old Discontinued values if its not already in there
    if(hdnOldDiscontinueMeds.value.indexOf(',' + rowIndex + ',') == -1)
        hdnOldDiscontinueMeds.value += rowIndex + ",";
}

function PatientMedsRemoveOldDiscontinuedMed(rowIndex)
{    
    var hdnOldDiscontinueMeds = document.getElementById('hdnOldDiscontinueMeds');
    hdnOldDiscontinueMeds.value = hdnOldDiscontinueMeds.value.replace("," + rowIndex + ",", ",");
}

function PatientMedsSetCurrentMedicationTextBox(baseID, txtElement)
{
    var rowIndex;
    var txtID;
    var idPrefix;
    var ctrlID;
    var hdnControlBaseID = 'hdnPatientMedicationID';            
    var routeControlBaseID = 'ddlRoute';
    var classControlBaseID = 'spnMedicationClass';
    var hdnClassControlBaseID = 'hdnPatientMedicationClass';
    
    currentPatientMedicationTxtBox = txtElement;
    
    txtID = txtElement.id;        
    ctrlID = GetControlID(txtID);    
    idPrefix = GetControlIDPrefix(txtID);    
    rowIndex = ctrlID.substring(baseID.length);    
    
    patientMedsRowIndex = rowIndex;
    patientMedsHighlightedLink = 0;
    patientMedsMedicationLinkCount = 0;
    patientMedsSpanContainerID = idPrefix + "spn" + ctrlID;
    patientMedsDivMedicationsID = idPrefix + "div" + ctrlID;
    patientMedsHdnMedicationID = idPrefix + hdnControlBaseID + rowIndex;    
    patientMedsRouteID = idPrefix + routeControlBaseID + rowIndex;
    patientMedsClassID = idPrefix + classControlBaseID + rowIndex;
    patientMedsHdnClassID = idPrefix + hdnClassControlBaseID + rowIndex;
    
}

function PatientMedsMoveSelectionUp()
{        
    if(patientMedsHighlightedLink != 0)
    {        
        PatientMedsUnSelectItem();        
        patientMedsHighlightedLink--;
        
        if(patientMedsHighlightedLink != 0)
            PatientMedsSetSelection();
    }
}

function PatientMedsMoveSelectionDown()
{    
    if(patientMedsHighlightedLink < patientMedsMedicationLinkCount)
    {        
        PatientMedsUnSelectItem();
        patientMedsHighlightedLink++;
        PatientMedsSetSelection();        
    }           
}

function PatientMedsGetLinkInList()
{
    return document.getElementById('medLink' + patientMedsHighlightedLink + '-' + patientMedsRowIndex);
}

function PatientMedsSetSelection()
{        
    var linkToHighLight = PatientMedsGetLinkInList();    
        
    if(linkToHighLight)
    {        
        linkToHighLight.className = 'highlighted';            
        currentPatientMedicationTxtBox.value = linkToHighLight.getAttribute('value');        
        document.getElementById(patientMedsRouteID).value = linkToHighLight.getAttribute('route');        
        document.getElementById(patientMedsHdnMedicationID).value = linkToHighLight.getAttribute('medicationID');        
        document.getElementById(patientMedsHdnClassID).value = linkToHighLight.getAttribute('medicationClass');
        document.getElementById(patientMedsClassID).innerHTML = linkToHighLight.getAttribute('medicationClass');      
    }
    
}

function PatientMedsChooseItem(lnkElement)
{    
    currentPatientMedicationTxtBox.value = lnkElement.getAttribute('value');    
    document.getElementById(patientMedsRouteID).value = lnkElement.getAttribute('route');        
    document.getElementById(patientMedsHdnMedicationID).value = lnkElement.getAttribute('medicationID');
    document.getElementById(patientMedsHdnClassID).value = lnkElement.getAttribute('medicationClass');
    document.getElementById(patientMedsClassID).innerHTML = lnkElement.getAttribute('medicationClass');
    PatientMedsHideList();    
}

function PatientMedsUnSelectItem()
{    
    var linkToUnHighLight = PatientMedsGetLinkInList();
    if(linkToUnHighLight)
        linkToUnHighLight.className = '';
}

function PatientMedsShowMedications(e)
{
    var divMedications = document.getElementById(patientMedsDivMedicationsID);
    var txtMedicationSearch = currentPatientMedicationTxtBox;
    var keyPressed = e.keyCode;   
    
    StopEvent(e);    
    
    //Stop queued searches
    clearTimeout(patientMedsSearchingTimeOut);        
    
    //38 is up, 40 is down
    if(keyPressed == 38 || keyPressed == 40 || keyPressed == 13)
    {            
        if(keyPressed == 38)
            PatientMedsMoveSelectionUp();
            
        if(keyPressed == 40)
            PatientMedsMoveSelectionDown();
        
        if(keyPressed == 13)
            PatientMedsSetSelection();
    }
    else
    {        
        patientMedsHighlightedLink = 0;
        patientMedsMedicationLinkCount = 0;
        if(!isBlank(currentPatientMedicationTxtBox.value))
        {                
            patientMedsSearchingTimeOut = setTimeout("PatientMedsStartSearch()", keyPressDelay);
        }
        else
        {            
            document.getElementById(patientMedsRouteID).value = '';
            PatientMedsSetValidOrBlankMedication();
            clearTimeout(patientMedsSearchingTimeOut);            
            CloseDiv(patientMedsDivMedicationsID);            
        }
    }    
    
}

function PatientMedsCheckForTab(e)
{
    if((e.keyCode == 9) || (e.keyCode == 13))
    {
        StopEvent(e);        
        clearTimeout(patientMedsSearchingTimeOut);
        patientMedsShowList = false;
        PatientMedsHideList();
        document.getElementById(patientMedsRouteID).focus();
        
    }
}   

function PatientMedsStartSearch()
{            
    var medName = currentPatientMedicationTxtBox.value;
    var strParameter = 'MedicationName' + "=" + encodeURIComponent(medName);
    makeAjaxRequest(patientMedsSearchPageUrl, PatientMedsGetList, strParameter);
    patientMedsShowList = true;
}

function PatientMedsHideList(e)
{    
    if(e)
    {        
        var clickedEl = GetElementClicked(e);
        var divMedsList = document.getElementById(patientMedsDivMedicationsID);
        //clickedEl.style.border = 'red 3px solid';        
        if((divMedsList) && (clickedEl != divMedsList))
        {            
            CloseDiv(divMedsList.id);
            patientMedsHighlightedLink = 0;
            patientMedsMedicationLinkCount = 0;
        }
    }
    else
    {        
        CloseDiv(patientMedsDivMedicationsID);
        patientMedsHighlightedLink = 0;
        patientMedsMedicationLinkCount = 0;        
    }
    
    var elDDLRoute = document.getElementById(patientMedsRouteID);
    if((elDDLRoute) && (!isBlank(currentPatientMedicationTxtBox.value)) && (elDDLRoute.value == ''))
    {
        elDDLRoute.value = '24';
        PatientMedsSetInvalidMedication();
    }
    TogglePillsRefills(elDDLRoute);
}

function PatientMedsSetInvalidMedication()
{
    document.getElementById(patientMedsClassID).innerHTML = "<span class='CallOut'>This Medication does not exist in the system.</span>";
}

function PatientMedsSetValidOrBlankMedication()
{
    document.getElementById(patientMedsClassID).innerHTML = "";
}

function PatientMedsGetList()
{
    var divMedsList = document.getElementById(patientMedsDivMedicationsID);
    
    if (http_request.readyState == 4)
    {
        if (http_request.status == 200)
        {
	        PatientMedsBuildList(http_request.responseXML);
        }
    }
}

function PatientMedsBuildList(medsDOM)
{
    var html;
    var arrMeds;
    var i;
    var divMedsList = document.getElementById(patientMedsDivMedicationsID);
    arrMeds = medsDOM.getElementsByTagName('Medication');
    
    if(arrMeds.length > 0)
    {	            
        if(!divMedsList)
        {            
            var parentEl = document.getElementById(patientMedsSpanContainerID).parentNode;
            var createDivMedsList = document.createElement('div');
            createDivMedsList.id = patientMedsDivMedicationsID;
            createDivMedsList.className = 'fakeDropDown';                
            createDivMedsList.style.width = '600px';                                
            createDivMedsList.style.position = 'absolute';
            createDivMedsList.style.display = 'none';
            parentEl.appendChild(createDivMedsList);
            
            divMedsList = document.getElementById(patientMedsDivMedicationsID);
            
            //Only want to do this the first time
            addEvent(document, 'mouseup', PatientMedsHideList, false);
        }
        divMedsList.innerHTML = '';
        patientMedsMedicationLinkCount = arrMeds.length;
        html = "<ul style='text-align: left;'>";
        for(i=0;i<arrMeds.length;i++)                    
            html += "<li><a id='medLink" + (i+1) + "-" + patientMedsRowIndex + "' onClick='PatientMedsChooseItem(this);' onMouseover='PatientMedsUnSelectItem();' route='" + arrMeds[i].getAttribute('Route') + "' medicationID='" + arrMeds[i].getAttribute('ID') + "' value=\"" + arrMeds[i].getAttribute('MedicationName').replace(/&amp;/, "&") + "\" medicationClass=\"" + arrMeds[i].getAttribute('MedicationClass').replace(/&amp;/, "&") + "\" href='javascript:void(null);'>" + arrMeds[i].getAttribute('FullMedicationDescription').replace(/&amp;/, "&") + "</a></li>";
                    
        html += "</ul>";
        divMedsList.innerHTML = html;        
        
        if(patientMedsShowList)
        {
            if(IE)        
                ShowDivBelowSpan(patientMedsSpanContainerID, patientMedsDivMedicationsID, -4);
            else
                ShowDivBelowSpan(patientMedsSpanContainerID, patientMedsDivMedicationsID, 3);
        }
    }
    else
    {
        CloseDiv(patientMedsDivMedicationsID);
    }
}

function TogglePillsRefills(e)
{

    var idToReplace;
    var ddlRoute;
    var chkPrescriptions;

    if (e.id != null)
        control = e;
    else
        control = get_event_target(e);

    if (control.id.search("ddlRoute") != -1)
    {
        idToReplace = "ddlRoute";
        ddlRoute = control;
        chkPrescriptions = document.getElementById(control.id.replace(idToReplace, "chkPrescriptionMedication"));
    }
    else
    {
        idToReplace = "chkPrescriptionMedication";
        chkPrescriptions = control;
        ddlRoute = document.getElementById(control.id.replace(idToReplace, "ddlRoute"));
    }

    var routeID = ddlRoute.options[ddlRoute.selectedIndex].value;
        
    var numberOfPillsID = control.id.replace(idToReplace, "divNumberOfPills");
    var numberOfRefiillsID = control.id.replace(idToReplace, "divNumberOfRefills");
    
    if (chkPrescriptions != null && chkPrescriptions.checked /*Physician orders check goes  here*/)
    {
        // CR 357 - Don't hide Number of Pills anymore.  It's now labeled "Number of Units". 
        /* 
        switch (routeID)
        {
            case "1":
                document.getElementById(numberOfPillsID).style.display = "";
                break;
                //Buccal
            case "24":
                document.getElementById(numberOfPillsID).style.display = "";
                break
                //Oral
            case "29":  
                //Sublingual          
                document.getElementById(numberOfPillsID).style.display = "";
                break
            default:
                document.getElementById(numberOfPillsID).style.display = "none";
                break
        }
        */
        document.getElementById(numberOfPillsID).style.display = "";
        document.getElementById(numberOfRefiillsID).style.display = "";
    }
    else
    {
        document.getElementById(numberOfPillsID).style.display = "none";
        document.getElementById(numberOfRefiillsID).style.display = "none";
    }
}

function ToggleAdministeredTimes(chkAdministeredAtFacility)
{   
    var administeredTimesRow = document.getElementById(chkAdministeredAtFacility.id.replace("chkAdministeredAtFacility", "trAdministeredTimes"));

    if (chkAdministeredAtFacility.checked)
        administeredTimesRow.style.display = "";
    else
        administeredTimesRow.style.display = "none";  
}