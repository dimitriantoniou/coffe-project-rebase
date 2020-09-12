"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let sortedCoffees=coffees.reverse();

let tbody = document.querySelector('#coffees');
//returns html element with id #coffees
//returns a div with a table
//sets that html element equal to the variable tbody
let submitButton = document.querySelector('#submit');
//returns html element with with id #submit
//returns the roast selection form
//sets that html element equal to the variable submitButton
let roastSelection = document.querySelector('#roast-selection');
//returns html element with with id #roast-selection
//returns the selection made from the roast selection form
//sets that html element equal to the variable roastSelection
let search = document.querySelector("#coffee");
//returns the html element with the id #coffee
//returns nothing right now - coffee is not used
//sets that equal to the variable search

function renderCoffee(coffee) {
    let html = '<div>';
    // html += '' + coffee.id + '';
    html += '<h2>' + coffee.name + '</h2>';
    //adds a header with the coffee name from var coffees as a table row
    html += '<p>' + coffee.roast + '</p>';
    //adds a paragraph with the coffee roast from var coffee as a table row
    html += '</div>';
    return html;
}


//iterates through the coffees array to populate multiple rows of coffees
function renderCoffees(coffees) {
    //this is what returns the appropriate content for the coffee list
    //it doesn't print/show the html
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//renders the string from renderCoffees
//this is what actually makes the coffee list show up
tbody.innerHTML = renderCoffees(coffees);

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;//retrieve roast from html element retrieved by document.queryselector above
    let filteredCoffees = [];//creates a new array for updated listing
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    //if the roast matches the selected roast, or all has been selected.
    //push the coffee element into the new filtered coffee list
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//looking for roast selection in dropdown to change what is showed
roastSelection.addEventListener('change', updateCoffees);


let searchQuery = function (e) {
    let html = "";
    for (let i = 0; i < sortedCoffees.length; i++) {
        if (sortedCoffees[i].name.toLowerCase().includes(coffeeSearch.value.toLowerCase()) || (sortedCoffees[i].roast.toLowerCase().includes(coffeeSearch.value.toLowerCase()))) {
            html = html + renderCoffee(sortedCoffees[i]);
        }
        //if the search includes any of the names from the coffee lists, set them = the html
        tbody.innerHTML = html;
    }
};
//listen for typing, which allows search box updating
coffeeSearch.addEventListener("keydown", searchQuery);

// var tbody = document.querySelector('#coffees');
// var search = document.querySelector("#coffee");
// var submitButton = document.querySelector('#submit');
// let roastSelection = document.querySelector('#roast-selection');