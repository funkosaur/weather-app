import getWeatherForLocation from './apiFunctions';
import {
  changeCityTemperature,
  changeCityName,
  changeWeatherIcon,
} from './changeMainWeatherFunctions';
import deleteItemsInDiv from './utility/deleteItemsInDiv';
import createHourlyCards from './createHourlyCards';

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');
const currentHourlyWeather = document.querySelector('.currentHourlyWeather');

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
  });
  searchBar.value = '';
});
