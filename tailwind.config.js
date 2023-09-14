/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			cursor: {
				smiley: 'url(cool.cur)'
			}
		}
	},
	plugins: []
};
