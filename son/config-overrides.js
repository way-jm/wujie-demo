module.exports = {
    //do stuff with the webpack config...
    webpack: function(config, env) {
        config.output.library = `terminal-pmh`;
        config.output.libraryTarget = 'umd';
        config.output.globalObject = 'window';
        return config;
    },
    devServer: function(configFunction) {
        const config = configFunction;

        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        config.hot = false;
        config.watchContentBase = false;
        config.liveReload = false;
        return config
    },
}