/**
 * Custom blocks related to sendning out music for physical play
 */
//% weight=100 color=#548B54 icon="\uf0a4"
namespace PlayTools {
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