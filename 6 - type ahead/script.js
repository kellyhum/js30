/**
 * script.js
 * main animation code for the type ahead project
 */

//JSON file that contains the location data
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//Empty array
const cities = [];

//Converts JSON data into array 
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

//Function that finds matches based on what user types into search box
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //figure out if city/state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

//Function that adds commas between population numbers
function numberwithCommas(s) {
    return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//Function that displays the matches onscreen
function displayMatches() {
    const matchArray =  findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="name">${numberwithCommas(place.population)}</span>
            </li>
        `
    }).join('');

    suggestions.innerHTML = html;
}

//Selects HTML elements
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//When even happens, show the matches
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);