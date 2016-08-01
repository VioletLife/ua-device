var webpack=require("webpack");
module.exports = {
    entry: "./src/entry.js",
    output: {
        path: "dist/uaDevice",
        filename: "uadevice.min.js"
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ]
};