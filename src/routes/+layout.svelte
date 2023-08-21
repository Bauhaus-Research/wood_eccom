<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { webVitals } from '$lib/vitals';
	import '../app.css';
	import './styles.css';
	import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });
	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}
</script>



<div class="app">
	<main>
		<slot />

	</main>

</div>
