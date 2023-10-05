/* 
    ? While Loops:

    - While loop, loops through a block of code while a specific condition is true.

    Structure:
    while (condition) {
        ...code to run/execute
    }

    - the main purpose for while loops are when the iteration is uncertain.
        -A.K.A we don't know how much content is in the data we are referencing/looping through.
*/

let n = 1;

while ( n < 10 ) {
    console.log(`n before addition, start of loop: ${n}`); //string interpolation
    n++;
    console.log(`n after addition, end of loop: ${n}`);
    console.log('---------------');
}

console.log(`while loop is finished running, final value: ${n}`);

//Use a while loop to create and log a string, pretend online cart

let cartMsg = '';
let z = 0; //zero items in cart

while ( z < 5 ){
    z++;
    cartMsg = `You have ${z} item(s) in your cart!`;
    console.log(cartMsg);
}

console.log(`You have ${z} items in your cart, would you like to check out now?`);

// create a spider man story line with a while loop and an array!
let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
];

let structure = city[0];
//console.log(structure); //building

let pos = 0;
//console.log(city[pos]); //building

console.log('Welcome to the adventures of Spiderman! Looks like there is a thief on the loose!');

while ( structure != "empty street" ){
    console.log(`Spiderman swings from the ${structure} in pursuit of the thief!`);
    pos++;
    structure = city[pos];
    console.log(`Spiderman lands on the ${structure}.`);
    console.log('--------')
}

console.log(`Spiderman lands in the ${structure}! He corners and confronts the thief! Spidey saves the day again!!`);


/* 
    ? Do While Loops
    - Also loop though a block of code while a specified condition is true, but...
        ! loop will run the code block ONCE, Before checking if the condition is true, and will keep running as long as the condition stays true.

        Structure:
        do {
            code to run/execute
        } while (condition)

        - Works just like while loops, with the exception that it will run the code block at least once.
*/

let num = 5;

do {
    console.log(`The number is ${num}.`);
    num++;
} while ( num < 10 )

console.log(`Final total after do while ran: ${num}.`);

// Do code block will run once, even if condition is not true:

let value = 20;

do {
    value *= 2;
    console.log('Do code block is running...')
} while( value > 100 );

console.log(value); //40


// Mock switch a group of accounts from deactivated to active, use a boolean

// Declare and initialize an object called accounts

let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

// Use square bracket notation with the object's property key to get the t/f value
// Want a variable that starts at 1 (acct1, etc...) that we can increment.

let acctNum = 1;

do {
    // Create a log message to prove the account is currently inactive.
    console.log(
        `acct${acctNum} is currently inactive: set to ${accounts[`acct${acctNum}`]}.`
    );

    // Activating message and set acct to true

    console.log('Activating...');
    accounts[`acct${acctNum}`] = true;

    // Confirmation message

    console.log(`acct${acctNum} is currently Active: set to ${accounts[`acct${acctNum}`]}.`);

    // After acct is activated(true), add 1 to acctNum variable to move to next account

    acctNum++;
} while ( accounts[`acct${acctNum}`] == false )

// Process Complete message

console.log('All accounts are active.')
console.table(accounts);