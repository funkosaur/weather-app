import './styles/style.scss';
import imageDS from './assets/icons/02d.png';
import brokenClouds from './assets/images/clear-sky-day.jpg';
import getWeatherForLocation from './functions/apiFunctions';

const header = document.querySelector('.headerDiv');
header.style.background = `url(${brokenClouds}) no-repeat center center`;
header.style.backgroundSize = 'cover';

const atA = document.querySelector('.weatherIcon');
atA.src = imageDS;

getWeatherForLocation();
