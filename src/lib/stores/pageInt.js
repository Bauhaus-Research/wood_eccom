import { writable } from 'svelte/store';

// Initialize the store with a default value (e.g., 1000)
const initStore = 1;
const page = writable(initStore);

export default page;
