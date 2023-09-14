<script>
	import Button from './Button.svelte';
	import BrokenHeart from './BrokenHeart.svelte';
	import Trash from './Trash.svelte';
	import { Toaster } from 'svelte-french-toast';
	export let slug = '/shop/item';

	export let title = 'title 1';
	export let price = 100;
	export let discount_percent = 0;
	/**
	 * @type {string}
	 */
	export let sku;
	export let image = ['busown1.jpeg', 'busown2.jpeg', 'busown3.jpeg'];
	export let shortedDesc = 'This is the short description for the product';
</script>

<div
	class="col-span-6 sm:col-span-4 lg:col-span-3 my-1 h-fit snap-start overflow-clip rounded-sm max-w-[14rem] sm:max-w-xs w-full box-border border-l-[1px] border-[1px] mx-1 overflow-x-clip list-none border-gray-200 transition duration-200 ease-in font-base text-base hover:bg-gray-200"
>
	<div class="flex flex-col justify-between items-start">
		{#if discount_percent > 0}
			<div
				class="h-6 bg-green-900 text-sm font-bold text-green-200 rounded-r-lg text-center px-2 mt-1"
			>
				Sale
			</div>
		{/if}
		<div class="w-full">
			<a
				href={slug}
				target="_self"
				class=" w-full aspect-square group bg-cover flex flex-col justify-end items-end"
			>
				<img
					src={'/' + image[0]}
					alt=""
					class=" w-full h-full object-cover"
				/>
				<!-- {#each image as item}
			<img src="{item.image}" alt="">
			{/each} -->
			</a>
		</div>
		<div class="flex flex-wrap w-[90%]">
			<h1 class="text-start text-base sm:text-lg font-semibold mx-4 w-80">{title}</h1>
			<p class="ml-4 sm:text-sm text-xs line-clamp-1">{shortedDesc}</p>
			<div class="flex flex-col line-clamp-1 self-start justify-between h-full w-full pb-0 px-4">
				{#if discount_percent > 0}
					<h1 class="text-start text-sm mb-1 font-light line-through italic">${price}</h1>
					<h1 class="text-start text-xs mb-4 font-bold">
						$<strong class="text-2xl align-middle">{Math.floor(price)}</strong>.95
					</h1>
				{:else}
					<h1 class="text-start text-xs mb-4 font-bold">
						$<strong class="text-2xl align-middle">{Math.floor(price)}</strong>.95
					</h1>
				{/if}
			</div>
			<div class="flex h-14 my-2 ml-4">
				<Button {sku} />
				<BrokenHeart {sku} />
			</div>
		</div>
	</div>
</div>
