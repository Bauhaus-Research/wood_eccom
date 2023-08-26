<script>
    export let title = "title";
    export let answer = "answer";
    let isOpen = false; // Initialize the reactive variable to keep track of the click state
  
    function toggleAnswer() {
      isOpen = !isOpen; // Toggle the isOpen variable on each click
    }
  </script>
  
  <button
    class="group w-[80vw] md:w-[60vw] border-2 border-opacity-10 border-slate-600 px-2 pt-4 pb-4 mb-1 rounded-lg"
    on:click={toggleAnswer}
    tabindex="0"
    aria-expanded={isOpen ? "true" : "false"} 
  >
    <span class="flex flex-row"> <!-- Wrap the contents in a <span> instead of <div> -->
      <!-- Use on:click to trigger the click event -->
      <h2 class="group w-[70vw] md:w-[55vw] cursor-pointer flex text-start justify-between font-semibold">
        {title}
      </h2>
      <!-- Use a class based on the isOpen variable to apply rotation when the answer is open -->
      <svg
        class="{isOpen ? 'rotate-180' : ''} transition duration-700"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
      </svg>
    </span>
  
    <!-- Use a class based on the isOpen variable to conditionally show or hide the answer -->
  
    <p
      class="{isOpen ? '' : 'hidden'} transition duration-100 ease-in-out m-8 mr-14 text-start"
      aria-hidden={!isOpen} 
    >
      {answer}
    </p>
  </button>
  