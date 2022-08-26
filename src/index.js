async function getLocation(cityName) {
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=24c481fc9b73c68737718db2c14b1211`;
  const response = await fetch(URL);
  const locationData = await response.json();
  return locationData[0];
}

async function getWeatherForLocation() {
  const locationData = await getLocation('london');
  const { lat, lon } = locationData;
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=24c481fc9b73c68737718db2c14b1211`;
  const response = await fetch(URL);
  const weatherData = await response.json();
  weatherData.name = locationData.name;
  weatherData.country = locationData.country;
  console.log(weatherData);
}

getLocation('london,gb');
getWeatherForLocation();
