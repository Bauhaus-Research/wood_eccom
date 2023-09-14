<script>
	import { blur } from 'svelte/transition';
	export let header = 'header';
	export let subheader = 'subheader';
</script>

<section
	class="h-[80vh] flex flex-col-reverse lg:flex-row justify-end items-center overflow-hidden bg-stone-200 bg-[url('/big-sale-banner.avif')] bg-cover bg-center"
>
	<div class="flex flex-col justify-center items-center text-center opacity-100 mx-auto px-4">
		<h1
			transition:blur={{ delay: 300, duration: 300 }}
			class=" text-5xl mb-4 text-black font-semibold text-center font-sans"
		>
			{header}
		</h1>
		<h1
			transition:blur={{ delay: 300, duration: 300 }}
			class="text-base sm:text-xl mb-4 text-black font-light text-center font-serif"
		>
			{subheader}
		</h1>
	</div>
</section>
