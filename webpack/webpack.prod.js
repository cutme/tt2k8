const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourceMap = true;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}

console.log(process.env.NODE_ENV);

module.exports = {
    mode: 'production',
    devtool: 'source-map',

    entry: {
        case: "./src/case.js",
        blog: "./src/blog.js",
        bloglista: "./src/blog-lista.js",
        index: "./src/index.js",
        onas: "./src/onas.js",
        pozycjonowanie: "./src/pozycjonowanie.js",
        wzorzec: "./src/wzorzec.js"
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name].bundle.js",
        publicPath: ''
    },

    module: {
    	rules: [
			loaders.css,
            loaders.fonts,
            loaders.images,
            loaders.js,
        ]
    },

    plugins: [
        new ProgressBarPlugin(),
        
        plugins.MiniCssExtractPlugin,

        createHappyPlugin('scss', ['css-loader?importLoaders:1!group-css-media-queries-loader?options:sourceMap!postcss-loader!sass-loader']),
        
        plugins.js,
        
		new HtmlWebpackPlugin({
		    filename: 'blog.html',
		    cache: false,
    		chunks: ['vendors', 'commons', 'blog'],
            template: './src/blog.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'blog-lista.html',
		    cache: false,
    		chunks: ['vendors', 'commons', 'bloglista'],
            template: './src/blog-lista.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'case.html',
		    cache: false,
    		chunks: ['vendors', 'commons', 'case'],
            template: './src/case.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    cache: false,
    		chunks: ['vendors', 'commons', 'index'],
            template: './src/index.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'onas.html',
		    cache: false,
    		chunks: ['vendors', 'commons', 'onas'],
            template: './src/onas.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'pozycjonowanie.html',
		    cache: false,
    		chunks: ['vendors', 'commons', 'pozycjonowanie'],
            template: './src/pozycjonowanie.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'wzorzec.html',
		    cache: false,
    		chunks: ['vendors', 'commons', 'wzorzec'],
            template: './src/wzorzec.html',
            minify: false
		}),
		

        
        new HtmlCriticalPlugin({
            base: path.resolve(__dirname, '../dist'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        })


	],
	
	optimization: {
        namedModules: true, // NamedModulesPlugin()
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                },
                commons: {
                    test: /[\\/]js[\\/]/,
                    name: 'commons',
                    enforce: true,
                    chunks: 'all'
                }
            }
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
    }
};


function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,
        verbose: false,
    });
}

