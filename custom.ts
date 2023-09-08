//import music
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/



enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#548B54 icon="\uf0a4"
namespace Play {


    /**
    * Check Movement
    * @returns True if movement is detected, false otherwise.
    */
    //% block="Is Moving"
    export function isMovementDetected(): boolean {
        let threshold = 500; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);

        //calculate acceleration via euclidian norm rather than by individual directions
        if (Math.sqrt((deltaX * deltaX)+(deltaY * deltaY)+(deltaZ*deltaZ)) > threshold) {
        //if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
            return true; // Movement detected
        } else {
            return false; // No movement detected
        }
    }


    /**
        * Check Jumping
        * @returns True if Jumping is detected, false otherwise.
        */
    //% block="Is Jumping"
    export function isJumping(): boolean {
        let threshold = 1750; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);


        if (deltaY > threshold) {
            return true; // Jumping detected
        } else {
            return false; // No Jumping detected
        }
    }


    /**
        * Check Running
        * @returns True if Running is detected, false otherwise.
        */
    //% block="Is Running"
    export function isRunning(): boolean {
        let threshold = 750; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);


        if (deltaZ > threshold) {
            return true; // Running detected
        } else {
            return false; // No Running detected
        }
    }


    /**
        * Check Waling
        * @returns True if Walking is detected, false otherwise.
        */
    //% block="Is Walking"
    export function isWalking(): boolean {
        let threshold = 400; // Adjust this threshold value as needed
        let prevX = input.acceleration(Dimension.X);
        let prevY = input.acceleration(Dimension.Y);
        let prevZ = input.acceleration(Dimension.Z);

        basic.pause(100); // Wait for a moment to collect new readings

        let currentX = input.acceleration(Dimension.X);
        let currentY = input.acceleration(Dimension.Y);
        let currentZ = input.acceleration(Dimension.Z);

        let deltaX = Math.abs(currentX - prevX);
        let deltaY = Math.abs(currentY - prevY);
        let deltaZ = Math.abs(currentZ - prevZ);


        if (deltaZ > threshold) {
            return true; // Walking detected
        } else {
            return false; // No Walking detected
        }
    }




    

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
    * Custom Countdown Block
    * @param seconds - Number of seconds for the countdown
    **/
    //% block="Countdown %seconds|seconds"
    //% seconds.min=1 seconds.max=3600
    export function customCountdown(seconds: number): void {
            for (let i = seconds; i > 0; i--) {
                if (i > 9){
                    music.playTone(Note.C, music.beat(BeatFraction.Half));
                    basic.pause(1000); // Delay for 1 second
                }else{
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



    /**
     * Check Proximity (based on signal strength)
     * @param otherDevice - The other micro:bit to check proximity with.
     * @returns True if signal strength suggests proximity, false otherwise.
     */
    //% block="Is %thisDevice close to %otherDevice"
    export function isClose(otherDevice: number): boolean {
        radio.setTransmitPower(0)
        radio.setGroup(1); // Set a radio group (choose any number you like)
        radio.sendValue("ping", 1); // Send a ping signal to the other micro:bit

        let signalStrengthThreshold = 0; // Adjust this threshold as needed

        let proximityDetected = false;

        radio.onReceivedValue(function (name, signalStrength) {
            if (name === "ping" && signalStrength >= signalStrengthThreshold) {
                proximityDetected = true; // If signal strength suggests proximity, set the flag to true
            }
        });

        basic.pause(1000); // Wait for a moment

        return proximityDetected; // Return the flag indicating whether proximity was detected or not
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
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     *      * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block


    /**
  * Get the word field editor
  * @param word eg: Hello
  */
    //% blockId=wordPicker block="$word"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% word.fieldEditor="textdropdown"
    //% word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='hi,hello'
    // export function __wordPicker(word: string): string {
    //
    //      return word;
    // }

    //% block="say $word"
    //% word.shadow="wordPicker"
    // export function say(word: string) {
    //
    //  }
}