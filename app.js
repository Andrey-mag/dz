'use strict';

function race(array) {
  return new Promise((resolve, reject) => {
    for (const item of array) {
      item.then(resolve).catch(reject);
    }
  });
}
