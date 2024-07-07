const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,
  entry: {
    "responsive-spacer": path.resolve(__dirname, "src", "responsive-spacer.js"),
    "balance-left-h1": path.resolve(__dirname, "src", "balance-left-h1.js"),
    "balance-left-h2": path.resolve(__dirname, "src", "balance-left-h2.js"),
    "balance-left-p": path.resolve(__dirname, "src", "balance-left-p.js"),
    "full-span-image": path.resolve(__dirname, "src", "full-span-image.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
};
