// My notes and work from the book 'JavaScript and JQuery: Interactive Front-End Web Development' by Jon Duckett

// 1. Intro
// HTML Elements
// -> describe the structure of content of a page.
// an element = opening tag + content + closing tag
// tags come in pairs; some have one self-closing tag (eg <img>)
// opening tags ----> can have attributes = name + value, usually in quotes

// CSS Rules
// ---> how the contents of one or more elements should be displayed in the browser
// a rule = selector + declaration block
// selector -----> which elements the rule applies to
// declaration block ----> has rules on how those elements will appear
// declaration ----> a property (the aspect to control) + a value (the setting for that property)

// how a browser interprets + styles the HTML code
//  1. receive a page as HTML code
//  2. create a model of the page and store it into memory
//  ---> document object : represents the whole document
//  ----> beneath the document object each box (another obj) is called a NODE
//  3. use a rendering engine to show the page on screen
//  ---> no CSS : the rendering engine applies default styles to html elements
// when we use JavaScript in the browser, the interpreter takes the instructions in JavaScript && translates them to instructions
// JavaScript is an INTERPRETED prog lang

// How HTML, CSS && JavaScript fit together
// !!! Keep the three languages IN SEPARATE FILES w/ the HTML LINKING TO CSS && JavaScript FILES !!!
// CONTENT LAYER : HTML ---> structure + semantics of the page
// PRESENTATION LAYER: CSS ---> rules on how the html content is presented
// BEHAVIOR LAYER: JavaScript ---> add interactivity, keep it IN SEPARATE FILES !!!

// Basic JS
// the html <script> element loads the JS file into the page
// it has an attribute src ---> the path to the script

// the document obj represents the ENTIRE WEB PAGE
// the write() method of the document obj---> write new content where the <script> element is


// 2. Basic JavaScript instructions
// vocabulary
// language rules -> grammar && syntax
// statement --> an instruction || a step , end it w/ ;
// JS is CASE SENSITIVE
/* multi line comments
    example */
// DECLARE A VARIABLE ---> USE A VARIABLE
// variable keyword: var (this is kinda like Scala yay ^^)
// multi word vars names ---> 1st word is lowercase, the other words have 1 letter capitalized
// assign a value : use =


// Data types
// 1. Numbers
// 2. Booleans
// 3. Arrays
// 4. Objects
// 5. Undefined
// 6. Null

// to declare a variable in JS,no need to specify what type of data it will hold (not like Scala)

// Rules for naming variables:
// var names begin w/ : a letter, $ or _ ;var names don't begin w/ a number;
// don't use - or . in var names;
// don't use keywords nor reserved words
// vars are case sensitive
// use a var name that describes the kind of info that var has
// if var name has > 1 word, use lower letter for 1st word and capital 1st letter for each other word

// indexes in array start at 0
// get an element from array ---> use [] ---> eg. some_array[1]
// number of items in an array ---> use the method length
// Operators :
// ---> Arithmetic:
// + , -, /, *, ++ (like in C++), --, %
// ----> String: 'a'+'b'= 'ab'; 2+'a'='2a'; 'a'*'b'=NaN;

// Arrays
// no need to specify number of elements when created 

// Creating an array
// var letters; letters = ['a', 'b', 'd'];
// we can put any type of element in an array (like python)
// array constructor : var letters = new Array ('a', 'b'); we use () brackets to get an element -> letters.item(1);
// numbering items in an array: indexes start at 0 
// accessing items in an array -> like python; someArray[elIndex]
// number of items in an array -> theArray.length;
// arrays are vars -> mutable 

// Expressions
// 1. expressions that assign a val to a var : var aaa = 'aaa'; data type: string
// var aaa; -> data type: undefined
// 2. expressions that use vars to return a single val: var a = 2*4;

// Operators
// Assignment operators : assign a value to a var : var a = 3;
// Arithmetic operators : basic math: var v = 3*3;
// String operators: combine strings like python '2' + '3' = '23';
// Comparison operators: return true or false
// Logical operators: combine expressions , return true or false: a = (2<3) && (4> 7);


// Arithmetic Operators
// 1. addition : 10 + 2 : res = 12 
// 2. substraction : 10 -2 : res=8
// 3. division : 10/2 = 5, 10/3 = 3.33333
// 4. multiplication: 10*2 = 20, 1 * 2.2 = 2.2
// 5. increment: like C++ , i = 10; i++; :i=11
// 6. decrement: like C++, i =10; i--;  : i=9
// 7. modulus : 10%2 = 0

// Order of execution 
// * or /, + or -, unless in ()
// string * string = NaN


// 3. Functions, Methods & Objects
// name the function -> call it afterwards
// anonymous functions -> don't have a name; like lambda in python 
// declaring a function: function functionName (parameter1, parameter2) { return code block; }
// immediately invoked function expressions (iffy)
// anonymous func and iffy are used: 
/* -- As an argument when a function is called to calculate a value for that function
--  To assign the value of a property to an object
--  In event handlers and listeners to perform a task when an event occurs
-- To prevent conflicts between two scripts that might use the same variable names
*/

// Variable Scope
// local vars, global vars 

// How Memory And Vars Work
// a var references a val stored in memory
// more vars -> lot of memory taken -> slower program 

// PROPERTIES are VARS that are a part of an object
// properties : dict; key-value
// HTML uses attribute names and values
// CSS uses property names and values
// In JS :
/* -- vars have a name and we can assign them a val of a string, number or boolean
-- each item in an array is a key-value pair because it has an index and a val
-- named func have a name and a val 
-- objects have a set of name-vals, the names are keys ,like dict

// Creating an object: LITERAL NOTATION
// like objects in Scala -> a dict where the vals are vars and functions, like the testing properties in scala homework 
// access an object -> w/ the [] or . : person['name'] or person.name
// adding and removing properties : we add properties like adding key value in dict in python : var aa = {'a' :1}; aa.new_prop = new_value;

// THIS
// this is a keyword used inside functions and objects, it refers to the object in which the function operates

// Browsers come with a set of BUILT-IN OBJECTS that represent things like the browser window and the current web page shown in that window 
// we can access them w/ the dot notation
// THREE groups of built-in objects:
/*
1. BROWSER OBJECT MODEL creates a model of the browser tab or window;
-- the top obj is the window obj, its child ojbs -> the other browser features :


        WINDOW (current browser window or tab)
        |
        |------DOCUMENT (current web page)
        |------HISTORY (pages in web history)
        |------LOCATION (url of current page)
        |------NAVIGATOR (info bout browser)
        |------SCREEN (device's display info)


2. DOCUMENT OBJECT MODEL creates a model of the current web page;
-- the top obj is the document obj, its child ojbs -> the other items on the page:

        document
           |
         <html>
           |
      _____|____
      |         |
    <head>    <body>
       |        |
    <title>    <div>---attribute
                |
               <p>
                |
               text


3. GLOBAL JAVASCRIPT OBJECTS do not creates a model:

    --String
    --Number
    --Boolean
    --Date
    --Math
    --Regex


*/

// 1. Browser Obj Model , the WINDOW obj
/*
some properties:

window.innerHeight    --- Height of window (excluding browser chrome/user interface) (in pixels)
window.innerWidth     --- Width of window (excluding browser chrome/user interface) (in pixels)
window.pageXOffset    --- Distance document has been scrolled horizontally (in pixels)
window.pageYOffset    --- Distance document has been scrolled vertically (in pixels)
window.screenX        --- X-coordinate of pointer, relative to top left corner of screen (in pixels)
window.screenY        --- Y-coordinate of pointer, relative to top left corner of screen (in pixels)
window.location       --- Current URL of window object (or local file path)
window.document       --- Reference to document object, which is used to represent the current page contained in window
window.history        --- Reference to history object for browser window or tab, which contains details of the pages that have been viewed in that window or tab
window.history.length --- Number of items in hi story object for browser window or tab
window.screen         --- Reference to screen object
window.screen.width   --- Accesses screen object and finds value of its width property (in pixels)
window.screen.height  --- A ccesses screen object and finds value of its height property (in pixels)


some methods:

window.a1ert()  --- Creates dialog box with message (user must click OK button to close it)
window.open()   --- Opens new browser window with URL specified as parameter
window.print()  --- Tells browser that user wants to print contents of current page (acts like user has clicked a print option in the browser's user interface)

*/

// 2. DOM , the DOCUMENT obj
/*
some properties:

document.title         --- Title of current document
document.lastModified  --- Date on which document was last modified
document.URL           --- Returns string containing URL of current document
document.domain        --- Returns domain of current document

some methods:

document.write()            --- Writes text to document
document.getElementByld()   --- Returns element, if there is an element with the value of the id attribute that matches
document.querySelectorAll() --- Returns list of elements that match a CSS selector, which is specified as a parameter
document.createElement()    --- Creates new element
document.createTextNode()   --- Creates new text node

*/

// 3. Global Objects: STRING obj
/*

some methods:

toUpperCase()   --- Changes string to uppercase characters
tolowerCase()   --- Changes string to lowercase characters
charAt()        --- Takes an index number as a parameter, and returns the character found at that position
indexOf()       --- Returns index number of the first time a character or set of characters is found within the string
lastlndexOf()   --- Returns index number of the last time a character or set of characters is found within the string
substring()     --- Returns characters found between two index numbers where the character for the first index number is included and the character for the last index number is not included
split()         --- When a character is specified, it splits the string each time it is found, then stores each individual part ih an array
trim()          --- Removes whitespace from start and end of string
replace()       --- Like find and replace, it takes one value that should be found, and another to replace it (by default, it only replaces the first match it finds)

*/