<template>
	<div class="yj">
		<div class="swiper-container yjLunbo1" >
	        <div class="swiper-wrapper yjLunbo2">
	            <div class="swiper-slide yjLunbo3">
		            <router-link to="/ApiOne">
		            <img src="https://img09.jiuxian.com/bill/2017/0212/829aea9b74c34c0da0c04ca93f02d134.jpg" alt="">
					</router-link>
	            </div>
	           <div class="swiper-slide yjLunbo3">
					<router-link to="/ApiOne">
		           <img src="https://img08.jiuxian.com/bill/2017/0216/4d4d0a9a37ce4a68badf8bf9fd6bb9fc.jpg" alt="">
					</router-link>
	           </div>
	            <div class="swiper-slide yjLunbo3">
					<router-link to="/ApiOne">
		            <img src="https://img09.jiuxian.com/bill/2017/0212/bfb71e72a90b498f9f4c1b46a9fa20f9.jpg" alt="">
					</router-link>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
		</div>
		<div class="yjpinPai">
			<div class="yjpinPaiTop">
				<p></p>
				<span class="yjpptsp1">热门品牌</span>
				<div class="quanbuyjpp">
					<router-link to="">
						<span class="yjpptsp2">全部品牌</span>
						<img src="../../../images/quanbupinpai.png" class="yjpinPaiImg">
					</router-link>
				</div>
			</div>
			<ul class="yjppul">
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/xuannishi.png" alt="" style="height: 30px;margin: 20px auto;">
					轩尼诗</router-link>
				</li>
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/madielilog.png" alt="" style="height: 40px;margin: 15px auto;">马爹利</router-link>
				</li>
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/zhihuashilog.png" alt=""  style="height: 20px;margin: 25px auto;">芝华士</router-link>
				</li>
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/jeikedannilog.png" alt="" style="height: 50px;margin: 12px auto;">杰克丹尼</router-link>
				</li>
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/rentoumalog.png" alt="" style="height: 50px;margin: 12px auto;">人头马</router-link>
				</li>
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/baijiadelog.png" alt=""  style="height: 50px;margin: 12px auto;">百加得</router-link>
				</li>
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/bailingtanlog.png" alt="">百龄坛</router-link>
				</li>
				<li>
					<router-link to=""><img class="yjppImg" src="../../../images/zhenloulog.png" alt=""  style="height: 30px;margin: 20px auto;">真露</router-link>
				</li>
			</ul>
		</div>
		<div class="yjleiXing">
			<div class="yjlxTop">
				<p></p>
				<span class="yjlxt1">类型</span>
			</div>
			<ul class="yjlxul">
				<li>
					<router-link to="" style="color: red">威士忌</router-link>
				</li>
				<li>
					<router-link to="">白兰地</router-link>
				</li>
				<li>
					<router-link to="" style="color: red">伏加特</router-link>
				</li>
				<li>
					<router-link to="">朗姆酒</router-link>
				</li>
				<li>
					<router-link to="">预调酒</router-link>
				</li>
				<li>
					<router-link to="">力娇酒</router-link>
				</li>
			</ul>
		</div>
		<div class="yjjiaWei">
			<div class="yjjwTop">
				<p></p>
				<span class="yjjwt1">价位</span>
			</div>
			<ul class="yjjwul">
				<li>
					<router-link to="">1-99元</router-link>
				</li>
				<li>
					<router-link to="">100-299元</router-link>
				</li>
				<li>
					<router-link to="">300-599元</router-link>
				</li>
				<li>
					<router-link to="">600-999元</router-link>
				</li>
				<li>
					<router-link to="">1000-1999元</router-link>
				</li>
				<li>
					<router-link to="">2000元以上</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="less">
	@import "../../../common/css/swiper-3.3.1.min.css";
	@import "../../../common/css/reset.css";
	.yj{
		position: relative;
		margin-left: 3%;
		margin-top: -3%;
		margin-right: 3%;
		.yjLunbo1{
			position: fixed;
			width: 75%;
			height: 80px;
			border-top: 10px white solid;
			border-bottom:10px white solid;
			.yjLunbo3{
				width: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.yjpinPai{
			position: relative;
			top: 80px;
			margin-top: 3%;
			width: 100%;
			.yjpinPaiTop{
				position: relative;
				height: 20px;
				font-size: 12px;
				line-height: 20px;
				background: #eee;
				p{
					width: 5px;
					height: 20px;
					background: #efb336;
					display: inline-block;
				}
				.yjpptsp1{
					display: inline-block;
					vertical-align: top;
				}
				.quanbuyjpp{
					position: absolute;
					right: 0;
					display: inline-block;
					vertical-align: top;
					width: 70px;
					.yjpptsp2{
						display: inline-block;
						vertical-align: top;
					}
					.yjpinPaiImg{
						vertical-align: top;
						width: 12px;
						margin-top: 3px;
					}
				}
			}
			.yjppul{
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
				    .yjppImg{
				    	margin-left: 22%;
				    	margin-bottom: 15%;
				    	display:block;
				    	width: 60%;
				    	height: 55px;
				    }
			    }
			}
		}
		.yjleiXing,.yjjiaWei{
			margin-top: 100px;
			height: 20px;
			font-size: 12px;
			line-height: 20px;
			background: #eee;
			p{
				width: 5px;
				height: 20px;
				background: #9900CC;
				display: inline-block;
				vertical-align: top;
			}
			.yjlxul,.yjjwul{
				li{
					margin-top: 10px;
			    	width: 32%;
				    float: left;
				    text-align: center;
				    a{
				    	color: #000;
				    	width: 100%;
				    	text-align: center;
				    }
				}
			}
		}
		.yjjiaWei{
			margin-top: 70px;
			/*margin-bottom: -10px;*/
			p{
				background: #FF9900;
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