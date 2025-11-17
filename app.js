'use strict';

function request() {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
      if (!response.ok) {
        throw new Error('request error');
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !data.abilities || !Array.isArray(data.abilities)) {
        throw new Error('Invalid response structure');
      }

      return fetch(data.abilities[0].ability.url);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('request error');
      }

      return response.json();
    })
    .then((data1) => {
      if (
        !data1 ||
        !data1.effect_entries ||
        !Array.isArray(data1.effect_entries)
      ) {
        throw new Error('Invalid response structure');
      }

      const effectEntry = data1.effect_entries.find(
        (item) => item.language.name === 'en'
      );

      if (effectEntry) {
        console.log(effectEntry.effect);
      }
    })
    .catch((error) => error.message);
}

request();
