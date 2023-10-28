const array = [1, 2, 3, 4, 5];
console.log("Joined String:", array.toString())
// Push()
array.push(6);
console.log("After Push: ", array); // [1, 2, 3, 4, 5, 6]

// Pop()
array.pop();
console.log("After pop: ", array); //  [1, 2, 3, 4, 5]

// Shift()
array.shift();
console.log("After shift: ", array); // [2, 3, 4, 5]

// Unshift()
array.unshift(0);
console.log("After unshift: " + array); // [0, 2, 3, 4, 5]

// Slice()
const slicedArray = array.slice(1, 3);
console.log("Sliced Array: ", slicedArray); // [2, 3]

// Splice()
array.splice(2, 1, 7, 8);
console.log("After splice: ", array); // [0, 2, 7, 8, 5]

// IndexOf()
const indexOf5 = array.indexOf(5);
console.log("Index of 5: " + indexOf5); // 4
//contains

const contain = array.includes(3);
console.log("3 exits in array: ", contain)
// Reversa()
array.reverse();
console.log("After reverse:", array); // [5, 8, 7, 2, 0]

// Sort()
array.sort();
console.log("After sort:", array); // [0, 2, 5, 7, 8]

const upperaseString = "javascript is amazing".toUpperCase();
console.log("Uppercase: ", upperaseString); // javascript is amazing
// ToLowerCase()
const lowercaseString = "JAVASCRIPT IS AMAZING".toLowerCase();
console.log("Lowercase: ", lowercaseString); // javascript is amazing

// Length()
const length = lowercaseString.length;
console.log("Length: ", length); // 5

//indexOf()

const index = lowercaseString.indexOf("is");
console.log("index of is: ", index)
// Substring()
const substring = lowercaseString.substring(4, 10);
console.log("Substring: ", substring); // is amazing

// Replace()
const replacedString = lowercaseString.replace("javascript", "python");
console.log("replaced string: ", replacedString); // python is amazing

// Split()
const splitArray = lowercaseString.split(" ");
console.log("split array: ", splitArray); // ["python", "is", "amazing"]
