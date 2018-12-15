const path = require('path');
module.exports = {
    entry: "./app/index.js",  //入口文件
    output: {
        // path: path.join(__dirname, "/dist/"),    // 所有输出文件的目标路径，绝对路径！
        path: '/Users/jack/springboot_react/simple-login-back-end/src/main/resources/static/dist',    // 所有输出文件的目标路径，绝对路径！
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,                //babel-loader将其他文件解析为js文件
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]  //babel-loader需要解析的文件
                }
            }
        ]
    }
};