declare module "nativescript-open-app" {
    /**
     * Open another application on the device.
     */
    export function openApp(appID: string, storeFallback?: boolean, appleStoreId?: string): boolean;
}
