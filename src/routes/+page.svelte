<script>
	import Button from "$lib/components/Button.svelte";
	import Footer from "$lib/components/Footer.svelte";
import Nav from "$lib/components/Nav.svelte";

	let introItem = [
		{
			title: 'Eat',
			subtitle:
				'Gather around the table for a meal with friends and family',
			link: '/all_products/dining',
			linktitle: 'Shop Dining',price:1,image:'bauhausresearch_storageCubese.webp'
		},
		{
			title: 'Sleep',
			subtitle:
				'Relax and unwind in your own private sanctuary',
			link: '/all_products/bedroom',
			linktitle: 'Shop Bedrooms',price:1,image:'bauhausresearch_girlplay.webp'

		},
		{
			title: 'Live',
			subtitle:
				'Foster entertainment among friends',
			link: '/all_products/living',
			linktitle: 'Shop Living',price:1,image:'rugs-.webp'
		},
	]

let scrollY = 0;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window bind:scrollY />

<Nav {scrollY} />
<div class="w-full lg:h-screen h-[35rem] bg-black -z-20 absolute top-0 left-0 overflow-hidden">
	<video muted playsinline  autoplay loop class="w-full h-full object-cover opacity-30 overflow-hidden" style="float: left;">
	  <source src="woodyoupromo.webm" type="video/webm">
		<source src="woodyoupromo.mp4" type="video/mp4">
	</video>
  </div>
  
  

<section class="h-[70rem] lg:h-screen flex flex-col justify-center items-center overflow-hidden">

		<div class="flex flex-col justify-between items-center opacity-100  mx-auto">
			<h1 class="mt-36 text-5xl text-white font-semibold mx-auto text-center font-serif">
				Own what makes home complete
			</h1>
	
			<div
				class=" h-14 mt-8 lg:w-[32rem] max-w-sm sm:max-w-xl w-full rounded-full bg-white border-2 border-black flex flex-col justify-center"
			>
				<h2 class="ml-5">Find what makes you complete</h2>
			</div>
			<div class=" lg:flex mt-32 mx-10">
				{#each introItem as item}
					<div
						class="mb-2 max-w-sm sm:max-w-xl w-full mx-2 h-48 lg:h-60 bg-green-900 group hover:bg-opacity-50 duration-200 transition-all text-white font-semibold flex flex-col justify-evenly items-center rounded-lg shadow-xl px-8"
					>

						<div><p class="text-center text-sm font-medium">{item.subtitle}</p></div>
						<div>
							<a
								class="border-2 group-hover:bg-green-500 border-green-500 px-8 py-4 rounded-full hover:shadow-green-400 shadow-lg transition-all duration-300"
								href="{item.link}"
							>
								{item.linktitle}
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>

</section>


<section class=" flex flex-col mx-auto w-3/4 my-12">
	<div class="flex flex-row justify-between ">
		<h1 class="font-bold text-3xl mb-4">Popular this Season</h1>
		<div class="font-light text-sm flex">
			<a href="/all_products" class="flex items-center group">
				<strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all">+</strong>
				<span class="ml-1 fade-underline">All Products</span>
			</a>
			<a href="/brands" class="flex items-center ml-2 group">
				<strong id="plus-brand" class="group-hover:rotate-180 duration-300 transition-all">+</strong>
				<span class="ml-1 fade-underline">All Brands</span>
			</a>
		</div>
	</div>
	
	

<section class="  w-full flex flex-row">
	{#each introItem as product}
	<li class="h-fit w-min box-border border-l-[1px] border-t-[1px] overflow-x-clip list-none border-gray-200 transition duration-200 ease-in font-base text-base hover:bg-gray-200 sm:col-span-2 col-span-3">
		<div class="flex h-[36rem] flex-col justify-between items-start ">
			<div class="h-6 bg-green-900 text-sm font-bold text-green-200 rounded-r-lg text-center px-2 mt-1">Sale</div>
			<div class="w-full">
				<div class="h-[0px] pb-[100%] sm:h-[100%] w-full group bg-cover" style="background-image: url('{product.image}'); "></div>
			</div>
			<h1 class="text-start text-base font-semibold mx-4 w-48">{product.title}</h1>
			<div class="flex flex-col self-start justify-between h-min w-full pb-4 px-4">
				<div class="text-start text-lg font-bold"></div>
				<!-- {#if product.discount_percent > 0} -->
				<h1 class="text-start text-sm mb-1 font-light line-through italic">${product.price}</h1>
				<h1 class="text-start text-xs mb-4 font-bold">$<strong class="text-xl align-middle">{Math.floor(product.price)}</strong>.95</h1>
				<!-- {/if} -->
				<Button />
				<div class="h-16">
			</div>	
			</div>
		</div>
	</li>
	{/each}
</section>
</section>

<section class=" bg-amber-800">
	<section class=" group sm:w-3/4 mx-auto grid grid-cols-2 pb-24">
		<div class="flex flex-col text-center col-span-2 mx-auto mt-12">
			<h2 class="text-lg font-semibold text-opacity-40 text-white font-serif">
				Special Proxuct Offeing
			</h2>
			<h3 class="text-4xl mt-2 text-white font-bold  font-serif">
				Weird Name Good
			</h3>
		</div>
	
		<!-- split -->
		<div class="mx-auto mt-12 mb-4 sm:my-auto self-center w-[90%]  aspect-square bg-stone-950 bg-opacity-30 col-span-2 sm:col-span-1 bg-right-top" style="background-image: url('bed.webp');"></div>
		<div class="text-opacity-90 text-white text-bold text-2xl font-bold  col-span-2 sm:col-span-1 w-[90%] mx-auto sm:w-full"> 
			<h1>
				For your needs - this collection
			</h1>
			<h1 class="text-opacity-70 text-white">
				$2199.95
			</h1>


		<button class="flex">
			<button class="text-xl my-2 px-4 py-1 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-white hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-white text-white">
				Checkout
			</button>
			<button class="text-xl ml-2 my-2 px-4 py-1 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-white hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-white text-white">
				Add to Basket
			</button>
		</button>

			<p class="text-sm  font-light text-white text-opacity-70 ">

				<strong class="font-bold">

					Indulge in the Art of Furnishing</strong>
Presenting our exclusive package tailored for the discerning furniture connoisseur – an invitation to embark on a journey through the world of timeless comfort and exquisite design. Immerse yourself in the epitome of craftsmanship with our meticulously curated assortment of versatile furniture pieces, each bearing its distinct allure. Whether seeking the ideal gift for a home enthusiast or a unique expression of self-indulgence, this package promises a tasteful odyssey.
<br class="">
<br class="">
<br class="">

<strong class="font-bold">

	Anticipate:</strong>
<br>
2x Tranquil Lounger - Sink into the embrace of plush cushions and sleek lines<br>
2x Classic Elegance Dining Set - An ode to refined gatherings and culinary experiences<br>
2x Urban Haven Sofa - Contemporary charm meets cozy relaxation<br>
2x Rustic Revival Coffee Table - Reclaimed wood and artisanal detailing<br>
2x Serenity Study Desk - Where inspiration and productivity find harmony<br>
2x Timeless Essence Bookcase - Crafted to showcase cherished collections<br>
2x Luxe Slumber Bed - Serenity meets opulence in this dreamy haven<br>

Every piece encapsulates our commitment to quality, each meticulously handcrafted with superior materials and impeccable attention to detail. Designed to transcend trends, these furnishings evoke an enduring essence while being free from compromise. Elevate your living space with the perfect blend of elegance and comfort, and experience the artistry of our furniture.

Transform your surroundings with our curated collection, where every piece is a testament to the art of furnishing. Enjoy the embrace of sophisticated design and exceptional comfort, while embracing the promise of lasting beauty.

Unveil the artistry of furniture, where every detail resonates with distinction. Enhance your space with the essence of timeless design and enduring quality.
			</p>
			<button class="text-sm underline">
				See Details
			</button>
		</div>
	</section>
</section>


<section class="h-[30rem] bg-green-300 group w-full flex justify-center items-end ">
	<div class="mb-16 flex flex-col">
		<h2 class="text-4xl font-bold text-white">
		 Back to school countdown.
		</h2>
		<button class="text-xl mt-2 px-4 py-1 group-hover:shadow-2xl group-hover:scale-110 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-white hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-white text-white">
			Rebuild your home office
		</button>
	</div>
</section>

<section class=" flex flex-col mx-auto w-3/4 my-12">
	<div class="flex flex-row justify-between ">
		<h1 class="font-bold text-3xl mb-4">Small Items</h1>
		<div class="font-light text-sm flex">
			<a href="/all_products" class="flex items-center group">
				<strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all">+</strong>
				<span class="ml-1 fade-underline">All Products</span>
			</a>
			<a href="/brands" class="flex items-center ml-2 group">
				<strong id="plus-brand" class="group-hover:rotate-180 duration-300 transition-all">+</strong>
				<span class="ml-1 fade-underline">All Brands</span>
			</a>
		</div>
	</div>
	
	

<section class="  w-full flex flex-row">
	{#each introItem as product}
	<li class="h-fit w-min box-border border-l-[1px] border-t-[1px] overflow-x-clip list-none border-gray-200 transition duration-200 ease-in font-base text-base hover:bg-gray-200 sm:col-span-2 col-span-3">
		<a href="/categories/living-room/product" class="flex flex-col justify-between items-start ">
			<div class="h-6 bg-green-900 text-sm font-bold text-green-200 rounded-r-lg text-center px-2 mt-1">Sale</div>
			<div class="w-full">
				<div class="h-[0px] pb-[100%] sm:h-[100%] w-full group bg-cover" style="background-image: url('{product.image}'); "></div>
			</div>
			<h1 class="text-start text-base font-semibold mx-4 w-48">{product.title}</h1>
			<div class="flex flex-col self-start justify-between h-min w-full pb-4 px-4">
				<div class="text-start text-lg font-bold"></div>
				<!-- {#if product.discount_percent > 0} -->
				<h1 class="text-start text-sm mb-1 font-light line-through italic">${product.price}</h1>
				<h1 class="text-start text-xs mb-4 font-bold">$<strong class="text-xl align-middle">{Math.floor(product.price)}</strong>.95</h1>
				<!-- {/if} -->
				<button class="bg-green-800 text-white py-2 mb-4 rounded-md">Add to cart</button>

				<div class="h-16">
			</div>	
			</div>
		</a>
	</li>
	{/each}
</section>
</section>
<section class="h-[30rem] bg-green-700 group w-full flex justify-center items-end ">
	<div class="mb-16 flex flex-col">
		<h2 class="text-4xl font-bold text-white">
			Have any questions? Talk to our Sales Team
		</h2>
		<button class="text-xl mt-2 px-4 py-1 group-hover:shadow-2xl group-hover:scale-110 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-white hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-white text-white">
			Speak to a person
		</button>
	</div>
</section>


<section class="w-full grid grid-cols-2 lg:w-3/4 mx-auto mt-12">
	<h2 class="text-2xl col-span-2 font-semibold text-gray-800 mb-4 text-center"> <strong class="text-4xl font-bold">Discover Wood You Furniture</strong> <br>Crafting a Legacy of Excellence in the Bahamas</h2>
    <div class="col-span-1 mr-4">
        <!-- Content for the first column -->
        <p class="text-gray-600 mb-6">
			Embark on a journey into timeless artistry with Wood You Furniture. Since 2000, our sanctuary on #19 Madeira Street has been built on three core principles: crafting exceptional wooden pieces at affordable prices, nurturing creative empowerment through the "Do It Yourself" ethos, and delivering unparalleled customer care. These values, unyielding and resilient, have propelled us beyond expectations.

			For over sixteen years, Wood You Furniture has been the Bahamas' oasis of exquisite, unfinished wood furniture. We stand as pioneers of innovation, adorning homes with authenticity and genuine craftsmanship.
			
			Wood You Furniture is your gateway to...
			
			The quintessential All Wood Furniture Store in the Bahamas, where each piece echoes the warmth and charm of real wood, eschewing artificial imitations.
			
			Trendsetting the Ready-to-Finish Wood Furniture concept in the Caribbean, our journey transcends borders. With a second home in Abaco, we're woven into Bahamian hearts.
			</p>
	
        <!-- Rest of the content for the first column -->
    </div>
    <div class="col-span-1 ml-4">
		<h1>
			Wood You Furniture embodies...
		</h1>
        <p class="text-gray-600 mb-6">

			A proud member of the Unfinished Furniture Association, symbolizing excellence. Our unparalleled customer service is guided by a belief that every interaction should be transformative.
			
			Champions of sustainability, manifesting as a "Green Furniture Store." Our creations are born from sustainably sourced woods, bearing the Forestry Stewardship Council (FSC) seal.
			
			Diverse offerings span from serene bedrooms to lively living spaces. Entertainment centers, occasional tables, and bookcases narrate your home's story, reflecting your spirit.
			
			Wood You Furniture ignites your space with affordable, quality all-wood furniture. Infuse your essence into each piece, forging connections and shaping homes that endure.
			
			Elevate your abode with Wood You Furniture, where craftsmanship dances with inspiration. Let your space resonate with authenticity, and bring your vision to life.

		</p>
    </div>
</section>
<Footer />

<style>
    .fade-underline {
      position: relative;
      display: inline-block;
      padding-bottom: 1px; /* Adjust as needed */
    }
  
    .fade-underline::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px; /* Adjust as needed */
      background-color: #000; /* Change to your desired color */
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
  
    .fade-underline:hover::before {
      transform: scaleX(1);
      transform-origin: right center;
    }
  </style>
  