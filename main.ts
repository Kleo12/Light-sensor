basic.forever(function on_forever() {
    let level = input.lightLevel()
    let dark = level < 100
    if (dark) {
        led.plotBrightness(80, 80, 80)
    }
    
})
