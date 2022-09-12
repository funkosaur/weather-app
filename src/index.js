import './styles/style.scss';
import imageDS from './assets/icons/02d.png';
import brokenClouds from './assets/images/scattered-clouds-night.jpg';
import './functions/eventListeners';

const header = document.querySelector('.headerDiv');
header.style.background = `url(${brokenClouds}) no-repeat center center`;
header.style.backgroundSize = 'cover';

const atA = document.querySelector('.weatherIcon');
atA.src = imageDS;
