import path from "path";
import { Configuration, BannerPlugin } from "webpack";
import { generateHeader } from "./plugins/userscript.plugin";

const config: Configuration = {
    mode: 'none',
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "userscript"),
        filename: "index.user.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    externals: {},
    plugins: [
        new BannerPlugin({
            banner: generateHeader(),
            raw: true,
            entryOnly: true,
        })
    ]
};

export default config;