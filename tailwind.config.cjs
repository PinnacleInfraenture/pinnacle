/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				bg1: "url('$lib/assets/bg-1.webp')"
			},
			colors: {
				white: '#FFFFFF',
				black: '#000000',
				fadedGolden: '#D8C691',
				golden: '#BE9E45',
				grey: '#E6E6E6',
				muted: '#535353',
				greyBG: '#313131'
			},
			fontFamily: {
				casta: ['Casta']
			}
		}
	},

	plugins: []
};

module.exports = config;
