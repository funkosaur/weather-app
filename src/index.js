import './styles/style.scss';
import renderWeather from './functions/eventListeners';

renderWeather('London');

window.addEventListener('load', () => {
  const viewport = document.querySelector('meta[name=viewport]');
  viewport.setAttribute(
    'content',
    `${viewport.content}, height=${window.innerHeight}`,
  );
});
