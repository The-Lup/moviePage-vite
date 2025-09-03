import './style.css';
import { fetchPopulars } from './api/tmdb.js';
import { renderMovies } from './ui/dom.js';
import { state } from './state/store.js';
import { initFilters } from './components/filters.js';
import { initPagination } from './components/pagination.js';
import { initSearch } from './components/search.js';
import { initTypeSelector } from './components/typeselector.js';
import { initModal } from './components/modal.js';

async function init() {
  const data = await fetchPopulars(state.type, state.page);
  renderMovies(data.results, state.type);

  initTypeSelector();
  initFilters();
  initPagination();
  initSearch();
  initModal();
}

init();
