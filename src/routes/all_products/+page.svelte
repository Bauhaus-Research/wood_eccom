<script>
	import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
	export let data;
	let categories =[
		{
			title:'Dining',
			image:'dinings.webp',
			href:'all_products/dining'
		},
		{
			title:'Kids',
			image:'qc kids.webp',
			href:'all_products/kids'
		},
		{
			title:'Storage',
			image:'bauhausresearch_storageCubese.webp',
			href:'all_products/storage'
		},
		{
			title:'Bedroom',
			image:'bed.webp',
			href:'all_products/bedroom'

		},
		{
			title:'Living',
			image:'workspace_prod.webp',
			href:'all_products/living'
		},
		{
			title:'Office',
			image:'office.webp',
			href:'all_products/office'
		},
		{
			title:'Outdoor',
			image:'outtdoor.webp',
			href:'all_products/outdoor'
		},
		{
			title:'Decoration',
			image:'decoration.webp',
			href:'all_products/home'
		},
		{
			title:'Rugs',
			image:'carpet.webp',
			href:'all_products/rugs'
		}
	]
</script>



	<Nav scrollY={20} />
	<div class="h-32 w-full justify-center items-center flex-col overflow-x-clip text-center text-white">

	</div>

	<div class=" w-full justify-center items-center flex-col overflow-x-clip text-center text-black">
		<h1 class="font-black text-4xl">ONLY REAL WOOD FURNITURE</h1>
		<p class="font-base mb-16 mt-10 text-base">here we only do real furniture LOREM<br>here we only do real furniture LOREM<br>here we only do real furniture LOREM<br>here we only do real furniture LOREM<br>here we only do real furniture LOREM<br></p>
	</div>
	<div class="  mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 overflow-x-clip text-center text-white px-5 sm:px-10 md:px-20 gap-2">
{#each categories as category}
		<div class="aspect-[1/1.25] rounded-lg flex flex-col-reverse bg-green-900 justify-start items-center  overflow-x-clip text-center bg-cover bg-center" style="background-image: url('{category.image}');">
			<a href="{category.href}" class="font-bold text-sm rounded-full w-min mb-8 px-8 py-2 bg-white text-black border-2 border-black">{category.title}</a>
			</div>

{/each}
	</div>
	<div class="group grid md:grid-cols-2 my-20 mx-5 sm:mx-10 md:mx-20 flex-col justify-center items-center overflow-clip rounded-lg">
		<div class=" aspect-square bg-cover " style="background-image: url('happycouple.webp')">
<!-- <div class=" bg-opacity-40 bg-gradient-to-t from-yellow-400 via-transparent w-full h-full"></div> -->
		</div>	<div class="aspect-square bg-cover bg-yellow-400 flex flex-col justify-center font-bold pl-4">
			<h1>
	Happy Wife Happy Life

</h1>
<p class="font-light ">
Celebrate her today with a gift from us. Visit our special collection of gifts for her.
</p>
<button class="self-start px-8 py-2 mt-4 bg-black text-white rounded-full transition-all delay-1000 group-hover:animate-bounce">
	Shop Now
</button>
		</div>
	</div>
	<Footer />

  