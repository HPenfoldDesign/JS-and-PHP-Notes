//CODE EXAMPLES--------------Codes may not run, they are for display purposes.

// LOGGING OUTPUT
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');


// VARIABLES - var, let, const-------------------------------------------------------------------------------------
let age = 30;

// let can be re-assigned, const can not
age = 31;

/*Try and use const as your primary means of naming variables. It make your code more secure and robust. 
Dont use let unless you know the variable is going to change its value*/

// DATA TYPES - String, Number, Boolean, symbol, null, undefined----------------------------------------------------------

const name = 'Brad';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z); // (undefined)


// STRINGS-----------------------------------------------------------------------------------------------------

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');



// ARRAYS - Store multiple values in a variable---------------------------------------------------------------
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

//Remove first value 
fruits.shift('Jack fruit');

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));



// OBJECT LITERALS------------------------------------------------------------------------------------------
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Get single value
console.log(person.name)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = 'jdoe@gmail.com';

// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));


// LOOPS--------------------------------------------------------------------------------------------------

// For
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for(let todo of todos) {
  console.log(todo.text);
}


// HIGH ORDER ARRAY METHODS (show prototype)------------------------------------------------------------

// forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1; 
});


// CONDITIONALS-----------------------------------------------------------------------------------

// Simple If/Else Statement
const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}

// Switch --// case is the describes possible outcomes, default is equivalent to 'else'.
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}

// Ternary operator / Shorthand if statement
const z = color === 'red' ? 10 : 20;



// FUNCTIONS--------------------------------------------------------------------------------------
function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}


// ARROW FUNCTIONS--------------------------------------------------------------------------------
const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));


// BRIEF OOP explaination--------------------------------------------------------------------------------------

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}


// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());



// Built in constructors
const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ES6 CLASSES----------------------------------------------------------------------
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());


// ELEMENT SELECTORS----------------------------------------------------------------

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS-------------------------------------------------------------------------

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT------------------------------------------------------------

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// OBJECT ORIENTATED PROGRAMMING ------------------------------------

// Functions inside of Objects are called methods. 
 

// Object Literals-------------------------------------------------- 

//backticks in the function are a feature of ES5

const book1 = {
  title: 'book one',
  author: 'John Doe', 
  year: '2013'
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year} `; 
  }
} 
console.log(book1.getSummary());// This will display "book one was written by John Doe in 2013"

// Constructor functions (ES5)---------------------------------------

function book(title, author, year){
  this.title = title; 
  this.author = author; 
  this.year = year;
}
const book1 = new book('book one', 'John Doe', '2013');
const book2 = new book('book two', 'Jane Doe', '2016');

console.log(book1); // will come up with all details from book1.

//prototypes ---------------------------------------------------

//getSummary
book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author}
  in $(this.year)`;
}; 

// getAge
book.prototype.getAge = function() {
const years = new Date().getFullYear() - this.year;
return `${this.title} is ${years} years old`;
};

//Revise / change Year
book.prototype.revise = function(newYear){
  this.year = newYear;
  this.revised = true;
}
const book1 = new book('book one', 'John Doe', '2013');
const book1 = new book('book two', 'Jane Doe', '2016');

console.log(book2); 
book2.revise('2018');
console.log(book2); //will come back as book 2 being made in 2018 under 'year'.

// prototype Inheritanace ------------------------------

function book(title, author, year){
  this.title = title; 
  this.author = author; 
  this.year = year;
}

book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author}
  in ${this.year}`;
};

  //Magazine constructor (inheritance part) 

  function Magazine(title, author, year, month) {
    book.call(this, title, author, year);

  this.month = month;
  }

  //inheritance part 

  Magazine.prototype = Object.create(book.prototype);

  const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan');

  console.log(mag1);

  // Object.create method------------------------------------------ 

  //object of prototypes 

  const bookprotos = {
    getSummary: function() {
      return `${this.title} was written by ${this.author}
      in ${this.year}`;
    }, 

    getAge: function() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old`;
    }
  } 
  // object creation  
  // Either of the belwo can be used:

  const book1 = Object.create(bookprotos);
    this.title = 'book1'; 
    this.author = 'John Doe'; 
    this.year = '2013';
  
  const book1 = Object.create(bookprotos, {
    title: { value: 'book one' } 
    author: { value: 'John Doe' }
    year: { value: '2013' }
  });
    
  console.log(book1);
  
  
// getter method------------------------------------------------

  get activity () {
    const today = new Date();
    const hour = today.getHours();
    
    if ( hour > 8 && hour <= 20) {
    return 'playing';
  } else {
    return 'sleeping';
    }
  }

// setter method ---------------------------------------------
// On occasion setters require getters to function properly.  


get owner() {
    return this._owner;
  }

  set owner() {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }

  ernie.owner = 'Ashley';
  console.log(ernie.owner);


  //---Building a basic toggle navigation in javascript
  //-- This is just one method of doing it.

  /*css foe nav bar
  width: 20px; 
  height: 20px; 
  background-color: #fff; 
  background-image: url(img.png) 
  background-size: cover; 
  background repeat: no-repeat; 
  position: fixed; 
  top: 0px;
  left: 0px; 
  z-index: 1000; 
  cursor: pointer; 
  border: 10px; 
  border: 10px solid #fff
  border-radius: 2px; 
  transition: all ease-in-out 200ms;
  -webkit-transition: all ease-in-out 200ms;
*/
//---js code below----------

var toggleStatus = 1;
function toggleMenu() {
  if (togglestatus == 1) {
    document.getElementById('menu').style.left = "-240px";
    var toggleStatus = 0;
  } else if (togglestatus = 0) {
    document.getElementById('menu').style.left = "0px";
    var toggleStatus = 1;
  }
}

// Generating random numbers in javascript.

let getRandomNumber = function(start, range) {
  let getRandom = Math.floor((Math.random() * range) + start);
  while (getRandom > range) {
      getRandom = Math.floor((Math.random() * range) + start)
  }
  return getRandom;
  }

console.log(getRandomNumber(1, 1000));
