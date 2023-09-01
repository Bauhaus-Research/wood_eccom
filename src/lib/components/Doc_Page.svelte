<script>
    import Nav from '$lib/components/Nav.svelte';

    /**
	 * @type {number}
	 */
    let scrollY = 900;
        /**
	 * @type {number}
	 */
     let innerHeight;
    export let title = 'Terms';
    export let updated = 'Updated August 23, 2023';
    export let text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae molestias consequuntur velit, nulla dolore tenetur ipsum maxime illum pariatur, voluptate, tempora totam perferendis impedit voluptatem explicabo modi voluptates quasi officia.';
</script>

<svelte:window bind:innerHeight={innerHeight} />

<section class="bg-gray-300 w-screen pt-10 min-h-screen text-blue-950">
    <Nav {scrollY} {innerHeight} />
    <section class="mt-16 w-11/12 md:w-3/4 mx-auto">
        <div class=" rounded-xl shadow-inner bg-white py-8">
            <h1 class="text-center font-bold md:text-5xl text-2xl">{title}</h1>
            <div class="mx-10 h-[1px] w-auto bg-gray-600 mt-3"></div>
            <p class="px-10 mt-10 font-semibold">{updated}</p>
            <p class="px-10 mt-10">{text}</p>
        </div>
    </section>
</section>
