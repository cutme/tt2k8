const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const plugins = require('./plugins');

const css = {
    test: /\.scss$/,
    use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'happypack/loader?id=scss'
    ]
};

const fonts = {
	test: /\.(eot|svg|ttf|woff|woff2)$/,
	exclude: /img/,
	use: [
	    {
		    loader: 'file-loader',
			options: {
			    name: '../fonts/[name].[ext]'
			}
        }
	]
}

const images = {
    test: /\.(jpg|png|svg|gif)$/i,
    exclude: /fonts/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                useRelativePath: true
            }
        },
        {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    enabled: false,
                    progressive: false,
                    quality: 70
                }
            }
        }
    ] 
}

const js = {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'happypack/loader?id=js'
};


module.exports = {
    fonts: fonts,
    images: images,
    js: js,
    css: css
};
