/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Oct 2024
 * This program can take light and show how much light it takes
*/


// variables
let neopixelStrip: neopixel.Strip = null
let lightAmount = input.lightLevel()

// cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// When you click A it shows many light amounts
input.onButtonPressed(Button.A, function () {
    // if lightAmount was <= 51
    lightAmount = input.lightLevel()
    if (lightAmount <= 51) {
        neopixelStrip.show()
    }

    // if lightAmount was > 52
    if (lightAmount > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
    }

    // if lightAmount was > 104
    if (lightAmount > 104) {
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        neopixelStrip.show()
    }
 
    // if lightAmount was > 156
    if (lightAmount > 156) {
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
        neopixelStrip.show()
    }
    
    // if lightAmount was > 208
    if (lightAmount > 208) {
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
    }

    // turn lights off after use
    basic.clearScreen()
    basic.showNumber(lightAmount)
    basic.pause(1000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
