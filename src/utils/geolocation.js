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

export const getDistance = ({
  longitude: lonA = 0,
  latitude: latA = 0
} = {}, {
  longitude: lonB = 0,
  latitude: latB = 0
} = {}) => {
  const p = 0.017453292519943295;
  const c = Math.cos;
  const a = 0.5 - c((latB - latA) * p) / 2 +
    c(latA * p) * c(latB * p) *
    (1 - c((lonB - lonA) * p)) / 2;

  return Math.round((12742 * Math.asin(Math.sqrt(a))) * 100) / 100;
};
