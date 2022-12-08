// tests go here; this will not be compiled when this package is used as a library

// Play a tone when sound sensor event is raised.
edubitSoundBit.onEvent(SoundSensorCompareType.MoreThan, 512, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})

// Play a tone when potentiometer event is raised.
edubitPotentioBit.onEvent(PotCompareType.LessThan, 512, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
})

// Play a tone when IR sensor event is raised.
edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
})



// Loop forever.
basic.forever(function () {
    // Plot the first row LED according to sound level.
    if (edubitSoundBit.readSoundSensor() > 700) {
        led.plot(0, 0)
        led.plot(1, 0)
    } else if (edubitSoundBit.compareSoundSensor(SoundSensorCompareType.MoreThan, 350)) {
        led.plot(0, 0)
        led.unplot(1, 0)
    } else {
        led.unplot(0, 0)
        led.unplot(1, 0)
    }

    // Plot the second row LED according to potentiometer value.
    if (edubitPotentioBit.readPotValue() > 700) {
        led.plot(0, 1)
        led.plot(1, 1)
    } else if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 350)) {
        led.plot(0, 1)
        led.unplot(1, 1)
    } else {
        led.unplot(0, 1)
        led.unplot(1, 1)
    }

    // Plot the state of the IR sensor on third row LED.
    if (edubitIrBit.isIrSensorTriggered()) {
        led.plot(0, 2)
    }
    if (edubitIrBit.readIrSensor() == 0) {
        led.unplot(0, 2)
    }

    // Plot the power input voltage on 4th row LED 1.
    if (edubitPower.readVin() > 4.0) {
        led.plot(0, 3);
    } else {
        led.unplot(0, 3);
    }

    // Plot the power state on 4th row LED 2.
    if (edubitPower.isPowerOn()) {
        led.plot(1, 3);
    } else {
        led.unplot(1, 3);
    }

    // Plot the low batt state on 4th row LED 3.
    if (edubitPower.isLowBatt()) {
        led.plot(2, 3);
    } else {
        led.unplot(2, 3);
    }

    // Plot the overvoltage state on 4th row LED 4.
    if (edubitPower.isOvervoltage()) {
        led.plot(3, 3);
    } else {
        led.unplot(3, 3);
    }

    // RGB-bit / NeoPixel code removed

    // Turn on yellow LED on Traffic Light Bit.
    edubitTrafficLightBit.setLed(LedColor.Red, 0)
    edubitTrafficLightBit.setLed(LedColor.Yellow, 1)
    edubitTrafficLightBit.setLed(LedColor.Green, 0)

    // Toggle all LEDs on Traffic Light Bit 10 times.
    for (let index = 0; index < 10; index++) {
        edubitTrafficLightBit.toggleLed(LedColor.Red)
        edubitTrafficLightBit.toggleLed(LedColor.Yellow)
        edubitTrafficLightBit.toggleLed(LedColor.Green)
        basic.pause(200)
    }



    // Run Motor 1 forward at 50% speed for 1 second.
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 127)
    basic.pause(1000)
    edubitMotors.brakeMotor(MotorChannel.M1)

    // Run Motor 2 backward at 100% speed for 1 second.
    edubitMotors.runMotor(MotorChannel.M2, MotorDirection.Backward, 255)
    basic.pause(1000)
    edubitMotors.brakeMotor(MotorChannel.M2)



    // Move Servo 1 to 0 degree.
    edubitMotors.setServoPosition(ServoChannel.S1, 0)
    basic.pause(1000)

    // Disable Servo 1.
    edubitMotors.disableServo(ServoChannel.S1)



    // Move Servo 2 to 180 degrees.
    edubitMotors.setServoPosition(ServoChannel.S2, 180)
    basic.pause(1000)

    // Disable Servo 2.
    edubitMotors.disableServo(ServoChannel.S2)



    // Move Servo 3 to 0 degree.
    edubitMotors.setServoPosition(ServoChannel.S3, 0)
    basic.pause(1000)

    // Disable Servo 3.
    basic.pause(1000)
    edubitMotors.disableServo(ServoChannel.S3)
})
