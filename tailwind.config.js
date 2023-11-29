/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'heading-jp': ['M PLUS 2'],
				'primary-jp': ['Noto Serif JP'],
				'heading-en': ['Karantina'],
				'primary-en': ['Noto Sans'],
				'handwriting': ['Slackside One']
			}
		}
	},
	plugins: []
};
