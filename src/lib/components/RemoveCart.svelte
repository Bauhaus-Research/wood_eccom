<script>
	import { rmToCart } from '$lib/stores/cartStore';
	export let sku = '';
</script>

<button
	on:click={() => rmToCart({ id: sku, amount: -1 })}
	class="text-xl ml-2 my-2 px-4 py-1 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-[rgb(255,233,221)] hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-[rgb(255,233,221)] text-[rgb(255,233,221)]"
>
	-
</button>
