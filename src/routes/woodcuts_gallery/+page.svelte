<script>
	import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
/**
	 * @type {any}
	 */
let scrollY;
export let data
</script>
<svelte:window bind:scrollY={scrollY} />
<section class="h-[30rem]  object-bottom" style="background-image: url('bahamina-flag.webp');">
    <Nav {scrollY} />
    <div>

    </div>
</section>
<section class="grid grid-cols-2 mx-auto lg:gap-2 xl:gap-24 my-16">
    <div class="aspect-square col-span-2 md:col-span-1 lg:h-[30rem] h-[23rem] md:ml-auto mx-auto md:mx-0 flex flex-col justify-center">
        <h3 class="font-bold text-sm">PROUD BAHAMIAN OWNED COMPANY</h3>
        <h1 class="font-black text-2xl">
            WE LOVE OUR ISLANDS
        </h1>
        <p class="font-light mt-4 lg:text-base text-sm">
            🌴 Embark on a captivating journey through the enchanting islands of the Bahamas with our exclusive "Island Dreams" wood engraving art collection. Immerse yourself in the beauty of each island's unique essence, intricately captured in every finely detailed engraving.<br>

            🌊 <strong>Island Dreams" is more than art;</strong> it's an experience. Each wood engraving is a masterpiece, meticulously handcrafted to reflect the character of every major island. From the bustling streets of Nassau to the serene tranquility of Eleuthera, we've captured the heart and soul of each destination.<br>

            🏝️ <strong>Unveil the Collection Today:</strong> Bring the essence of the Bahamas to your life. The Bahamas await, and your dreams are our canvas.
    </p>
</div>
    <div class="md:aspect-square lg:h-[30rem] h-[22rem bg-cover mt-6 md:mt-0 col-span-2 md:col-span-1" style="background-image: url(decoration.webp);">

    </div>
</section>

<div class="w-min flex flex-col justify-between mx-auto">

<div class="flex flex-row justify-between ">
            <h1 class="font-bold text-3xl mb-4">Islands Collection</h1>
            <div class="font-light text-sm flex">
                <a href="/all_products" class="flex items-center group">
                    <strong id="plus-product" class="group-hover:rotate-180 duration-1000 transition-all">+</strong>
                    <span class="ml-1 fade-underline">All Products</span>
                </a>
                <a href="/all_products/home" class="flex items-center ml-2 group">
                    <strong id="plus-brand" class="group-hover:rotate-180 duration-300 transition-all">+</strong>
                    <span class="ml-1 fade-underline">Home Decor</span>
                </a>
            </div>
        </div>

<section class=" flex flex-row mx-auto mb-16 w-[90vw] overflow-x-scroll">
	{#each data.countries as product}
	<li class="h-fit w-min box-border border-l-[1px] border-t-[1px] list-none border-gray-200 transition duration-200 ease-in font-base text-base hover:bg-gray-200 sm:col-span-2 col-span-3">
		<a href="/categories/living-room/product" class="flex flex-col justify-between items-start ">
            {#if product.discount_percent > 0}
			<div class="h-6 bg-green-900 text-sm font-bold text-green-200 rounded-r-lg text-center px-2 mt-1">Sale</div>
            {/if}
			<div class="w-full">
				<div class="h-[0px] pb-[100%] sm:h-[100%] w-full group bg-cover" style="background-image: url('{product.image}'); "></div>
			</div>
			<h1 class="text-start text-base font-semibold mx-4 w-48">{product.title}</h1>
			<div class="flex flex-col self-start justify-between h-min w-full pb-4 px-4">
				<div class="text-start text-lg font-bold"></div>
				{#if product.discount_percent > 0}
				<h1 class="text-start text-sm mb-1 font-light line-through italic">${product.price}</h1>
				<h1 class="text-start text-xs mb-4 font-bold">$<strong class="text-xl align-middle">{Math.floor(product.price)}</strong>.95</h1>
				{/if}
                {#if product.discount_percent <= 0 || product.discount_percent == null}
				<h1 class="text-start text-xs mb-4 font-bold">$<strong class="text-xl align-middle">{Math.floor(product.price)}</strong>.95</h1>
				{/if}
				<button class="bg-green-800 text-white py-2 mb-4 rounded-md">Add to cart</button>

				<div class="h-16">
			</div>	
			</div>
		</a>
	</li>
	{/each}
</section>
</div>
<div class="grid grid-cols-3 gap-8 mb-16">
    <div class="aspect-square h-full rounded-r-lg bg-cover" style="background-image: url(decoration.webp);">
    </div>
    <div class=" h-full rounded-lg  bg-cover" style="background-image: url(decimg2.webp);">
    </div>
    <div class="h-full rounded-l-lg  bg-cover" style="background-image: url(decimg3.webp);">
    </div>
</div>
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
  