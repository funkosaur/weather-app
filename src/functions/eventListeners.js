import getWeatherForLocation from './apiFunctions';
import {
  changeCityTemperature,
  changeCityName,
  changeWeatherIcon,
} from './changeMainWeatherFunctions';

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');

searchButton.addEventListener('click', () => {
  if (searchBar.value === '') {
    return;
  }
  getWeatherForLocation(searchBar.value).then((currentWeatherData) => {
    changeCityTemperature(currentWeatherData);
    changeCityName(currentWeatherData);
    changeWeatherIcon(currentWeatherData);
  });
  searchBar.value = '';
});
