// FreeCodeCamp.org + Learn JavaScript - Full Course for Beginners

// COURSE CONTENTS
// 0:00:00​ Introduction
// 0:01:24​ Running JavaScript

// 0:04:23​ Comment Your Code
var number = 5; // in-line comment
/* this is a
multi-line comment */
var number = 9;

// 0:05:56​ Declare Variables
// 0:06:15​ Storing Values with the Assignment Operator
/* Data Types: undefined, null, boolean, string, symbol, number and object*/
/*3 ways to declare a variable:*/
1) var myName = "Indre";
myName = 8;
2) let ourName = "freeCodeCamp";
3) const pi = 3.14; //niekada su const nesikeicia duomenys

// 0:11:31​ Initializing Variables with the Assignment Operator
var a = 9;

// 0:11:58​ Uninitialized Variables
/* Initialize these three variables*/
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + "String!";

// 0:12:40​ Case Sensitivity in Variables
/* Declarations*/
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
/* Assignments */
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 0:14:05​ Add Two Numbers
var sum = 10 + 10;
console.log(sum);

// 0:14:34​ Subtract One Number from Another
var difference = 45 - 0;

// 0:14:52​ Multiply Two Numbers
var product = 8 * 10;

// 0:15:12​ Dividing Numbers
var quotient = 66 / 33;

// 0:15:30​ Increment
var myVar = 87;
myVar = myVar + 1; arba myVar++;

// 0:15:58​ Decrement
var myVar = 87;
myVar = myVar - 1; arba myVar--;

// 0:16:22​ Decimal Numbers
var ourDecimal = 8.7;
var myDecimal = 0.009;

// 0:16:48​ Multiply Two Decimals
var product = 2.0 * 2.5;
console.log(product);

// 0:17:18​ Divide Decimals
var product = 4.4 / 2.0;
console.log(product);

//  0:17:33​ Finding a Remainder
var remainder;
remainder = 11 % 3;

// 0:18:22​ Augmented Addition
var a = 3;
var b = 17;
var c = 12;
a = a + 12; arba a += 12;
b = 9 + b; arba b += 9;
c = c + 7; arba c += 7;

// 0:19:22​ Augmented Subtraction
var a = 33;
var b = 117;
var c = 122;
a = a - 6; arba a -= 6;
b = b - 15; arba b -= 15;
c = c - 1; arba c -= 1;

// 0:20:18​ Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;
a = a * 5; arba a *= 5;
b = 3 * b; arba b *= 3;
c = c * 10; arba c *= 10;

// 0:20:51​ Augmented Division
var a = 48;
var b = 108;
var c = 33;
a = a / 12; arba a /= 12;
b = b / 4; arba b /= 4;
c = c / 11; arba c /= 11;

// 0:21:19​ Declare String Variables
var firstName = "Alan";
var lastName = "Turing"

// 0:22:01​ Escaping Literal Quotes
var myStr = "I am a \"double quated\" string inside \"double quotes\"";
console.log(myStr);

// 0:23:44​ Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank>Link</a>';
var myStr = `'<a href="http://www.example.com" target="_blank>Link</a>'`;

// 0:25:18​ Escape Sequences
/*****
 * CODE OUTPUT
 * \' single quote
 * \" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 *****/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr);

// 0:26:46​ Plus Operator
/*Example*/
var ourStr = "I come first." + "I come second.";
console.log(ourStr);

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// 0:27:49​ Plus Equals Operator
/*Example*/
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

var myStr = "This is the first sentence. "
myStr += "This is the second sentence.";
console.log(myStr);

// 0:29:01​ Constructing Strings with Variables
/*Example*/
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

var myName = "Indre";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// 0:30:14​ Appending Variables to Strings
/*Example*/
var anAdjective = "awesome!";
var ourStr = "freecodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

var someAdjective = "worthwhile.";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// 0:31:11​ Length of a String
/*Example*/
var firstNameLenght = 0;
var firstName = "Indre";
firstNameLenght = firstName.length;
console.log(firstNameLenght);

var lastNameLenght;
var lastName = "lovelace";
lastNameLenght = lastName.length;
console.log(lastNameLenght);

// 0:32:01​ Bracket Notation
/*Example*/
var firstLetterOfFirstname = "";
var firstName = "Indre";
firstLetterOfFirstname = firstName[0];
console.log(firstLetterOfFirstname);

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[1];
console.log(firstLetterOfLastName);

// 0:33:27​ Understand String Immutability
var myStr = "Jello World";
myStr[0] = "H"; // Tokiu budu negalime pakeisti raides.
myStr = "Hello World"; // Pakeis
console.log(myStr);

// 0:34:23​ Find the Nth Character
/*Example*/
var firstName = "Indre";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// 0:34:51​ Find the Last Character
/*Example*/
var firstName = "Indre";
var lastLetterOfFirstName = firstName[firstName.lenght - 2];
console.log(lastLetterOfFirstName);

// 0:35:48​ Find the Nth-to-Last Character
/*Example*/
var firstName = "Indre";
var thirdLetterOfFirstName = firstName[firstName.lenght - 3];
console.log(thirdLetterOfFirstName);

var lastName = "Lovelace";
var secondLetterOfLastName = lastName[lastName.lenght - 2];
console.log(secondLetterOfLastName);

// 0:36:28​ Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// 0:40:44​ Store Multiple Values with Arrays
/*Example*/
var ourArray = ["Indre", 32];
var myArray = ["Quincy", 1];

// 0:41:43​ Nest Arrays
/*Example*/
var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["Bulls", 23], ["White Sox", 45]];

// 0:42:33​ Access Array Data with Indexes
/*Example*/
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //equals 50
console.log(ourData);

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

// 0:43:34​ Modify Array Data with Indexes
/*Example*/
var ourArray = [18, 64, 99];
ourArray[1] = 45; //ourArray now equals [18,45,99]
console.log(ourArray);

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

// 0:44:48​ Access Multi-Dimensional Arrays with Indexes
/*Example*/
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[3][2];
console.log(myData);

// 0:46:30​ Manipulate Arrays with push()
/*Example*/
var ourArray = ["Stimson", "J", "cat"];
ourArray.push(["happy", "joy"]);
//ourArray now equals ["Stimson", "J", "cat", ["happy", "joy"] ];
/*Example*/
console.log(ourArray);

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);

// 0:47:29​ Manipulate Arrays with pop()
/*Example*/
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop(); //removed last number, it is 3
//removedFromOurArray now equals 3, and ourArray now equals [1,2]
console.log(ourArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

// 0:48:33​ Manipulate Arrays with shift()
/*Example*/
var ourArray = ["Stimson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(); // removed first array "Stimson"
console.log(removedFromOurArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

// 0:49:23​ Manipulate Arrays with unshift()
/*Example*/
var ourArray = ["Stimson", "J", ["cat"]];
ourArray.shift(); //ourArray now equals ["J","cat"]
ourArray.unshift("happy"); ////ourArray now equals ["happy","J","cat"]
console.log(ourArray);

var myArray = [["John", 23], ["cat", 2]];
myArray.shift();
myArray.unshift(["Paul", 25]);
console.log(myArray);

// 0:50:36​ Shopping List
/*Example*/
var myList = [["cereal", 3], ["milk", 2], ["bannanas", 3], ["juice", 2], ["eggs", 12]];

// 0:51:41​ Write Reusable Code with Functions
/*Example*/
function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// 0:53:41​ Passing Values to Functions with Arguments
/*Example*/
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); //outputs 5

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5); //output 15

// 0:55:43​ Global Scope and Functions

var myGlobal = 10; // Global scope

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// 0:59:31​ Local Scope and Functions
function myLocalScope() {
    var myVar = 5; // Matoma tik sitoje funcijoje
    console.log(myVar);
}
myLocalScope();

console.log(myVar); //delete

// 1:00:46​ Global vs Local Scope in Functions

var outerWear = "T-Shirt"; /*Global variable*/
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// 1:02:40​ Return a Value from a Function
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));

// 1:03:55​ Understanding Undefined Value returned from a Function
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}
console.log(addFive);

// 1:04:52​ Assignment with a Returned Value
var changed = 0;
function change(num) {
    return (num + 5) / 3
}
changed = change(10);

var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

// 1:05:52​ Stand in Line
function nextInLine(arr, item) {

    return item;
}
var testArr = [1,2,3,4,5]

// 1:08:41​ Boolean Values
/*Example*/
console.log();

// 1:09:24​ If Statements
/*Example*/
console.log();

// 1:11:51​ Equality Operator
/*Example*/
console.log();

// 1:13:18​ Strict Equality Operator
/*Example*/
console.log();

// 1:14:43​ Comparing different values
/*Example*/
console.log();

// 1:15:38​ Inequality Operator
/*Example*/
console.log();

// 1:16:20​ Strict Inequality Operator
/*Example*/
console.log();

// 1:17:05​ Greater Than Operator
/*Example*/
console.log();

// 1:17:39​ Greater Than Or Equal To Operator
/*Example*/
console.log();

// 1:18:09​ Less Than Operator
/*Example*/
console.log();

// 1:18:44​ Less Than Or Equal To Operator
/*Example*/
console.log();

// 1:19:17​ And Operator
/*Example*/
console.log();

// 1:20:41​ Or Operator
/*Example*/
console.log();

// 1:21:37​ Else Statements
/*Example*/
console.log();

// 1:22:27​ Else If Statements
/*Example*/
console.log();

// 1:23:30​ Logical Order in If Else Statements
/*Example*/
console.log();

// 1:24:45​ Chaining If Else Statements
/*Example*/
console.log();

// 1:27:45​ Golf Code
/*Example*/
console.log();

// 1:32:15​ Switch Statements
/*Example*/
console.log();

// 1:35:46​ Default Option in Switch Statements
/*Example*/
console.log();

// 1:37:23​ Identical Options in Switch Statements
/*Example*/
console.log();

//  1:39:20​ Replacing If Else Chains with Switch
/*Example*/
console.log();

// 1:41:11​ Returning Boolean Values from Functions
/*Example*/
console.log();

// 1:42:20​ Return Early Pattern for Functions
/*Example*/
console.log();

// 1:43:38​ Counting Cards
/*Example*/
console.log();

// 1:49:11​ Build Objects
/*Example*/
console.log();

// 1:50:46​ Dot Notation
/*Example*/
console.log();

// 1:51:33​ Bracket Notation
/*Example*/
console.log();

// 1:52:47​ Variables
/*Example*/
console.log();

// 1:53:34​ Updating Object Properties
/*Example*/
console.log();

// 1:54:30​ Add New Properties to Object
/*Example*/
console.log();

// 1:55:19​ Delete Properties from Object
/*Example*/
console.log();

// 1:55:54​ Objects for Lookups
/*Example*/
console.log();

// 1:57:43​ Testing Objects for Properties
/*Example*/
console.log();

// 1:59:15​ Manipulating Complex Objects
/*Example*/
console.log();

// 2:01:00​ Nested Objects
/*Example*/
console.log();

// 2:01:53​ Nested Arrays
/*Example*/
console.log();

// 2:03:06​ Record Collection
/*Example*/
console.log();

// 2:10:15​ While Loops
/*Example*/
console.log();

// 2:11:35​ For Loops
/*Example*/
console.log();

// 2:13:56​ Odd Numbers With a For Loop
/*Example*/
console.log();

// 2:15:28​ Count Backwards With a For Loop
/*Example*/
console.log();

// 2:17:08​ Iterate Through an Array with a For Loop
/*Example*/
console.log();

// 2:19:43​ Nesting For Loops
/*Example*/
console.log();

// 2:22:45​ Do...While Loops
/*Example*/
console.log();

// 2:24:12​ Profile Lookup
/*Example*/
console.log();

// 2:28:18​ Random Fractions
/*Example*/
console.log();

// 2:28:54​ Random Whole Numbers
/*Example*/
console.log();

// 2:30:21​ Random Whole Numbers within a Range
/*Example*/
console.log();

// 2:31:46​ parseInt Function
/*Example*/
console.log();

// 2:32:36​ parseInt Function with a Radix
/*Example*/
console.log();

// 2:33:29​ Ternary Operator
/*Example*/
console.log();

// 2:34:57​ Multiple Ternary Operators
/*Example*/
console.log();

// 2:36:57​ var vs let
/*Example*/
console.log();

// 2:39:02​ var vs let scopes
/*Example*/
console.log();

// 2:41:32​ const Keyword
/*Example*/
console.log();

// 2:43:40​ Mutate an Array Declared with const
/*Example*/
console.log();

// 2:44:52​ Prevent Object Mutation
/*Example*/
console.log();

// 2:47:17​ Arrow Functions
/*Example*/
console.log();

// 2:28:24​ Arrow Functions with Parameters

// 2:49:27​ Higher Order Arrow Functions

// 2:53:04​ Default Parameters

// 2:54:00​ Rest Operator

// 2:55:31​ Spread Operator

// 2:57:18​ Destructuring Assignment: Objects

// 3:00:18​ Destructuring Assignment: Nested Objects

// 3:01:55​ Destructuring Assignment: Arrays

// 3:03:40​ Destructuring Assignment with Rest Operator to Reassign Array

// 3:05:05​ Destructuring Assignment to Pass an Object

// 3:06:39​ Template Literals

// 3:10:43​ Simple Fields

// 3:12:24​ Declarative Functions

// 3:12:56​ class Syntax

// 3:15:11​ getters and setters

// 3:20:25​ import vs require

// 3:22:33​ export

// 3:23:40​ * to Import

// 3:24:50​ export default

// 3:25:26​ Import a Default Export

