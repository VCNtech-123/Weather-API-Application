import { renderCreate } from './utils/render.js';

const searchBar = document.querySelector('.search_bar');
const searchButton = document.querySelector('.search_button');


searchButton.addEventListener('click', () => {
    const search = searchBar.value;
    renderCreate(search);
});

searchBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const search = e.target.value;

        if (search) renderCreate(search);
    }
});
