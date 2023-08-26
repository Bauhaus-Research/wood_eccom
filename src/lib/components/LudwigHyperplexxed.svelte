<script>
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let img =
		'https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80';
	export let i = 0;
</script>

<div transition:fly={{ delay: 100 * i, duration: 300, y: 100, easing: backOut }} id="cards">
	<div class="card">
		<img
			class="bg-cover w-full aspect-[1/1.3] object-cover card-front-image card-image"
			src={img}
			alt="Img-Fading_component"
		/>
		<div class="card-faders aspect-[9/16]">
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
			<img class="card-fader card-image aspect-[1/1.3]" src={img} alt="Img-Fading_component" />
		</div>
	</div>
</div>

<style>
	:root {
		--blue-rgb: 92 192 249;
		--green-rgb: 125 161 35;
		--brown-rgb: 127 46 23;
	}

	.card {
		background-size: cover;
		background-position: center;
		position: relative;
		cursor: pointer;
		outline: none;
		transition: scale 100ms;
	}

	.card .card-front-image {
		position: relative;
		z-index: 2;
	}

	.card .card-image {
		border-radius: clamp(0.5rem, 0.75vw, 2rem);
	}

	.card-faders {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 1;
		opacity: 0;
		transition: opacity 1500ms;
		pointer-events: none;
	}

	.card:hover .card-faders {
		opacity: 1;
	}

	.card:active {
		scale: 0.98;
	}

	.card-fader {
		position: absolute;
		left: 0px;
		top: 0px;
	}

	.card-fader:nth-child(odd) {
		animation: fade-left 3s linear infinite;
	}

	.card-fader:nth-child(even) {
		animation: fade-right 3s linear infinite;
	}

	.card-fader:is(:nth-child(3), :nth-child(4)) {
		animation-delay: 750ms;
	}

	.card-fader:is(:nth-child(5), :nth-child(6)) {
		animation-delay: 1500ms;
	}

	.card-fader:is(:nth-child(7), :nth-child(8)) {
		animation-delay: 2250ms;
	}

	@keyframes fade-left {
		from {
			scale: 1;
			translate: 0%;
			opacity: 1;
		}

		to {
			scale: 0.8;
			translate: -30%;
			opacity: 0;
		}
	}

	@keyframes fade-right {
		from {
			scale: 1;
			translate: 0%;
			opacity: 1;
		}

		to {
			scale: 0.8;
			translate: 30%;
			opacity: 0;
		}
	}
</style>
