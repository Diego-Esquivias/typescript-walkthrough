// Part 1: Vocabulary & Recall -----------------------------------------------------------------------------

// 1. Enum -----------------------------------------------------------------------------
// Def: Enum is a way to create a group of related variables

enum Mood {
    Sad = "Sad",
    Happy = "Happy",
    Mad = "Mad",
    Annoyed = "Annoyed"
}

// 2. Interfaces -----------------------------------------------------------------------------
// Def: Interfaces are a way to provide a name to a specific type for objects

interface Car { weight: number, name: string, maxSpeed: number }

// 3. function -----------------------------------------------------------------------------
// Def: Functions are reusable and organized code that defines functionality 

function introduction(name: string, areaOfStudy: string) {
    return "Hi, my name is " + name + " and I am currently studying " + areaOfStudy
}

// Part 2: Code Application -----------------------------------------------------------------------------
// 1. Enum -----------------------------------------------------------------------------

enum UserRole{
    Admin = "Admin",
    Editor = "Editor",
    User = "User"
}

var currentRole = UserRole.Editor

console.log(currentRole)

// 2. Interfaces -----------------------------------------------------------------------------

interface Student {
    name: string,
    gradeLevel: number,
    isEnrolled: boolean
}

const prsn: Student = {
    name: "Joey",
    gradeLevel: 11,
    isEnrolled: true
}

console.log(prsn)

// 3. function -----------------------------------------------------------------------------

function calculateTotal(price: number, taxRate: number) {
    return price + (price*taxRate)
}

console.log(calculateTotal(100, 0.08))