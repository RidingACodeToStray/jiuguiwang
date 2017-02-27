import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource'
//主页面入口
import App from "./app.vue";
//其他页面
import Home from "./pages/home/home.vue";
import Member from "./pages/member/member.vue";
import Class from "./pages/class/class.vue";
import My from "./pages/my/my.vue";
import Shop from "./pages/shop/shop.vue";
import Goods from "./pages/goods/goods.vue";
import Debark from "./pages/debark/debark.vue";
import Zahao from "./pages/debark/child/zahao.vue";
import Shoji from "./pages/debark/child/shoji.vue";
import Address from "./pages/address/address.vue";
import Yjxj from "./pages/class/classPages/yjxj.vue";
import Bj from "./pages/class/classPages/bj.vue";
import Ptj from "./pages/class/classPages/ptj.vue";
import Yj from "./pages/class/classPages/yj.vue";
import Hbp from "./pages/class/classPages/hbp.vue";
import Jxss from "./pages/class/classPages/jxss.vue";
import Jjzb from "./pages/class/classPages/jjzb.vue";
import ApiOne from "./pages/class/apiPages/apiOne.vue";
import ApiTwo from "./pages/class/apiPages/apiTwo.vue";
import Set from "./pages/my/set.vue";
import AllOrder from "./pages/my/allOrder.vue";
import Collect from "./pages/my/collect.vue";
import Coupon from "./pages/my/coupon.vue";
import BrowsingHistory from "./pages/my/browsingHistory.vue";
import Site from "./pages/my/site.vue";

import Shopnext from "./pages/shop/shopnext/shopnext.vue";
import Article from "./pages/member/article.vue";
import "./common/data/yjxjJson.js";
import "./common/data/orderJson.js";
import "./common/data/jiuwenjson.js";
import "./common/data/addressJson.js";
import "./common/data/couponJson.js";
import "./common/data/deliveryJson.js";



Vue.use(VueRouter);
Vue.use(vueResource);
const router = new VueRouter({
	// mode:'history',//可以设置去掉地址栏的#
	linkActiveClass:"active",//这个就是路由点击激活后的样式
	routes:[

		{path:"/",redirect:"/home"},
		{path:"/home",component:Home},
		{name:"goods",path:"/goods/",component:Goods},

		{path:"/member",component:Member},
		{path:"/class",component:Class,
			children:[
				{path:"/",redirect:"/class/class1"},
				{path:"class1",component:Yjxj},
				{path:"class2",component:Bj},
				{path:"class3",component:Ptj},
				{path:"class4",component:Yj},
				{path:"class5",component:Hbp},
				{path:"class6",component:Jxss},
				{path:"class7",component:Jjzb}
			]
		},
		{path:"/my",component:My},
		{path:"/shop",component:Shop,
			children:[
				{path:"/shop1",component:Shopnext}
			]
		},

		{path:"/debark",component:Debark,
			children:[
				{path:"/debark/zahao",component:Zahao},
				{path:"/shoji",component:Shoji},
			]
		},
		{path:"/address",component:Address},
		{path:"/apiOne",component:ApiOne},
		{path:"/apiTwo",component:ApiTwo},
		{path:"/set",component:Set},
		{path:"/order",component:AllOrder},
		{path:"/collect",component:Collect},
		{path:"/coupon",component:Coupon},
		{path:"/browsingHistory",component:BrowsingHistory},
		{path:"/site",component:Site},
		{name:"article",path:"/article/",component:Article}
	]
});
//指定一开始加载的页面
// router.push("Home");
new Vue({
	router,
	render:h=>h(App)
}).$mount("#app");
//排序全局函数
Vue.prototype.sortBy = function (arr, prop){
	var props=[],
	ret=[],
	i=0,
	len=arr.length;
	if(typeof prop=='string') {
	    for(; i<len; i++){
	        var oI = arr[i];
	        (props[i] = new String(oI && oI[prop] || ''))._obj = oI;
	    }
	}
	else if(typeof prop=='function') {
	    for(; i<len; i++){
	        var oI = arr[i];
	        (props[i] = new String(oI && prop(oI) || ''))._obj = oI;
	    }
	}
	else {
	    throw '参数类型错误';
	}
	props.sort();
	for(i=0; i<len; i++) {
	    ret[i] = props[i]._obj;
	}
	return ret.reverse();
};





