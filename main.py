PlayTools.set_win_threshold(10)

def on_forever():
    if RadioPlay.is_close():
        music.play(music.tone_playable(988, music.beat(BeatFraction.EIGHTH)),
            music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)
