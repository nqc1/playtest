basic.forever(function on_forever() {
    if (Play.isJumping()) {
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(100)
        basic.clearScreen()
    }
    
})
