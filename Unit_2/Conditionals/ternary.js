/* 
    Ternary Conditional Statement
        -Super cool syntax
        - A shortcut for writing an if, if/else, or else, if statement.

*/

//let num = 6; // Yes!
let num = -1; //Nope! Nada!

// Ternary:

(num > 0) ? console.log('yes!') : console.log('nope!');

// Instead of:

if(num > 0){
    console.log('yes!')
}else{
    console.log('nada!')
}

// Ternary with two conditions vs. Else If statement

let x = 1;

//Else if statement
if ( x == 0) {
    console.log("hello");
} else if ( x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Ternary:
(x == 0) ? console.log('Hello!') : (x < 0) ? console.log('Hi!') : console.log('Goodbye!');

// Other way to write ternary
(x == 0) ? console.log('Hello! V2') 
    : (x < 0) ? console.log('Hi! V2') 
        : console.log('Goodbye! V2');