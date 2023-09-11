basic.forever(function on_forever() {
    if (MoveAndPlay.isJumping()) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    }
    
})
