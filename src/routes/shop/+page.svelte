<script>
	import Footer from '$lib/components/Footer.svelte';
	import Heart from '$lib/components/Heart.svelte';
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import MainHead from '$lib/components/MainHead.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ParticleImage from '$lib/components/ParticleImage.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import productStore, { uniqueCategoriesStore } from '$lib/stores/productsStore';
	import { Toaster } from 'svelte-french-toast';
	import { fade, blur } from 'svelte/transition';
	let showModal = false;

	// Function to get unique categories
	let scrollY = 0;

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

<Nav />

<MainHead />
<h3 class="text-lg mb-4 font-bold mx-auto mt-6 w-[90%]">Browse Categories</h3>
<section class="w-[90%] h-fit my-auto mt-4 flex flex-col items-start mx-auto overflow-x-auto">
	<div class="flex-row flex h-11 min-w-fit whitespace-nowrap snap-x snap-proximity">
		{#each uniqueCategoriesStore as item}
			<a
				href="/shop/categories/{item}"
				class="text-stone-800 bg-stone-100 font-bold px-4 py-2 hover:bg-stone-300 border-neutral-300 duration-150 transition-all border-2 rounded-lg mr-4"
				target="_self">{item}</a
			>
		{/each}
	</div>
</section>
{#each uniqueCategoriesStore as item}
	<div class="w-[90%] ml-[5%] flex flex-col mx-auto my-12 border-t-neutral-200 border-t-2">
		<div class="flex flex-row justify-between">
			<div>
				<h5 class="font-bold sm:text-xl text-lg my-4">{item}</h5>
				<p
					class="font-light mb-4 sm:text-sm text-xs w-[95%] line-clamp-2 hover:line-clamp-none max-w-xl"
				>
					{item}
				</p>
			</div>
			<div class="font-light sm:text-sm text-xs flex">
				<a href="/shop/categories/{item}" class="flex items-center group">
					<strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all"
						>+</strong
					>
					<span class="ml-1 fade-underline w-24 min-w-fit">View All </span>
				</a>
			</div>
		</div>

		<section class=" flex flex-row">
			<div class="overflow-x-auto snap-x">
				<div class="flex flex-row overflow-x-scrol w-fit h-fit snap-mandatory snap-x">
					{#each productStore as product}
						{#if product.category === item}
							<ProductCard
								title={product.name}
								price={product.price}
								image={product.image}
								sku={product.sku}
								shortedDesc={product.shortendDescription}
								slug={'shop/catalog/' + product.sku}
							/>
						{/if}
					{/each}
				</div>
			</div>
		</section>
	</div>
{/each}
<Footer />

<style>
</style>

<Toaster />