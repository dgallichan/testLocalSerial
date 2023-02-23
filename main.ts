basic.showIcon(IconNames.House)
basic.forever(function () {
    serial.writeLine("" + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)))
})
