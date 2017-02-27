var webpack = require("webpack");
//用到的插件
	// 生成HTML
var html = require("html-webpack-plugin");
	// 删除文件
var clean = require("clean-webpack-plugin");
//用到的模块
module.exports = {
	//入口文件
	entry:"./app/app.js",
	//输出
	output:{
		//输出地址
		path:__dirname+"/www",
		//输出命名
		filename:"bundle.js"
	},
	//用到的模块
	module:{
		loaders:[
			{
				//css打包
				test:/\.css$/,
				loader:"style-loader!css-loader!less-loader"
			},
			{
				//图片打包
				test:/\.(png|jpe?g|gif)$/,
				loader:"url-loader?limit=1000&name=images/[name].[hash:4].[ext]"
			},
			{
				//vue打包
				test:/\.vue$/,
				loader:"vue-loader"
			},
			{
				test:/\.(woff|svg|eot|ttf)\??.*$/,
				loader:"url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
			}
			
		]
	},
	//使用插件
	plugins:[
		new html({
			title:"酒鬼网",
			template:__dirname+"/app/index.html",
			filename:"index.html",
		}),
		// new clean(["www"]),

		//注释掉防止自动刷新报错
		// new webpack.optimize.UglifyJsPlugin({
		// 	minimize: true,
		// 	compress:{
		// 		warmings:false//取消报错提示
		// 	}
		// })
	],
	//sudo npm install webpack-dev-server -g
	devServer: {
		contentBase:"./www",
	    inline: true,
	    port: 8088
    },
	resolve:{
		alias: {
			'vue$': 'vue/dist/vue.common.js'
        }
	},
	 // resolve:{           
  //       //root: __dirname+'./app/js',//require查找module的话从这里开始查找   
  //       modules:[
  //       	"node_modules",
  //       	__dirname+'/app/js',
  //       	__dirname+'app/images',
  //      ],                    
  //       alias: {//后续直接 require('style') 即可
  //           style : '../css/style.scss',
  //       }
  //   }
}


// sudo npm install webpack html-webpack-plugin clean-webpack-plugin style-loader css-loader less-loader less url-loader file-loader vue vue-router vue-loader vue-template-compiler babel-loader babel-preset-es2015 babel-core babel-plugin-transform-runtime 