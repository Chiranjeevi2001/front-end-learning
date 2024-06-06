// Functions!!

function myFunction(){
    console.log('Hello World! This is my first function');
}

myFunction(); //invoking the function
console.log(typeof myFunction);

// immediately invoked function - Notice that we don't have to invoke the function explicitly again;

(function anotherFunction(){
    console.log("This is another function");
})();

// parameters and arguments (2 sides of the same coin)

function f1(param1, param2){ // function has 2 parameters
    console.log(param1+"  "+ param2);
}

f1('Hey', 2); // passing arguments

// Scopes - where are the variables available? - same as Python or any other language


// assigning functions to variables:

const f2 = function(){
    console.log('something');
}

console.log(typeof f2);

f2();

// OORR try this: invoked function

const f3 = (function(){
    console.log('I am invoked implicity');
})();

// arrow function - helps with this keyword (Scopes) and readability
/*syntax:
    const var = () => {
        statements;
    }
*/

const arrowFunction = () => {
    console.log("I am an arrow function");
}

arrowFunction();

// return values

const myFunction1 = (a, b) =>{
    console.log('This returns sum');
    return a + b;
}

console.log(myFunction1(10, 30));

// objects and function

function fun3(){
    return 20;
}

const aliasVar = fun3;

console.log(aliasVar());

// assigning to objects

const myObj1 = {
    prop1: 50,
    prop2: fun3,
    prop3: aliasVar
}

console.log(myObj1['prop1']);
console.log(myObj1['prop2']());
console.log(myObj1['prop3']());
