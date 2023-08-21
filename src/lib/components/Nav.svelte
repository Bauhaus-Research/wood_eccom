<script>
	import HamburgerMenu from './HamburgerMenu.svelte';

	let navItem = [{
			title: 'Products',
			link: '/all_products'
		},
		{
			title: 'Brands',
			link: '/brands'
		},
		{
			title: 'Categories',
			link: '/categories'
		},
		{
			title: 'Locations',
			link: '/locations'
		},
		{
			title: 'About',
			link: '/about'
		},
		{
			title: 'Island Dreams',
			link: '/woodcuts_gallery'
		}
	];
	/**
	 * @type {number}
	 */
	export let scrollY;
	let showTapMenu = false;
	function toggleTapMenu() {
		showTapMenu = !showTapMenu;
	}
</script>

<nav
	class=" {scrollY > 10 || showTapMenu == true
		? 'bg-white shadow-lg text-green-900'
		: 'hover:bg-white hover:shadow-lg hover:text-green-900 text-white transition-all bg-transparent'} group transition-colors duration-300 fixed top-0 z-50 left-0 w-screen h-16 items-center flex flex-row justify-between"
>
	<div class="flex ml-10">
		<HamburgerMenu bind:open={showTapMenu} bind:scrollY />
		<div class="mx-2 font-black lg:hidden">|</div>
		<a href="/" class="text-xl font-black md:hidden">WF</a>
		<a href="/" class="text-xl font-black hidden md:block">Wood You Furniture</a>
		{scrollY}
	</div>
	<ul class="flex mr-14">
		{#each navItem as items}
			<li class="mx-3 hidden lg:block"><a href={items.link}>{items.title}</a></li>
		{/each}
		<li>
			<a
				href="/"
				class="ml-5 {scrollY > 10
					? 'bg-green-900 text-white'
					: ''} border-2 border-black rounded-full px-4 py-2 group-hover:bg-green-900 group-hover:text-white transition-all duration-300"
			>
				Call Now
			</a>
		</li>
	</ul>
</nav>

{#if showTapMenu}
	<nav
		class="fixed top-16 left-0 w-screen h-full bg-white text-green-900 flex items-center justify-center z-50"
		on:click={toggleTapMenu}
		on:keydown={toggleTapMenu}
	>
		<!-- Your tap menu content goes here -->
		<ul class="text-center">
			{#each navItem as item}
				<li class="my-3">
					<a href={item.link}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}


