import getWeatherForLocation from './apiFunctions';
import {
  changeCityTemperature,
  changeCityName,
  changeWeatherIcon,
} from './changeMainWeatherFunctions';
import deleteItemsInDiv from './utility/deleteItemsInDiv';
import createHourlyCards from './createHourlyCards';
import createDailyCards from './createDailyCards';
import changeBackgroundWeather from './weatherBackgroundChange';
import { errorHandler, noError } from './errorHandling';

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');
const currentHourlyWeather = document.querySelector('.currentHourlyWeather');
const dailyTemperatureDiv = document.querySelector('.dailyTemperatureDiv');
const temperatureSwitch = document.querySelector('.slider');
const cityName = document.querySelector('#cityName');

function renderWeather(cityValue) {
  // Gets the weather to the given location and renders the whole webpage with that information.
  // Calls all the functions throughout the files to render everything and handle errors
  getWeatherForLocation(cityValue)
    .then((currentWeatherData) => {
      changeBackgroundWeather(currentWeatherData);
      changeCityTemperature(currentWeatherData);
      changeCityName(currentWeatherData);
      changeWeatherIcon(currentWeatherData);
      deleteItemsInDiv(currentHourlyWeather);
      for (let i = 0; i < 24; i += 1) {
        createHourlyCards(currentWeatherData.hourly[i]);
      }
      deleteItemsInDiv(dailyTemperatureDiv);
      for (let i = 1; i < 8; i += 1) {
        createDailyCards(currentWeatherData.daily[i]);
      }
      noError();
    })
    .catch(() => {
      errorHandler();
    });
}

searchButton.addEventListener('click', (e) => {
  // Renders the weather from the location in the search bar
  e.preventDefault();
  if (searchBar.value === '') {
    return;
  }
  renderWeather(searchBar.value);
  searchBar.value = '';
});
temperatureSwitch.addEventListener('click', () => {
  // Renders the weather from the previously searched location
  renderWeather(cityName.textContent);
});

export default renderWeather;
