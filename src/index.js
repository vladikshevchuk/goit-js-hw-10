import './css/styles.css';
import debounce from "lodash.debounce";
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

// fetchCountries();

const inputEl = document.querySelector('input');
inputEl.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(evt) {
    const textContent = evt.target.value;

    if (textContent === '') {
        return
    }

    const country = textContent.trim();

    fetchCountries(country);
}