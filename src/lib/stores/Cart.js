import { derived, writable } from 'svelte/store';

/**
 * @typedef {object} Product
 * @property {string} id
 * @property {string} title
 * @property {string} image
 * @property {number} price
 * @property {number} quantity
 */

/**
 * @typedef {Product} CartItem
 */

/**
 * @type {import('svelte/store').Writable<Product[]>}
 */
export const products = writable([
	{
		image: '',
		id: '',
		title: '',
		price: 0,
		quantity: 1
	}
	// { id: 1, name: 'Apple', image: '🍎', price: 20, quantity: 0 },
	// { id: 2, name: 'Orange', image: '🍊', price: 10, quantity: 0 },
	// { id: 3, name: 'Grapes', image: '🍇', price: 15, quantity: 0 }
]);

/**
 * @type {import('svelte/store').Writable<CartItem[]>}
 */
export const cart = writable([]);

/**
 * @type {import('svelte/store').Readable<number>}
 */
export const totalPrice = derived(cart, ($cart) =>
	$cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

/**
 * @type {import('svelte/store').Readable<number>}
 */
export const totalItems = derived(cart, ($cart) =>
	$cart.reduce((total, item) => total + item.quantity, 0)
);

// Load cart data from local storage when the app initializes
if (typeof window !== 'undefined') {
	const savedCartJSON = localStorage.getItem('cart');
	if (savedCartJSON) {
		const savedCart = JSON.parse(savedCartJSON);
		cart.set(savedCart);
	}

	// Update local storage when the cart changes
	cart.subscribe(($cart) => {
		localStorage.setItem('cart', JSON.stringify($cart));
	});
}
