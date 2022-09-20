import convertUnixTime from './utility/convertUnixTime';

const d2d = require('degrees-to-direction');

function createDailyCards(dailyWeatherData) {
  const dailyTemperatureDiv = document.querySelector('.dailyTemperatureDiv');
  const dailyCards = document.createElement('div');
  dailyCards.classList.add('dailyCards');
  dailyTemperatureDiv.appendChild(dailyCards);

  const dailyForecast = document.createElement('div');
  dailyForecast.classList.add('dailyTitle');
  dailyCards.appendChild(dailyForecast);

  const dayAndForecast = document.createElement('div');
  dayAndForecast.classList.add('dayAndForecast');
  dailyForecast.appendChild(dayAndForecast);

  const daySpan = document.createElement('span');
  daySpan.textContent = convertUnixTime(dailyWeatherData.dt).convertToDays();
  dayAndForecast.appendChild(daySpan);

  const forecastSpan = document.createElement('span');
  forecastSpan.textContent = `${dailyWeatherData.weather[0].description}`;
  dayAndForecast.appendChild(forecastSpan);

  const iconAndTemperature = document.createElement('div');
  iconAndTemperature.classList.add('iconAndTemperature');
  dailyForecast.appendChild(iconAndTemperature);

  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('weatherIcon');
  weatherIcon.src = `https://openweathermap.org/img/wn/${dailyWeatherData.weather[0].icon}@2x.png`;
  iconAndTemperature.appendChild(weatherIcon);

  const highAndLowTemp = document.createElement('div');
  highAndLowTemp.classList.add('highAndLowTemp');
  iconAndTemperature.appendChild(highAndLowTemp);

  const highTempSpan = document.createElement('span');
  highTempSpan.textContent = `${Math.round(dailyWeatherData.temp.max)}°`;
  highAndLowTemp.appendChild(highTempSpan);

  const lowTempSpan = document.createElement('span');
  lowTempSpan.textContent = `${Math.round(dailyWeatherData.temp.min)}°`;
  highAndLowTemp.appendChild(lowTempSpan);

  const dailyDetails = document.createElement('ul');
  dailyDetails.classList.add('dailyDetails');
  dailyCards.appendChild(dailyDetails);

  const precipitationDiv = document.createElement('li');
  precipitationDiv.classList.add('precipitationDiv');
  dailyDetails.appendChild(precipitationDiv);

  const precipitationTitle = document.createElement('span');
  precipitationTitle.textContent = 'Precipitation:';
  precipitationDiv.appendChild(precipitationTitle);

  const precipitationPercentage = document.createElement('span');
  precipitationPercentage.textContent = `${Math.floor(
    dailyWeatherData.pop * 100,
  )}%`;
  precipitationDiv.appendChild(precipitationPercentage);

  const windDiv = document.createElement('li');
  windDiv.classList.add('windDiv');
  dailyDetails.appendChild(windDiv);

  const windTitle = document.createElement('span');
  windTitle.textContent = 'Wind:';
  windDiv.appendChild(windTitle);

  const windPercentage = document.createElement('span');
  windPercentage.textContent = `${dailyWeatherData.wind_speed} km/h ${d2d(
    dailyWeatherData.wind_deg,
  )}`;
  windDiv.appendChild(windPercentage);

  const humidityDiv = document.createElement('li');
  humidityDiv.classList.add('humidityDiv');
  dailyDetails.appendChild(humidityDiv);

  const humidityTitle = document.createElement('span');
  humidityTitle.textContent = 'Humidity:';
  humidityDiv.appendChild(humidityTitle);

  const humidityPercentage = document.createElement('span');
  humidityPercentage.textContent = `${dailyWeatherData.humidity}%`;
  humidityDiv.appendChild(humidityPercentage);

  const uvIndexDiv = document.createElement('li');
  uvIndexDiv.classList.add('uvIndexDiv');
  dailyDetails.appendChild(uvIndexDiv);

  const uvIndexTitle = document.createElement('span');
  uvIndexTitle.textContent = 'UV Index';
  uvIndexDiv.appendChild(uvIndexTitle);

  const uvIndex = document.createElement('span');
  uvIndex.textContent = `${dailyWeatherData.uvi}`;
  uvIndexDiv.appendChild(uvIndex);

  const sunriseSunsetDiv = document.createElement('li');
  sunriseSunsetDiv.classList.add('sunriseSunset');
  dailyDetails.appendChild(sunriseSunsetDiv);

  const sunriseSunsetTitle = document.createElement('span');
  sunriseSunsetTitle.textContent = 'Sunrise/Sunset';
  sunriseSunsetDiv.appendChild(sunriseSunsetTitle);

  const sunriseSunset = document.createElement('span');
  sunriseSunset.textContent = `${convertUnixTime(
    dailyWeatherData.sunrise,
  ).convertToHours()}/${convertUnixTime(
    dailyWeatherData.sunset,
  ).convertToHours()}`;
  sunriseSunsetDiv.appendChild(sunriseSunset);
}

export default createDailyCards;
