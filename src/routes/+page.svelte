<script>
	import AddCart from '$lib/components/AddCart.svelte';

	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import MainHead from '$lib/components/MainHead.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import RemoveCart from '$lib/components/RemoveCart.svelte';
	import WoodYouPrompt from '$lib/components/WoodYouPrompt.svelte';
	import { Toaster } from 'svelte-french-toast';
	let showModal = false;

	let section = [
		{
			title: 'Time to get productive',
			p: 'Lorem Ipsum',
			img: '/bed.webp'
		}
	];
/**
	 * @type {number}
	 */
let scrollY = 0;
/**
	 * @type {number}
	 */
let innerHeight = 0;
</script>
<svelte:window bind:scrollY bind:innerHeight />
<Nav />
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Nav />

<MainHead />

{#each section as item}
	<section
		class="mx-10 mt-5 bg-amber-100 h-96 flex-col md:h-[40vw] flex md:flex-row justify-between items-end"
	>
		<div class="h-[90%] self-end ml-10">
			<h1 class="font-bold text-3xl md:text-5xl">
				{item.title}
			</h1>
			<p class="font-light text-lg">
				{item.p}
			</p>
		</div>
		<img src={item.img} class="h-[90%] aspect-auto" alt={item.img} />
	</section>
{/each}

<HomePageItems
	title="Sales"
	subtitle="
Beautiful appliances that save you time and effort. Enjoy professional results from home."
	titlelink="/shop/sales"
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
				<AddCart />
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
				href="/"
				class="text-xl mt-2 px-4 py-1 group-hover:shadow-2xl group-hover:scale-110 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-[rgb(255,233,221)] hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-[rgb(255,233,221)] text-[rgb(255,233,221)]"
			>
				Upgrade Your Workstation
			</a>
		</div>
	</section>
</section>


	


<Toaster />
