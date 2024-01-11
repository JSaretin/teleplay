/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: { Lato: ['Lato', 'sans-serif'] },
			colors: {
				telegram: '#2AABEE'
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite'
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				}
			}
		}
	},
	plugins: []
};
