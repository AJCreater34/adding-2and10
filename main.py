def on_button_pressed_a():
    global number
    number += 2
    basic.show_string("" + str((number)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if number >= 5:
        basic.show_string("good ,you know your odd numbers over 5")
    else:
        basic.show_string("Add more")
input.on_button_pressed(Button.B, on_button_pressed_b)

number = 0
number = 1
basic.show_string("" + str((number)))