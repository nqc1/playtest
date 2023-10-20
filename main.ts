input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 1000; index++) {
        datalogger.log(
        datalogger.createCV("XAcc", input.acceleration(Dimension.X)),
        datalogger.createCV("YAcc", input.acceleration(Dimension.Y)),
        datalogger.createCV("ZAcc", input.acceleration(Dimension.Z))
        )
        basic.pause(10)
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(1000)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 1000; index++) {
        datalogger.log(datalogger.createCV("Sound", input.soundLevel()))
        if (RadioPlay.mediumSound()) {
            led.plot(1, 1)
        }
        basic.pause(10)
        led.unplot(1, 1)
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (MoveAndPlay.isMovementDetected()) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (RadioPlay.loudSound()) {
        led.plot(0, 0)
        basic.pause(500)
        led.unplot(0, 0)
    } else if (RadioPlay.mediumSound()) {
        led.plot(1, 1)
        basic.pause(500)
        led.unplot(1, 1)
    } else if (RadioPlay.quietSound()) {
        led.plot(2, 2)
        basic.pause(500)
        led.unplot(2, 2)
    }
})
basic.forever(function () {
    if (RadioPlay.isTouch()) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
