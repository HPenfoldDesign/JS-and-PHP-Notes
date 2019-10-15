PHP Notes

// Data types 

/*
string 
interger  (number)
float(floating point numbers 2.5 for example)
boolean(True and false value)
Array(an array of items)
Object
Null (means nothing)

unofficial data type:
resource (is used for something that stores a name to reference a function, calling a database with a variable for example).

//-----installing a local server to start using php------------------------

1. install xampp 
2.go to xampp control panel 
3. press start for apache and mysql
3.go to 'htdocs' in the xampp folder in C: 
4.Delete everything out of that folder
5.create a folder and make a .php file index.php for example 
6.go to your address bar and type in localhost/foldername to view the php file 

7. You can view all folders in server (htdocs) by just typing localhost
8. if you want to view the xampp dashboard type in localhost/phpmyadmin

//------------------------Variables and numbers------------------------------
<?php
  $num_one = 1; //these are variables variables cannot start with a number.
  $num_two = 2; 
  $num_three = 3;
  
//var_dump( $num_one );
//var_dump( 1 ); 
//var_dump( "1" ); 
//var_dump( $num_one + $num_two - $num_three );

$distance_home = 1.2; //these are floats (floating point numbers)
$distance_work = 2.5; 

var_dump($distance_home + $distance_work + $num_three + .3); //var_dump in the console the php result 7 in this case.

$a = 5; 
$b = 10;

var_dump($a * $b); 
var_dump($a / $b);
  
$a = $a + 1;
var_dump($a);
$a++;
var_dump($a);
$a--;
var_dump($a);

$a += 5 //Is the same as a + 5 =.

/*placing the arithamtic operators after the $ variable will produce the same result, 
however the operator wont be implimented until the next var_dump*/
?> 

//In the console, type php followed by the file name, to run the php file.  

//Building 2 different converters

<?php 

//number in pounds that we want to convert to kilograms 
$pounds = 230; 

//floating point value for the pound to kilogram conversion
$lb_to_kg = 0.453592;

//Use the variables above to calculate pounds multiplied by the kilogram conversion.
$kilograms = $pounds * $lb_to_kg; 

//display the pounds to kilograms.
echo "Weight: "; 
echo $pounds; 
echo " lb = ";
echo $kilograms; 
echo " kg ";


//number in miles we want to convert to kilometres 
$miles = 2.5;

//floating point value foir the mile to km conversion. 
$miles_to_km = 1.60934;

//use variables above to calculate miles multiplied by the km conversion.
$kilometers = $miles * $miles_to_km;

//display miles to km's
echo "Distance: ";
echo $miles; 
echo " miles: "; 
echo $kilometers; 
echo " km";

?>


//------------------Working with strings-----------------------------------

<?php
$name = 'Harry!'; 
$string_one = "Hello, my name is $name";
echo $string_one; 
?>

//---concatination------------------ 

<?php
$name = 'Harry'; 
//The \ in the string below tests the php reader to keep on reading until the final " character.
//The \n character means new-line. these are called 'escape sequences'.
string_one = "Learning to display "Hello $name!" to the screen.\n"; 

//The string below is concatinated with the . to put the setence together.
//if you are using multiple lines of stringing text it is better to use:
$string_one .= 'My name is '; 
$string_one .=  $name;       

//-----concatinated string-----------------------------------------

string_one = 'Learning to display "Hello '. $name .'!" to the screen' . "\n"; 
echo $string_one;
?>

//-----another example below: 

<?php

$firstName = 'Rasmus';
$lastName = 'Lerdorf';

$fullName = "$firstName "."$lastName"; 
echo "$fullName "."was the original creator of PHP.\n"
?>

//----------Booleans-------------------------------------------------------

//Booleans only have 2 values - True or false.
<?php

$israedy = true;
var_dump($isready);  //shall display as true.
$israedy = false;
var_dump($isready);  //shall display as false.

?>

<?php

$a = 10;
$b = '10';

var-dump($a == $b) // will return true.
var-dump($a === $b) // will return false, as this method looks at if both the sets of data are the same dadta type.

$string_one = 'I am ' .$string;
var-dump($string_one == 'learning to spell "hello Harry" to the screen'); //will return as false.

?>

<?php
$a = 5;

$isBoolean = true;
$isIdentical = $a === "5";
?>

//-----------------conditional statements-----------------------------------

<?php

$string_one = 'learning to spell "hello Harry" to the screen';

if($string_one == 'learning to spell "hello Harry" to the screen') {
  echo 'the values match'; //tests if string is true, if yes 'the values match'if no...carry on
}elseif ($string_one == "") { //checks for empty string, if true 'string is empty'
  echo '$string_one is empty';
} else { //if the strings dont match 'the values do not match'
  echo 'The values do not match';
}
?>

//-----------Testing knowledge this far--------------------------- 

<?php

$studentOneName = 'Dave';
$studentOneGPA = 3.8;

$studentTwoName = 'Treasure';
$studentTwoGPA = 4.0;

if($studentOneGPA == 4.0 ){
echo $studentOneName. " made the Honor Role";
} else {
  echo $studentOneName. " has a GPA of ". $studentOneGPA; 
}

if ($studentTwoGPA == 4.0){
 echo $studentTwoName. " made the Honor Role"; 
} else {
  echo $studentTwoName. " has a GPA of ". $studentTwoGPA; 
}
?>

//-------------------------------------------------------------------

<?php

// store each exercise in a string variable
$exercise1 = 'Display "Hello World!"';
$exercise2 = 'Convert Pounds to Kilograms';
$exercise3 = 'Convert Kilograms to Pounds';
$exercise4 = 'Convert Miles to Kilometers';
$exercise5 = 'Convert Kilometers to Miles';
$exercise6 = 'Month long string of the day';
$exercise7 = 'String of the day with levels';

// create a variable containing the day of the week
$day = date('N'); 
var-dump($day);
// use an if statement to test for the day of the week
if($day == 1){
  echo $exercize1;
}
elseif($day == 2){
  echo $exercize2;
}
elseif($day == 3){
  echo $exercize3;
}
elseif($day == 4){
  echo $exercize4;
}
elseif($day == 5){
  echo $exercize5;
}
elseif($day == 6){
  echo $exercize6;
}
elseif($day == 7){
  echo $exercize7;
}
// display the corresponding exercise string

?>

//-------date and time-------------------------------------------------

<?php echo date('Y'); ?> // expresses the year

//--------date and last modified----------------------------------------

<?php echo date('Y');  echo $display_name;
// outputs e.g. 'Last modified: March 04 1998 20:43:59.'
echo " Last modified: " . date ("F d Y H:i:s.", getlastmod());
?>
//-------This returns the full month, day, abd full year----------------

<?php
echo 'Today is ';
//Place your code below this comment
 echo $today = date("F j, Y"); 
?>

//-----------including php files in html--------------------------------

<h2>Daily Exercise</h2>
<?php include 'inc/exercise.php'; ?>

//--------operators------------------------------------------------------

<?php
$a = 5;
$b = 5; 

if ($a == $b) {
  echo 'values are equal';
} elseif ($a > $b) {
  echo '$a is greater than $b';
} elseif ($a < $b) {
  echo '$a is less than $b';
} elseif ($a <= $b) {
  echo '$a is less than or equal too $b';
} elseif ($a => $b) {
  echo '$a is greater than or equal too $b';
} elseif ($a != $b) {
  echo '$a is not equal to $b';
} elseif ($a !== $b) {
  echo '$a is not identical to $b';
} elseif ($a == true) {
  echo '$a is is equal to true'; 
} elseif ($a == false) {
  echo '$a is is equal to false';    
} elseif ($a != false) {
  echo '$a is not equal to false';
} elseif ($a != true) {
  echo '$a is not equal to true';         
} else {
  echo 'values are not equal';
} 
?>

 //---------nested conditionals---------------------------------------------

<?php
 $num = 100; // number is within the range (true) 

 if ($num >= 10) {
  if ($num <= 1000) {
    echo 'your number is within the range';
  } else {
    echo 'your number is greater than 1000, not in range';
  }
 } else {
   echo 'your number is not within the range';
 }
?>
 
 //---------combined statement------------------------------------------------

 <?php
 $num = 100; 

 if ($num >= 10 && $num <= 1000) { //you can use && but both conditions need to be true for the action to initiate.
    echo 'your number is within the range';
  } else {
    echo 'your number is greater than 1000, not in range';
  }
 } else {
   echo 'your number is not within the range';
 }
?>

<?php
$num = 20;

 $num == 10 || is_string($num)) { 
  echo '10 or string'; 
 }  else {
   echo 'NOT 10 or string';
 }
// OR combined statement. if one or bo6th statements are true, echo 10 or string, this would be false.
?>

//-----------------------switch statements------------------------------------

<?php
/*$today - 'Friday';
switch ($today) - will call on fridays echo (clean on friday)*/ 
 switch (date('l')) { // 'l' is a represenation of the date of the week for the date function.
    case "Monday":
        echo "Wash on Monday";
        break;
    case "Tuesday":
        echo "Iron on Tuesday";
        break;
    case "Wednesday":
        echo "Mend on Wednesday";
        break;
    case "Thursday":
        echo "Churn on Thursday";
        break;
    case "Friday":
        echo "Clean on Friday";
        break;
    case "Saturday":
        echo "Bake on Saturday";
        break;
    case "Sunday":
        echo "Rest on Sunday";
        break;
    default:
        echo "I don't know what day it is";
        break;
 } //remove breaks in code to apply same message for two days.
?>

//-----------------------control structures---------------------------------------
<?php

$firstName = 'Harry';
$lastName = 'Penfold';
$currentGrade = 9;
$finalAverage = .88;
$messageBody = '';

if (!$firstName || !$lastName) {
    echo 'Please enter a student name';
} elseif ($currentGrade < 9 || $currentGrade > 12) {
    echo 'This is only for high school students. Please enter a grade between 9 and 12';
} else {
  if ($finalAverage < .70) {
        $messageBody = 'We look forward to seeing you at summer school, beginning July 1st';
  
      } else {
       switch ($currentGrade) {
        case 9:
          $messageBody = 'Congratulations on completing your freshman year in High School! We’ll see you on September 1st for the start of your sophomore year!';
        break;

        case 10:
          $messageBody = 'Congratulations on completing your sophomore year in High School! We’ll see you on September 1st for the start of your junior year!';
        break;
      
        case 11:
          $messageBody = 'Congratulations on completing your junior year in High School! We’ll see you on September 1st for the start of your senior year!';
        break;
      
        case 12:
          $messageBody = 'Congratulations! You’ve graduated High School! Don’t forget to come back and visit.';
        break;
      default:
        $messageBody = 'Error: Grade level is not 9-12!';
        break;
        }
      }
    echo "Dear $firstName $lastName\n";
    echo $messageBody;
}
?>

//----------------------Another example------------------------------------------------

<?php
//Available roles: admin, editor, author, subscriber
if (!isset($role)) {
    $role = 'subscriber';
}

//change to switch statement
switch($role) {
  case "admin":
    echo "As an admin, you can add, edit, or delete any post.";
  break;
    case "editor":
    echo "As an editor, you can add or edit any post, and delete your own posts.";
  break;
    case "author":
    echo "As an author, you can add, edit, or delete your own post.";
  break;
  default:
    echo "You do not have access to this page. Please contact your administrator.";
  break;
}
?>

//------------------Arrays (adding elements)---------------------------------------------

<?php
$learn = array('conditionals','arrays','loops'); 

//var_dump($learn);
//echo $learn[1]; //echos the 2nd array.
//echo implode("\n",$learn); //displays arrays in strings or data

$learn[] = 'Build something awesome!'; //adds a new array to the end(shorthand)
array_push($learn, '|added','to','end');//adds elements to end of array
array_unshift($learn, 'added','to','beginning|'); //adds elements to end of array
var_dump($learn);
?>

//------------------Arrays (removing elements)--------------------------------------------

<?php
array_shift($learn, 'HTML','CSS'); //removes element from the array at beginning, which you can also store in a variable or echo it.
array_pop($learn, 'HTML','CSS'); //removes element from the array at end, which you can also store in a variable or echo it.
unset($learn[1],$learn[2]); //removes second element from list via its key (keys are organised including zero 0,1,2,3,4 etc).
//you can remove multiples too by listing 1 after the other.
$learn = array_values($learn);//when you delete items array keys remain the same to reorder the new list you re-index them.
unset($learn)// will delete the entire array.
$learn[2] = 'email'; // replaces the array element with email that is in the key position of 2.
?>

//----------------------associative-array-------------------------------------------------

<?php //The process of assigning names to keys as opposed to numbers
$icecream array('harry' => 'strawberry', 
'Aaron' => 'chocolate', 
'Steph' => 'vanilla');

echo $icecream['harry']; // This will echo strawberry
var_dump $icecream// will display all names(keys) and flavours
?>

//-----------------------A larger example--------------------------------------------------

<?php 
$catalog[101] = [
	"title" => "A Design Patterns: Elements of Reusable Object-Oriented Software",
	"img" => "img/media/design_patterns.jpg",
    "genre" => "Tech",
    "format" => "Paperback",
    "year" => 1994,
    "category" => "Books",
    "authors" => [
        "Erich Gamma",
        "Richard Helm",
        "Ralph Johnson",
        "John Vlissides"
    ],
    "publisher" => "Prentice Hall",
    "isbn" => '978-0201633610'
];
?>
//-----------------------------multi-dimensional arrays-------------------------------------

<?php 
$task1 = array(
  'title' => 'laundry', 
  'priority' => 2, 
  'due'=> '', 
  'complete' => true; 
);
$task2 = array(
  'title' => '', 
  'priority' => 3, 
  'due' => '07/30/16', 
  'complete' => false,
);
$list= array($task1, $task2);
//var_dump($list);
echo $list[0]['title']; // displays the first element from the first array
?>

//---------------turning an array into a html list---------------------------

<?php 
$array = array("item1","item2","item3");
?>
<ul>
<?php 
foreach($array as $item){
  echo "<li>" .$item. "</li>";
}
?>
</ul>

//---------------------large arrays and assigning keys---------------------------------------

$items = array();
$items[101] = "item1";
$items[102] = "item2";
$items[303] = "item3";
$items[304] = "item4";
$items[405] = "item5";


//------------This is also an option as of php 5.4-------------------------------

<?php 
$list['you can name these, but optional'] = [ 
  'title' => 'laundry', 
  'priority' => '2', 
  'due'=> '', 
  'complete' => true; 
];
$list['you can name these, but optional'] = [
  'title' => '', 
  'priority' => 3, 
  'due' => '07/30/16', 
  'complete' => false,
];
// $list= array($task1, $task2);
//var_dump($list);
echo $list[0]['title']; // displays the first element from the first array
var_dump $list; //displays everything. var-dump is better at displaying lists and objects that echo is.
?>

//-----------------------------------Sorting arrays--------------------------------------
<?php
sort() - sort arrays in ascending order
rsort() - sort arrays in descending order
asort() - sort associative arrays in ascending order, according to the value
ksort() - sort associative arrays in ascending order, according to the key
arsort() - sort associative arrays in descending order, according to the value
krsort() - sort associative arrays in descending order, according to the key
$variable = ltrim($arrayname. "The "); // this trims 'The' from the left of the name of the element in the array
$variable = ltrim($arrayname. "A "); // this trims 'A ' from the left of the name of the element in the array

//This means things will be ordered aphetically from the secord word e.g. The Shining would be srted in the S's not T's.
?>

//-------------------------------------loops----------------------------------------------

//while loop 

<?php
$x = 1;
while ($x <= 5){
  echo "hi there<br>"; 
  $x++
}
?> 

//do-while loop

<?php
do { //Will always display hi there once before looping through.
  echo "hi there<br>";
  $x++;
} 
while($x <= 5);
?> 

//----while loop, looping through array

<?php
$currentYear = date('Y'); 
$year = $currentYear - 100;

$learn = array('conditionals','arrays','loops'); 
$learn[] = 'Build something awesome!';
array_push($learn, '|added','to','end');//adds elements to end of array
array_unshift($learn, 'added','to','beginning|'); //adds elements to end of array
asort($learn);

$count = 0;
while ((list($key, $val) = each($learn)) && $count++ < 2) { // lists the first two parts of the array
  echo "$key => $val\n";
} //list is basically function assigning variables to parts of an array.
?> 

//pingpong game score keeper. 

<?php
$player1 = 0; 
$player2 = 0; 
$round = 0;

while
  (abs($player1 - $player2) < 2 || ($player1 < 11 && $player2 < 11 )) {
    $round++;
  echo "<h2>Round $round</h2>\n";
  if (rand(0,1)) {
    $player1++; 
    } else {
     $player2++;
  }
  echo "Player1 = $player1<br />\n";
  echo "Player2 = $player2<br />\n"; 
}
echo"<h1>"; 
  if ($player1 > $player2) {
echo "Player1";
  } else {
echo "Player2";
} 
echo " is the winner after $round rounds!</h1>\n";
?>

// for loops.

<?php
for ($x = 0; $x <= 10; $x++) {
  echo "hi<br>"
}  
?>

// for each loop 

<?php
$array = array("Tom","Dick","Jane");

foreach($array as $loopdata){// assigns each part of string as $loopdata displaying my name is Tom etc.
  echo "my name is ".$loopdata."<br>";

}

//--------functions------------------------------------

//built in string functions
<?php

$character_length = strlen("Hi Harry");// counts whats in the first pair of quotation marks.
$name_length = str_word_count("Hi Harry");
$name_reverse = strrev("Harry");
$name_position = strpos("Hi Harry","Harry");
$name_replace = str_replace("Harry","Jason","Hi Harry");
$count = count($variable)// counts every kind of data type in a string.

    echo "There are {$character_length} characters in 'Hi Harry' (including the space) and {$name_length} two words.<br>";
    echo "Harry's name Backwards is {$name_reverse}. Harry is in position {$name_position} of the words 'Hi Harry' as position 1 is counted as 0, also counting spaces.<br>";
    echo "I will replace the name Harry with jason in 'Hi Harry' 3, 2, 1...{$name_replace}.";
 ?>

//---------------Another example--------------------------------

<?php
$phrase = 'What time is it Mr Wolf';

$length = strlen($phase);

echo $length; //will echo the string length.
?>

//-----------------variable example-------------------------------------
<?php

$oneHundred = 100;

function newCalc($oneHundred){
  $newNumber = 100 + $oneHundred
}

newCalc($oneHundred); // calling the function should return as 200
$a = 10;
newCalc($a); //will change $oneHundred to $a in function so the result would be 110.
?> 

//--------------calling variable from global scope------------------------------
<?php

$current_user = 'Harry';

function is_harry(){
  global $current_user;
  if(current_user == 'Harry'){
    echo 'It is Harry';
  }else{
    echo 'It is not Harry';
  }
}

?>

//--------------calling variable from local scope------------------------------


<?php

function hello($name){
  echo "Hello, $name";
}

hello('Harry'); //At this point you give the function some data, in this cake is 'Harry', so this will print to screen Hello, Harry

?> 

//-----------------calling from an array-------------------------------------

<?php

function hello($arr){
if(is_array($arr)){
  foreach($arr as $name){ //$arr as $name assigns each name in the string with the variable of $name
    echo 'Hello, $name, hows it going!<br>';
    } 
  }else{
    echo 'Hello Friends';
  } 
}

$names = array( /*this links to $arr, the name $name doesnt mean anything, its only function is to be called below.
  its only working because thats the only array there, if there was multiple arrays it wouldnt work. No idea why you dont call it globally either*/
  'harry', 
  'Stef', 
  'Aaron'
);

hello($names);

?> 
//-----------------default arguements in fuctions-----------------------------
<?php

function get_info($name, $title = 'friend'){
  echo "$name has arrived, they are with us as a $title"  
} 

get-info('Mike'); //Mike has arrived, they are with us as a friend.

?>

<?php

function get_info($name, $title = null){
  if($title){
    echo "$name has arrived, they are with us as a $title";
  } else{
    echo "$name has arrived, welcome";
  }  
} 

get-info('Mike',/*'friend'*/); /*This will check if there is a name for $title(friend) in the function call, 
which there isnt, so it will return "$name has arrived, welcome"; */ 

?>

//----------------------returning values---------------------------------

<?php
function hello(){
  return 'Hello world';
} 

$greeting = $hello()//call the function

echo $greeting

?>

<?php
function hello($name){
  if{$name == 'Mike';{
    return 'Hello Mike';
  }else{
    return 'Hello stranger';
  }
} 

$greeting = hello('Chris');// this will echo hello stranger because something other than Mike was called.

echo $greeting

?>

<?php// You can also assign 2 values and put them together later on.

function answer(){
  return 42;
} 

function add_up($a, $b){
  return $a + $b;
}

$func='add-up';

$num = $func(5,10); 

echo $num;

?>
//------------------------Array Functions-------------------------------------------

<?php
$names = array(
  'Mike' => 'Frog', //keys and values = mike and frog
  'Chris' => 'Teacher'
  'Hapton' => 'Chris'
);

// foreach (array_keys($names)as $name) { /*This calls each name of the array $name, array_keys is a function that 
//   selects the keys of the array to be echoed. Mike, Chris, Hapton*/
//   echo "Hello, $name <br>";
// }

function print_info($value, $key){
  echo "key is a $value.<br>";
}

array_walk($names, 'print_info');// array walk goes through each key and value and prints them to the screen.
?>
//-----------------------making a calculator-----------------------------------------

<form> 
  <input type="text" name="num1" placeholder="Number 1"> 
  <input type="text" name="num2" placeholder="Number 2">
  <select name="operator">
    <option>None</option>
    <option>Add</option>
    <option>Subtract</option>
    <option>Multiply</option>
    <option>Devide</option>
  </select>  
  <br> 
    <button type="submit" name="submit" value="submit">calculate</button>
<p>the answer is: </p>
  <?php 
    if (isset($_GET['submit'])) {//this block of code checks to see if the calculate button has been clicked and links the imput boxes and operator together. 
      $result1 = $_GET['num1'];
      $result2 = $_GET['num2'];
      $operator = $_GET['operator'];
      
      switch ($operator){
        case "None": 
          echo "You need to select a method!";
        break; 
        case "Add": 
          echo $result1 + $result2;
        break;
        case "Subtract": 
          echo $result1 - $result2;
        break;
        case "Multiply": 
          echo $result1 * $result2;
        break; 
        case "Devide": 
          echo $result1 / $result2;
        break; 
      }
    }
  ?> 
//----------------------------error handling---------------------------------

Fundamental Types of Errors in Software:
1. Internal Errors: These are the logic errors in your code. These errors can be prevented to a very large degree by careful programming.

2. External Errors: These are errors related to the interactions with the world outside your code.
These include things such as failing to open a file or database, dropping the network connection, 
being unable to load a certain PHP module and more. 

You cant always avoid these types of errors , but their impact can be mitigated. The better you prepare your code for these external errors, 
the less these errors will negatively affect your program.

//--------Addressing the Issues---------------------------------------------------------

1. Log or Report the Error: Store errors in a log file and alerts people as they come up.

2. Display the Error: Show errors to a developer and/or user when the program is being executed.

3. Act on the Error: Certain levels, or types of errors can trigger different tasks, such as logging a ticket, sending an email or alerting an on call team.

4. Ignore the Error: DANGER! Ignoring errors can be very dangerous and hard to fix later, so try to avoid this when possible.

//----------Error Levels--------------------------------------------------------------

Error Levels
- Notice: PHPs way off telling you: "You probably shouldn't be doing what you're doing, but I'll let you do it anyway". 
Notice errors will not stop the execution of the script. An example of a notice would be when you try to access an undefined variable. 
Defining a variable before accessing that variable is not required, but it is good practice and could indicate there is something missing.

- Warning: PHPs way off telling you: "You’re doing something wrong and it is very likely to cause errors in the future, so please fix it". 
As with Notice errors, Warning errors will not stop execution of the script. For example: trying to include a file that is missing, or calling 
a function with the incorrect number of parameters would each produce a warning.

- Fatal Error: PHPs way off telling you: "You’ve done something wrong and I don't know how I'm supposed to process this script". 
Fatal errors are caused when PHP encounters a logical error. There is no issue with the syntax and the script is readable, however, 
what you’re asking the script to do cant be done. For example: Dividing by zero, trying to access a function 
that doesn’t exist, or running out of memory. Fatal errors DO stop the execution of the script.

//---------Showing the errors---------------------------------------------------------

There are different locations where we can control what error types are to be reported:

In the php.ini file
In the .htaccess file on your web server
From your own PHP code.


Test server - to test for code erros 
production server - live tpo the world should NEVER display errors

//---------------accessing the .ini file------------------------------------------------

1.when the server is active go to localhost/phpinfo.php 
2. look for the config file php.ini and paste the path into your cammnd line. sudo vi (insert path here).
3. type in on cmd error_reporting =
4. go down to error reporting and set server to E_ALL this with show all errors.
5.Press I to insert(change the code) 
6.display_errors = on
7. display_startup_errors = on 
8.:w to save :q to quit.


//-----------------entering htaccess file---------------------------------------------

1.convert the file to a readable .txt file if necessary from .htaccess. htaccess is a config file for apache.
2. php_flag display_startup_errors on
php_flag display_errors on
php_value error_reporting -1
php_flag html_errors on

//-----------------In the php file itself---------------------------------------------

1.copy this code into the page 

error_reporting(E_ALL);
ini_set("display_errors", 1);
ini_set("html_errors", 1);

2. view the page to see the errors.
3. You can suppress certain lines of code using the @symbol


//--------------------logging----------------------------------------------------

Logging should be set in your ini file, you can change these setting with your htaccess file and some specific php files too.

You can use the ini set function in your php file to set the config options for logging errors. This isnt ideal because it wont log any parse errors.

<?php
// Makes sure we are logging errors
ini_set("log_errors", 1);
// Tell php where to log the errors
ini_set("error_log", "php-error.txt");

$error_levels = array("E_ALL","E_NOTICE","E_STRICT","E_DEPRECATED","E_ERROR","E_WARNING","E_PARSE");

foreach ($errors as $error){
  echo $error."<br />"
}

?>

The better option is using the htaccess file as that will log parse errors. 

# PHP error handling for development servers

# display startup errors
php_flag display_startup_errors On

# display all other errors
php_flag display_errors On

# specify recording of all php errors
php_value error_reporting -1

# html markup of errors, make them easier to readphpmyadmin
php_flag html_errors On

# log errors
php_value log_errors 1 

# log file for errors 
php_value error_log php-error.txt
//-----------------------example of error handling-------------------------------

$first = $_POST['first'];
$last = $_POST['last'];
$email = $_POST['email'];
$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

if (empty($first) || empty($last) || empty($$email) || empty($uid) || empty($pwd)) {
  header ("location: ../index.php?sign-up=empty");
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header ("location: ../index.php?sign-up=invalidemail");
  } else {
    echo "Sign up the user!"
  }
}

//-----------------------Super globals--------------------------------------------

<?php 

$GLOBALS - Allows you to refer to outside the local scope of the function.
$_GET 

<form method="GET">
  <input type="hidden" name="name" value="Harry"> /shows ?name=Harry in url.
  buttom type="submit">PRESS ME</button> 
</form>  

echo $_GET['name']; // This will echo to the screen Harry.

Though this action you are able to post information into the url and use it on another page.

$_POST  

/*Post does something similar to get accept it doesnt show anything in the url which is great for sensative info.
Also post longer more precise data, where at GET is for shorter pieces of info.*/

$_COOKIE

setcookie("name", "harry", time() + 86400); /*"name" is name of actual cookie, the value of the cookie is harry
86400 is the amount of milliseconds it will take to expire which is 24hrs. If you set it as negatove number cookies is deleted 
straigh away.*/

/*Cookies save information on the clients side computer this information isnt dangerous 
in the wrong hands and serves to load up web pages faster. You can also set cookies to last 
for a certain amount of days before seleting themselves.*/

$_SESSION

$_SESSION["name"] = "32"; /*The number 32 could reference someones information number on a server, the number doesnt show to hackers.
/*the name is literally just the name of the session, you can call it anything.*/

/*Session data is stored on the server and this is stuff which is sensative information like personal details. 
Hackers find it harder to get information from a server than somesones personal computer. 
Thats why all big servers have lots of firewall protection.*/

?>
//---------------------------creating a session and remembering session data from page to page------------------------------

<?php
$_SESSION[username] = 'userName';
?>
//enter this to start a php session

<?php
start_session();
?>

//put this at the top of each webpage doc to remember from page to page.

if(!isset($_SESSION[username])){ //first checks if session is set, if not "you are not logged in"
  echo "You are not logged in"
} else{
  echo "You are logged in"
}


//-----------------------build a basic php website------------------------------------------
// php includes
Just like in sass where you have partials, you can do something similar in php to split up the html code using php, these are called includes.
You would create a header.php file with the header coding in and then import it using the code below. uncludes are generally stored in a seporate file named something like inc.
that way you can import the header and footer to muliple files instead of copy and pasting html.

<?php include("inc/header.php"); ?> 
<?php include("inc/footer.php"); ?>

//Adding title tags

$pageTitle = "homepage";

<div class="section page">
  <title><?php echo $pageTitle; ?></title>
</div>

//Adressing webpages correctly so they can be requested from the server
<?php
if(isset($_GET["cat"])) {
  if($_GET["cat"] == "books"){ //This instructs php to $_GET cat=books from the server. 
    $pageTitle = "books";
    $section = "books";
  } else if ($_GET["cat"] == "movies"){
  $pageTitle = "movies";
   $section = "movies";
  } else if ($_GET["cat"] == "music"){
  $pageTitle = "music"; 
  $section = "music";  
} 
?> 

<?php
<ul class="nav">
<li class="books <?php if ($section == "books") {echo " on";} ?>"><a href="books.php?cat=books">Books</a></li>
//add the name extention on the end as shown in the href.

<li class="movies <?php if ($section == "movies") {echo " on";} ?>"><a href="movies.php?cat=movies">Movies</a></li>
<li class="music <?php if ($section == "music") {echo " on";} ?>"><a href="music.php?cat=music">Music</a></li>
<li class="suggest <?php if ($section == "suggest") {echo " on";} ?>"><a href="suggest.php?cat=suggest">Suggest</a></li>
</ul>

?>

//creating active pages(link underlines when on particular page)

1. There is a class that underlines links with a class of 'on'

2. <?php 
  $section = null; //create a variable with a value of null as default no pages are selected.
   ?> 
3. <?php
if(isset($_GET["cat"])) {
  if($_GET["cat"] == "books"){  
    $pageTitle = "books";
    $section = "books";//here you give the $section variable a property for the page you are on.
  } else if ($_GET["cat"] == "movies"){
  $pageTitle = "movies";
   $section = "movies";
  } else if ($_GET["cat"] == "music"){
  $pageTitle = "music"; 
  $section = "music";  
} 
?> 

4. <?php
<li class="books <?php if ($section == "books") {echo " on";} ?>"><a href="books.php?cat=books">Books</a></li>
?>
// give the books class a conditional statement. To check if that section is books, if it is, echo the underline class "on";

5. <?php // to stop errors $section = null needs to be applied to the index page
$section = null;
 ?> 

6. The underline needs to have a starting destination so give one of the pages a variable of $section = pageName; 

//-------------------random array----------------------------------------------

<?php
$random = array_rand($variable,4); /*Give the random variable a name, eg $random, with the function command followed by 2 arguements 
the variable name for the thing you want to make random, and how many things you want to make random*/
  foreach($random as $id){
    echo get_item_html($id, $catolog[$id]);
  }
?>

//--------------------------------Databases-------------------------------------------

//There are two ways of creating a database the first is with the php UI, there other is writting it up using sql.

/*If you generate the database using myadmin UI, you can view the SQL code and how its made. If you want to delete a database you go to databases > 
select db and 'drop'*/

/*when creating tables and rows you can hover over the different datatypes for an explanation of what they are. e.g in = 
interger, char = CHAR or CHAR depending.*/

//For more sql details refer to sql cheatsheet.

//---------------------------------How to connect to a database from website-----------------------------------------

<?php
$dbServername = "localhost" //The server name will be something else if its not a local server.
$dbUsername ="root"; // the default Username for localhost is root, but an external server will be something else. 
$dbPassword = ""; // There may be a password set for the database.
$dbName = "TheDatabaseName"; //the name of the database on the server.

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName); 
?>

//This would be inserted inside a seporate php file to include in your index document: 

<?php
include_once 'includes/connectToDb.php'; 
?>
<!DOCTYPE html>
<head>

</head>
<body>
  $conn;// refers to the database in your code
</body>
</html>

//------------------------------------select data from database in your website--------------------------------------------

<?php
$sql = "SELECT * FROM users;";
$result = mysqli_query($conn, $sql); //queries the connection and the sql statement above.
$resultcheck = mysqli_num_rows($result);  //checks the number of rows in your database from the query.

if($resultcheck > 0){ //if database is above zero rows of conetent, while
  while ($row = mysqli_fetch_assoc($result)){ /*this makes the database spit out every database row and
     assigns an arraw called row to put it into.*/
    echo $row['user_uid'] // echo row, the the brackets you need to specify the data that can be a row number or the row name.
  }
}
?>

//---------------------------------------insert data into databases from website----------------------------------------------------

// php page for entering data.
<?php
include_once 'connect_to_database_php_file_name.php';

$first = $_POST['first'];
$last = $_POST['last'];
$email = $_POST['email'];
$uid = $_POST['uid'];
$pwd = $_POST['pwd'];

$sql = "INSERT INTO users(user_first, user_last, user_email, user_uid, user_pwd) 
        VALUES('$first','$last','$email','$uid','$pwd');";
$result = mysqli_query($conn, $sql); //queries the connection and the sql statement above.
//providing you have a connection to your database you should be able to insert things into it.

header("Location: ../index.php?signup=success");
?>



<form action="includes/signup.php" method="POST">
  <input type="text" name="first" placeholder="firstname">
  <input type="text" name="last" placeholder="lastname">
  <input type="text" name="email" placeholder="E-mail">
  <input type="text" name="uid" placeholder="username">
  <input type="text" name="password" placeholder="password">
  <button type="submit" name="submit">Sign Up</button>
</form>

/*In the event you want to get people to send sign up to, make a form like the one above, set the send method to post,
create an external folder with the 'INSERT INTO' into text in. There are a few other steps but this is usually the back-end 
developers responcibility. */

//-------------------------protect your database from SQL Injections-------------------------------------------

//get harmful code data entered inside the form, and convert it into non-harmful data so it cant make changes to website or database.

<?php
include_once 'connect_to_database_php_file_name.php';

$first = mysqli_real_escape_string($conn, $_POST['first']);
$last = mysqli_real_escape_string($conn,$_POST['last']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$uid = mysqli_real_escape_string($conn, $_POST['uid']);
$pwd = mysqli_real_escape_string($conn,$_POST['pwd']);

$sql = "INSERT INTO users(user_first, user_last, user_email, user_uid, user_pwd) 
        VALUES('$first','$last','$email','$uid','$pwd');";
$result = mysqli_query($conn, $sql); //queries the connection and the sql statement above.
//providing you have a connection to your database you should be able to insert things into it.

header("Location: ../index.php?signup=success");
?>

/*Procedural programming is the act of writing small amounts of code for the specific task at hand.
(OOPHP) programming, is where you create objects which can perform multple tasks at once. */

/*The code below is done using precedural, but the best way to do it is done using objects in OOPHP. 
When typing OOPHP you create the objects seporately and include them into the document your working on to call on them.*/

<?php
$data = 'Admin';
//create a template
$sql ="SELECT * FROM users WHERE user_uid=?;";
//Create a prepared statement
$stmt = mysqli_stmt_init($conn); 
//prepare the prepared statement
if(!mysqli_stmt_prepare($stmt, $sql)) {
  echo "SQL statement failed";
} else {
  //bind perametres to the placeholder
  mysqli_stmt_bind_param($stmt, "s", $data);
  //run parametres inside database
  mysqli_stmt_execute($stmt);
  $result = mysqli_stmt_get_result($stmt);

  while($row = mysqli_fetch_assoc($result)) {
    echo $row['user_uid'] . "<br>";
  }
}

//key to enter data into database changed also 

include_once 'connect_to_database_php_file_name.php';

$first = mysqli_real_escape_string($conn, $_POST['first']);
$last = mysqli_real_escape_string($conn,$_POST['last']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$uid = mysqli_real_escape_string($conn, $_POST['uid']);
$pwd = mysqli_real_escape_string($conn,$_POST['pwd']);

$sql = "INSERT INTO users(user_first, user_last, user_email, user_uid, user_pwd) 
        VALUES(?, ?, ?, ?, ?);";
$stmt = mysqli_stmt_prepare($conn); 
if (!mysqli_stmt_prepare($stmt, $sql)) {
  echo "SQL error";
} else {
  mysqli_stmt_bind_param($stmt, "sssss", $first, $last, $email, $uid, $pwd);
  mysqli_stmt_execute($stmt);
}

header("Location: ../index.php?signup=success");

?>

//-----------------------------learning to hash and dehash using php -----------------------------------

//hashing is the act of encrypting information on your server so if a hacker were to break into your system, you can make the information non readable.
// Salting is the act of adding a random strong of numbers and letters to a pass word to make it harder to pick up.

// <?php

//hashing a password
 echo _"test123";
 echo"<br>"
 echo password_hash("test123", PASSWORD_DEFAULT); //converts password into unreadable text.

//dehashing a password
$input = "test123";
$hashedPwdInDb = password_hash("test123, PASSWORD_DEFAULT"); 

echo password_varify($input, $hashedPwdInDb);

?>


//--------------Inserting data from a database into an array---------------------------------

<?php

$sql - "SELECT * FROM data"; //select all from the database
$result = mysqli_query($conn, $sql); //queried the connection and validation
$allData = array(); //creates an array
if (mysqli_num_rows($result) > 0){ //if the rows in the database are more than 0
  while($row = mysqli_fetch_assoc($result)) { //fetch associated rows in database and assign them as $rows.
    $allData[] = $row;// and put the $row data from the database in the $allData array
  }
}

foreach($allData as $allDataText){ //loops through each part of the array, assigning each part as $allDataText
  echo $allDataText['text']." ";/*current $allDataText is everything including other table rows in database. 
  selecting 'text', selects to echo only text column in the DB. the ." " concatinates spaces inbetween each line.*/
}
?>

//--------------------making an upload image button---------------------------------------
// in the main index file.
<body>
<?php

<form action="upload.php" method="POST" enctype="multipart/form-data">
<input type="file" name="file">
<button type="submit" name="submit">UPLOAD</button>
</form>
 
?>
</body>

//programme the button to work, in seporate php file. create a file where all the images are uploaded too.

<?php
if(isset($_POST['submit'])) {//if you click the submit button....
  $file = $_FILES['file'];//the var $file is the same as the action of uploadinding a file which is $_FILES

  $fileName = $_FILES['file']['name'] //displays the name of the file your going to upload
  $fileTmpName = $_FILES['file']['tmp_name']//uploads a temporary version of the file.
  $fileSize = $_FILES['file']['size']// tells you the files size
  $fileError = $_FILES['file']['error']// if theres an error uploading 
  $fileName = $_FILES['file']['type']// what file format the file is

  $fileExt = explode('.', $fileName);//pairs the name of the file with a . on the end
  $fileActualExt = strtolower(end($fileExt));//followed by the file type so jpg, png, pdf etc.

  $allowed = array('jpg', 'jpeg', 'png', 'pdf');//an array with the accepted file types

  if(in_array($fileActualExt, $allowed)){//if the file in within the specidifed file types, and is less that 1000000kb, upload.
    if($fileError === 0) {
      if($fileSize < 1000000){
        $fileNameNew = uniqid('', true).".".$fileActualExt;// gives the image a code ith a unique identifier
        $fileDestination = 'uploads/'. $filenameNew;// puts the uploaded image into the uploads folder
        move_uploaded_file($fileTmpName, $fileDestination);
        header("Location: index.php?uploadsuccess")//shows a file success page in the php in this case uploadsuccess.
      } else {
        echo 'Your file is too big';
      }
    }
  } else {
    echo 'There was an error uploading this file type!';
  } else {
    echo 'You cannot upload that file type!';
  }
}
?>

/*-------------------------------Other materials from mmtuts-----------------------------------------------------

-uploading profile images to users
-delete profile images 
-how to delete files from a folder
-upload more than one file or image. 
-create a php contact form
-functions using regular expressions 
-search patterns using regular expressions 
-generating unique keys in php 
-removing file extentions and variables from url
-creating a php photo gallery.*/


//-----------------------Object Orientated PHP--------------------------------------------------

/* all php up to this point has been procedural php all instructions are written out at once to produce a certain result,
OOPHP is where you produce a complex set of instructions in a chuck of code called an object. When put together you can make some complex programmes. 

OOPHP is desired by companies too, since its easier to write when different members are involved, and its quicker ro produce the same result as procedural.
OOPHP can also be reused over and over again, medium to large websites use OOPHP small websites with small php functionality require procedural.

3 things you do using php

1.connect or query the database (Model)
2.Get input from the users and generate a responce (Controller)
3. we show db data to the users.(View)

Quick explaination of MVC

//--------------------Model View Controller.---------------------- 

Model is the database portion of a website
View is the client side portion, which people see
Controller is the server. 

View talks to the controller making a request. That request is then translated and carried to a database, the database then sends 
the requested information to the view and the whole process happens again. There are many frameworks for programming languages 
which are designed to minipulate one or all 3. OOPHP does this.*/

//--------------creating a class(each class is kept in a seporate file, inside a folder)------------------------------

<?php

class Person
{//properties and methods goes here
  private $first = "Harry"; // a variable is called a property inside of a class. 
  private $last = "Penfold"; /* When set to private, these variables (properties) are only available inside the class. 
  methods and properties are private by default.*/
  Public $age = "30"; // public is where a variables (properties) are available outside of their class. 
  protected $sex = "male"; //Protected means that a prop or method is available if it used with 'extends' or is within the same class
} 

class pet extends Person {//extends means that the pet class can borrow the props from the Person class
  public function owner() { //a function in a method inside of a class.
    $a = $this->first;/*this is used to access the first property. However it wouldnt work as first is set to private. you would need to set it to
    protected or public for it to work.(as protected would have extends enabled)*/
    return $a;
  }
}
?>


//----------------------------linking properties and methods to your main html page---------------------------------------
//in your file desgned for your object(s)

class Person {
  public $name;// currently these properties dont have values, but you add those later on.  
  public $eyecolor; 
  public $age;

  public function setName($name) {//$name here calls on the $name prop, whic is reference to $this->name = $name;
    $this->name = $name;//this says that the the word 'name' refers to another prop which is also called $name.
  }
} 

//inside the index page 

include 'filefolder/file.php'; // Put your includes at the very top of the document above doctype declaration.
<?php
  $person1 = new Person(); //instantiates the object of Person under the prop of $person1. 
  $person1->setName('Harry'); //Tells to put the name Harry into a prop inside the external objects(s) file.
  echo $person1->name; //echos out the name Harry in the 'name' = $name as displayed above.

  $person2 = new Person();
  $person2->setName('Timmy');// you can call on the object 'Person' multiple times and change the name via setName.
  echo $person2->name;
?>

//------------------------------Constructor and Destructors------------------------------------------
// in objects(s) file

class Person {
  public $name; 
  public $eyecolor; 
  public $age;

  public function __construct($name, $eyecolor, $age) {
    $this->name = $name;
    $this->name = $eyecolor;
    $this->name = $age;
  }

  public function setName($name) {
    $this->name = $name;
  }
} 

/*public function __destruct($name, $eyecolor, $age) { //written identicley to construct, but is used to remove 
  or clean up classes and runs after the object is ran.
  
  $this->name = $name;
  $this->name = $eyecolor;
  $this->name = $age;
*/

/*public function setName($name) { //this is how you would get and return a prop all inside of the same class.
  return this->name;
}*/

//in index.php file 

include 'filefolder/file.php'; // Put your includes at the very top of the document above doctype declaration.
<?php
  $person1 = new Person("Harry", "Brown", 30); //these are reference to the constructor in the objects file.
  echo $person1->name; //So in this case when you echo these it will be "HarryBrown30" as there is no concatination for spacing.
  echo $person1->eyeColor;
  $person1->setName("John");/* Everytime you change the code from here on the new name and the 
  previous name set will still exist so it would read as "HarryBrownJohn30" or something similar.*/
  echo $person1->name;
  echo $person1->age;
?>

//Some people prefer to create props and set the to private and then create a method to return the props if the data is sensative information.


//------------------------------static props and methods--------------------------------------------------

<?php 

class Person {
    private $name;
    private $eyeColor; 
    private $age;

    public static $drinkingAge = 21;/*static means a prop or a method which can be accessed within an object, but isnt actually part of it.
    Its put in the same class simply because in this instance its all related.*/

    public function __construct($name, $eyecolor, $age) {
      $this->name = $name;
      $this->eyeColor = $eyecolor;
      $this->age = $age;
    }

    //methods 
    public function getName($name) {
      $this->name = $name;
    }
 
    public function getName($name) {
      return $this->name;
    }
    public static function setDrinkingAge($setNewDA){// example of a statis method.
      self::$drinkingAge = $setNewDA;// you use self instead of this when refering to a static method or prop.
    }
  }  
  
  // you can access static props from non static props too just refer to your static props as self e.g: 

  public function setNewDA() {
    return self::$drinkingAge;

?>

//accessing static props from your main page

<?php
  echo Person::$drinkingAge;//will echo as 21.
  echo person::$setDrinkingAge(18);//will echo as 18.
?>


//-----------------------Load classes automatically in OOPHP------------------------------------

/*When including files, its much better to structure all your class files into a classes folder using the file extension pagename.class.php.
for each OOPHP file e.g page1.class.php , page2.class.php */

/*Instaed of writting pages of includes you can do it another way, where your index page listens for when an object is instantiated. 
It was called autoload which is not encouraged anymore*/

<?php
    spl_autoload_register('myAutoLoader'); // you can create the function inside the parens, but for demonstrations sake, will create it seporately. 

    function myAutoLoader($classname) {
      $path = "classes/"; 
      $extension = ".class.php"
      $fullPath = $path . $classname. $extension

      if(!file_exists($fullPath)){/* this is an error checking piece of code that slims down the amount of errors 
        in any occur with spelling errors in your index.*/
        return false;
      }

      include_once $fullPath;

    }
?>

//you can put this code into a seporate document and then include it into your insex and it would work exactly the same.


//Namespaces

// For large scale projects you will find folders inside of folders with files in.
// for the autoloader to still work you need to refer to the folder in the top of your document, so at the top of the file write:
<?php
namespace foldername;//refer to the name of the folder the document is in, not the doc itself.
?>

//--------------------------Type declorations--------------------------------------------------

/*Type decloration is the act of naming what kind of datatype your methods are props are, so the program can better understand the tasks your trying to complete.
 datatypes include words like:

 class/interface names
 self(used to reference same class.)
 array 
 callable 
 bool
 float
 int
 string
 iterable
 object
 */

<?php
public function setName(string $newName) {
  /*here we have requested to return the result of this $newName function as a string. 
  many other languages use this kind of output specification such as java and C#*/
  $this->name =$newName;

public function setName(string $newName) {
  $this->name =$newName;  
}
?>

//strict mode
/*Naturally php is a loose language so for example you can convert an int to a string. 
with strict mode turned on it will not allow this, and only allow things to be parsed strictly 
to their datatypes here is how you turn on strict mode*/ 

<?php
declare(strict_types = 1); // put this at the very top of your document. 
?>

//error handling with try and catch 

<?php
try {
$person1->setName(2); //try going into Person1 class and setting the name to 2 and an error will come up saying entry must be a string.
echo $person1->getName();
} catch (TypeError $e) {//This catches the Typerror and gives it a variabale of $e
  echo "Error!: " . $e->getMessage();//this spits out the error message with the word Error!: at the beginning.
}

//the get command is discribed under Getters and setters. Where you can set something as something else or retrieve something and display it.
?>