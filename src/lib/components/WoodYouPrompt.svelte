<script>
	import { brandName, context } from '$lib/stores/brandStore';
	import OpenAI from 'openai';
	
	const openai = new OpenAI({
		apiKey: import.meta.env.VITE_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true
	});

	let inputText = '';
	/**
	 * @type {string | null}
	 */
	let response = '';
	let isLoading = false;

	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();
		if (!inputText.trim()) {
			console.log('Input is empty or only whitespace.');
			return;
		}

		isLoading = true; // Show loading animation
		console.log('Input Text:', inputText);

		// Handle OpenAI interaction
		const aiResponse = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content: context
				},
				{
					role: 'user',
					content: inputText
				}
			],
			temperature: 1,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0
		});

		console.log('AI Response:', aiResponse.choices[0].message.content);
		response = aiResponse.choices[0].message.content;

		isLoading = false; // Hide loading animation
		inputText = ''; // Clear the input field
	}

	let name = '';
	let email = '';
	let phone = '';
	let search = 0;
</script>

<form class="h-[30rem] sm:w-96 px-4 py-4 border-2 border-blue-500 rounded-lg w-80 flex flex-col justify-between bg-gray-900" on:submit={handleSubmit}>
	<div class="col-span-2 w-full">
		<ul class="font-normal text-lg text-gray-600 text-center mt-2 flex flex-row justify-center">
			<button class:class-active={search === 1} class="mx-3">Ask Ai</button>
		</ul>
		<div class="col-span-2 mb-2">
			<input
				type="text"
				inputmode="search"
				id="askAI"
				bind:value={inputText}
				class="mt-2 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
				placeholder="What are unclaimed benefits?"
			/>
		</div>
	</div>
	<p class="text-base font-light h-full text-gray-200">{response}</p>
	{#if isLoading}<div class="loader-line" />
	{/if}
	<div class="text-gray-600 mb-2 text-center font-bold text-xs">
		<h6>
			<strong class="text-blue-800 font-black text-xs">{brandName}</strong>
			<span class="text-gray-500 font-black text-xs">Agent powered on GPT 4</span>
		</h6>
	</div>
</form>

<style>
	.class-active {
		font-weight: bold; /* Apply the bold font */
		transition: all 0.2s ease-in-out; /* Add a transition effect */
		color: rgb(9, 167, 72);
	}
	.loader-line {
		width: 200px;
		height: 3px;
		position: relative;
		overflow: hidden;
		background-color: #ddd;
		margin: 100px auto;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
	}

	.loader-line:before {
		content: '';
		position: absolute;
		left: -50%;
		height: 3px;
		width: 40%;
		background-color: coral;
		-webkit-animation: lineAnim 1s linear infinite;
		-moz-animation: lineAnim 1s linear infinite;
		animation: lineAnim 1s linear infinite;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
	}

	@keyframes lineAnim {
		0% {
			left: -40%;
		}
		50% {
			left: 20%;
			width: 80%;
		}
		100% {
			left: 100%;
			width: 100%;
		}
	}
</style>
