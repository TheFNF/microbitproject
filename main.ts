input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 3; index++) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
})
