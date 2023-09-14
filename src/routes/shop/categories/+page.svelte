<script>
	import Footer from '$lib/components/Footer.svelte';
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import MainHead from '$lib/components/MainHead.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import productStore from '$lib/stores/productsStore';
	import { Toaster } from 'svelte-french-toast';
	let showModal = false;

	// Function to get unique categories
	/**
	 * @param {any[]} products
	 */
	function getUniqueCategories(products) {
		const uniqueCategories = new Set();
		products.forEach((/** @type {{ category: any; }} */ product) => {
			uniqueCategories.add({ prod: product.category });
		});
		return Array.from(uniqueCategories);
	}

	// Get unique categories from the product store
	const uniqueCategories = getUniqueCategories(productStore);

	// Now uniqueCategories contains an array of unique category names
	console.log(uniqueCategories);

</script>

<svelte:head>
	<!-- Meta tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Title and Description -->
	<title>Wood You Bahamas Homepage</title>
	<meta
		name="description"
		content="Home page for wood you bahamas that will show products, specials, and give a little intro to the website and about us"
	/>

	<!-- Open Graph (og) Meta Tags for Social Media Sharing -->
	<meta property="og:title" content="Wood You Bahamas Homepage" />
	<meta
		property="og:description"
		content="Home page for wood you bahamas that will show products, specials, and give a little intro to the website and about us"
	/>
	<!-- <meta property="og:image" content="URL to a preview image"> -->
	<meta property="og:url" content="https://woodyoubah.store/" />
	<!-- ... other og meta tags -->

	<!-- Stylesheets -->

	<!-- Favicon -->
	<!-- <link rel="icon" type="image/png" href="path/to/your/favicon.png"> -->

	<!-- Other Scripts or External Dependencies -->
	<!-- <script src="path/to/your/external/script.js" defer></script> -->
</svelte:head>

<!-- <svelte:window bind:scrollY /> -->

<section class="overflow-x-clip">
	<Nav />

	<MainHead />
	<section class="w-[90%] h-fit my-auto mt-12 flex flex-col items-start mx-auto overflow-x-auto">
		<h3 class="text-lg mb-4 font-bold">Browse Categories</h3>
		<div class="flex flex-row snap-mandatory snap-x">
			{#each uniqueCategories as item}
				<a
					href="/shop/categories/{item.prod}"
					class="text-stone-800 flex flex-row bg-stone-100 h-min w-full font-bold px-4 py-2 hover:bg-stone-300 border-neutral-300 duration-150 transition-all border-2 rounded-lg mr-4"
					target="_self">{item.prod}</a
				>
			{/each}
		</div>
	</section>
	{#each uniqueCategories as item}
		{item.prod}
		<HomePageItems title={item.prod} subtitle={item.prod} />
	{/each}

	<Footer />

	<Toaster />
	<style>
	</style>
</section>
