// ! Iteration Methods
/* 
    - Do not destroy the original array
    - take in a callback function
    - loop through arrays
    - must a return
*/

let fruits = ['apple', 'pear', 'mango', 'orange', 'pineapple'];

const filteredFruit = fruits.filter(fruit => {
    console.log('Parameter: ', fruit)
    let result = fruit !== 'mango';
    console.log('Inside Filter: ', result);
    return result;
});

//console.log(filteredFruit);

let fruit1 = 'pineapple';
//console.log(fruit1[0]);
//console.log(fruit1.includes('apple'))

const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
console.log(filteredFruit2);

// ! .forEach()
let newFoodList = [
    'apple', 'pear', 'mushroom', 'cheese', 'peach'
];

for(let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList)
}

newFoodList.forEach(item => console.log('forEach: ', item));

newFoodList.forEach((item, i) => {
    console.log('For Each:'. item, 'index: ', i);
});


let gameList = ['Dark Souls', 'Dark Souls 2', 'Dark Souls 3', 'Sekiro'];


gameList.forEach(item => console.log(item));

gameList.push( 'Elden Ring' );

gameList.splice(3, 1, 'Bloodborne');

gameList.forEach((item) => console.log('Games: ', item))

//! .find()

let tmnt = [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c == character));

character = 'April';
console.log('Find Again: ', tmnt.find(c => c == character));

character = 'Splinter';
tmnt.find((c,i) => console.log('Index: ', c == character, 'Index: ', i));

//! .map()

let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) {
    numArray.push(i);
}

numArray.map(x => {
    if(x % 15 ===0) {
        fizzBuzzArray.push(x)
    };
});

console.log(fizzBuzzArray);


/*
- First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
        - search something like "arrays", "javascript", "reverse"
        - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];

arr.reverse();
console.log(arr);