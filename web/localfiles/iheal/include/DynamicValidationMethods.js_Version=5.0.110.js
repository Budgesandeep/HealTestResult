//Methods for adding client side validators that will work on the client the same way as the server control .net validators will

//All of these methods require a span to be acting as the validator on the page.
//The span should have a style of style="color:Red;visibility:hidden;". The Contents
//of the span tag should be what the "Text" Property of a validator control normally is.
//All of these methods require a call to ReInitASPNETValidators() afther all known dynamic validators
//are removed or added. 

//Helper method to choose what kind of validator to add
function AddDynamicValidator(errorSpanID, ctrlToValidateID, errorMessage, regExpr, minValue, maxValue, dataType, decimalChar, display, type, operator, digits, groupChar, groupSize)
{
    if (regExpr)
        InitRegularExpressionValidator(errorSpanID, ctrlToValidateID, errorMessage, regExpr, display);
    else if (minValue && maxValue && dataType && decimalChar)
        InitRangeValidator(errorSpanID, ctrlToValidateID, errorMessage, minValue, maxValue, dataType, decimalChar, display);
    else if (type && operator && decimalChar && digits && groupChar && groupSize)
        InitCompareValidator(errorSpanID, ctrlToValidateID, errorMessage, operator, type, decimalChar, digits, groupChar, groupSize, display);
    else
        InitDynamicRequiredValidator(errorSpanID, ctrlToValidateID, errorMessage, display);
}

function InitDynamicRequiredValidator(errorSpanID, ctrlToValidateID, errorMessage, display)
{
    if(typeof(Page_Validators) != 'undefined')
    {               
        var spnValidator = document.getElementById(errorSpanID);
        spnValidator.controltovalidate = ctrlToValidateID;
        var ctrlToValidate = document.getElementById(spnValidator.controltovalidate);
        if(errorMessage)
            spnValidator.errormessage = errorMessage;
        if (display)
            spnValidator.display = display;
        spnValidator.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
        spnValidator.initialvalue = "";
        Page_Validators.push(spnValidator);
        Page_ValidationActive = false;
        
        AddASPNETValidator(spnValidator);                     
    }
}

function InitRangeValidator(errorSpanID, ctrlToValidateID, errorMessage, minValue, maxValue, dataType, decimalChar, display)
{
    if (typeof(Page_Validators) != 'undefined')
    {
        var spnValidator = document.getElementById(errorSpanID);
        spnValidator.controltovalidate = ctrlToValidateID;
        var ctrlToValidate = document.getElementById(spnValidator.controltovalidate);
        if (errorMessage)
            spnValidator.errormessage = errorMessage;
        if (display)
            spnValidator.display = display;
        spnValidator.evaluationfunction = "RangeValidatorEvaluateIsValid";
        spnValidator.minimumvalue = minValue;
        spnValidator.maximumvalue = maxValue;
        spnValidator.type = dataType;
        spnValidator.decimalchar = decimalChar;
        Page_Validators.push(spnValidator);
        Page_ValidationActive = false;
        
        AddASPNETValidator(spnValidator);
    }
}

function InitRegularExpressionValidator(errorSpanID, ctrlToValidateID, errorMessage, regExpr, display)
{
    if (typeof (Page_Validators) != 'undefined') {
        var spnValidator = document.getElementById(errorSpanID);
        spnValidator.controltovalidate = ctrlToValidateID;
        var ctrlToValidate = document.getElementById(spnValidator.controltovalidate);
        if(errorMessage)
            spnValidator.errormessage = errorMessage;
        if (display)
            spnValidator.display = display;
        spnValidator.evaluationfunction = "RegularExpressionValidatorEvaluateIsValid";
        spnValidator.validationexpression = regExpr;        
        Page_Validators.push(spnValidator);
        Page_ValidationActive = false;
        
        AddASPNETValidator(spnValidator);
    }
}

function InitCompareValidator(errorSpanID, ctrlTovalidateID, errorMessage, operator, type, decimalChar, digits, groupChar, groupSize, display)
{
    if (typeof(Page_Validators) != 'undefined')
    {
        var spnValidator = document.getElementById(errorSpanID);
        spnValidator.controltovalidate = ctrlTovalidateID;
        var ctrlToValidate = document.getElementById(spnValidator.controltovalidate);
        if (errorMessage)
            spnValidator.errormessage = errorMessage;
        if (display)
            spnValidator.display = display;
        spnValidator.evaluationfunction = "CompareValidatorEvaluateIsValid";
        spnValidator.type = type;
        if (type == 'Date')
			spnValidator.dateorder = 'mdy'
        spnValidator.operator = operator;
        spnValidator.decimalchar = decimalChar;
        spnValidator.digits = digits;
        spnValidator.groupchar = groupChar;
        spnValidator.groupsize = groupSize;
        Page_Validators.push(spnValidator);
        Page_ValidationActive = false;
        
        AddASPNETValidator(spnValidator);
    }
  }

function InitCustomValidator(errorSpanID, ctrlToValidateID, errorMessage, text, enableClientScript, clientValidationFunction, validateEmptyText, display)
{
  if (typeof (Page_Validators) != 'undefined')
  {
    var spnValidator = document.getElementById(errorSpanID);
    spnValidator.controltovalidate = ctrlToValidateID;
    var ctrlToValidate = document.getElementById(spnValidator.controltovalidate);
    if (errorMessage)
      spnValidator.errormessage = errorMessage;
    if (display)
      spnValidator.display = display;
    spnValidator.evaluationfunction = "CustomValidatorEvaluateIsValid";
    spnValidator.enableclientscript = enableClientScript;
    spnValidator.clientvalidationfunction = clientValidationFunction;
    spnValidator.validateemptytext = validateEmptyText;
    spnValidator.text = text;
    
    Page_Validators.push(spnValidator);
    Page_ValidateActive = false;

    AddASPNETValidator(spnValidator);
  }
}


function InitDynamicTimeValidator(errorSpanID, ctrlToValidateID, errorMessage) {
    var regExp = "^([1-9]|1[0-2]|0[1-9]){1}(:[0-5][0-9][\\s]*[aApP][mM]){1}$";
    InitRegularExpressionValidator(errorSpanID, ctrlToValidateID, errorMessage, regExp);    
}

function InitDynamicNumberValidator(errorSpanID, ctrlToValidateID, errorMessage)
{
    var regExp = "[-+]?([0-9]*\.[0-9]+|[0-9]+)"; 
    InitRegularExpressionValidator(errorSpanID, ctrlToValidateID, errorMessage, regExp);    
}

function AddASPNETValidator(ctrlValidator)
{
    if(typeof(Page_Validators) != 'undefined')
    {        
        val = ctrlValidator;
        if (typeof(val.evaluationfunction) == "string")         
            eval("val.evaluationfunction = " + val.evaluationfunction + ";");        
        
        if (typeof(val.isvalid) == "string") 
        {
            if (val.isvalid == "False") 
            {
                val.isvalid = false;
                Page_IsValid = false;
            }
            else             
                val.isvalid = true;            
        }         
        else         
            val.isvalid = true;        
        
        //Always set. Hopefully this doesn't cause issues in future, though I don't see why it would
        val.enabled = true;        
        
        if (typeof(val.controltovalidate) == "string")         
            ValidatorHookupControlID(val.controltovalidate, val);                    
        
        if (typeof(val.controlhookup) == "string")         
            ValidatorHookupControlID(val.controlhookup, val);        
        
        Page_ValidationActive = true;
    }
}

function CopyASPNETValidator(validatorID)
{
    var validator = null;
    var i;
    
    if(typeof(Page_Validators) != 'undefined')
    {            
        for(i=0;i<Page_Validators.length;i++)
        {
            if(Page_Validators[i].id == validatorID)
            {
                validator = new cloneObject(Page_Validators[i]);
                break;
            }
        }        
    }
    
    return validator;
}

function RemoveDynamicValidator(errorSpanID)
{
    var spanValidatorToRemove;
    if (errorSpanID == "")
      return;
    else
      spanValidatorToRemove = document.getElementById(errorSpanID);
            
    var indexToRemove = -1;
    var i,j;
    var validatedControl;   
    var validatorEvents = new Array("onblur", "onclick", "onchange", "onkeypress");
    var func;
    
    if((typeof(Page_Validators) != 'undefined') && (spanValidatorToRemove) && (spanValidatorToRemove.controltovalidate))
    {
        validatedControl = document.getElementById(spanValidatorToRemove.controltovalidate);
        if (validatedControl) {
            for (j = 0; j < validatorEvents.length; j++)
                eval("validatedControl." + validatorEvents[j] + " = null;");
        }
        for(i=0;i<Page_Validators.length;i++)
        {            
            if(Page_Validators[i].id == spanValidatorToRemove.id)
            {
                indexToRemove = i;
                break;
            }
        }
        
        if(indexToRemove != -1)
        {
            Page_Validators.splice(indexToRemove,1);            
            spanValidatorToRemove.style.visibility = 'hidden';            
        }                
    }
        
}

