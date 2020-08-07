"use strict"

/* oriignal function
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
 */
function renderCoffee(coffee) {
    var html = '<h1 class="coffee">';
    html += '<h1>' + coffee.id + '</h1>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<h1>' + coffee.roast + '</h1>';
    html += '</h1>'
}
/*
creates a function renderCoffee that takes in a variable coffee
defines a variable html equal to a table row with class coffee
adds table cells that take the object coffee and assign properties id, name, and roast
    */


function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

/*
defines a function renderCoffees (plural) that takes in the object coffees (plural)
creates a for loop beginning at i that will run as long as the length of coffee-1; after running, decrements by 1
sets html = the output of the function renderCoffee after passing the index i of the object coffees
*/

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
/*
defines a function updateCoffees that takes in object e
declares a variable selectedRoast equal to the property value of the object roastSelection
declares a variable filteredCoffees that is equal to an empty array
creates a for each loop
runs a foreach loop on the array coffees, executing the function on the  coffee element
if the roast attribute of the coffee element is the same type and valye as the selectedRoast
then add the coffee to the filteredCoffees array
 */

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
