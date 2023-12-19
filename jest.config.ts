module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.css$': 'I:/react-projects/rick-and-morty/src/jest/jest-css-transform.ts',
    },
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
};
