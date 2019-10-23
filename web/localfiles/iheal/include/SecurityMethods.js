

var SESSION_CLIENT_MINUTES_BEFORE_TIMEOUT = 20;
var SESSION_CLIENT_DURATION;
var SESSION_CONFIRM_WINDOW_ID = 'divSessionConfirmWindow';
var SESSION_LOGOUTWARNING_WINDOW_ID = 'divSessionLogOutWarningWindow';
var SESSION_INTERVAL;
var SESSION_HIDECONTENTDIV_ID = 'divHideContent';
var SESSION_CONFIRM_WINDOW_DISPLAYED = false;
var SESSION_LOGOUT_WARNING_WINDOW_DISPLAYED = false;
var SECURITY_FOLDER_URL;

//Start the session on page load
addEvent(window, 'load', SessionStart, false);

// if enter is hit in password textbox of inactivity warning box,
// call function as if the Continue button was clicked
function InactivityWarningKeyPress(ev) {
  ev = ev || event;
  if (ev.keyCode == 13) {
    SessionCheckPassword();
    return false;
  }
}

//Resets the client activity timeout
function SessionClientReset() {
  var opener = GetWindowOpener();
  if (opener)
    opener.SessionClientReset();

  SESSION_CLIENT_DURATION = 0;
}

//Called every second to countdown the various inactivty counters
function SessionTick() {
  SESSION_CLIENT_DURATION++;

  if ((SESSION_CLIENT_DURATION > (SESSION_CLIENT_MINUTES_BEFORE_TIMEOUT * 60)) && (!SESSION_CONFIRM_WINDOW_DISPLAYED)) {
      SESSION_CONFIRM_WINDOW_DISPLAYED = true;

      $(document).trigger("screen:locked");
    SessionConfirmContinue();
  }
}

//Init function to start everything off
function SessionStart() {
  SessionClientReset();

  var tbPassword = document.getElementById('txtSessionConfirmPassword');

  if (SESSION_INTERVAL == null)
    SESSION_INTERVAL = setInterval(SessionTick, 1000);

  addEvent(document, 'mouseup', SessionClientReset, false);
  addEvent(document, 'keydown', SessionClientReset, false);
}

//Hides the content on the form
function SessionHideContent() {
  document.getElementById(SESSION_HIDECONTENTDIV_ID).style.display = 'none';
}

//Shows the content of the form
function SessionShowContent() {
  document.getElementById(SESSION_HIDECONTENTDIV_ID).style.display = '';
}

//Hides content and asks the user to confirm they want to continue
function SessionConfirmContinue() {
  //IE seems to stop javascript in the parent window when a modal window is open. So we force it do SessionConfirmContunue
  var url = PUBLIC_PAGES_FOLDER_URL + "/PublicWebMethods.aspx/SetLock";
  var strParameters = 'IgnoreLock=1&SetLock=1';
  var opener = GetWindowOpener();

  SESSION_CONFIRM_WINDOW_DISPLAYED = true;

  if ((opener) && (IE))
    opener.SessionConfirmContinue();

  var confirmWindow = SessionBuildConfirmWindow();

  SessionHideContent();
  ShowCenteredDiv(confirmWindow.id, true, 0, 100, true);
  $('#txtSessionConfirmPassword').focus();

  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    url: PreventCaching(url)
  });
}

//User confirmed they want to continue, so show content and close confirm window
function SessionContinueConfirmed() {
  var opener = GetWindowOpener();
  if (opener)
    opener.SessionContinueConfirmed();

  SessionClientReset();
  SessionCloseConfirmWindow();
  SessionShowContent();
}


//Logs user out of the application
function SessionLogout() {
  var opener = GetWindowOpener();
  if (opener) {
    if (opener.SessionLogout)
      opener.SessionLogout();

    window.close();
  }
  else {
    var LogoutRedirectURL;
    // calls AJAX web method to logout user
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: PUBLIC_PAGES_FOLDER_URL + "/PublicWebMethods.aspx/LogoutUser",
      async: false,
      success: function (data) {
        var json = $.parseJSON(data.d);

        LogoutRedirectURL = json.RedirectURL;
      }
    });
    
    //Have to manually logout on client side since IE handles modal windows weird
    if (IE) {
      RemoveAllCookies();

      if (document.getElementsByTagName('form')[0])
        document.getElementsByTagName('form')[0].submit();
      else
        RefreshPage();

      clearInterval(SESSION_INTERVAL);
    }

    window.location = LogoutRedirectURL;
  }
}

//Closes the confirm window
function SessionCloseConfirmWindow() {
  document.getElementById('spnSessionConfirmPasswordErrorMsg').style.display = 'none';
  document.getElementById('spnSessionConfirmPasswordLocked').style.display = 'none';
  document.getElementById('btnSessionConfirm').style.display = '';
  document.getElementById('txtSessionConfirmPassword').value = '';
  CloseCenteredDiv(SESSION_CONFIRM_WINDOW_ID);
  SESSION_CONFIRM_WINDOW_DISPLAYED = false;
}

//Closes the logout window
function SessionCloseLogoutWarning() {
  CloseCenteredDiv(SESSION_LOGOUTWARNING_WINDOW_ID);
  SESSION_LOGOUT_WARNING_WINDOW_DISPLAYED = false;
}

//Functions to checks password

//Makes the request to check password
function SessionCheckPassword() {
  $.ajax(
    {
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: PreventCaching(PUBLIC_PAGES_FOLDER_URL + "/PublicWebMethods.aspx/CheckAuthenticationAndSessionState"),
      success: function (data) {
        var password = document.getElementById('txtSessionConfirmPassword');

        var strParameters = 'CheckPassword=1&IgnoreLock=1&password=' + encodeURIComponent(password.value) + '&encUserID=' + NetHealth.uid;
        
        var json = $.parseJSON(data.d);
        if (json.HasSession.toLowerCase() == 'false' || json.Authenticated.toLowerCase() == 'false') {
          strParameters += '&CheckAuthAndSession=1&encFacilityID=' + NetHealth.fid;
        }

        var url = PUBLIC_PAGES_FOLDER_URL + '/AJAXCheckLogin.aspx';
        SessionCheckPasswordResult(url, strParameters);
      }
    });
}

//Gets the password check result
function SessionCheckPasswordResult(url, strParameters) {
  // Check Password and act upon return value
  $.ajax(
          {
            type: "POST",
            url: PreventCaching(url),
            data: strParameters,
            success: function (data) {
              var json = $.parseJSON(data.d);

              if ((json != null) && (json.Result.toLowerCase() == 'good')) {
                SessionContinueConfirmed();
              }
              else {

                if ((json != null) && (json.Result.toLowerCase() == 'lockedout')) {
                  document.getElementById('spnSessionConfirmPasswordLocked').style.display = '';
                  document.getElementById('spnSessionConfirmPasswordErrorMsg').style.display = 'none';
                  document.getElementById('btnSessionConfirm').style.display = 'none';
                  $('#btnSessionCancel').focus();
                } else {
                  document.getElementById('spnSessionConfirmPasswordLocked').style.display = 'none';
                  document.getElementById('spnSessionConfirmPasswordErrorMsg').style.display = '';
                  document.getElementById('btnSessionConfirm').style.display = '';

                  $('#txtSessionConfirmPassword').val('');
                  $('#txtSessionConfirmPassword').focus();
                }
              }
            }
          });
}

//Builds the session inactivity confirm window
function SessionBuildConfirmWindow() {
  var confirmWindow = document.getElementById(SESSION_CONFIRM_WINDOW_ID);

  if (!confirmWindow) {
    //We have to build the div window the "DOM" way so we can access its elements using the dom
    var bodyEl = document.getElementsByTagName('body')[0];
    var divWindow = document.createElement('div');
    var tableEl;
    var tbodyEl;
    var trEl;
    var tdEl;
    var spanEl;
    var inputEl;

    //Create the div to hold the window
    divWindow.id = SESSION_CONFIRM_WINDOW_ID;
    divWindow.className = 'standardWindow';
    divWindow.style.position = 'absolute';
    divWindow.style.display = 'none';
    divWindow.style.width = '350px';

    //Create the main table and table body for the div
    tableEl = document.createElement('table');
    tbodyEl = document.createElement('tbody');

    //Create the header row
    trEl = document.createElement('tr');
    tdEl = document.createElement('th');
    tdEl.style.textAlign = 'center';
    tdEl.style.backgroundColor = 'red';
    spanEl = document.createElement('span');
    spanEl.innerHTML = 'Inactivity Warning';
    tdEl.appendChild(spanEl);
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    //Blank Row
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    spanEl = document.createElement('span');
    spanEl.innerHTML = '&nbsp;';
    tdEl.appendChild(spanEl);
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    //Main Text Row
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.style.textAlign = 'center';
    spanEl = document.createElement('span');
    spanEl.innerHTML = 'You have been inactive for an extended period of time. Please re-enter your password to continue.';
    tdEl.appendChild(spanEl);
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    //Blank Row
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    spanEl = document.createElement('span');
    spanEl.innerHTML = '&nbsp;';
    tdEl.appendChild(spanEl);
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    //password input row
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.style.textAlign = 'center';
    spanEl = document.createElement('span');
    spanEl.innerHTML = 'Password:&nbsp;';
    tdEl.appendChild(spanEl);
    inputEl = document.createElement('input');
    inputEl.id = 'txtSessionConfirmPassword';
    inputEl.type = 'password';
    inputEl.setAttribute('keydownbehavior', 'ignore');
    tdEl.appendChild(inputEl);
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    //Blank / Error Msg row
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.style.textAlign = 'center';
    spanEl = document.createElement('span');
    spanEl.innerHTML = '&nbsp;';
    tdEl.appendChild(spanEl);
    spanEl = document.createElement('span');
    spanEl.id = 'spnSessionConfirmPasswordErrorMsg';
    spanEl.style.color = 'red';
    spanEl.style.display = 'none';
    spanEl.innerHTML = 'Password was incorrect.';
    tdEl.appendChild(spanEl);
    spanEl = document.createElement('span');
    spanEl.id = 'spnSessionConfirmPasswordLocked';
    spanEl.style.color = 'red';
    spanEl.style.display = 'none';
    spanEl.innerHTML = 'The account for this user is locked.';
    tdEl.appendChild(spanEl); 
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    //Buttons Row
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.style.textAlign = 'center';
    inputEl = document.createElement('input');
    inputEl.id = 'btnSessionConfirm';
    inputEl.type = 'button';
    inputEl.value = 'Continue';
    tdEl.appendChild(inputEl);
    spanEl = document.createElement('span');
    spanEl.innerHTML = '&nbsp;';
    tdEl.appendChild(spanEl);
    inputEl = document.createElement('input');
    inputEl.id = 'btnSessionCancel';
    inputEl.type = 'button';
    inputEl.value = 'Logout';
    tdEl.appendChild(inputEl);
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    //Blank Row
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    spanEl = document.createElement('span');
    spanEl.innerHTML = '&nbsp;';
    tdEl.appendChild(spanEl);
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);

    tableEl.appendChild(tbodyEl);
    divWindow.appendChild(tableEl);
    bodyEl.appendChild(divWindow);

    //Add click event listeners for the two buttons and keypress on password textbox to listen for enter key
    addEvent(document.getElementById('btnSessionConfirm'), 'click', SessionCheckPassword, false);
    addEvent(document.getElementById('btnSessionConfirm'), 'keyup', InactivityWarningKeyPress, false);
    addEvent(document.getElementById('btnSessionCancel'), 'click', SessionLogout, false);
    addEvent(document.getElementById('txtSessionConfirmPassword'), 'keyup', InactivityWarningKeyPress, false);

    confirmWindow = document.getElementById(SESSION_CONFIRM_WINDOW_ID);
  }

  return confirmWindow;
}