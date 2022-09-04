import getWeatherForLocation from './apiFunctions';

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');

function changeCityTemperature(weatherData) {
  const mainTemperature = document.querySelector('.currentTemperature');
  const highTemperature = document.querySelector('#highTemp');
  const lowTemperature = document.querySelector('#lowTemp');
  const feelsLikeTemperature = document.querySelector('.feelsLikeDiv');

  console.log(weatherData);

  mainTemperature.textContent = `${weatherData.current.temp / 1}°`;
}

searchButton.addEventListener('click', () => {
  if (searchBar.value === '') {
    return;
  }
  getWeatherForLocation(searchBar.value).then((currentWeatherData) => {
    changeCityTemperature(currentWeatherData);
  });
  searchBar.value = '';
});
