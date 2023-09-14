<script>
    let email = '';
    let placeholder = '';
    let buttonText = 'Search';
  
    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    function handleSubmit(event) {
      event.preventDefault();
      // Handle form submission or search logic here
      console.log('Search submitted for email:', email);
    }
  </script>
  
  <div class="my-2  mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md">
    <div>
      <button
        type="submit"
        class="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white"
        class:bg-purple-500="{email.length > 0}"
        disabled="{email.length === 0}"
        on:click={handleSubmit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <!-- Add your SVG path here -->
        </svg>
      </button>
    </div>
  
    <div class="w-full">
      <input
        type="email"
        bind:value={email}
        class="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
        placeholder={placeholder}
      >
    </div>
  </div>
  