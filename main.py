PlayTools.reset_score()
PlayTools.set_win_threshold(10)

def on_forever():
    if MoveAndPlay.is_running():
        PlayTools.increase_score()
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
    elif MoveAndPlay.is_jumping():
        PlayTools.decrease_score()
        music.play(music.tone_playable(523, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
    elif input.button_is_pressed(Button.A):
        PlayTools.reset_score()
    else:
        PlayTools.check_for_win()
basic.forever(on_forever)
