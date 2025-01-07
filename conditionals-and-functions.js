/*
 * Conditionals, Functions, Scope and Loops.
 */

//Conditionals - evaluate to true or false - build complex logic, or only execute code upon a condition.
let equals = 1 == "1"; //Standard comparison operator (strong) ===, use == to ignore types.
//console.log(equals);
let greaterThan = 5 > 1;
let lessThan = 2 < 10;
let greaterThanEq = 5 >= 5;
let lessThanEq = 4 <= 9;
let notEquals = 5 !== 2; //only returns true if values are not the same

/*If Block: Control Statement, allows us to control the flow through our program
* Conditional in Parenthesis, as well as result of a Conditional.
* Else-if Statements allow us to append comparisons to the If block. Will need a new comparison.
* An additional else at end, to handle remaining possibilities.
* Else wil ALWAYS execute, if previous comparisons were false.
*/
let storeA = 4.10;
let storeB = 4.10;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
    console.log("Store A has a lower price.")
    } else if (storeB < storeA){
    console.log("Store B has a lower price.")
    } else {
    console.log("Their prices are equal.")
    }
}

//compareStorePrices(10,5);
//compareStorePrices(7,10);

/*Functions: let us encapsulate our code in a way that is reusable; Like variables that contain code.
* Parameters + Code they execute. Parameters let us pass variables into our code. Retain order when calling.
* Need return statement to have function give us a value.
* Functions should be no longer than 20 lines of code, and should only do ONE thing. Doed AND come up describing it?
*/

function squareNum (number) {
     return number * number;
}

let squaredNumber = squareNum(4); //Cleaner, less prone to errors. Cross file and program.
//console.log(squaredNumber);

/*Scope - idea that certain values/variables are only accessible within certain levels of your code.
*Global Scope, Function Scope, Block Scope
*Js is Lexically Scoped - Scope cascades down, can access global scope within functions.
* Variables of the same name declared in function will override global scope variables
* Blocks have their own scope and need to declare/define variables outside of them, cascading gives us access in block.
*/
let x = 10;

function addNumbers (n,m,x) {
    //console.log(x);
    let b;
    if (1===1){
        b = 8;
    }
    //console.log(b);
    return n + m;
}

addNumbers(2,3,8);

/*Arrays: Data Structure (ways to organize pieces of data)
*Special kind of obj., javascript sets Keys for arrays. Can also nest Arrays.
*indexes - reference positions within an array, starting at 0
*Loops repeat certain section of code until a certain condition is met
*Counter; Comparison; Incrementor;
*I is a variable that equals a #, we can use it as an index for our array.
*With < or >, it is up to, not including # you're comparing against. Use = to include said number.
* while loop runs until a conditional is false.
 */
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log("i is equal to: " + i);
    //console.log(ourArray[i]);
   for(let j = 0; j<10; j++){
       //console.log('j is equal to: ' + j);
   }
}

let x = 0;
while (x < 10){ //Easy to create infinite loops.
    console.log('Ran');
    x = x +1;
}
