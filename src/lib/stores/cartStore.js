import { derived, writable } from 'svelte/store';
import productStore from './productsStore';

/**
 * @typedef {object} Product
 * @property {string} sku
 * @property {number} quantity
 */

/**
 * @typedef {Product} CartItem
 */

// Store for product data with the most recent prices
export const products = writable([]);

/**
 * @type {import('svelte/store').Writable<CartItem[]>}
 */
export const cart = writable([]);

/**
 * @param {{ id: string; amount?: number; }} product
 */
export function addToCart(product) {
	cart.update(($cart) => {
		const existing = $cart.find((item) => item.sku === product.id);
		if (existing) {
			existing.quantity += product.amount || 1;
			return [...$cart];
		}

		return [...$cart, { sku: product.id, quantity: product.amount || 1 }];
	});
}

/**
 * @param {{ id: string; amount?: number; removeAll?: boolean }} product
 */
export function rmToCart(product) {
	cart.update(($cart) => {
		const existingIndex = $cart.findIndex((item) => item.sku === product.id);

		if (existingIndex !== -1) {
			const existingItem = $cart[existingIndex];
			const updatedCart = [...$cart];

			if (product.removeAll) {
				// Remove all instances of the product
				updatedCart.splice(existingIndex, 1);
			} else {
				// Remove only one instance of the product
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1;
				} else {
					// If there's only one instance, remove the entire item
					updatedCart.splice(existingIndex, 1);
				}
			}

			return updatedCart;
		}

		return $cart;
	});
}

/**
 * @type {import('svelte/store').Readable<number>}
 */
export const totalPrice = derived(cart, ($cart) => {
	// Initialize the total price
	let total = 0;

	// Loop through each item in the cart
	for (const item of $cart) {
		// Find the corresponding product in the store by matching the SKU (assuming productStore is an array)
		const product = productStore.find((product) => product.sku === item.sku);

		if (product) {
			// Calculate the subtotal for this item (quantity * price) and add it to the total
			total += product.price * item.quantity;
		}
	}

	return total;
});

// find the price of an item basef on its sku
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

/**
 * @param {{ id: string}} product
 */
export function rmToCartAll(product) {
	cart.update(($cart) => {
		const existingIndex = $cart.findIndex((item) => item.sku === product.id);

		if (existingIndex !== -1) {
			const existingItem = $cart[existingIndex];
			const updatedCart = [...$cart];

			// Remove all instances of the product
			updatedCart.splice(existingIndex, 1);

			return updatedCart;
		}

		return $cart;
	});
}
