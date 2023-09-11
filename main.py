def on_forever():
    if MoveAndPlay.is_jumping():
        music.play(music.tone_playable(523, music.beat(BeatFraction.SIXTEENTH)),
            music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)
