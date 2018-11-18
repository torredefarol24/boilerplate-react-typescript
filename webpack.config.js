module.exports = {
  "entry" : "./src/index.tsx",
  "output" : {
    filename : "bundle.js",
    path : __dirname + "/dist"
  },
  devtool : "inline-source-map",
  resolve : {
    extensions : [ ".ts", ".tsx", ".js", ".json"]
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
  },
  "mode" : "development"
}