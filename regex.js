// Regular Expressions!!

// Why - pattern matching

/* symbols used in Regex and what they mean
    1. ^ : start at beginning of the line
    2. . : match any character one time 
    3. + : match any character one or more times of the previous character
    4. \ : escape character
    5. $ : end of line.
    6. / / : wrap regex within this
    7.[A-Z] : matches all uppercase letters
    8. [a-z] : matches all lowercase letters
    9. [A-Za-z0-9]: matches all letters and numbers
    10. \d : matches numbers , same as [0-9]
    11. \s : matches whitespace characters
    12. \w : matches all letters and numbers
    13. (a | b): matches either 'a' or 'b'
    14. * : match zero or more times of the previous character
    15: ? : matches zero or one time of the previous character
    
*/

// Email validation regex

const emailValidatorRegex = new RegExp('^.+@.+\..+$');

const userInput1 = 'abc@gmail.com';
const userInput2 = 'gibberish$%niah@jjalk';

const isValid = emailValidatorRegex.test(userInput1);
if(isValid)
{
    console.log("Valid email!");
}
else{
    console.log("Invalid email!");
}

const regex1 = new RegExp('favourite');

const str1 = 'my favourite food is biryani';
const str2 = 'biryani is the best thing in the world';
const str3 = 'my faVourite food is biryani';

console.log(regex1.test(str1)); // returns true, since 'favourite' is part of the string
console.log(regex1.test(str2)); // returns false, since 'favourite' is not part of the string

console.log(regex1.test(str3)); // returns false, since 'faVourite' has uppercase V

console.log(/[a-z]/.exec(str1)); // returns the first instance of the expression that it matched

/* output :
[
  'm',
  index: 0,
  input: 'my favourite food is biryani',
  groups: undefined
]
*/

console.log(/[a-z]*/.test(str1)); // matches lowercase letters, zero or more times
console.log(/[a-z]+/.test(str1)); // matches lowercase letters, one or more times
console.log(/[a-z]?/.test(str1)); // matches lowercase letters, zero or one times

console.log(/[a-z ]+/.exec(str1)); // matches entire string of lowercase letters. Notice the space after the 'z';
console.log(/[a-z ]{5}/.exec(str1)); // matches the first 5 characters of lowercase letters. Quantity specified in {}


// flags - g(global search), i(case insenstive search), m(multiline search)

const regex2 = /[a-z]+/g; // global search

// Example

const str = 'Hello world, 2024 @ more of a string';

const regex3 = /^[A-Z][a-z ]*,\s[0-9 ]+@[a-z ]+$/;

console.log("Result:"+regex3.test(str));

console.log();
console.log("Test");
const r1 = /[a-z ]{7}/g;

const str4 = "abend klein stadt Muchen";

console.log(r1.exec(str4));