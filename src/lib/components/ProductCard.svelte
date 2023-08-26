<script>
	import Button from './Button.svelte';
	import Heart from './Heart.svelte';
	/**
	 * @type {string}
	 */
	export let image;
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {number}
	 */
	export let price;
	export let discount_percent = 0;
	/**
	 * @type {number}
	 */
</script>

<div
	class="h-fit snap-start w-min box-border border-l-[1px] border-[1px] mx-1 overflow-x-clip list-none border-gray-200 transition duration-200 ease-in font-base text-base hover:bg-gray-200 sm:col-span-2 col-span-3"
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
			<div
				class=" w-full aspect-square group bg-cover flex flex-col justify-end items-end"
				style="background-image: url('{image}'); "
			>
				<Heart id={title} />
			</div>
		</div>
		<h1 class="text-start text-base font-semibold mx-4 w-80">{title}</h1>
		<div class="flex flex-col self-start justify-between h-min w-full pb-4 px-4">
			<div class="text-start text-lg font-bold" />
			{#if discount_percent > 0}
				<h1 class="text-start text-sm mb-1 font-light line-through italic">${price}</h1>
				<h1 class="text-start text-xs mb-4 font-bold">
					$<strong class="text-xl align-middle">{Math.floor(price)}</strong>.95
				</h1>
			{/if}
			<Button />
			<div class="h-16" />
		</div>
	</div>
</div>
