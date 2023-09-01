<script>
	import { blur } from 'svelte/transition';
	/**
	 * @type {HTMLInputElement}
	 */
	let first_name ;
	/**
	 * @type {HTMLInputElement}
	 */
	let last_name;
	/**
	 * @type {HTMLInputElement}
	 */
	let email ;
	/**
	 * @type {HTMLInputElement}
	 */
	let phone ;
	/**
	 * @type {HTMLSelectElement}
	 */
	let countries ;
	/**
	 * @type {any}
	 */
	let company ;
  let formSuccess = false; // Variable to track form submission success

  /**
	 * @param {{ preventDefault: () => void; }} event
	 */
  async function submitForm(event) {
    event.preventDefault();
  // Validate form fields
  console.log(first_name.value+" "+last_name.value+" "+email.value+" "+phone.value+" "+countries.value+" "+company.value);

  console.log(first_name.value);
    // After successful submission
    formSuccess = true;
  console.log(first_name.value);



  }
</script>
<section in:blur={{ delay:1200, duration:300 }} out:blur={{ duration:300 }} class="bg-[#ecebe9] shadow-2xl rounded-lg  text-amber-950  sm:w-[30rem] w-[23rem] ">
	<div class="{formSuccess===false?'hidden':'block'}">
		<div class="bg-white rounded-lg p-8 flex flex-col justify-center items-center  text-amber-950  sm:w-[30rem] w-[23rem] ">
			<h1 class="text-xl text-amber-950 font-bold">Do not expect an email from me later - this form didn't go anywhere</h1>
		</div>
	</div>
	<div class="{formSuccess===true?'hidden':'block'}">
		<form on:submit={submitForm} class="bg-[#ecebe9] rounded-lg p-8 grid gap-x-2 mb-6 grid-cols-2  text-amber-950   sm:w-[30rem] w-[23rem] ">
			<h1 class="col-span-2 font-bold font-serif text-xl text-amber-950">Unclaimed Medicare Benefits
			</h1><p class="col-span-2 mb-2 text-sm text-amber-950 text-opacity-70">Are you missing out? Take the first step in reclaiming what's yours today.
			</p>
			<div class="col-span-2 sm:col-span-1">
				<label for="first_name" class="mb-2 text-opacity-60 text-xs text-amber-950">First Name*</label>
				<input type="text" id="first_name" bind:this={first_name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" placeholder="John" required>
			</div>
			<div class="col-span-2 sm:col-span-1">
				<label for="last_name" class="mb-2 text-opacity-60 text-xs text-amber-950">Last name</label>
				<input type="text" bind:this={last_name} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" placeholder="Doe" required>
			</div>
			<div class="col-span-2 sm:col-span-1">
				<label for="email" class="mb-2  text-opacity-60 text-xs text-amber-950">Email Address</label>
				<input type="email" bind:this={email} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" placeholder="john@doe.com" required>
			</div>
			<div class="col-span-2 sm:col-span-1">
				<label for="phone" class=" mb-2 text-opacity-60 text-xs text-amber-950">Phone</label>
				<input type="tel" bind:this={phone} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" placeholder="(813) 123-4567" required>
			</div>  
		
				<div class="col-span-2">
					<label for="countries" class="block mb-1 mt-2  text-opacity-60 text-xs text-amber-950">Select your district</label>
			<select id="countries" bind:this={countries} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
			  <option selected>I currently have medicare</option>
			  <option value="US">I don't currently have medicare</option>
			  <option value="US2">I don't qualify for medicare</option>
			</select>
				</div>
				<div class="col-span-2 sm:col-span-1">
				<label for="company" class="mb-2  text-opacity-60 text-xs text-amber-950">Zip Code</label>
				<input type="text" id="company" bind:this={company} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" placeholder="33620" required>
			</div>
			<div class="col-span-2 sm:col-span-1">
				<label for="promo" class=" mb-2 text-opacity-60 text-xs text-amber-950">Promo Code</label>
				<input readonly disabled type="email" id="promo" class="bg-gray-50 border border-gray-300 dark:focus:border-0 dark:focus:border-white cursor-default text-gray-900 text-sm rounded-lg  w-full p-2.5" placeholder="MEDICAID23" required>
			</div>  
			<div class="flex items-start mb-6 col-span-2 mt-2">
				<h4 class="h-5 text-xs">
				  By continuing, you agree to our <span>
					<a class="underline" href="/terms">Terms of Use
					</a>
				  </span> and acknowledge our
				  <span><a class="underline" href="/privacy">Privacy Policy
				  </a>
				</span>
				  .
				</h4>
			  </div>
			<button type="submit" class="text-white col-span-2 bg-amber-950 hover:bg-blue-700 transition-colors shadow-neutral-500 shadow-2xl duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ">Submit</button>
		</form>
	</div>
</section>

