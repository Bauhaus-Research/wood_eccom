<script>
    export let text = "Redeem";
    export let deal = "Redeem";
    export let dealtext = "Any Seasonal Item";
</script>

<div class="w-48 flex-flex-col shadow-2xl shadow-green-950 rotate-y-example transition-all duration-300 hover:z-10  bg-gradient-to-r from-green-900 via-green-800 to-green-900">
    <div class="rounded-t w-48 h-36 flex flex-col justify-center items-center text-opacity-70  hover:scale-105 transition-all duration-150 rounded-sm font-light  bg-gradient-to-r from-amber-200 via-amber-400 to-amber-900 text-transparent bg-clip-text  text-amber-600" >
    <strong class="font-black ">{deal}</strong>{dealtext}</div>
    <div class="-rounded-full bg-[col] w-full h-8 flex justify-between  bg-gradient-to-r from-green-900 via-green-800 to-green-900">
        <div class="-rounded-full bg-gradient-to-bl from-green-950 to-green-900 w-4 h-8 flex rounded-r-full"></div>
        <div class="w-full h-1 border-t-[1px] self-center border-dotted border-amber-600 border-opacity-70"></div>
        <div class="from-green-950 to-green-900 bg-gradient-to-br -rounded-full w-4 h-8 flex rounded-l-full"></div>
    </div>
    <div class="rounded-b w-full h-16 flex  bg-gradient-to-r from-green-900 via-green-800 to-green-900">

		<button class="text-xs self-center mx-auto mt-2 px-4 py-1 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20  text-opacity-70  hover:scale-105 transition-all duration-150 rounded-sm font-bold border-2 border-amber-600 bg-gradient-to-r from-amber-500 via-amber-700 to-amber-400 text-transparent bg-clip-text  ">
			{text}
		</button>
    </div>
</div>

<style>
    .rotate-y-example {
        transform: perspective(1000px) rotateY(-30deg);
    }

    .rotate-y-example:hover {
        transform: perspective(1000px) rotateY(0deg) scaleX(1.25) scaleY(1.25);
    }
</style>
