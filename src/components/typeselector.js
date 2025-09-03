import { fetchPopulars, fetchGenres } from '../api/tmdb.js';
import { renderMovies, renderGenres } from '../ui/dom.js';
import { state } from '../state/store.js';

export function initTypeSelector() {
  const typeSelect = document.getElementById('type-select');
  typeSelect.value = state.type;

  typeSelect.addEventListener('change', async () => {
    state.type = typeSelect.value;
    state.page = 1;
    state.query = null;
    state.genreId = null;
    state.yearMin = null;
    state.yearMax = null;

    const genresData = await fetchGenres(state.type);
    renderGenres(genresData.genres);

    const data = await fetchPopulars(state.type, state.page);
    renderMovies(data.results, state.type);
    document.getElementById('page-number').textContent = state.page;
  });
}
