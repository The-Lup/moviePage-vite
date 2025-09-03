import { fetchGenres, fetchFiltered } from '../api/tmdb.js';
import { renderMovies, renderGenres } from '../ui/dom.js';
import { state } from '../state/store.js';

export async function initFilters() {
  const genreSelect = document.getElementById('genre-filter');
  const yearMinInput = document.getElementById('year-min');
  const yearMaxInput = document.getElementById('year-max');
  const applyBtn = document.getElementById('apply-filters');

  const genresData = await fetchGenres(state.type);
  renderGenres(genresData.genres);

  applyBtn.addEventListener('click', async () => {
    state.genreId = genreSelect.value || null;
    state.yearMin = yearMinInput.value || null;
    state.yearMax = yearMaxInput.value || null;
    state.page = 1;

    const data = await fetchFiltered(state);
    renderMovies(data.results, state.type);
    document.getElementById('page-number').textContent = state.page;
  });
}
