import { Notify } from 'notiflix/build/notiflix-notify-aio';
import countriesList from '../templates/countries-list.hbs';
import countryCard from '../templates/country-card.hbs';

const ulEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

export function checkName(arrayCountries) {
    if (arrayCountries.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (arrayCountries.length > 2 && arrayCountries.length < 10) {
        divEl.innerHTML = '';
        const markup = countriesList(arrayCountries);
        ulEl.innerHTML = markup;
    } else {
        ulEl.innerHTML = '';
        console.log(arrayCountries);
        const markup = countryCard(arrayCountries);
        console.log(markup);
        divEl.innerHTML = markup;
    }
}