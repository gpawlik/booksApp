export const getGeolocation = ({
  enableHighAccuracy = false,
  timeout = 60000,
  maximumAge = 1000
} = {}) => {
  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {
        enableHighAccuracy,
        timeout,
        maximumAge
      });
  });
};
