const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (env) => {

  // Configure Environment 
  const configDir = path.join(__dirname, '/config');

  const defaultEnvironment = configDir + '/.env';

  const environmentFilePath = defaultEnvironment + "." + env;

  const configFilePath = fs.existsSync(environmentFilePath) ? environmentFilePath: defaultEnvironment;

  // call dotenv and it will return an Object with the parsed keys.
  const fileEnv = dotenv.config({ path: configFilePath }).parsed;

  console.log(`Loading configuration for ${env} environment`);

  // create the object with all environment variables.
  const envVars = Object.keys(fileEnv).reduce( (prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
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
      publicPath: "/dist/",
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
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin(envVars)]
  }
};