var config = {
  entry: {
    app: ['./src/core/bootstrap.js'],
  },
  output: {
    path:     __dirname + '/build/',
    filename: 'bundle.js',
  },
  resolve: {
    root: __dirname + '/src/',
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
    ]
  }
};

module.exports = config;
