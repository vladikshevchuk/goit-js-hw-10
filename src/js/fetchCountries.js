export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages
    `).then(response => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      return Promise.reject('error 404');
    } else {
      return Promise.reject('some other error: ' + response.status);
    }
  });
}