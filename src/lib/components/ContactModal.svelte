<script>
	import ContactForm from "./ContactForm.svelte";
	import Modal from "./Modal.svelte";

    let showModal = false;
</script>
<section class="h-[30rem] bg-green-700 group w-full flex justify-center items-end bg-cover bg-center" style="background-image: url('wyb-spaces.webp');">
	<section class="h-[30rem] group w-full flex justify-center items-end bg-black  hover:bg-opacity-70 duration-300 transition-all bg-opacity-30">
		<div class="mb-16 flex flex-col">
			<h2 class="text-4xl font-bold text-[rgb(255,233,221)] text-center">
				Reach out to Sales
			</h2>
			<button on:click={() => (showModal = true)} class="text-xl mt-2 px-4 py-1 group-hover:shadow-2xl group-hover:scale-110 border-opacity-30 hover:border-opacity-80 hover:bg-opacity-20 hover:text-opacity-100 text-opacity-70 hover:bg-[rgb(255,233,221)] hover:scale-105 transition-all duration-150 rounded-sm self-center font-bold border-2 border-[rgb(255,233,221)] text-[rgb(255,233,221)]">
				Contact Us
			</button>
		</div>
	</section>
</section>

<Modal bind:showModal>
	<ContactForm />

</Modal>