<script>
	// import DownloadForm from '$lib/components/DownloadForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	let innerHeight = 0;
	let scrollY = 0;
	export let data;
</script>

<svelte:window {innerHeight} {scrollY} />
<Nav {scrollY} />
<section
	class="

flex md:flex-row flex-col min-h-screen justify-evenly items-center"
>
	<div class="w-auto mx-10 md:mx-0 md:w-80 lg:w-96">
		<h2 class="text-2xl md:text-4xl font-bold mt-24">
			<!-- {data.title} -->
		</h2>
		<p class="md:text-xl font-medium text-neutral-600 mt-4">
			<!-- {data.content} -->
		</p>
	</div>
	<!-- <DownloadForm content={data.title} /> -->
</section>
<Footer />
