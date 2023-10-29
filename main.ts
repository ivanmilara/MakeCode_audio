input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Square)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
	
})
