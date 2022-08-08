import MoviesSerch from './js/api-movies';
import gallary from './templates/gallary-card.hbs';

const movies = new MoviesSerch();
const form = document.querySelector('form');
const gallaryEl = document.querySelector('.gallary');

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  movies.query = event.currentTarget.elements.search_movie.value;
  try {
    responseSearch();
  } catch {
    console.log('ERROR!');
  }
}

function responseSearch() {
  const promise = movies.bestMoviesSerch();

  promise.then(results => {
    const paramMovies = results.data.results;
    console.log(paramMovies);
    renderMovies(paramMovies);
  });
}

function renderMovies(results) {
  const event = gallary(results);
  gallaryEl.innerHTML = event;
}
