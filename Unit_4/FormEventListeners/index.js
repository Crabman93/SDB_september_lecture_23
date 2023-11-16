const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = []; // MOCK DATABASE

//console.log(form.name);
//console.log(object.values(form));
//console.log(form[0].placeholder);

// TODO: Event Listener

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log('HIT')

    const animal = {
        species: form.species.value,
        name: form.name.value,
        sex: form.sex.value
    }

    //console.log(animal);
    animals.push(animal);

    form.reset(); // clears the inputs within the form
    form[0].focus(); // targets the first input within the form when it is "new"

    displayTable();
})


// TODO: Display to a table (function)

function displayTable() {
    //console.log('DT: ', animals);

    animals.forEach((animal, i) => {
        //console.log('loop', i, animal);

        while(table.firstChild){
            table.removeChild(table.firstChild);
        }

        //* Create
        let tr = document.createElement('tr'); // will be the parent element for 'td'
        let id = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        //* Assign
        id.textContent = i + 1
        name.textContent = animal.name;
        sex.textContent = animal.sex;
        species.textContent = animal.species;

        //* Append / Set
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })
}