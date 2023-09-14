<script>
	import ProductCard from './ProductCard.svelte';
	export let title = 'title';
	export let titlelink = 'title';
	export let subtitle =
		'Beautiful appliances that save you time and effort. Enjoy professional results from home.';
	import productStore from '$lib/stores/productsStore';
</script>

<div class="w-[90%] ml-[5%] flex flex-col mx-auto my-12 border-t-neutral-200 border-t-2">
	<div class="flex flex-row justify-between">
		<div>
			<h5 class="font-bold sm:text-xl text-lg my-4">{title}</h5>
			<p
				class="font-light mb-4 sm:text-sm text-xs w-[95%] line-clamp-2 hover:line-clamp-none max-w-xl"
			>
				{subtitle}
			</p>
		</div>
		<div class="font-light sm:text-sm text-xs flex">
			<a href={titlelink} class="flex items-center group">
				<strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all"
					>+</strong
				>
				<span class="ml-1 fade-underline w-24 min-w-fit">View All</span>
			</a>
		</div>
	</div>

	<section class=" flex flex-row">
		<div class="overflow-x-auto snap-x">
			<div class="flex flex-row overflow-x-scrol w-fit h-fit snap-mandatory snap-x">
				{#each productStore as product}
					<ProductCard
						sku={product.sku}
						title={product.name}
						image={product.image}
						price={product.price}
						slug="shop/catalog/{product.sku}"
					/>
				{/each}
			</div>
		</div>
	</section>
</div>
