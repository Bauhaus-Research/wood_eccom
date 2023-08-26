<script>
	import ProductCard from './ProductCard.svelte';
	export let title = 'title';
	export let introItem = [
		{
			title: 'Eat',
			price: 1,
			image: 'dinings.webp'
		}
	];
</script>

<div class="w-[90%] ml-[5%] flex flex-col mx-auto my-12">
	<div class="flex flex-row justify-between">
		<h1 class="font-bold sm:text-3xl text-lg">{title}</h1>
		<div class="font-light sm:text-sm text-xs flex">
			<a href="/all_products" class="flex items-center group">
				<strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all"
					>+</strong
				>
				<span class="ml-1 fade-underline">View Products</span>
			</a>
		</div>
	</div>

	<section class=" flex flex-row">
		<div class="overflow-x-auto snap-x">
			<div class="flex flex-row overflow-x-scrol w-fit h-fit snap-mandatory snap-x">
				{#each introItem as product}
					<ProductCard title={product.title} image={product.image} price={product.price} />
				{/each}
			</div>
		</div>
	</section>
</div>
