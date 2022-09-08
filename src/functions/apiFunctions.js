async function getLocation(cityName) {
  try {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=24c481fc9b73c68737718db2c14b1211`;
    const response = await fetch(URL);
    const locationData = await response.json();
    // Returns the first index of the array of cities given by the API
    return locationData[0];
  } catch (err) {
    console.log(err);
    return false;
  }
}

const tempCheckbox = document.querySelector('#tempCheckbox');

async function getWeatherForLocation(cityName) {
  try {
    const locationData = await getLocation(`${cityName}`);
    // Extracting latitude and longitude from location data to retrieve the weather
    const { lat, lon } = locationData;
    // Check if celsius or farenheit is selected
    const unitType = tempCheckbox.checked ? 'imperial' : 'metric';
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=${unitType}&appid=24c481fc9b73c68737718db2c14b1211`;
    const response = await fetch(URL);
    const weatherData = await response.json();
    // Assigning the name and country to the object because they are not included in the response
    weatherData.name = locationData.name;
    weatherData.country = locationData.country;
    return weatherData;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export default getWeatherForLocation;
