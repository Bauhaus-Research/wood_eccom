<script>
	import Nav from "$lib/components/Nav.svelte";

    let whichMap = "map1";
    function makeMap1() {
        whichMap = "map1";
    }
    function makeMap2() {
        whichMap = "map2";
    }
    let scrollY = 100;
</script>
<Nav {scrollY} />
<section class="grid lg:grid-cols-2 grid-cols-1 lg:h-screen pt-16">

    <div class="bg-gray-400 h-96 lg:h-full">
        <div class="bg-gray-400 h-96 lg:h-full">
            <iframe title="wood you furniture map" class="bg-gray-400 h-96 lg:h-full w-full {whichMap==="map1"?'':'hidden'}" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.07246187564!2d-77.33244562993511!3d25.06553302872284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c546669819f%3A0xe598c871276b3acd!2sWood%20You%20Furniture!5e0!3m2!1sen!2sus!4v1691903647118!5m2!1sen!2sus" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <iframe title="wood you furniture map 2" class="bg-gray-400 h-96 lg:h-full w-full {whichMap==="map2"?'':'hidden'}" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5936075057157!2d-77.49371792594584!3d25.04786207780738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f615bdde66c11%3A0xa7c3182b9d0bfed1!2sWood%20You%20Furniture%20Gallery!5e0!3m2!1sen!2sus!4v1691903881847!5m2!1sen!2sus" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class="bg-white flex flex-col justify-center items-center text-start overflow-x-auto">

    <button  on:click={makeMap1}  class="h-48 sm:w-[30rem] w-[90%] bg-gray-400 rounded-lg border-2 border-black flex flex-row">
        <div class="h-full w-1/2 row-span-1 bg-black"></div>
        <div class="h-full w-1/2 row-span-1  flex-col flex justify-center items-start px-4">
            <h1 class="font-bold sm:text-xl text-lg">Wood You Furniture Palmdale (East)</h1>
            <h4>hours</h4>
            <div class="font-light text-xs">
                <h1>19 Madeira Street</h1>
                <h1>Nassau, The Bahamas</h1>
                <h1>+1 242-325-9663</h1>
            </div>
    </div>
</button>
    <button on:click={makeMap2} class="h-48 sm:w-[30rem] w-[90%] mt-6 bg-gray-400 rounded-lg border-2 border-black flex flex-row">
        <div class="h-full w-1/2 row-span-1 bg-black"></div>
        <div class="h-full w-1/2 row-span-1  flex-col flex justify-center items-start px-4">
            <h1 class="font-bold sm:text-xl text-lg">Wood You Furniture Gallery (West)</h1>
            <h4>hours</h4>
            <div class="font-light text-xs">
                <h1>Unit 4, Shops at Old Fort Bay Town Centre</h1>
                <h1>Nassau, The Bahamas</h1>
                <h1>+1 242-698-0217</h1>
            </div>
    </div>
</button>
</div>
</section>