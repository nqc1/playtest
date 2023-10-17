input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.pause(1000)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 1000; index++) {
        datalogger.log(datalogger.createCV("XAcc", input.acceleration(Dimension.X)), datalogger.createCV("YAcc", input.acceleration(Dimension.Y)), datalogger.createCV("ZAcc", input.acceleration(Dimension.Z)))
        basic.pause(10)
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.pause(1000)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index2 = 0; index2 < 1000; index2++) {
        datalogger.log(datalogger.createCV("Sound", input.soundLevel()))
        if (RadioPlay.mediumSound()) {
            led.plot(1, 1)
        }
        
        basic.pause(10)
        led.unplot(1, 1)
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function on_forever() {
    if (RadioPlay.quietSound()) {
        led.plot(0, 0)
        basic.pause(500)
        led.unplot(0, 0)
    }
    
})
