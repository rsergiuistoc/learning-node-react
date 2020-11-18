const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  module: {
    rules: [
      {
        /**
         * Transformin ES6 and JSX, use babel, and include everything that is outside 
         * of node_modules and bower_components. Test key tells what patterns to process.
         */
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      { 
        /**
         * Processing CSS, ccs-loader needs style-loader.
         */
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  /**
   * Tells which extensions Webpack will resolve. This allows us to import 
   * modules without needing to add their extensions.
   */
  resolve: { extensions: ["*", ".js", ".jsx"] },
  /**
   * Tells Webpack where to put your bundled code, publicPath specifies
   * the directory where our code should go in.And also tells webpack-dev-server
   * where to serve files from.
   */
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  /**
   * Setup the webpack dev server , the publicPath is the location where the
   * bundles are stored and where to load them. ContentBase location where to serve 
   * our static files from.
   */
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};