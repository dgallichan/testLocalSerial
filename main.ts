basic.showIcon(IconNames.House)
basic.forever(function () {
    serial.writeValue("a.x", input.acceleration(Dimension.X))
    serial.writeValue("a.y", input.acceleration(Dimension.Y))
    serial.writeValue("a.z", input.acceleration(Dimension.Z))
    serial.writeValue("m.x", input.magneticForce(Dimension.X))
    serial.writeValue("m.y", input.magneticForce(Dimension.Y))
    serial.writeValue("m.z", input.magneticForce(Dimension.Z))
    basic.pause(5)
})
