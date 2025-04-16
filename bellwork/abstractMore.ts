abstract class Vehicle {
    constructor(public brand: string) {}

    abstract startEngine(): void;

    displayBrand(): void {
        console.log(`${this.brand} is the cars brand.`)
    }
}

class Car extends Vehicle {
    startEngine(): void {
        console.log(`Engine started for ${this.brand}`)
    }
}

class Motorcycle extends Vehicle {
    startEngine(): void {
        console.log(`The mortorcycle engine started for ${this.brand}`)
    }
}

const test = new Car("Corvette")
test.displayBrand()
test.startEngine()

const bonus = new Motorcycle("Honda")
bonus.startEngine()