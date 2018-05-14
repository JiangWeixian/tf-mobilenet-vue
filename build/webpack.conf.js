'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const ICON = path.join(__dirname, 'logo.png')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

console.log(ICON)


module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: 'localhost',
    port: 8080,
    open: false,
    quiet: true,
    overlay: true,
    publicPath: '/',
    watchOptions: {
      poll: false
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: ['vue-style-loader',
              {loader: 'css-loader', options: {sourceMap: true}}],
            stylus: ['vue-style-loader',
              { loader: 'css-loader', options: {sourceMap: true}},
              { loader: 'stylus-loader', options: {sourceMap: true}}],
            styl: ['vue-style-loader',
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
        use: ['vue-style-loader',
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.postcss$/,
        use: ['vue-style-loader',
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.styl$/,
        use: ['vue-style-loader',
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'stylus-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.stylus$/,
        use: ['vue-style-loader',
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'stylus-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
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
      filename: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }]),
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin({
      onErrors: (severity, errors) => {
        if (severity  !== 'error') {
          return;
        }
        const error = errors[0]
        notifier.notify({
          title: "TF-MOBILE-NET error",
          message: severity + ':' + error.name,
          subtitle: error.file || '',
          icon: ICON
        })
      }
    })
  ]
}
