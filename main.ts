input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
    }
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(5000)
    }
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(5000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
    }
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
    }
})
