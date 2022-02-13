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
// number of items in an array ---> use the method .lenght