# NativeScript Open App plugin
A NativeScript plugin for opening other applications on the device (with app store fallback)


## Installation
Run the following command from the root of your project:

```
tns plugin add nativescript-open-app
```

## Usage
### Android
To open an app, you need its id (for example "com.facebook.katana" for Facebook and "com.twitter.android" for Twitter). 
You can easily find it in app's URL on https://play.google.com.

#### Examples

Open Facebook app if it is installed on the device (open Facebook app's entry in Play Store otherwise):
```
var openApp = require("nativescript-open-app").openApp;

var installed = openApp("com.facebook.katana");
console.log("Is it installed? " + installed);
```

Open Facebook app if it is installed on the device (do nothing otherwise):
```
var openApp = require("nativescript-open-app").openApp;

var installed = openApp("com.facebook.katana", false);
console.log("Is it installed? " + installed);
```

Open Facebook app if it is installed on the device (open facebook.com otherwise):
```
var openApp = require("nativescript-open-app").openApp;
var utils = require("utils/utils");

var installed = openApp("com.facebook.katana", false);
if (!installed) {
    utils.openUrl("https://facebook.com");
}
```

Simple TypeScript example:
```
import { openApp } from "nativescript-open-app";

openApp("com.facebook.katana");
```

### iOS
To open an app on iOS you need a schema registered by the app.
Additionally you are required to whitelist the schemas for all apps you want to be able to open. Add them to your `app/App_Resources/iOS/Info.plist` (and additionally include "itms-apps" schema used by the App Store):

```
  <key>LSApplicationQueriesSchemes</key>
  <array>
    <string>itms-apps</string>
    <string>twitter</string>
  </array>
```

#### Examples
Open Facebook app if it is installed on the device (do nothing otherwise):
```
var openApp = require("nativescript-open-app").openApp;

var installed = openApp("fb://");
console.log("Is it installed? " + installed);
```

Open Facebook app if it is installed on the device (open Facebook app's entry in App Store otherwise).
The third argument to `openApp` is the app's id in App Store (you can easily find it in app's URL on https://itunes.apple.com):
```
var openApp = require("nativescript-open-app").openApp;

var installed = openApp("fb://", true, "284882215");
console.log("Is it installed? " + installed);
```

Open Facebook app if it is installed on the device (open facebook.com otherwise):
```
var openApp = require("nativescript-open-app").openApp;
var utils = require("utils/utils");

var installed = openApp("fb://", false);
if (!installed) {
    utils.openUrl("https://facebook.com");
}
```

Simple TypeScript example:
```
import { openApp } from "nativescript-open-app";

openApp("fb://");
```
