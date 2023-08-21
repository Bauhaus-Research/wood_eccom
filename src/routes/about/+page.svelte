<script>
	import Nav from "$lib/components/Nav.svelte";

	let introItem = [
		{
			title: '2 Locations',
			subtitle:
				'need and more at a really low price and win big and lorem',
			icon: 'map.svg',
		},
		{
			title: 'Real Wood Furniture',
			subtitle:
				'Furniture that was built to last',
			icon: 'tree.svg',
		},
		{
			title: 'Community',
			subtitle:
				'Well regarded among the community. Your parents loved us, so will you.',
			icon: 'community.svg',
		}
	];
	let footerItem_title = [
		{
			title: 'title',
			link: ''
		}
	];
	let landingContent = [

		{
			orient: 'l',
			btntitle: 'See Workspaces',
			title: 'Success Wherever You Occupy',
			description: 'Build your workspace with our modular furniture, designed to fit your needs.',
			content_id: '3', image: 'workspace_prod.webp'
		},
		{
			orient: 'r',
			title: 'Synergy For Any Sized Business',
			content_id: '2',
			description: 'Wherever you work, we have the furniture to help you do it better.',
			btntitle: 'Built for Business', image: 'qc kids.webp'
		},
		{
			orient: 'l',
			title: 'Hard workers rest easy',
			btntitle: 'Bedding',
			description: 'Visit our bedding section to find the perfect mattress for you',
			content_id: '1', image: 'bed.webp'
		}
	];
	
	let content_id= [
		{
			orient: 'r',
			top: 'top-6',
			left: 'left-20',
			content_id: '1',
			price: '99',
			title: 'Queen Bed',

		},
		{
			orient: 'r',
			top: '0',
			left: '0',
			content_id: '2',
			price: '99',
			title: 'House',

		},
		{
			orient: 'r',
			top: 'top-2',
			left: '0',
			content_id: '3',
			price: '99',
			title: 'storage',

		},
		{
			orient: 'r',
			top: '0',
			left: '0',
			content_id: '4',
			price: '99',
			title: 'Chair',
		}
	];

	let accentColor = 'bg-green-500';
	let primaryColor = 'bg-green-500';
	let secondaryColor = 'bg-green-500';
	let textColor = 'text-white';
	let bgColor = 'bg-green-500';
	let introText = "Make your home more like home";
	let scrollY = 0;
</script>

<svelte:window bind:scrollY={scrollY} />
<Nav {scrollY}/>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full lg:h-screen h-[35rem] bg-black -z-20 absolute top-0 left-0 overflow-hidden">
    <video muted playsinline autoplay loop class="w-full h-full object-cover opacity-30 overflow-hidden" style="float: left;">
        <source src="woodyoupromo.webm" type="video/webm">
          <source src="woodyoupromo.mp4" type="video/mp4">
      </video>
  </div>
  
  

<section class="h-[50rem] md:h-screen flex flex-col justify-end md:justify-center overflow-hidden">

		<div class="flex flex-col  md:flex-row justify-between items-center md:items-start lg:items-center opacity-100  mx-10">
            <div class=" text-xl text-white font-semibold mx-auto text-start max-w-lg  mb-8 md:md-0">
				<h3 class=" text-xl mb-6 text-white font-semibold mx-auto text-start">
                    Our Mission
                </h3>
                <h1 class=" text-4xl text-white font-semibold mx-auto text-start font-serif">
                    {introText}
                </h1>
			</div>
			<div class="max-w-xs w-[80vw] bg-green-900 text-white font-light rounded-lg h-[32rem] justify-evenly flex flex-col px-10">
				{#each introItem as item}
                <div>
                    <img alt="{item.icon}" src="{item.icon}" class="h-14">
                    <h2 class="font-bold">{item.title}</h2>
                    <p>{item.subtitle}</p>
                </div>
				{/each}
			</div>
		</div>

</section>

<section class="mx-10">
	{#each landingContent as item}
		<div class="w-full shadow-lg group rounded-lg my-24 md:flex  md:{item.orient === 'l' ? '  flex-row' : ' flex-row-reverse'}">
			<div style='background-image: url("{item.image}");' class="md:h-96 sm:h-72 h-48 w-full rounded-lg bg-cover  bg-bottom flex justify-center items-center">
				{#each content_id as item1}
				{#if item1.content_id === item.content_id}
				<a href="/" class="text-black relative {item1.top} {item1.left} border-[1px] group-hover:rounded-lg group-hover:bg-white border-white rounded-full group-hover:w-24 group-hover:h-16 h-4 w-4 p-1 group-hover:p-4 transition-all"><div class="rounded-full w-full h-full bg-white flex flex-col justify-center items-center text-center">
					<p class="hidden group-hover:block text-sm text-gray-900 no-underline">{item1.title}<p>
					<p class="hidden group-hover:block text-sm text-gray-500 no-underline">{item1.price}<p>
				</div></a>
				{/if}
				{/each}
			</div>
			<div class=" md:h-96 h-40 w-full flex flex-col justify-center text-center items-start my-4 md:my-0">
				<h2 class="mx-4 sm:mx-20 sm:text-2xl text-xl md:text-3xl font-light text-start">{item.title}</h2>
				<p class="text-start text-xs sm:text-sm md:text-base mx-4 sm:mx-20">{item.description}</p>
				<a
					class="mx-4 sm:mx-20 text-xs sm:text-sm md:text-base border-2 border-green-100 px-8 py-4 mb-4  rounded-full hover:shadow-green-400 shadow-lg transition-all duration-300"
					href="/"
				>
					{item.btntitle}
				</a>
			</div>
		</div>
	{/each}
</section>

