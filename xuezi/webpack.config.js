//webpack的主配置文件
module.exports={
	// mode:'development',//开发模式
	mode:'production',
	// 1.打包入口(entry)
	entry: './public/js/index.js',
	// 2.输出(output)
	output: {
		path:__dirname+'/build',
		filename:'app.js'
	},
	// 3.加载器(loader)--打包各种非js模块的文件
	module:{
		// css模块的加载
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
		]
	}
	// 4.插件(plugin)
	
}