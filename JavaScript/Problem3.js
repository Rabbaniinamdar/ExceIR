// Function Declaration:
function greet(name) {
    console.log(`Hello, ${name}(Function Declaration)`);
}
greet("Alice");

// Function Expression
const greet1 = function (name) {
    console.log(`Hello, ${name} (Function Expression)`);
};
greet1("Bob")

// Arrow Function (ES6)
const greet2 = (name) => console.log(`Hello, ${name} (Arrow Function)`);
greet2("Charli");

//Function Constructor
const greet3 = new Function('name', 'return `Hello, ${name} (Function Constructor)`');
console.log(greet3("Dave"));

// Immediately Invoked Function Expression (IIFE)
(function (name) {
    console.log(`Hello, ${name}! (Immediately Invoked Function Expression)`);
})("Eve");

// Generate Function 
function* generateFunctions() {
    yield function (name) {
        console.log(`Hello, ${name} (Generate Function )`);
    };
}
const functionGenerator = generateFunctions();
const func1 = functionGenerator.next().value;
func1("world");

// Returned function
function outerFunction() {
    return function innerFunction(name) {
        console.log(`Hello, ${name} (Returned function)`);
    };
}
const inner = outerFunction();
inner("freak");

//Object function
const myObject = {
    function1: function (name) {
        console.log(`Hello, ${name} (Object function)`);
    },
};

myObject.function1("Grace");
