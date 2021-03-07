input.onButtonPressed(Button.A, function () {
    watering_time += 2
    basic.showString("" + (watering_time))
    if (watering_time >= 21) {
        watering_time = 20
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < times_repeat; index++) {
        for (let index = 0; index < watering_time; index++) {
            for (let index = 0; index < 60; index++) {
                watering_timer += -1
                basic.showNumber(watering_timer)
                basic.pause(1000)
                if (watering_timer == 0) {
                    watering_timer = 60
                }
            }
        }
        for (let index = 0; index < watering_time_difference; index++) {
            for (let index = 0; index < 60; index++) {
                non_watering_timer += -1
                basic.showNumber(non_watering_timer)
                basic.pause(1000)
                if (non_watering_timer == 0) {
                    non_watering_timer = 60
                }
            }
        }
        for (let index = 0; index < 3; index++) {
            music.playTone(523, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
    }
    for (let index = 0; index < 10; index++) {
        music.playMelody("F G E A - - - - ", 130)
    }
})
input.onButtonPressed(Button.B, function () {
    watering_time_difference += 5
    basic.showString("" + (watering_time_difference))
    if (watering_time_difference == 0) {
        watering_time_difference = 20
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (times_repeat))
    times_repeat += 1
})
let watering_time_difference = 0
let times_repeat = 0
let watering_time = 0
let non_watering_timer = 0
let watering_timer = 0
watering_timer = 60
non_watering_timer = 60
