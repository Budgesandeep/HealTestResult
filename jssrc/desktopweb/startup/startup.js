kony.globals["appid"] = "Healogics";
kony.globals["apptitle"] = "WoundSuite";
kony.globals["build"] = "debug";
kony.globals["locales"] = [];
kony.globals["i18nArray"] = [];
//startup.js
var appConfig = {
    appId: "Healogics",
    appName: "WoundSuite",
    appVersion: "1.8.14",
    isturlbase: "https://healogics-uat.konycloud.com/services",
    isDebug: true,
    isMFApp: true,
    appKey: "healogics-uatcloud-key-829474159919",
    appSecret: "healogics-uatcloud-secret-829474159919",
    serviceUrl: "https://100014810.auth.konycloud.com/appconfig",
    svcDoc: {
        "identity_meta": {},
        "app_version": "1.0",
        "messagingsvc": {
            "appId": "d58bb954-58dd-446a-8b9d-05602395c7e4",
            "url": "https://healogics-uat.messaging.konycloud.com/api/v1"
        },
        "baseId": "2b32778a-ba83-4651-b694-095bc758d4b5",
        "app_default_version": "1.0",
        "login": [{
            "mandatory_fields": [],
            "provider_type": "custom",
            "alias": "UserAuthenticationProd",
            "type": "basic",
            "prov": "UserAuthenticationProd",
            "url": "https://100014810.auth.konycloud.com"
        }, {
            "mandatory_fields": [],
            "provider_type": "custom",
            "alias": "UserAuthentication",
            "type": "basic",
            "prov": "UserAuthentication",
            "url": "https://100014810.auth.konycloud.com"
        }, {
            "mandatory_fields": [],
            "provider_type": "custom",
            "alias": "UserAuthenticationDev",
            "type": "basic",
            "prov": "UserAuthenticationDev",
            "url": "https://100014810.auth.konycloud.com"
        }],
        "services_meta": {
            "HealogicsOffline": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/HealogicsOffline"
            },
            "PrintExportOld": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/PrintExportOld"
            },
            "Wound360": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/Wound360"
            },
            "Wound360Orchestration": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/Wound360Orchestration"
            },
            "Wound360Logout": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/Wound360Logout"
            },
            "UserLoginOrchestration": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/UserLoginOrchestration"
            },
            "IHealDocumentationService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/IHealDocumentationService"
            },
            "Notifications": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/Notifications"
            },
            "FacilityStore": {
                "offline": false,
                "metadata_url": "https://healogics-uat.konycloud.com/services/metadata/v1/FacilityStore",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/data/v1/FacilityStore"
            },
            "UserLogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/UserLogin"
            },
            "PrintExport": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://healogics-uat.konycloud.com/services/PrintExport"
            },
            "HealogicsOfflineOrchestration": {
                "type": "integsvc",
                "version": "2.0",
                "url": "https://healogics-uat.konycloud.com/services/HealogicsOfflineOrchestration"
            }
        },
        "sync": {
            "appId": "1000148102b32778a",
            "url": "https://healogics-uat.sync.konycloud.com/syncservice/api/v1/1000148102b32778a"
        },
        "selflink": "https://100014810.auth.konycloud.com/appconfig",
        "integsvc": {
            "HealogicsOffline": "https://healogics-uat.konycloud.com/services/HealogicsOffline",
            "_internal_logout": "https://healogics-uat.konycloud.com/services/IST",
            "PrintExportOld": "https://healogics-uat.konycloud.com/services/PrintExportOld",
            "Wound360": "https://healogics-uat.konycloud.com/services/Wound360",
            "Wound360Orchestration": "https://healogics-uat.konycloud.com/services/Wound360Orchestration",
            "Wound360Logout": "https://healogics-uat.konycloud.com/services/Wound360Logout",
            "UserLoginOrchestration": "https://healogics-uat.konycloud.com/services/UserLoginOrchestration",
            "IHealDocumentationService": "https://healogics-uat.konycloud.com/services/IHealDocumentationService",
            "Notifications": "https://healogics-uat.konycloud.com/services/Notifications",
            "UserLogin": "https://healogics-uat.konycloud.com/services/UserLogin",
            "PrintExport": "https://healogics-uat.konycloud.com/services/PrintExport",
            "HealogicsOfflineOrchestration": "https://healogics-uat.konycloud.com/services/HealogicsOfflineOrchestration"
        },
        "service_doc_etag": "0000016DF412CD80",
        "appId": "d58bb954-58dd-446a-8b9d-05602395c7e4",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "Healogics",
        "reportingsvc": {
            "session": "https://healogics-uat.konycloud.com/services/IST",
            "custom": "https://healogics-uat.konycloud.com/services/CMS"
        },
        "Webapp": {
            "url": "https://healogics-uat.konycloud.com/Healogics"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "ServiceResponse", "Error", "Crash"],
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeMVCTemplates();
    initializeUserWidgets();
    initializesegDocumentHeader();
    initializesegDocumentList();
    initializesegDocumentsTestResult();
    initializesegFacility();
    initializesegFacilityList();
    initializesegLoginFacility();
    initializesegNotificationFacility();
    initializesegPatientList();
    initializesegPatientRecords();
    initializesegPushNotificationForPopup();
    initializesegRecords();
    initializesegTestResult();
    initializesegViewTasks();
    initializesegadditionalCPGlinks();
    initializesegadditionalCPGlinkshdr();
    initializesegadminsave();
    initializesegimages();
    initializesegmetrics();
    initializesegmetricsheader();
    initializesegnotes();
    initializesegsearch();
    initializesegsystemnotificationlist();
    initializeseguploadheader();
    initializeseguploadstatus();
    initializesegweekdetails();
    initializesegweekdetailshdr();
    initializesegwoundfeaturetype();
    initializeTemp0d82334f748f740();
    frmAdminGlobals();
    frmAppsGlobals();
    frmHomeGlobals();
    frmLandingGlobals();
    frmLoginGlobals();
    frmNotificationDashboardGlobals();
    frmPatientListGlobals();
    frmPatientRecordsGlobals();
    frmPatientSummaryGlobals();
    frmPatientTestResultsGlobals();
    frmSelectFacilityGlobals();
    frmViewTasksNewGlobals();
    frmWCCDashboardGlobals();
    popupAdminSearchbyGlobals();
    popupAdminSortFilterGlobals();
    popupAlertGlobals();
    popupDuplicateDocumentGlobals();
    popupHTMLviewerGlobals();
    popupImageViewerGlobals();
    popupInfoGlobals();
    popupRegisterTimerGlobals();
    popupSwitchFacilityGlobals();
    popupUserAcknowledgementGlobals();
    popupcreatetaskGlobals();
    popuplogoutGlobals();
    popupnotificationGlobals();
    popuppdfviewerGlobals();
    popupsortandfilterGlobals();
    popupuploadstatusGlobals();
    //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
    setAppBehaviors();
};
//This is a hack for postAppInit and NotesPopup.
kony.visualizer.actions.postAppInitCallBack = function(eventObj) {
    return AS_AppEvents_d90572b0c9104c84ae599ba3c5a5699b(eventObj);
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + 'desktopweb/appjs'
    });
    require(['kvmodules'], function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            preappinit: AS_AppEvents_gc476518fed141c3883a71d1ba743f60,
            appservice: function(eventObject) {
                var value = AS_AppEvents_ib0bddbfba16446ca255c7ff36d2d4b8(eventObject);
                return value;
            },
            postappinit: kony.visualizer.actions.postAppInitCallBack,
            showstartupform: function() {
                frmLogin.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								