module.exports = {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
	theme: {
		extend: {
			colors: {
				matchBlue: {
					700: '#6E85FD',
					800: '#5A74FD',
					900: '#4764fd',
					1000: '#3454FD',
					1100: '#2043FD',
				},
				hover: '#202020',
				linkedin: '#0a66c2',
				hashnode: '#2962ff',
				twitter: '#1d9bf0',
				instagram: '#fe0a64',
			},
		},
	},
	plugins: [],
};
