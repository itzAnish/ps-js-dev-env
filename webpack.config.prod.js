import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  //entry: "./src/index.js",
  entry:{
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name][chunkhash].js"
  },
  plugins: [
    // Generate an external CSS file with a Hash in the filname.
    new MiniCssExtractPlugin({
      filename: "[name][chunkhash].css"
    }),

    // Create HTML file that included reference to bundled JS.
    new HtmlWebpackPlugin({
      template:"src/index.html",
      trackerJSToken: "ffece7d20b164d72b0b0c313dcded6a7"
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      //{ test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
