<!-- show cart items -->

<script>
	import Modal from '$lib/components/Modal.svelte';
	import Trash from '$lib/components/Trash.svelte';
	import { cart, totalItems, addToCart, rmToCart, totalPrice } from '$lib/stores/cartStore';
	import productStore from '$lib/stores/productsStore';
	import { loadStripe } from '@stripe/stripe-js';
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	let showModal = false;
	if (typeof window !== 'undefined') {
		// Load cart items from local storage when the component initializes
		const savedCartJSON = localStorage.getItem('cart');
		const savedCart = savedCartJSON ? JSON.parse(savedCartJSON) : [];
		cart.set(savedCart);

		// Rest of your component code here...
	}
</script>


<section class="grid grid-cols-8">
	<div class="md:col-span-4 sm:col-span-3 lg:col-span-5 bg-black w-full h-full">
		<div
			class="md:col-span-4 sm:col-span-3 lg:col-span-5 bg-black w-full h-full"
			style="opacity: 0.5; background-image: url(bauhausresearch_flat_design_bauhaus_app_screens_animated_8c469f6d-c6a5-4879-bbd8-6f72874738f1.PNG);"
		/>
	</div>
	<div
		class="flex flex-col justify-between h-screen col-span-8 lg:col-span-3 md:col-span-4 sm:col-span-5"
	>
		<div class="overflow-y-scroll">
			<div class="flex flex-col text-center items-start ml-[5%] mt-6">
				<h1 class="font-bold text-3xl mb-2">Shopping Cart</h1>

				<div class="flex flex-row text-center items-center">
					<a href="/" class="mr-2 text-xs font-light">Home</a>
					<h6 class="mr-2 text-xs font-light">/</h6>
					<button
						on:click={() => {
							history.back();
						}}
						class="mr-2 text-xs font-light">Previous</button
					>
					<h6 class="mr-2 text-xs font-light">/</h6>
					<h6 class="underline-offset-1 underline text-xs font-light pointer-events-none">Cart</h6>
				</div>
			</div>

			<!-- log all the cart items -->
			<!-- <pre>{JSON.stringify(productsStore, null, 2)}</pre> -->
			<div class="flex flex-col justify-center items-center mx-auto w-[90%] mt-8">
				{#if $totalItems > 0}
					{#each $cart as item}
						{#each productStore as product}
							{#if product.sku === item.sku}
								<div class="flex flex-row justify-start items-center w-full mb-4">
									<img
										src="/{product.image[0]}"
										alt={product.name}
										class="h-28 w-28 object-cover bg-center mr-4 rounded-lg"
									/>
									<div class="flex flex-col justify-start items-start w-[100%] mr-4">
										<h1 class="text-sm font-bold">{product.name}</h1>
										<h1 class="text-sm font-light">${product.price}</h1>
										<div class="flex flex-row justify-between w-[100%]">
											<div class="flex flex-row">
												<button
													on:click={() => {
														rmToCart({ id: item.sku, amount: 1 });
													}}
													class="focus:bg-gray-300 bg-white transition-colors duration-300 border-[1px] border-gray-200 text-center text-xl rounded-full h-6 w-6 flex flex-row items-center justify-center"
													>-</button
												>
												<h1 class="text-sm font-bold">{item.quantity}</h1>
												<button
													on:click={() => {
														addToCart({ id: item.sku, amount: 1 });
													}}
													class="focus:bg-gray-300 bg-white transition-colors duration-300 border-[1px] border-gray-200 text-center text-xl rounded-full h-6 w-6 flex flex-row items-center justify-center"
													>+</button
												>
											</div>
											<Trash sku={item.sku} />
										</div>
									</div>
								</div>
							{/if}
						{/each}
					{/each}
					<div class="mx-[5%] mt-10 w-full mb-[20vh]">
						<div class="flex flex-col">
							<h3 class="font-bold text-2xl">Delivery Option</h3>
							<div class="flex flex-row h-36 w-full justify-between">
								<div class="flex flex-row h-36">
									<div class="flex flex-row h-16 w-16 rounded-md">
										<img src="/maplocation.svg" alt="map icon" />
									</div>
									<div class="ml-2 flex flex-col text-black text-opacity-50">
										<div class="flex flex-row">home address street</div>
										<div class="flex flex-row">12:00 - 14:00 (Today)</div>
									</div>
								</div>
								<button
									on:click={() => {
										showModal = !showModal;
									}}
									on:keydown={() => {
										showModal = !showModal;
									}}
									class="flex flex-row h-36 text-sm font-bold text-neutral-600 underline"
								>
									Edit
								</button>
							</div>
						</div>
					</div>
				{:else}
					<script
						src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
					></script><lottie-player
						class="shadow-sm bg-black h-64"
						src="https://lottie.host/9f6e83c2-2bb6-44a0-8c9e-d30b3fd756a9/T26qbBFaVH.json"
						background="#FFFFFF"
						speed="1"
						direction="1"
						mode="normal"
						loop
						autoplay
					/>
					<h2 class="text-xl font-bold text-gray-600">Nothing Yet</h2>
					<a
						href="/shop"
						class="text-base font-black text-gray-100 delay-100 mb-10 bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 shadow-gray-400 hover:shadow-gray-400 border-gray-300 px-6 py-3 border-2 rounded-full"
						>Discover More</a
					>
				{/if}
			</div>
		</div>

		<section
			class="min-h-48 overflow-clip h-fit py-4 topShadow shadow-green-700 justify-evenly w-full bg-stone-50 flex flex-col text-sm font-semibold text-opacity-50 text-black border-t-2 sticky bottom-0 z-10"
		>
			{#if $totalItems > 0}
				<div class="flex flex-col justify-between mx-[5%]">
					<div class="flex flex-row justify-between mx-[5%]">
						<h6>Subtotal</h6>
						<h6 class="text-opacity-70 text-black font-bold">
							${($totalPrice * 0.875).toFixed(2)}
						</h6>
					</div>
					<div class="flex flex-row justify-between mx-[5%]">
						<h6>VAT</h6>
						<h6 class="text-opacity-70 text-black font-bold">
							${($totalPrice * 0.125).toFixed(2)}
						</h6>
					</div>
					<div class="flex flex-row justify-between mx-[5%]">
						<h6>Delivery Costs</h6>
						<div class="flex">
							<h6 class="text-opacity-50 text-black font-light line-through">
								${($totalPrice * 0.05).toFixed(2)}
							</h6>
							<h6 class="text-opacity-70 text-black font-bold ml-2">FREE</h6>
						</div>
					</div>
				</div>
				<div class="flex flex-row justify-between mx-[9.5%] mt-4">
					<h6>Total</h6>
					<h6 class="text-opacity-90 text-black font-bold text-lg">
						${$totalPrice.toFixed(2)}
					</h6>
				</div>
				<button
					on:click={() => {
						showModal = !showModal;
					}}
					class="w-[90%] rounded-2xl bg-green-900 h-16 mx-auto mb-2 text-center flex-col flex justify-center items-center"
				>
					<h1 class="text-white font-light text-lg">
						<strong class="mr-1 text-xl font-bold">Checkout </strong>(${$totalPrice.toFixed(2)})
					</h1>
				</button>
			{:else}
				<h1 class="ml-[5%]">You May Be Interested In</h1>
				<div class="w-[90%] ml-[5%] overflow-x-auto snap-x">
					<div class="flex flex-row overflow-x-scrol w-fit h-36 snap-proximity">
						<a
							href="/shop/storage"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('bauhausresearch_storageCubese.webp')">Storage</a
						>
						<a
							href="/shop"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-center"
							style="background-image: url('engraved-islands-of-the-bahamas-.webp')">Decorations</a
						>
						<a
							href="/shop"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('carpet.webp')">Rugs</a
						>
						<a
							href="/shop"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('dinings.webp')">Dining</a
						>
						<a
							href="/shop"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('bed.webp')">Bedroom</a
						>
						<a
							href="/shop"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('outtdoor.webp')">Outdoor</a
						>
					</div>
				</div>
			{/if}
		</section>
	</div>
</section>

<Modal {showModal}>Hi</Modal>

<Toaster />