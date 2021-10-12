basic.showIcon(IconNames.House)
basic.forever(function () {
    serial.writeValue("x", input.acceleration(Dimension.Strength))
    basic.pause(100)
})
