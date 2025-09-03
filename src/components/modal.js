import { fetchItems } from '../api/tmdb.js';

export function initModal() {
  const modal = document.getElementById('movie-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('close-modal');

  async function openModal(id, type) {
    const data = await fetchItems(id, type);
    modalBody.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${
      data.title || data.name
    }">
      <h2>${data.title || data.name}</h2>
      <p><strong>Género:</strong> ${
        data.genres?.map((g) => g.name).join(', ') || 'N/A'
      }</p>
      <p><strong>Año:</strong> ${
        data.release_date?.slice(0, 4) ||
        data.first_air_date?.slice(0, 4) ||
        'N/A'
      }</p>
      <p>${data.overview || 'Sin descripción disponible.'}</p>
    `;
    modal.style.display = 'flex';
  }

  closeBtn.addEventListener('click', () => (modal.style.display = 'none'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  document.getElementById('movie-container').addEventListener('click', (e) => {
    const card = e.target.closest('.movie-card');
    if (!card) return;
    openModal(card.dataset.id, card.dataset.type);
  });
}
