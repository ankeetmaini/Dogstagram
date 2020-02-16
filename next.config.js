const webpack = require('webpack');
const withImages = require('next-images');
const withTM = require('next-transpile-modules');

module.exports = withImages(
  withTM({
    transpileModules: [
      'react-native',
      'react-navigation',
      'react-native-gesture-handler',
      'react-native-reanimated',
      'react-native-screens',
    ],
    webpack: config => {
      return {
        ...config,
        plugins: [
          ...config.plugins,
          new webpack.DefinePlugin({
            __DEV__: JSON.stringify(process.env.NODE_ENV),
          }),
        ],
        resolve: {
          ...config.resolve,
          extensions: [
            '.web.ts',
            '.web.tsx',
            '.ts',
            '.tsx',
            '.web.js',
            '.web.jsx',
            '.js',
            '.jsx',
            ...config.resolve.extensions,
          ],
          alias: {
            ...config.resolve.alias,
            'react-native$': 'react-native-web',
          },
        },
      };
    },
  }),
);
