<script>
	import { blur } from 'svelte/transition';
</script>

<section
	class="h-[80vh] flex flex-col-reverse lg:flex-row justify-end items-center overflow-hidden bg-[#f0efec]"
>
	<div class="flex flex-col justify-between items-start text-start opacity-100 mx-auto px-4">
		<h1
			transition:blur={{ delay: 300, duration: 300 }}
			class=" text-5xl mb-4 text-black font-semibold text-start font-sans"
		>
			SALE
		</h1>
		<h1
			transition:blur={{ delay: 300, duration: 300 }}
			class="text-base sm:text-xl mb-4 text-black font-light text-start font-serif"
		>
			Incredible deals. Top-of-the-line design for less.
		</h1>
		<a target="_self" href="/shop/sales" class="bg-black rounded-lg py-4 px-6 text-white">
			See Our Big Sale
		</a>
	</div>
	<div class="flex flex-col justify-center items-center opacity-100 mx-auto">
		<img
			src="/big-sale-banner.avif"
			alt="desk"
			class="h-full aspect-auto lg:max-h-[28rem] xl:max-h-screen max-h-80 self-end w-full"
		/>
	</div>
</section>
