//! Objects

let marvelHero = {
    fullName: 'Peter Parker',
    codeName: 'Spiderman',
    age: 25,
}

/* 
    * Object Literal
    when our values are written within our keys.
        -hARD cODED

    *Structure

        keyword objectName ={
                key: value,
        }

    * Objects are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        'season one': [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ]
        //'season two': [/*  */]
        //'season three': [/*  */]
    },
    currently_running: true,
}

console.log(theSimpsons.genre); // dot notation
console.log(theSimpsons['genre']); // square bracket notation




