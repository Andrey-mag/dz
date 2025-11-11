'use strict';

function request() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
  req.send();
  req.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);

    if (!data || !data.abilities || !Array.isArray(data.abilities)) {
      throw new Error('Invalid response structure');
    }

    const req1 = new XMLHttpRequest();
    req1.open('GET', data.abilities[0].ability.url);
    req1.send();
    req1.addEventListener('load', function () {
      const data1 = JSON.parse(this.responseText);

      if (
        !data1 ||
        !data1.effect_entries ||
        !Array.isArray(data1.effect_entries)
      ) {
        return;
      }

      const effectEntry = data1.effect_entries.find(
        (item) => item.language.name === 'en'
      );
      if (effectEntry) {
        console.log(effectEntry.effect);
      }
    });
  });
}

request();
