export default {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest', // Transforma archivos .js y .jsx usando babel-jest
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
