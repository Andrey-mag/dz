'use strict';

function getCurrentPositionPromise() {
  return new Promise((resolve, rejected) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        resolve({
          latitude,
          longitude,
        });
      },

      (error) => {
        rejected(error);
      }
    );
  });
}

getCurrentPositionPromise()
  .then((data) => {
    console.log('Position:', data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Request complete');
  });
