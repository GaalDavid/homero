input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 37 && 37 < input.temperature()) {
        basic.showString("beteg")
        for (let index = 0; index < 1; index++) {
            music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
        }
    } else if (input.temperature() < 37 && 37 > input.temperature()) {
        basic.showString("jo")
        for (let index = 0; index < 1; index++) {
            music.playMelody("C5 - - C5 - - - - ", 500)
        }
    }
    basic.showIcon(IconNames.Surprised)
})
