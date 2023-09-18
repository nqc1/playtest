PlayTools.resetScore()
PlayTools.setWinThreshold(10)
basic.forever(function on_forever() {
    if (MoveAndPlay.isRunning()) {
        PlayTools.increaseScore()
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (MoveAndPlay.isJumping()) {
        PlayTools.decreaseScore()
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.A)) {
        PlayTools.resetScore()
    } else {
        PlayTools.checkForWin()
    }
    
})
