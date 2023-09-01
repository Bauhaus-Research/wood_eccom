<script>

	import HamburgerMenu from './HamburgerMenu.svelte';
	import { blur } from 'svelte/transition';
	let navItem = [
		{
			title: 'Mission',
			link: '/about'
		},
		{
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
	let showTapMenu = false;
	function toggleTapMenu() {
		showTapMenu = !showTapMenu;
	}


</script>

<nav
	in:blur={{}}
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
			{#each navItem as items}
				<li class="fade-underline md:mx-3 mx-0 cursor-not-allowed">
					<h1>{items.title}</h1></li>
			{/each}
		</div>
		
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
			
			<ul class="text-center mt-10 mb-30">
				{#each navItem as item}
				<li class="my-3">
					<h1>{item.title}</h1>
				</li>
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
