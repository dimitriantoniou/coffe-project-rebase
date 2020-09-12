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


let lightCoffee = [];
for (let i =0;i<coffees.length;i++) {
    if (coffees[i].roast === 'light') {
        lightCoffee.push(coffees[i]);
    }
}
let mediumCoffee = [];
for (let i =0;i<coffees.length;i++) {
    if (coffees[i].roast === 'medium') {
        mediumCoffee.push(coffees[i]);
    }
}
let darkCoffee = [];
for (let i =0;i<coffees.length;i++) {
    if (coffees[i].roast === 'dark') {
        darkCoffee.push(coffees[i]);
    }
}
//iterates through the coffees array to populate multiple rows of coffees
function renderCoffees(coffees) {
    //this is what returns the appropriate content for the coffee list
    //it doesn't print/show the html

    coffees.reverse();//sorts coffees from top
    let html = '';
    if(false){
        }else{
        for (let i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }
}
/*
//functional code to populate coffee lists without separating by roast
for (let i = coffees.length - 1; i >= 0; i--) {
html += renderCoffee(coffees[i]);
}
return html;
}
*/
/*
    //code block is broken; should return list of coffees based on selected roast
    if (submitButton.toString() === 'submit') {
        for (let i = coffees.length - 1; i >= 0; i--) {
            if (roastSelection.toString() === 'all') {
                html += renderCoffee(coffees[i]);
            } else if (roastSelection.toString() === 'light') {
                if (coffees[i].roast === 'light') {
                    html += renderCoffee(coffees[i]);
                }
            } else if (roastSelection.toString() === 'medium') {
                if (coffees[i].roast === 'medium') {
                    html += renderCoffee(coffees[i]);
                }
            } else if (roastSelection.toString() === 'dark') {
                if (coffees[i].roast === 'dark') {
                    html += renderCoffee(coffees[i]);
                }
            }
        }

    }
        return html;
        }
        */

//renders the string from renderCoffees
//this is what actually makes the coffee list show up
tbody.innerHTML = renderCoffees(coffees);

// var tbody = document.querySelector('#coffees');
// var search = document.querySelector("#coffee");
// var submitButton = document.querySelector('#submit');
// let roastSelection = document.querySelector('#roast-selection');