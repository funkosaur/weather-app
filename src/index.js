import './styles/style.scss';
import imageDS from './assets/icons/02d.png';

const atA = document.querySelector('.weatherIcon');
atA.src = imageDS;

async function getLocation(cityName) {
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=24c481fc9b73c68737718db2c14b1211`;
  const response = await fetch(URL);
  const locationData = await response.json();
  // Returns the first index of the array of cities given by the API
  return locationData[0];
}

async function getWeatherForLocation() {
  const locationData = await getLocation('london');
  // Extracting latitude and longitude from location data to retrieve the weather
  const { lat, lon } = locationData;
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=24c481fc9b73c68737718db2c14b1211`;
  const response = await fetch(URL);
  const weatherData = await response.json();
  // Assigning the name and country to the object because they are not included in the response
  weatherData.name = locationData.name;
  weatherData.country = locationData.country;
  return weatherData;
}

getLocation('london,gb');
getWeatherForLocation();
