console.log('加载成功');

//配置路径
require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'jquery-cookie':'jquery.cookie',
		'parabola':'parabola',
		'gouwuche':'gouwuche',
		'ballMove':'ballMove'
	},
	//设置依赖关系
	shim:{
		'jquery-cookie':['jquery']
	},
	// 定义不遵从AMD规范的js文件
	'parabola':{
		exports:'_'
	}
})

//引入模块调用
require(['gouwuche'],function(gouwuche){
	gouwuche.gouwuche();
})