<script>
	import CategoryHead from '$lib/components/CategoryHead.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import GridProductCard from '$lib/components/GridProductCard.svelte';
	import productStore from '$lib/stores/productsStore';
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

	let scrollY = 0;
	export let data;
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

<svelte:window bind:scrollY />

<Nav {scrollY} />

<CategoryHead header={data.category} subheader="" />

<section class="w-[90%] h-fit my-auto mt-12 flex flex-col items-start mx-auto">
	<h3 class="text-lg mb-4 font-bold">Featured Products</h3>
	<div class="grid grid-cols-12 gap-4">
		{#each productStore as product}
			{#if product.category === data.category}
				<GridProductCard
					title={product.name}
					price={product.price}
					image={product.image}
					shortedDesc={product.shortendDescription}
					sku={product.sku}
					slug={'/shop/catalog/' + product.sku}
				/>
				<!-- <HomePageItems {product} class="w-full lg:w-[30%] h-[30%] lg:h-[50%] my-4 lg:my-0" /> -->
			{/if}
		{/each}
	</div>
</section>
<Footer />

<style>
</style>
