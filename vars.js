// Javascript is a dynamically typed language (datatypes are determined during runtime)
/* datatypes (or what could be allowed on the right side of '=')
1. String
2. Number
3. Objects (JSON format)
4. Another variable!
5. function
6. Boolean
7. Arrays
*/

const var1 = 'hello world'; //string
const var2 = 100; //number
const var3 = {property1:'hello world'} //object

let var4; //declare a var

var4 = 50;

var var5 = 'this is another way'; // legacy, recommended not to use since vars can be redeclared
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

let var6 = 0;
var6++;
console.log(var6) // can change the value of 'let' vars

const var7 = 0;
let boolVal = false;
//var7++; // cannot do this
console.log(var7); // cannot change/modify the value of a 'const' variable

console.log(typeof var1,
typeof var2,
typeof var3,
typeof var4,
typeof var5,
typeof var6,
typeof var7);


// lets have some fun :}

const var8 = var1 + var2; // although var2 is a number, it will be coherced into a string, concatenated with var1 and stored in var8
console.log(var8, typeof var8); // var8 will be a string

//explicitly coherce the vars??

const num1 = '10';
const num2 = 20;
console.log(num1 + num2); //implicit cohersion

console.log(Number(num1) + num2);  //explicit cohersion, kinda like type casting


// working on arrays:

const arr1 = [10, 20, 30, 40];
const arr2 = [10, 'hello', {prop: 'hello'}, [2,1]]; // mixed dataypes allowed, just like python!

console.log("Arr1:" + arr1);
console.log("Arr2:" + arr2);
//indexing arrays
console.log(arr2[3][1]); //2-d array indexing!

// Objects - 'Everything is an object in JavScript'
// Each object has a set of properties
const objectVar = { prop1: 10, prop2:'Hello', prop3: {prop31:50}};
//accessing properties
console.log(objectVar.prop3.prop31); //nested object

console.log(objectVar['prop2']); //another way

