input.onButtonPressed(Button.A, function () {
    number += 2
    basic.showString("" + (number))
})
input.onButtonPressed(Button.B, function () {
    number += 10
    basic.showString("" + (number))
})
let number = 0
number = 1
basic.showString("" + (number))
