module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'next/babel'],
  plugins: [['react-native-web', {commonjs: true}], 'inline-import-data-uri'],
};
