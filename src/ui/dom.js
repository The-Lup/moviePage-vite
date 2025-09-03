import { movieCardTemplate } from './templates.js';

export function renderMovies(
  movies,
  type = 'movie',
  containerId = 'movie-container'
) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  movies.forEach((movie) => {
    const div = document.createElement('div');
    div.innerHTML = movieCardTemplate(movie, type);
    fragment.appendChild(div.firstElementChild);
  });
  container.appendChild(fragment);
}

export function renderGenres(genres, selectId = 'genre-filter') {
  const genreSelect = document.getElementById(selectId);
  genreSelect.innerHTML = `<option value="">Todos los géneros</option>`;
  genres.forEach((g) => {
    const option = document.createElement('option');
    option.value = g.id;
    option.textContent = g.name;
    genreSelect.appendChild(option);
  });
}
