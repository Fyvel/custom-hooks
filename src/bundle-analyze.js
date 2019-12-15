// script to enable webpack-bundle-analyzer
process.env.NODE_ENV = "production";
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpackConfigProd = require("react-scripts-ts/config/webpack.config.prod");
webpackConfigProd.plugins
    ? webpackConfigProd.plugins.push(new BundleAnalyzerPlugin())
    : webpackConfigProd.plugins = [new BundleAnalyzerPlugin()];
// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfigProd, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err);
    }
});
