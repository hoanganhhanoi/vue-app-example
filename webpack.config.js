
module.exports = {
  entry: "./scripts/app.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
    { test: /\.vue$/, loader: "vue"},
    { test: /\.css$/, loader: ["style-loader", "css-loader"] },
    { test: /\.jpeg$/, loader:'file' },
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
    { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
    // { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
    // { test: /\.css$/, loader: 'bootstrap', exclude: /node_modules/ }

    ]
  },
	babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

