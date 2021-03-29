import {
    getNumber,
    setNumber,
    // also other get and set types available
    hasKey,
    remove,
    clear
} from "@nativescript/core/application-settings";

export default class Highscore {
    
    static get highscore() {
        // uses appSettings in nativescript instead of localstorage
        let isKeyExisting: boolean = hasKey("highscore");
        if (isKeyExisting) {
            return getNumber('highscore');
        }
        return 0;
    }

    static set highscore(highscore: number) {
        setNumber("highscore", highscore);
    }
}
