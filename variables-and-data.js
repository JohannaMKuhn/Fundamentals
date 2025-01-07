/*
 * Variables, Data Types, and Typing
 */
/*Data is info that is generated or retrieved from somewhere
*Variables let us describe and reference data within code
*Console.log prints data to screen - useful in debugging and checking values of variables
* Variables point to data - reference point. Name them descriptively & efficiently
* Declaration - tells langauge variable exists, variables can be declared w/o value - will be set to undefined\
* = >> assignment operator (not = to), declaration contains value of...
 */
let wordData = "Word list";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

/*Data Types - Describe kinds of data in our code - types & functions specific to any given language
 *Js - 6 Major Types: 5 Prim, 1 Comp. - Primitive types are basic building blocks
 * Numbers are not broken into various types in Js.
 * Composites are comprised of several other types - Single comp. type is known as an object
 * Create a variable, curly braces contain Key/Value Pairs - keys reference values within an object.
 * Can nest objects within each other - Access values through initial obj., down to desired value. (obj.obj2.obj2Key1)
 */
let obj = {
    key1: "value1",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value",
    }
}

console.log(obj.key1);

/*Typing Systems - handle data types, Evaluation + Comparison and Conversion
Static or Dynamic: Static - Programmer tells language a variable's type in the code itself. Value must match type.
Compiled languages - Extra step to convert what is typed to what the computer reads.
Dynamic - type of value is determined at runtime, rather than a compile time.
Strong or Weak: How a language converts one type to another when operations are being performed on those values.
Strongly typed languages can't mix types; Js will try to convert 1 type to match type of another.
 */

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

/*
Operators: let us perform mathematical or concatenation operations on our values.
 */
let add = 1+2;
let sub = 2-1;
let mult =2*4;
let division = 4/2;
let mod = 5 % 2;

let  string = "String 1 " + "String 2";

console.log(string);