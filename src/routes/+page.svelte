<script>
	import AddCart from '$lib/components/AddCart.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Heart from '$lib/components/Heart.svelte';
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ParticleImage from '$lib/components/ParticleImage.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import RemoveCart from '$lib/components/RemoveCart.svelte';
	import WoodYouPrompt from '$lib/components/WoodYouPrompt.svelte';
	import { fade, blur } from 'svelte/transition';
	let showModal = false;

	let categories = [
		{
			title: 'Dining',
			image: 'dinings.webp',
			href: 'all_products/dining'
		},
		{
			title: 'Rugs',
			image: 'carpet.webp',
			href: 'all_products/rugs'
		},
		{
			title: 'Decoration',
			image: 'decoration.webp',
			href: 'all_products/home'
		},
		{
			title: 'Office',
			image: 'office.webp',
			href: 'all_products/office'
		},
		{
			title: 'Bedroom',
			image: 'bed.webp',
			href: 'all_products/bedroom'
		},
		{
			title: 'Living',
			image: 'workspace_prod.webp',
			href: 'all_products/living'
		},
		{
			title: 'Storage',
			image: 'bauhausresearch_storageCubese.webp',
			href: 'all_products/storage'
		},
		{
			title: 'Outdoor',
			image: 'outtdoor.webp',
			link: 'all_products/outdoor'
		},
		{
			subtitle: 'Kids',
			linktitle: 'Kids',
			image: 'qc kids.webp',
			link: 'all_products/kids'
		}
	];

	let introItem = [
		{
			title: 'Eat',
			subtitle: 'Gather around the table for a meal with friends and family',
			link: '/all_products/dining',
			linktitle: 'Dining',
			price: 1,
			image: 'dinings.webp'
		},
		{
			title: 'Sleep',
			subtitle: 'Relax and unwind in your own private sanctuary',
			link: '/all_products/bedroom',
			linktitle: 'Bedrooms',
			price: 1,
			image: 'bed.webp'
		},
		{
			title: 'Gallery',
			subtitle: 'Check our the wood engravings',
			link: '/all_products/living',
			linktitle: 'Gallery',
			price: 1,
			image: 'engraved-islands-of-the-bahamas-.webp'
		}
	];

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

<Nav {scrollY} />
<div class="w-full lg:h-screen h-[35rem] bg-black -z-20 absolute top-0 left-0 overflow-hidden">
	<video
		muted
		playsinline
		autoplay
		loop
		class="w-full h-full object-cover opacity-30 overflow-hidden"
		style="float: left;"
	>
		<source src="woodyoupromo.webm" type="video/webm" />
		<source src="woodyoupromo.mp4" type="video/mp4" />
	</video>
</div>

<section class="h-[70rem] lg:h-screen flex flex-col justify-end items-center overflow-hidden">
	<div class="flex flex-col justify-between items-center opacity-100 mx-auto">
		<h1
			transition:blur={{ delay: 300, duration: 300 }}
			class=" text-5xl mb-4 text-white font-semibold mx-auto text-center font-serif"
		>
			Furniture that fits your style
		</h1>
		<button
			transition:blur={{ delay: 550, duration: 300 }}
			on:click={() => {
				showModal = true;
			}}
			class=" mb-12 h-14 lg:w-[32rem] bg-opacity-50 max-w-sm sm:max-w-xl w-full rounded-full bg-white border-2 border-black flex flex-col justify-center"
		>
			<h2 class="ml-5">Find what makes you complete</h2>
		</button>
		<div class=" lg:flex mx-10 mb-8">
			{#each introItem as item, i}
				<div
					class="max-w-sm mb-4 sm:max-w-xl bg-cover bg-center bg-opacity-100 w-full mx-2 h-48 bg-blend-overlay lg:h-60 bg-[rgb(33,20,13)] group hover:bg-opacity-50 duration-200 transition-all text-white font-semibold flex flex-col justify-evenly items-center rounded-lg shadow-xl px-8"
					transition:fade={{ delay: 1000 + 100 * i }}
					style="background-image: url('{item.image}');"
				>
					<div><p class="text-center text-sm font-medium">{item.subtitle}</p></div>
					<div>
						<a
							class="border-[1px] text-white hover:text-opacity-100 text-opacity-80 group-hover:bg-gradient-to-t from-amber-950 to-amber-900 border-amber-900 group-hover:border-0 sm:px-8 px-6 sm:py-4 py-3 rounded-full hover:shadow-amber-950 shadow-lg transition-all duration-300"
							href={item.link}
						>
							{item.linktitle}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<HomePageItems title="Categories" 
introItem = {[
	{
		title: 'DINING',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'OFFICE',
		price: 1,
		image: 'dinings.webp'
	},

	{
		title: 'PATIO',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'TILES',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'STORAGE',
		price: 1,
		image: 'dinings.webp'
	},

	{
		title: 'CARPETS',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'BEDDING',
		price: 1,
		image: 'dinings.webp'
	},
]}
/>

<section class=" bg-[rgb(33,20,13)] group">
	<section class=" group sm:max-w-3/4 mx-auto grid grid-cols-2 pb-24">
		<div class="flex flex-col text-center col-span-2 mx-auto mt-12">
			<h2 class="text-lg font-semibold text-[rgb(255,153,98)] text-opacity-40 font-serif">
				Special Proxuct Offeing
			</h2>
			<h3 class="text-4xl mt-2 font-bold text-[rgb(255,233,221)] font-serif">Collection Name</h3>
		</div>

		<!-- split -->
		<div
			class="mx-auto mt-12 mb-4 md:my-auto bg-blend-overlay self-center w-[90%] aspect-square bg-stone-950 group-hover:bg-opacity-10 transition-all duration-300 bg-opacity-90 col-span-2 md:col-span-1 bg-right-top"
			style="background-image: url('bed.webp');"
		/>
		<div
			class="text-opacity-60 text-[rgb(255,153,98)] text-bold text-2xl font-bold col-span-2 md:col-span-1 w-[90%] mx-auto md:w-full"
		>
			<h1 class="text-opacity-70 text-[rgb(255,233,221)]">$2199.95</h1>

			<button class="flex">
				<button
					class="text-xl my-2 px-4 py-1 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-[rgb(255,233,221)] hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-[rgb(255,233,221)] text-[rgb(255,233,221)]"
				>
					Checkout
				</button>
				<AddCart  />
				<RemoveCart />
			</button>

			<p
				class="text-sm font-light text-[rgb(255,233,221)] text-opacity-30 hover:text-opacity-70 transition-all duration-150"
			>
				<strong class="font-bold"> Indulge in the Art of Furnishing</strong>
				Presenting our exclusive package tailored for the discerning furniture connoisseur – an invitation
				to embark on a journey through the world of timeless comfort and exquisite design. Immerse yourself
				in the epitome of craftsmanship with our meticulously curated assortment of versatile furniture
				pieces, each bearing its distinct allure. Whether seeking the ideal gift for a home enthusiast
				or a unique expression of self-indulgence, this package promises a tasteful odyssey.
				<br class="" />
				<br class="" />
				<br class="" />

				<strong class="font-bold"> Anticipate:</strong>
				<br />
				2x Tranquil Lounger - Sink into the embrace of plush cushions and sleek lines<br />
				2x Classic Elegance Dining Set - An ode to refined gatherings and culinary experiences<br />
				2x Urban Haven Sofa - Contemporary charm meets cozy relaxation<br />
				2x Rustic Revival Coffee Table - Reclaimed wood and artisanal detailing<br />
				2x Serenity Study Desk - Where inspiration and productivity find harmony<br />
				2x Timeless Essence Bookcase - Crafted to showcase cherished collections<br />
				2x Luxe Slumber Bed - Serenity meets opulence in this dreamy haven<br />

				Every piece encapsulates our commitment to quality, each meticulously handcrafted with
				superior materials and impeccable attention to detail. Designed to transcend trends, these
				furnishings evoke an enduring essence while being free from compromise. Elevate your living
				space with the perfect blend of elegance and comfort, and experience the artistry of our
				furniture. Transform your surroundings with our curated collection, where every piece is a
				testament to the art of furnishing. Enjoy the embrace of sophisticated design and
				exceptional comfort, while embracing the promise of lasting beauty. Unveil the artistry of
				furniture, where every detail resonates with distinction. Enhance your space with the
				essence of timeless design and enduring quality.
			</p>
			<button class="text-sm underline"> See Details </button>
		</div>
	</section>
</section>

<section
	class="h-[30rem] group w-full flex justify-center items-end bg-center"
	style="background-image: url('officeSpace.webp');"
>
	<section
		class="h-[30rem] group w-full flex justify-center items-end bg-black hover:bg-opacity-70 duration-300 transition-all bg-opacity-30"
	>
		<div class="mb-16 flex flex-col">
			<h2 class="text-4xl font-bold text-[rgb(255,233,221)] text-center">
				End the year in a new office
			</h2>
			<a
				href="/all_products/office"
				class="text-xl mt-2 px-4 py-1 group-hover:shadow-2xl group-hover:scale-110 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-[rgb(255,233,221)] hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-[rgb(255,233,221)] text-[rgb(255,233,221)]"
			>
				Upgrade Your Workstation
			</a>
		</div>
	</section>
</section>

<HomePageItems title="Categories" 
introItem = {[
	{
		title: 'DINING1',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'OFFICE1',
		price: 1,
		image: 'dinings.webp'
	},

	{
		title: 'PATIO1',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'TILES1',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'STORAGE1',
		price: 1,
		image: 'dinings.webp'
	},

	{
		title: 'CARPETS1',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'BEDDING1',
		price: 1,
		image: 'dinings.webp'
	},
]}
/>
<HomePageItems title="Categories" 
introItem = {[
	{
		title: 'DINING2',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'OFFICE2',
		price: 1,
		image: 'dinings.webp'
	},

	{
		title: 'PATIO2',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'TILES2',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'STORAGE2',
		price: 1,
		image: 'dinings.webp'
	},

	{
		title: 'CARPETS2',
		price: 1,
		image: 'dinings.webp'
	},
	{
		title: 'BEDDING2',
		price: 1,
		image: 'dinings.webp'
	},
]}
/>
<ContactModal />

<Modal bind:showModal>
	<WoodYouPrompt />
</Modal>

<Footer />

<style>
</style>
