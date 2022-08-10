// 1.1 Methods ES6

let greeting = "Hello team, nice to meet you!";
greeting.includes("team"); // returns true, but
greeting.includes("squad"); // returns false because the string doesn't contain "squad"

greeting.startsWith("Hello"); // returns true because the string begins with "Hello", otherwise it is false
greeting.startsWith("meet"); // returns false 

greeting.endsWith("you!"); // returns true because the string ends with "you!", otherwise it returns false
greeting.endsWith("nice"); // returns false

Array.from("Sarah"); // this method returns an array object, in this case it returns "S", "a", "r", "a" ,"h"

const numbers = [5, 7, 9, 10];
let first = numbers.find(myFunction); // find() method returns the value of the first array element that passes a test function
function myFunction(value, index, array) {
  return value > 5;
}
console.log(first); // it returns 7 because 7 is the first element which passes the function

const anotherNumbers = [4, 9, 16, 25, 29];
let anotherFirst = anotherNumbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 5;
}
console.log(anotherFirst); // it returns 1 because 9 is the first element which passes the function, and its index is 1.

// The difference between var, let and const
// var: The scope of a var variable is functional scope.It can be updated and re-declared into the scope. It can be declared without initialization.
// let: The scope of a let variable is block scope. It can be updated but cannot be re-declared into the scope. It can be declared without initialization.
// const: The scope of a const variable is block scope. It cannot be updated or re-declared into the scope. It cannot be declared without initialization.

// let x = "Morsali Sarah";
// let x = 20;

// SyntaxError: 'x' has already been declared

// var x = "Morsali Sarah";

// var x = 0;

// No SyntaxError

{
  let age = 2;
}
{
  const name = "Sarah Ana Maria"
}
// variables declared with let or const inside a { } block cannot be accessed from outside the block

{
  var toys = 2;
}
// toys CAN be used here

var kids = 10;
// Here kids is 10

{
  var kids = 2;
  // Here kids is 2
}

// Here kids is 2

// Spread operator allows us to quickly copy all or part of an existing array or object into another array or object.

const noteElena = [9, 8, 9]
var noteDavid = [5, 7, noteElena] // returns [5, 7, [9, 8, 9]]
var noteDavid = [5, 7, ...noteElena] // returns [5, 7, 9, 8, 9]


// Object methods: methods are actions that can be performed on objects. Methods are stored in properties as function definitions. 
const eu = { // in this case, eu is an object :)
  firstName: "Sarah", // To create an object with properties, you use the key:value within the curly braces. For example, the following creates a new person object
  lastName: "Morsali",
  age: 21,
  eyeColor: "brown",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName)
  }
}
eu.fullName()

// The most straightforward way to loop through an object's properties is by using the for...in statement. 

const sarahsCar = {
  marca: "Opel Corsa",
  culoare: "alba",
  an_fabricatie: 2011
}
for (const key in sarahsCar) {
  console.log(`${key}: ${sarahsCar[key]}`)
}

const persoana1 = {
  nume: "George",
  varsta: 22
}

const persoana2 = persoana1
console.log(persoana2) // returns to {nume: 'George', varsta: 22}
persoana2.nume = "Adina"
console.log(persoana2) // returns to {nume: 'Adina', varsta: 22} 
console.log(persoana1) // returns to {nume: 'Adina', varsta: 22}
// but 
let x = 3
y = x //  x is copied into y

y++ // y is incremented

console.log(y) // now 4
console.log(x) // still 3

// this happens because objects and arrays are copied through reference to the original object/array. The JSON.stringify() method takes in an object and creates a JSON string from it. The JSON.parse() method parses a string and returns a JavaScript object (the easiest method)

const persoana3 = JSON.parse(JSON.stringify(persoana1))
persoana3.nume = "Melissa" // returns to {nume: 'Melissa', varsta: 22} while persoana1 stays the same

// Array accessor methods
// concat() method is used to join the multiple arrays and as a result, it returns a new array
const noteMate = [9, 10, 10];
const noteRo = [5, 7, 8];
const toateNotele = noteMate.concat(noteRo);
console.log("Totalitatea notelor sunt: ", toateNotele);

// join() method returns a new string by joining all the array elements within one string separated by a comma “,”.

const noteBio = [5, 2, 9];
var notee = noteBio.join(' '); // returns 5 2 9 
var notee = noteBio.join(' - '); // returns 5 - 2 - 9

// indexOf() method to find the occurrence of an element in an array, and it will return -1 if the element is not found in the array.

const vector = [1, 2, 4];
const vector_index = vector.indexOf(2); // returns to 1 because that's the index of 2

// we use includes() method to search any element in an array, as a result, it will return a Boolean value :

const noteAdina = [9, 8, 10];
const are10 = noteAdina.includes(10); // returns true, because, indeed, there is a 10 in the array

// lastIndexOf() method is used for finding the last appearance of an element in an array, and this method will return -1 when it fails to find an element in the array:

const matrice = [100, 85, 43229, 9432, 100];
const matriceRezultata = matrice.lastIndexOf(100); // returns to 4, because the index of the last apparance of 100 is 4, even if there are more of 100 in the array

// JavaScript Array Iteration
// The forEach() method calls a function (a callback function) once for each array element.

var array1 = [10, 13, 4, 7, 20, 50, 109, 21];
array1.forEach(function (v, i, a) { // v stands for value, i stands for index and a stands for arrays
  console.log(v) // returns to 21
  console.log(i) // returns to 7
  console.log(a) // retunrs to(8) [10, 13, 4, 7, 20, 50, 109, 21]
  //             (8) [10, 13, 4, 7, 20, 50, 109, 21]
  //            (8) [10, 13, 4, 7, 20, 50, 109, 21]
  //            (8) [10, 13, 4, 7, 20, 50, 109, 21]
  //            (8) [10, 13, 4, 7, 20, 50, 109, 21]
  //             (8) [10, 13, 4, 7, 20, 50, 109, 21]
  //            (8) [10, 13, 4, 7, 20, 50, 109, 21]
  //            (8) [10, 13, 4, 7, 20, 50, 109, 21]
})

// Mutator methods
// we will use pop() method to remove the last item
let flowers = ["tulips", "roses", "sunflowers"];
flowers.pop(); // returns to sunflowers
console.log(flowers); // returns to ['tulips', 'flowers']

// the shift() method will remove the first element from the beginning of an array
let deserts = ["icecream", "tiramisu", "cake"];
deserts.shift();
console.log(deserts); // returns to ['tiramisu', 'cake']

// The push() mutator method adds a new element or elements to the end of an array.

deserts.push("baklava");
console.log(deserts); // returns to ['tiramisu', 'cake', 'baklava']

// The unshift() mutator array method adds a new element or elements to the beginning of an array.

deserts.unshift("fruits");
console.log(deserts); // returns to ['fruits', 'tiramisu', 'cake', 'baklava']

// The splice() method can add or remove an item from any position in an array. A mutator method, splice() can either add or remove, or add and remove simultaneously.

// splice() takes three parameters — the index number to start at, the number of items to remove, and items to add (optional).

let books = ["Cuore", "Speak", "Vicious", "Matched"]
books.splice(0, 1, "Middlemarch");
console.log(books); // returns to ['Middlemarch', 'Speak', 'Vicious', 'Matched'], 0 is the index number to start at ("Cuore"), 1 is the number of items to remove and "Middlemarch" is the element that I had to add

books.splice(1, 3);
console.log(books); // returns to ['Middlemarch], because 1 is the index number I start at ("Speak") and 3 represents the number of items I removed ("Speak", "Vicious" and "Matched")

// The reverse() method reverses the order of the elements in an array.
let animals = ["monkey", "dog", "cat"];
animals.reverse(); // returns to ["cat", "dog", "monkey"]

// The fill() method replaces all the elements in an array with a static value.

// console.log(animals.fill("lizard")); returns to ['lizard', 'lizard', 'lizard']

// the sort() method sorts the elements in an array based on the first character in the element. In the case that the first character is identical, it will continue down the line and compare the second character, and so on.

// by default, sort() will alphabetize an array of strings that are all either uppercase or lowercase.

animals.sort(); //returns to ['cat', 'dog', 'monkey']

/* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
})

p.then((message) => {
  console.log('This is in the then ' + message)
}).catch((message) => {
  console.log('This is in the catch ' + message)
})

// JavaScript Callbacks are functions that get passed as a parameter to another function.


const myFunction2 = () => {
  console.log("Hello!")
}
setTimeout(myFunction2, 1000)

// async makes a function return a Promise
// await makes a function wait for a Promise

async function myFunction3() {
  return "Hello";
}
//is the same as:
function myFunction3() {
  return Promise.resolve("Hello");
}

myFunction3().then(
  function (value) { /* code if successful */ },
  function (error) { /* code if some error */ }
);

// the keyword await before a function makes the function wait for a promise:
// let value = await promise;
async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });
  await myPromise;
}

myDisplay()

// a closure gives you access to an outer function's scope from an inner function. 
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
