<template>
	<div class="shop">
	<header1 title="购物车">
		<img src="../../images/xiaoxi2.png" slot="shoptitle" class="shoptitle">
	</header1>
		<div class="shop_topCatTip ">
			<div class="shop_topCatTipBd">
				<i class="shop_pubIcon"></i>
				<p>"实付金额满100元免运费,偏远地区实付满300免运费~"</p>
			</div>
		</div>
		<router-view></router-view>
		<div class="shop_cart_start">
			<div class="shop_catKongBox">
				<i></i>
				<p>购物车还是空的</p>
				<p>
					<span>快去逛逛吧~</span>
				</p>
				<router-link to="/home">
					促销活动
				</router-link>
			</div>
		</div>
		

	</div>
</template>
<style type="text/css" lang="less">
	@import "./../../common/css/reset.css";
	@import "./../../common/css/modal.css";

	.shop{
		width: 100%;
		height: 100%;
		background: #fff;	
		
	}
	.shoptitle{
		width: 24px!important;
		float:right;
		margin-right: 10px!important;
		margin-top: 12px!important;
	}
	/*消息*/
	.shop_topCatTip {
		padding-top:50px;
		background-color: #fff4e2;
		border-bottom: 1px solid #ffe9c6;
		line-height: 22px;
		color: #ff3333;
		font-size: 12px;
		overflow: hidden;
	}
	.shop_topCatTip i {
		display: inline-block;
		background-position: -40px 2px;
		width: 11px;
		height: 22px;
		margin: 0 6px 0;
		position: fixed;
		top: 48px;
	}
	.shop_topCatTipBd p{
		margin-left: 20px;
	}
	.shop_pubIcon {
		background: url(../../images/shop_jiu4.png) no-repeat 0 0;
		background-size: 150px 150px;
	}
	/*内容*/
	.shop_cart_start{
		margin-top: 0;
		.shop_catKongBox{
			text-align: center;
    		margin: 30% 0;
    		padding: 10% 0;
    		i{
    			background: url(../../images/kong.png) no-repeat;
    			background-size:100% 100%; 
			    width: 62px;
			    height: 62px;
			    display: inline-block;
			    margin-bottom: 10px;
    		}
    		p{
    			line-height: 20px;
			    font-size: 12px;
			    color: #666;
			    span{
			    	color: #999;
			    }
    		}
    		a{
    			display: inline-block;
			    margin-top: 20px;
			    height: 24px;
			    line-height: 24px;
			    border: 1px solid #ccc;
			    background-color: #fff;
			    padding: 0 10px;
			    font-size: 12px;
			    color: #666;
			    border-radius: 5px;
			    -moz-border-radius: 5px;
			    -webkit-border-radius: 5px;
    		}
		}
	}
	
</style>
<script type="text/javascript">
	import Zepto from './../../common/js/zepto.min.js';
	import Header1 from '../../component/header/header.vue';

	export default {
		components: {
			Header1,
			Zepto
		},
		data() {
			return{
				
			}
		},
		mounted(){
			$(".nav").show();
		}
	}


</script>