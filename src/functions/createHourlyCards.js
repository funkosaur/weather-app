import convertUnixTime from './utility/convertUnixTime';

function createHourlyCards(hourlyWeatherData) {
  const currentHourlyWeather = document.querySelector('.currentHourlyWeather');
  const hourlyCards = document.createElement('div');
  hourlyCards.classList.add('hourlyCards');
  currentHourlyWeather.appendChild(hourlyCards);

  const hourlyTemp = document.createElement('div');
  hourlyTemp.classList.add('hourlyTemp');
  hourlyTemp.textContent = `${Math.floor(hourlyWeatherData.temp)}°`;
  hourlyCards.appendChild(hourlyTemp);

  const hourlyIcon = document.createElement('img');
  hourlyIcon.classList.add('hourlyIcon');
  // Sets the source of the icon to the icons from the openweather api icons
  hourlyIcon.src = `https://openweathermap.org/img/wn/${hourlyWeatherData.weather[0].icon}@2x.png`;
  hourlyCards.appendChild(hourlyIcon);

  const hourlyPercip = document.createElement('div');
  hourlyPercip.classList.add('hourlyPercip');
  hourlyCards.appendChild(hourlyPercip);

  const hourlyPercipSpan = document.createElement('span');
  hourlyPercipSpan.textContent = 'Percip:';
  hourlyPercip.appendChild(hourlyPercipSpan);

  const hourlyPercipSpanPercent = document.createElement('span');
  // Rounding the percipitation number and multiplying by 100  to make it a percentage
  hourlyPercipSpanPercent.textContent = `${Math.floor(
    hourlyWeatherData.pop * 100,
  )}%`;
  hourlyPercip.appendChild(hourlyPercipSpanPercent);

  const hourlyHour = document.createElement('div');
  hourlyHour.classList.add('hourlyHour');
  // converts the unix time to regular time and returns just the hours
  hourlyHour.textContent = convertUnixTime(
    hourlyWeatherData.dt,
  ).convertToHours();
  hourlyCards.appendChild(hourlyHour);
}

export default createHourlyCards;
