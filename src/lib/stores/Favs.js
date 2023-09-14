import { writable } from 'svelte/store';

/**
 * @typedef {object} Product
 * @property {string} sku
 */

/**
 * @typedef {Product} Fav
 */

/**
 * @type {import('svelte/store').Writable<Fav[]>}
 */
export const favorites = writable([]);

// Initialize favorites from local storage when the app initializes
if (typeof window !== 'undefined') {
	const savedFavoritesJSON = localStorage.getItem('fav');
	if (savedFavoritesJSON) {
		const savedFavorites = JSON.parse(savedFavoritesJSON);
		favorites.set(savedFavorites);
	}

	// Subscribe to changes in favorites and update local storage
	favorites.subscribe(($favorites) => {
		localStorage.setItem('fav', JSON.stringify($favorites));
	});
}

/**
 * Add an item to favorites.
 * @param {Object} item - The item to add to favorites.
 * @param {string} item.sku - The SKU of the item.
 */
export function addToFavorites(item) {
	favorites.update(($favorites) => {
		if (!$favorites.find((f) => f.sku === item.sku)) {
			return [...$favorites, item];
		}
		return $favorites;
	});
}

/**
 * Remove an item from favorites.
 * @param {Object} item - The item to remove from favorites.
 * @param {string} item.sku - The SKU of the item.
 */
export function removeFromFavorites(item) {
	favorites.update(($favorites) => {
		const updatedFavorites = $favorites.filter((f) => f.sku !== item.sku);
		return updatedFavorites;
	});
}
