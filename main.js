"use strict"

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

//creates a single table row
function renderCoffee(coffee) {
    var html = '<div>';
    // html += '' + coffee.id + '';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

//iterates through the coffees array to populate multiple rows
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i>=0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


    var tbody = document.querySelector('#coffees');
    var search = document.querySelector("#coffee");
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');

//renders the string from renderCoffees
tbody.innerHTML = renderCoffees(coffees);
