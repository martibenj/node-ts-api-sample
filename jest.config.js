module.exports = {
  collectCoverageFrom : ['src/**/*.ts'],
  transform           : { '\\.ts$': 'ts-jest' },
  testRegex           : '\\.spec\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters           : [
    'default',
    ['jest-junit', { output: './reports/junitresults.xml' }]
  ],
  coverageReporters   : ['text', 'lcovonly', 'cobertura'],
  coverageDirectory   : 'reports/coverage'
};
