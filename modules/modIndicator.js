var roundValue = Math.round(SYNC_CONSTANTS.scopeCountInMF/SYNC_CONSTANTS.totalScopeCount);
var y=0;
var setPercentageForLoader = function(x){
  kony.print("x----->>>>>"+x);
  if(isIpad){
    y = Math.floor(x/SYNC_CONSTANTS.totalScopeCount);
    kony.print("y----->>>>>"+y);
    for(i = 1; i <= SYNC_CONSTANTS.totalScopeCount ; i++){
      if(i<=y)
        frmSelectFacility["loader"+i].skin = "sknlblloadergrey";
      else
        frmSelectFacility["loader"+i].skin = "sknlblloaderwhite";
    }
  }
  else{
    if(x==1){
      y=1;
    }
    kony.print("roundValue----->>>>>"+roundValue);
    if(x%roundValue==0){
      y = x/roundValue;
    }
    if(x==SYNC_CONSTANTS.scopeCountInMF){
      y=SYNC_CONSTANTS.totalScopeCount;
    }
    kony.print("y----->>>>>"+y);
    for(i = 1; i <= SYNC_CONSTANTS.totalScopeCount ; i++){
      if(i<=y)
        frmSelectFacility["loader"+i].skin = "sknlblloadergrey";
      else
        frmSelectFacility["loader"+i].skin = "sknlblloaderwhite";
    }
  }  
};

var setPercentageForLoader1 = function(x){
  kony.print("popupskin"+popupsyncstatus["loader"+1].skin);
  var y = Math.floor(x/10);
  for(i = 1; i <= 10 ; i++){
    if(i<=y)
      popupsyncstatus["loader"+i].skin = "sknlblloadergrey";
    	
    else
      popupsyncstatus["loader"+i].skin = "sknlblloaderwhite";
  }
};