module.exports = {
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 120,
	tabWidth: 3,
	overrides: [
		{
			files: ['*.json', '*.md'],
			options: {
				tabWidth: 2,
			},
		},
	],
};
