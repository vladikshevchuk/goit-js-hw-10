import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from "lodash.debounce";
import { fetchCountries } from './js/fetchCountries';
import { checkName } from './js/checkName';

const DEBOUNCE_DELAY = 300;

const ulEl = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

const inputEl = document.querySelector('input');
inputEl.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(evt) {
    const textContent = evt.target.value;

    if (textContent === '') {
        divEl.innerHTML = '';
        ulEl.innerHTML = '';
        return
    }

    const country = textContent.trim();

    fetchCountries(country).then(country => {
        if (country) {
            checkName(country);
        }
    }).catch(error => Notify.failure("Oops, there is no country with that name", error));
}