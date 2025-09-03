import { fetchSearch } from '../api/tmdb.js';
import { renderMovies } from '../ui/dom.js';
import { state } from '../state/store.js';
import { debounce } from '../utils/helpers.js';

export function initSearch() {
  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener(
    'input',
    debounce(async () => {
      const query = searchInput.value.trim();
      state.query = query || null;
      state.page = 1;

      if (!state.query) return;

      const data = await fetchSearch(state.query, state.type, state.page);
      renderMovies(data.results, state.type);
      document.getElementById('page-number').textContent = state.page;
    }, 500)
  );
}
