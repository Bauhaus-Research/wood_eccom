<script>
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import Coupon from './Coupon.svelte';

	let newEmail = '';
	const isValidEmail = (/** @type {string} */ email) => {
		// Regular expression to validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const addNewEmail = async () => {
		try {
			// Check if the newEmail has more than 6 characters
			if (newEmail.length <= 6) {
				console.log('Email must have more than 6 characters.');
				return;
			}

			// Check if the newEmail is a valid email format
			if (!isValidEmail(newEmail)) {
				console.log('Invalid email format.');
				return;
			}

			const { data, error } = await supabase
				.from('newsletter')
				.insert([{ email: newEmail, site: 'flex' }]);

			if (error) {
				throw new Error(error.message);
			}

			if (data) {
				// Handle successful response here (if needed)
				console.log('Data:', data);
			} else {
				// Handle empty response here (if needed)
				console.log('No data returned.');
			}
		} catch (error) {
			// Handle the error here
		}
	};

	// Optionally, you can add code to call the addNewEmail function on component mount
	onMount(() => {
		addNewEmail();
	});

	let socialMediaBR = [
		{
			name: 'Instagram',
			icon: '/tree.svg',
			link: 'https://instagram.com/bauhausResearch'
		},
		{
			name: 'Facebook',
			icon: '/tree.svg',
			link: 'https://youtube.com/'
		}
	];
</script>

<footer id=footer
	class="z-40 col-span-12 bg-green-900 text-stone-200 sm:px-10 px-2 overflow-hidden grid grid-flow-row grid-cols-8 h-full w-full justify-center"
>
	<section
		class="text-stone-200 py-10 flex sm:flex-row flex-col justify-center items-center overflow-hidden col-span-8 xl:col-span-4"
	>

		<div class="w-4" />
		<div class = "flex">

			<Coupon deal="20% Off" dealtext="Any Seasonal Items"/>
			<Coupon deal="$100 CashBack" dealtext="For top Customers (No)" text="Apply"/>
		</div>
	</section>
	<section class="bg-green-900 xl:col-span-4 col-span-8 flex flex-col mb-10">
		<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
			<div class="mx-auto max-w-screen-md sm:text-center">
				<h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
					Sign up for our newsletter
				</h2>
				<p class="mx-auto mb-8 max-w-2xl font-light text-gray-400 md:mb-12 sm:text-xl">
					Stay up to date with the roadmap progress, announcements and exclusive discounts feel free
					to sign up with your email.
				</p>
				<form action="#">
					<div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
						<div class="relative w-full">
							<label for="email" class="hidden mb-2 text-sm font-medium text-gray-300"
								>Email address</label
							>
							<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
									/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg
								>
							</div>
							<input
								class="block p-3 pl-10 w-full text-sm text-stone-100 bg-green-700 rounded-lg border border-gray-600 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 "
								placeholder="Enter your email"
								type="email"
								id="email"
								bind:value={newEmail}
							/>
						</div>
						<div>
							<button
								on:click={addNewEmail}
								type="submit"
								class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
								>Subscribe</button
							>
						</div>
					</div>
					<div
						class="mx-auto max-w-screen-sm text-sm text-left text-gray-300 newsletter-form-footer"
					>
						We care about the protection of your data. <a
							href="https://bauhausresearch.com/privacy"
							class="font-medium text-primary-600  hover:underline"
							>Read our Privacy Policy</a
						>.
					</div>
				</form>
			</div>
		</div>
	</section>

	<!-- col3 -->

	<section
		class=" border-t-2 justify-between text-xs sm:text-sm flex flex-row py-6 col-span-8 overflow-hidden"
	>
		<!-- copyright -->
		<p id="copyright tag">© Padon Investments | All Right Reserved</p>
		<ul class="flex flex-row gap-2">
			{#each socialMediaBR as item}
				<li>
					<a href={item.link} target="_blank" class="flex sm:h-8 h-4">
						<img src={item.icon} alt="'{item.name}' logo" class="h-full w-full" />
					</a>
				</li>
			{/each}
		</ul>
	</section>
</footer>

