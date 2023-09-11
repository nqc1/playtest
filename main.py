def on_forever():
    if MoveAndPlay.is_jumping():
        music.play(music.tone_playable(523, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
    elif True:
        pass
    else:
        pass
basic.forever(on_forever)
