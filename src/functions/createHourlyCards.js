import convertUnixTime from './utility/convertUnixTime';

function createHourlyCards(hourlyWeatherData) {
  const currentHourlyWeather = document.querySelector('.currentHourlyWeather');
  const hourlyCards = document.createElement('div');
  hourlyCards.classList.add('hourlyCards');
  currentHourlyWeather.appendChild(hourlyCards);

  const hourlyTemp = document.createElement('div');
  hourlyTemp.classList.add('hourlyTemp');
  hourlyTemp.textContent = Math.floor(hourlyWeatherData.temp);
  hourlyCards.appendChild(hourlyTemp);

  const hourlyIcon = document.createElement('img');
  hourlyIcon.classList.add('hourlyIcon');
  hourlyIcon.src = `https://openweathermap.org/img/wn/${hourlyWeatherData.weather[0].icon}@2x.png`;
  hourlyCards.appendChild(hourlyIcon);

  const hourlyPercip = document.createElement('div');
  hourlyPercip.classList.add('hourlyPercip');
  hourlyPercip.textContent = `${Math.floor(hourlyWeatherData.pop * 100)}%`;
  hourlyCards.appendChild(hourlyPercip);

  const hourlyHour = document.createElement('div');
  hourlyHour.classList.add('hourlyHour');
  hourlyHour.textContent = convertUnixTime(
    hourlyWeatherData.dt,
  ).convertToHours();
  hourlyCards.appendChild(hourlyHour);
}

export default createHourlyCards;
