interface CharacterStats { 
    strength: number; 
    agility: number; 
    intelligence: number; 
}

abstract class GameCharacter implements CharacterStats{
    public strength: number; 
    public agility: number; 
    public intelligence: number;
    public name: string
    protected level: number
    private _health: number
    readonly id: number
    static maxLevel: number = 100
    
    constructor(strength: number, agility: number, intelligence: number, name: string, level: number, _health: number, id: number) {
        this.strength = strength
        this.agility = agility
        this.intelligence = intelligence
        this.name = name
        this.level = level
        this._health = _health
        this.id = id
    }

    get health(): number {
        return this._health
    }

    set health(value: number) {
        if(((value >= 0) && (value <= 100)) == false) {
            throw new Error("Health cannot be less than 0 or greater than 100")
        }
        this._health = value
    }

    abstract getStats(): string;
    abstract attack(): string;

    levelUp(): void {
        if(this.level >= GameCharacter.maxLevel) {
            throw new Error("You cannot level up past 100")
        }
        this.level += 1
    }
}

class Warrior extends GameCharacter {
    constructor(name: string, id: number) {
        super(80, 40, 20, name, 1, 100, id)
    }

    attack(): string {
        return this.name + " swings sword"
    }

    getStats(): string {
        return "Strength: " + this.strength + " | Agility: " + this.agility + " | Intelligence: " + this.intelligence + " | Health: " + this.health
    }
}

// Bonus Class
class Wizard extends GameCharacter {
    constructor(name: string, id: number) {
        super(40, 65, 90, name, 25, 75, id)
    }

    attack(): string {
        return this.name + " casts a lightning spell"
    }

    getStats(): string {
        return "Strength: " + this.strength + " | Agility: " + this.agility + " | Intelligence: " + this.intelligence + " | Health: " + this.health
    }
}

const person = new Warrior("Bob", 12)

// Testing
console.log(person.attack())
console.log(person.getStats())
person.health = 75
console.log("New Health: " + person.health)
console.log("Max Level: " + GameCharacter.maxLevel)
// Errors
// person.level = 12
// person._health = 95

console.log("-----------------------------------------")

// Bonus Testing
const person2 = new Wizard("Sam", 20)
console.log(person2.attack())
console.log(person2.getStats())