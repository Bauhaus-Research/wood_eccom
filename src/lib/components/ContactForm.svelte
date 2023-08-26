<script>
	let name = '';
	let email = '';
	let phone = '';

	function handleSubmit() {
		// You can add your logic here to handle the form submission
		console.log('Form submitted!');
	}
</script>

<form class="h-96 w-80 flex flex-col justify-evenly bg-gray-900" on:submit={handleSubmit}>
	<h1 class="font-bold text-xl col-span-2 text-center text-gray-300 mb-2">Contact Form</h1>
	<div class="col-span-2">
		<div class="col-span-2 mb-2">
			<input
				type="text"
				id="name"
				class=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
				placeholder="Name"
				required
			/>
		</div>
		<div class="col-span-2 mb-2">
			<input
				type="email"
				id="email"
				class=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
				placeholder="Email"
				required
			/>
		</div>
		<div class="col-span-2 mb-2">
			<input
				type="tel"
				id="phone"
				class=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
				placeholder="Mobile Phone"
				required
			/>
		</div>
		<div class="grid grid-cols-2 col-span-2 gap-4 justify-between" />
		<div class="relative mb-3 border-2 border-gray-600 rounded-lg" data-te-input-wrapper-init>
			<textarea
				class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-400 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-20"
				id="exampleFormControlTextarea1"
				rows="4"
				placeholder="Your message"
			/>
		</div>
	</div>

	<button
		on:click={() => {}}
		class="rounded-lg mb-4 h-12 col-span-2 hover:bg-gray-400 bg-gray-600 mx-8 border-gray-500 hover:border-gray-200 border-2 transition-all duration-300 hover:shadow-lg hover:text-gray-100 text-gray-900 font-bold text-lg hover:shadow-gray-300"
		type="submit">Submit</button
	>
</form>
