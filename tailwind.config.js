// tailwind.config.js

const colors = {
	grayWhite: '#F1F1F1',
	grayLight: '#1111111A',
	gray: '#1111117A',
	black: '#111111',
	blackDeep: '#000000',
	blue: '#01A7FD',
	white: '#FFFFFF',
}

module.exports = {
	purge: [],
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: colors,
		extend: {},
		screens: {
			sm: '440px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
