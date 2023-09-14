import productsStore from '$lib/stores/productsStore';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	// Find the press release object that matches the route parameter
	const contentDownload = productsStore.find((release) => release.sku === params.slug);

	if (contentDownload) {
		return {
			title: contentDownload.name,
			image: contentDownload.image,
			sku: contentDownload.sku,
			description: contentDownload.description,
			shortendDescription: contentDownload.shortendDescription,
			price: contentDownload.price,
			stock: contentDownload.inStock,
			category: contentDownload.category,
			brand: contentDownload.brand,
			detailedDescription: contentDownload.details
		};
	}

	throw error(404, 'Not found');
}
