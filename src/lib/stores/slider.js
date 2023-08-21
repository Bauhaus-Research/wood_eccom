import { writable } from 'svelte/store';

// Initialize the store with a default value (e.g., 1000)
const initialSliderValue = 1000;
const slider = writable(initialSliderValue);

export default slider;
