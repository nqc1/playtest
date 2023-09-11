/**
 * Custom blocks related to sendning out music for physical play
 */
//% weight=100 color=#548B54 icon="\uf0a4"
namespace MoveAndPlay {
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

}