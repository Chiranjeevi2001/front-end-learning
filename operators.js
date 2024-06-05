// JavaScript Operators!

/* Four main types
 1. Arithmetic
 2. Logical
 3. Comparative
 4. Assignment
*/


// Artihmetic operators

console.log('------Arithmetic operators-------')
console.log(20 + 70);
console.log(50-30);
console.log(50/6);
console.log(5*6);
console.log(9%6);
console.log(8 ** 2); // just like in Python!

// writing expressions
const res = 90 + 50 / 2;
console.log(res);

// increment/decrement operators
console.log("----Increment/decrement----")
let start = 0;
start++;
start++;
console.log(start++); // prints 2, value is 3

start--;
start--;
console.log(start--); //prints one, becomes 0
console.log(start); //prints 0

// Assignment operators: =, +=, -=, *=, etc.
console.log('----Assigment/Shorthand operators------')
start+=2;
console.log(start);

// Comparision operators: ==, ===. !=, !==, <, >, <=, >=
console.log('------Logical Operators--------');

const res1 = 20 === 20; // both value and type are checked

console.log(res1);

const numberVal = 20;
const stringVal = "20";
console.log(typeof numberVal)
console.log(typeof stringVal);
console.log(numberVal == stringVal); // returns true, checks value by converting string to number
console.log(numberVal === stringVal); // returns false, checks both value and datatype

console.log(numberVal != stringVal); // return false, both are equl according to ==
console.log(numberVal !== stringVal); //returns true, since datatypes are checked in !==


// You cannot use == or === to compare two objects or arrays
const obj1 = {
    property1: 'value1',
    property2:100
};
const arr1 = [1,2,3,4,5];
const arr2 = [1,2,3,4,5];
console.log(arr1 == arr2); // returns false;
console.log(arr1 === arr2); // return false, memory thing

// ternary operator
console.log('---------Ternary operator-------');
const res2 = 20 === 21 ? 'match':'no match';
console.log(res2);

// logical operators : &&, || and !

console.log('--------Logical operators-------');

console.log(20 === 20 && 10 == 10); // true
console.log(12 === 20 || 10 == 10); // true

console.log(!10 == 10); //false


// assigning var to a function
const res4 = (() => {
    return 20;
})();
console.log(res4);

console.log(300 + 5 === 305);

const myObj = {
    prop1:'something',
    prop2: 20
}
const myArray = [40,50,2];

console.log(myObj.prop2 === (myArray[0] / myArray[2]));
