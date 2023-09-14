<script>
	import HamburgerMenu from './HamburgerMenu.svelte';
	import { blur } from 'svelte/transition';
<<<<<<< HEAD
	import { totalItems } from '$lib/stores/cartStore';
	import OpensClose from './OpensClose.svelte';
=======
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
	let navItem = [
		{
			title: 'Mission',
			link: '/about'
		},
		{
<<<<<<< HEAD
			title: 'Gallery',
			link: '/woodcuts_gallery'
		},
		{
			title: 'Stories',
			link: '/blog'
		},
		{
			title: 'Shop',
			link: '/shop'
		}
	];
=======
			title: 'Eligibility',
			link: '/all_products'
		},
		{
			title: 'Compare Plans',
			link: '/woodcuts_gallery'
		},
		{
			title: 'About',
			link: '/affiliated_brands'
		},
		{
			title: 'News',
			link: '/about'
		}
	];
	/**
	 * @type {number}
	 */
	export let scrollY;
		/**
	 * @type {number}
	 */
	 export let innerHeight;
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
	let showTapMenu = false;
	function toggleTapMenu() {
		showTapMenu = !showTapMenu;
	}
</script>

<nav
	in:blur={{}}
<<<<<<< HEAD
	class=" group transition-colors bg-neutral-100 shadow-lg duration-300 fixed top-0 z-50 left-0 w-screen h-16 items-center flex flex-row justify-between"
>
	<div class="flex flex-row justify-center items-center text-center ml-2 md:ml-14">
		<HamburgerMenu bind:open={showTapMenu} />
		<div class="mx-1 font-black lg:hidden text-green-950">|</div>
		<a href="/" class="text-sm w-fit line-clamp-2 text-start md:text-xl text-green-950 font-black"
			>Wood You Furniture</a
		>
		<div class="lg:block hidden w-0 lg:w-fit ml-10">
=======
	class=" {(scrollY > innerHeight*4-80&&scrollY < innerHeight*5-80 )|| scrollY > innerHeight*6-80
		? 'bg-neutral-900 shadow-lg text-blue-100'
		: scrollY > 10 || showTapMenu == true
		? 'bg-white shadow-lg text-blue-900'
		: 'hover:bg-white hover:shadow-lg hover:text-blue-900 text-white transition-all bg-transparent'} {scrollY >innerHeight-80 ? 'h-16' : 'h-28'} group transition-all duration-300 fixed top-0 z-50 left-0 w-screen items-center flex flex-row justify-between"
>
	<div class="flex flex-row justify-center items-center text-center ml-5 md:ml-14">
		<a href="/" class="text-sm w-fit md:text-xl font-black"><img src="insure.svg" alt="logo" class=" {scrollY >innerHeight-80 ? 'h-14' : 'h-20'} transition-all duration-300"></a>
	</div>
	<ul class="flex flex-row justify-end items-center text-center mr-5 md:mr-14">
		<HamburgerMenu bind:open={showTapMenu} bind:scrollY />

		<div class="lg:block hidden w-0 lg:w-fit">
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
			{#each navItem as items}
				<li class="fade-underline md:mx-3 mx-0 cursor-not-allowed">
					<h1>{items.title}</h1></li>
			{/each}
		</div>
<<<<<<< HEAD
	</div>
	<ul
		class="flex flex-row justify-end items-center text-end mr-2 md:mr-14 max-w-[20%] sm:max-w-xs w-full"
	>
		<div
			class="{$totalItems == 0
				? 'hidden'
				: ''} py-1 px-3 text-white text-opacity-70 translate-x-4 translate-y-4 rounded-full bg-black bg-opacity-30 hidden sm:block"
		>
			{$totalItems}
		</div>
		<a href="/cart" class="h-6 sm:h-8 mr-4">
			<svg
				class="{$totalItems === 1
					? 'animate-pulse text-opacity-80'
					: $totalItems === 2
					? 'animate-pulse duration-[10ms] text-opacity-80'
					: $totalItems === 3
					? 'animate-pulse  text-opacity-90'
					: $totalItems >= 4
					? 'animate-bounce text-opacity-100 text-green-900'
					: ''} h-full w-full hover:fill-current group-hover:text-green-900 transition-all"
				viewBox="0 -0.5 20 20"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<title>shopping_cart_round [#1137]</title>
				<desc>Created with Sketch.</desc>
				<defs />
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g
						id="Dribbble-Light-Preview"
						transform="translate(-140.000000, -3120.000000)"
						fill="currentColor"
					>
						<g id="icons" transform="translate(56.000000, 160.000000)">
							<path
								d="M98.477,2976.95566 L89.541,2976.95566 C89.052,2976.95566 88.635,2976.59484 88.555,2976.10113 L87.361,2968.77831 L100.819,2968.77831 L99.46,2976.12362 C99.37,2976.60608 98.958,2976.95566 98.477,2976.95566 L98.477,2976.95566 Z M101,2966.73398 L97.473,2960.51101 C97.198,2960.02651 96.592,2959.85887 96.116,2960.1369 L96.116,2960.1369 C95.635,2960.41697 95.47,2961.04356 95.747,2961.53216 L98.69,2966.73398 L89.309,2966.73398 L92.257,2961.53625 C92.532,2961.0497 92.371,2960.42822 91.897,2960.14405 L91.888,2960.13894 C91.411,2959.85478 90.798,2960.02037 90.522,2960.50897 L87,2966.73398 L85,2966.73398 C84.447,2966.73398 84,2967.19191 84,2967.75614 C84,2968.32038 84.447,2968.77831 85,2968.77831 L85.333,2968.77831 L86.721,2977.29196 C86.882,2978.27733 87.716,2979 88.694,2979 L99.305,2979 C100.283,2979 101.118,2978.27733 101.278,2977.29196 L102.666,2968.77831 L103,2968.77831 C103.552,2968.77831 104,2968.32038 104,2967.75614 C104,2967.19191 103.552,2966.73398 103,2966.73398 L101,2966.73398 Z"
								id="shopping_cart_round-[#1137]"
							/>
						</g>
					</g>
				</g>
			</svg>
		</a>

		<a href="/favourites" class="h-8">
			<svg
				class=" h-full w-full"
				width="800px"
				height="800px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z"
					fill="currentColor"
				/>
			</svg>
		</a>

		<div class="hidden lg:block">
			<OpensClose />
		</div>
=======
		
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
	</ul>
</nav>

{#if showTapMenu}
	<nav
		class="fixed top-16 left-0 w-screen h-full bg-white text-blue-900 flex items-center justify-center z-10"
		on:click={toggleTapMenu}
		on:keydown={toggleTapMenu}
	>
		<!-- Your tap menu content goes here -->
		<div>
<<<<<<< HEAD
			<OpensClose />
			<ul class="text-center mt-10 mb-30">
				{#each navItem as item}
					<li class="my-3">
						<a href={item.link}>{item.title}</a>
					</li>
=======
			
			<ul class="text-center mt-10 mb-30">
				{#each navItem as item}
				<li class="my-3">
					<h1>{item.title}</h1>
				</li>
>>>>>>> 7536e9c2a44f7ab460eb677b8e13d775c599a4b5
				{/each}
			</ul>
		</div>
	</nav>
{/if}

<style>
	.fade-underline {
		position: relative;
		display: inline-block;
		padding-bottom: 1px; /* Adjust as needed */
	}

	.fade-underline::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px; /* Adjust as needed */
		background-color: rgb(30, 58, 138); /* Change to your desired color */
		transform-origin: left center;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}

	.fade-underline:hover::before {
		transform: scaleX(1);
		transform-origin: right center;
	}
</style>
