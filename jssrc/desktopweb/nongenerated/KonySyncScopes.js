if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.AuthorizedAccess) === "undefined") {
    com.healogics.offline.AuthorizedAccess = {};
}
//API call will trigger AuthorizedAccess reset
com.healogics.offline.AuthorizedAccess.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("AuthorizedAccess", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogic) === "undefined") {
    com.healogic = {};
}
if (typeof(com.healogic.offline) === "undefined") {
    com.healogic.offline = {};
}
if (typeof(com.healogic.offline.Patients) === "undefined") {
    com.healogic.offline.Patients = {};
}
//API call will trigger Patients reset
com.healogic.offline.Patients.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("Patients", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.appList) === "undefined") {
    com.healogics.offline.appList = {};
}
//API call will trigger appList reset
com.healogics.offline.appList.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("appList", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.metrics) === "undefined") {
    com.healogics.offline.metrics = {};
}
//API call will trigger metrics reset
com.healogics.offline.metrics.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("metrics", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.login) === "undefined") {
    com.healogics.offline.login = {};
}
//API call will trigger login reset
com.healogics.offline.login.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("login", successcallback, errorcallback);
}
if (typeof(scopeWoundHealingSteps) === "undefined") {
    scopeWoundHealingSteps = {};
}
//API call will trigger scopeWoundHealingSteps reset
scopeWoundHealingSteps.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("scopeWoundHealingSteps", successcallback, errorcallback);
}
if (typeof(healingStepsConf) === "undefined") {
    healingStepsConf = {};
}
//API call will trigger healingStepsConf reset
healingStepsConf.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("healingStepsConf", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.userMetrics) === "undefined") {
    com.healogics.offline.userMetrics = {};
}
//API call will trigger userMetrics reset
com.healogics.offline.userMetrics.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("userMetrics", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.taskAndNotes) === "undefined") {
    com.healogics.offline.taskAndNotes = {};
}
//API call will trigger taskAndNotes reset
com.healogics.offline.taskAndNotes.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("taskAndNotes", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.woundSummary2) === "undefined") {
    com.healogics.offline.woundSummary2 = {};
}
//API call will trigger woundSummary2 reset
com.healogics.offline.woundSummary2.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("woundSummary2", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.healingSteps) === "undefined") {
    com.healogics.offline.healingSteps = {};
}
//API call will trigger healingSteps reset
com.healogics.offline.healingSteps.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("healingSteps", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.OfflinePhotoUpload) === "undefined") {
    com.healogics.offline.OfflinePhotoUpload = {};
}
//API call will trigger OfflinePhotoUpload reset
com.healogics.offline.OfflinePhotoUpload.reset = function(successcallback, errorcallback) {
    if (!kony.sync.isSyncInitialized(errorcallback)) {
        return;
    }
    kony.sync.scopeReset("OfflinePhotoUpload", successcallback, errorcallback);
}
if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.healogics) === "undefined") {
    com.healogics = {};
}
if (typeof(com.healogics.offline) === "undefined") {
    com.healogics.offline = {};
}
if (typeof(com.healogics.offline.OfflinePatientRecords) === "undefined") {
    com.healogics.offline.OfflinePatientRecords = {};
}
//API call will trigger OfflinePatientRecords reset
com.healogics.offline.OfflinePatientRecords.reset = function(successcallback, errorcallback) {
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        kony.sync.scopeReset("OfflinePatientRecords", successcallback, errorcallback);
    }
    // **********************************Start Scope definition************************
konysyncClientSyncConfig = {
        "AppID": "1000148102b32778a",
        "Version": "b2d054fcc7476b389ad270adbd172cb0058c85f371b87724f4c6bbc3ed328cc9",
        "ArrayOfSyncScope": [{
            "ScopeName": "AuthorizedAccess",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["userId", "facilityId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "acceptedDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "expiryDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "termsText"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "deleted"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }],
                "Name": "termsAndConditions"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "Patients",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["facilityId", "patientId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "advanceProcedures"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "appointmentType"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "caseManager"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedBy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "msrFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "msrReviewFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "msrWeek"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "name"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "nextAppointment"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "physician"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "transferStatus"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "txBasedPrecaution"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "weeks"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "wounds"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "physicianUserId"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "caseManagerUserId"
                }],
                "Name": "patientList"
            }, {
                "Relationships": {},
                "Pk_Columns": ["patientId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "abiLeft"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "abiRight"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "allergies"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "careApproach"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "caseManager"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "contactNumber"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "dateOfBirth"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "diabeticStatus"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedBy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "medicalRecNo"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "msrFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "msrReviewFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "name"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "nextAppointmentDt"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "priCarePhy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "priInsur"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "refPhy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "secInsur"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "terInsur"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "wccPhy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "weeksInTreat"
                }],
                "Name": "patientInfo"
            }, {
                "Relationships": {},
                "Pk_Columns": ["facilityId", "weekRange"],
                "Columns": [{
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedBy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "msrCount"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "referKey"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "weekRange",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "weeks"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "physicianKey"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "clinicianKey"
                }],
                "Name": "msrList"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "appList",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["appid", "userId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "accessToken"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "appid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "deleted"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "displayFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "enabledFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "helpDeskNumber"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "responsecode"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "responsedesc"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "statuscode"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "taskCount"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "roleIdList"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "authorization"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentTypeNameList"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentTypeCodeList"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "OfflineDateLimit"
                }],
                "Name": "appListOffline"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "metrics",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["facilityid", "measures", "metricsmonth", "metricsyear"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "actual"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "delete_flag"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityname"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "last_updated_by_user"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "measures",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "metricsmonth",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "metricsyear",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "plan"
                }],
                "Name": "wccMetrics"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "login",
            "ScopeTables": [{
                "Relationships": {
                    "OneToMany": [{
                        "RelationshipAttributes": [{
                            "SourceObject_Attribute": "userId",
                            "TargetObject_Attribute": "userId"
                        }],
                        "TargetObject": "facilityList",
                        "Cascade": "true"
                    }]
                },
                "Pk_Columns": ["userId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "accessToken"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "accessToken1"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "firstName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastLoginTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "password"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "role"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "roles"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastLoginFacilityId"
                }],
                "Name": "login"
            }, {
                "Relationships": {},
                "Pk_Columns": ["facilityId", "userId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "configuration"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityBluebookId"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timeZone"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userName"
                }],
                "Name": "facilityList"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "scopeWoundHealingSteps",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["patientUuid", "woundNumber", "docEntityId", "facilityId", "woundId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundAttributes"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docEntityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "encounterId"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "stepDetailJSON"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundId",
                    "IsPrimaryKey": true
                }],
                "Name": "objWounds"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "healingStepsConf",
            "ScopeTables": [{
                "Relationships": {
                    "OneToMany": [{
                        "RelationshipAttributes": [{
                            "SourceObject_Attribute": "patientUuid",
                            "TargetObject_Attribute": "patientUuid"
                        }, {
                            "SourceObject_Attribute": "docEntityId",
                            "TargetObject_Attribute": "docEntityId"
                        }, {
                            "SourceObject_Attribute": "woundNumber",
                            "TargetObject_Attribute": "woundNumber"
                        }],
                        "TargetObject": "healingWoundSteps",
                        "Cascade": "true"
                    }]
                },
                "Pk_Columns": ["docEntityId", "patientUuid", "woundNumber"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "accessToken"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "deleted"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docEntityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilities"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundAttributes"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "encounterId"
                }],
                "Name": "healingWounds"
            }, {
                "Relationships": {
                    "OneToMany": [{
                        "RelationshipAttributes": [{
                            "SourceObject_Attribute": "patientUuid",
                            "TargetObject_Attribute": "patientUuid"
                        }, {
                            "SourceObject_Attribute": "docEntityId",
                            "TargetObject_Attribute": "docEntityId"
                        }, {
                            "SourceObject_Attribute": "woundNumber",
                            "TargetObject_Attribute": "woundNumber"
                        }, {
                            "SourceObject_Attribute": "stepNumber",
                            "TargetObject_Attribute": "stepNumber"
                        }],
                        "TargetObject": "healingWoundSubSteps",
                        "Cascade": "true"
                    }]
                },
                "Pk_Columns": ["docEntityId", "patientUuid", "woundNumber", "stepNumber", "facilityId", "encounterId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "accessToken"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "deleted"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docEntityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilities"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "stepNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "stepTitle"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "cpgLinks"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "encounterId",
                    "IsPrimaryKey": true
                }],
                "Name": "healingWoundSteps"
            }, {
                "Relationships": {},
                "Pk_Columns": ["docEntityId", "patientUuid", "woundNumber", "subStepDescId", "stepNumber", "encounterId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "accessToken"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "deleted"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docEntityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilities"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepDescId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepDesc"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepDesc_Server"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser_Server"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedTime_Server"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "isClientWins"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "conflictStatus"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "stepNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "encounterId",
                    "IsPrimaryKey": true
                }],
                "Name": "healingWoundSubSteps"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "userMetrics",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["actual", "measures", "metricsmonth", "metricsyear", "userId", "facilityId"],
                "Columns": [{
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "actual",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "deleted"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedBy"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "timestamp",
                    "Name": "lastUpdatedTimestamp"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "measures",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "metricsmonth",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "metricsyear",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }],
                "Name": "userMetrics"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "taskAndNotes",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["facilityId", "patientUuid", "taskUuid", "userId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "action"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "completedDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "createDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "dueDate"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "followstepdesc"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedBy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientName"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "taskDesc"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "taskStatus"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "taskUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundNo"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "medicalRecordNo"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "encounterId"
                }],
                "Name": "tasksList"
            }, {
                "Relationships": {},
                "Pk_Columns": ["facilityId", "notesId", "patientUuid", "woundNo"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "action"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "createDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "createdBy"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "followStepDesc"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedBy"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "notesDesc"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "true",
                    "type": "string",
                    "Name": "notesId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientName"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundNo",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "medicalRecordNo"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "encounterId"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "dueDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId"
                }],
                "Name": "notesList"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "woundSummary2",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["facilityId", "patientId", "woundId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundLabel"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientEncounterDetails"
                }],
                "Name": "patientWounds2"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "healingSteps",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["docEntityId", "facilityId", "patientUuid", "stepNumber", "wndSubDescId", "woundId", "woundNumber"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "completeddateDataAvailFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "dataPossibleValue"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "dateDataAvailFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docEntityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "facilityId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser_Client"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedTimestamp_Client"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientUuid",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "resultDataAvailFlag"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "stepNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepCompletedDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepDescription"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepOrderDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepResult"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "wndSubDescId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "woundNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepResult_Client"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepOrderDate_Client"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "subStepCompletedDate_Client"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "conflictRaisedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "conflictRaisedByUser_Client"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "stepTitle"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedTimestamp_Server"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "encounterId"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "is_field_edited"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "record_level"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "wound_date_added"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "physician_document_date"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "wound_left_right"
                }],
                "Name": "healingSubSteps"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }, {
            "ScopeName": "OfflinePhotoUpload",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["id", "pageNumber", "userId", "photoId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docType"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "document"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "id",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastPage"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "integer",
                    "Name": "pageNumber",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "timestamp"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "userId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": false,
                    "Autogenerated": "true",
                    "type": "string",
                    "Name": "photoId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "statuscode"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "responsedesc"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "responsecode"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentCreatedDate"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "image_Timestamp"
                }],
                "Name": "offlinePhotoUpload"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "d10704bf-f4ac-4aef-be68-7352b53b68bc"
        }, {
            "ScopeName": "OfflinePatientRecords",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["documentUUID", "patientId"],
                "Columns": [{
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docTypeCode"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "docTypeName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentName"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentUploadedDate"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentUUID",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastSyncTime"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastUpdatedByUser"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "moreDataAvailable"
                }, {
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "patientId",
                    "IsPrimaryKey": true
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "srcTypeCode"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentTypeNameList"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "documentTypeCodeList"
                }, {
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "timestamp",
                    "Name": "documentUploadedTime"
                }],
                "Name": "getPatientRecords"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000148102b32778a",
            "DataSource": "b3cf844f-0865-4492-a515-69ea31aae80d"
        }],
        "ArrayOfDataSource": [{
            "ID": "b3cf844f-0865-4492-a515-69ea31aae80d",
            "type": "JSON"
        }, {
            "ID": "d10704bf-f4ac-4aef-be68-7352b53b68bc",
            "type": "JSON"
        }]
    }
    //**********************************End Scope definition************************