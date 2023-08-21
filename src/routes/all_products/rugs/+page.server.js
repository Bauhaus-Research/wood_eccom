import supabase from '$lib/db';
import page from '$lib/stores/pageInt';

export async function load() {
	let currentPage;
	page.subscribe((value) => (currentPage = value));
	const { data } = await supabase.from('catviewrugs').select('*');
	return {
		countries: data ?? []
	};
}
