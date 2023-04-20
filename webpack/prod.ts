import { merge } from 'webpack-merge';
import base from './base';
import path from 'node:path';

export default merge(base, {
    mode: 'production',
    cache: {
        type: 'filesystem',
        name: 'prod',
    },
    output: {
        path: path.resolve(".", "userscripts"),
        filename: "index.prod.user.js",
    },
    watchOptions: {
        ignored: /node_modules/,
    },
});