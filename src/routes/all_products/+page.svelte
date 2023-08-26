<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { fly, blur } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	let showModal = false;
	import Modal from '$lib/components/Modal.svelte';
	import WeddingRegistryForm from '$lib/components/WeddingRegistryForm.svelte';
	import LudwigHyperplexxed from '$lib/components/LudwigHyperplexxed.svelte';
	let hoveredIndex = -1; // Initialize with a value that won't correspond to any index

	/**
	 * @param {number} index
	 */
	function setHoveredIndex(index) {
		hoveredIndex = index;
	}
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
			href: 'all_products/outdoor'
		},
		{
			title: 'Kids',
			image: 'qc kids.webp',
			href: 'all_products/kids'
		}
	];
</script>

<svelte:head>
	<!-- Meta tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Title and Description -->
	<title>All Products</title>
	<meta name="description" content="Description of your page" />

	<!-- Open Graph (og) Meta Tags for Social Media Sharing -->
	<meta property="og:title" content="All Products" />
	<meta
		property="og:description"
		content="All Products main page that features nagivation to all products"
	/>
	<!-- <meta property="og:image" content="URL to a preview image"> -->
	<meta property="og:url" content="https://woodyoubah.store/all_products" />
	<!-- ... other og meta tags -->

	<!-- Stylesheets -->

	<!-- Favicon -->
	<!-- <link rel="icon" type="image/png" href="path/to/your/favicon.png"> -->

	<!-- Other Scripts or External Dependencies -->
	<!-- <script src="path/to/your/external/script.js" defer></script> -->
</svelte:head>

<Nav scrollY={20} />

<div
	class=" {hoveredIndex === 8
		? 'bg-[#308342]'
		: hoveredIndex === 7
		? 'bg-[#66c4de7c]'
		: hoveredIndex === 6
		? 'bg-[#eae6df]'
		: hoveredIndex === 5
		? 'bg-[#ffd78d]'
		: hoveredIndex === 4
		? 'bg-[#ffaa55]'
		: hoveredIndex === 3
		? 'bg-[#dabe8e]'
		: hoveredIndex === 2
		? 'bg-[#72acb9]'
		: hoveredIndex === 1
		? 'bg-red-800'
		: hoveredIndex === 0
		? 'bg-[#eae6df]'
		: 'bg-white'} mx-auto transition-all duration-150 delay-150 grid md:grid-cols-3 grid-cols-2 overflow-x-clip text-center text-white gap-x-4 gap-y-4"
>
	<div
		in:blur={{ duration: 300 }}
		out:blur={{ duration: 300 }}
		on:mouseleave={() => {
			hoveredIndex = -1;
		}}
		class="md:col-span-3 col-span-2 w-full justify-center items-center flex-col overflow-x-clip text-center text-black"
	>
		<div
			class="h-32 w-full justify-center items-center flex-col overflow-x-clip text-center text-white"
		/>
		<h1 class="font-black text-4xl">ONLY REAL WOOD FURNITURE</h1>
		<p class="font-base mb-16 mt-10 text-base w-96 text-center mx-auto">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore ."
		</p>
	</div>
	<div
		class="col-span-2 md:col-span-3 transition-all duration-150 delay-150 grid lg:grid-cols-3 grid-cols-2 overflow-x-clip text-center text-white gap-x-2 px-6 sm:px-20 place-items-center mx-auto sm:gap-x-12 gap-y-4"
		on:mouseleave={() => {
			hoveredIndex = -1;
		}}
	>
		{#each categories as category, i}
			<a
				href="/{category.href}"
				on:mouseover={() => {
					setHoveredIndex(i);
					console.log(i);
				}}
				on:focus={() => {
					setHoveredIndex(i);
					console.log(i);
				}}
			>
				<LudwigHyperplexxed {i} img={category.image} />
			</a>

			<!-- <div
			transition:fly={{ delay: 100 * i, duration: 300, y: 100, easing: backOut }}
			class="aspect-[1/1.25] bg-blend-overlay rounded-lg flex flex-col-reverse bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-300 justify-start items-center overflow-x-clip text-center bg-cover bg-center"
			style="background-image: url('{category.image}');"
		>
			<a
				href={category.href}
				class="font-bold text-sm rounded-full w-min mb-8 px-8 py-2 bg-white text-black border-2 border-black"
				>{category.title}</a
			>
		</div> -->
		{/each}
	</div>

	<div
		class="col-span-2 md:col-span-3 group text-black rounded-2xl text-start grid md:grid-cols-2 my-20 mx-5 sm:mx-10 md:mx-20 flex-col justify-center items-center overflow-clip"
	>
		<div
			class=" aspect-square bg-cover rounded-t-2xl md:rounded-t-none"
			style="background-image: url('happycouple.webp')"
		>
			<!-- <div class=" bg-opacity-40 bg-gradient-to-t from-yellow-400 via-transparent w-full h-full"></div> -->
		</div>
		<div
			class="md:aspect-square aspect-video bg-cover md:rounded-b-none rounded-b-2xl bg-yellow-400 flex flex-col justify-center font-bold pl-4"
		>
			<h1>Set up your wedding registry with us</h1>
			<p class="font-light w-[80%] text-xs">
				This is a longer description of the wedding registry. Lorem ipsum dolor sit amet,
			</p>
			<button
				on:click={() => (showModal = true)}
				class="self-start px-8 py-2 mt-4 bg-black text-white rounded-full transition-all delay-1000 group-hover:animate-bounce"
			>
				I Do
			</button>
		</div>
	</div>
</div>
<Footer />

<Modal bind:showModal>
	<WeddingRegistryForm />
</Modal>
