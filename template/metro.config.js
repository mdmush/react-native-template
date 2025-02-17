const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

module.exports = wrapWithReanimatedMetroConfig(config);
