import brokencloudsd from '../assets/images/broken-clouds.jpg';
import clearskyd from '../assets/images/clear-sky-day.jpg';
import clearskyn from '../assets/images/clear-sky-night.jpg';
import fewcloudsd from '../assets/images/few-clouds-day.jpg';
import fewcloudsn from '../assets/images/few-clouds-night.jpg';
import fogd from '../assets/images/fog-day.jpg';
import fogn from '../assets/images/fog-night.jpg';
import raind from '../assets/images/rain-day.jpg';
import rainn from '../assets/images/rain-night.jpg';
import scatteredcloudsd from '../assets/images/scattered-clouds-day.jpg';
import scatteredcloudsn from '../assets/images/scattered-clouds-night.jpg';
import snowd from '../assets/images/snow-day.jpg';
import snown from '../assets/images/snow-night.jpg';
import thunderstormd from '../assets/images/thunderstorm-day.jpg';
import thunderstormn from '../assets/images/thunderstorm-night.jpg';

function chooseBackground(weatherData) {
  switch (weatherData.current.weather[0].icon) {
    case '01d':
      return clearskyd;
    case '01n':
      return clearskyn;
    case '02d':
      return fewcloudsd;
    case '02n':
      return fewcloudsn;
    case '03d':
      return scatteredcloudsd;
    case '03n':
      return scatteredcloudsn;
    case '04d':
      return brokencloudsd;
    case '04n':
      return scatteredcloudsn;
    case '09d' || '10d':
      return raind;
    case '09n' || '10n':
      return rainn;
    case '11d':
      return thunderstormd;
    case '11n':
      return thunderstormn;
    case '13d':
      return snowd;
    case '13n':
      return snown;
    case '50d':
      return fogd;
    case '50n':
      return fogn;
    default:
      return clearskyd;
  }
}

function changeBackgroundWeather(weatherData) {
  const header = document.querySelector('.headerDiv');
  const iconBackground = chooseBackground(weatherData);
  header.style.background = `url(${iconBackground}) no-repeat center center`;
  header.style.backgroundSize = 'cover';
}

export default changeBackgroundWeather;
