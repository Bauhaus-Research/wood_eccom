import supabase from '$lib/db';

export async function load() {
	const { data } = await supabase.from('brand_view_ww').select('*');
	return {
		items: data ?? []
	};
}
