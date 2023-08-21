<script>
	import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
	export let data
	/**
	 * @type {number}
	 */
	let scrollY;
	function toggleAnswer() {
		isOpen = !isOpen; // Toggle the isOpen variable on each click
	}
	function toggleAnswerisOpenFeat() {
		isOpenFeat = !isOpenFeat; // Toggle the isOpen variable on each click
	}
	function toggleAnswerisOpenOrder() {
		isOpenOrder = !isOpenOrder;
	}

	let isOpenOrder = false;
	let isOpen = false;
	let isOpenFeat = false;
	// let orderby = data.popular;
	async function handleOrderbyAlpha() {

	}
	async function handleOrderbyZeta() {
  // @ts-ignore
  let order = 'title';
  // @ts-ignore
  let ascending = true;

	}
	function handleOrderbyPopular() {
		// orderby = data.popular;
	}
	function handleOrderbyhighLowPrice() {
		// orderby = data.highLowPrice;
	}
	function handleOrderbylowHighPrice() {
		// @ts-ignore
		let order = 'name';
		// @ts-ignore
		let ascending = true;
	}

	/**
	 * @type {string | null}
	 */
	let UsaMade = null;
	/**
	 * @type {string | null}
	 */
	 let DoveTails = null;

	 /**
	 * @type {string | null}
	 */
	 let woodType = null;
	 /**
	 * @type {number}
	 */
	 let upperBound = 20000;
	 let lowerBound = 0;

	 /**
	 * @type {string}
	 */
  let sortBy = 'popular'; // Default ascending order
  let sortAscending = true; // Default ascending order

const toggleSorting = () => {
  sortAscending = !sortAscending;
};
</script>
<svelte:window bind:scrollY={scrollY} />
<Nav scrollY={20} />

<main class="shadow-md sm:shadow-md md:shadow-md grid grid-cols-12 max-h-[99vh] h-fit max-w-full  gap-4 rounded-md w-full bg-white overflow-x-auto list-none p-0">
	<div class="h-96 w-full bg-green-900 col-span-12 overflow-x-clip">
	</div>
	<section class="lg:col-span-3  sm:col-span-4 col-span-12 sm:block h-[0%] sm:h-[100%] hidden ">
		<!-- Left sidebar content -->
		<div class="sticky top-16 w-full px-4 py-4">
			<!-- Content of the black square -->
			<button class="font-bold text-lg">Filter By</button>

			<button
				class="group w-full border-t-2 border-opacity-10 border-slate-600 pt-4 pb-4"
				on:click={toggleAnswerisOpenFeat}
				tabindex="0"
				aria-expanded={isOpenFeat ? 'true' : 'false'}
			>
				<span class="flex flex-row justify-between">
					<!-- Wrap the contents in a <span> instead of <div> -->
					<!-- Use on:click to trigger the click event -->
					<h2 class="group cursor-pointer flex text-start justify-between font-semibold">
						Sort
					</h2>
					<!-- Use a class based on the isOpen variable to apply rotation when the answer is open -->
					<svg
						class="{isOpenFeat ? 'rotate-180' : ''} transition duration-300"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
					>
						<path
							d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
						/>
					</svg>
				</span>

				<!-- Use a class based on the isOpen variable to conditionally show or hide the answer -->

				<div
					class="{isOpenFeat ? '' : 'hidden'} transition duration-1000 ease-in-out m-2 text-start"
					aria-hidden={!isOpenFeat}
				>
					<div class="grid grid-cols-1">
						<label
							on:click={()=>{sortBy = 'name';}}
							on:keydown={()=>{sortBy = 'name';}}
							class="flex items-center space-x-2"
						>
							<input
							on:click={()=>{sortBy = 'name';}}
							on:keydown={()=>{sortBy = 'name';}}
							type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" />
							<span class="text-gray-700">Popular</span>
						</label>
						<label
						on:click={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
						on:keydown={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
							class="flex items-center space-x-2"
						>
							<input
							
							on:click={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
							on:keydown={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
							 type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" />
							<span class="text-gray-700">English Dovetails</span>
						</label>

						<strong class="">Assembly</strong>
						<div class="flex w-full justify-between">
						<label
						on:click={()=>{}}
						on:keydown={()=>{}}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="assembly-type-option"
								value="assembly-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>							<span class="text-gray-700">None</span>

						</label>
						<label
							on:click={()=>{sortBy = 'name';}}
							on:keydown={()=>{sortBy = 'name';}}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="assembly-type-option"
								value="assembly-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Under an Hour</span>
						</label>
						<label
						on:click={()=>{}}
						on:keydown={()=>{}}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="assembly-type-option"
								value="assembly-type"
								class="form-radio h-4 w-4 text-indigo-600"
								checked
							/>							<span class="text-gray-700">N/A</span>

						</label>
					</div>

					<strong class="">Wood Type</strong>
						<div class="w-full grid-cols-2 grid">
						<label
							on:click={handleOrderbyPopular}
							on:keydown={handleOrderbyPopular}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type" 
								class="form-radio h-4 w-4 text-indigo-600"
							/>							<span class="text-gray-700">Alder</span>

						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Pine</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Parawood</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Maple</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Teak</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Other</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
								checked 
							/>
							<span class="text-gray-700">N/A</span>
						</label>
							
					</div>

					<strong class="">Glide System</strong>
						<div class="w-full grid-cols-2 grid">
						<label
							on:click={handleOrderbyPopular}
							on:keydown={handleOrderbyPopular}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="ext-type-option"
								value="ext-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>							<span class="text-gray-700">Full</span>

						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="ext-type-option"
								value="ext-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Other</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="ext-type-option"
								value="ext-type"
								class="form-radio h-4 w-4 text-indigo-600"
								checked
							/>
							<span class="text-gray-700">N/A</span>
						</label>
							
					</div>
					</div>
				</div>
			</button>

			<button
				class="group w-full border-t-2 border-opacity-10 border-slate-600 pt-4 pb-4"
				on:click={toggleAnswer}
				tabindex="0"
				aria-expanded={isOpen ? 'true' : 'false'}
			>
				<span class="flex flex-row justify-between">
					<!-- Wrap the contents in a <span> instead of <div> -->
					<!-- Use on:click to trigger the click event -->
					<h2 class="group cursor-pointer flex text-start justify-between font-semibold">Size</h2>
					<!-- Use a class based on the isOpen variable to apply rotation when the answer is open -->
					<svg
						class="{isOpen ? 'rotate-180' : ''} transition duration-300"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
					>
						<path
							d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
						/>
					</svg>
				</span>

				<!-- Use a class based on the isOpen variable to conditionally show or hide the answer -->

				<div
					class="{isOpen ? '' : 'hidden'} transition duration-1000 ease-in-out m-2 text-start"
					aria-hidden={!isOpen}
				>
					<div class="grid grid-cols-1">hi</div>
				</div>
			</button>

			<button
				class="group w-full border-t-2 border-opacity-10 border-slate-600 pt-4 pb-4"
				on:click={toggleAnswerisOpenFeat}
				tabindex="0"
				aria-expanded={isOpenFeat ? 'true' : 'false'}
			>
				<span class="flex flex-row justify-between">
					<!-- Wrap the contents in a <span> instead of <div> -->
					<!-- Use on:click to trigger the click event -->
					<h2 class="group cursor-pointer flex text-start justify-between font-semibold">
						Features
					</h2>
					<!-- Use a class based on the isOpen variable to apply rotation when the answer is open -->
					<svg
						class="{isOpenFeat ? 'rotate-180' : ''} transition duration-300"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
					>
						<path
							d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
						/>
					</svg>
				</span>

				<!-- Use a class based on the isOpen variable to conditionally show or hide the answer -->

				<div
					class="{isOpenFeat ? '' : 'hidden'} transition duration-1000 ease-in-out m-2 text-start"
					aria-hidden={!isOpenFeat}
				>
					<div class="grid grid-cols-1">
						<label
							on:click={()=>{(UsaMade==="Yes")?(UsaMade=null):(UsaMade="Yes")}}
							on:keydown={()=>{(UsaMade==="Yes")?(UsaMade=null):(UsaMade="Yes")}}
							class="flex items-center space-x-2"
						>
							<input
							
							on:click={()=>{(UsaMade==="Yes")?(UsaMade=null):(UsaMade="Yes")}}
							on:keydown={()=>{(UsaMade==="Yes")?(UsaMade=null):(UsaMade="Yes")}} type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" />
							<span class="text-gray-700">Made in the USA</span>
						</label>
						<label
						on:click={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
						on:keydown={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
							class="flex items-center space-x-2"
						>
							<input
							
							on:click={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
							on:keydown={()=>{(DoveTails==="Yes")?(DoveTails=null):(DoveTails="Yes")}}
							 type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" />
							<span class="text-gray-700">English Dovetails</span>
						</label>

						<strong class="">Assembly</strong>
						<div class="flex w-full justify-between">
						<label
						on:click={()=>{}}
						on:keydown={()=>{}}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="assembly-type-option"
								value="assembly-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>							<span class="text-gray-700">None</span>

						</label>
						<label
							on:click={()=>{sortBy = 'name';}}
							on:keydown={()=>{sortBy = 'name';}}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="assembly-type-option"
								value="assembly-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Under an Hour</span>
						</label>
						<label
						on:click={()=>{}}
						on:keydown={()=>{}}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="assembly-type-option"
								value="assembly-type"
								class="form-radio h-4 w-4 text-indigo-600"
								checked
							/>							<span class="text-gray-700">N/A</span>

						</label>
					</div>

					<strong class="">Wood Type</strong>
						<div class="w-full grid-cols-2 grid">
						<label
							on:click={handleOrderbyPopular}
							on:keydown={handleOrderbyPopular}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type" 
								class="form-radio h-4 w-4 text-indigo-600"
							/>							<span class="text-gray-700">Alder</span>

						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Pine</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Parawood</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Maple</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Teak</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Other</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="wood-type-option"
								value="wood-type"
								class="form-radio h-4 w-4 text-indigo-600"
								checked 
							/>
							<span class="text-gray-700">N/A</span>
						</label>
							
					</div>

					<strong class="">Glide System</strong>
						<div class="w-full grid-cols-2 grid">
						<label
							on:click={handleOrderbyPopular}
							on:keydown={handleOrderbyPopular}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="ext-type-option"
								value="ext-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>							<span class="text-gray-700">Full</span>

						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="ext-type-option"
								value="ext-type"
								class="form-radio h-4 w-4 text-indigo-600"
							/>
							<span class="text-gray-700">Other</span>
						</label>
						<label
							on:click={handleOrderbyAlpha}
							on:keydown={handleOrderbyAlpha}
							class="flex items-center space-x-2"
						>
							<input
								type="radio"
								name="ext-type-option"
								value="ext-type"
								class="form-radio h-4 w-4 text-indigo-600"
								checked
							/>
							<span class="text-gray-700">N/A</span>
						</label>
							
					</div>
					</div>
				</div>
			</button>
		</div>
	</section>
	<section class="lg:col-span-9 grid sm:grid-cols-4 sm:col-span-8 grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 col-span-12">
		{#each data.countries.sort((a, b) => {
			if (sortBy === 'price') {
			  return sortAscending ? a.price - b.price : b.price - a.price;
			} else if (sortBy === 'name') {
			  return sortAscending ? a.price.localeCompare(b.price) : b.price.localeCompare(a.price);
			}
			// Add more sorting criteria if needed
		  }) as product}
				{#if (product.price) <upperBound && (product.price) >lowerBound}

				<!-- {#if (product.price*(1-product.discount_percentage)) >2000} -->
				<!-- {#if (product['dataSheet/Height']) <2000} -->
					<!-- {#if (product['dataSheet/Dovetails']) === 'English'} -->
					<!-- {#if (product['dataSheet/Glide System']) === ('Wood on Wood')} -->
					<!-- {#if (product['dataSheet/Glide System']) === ('Soft Close Glides')} -->
					<!-- {#if (product['dataSheet/Glide System']) === ('Easy Cable and Bearing')} -->
					<!-- {#if (product['dataSheet/Glide System']) === ('¾ Extension')} -->
					<!-- {#if (product['dataSheet/Glide System']) === ('Full Extension'||'Full Extension Optional')} -->
					<!-- {#if (product['dataSheet/Wood']) === ('Alder'||'Alder and Black Walnut')} -->
				<!-- {#if (product['dataSheet/Wood']) === ('Reclaimed Teak'||'100% FSC Teak'||'100% Grade A Plantation Teak')} -->
				<!-- {#if (product['dataSheet/Wood']) === ('Pine')} -->
				<!-- {#if (product['dataSheet/Wood']) === ('Parawood')} -->
				<!-- {#if (product['dataSheet/Wood']) === ('Plantation Grown Eucalyptus')} -->
				<!-- {#if  (product['dataSheet/Wood']) === woodType && ((product['dataSheet/Wood']) === 'Maple' || (product['dataSheet/Wood']) === ('Plantation Grown Eucalyptus') || (product['dataSheet/Wood']) === ('Parawood') || (product['dataSheet/Wood']) === ('Pine') || (product['dataSheet/Wood']) === ('Reclaimed Teak'||'100% FSC Teak'||'100% Grade A Plantation Teak') ||  (product['dataSheet/Wood']) === ('Alder'||'Alder and Black Walnut'))} -->
				<!-- {#if hourTimingA===2&&((product['dataSheet/Assembly']) === 'Medium - estimated :30 minutes or less' ||(product['dataSheet/Assembly']) === 'Easy - estimated :15 minutes or less')} -->
				<!-- {#if hourTiming===2&&((product['dataSheet/Assembly']) === 'None required - arrives completely built' ||(product['dataSheet/Assembly']) === 'Optional - buy completely built or ready-to-assemble')} -->
				
				<!-- done -->
				<!-- {#if product['dataSheet/Made In The USA'] === UsaMade || product['dataSheet/Made In The USA'] === 'Yes'} -->
				{#if product['dataSheet/Dovetails'] === DoveTails || product['dataSheet/Dovetails']==='English' || product['dataSheet/Dovetails']==='French' || product['dataSheet/Dovetails']==='Yes'}
				<li class="h-fit box-border border-l-[1px] border-t-[1px] border-gray-200 transition duration-200 ease-in font-base text-base hover:bg-gray-200 sm:col-span-2 col-span-3">
					<a href="/categories/living-room/product" class="flex h-[36rem] flex-col justify-between items-start ">
						
						{#if product.discount_percentage > 0}
						<div class="h-6 bg-green-900 text-sm font-bold text-green-200 rounded-r-lg text-center px-2 mt-1">Sale</div>
						{/if}
						<div class="w-full">
							<div class="h-[0px] pb-[100%] sm:h-[100%] w-full group bg-cover" style="background-image: url('{product.image}'); "></div>
						</div>
						<h1 class="text-start text-base font-semibold mx-4 w-48">{product.title}</h1>
						<div class="flex flex-col self-start justify-between h-min w-full pb-4 px-4">
							<div class="text-start text-lg font-bold"></div>
							{#if product.discount_percentage > 0}
							<h1 class="text-start text-sm mb-1 font-light line-through italic">${product.price}</h1>{/if}
							<h1 class="text-start text-xs mb-4 font-bold">$<strong class="text-xl align-middle">{Math.floor(product.price*(1-product.discount_percentage))}</strong>.95</h1>
							<button class="bg-green-800 text-white py-2 mb-4 rounded-md">Add to cart</button>

							<div class="h-16">
								{#if product['dataSheet/Made In The USA'] == 'Yes'}

								<div class="text-xs flex align-middle h-min"><div class="h-1 w-1 self-center rounded-full bg-green-400 mr-2"></div>Made in the USA</div>							
								{/if}
								{#if product['dataSheet/Assembly'] == 'None required - arrives completely built'}
	
								<div class="text-xs flex align-middle h-min"><div class="h-1 w-1 self-center rounded-full bg-green-400 mr-2"></div>No Assembly</div>							
								{/if}
								{#if product['dataSheet/Assembly'] == 'Medium - estimated :30 minutes or less'}
	
								<div class="text-xs flex align-middle h-min"><div class="h-1 w-1 self-center rounded-full bg-amber-400 mr-2"></div>Easy Assembly</div>							
								{/if}
						</div>	
						</div>
					</a>
				</li>
				<!-- {/if} -->
				{/if}
				{/if}
				<!-- {/if} -->
				
			  {/each}
	</section>
<Footer />
	</main>


