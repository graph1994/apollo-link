export default {
  entry: 'dist/src/zenObservable.js',
  dest: 'dist/src/bundle.umd.js',
  format: 'umd',
  sourceMap: true,
  moduleName: 'zenObservable',
  exports: 'named',
  onwarn
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
