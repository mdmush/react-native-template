module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        alias: {
          components: './src/components',
          assets: './src/assets',
        },
      },
    ],
  ],
};
