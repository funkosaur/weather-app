import convertUnixTime from './utility/convertUnixTime';

function createDailyCards(dailyWeatherData) {
  const dailyTemperatureDiv = document.querySelector('.dailyTemperatureDiv');
  const dailyCards = document.createElement('div');
  dailyCards.classList.add('dailyCards');
  dailyTemperatureDiv.appendChild(dailyCards);

  const dailyForecast = document.createElement('div');
  dailyForecast.classList.add('dailyTitle');
  dailyCards.appendChild(dailyForecast);

  const dailyDetails = document.createElement('div');
  dailyDetails.classList.add('dailyDetails');
  dailyCards.appendChild(dailyDetails);
}
