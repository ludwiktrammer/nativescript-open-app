"use strict";
var utils = require("utils/utils");

function openApp(appID, storeFallback, appleStoreId) {
    if (storeFallback === void 0) { storeFallback = true; }
    var context = utils.ad.getApplicationContext();
    var Intent = android.content.Intent;
    var intent = context.getPackageManager().getLaunchIntentForPackage(appID);
    if (intent) {
        // Open app
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
        return true;
    }
    else if (storeFallback) {
        // Can't open app - open store
        intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(android.net.Uri.parse("https://play.google.com/store/apps/details?id=" + appID));
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }
    return false;
}
exports.openApp = openApp;
