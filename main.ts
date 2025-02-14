input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    number += 2
    basic.showString("" + ("" + number))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (number >= 5) {
        basic.showString("good ,you know your odd numbers over 5")
    } else {
        basic.showString("Add more")
    }
    
})
let number = 0
number = 1
basic.showString("" + ("" + number))
