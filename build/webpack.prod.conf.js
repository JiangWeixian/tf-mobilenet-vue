'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'production',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: path.posix.join('static', 'js/[name].[chunkhash].js'),
    chunkFilename: path.posix.join('static', 'js/[id].[chunkhash].js'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'components': resolve('src/components'),
      'assets': resolve('src/assets')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: [ MiniCssExtractPlugin.loader,
              {loader: 'css-loader', options: {sourceMap: true}}],
            stylus: [ MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: {sourceMap: true}},
              { loader: 'stylus-loader', options: {sourceMap: true}}],
            styl: [MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: {sourceMap: true}},
              { loader: 'stylus-loader', options: {sourceMap: true}}]
          },
          cssSourceMap: true,
          cacheBusting: true,
          transformToRuqire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.postcss$/,
        use: [MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}},
          {loader: 'stylus-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.stylus$/,
        use: [MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}},
          {loader: 'stylus-loader', options: {sourceMap: true}},
        ]
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: path.resolve(__dirname, '../dist/index.html'),
      favicon: path.resolve(__dirname, '../dist/static/img/tfmobile.ico'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
      },
      sourceMap: true,
      parallel: true
    }),
    new MiniCssExtractPlugin({
      filename: path.posix.join('static', 'css/[name].[contenthash].css'),
      allChunks: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {safe: true, map: { inline: false }}
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }]),
    new VueLoaderPlugin()
  ]
}
