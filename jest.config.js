module.exports = {
	setupFilesAfterEnv: ['./setupTests.ts'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|svg|mp3)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
	},
};
