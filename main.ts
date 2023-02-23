input.onButtonPressed(Button.A, function () {
    isLogging = !(isLogging)
})
control.onEvent(EventBusSource.MICROBIT_ID_ACCELEROMETER, EventBusValue.MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE, function () {
    if (isLogging) {
        serial.writeLine("" + convertToText(control.millis()) + "," + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)))
        led.toggle(0, 0)
    }
})
let isLogging = false
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    # . . . #
    # # # # #
    `)
isLogging = false
basic.forever(function () {
	
})
