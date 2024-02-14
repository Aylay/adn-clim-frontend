/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFF',
			black: '#000',
			blue: '#0E18FF',
			spray: '#72EDCA',
			transparent: 'transparent'
		},
		fontFamily: {
			base: "'Fira Sans', Arial, sans-serif"
		},
    extend: {
      minHeight: {
        '3/4-screen': '75vh',
      },
			flex: {
				2: '2 2 0%',
				3: '3 3 0%'
			}
    },
	},
	plugins: [require('tailwindcss-animated')]
};
