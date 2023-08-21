import supabase from '$lib/db';
import page from '$lib/stores/pageInt';

export async function load() {
	let currentPage;
	page.subscribe((value) => (currentPage = value));
	const { data } = await supabase.from('brand_view_archbold').select('*');
	// @ts-ignore
	// .range((currentPage - 1) * 10, currentPage * 10 - 1);

	return {
		countries: data ?? []
	};
}
