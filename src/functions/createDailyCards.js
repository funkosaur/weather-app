import convertUnixTime from './utility/convertUnixTime';

function createDailyCards(dailyWeatherData) {
  const dailyTemperatureDiv = document.querySelector('.dailyTemperatureDiv');
  const dailyCards = document.createElement('div');
  dailyCards.classList.add('dailyCards');
  dailyTemperatureDiv.appendChild(dailyCards);

  const dailyTitle = document.createElement('div');
  dailyTitle.classList.add('dailyTitle');
}
