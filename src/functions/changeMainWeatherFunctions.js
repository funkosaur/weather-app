function changeCityTemperature(weatherData) {
  const mainTemperature = document.querySelector('.currentTemperature');
  const highTemperature = document.querySelector('#highTemp');
  const lowTemperature = document.querySelector('#lowTemp');
  const feelsLikeTemperature = document.querySelector('.feelsLikeDiv');

  console.log(weatherData);

  mainTemperature.textContent = `${Math.floor(weatherData.current.temp)}°`;
  highTemperature.textContent = `High: ${Math.floor(
    weatherData.daily[0].temp.max,
  )}°`;
  lowTemperature.textContent = `Low: ${Math.floor(
    weatherData.daily[0].temp.min,
  )}°`;
  feelsLikeTemperature.textContent = `Feels Like: ${Math.floor(
    weatherData.current.feels_like,
  )}°`;
}

function changeCityName(weatherData) {
  const cityName = document.querySelector('#cityName');
  cityName.textContent = `${weatherData.name}, ${weatherData.country}`;
}

function capitalizeEachWordLetter(wordString) {
  return wordString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
}

function changeWeatherIcon(weatherData) {
  const weatherIcon = document.querySelector('.weatherIcon');
  const weatherExplanation = document.querySelector('.weatherExplanation');
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
  const capitalizedWeatherExplanation = capitalizeEachWordLetter(
    weatherData.current.weather[0].description,
  );
  weatherExplanation.textContent = capitalizedWeatherExplanation;
}

export { changeCityTemperature, changeCityName, changeWeatherIcon };
