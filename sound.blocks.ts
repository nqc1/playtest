/**
 * Custom blocks related to sendning out music for physical play
 */
//% weight=100 color=#548B54 icon="\uf0a4"
namespace PlayTools {


    // /**
    // * Any Sound Detected
    // * @returns True if any sound is detected, false otherwise.
    // */
    // //% block="Any Sound Detected"
    // export function anySoundDetected(): boolean {
    //     let soundLevel = pins.analogReadPin(AnalogPin.P0); // Read sound level from the microphone

    //     // Check if the sound level is above a minimum threshold
    //     let minimumThreshold = 690; // Adjust as needed

    //     if (soundLevel > minimumThreshold) {
    //         return true; // Sound detected
    //     } else {
    //         return false; // No significant sound detected
    //     }
    // }

    // /**
    // * Sound Detected
    // * @param sensitivity - The sensitivity threshold for sound detection (0-1023).
    //  * @returns True if sound is detected, false otherwise.
    // */
    // //% block="Sound Detected with Sensitivity $sensitivity"
    // export function soundDetected(sensitivity: number): boolean {
    //     let soundLevel = pins.analogReadPin(AnalogPin.P0); // Read sound level from the microphone

    //     // Check if the sound level exceeds the sensitivity threshold
    //     if (soundLevel > sensitivity) {
    //         return true; // Sound detected
    //     } else {
    //         return false; // No significant sound detected
    //     }
    // }




    //% block
    /**
    * Sound plays if game event happens which 
    * correspondes to a player setback or loss
    */
    export function LoseSound() {
        //melody needs test
        music.playMelody("G E C", 150)
    }

    /**
    * Sound plays if game event happens which
    * correspondes to a player advancement or win
    */
    //% block
    export function WinSound() {
        //melody needs test
        music.playMelody("E D E C", 200)
    }

    /**
    * Custom Countdown Block
    * @param seconds - Number of seconds for the countdown
    **/
    //% block="Countdown %seconds|seconds"
    //% seconds.min=1 seconds.max=3600
    export function customCountdown(seconds: number): void {
        for (let i = seconds; i > 0; i--) {
            if (i > 9) {
                music.playTone(Note.C, music.beat(BeatFraction.Half));
                basic.pause(1000); // Delay for 1 second
            } else {
                music.playTone(Note.G, music.beat(BeatFraction.Half));
                basic.showNumber(i);
                basic.pause(300); // Delay
                basic.clearScreen();
            }
        }
        WinSound()
        LoseSound()
        basic.showIcon(IconNames.Happy);
    }

    
}