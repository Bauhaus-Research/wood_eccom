<script>
<<<<<<< HEAD
	import AddCart from '$lib/components/AddCart.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
=======
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { blur, fly } from 'svelte/transition';
	import { expoIn, expoOut, quadIn } from 'svelte/easing';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import WyModal from '$lib/components/WYModal.svelte';
	import { brandName, email } from '$lib/stores/brandStore';
	import Carousel from '$lib/components/Carousel.svelte';
	
	let landingContent = [
		{
			orient: 'r',
			title: 'Build an enviroment for kids to grow',
			content_id: '2',
			description: 'Wherever you work, we have the furniture to help you do it better.',
			btntitle: 'Built for Business',
			image: 'qc kids.webp'
		},
		{
			orient: 'l',
			title: 'Hard workers rest easy',
			btntitle: 'Bedding',
			description: 'Visit our bedding section to find the perfect mattress for you',
			content_id: '1',
			image: 'bed.webp'
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
		}
	];

	let content_id = [
		{
			orient: 'r',
			top: 'top-6',
			left: 'left-20',
			content_id: '1',
			price: '99',
			title: 'Queen Bed'
		},
		{
			orient: 'r',
			top: '0',
			left: '0',
			content_id: '2',
			price: '99',
			title: 'House'
		},
		{
			orient: 'r',
			top: 'top-2',
			left: '0',
			content_id: '3',
			price: '99',
			title: 'storage'
		},
		{
			orient: 'r',
			top: '0',
			left: '0',
			content_id: '4',
			price: '99',
			title: 'Chair'
		}
	];
/**
	 * @type {number}
	 */
let scrollY;
/**
	 * @type {number}
	 */
let innerHeight;
</script>
<svelte:window bind:scrollY bind:innerHeight />
<Nav {scrollY} {innerHeight}/>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<<<<<<< HEAD
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
=======
<div
	class="w-full h-screen bg-black -z-20 absolute top-0 left-0 overflow-hidden bg-left flex flex-row"
>
	<video
		muted
		playsinline
		autoplay
		loop
		class="w-full h-full object-cover opacity-30 overflow-hidden bg-left">
		<source src="elder.mp4" type="video/mp4" />
	</video>
</div>

<section class="h-screen flex flex-col justify-end md:justify-center overflow-hidden">
	<div
		class="flex flex-col md:flex-row justify-center items-center md:items-center opacity-100 mx-10"
	>
		<div
			in:fly={{ delay: 1000, duration: 300, x: 100, easing: expoOut }}
			out:blur={{ duration: 300, easing: quadIn }}
			class=" text-xl text-white font-semibold mx-auto text-start max-w-lg mb-8 "
		>
			<h3 class=" text-xl mb-6 text-blue-500 font-semibold mx-auto text-start">Free Consultation </h3>
			<h1 class=" text-4xl text-white font-semibold mx-auto text-start font-serif">
				Talk to one of our agents for a free evalutation.
			</h1>
		</div>
		<section class="hidden md:block">
			<ContactForm />
		</section>
	</div>
</section>
<section class="h-screen md:hidden block">
	<div class="mx-auto flex flex-col items-center h-full justify-center">

		<ContactForm />
	</div>
</section>
<section class="h-screen md:block hidden overflow-x-clip">
	<div class="flex flex-row items-center h-full justify-center w-full">
		{#if scrollY < innerHeight*2 && scrollY > innerHeight*.5 } 
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		<img in:blur={{duration:500}} out:blur={{duration:100}} style="transform: translate({-(scrollY - innerHeight / 2)*.4}px,0)" class=" transition-transform duration-500 ease-out rounded-lg mx-8 h-48" src="Vector.png"/>
		{/if}
	</div>
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
</section>
<section class=" h-screen grid grid-cols-2 pt-36">
	<div class="ml-10 md:ml-60 col-span-2 h-min">
		<h1 class="font-bold text-xl text-blue-800">Our Mission</h1>
		<h1 class="font-medium text-5xl mt-10m sm:max-w-[40%] max-w-[90%] font-serif">Navigate Medicare Claims</h1>
			
			
	</div>
	<div class="md:col-span-1"></div>
	<div class=" w-auto flex-row flex ml-10 md:ml-0 max-w-[80%] col-span-2 md:col-span-1 h-min">

<<<<<<< HEAD
<!-- <ContactModal /> -->

<Modal bind:showModal>
	<WoodYouPrompt />
</Modal>
=======
			
			<div class="h-min flex flex-col my-auto">

				<p>
					Hinge is built on the belief that anyone looking for love should be able to find it. It’s also built on an acclaimed Nobel-Prize-winning algorithm, so we can succeed in getting you out on promising dates, not keeping you on the app.
				</p>
		<a href="/" class="rounded-full mt-8 duration-300 transition-all items-center justify-center hover:bg-[#663399] group border-neutral-900 border-2 bg-neutral-50 shadow-md font-bold text-center py-3 w-80 flex flex-row">
			
			<svg
			class="h-10 w-10 stroke-[#663399] group-hover:stroke-neutral-300 transition-colors duration-75"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			height="300px"
			width="300px"
		  >
			<path
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
			/>
		  </svg>
		  <h3
			class="h-10 self-end pt-2 text-neutral-950 group-hover:text-neutral-50 transition-colors duration-150 ml-4">
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5

				Our Mission
			</h3>
		</a>
	</div>
	</div>
</section>
<section class="h-screen flex flex-col w-full">
	
	<img in:blur={{duration:1000}} out:blur={{duration:100}} class="h-96 transition-transform duration-500 ease-out rounded-lg mx-8" src="Vector.png"/>
</section>
<Carousel />
<section class="h-screen flex flex-col">
	<div class="flex flex-row items-start h-1/2 justify-center w-full overflow-x-clip">
		{#if scrollY < innerHeight*6 && scrollY > innerHeight*4.2 } 
		<img in:blur={{duration:1000}} out:blur={{duration:100}}  style="transform: translate({-(scrollY - innerHeight*5 )*.1}px,{(scrollY - innerHeight*3 / 2)*.1}px)" class="h-48 transition-transform duration-[2000ms] ease-out rounded-lg mx-8" src="Vector.png"/>
		<img in:blur={{duration:1000}} out:blur={{duration:100}}  style="transform: translate(0,{(scrollY - innerHeight*5 / 2)*.11}px)" class="h-48 transition-transform duration-500 ease-out rounded-lg mx-8" src="Vector.png"/>
		<img in:blur={{duration:1000}} out:blur={{duration:100}}  style="transform: translate({(scrollY - innerHeight*5)*.1}px,{(scrollY - innerHeight*4 / 2)*.1}px)" class="h-48 transition-transform duration-1000 ease-out rounded-lg mx-8" src="Vector.png"/>
		{/if}
	</div>
	<div class="mt-20 flex flex-col items-center">
		<h1 class="text-xl font-bold text-blue-800">
			Join an Exciting Team
		</h1>
		<a href="/" class="rounded-full mt-8 duration-300 transition-all hover:bg-blue-800 bg-black text-white font-bold text-center py-3 w-40">
			Our Careers
		</a>
	</div>
</section>
<section class="bg-neutral-800 px-20 py-20 flex flex-col">
	<h1 class="text-white font-bold text-3xl mb-4">
		{brandName} 
	</h1>
	<p class="text-white my-6 font-bold text-3xl">
		See our blog page for our latest thoughts
	</p>
	<a href="/blog" class="rounded-full duration-300 transition-all hover:bg-blue-800 bg-black text-white font-bold text-center py-3 w-40">
		Visit Our Blog
	</a>
</section>
<Footer />

<style>
<<<<<<< HEAD
</style>

<Toaster />
=======
	path {
    stroke-dasharray: 15;
    animation: move 35s linear infinite;
}

@keyframes move {
    to {
        stroke-dashoffset: 1000;
    }
}
</style>
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
