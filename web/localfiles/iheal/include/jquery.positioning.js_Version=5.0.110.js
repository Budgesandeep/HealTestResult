jQuery.IsIE = function(){
	return !jQuery.support.noCloneEvent;	
};

jQuery.fn.realPosition = function(){
  
  	  var curleft = 0;
  	  var curtop  = 0;
  	  var element = this[0];
  	  var elementWidth = this.outerWidth();
  	  var elementHeight = this.outerHeight();
  
  	  if (element.offsetParent)
  	  {
  	    do
  	    {
  	      curleft += element.offsetLeft;
  	      curtop  += element.offsetTop;
  	    } while (element = element.offsetParent);
  	  }
  
  	  return  {
  	    left: curleft,
  	    top:  curtop,
  	    right: curleft + elementWidth,
  	    bottom: curtop + elementHeight
	  };  
};

jQuery.fn.top = function(topCoordinate){
	this.css('top', topCoordinate);
};

jQuery.fn.left = function(leftCoordinate){
	this.css('left', leftCoordinate);
};


jQuery.fn.showAboveAll = function(){	
	this.show();
	this.createIFrameShim();
	this.moveIFrameShim();	
};

jQuery.fn.hideAll = function(){	
	this.each(function(){$(this).hide();});
	this.each(function(){$(this).closeIFrameShim();});

};

jQuery.fn.createIFrameShim = function(){

    if($.IsIE() && $(this).get(0).nodeName == "DIV" || true)
    {    	
    	if(this.css('zIndex') == 0 || this.css('zIndex') == 'auto')
    		this.css('zIndex', 50);    		    	

    	var iFrm = this.data("iFrmShim");
        if(!iFrm)
	{		
		var newIFrm = document.createElement('iframe');
		jQnewIFrm = $(newIFrm);
		jQnewIFrm.attr('src', 'javascript:false;');
		jQnewIFrm.attr('scrolling', 'no');
		jQnewIFrm.attr('frameborder', '0');		
		jQnewIFrm.css('position', 'absolute');
		jQnewIFrm.css('top', '0px');
		jQnewIFrm.css('left', '0px');
		jQnewIFrm.css('display', 'none');
		this.data("iFrmShim", jQnewIFrm);
		this.after(jQnewIFrm);		
	}	
    }
    
};

jQuery.fn.moveIFrameShim = function(){
    
	if($.IsIE() && $(this).get(0).nodeName == "DIV" || true)
    	{    		
	    	var iFrmShim = this.data("iFrmShim");
	    	if(iFrmShim)
	    	{			
			iFrmShim.css('width', this.outerWidth());
			iFrmShim.css('height', this.outerHeight());		    	
			iFrmShim.css('top', this.position().top);
			iFrmShim.css('left', this.position().left);
			iFrmShim.css('zIndex', this.css('zIndex') - 1);
			iFrmShim.css('display', 'block');
			this.data("iFrmShim", iFrmShim);
		}
	}
};

jQuery.fn.closeIFrameShim = function(){
	if($.IsIE() && $(this).get(0).nodeName == "DIV" || true)
	{		
		var iFrmShim = this.data("iFrmShim");		
		if(iFrmShim)	    		
	    		iFrmShim.css('display', 'none');		    	
	}

};