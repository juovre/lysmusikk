let lysnivå = 0
basic.forever(function () {
    lysnivå = input.lightLevel()
    if (input.lightLevel() < 10) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (input.lightLevel() < 20) {
        music.playTone(370, music.beat(BeatFraction.Whole))
    } else if (input.lightLevel() < 30) {
        music.playTone(220, music.beat(BeatFraction.Whole))
    } else if (input.lightLevel() < 40) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (input.lightLevel() < 60) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
