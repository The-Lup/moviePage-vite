import { fetchPopulars, fetchFiltered, fetchSearch } from '../api/tmdb.js';
import { renderMovies } from '../ui/dom.js';
import { state } from '../state/store.js';

export function initPagination() {
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  const pageNum = document.getElementById('page-number');

  async function loadPage() {
    let data;
    if (state.query) {
      data = await fetchSearch(state.query, state.type, state.page);
    } else if (state.genreId || state.yearMin || state.yearMax) {
      data = await fetchFiltered(state);
    } else {
      data = await fetchPopulars(state.type, state.page);
    }
    renderMovies(data.results, state.type);
    pageNum.textContent = state.page;
  }

  prevBtn.addEventListener('click', () => {
    if (state.page > 1) {
      state.page--;
      loadPage();
    }
  });

  nextBtn.addEventListener('click', () => {
    state.page++;
    loadPage();
  });
}
