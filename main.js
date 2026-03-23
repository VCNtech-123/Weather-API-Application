import { renderCreate } from './utils/render.js';

const searchBar = document.querySelector('.search_bar');
const searchButton = document.querySelector('.search_button');


searchButton.addEventListener('click', () => {
    const search = searchBar.value.trim();
    renderCreate(search);
    searchBar.value = '';
});

searchBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const search = e.target.value.trim();
    
        if (search) {
            renderCreate(search);
            searchBar.value = '';
        }
    }
});


