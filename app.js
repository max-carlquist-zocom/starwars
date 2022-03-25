// https://swapi.dev/api/people/?search=r2

const form = document.querySelector('form');
const searchStarWarsInput = document.querySelector('#query');
const displayInfoArea = document.querySelector('#info');

form.addEventListener('submit', e => {
    e.preventDefault();
    searchStarWars(searchStarWarsInput.value);
});

const searchStarWars = async term => {
    
    // Search star wars api with fetch
    const data = await fetch(`https://swapi.dev/api/people/?search=${term}`);

    const starWarsData = await data.json();
    displayData(starWarsData);
};

// Display data
const displayData = data => {
    const results = data.results[0];
    
    const toDisplay = `${results.name} and they were born on ${results.birth_year}`;
    displayInfoArea.innerHTML = toDisplay;
};