 const path = require('path');
 const webpack = require('webpack');

 module.exports = {
  devServer: {
    port: '8080',
    contentBase: './',
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
   entry: {
     entry1: './src/entry1.js',
     entry2: './src/entry2.js',
     entry3: './src/entry3.js',
    //  libs: [
    //   'jquery',
    //  ]
    // libs: [
    //   // './src/lib1.js',
    //   './src/lib2.js',
    //  ]
   },
   output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/static/',
    filename: '[name].js',
  },
   module: {
     rules: [
       {
         test: /\.js/,
         exclude: [/node_modules/],
         use: {
           loader: 'babel-loader',
         },
       },
     ],
   },
   plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'libs-common',
      minChunks: 2,
      chunks: [
        'entry1',
        'entry2',
      ],
    }),
   ],
 };
