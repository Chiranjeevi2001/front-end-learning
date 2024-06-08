// Javascript built in methods!!
// documentation link - https://developer.mozilla.org/en-US/docs/Web/JavaScript
/* What is covered here:
    1. Primitve values vs Object values
    2. Dates
    3. String methods
    4. Array methods
    5. The math library
    6. Airtypes (??) 
    7. Nan, NULL and undefined values
    8. Callback functions
*/

// Array methods
console.log();
console.log("------------Arrays Built In--------------");

// pop() - returns last element of the array and changes the length of the array
const arr = ['Apple','Banana','Cauliflower','Dragonfruit','Eggplant'];

console.log(arr.pop()); // returns Eggplant
console.log(arr); // updated array

// join() - creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string

console.log(arr.join()); // default separator - ,
console.log(arr.join(" ")); // space
console.log(arr.join('')); // nothing between

// includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate. 

// syn: arr.includes(valueToFind[, fromIndex]); default fromindex = 0. fromIndex can be negative (counts from lastIndex)

console.log(arr.includes("Cauliflower")); // returns true;
console.log(arr.includes("Cauliflower",3)); // returns false, no Cauliflower after index 2;
console.log(arr.includes("Ginger")); // returns false; 

// map() - creates a new array populated with the results of calling a provided function on every element in the calling array. 

console.log(arr.map(name => name+"Hello"));

// Callback functions (cb)
console.log();
console.log("------------Callback functions--------------");

function myCallBack(someNumber){
    return someNumber*2;
}

function mainFunction(randomNumber, shouldCall, callback){ // callback is another function, you can pass another function as a parameter
    let result = randomNumber;

    if(shouldCall)
    {
        result = callback(randomNumber);
    }
    return result;
}

console.log(mainFunction(20, true, myCallBack)); // returns 40;
console.log(mainFunction(20, false, myCallBack)); // returns 20;

console.log(mainFunction(20, true, function(num) {
    return Math.floor(num/2);
})); // returns 10;

console.log(mainFunction(20, true, (num) => {
    return num*2;
})); // returns 40;

console.log(mainFunction(20, true, num => num * 2)); // returns 40; // probably the easiest way


// Primitives vs Objects in JavaScript
console.log("------------Primitives vs Objects in JavaScript--------------");

const string1 = new String('Hello, world!'); // this is an object of the class String
const string2 = 'Hello, world!'; // this is an instance of the string primitive

console.log(string1 == string2); // returns true, since values are equal
console.log(string1 === string2); // returns false, since type is different

console.log(typeof(string1)); // object
console.log(typeof(string2)); // string

// Primitive -> 7 primitive datatypes: String, number, bigint, boolean, undefined, symbol, null

console.log(string2.toUpperCase()); // behind the scenes, the primitive string is wrapped as a String() object before calling the string built in method


// Date 
console.log();
console.log("----------Date-----------");
const now = new Date(); 
console.log(now); // UTC time
console.log(now.valueOf()); // prints the number of milliseconds elapsed since midnight on January 1st, 1970, UTC.

// Ex.1 : Inputs as arguments
console.log(new Date(2020, 11, 2, 7, 10)); // year, month, day, hour, minute [,second, millisecond] (MONTH IS ZERO INDEXED, so 11 is December)

// Ex.2 : Inputs as various strings
console.log(new Date('Jan 1 2024'));
console.log(new Date('January 1 2024'));
console.log(new Date('Jan-1-2024'));
console.log(new Date('Jan 1 2024 02:03:34'));

// Ex. 3: Inputs as ISO 8601 format
/* ISO 8601 Date Format:
    YYYY-MM-DDTHH:MM:SS.SSSZ
*/
console.log(new Date('2020-10-15T00:00Z')); 

// built-in on dates

console.log();

const myDate = new Date();

console.log(myDate.toString()); // converts into local timezone

console.log("Current date:"+myDate.getDate()); // gets the current date

console.log("Current month:"+myDate.getMonth()); // returns the month number (zero indexed)

console.log("Current year:"+myDate.getFullYear()); // you guessed it