require('dotenv').config()

const path = require('path');

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) =>
{
    const devtool = (argv && argv.mode === "production") ? undefined : "inline-source-map";

    config = {
        entry: {
            main: './src/index.js',
        },
        output: {
            filename: 'embed-code.js',
            path: path.resolve(__dirname, process.env.WEBPACK_OUTPUT_PATH),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        { loader: 'style-loader', options: { injectType: "lazyStyleTag", } },
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ]
        },
        performance:
        {
            "hints": false,
        },
        /*
        plugins: [
            new CleanWebpackPlugin(),
        ],
        */
        devtool: devtool,
    };

    return config;
};
