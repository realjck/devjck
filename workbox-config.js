module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{ttf,png,ico}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};