// create a writable store

import { onMount } from 'svelte';
import { readable, writable } from 'svelte/store';
import supabase from '$lib/db.js';

// Define an async function to fetch data from Supabase
async function fetchSupabaseData() {
	try {
		const { data, error } = await supabase.from('profiles').select('name');
		if (error) {
			throw error;
		}
		return data;
	} catch (error) {
		console.error('Error fetching data from Supabase:', error);
		return [];
	}
}

// Load Supabase data on mount and update the store
// onMount(async () => {
// 	console.log('Mounted');

// 	const data = await fetchSupabaseData();
// 	productStore.
// });

// Define your product store as an array of objects
const productStore = [
	{
		brand: 'Brand 2',
		name: 'Product 1',
		description: 'This is the description for Product 1.',
		price: 49.99,
		sku: '112efdsdfgr',
		// datasheet: [
		// 	{
		// 		height: '10',
		// 		width: '10',
		// 		depth: '10',
		// 		weight: '10',
		// 		wood: 'Oak',
		// 		glide: 'full extension',
		// 		dovetails: 'english',
		// 		inUSA: 'true',
		// 		assembly: 'none',
		// 		Note: 'This is the description for Product 1.',
		// 		shelves: '2',
		// 		options: 'full extension',
		// 		seatHeight: 10,
		// 		interiorDisplayLighting: 'none'
		// 	}
		// ],
		shortendDescription: 'This is the description for Product 1.',
		discount: 0,
		category: 'Entertainment',
		image: ['products/wyb-345.png', 'products/wyb-345.png', 'products/wyb-345.png'],
		inStock: true,
		sale: true,
		wood: 'Oak',
		rating: 4.5,
		details: [
			{
				heading: 'Product 1',
				content: 'This is the description for Product 1.'
			},
			{
				heading: 'Product 1',

				content: 'This is the description for Product 1.'
			}
		]
	},
	{
		sku: '112efds1dfgdr',
		name: 'Product 12',
		description: 'This is the description for Product 1.',
		shortendDescription: 'This is the description for Product 1.',
		price: 19.99,
		discount: 0,
		brand: 'Brand 1',
		category: 'Living Room',
		sale: true,
		image: ['products/wyb-575.png', 'products/wyb-575.png', 'products/wyb-575.png'],
		inStock: true,
		wood: 'Wood 1',
		rating: 4.5,
		details: [
			{
				heading: 'Product 1',
				content: 'This is the description for Product 1.'
			},
			{
				heading: 'Product 1',

				content: 'This is the description for Product 1.'
			}
		]
	},
	{
		sku: '112efdsdfgdwr',
		name: 'Product 22',
		description: 'This is the description for Product 1.',
		shortendDescription: 'This is the description for Product 1.',
		price: 19.99,
		discount: 0,
		brand: 'Brand 1',
		category: 'Living Room',
		sale: true,
		image: ['products/wyb-770.png', 'products/wyb-770.png', 'products/wyb-770.png'],
		inStock: true,
		wood: 'Wood 1',
		rating: 4.5,
		details: [
			{
				heading: 'Product 1',
				content: 'This is the description for Product 1.'
			},
			{
				heading: 'Product 1',

				content: 'This is the description for Product 1.'
			}
		]
	},
	{
		sku: '112efdsdfgdr',
		name: 'Product 2',
		description: 'This is the description for Product 1.',
		shortendDescription: 'This is the description for Product 1.',
		price: 19.99,
		discount: 0,
		brand: 'Brand 1',
		category: 'Living Room',
		sale: true,
		image: ['products/wyb-5462.png', 'products/wyb-5462.png', 'products/wyb-5462.png'],
		inStock: true,
		wood: 'Wood 1',
		rating: 4.5,
		details: [
			{
				heading: 'Product 1',
				content: 'This is the description for Product 1.'
			},
			{
				heading: 'Product 1',

				content: 'This is the description for Product 1.'
			}
		]
	},
	{
		sku: '112efdsd221fgr',
		brand: 'Brand 2',
		name: 'Product 1',
		description: 'This is the description for Product 1.',
		shortendDescription: 'This is the description for Product 1.',
		price: 19.99,
		discount: 0,
		category: 'Bedroom',
		image: ['products/wyb-7710.png', 'products/wyb-7710.png', 'products/wyb-7710.png'],
		inStock: true,
		sale: false,
		wood: 'Teak',
		rating: 4.5,
		details: [
			{
				heading: 'Product 1',
				content: 'This is the description for Product 1.'
			},
			{
				heading: 'Product 1',

				content: 'This is the description for Product 1.'
			}
		]
	},
	{
		sku: '112efdsd221fgr3234323',
		brand: 'Brand 2',
		name: 'Product 123',
		description: 'This is the description for Product 1.',
		shortendDescription: 'This is the description for Product 1.',
		price: 19.99,
		discount: 0,
		category: 'Bedroom',
		image: ['products/wyb-6147.png', 'products/wyb-6147.png', 'products/wyb-6147.png'],
		inStock: true,
		sale: false,
		wood: 'Teak',
		rating: 4.5,
		details: [
			{
				heading: 'Product 1',
				content: 'This is the description for Product 1.'
			},
			{
				heading: 'Product 1',

				content: 'This is the description for Product 1.'
			}
		]
	}
	// Add more products as needed
];

// Function to get unique categories
/**
 * @param {any[]} products
 */
function getUniqueCategories(products) {
	const uniqueCategories = new Set();
	products.forEach((/** @type {{ category: any; }} */ product) => {
		uniqueCategories.add(product.category);
	});
	return Array.from(uniqueCategories);
}

// Create a writable store for unique categories
export let uniqueCategoriesStore = getUniqueCategories(productStore);

// You can export the product store if needed
export default productStore;
