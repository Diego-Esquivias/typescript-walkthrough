"use strict";
var f_name = "Diego";
var alive = false;
var age = 17;
let greeting = "Welcome to Jurassic Park";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(12000, 32000));
// function printResult(num: number): number {
//     console.log('Result: ' + num);
//     return num
// }
const addArrow = (n1, n2) => n1 + n2;
const printResult = (num) => {
    console.log('Result: ' + num);
};
let person;
let product;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
})(Role || (Role = {}));
let answer;
answer = true;
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
