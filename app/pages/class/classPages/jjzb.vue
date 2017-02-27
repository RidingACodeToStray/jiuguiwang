<template>
	<div class="jjzb">
		<div class="pinPai">
			<ul class="ppul">
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/jiubeixingjiuqi.png" alt="" style="width: 30px;margin-left: 35%">酒杯醒酒器</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/kaipingqi.png" alt="">开瓶器</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/lihe.png" alt="">礼盒</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="less">
	@import "../../../common/css/swiper-3.3.1.min.css";
	@import "../../../common/css/reset.css";
	.jjzb{
		position: relative;
		margin-left: 3%;
		margin-top: -3%;
		margin-right: 3%;
		.pinPai{
			position: relative;
			margin-top: 3%;
			width: 100%;
			.ppul{
				order: 0;
			    overflow: hidden;
			    li{
			    	margin-top: 15px;
			    	width: 32%;
				    float: left;
				    text-align: center;
				    a{
				    	color: #000;
						width: 100%;
						flex: 1;
						display: inline-block;
						text-decoration: none;
				    }
				    .ppImg{
				    	margin-left: 22%;
				    	margin-bottom: 10%;
				    	display:block;
				    	width: 60%;
				    	height: 55px;
				    }
			    }
			}
		}
	}
</style>
<script type="text/javascript">
	import Zepto from '../../../common/js/zepto.min.js';
	import Swiper from '../../../common/js/swiper-3.3.1.min.js';
	import Home from '../../../common/js/home.js';
	export default{
		components:{
		Zepto,Swiper
		},
		mounted(){
			Home.init2()
		}
	}
	
</script>