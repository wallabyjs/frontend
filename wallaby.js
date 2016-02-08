module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts*',
      'test/**/*.ts*',
      '!test/**/test-*.ts*'
    ],
    tests: ['test/**/test-*.ts*'],

    env: {
      type: 'node'
    }
  };
};
