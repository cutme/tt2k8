const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}

module.exports = {
    mode: 'development',

    entry: {
        case: "./src/case.js",
        blog: "./src/blog.js",
        bloglista: "./src/blog-lista.js",
        index: "./src/index.js",
        onas: "./src/onas.js",
        pozycjonowanie: "./src/pozycjonowanie.js",
        wzorzec: "./src/wzorzec.js",
    },
    
    devServer: {
        contentBase: './dist',
        hot: true
    },

    output: {
        path: path.resolve(__dirname, './dist'),
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
        plugins.css,
        plugins.js,
        plugins.HotModuleReplacementPlugin,

		
		
		new HtmlWebpackPlugin({
		    filename: 'blog.html',
		    cache: false,
    		chunks: ['commons', 'blog'],
            template: './src/blog.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'blog-lista.html',
		    cache: false,
    		chunks: ['commons', 'bloglista'],
            template: './src/blog-lista.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'case.html',
		    cache: false,
    		chunks: ['commons', 'case'],
            template: './src/case.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    cache: false,
    		chunks: ['commons', 'index'],
            template: './src/index.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'onas.html',
		    cache: false,
    		chunks: ['commons', 'onas'],
            template: './src/onas.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'pozycjonowanie.html',
		    cache: false,
    		chunks: ['commons', 'pozycjonowanie'],
            template: './src/pozycjonowanie.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'wzorzec.html',
		    cache: false,
    		chunks: ['commons', 'wzorzec'],
            template: './src/wzorzec.html',
            minify: false
		}),
	],
	
    optimization: {
        namedModules: true, // NamedModulesPlugin()
        /*
splitChunks: { // CommonsChunkPlugin()
            name: 'commons',
            minChunks: 2
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
*/
    }
};



