def on_forever():
    if Play.is_movement_detected():
        Play.win_sound()
basic.forever(on_forever)
