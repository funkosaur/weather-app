import getWeatherForLocation from './apiFunctions';

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');

function changeCityTemperature(weatherData) {
  const mainTemperature = document.querySelector('.currentTemperature');
  const highTemperature = document.querySelector('#highTemp');
  const lowTemperature = document.querySelector('#lowTemp');
  const feelsLikeTemperature = document.querySelector('.feelsLikeDiv');

  console.log(weatherData);

  mainTemperature.textContent = `${Math.floor(weatherData.current.temp)}°`;
  highTemperature.textContent = `High: ${Math.floor(
    weatherData.daily[0].temp.max,
  )}°`;
  lowTemperature.textContent = `Low: ${Math.floor(
    weatherData.daily[0].temp.min,
  )}°`;
  feelsLikeTemperature.textContent = `Feels Like: ${Math.floor(
    weatherData.current.feels_like,
  )}°`;
}

function changeCityName(weatherData) {
  const cityName = document.querySelector('#cityName');
  cityName.textContent = `${weatherData.name}, ${weatherData.country}`;
}

function changeWeatherIcon(weatherData) {
  const weatherIcon = document.querySelector('.weatherIcon');
}

searchButton.addEventListener('click', () => {
  if (searchBar.value === '') {
    return;
  }
  getWeatherForLocation(searchBar.value).then((currentWeatherData) => {
    changeCityTemperature(currentWeatherData);
    changeCityName(currentWeatherData);
  });
  searchBar.value = '';
});
