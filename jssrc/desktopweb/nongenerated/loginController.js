//Rahul
var login_cntrl_offline = {};
/************************************************************************************
 * Insert User Data first time to local DB
 *************************************************************************************/
login_cntrl_offline.insertOfflineLoginInfo = function() {
    function successCallBack(res) {
        // To perform any thing after getting the response
        kony.print("getloginDetailsForOffline success callback--------->");
        kony.print("password Updated Successfully--------->" + JSON.stringify(res));
    }

    function errorCallBack(res) {
        kony.print("getloginDetailsForOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var myObj = {
        userId: userInfo.userId,
        accessToken: userInfo.headerAccessToken, ///HEADER SERVICE CHANGES
        userName: userInfo.userName,
        password: userInfo.userPassword,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        role: userInfo.role,
        timestamp: userInfo.timestamp,
        roles: JSON.stringify(userInfo.roles),
        lastLoginFacilityId: userInfo.presentFacilityId ///Akshay - saving last selected facility
    };
    kony.print("My Object Print--------->" + JSON.stringify(myObj));
    com.healogics.offline.login.create(myObj, successCallBack, errorCallBack, false);
};
/************************************************************************************
 * Check if user Exit in Table or Not for UserName
 *************************************************************************************/
login_cntrl_offline.checkIfUserExist = function(userName, password) {
    var response;

    function successCallBack(res) {
        // To perform any thing after getting the response
        kony.print("getCountByUserName success callback--------->");
        kony.print("getCountByuserName Successfully Json--------->" + JSON.stringify(res));
        response = res;
    }

    function errorCallBack(res) {
        kony.print("getCountByuserName failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    ///Akshay - conveting the inputed string to lowercase
    var enteredName = userName.toLowerCase();
    kony.print("enteredName in LowerCase --------->" + enteredName);
    var wcs = "where lower(userName) ='" + enteredName + "' and password ='" + password + "'";
    kony.print("Where Clause--------->" + JSON.stringify(wcs));
    com.healogics.offline.login.getCount(wcs, successCallBack, errorCallBack);
    return response;
};
/************************************************************************************
 * Remove record from DB for USerName
 *************************************************************************************/
login_cntrl_offline.deleteRecordByUserName = function(userName) {
    function successCallBack(res) {
        // To perform any thing after getting the response
        kony.print("deleteRecordByUserId success callback--------->");
        kony.print("deleteRecordByUserId Successfully Json--------->" + JSON.stringify(res));
    }

    function errorCallBack(res) {
        kony.print("deleteRecordByUserId failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var wcs = "where userName =" + JSON.stringify(userName);
    kony.print("Where Clause--------->" + JSON.stringify(wcs));
    com.healogics.offline.login.remove(wcs, successCallBack, errorCallBack);
};
/************************************************************************************
 * For Getting User Detail For userName and password.
 *************************************************************************************/
login_cntrl_offline.fetchLoginDataByUserName = function(userName) {
    var response;

    function successCallBack(res) {
        // To perform any thing after getting the response
        kony.print("checkUserNameAndPasswordOffline success callback--------->");
        kony.print("checkUserNameAndPasswordOffline--------->" + JSON.stringify(res));
        if (res !== null) {
            response = res;
        }
    }

    function errorCallBack(res) {
        kony.print("checkUserNameAndPasswordOffline failure callback");
        kony.print("<<Error>>>" + JSON.stringify(response));
    }
    ////Akshay - will have to change to lower case
    var enteredName = userName.toLowerCase();
    kony.print("EnteredName for getting userInfo is converted to -> " + enteredName);
    var wcs = "where lower(userName) ='" + enteredName + "'";
    kony.print("Where Clause for fetchLoginDataByUserName--------->" + JSON.stringify(wcs));
    com.healogics.offline.login.find(wcs, successCallBack, errorCallBack, true);
    return response;
};
/************************************************************************************
 * For invalidating the Login Access Token for the logged in user. Takes back to Login
 *************************************************************************************/
login_cntrl_offline.invalidateUser = function() {
    function successCallBack(res) {
        // To perform any thing after getting the response
        kony.print("Token Removed Successfully");
        kony.print("invalidateUser success callback--------->");
        kony.print("Token Removed Successfully--------->" + JSON.stringify(res));
        var error_label = ERROR_CONSTANTS.LOGOUT_SUCCESS_MESSAGE;
        loginModule.showLoginScreen(error_label);
    }

    function errorCallBack(res) {
        kony.print("invalidateUser failure callback");
        kony.print("<<Error>>>" + JSON.stringify(res));
    }
    var invalidObj = {
        accessToken: ""
    };
    com.healogics.offline.login.updateByPK(userInfo.userId, invalidObj, successCallBack, errorCallBack, false);
};