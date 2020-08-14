const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

const clientConfig = {
  target: 'web',

  entry: [
    'babel-polyfill',
    './src/index.jsx',
  ],

  node: {
    net: 'empty',
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/favicon/*', flatten: true },
      { from: './src/u.png', flatten: true },
      ...process.env.NODE_ENV === 'staging' ? [{ from: './src/robot.txt', flatten: true }] : [],
    ]),
    new Dotenv({
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        loader: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]--[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [autoprefixer()],
          },
        }],
      },
      {
        test: /\.(less)$/,
        loader: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [autoprefixer()],
          },
        }, {
          loader: 'less-loader',
        }],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(png|svg|gif|jpg|jpeg)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[path][name].[ext]',
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/',
  },

  stats: {
    warnings: false,
  },
};

const serverConfig = {
  target: 'node',

  entry: [
    'babel-polyfill',
    './src/server.js',
  ],

  plugins: [
    new Dotenv({
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        loader: [{
          loader: 'isomorphic-style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            onlyLocals: true,
            localIdentName: '[local]--[hash:base64:5]',
          },
        }],
      },
      {
        test: /\.(png|svg|gif|jpg|jpeg)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[path][name].[ext]',
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      }
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'index.js',
    publicPath: '/',
  },

  stats: {
    warnings: false,
  },
};

module.exports = [serverConfig, clientConfig];
