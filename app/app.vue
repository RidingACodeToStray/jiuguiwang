<template>
	<div class="wrap">
		<!-- 内容 -->
		<div class="content">
			<router-view></router-view>
		</div>
		<!-- 下方导航 -->
		<div class="nav">
			<router-link to="/home" >

				<span class="iconfont icon-shouyeshouye iconStyle"></span>

				<span>首页</span>
			</router-link>
			<router-link to="/class" >
				<span class="iconfont icon-fenlei iconStyle"></span>
				<span>分类</span>
			</router-link>

			<router-link to="/member">
				<span class="iconfont icon-shequ iconStyle" style="font-size: 30px"></span>
				<span>社区</span>
			</router-link>

			

			<router-link to="/shop">
				<span class="iconfont icon-gouwuche iconStyle"></span>
				<span>购物车</span>
			</router-link>

			<router-link to="/my">
				<span class="iconfont icon-my iconStyle" style="font-size: 30px"></span>
				<span>我的酒鬼</span>
			</router-link>
		</div>
	</div>
</template>
<style type="text/css" lang="less">
/*使用less样式*/
@import './common/css/reset.css';
@import './iconfont/iconfont.css';
	.nav{
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		border-top: 1px solid #ccc;
		background: #eee;
		z-index: 100000;
		a{
			flex:1;
			display: block;
			text-align: center;
			width: 83px;
			height: 50px;
			span{
				width: 100%;
				height: 25px;
				display: block;
				font-size: 10px;
				line-height: 25px;
			}
			.iconStyle{
				font-size: 26px;
				line-height: 33px;
			}
		}
		.active {
	     	color: red;
		}
	}
	.content{
		font-size: 30px;
		padding-bottom: 50px;
	}
</style>



