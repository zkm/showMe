const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true, // Open the browser automatically
    port: 8012, // Port number to run the server on
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new DashboardPlugin({
      customOptions: {
        logLevel: "info",
        minWidth: 500,
        minHeight: 300,
        borderRadius: 10,
        theme: {
          scheme: "monokai",
          author: "wimer hazenberg (http://www.monokai.nl)",
          base00: "#272822", 
        },
      },
    }),
  ],
};
