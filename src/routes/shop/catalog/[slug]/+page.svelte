<script>
	import '../../../styles.css';
	import '../../../../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import productStore, { uniqueCategoriesStore } from '$lib/stores/productsStore';
	import { addToCart } from '$lib/stores/cartStore';
	import ProductCard from '$lib/components/ProductCard.svelte';

	/**
	 * @type {number}
	 */
	let y = 0;

	let showDescription = false;
	function showDescriptionToggle() {
		// Your code to show or toggle the description goes here
		// You can return the JSX/HTML structure for displaying the description.
		return (showDescription = !showDescription);
	}
	export let data;

</script>

<Nav />
<svelte:window bind:scrollY={y} />

<section class="flex flex-col-reverse lg:flex-row">
	<div class="h-full w-full lg:w-2/3 flex flex-col justify-center">
		{#each data.image as item}
			<img src="/{item}" class="w-auto aspect-auto mt-24" alt="" />
		{/each}
		{#if data.detailedDescription[0] !== null}
			<table class="table-auto w-[80%] mt-24 mx-auto border-b-2 border-neutral-300">
				<thead class="h-24 text-start">
					<tr>
						<th class="text-start font-bold text-3xl">Description</th>

						<th
							on:click={showDescriptionToggle}
							class="font-light text-base text-end h-14 w-full transition-all duration-200"
							><img
								class="h-10 w-10 relative top-0 right-0 ml-auto {showDescription
									? 'transform rotate-180'
									: ''} transition-all duration-200"
								src="/chev.svg"
								alt="chevron svg toggle"
							/></th
						>
					</tr>
				</thead>

				<tbody class="font-light text-lg {showDescription ? 'hidden' : ''}">
					{#each data.detailedDescription as item, index}
						<tr class="{index % 2 === 1 ? 'bg-red-200' : ''} h-12">
							<td class="font-semibold pl-2 text-base">{item.heading}</td>

							<td class="font-light pr-2 text-base text-end max-w-xs w-full">{item.content}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
	<div
		class="sticky top-16 right-0 lg:w-1/3 {y < 10
			? 'py-8'
			: 'py-4 lg:py-8'}  transition-all duration-300 w-full h-min sm:px-10 px-4 bg-white"
	>
		<div
			class=" {y < 10
				? 'flex-col'
				: 'flex-row justify-between w-full lg:flex-col lg:justify-start'} flex h-min"
		>
			<h1
				class="{y < 10
					? 'text-4xl font-bold '
					: 'text-2xl font-bold lg:font-bold  lg:text-4xl'} transition-all duration-200 text-start w-full"
			>
				{data.title}
			</h1>
			<p
				class="{y < 10
					? 'block'
					: 'hidden lg:block'} font-light text-lg mt-2 transition-all duration-200 text-start w-full my-4"
			>
				{data.shortendDescription}
			</p>
			<h3 class="font-bold text-2xl">{data.price}</h3>
		</div>
		<div class="flex flex-row w-full mt-4">
			<button
				on:click={() => {
					addToCart({
						id: data.sku,
						amount: 1
					});
				}}
				class=" w-48 text-center py-4 bg-black text-neutral-50 rounded-md shadow-lg font-bold mr-2"
				>Add To Cart</button
			>
			<button
				class="w-48 text-center py-4 bg-black text-neutral-50 rounded-md shadow-lg font-bold mr-2"
				>One-Click</button
			>
		</div>
		<div
			class="border-t-2 mt-8 {y < 10
				? 'block'
				: 'hidden lg:block'} border-black transition-all duration-200"
		/>
		<div class="flex flex-row {y < 10 ? 'block' : 'hidden lg:block'} transition-all duration-200">
			{#if data.stock === true}
				<div class="flex">
					Online
					<div class="bg-green-400 h-2 aspect-square rounded-full my-auto ml-2" />
				</div>
			{:else}
				<div class="flex">
					Back Order
					<div class="bg-red-400 h-2 aspect-square rounded-full my-auto ml-2" />
				</div>
			{/if}
		</div>
	</div>
</section>
<section class="">
	<h1 class="ml-[5%] font-bold text-3xl pt-12">You May Be Interested In</h1>

	<div class="w-[90%] ml-[5%] flex flex-col mx-auto my-12 border-t-neutral-200 border-t-2">
		<div class="flex flex-row justify-between">
			<div>
				<h5 class="font-bold sm:text-xl text-lg my-4">{data.category}</h5>
			</div>
			<div class="font-light sm:text-sm text-xs flex">
				<a href="/shop/categories/{data.category}" class="flex items-center group">
					<strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all"
						>+</strong
					>
					<span class="ml-1 fade-underline w-24 min-w-fit">View All </span>
				</a>
			</div>
		</div>

		<section class=" flex flex-row">
			<div class="overflow-x-auto snap-x">
				<div class="flex flex-row overflow-x-scrol w-fit h-fit snap-mandatory snap-x">
					{#each productStore as product}
						{#if product.category === data.category}
							<ProductCard
								sku={product.sku}
								title={product.name}
								price={product.price}
								image={product.image}
								shortedDesc={product.shortendDescription}
								slug={'/shop/catalog/' + product.sku}
							/>
						{/if}
					{/each}
				</div>
			</div>
		</section>
	</div>

	<div class="w-[90%] ml-[5%] flex flex-col mx-auto my-12 border-t-neutral-200 border-t-2">
		<div class="flex flex-row justify-between">
			<div>
				<h5 class="font-bold sm:text-xl text-lg my-4">Other Products from {data.brand}</h5>
			</div>
			<div class="font-light sm:text-sm text-xs flex">
				<a href="/shop/categories/{data.category}" class="flex items-center group">
					<strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all"
						>+</strong
					>
					<span class="ml-1 fade-underline w-24 min-w-fit">View All </span>
				</a>
			</div>
		</div>

		<section class=" flex flex-row">
			<div class="overflow-x-auto snap-x">
				<div class="flex flex-row overflow-x-scrol w-fit h-fit snap-mandatory snap-x">
					{#each productStore as product}
						{#if product.brand === data.brand}
							<ProductCard
								sku={product.sku}
								title={product.name}
								price={product.price}
								image={product.image}
								shortedDesc={product.shortendDescription}
								slug={'shop/catalog/' + product.sku}
							/>
						{/if}
					{/each}
				</div>
			</div>
		</section>
	</div>
</section>

<Footer />
