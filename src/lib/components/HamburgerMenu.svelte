<script>
	export let open = true;
</script>

<nav class="lg:hidden self-start -translate-y-2.5 p-1 mt-2">
	<button
		class="text-gray-500 w-10 h-min relative focus:outline-none"
		on:click={() => (open = !open)}
		on:keydown={() => (open = !open)}
	>
		<span class="sr-only">Open main menu</span>
		<div class="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<span
				aria-hidden="true"
				class="block absolute h-1 w-8 bg-green-950 transform transition duration-500 ease-in-out"
				class:rotate-45={open}
				class:-translate-y-1.5={!open}
			/>
			<span
				aria-hidden="true"
				class="block absolute h-1 w-8 bg-green-950 transform transition duration-500 ease-in-out"
				class:opacity-0={open}
			/>
			<span
				aria-hidden="true"
				class="block absolute h-1 w-8 bg-green-950 transform transition duration-500 ease-in-out"
				class:-rotate-45={open}
				class:translate-y-1.5={!open}
			/>
		</div>
	</button>
</nav>
