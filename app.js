'use strict';

const array = [1, 2, 3];

async function race(array) {
  return new Promise((resolve, reject) => {
    for (const item of array) {
      item.then(resolve).catch(reject);
    }
  });
}
