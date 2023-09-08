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
    //% block="Is movement detected"
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
        let threshold = 1000; // Adjust this threshold value as needed
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
        let threshold = 1000; // Adjust this threshold value as needed
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
    * Check Proximity
    * @param otherDevice - The other micro:bit to check proximity with.
    * @returns True if within 3 meters, false otherwise.
    */
    //% block="Is %thisDevice within 3 meters of %otherDevice"
    export function isWithin3Meters(otherDevice: number): boolean {
        radio.setGroup(1); // Set a radio group (choose any number you like)
        radio.sendValue("ping", 1); // Send a ping signal to the other micro:bit
        
        let startTime = input.runningTime();
        while (input.runningTime() - startTime < 1000) {
            const received = radio.receiveNumber();
            if (received === 1) {
                WinSound()
                return true; // If we receive a pong from the other micro:bit, they are within 3 meters
            }
        }

        return false; // If we didn't receive a pong within 1 second, assume they are not within 3 meters
    }

    /**
     * Listen for ping and send pong
     */
    radio.onDataPacketReceived(({ receivedString, receivedNumber }) => {
        if (receivedString == "ping" && receivedNumber == 1) {
            radio.sendValue("pong", 1);
        }
    });



    //% block
    /**
    * Sound plays if game event happens which
    * correspondes to a player advancement or win
    */
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

    /*
      export function fib(value: number): number {
           return value <= 1 ? value : fib(value -1) + fib(value - 2);
      }

    */

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