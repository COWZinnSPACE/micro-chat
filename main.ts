radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    x = 34 + 35
    radio.sendNumber(x)
})
let x = 0
radio.setGroup(10)
