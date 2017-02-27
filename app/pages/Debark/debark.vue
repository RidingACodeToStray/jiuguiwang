<template>
	<div class="shop_debark">
		<header1 title="用户登录">
			<img src="../../images/message.png" slot="shoptitle" class="shoptitle">
		</header1>
		<section>
			<div class="shop_tiao">
				<router-link to="/debark/zahao"> 
	            	<p>账号登录</p>
	                <span class="shop_tab2"></span>
	            </router-link>

	            <router-link to="/shoji"> 
	            	<p>手机动态密码登录</p>
	                <span class="shop_tab2"></span>
	            </router-link>
            </div>
			
	        <router-view></router-view>
	        
		</section>
	</div>
</template>
<style type="text/css" lang="less">
	.shop_debark{
		width: 100%; 
		background: #fff;	
	}
	.shoptitle{
		width: 25px;
		height: 24px;
		float:right;
		margin:4% 2% 0 0;
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
	.shop_pubIcon{
		background: url(../../images/logo.png) no-repeat 0 0;
		background-size: 150px 150px;
	}
	section {
		width: 100%;
	    max-width: 768px;
	    margin: 0 auto ;
	    background: #FFFFFF;
	    font-size: 1.5rem;
	    padding-top: 50px;
	}
	/*登陆设置*/
	.shop_tiao {
		width: 84%;
		margin: 0 auto;
		overflow: hidden;
		a{
			width: 50%;
		    height: 45px;
		    line-height: 45px;
		    text-align: center;
		    float: left;
		    p{
		    	height: 40px;
			    line-height: 40px;
			}
			span{
				height: 2px;
			    background-color: #de4943;
			    margin: 0 auto;
			}
		}
	}
	.shop_tab1 {
		width: 60px;
	}
	.shop_tab2 {
		width: 110px;
	}
	.shop_tiao .active{
		color:#de4943;
	}
	/*登陆内容*/
	.shop_debark_content {
	    margin-top: 10px;
	    width: 94%;
	    margin: 0 auto;
	    overflow: hidden;
	}
	form{
		margin-bottom: 1rem;
		display: block;
	}
	
</style>
<script type="text/javascript">
	import Header1 from '../../component/header/header.vue';
	import Zepto from '../../common/js/zepto.min.js';
	export default {
		components:{
			Header1,
			Zepto
		},
		data(){
			return{
				
			}
		},
		mounted(){
			$(".nav").hide();
		}
	}

</script>


