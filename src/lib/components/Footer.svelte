<script>
	import { onMount } from 'svelte';
	import Coupon from './Coupon.svelte';
	import { brandName } from '$lib/stores/brandStore.js';

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
			console.log('Email is valid.');
		} catch (error) {
			// Handle the error here
		}
	};

	// Optionally, you can add code to call the addNewEmail function on component mount
	onMount(() => {
		addNewEmail();
	});

</script>

<footer
	id="footer"
	class="z-40 col-span-12 bg-neutral-100 text-stone-900 sm:px-10 px-2 overflow-hidden grid grid-flow-row grid-cols-8 h-full w-full justify-center"
>
	<section class="h-48 w-full" />

	<section
		class=" border-t-2 justify-between text-xs sm:text-sm flex flex-row py-6 col-span-8 overflow-hidden"
	>
		<!-- copyright -->
		<p id="copyright tag">© Padon Investments | All Right Reserved</p>
		<ul
			class="flex flex-row gap-2 justify-end items-center text-end mr-2 md:mr-14 max-w-[20%] sm:max-w-xs w-full"
		>
			{#each socialMediaBR as item}
				<li>
					<a href="https://twitter.com/" target="_blank">

						<svg class="h-8 w-8 -translate-y-4 " viewBox="0 0 1200 1227" fill="white" xmlns="http://www.w3.org/2000/svg">
							<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
							</svg>
							
					</a>
				</li>
				<li>
					<a href="https://skype.com/" target="_blank">
	
						<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
						<svg fill="#ffffff" class="h-8 w-8 -translate-y-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
							 viewBox="0 0 455 455" xml:space="preserve">
						<g>
							<path style="fill-rule:evenodd;clip-rule:evenodd;" d="M285.828,224.324c-6.357-4.187-14.031-7.709-23.039-10.631
								c-9.021-2.905-19.071-5.569-30.126-7.963c-8.82-2.069-15.177-3.64-19.005-4.716c-3.776-1.063-7.538-2.533-11.244-4.428
								c-3.692-1.881-6.58-4.104-8.649-6.667c-2.034-2.529-3.041-5.499-3.058-9.021c0.017-5.622,2.975-10.408,9.161-14.543
								c6.151-4.069,14.284-6.156,24.469-6.156c11.008-0.018,18.904,1.916,23.704,5.626c4.922,3.793,9.144,9.091,12.683,15.872
								c2.8,4.874,5.381,8.361,7.844,10.566c2.529,2.271,6.169,3.329,10.815,3.329c5.145,0.017,9.555-1.829,13.007-5.469
								c3.452-3.623,5.211-7.774,5.211-12.338c0-4.904-1.365-9.949-4.099-15.089c-2.717-5.145-7.039-10.032-12.902-14.682
								c-5.88-4.646-13.265-8.356-22.098-11.161c-8.868-2.8-19.364-4.187-31.461-4.187c-15.159,0-28.389,2.104-39.615,6.326
								c-11.261,4.204-19.911,10.268-25.891,18.182c-5.963,7.879-8.956,16.953-8.956,27.086c0,10.631,2.822,19.604,8.492,26.814
								c5.657,7.162,13.296,12.819,22.886,16.953c9.586,4.139,21.411,7.726,35.547,10.802c10.526,2.222,18.935,4.323,25.191,6.322
								c6.234,1.951,11.261,4.769,15.159,8.479c3.841,3.64,5.723,8.321,5.723,14.219c0,7.398-3.487,13.519-10.749,18.541
								c-7.21,4.992-16.647,7.503-28.333,7.503c-8.531,0-15.347-1.229-20.475-3.71c-5.18-2.476-9.178-5.639-12.014-9.432
								c-2.857-3.828-5.556-8.632-8.033-14.389c-2.052-4.957-4.581-8.715-7.591-11.296c-3.041-2.599-6.751-3.898-11.091-3.898
								c-5.298,0-9.774,1.658-13.261,4.974c-3.434,3.299-5.211,7.332-5.211,11.961c0,7.88,2.853,15.947,8.509,24.185
								c5.622,8.238,12.954,14.831,21.976,19.753c12.718,6.891,28.814,10.29,48.265,10.29c16.236,0,30.284-2.494,42.175-7.521
								c11.878-4.988,20.952-11.944,27.138-20.847c6.186-8.89,9.297-18.922,9.279-30.096c0-9.262-1.776-17.141-5.364-23.586
								C297.229,233.839,292.219,228.511,285.828,224.324z"/>
							<path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M296.677,385c-17.019,0-32.896-4.834-46.379-13.143
								c-7.433,1.181-15.054,1.781-22.816,1.781c-80.697,0-146.116-65.424-146.116-146.138c0-7.774,0.63-15.348,1.776-22.798
								C74.821,191.201,70,175.341,70,158.322C70,109.528,109.546,70,158.323,70c17.019,0,32.896,4.821,46.362,13.142
								c7.433-1.164,15.059-1.794,22.816-1.794c80.714,0,146.134,65.419,146.134,146.151c0,7.761-0.613,15.365-1.794,22.798
								c8.339,13.484,13.16,29.361,13.16,46.384C385,345.454,345.454,385,296.677,385z"/>
						</g>
						</svg>
					</a>
				</li>
		</ul>
	</section>
</footer>
