/* 
    - Syntax is on the left side of assignment operator
    - Great for pulling info out of an array and assigning data to it's own variable.
*/

const fullName = ['Jane', 'Doe'];

const fuName = fullName[0];
const laName = fullName[1];

const [firstName, lastName] = fullName;
console.log(firstName, lastName);

console.log(`Hello Mrs. ${lastName}`);


//let obj = {
    //first: 'John',
   // last: 'Doe'
//}

//const { first, last } = obj;

//let database = [{},{},{}];

//let myObj = {
//    last
//}

//database.push(myObj);


//! Spread
/* 
    - Denoted by three consecutive periods: ...
    - Pulls out all elements of an array and gives them to you as a standalone list of elements.

    * concept of the spread operator - NOT syntax

    const fullName = [ 'Rocket', 'Racoon' ];

    ...fullName // 'Rocket', 'Racoon'

    const elements = ...fullName;
*/

const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push('Mrs.');
console.log(fullName, copiedFullName);


const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

//! Rest

const fullName2 = [
    'Jane', 'Doe', 'Mrs.',{month: 3, date: 22, year: 1973}, 'testOne', 2, 'test3', 4, true, false
];

const [fName, lName, ...otherInfo] = fullName2;
console.log(fName);
console.log(lName);
console.log(otherInfo);