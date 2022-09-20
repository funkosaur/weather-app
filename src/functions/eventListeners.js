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

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');
const currentHourlyWeather = document.querySelector('.currentHourlyWeather');
const dailyTemperatureDiv = document.querySelector('.dailyTemperatureDiv');

searchButton.addEventListener('click', () => {
  if (searchBar.value === '') {
    return;
  }
  getWeatherForLocation(searchBar.value).then((currentWeatherData) => {
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
    changeBackgroundWeather(currentWeatherData);
  });
  searchBar.value = '';
});
