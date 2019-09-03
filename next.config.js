const Config = require('./config');
const path = require('path');

module.exports = {
    webpack (config, { webpack }) {
        config.plugins.push(
            new webpack.DefinePlugin({
                configBase: JSON.stringify(Config._rawConfig),
            })
        );

        config.node = {fs: 'empty'};
        config.resolve.alias['@config'] = path.resolve(__dirname, './static/config.js');
        return config;
    }
};