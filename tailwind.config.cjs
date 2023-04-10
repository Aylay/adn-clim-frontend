/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFF',
			black: '#000',
			jagger: '#380A51',
			rock: '#180325',
			jaguar: '#0B0211',
			bright: '#00FFDA',
			seance: '#8013BD'
		},
		fontFamily: {
			base: 'Montserrat, Arial, sans-serif',
			highlight: 'Cookie, Arial, sans-serif'
		},
		fontSize: {
			1: [
				'10rem',
				{
					lineHeight: '12rem',
					fontWeight: '700'
				}
			],
			2: [
				'7.5rem',
				{
					lineHeight: '9rem',
					fontWeight: '600'
				}
			],
			3: [
				'4rem',
				{
					lineHeight: '4.8rem',
					fontWeight: '600'
				}
			],
			4: ['3rem', '3rem'],
			5: [
				'2.3rem',
				{
					lineHeight: '2.76rem',
					fontWeight: '600'
				}
			],
			6: ['1.6rem', '2.4rem']
		},
		extend: {
			animation: {
				line: 'line 1s ease-in-out',
				title: 'title 2s linear 1s 1 forwards',
			},
			keyframes: {
				line: {
					from: { transform: 'scale(0)' },
					to: { transform: 'scale(1)' }
				},
				title: {
					'0%': { opacity: 0 },
					'85%': { opacity: .15 },
					to: {
						opacity: 0,
						left: '-20%'
					}
				}
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
};
