def on_forever():
    if Play.is_close(0):
        music.play(music.tone_playable(131, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.DOUBLE))
basic.forever(on_forever)
