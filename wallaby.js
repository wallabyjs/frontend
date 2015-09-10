module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts*',
      'test/**/*.ts*',
      '!test/**/test-*.ts*'
    ],
    tests: ['test/**/test-*.ts*'],
    compilers: {
      '**/*.ts*': wallaby.compilers.typeScript({
        typescript: require('typescript'),
        module: 1,  // commonjs https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts#L2071
        jsx: 2      // react https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts#L2077
      })
    },

    env: {
      type: 'node'
    }
  };
};
