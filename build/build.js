const webpack = require("webpack")
const webpackProdConfig = require("./webpack.prod.conf");
webpack(webpackProdConfig, function(err, stats) {
    process.stdout.write(stats.toString());
});