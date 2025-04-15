// var f_name: string = "Diego"
// var alive: boolean = false
// var age: number = 17

// let greeting = "Welcome to Jurassic Park"

// // function add(n1: number, n2: number) {
// //     return n1 + n2
// // }

// console.log(add(12000, 32000))

// // function printResult(num: number): number {
// //     console.log('Result: ' + num);
// //     return num
// // }

// const addArrow = (n1:number, n2:number):number => n1 + n2
	
// const printResult = (num: number):void => {
//     console.log('Result: ' + num);
// }

// let person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// }

// let product: {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//         title: string;
//         description: string;
//     }
// }

// enum Role {
//     ADMIN = 'ADMIN',
//     READ_ONLY = 0,
//     AUTHOR = 100,
// }

// let answer : string | number | boolean
// answer = true

// type Combinable = number | string;

// type User = { name: string; age: number };

// function greet(user: User) {
//     console.log("Hi, I am " + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//     return checkAge > user.age;
// }

// let add: (a: number, b: number) => number;

// class Employee {
//     readonly empCode: number; 
//     empName: string; 
//     constructor(empCode: number, empName: string) {
//         this.empCode = empCode
//         this.empName = empName
//     }
// }

// let emp = new Employee(10, "John")
// // emp.empCode = 20 // Compiler Error
// emp.empName = "Bill"

// class Circle {
//     static pi: number = 3.14;
//     static findArea = (rad:number) => Circle.pi * rad ** 2
// }

// console.log(Circle.pi) // 3.14
// console.log(Circle.findArea(10)) // 314

// abstract class Person {
//     abstract name: string;
// }

// class Employee extends Person {
//     name: string;
//     constructor(name: string) {
//         super();
//     }
// }

// let emp: Person = new Employee("James", 100)