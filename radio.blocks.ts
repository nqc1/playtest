
/**
 * Custom blocks related to sending and recieving radio signals for physical play
 */
//% weight=1 color=#097969 icon="\uf1e0"
//% block="Play with Others"
namespace RadioPlay {

    // let playerID = 1

    // let isSpecial = false; // Initialize isSpecial as false initially
    // radio.onDataPacketReceived(({ receivedString }) => {
    //     if (receivedString == "specialPlayer") {
    //         isSpecial = true;
    //     } else if (receivedString == "specialPlayerChange")
    //         isSpecial = false;
    // });

    // /**
    //  * Set Player ID
    //  * @param playerId - The ID to assign to the player (e.g., 1, 2, 3, ...).
    //  */
    // //% block="set my player ID to $id"
    // export function setPlayerID(id: number): void {
    //     // Store the assigned player ID in a global variable
    //     // You can use this variable in your game logic
    //     playerID = id
    // }
    // /**
    // * Set Special Player
    // * @param playerId - The ID of the special player (e.g., 1, 2, 3, ...).
    // */
    // //% block="set special player to $playerId"
    // export function setSpecialPlayer(playerId: number): void {
    //     radio.sendValue("specialPlayer", playerId);
    // }
    // /**
    // * Change Special Player
    // */
    // //% block="random special player $numberOfPlayers"
    // export function changeSpecialPlayer(numberOfPlayers: number): void {
    //     // Generate a new random player ID (e.g., 1, 2, 3, ...) and set it as the "special" player
    //     let newPlayerId = Math.floor(Math.random() * numberOfPlayers) + 1; // Adjust the range as needed
    //     radio.sendValue("specialPlayer", newPlayerId);
    // }
    // /**
    //  * Manually Change Special Player
    //  * @param originalPlayerId - The current special player's ID.
    //  * @param newPlayerId - The ID of the new special player.
    //  */
    // //% block="manually change special player from $originalPlayerId to $newPlayerId"
    // export function manuallyChangeSpecialPlayer(originalPlayerId: number, newPlayerId: number): void {
    //     radio.sendValue("specialPlayerChange", originalPlayerId);
    //     radio.sendValue("specialPlayer", newPlayerId);
    // }
    // /**
    //  * Check if I am the Special Player
    //  * @param isSpecial - True if the Micro:bit is the special player, false otherwise.
    //  */
    // //% block="i am the special player?"
    // export function amISpecialPlayer(): boolean {
    //     // Check if the Micro:bit is designated as the special player
    //     return isSpecial;
    // }



    /**
    * Loud Sound Detected
    * @returns True if Loud (yelling) level sound is detected, false otherwise.
    */
    //%block="loud sound detected"
    export function loudSound(): boolean {
        // Read sound level from the microphone
        let soundLevel = input.soundLevel()
        // Check if the sound level is above a minimum threshold
        let minimumThreshold = 120; // Adjust as needed

        if (soundLevel > minimumThreshold) {
            return true; // Sound detected
        } else {
            return false; // No significant sound detected
        }
    }

    /**
    * Medium Sound Detected
    * @returns True if medium (talking) level sound is detected, false otherwise.
    */
    //%block="medium sound detected"
    export function mediumSound(): boolean {
        // Read sound level from the microphone
        let soundLevel = input.soundLevel()
        // Check if the sound level is above a minimum threshold
        let minimumThreshold = 80; // Adjust as needed

        if (soundLevel > minimumThreshold) {
            return true; // Sound detected
        } else {
            return false; // No significant sound detected
        }
    }

    /**
    * Quiet Sound Detected
    * @returns True if quiet level sound is detected, false otherwise.
    */
    //%block="quiet sound detected"
    export function quietSound(): boolean {
        // Read sound level from the microphone
        let soundLevel = input.soundLevel()
        // Check if the sound level is above a minimum threshold
        let minimumThreshold = 40; // Adjust as needed

        if (soundLevel > minimumThreshold) {
            return true; // Sound detected
        } else {
            return false; // No significant sound detected
        }
    }



    /**
      * Check Proximity (based on signal strength)
      * @param otherDevice - The other micro:bit to check proximity with.
      * @returns True if signal strength suggests proximity, false otherwise.
      */
    //% block="is %thisDevice very close to %otherDevice"
    export function isTouch(): boolean {
        radio.setTransmitPower(1)
        radio.setGroup(0); // Set a radio group
        radio.sendValue("ping", 1); // Send a ping signal to the other micro:bit

        let proximityDetected = false;

        radio.onReceivedValue(function (name) { //look more into the onreceived value function and other radio uses
            if (name === "ping") {
                proximityDetected = true; // If signal strength suggests proximity, set the flag to true
            }
        });

        basic.pause(200); // Wait for a moment

        return proximityDetected; // Return the flag indicating whether proximity was detected or not
    }


    /**
     * Check Proximity (based on signal strength)
     * @param otherDevice - The other micro:bit to check proximity with.
     * @returns True if signal strength suggests proximity, false otherwise.
     */
    //% block="is %thisDevice close to %otherDevice"
    export function isClose(): boolean {
        radio.setTransmitPower(2)
        radio.setGroup(0); // Set a radio group
        radio.sendValue("ping", 1); // Send a ping signal to the other micro:bit

        let signalStrengthThreshold = 0; // This may not do anything
        let proximityDetected = false;

        radio.onReceivedValue(function (name, signalStrength) { //look more into the onreceived value function and other radio uses
            if (name === "ping" && signalStrength >= signalStrengthThreshold) {
                proximityDetected = true; // If signal strength suggests proximity, set the flag to true
            }
        });

        basic.pause(200); // Wait for a moment

        return proximityDetected; // Return the flag indicating whether proximity was detected or not
    }




}



