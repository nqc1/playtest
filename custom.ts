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
namespace MoveAndPlay {


  

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



//Code Cuts
//