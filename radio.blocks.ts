
/**
 * Custom blocks related to sending and recieving radio signals for physical play
 */
//% weight=1 color=#097969 icon="\uf1e0"
//% block="Play with Others"
namespace RadioPlay {

    /**
        * Check Proximity (based on signal strength)
        * @param otherDevice - The other micro:bit to check proximity with.
        * @returns True if signal strength suggests proximity, false otherwise.
        */
    //% block="is %thisDevice close to touching %otherDevice"
    export function isTouch(): boolean {
        radio.setTransmitPower(1)
        radio.setGroup(0); // Set a radio group (choose any number you like)
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


    /**
     * Check Proximity (based on signal strength)
     * @param otherDevice - The other micro:bit to check proximity with.
     * @returns True if signal strength suggests proximity, false otherwise.
     */
    //% block="is %thisDevice close to %otherDevice"
    export function isClose(): boolean {
        radio.setTransmitPower(2)
        radio.setGroup(0); // Set a radio group (choose any number you like)
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


    /**
     * 
     */
    //% block="Send Signal"
    //export function SendSignal(): void {
    //    radio.setGroup(0);
    //    radio.setTransmitPower(2)
    //}


    /**
     *
     */
    //% block="Send Signal Close To Touching"
    //export function SendSignalTouch(): void {
    //    radio.setGroup(0);
    //    radio.setTransmitPower(1)
    //}


    /**
    * Any Sound Detected
    * @returns True if any sound is detected, false otherwise.
    */
    //%block="any sound detected"
    export function anySoundDetected(): boolean {
        let soundLevel = pins.analogReadPin(AnalogPin.P0); // Read sound level from the microphone

        // Check if the sound level is above a minimum threshold
        let minimumThreshold = 675; // Adjust as needed

        if (soundLevel > minimumThreshold) {
            return true; // Sound detected
        } else {
            return false; // No significant sound detected
        }
    }



}