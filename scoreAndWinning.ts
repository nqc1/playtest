
/**
 * Custom blocks related to sendning out music for physical play
 */
//% weight=100 color=#548B54 icon="\uf0a4"
namespace PlayTools {

    let score = 0; // Initialize the score
    let winScore = 1000 // Set a winscore



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
     * Increase the score by one.
     */
    //% block="Increase Score"
    export function increaseScore(): void {
        score++;
        updateDisplay();
        pause(200)
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
    //% block="CheckForWin"
    export function checkForWin(): void {
        if (score >= winScore) {
            winSound()
            basic.showString("YOU WIN!");
            resetScore()
        }
    }


}
