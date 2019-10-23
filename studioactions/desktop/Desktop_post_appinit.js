function Desktop_post_appinit(eventobject) {
    return AS_AppEvents_d90572b0c9104c84ae599ba3c5a5699b(eventobject);
}

function AS_AppEvents_d90572b0c9104c84ae599ba3c5a5699b(eventobject) {
    kony.print("post appinit serviceIntegration.initMF:::" + deepLinkInfo.isDeepLinkFlow);
    //serviceIntegration.initMF();
}