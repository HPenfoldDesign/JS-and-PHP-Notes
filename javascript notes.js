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

//also both let and const are used in block scope, meaning they are only accessible inside their functions. Var has access to variables in and out of functions.
//Const are constants meaning the data inside them cant be changed, only reasigned.

const i = 1;
i = 2 // will return error. 
const i = 2 // will be reassigned to 2.

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

// Concatenation(ES5 and older)
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (ES6 plus)
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
//tests if a string starts with a particuluar letter, ends with does the same thing to the last letter.
val = s.startsWith('t');
val = s.endsWith
//tests if string has a space.
val = s.includes(' ');


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


// LOOPS--------------------------------------------------------------------------------------------------

// For
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}


for(let i = 0; i <= 10; i++){
  console.log(i);
}
//----------------------Looping through objects keys--------------------------------------------------------

let person1 = {
  name: 'Mark Johnson',
  height: 1.63, 
  weight: 90,
  bmiMark: function(){
      this.bmiMark = this.weight / (this.height * this.height); 
  }
}

let keys = Object.keys(person1); 

for (let i = 0; i < keys; i++) {
console.log(keys[i])
};

//looping through object only counting certain types of data (in this case a string)-------------------------------------------------

const fruits = ['apples', 3 , 'oranges', 'pears', 2 , 'grapes'];

for (let i = 0; i < fruits.length; i++){
  if (typeof fruits[i] !== 'string') continue; //if your if startement is asking one query you can miss out the curly brackets.

console.log(fruits[i]);
}

//Reads through array until another datatype comes up.-------------------------------------------------

const fruits = [1 , 2 , 3, 'pears', 4 , 5];

for (let i = 0; i < fruits.length; i++){
  if (typeof fruits[i] !== 'number') break;

console.log(fruits[i]);
}

//read through an array backwards------------------------------------------------------------------------

const fruits = [ 1, 2, 3, 4, 5];

for (let i = fruits.length -1; i >= 0; i--) {

console.log(fruits[i]);
}

//-------------------------------------------------------------------------------------------------------

// While
let i = 0;
while(i <= 10) {
  console.log(i);
  i++;
}

//-----------------------------------------------------------------------------------------------------------
// Loop Through Arrays
// For Loop

for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

for(let i = 0; i < todos.length; i++){
  console.log(Todo[i]);
}


//-----------------------------------------------------------------------------------------------------------
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

//function statements:  statements perform actions(if/else, while, switches etc.) but dont produce any immidiate results.
//function expressions: produces an immediate result from some values, should be written whenever js expects a value. (written below)

function greet(greeting = 'Hello', name) {
  if(!name) {
     console.log(greeting);
    return greeting;
  } else {
     console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

// Assigning a function to a variable--------------------------------------------------------------

let profession = function(firstName, job) {
  switch(job){
    case 'electrician':
      return firstName + ' is an electrican';
    case 'Salesman':
      return firstName + ' is an salesman';
    case 'Developer':   
      return firstName + ' is an developer';
    default:
      return firstName + ' does something else';  
  }
}

console.log(profession('Andy','electrician'));
console.log(profession('Jim','Salesmen'));
console.log(profession('Harry','Developer'));
console.log(profession('Craig'));

//Functions passing in other functions--------------------------------------------------------------

function calculateAge(birthYear) {
	return 2020 - birthYear;
}

calculateAge(1989); //returns 31

//Call a function inside of another function

function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year); //The function call calculates the age of someone based on birth date.
    let retirement = 65 - age;
    alert(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1989, 'Harry');

//Passing in other functions and conditionals-----------------------------------------------------


function calculateAge(birthYear) {
	return 2020 - birthYear;
}

calculateAge(1989); //returns 31

//Call a function inside of another function------------------------------------------------------------

function yearsUntilRetirement(year, firstName) {
	let age = calculateAge(year);
    let retirement = 65 - age;
    
    if(retirement > 0) {
		alert(firstName + ' retires in ' + retirement + ' years.');
	} else {
	alert(firstName + ' is retired.');
	}
    
}

yearsUntilRetirement(1989, 'Harry');
yearsUntilRetirement(1932, 'James');
yearsUntilRetirement(1999, 'Jeff');

//functions returning other functions.-------------------------------------------------------------------

function interviewQuestion(job) {
  if (job === 'designer') {
      return function(name) {
          console.log(name + ', can you please explain what UX design is?')
      }
  } else if(job === 'teacher') {
      return function(name) {
          console.log(name + ', What subject do you teach?');
      }
  } else {
      return function(name) {
          console.log('hello' + name + ', what do you do?')
      }
  }
}

// let teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('john');

//you can also call it right away like this 

let teacherQuestion = interviewQuestion('teacher')('john');


//IIFE - immediately invoked function expressions.---------------------------------------------------------------------

// without IIFE you could create a function like: 

function game() {
let score = Math.random() * 10;
  console.log(score >= 5);
}

game();

//With IIFE
//by wrapping a function in parethesis you trick the parser into believing this is an expression, not as a declaration.

//remember a function declaration is a function on its own, where as a function expression is a function written inside of another function or variable.
//with declarative functions they are hoisted meaning they can be called in the page before the command is written.

(function () {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

//Closures example (refer to explanation of closures further down) ----------------------------------------------------------------------------------------------------------------------

function retirement (retirementAge) {
  let a = ' years until retirement.';
  return function(yearOfBirth) {
      let age = 2016 - yearOfBirth;
      console.log((retirementAge - age) + a);
  }
}

// let retirementUS = retirement(66);
// retirementUS(1990);

retirement(65)(1989); //calls both functions together, with the inner function refering to the outer functions arguements.


//another example:


function interviewQuestion(job) {
  return function(name) {
      if (job === 'designer') {
          console.log(name + ', What kind of design do you teach?');
      } else if (job === 'developer') {
          console.log(name + ', Do you build phone apps as well as online applications?');
      } else {
          console.log('Hello, ' + name + ', What kind ofwork do you do?')
      }
  } 
}

interviewQuestion('designer')('Harry');
interviewQuestion('developer')('Harry');

// ARROW FUNCTIONS--------------------------------------------------------------------------------
//Arrow functions are a quicker way of writing functions which are unnamed, unassigned to a variable, or are anonymous.
//just they are written like so (arguements,) => {function instructions}.

const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));

//ES6 DESTRUCTURING--------------------------------------------------------------------------------
  //ES5

  var john = ['John', 26];

// var name = john[0];
// var age = john[1];

//ES6

const [name, age] = ['john', 26];

//deconstructing objects into variables
const obj = {
    firstName: 'Harry',
    lastName: 'Penfold'
};


const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

//example of destructuring an array within a function--------------------------------------------

const [name, age] = ['Harry', 31];

function calcRetirementAge (year) {
  new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = 
calcRetirementAge(1989);

console.log(age2);
console.log(retirement);

// ES6 CLASSES--------------------------------------------------------------------------------------
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
//OBJECTS---------------------------------------------------------------------------------------------------
// Object Literals----------------------------

//PROPERTIES - are the key in the key value pair e.g hair: 'green', hair is the property.

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

// Add a key value pair
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


//METHODS - are functions made inside of objects to modify that particular object. see Method below:

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  newAge: function(age) {
    return 2020 - age;
  }
};

alert(person.newAge(1992));

//THIS keyword. This in this context is uses to select that age inside of that object.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 1992,
  newAge: function(age) {
    return 2020 - this.age;
  }
};

alert(person.newAge());

//creating a new key value pair (property) using this keywork and a method.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1997,
  newAge: function() {
    this.age = 2020 - this.birthYear;
  }
};

person.newAge(); // dont forget to call the function.
console.log(person);

//---------------------CALL, BIND AND APPLY-------------------------------------------

let john = {
  name: 'john',
  age: 26, 
  job: 'teacher',
  presentation: function(style, timeOfDay) {
      if (style === 'formal') {
          console.log('Good ' + timeOfDay +', ladies and gentlemen. I\'m ' + this.name + ', I\'m ' + this.age + ' and I work as a ' + this.job +'.');

      } else if (style === 'friendly') {
          console.log(timeOfDay + ', guys and girls. I\'m ' + this.name + ', I\'m ' + this.age + ' and I work as a ' + this.job +'.');
      }
  }
};

let emily = {
  name: 'Emily', 
  age: 35, 
  job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily,'friendly', 'good morning'); //calling emilys details from here object to use with the presentation method.

let johnFriendly = john.presentation.bind(john, 'friendly'); //bind creates a function stored in a variable using the arguements of the object name amd if perameters.
johnFriendly('morning'); // calling the johnFriendly function stored in a variable with the timeOfDay function called together.



// john.presentation.apply(emily, ['friendly', 'good afternoon']); //This wouldnt work as the presentation method isnt expecting an array of items as input. 

//another example of the apply

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2


//----------PROTOTYPES AND CONSTRUCTOR FUNCTIONS--------------------------------------------------------------------------------------------------

//object literal - compare it with constructor function below.

let john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher',
  calculateAge: function() {
      console.log(2020 - this.yearOfBirth);
  }
};

//function object constructor (blueprint for creating object)

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
      console.log(2020 - this.yearOfBirth);
  }
};


/* you can even attach methods to your objects in prototypes
in the global scope this way.*/

Person.prototype.calculateAge = function() {
          console.log(2020 - this.yearOfBirth);
      }

//creating the new object using person is called instantiation.
// the 'new' operator creates a new empty object

let John = new Person('John', 1990, 'teacher');
let Harry = new Person('Harry', 1989, 'designer');
let Phil = new Person('Phil', 1964, 'manager');

Harry.calculateAge();
John.calculateAge();
Phil.calculateAge();

//this will add lastName property to all objects.
Person.prototype.lastName = "smith";


//Another way to make a constructor using Object.create (least popular method)

let PersonProto = {
  calculateAge: function() {
      console.log(2020 - this.yearOfBirth);
  }
};

let John = Object.create(PersonProto);
John.name ='John';
John.yearOfBirth = 1990;
John.Job = 'teacher';

//OR you can do:

let Jane = Object.create(PersonProto,
{
  name: { value: 'Jane' },
  yearOfBirth: { value: 1970 }, 
  job: { value: 'designer' }
});


//EXECUTION CONTEXT--------------------------------------------

/*Simply put, an execution context is an abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.
Types of Execution Context
There are three types of execution context in JavaScript.*/

/*Global Execution Context — This is the default or base execution context. The code that is not inside any function is in the global execution context. It performs two things: 
it creates a global object which is a window object (in the case of browsers) and sets the value of this to equal to the global object. There can only be one global execution context in a program.
Functional Execution Context — Every time a function is invoked, a brand new execution context is created for that function. Each function has its own execution context, but it’s created when the function is invoked or called. 
There can be any number of function execution contexts. Whenever a new execution context is created, it goes through a series of steps in a defined order which I will discuss later in this article.
Eval Function Execution Context — Code executed inside an eval function also gets its own execution context, but as eval isn’t usually used by JavaScript developers, so I will not discuss it here.*/

/*Execution Stack
Execution stack, also known as “calling stack” in other programming languages, is a stack with a LIFO (Last in, First out) structure, which is used to store all the execution context created during the code execution.
When the JavaScript engine first encounters your script, it creates a global execution context and pushes it to the current execution stack. Whenever the engine finds a function invocation, it creates a new execution context for that function and pushes it to the top of the stack.
The engine executes the function whose execution context is at the top of the stack. When this function completes, its execution stack is popped off from the stack, and the control reaches to the context below it in the current stack. 
 */

// SCOPE-------------------------------------------------------
  /* Is a way of dictating how accessible information is.
  /* - In global scope all information is accessible including access from the local scope.
     - In local scope which is inside functions and executables, information cant be accessed outside of it. E.g you cant reference a letiable inside of local scope in global, but you can obviously call functions.

// HOISTING----------------------------------------------------

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of 
whether their scope is global or local.

// CLOSURES----------------------------------------------------

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, 
a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function 
creation time. To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

// BUBBLING----------------------------------------------------

When you an event on a parent element, all of of the children and sibling elements do the same thing unless instructed differently. This is known as bubbling.

//THIS. keyword------------------------------------------------

this keyword refers to an object, that object which is executing the current bit of javascript code. In other words, every javascript function while executing has 
a reference to its current execution context, called this. Execution context means here is how the function is called. To understand this keyword, only we need to know how, 
when and from where the function is called, does not matter how and where function is declared or defined.

In essence it reflects what context it is used in. In the example below the this keyword is used to pick the age key/ value pair.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  newAge: function(age) {
    return 2020 - this.age;
  }
};

You can even borrow the method from one object and use it on another like this: person.newage = anotherObject.newage.

*/

//Quiz console app

(function() {   //All commands are wrapped in an IIFE to make the code isolated inside a function and therefor wont interfer if another developer were to add it into their code.

  function Question( question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct; 
  }
  
  Question.prototype.displayQuestion = function() {  //creating a method called displayQuestion to drop into the Question object.  
      console.log(this.question);
  
      for (let i = 0; i < this.answers.length; i++) { // designed to console log the answers by looping through them
          console.log(i + ': ' + this.answers[i]);
      }
  }
  
  Question.prototype.checkAnswer = function(ans) {
      if (ans === this.correct) {
          console.log('correct!')
      } else {
          console.log('incorrect, try again')
      }
  }
  
  let q1 = new Question('Is javascript the coolest programming language in the world?', ['yes', 'No'], 0);
  let q2 = new Question('What is the name of the course\'s teacher?',['Mike', 'Jonas'], 1); 
  let q3 = new Question('Who is the person learning Javascript?',['Dave', 'Harry', 'John'], 1);
  
  let questions = [q1, q2, q3];
  
  let n = Math.floor(Math.random() * questions.length);
  
  questions[n].displayQuestion();
  
  let answer = parseInt(prompt('Please select the correct answer.')); //When entering into a prompt box your answer is converted to a string rather than a number. ParseInt converts it back to number.
  
  questions[n].checkAnswer(answer);
  
  })();


// MODULATION -----------------------------------------------------------------------------------------------------

/*This app shall be written with modulation. Modules work the same way as multiple folders inside a larger folder. You can link the data between these modules to create the full program.
You could have a module which programs the UI, another module to program data like getting data or doing something mathematical with data, another for events etc. 
Heres an example of modules below. They are written with IIFE's */

/* If you tried to call the budgetController.add(5) it wouldnt work because its hidden inside the IIFE. by returning a function directly it makes it accessible.
The value of a value also becomes b, so if you called the function budgetController.publicTest(5), that would work. This is how you enable modules to interact with one another.*/

let budgetController = (function() {
  let x = 23; 

  let add = function (a) {
     return x + a;
  }

  return {
      publicTest: function (b) {
          console.log(add(b));
      }
  }
})();

budgetController.publicTest(7)

/* this would return 30 in the console*/

let UIController = (function() {
})();

let controller = (function() { 
})(); 

//Splitting your modules into different parts of the application, as in different modules to control different parts of the program is called seporation of concerns.
/*---------------------------------------------------------------------------------------------------------------------------


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


//More ES6 changes-----------------------------------------------------------------------

 //ES5

 var box5 = {
  color: 'green',
  position: 1, 
  clickMe: function () {
      var self = this;
      document.querySelector('.green').addEventListener('click', function() {
          var str = 'This is box number ' + self.position + ' and it is ' + self.color;
          alert(str);
      });
  }
}

box5.clickMe();

//ES6

var box6 = {
  color: 'green',
  position: 1, 
  clickMe: function () {

      document.querySelector('.green').addEventListener('click', () => {
          var str = `This is box number ${this.position} and it is ${this.color}`;
          alert(str);
      });
  }
}

box6.clickMe();

//ES5
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = 
function(friends) {

  let arr = friends.map(function(el) {
      return this.name + ' is friends with ' + el
  }
  
  .bind(this));

  console.log(arr);
}

let friends = ['Bob', 'John', 'Mark'];
new Person('John').myFriends5(friends);


//ES6 

let friends = ['Bob', 'John', 'Mark'];

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = 
function(friends) {

  let arr = friends.map(el => 
     `${this.name} is friends with ${el}`);

  console.log(arr);
}

new Person('Mike').myFriends5(friends);

ES5
var john = ['John', 26];

var name = john[0];
var age = john[1];

ES6

const [name, age] = ['Harry', 31];

const obj = {
  firstName: 'Harry',
  lastName: 'Penfold'
};

//deconstructing objects into variables
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcRetirementAge (year) {
  new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = 
calcRetirementAge(1989);

console.log(age2);
console.log(retirement);



//ES6 arrays

const boxes = document.querySelectorAll('.box');

//ES5
// queryselectorAll returns a node list you convert that to an array as seen below.
var boxesArr5 = Array.prototype.slice.call(boxes);

  boxesArr5.forEach(function (cur) {
      cur.style.backgroundColor = 'dodgerblue';
      
  });

//loops

//ES6
//ES6 you can now convert to array using array.from like this:
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
//if the loop goes over the classname of 'box blue' contunue past it. changing the first and last boxes top 'I changed colour to blue';
//if you type in break instead of continue the loop stops there.

for(var i =0; i < boxesArr5.length; i++){
  if(boxesArr5[i].className === 'box blue' ){
      continue;
  }
  boxesArr5[i].textContent = 'I changed to blue!';
}

//ES6

for(const cur of boxesArr6) {
  if(cur.className.includes('blue')) {
      continue;
  }
  cur.textContent = 'I changed to blue!';
}


//ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});

console.log(full);
console.log(ages[full.indexOf(true)]);

//ES6
//will return the 3rd age which is 21.
ages.findIndex(cur => cur >= 18);

//to display 21 you can write: 
console.log(ages.find(cur => cur >+ 18));

// Spread operator----------------------------------------------------
//ES5

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

// var sum1 = addFourAges(18, 30, 12, 21);

// console.log(sum1);


var ages = [18, 30, 12, 21];
//like bind and call, apply requires 2 parametres the this variable and (which isnt applicable here) and the variable to apply the addFourAges function too.
var sum2 = addFourAges.apply(null, ages);

//ES6
//this can be written using the spread operator in es6, spread looks into the ages array.
const max3 = addFourAges(...ages);

//The spread operator can also be used to join two arrays together for example: 

const smithFamily = ['John', 'jane', 'mark'];
const garciaFamily = ['bill', 'jess', 'phil'];

const bigfamily =[...smithFamily, garciaFamily];
console.log(bigfamily);

//it can also be used in dom minipulation:

const h = document.querySelector('h1');
const alldamnboxes = document.querySelectorAll('.box');

allPurple = [h, ...alldamnboxes];

Array.from(allPurple).forEach(cur => cur.style.color = 'purple');


//FUNCTION PARAMETRES

//REST permametres transform arguements into into an array. The spread operator similarly transforms multiple bits of data into an array.
//arguements variable is used when then is an un numbered amount of arguements.
// the function would return an object with data in, rather than an array which is what we want so in es5 an array was created by splitting up the object.
//ES5

function isFullAge5() {
  //console.log(arguements);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
  console.log((2016 - cur) >= 18);
  })
}

isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6

function isFullAge6(...years) { //creates an array called years with the arguements in.
  years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);


//DEFAULT PARAMETRES-----------------------------------------


//ES5
function smithPerson(firstName,yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality == undefined ? nationality = 'British' : nationality = nationality;
  
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new smithPerson('John', 1990,);
var emily = new smithPerson('Emily', 1983, 'Diaz', 'Spanish');



//ES6 - will apply lastName as smith and nationality british as default, but will apply something different if specified.
function smithPerson(firstName,yearOfBirth, lastName = 'smith', nationality = 'British') {

  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new smithPerson('John', 1990,);
var emily = new smithPerson('Emily', 1983, 'Diaz', 'Spanish');


//maps-------------------------------------
//maps are similar to objects as they store a key value pair but maps are more useful in certain situations.


const question = new Map();
question.set('question', 'What is the colour of the sky?');
question.set(1, 'Blue');
question.set(2, 'Green');
question.set(3, 'red');
question.set(4, 'Yellow');
question.set('correct', 1);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');
//question.delete(2);
//question.clear() will delete everything.


console.log(question.get('question'));
// //console.log(question.size);

// if(question.has(4)) {
//     //  console.log(question.get(2))
//     // returns 'red'
//     }


// //will return 'What is the colour of the sky'.
// //will return the how many things are set in this example 7.
// //question.delete removes a key value pair in this case the key value pair with the key labled as 2.
// //question.has checks if a key value pair exuists in this case.
// //question.clear() will delete everything.

// // question.forEach((value, key) => 
// // console.log(`this is a ${key}, and it's set to ${value}`);

// //You can also iterate through maps as seen below:
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct'))); 

//CLASSES----------------------------------------------------------------------------------------

//constructors an easy way of setting the blueprints for lots of different functions. You can write the constructor and functions inside of a class.
//in the example below you can see the syntax has been dramatically cut down, but still performs the same action. This is known as 'syntactic sugar'.

//ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


//ES6
// static methods are methods which are in but not part of person6
//you can only put methods inside classes, you can put props in them like you would an object.

class Person6 {
    constructor (name, yearOfBirth, job)
    {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; 
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!')
    }
}

const john6 = new Person6('John', 1990, 'teacher');


//ES5
//classes and subclasses.
//There are subclasses and super classes. The super classes are the original constructors and the sub classes are the ones which have been added too.

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olymicGames = olymicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

//ES6
//in es6 you can reference super classes with the word super, remebering to extend the class.
//methods (functions) are also displayed as functionName() {}, no nee to set it as a prototype.


class Person6 {
  constructor (name, yearOfBirth, job)
  {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job; 
  }
  calculateAge() {
      var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olymicGames, medals) {
      super(name, yearOfBirth, job);//connects to Person6 constructor and adds olympicGames and medals.
      this.olymicGames = olymicGames;
      this.medals = medals;
  }

wonMedal() {
  this.medals++;
  console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);