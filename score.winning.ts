/**
 * Custom blocks related to sendning out music for physical play
 */
//% weight=0 color=#097969 icon="\uf005"
//% block="Score and Countdown"
namespace PlayTools {

    let score = 0; // Initialize the score
    let winScore = 1000 // Set a winscore


    /**
     * Update the LED display to show the current score.
     */
    function updateDisplay(): void {
        basic.clearScreen();
        for (let i = 0; i < score; i++) {
            led.plot(i % 5, Math.floor(i / 5));
        }
    }

    /**
     * Check for a win and display the result.
     */
    //% block="win?"
    export function checkForWin(): boolean {
        if (score >= winScore) {
            return true
        }
        return false
    }

    /**
     * Check for a win and display the result.
     */
    //% block="you win!"
    export function winEvent(): void {
        winSound()
        basic.showString("YOU WIN!");
        resetScore()
    }

    /**
    * Set the win threshold score.
    * @param threshold - The score required to win.
        */
    //% block="set win threshold to $threshold"
    export function setWinThreshold(threshold: number): void {
        winScore = threshold;
        updateDisplay();
    }

    /**
     * Get the current score.
     * @returns The current score.
     */
    //% block="get score"
    export function getScore(): number {
        return score;
    }

    /**
     * Reset the score to zero.
     */
    //% block="reset score"
    export function resetScore(): void {
        score = 0;
        updateDisplay();
    }

    /**
    * Decrease the score by one.
    */
    //% block="decrease score"
    export function decreaseScore(): void {
        if (score > 0) {
            score--;
            updateDisplay();
            pause(200)
        }
    }

    /**
     * Increase the score by one.
     */
    //% block="increase score"
    export function increaseScore(): void {
        score++;
        updateDisplay();
        pause(200)
    }


    /**
    * Sound plays if game event happens which 
    * correspondes to a player setback or loss
    */
    export function loseSound() {
        //melody needs test
        music.playMelody("G E C", 150)
    }

    /**
    * Sound plays if game event happens which
    * correspondes to a player advancement or win
    */
    export function winSound() {
        //melody needs test
        music.playMelody("E D E C", 200)
    }

    /**
    * Custom Countdown Block
    * @param seconds - Number of seconds for the countdown
    **/
    //% block="countdown %seconds|seconds"
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
        winSound()
        loseSound()
        basic.showIcon(IconNames.Happy);
    }


    // /**
    // * Sound Detected
    // * @param sensitivity - The sensitivity threshold for sound detection (0-1023).
    //  * @returns True if sound is detected, false otherwise.
    // */
    // //% notblock="Sound Detected with Sensitivity $sensitivity"
    // export function soundDetected(sensitivity: number): boolean {
    //     let soundLevel = pins.analogReadPin(AnalogPin.P0); // Read sound level from the microphone

    //     // Check if the sound level exceeds the sensitivity threshold
    //     if (soundLevel > sensitivity) {
    //         return true; // Sound detected
    //     } else {
    //         return false; // No significant sound detected
    //     }
    // }







}

