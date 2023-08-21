<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let introItem = [
		{
			title: 'Archbold Furniture',
			slug: 'archbold',
			subtitle: 'need and more at a really low price and win big and lorem',
			image:
				'bauhausresearch_flat_design_bauhaus_app_screens_animated_8c469f6d-c6a5-4879-bbd8-6f72874738f1.PNG'
		},
		{
			title: 'Whittier Wood Furniture',
			slug: 'whittier_wood',
			subtitle: 'Furniture that was built to last',
			image:
				'wwfLogoR.webp'
		},
		{
			title: 'Whitewood Furniture',
			slug: 'whitewood',
			subtitle: 'Well regarded among the community. Your parents loved us, so will you.',
			image:
				'WWHeader.webp'
		},
		{
			title: 'Continental Furniture',
			slug: 'continental',
			subtitle: 'Well regarded among the community. Your parents loved us, so will you.',
			image:
				'bauhausresearch_flat_design_bauhaus_app_screens_animated_8c469f6d-c6a5-4879-bbd8-6f72874738f1.PNG'
		},
		{
			title: 'Fighting Creek Furniture',
			slug: 'fighting_creek',
			subtitle: 'Well regarded among the community. Your parents loved us, so will you.',
			image:
				'bauhausresearch_flat_design_bauhaus_app_screens_animated_8c469f6d-c6a5-4879-bbd8-6f72874738f1.PNG'
		},
		{
			title: 'Westminister Teak Furniture',
			slug: 'westminister',
			subtitle: 'Well regarded among the community. Your parents loved us, so will you.',
			image:
				'bauhausresearch_flat_design_bauhaus_app_screens_animated_8c469f6d-c6a5-4879-bbd8-6f72874738f1.PNG'
		}
	];
	let scrollY = 0;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<svelte:window bind:scrollY />
<Nav {scrollY} />
<div
	class="w-full h-[30rem] bg-gradient-to-r from-gray-900 to-gray-400 from-5% -z-20 absolute top-0 left-0 overflow-hidden"
>
	<!-- <video muted playsinline autoplay loop class="w-full h-full ml-10 bg-gradient-to-b to-transparent object-cover opacity-5 overflow-hidden" style="float: left;">
        <source src="woodyoupromo.webm" type="video/webm">
          <source src="woodyoupromo.mp4" type="video/mp4">
      </video> -->
</div>

<section class="h-[30rem] flex flex-col justify-center overflow-hidden">
	<div class="flex flex-row justify-between opacity-100 mx-10">
		<div class=" text-4xl font-mono text-white font-light text-start max-w-lg mb-8 md:md-0">
			<div class=" text-4xl font-mono text-white font-light text-start max-w-lg mb-2 md:md-0">
				Interiors,<br /> Furniture,<br /> Products, and<br /> Experiences.
			</div>
			<div class=" text-base font-mono text-white font-light text-start max-w-lg mb-2 md:md-0">
				Interiors,<br /> Furniture,
			</div>
			<div class=" text-lg font-mono text-white font-bold text-start max-w-lg md:md-0">
				Interiors
			</div>
		</div>
		<div
			class=" text-xl mr-5 text-white font-semibold text-end max-w-lg self-center mb-8 md:md-0 hidden md:block"
		>
			hi<br />
			hi<br />
			hi
		</div>
	</div>
</section>

<section class="bg-gray-900 pl-10">
	<div class="w-full bg-gray-400 sm:px-10 pt-4">
		<div class=" border-b-2 border-black mx-4 pb-4 justify-between flex">
		</div>
		<div class="w-full bg-gray-400 mt-4 px-4 overflow-x-clip">Showing 6 of 6</div>
		<div class="  mt-4 grid mx-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each introItem as item}
			<a href="brands/{item?.slug}" style="background-image: url('{item.image}');" class=" bg-cover h-32 m-2">
					<div class="  ml-2 mt-2 text-white">
						{item?.title}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<Footer />