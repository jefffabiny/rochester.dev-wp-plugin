const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,
  entry: {
    "responsive-spacer": path.resolve(__dirname, "src", "responsive-spacer.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
};
