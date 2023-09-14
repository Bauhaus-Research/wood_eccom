// import { contentDown } from '$lib/stores/brandStore';
// import { error } from '@sveltejs/kit';

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
// 	// Find the press release object that matches the route parameter
// 	const contentDownload = contentDown.find((release) => release.title === params.id);

// 	if (contentDownload) {
// 		return {
// 			title: contentDownload.title,
// 			content: contentDownload.content,
// 			image: contentDownload.image,
// 			bg: contentDownload.bg
// 		};
// 	}

// 	throw error(404, 'Not found');
// }
