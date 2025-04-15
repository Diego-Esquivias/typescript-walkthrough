class Person {
    constructor(id: number, name: string, ssn: string, email: string) {
        this.id = id
        this._ssn = ssn
        this.email = email
    }
    // readonly property can be accessed but not modified
    public readonly id:number;

    // private property can only be accessed inside this class
    private _ssn: string

    // protected property can be accessed in this class and subclass
    protected email: string
}

let Alan = new Person(12891, "Alan", "264-91-1926", "alan1234@gmail.com")
