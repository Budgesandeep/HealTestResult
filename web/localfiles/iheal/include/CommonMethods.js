// JScript File

//Global variable for any urls created to use. Probably not needed
var globalWoundExpertDomain = "https://nhs.woundexpert.com";

//Global variable for time to wait after a keypress before doing something. Number is in milliseconds.
var keyPressDelay = 250;

//variables to tell what browser we're using.
var IE, IE7, FireFox;


/*	EventCache Version 1.0
	Copyright 2005 Mark Wubben

	Provides a way for automagically removing events from nodes and thus preventing memory leakage.
	See <http://novemberborn.net/javascript/event-cache> for more information.
	
	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/
/*	Implement array.push for browsers which don't support it natively.
	Please remove this if it's already in other code */
if(Array.prototype.push == null){
	Array.prototype.push = function(){
		for(var i = 0; i < arguments.length; i++){
			this[this.length] = arguments[i];
		};
		return this.length;
	};
};

Array.prototype.Contains = function(containsFunction)
{
  var contains = false;  
  for (var i = 0; i < this.length; i++)
  {      
    if (containsFunction(this[i]))
    {
      contains = true;
      break;
    }
  }
  return contains;
};

Array.prototype.Find = function(selectFunction)
{
  var foundItem = null;    
  for (var i = 0; i < this.length; i++)
  {
    if (selectFunction(this[i]))
    {
      foundItem = this[i];
      break;
    }
  }
  return foundItem;
};

Array.prototype.GroupBy = function(propertyName)
{
  function Group(key)
  {
    this.Key = key;
    this.Items = new Array();
  };

  var groups = new Array();
  var existingGroup;
  var newGroup;
  var value;

  for (var i = 0; i < this.length; i++)
  {
    value = this[i][propertyName];    
    existingGroup = groups.Find(function(group) { return group.Key == value; });
    if (existingGroup != null)
    {
      existingGroup.Items.push(this[i]);
    }
    else
    {
      newGroup = new Group(value);
      newGroup.Items.push(this[i]);
      groups.push(newGroup);
    }
  }
  return groups;
};

Array.prototype.Where = function(selectFunction)
{
  var results = new Array();
  for (var i = 0; i < this.length; i++)
    if (selectFunction(this[i]))
      results.push(this[i]);
  return results;
};

String.prototype.compare = function (stringToCompare) {
    if (this == stringToCompare) {
        return 0;
    }
    else {
        if (this == "")
            return 1;
        else if (stringToCompare == "")
            return -1;
        else {
            if (this < stringToCompare)
                return -1;
            else if (this > stringToCompare)
                return 1;
            else
                return 0;
        }
    }
};

/*	Event Cache uses an anonymous function to create a hidden scope chain.
	This is to prevent scoping issues. */
var EventCache = function(){
	var listEvents = [];	
	return {
		listEvents : listEvents,	
		add : function(node, sEventName, fHandler, bCapture){
			listEvents.push(arguments);
		},	
		flush : function(){
			var i, item;
			for(i = listEvents.length - 1; i >= 0; i = i - 1){
				item = listEvents[i];				
				if(item[0].removeEventListener){
					item[0].removeEventListener(item[1], item[2], item[3]);
				};				
				/* From this point on we need the event names to be prefixed with 'on" */
				if(item[1].substring(0, 2) != "on"){
					item[1] = "on" + item[1];
				};				
				if(item[0].detachEvent){
					item[0].detachEvent(item[1], item[2]);
				};				
				item[0][item[1]] = null;
			};
		}
	};
} ();

// Returns the version of Internet Explorer or a -1 (indicating the use of another browser)
function getInternetExplorerVersion()
{
  var rv = -1; // Return value assumes another browser 
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  }
  return rv;
} 

//addEvent adds an event listener to an element
function addEvent(elm, evType, fn, useCapture) {
  // cross-browser event handling for IE5+, NS6 and Mozilla 
  // By Scott Andrew 
  if(elm) {
      if (elm.addEventListener) { 
        elm.addEventListener(evType, fn, useCapture); 
        return true; 
      } else if (elm.attachEvent) { 
        var r = elm.attachEvent('on' + evType, fn);
        EventCache.add(elm, evType, fn); 
        return r; 
      } else {
        elm['on' + evType] = fn;
      }
   }
}

//Removes an event listener from an element
function removeEvent(elm, evType, fn, userCapture)
{
    if(elm)
    {
      if (elm.removeEventListener) { 
        elm.removeEventListener(evType, fn, userCapture); 
        return true; 
      } else if (elm.detachEvent) { 
        var r = elm.detachEvent('on' + evType, fn);        
        return r; 
      } else {
        elm['on' + evType] = function() {return true;};
      }
    }
}
//Gets the caller for a function.
function get_event_target(e)
{
    if(window.event)
        e=window.event;

    if(e.srcElement) // mozilla
        target = e.srcElement;
    else if(e.target) // IE
        target = e.target;

    return target;
}

//Stops an event from "bubbling up"
function StopEvent(e)
{
    if(window.event)
    {
      window.event.cancelBubble = true;
      window.event.returnValue = false;      
    }
    
    if(e && e.stopPropagation && e.preventDefault)
    {
      e.stopPropagation();
      e.preventDefault();      
    }
}

//function sets what browser is being used.
function DetectBrowser()
{
    var browserID = navigator.userAgent.toLowerCase();    
    
    if(browserID.indexOf('msie') != -1)
    {
        IE = true;
        FireFox = false;
        IE7 = false;
    }
    
    if(browserID.indexOf('msie 7.0') != -1)
    {        
        IE7 = true;
    }
        
    if(browserID.indexOf('firefox') != -1)
    {
        IE = false;
        FireFox = true; 
        IE7 = false;
    }    
    
}

//Hopefully self-explanatory by the function name, the callback parameter
//is the function to run when the response is received back from the server
function makeAjaxRequest(url, callback, parameters, async)
{
    url = PreventCaching(url);

    if (async == undefined)
      async = true;
	
    http_request = false;

    if (window.XMLHttpRequest)  // Mozilla, Safari,...
    {
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType)
        {
	        http_request.overrideMimeType('text/xml');
	        // See note below about this line
        }
    }
    else if (window.ActiveXObject) // IE
    {
        try
        {
	        http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
	        try
	        {
		        http_request = new ActiveXObject("Microsoft.XMLHTTP");
	        }
	        catch (e) {}
        }
    }

    if (!http_request)
    {
        //alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
	
    if(callback)
        http_request.onreadystatechange = callback;
	
	if(!parameters)
	{
	      http_request.open('GET', url, async);
        http_request.send(null);
    }
    else
    {
        http_request.open('POST', url, async);
        http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        http_request.send(parameters);
    }

}

//Posts the form thru ajax so we can get a value back without submitting the form. 
function AJAXPostAspNetForm(formID, submitInputName, callback)
{
    var strParameters = "";
    var arrInputs;
    var arrSelects;
    var arrTextAreas;
    var theForm = document.getElementById(formID);
    var submitName = submitInputName;
    var pageIsValid = true;
    var i;
    
    if((typeof(Page_ClientValidate) == 'function') && (Page_ClientValidate() == false))
        pageIsValid = false;
    
    if((theForm) && (pageIsValid))
    {
        SetEventTarget(submitName, formID);        
        
        arrInputs = theForm.getElementsByTagName('input');
        
        for(i=0;i<arrInputs.length;i++)
        {
            if((arrInputs[i].type == 'text') || (arrInputs[i].type == 'hidden') || (arrInputs[i].type == 'password'))                    
                strParameters += arrInputs[i].name + "=" + encodeURIComponent(arrInputs[i].value) + "&";                    
            
            if((arrInputs[i].type == 'checkbox') && (arrInputs[i].checked))                    
                strParameters += arrInputs[i].name + "=on&";
            
            if((arrInputs[i].type == 'radio') && (arrInputs[i].checked))                    
                strParameters += arrInputs[i].name + "=" + encodeURIComponent(arrInputs[i].value) + "&";                    
        }
        
        arrSelects = theForm.getElementsByTagName('select');
        
        for(i=0;i<arrSelects.length;i++)
        {
            var strValues = "";
            
            for(j=0;j<arrSelects[i].options.length;j++)
            {
                if(arrSelects[i].options[j].selected)                                                    
                    strParameters += arrSelects[i].name + "=" + encodeURIComponent(arrSelects[i].options[j].value) + "&";                        
            }                    
        }
        
        arrTextAreas = theForm.getElementsByTagName('textarea');
        
        for(i=0;i<arrTextAreas.length;i++)
            strParameters += arrTextAreas[i].name + "=" + encodeURIComponent(arrTextAreas[i].value) + "&";                
                                
        if(strParameters.length != 0)
            strParameters = strParameters.substring(0, strParameters.length - 1);                
        
        makeAjaxRequest(theForm.action, callback, strParameters);
    }
}

//Switches an element from being visible, to not being visible
function SwitchVisible(eID)
{
	var el = document.getElementById(eID);

	if(el)
	{
	    if(el.style.display == 'none')
	        el.style.display = '';
	    else
	        el.style.display = 'none';        
	}
}


//Switches an element from being hidden to not hidden
//The difference between this and SwitchVisible is SwitchVisible removes
//the element from the DOM, SwitchHidden just doesn't draw it, but keeps the space for it.
function SwitchHidden(eID)
{
    var el = document.getElementById(eID);            
    
    if(el)
    {            
        if(el.className == "Hidden")                
            el.className = "UnHidden";            
        else            
            el.className = "Hidden";            
    }
}        

//Takes an XML string and returns an XML DOM object for the passed in string
function ParseXMLString(str)
{
     if (window.ActiveXObject)
     {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");     
        xmlDoc.async = false;
        xmlDoc.loadXML(str);
     }
     else if (document.implementation && document.implementation.createDocument)     
     {
        var parser = new DOMParser(); 
        xmlDoc = parser.parseFromString(str, "text/xml"); 
     }
     else     
        return null;
        
     return xmlDoc;             
}

//Populates a drop down with the id in the ddlID parameter with the options in the xmlDOM options parameter. 
//The xml in the xmlDOM must be in the normal HTML options format 
//e.g. <option value='1'>Option 1</option><option value='2'>Option 2</option>
function PopulateDropDown(ddlId, options)
{        
    var SelectElement = document.getElementById(ddlId);
    var i;
    
    SelectElement.length = 0;
    
    arrOptions = options.getElementsByTagName('option');        
    
    for(i=0;i<arrOptions.length;i++)
    {            
        var newOption = document.createElement('option');
        
        if(arrOptions[i].childNodes.length > 0)
            newOption.text = arrOptions[i].childNodes[0].nodeValue
        else
            newOption.text = '';
        
        newOption.value = arrOptions[i].getAttribute('value');
        
        if(arrOptions[i].getAttribute('custom') != null)
            newOption.setAttribute('custom', arrOptions[i].getAttribute('custom'));
            
        if(arrOptions[i].getAttribute('coc') != null)   //Ugly ugly hack for component of care stuff. 
            newOption.setAttribute('coc', arrOptions[i].getAttribute('coc'));
            
        if(arrOptions[i].getAttribute('clinician') != null)   //Ugly ugly hack for clinician. 
            newOption.setAttribute('clinician', arrOptions[i].getAttribute('clinician'));
        
        try{SelectElement.add(newOption, null);}    //Standards Compliant, doesn't work in IE            
            
        catch(ex){SelectElement.add(newOption);}            
    }        
}

//Populates the ddlElement with the options in the xmlDOM options parameter. 
//The xml in the xmlDOM must be in the normal HTML options format 
//e.g. <option value='1'>Option 1</option><option value='2'>Option 2</option>
function PopulateDropDownElement(ddlElement, options)
{    
    var i;
    
    ddlElement.length = 0;    
    arrOptions = options.getElementsByTagName('option');        
    
    for(i=0;i<arrOptions.length;i++)
    {            
        var newOption = document.createElement('option');
        
        if(arrOptions[i].childNodes.length > 0)
            newOption.text = arrOptions[i].childNodes[0].nodeValue
        else
            newOption.text = '';
        
        newOption.value = arrOptions[i].getAttribute('value');
        
        if(arrOptions[i].getAttribute('custom') != null)
            newOption.setAttribute('custom', arrOptions[i].getAttribute('custom'));
        
        try{ddlElement.add(newOption, null);}    //Standards Compliant, doesn't work in IE            
            
        catch(ex){ddlElement.add(newOption);}            
    }        
}

//Constructor for option object
function Option(text, value, parameters) {
	if(!value)
	    value = text;
	    
	this.Value = value;
	this.Text = text;
	this.Parameters = parameters;
}

//Adds an option to the select element with id ddlID
function AddOption(ddlID, option, addSecondLast) {
	var ddlEl = document.getElementById(ddlID);
	var newOption = document.createElement('option');

	newOption.value = option.Value;
	newOption.text = option.Text;

    if(!addSecondLast)
    {
	    try{ddlEl.add(newOption, null);}    //Standards Compliant, doesn't work in IE

	    catch(ex){ddlEl.add(newOption);}
	}
	else
	{
	    var copyOption = document.createElement('option');
	    copyOption.text = ddlEl.options[ddlEl.length - 1].text;
	    copyOption.value = ddlEl.options[ddlEl.length - 1].value;
	    
	    ddlEl.options[ddlEl.length - 1].text = newOption.text;
	    ddlEl.options[ddlEl.length - 1].value = newOption.value;
	    
	    try{ddlEl.add(copyOption, null);}    //Standards Compliant, doesn't work in IE

	    catch(ex){ddlEl.add(copyOption);}	    
	    
	}
}


//Switches the enabled property on all the inputs on a page
function EnableDataEntryPage()
{
  $('iframe').width(694);
	
	$("input").not('[keepDisabled="true"]').each(function() {
    $(this).removeAttr('disabled')
  });
	  
	$("select").not('[keepDisabled="true"]').each(function() {
	  $(this).removeAttr('disabled')
	});
	  
	$("textarea").not('[keepDisabled="true"]').each(function() {
	  $(this).removeAttr('disabled')
	});

  $('a[removeOnModify=true]').each(function() {
    $(this).remove();
  });
    
  $('a[showOnModify=true]').each(function() {
    $(this).css('display', '');
  });
	  	
  ShowApplets();

  CloseCenteredDiv('eSigsWarning');
}

//Disables a data entry page
function DisableDataEntryPage()
{  
  var preventDisableAttr = 'preventModifyDisable';

  $("input").not("[" + preventDisableAttr + "=true]").each(function() {
    $(this).attr("disabled", "disabled");
  });

  $("select").not("[" + preventDisableAttr + "=true]").each(function() {
    $(this).attr("disabled", "disabled");
  });

  $("textarea").not("[" + preventDisableAttr + "=true]").each(function() {
    $(this).attr("disabled", "disabled");
  });

  $("a").not("[" + preventDisableAttr + "=true]").each(function() {
    if ($(this).css('visibility') == 'hidden' || $(this).css('display') == 'none')
      $(this).attr('keephidden', 'true');
    else {
      var tempAnchor = $(this).clone();
      tempAnchor.attr('id', $(this).attr('id') + 'tmp').attr('href', 'javascript:void(null);');
      tempAnchor.attr('onclick', '').unbind('click').attr('onmouseover', '').unbind('mouseover');
      tempAnchor.attr('removeOnModify', 'true');
      $(this).attr('showOnModify', 'true').css('display', 'none').before(tempAnchor);
    }
  });
   	
  HideApplets();			
}

// isBlank(value)
//   Returns true if value only contains spaces
function isBlank(val)
{
    var i;
    
	if(val==null){return true;}
	
	for(var i=0;i<val.length;i++)
	{
		if ((val.charAt(i)!=' ')&&(val.charAt(i)!="\t")&&(val.charAt(i)!="\n")&&(val.charAt(i)!="\r")){return false;}
	}
	
	return true;
}

//Prevents the caching of a page accessed by javascript in IE
function PreventCaching(url)
{
    var newUrl;
    
    newUrl = url;
    
    if(newUrl.indexOf('?') != -1)	//has ?	        
        newUrl += "&ms=" + new Date().getTime();	        
    else	        
        newUrl += "?ms=" + new Date().getTime();
        
    return newUrl;
}

//Create a full screen modal window for the url passed in
//Will Primarily be used by PatientActivity
function CreateFullScreenModal(url, windowName)
{
    /*    
    var width, height, winHndl;            
   
    width = window.screen.width;
    height = window.screen.height;   
    url = PreventCaching(url);
    
    if (window.showModalDialog)    
        winHndl = window.showModalDialog(url,window.self,"dialogWidth:" + width + "px;dialogHeight:" + height + "px;scroll=yes");    
    else    
        winHndl = window.open(url,'FullScreenModalWindow','height=' + height + ',width=' + width + ',scrollbars=yes,modal=yes');    
        
    return winHndl;
    */
    
    return CreateFakeFullScreenModal(url, windowName);
}

//Create a full screen window for the url passed in
//Isn't a modal window, but will look like one. Need to do this because IE won' display PDFs in a modal window. 
function CreateFakeFullScreenModal(url, windowName)
{            
    var width, height
    
    width = window.screen.width;
    height = window.screen.height;
    
    return CreateWindowedModal(url, windowName, height, width);
}

function CreateWindowedModal(url, windowName, height, width)
{
	var winHndl, windowOptions;

	if (IE) {
		width -= 10;
		height -= 10;
	}

	if (IE)
		windowOptions = 'height=' + height + ',width=' + width + ',top=0,left=0,scrollbars=yes,menubar=no,toolbar=yes';
	else
		windowOptions = 'height=' + height + ',width=' + width + ',top=0,left=0,scrollbars=yes,menubar=yes,toolbar=no';

	url = PreventCaching(url);

	if (windowName)
		winHndl = window.open(url, windowName, windowOptions);
	else
		winHndl = window.open(url, 'FakeFullScreenModalWindow', windowOptions);

	return winHndl;
}

//Create a full screen window for the url passed in
//Isn't a modal window, but will look like one. Need to do this because IE won' display PDFs in a modal window. 
function CreatePageListNavWindow(url, windowName)
{
    var width, height, left, top, winHndl, windowOptions;

    width = 1200;
    height = 900;

    left = (window.screen.width / 2) - (width / 2);
    top = (window.screen.height / 2) - (height / 2);

    if (IE)
    {
        width -= 10;
        height -= 10;
    }

    if (IE)
        windowOptions = 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',scrollbars=yes,menubar=no,toolbar=yes';
    else
        windowOptions = 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left + ',scrollbars=yes,menubar=yes,toolbar=no';

    url = PreventCaching(url);

    if (windowName)
        winHndl = window.open(url, windowName, windowOptions);
    else
        winHndl = window.open(url, 'FakeFullScreenModalWindow', windowOptions);

    return winHndl;
}


//Force the creation of actualy modal window
function ForceCreateFullScreenModal(url, windowName)
{        
    var width, height, winHndl;            
   
    width = window.screen.width;
    height = window.screen.height;   
    url = PreventCaching(url);
    
    if (window.showModalDialog)    
        winHndl = window.showModalDialog(url,window.self,"dialogWidth:" + width + "px;dialogHeight:" + height + "px;scroll=yes");    
    else    
        winHndl = window.open(url,'FullScreenModalWindow','height=' + height + ',width=' + width + ',scrollbars=yes,modal=yes');    
        
    return winHndl;        
}

//Hides a select and label if the select's value matches valueToCheckFor
function DropDownToggle(ddlToCheck, displayLabel, valueToCheckFor)
{
	var lbl = document.getElementById(displayLabel);
	var ddl = document.getElementById(ddlToCheck);
	
	if (lbl && ddl)
	{
	    if (ddl.value == valueToCheckFor)  
            lbl.style.display = '';  
        else
            lbl.style.display = 'None';  
	}   
}

//Only used in scheduling pages. Checks to see if at least two checkboxs are checked
function validateDays(frm) 
{
 if(numberOfCks(frm) > 0) 
 {
     if(numberOfCks(frm) < 2) {
         alert('Please select at least one Day for the recurring schedule');
         return false;
     }
     return true;
 }
 return true;
}

//Gets the number of checkboxs in a form
function numberOfCks(frm) {
var i;
ck = 0;
for(i = 0; i < frm.elements.length; i++) {
   elem = frm.elements[i];
   if(elem.type && elem.type.toLowerCase() == 'checkbox' && elem.checked) ck++;
}
return ck;
}

//Creates an IFrame shim for the given div
function CreateIFrameShim(divID)
{
    if(IE)
    {
        var divEl = document.getElementById(divID);
        if(divEl)
        {
            var iFrmID = 'iFrm' + divID;
	        var iFrm = document.getElementById(iFrmID);
            
            if(!iFrm)
	        {
		        var parentEl = divEl.parentNode;
		        var newIFrm = document.createElement('iframe');
		        newIFrm.id = iFrmID;
		        // DF1119: This was outputting 'false' when making the iFrame.
		        //newIFrm.src = 'javascript:false;';
		        newIFrm.setAttribute('scrolling', 'no');
		        newIFrm.setAttribute('frameborder', '0');
		        newIFrm.style.position = 'absolute';
		        newIFrm.style.top = '0px';
		        newIFrm.style.left = '0px';
		        newIFrm.style.display = 'none';
		        parentEl.appendChild(newIFrm);

		        iFrm = document.getElementById(iFrmID);
	        }
    	    
	        return iFrm;
        }
        else
        {
            return null;
        }
    }    
}

//Moves and resizes the IFrame shim. The div must be visible before this is called.
function MoveIFrameShim(divID)
{
    if(IE)
    {
        var divEl = document.getElementById(divID);
        var iFrmID = 'iFrm' + divID;
	    var iFrm = document.getElementById(iFrmID);
    	
	    if((divEl) && (iFrm))
	    {
	        //Set IFrame up because IE sucks
		    iFrm.style.width = divEl.offsetWidth;
		    iFrm.style.height = divEl.offsetHeight;
		    iFrm.style.top = divEl.style.top;
		    iFrm.style.left = divEl.style.left;
		    iFrm.style.zIndex = divEl.style.zIndex - 1;
            iFrm.style.display = "block";
	    }
	}
}

//Closes an IFrame shim
function CloseIFrameShim(divID)
{
    if(IE)
    {
        var iFrmID = 'iFrm' + divID;
	    var iFrm = document.getElementById(iFrmID);
    	
	    if(iFrm)
	        iFrm.style.display = 'none';
	}
}

//Hides the given div. This can probably be replaced by SwitchVisible. Although CloseDiv also closes the IFramShim
function CloseDiv(divID)
{    
    var divEl = document.getElementById(divID);
    var iFrm = document.getElementById('iFrm' + divID);
    
    if(divEl)
        divEl.style.display = 'none';
    
    CloseIFrameShim(divID);        
}

//Function hides all applets contained within parentElement. If parentElement is not set, the whole document is used.
//Set an attribute so applets hidden based on page logic, remain hidden.
function HideApplets(parentElement)
{
    var container;
    var arrApplets;
    var i;
    
    if(parentElement)
        container = parentElement;
    else
        container = document;
        
    arrApplets = container.getElementsByTagName('applet');
    
    for(i=0;i<arrApplets.length;i++)
    {
        if(arrApplets[i].style.visibility == 'hidden')
            arrApplets[i].setAttribute('keepHidden', 'true');
        
        arrApplets[i].style.visibility = 'hidden';
    }    
}

//Function shows all applets contained within parentElement. If parentElement is not set, the whole document is used.
//Reads an attribute so applets hidden based on page logic, remain hidden.
function ShowApplets(parentElement)
{
    var container;
    var arrApplets;
    var i;
    
    if(parentElement)
        container = parentElement;
    else
        container = document;
        
    arrApplets = container.getElementsByTagName('applet');
    
    for(i=0;i<arrApplets.length;i++)
    {
        if(arrApplets[i].getAttribute('keepHidden') != 'true')
            arrApplets[i].style.visibility = 'visible';
    }    
}

//Displays the given Div offset below the given span. If offset is null it is set to 1
function ShowDivBelowSpan(spanID, divID, offset, leftOffset)
{
    var spnEl = document.getElementById(spanID);
    var divEl = document.getElementById(divID);    
    
    if(!offset)
        offset = 1;

    if (!leftOffset)
        leftOffset = 0;
    
    CreateIFrameShim(divID);

    if ((spnEl) && (divEl)) 
    {
        var spnPosition = $(spnEl).position();
        divEl.style.left = (spnPosition.left + leftOffset) + 'px';
        divEl.style.top = (spnPosition.top + $(spnEl).height() + offset) + 'px';
        //divEl.style.left = (spnEl.offsetLeft + leftOffset) + 'px';
		//divEl.style.top = (spnEl.offsetTop + spnEl.offsetHeight + offset) + 'px';
		
		divEl.style.zIndex = 50;
		divEl.style.display = 'block';		
		
		MoveIFrameShim(divID);
    }
}



//Sets the eventtarget hidden variable so asp.net is fooled into thinking we clicked a button with the uniqueID of value
function SetEventTarget(value, formID)
{
    var frm;
	var eventTarget = document.getElementById('__EVENTTARGET');
	
	if(!formID)
	    frm = document.getElementsByTagName('Form')[0];
	else
	    frm = document.getElementById(formID);
	
	if(eventTarget)
		eventTarget.parentNode.removeChild(eventTarget);

	var fakeSubmit = document.createElement('input');
	fakeSubmit.name = '__EVENTTARGET';
	fakeSubmit.type = 'hidden';
	fakeSubmit.value = value;
	frm.appendChild(fakeSubmit);
	
	return frm;
}

//Switches all radion buttons in a table with id tblName to the value valueToSet
function switchButtons(tblName, valueToSet)
{			
	var arrInput = document.getElementById(tblName).getElementsByTagName("input");
	if(!arrInput)
	   return;
	var i;
  
	for (i = 0;i < arrInput.length;i++)
	{
		if (arrInput[i].type == 'radio')
		{					
			arrInput[i].checked = arrInput[i].value == valueToSet;
		}
	}
  
}

//Gets the window's opener(parent window)
function GetWindowOpener()
{
    var opener;
      
    if(window.dialogArguments)    
        opener = window.dialogArguments;    
    else    
        opener = window.opener;
        
    return opener;    
}

//Removes a cookie on the client side
function RemoveCookie(name) {
	
	var value = "";
	var date = new Date();
	date.setTime(date.getTime()+(-1*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();	
	
	document.cookie = name+"="+value+expires+"; path=/";
}

//Removes all Cookies on the client side
function RemoveAllCookies()
{
    var i;
    var arrCookies = document.cookie.split(';');
    for(i=0;i<arrCookies.length;i++)
    {
        var arrCookieInfo = arrCookies[i].split('=');
        RemoveCookie(arrCookieInfo[0]);
    }
}


//Spiders looking for tags with a class name.
function getElementsByClassName(oElm, strTagName, strClassName){
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];      
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }   
    }
    return (arrReturnElements)
}

//return the elements that was clicked
function GetElementClicked(e)
{
    var targ;
	if (!e) var e = window.event
	if (e.target) targ = e.target
	else if (e.srcElement) targ = e.srcElement	

	return targ;
}


//Trims all whitespace off the ends of a string
function trimAll(sString)
{
	while (sString.substring(0,1) == ' ')	
		sString = sString.substring(1, sString.length);
	
	while (sString.substring(sString.length-1, sString.length) == ' ')	
		sString = sString.substring(0,sString.length-1);
	
	return sString;
}

//Refreshes the page on the client
function RefreshPage()
{
    if(IE7)
        window.location.href = window.location.href;
    else
        window.location.reload();       
}

//Gets the Control ID set by the developer, parsing out what .Net does
function GetControlID(inputID)
{
    var arrParts = inputID.split('_');
    return arrParts[arrParts.length - 1];    
}

//Gets the id prefix for a control that .Net generated
function GetControlIDPrefix(inputID)
{
    var arrParts = inputID.split('_');
    var prefix = "";
    var i;
    
    for(i=0;i<arrParts.length - 1;i++)
        prefix += arrParts[i] + "_";
        
    return prefix;
}

//Gets the Control Name set by the developer, parsing out what .Net does
function GetControlName(inputName)
{
    var arrParts = inputName.split('$');
    return arrParts[arrParts.length - 1];    
}

//Gets the name prefix for a control that .Net generated
function GetControlNamePrefix(inputName)
{
    var arrParts = inputName.split('$');
    var prefix = "";
    var i;
    
    for(i=0;i<arrParts.length - 1;i++)
        prefix += arrParts[i] + "$";
        
    return prefix;
}

//Returns a clone of the passed in obj. Use as a constructor
function cloneObject(objToClone) 
{
    var i;
    for (i in objToClone)
        this[i] = objToClone[i];    
}

//Adds the new physician to all Physician selects on the page. 
//Determines whether WoundCare, Referring, or Primary Care should be added.
function AddToAllPhysicianLists(newOption)
{
    var arrSelects = document.getElementsByTagName('select');
    var i, addToList;
    var physicianType = "";    
    
    if(!isBlank(newOption.Parameters))
        physicianType = newOption.Parameters.toLowerCase();
    
    for(i=0;i<arrSelects.length;i++)
    {
        addToList = false;
        
        if((!isBlank(arrSelects[i].getAttribute('physicianddl'))) && (arrSelects[i].getAttribute('physicianddl').toLowerCase() == 'true'))
        {                        
            if(((isBlank(arrSelects[i].getAttribute('woundcare'))) || (arrSelects[i].getAttribute('woundcare').toLowerCase() != 'false')) && (physicianType.indexOf('woundcare') != -1))
                addToList = true;
                
            if((!isBlank(arrSelects[i].getAttribute('referringphysician'))) && (arrSelects[i].getAttribute('referringphysician').toLowerCase() == 'true') && (physicianType.indexOf('referring') != -1))
                addToList = true;
                
            if((!isBlank(arrSelects[i].getAttribute('primarycare'))) && (arrSelects[i].getAttribute('primarycare').toLowerCase() == 'true') && (physicianType.indexOf('primarycare') != -1))
                addToList = true;

            if ((!isBlank(arrSelects[i].getAttribute('attending'))) && (arrSelects[i].getAttribute('attending').toLowerCase() == 'true') && (physicianType.indexOf('attending') != -1))
                addToList = true;
                
            if((arrSelects[i].getAttribute('woundcare') == null) && (arrSelects[i].getAttribute('referringphysician') == null) && (arrSelects[i].getAttribute('primarycare') == null) && (arrSelects[i].getAttribute('attending') == null))
                addToList = true;
                
            if(addToList)    
                AddOption(arrSelects[i].id, newOption, true);
        }
    }    
}

//Adds the new clinician to all Clinician selects on the page
function AddToAllClinicianLists(newOption)
{
    var arrSelects = document.getElementsByTagName('select');
    var i;
    
    for(i=0;i<arrSelects.length;i++)
    {
        if((!isBlank(arrSelects[i].getAttribute('clinicianddl'))) && (arrSelects[i].getAttribute('clinicianddl').toLowerCase() == 'true'))
            if ((!isBlank(arrSelects[i].getAttribute('addtobottom'))) && (arrSelects[i].getAttribute('addtobottom').toLowerCase() == "true"))
            {
                AddOption(arrSelects[i].id, newOption, false);
                $('#' + arrSelects[i].id).val(newOption.Value).change();
            }
            else
                AddOption(arrSelects[i].id, newOption, true);        
    }
}

function AddToAllPhysicalTherapistLists(newOption)
{
    var arrSelects = document.getElementsByTagName('select');
    var i;
    
    for (i=0;i<arrSelects.length;i++)
    {
        if ((!isBlank(arrSelects[i].getAttribute('physicaltherapistddl'))) && (arrSelects[i].getAttribute('physicaltherapistddl').toLowerCase() == 'true'))
            AddOption(arrSelects[i].id, newOption, true);
    }
}

function ShowPDFGenerationMessage(imagePath)
{
    var divWindow = document.createElement('div');
    var tableHTML;
    
    divWindow.id = 'divPDFGenerating';    
    divWindow.style.position = 'absolute';
    divWindow.style.display = 'none';
    divWindow.style.width = '400px';
    divWindow.style.border = '2px ridge gray';
    
    tableHTML = "<table width='100%'><tr><td align='center'><span style='font-family:arial;font-size:14px;font-weight:bold;'>Generating PDF, please wait...</span></td></tr>";
    tableHTML += "<tr><td>&nbsp;</td></tr>";
    tableHTML += "<tr><td>&nbsp;</td></tr>";
    tableHTML += "<tr><td align='center'><img src='" + imagePath + "' /></td></tr></table>";
    
    divWindow.innerHTML = tableHTML;
    
    document.getElementsByTagName('body')[0].appendChild(divWindow);
    
    document.getElementById('divHideContent').style.display = 'none';
    
    ShowCenteredDiv(divWindow.id, true, 0, 100, true);    
    
}

//Gets the current style property, taking into account CSS classes and inline styles
//oElm is the element to check, strCssProperty is the CSS property to check on the element
function GetStyleProperty(oElm, strCssProperty)
{
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle)
    {
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssProperty);
    }
    else if(oElm.currentStyle)
    {
        strCssProperty = strCssProperty.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssProperty];
    }
    return strValue;
}

//Takes a control reference (what you get from document.GetElementById('foo'); and
//recurses over child elements to find checkbox, dropdownlist, textbox , and radio button inputs 
//and resets them to default state.
//NOTE, Radio buttons are assumed that initial state will be N/A, which is "1"
//Possible future extensions may be to do hidden inputs, offer radio button default value as paremeter
//or to allow an id to be passed in instead of a control reference. 
function ClearAllInputs(parentControlReference)
{    
    if (parentControlReference)
    {
        var inputControls = parentControlReference.getElementsByTagName('input');    
        if (inputControls)
        {
            for (var z = 0; z < inputControls.length; z++)
            {       
                if (inputControls[z].type == 'checkbox')
                {
                    inputControls[z].checked = false;
                }
                
                if (inputControls[z].type == 'text')
                {
                    inputControls[z].value = '';
                }
                
                if (inputControls[z].type == 'radio' && inputControls[z].value == '1')
                {
                    //TODO : This line is untested
                    inputControls[z].checked = true;
                }
            }                    
        }        
        var selectControls = parentControlReference.getElementsByTagName('select');
        if (selectControls)
        {            
            for (var s = 0; s < selectControls.length; s++)            
            {                
                selectControls[s].selectedIndex = 0;
            }                                        
        }
    }
}

//Helper function to hide / show sub-items on a form.  
//    Element Type: tag name of items to recurse, typically 'tr'
//ElementClassName: cssClass of elements to find,
//        RowState: true or false
//Note: setting the rowstate to false will clear all inputs on the field.
function ToggleSubItems(ElementType, ElementClassName, RowState)
{
    var RowToCollapseStyle = '';
    if (RowState == false)
        RowToCollapseStyle = 'none';

	var rowsToHide = getElementsByClassName(document, ElementType, ElementClassName);             
	for (var loop = 0; loop < rowsToHide.length; loop++)
	{       
		rowsToHide[loop].style.display = RowToCollapseStyle;                                              
		if (RowToCollapseStyle == 'none')
	        {
        		ClearAllInputs(rowsToHide[loop]);                   
        	}      
	}
}

//Pass in a ddl reference and up to 5 optional negative text states, returns true or false
//Used as helper function to figure out if a a ddl should have its sub-items shown or not
//Used when expression is easier in terms of what will return a false result,
//also examines common no states such as "no", "", and "None"
//Note that the function will misbehave if you supply, "" as a parameter..
function IsDDLNegative(DDLReference, no1, no2, no3, no4, no5)
{
    var returnValue = true;
    
    if (DDLReference)
    {
        var intSelectedIndex = DDLReference.selectedIndex;
        
        if (intSelectedIndex)
        {
            var strSelectedValue = DDLReference.options[intSelectedIndex].text;                
            if (strSelectedValue)
            {
                if (strSelectedValue == '' || strSelectedValue == ' ' || strSelectedValue.toLowerCase() == 'no' || strSelectedValue.toLowerCase() == 'none')
                    returnValue = false;
                if (strSelectedValue == no1 || strSelectedValue == no2 || strSelectedValue == no3 || strSelectedValue == no4 || strSelectedValue == no5)
                    returnValue = false;
            }            
        }
        else
        {
            returnValue = false;                 
        }
          
    }    
    return returnValue; 
}

//Pass in a ddl reference and up to 5 optional positive text states, returns true or false
//Used as helper function to figure out if a a ddl should have its sub-items shown or not
//Used when expression is easier in terms of what will return a true result.
function IsDDLPositive(DDLReference, yes1, yes2, yes3, yes4, yes5)
{
    var returnValue = false;
    
    if (DDLReference)
    {
        var intSelectedIndex = DDLReference.selectedIndex;
        if (intSelectedIndex)
        {
            var strSelectedValue = DDLReference.options[intSelectedIndex].text;                
            if (strSelectedValue)
            {
                if (strSelectedValue == yes1 || strSelectedValue == yes2 || strSelectedValue == yes3 || strSelectedValue == yes4 || strSelectedValue == yes5)
                    returnValue = true;
            } 
        }  
        else
        {
            returnValue = false;  //TODO, I'm not sure if we want this to be true or false.
        }      
    }    
    return returnValue; 
}

// parseDecimal Functions like javascript parseInt and parseFloat, except with the following two exceptions.
//the function will strip all characters that are non-numeric before attemting to provide a return value
//plus you can provide any number of decimal places to round it to or truncate it at. If negative number will put the
// negative sign back before returning value. 

function parseDecimal(d, zeros, trunc) {
	 if (!d){ return;}
    
    var isNegative = false;
    var returnValue;
  
    if(d.substring(0,1) == '-'){isNegative = true;}
	

	d=d.replace(/[a-zA-Z\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\|\[\]\\\:\"\;'\<\>\?\,\/\~\`]/g,"");
	while (d.indexOf(".") != d.lastIndexOf("."))
		d=d.replace(/\./,"");
	if (typeof zeros == 'undefined' || zeros == "") {
		returnValue = parseFloat(d);
		}
	else {
		var mult = Math.pow(10,zeros);
		if (typeof trunc == 'undefined' || (trunc) == false)
			returnValue = parseFloat(Math.round(d*mult)/mult);
		else
			returnValue =  parseFloat(Math.floor(d*mult)/mult);
		}

	 if (isNegative){
		returnValue = '-' + returnValue
	 }
     return returnValue;
}

//Recursive function that examines all parent elements for style.display property.
//If any parent element is 'none' then the function will return false.
function IsElementVisible(element)
{
    var isVisible = true;
    
    if (element)
    {
        while(element.parentNode)
        {
            if (element.style && element.style.display && element.style.display == 'none')
            {
                isVisible = false;
                break;
            }            
	        element = element.parentNode;	    
	    }
    }    
	return isVisible;
}


//  Contains methods to manipulate date and time values


//Check to see if timeToCheck is between beginTime and endTime
//the function arguments are all javascript Date objects
function IsDateTimeBetween(timeToCheck, beginTime, endTime)
{
	return ((timeToCheck >= beginTime) && (timeToCheck <= endTime));		
}

//Checks to see if two Date objects have the same time
function IsTimeEqual(timeOne, timeTwo)
{
	return ((timeOne.getHours() == timeTwo.getHours()) && (timeOne.getMinutes() == timeTwo.getMinutes()) && (timeOne.getSeconds() == timeTwo.getSeconds()));
}

//Takes a Date object and returns a string in the AM PM format
function Convert24HourTimeToAMPM(time)
{
	var ampmTime;
	var Hours = time.getHours();
	var minutes = time.getMinutes();
	var ampm = "AM";		
		
	if (Hours == 0) 
		Hours = 12;
	else
	{					
		if (Hours > 11)
			ampm = "PM";
		
		if (Hours > 12)
			Hours -= 12;
	}
		
	Hours = leadingZero(Hours);
	minutes = leadingZero(minutes);
		
	ampmTime = Hours + ":" + minutes + " " + ampm;
		
	return ampmTime;
}
	
//Takes the hours, minutes, and am or pm and returns a Date object with that time set
//the parameter ampm is either "am" or "pm"
function ConvertAMPMTimeTo24Hour(hours, minutes, ampm)
{
	var AM;
	var newDate = new Date();
	var iHours = parseInt(removeLeadingZero(hours));
	var iMinutes = parseInt(removeLeadingZero(minutes));	
		
	if(ampm.toLowerCase() == "am") 
		AM = true;
	else
		AM = false;
			
	if((AM) && (iHours == 12))
		iHours = 0;
		
	if((!AM) && (iHours != 12))
		iHours += 12;	
			
	newDate.setHours(iHours);
	newDate.setMinutes(iMinutes);
	newDate.setSeconds(0);		
		
	return newDate;
}

//Helper function that takes a string of AM/PM time and then calls the 
//function ConvertAMPMTimeTo24Hour(hours, minutes, ampm). ampmTime must be in the format HH:MM AM/PM
function ConvertAMPMStringTo24HourTime(ampmTime)
{	
	var arrTimeAndAMPM = ampmTime.split(' ');
		
	if(arrTimeAndAMPM.length > 0)
	{
		var arrHoursAndMinutes = arrTimeAndAMPM[0].split(':');
		
		if(arrHoursAndMinutes.length > 0)
			return ConvertAMPMTimeTo24Hour(arrHoursAndMinutes[0], arrHoursAndMinutes[1], arrTimeAndAMPM[1]);		
		else
			return null;
	}
	else
	{
		return null;
	}
}
	
//Adds a leading zero to a number if its less than 10
function leadingZero(nr)
{
	if (nr < 10) nr = "0" + nr;
	return nr;
}

//Removes a leading zero
function removeLeadingZero(nr)
{
	if(nr.substring(0,1) == "0")			
		nr = nr.substring(1, (nr.length));
				
	return nr;
}

//Returns whether a string is in a date format or not. 
function isDate(value)
{  
  var testDate = new Date(value);
  var dateValue = testDate.getFullYear();  
  return !isNaN(dateValue);
}

//Calls the DetectBrowser on load so we'll know what browser we're using
addEvent(window, 'load', DetectBrowser, false);

//Calls EventCache.flush on unload so IE doesn't leak memory if there are circular references.
addEvent(window, 'unload', EventCache.flush, false);

//Replaces a null JSON value with an empty string
function replaceJSONNull(val)
{
  return (val == null ? "" : val);
}


// The following two functions are more ampm/24 hour converters.
// These were added for display purposes, and you can pass
// either format of a string and get back the correct one.
// So if you call GetTwelveHourTimeString on a string that is already
// 12 hour time, you will get a valid 12 hour time back.
function GetTwelveHourTimeString(TimeString)
{
    var returnTimeString = TimeString;
    returnTimeString = returnTimeString.replace(/^\s*/, "").replace(/\s*$/, "")

    var ampm = 'AM';
    var firstColonPos = returnTimeString.indexOf(':');
    var hour = parseInt(returnTimeString.substring(0, firstColonPos).replace(/^[0]+/g, ""));

    if (!isNaN(hour))
    {
        if (hour > 12)
        {
            hour = hour - 12;
            ampm = 'PM';
        }

        if (hour.toString().length == 1)
            hour = '0' + hour;
            
        returnTimeString = hour + returnTimeString.substring(firstColonPos);

        var amPmIndex = returnTimeString.toUpperCase().indexOf('PM');
        if (amPmIndex == -1)
            amPmIndex = returnTimeString.toUpperCase().indexOf('AM');
        else
            ampm = 'PM';

        if (amPmIndex > -1)
            returnTimeString = returnTimeString.substring(0, amPmIndex) + ampm;
        else
            returnTimeString = returnTimeString + ' ' + ampm;
    }

    return returnTimeString;
}

function GetTwentyFourHourTimeString(TimeString)
{
    var returnTimeString = TimeString;
    returnTimeString = returnTimeString.replace(/^\s*/, "").replace(/\s*$/, "");

    var pm = false;

    var amPmIndex = returnTimeString.toUpperCase().indexOf('PM');
    if (amPmIndex > -1)
        pm = true;
    else
        amPmIndex = returnTimeString.toUpperCase().indexOf('AM');

    if (amPmIndex > -1)
        returnTimeString = returnTimeString.substring(0, amPmIndex);

    returnTimeString = returnTimeString.replace(/^\s*/, "").replace(/\s*$/, "");

    var firstColonPos = returnTimeString.indexOf(':');
    var hour = parseInt(returnTimeString.substring(0, firstColonPos).replace(/^[0]+/g, ""));
    if (!isNaN(hour))
    {
        if (pm && hour < 12)
            hour = hour + 12;
        else if (!pm && hour == 12)
            hour = 0;

        if( hour.toString().length == 1 )
            hour = '0' + hour;

        returnTimeString = hour + returnTimeString.substring(firstColonPos);
    }

    return returnTimeString;
}
var DocumentLibrary = {};

DocumentLibrary.Load = function(documentID)
{
  var document;
  
  $.ajax({
    url: this.JSONFactoryPath,
    data: { DocumentID: documentID },
    dataType: 'json',
    async: false,
    success: function(data) { document = data; }
  });

  return document;
};

//Will scroll to an element and attempt to place the element in the middle of the screen vertically
//Scrolling will be immediate, giving the appearance of the page jumping
function ScrollToElement(element)
{
  $('html, body').scrollTop(element.offset().top - (document.documentElement.clientHeight / 2));
}

//Will scroll to an element and attempt to place the element in the middle of the screen vertically
//Scrolling will be animated so the user can see the page scrolling
function ScrollToElementAnimated(element)
{
  $('html, body').animate({ scrollTop: element.offset().top - (document.documentElement.clientHeight / 2) });
}

function Print(documentID, documentName, patientID, visitID, visitDate, printURL, isDocumentationView) {
    if (!printURL)
        printURL = '../AccessLog/LogPrint';

    $.ajax({
        url: printURL,
        data: { encDocumentID: documentID, documentName: documentName, encPatientID: patientID, encVisitID: visitID, visitDate: visitDate, isDocumentationView: isDocumentationView },
        dataType: 'json',
        type: 'POST'
    });

    window.print();
}