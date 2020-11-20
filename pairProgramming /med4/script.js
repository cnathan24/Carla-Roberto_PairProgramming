

class Car {
    constructor (make, model, year, milage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color = color;
    }

    diveToWork() {
        console.log(`old milage: ${this.milage} | new milage: ${this.milage + 33}`);
    }

    driveAroundTheWorld () {
        console.log(`old milage: ${this.milage} | new milage: ${this.milage + 2400}`);
    }


    runErrands () {
        console.log(`old milage: ${this.milage} | new milage: ${this.milage + 30}`);

    }
}

const myCar = new Car ('Kia', 'Stinger', 2020, 30000, 'grey');

myCar.diveToWork();
myCar.driveAroundTheWorld();
myCar.runErrands();