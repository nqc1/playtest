def on_button_pressed_a():
    basic.pause(1000)
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    for index in range(1000):
        datalogger.log(datalogger.create_cv("Sound", input.sound_level()))
        if RadioPlay.any_sound_detected():
            led.plot(1, 1)
        basic.pause(10)
        led.unplot(1, 1)
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.pause(1000)
    music.play(music.tone_playable(523, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    for index2 in range(1000):
        datalogger.log(datalogger.create_cv("XAcc", input.acceleration(Dimension.X)),
            datalogger.create_cv("YAcc", input.acceleration(Dimension.Y)),
            datalogger.create_cv("ZAcc", input.acceleration(Dimension.Z)))
        basic.pause(10)
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if RadioPlay.is_touch():
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)
