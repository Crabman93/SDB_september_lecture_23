/* 
    ? Loops

    Loops loop through a block of code a number of times.

    ! If stuck in an accidental infinitely running loop:
        -Ctrl + C, Ctrl + z, red stop button from "code runner"

    ? For Loops
        - Take in 3 parameters(The things within the () of a statement)
            -Initial expression (starting value)
            -condition to be met
            -increment expression

        Structure:
        for (initial expression; condition; increment expression) {
            ...code block of logic to run
        }
*/

// Start at 0 and increase to 10
for ( i = 0; i <= 10; i++ ){
    console.log(i);
}

console.log("finished for loop!")

// Start at 0 increase by 2 to 20
for ( i = 0; i <= 20; i += 2){
    console.log(i);
   // console.log('you get a 50% off coupon!')
}

// Start at 10 and decrease by 1 till we reach 0

for ( i = 10; i >= 0; i --){
    console.log(i)
}

// If using a straight return(one item is returning form a statement): we don't need to use curly brackets.
for ( i = 5; i >= 0; i --) console.log(i);

// Spell out a word letter for letter
let firstName = "Paul";

console.log(firstName.length);

for ( let i = 0; i < firstName.length; i ++){
    console.log(i, firstName[i]);
}

// Change the value of a variable with a for loop

let sum = 0;

console.log(`Sum equals ${sum} before the for loop.`)

for ( let i = 1; i <= 5; i++){
    console.log('Before: ', sum);
    sum += i;
    console.log('After: ', sum);
}

console.log(`Sum equals ${sum} after the for loop.`) // Sum equals 15 after the for loop

/* 
    ? For In Loops

    - Loop through the properties of an object

    Structure:
    for( Key in object ){
        ...code to run
    }

    ^key is a random variable name of our choice. object refers to the variable name of the object we are targeting.
*/

let student = {
    name: 'Harry',
    animal: 'owl',
    degree: 'magic',
    boyWhoLived: true
}

console.log(student.name);
console.log( student['name']);

for ( item in student ){
    console.log(item); // log each key name in the object
    console.log(student[item]); //log each value of each key
}

// Array is considered an object by JS.

let catArray = [
    'tabby',
    'maine coon',
    'rag doll',
    'russian gray'
];

for ( cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

/* 
    For In loops can be used on objects and arrays.
    But if array index order is important, it is better to use a:
        - for loop
        - for of loop
        - Array.forEach()
*/

/* 
    ? for of loops:

    -Loops through the values of an iterable object
        iterable - an object that has iterable properties(stuff it can count/go through)

    Structure:
        for ( variable of iterableData ){
            ...code to execute/run
        }

        ^ Variable is any word we choose to use, iterableData is the name of any iterable "thing"

        Can loop over arrays, strings, etc...

        ! for of loops do not play well with objects (they can't iterate over them).
*/

let dogArray = [
    'Husky',
    'Shih Tzu',
    'corgi',
    'catahoula',
    'Shiba',
    'Golden Retriever',
];

//for( pupper of dogArray){
  //  console.log('For of Loop: ', pupper);
//}

for( doggo of dogArray ){
    // Use an if conditional to make a separate console.log for Husky
    if (doggo === 'Husky') {
        console.log(`I think the ${doggo} is yelling/screaming for his breakfast!`)
    } else if (doggo === 'Shiba'){
        console.log(`The ${doggo} is sitting there judging everyone.`)
    } else {
        console.log(`The ${doggo} is sitting there quietly.`)
    }
}