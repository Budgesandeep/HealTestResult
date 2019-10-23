// Methods for using a woundexpert "centered div"
(function ($) {
    $.fn.makeScrollable = function (options) {
        var $this = this;
        var $scrollContainer = $this.find("div.scrollContainer");

        var settings = $.extend({
            gapOnBottom: 150,
            windowHeight: $(window).height(),
            overflow: 'auto'
        }, options || {});

        this.renderScrolling = function () {
            if ($scrollContainer.length > 0) {
                var scrollPos = $scrollContainer.scrollTop();
                var availableSpace = settings.windowHeight - ($this.position().top - $(window).scrollTop()) - settings.gapOnBottom;
                $scrollContainer.height('auto');
                if ($scrollContainer.height() > availableSpace)
                    $scrollContainer.css({ 'height': availableSpace + 'px', 'overflow': settings.overflow });
                else
                    $scrollContainer.css({ 'height': 'auto', 'overflow': '' });

                $scrollContainer.scrollTop(scrollPos);
            }
        };

        this.scrollToBottom = function () {
            if ($scrollContainer.length > 0)
                $scrollContainer.scrollTop($scrollContainer.prop("scrollHeight"));
        };

        this.scrollToTop = function () {
            if ($scrollContainer.length > 0)
                $scrollContainer.scrollTop(0);
        };
    };

})(jQuery);

// Browser Window Size and Position
// copyright Stephen Chapman, 3rd Jan 2005, 8th Dec 2005
// you may copy these functions but please keep the copyright notice as well
function pageWidth()
{
	return window.innerWidth != null ? window.innerWidth:document.documentElement &&  document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body != null ? document.body.clientWidth:null;
}

function pageHeight()
{
	return window.innerHeight != null ? window.innerHeight: document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body != null? document.body.clientHeight:null;
}

function posLeft()
{
	return typeof window.pageXOffset != 'undefined' ? window.pageXOffset:document.documentElement && document.documentElement.scrollLeft ? document.documentElement.scrollLeft:document.body.scrollLeft ? document.body.scrollLeft:0;
}

function posTop()
{
	return typeof window.pageYOffset != 'undefined' ? window.pageYOffset:document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop:document.body.scrollTop ? document.body.scrollTop:0;
}

function posRight()
{
	return posLeft()+pageWidth();
}

function posBottom()
{
	return posTop()+pageHeight();
}

//Coordinate Constructor
function Coordinate(left, top)
{
	this.Left = left;
	this.Top = top;
}

//Returns a coordinate representing the center of the current view of the screen
function GetCenterOfScreen()
{
	var x,y;
	var center;

	x = (pageWidth() / 2);
	y = ((posBottom() / 2) + (posTop() / 2));

	center = new Coordinate(x,y);

	return center;
}

//Return a coordinate representing the point that will center a given div
function GetCenterOfScreenForDiv(divWidth, divHeight)
{
	var center, centerForDiv;

	center = GetCenterOfScreen();
	centerForDiv = new Coordinate((center.Left - (divWidth / 2)), (center.Top - (divHeight / 2)));

	return centerForDiv;
}


//Help function to show div, and set up scrolling if need be
//       ShowCenteredDiv('divConfirmDeleteWindow', true, 0, 0, true, true, true);
function ShowCenteredDiv(divID, listenForScrolling, offSetLeft, offSetTop, makeModal, blurBackGround)
{
    if (makeModal == undefined)
        makeModal = true;
    if (blurBackGround == undefined)
        blurBackGround = makeModal;

    var divToShow = document.getElementById(divID);
	var i;
	var listeningForScroll;

	if(divToShow)
	{
		if(divToShow.getAttribute('listeningForScroll') != null)
		{
		    listeningForScroll = true;
		}
		else
		{
		    listeningForScroll = false;
		    divToShow.setAttribute('listeningForScroll', 'true');
		}
		
		divToShow.style.display = '';

		SetCenterCoordinatesForDiv(divToShow.id, offSetLeft, offSetTop, makeModal, blurBackGround);

		if((listenForScrolling) && (!listeningForScroll))
			addEvent(window, 'scroll', function(){SetCenterCoordinatesForDiv(divToShow.id, offSetLeft, offSetTop, makeModal, blurBackGround)}, false);

		if(makeModal)
		{
		    HideApplets();

		    if (IE && blurBackGround)
		    {
		      $('select:not(#' + divID + ' select)').each(function()
		      {
		        var $select = $(this);
		        if ($select.css('visibility') != 'hidden')
		        {
		          $select.css('visibility', 'hidden');
		          $select.attr('hiddenForModal', 'true');
		        }
		      });
		    }
        if(!listeningForScroll)
			    addEvent(window, 'scroll', function(){ScrollModalDiv(divToShow.id)}, false);
		}
	}
	
}

//Sets the div to the center of the screen. Also will offset from the center given the arguments offSetLeft and offSetTop
function SetCenterCoordinatesForDiv(divID, offSetLeft, offSetTop, makeModal, blurBackGround)
{
	var divToCenter = document.getElementById(divID);
	var center;	
	var modalDiv;    
    
	if(divToCenter.style.zIndex == '')
		divToCenter.style.zIndex = 100;

	if(divToCenter.style.backgroundColor == '')
		divToCenter.style.backgroundColor = '#ffffff';

	if(divToCenter.style.position != 'absolute')
		divToCenter.style.position = 'absolute';	

    CreateIFrameShim(divID);

	if(makeModal)
	{
		modalDiv = document.getElementById('modal' + divID);
		if(!modalDiv)
		{
			var modalStyle;
			var bodyEl = document.getElementsByTagName('body')[0];
			modalDiv = document.createElement('div');
			modalDiv.id = 'modal' + divID;
			modalDiv.style.backgroundColor = '#333';
			if(blurBackGround)
			{
				//modalDiv.style.backgroundImage = 'url(../images/pagebg)';
				modalDiv.style.filter = 'alpha(opacity=75)';
				modalDiv.style.opacity = '.75';
			}
			else
			{
				modalDiv.style.filter = 'alpha(opacity=1)';
				modalDiv.style.opacity = '.01';
			}
			modalDiv.style.position = 'absolute';
			modalDiv.style.width = '100%';
			modalDiv.style.height = pageHeight() + 'px';
			modalDiv.style.left = '0px';
			modalDiv.style.top = posTop() + 'px';
			modalDiv.style.zIndex = divToCenter.style.zIndex - 2;
			bodyEl.appendChild(modalDiv);

			modalDiv = document.getElementById('modal' + divID);

		}
	}

	if(!offSetLeft)
		offSetLeft = 0;

	if(!offSetTop)
		offSetTop = 0;

	if ((divToCenter) && ((divToCenter.style.display == '') || (divToCenter.style.display.toLowerCase() == 'block'))) {

        // Style the centered div
        $divToCenter = $(divToCenter);
        $divToCenter.css("marginLeft", "0px").css("marginTop", "0px");
        if ($divToCenter.hasClass('PopUp')) {
            $divToCenter.addClass('modal').removeClass('PopUp');//.css("marginLeft", "0px").css("marginTop", "0px");
            if ($divToCenter.find('.PopUpBody').length == 0) {
                $divToCenter.find('div').addClass('PopUpBody');
            }
            if ($divToCenter.find('.modalControls').length == 0) {
                $divToCenter.find('h2').wrap('<div class="modalControls" />');
            } else {
                $divToCenter.find('h2').appendTo($divToCenter.find('.modalControls'));
            }
            var h = $divToCenter.find('h2');
            var s = $('<span></span>').append(h.contents());
            h.replaceWith(s);
            $divToCenter.find('.modalControls').addClass('modal-header');
            $divToCenter.find('.modalControls a').addClass('close');
            $divToCenter.find('.PopUpBody').addClass('modal-body');
            $divToCenter.find('.PopUpFooter').addClass('modal-footer');

            $divToCenter.find('.modalControls').removeClass('modalControls');
            $divToCenter.find('.PopUpBody').removeClass('PopUpBody');
            $divToCenter.find('.PopUpFooter').removeClass('PopUpFooter');

            $yes = $divToCenter.find("[src$='/images/btn_yes.gif'], [src$='/Images/btn_yes.gif'], [src$='/images/btn_Yes.gif']");
            if ($yes.parent('a').length > 0) {
                $yes = $yes.parent('a');
            }
            if ($yes.length > 0) {
                next = $yes.get(0).nextSibling;
                if (next != null && next.nodeName == '#text' && next.nodeType == 3 && $.trim(next.nodeValue) == '') {
                    $(next).remove();
                }
                $yes.after("<a class='btn btn-margin btn-primary pull-right' href='javascript:void(null);' onclick='$(this).prev().click();'>Yes</a>");
                $yes.css('display', 'none');
            }

            $no = $divToCenter.find("[src$='/images/btn_no.gif'], [src$='/Images/btn_no.gif'], [src$='/images/btn_No.gif']");
            if ($no.parent('a').length > 0) {
                $no = $no.parent('a');
            }
            if ($no.length > 0) {
                next = $no.get(0).lastChild;
                if (next != null && next.nodeName == '#text' && next.nodeType == 3 && $.trim(next.nodeValue) == '') {
                    $(next).remove();
                }
                $no.after("<a class='btn btn-margin pull-right' href='javascript:void(null);' onclick='$(this).prev().click();'>No</a>");
                $no.css('display', 'none');
            }

            $close = $divToCenter.find("[src$='/images/btn_close_large.gif']");
            if ($close.parent('a').length > 0) {
                $close = $close.parent('a');
            }
            if ($close.length > 0) {
                next = $close.get(0).nextSibling;
                if (next != null && next.nodeName == '#text' && next.nodeType == 3 && $.trim(next.nodeValue) == '') {
                    $(next).remove();
                }
                $close.after("<a class='btn btn-margin btn-primary pull-right' href='javascript:void(null);' onclick='$(this).prev().click();'>Close</a>");
                $close.css('display', 'none');
            }

            $close = $divToCenter.find("[src$='/images/btn_close.gif']");
            if ($close.parent('a').length > 0) {
                $close = $close.parent('a');
            }
            if ($close.length > 0) {
                $close.after("<button type='button' class='close' onclick='$(this).prev().click();'>&times;</button>");
                $close.css('display', 'none');
            }

            $divToCenter.attr('restyled', 'true');

        }
	    center = GetCenterOfScreenForDiv(divToCenter.offsetWidth, divToCenter.offsetHeight);

		divToCenter.style.left = (center.Left + offSetLeft) + 'px';
		divToCenter.style.top = (center.Top - offSetTop) + 'px';

		MoveIFrameShim(divID);
        
        if((makeModal) && (modalDiv))
        	modalDiv.style.display = '';
	}
}

//Scrolls the modal div
function ScrollModalDiv(divID)
{
	var modalDiv = document.getElementById('modal' + divID);
	if(modalDiv)
		modalDiv.style.top = posTop() + 'px';
}

//Closes the given div and also closes the iframe that was created
function CloseCenteredDiv(divID)
{
	var divToClose = document.getElementById(divID);	
	var modalDiv = document.getElementById('modal' + divID);
	var i;

	if(divToClose)
		divToClose.style.display = 'none';
		
    CloseIFrameShim(divID);

	if(modalDiv)
	{
	  ShowApplets();
	  if (IE)	  
	    $("select[hiddenForModal='true']").css('visibility', 'visible').removeAttr('hiddenForModal');	  	    
		
		modalDiv.style.display = 'none';
	}
}

function CenterDivsMenu() {
    var html = "<ul id='show-centered-div-menu'>";
    $('div.modal').each(function () {
        html += "<li><a href='#' onclick='ShowCenteredDiv(\"" + $(this).attr('id') + "\", true, 0, 100, true); $(\"#" + $(this).attr('id') + "\").center().show();'>" + $(this).attr('id') + "</a></li>";
    });
    $('div.PopUp:not(.modal)').each(function () {
        html += "<li><a href='#' onclick='ShowCenteredDiv(\"" + $(this).attr('id') + "\", true, 0, 100, true);'>" + $(this).attr('id') + "</a></li>";
    });
    html += "</ul>";
    $('#debugCenterDivs').html(html);

    ShowDivBelowSpan('centerDivButton', 'debugCenterDivs', 4, 4);
    addEvent(document, 'mouseup', HideDebugDivsList, false);
}

function HideDebugDivsList(e) {
    var clickedEl = GetElementClicked(e);
    var divDebugList = document.getElementById('debugCenterDivs');
    if ((divDebugList) && (clickedEl != divDebugList))
        CloseDiv(divDebugList.id);
}

jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("margin", "auto");
    this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}