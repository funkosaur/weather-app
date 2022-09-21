const searchBar = document.querySelector('#searchBar');
const errorMessage = document.querySelector('.errorMessage');
const searchButton = document.querySelector('.searchButton');

function errorHandler() {
  searchBar.style.outline = '2px solid red';
  searchButton.style.outline = '2px solid red';
  errorMessage.style.display = 'block';
  errorMessage.classList.add('fadeIn');
}

function noError() {
  searchBar.style.outline = 'none';
  searchButton.style.outline = 'none';
  errorMessage.style.display = 'none';
}

export { errorHandler, noError };
