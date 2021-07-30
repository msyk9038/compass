basic.forever(function () {
    if (input.compassHeading() > 315 || input.compassHeading() <= 45) {
        basic.showString("N")
    } else {
        basic.clearScreen()
    }
})
