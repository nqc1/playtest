PlayTools.reset_score()
PlayTools.set_win_threshold(10)

def on_forever():
    if MoveAndPlay.is_jumping():
        PlayTools.increase_score()
    elif MoveAndPlay.is_walking():
        PlayTools.decrease_score()
    elif input.button_is_pressed(Button.A):
        PlayTools.reset_score()
    else:
        PlayTools.check_for_win()
basic.forever(on_forever)
