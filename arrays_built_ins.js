// Built in methods in Arrays!

/*
    1. push()/ pop()/ shift()/ unshift()
    2. slice()
    3. splice()
    4. findIndex()/ indexOf()
    5. map()
    6. forEach()
    7. includes()
    8. filter()
    9. reduce()
*/

// push, pop, shift and unshift

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.pop()); // removes last element and changes the size of the array

console.log(arr.shift()); // removes first element and changes the size of the array
arr.push(7); // adds element at the end of the array
console.log(arr);

arr.unshift(8); // adds an element to the beginning of the array
console.log(arr);


// slice() - useful in making a shallow copy of an array (useState in React)
console.log("---------slice()----------");


const animals = ["lion", "tiger", "camel", "cat", ["dog", "mouse"], "ferret", "elephant"];

console.log(animals.slice(1, 5)); // returns elements of the array from index 1 (inclusive) to 5 (exclusive)

console.log(animals.slice(3)); // from index 3 to the entire array

console.log(animals.slice()); // copies the entire array


// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
/* syntax:
    arr.splice(startIndex[, deleteCount, item1, item2, ..., itemN]);
    if deleteCount is 0 or negative, you can insert element at startIndex
*/
console.log("---------splice()----------");

const nums = [13, 45, 67, 'NaN', 76, 12, 10];

nums.splice(3, 1, 45); // start at index 3, remove 1 element at index 3 and replace it by 45

console.log(nums);

nums.splice(2, 0, 67); // inserts 67 at index 0, deleting 0 elements

console.log(nums);

nums.splice(1, 2, 78); // deletes 2 elements from index 1, and inserts 28 at that position

console.log(nums);


// findIndex() - returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

/* Syntax:
    findIndex(callbackFn)
    findIndex(callbackFn, thisArg)
*/


console.log("---------findIndex()----------");

const nums2 = [
    {
        firstName: "Bob",
        lastName: "Vance"
    },
    {
        firstName:"Michael",
        lastName:"Scott"
    },
    {
        firstName:"Dwight",
        lastName:"Schrute"
    } 
];

console.log(nums2.findIndex((arrItem)=>{
    return arrItem.lastName == "Schrute";
})); // returns first index of person with last name = "Schrute", which is 2

// map() - creates a new array populated with the results of calling a provided function on every element in the calling array. 

/* Syntax:
    map(callbackFn)
    map(callbackFn, thisArg)
*/
console.log("---------map()----------");


const blogPosts = [
    {
        title:'How to use the map() function',
        category:'uncategorized'
    },
    {
        title:'Gen AI',
        category:'uncategorized'
    },
    {
        title:'Why code?',
        category:'uncategorized'
    },
    {
        title:'Are you really doing your best?',
        category:'uncategorized'
    }
];

//lets change the category to Computer Science

blogPosts.map(arrItem => {
    arrItem.category = 'Computer Science';
    return arrItem;
});

console.log(blogPosts);

// forEach() -  executes a provided function once for each array element. Another way to traverse through the array

/* Syntax:
    forEach(callbackFn)
    forEach(callbackFn, thisArg)
*/

const nums3 = [1, 45, 46, 78, 90, 32];

nums3.forEach(arrItem => {
    console.log(arrItem);
})

nums3.forEach((arrItem, index) => {
    console.log(arrItem+":"+index);
}); // passing both array item and index


// includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
/* Syntax:
    includes(searchElement)
    includes(searchElement, fromIndex)
*/


console.log("---------includes()---------");

const color = ['orange', 'blue', 'red', 'white', 'black'];

console.log(color.includes('orange')); // returns true

console.log(color.includes('cyan')); // returns false

// filter() - creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

/* Syntax

    filter(callbackFn)
    filter(callbackFn, thisArg)
*/

const allOrders = [
    {
        productName:'Tea pot',
        isDigital: false,
        isCancelled: false,
        isOpen: false
    },
    {
        productName:'Tranformers Optimus Prime',
        isDigital: false,
        isCancelled: false,
        isOpen: true
    },
    {
        productName:'Harry Potter book',
        isDigital: true,
        isCancelled: true,
        isOpen: false
    },
    {
        productName:'Atomic Habits Kindle',
        isDigital: true,
        isCancelled: true,
        isOpen: true
    },
    {
        productName:'Mens Hoodie',
        isDigital: false,
        isCancelled: true,
        isOpen: false
    }
];

// find all digital products

const digitalOrders = allOrders.filter(arrItem => {
    return arrItem.isDigital;
});

console.log(digitalOrders);

/* reduce() - executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. Otherwise the array element at index 0 
is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
*/
console.log("---------reduce()----------");

/* Syntax:
    reduce(callbackFn)
    reduce(callbackFn, initialValue) // default value of initialValue = array[0]

*/

const nums4 = [11, 15, 16, 89, 90, 91, 129];

// lets calculate the sum of this array

function reducerCallback(sum, arrItem) {
    return sum += arrItem;
}

const initValue = 0;

console.log(nums4.reduce(reducerCallback, initValue));

// lets calculate average now!

console.log(nums4.reduce((sum, arrItem) => sum += arrItem, 0)/nums4.length);
