import { writable } from 'svelte/store';


export const favoriteCats = writable(
    JSON.parse(localStorage.getItem('favoriteCats') || '[]')
);


favoriteCats.subscribe((favorites) => {
    localStorage.setItem('favoriteCats', JSON.stringify(favorites));
});
