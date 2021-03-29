import {
    getBoolean,
    setBoolean,
    // also other get and set types available
    hasKey,
    remove,
    clear
} from "@nativescript/core/application-settings";

export default class FirstStart {
    
    static loadSavedFirstStart() {
        // To test intro screen again
        // remove("startedBefore");

        let notSetYet: boolean = !hasKey("startedBefore");
        return notSetYet;
    }

    static saveFirstStarted() {
        setBoolean("startedBefore", true);
    }
}
