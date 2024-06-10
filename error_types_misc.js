// Error handling in JavaScript!

/* 3 major types:
    1. ReferenceError
    2. SyntaxError
    3. TypeError
*/

// 1. Reference Error - represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

const var1 = 10;
console.log(var1); // no error
// console.log(var2); // error

// 2. Syntax error - you know it

// 3. TypeError - represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

const num1 = 20;

// console.log(num1.toUpperCase()); // number type doesn't have toUpperCase() method

// Handling errors - try catch block

try{
    console.log(num1.toUpperCase());
}
catch(error){
    console.log(error instanceof TypeError); // true
    console.log(error.message);
}

/* 3 more datatypes:
    1. NaN
    2. null
    3. undefined
*/

// 1. NaN :a value representing Not-A-Number.

const myStr = 'hello there';

console.log(Number(myStr)); // returns NaN

// 2. null - absence of value / placeholder

let num = null; // evaluates to falsy value

if(num)
{
    console.log("This will not be reached");
}
else{
    console.log("This will be reached");
}

//3. undefined (garbage value), evaluates to falsy values

let var2;

console.log(var2);

