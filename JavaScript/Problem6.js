// Variable declaration with let and const
let x = 5;
const pi = 3.141;

// Arrow functions
const add = (a, b) => a + b;
const square = x => x * x;

// Template literals
const name = "Alice";
const message = `Hello, ${name}! This is a multiline message.`;

// Destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;
const employee = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = employee;

// Spread and Rest Operators
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

// Default Parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

// Object Shorthand Notation
const a = 10;
const b = 20;
const point = { a, b };

// Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
}

// Symbol
const uniqueKey = Symbol("myKey");
const obj = { [uniqueKey]: "myValue" };

// String methods
const sentence = "The quick brown fox";
const includesBrown = sentence.includes("brown");
const startsWithThe = sentence.startsWith("The");
const endsWithFox = sentence.endsWith("fox");

// Array methods
const arrayFromHello = Array.from("hello");
const fruits = ["apple", "banana", "cherry"];
const keys = Array.from(fruits.keys());
const even = numbers.find(num => num % 2 === 0);
const evenIndex = numbers.findIndex(num => num % 2 === 0);

// Math and Number methods/properties
const squared = Math.pow(3, 2);
const epsilon = Number.EPSILON;
const isInteger = Number.isInteger(5);

// New Global Method (Object.assign)
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
console.log(obj2)
// Object.entries
const person = { name: "Alice", age: 30 };
const entries = Object.entries(person);
console.log(entries)

// JavaScript Modules
import { add } from './math.js';

