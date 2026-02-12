let firstname = "tinubu";
let lastname = "ahmed";
console.log(firstname);
console.log(firstname + "" + lastname);

// = in javascrpt is called assignment operator
// let firstname = "identifier"
// let create variable whose value can be chsnged(reassigned) later
let score = 20;
score = 30;
console.log(score);
score = 50;
console.log(score);

// const create variables whose value is 'constant' and cannot be reassigned
const school = 'gomycode';
console.log(school);


//! CONST
const pi = 3.14;
console.log(pi);
pen = 3.14159;
console.log(pen);

//** Initialization */
//! let can be declared without an initial value it defaults to undefined.
// const: Must be initialized with a value immediately when declared.

let playerName;
playerName = "mario";
let playerNames = "Ayo"
let names = playerName + ' ' + playerNames;
console.log(names);


//! one of the misconception of const is that developers thinks it makes a value immutable whereas what it does is that, it only prevents reassignment of the variable identifier.

// const user = { name: "imaann" };
// // const user = {name: "tohaa"};
// user.name = "pawaa";
// const nam = user + ' ' + user.name;
// console.log(nam);


//* IN Javascript, you can't really build logic until you understand the difference between a simple number, a piece of text, and a list of items.

//! Primitive data types: these are the basic building blocks, you need to know how they behave because they're 'immutable' (cannot be changed directly, only replaced).

/*
strings: Text data
numbers: integers and decimals
boolean: True or false
undefined vs. null
*/

//strings
// in programming, a 'string' is just a fancy word for text. it is a sequenceco of characters(letters, numbers, symbols) strung together.

//! how to create a string
//! there are 3ways to define strings in javascript

//? single & double quotes(the basic) these work almost the same, you just need to match the starting and ending quote.

const firstnamess = 'Ibrahim'; // single quote(common preferences)
const lastnamess = "Omikunle" // double quotes

//? Backticks(````): the superpower. it was introduced in modern javascript(ES6), backtick(`) are special, they allowyou to do two powerful things.


/*

 -Multi-line strings: you can press enter without bresking the code.
- String Interpolation: you can inject variable directly into the text using ${}.

*/

//* concatenation is joining one or more strings together.

//Old way(messy)
// const name = 'princess';
// const age = 25;
// const OldGreetings = "Hello my name is " + name + " and i'm " + age + " years old. ";
// console.log(OldGreetings);

//! The Modern way
const newGreetings = `hi, my name is ${name} and i'm ${25} years old.`
console.log(newGreetings);

//! The Golden rule: Immutability
//this is the most important concept to grasp early. strings cannot be changed.
// once a string is created, you cannot change a single character inside it, you can only create a new string or overwrite the entire variable.

// let text = "Hello";
// console.log(text[0]);
// text[4] = "J"; // It won't work.
// text = "Jello";
// console.log(text);

//* getting info from strings
// Even though strings are just text, javascript treats them like a list of characters.
// length find out how many characters are in the string(included spaces).

// const password = "12345";
// console.log(password.length);                        
// Accessing characters you can grab a specific letter using square letter using square brackets []. computers start counting at 0.
const word = "pizza";
console.log(word[0]);
console.log(word[1]);


// Top 5 Essential string methods
// javascript give you built-in "tools" (methods) to manipulate strings. since strings are immutable, these methods always return a new strings.
//! toUpperCase()
let text1 = "Hello world";
// console.log(text1.toUpperCase())

let text2 = "Javascript";
// console.log(text2.toUpperCase());

//! .include()
let text = "Javascript is awesome";
// console.log(text.includes("script"));
// console.log(text.includes("Java"));
// console.log(text.includes("python"));

// //! case sensitive
// console.log(text.includes("javascript");

//! with position parameter
// console.log(text.includes("is", 11));

//!.replace()
let replacer = "i love apples";
// console.log(replacer.replace("i love apples", "we love oranges"));

//! string .slice() Method.

//! .Slice(startIndex .andIndex) -Extracts part an then returns it as a new string. Does Not modify the original string. MOTE: the last index is not always included.

let me = "My name is chelsea ";
console.log(me.slice(13));
console.log(me.slice(-9, -3));
// console.log(me.slice(4, 12));

//! Extracting extension file extension from filename.
let filename = "document.pdf";
let extension = filename.slice(filename.lastIndexOf("."));
//console.log(extension);

const str = "To be, ot not to be, that is the question. ";

//Find the last occurrence of "be" in the entire string

// console.log(str.length);
// const result1 = str.lastIndexOf("be");
// console.log(result1); // Output: 19;

//! extracting filename without extension
let reportfile = "quarterly_report.docx";
let nameOnly = reportfile.slice(reportfile.lastIndexOf("."));
//console.log(nameOnly);

//! Extracting zip code from address
let address = "123 Main St, San Franscisco, CA 94107, USA";
let zipcode = address.slice(address.lastIndexOf("CA") + 3, address.lastIndexOf(","));
//console.log(zipcode);

// let coffee = `caffeine`
// console.log(coffee.length);

// let call = 'we are the so called "viking" from the north';
// console.log(call);

let call = 'we are the so called "vikings" from the north';
console.log(call);

let bail = "he was let out on \"Bail\"";
console.log(bail);

let out = 'he was let out on \'Bail\'';
console.log(bail);

//! Templates are strings enclosed in backticks (`This is a template string`). Templates allow multiline strings:

let Ex = `cream
         soap
         hair
         clothes`;
console.log(Ex);


//!ARRAY
//* JaVaScript arrays
//* what is an Array?

//! An arrays is an ordered collection of item (elements). Each element has a numerical position called an index(starting from 0).
// array ar zero based
let fruits = ["apples", "banana", "orange"];
//console.log(fruits);


//! Accessing Elements
let friend = ["somadienna", "tohaa", "Emmaen", "tinubu"];
// console.log(friend[0]);
console.log(friend[2]);
console.log([friend.length - 1]); //! the get a particular element from an array.

//let apc = friend[friend.length - 1];              
// friend[apc] = "buhari";
//! PUSH() METHOD IS USED TO ADD ELEMENT FROM THE END ARRAY
friend.push("puwaa");
//console.log(friend);

//! pop() - Removes from the end
let last = friend.pop();
console.log(friend);
console.log(last);

//! unshift() - adds to the beginning
friend.unshift("bayo")
//console.log(friend);

//! shift() - remove from the beginning of the array.
friend.shift("bayo");
// console.log(friend);

//performance (minor but important)
//* [] is slightly faster because it doesn't involve a function call(new Array() invokes the constructor).
// Modern Js Engines optimize literals heavily

let a = [5];
// console.log(a.length)

let b = new Array(5); //if you pass one number, it create an empty array of that number.
// console.log(b);

let countries = ["albania", "Austria", "craotia", "bulgaria", "cyprus", "Denamrk", "Greece", "Norway", "Spain", "luxembourg"];
countries.push("georgia");
//console.log(countries);
countries.pop();
//console.log(countries);


//! finding Elements in Array - 
//! indexOf() - Finds position of element.
//console.log(countries.indexOf("Austria"));
//let say we want to start from a particular index.
//console.log(countries.indexOf("Austria", 3));
// console.log(countries.length);

//! lastindexOf() - Find last position

let Europe_countries = ["albania", "Austria", "craotia", "bulgaria", "cyprus", "Denamrk", "Greece", "Austria", "Norway", "Spain", "luxembourg"];
//countries.push("georgia");
console.log(Europe_countries.lastIndexOf("Austria"));


// include() - checks if element exists
console.log(Europe_countries.includes("Austria"));

//** Javascript objects */
//objects are collectives of key-value pairs (properties and methods that represent real-world entities.

//In the real worlds, "objects" are things like a car, a person, or bank account, i n Javascript, object are used to represent these real - world things in your code. they allow you to group related data and functions together in single container

//! What is an object?
// An object is a collection of properties. a property is an associate between a key (or name) and a value

/*

* key: A string that act like a label (E.G "color", "brand").
* Value: Any data type(String, Number, boolean, Array, or even another Object).

*/


const car = {
    brand: "toyota",
    model: "corolla",
    year: 2022,
    isElectric: false,
    color: ["Red", "Blue"],
};

//! **Object modification or Modifying Objects
// objects are mutable, meaning you can change then even fi they are declared with const.

//! Adding a new Property.
car.price = 25000; //* creates a new key "price"
//* console.log(car);

//! Updating an existing property
car.year = 2023;
// console.log(car);

//! Deleting a property
delete car.isElectric;
// console.log(car);

//console.log(car);
//console.log(car.brand);

//Accessing object properties
// there are two ways to get data out of an object

//* Dot  Notation (.)
// console.log(car.color);
// console.log(car.isElectric);

//* bracket Notation([])
// console.log(car["model"]);

//! *** When to use bracket Notation? you must use bracket notation if the contains spaces characters, or if the key is stored in a variable.

const employee = {
    "first name": "john",
    "last name": "Doe",
    "first name": "john",
    "email-address": "johnDoe@gmail.com",
    "phone#": "123-4566-7890",
}

console.log(employee["first name"]);

//! Object Methods
//A method is simply function that is stored inside an object. It represent an action the object can take.

// Inside a method, we often use the keyword `this`
//* `this` refers to the current object(the specific object the code is inside of)

// const user = {
//     firstName: "Somadienna",
//     lastName: "Yusuf",

//     sayHello: function () {
//         return "Hello my name is " + this.firstName;
//     },

//     //Modern ES6 Shorthand fro writing methods
//     getFullName() {
//         return "Hello my name is" + "" + this.firstName + "" + this.lastName;
//     },


// };

// console.log(user.getFullName());

//! Conditionals loops, and functions

//! Conditionals
// conditionals allows your program to make decisions and execute different code based on conditions.
// Real-life examples: Age verification for movie tickets.
let age = 16;
let ticketPrice;

if (age < 3) {
    ticketPrice = 0
    console.log("Child gets free admission");


} else if (age >= 3 && age <= 12) {
    ticketPrice = 8;
    console.log("Child ticket: $8");
} else if (age >= 13 && age <= 64) {
    ticketPrice = 15;
    console.log("Adult ticket: $15");
} else {
    ticketPrice = 10;
    console.log("Senior ticket: $10");
}

console.log(`Total: $${ticketPrice}`);

//* `switch` statement
// Evaluate on expression and matches its value against `case` clauses. it's useful when you have many possible discrete values for a variable.

/*  switch (expression){
*    case value1:
*        code to run if expression === value1
*        break;
*    case value2:
 *      code to run if expression === value2
}

*/

let day = 2;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}


//! Performance considerations


//* Switch is generally faster when there are many cases (3+)
//* If-Else checks conditions sequentially, while switch can use jump tables
//* For few conditions (1-2), performance difference is negligible
//*
//! Note : Always include `break` to prevent full-through (execution continuing into the next case).

//** Ternary Operator (conditional operator)
// A concise alternatives to `if...else` for assigning values or returning results based on a condition
// it is best suited for 2 conditional statement
let Age = 16;
let access = Age >= 18 ? "Granted" : "Denied";
console.log(access);


//! The & types of loops in Javascript
/*
    *1. for loop - When you know iterations
    *2, while loop - when condition unknown
    *3. do...while loop - Execute at least once
    *4. for...in loop - iterate object properties
    *5. for...of loop - iterate iterables (arrays, strings)
    *6. forEach() - Array method
    *7. map()/filter()/reduce() - Array functional methods
*/

//! morning Alarm snoozing
for (let snoozeCount = 1; snoozeCount <= 5; snoozeCount++) {
    console.log(`snooze #${snoozeCount}: Just 5 more munites...`)
};

let friends = ["sarah", "Mike", "Alex", "Jenny", "Tom"];

for (let i = 0; i < friends.length; i++) {
    console.log(`sending invitation to ${friends[i]}.....`)
}


//calculation your shoping bill

// let prices = [15.99, 23.50, 8.75, 42.00, 12.30];
// let total = 0;
// for (let i = 0; i < prices.length; i++) {
//     total += prices[i];
//     console.log(`Added $${prices[i]}, running: $${total.toFixed(2)}`)
// }

// console.log(`Final bill: $${total.toFixed(2)}`);



//** while loop - "keep going until something changes"

//! Executes as long as the condition remains true
let count = 0;
while (count < 3) {
    console.log(`count is ${count}`);
    count++  //count is 0,1,2,
}



// let battery = 20;
// while (battery < 100) {
//     console.log("Charging..." + battery + "%");
//     battery += 10;

//* OR
// battery = battery + 10;
//}

//* Do-while loop

// the `do...while` loop is very similar to the while loop, with one major difference: it guarantees the code runs atleast once.
//similar to while, but executes at least once before checking the condition.

let balance = 0;
do {
    console.log(`Checking balance....`);
} while (balance > 0);


let num = 0;

do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 0) {
    console.log(`low balance!...`)
};

//For...in loop.
//* the `for....in` loop is designed to iterate over the keys (property names) of an object.

//think of an object like a dictionary.
//the keys are the words(e.g Apple, Banana)
// The Values are definitions(e.g,"A red fruit", "A yellow fruit" ).

const dictionary = {
    apple: "A red or green fruit",
    banana: "A yellow curved fruit",
    cherry: "A small red fruit"
}

console.log(`=== Reading the dictionary`);
for (let iterator in dictionary) {
    console.log(`Word: "${iterator}"`);
    console.log(`DEFINITION: ${dictionary[iterator]}`);
    console.log("---")
}


//* Functions
// Think of functions as recipes, tools or machines that perform specific tasks, you define then once and use them many times.

function greet(name) {
    return `Hello ${name}!`;
}

console.log(greet('Alice'));

console.log(greet("Alhaji Somadienna"))


//* Hoisting

//hoisting only works with function declaration and var
//Javascript moves declarations to the top of their scope before running the code.
// //! Javascript hoist declarations, not values
// console.log(Aage);
// var Aage = 25;


// //! fUNCTION DECLARATION
// sayHello();
// function sayHello() {
//     console.log("hello")
// }

// //! function expression
// sayHello();
// const sayHelloo = function () {
//     console.log("Helloo")
// }

//!Arrow function
// sayHi()
// const sayHi = () => {
//     console.log("Hi");
// }

//** Javascript Function, Continuation. 

// Functions are the fundamental building blocks of javascript. they allow you to bundle logic make your code resuable, and organize complex operation into manageable pieces.

// think of action like a machine in a factory;
// input; you give it row materials(Parameters/Arguments).
// processing: It performs a specific task(the function body).
// output: It spits out a finished product(Return Value).

//The Anatomy of a function
function makeCoffee(type) { // 'type' is a parameter
    return "Here is your " + type;
}

let myCup = makeCoffee("Latte"); // 'Latte' is an argument
console.log(myCup);

/*
   *function: the keyword used to define it
   *makeCoffee: the name of the function(customizable).
   *type(parameter): A placeholder variable for data you will pass in later
   *"Latte"(Argument): The actual data you pass when running the function.
   *return: they keyword that stops the function and sends a value back to where it was called.
*/


//* (WAYS TO DEFINE FUNCTIONS)

//*Function Declaration(The traditional way)
// this is the standard way, A key feature of declarations is hoisting. you can call the function before you define it in the code.

onlineManager('BigSam');

function onlineManager(name) {
    console.log(`Hello, ${name}`);
}


//* Function Expression
// Here, you store function inside of a variable. these are noot hoisted, meaning you must define them before you call them.

const merge = function (a, b) {
    return a + b;
};

console.log(merge(4, 5));


//* Arrow function(modern way)

//Introduced in 2015, this is shorter syntax. it removes the function keyword and introduces the "fat arrow" =>. It is commonly used for short, one-line operations.

//! Tradition
const multiply = function (x, y) {
    return x * y;
};

//* Arrow function

const multiplyArrow = (x, y) => {
    return x + y;
};
console.log(multiplyArrow(2, 3));

// Even shorter(Implicit return);
// if it's one line, you can remove {} and `return`
const quickMultiple = (x, y) => x * y;

console.log(quickMultiple(2, 2));

//! Note: Arrow functions treat the `this` keyword differently than regular functions(lexical scoping). They are often preferred for callbacks.

//* [the `this` keyword difference: regular functions vs Arrow functions]
// regular functions and `this`
// regular functions have own `this` context, determined by how they are called;

// const obj = {
//     name: 'StreamingService',
//     users: ['Alice', 'Bob', 'Charlie'],

//Method using regular function
// getActiveUsers: function () {
//     console.log(this.name);

// this.users.forEach(function (user) {
//** it is all related because Arrow functions convert 
// this.users.forEach((user) => {
//Arrow function inherits `this` from getActiveUsers
// console.log(`${user} is active on ${this.name}`);
// };
//     }, this);
// }
// };



//obj.getActiveUsers

//PEMDAS --Parentheses(), exponential, multiplication, division, addition, subtraction.
//Real-life Exampple: Generating an Email.

function sendWelcomeEmail(user, discount) {
    const emailBody = `Hi ${user},
    
    Welcome to our store
    Because you joined today, here is a $${discount}% off coupon.
    
    Total price $${100 - (100 * (discount / 100))}
    
    Best,
    The Team,
    `

    return emailBody;
};

console.log(sendWelcomeEmail('onlineManager', 20));


function welcomeUsers(user, bonus) {
    const msgBody = `Dear ${user},
      
    Welcome to twinkle
     Go to your dashboard to claim your ${bonus}star token. `

    return msgBody;
};

console.log(welcomeUsers('Twinkler', 5));

//! Destructuring

// Destructuring is fancy word for unpacking. It allows you to pull values out of arrays or properties out of object and save them into distinct variables instantly.

//Object Destructuring.

//! Without 
// const userr = {
//     id: 1,
//     username: "dev_guru",
//     email: "guru@code.com"
// };

// const myUserr = userr.id;
// const username = user.username;
// console.log(myUserr); //! this is repetitive


// const id = user.id;

//! With destructuring
const userrr = { id: 23, username: 'onlineManager', email: 'manager@gmail.com' };

const { username, email } = userrr;
console.log(username);
console.log(email);

//* In-Depth Tip: You can even rename variables while destructing!
const { username: mainName, email: mailing_address } = userrr;
console.log(mainName);
console.log(username);
console.log(mailing_address);

//* Array Destructuring

//The order matters here(unlike objects)
const colors = ["Red", "Green", "Blue", "Yellow", "Vermilion", "Mauve", "Crimson", "Indigo", "Teal"];
const [primary, secondary, y] = colors; // primary, secondary are variable names.

console.log[primary];
console.log[secondary];
console.log[y];

//Spread vs Rest Operators(...)
//These two use the exact same symbols(...), but they doo opposite things depending on where you use them.

//Spread operator(...) -> "Expands"
// Think of this unpacking a box. it takes an array(or object) and spreads its contents out into the open.
// use case: combining arrays or copying objects.
const fruit = ["Apples", "Banana"];
const veggies = ["Carrot", "Spinach"];

const shoppingList = [...fruit, ...veggies, "Milk"];
console.log(shoppingList);


//* Rest operator(...) In Javascript ia a feature that allows you to gather ("collect") multiple distinct elements and condense them into a single array or object.

function roadTrip(driver, navigator, ...passengers) {
    console.log(`Driver: ${driver}`);
    console.log(`passengers: ${passengers}`);
    console.log(`navigator: ${navigator}`)
}

roadTrip("Alice", "Bob", "Charlie", "David", "Eve");

const testUser = {
    id: 3,
    name: "sam",
    email: "sam@gmail.com",
    password: "supersecretpassword",
};


const { password, ...safeUser } = testUser;
//console.log(safeUser);

//* Array Methods: Map, filter, Reduce
//These are the "holy trinity" of functional array manipulation. They do not mutate the original array; they return a new result

//* map()
// Purpose: Transforms every element in an array. Returns:  A new array of the same length.

//! Example: convert prices to a formatted string.

const prices = [10, 20, 30];
const formatted = prices.map(price => `$${price}.00`);
console.log(formatted);

const fruitss = ['mango', "orange", "cherry"];
const addFruits = fruits.map(eachFruitss => `${eachFruitss}.fr`); console.log(addFruits);

//* filter()
// Purpose: Selects elements that meet a specific condition. Returns: A new arrays(can be smaller than the original).
// Example: Get only passing scores.

const scores = [45, 80, 92, 30, 66];
const passing = scores.filter(score => score >= 60);
console.log(passing);

//! .reduce()
//* Purpose: Boils an array down to a single value(number, object, string, etc). returns: a single value(the accumulator.)

const numbers = [10, 20, 30, 40];
const total = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0) //* 0 is the starting value for accumulator

console.log(total);

//* template literals
// templates literals allow you to embed variables directly into strings using backticks (`) instead of quotes. they also support multi line strings without special characters.



//old way(concatenation);
// const name = "Jane";
// const greeting = "Hello" + name + "!";


//E6 Way (Template Literals);
const user = "jane";
const Aage = 28;

// embedding variables
const greeting = `Hello, ${user}. You are ${age} year old.`;

//Multi-line strings(no need for \n)
const htmlSnippet = `
<div>
   <h1>${user}</h1>
   <p>Status: Active</p>
</div>
`;

console.log(greeting);
console.log(htmlSnippet);

//* Optional Chaining (?.)
// This creates safe way to access nested object properties. if a poverty doesn't exists( is null or undefined), it stops and return undefined instead of throwing a big red error like uncaught TypeError.

const userProfile = {
    name: "Sam",
    details: {
        //! address is missing
    }
};

//*❌ Unsafe way (Throws Error if details is missing)
//* console.log(userProfile.details.address.city);

//✅ optional chanting (Returns undefined, no crash)
//console.log(userProfile.details?.address?.city);

//! ASSIGNMENT
//* NULLISH COALESCING (??)

// In simple terms, Nullish coalescing (??) is a logic gate in javascript that provides a fallback value only when the original value is "nullish" (strictly or undefined). Is also a logo a logical operator in javascript that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise- returns the left-hand operand.

let value1 = null ?? "default";
console.log(value1);
let value2 = undefined ?? "default"; //default
let value3 = 0 ?? "default"; // 0
let value4 = "" ?? "default"; // ""
console.log(value4);
let value5 = false ?? "default"; //false

//* Key distinction from OR(||):
// The crucial difference is that ?? only consider null and undefined as 'nullish', while || treats all falsy(0,"",undefined,NaN) as triggering the fallback.

let counts = 0;

console.log(counts || 10); //10
console.log(counts ?? 10);  // 0

let Number;
console.log(Number ?? 10);







//! DOM
//* It is that bridge between your HTML CODE (the structure of the page) and javascript(the logic). without the DOM. javascript wouldn't be able to see "see", understand, or manipulate the HTML elements on a webpage.








