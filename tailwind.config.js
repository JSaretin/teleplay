/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: { Lato: ['Lato', 'sans-serif'] },
      colors: {
        telegram: '#2AABEE'
      }
		}
	},
	plugins: []
};
