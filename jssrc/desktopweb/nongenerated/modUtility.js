/*
 *Name: modUtility.js
 *Purpose: For general/reusable API
 *Change Log:
 *---------------------------------------------------------------------------
 * Date              Developer          Comments
 *---------------------------------------------------------------------------
 * 12/19/2016        492306/545496             utility api functions
 *
 *
 */
var remainingSeconds;
var minute;
var second;
//IE relatd string search issues
if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        enumerable: false,
        value: function(obj) {
            var newArr = this.filter(function(el) {
                return el == obj;
            });
            return newArr.length > 0;
        }
    });
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
com.healogics.utility = (function() {
    var _isNetworkConnected = function() {
        return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    };
    var _isEmpty = function(inputValue) {
        return (inputValue === null || inputValue === undefined || inputValue === "null" || inputValue === '');
    };
    var _showLoading = function(message) {
        var msg = _isEmpty(message) ? '' : message;
        kony.application.showLoadingScreen("sknloading", msg, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    };
    var _dismissLoading = function() {
        kony.application.dismissLoadingScreen();
    };
    var _displayAlert = function(message) {
        message = _isEmpty(message) ? '' : message;
        if (!isIpad && !isIphone) {
            popupAlert.lblmsg.text = message;
            popupAlert.lbltitle.text = GENERAL_CONSTANTS.TEXT_INFO;
            popupAlert.btnclosealert.text = GENERAL_CONSTANTS.TEXT_OK;
            popupAlert.show();
        } else {
            kony.ui.Alert({
                message: message,
                alertTitle: GENERAL_CONSTANTS.TEXT_INFO,
                alertType: constants.ALERT_TYPE_INFO,
                yesLabel: GENERAL_CONSTANTS.TEXT_CLOSE
            }, {});
        }
    };
    var _showErrorAlert = function(message, yesLabel) {
        message = _isEmpty(message) ? '' : message;
        yesLabel = _isEmpty(yesLabel) ? GENERAL_CONSTANTS.TEXT_CLOSE : yesLabel;
        if (!isIpad && !isIphone) {
            popupAlert.lblmsg.text = message;
            popupAlert.lbltitle.text = GENERAL_CONSTANTS.TEXT_INFO;
            popupAlert.btnclosealert.text = yesLabel;
            popupAlert.show();
            popupAlert.lbltitle.setVisibility = true;
        } else {
            kony.ui.Alert({
                message: message,
                alertTitle: GENERAL_CONSTANTS.TEXT_INFO,
                alertType: constants.ALERT_TYPE_INFO,
                yesLabel: yesLabel,
                alertHandler: null
            }, {});
        }
    };
    var _displayNoTitleAlert = function(message, yesLabel) {
        message = _isEmpty(message) ? '' : message;
        yesLabel = _isEmpty(yesLabel) ? GENERAL_CONSTANTS.TEXT_CLOSE : yesLabel;
        if (!isIpad && !isIphone) {
            popupAlert.lblmsg.text = message;
            popupAlert.btnclosealert.text = yesLabel;
            popupAlert.show();
            popupAlert.lbltitle.text = "";
            popupAlert.lbltitle.setVisibility = false;
        } else {
            kony.ui.Alert({
                message: message,
                alertTitle: "",
                yesLabel: yesLabel,
                alertHandler: null
            }, {});
        }
    };
    var _actionAlert = function(message, callbackFunction, yesLabel) {
        message = _isEmpty(message) ? '' : message;
        yesLabel = _isEmpty(yesLabel) ? 'Close' : yesLabel;
        kony.ui.Alert({
            message: message,
            alertTitle: "Info",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: yesLabel,
            alertHandler: callbackFunction
        }, {});
    };
    var _validateUserID = function(userID) {
        //     userID = userID.trim();
        if (_isEmpty(userID)) {
            return false;
        } else {
            var userIdRegex = new RegExp(REGEX_STRING.USERID_REGEX);
            if (userIdRegex.test(userID)) {
                return true;
            } else {
                kony.print("USER ID validation fails")
                return false;
            }
        }
    };
    var _validatePassword = function(password) {
        //     password = password.trim();
        if (_isEmpty(password)) {
            return false;
        } else {
            var passwordRegex = new RegExp(REGEX_STRING.PASSWORD_REGEX);
            if (passwordRegex.test(password)) {
                return true;
            } else {
                kony.print("Password validation fails")
                return false;
            }
        }
    };
    var _formatDate = function(strDate) {
        kony.print("inside _formatDate---->");
        kony.print("strDate---->" + strDate);
        var arrDigits = strDate.split("-");
        var strFormattedDate = arrDigits[1] + "/" + arrDigits[2] + "/" + arrDigits[0];
        return strFormattedDate;
    };
    var _isValidDateFormat = function(date) {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) return false;
        var currentTime = new Date();
        var CurrentYear = currentTime.getFullYear();
        CurrentYear = CurrentYear - 18;
        // Parse the date parts to integers
        var parts = date.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Adjust for leap years
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) monthLength[1] = 29;
        // Check the range of the day
        if (!(day > 0 && day <= monthLength[month - 1])) {
            return false;
        } else {
            return true;
        }
    };
    var _getDate = function(param_date) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var d = param_date;
        var date = (d.getDate()).toString();
        var datefinal;
        var fulldate;
        if (date.substring(date.length - 1) == "1" && date !== "11") {
            datefinal = date + " " + "st" + " ";
        } else if (date.substring(date.length - 1) == "2" && date !== "12") {
            datefinal = date + " " + "nd" + " ";
        } else if (date.substring(date.length - 1) == "3" && date !== "13") {
            datefinal = date + " " + "rd" + " ";
        } else {
            datefinal = date + " " + "th" + " ";
        }
        fulldate = months[d.getMonth()] + " " + datefinal + d.getFullYear() + " " + (d.getHours()) + " " + (d.getMinutes());
        kony.print("fulldate------------------>" + fulldate);
        return fulldate;
    };
    var _isNumeric = function(inputvalue) {
        return kony.string.isNumeric(inputvalue);
    };
    var _isValidEmail = function(inputvalue) {
        return kony.string.isValidEmail(inputvalue);
    };
    var _isValidDate = function(date) {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) return false;
        var currentTime = new Date();
        var CurrentYear = currentTime.getFullYear();
        CurrentYear = CurrentYear - 18;
        // Parse the date parts to integers
        var parts = date.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);
        // Check the ranges of month and year
        if (year < 1000 || year > CurrentYear || month === 0 || month > 12) {
            //constants.ALERT_INVALID_DOB = "Your age must be 18";
            return false;
        }
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Adjust for leap years
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) monthLength[1] = 29;
        // Check the range of the day
        if (!(day > 0 && day <= monthLength[month - 1])) {
            //constants.ALERT_INVALID_DOB = "Invalid date of birth";
            return false;
        } else {
            //constants.ALERT_INVALID_DOB = "Invalid date of birth";
            return true;
        }
    };
    var _isValidFutureDate = function(date) {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
            //constants.ALERT_EMPTY_DATE = "Please select Date";
            return false;
        }
        var currentTime = new Date();
        var CurrentYear = currentTime.getFullYear();
        CurrentYear = CurrentYear;
        // Parse the date parts to integers
        var parts = date.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);
        // Check the ranges of month and year
        if (year < CurrentYear || month === 0 || month > 12) {
            //constants.ALERT_EMPTY_DATE = "Date must not be from past";
            return false;
        }
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Adjust for leap years
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) monthLength[1] = 29;
        // Check the range of the day
        if (!(day > 0 && day <= monthLength[month - 1])) {
            //constants.ALERT_EMPTY_DATE = "Invalid Policy date";
            return false;
        } else {
            //constants.ALERT_EMPTY_DATE = "Please enter the date";
            return true;
        }
    };
    var _getCameraRawbytes = function(cameraObject) {
        return cameraObject.rawBytes;
    };
    //Setting image in application
    var _setProfilePicture = function(ImageWidgetWithFormname) {
        if (!com.healogics.utility.isEmpty(gbl_profilePicture)) {
            if (kony.string.startsWith(gbl_profilePicture, "http", true)) {
                ImageWidgetWithFormname.src = gbl_profilePicture;
            } else {
                ImageWidgetWithFormname.rawBytes = kony.convertToRawBytes(gbl_profilePicture);
            }
        }
    };
    //Setting NickName
    var _setNickName = function(LabelWidgetWithFormname) {
        if (!com.healogics.utility.isEmpty(gbl_NickName)) {
            LabelWidgetWithFormname.text = gbl_NickName;
        }
    };
    var _getRandomNumberString = function() {
        return (Math.random() * 1000000000000000) + "";
    };
    var _isValidMobUSFormat = function(textVal) {
        if (!/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(textVal)) {
            return false;
        } else {
            return true;
        }
    };
    var _isValidTextBox = function(textVal) {
        if (!/^[a-zA-Z ''-]+$/.test(textVal)) {
            return false;
        } else {
            return true;
        }
    };
    var _changeWidgetSkin = function(widgetID, skinID) {
        widgetID.skin = skinID;
    };
    var _setMaxLength = function(widgetID, maxLength) {
        var txt = widgetID.text;
        kony.print("myString " + (txt === null));
        kony.print("maxLength " + maxLength);
        kony.print("_isEmpty " + _isEmpty(txt));
        kony.print("txt.length " + txt.length);
        if (_isEmpty(txt) ? false : txt.length > maxLength) {
            kony.print("txt.substr(0, maxLength) " + txt.substr(0, maxLength));
            widgetID.text = txt.substr(0, maxLength);
        }
    };
    var _getCurrentISODateWithTime = function(months) {
        var currentDate = new Date();
        if (months !== 0) {
            var years = 0;
            if (months >= 12) {
                years = parseInt(months / 12);
                months = months % 12;
            }
            currentDate = new Date(currentDate.getFullYear() + years, (currentDate.getMonth() + months), currentDate.getDate());
        }
        var dateParts = JSON.stringify(currentDate).replace(/\"/g, "");
        //alert("Date parts: " + dateParts);
        return dateParts;
    };
    var _calculateAge = function(dob) {
        var birthDate = dob.split("/");
        var birthDay = birthDate[1];
        var birthMonth = birthDate[0];
        var birthYear = birthDate[2];
        var todayDate = new Date();
        var todayYear = todayDate.getFullYear();
        var todayMonth = todayDate.getMonth();
        var todayDay = todayDate.getDate();
        var age = todayYear - birthYear;
        if (todayMonth < birthMonth - 1) {
            age--;
        }
        if (birthMonth - 1 == todayMonth && todayDay < birthDay) {
            age--;
        }
        return age;
    };
    var _formatText = function(widgetID, formatSymbol, stepValue) {
        var inputText = widgetID.text;
        var formatedText = "";
        kony.print("widgetID : " + widgetID);
        kony.print("formatSymbol : " + formatSymbol);
        kony.print("stepValue : " + stepValue);
        kony.print("input value : " + inputText);
        kony.print("formatedText : " + formatedText);
        if (!com.healogics.utility.isEmpty(inputText) && inputText.length == 1) {
            formatedText = "";
            kony.print("1111 formatedText : " + formatedText);
        }
        if (!com.healogics.utility.isEmpty(inputText) && !com.healogics.utility.isEmpty(inputText) && (formatedText.length < inputText.length)) {
            kony.print("2222 formatedText : " + formatedText);
            if (inputText.length == stepValue || (inputText.length == (stepValue * 2) + 1)) {
                widgetID.text = inputText + formatSymbol;
                kony.print("3333 formatedText : " + widgetID.text);
                //alert(mobileNumber);
            }
        }
        formatedText = widgetID.text;
        kony.print(formatedText);
    };
    var _getLocalDate = function(date) {
        var sDate = date;
        sDate = sDate.trim();
        if (sDate.length == 21); {
            sDate = sDate.substring(0, 11) + "0" + sDate.substring(11);
        }
        var sHours = sDate.substring(11, 13);
        if (sDate.substring(20) == "PM") {
            sHours = parseInt(sDate.substring(11, 13)) + 12;
        }
        var myDateStr = sDate.substring(0, 10) + "T" + sHours + sDate.substring(13, 19);
        var dateArray = myDateStr.split(/[^0-9]/);
        var localDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
        var offset = new Date().getTimezoneOffset();
        localDate.setMinutes(localDate.getMinutes() - offset);
        kony.print("localDate--------->" + localDate);
        var finaldate = com.healogics.utility.getDate(localDate);
        kony.print("finaldate-------->" + finaldate);
        return finaldate;
    };
    var _getShortMonthAndYearEST = function(givenDate) {
        var utc_date = new Date(givenDate);
        var processedDate = com.healogics.utility.getDate(utc_date);
        var arrSplit = processedDate.split(" ");
        kony.print("arrSplit-------->>>>> " + arrSplit);
        var finalDate = arrSplit[1] + " " + arrSplit[0].substring(0, 3) + " " + arrSplit[3].substring(2);
        return finalDate;
    };
    var _getFullDateTimeFormatEST = function(ESTDate) {
        var x = new Date(ESTDate);
        var month = x.getMonth() + 1;
        var am_pm = "am";
        var hours = x.getHours();
        var minutes = x.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours > 12) {
            hours = hours - 12;
            am_pm = "pm";
        }
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (days[x.getDay()] + ", " + (month) + "/" + x.getDate() + "/" + x.getFullYear() + ", " + hours + ":" + minutes + " " + am_pm);
    };
    var _getPatientListDateTimeFormatFromEST = function(ESTDate, dateFormat) {
        var x = new Date(ESTDate);
        var month = x.getMonth() + 1;
        var am_pm = "am";
        var hours = x.getHours();
        var minutes = x.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours > 12) {
            hours = hours - 12;
            am_pm = "pm";
        }
        if (dateFormat == "PATIENT_LIST") {
            return ((month) + "/" + x.getDate() + "/" + x.getFullYear() + " " + hours + ":" + minutes + " " + am_pm);
        } else if (dateFormat == "PATIENT_LIST") {
            return ((month) + "/" + x.getDate() + "/" + x.getFullYear() + " " + hours + ":" + minutes + " " + am_pm);
        }
    };
    var _getDateDescription = function(date) {
        var d = new Date(date);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
        var month = d.getMonth();
        var year = (d.getYear()).toString();
        var day = d.getDate();
        var finaldate = day + " " + months[month] + " " + year.substring(1);
        kony.print("final due date------>" + finaldate);
        return finaldate;
    };
    var isInArray = function(value, array) {
        kony.print("value----->>>" + value);
        kony.print("array----->>>" + array);
        return array.indexOf(value) > -1;
    };
    var _dateFormatForAck = function(date) {
        var d = date.split("-");
        kony.print("input date--->" + date);
        var day = d[0];
        kony.print("day--->" + day);
        var month = d[1];
        kony.print("month--->" + month);
        var year = d[2];
        kony.print("year--->" + year);
        var finalDate = month + "/" + day + "/" + year;
        kony.print("finaldate--->" + finalDate);
        return finalDate;
    };
    var _getTodaysDate = function(param) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var tomorrow = today;
        tomorrow.setDate(today.getDate() + 1);
        if (param == "tomorrow") {
            dd = tomorrow.getDate();
            mm = tomorrow.getMonth() + 1; //January is 0!
            yyyy = tomorrow.getFullYear();
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (dd < 10) {
            dd = '0' + dd;
        }
        date = mm + '/' + dd + '/' + yyyy;
        return date;
    };
    var _dateFormatForRecords = function(date) {
        var d = date.split("-");
        kony.print("input date--->" + date);
        var year = d[0];
        kony.print("day--->" + day);
        var month = d[1];
        kony.print("month--->" + month);
        var day = d[2];
        kony.print("year--->" + year);
        var finalDate = month + "/" + day + "/" + year;
        kony.print("finaldate--->" + finalDate);
        return finalDate;
    };
    var listContainsValue = function(obj, list) {
        kony.print("------ obj ------ " + JSON.stringify(obj));
        kony.print("------ list ------ " + JSON.stringify(list));
        for (var i = 0; i < list.length; i++) {
            if (list[i] === "Today") {
                list[i] = com.healogics.utility.getTodaysDate("today");
            } else if (list[i] === "Tomorrow") {
                list[i] = com.healogics.utility.getTodaysDate("tomorrow");
            }
            if (list[i] === "Blank" || list[i] === "Not Scheduled") {
                list[i] = "";
            }
            if (list[i] === obj) {
                return true;
            }
        }
        return false;
    };
    return {
        isNetworkConnected: function() {
            alert(_isNetworkConnected());
        },
        isEmpty: function(inputValue) {
            return _isEmpty(inputValue);
        },
        showLoading: function(loadingMsg) {
            _showLoading(loadingMsg);
        },
        dismissLoading: _dismissLoading,
        displayAlert: function(message) {
            _displayAlert(message);
        },
        showErrorAlert: function(message, yesLabel) {
            _showErrorAlert(message, yesLabel);
        },
        actionAlert: function(message, callbackFunction, yesLabel) {
            _actionAlert(message, callbackFunction, yesLabel);
        },
        validateUserID: function(userID) {
            return _validateUserID(userID);
        },
        validatePassword: function(password) {
            return _validatePassword(password);
        },
        formatDate: function(strDate) {
            return _formatDate(strDate);
        },
        isNumeric: function(inputvalue) {
            return _isNumeric(inputvalue);
        },
        isValidEmail: function(inputvalue) {
            return _isValidEmail(inputvalue);
        },
        isValidDate: function(date) {
            return _isValidDate(date);
        },
        getCameraRawbytes: function(cameraObject) {
            return _getCameraRawbytes(cameraObject);
        },
        setProfilePicture: function(ImageWidgetWithFormname) {
            _setProfilePicture(ImageWidgetWithFormname);
        },
        setNickName: function(LabelWidgetWithFormname) {
            _setNickName(LabelWidgetWithFormname);
        },
        isValidFutureDate: function(date) {
            return _isValidFutureDate(date);
        },
        getRandomNumberString: function() {
            return _getRandomNumberString();
        },
        isValidDateFormat: function(date) {
            return _isValidDateFormat(date);
        },
        isValidMobUsFormat: function(mob) {
            return _isValidMobUSFormat(mob);
        },
        changeWidgetSkin: function(widgetID, skinID) {
            return _changeWidgetSkin(widgetID, skinID);
        },
        setMaxLength: function(widgetID, maxLength) {
            return _setMaxLength(widgetID, maxLength);
        },
        getCurrentISODateWithTime: function(months) {
            return _getCurrentISODateWithTime(months);
        },
        isValidateTextBox: function(textFiled) {
            return _isValidTextBox(textFiled);
        },
        calculateAge: function(dob) {
            return _calculateAge(dob);
        },
        formatText: function(widgetID, formatSymbol, stepValue) {
            _formatText(widgetID, formatSymbol, stepValue);
        },
        getDate: function(param_date) {
            return _getDate(param_date);
        },
        getLocalDate: function(date) {
            return _getLocalDate(date);
        },
        getShortMonthAndYearEST: function(givenDate) {
            return _getShortMonthAndYearEST(givenDate);
        },
        getFullDateTimeFormatEST: function(date) {
            return _getFullDateTimeFormatEST(date);
        },
        getPatientListDateTimeFormatFromEST: function(date, dateFormat) {
            return _getPatientListDateTimeFormatFromEST(date, dateFormat);
        },
        getDateDescription: function(date) {
            return _getDateDescription(date);
        },
        isInArray: function(value, array) {
            return isInArray(value, array);
        },
        dateFormatForAck: function(date) {
            return _dateFormatForAck(date);
        },
        convertEST_To_PST_CST_TimeZone: function(estDate, timeZone, dateFormat) {
            return _convertEST_To_PST_CST_TimeZone(estDate, timeZone, dateFormat);
        },
        getTodaysDate: function(param) {
            return _getTodaysDate(param);
        },
        dateFormatForRecords: function(date) {
            return _dateFormatForRecords(date);
        },
        displayNoTitleAlert: function(message, yesLabel) {
            return _displayNoTitleAlert(message, yesLabel);
        },
        listContainsValue: function(obj, list) {
            return listContainsValue(obj, list);
        }
    };
})();
com.healogics.textboxskin = (function() {
    //Show error skin for input text box
    var _ErrorSkin = function(TextwidgetID, message) {
        //TextwidgetID.setFocus(true);
        //frmName.scrollToWidget(TextwidgetID);
        TextwidgetID.skin = "skntbxRedBorder";
        TextwidgetID.info = TextwidgetID.text;
        TextwidgetID.text = "";
        TextwidgetID.placeholder = message;
    };
    //Hide error skin for input text box
    var _NormalSkin = function(TextwidgetID, message) {
        // kony.print("textboxskin "+TextwidgetID.skin);
        kony.print("textboxmsg " + message);
        //     try{
        //     kony.print("textbox "+JSON.parse(TextwidgetID));
        //     }catch(err){}
        if (TextwidgetID.skin != "skntbxGreyBorder") {
            TextwidgetID.placeholder = message;
            TextwidgetID.text = TextwidgetID.info;
            TextwidgetID.skin = "skntbxGreyBorder";
        }
    };
    return {
        showErrorSkin: function(TextwidgetID, message) {
            _ErrorSkin(TextwidgetID, message);
        },
        HideErrorSkin: function(TextwidgetID, message) {
            _NormalSkin(TextwidgetID, message);
        }
    };
})();
var registerTimeout = function() {
    stopClock();
    kony.application.unregisterForIdleTimeout();
    GENERAL_CONSTANTS.IDLE_TIMEOUT_STARTTIME = getDeviceCurrentTime();
    kony.print(" GENERAL_CONSTANTS.IDLE_TIMEOUT_STARTTIME ---" + GENERAL_CONSTANTS.IDLE_TIMEOUT_STARTTIME);
    kony.application.registerForIdleTimeout(GENERAL_CONSTANTS.TIMEOUT_VALUE, show_registerpopup);
};
var show_registerpopup = function() {
    kony.print("------show popup------");
    idleTimeoutConstants.didTimerStartAfterIdleTimeout = true;
    GENERAL_CONSTANTS.IDLE_TIMEOUT_ENDTIME = getDeviceCurrentTime();
    if ((GENERAL_CONSTANTS.IDLE_TIMEOUT_ENDTIME - GENERAL_CONSTANTS.IDLE_TIMEOUT_STARTTIME) / (1 * 60 * 1000) >= 30) {
        idletimeoutcallback();
    } else {
        setClock();
        popupRegisterTimer.lblmsg.text = "Your session will expire in 04:59. Do you want to remain logged in?";
        popupRegisterTimer.show();
    }
};
var registerPopup_click = function(eventobject) {
    if (eventobject.id == "btnregisteryes") {
        popupRegisterTimer.dismiss();
        stopClock();
        kony.application.unregisterForIdleTimeout();
        registerTimeout();
    } else if (eventobject.id == "btnregisterno") {
        popupRegisterTimer.dismiss();
        // kony.print("remainingSeconds "+remainingSeconds);
        // kony.print("type of"+remainingSeconds);
        kony.application.unregisterForIdleTimeout();
        idletimeoutcallback();
        // kony.timer.schedule("timerid", idletimeoutcallback, remainingSeconds, false);
    }
};
var idletimeoutcallback = function() {
    kony.print("-----in timeout callback------");
    popupRegisterTimer.dismiss();
    kony.application.unregisterForIdleTimeout();
    stopClock();
    showform_loginForm();
};

function setClock() { 
    kony.print("timer started====");
    if (!idleTimeoutConstants.remainingTimeFlow) {
        minute = GENERAL_CONSTANTS.TIMEOUT_MINUTES; 
        second = GENERAL_CONSTANTS.TIMEOUT_SECONDS;
    } else { // For passing the remaining time directly after the app comes to foreground from background
        minute = idleTimeoutConstants.minutes;
        kony.print("--------->minute" + minute);
        second = idleTimeoutConstants.seconds;
        kony.print("--------->second" + second);
    } 
    try  {  
        kony.timer.schedule("mytimer", decreaseclock, 1, true);   
    } 
    catch (error)  {  
        kony.print(" error" + error);
        //At this point the timer "myTimer" already exists. So restarting the timer with remaining time
        if (idleTimeoutConstants.remainingTimeFlow) {
            try {
                kony.timer.cancel("mytimer");
            } catch (err) {
                kony.print("stopClock err===" + err);
            }
            kony.timer.schedule("mytimer", decreaseclock, 1, true);
        } 
    }
    idleTimeoutConstants.remainingTimeFlow = false;
}

function stopClock() { 
    try {  
        kony.timer.cancel("mytimer");  
        kony.print(" timer stop===="); 
    } catch (err) {  
        kony.print("stopClock err===" + err); 
    }
}

function decreaseclock() {
    kony.print("inside decreaseclock");
    var remainingtime;
    if (second >= 10) {
        remainingtime = "0" + minute.toFixed(0) + ":" + second.toFixed(0);
    } else if (second < 10 && second >= 0) {
        remainingtime = "0" + minute.toFixed(0) + ":" + "0" + second.toFixed(0);
    }
    //for storing the time remaining in global variable for other reference
    idleTimeoutConstants.timeCompletedinPopup = remainingtime;
    popupRegisterTimer.lblmsg.text = "Your session will expire in " + remainingtime + ". Do you want to remain logged in?";
    kony.print("remainingtime " + remainingtime);
    kony.print("second " + second);
    if (remainingtime == "00:00") {
        idletimeoutcallback();
    }
    if (minute >= 0 && second >= 0) {
        //     popupRegisterTimer.lblmsg.text="Your session will expire in "+remainingtime+". Do you want to remain logged in?";
        if (second === 0) {
            second = 59;
            minute = minute - 1;
        } else {
            second = second - 1;
        }
    } else {
        stopClock();
    }
}
//This function used to convert GMT/date to EST/CST/MST/PST
var _convertEST_To_PST_CST_TimeZone = function(estDate, timeZone, dateFormat) {
    kony.print("-----inside convertEST_To_PST_CST_TimeZone------");
    kony.print("estDate----->" + estDate);
    kony.print("timeZone----->" + timeZone);
    kony.print("dateFormat----->" + dateFormat);
    if (estDate != null && estDate != "") {
        var dateArr = [];
        if (dateFormat == DATE_FORMAT.LOGIN) {
            /*var dateArr = [];
            var splitDateArr = estDate.split(" ");
            var lDateArr1 = splitDateArr[0].split("-");
            dateArr.push(lDateArr1[0]);
            var lMonth = ( "0"+ (lDateArr1[1]-1)).slice(-2);
            dateArr.push(lMonth);
            dateArr.push( ("0"+ lDateArr1[2]).slice(-2) );

            var lDateArr2 = splitDateArr[1].split(":");
            if(splitDateArr[2] == "PM"){
              var lHour = (lDateArr2[0] != "12") ? ( 12+parseInt(lDateArr2[0]) ) : parseInt(lDateArr2[0]);
              dateArr.push(""+lHour);
            }else{
              
                
              var lHour = (lDateArr2[0] != "12") ? ( "0" + parseInt(lDateArr2[0]) ) : parseInt(lDateArr2[0]);

                
              	dateArr.push( ("0" + lHour).slice(-2) );
              
            }

            dateArr.push( ("0" + lDateArr2[1]).slice(-2) );
            dateArr.push( ("0" + lDateArr2[2]).slice(-2) );

            kony.print("dateArr value is:::"+JSON.stringify(dateArr));
    
            estDate = new Date(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5]);
                kony.print("Login time:::"+ moment([dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5], 125]).format() );

            */
            moment.tz.setDefault("America/New_York");
            // getModifiedDate(moment([dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5], 125]).format("YYYY-MM-DD HH:mm"), timeZone,"MMMM Do YYYY, hh:mm A"); //MMMM Do YYYY, hh:mm: a
            //return getModifiedDate(moment(estDate).format("YYYY-MM-DD"), timeZone,"MMMM Do YYYY"); //MMMM Do YYYY, hh:mm: a
            return getModifiedDate(estDate, timeZone, "MMMM Do YYYY"); //MMMM Do YYYY, hh:mm: a
        }
        //Login -- 2017-03-07 8:55:46 AM
        //TaskList -- Tue Mar 07 05:30:51 EST 2017
        //NotesList -- Tue Mar 07 05:35:24 EST 2017
        // PatientList     Thu Mar 02 07:51:04 EST 2017
        var offset_for_GMT_format = 0; //Use offset_for_GMT_format if input estDate format is in GMT
        switch (timeZone) {
            case "EST":
                offset = 0.0;
                offset_for_GMT_format = -5.0;
                break;
            case "EDT":
                offset = 0.0;
                offset_for_GMT_format = -4.0;
                break;
            case "CST":
                offset = 1.0;
                offset_for_GMT_format = -6.0;
                break;
            case "CDT":
                offset = 1.0;
                offset_for_GMT_format = -5.0;
                break;
            case "MST":
                offset = 2.0;
                offset_for_GMT_format = -7.0;
                break;
            case "MDT":
                offset = 2.0;
                offset_for_GMT_format = -6.0;
                break;
            case "PST":
                offset = 3.0;
                offset_for_GMT_format = -8.0;
                break;
            case "PDT":
                offset = 3.0;
                offset_for_GMT_format = -7.0;
                break;
            default:
                offset = 0.0;
                offset_for_GMT_format = -5.0;
                break;
        }
        //   if(timeZone == "EST"){
        //     offset = 0.0;
        //     offset_for_GMT_format = -5.0;
        //   }
        //   else if(timeZone == "CST"){
        //     offset = 1.0;
        //     offset_for_GMT_format = -6.0;
        //   }
        //   else if(timeZone == "MST"){
        //       offset = 2.0;
        //       offset_for_GMT_format = -7.0;
        //     }
        //   else if(timeZone == "PST"){
        //       offset = 3.0;
        //       offset_for_GMT_format = -8.0;
        //     }
        kony.print("offset---->" + offset);
        kony.print("offset---->" + offset_for_GMT_format);
        clientDate = new Date(estDate);
        kony.print("clientDate---->" + clientDate);
        clientDate.setHours(clientDate.getHours() - offset);
        kony.print("clientDate:" + clientDate.toLocaleString());
        //Date variables to get desired output
        var arrDaysFullString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
        var monthInHalfString = months[clientDate.getMonth()];
        var monthInNumeric = (clientDate.getMonth() + 1) > 9 ? (clientDate.getMonth() + 1) : '0' + (clientDate.getMonth() + 1);
        var year = clientDate.getFullYear();
        var hours = clientDate.getHours() > 11 ? (clientDate.getHours() - 12) : clientDate.getHours();
        var minutes = clientDate.getMinutes();
        var dayInNumeric = clientDate.getDate() > 9 ? clientDate.getDate() : '0' + clientDate.getDate();
        var datePart = clientDate.toLocaleString().split(" ");
        var newDate = "";
        kony.print("datePart:  " + datePart);
        if (dateFormat == DATE_FORMAT.LOGIN) {
            newDate = clientDate.getFullYear() + "-" + monthInNumeric + "-" + dayInNumeric + " " + datePart[1];
            if (datePart.length > 1 && datePart[2] != null) {
                newDate = newDate + " " + datePart[2];
            }
            kony.print("newDate--->" + newDate); //Output Format MM/DD/YYYY hh:mm:ss AM
            return newDate;
        } else if (dateFormat == DATE_FORMAT.NEXT_APPOINTMENT) {
            clientDate = new Date(estDate);
            /*
    utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

    convertedDate = new Date(utc + (3600000*offset_for_GMT_format));

    kony.print("convertedDate1:"+convertedDate.toLocaleString());

    hours  = convertedDate.getHours() > 11 ? (convertedDate.getHours()-12) : convertedDate.getHours();    
    hours = hours > 9 ? hours : "0" + hours;
    
    minutes = convertedDate.getMinutes() > 9 ? convertedDate.getMinutes() : '0' + convertedDate.getMinutes();
    
    month = ((convertedDate.getMonth())+1);
    month = month > 9 ? month : "0" + month;
    
    date = convertedDate.getDate()  >  9 ? convertedDate.getDate(): "0" + convertedDate.getDate(); 
    
    var amPM = convertedDate.toLocaleString().split(" ").length > 1 ? convertedDate.toLocaleString().split(" ")[2] : "";
    if(amPM!=null){
      newDate =  month + "/" + date + "/"+convertedDate.getFullYear() + " "+ hours+":"+minutes+ " " + amPM;            
    }else{
           newDate =  month + "/" + date + "/"+convertedDate.getFullYear() + " "+ hours+":"+minutes;            
 
    }
    */
            //var formattedDate = new Date("Sat May 06 10:30:01 EDT 2017");
            var d;
            if (clientDate == "Invalid Date") {
                d = moment(estDate);
            } else {
                d = moment(clientDate);
            }
            newDate = getModifiedDate(d.format("YYYY-MM-DD HH:mm:ss"), timeZone, "MM/DD/YYYY hh:mm A");
            kony.print("newDate1--->" + newDate); //Output Format MM/DD/YYYY hh:mm AM 
            return newDate;
        } else if (dateFormat == DATE_FORMAT.NOTES_CREATE_DATE) {
            //clientDate = new Date(estDate);
            /*
    utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

    convertedDate = new Date(utc + (3600000*offset_for_GMT_format));

    kony.print("convertedDate2:"+convertedDate.toLocaleString());

    hours  = convertedDate.getHours() > 11 ? (convertedDate.getHours()-12) : convertedDate.getHours();    
    hours = hours > 9 ? hours : "0" + hours;
    minutes = convertedDate.getMinutes() > 9 ? convertedDate.getMinutes() : '0' + convertedDate.getMinutes();
    
    month = ((convertedDate.getMonth())+1);
    month = month > 9 ? month : "0" + month;
    
    date = convertedDate.getDate()  >  9 ? convertedDate.getDate(): "0" + convertedDate.getDate(); 

    newDate =  month + "/" + date + "/" + convertedDate.getFullYear() + ", "+  hours+":"+minutes+ " " + convertedDate.toLocaleString().split(" ")[2];            
	*/
            var d = moment(estDate);
            //newDate = getModifiedDate(d.format("YYYY-MM-DD HH:mm:ss"),timeZone,"MM/DD/YYYY, hh:mm A");
            newDate = getModifiedDate(d.format("YYYY-MM-DD HH:mm:ss"), timeZone, "hh:mm A, MM/DD/YYYY");
            kony.print("newDate2--->" + newDate); //Output Format MM/DD/YYYY, hh:mm AM
            return newDate;
        } else if (dateFormat == DATE_FORMAT.TASK_CREATED_DATE) {
            kony.print("DATE_FORMAT.TASK_CREATED_DATE estDate:::" + estDate);
            //kony.print("DATE_FORMAT.TASK_CREATED_DATE moment estDate:::"+moment(estDate));
            //clientDate = new Date(estDate);
            //kony.print("DATE_FORMAT.TASK_CREATED_DATE clientDate:::"+clientDate);
            /*
    utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

    convertedDate = new Date(utc + (3600000*offset_for_GMT_format));

    kony.print("convertedDate3:"+convertedDate.toLocaleString());

    hours  = convertedDate.getHours() > 11 ? (convertedDate.getHours()-12) : convertedDate.getHours();    
    hours = hours > 9 ? hours : "0" + hours;
    minutes = convertedDate.getMinutes() > 9 ? convertedDate.getMinutes() : '0' + convertedDate.getMinutes();
    
    month = ((convertedDate.getMonth())+1);
    month = month > 9 ? month : "0" + month;
    
    date = convertedDate.getDate()  >  9 ? convertedDate.getDate(): "0" + convertedDate.getDate(); 

    newDate =  month + "/" + date + "/" + convertedDate.getFullYear() ;
    */
            var d = moment(estDate);
            newDate = getModifiedDate(d.format("YYYY-MM-DD HH:mm:ss"), timeZone, "MM/DD/YYYY");
            kony.print("newDate3--->" + newDate); //Output Format MM/DD/YYYY
            return newDate;
        }
    }
};

function clone(obj) {
    if (obj == null || typeof(obj) != 'object') return obj;
    var temp = new obj.constructor();
    for (var key in obj) temp[key] = clone(obj[key]);
    return temp;
}

function getCurrentDateTime() {
    var d = new Date();
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + (d.getHours() > 12 ? d.getHours() - 12 : d.getHours())).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + " " + (d.getHours() > 12 ? "PM" : "AM");
    return datestring;
}

function getCreateTaskDate() {
    var d = new Date();
    var str = Date();
    var res = str.split("GMT");
    var endString = res[1].split(" ")[0];
    var datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "T" + d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2) + endString;
    return datestring;
}

function getModifiedDate(dateString, toTimeZone, toFormat) {
    var formattedDate = "";
    //var estDate = moment.tz(dateString, "America/New_York");
    //var estDate = moment.tz.setDefault("America/New_York");
    //var estDate = moment.tz(dateString, "America/New_York");
    var estDate = moment(dateString);
    if (toTimeZone == "PST" || toTimeZone == "UTC-8") {
        formattedDate = estDate.utcOffset("-0800").format(toFormat); //estDate.tz('America/New_York').format(toFormat);
    } else if (toTimeZone == "CDT" || toTimeZone == "EST" || toTimeZone == "UTC-5") {
        formattedDate = estDate.utcOffset("-0500").format(toFormat); //estDate.tz('America/Chicago').format(toFormat);
    } else if (toTimeZone == "MDT" || toTimeZone == "CST" || toTimeZone == "UTC-6") {
        formattedDate = estDate.utcOffset("-0600").format(toFormat); //estDate.tz('America/Denver').format(toFormat);
    } else if (toTimeZone == "PDT" || toTimeZone == "MST" || toTimeZone == "UTC-7") {
        formattedDate = estDate.utcOffset("-0700").format(toFormat); //estDate.tz('America/Los_Angeles').format(toFormat)
    } else {
        formattedDate = estDate.utcOffset("-0400").format(toFormat); //estDate.format(toFormat);
    }
    kony.print("modified date ::::" + formattedDate);
    return formattedDate;
} //getModifiedDate("2017-05-06 04:09:13","CST","YYYY-MM-DD hh:mm A");
////////////////////////// OFFLINE////////////////////
/////////LOGIN MODULE - OFFLINE SAVE///////
function saveDataLocally(keyName, dataToSave) {
    kony.store.setItem(keyName, dataToSave);
}

function getDataFromLocalStore(keyName) {
    var storedData = kony.store.getItem(keyName);
    return storedData;
}

function doEncryption(userInfo) {
    var algo = "aes";
    var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {
        passphrasetext: ["inputstring1"],
        subalgo: "aes",
        passphrasehashalgo: "md5"
    });
    var inputstr = userInfo;
    var prptobj = {
        padding: "pkcs5",
        mode: "cbc",
        initializationvector: "1234567890123456"
    };
    var myEncryptedText = kony.crypto.encrypt(algo, encryptDecryptKey, inputstr, prptobj);
    //alert('myEncryptedText   '+ myEncryptedText);
    return myEncryptedText;
}

function doDecryption(userInfo) {
    var algo = "aes";
    var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {
        passphrasetext: ["inputstring1"],
        subalgo: "aes",
        passphrasehashalgo: "md5"
    });
    var inputstr = userInfo;
    var prptobj = {
        padding: "pkcs5",
        mode: "cbc",
        initializationvector: "1234567890123456"
    };
    var myEncryptedText = kony.crypto.encrypt(algo, encryptDecryptKey, inputstr, prptobj);
    var myClearText = kony.crypto.decrypt(algo, encryptDecryptKey, myEncryptedText, prptobj);
    return myClearText;
}
/*
 * Method Name	: convertCurrentToEDTTime
 * Purpose		: converts the current system date to the EST date and timezone.
 * Parameters	: isForLastUpdatedUser - whether saving date has to be created or delta one.
 				: isForLastSync : Just for the LastSyncTime
 * Return value	: formattedDateTime - the date and time that needs to be saved or used
 */
function convertCurrentToEDTTime(isForLastUpdatedUser, isForLastSync) { ///False for Delta
    ////first get the offset value - currently true because only considering EST Zone
    var getOffsetValues = modSyncDelta_Offline_getOffsetValue(true);
    var formattedDateTime = "";
    if (getOffsetValues.length > 0) { ///Assuming offsetvalues are returned properly
        var toConvertDate = new Date();
        localTime = toConvertDate.getTime();
        localOffset = toConvertDate.getTimezoneOffset() * 60000;
        utc = localTime + localOffset;
        ///obtain destination city's UTC TimeOffset
        //For our case its UTC-4.0
        offset = getOffsetValues[0]; //-4.0;
        newCityTime = utc + (3600000) * offset;
        newDate = new Date(newCityTime);
        //     var curr_date = newDate.getDate();
        //     var curr_month = newDate.getMonth()+1;
        //     var curr_year = newDate.getFullYear();
        //     var formattedDate =  curr_year+"-"+curr_month+"-"+curr_date;
        var formattedDate = modSyncDelta_offline_getCurrentdate(isForLastUpdatedUser, newDate, isForLastSync);
        var sec = ("0" + newDate.getSeconds()).slice(-2);
        var min = ("0" + newDate.getMinutes()).slice(-2);
        var hrs = ("0" + newDate.getHours()).slice(-2);
        var time;
        time = hrs + ":" + min + ":" + sec;
        if (isForLastUpdatedUser) { ///T needs to be appended
            formattedDateTime = formattedDate + time + getOffsetValues[1]; //"-0400";      
        } else if (isForLastSync) {
            //("0"+toShowDate.getHours()).slice(-2) + ":"+("0"+toShowDate.getMinutes()).slice(-2)
            time = hrs + ":" + min;
            formattedDateTime = time + " " + formattedDate; //HH:MM MM/DD/YYYY - Last Sync TimeStamp
        } else { ///no T, will be required for Delta
            formattedDateTime = formattedDate + " " + time + getOffsetValues[1]; //"-0400";      
        }
        return formattedDateTime;
    } else {
        return formattedDateTime; ////empty string returned
    }
}
/*
 * Method Name	: modSyncDelta_Offline_getOffsetValue
 * Purpose		: for finding out the offset Values required for date calculation and adding the
 					last offest values in the formatted string.
 * Parameters	: whichRegion - currently checking for EST and would be always true.
 * Return value	: [] - array containing the offsetValue and offsetString
 */
function modSyncDelta_Offline_getOffsetValue(whichRegion) {
    var offSetValue;
    var offSetTimeStamp = ""; ///initially empty timestamp
    if (whichRegion) { ///Currently checking for EST only
        // if(userInfo.timezone == "EST"){ ///IRRESPECTIVE OF WHICH TIMEZONE, always send EST offset.
        offSetValue = SYNC_FACILITY_TIMEZONES.EST;
        offSetTimeStamp = SYNC_FACILITY_TIMESTAMP.EST;
        //}
    } else { ////to use the region saved in the TimeZone
        if (userInfo.timezone == "EST") {
            offSetValue = SYNC_FACILITY_TIMEZONES.EST;
            offSetTimeStamp = SYNC_FACILITY_TIMESTAMP.EST;
        } else if (userInfo.timezone == "CST") {
            offSetValue = SYNC_FACILITY_TIMEZONES.CST;
            offSetTimeStamp = SYNC_FACILITY_TIMESTAMP.CST;
        }
    }
    return [offSetValue, offSetTimeStamp];
}
/*
 * Method Name	: modSyncDelta_offline_getCurrentdate
 * Purpose		: to get the formatted date based on boolean flag.
 * Parameters	: isForLastUpdatedBy - bool flag to check whether for saving format or another.
 				: givenDate - the date object for which the format has to happen.
                : isForLastSync - reusing the function and sending the format for lastSync on top (MM/DD/YYYY)
 * Return value	: formattedDate - the date that is properly formatted.
 */
function modSyncDelta_offline_getCurrentdate(isForLastUpdatedBy, givenDate, isForLastSync) {
    var curr_date = ("0" + givenDate.getDate()).slice(-2);
    var curr_month = ("0" + (givenDate.getMonth() + 1)).slice(-2);
    var curr_year = givenDate.getFullYear();
    //   var deviceDate = new Date();
    //   var curr_date = ("0"+deviceDate.getUTCDate()).slice(-2);
    //   var curr_month = ("0"+(givenDate.getUTCMonth()+1)).slice(-2);
    //   var curr_year = givenDate.getUTCFullYear();
    var formattedDate;
    if (isForLastUpdatedBy) { ///if the isForLastUpdatedBy is true, that means data is getting saved
        formattedDate = curr_year + "-" + curr_month + "-" + curr_date + "T";
    } else if (isForLastSync) {
        //("0"+(toShowDate.getMonth()+1)).slice(-2) + "/"+("0"+toShowDate.getDate()).slice(-2)+"/"+toShowDate.getFullYear() 
        formattedDate = curr_month + "/" + curr_date + "/" + curr_year;
    } else { ///only for delta related date
        formattedDate = curr_year + "-" + curr_month + "-" + curr_date;
    }
    //   formattedDate =  curr_year+"-"+curr_month+"-"+curr_date;
    kony.print("formattedDate-------->" + formattedDate);
    return formattedDate;
}

function showLastSync() {
    if (isIpad || isIphone) {
        frmPatientList.fcbodyheader.lbllastsync.setVisibility = "false";
        frmConflictResolve.fcbodyheader.lbllastsync.setVisibility = "false";
        frmPatientRecords.fcbodyheader.lbllastsync.setVisibility = "false";
        frmPatientSummary.fcbodyheader.lbllastsync.setVisibility = "false";
        frmViewTasksNew.fcbodyheader.lbllastsync.setVisibility = "false";
        frmWCCDashboard.fcbodyheader.lbllastsync.setVisibility = "false";
        frmPatientList.fcOnlineOfflineStatus.lbllastsync.setVisibility = "false";
        frmPatientDetails.fcOnlineOfflineStatus.lbllastsync.setVisibility = "false";
    }
    var toShowDate = null,
        finalSyncTime = null,
        syncTimeVar = null;
    if (isIpad || isIphone) { ///Get stored values to display the lastSyncTime
        if (SYNC_CONSTANTS.isAppOffline) {
            var storedLastSyncTime = kony.store.getItem("lastSyncTime");
            kony.print("storedLastSyncTime----->>>>" + storedLastSyncTime);
            if (storedLastSyncTime !== null) { ////ONLY WILL BE NULL WHEN KEY DOESN't EXIST.
                if (!com.healogics.utility.isEmpty(storedLastSyncTime)) {
                    if (isIpad) {
                        frmPatientList.fcbodyheader.lbllastsync.text = storedLastSyncTime;
                        frmConflictResolve.fcbodyheader.lbllastsync.text = storedLastSyncTime;
                        frmPatientRecords.fcbodyheader.lbllastsync.text = storedLastSyncTime;
                        frmPatientSummary.fcbodyheader.lbllastsync.text = storedLastSyncTime;
                        frmViewTasksNew.fcbodyheader.lbllastsync.text = storedLastSyncTime;
                        frmWCCDashboard.fcbodyheader.lbllastsync.text = storedLastSyncTime;
                    } else {
                        frmPatientList.fcOnlineOfflineStatus.lbllastsync.text = storedLastSyncTime;
                        frmPatientDetails.fcOnlineOfflineStatus.lbllastsync.text = storedLastSyncTime;
                    }
                }
            }
        } else { ///On SuccessCallBack, display this always
            toShowDate = convertCurrentToEDTTime(false, true);
            kony.print("TOShowDate Now is >> " + toShowDate);
            //  	syncTimeVar = "Last Sync: " + ("0"+toShowDate.getHours()).slice(-2) + ":"+("0"+toShowDate.getMinutes()).slice(-2) + " "+ ("0"+(toShowDate.getMonth()+1)).slice(-2) + "/"+("0"+toShowDate.getDate()).slice(-2)+"/"+toShowDate.getFullYear();
            //finalSyncTime = moment(toShowDate).format(SYNC_CONSTANTS.lastSyncTimeFormat);  ///Changed as per Austin
            //syncTimeVar = "Last Sync: " + finalSyncTime;
            //syncTimeVar = "Last Sync: " + toShowDate;
            syncTimeVar = "Last Sync: " + getDisplaySyncTime();
            kony.print("The syncTimeVar value is  >> " + syncTimeVar);
            kony.store.setItem("lastSyncTime", syncTimeVar);
            if (!com.healogics.utility.isEmpty(syncTimeVar)) {
                if (isIpad) {
                    frmPatientList.fcbodyheader.lbllastsync.text = syncTimeVar;
                    frmConflictResolve.fcbodyheader.lbllastsync.text = syncTimeVar;
                    frmPatientRecords.fcbodyheader.lbllastsync.text = syncTimeVar;
                    frmPatientSummary.fcbodyheader.lbllastsync.text = syncTimeVar;
                    frmViewTasksNew.fcbodyheader.lbllastsync.text = syncTimeVar;
                    frmWCCDashboard.fcbodyheader.lbllastsync.text = syncTimeVar;
                } else {
                    frmPatientList.fcOnlineOfflineStatus.lbllastsync.text = syncTimeVar;
                    frmPatientDetails.fcOnlineOfflineStatus.lbllastsync.text = syncTimeVar;
                }
            }
        }
    }
}
///Refresh the Screens with the latest updated data.
function reloadScreen() {
    //applist_cntrl_offline.getAppListForDiplay();
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.id === "frmPatientList") {
        dashboard_showPatientList("reload");
        if (isIpad) {
            frmPatientList_Clear_All_filter();
            frmPatientList_patientTypeSelected(frmPatientList.btnallpatients);
        }
    } else if (currentForm.id === "frmPatientSummary") {
        //showPatientDashboard();////WTC : Critical Defect so commented out refresh page.
    } else if (currentForm.id === "frmWCCDashboard") {
        dashboard_showWCCDashboard();
    } else if (currentForm.id === "frmViewTasksNew") {
        show_frmViewTasks();
    } else if (currentForm.id === "frmPatientRecords") {
        //recordsModule.getRecords();
        recordsModule.getRecords(function(a) {}, function(b) {});
    }
    currentForm.forceLayout();
    if (isIpad && currentForm.id !== "frmLanding" && currentForm.id !== "frmLogin" && currentForm.id !== "frmSelectFacility") {
        hideFormMenu();
    }
}
//Callback function from summaryChart.html, kony.evaluateJSInNativeContext to invoke this method. this updates print constants with b64
function updateGraphData2(val) {
    kony.print("Graph2 Stringify :: " + JSON.stringify(val));
    printModuleConstants.chartImageAsBase64 = val;
}
//Graph IPAD issue end
function getDeviceCurrentTime() {
    var d = new Date();
    return d.getTime();
}

function getDeviceType() {
    var devType;
    if (isIpad) {
        devType = "ipad";
    } else if (isIphone) {
        devType = "mobile";
    } else {
        var devicetype = kony.os.deviceInfo().category;
        if (devicetype == "Firefox") {
            devType = "firefox";
        } else if (devicetype == "Chrome") {
            devType = "chrome";
        } else if (devicetype == "Safari") {
            devType = "safari";
        } else if (devicetype == "IE") {
            devType = "ie";
        }
    }
    return devType;
}

function showLoadingScreen(text) {
    kony.application.showLoadingScreen(null, text, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    //kony.application.showLoadingScreen("loadskin","LoadingScreen",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,null);
}

function dismissLoadingScreen() {
    kony.application.dismissLoadingScreen();
}

function isNetworkAvailable() {
    return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
}

function isNullUndefinedOrEmpty(objectValue) {
    if (objectValue !== null && objectValue != 'undefined' && ("" + objectValue).trim().length > 0) {
        return false;
    }
    return true;
}

function getDisplaySyncTime() {
    var d = new Date();
    var curr_date = ("0" + d.getDate()).slice(-2);
    var curr_month = ("0" + (d.getMonth() + 1)).slice(-2);
    var curr_year = d.getFullYear();
    return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + " " + curr_month + "/" + curr_date + "/" + curr_year;
}