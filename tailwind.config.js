module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html', './src/**/*.vue'],
	},
	theme: {
		extend: {
			height: {
				'400': '400px',
			},
		},
	},
	variants: {},
	plugins: [],
};
