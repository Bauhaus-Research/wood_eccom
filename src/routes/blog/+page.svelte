<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { Toaster } from 'svelte-french-toast';
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
		<h1 class="text-4xl md:text-6xl text-start font-bold h-min">Stories</h1>
		<p class=" text-sm md:text-xl text-start font-light h-min mb-12">
			Our Thoughts to get you through your day
		</p>
	</div>
	{#each contentDown as items, i}
		<a in:blur={{ delay: 500 + 50 * i, duration: 200 }} target="_self" href="/blog/{items.title}">
			<div
				class=" pb-8 text-xl max-w-xs mx-auto font-bold text-opacity-60 text-black h-96 rounded-lg bg-red-400"
			>
				<img src={items.image} alt={items.title} />
				<!-- <img class="h-72 w-72" src={items.image} alt={items.image} /> -->
				{items.title}
			</div>
		</a>
	{/each}
</section>

<Footer />

<Toaster />