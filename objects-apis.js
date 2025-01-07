/*Objects, Interfaces, and API's
*OOP = Way to represent data and functionality in an encapsulated way. Easier to rep real world objects.
* State - current data and information that describes the object (Descriptions)
* Functionality - actions or changes object can make to itself or the outside world. (Functions)
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function(){ //Key serves as function name.
        //console.log("Bark!");
    }
}

dog.bark();

/*Interface: Functions signature = its name + its parameters
*Implementation: What the function is doing under the hood (less of a concern, maintain clean code..)
 */
/* Application Programming Interface (API): Interfaces written in the software to be use by
other programmers interacting with the code.
 */
//Passing by Value (copied) vs Reference (points); Objects in Js are passed in by Reference

function x(y) {
    y.num = y.num +5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};


x(y);
console.log(y);