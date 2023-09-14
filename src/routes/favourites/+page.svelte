<!-- show cart items -->

<script>
	import HomePageItems from '$lib/components/HomePageItems.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { favorites, removeFromFavorites } from '$lib/stores/Favs';
	import { default as FaqItem } from '$lib/components/FaqItem.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import productStore from '$lib/stores/productsStore';
	import GridProductCardFavs from '$lib/components/GridProductCardFavs.svelte';
	import { Toaster } from 'svelte-french-toast';
	export let items = [
		{
			title: "What is Wood You Furniture's primary goal?",
			description: `Wood You Furniture's primary goal is three-fold: to provide quality all wood furniture at affordable prices, educate customers about furniture and the furniture finishing process through the "Do It Yourself" concept, and deliver quality customer service.`
		},
		{
			title: "What is Wood You Furniture's uniqueness as a furniture store?",
			description: `Wood You Furniture stands out as a unique furniture store due to its focus on providing quality unfinished wood furniture. It does not use particle board or other artificially fabricated materials in its production process.`
		},
		{
			title: `What makes Wood You Furniture's unfinished furniture concept successful?`,
			description: `Wood You Furniture's focus on unfinished real wood furniture has been successful in "virgin territory" and is consistently ranked as the Top Sales Store among all Wood You Furniture Stores in North America and the Caribbean.`
		},
		{
			title: 'Is Wood You Furniture environmentally conscious?',
			description: `Yes, Wood You Furniture prides itself on being a "Green Furniture Store." It offers eco-friendly furniture made from plantation-grown woods certified by the Forestry Stewardship Council (FSC) to meet social, economic, and ecological needs.`
		},
		{
			title: 'What types of furniture does Wood You Furniture offer?',
			description: `Wood You Furniture offers a wide range of home furnishing products including bedroom, dining room, living room, office, outdoor, and children's furniture. The store also provides entertainment centers, occasional tables, and bookcases.`
		},
		{
			title: `What is the Managing Director's perspective on customer satisfaction?`,
			description: `The Managing Director, Mr. Patrick Rollins, emphasizes that Wood You Furniture listens to its customers and constantly seeks ways to exceed their expectations, aiming for every customer experience to be pleasant and successful.`
		},
		{
			title: `What is Wood You Furniture's location and contact information?`,
			description: `Wood You Furniture is located at 19 Madeira Street, Nassau, Bahamas, with contact details including phone number 242-325-9663 and email sales@woodyoubahamas.com.`
		},
		{
			title: `Which areas does Wood You Furniture serve in the Bahamas?`,
			description: `Wood You Furniture happily serves the entire Bahamas, including New Providence and all Family Islands such as Abaco, Andros, Grand Bahama, Exuma, and many others.`
		},
		{
			title: `What core value drives Wood You Furniture's success?`,
			description: `Wood You Furniture is committed to sustainability by selling eco-friendly furniture made from plantation-grown woods certified by the Forestry Stewardship Council (FSC), ensuring responsible forest management.`
		}
	];
</script>

<Nav />
<section class="overflow-y-clip">
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
		<div class="{$favorites.length > 0?'grid grid-cols-12':'flex flex-col justify-center items-center'} justify-center items-center mx-auto gap-2 w-[90%] mt-8 shadow-lg min-h-screen py-12">
			{#if $favorites.length > 0}
				{#each $favorites as item}
					{#each productStore as product}
						{#if product.sku === item.sku}
						<GridProductCardFavs 
						sku={product.sku}
						title={product.name}
						price={product.price}
						image={product.image}
						
						/>
							
						<!-- removeFromFavorites({ sku: item.sku }); -->
						

						{/if}
					{/each}
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
					href="/"
					class="text-base font-black text-gray-100 delay-100 bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 mb-20 shadow-gray-400 hover:shadow-gray-400 border-gray-300 px-6 py-3 border-2 rounded-full"
					>Discover More</a
				>
			{/if}
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
		<HomePageItems
			title="Sales"
			subtitle="
Beautiful appliances that save you time and effort. Enjoy professional results from home."
			titlelink="/shop/featured"
		/>
	</div>

	<!-- FAQ -->
	<div>
		<section class="items-center justify-center h-min overflow-x-hidden text-start mb-20">
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-3xl font-bold text-center">FAQ</h1>
				<p class="text-center text-sm sm:text-base">
					Here are some of our frequently asked questions. If you have any other questions you'd
					like answered please feel free to email us.
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

<Toaster />