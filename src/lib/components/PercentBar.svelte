<script>
    export let int = 1;
    
</script>

<div class="flex flex-row items-center border-opacity-25 border-white group">
    {#if int >= 0}
    <div class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150"/>
    {:else}
    <div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white"/>
    <div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white"/>
    {/if}
    {#if int >= 1}
    <div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white"/>
    <div class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150 delay-100"/>
    {:else}
    <div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white"/>
    <div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white"/>
    {/if}
    {#if int >= 2}
    <div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white"/>
    <div class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150 delay-150"/>
    {:else}
    <div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white"/>
    <div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white"/>
    {/if}
    {#if int >= 3}
    <div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white"/>
    <div class="shadow-2xl w-6 h-6 rounded-full bg-opacity-50 bg-white group-hover:bg-opacity-100 transition-all duration-150 delay-200"/>
    {:else}
    <div class="shadow-2xl w-10 h-1 bg-opacity-25 bg-white"/>
    <div class="shadow-2xl w-6 h-6 rounded-full border-4 border-opacity-25 border-white"/>
    {/if}
</div>