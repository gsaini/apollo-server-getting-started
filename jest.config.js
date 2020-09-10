module.exports = {
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary']
};
