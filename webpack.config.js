const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = (envVals) => {
  const { env } = envVals;
  const envConfig = require(`./webpack.${env}.js`);
  const finalConfig = merge(common, envConfig)
  return finalConfig
}