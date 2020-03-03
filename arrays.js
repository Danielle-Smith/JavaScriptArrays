//   Removing 1st and last in an array

const removeFirstAndLast = arr => {
    if (arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw "You need at least three elements in the array";
    }
};
console.log(removeFirstAndLast([1, 2, 3, 4, 5]));



//ways to make arrays
var generatedArray = new Array(3);
var generatedArray = new Array('Altuve', 'Correa', 'Spring');
var literalArray = [1, 2, 3];

// you can store anything in a array: including functions, and objects.
// calling the items in array

// calling an object
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there');}]
mixedArray[3]; //calling the whole object


mixedArray[3].name; // calling the name in the object
// calling a function
mixedArray[4]; // returning the function
mixedArray[4](); // calling thr function itself




// Adding and removing array elements
// array.length is not a function it is a property

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']





// Splice function

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]      takes 2 arguments (starting index, how many elements)

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]   2 arguments: 1, index ; 2, number of items to be removed

arr; // ["Altuve"]

//   spread operator

// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems); // would normally add the array into the other array. the ... separates the items in the array.
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart]; // this prevents the updatedCart and shoppingCart from being linked and you can make changes to updatedCart without changing the original cart
updatedCart.push(5);
console.log(updatedCart);
console.log(shoppingCart);

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals)); // This separates the array into integers

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3

const { starter, closer, ...relievers } = { // You can use ... when you don't know how many relievers you have.
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);
