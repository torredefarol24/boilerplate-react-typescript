module.exports = {
  entry : "./src/index.tsx",
  output : {
    filename : "react-bundle.js",
    path : __dirname + "/dist"
  },
  devtool : "inline-source-map",
  resolve : {
    extensions : [ ".ts", ".tsx", ".json", ".js"]
  },
  module : {
    rules : [
      {
        test : /\.tsx?$/,
        loader : "ts-loader"
      }
    ]
  },
  externals : {
    "react" : "React",
    "react-dom" : "ReactDOM"
  }
}