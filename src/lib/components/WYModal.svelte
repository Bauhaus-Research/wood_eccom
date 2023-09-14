<script>
	import WoodYouPrompt from "./WoodYouPrompt.svelte";
	import Modal from "./Modal.svelte";

    let showModal = false;
</script>



		<div class="mb-16 flex flex-col">

            <div>
                <button on:click={() => (showModal = true)} class="text-xl mt-2 px-4 py-1 border-2 border-amber-950 rounded-lg font-black text-amber-950">
                    Ask AI
                </button>
            </div>
		</div>



<Modal bind:showModal>
	<WoodYouPrompt />

</Modal>