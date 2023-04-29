const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('jsx', 'js', 'json', 'ts', 'tsx');
config.resolver.enableHermes = false;
config.resolver.assetExts.push('cjs');

module.exports = config;
