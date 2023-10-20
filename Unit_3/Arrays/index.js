/* 
    Array
        -Denoted with square brackets [ ]
        - Indices starts at zero 0
        "length", we can find the sum of data stored.
*/

let list = [ 'Milk', 'Bread', 'Chicken', 'Coffee'];
//              0       1          2        3

console.log(list[2]);
console.log(list.length)

list[0] = 'Chocolate Milk';
console.log(list);

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', [
        'Tony', 8, true
    ]
];

console.log(typeof avengers);
console.log(avengers instanceof Array);




// ! Array Methods
// .push()
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

food.push('Pizza'); //does need some argument to push or add to array. adds to the end of the array.

console.log('PUSH: ', food);

// .Splice(position, how many removed, replace with what
food.splice(1, 1, 'Tacos');
console.log('Splice: ', food);

food.splice(1, 0, 'Steak');
console.log('Splice 2: ', food);

// .pop()
food.pop(); //removes item from the end of the array.
console.log('POP: ', food);

// .shift()
food.shift(); // removes items from the beginning of the array
console.log('SHIFT: ', food);

// .unshift(add item, [optional])
food.unshift('Hamburger', 'Salad');
console.log('UNSHIFT: ', food);

// .toString()
let rgb = ['red', 'green', 'blue'];
console.log(typeof rgb.toString());
console.log(typeof rgb);