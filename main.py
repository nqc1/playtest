def on_forever():
    if Play.is_jumping():
        basic.show_icon(IconNames.HEART)
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.pause(100)
        basic.clear_screen()
basic.forever(on_forever)
