// challenge#1

const myBoolean = true;
const myString = 'hello world';
const firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;

const myArray = [myBoolean, myString];

const myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber+secondNumber
}

console.log(myObject);

console.log(myObject.firstProperty[0]);