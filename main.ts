basic.forever(function on_forever() {
    if (Play.isClose(0)) {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Double))
    }
    
})
