<!-- show cart items -->

<script>
	import Nav from '$lib/components/Nav.svelte';
	import { cart, totalItems } from '$lib/stores/Cart';
	import { onMount } from 'svelte';

	if (typeof window !== 'undefined') {
    // Load cart items from local storage when the component initializes
    const savedCartJSON = localStorage.getItem('cart');
    const savedCart = savedCartJSON ? JSON.parse(savedCartJSON) : [];
    cart.set(savedCart);

	
    // Rest of your component code here...
  }
  const addToCart = (/** @type {any } */ product) => {
	const updatedCart = $cart.map(item => ({ ...item })); // Create a shallow copy

const existingItem = updatedCart.find(item => item.id === product.id);

if (existingItem) {
	existingItem.quantity += 1;
} else {
	updatedCart.push({ ...product, quantity: 1 });
}

cart.set(updatedCart); // Update the cart store

localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
};
  const rmToCart = (/** @type {any } */ product) => {
    const updatedCart = $cart.map(item => ({ ...item })); // Create a shallow copy

    const existingItem = updatedCart.find(item => item.id === product.id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity -= 1; // Corrected line
    }

    cart.set(updatedCart); // Update the cart store

    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

</script>

<section class="grid grid-cols-8">
	<div class="sm:col-span-4 bg-black w-full h-full">
		<div
			class="sm:col-span-4 bg-black w-full h-full"
			style="opacity: 0.5; background-image: url(bauhausresearch_flat_design_bauhaus_app_screens_animated_8c469f6d-c6a5-4879-bbd8-6f72874738f1.PNG);"
		/>
	</div>
	<div class="flex flex-col justify-between h-screen col-span-8 sm:col-span-4">
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
			<div class="flex flex-col justify-center items-center mx-auto w-[90%] mt-8 shadow-lg">
				{#if $totalItems > 0}
					{#each $cart as item}
						<div class="flex flex-row justify-start items-center w-full mb-4">
							<img src={item.image} alt={item.title} class="w-28 h-28 mr-4 rounded-lg" />
							<div class="flex flex-col justify-start items-start w-[100%] mr-4">
								<h1 class="text-sm font-bold">{item.title}</h1>
								<h1 class="text-sm font-light">${item.price}</h1>
								<div class="flex flex-row justify-between w-[100%]">
									<div class="flex flex-row">
										<button
										on:click={()=>{rmToCart(item)}}

											class="focus:bg-gray-300 bg-white transition-colors duration-300 border-[1px] border-gray-200 text-center text-xl rounded-full h-6 w-6 flex flex-row items-center justify-center"
											>-</button
										>
										<h1 class="text-sm font-bold">{item.quantity}</h1>
										<button
										on:click={()=>{addToCart(item)}}
											class="focus:bg-gray-300 bg-white transition-colors duration-300 border-[1px] border-gray-200 text-center text-xl rounded-full h-6 w-6 flex flex-row items-center justify-center"
											>+</button
										>
									</div>
									<button
										class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"

									/>
								</div>
							</div>
						</div>
					{/each}
					<div class="px-[5%] mt-10">
						<div class="flex flex-col">
							<h3 class="font-bold text-2xl">Delivery Option</h3>
							<div class="flex flex-row h-36 justify-between">
								<div class="flex flex-row h-36">
									<div
										class="flex flex-row h-16 w-16 rounded-md border-2 border-black text-green-800"
									>
										Map SVG
									</div>
									<div class="ml-2 flex flex-col text-black text-opacity-50">
										<div class="flex flex-row">home address street</div>
										<div class="flex flex-row">12:00 - 14:00 (Today)</div>
									</div>
								</div>
								<div class="flex flex-row h-36">edit</div>
							</div>
						</div>
					</div>
				{:else}
					<script
						src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
					></script><lottie-player
						class="shadow-sm bg-black h-64 "
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
						href="/all_products"
						class="text-base font-black text-gray-100 delay-100 mb-10 bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 shadow-gray-400 hover:shadow-gray-400 border-gray-300 px-6 py-3 border-2 rounded-full"
						>Discover More</a
					>
				{/if}
			</div>
		</div>

		<section
			class="min-h-48 h-fit justify-evenly w-full flex flex-col text-sm font-semibold text-opacity-50 text-black border-t-2"
		>
			{#if $totalItems > 0}
				<div class="flex flex-col justify-between mx-[5%]">
					<div class="flex flex-row justify-between mx-[5%]">
						<h6>Subtotal</h6>
						<h6 class="text-opacity-70 text-black font-bold">  ${(($totalItems * 1924.96).toFixed(2))} </h6>
					</div>
					<div class="flex flex-row justify-between mx-[5%]">
						<h6>VAT</h6>
						<h6 class="text-opacity-70 text-black font-bold">  ${(($totalItems * 274.99).toFixed(2))} </h6>
					</div>
					<div class="flex flex-row justify-between mx-[5%]">
						<h6>Delivery Costs</h6>
						<h6 class="text-opacity-70 text-black font-bold">FREE</h6>
					</div>
				</div>
				<div class="flex flex-row justify-between mx-[9.5%] mt-4">
					<h6>Total</h6>
					<h6 class="text-opacity-90 text-black font-bold text-lg">  ${(($totalItems * 2199.95).toFixed(2))} </h6>
				</div>
				<a href="https://buy.stripe.com/test_3cs3eT3TLeSI3U4aEE" 
				class="w-[90%] rounded-2xl bg-green-900 h-16 mx-auto mb-2 text-center flex-col flex justify-center items-center">
					<h1 class="text-white font-light text-lg">
						<strong class="mr-1 text-xl">Checkout</strong>( ${(($totalItems * 2199.95).toFixed(2))})
					</h1>
				</a>
			{:else}
				<h1 class="ml-[5%]">You May Be Interested In</h1>
				<div class="w-[90%] ml-[5%] overflow-x-auto snap-x">
					<div class="flex flex-row overflow-x-scrol w-fit h-36 snap-proximity">
						<a
							href="/all_products/storage"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('bauhausresearch_storageCubese.webp')">Storage</a
						>
						<a
							href="/all_products/decoration"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-center"
							style="background-image: url('engraved-islands-of-the-bahamas-.webp')">Decorations</a
						>
						<a
							href="/all_products/rugs"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('carpet.webp')">Rugs</a
						>
						<a
							href="/all_products/dining"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('dinings.webp')">Dining</a
						>
						<a
							href="/all_products/bedroom"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('bed.webp')">Bedroom</a
						>
						<a
							href="/all_products/outdoor"
							class="h-36 w-52 flex flex-col justify-center items-center text-center hover:bg-opacity-70 bg-blend-overlay hover:text-opacity-95 text-opacity-0 text-white bg-opacity-0 transition-all duration-150 bg-black mr-2 bg-cover bg-center"
							style="background-image: url('outtdoor.webp')">Outdoor</a
						>
					</div>
				</div>
			{/if}
		</section>
	</div>
</section>
