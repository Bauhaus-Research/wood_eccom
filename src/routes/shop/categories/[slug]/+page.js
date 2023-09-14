import productsStore from '$lib/stores/productsStore';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	// Find the press release object that matches the route parameter
	const contentDownload = productsStore.find((release) => release.category === params.slug);

	if (contentDownload) {
		return {
			title: contentDownload.name,
			image: contentDownload.image,
			category: contentDownload.category
		};
	}

	throw error(404, 'Not found');
}
