import { API_KEY, BASE_URL } from './config.js';

async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error en la API');
    return await res.json();
  } catch (err) {
    console.error(err);
    return { results: [] };
  }
}

export async function fetchPopulars(type = 'movie', page = 1) {
  return fetchData(
    `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
  );
}

export async function fetchGenres(type = 'movie') {
  return fetchData(
    `${BASE_URL}/genre/${type}/list?api_key=${API_KEY}&language=es-ES`
  );
}

export async function fetchFiltered({ type, page, genreId, yearMin, yearMax }) {
  let url = `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=es-ES&page=${page}&sort_by=popularity.desc`;
  if (genreId) url += `&with_genres=${genreId}`;
  if (yearMin) url += `&primary_release_date.gte=${yearMin}-01-01`;
  if (yearMax) url += `&primary_release_date.lte=${yearMax}-12-31`;
  return fetchData(url);
}

export async function fetchSearch(query, type = 'movie', page = 1) {
  return fetchData(
    `${BASE_URL}/search/${type}?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(
      query
    )}&page=${page}`
  );
}

export async function fetchItems(id, type = 'movie') {
  return fetchData(
    `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=es-ES`
  );
}
