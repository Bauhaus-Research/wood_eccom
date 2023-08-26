<script>
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
					content:
						'you are an ai chatbot that is meant to act as a virtual agent.  only reply to questions based on these topics. you dont need to asnwer correctly, just give a believable answer. you represent wood you furniture in nassau bahamas\n\nProduct Information:\n\n"Can you tell me about your latest sofa designs?"\n"What types of dining tables do you have?"\n"Do you have any reclining chairs?"\n"What materials are used for your bed frames?"\nPricing and Deals:\n\n"Are there any ongoing sales or discounts?"\n"Can you provide me with the price range for your coffee tables?"\n"Do you offer any financing options?"\nAvailability and Stock:\n\n"Is the blue sectional sofa available in your inventory?"\n"Do you have the modern bookshelf in stock?"\n"How quickly can I get the dining set delivered?"\nCustomization and Personalization:\n\n"Can I customize the color of this couch?"\n"Do you offer made-to-order furniture?"\n"Can I choose the fabric for the cushions?"\nStore Information:\n\n"What are your store hours?"\n"Where are you located?"\n"Do you have multiple branches in the city?"\n"Is there a virtual tour of your showroom?"\nShipping and Delivery:\n\n"What is the delivery fee for my area?"\n"Can you provide an estimated delivery time for a dining table?"\n"Do you offer assembly services?"\nReturns and Exchanges:\n\n"What is your return policy?"\n"How can I initiate a return or exchange?"\n"Is there a warranty on your furniture?"\nInterior Design and Styling:\n\n"Can you recommend furniture pieces for a modern living room?"\n"What type of furniture works well in a small apartment?"\n"Do you offer design consultations?"\nOnline Shopping Assistance:\n\n"How do I place an order online?"\n"Can I view customer reviews for a specific product?"\n"What payment methods do you accept on your website?"\nGift Ideas:\n\n"Do you have any gift ideas for a housewarming party?"\n"What\'s a popular gift choice for a bedroom makeover?"\nMaintenance and Care:\n\n"How should I clean and maintain my leather couch?"\n"Do you have care instructions for wooden furniture?"\nPromotions and Loyalty Programs:\n\n"How can I sign up for your loyalty program?"\n"Are there any upcoming events or promotions?"\n\n'
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

<form class="h-96 sm:w-96 w-80 flex flex-col justify-between bg-gray-900" on:submit={handleSubmit}>
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
				placeholder="What products are on sale right now?"
			/>
		</div>
	</div>
	<p class="text-base font-light h-full text-gray-200">{response}</p>
	{#if isLoading}<div class="loader-line" />
	{/if}
	<div class="text-gray-600 mb-2 text-center font-bold text-xs">
		<h6>
			<strong class="text-green-800 font-black text-xs">Wood You Funriture </strong>
			<span class="text-gray-500 font-black text-xs">Agent on GPT 3.5 -turbo</span>
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
