<script>
	let name = '';
	let email = '';
	let phone = '';

	function handleSubmit() {
		// You can add your logic here to handle the form submission
		console.log('Form submitted!');
	}
</script>

<form class="h-96 w-80 grid grid-cols-2 bg-gray-900" on:submit={handleSubmit}>
	<h1 class="font-bold text-xl col-span-2 text-center text-gray-300 mb-2">
		Wedding Registry Registration
	</h1>
	<div class="col-span-2 mb-1">
		<input
			type="text"
			id="name"
			class=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
			placeholder="Name"
			required
		/>
	</div>
	<div class="col-span-2 mb-1">
		<input
			type="email"
			id="tel"
			class=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
			placeholder="Your email"
			required
		/>
	</div>
	<div class="col-span-2 mb-1">
		<input
			type="tel"
			id="phone"
			class=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
			placeholder="Mobile Phone"
			required
		/>
	</div>
	<div class="grid grid-cols-2 col-span-2 gap-4 justify-between">
		<label class="text-gray-300">
			Wedding Date:
			<input
				type="date"
				id="wedding_date"
				class="text-gray-300 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
				aria-describedby="date-format"
				min="2022-03-01"
				max="2031-01-01"
				required
			/>
		</label>
		<label class="text-gray-300">
			Guests Count:
			<input
				type="text"
				inputmode="numeric"
				id="guests"
				class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
				placeholder="Estimated"
				bind:value={phone}
				min="2"
			/>
		</label>
	</div>
	<button
		class="rounded-lg mb-4 col-span-2 hover:bg-gray-400 bg-gray-600 mx-8 border-gray-500 hover:border-gray-200 border-2 transition-all duration-300 hover:shadow-lg hover:text-gray-100 text-gray-900 font-bold text-lg hover:shadow-gray-300"
		type="submit">Submit</button
	>
</form>
