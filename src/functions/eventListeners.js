import getWeatherForLocation from './apiFunctions';

const searchBar = document.querySelector('#searchBar');
const searchButton = document.querySelector('.searchButton');

searchButton.addEventListener('click', () => {
  console.log(searchBar.value);
  if (searchBar.value === '') {
    return;
  }
  getWeatherForLocation(searchBar.value);
  searchBar.value = '';
});

export default searchBar;
