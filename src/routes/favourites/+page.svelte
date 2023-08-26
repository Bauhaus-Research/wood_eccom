<!-- show cart items -->

<script>
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { productsFAVS, totalItemsFAVS } from '$lib/stores/Favs';
				import { default as FaqItem } from '$lib/components/FaqItem.svelte';
	import Footer from '$lib/components/Footer.svelte';
				export let items = [
					{
						title: "What is Wood You Furniture's primary goal?",
						description:
							`Wood You Furniture's primary goal is three-fold: to provide quality all wood furniture at affordable prices, educate customers about furniture and the furniture finishing process through the "Do It Yourself" concept, and deliver quality customer service.`
						},
					{
						title: "What is Wood You Furniture's uniqueness as a furniture store?",
						description:`Wood You Furniture stands out as a unique furniture store due to its focus on providing quality unfinished wood furniture. It does not use particle board or other artificially fabricated materials in its production process.`
					},
					{
						title: `What makes Wood You Furniture's unfinished furniture concept successful?`,
						description:`Wood You Furniture's focus on unfinished real wood furniture has been successful in "virgin territory" and is consistently ranked as the Top Sales Store among all Wood You Furniture Stores in North America and the Caribbean.`
					},
					{
						title: 'Is Wood You Furniture environmentally conscious?',
						description:`Yes, Wood You Furniture prides itself on being a "Green Furniture Store." It offers eco-friendly furniture made from plantation-grown woods certified by the Forestry Stewardship Council (FSC) to meet social, economic, and ecological needs.`
					},
					{
						title: 'What types of furniture does Wood You Furniture offer?',
						description:`Wood You Furniture offers a wide range of home furnishing products including bedroom, dining room, living room, office, outdoor, and children's furniture. The store also provides entertainment centers, occasional tables, and bookcases.`
					},
					{
						title: `What is the Managing Director's perspective on customer satisfaction?`,
						description:`The Managing Director, Mr. Patrick Rollins, emphasizes that Wood You Furniture listens to its customers and constantly seeks ways to exceed their expectations, aiming for every customer experience to be pleasant and successful.`
					},
					{
						title: `What is Wood You Furniture's location and contact information?`,
						description:`Wood You Furniture is located at 19 Madeira Street, Nassau, Bahamas, with contact details including phone number 242-325-9663 and email sales@woodyoubahamas.com.`
					},
					{
						title: `Which areas does Wood You Furniture serve in the Bahamas?`,
						description:`Wood You Furniture happily serves the entire Bahamas, including New Providence and all Family Islands such as Abaco, Andros, Grand Bahama, Exuma, and many others.`
					},
					{
						title: `What core value drives Wood You Furniture's success?`,
						description:`Wood You Furniture is committed to sustainability by selling eco-friendly furniture made from plantation-grown woods certified by the Forestry Stewardship Council (FSC), ensuring responsible forest management.`
					}
				];
			</script>

<Nav scrollY={20} />
<section>
	<div class="overflow-y-scroll mt-24">
		<div class="flex flex-col text-center items-start ml-[5%] mt-6">
			<h1 class="font-bold text-3xl mb-2 self-center">Favourites List</h1>

			<div class="flex flex-row text-center items-center self-center">
				<a href="/" class="mr-2 text-xs font-light">Home</a>
				<h6 class="mr-2 text-xs font-light">/</h6>
				<button
					on:click={() => {
						history.back();
					}}
					class="mr-2 text-xs font-light">Previous</button
				>
				<h6 class="mr-2 text-xs font-light">/</h6>
				<h6 class="underline-offset-1 underline text-xs font-light pointer-events-none">
					Favourites
				</h6>
			</div>
		</div>

		<!-- log all the cart items -->
		<!-- <pre>{JSON.stringify(productsStore, null, 2)}</pre> -->
		<div class="flex flex-col justify-center items-center mx-auto w-[90%] mt-8 shadow-lg">
			{#if $totalItemsFAVS > 0}
				{#each $productsFAVS as item}
				not yet ready
					<!-- <div class="flex flex-row justify-start items-center w-full mb-4">
						<img src={item.image} alt={item.title} class="w-28 h-28 mr-4 rounded-lg" />
						<div class="flex flex-col justify-start items-start w-[100%] mr-4">
							<h1 class="text-sm font-bold">{item.title}</h1>
							<h1 class="text-sm font-light">${item.price}</h1>
							<div class="flex flex-row justify-between w-[100%]">
								<div class="flex flex-row">
									<button
										class="focus:bg-gray-300 bg-white transition-colors duration-300 border-[1px] border-gray-200 text-center text-xl rounded-full h-6 w-6 flex flex-row items-center justify-center"
										>-</button
									>
									<h1 class="text-sm font-bold">{item.quantity}</h1>
									<button
										class="focus:bg-gray-300 bg-white transition-colors duration-300 border-[1px] border-gray-200 text-center text-xl rounded-full h-6 w-6 flex flex-row items-center justify-center"
										>+</button
									>
								</div>
								<button
									class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"

								/>
							</div>
						</div>
					</div> -->
				{/each}
			{:else}
				<script
					src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
				></script><lottie-player
					class="shadow-sm bg-black"
					src="https://lottie.host/9f6e83c2-2bb6-44a0-8c9e-d30b3fd756a9/T26qbBFaVH.json"
					background="#FFFFFF"
					speed="1"
					style="width: 300px; height: 300px;"
					direction="1"
					mode="normal"
					loop
					autoplay
				/>
				<h2 class="text-xl font-bold text-gray-600">Nothing Yet</h2>
				<a
					href="/all_products"
					class="text-base font-black text-gray-100 delay-100 bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 mb-20 shadow-gray-400 hover:shadow-gray-400 border-gray-300 px-6 py-3 border-2 rounded-full"
					>Discover More</a
				>
			{/if}
		</div>
	</div>
	<div
		class=" mx-[10%] w-auto shadow-lg group rounded-lg my-24 md:flex md:{'l'
			? '  flex-row'
			: ' flex-row-reverse'}"
	>
		<div
			style="background-image: url('bahamina-flag.webp');"
			class="w-full object-center rounded-lg aspect-video bg-cover bg-bottom flex justify-center items-center"
		/>
		<div
			class=" md:h-96 h-40 w-full flex flex-col justify-center text-center items-start my-4 md:my-0"
		>
			<h2 class="mx-4 sm:mx-20 sm:text-2xl text-xl md:text-3xl font-light text-start">title</h2>
			<p class="text-start text-xs sm:text-sm md:text-base mx-4 sm:mx-20">description</p>
			<a
				class="mx-4 sm:mx-20 text-xs sm:text-sm md:text-base border-2 border-green-100 px-8 py-4 mb-4 rounded-full hover:shadow-green-400 shadow-lg transition-all duration-300"
				href="/"
			>
				hi
			</a>
		</div>
	</div>

	<!-- Popular Products -->
	<div>
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-3xl font-bold text-center">Popular Products</h1>
			<p class="text-center text-sm sm:text-base">
				Here are some of our most popular products. Check them out before they're gone!
			</p>
		</div>
		<HomePageItems title="Categories" />
	</div>

	<!-- FAQ -->
	<div>
		<section
				class="items-center justify-center  h-min overflow-x-hidden text-start mb-20"
			>
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-3xl font-bold text-center">FAQ</h1>
			<p class="text-center text-sm sm:text-base">
				Here are some of our frequently asked questions. If you have any other questions you'd like
				answered please feel free to email us.
			</p>
			
			
				<div id="faq" class="relative top-[-10rem] left-0 z-50" />
				<div class="flex items-center justify-center">
					<ul class="grid gap-0 gap-y-0">
						{#each items as item}
							<li class="grid-item">
								<div class="faq-item-wrapper">
									<FaqItem title={item.title} answer={item.description} />
								</div>
							</li>
						{/each}
					</ul>
				</div>
		
			
		</div>
			</section>
	</div>
</section>
<Footer />

			