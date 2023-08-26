import { derived, writable } from 'svelte/store';

/**
 * @typedef {object} Product
 * @property {string} id
 * @property {string} title
 */

/**
 * @typedef {Product} favsItem
 */

/**
 * @type {import('svelte/store').Writable<Product[]>}
 */
export const productsFAVS = writable([
	{
		id: '',
		title: ''
	}
]);

/**
 * @type {import('svelte/store').Writable<favsItem[]>}
 */
export const favs = writable([]);

/**
 * @type {import('svelte/store').Readable<number>}
 */
export const totalItemsFAVS = derived(favs, ($favs) => $favs.reduce((total, item) => total, 0));
