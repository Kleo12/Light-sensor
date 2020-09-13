def on_forever():
    level = input.light_level()
    dark = level<100
    if dark:
        led.plot_brightness(80, 80, 80)

        
basic.forever(on_forever)