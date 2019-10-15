//Javascript and the DOM(Document Object Model)

//The Dom is a represenation of your Origin document in objects with methods and props. With Javascript you can minipulate these objects.

// EXAMINE THE DOCUMENT OBJECT //----------------------------------------------------------------------

console.dir(document); // Display all the objects in the dom
console.log(document.domain); //Displays the domain ip address.
console.log(document.URL); // Displays the full URL.
console.log(document.title); //Displays the document title (displayed in top tab for reference.)
document.title =  123; // You can change the title.
console.log(document.doctype); // Displays the document type in this case (HTML)
console.log(document.head); // Displays the head of the document.
console.log(document.body); // Displays everything inside the body.
console.log(document.all); // Displays everything as a string
console.log(document.all[10]); //displays the 11th element on the page.
document.all[10].textContent = 'Hello'; //inserts 'Hello' into the (incorrect format)
console.log(document.forms[0]); // Selects the first form element
console.log(document.links); // selects all links
console.log(document.images);// selects all images

GETELEMENTBYID //
console.log(document.getElementById('header-title')); // just console logging the header title class.
var headerTitle = document.getElementById('header-title'); // assigning a variable to the class 'title-header'.
var header = document.getElementById('main-header'); // assigning a variable to the class 'header'.
console.log(headerTitle);
headerTitle.textContent = 'Hello'; 

/*The main difference between innerText and textContent is that textContent will display all items displayed visually,
While innertext will display all items regardless if their display is set to none or invisable.*/

headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>'; // this will select headerTitle and put an h3 inside of the h1.
header.style.borderBottom = 'solid 3px #000'; // changes the styling.

// GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item'); //assigns everything in the list with a class of 'list-group-items' to 'items'. 
console.log(items);
console.log(items[1]);// This accesses the first list item, as zero refers to the <ul> not <li>.
items[1].textContent = 'Hello 2'; //This is how youd change the text for that particular listing.
items[1].style.fontWeight = 'bold'; //changes the styling of that particular list item.  
items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < items.length; i++){ // to apply styling to all html you would need to create a for loop and loop through each one.
  items[i].style.backgroundColor = '#f4f4f4';
}

GETELEMENTSBYTAGNAME //Focuses elements by tag name.
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

// Gives error
//items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < li.length; i++){//Same as before when getting elements by class name.
  li[i].style.backgroundColor = '#f4f4f4';
}

// QUERYSELECTOR //can old focus one element and grabs the first element of that type on the page.
var header = document.querySelector('#main-header');// you can select tabs, classes and Id's and others with it.
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input'); //adds placeholder text into the input box. In this case itse hello world.
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item'); // grabs the first element in that class and makes it red.
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child'); // this will make the last child element blue.
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)'); //grabs the second child and makes the color coral.
secondItem.style.color = 'coral';

// QUERYSELECTORALL // grabs more than one thing at once.
var titles = document.querySelectorAll('.title'); // fovuses both title classes and gives them a variable of titles

console.log(titles);
titles[0].textContent = 'Hello'; // selects the first of two titles and inserts the text hello into it.

var odd = document.querySelectorAll('li:nth-child(odd)');//selects all odd numbered parts of elements.
var even= document.querySelectorAll('li:nth-child(even)');//selects all even numbered parts of elements.

for(var i = 0; i < odd.length; i++){ // loops through the odd or even numbered elements and makes them a different color.
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}

// TRAVERSING THE DOM //---------------------------------------------------------------------------------------------

//When it comes to traversing the DOM there are three elements to look out for. Parents, siblings and children.
//For example a section or div is a parent, the pieces inside the section for examples forms, lists and h1s are siblings
//elements inside the simpling divs are called children these are things like <li>'s.

//Node lists in the console are basically arrays of data.


var itemList = document.querySelector('#items'); //grabs everything in the list with a id class of items.
// parentNode
console.log(itemList.parentNode);// shows the parent in the console of the variable itemList(#items)
itemList.parentNode.style.backgroundColor = '#f4f4f4'; //puts a grey background on the parent node
console.log(itemList.parentNode.parentNode.parentNode); //This would select the parent container of everything.

parentElement // identical as above but worded differently.
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
console.log(itemList.childNodes); //shows all the children of the parent(itemList)

console.log(itemList.children);
console.log(itemList.children[1]);//lists out the second child and changes the background-color to yellow.
itemList.children[1].style.backgroundColor = 'yellow';


 // firstElementChild
console.log(itemList.firstElementChild); //will select the first child and add hello1 to it.
itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
console.log(itemList.lastChild);
lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4'; //will select the last child and add hello1 to it.

nextSibling
console.log(itemList.nextSibling);
// nextElementSibling //next and prious sibling are quite obviou, but an indirect way of selecting them.
console.log(itemList.nextElementSibling);

previousSibling
console.log(itemList.previousSibling);
previousElementSibling
console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');//adds a title element and dets the title as hello div

// Create text node
var newDivText = document.createTextNode('Hello World'); //creating a string of text and adding it to the child with 'appendchild'

// Add text to div
newDiv.appendChild(newDivText);

//adding the above information created and inserting it into the dom

var container = document.querySelector('header .container'); // selects the container class from <header> tag.
var h1 = document.querySelector('header h1');//selects the header h1.

console.log(newDiv);

newDiv.style.fontSize = '30px'; // You can style it as you would do any other element because its part of the dom.

container.insertBefore(newDiv, h1);//inserts the newdiv variable before the h1. 


// EVENTS //------------------------------------------------------------------------------------------------------------

var button = document.getElementById('button').addEventListener('click', buttonClick); 
//adds an event listener to the tag of button when clicked. You are also adding a reference name to a function with the name of 'buttonclick'. 

function buttonClick(e){
  console.log('Button clicked'); // when button is clicked button clicked is logged in console.
  document.getElementById('header-title').textContent = 'Changed'; //ads text content to the header on click
  document.querySelector('#main').style.backgroundColor = '#f4f4f4';//gives the id of main a background on click
  console.log(e);//e is an event, so when you click the botton, it will tell you everything in the event thats happening.

  console.log(e.target);//gives you the element and everything in the process that was clicked
  console.log(e.target.id);//gives you the id for the button you click. In this case its '#button'.
  console.log(e.target.className); // gives you the class. in this case "btn btn-dark btn-block".
  console.log(e.target.classList);

  var output = document.getElementById('output');
  
  output.innerHTML = '<h3>'+e.target.id+'</h3>';// you can also concatinate the above to create a single command.

  console.log(e.type);//will simply display what kind of event e is.

  console.log(e.clientX);//this will give you a log of horizontal coordinates on a page from the left hand side of where you click.
  console.log(e.clientY);//this will give you a log of vertical coordinates on a page from the top of the page to where you click.

  console.log(e.offsetX);//This will do the same as clientX except measure from inside the element from the left.
  console.log(e.offsetY);//This will do the same as clientY except measure from inside the element from the right.

  console.log(e.altKey);//tests to see if you are holding down a key whilst clicking in this case alt.
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
  }

var button = document.getElementById('button');
var box = document.getElementById('box');

  button.addEventListener('click', runEvent); // on click event.
  button.addEventListener('dblclick', runEvent);// on doubleclick event. 
  button.addEventListener('mousedown', runEvent);// when the mouse in clicked down
  button.addEventListener('mouseup', runEvent);//when you release the clcik on the mouse.

  box.addEventListener('mouseenter', runEvent);//When the mouse scrolls over something the event fires(scrolling over parent)
  box.addEventListener('mouseleave', runEvent);//when mouse leaves area event is fired.(scrolling away from parent)

  box.addEventListener('mouseover', runEvent);//when the mouse is over a sibling or children
  box.addEventListener('mouseout', runEvent);//when the mouse leaves the sibling or child.

  box.addEventListener('mousemove', runEvent);//when moving over an element event fires.

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);

  //console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}