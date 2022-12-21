import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import countriesList from '../templates/countries-list.hbs';
const ulEl = document.querySelector('.country-list');

export function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages
    `).then(response => {
        return response.json();
    }).then(country => {
        // console.log(country);
        checkName(country)
    }).catch(error => {
        console.log(error);
    })
}

function checkName(arrayCountries) {
    if (arrayCountries.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (arrayCountries.length > 2 && arrayCountries.length < 10) {
        console.log(arrayCountries);
        // const markup = countriesList(arrayCountries);
        // console.log(markup);

// ЕСЛИ РАЗКОМЕНТИТЬ ИМПОРТ И ДВЕ СТРОЧКИ ВЫШЕ, БУДЕТ ОШИБКА

        // ulEl.insertAdjacentHTML('beforend', markup);
    } else {
        console.log(arrayCountries);
    }
}

const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
