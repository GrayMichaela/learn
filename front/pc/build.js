const env = process.env.NODE_ENV;
const HtmlWebpackPlugin = require("html-webpack-plugin")
	,VueLoaderPlugin = require("vue-loader/lib/plugin")
	,path = require("path")
	,webpack = require("webpack")
	,autoprefixer = require("autoprefixer");
module.exports = {
	mode:env
	,entry:"./src/index.js"
	,output:{
		filename:"index.js"
		,path:path.resolve(__dirname,"dist")
	}
	,module:{
		rules:[
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/
				,use:["file-loader"]
			}
			,{
				test:/\.(png|svg|jpg|gif)$/
				,use:["file-loader"]
			}
			,{
				test:/\.less$/
				,use:["style-loader","css-loader","less-loader"]
			}
			,{
				test:/\.css$/
				,use:["vue-style-loader","css-loader"]
			}
			,{
				test:/\.vue$/
				,use:{
					loader:"vue-loader"
					,options:{
						postcss:[autoprefixer]
						,loaders:{js:{loader:"babel-loader"}}
					}
				}
			}
			,{
				test:/\.(mp4|avi|m4a|mp3)$/
				,use:["file-loader"]
			}
			,{
				test:/\.js$/
				,exclude:/node_modules/
				,include:[/src/]
				,use:["babel-loader"]
			}
		]
	}
	,resolve:{extensions:[".js",".vue"]}
	,target:"web"
	,devtool:"eval-source-map"
	,devServer:{
		contentBase:"./dist"
		,hot:true
		,port:80
		,host:"0.0.0.0"
	}
	,plugins:[
		new HtmlWebpackPlugin({
			template:"./src/index.html"
			,ak:"nk4O8FeX4GgoCUrTyvOfn83fT6P01Lju"
		})
		,new VueLoaderPlugin()
		,new webpack.NamedModulesPlugin()
		,new webpack.HotModuleReplacementPlugin()
	]
};