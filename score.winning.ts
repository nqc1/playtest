/**
 * Custom blocks related to sendning out music for physical play
 */
//% weight=100 color=#097969 icon="Δ"
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
    //% block="Check For Win Score"
    export function checkForWin(): boolean {
        if (score >= winScore) {
            return true
        }
        return false
    }

    /**
     * Check for a win and display the result.
     */
    //% block="You Win!"
    export function winEvent(): void {
        winSound()
        basic.showString("YOU WIN!");
        resetScore()
    }

    /**
    * Set the win threshold score.
    * @param threshold - The score required to win.
        */
    //% block="Set Win Threshold to $threshold"
    export function setWinThreshold(threshold: number): void {
        winScore = threshold;
        updateDisplay();
    }

    /**
     * Get the current score.
     * @returns The current score.
     */
    //% block="Get Score"
    export function getScore(): number {
        return score;
    }

    /**
     * Reset the score to zero.
     */
    //% block="Reset Score"
    export function resetScore(): void {
        score = 0;
        updateDisplay();
    }

    /**
    * Decrease the score by one.
    */
    //% block="Decrease Score"
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
    //% block="Increase Score"
    export function increaseScore(): void {
        score++;
        updateDisplay();
        pause(200)
    }

}

