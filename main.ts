PlayTools.resetScore()
PlayTools.setWinThreshold(10)
basic.forever(function () {
    if (MoveAndPlay.isJumping()) {
        PlayTools.increaseScore()
    } else if (MoveAndPlay.isWalking()) {
        PlayTools.decreaseScore()
    } else if (input.buttonIsPressed(Button.A)) {
        PlayTools.resetScore()
    } else {
        PlayTools.checkForWin()
    }
})
