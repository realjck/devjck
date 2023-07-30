module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,css,txt,ttf,png,svg,ico,ai,woff2,vcf,html,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};