<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { blur, fly } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import ContactModal from '$lib/components/ContactModal.svelte';
	let whichMap = 'map1';
	function makeMap1() {
		whichMap = 'map1';
	}
	function makeMap2() {
		whichMap = 'map2';
	}

	let introItem = [
		{
			title: '2 Locations',
			subtitle: 'need and more at a really low price and win big and lorem',
			icon: 'map.svg'
		},
		{
			title: 'Real Wood Furniture',
			subtitle: 'Furniture that was built to last',
			icon: 'tree.svg'
		},
		{
			title: 'Community',
			subtitle: 'Well regarded among the community. Your parents loved us, so will you.',
			icon: 'community.svg'
		}
	];
	let footerItem_title = [
		{
			title: 'title',
			link: ''
		}
	];
	let landingContent = [
		{
			orient: 'l',
			btntitle: 'See Workspaces',
			title: 'Success Wherever You Occupy',
			description: 'Build your workspace with our modular furniture, designed to fit your needs.',
			content_id: '3',
			image: 'workspace_prod.webp'
		},
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

	let accentColor = 'bg-green-500';
	let primaryColor = 'bg-green-500';
	let secondaryColor = 'bg-green-500';
	let textColor = 'text-white';
	let bgColor = 'bg-green-500';
	let introText = 'Make your home more like home';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<Nav {scrollY} />
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div
	class="w-full lg:h-screen h-[35rem] bg-black -z-20 absolute top-0 left-0 overflow-hidden bg-left flex flex-row"
>
	<video
		muted
		playsinline
		autoplay
		loop
		class="w-full h-full object-cover opacity-30 overflow-hidden bg-left"
	>
		<source src="woodyoupromo.webm" type="video/webm" />
		<source src="woodyoupromo.mp4" type="video/mp4" />
	</video>
</div>

<section class="h-[50rem] md:h-screen flex flex-col justify-end md:justify-center overflow-hidden">
	<div
		class="flex flex-col md:flex-row justify-between items-center md:items-start lg:items-center opacity-100 mx-10"
	>
		<div
			in:fly={{ delay: 300, duration: 300, x: 100, easing: quadIn }}
			out:fly={{ duration: 300, x: 100, easing: quadIn }}
			class=" text-xl text-white font-semibold mx-auto text-start max-w-lg mb-8 md:md-0"
		>
			<h3 class=" text-xl mb-6 text-white font-semibold mx-auto text-start">Our Mission</h3>
			<h1 class=" text-4xl text-white font-semibold mx-auto text-start font-serif">
				{introText}
			</h1>
		</div>
		<div
			transition:blur={{ duration: 120 }}
			class="max-w-xs w-[80vw] bg-green-900 text-white font-light rounded-lg h-[32rem] justify-evenly flex flex-col px-10"
		>
			{#each introItem as item, i}
				<div in:blur={{ delay: 1000 + i * 1200, duration: 1000 }}>
					<img alt={item.icon} src={item.icon} class="h-14" />
					<h2 class="font-bold">{item.title}</h2>
					<p>{item.subtitle}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="mx-10">
	{#each landingContent as item}
		<div
			class="w-full shadow-lg group rounded-lg my-24 md:flex md:{item.orient === 'l'
				? '  flex-row'
				: ' flex-row-reverse'}"
		>
			<div
				style="background-image: url('{item.image}');"
				class="md:h-96 sm:h-72 h-48 w-full rounded-lg bg-cover bg-bottom flex justify-center items-center"
			>
				{#each content_id as item1}
					{#if item1.content_id === item.content_id}
						<a
							href="/"
							class="text-black relative {item1.top} {item1.left} border-[1px] group-hover:rounded-lg group-hover:bg-white border-white rounded-full group-hover:w-24 group-hover:h-16 h-4 w-4 p-1 group-hover:p-4 transition-all"
							><div
								class="rounded-full w-full h-full bg-white flex flex-col justify-center items-center text-center"
							>
								<p class="hidden group-hover:block text-sm text-gray-900 no-underline">
									{item1.title}
								</p>
								<p />
								<p class="hidden group-hover:block text-sm text-gray-500 no-underline">
									{item1.price}
								</p>
								<p />
							</div></a
						>
					{/if}
				{/each}
			</div>
			<div
				class=" md:h-96 h-40 w-full flex flex-col justify-center text-center items-start my-4 md:my-0"
			>
				<h2 class="mx-4 sm:mx-20 sm:text-2xl text-xl md:text-3xl font-light text-start">
					{item.title}
				</h2>
				<p class="text-start text-xs sm:text-sm md:text-base mx-4 sm:mx-20">{item.description}</p>
				<a
					class="mx-4 sm:mx-20 text-xs sm:text-sm md:text-base border-2 border-green-100 px-8 py-4 mb-4 rounded-full hover:shadow-green-400 shadow-lg transition-all duration-300"
					href="/"
				>
					{item.btntitle}
				</a>
			</div>
		</div>
	{/each}
</section>

<section class="w-full grid grid-cols-2 lg:w-3/4 mx-auto mt-12">
	<h2 class="text-2xl col-span-2 font-semibold text-gray-800 mb-4 text-center">
		<strong class="text-4xl font-bold">Discover Wood You Furniture</strong> <br />Crafting a Legacy
		of Excellence in the Bahamas
	</h2>
	<div class="col-span-1 mr-4">
		<!-- Content for the first column -->
		<p class="text-gray-600 mb-6">
			Embark on a journey into timeless artistry with Wood You Furniture. Since 2000, our sanctuary
			on #19 Madeira Street has been built on three core principles: crafting exceptional wooden
			pieces at affordable prices, nurturing creative empowerment through the "Do It Yourself"
			ethos, and delivering unparalleled customer care. These values, unyielding and resilient, have
			propelled us beyond expectations. For over sixteen years, Wood You Furniture has been the
			Bahamas' oasis of exquisite, unfinished wood furniture. We stand as pioneers of innovation,
			adorning homes with authenticity and genuine craftsmanship. Wood You Furniture is your gateway
			to... The quintessential All Wood Furniture Store in the Bahamas, where each piece echoes the
			warmth and charm of real wood, eschewing artificial imitations. Trendsetting the
			Ready-to-Finish Wood Furniture concept in the Caribbean, our journey transcends borders. With
			a second home in Abaco, we're woven into Bahamian hearts.
		</p>

		<!-- Rest of the content for the first column -->
	</div>
	<div class="col-span-1 ml-4">
		<h1>Wood You Furniture embodies...</h1>
		<p class="text-gray-600 mb-6">
			A proud member of the Unfinished Furniture Association, symbolizing excellence. Our
			unparalleled customer service is guided by a belief that every interaction should be
			transformative. Champions of sustainability, manifesting as a "Green Furniture Store." Our
			creations are born from sustainably sourced woods, bearing the Forestry Stewardship Council
			(FSC) seal. Diverse offerings span from serene bedrooms to lively living spaces. Entertainment
			centers, occasional tables, and bookcases narrate your home's story, reflecting your spirit.
			Wood You Furniture ignites your space with affordable, quality all-wood furniture. Infuse your
			essence into each piece, forging connections and shaping homes that endure. Elevate your abode
			with Wood You Furniture, where craftsmanship dances with inspiration. Let your space resonate
			with authenticity, and bring your vision to life.
		</p>
	</div>
</section>
<ContactModal />

<section id="locations" class="grid lg:grid-cols-2 grid-cols-1 lg:h-screen pt-16">
	<div class="bg-gray-400 h-96 lg:h-full">
		<div class="bg-gray-400 h-96 lg:h-full">
			<iframe
				title="wood you furniture map"
				class="bg-gray-400 h-96 lg:h-full w-full {whichMap === 'map1' ? '' : 'hidden'}"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.07246187564!2d-77.33244562993511!3d25.06553302872284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c546669819f%3A0xe598c871276b3acd!2sWood%20You%20Furniture!5e0!3m2!1sen!2sus!4v1691903647118!5m2!1sen!2sus"
				width="600"
				height="450"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			<iframe
				title="wood you furniture map 2"
				class="bg-gray-400 h-96 lg:h-full w-full {whichMap === 'map2' ? '' : 'hidden'}"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5936075057157!2d-77.49371792594584!3d25.04786207780738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f615bdde66c11%3A0xa7c3182b9d0bfed1!2sWood%20You%20Furniture%20Gallery!5e0!3m2!1sen!2sus!4v1691903881847!5m2!1sen!2sus"
				width="600"
				height="450"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
	<div class="bg-white flex flex-col justify-center items-center text-start overflow-x-auto">
		<button
			on:click={makeMap1}
			class="h-48 sm:w-[30rem] w-[90%] bg-gray-400 rounded-lg border-2 border-black flex flex-row"
		>
			<div
				class="h-full w-1/2 row-span-1 bg-black bg-cover bg-center"
				style="background-image: url('storeroom.webp');"
			/>
			<div class="h-full w-1/2 row-span-1 flex-col flex justify-center items-start px-4">
				<h1 class="font-bold sm:text-xl text-lg">Wood You Furniture Palmdale (East)</h1>
				<h4>hours</h4>
				<div class="font-light text-xs">
					<h1>19 Madeira Street</h1>
					<h1>Nassau, The Bahamas</h1>
					<h1>+1 242-325-9663</h1>
				</div>
			</div>
		</button>
		<button
			on:click={makeMap2}
			class="h-48 sm:w-[30rem] w-[90%] mt-6 bg-gray-400 rounded-lg border-2 border-black flex flex-row"
		>
			<div
				class="h-full w-1/2 row-span-1 bg-black bg-cover bg-center"
				style="background-image: url('storeroom.webp');"
			/>
			<div class="h-full w-1/2 row-span-1 flex-col flex justify-center items-start px-4">
				<h1 class="font-bold sm:text-xl text-lg">Wood You Furniture Gallery (West)</h1>
				<h4>hours</h4>
				<div class="font-light text-xs">
					<h1>Unit 4, Shops at Old Fort Bay Town Centre</h1>
					<h1>Nassau, The Bahamas</h1>
					<h1>+1 242-698-0217</h1>
				</div>
			</div>
		</button>
	</div>
</section>
<Footer />
