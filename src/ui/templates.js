export function movieCardTemplate(movie, type = 'movie') {
  return `
    <div class="movie-card" data-id="${movie.id}" data-type="${type}">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
    movie.title || movie.name
  }">
      <h3>${movie.title || movie.name}</h3>
      <p>${
        movie.release_date?.slice(0, 4) ||
        movie.first_air_date?.slice(0, 4) ||
        'Sin fecha'
      }</p>
    </div>
  `;
}
