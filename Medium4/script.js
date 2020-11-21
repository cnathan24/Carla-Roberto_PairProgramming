'use strict';



class Car {
    constructor (make, model, year, milage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color = color;
    }

    driveToWork(milage) {
         milage = this.milage + 33;
        console.log(`old milage: ${this.milage} | new milage: ${milage}`);
        this.milage = milage;
    }

    driveAroundTheWorld (milage) {
        milage = (this.milage + 24000)
        console.log(`old milage: ${this.milage} | new milage: ${milage}`);
        this.milage = milage;
    }


    runErrands (milage) {
        milage = (this.milage + 30)
        console.log(`old milage: ${this.milage} | new milage: ${milage}`);
        this.milage = milage;

    }
}

const myCar = new Car ('Kia', 'Stinger', 2020, 2000, 'grey');

myCar.driveToWork();
myCar.driveAroundTheWorld();
myCar.runErrands();
