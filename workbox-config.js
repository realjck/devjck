module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{ttf,png,svg,ico,ai,woff2,vcf}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};