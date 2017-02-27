<template>
	<div class="hbp">
		<div class="pinPai">
			<div class="pinPaiTop">
				<p></p>
				<span class="pptsp1">啤酒品牌</span>
				<div class="quanbupp">
					<router-link to="">
						<span class="pptsp2">全部品牌</span>
						<img src="../../../images/quanbupinpai.png" class="pinPaiImg">
					</router-link>
				</div>
			</div>
			<ul class="ppul">
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/qingdaolog.png" alt="" style="width: 74%">
					<span style="margin-left: 20%">青岛</span></router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/walundinglog.png" alt="" style="height: 25px;margin: 18px auto">瓦伦丁</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/jiashibolog.png" alt="">嘉士伯</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/xuehualog.png" alt="">雪花</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/aisibojuelog.png" alt="">埃丝伯爵</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/feierdebaolog.png" alt="">菲尔德堡</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/yanjinglog.png" alt="">燕京</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/kusitelog.png" alt="">库斯特</router-link>
				</li>
			</ul>
		</div>
		<div class="pinPai">
			<div class="pinPaiTop">
				<p></p>
				<span class="pptsp1">养生酒</span>
				<div class="quanbupp">
					<router-link to="">
						<span class="pptsp2">全部品牌</span>
						<img src="../../../images/quanbupinpai.png" class="pinPaiImg">
					</router-link>
				</div>
			</div>
			<ul class="ppul">
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/huangjingjiulog.png" alt="" style="width: 50%">
					<span style="margin-left: 5%">黄金酒</span></router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/zhuyeqinglog.png" alt="">竹叶青</router-link>
				</li>
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/jingjiulog.png" alt="">劲酒</router-link>
				</li>
			</ul>
		</div>
		<div class="pinPai">
			<div class="pinPaiTop">
				<p></p>
				<span class="pptsp1">黄酒</span>
				<div class="quanbupp">
					<router-link to="">
						<span class="pptsp2">全部品牌</span>
						<img src="../../../images/quanbupinpai.png" class="pinPaiImg">
					</router-link>
				</div>
			</div>
			<ul class="ppul">
				<li>
					<router-link to=""><img class="ppImg" src="../../../images/guyuelongshanlog.png" alt="" style="width: 74%;">
					<span style="margin-left: 20%;">古越龙山</span></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="less">
	@import "../../../common/css/swiper-3.3.1.min.css";
	@import "../../../common/css/reset.css";
	.hbp{
		position: relative;
		margin-left: 3%;
		margin-top: -3%;
		margin-right: 3%;
		.pinPai{
			position: relative;
			/*top: 88px;*/
			margin-top: 3%;
			width: 100%;
			.pinPaiTop{
				position: relative;
				height: 20px;
				font-size: 12px;
				line-height: 20px;
				background: #eee;
				p{
					width: 5px;
					height: 20px;
					/*background: #efb336;*/
					display: inline-block;
				}
				.pptsp1{
					display: inline-block;
					vertical-align: top;
				}
				.quanbupp{
					position: absolute;
					right: 0;
					display: inline-block;
					vertical-align: top;
					width: 70px;
					.pptsp2{
						display: inline-block;
						vertical-align: top;
					}
					.pinPaiImg{
						vertical-align: top;
						width: 12px;
						margin-top: 3px;
					}
				}
			}
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