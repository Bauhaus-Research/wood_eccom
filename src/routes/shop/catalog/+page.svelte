<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import productStore from '$lib/stores/productsStore';
	import { blur } from 'svelte/transition';
	let contentDown = [
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		},
		{
			image: '',
			title: 'hi'
		}
	];
</script>

<Nav />

<section
	class="min-h-screen px-5 mx-auto sm:px-10 md:px-20 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-48 bg-neutral-100"
>
	<div class="col-span-full">
		<h1 class="text-4xl md:text-6xl text-start font-bold h-min">All New Arrivals</h1>
		<section class="h-1/2 rounded-lg overflow-clip">
			<img src="/busown1.jpeg" class="w-screen" alt="" />
		</section>
	</div>
	{#each productStore as items, i}
		<a
			in:blur={{ delay: 500 + 50 * i, duration: 200 }}
			target="_self"
			href="/shop/catalog/{items.sku}"
		>
			<div
				class=" pb-8 text-xl max-w-xs mx-auto font-bold text-opacity-60 text-black h-96 rounded-lg bg-red-400"
			>
				<img src={items.image[0]} alt={items.name} />
				<!-- <img class="h-72 w-72" src={items.image} alt={items.image} /> -->
			</div>
		</a>
	{/each}
</section>

<Footer />
