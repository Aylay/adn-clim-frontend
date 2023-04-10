/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFF',
			black: '#000',
			blue: '#0E18FF',
			spray: '#72EDCA'
		},
		fontFamily: {
			base: "'Fira Sans', Arial, sans-serif"
		},
		extend: {}
	},
	plugins: [require('tailwindcss-animated')]
};
