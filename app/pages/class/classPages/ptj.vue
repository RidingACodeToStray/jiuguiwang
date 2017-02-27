<template>
	<div class="ptj">
		<div class="swiper-container ptLunbo1" >
	        <div class="swiper-wrapper ptLunbo2">
	            <div class="swiper-slide ptLunbo3">
		            <router-link to="/ApiOne">
		            <img src="https://img08.jiuxian.com/bill/2017/0216/4d4d0a9a37ce4a68badf8bf9fd6bb9fc.jpg" alt="">
					</router-link>
	            </div>
	           <div class="swiper-slide ptLunbo3">
					<router-link to="/ApiOne">
		           <img src="https://img09.jiuxian.com/bill/2017/0212/829aea9b74c34c0da0c04ca93f02d134.jpg" alt="">
					</router-link>
	           </div>
	            <div class="swiper-slide ptLunbo3">
					<router-link to="/ApiOne">
		            <img src="https://img09.jiuxian.com/bill/2017/0212/bfb71e72a90b498f9f4c1b46a9fa20f9.jpg" alt="">
					</router-link>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
		</div>
		<div class="ptpinPai">
			<div class="ptpinPaiTop">
				<p></p>
				<span class="ptpptsp1">热门品牌</span>
				<div class="ptquanbupp">
					<router-link to="">
						<span class="ptpptsp2">全部品牌</span>
						<img src="../../../images/quanbupinpai.png" class="ptpinPaiImg">
					</router-link>
				</div>
			</div>
			<ul class="ptppul">
				<li>
					<router-link to=""><img class="ptppImg" src="../../../images/lafeilog.png" alt="" style="width: 74%">
					<span style="margin-left: 20%">拉菲</span></router-link>
				</li>
				<li>
					<router-link to=""><img class="ptppImg" src="../../../images/benfulog.png" alt="">奔富</router-link>
				</li>
				<li>
					<router-link to=""><img class="ptppImg" src="../../../images/changchenglog.png" alt="">长城</router-link>
				</li>
				<li>
					<router-link to=""><img class="ptppImg" src="../../../images/huangweidaishulog.png" alt="">黄尾袋鼠</router-link>
				</li>
				<li>
					<router-link to=""><img class="ptppImg" src="../../../images/zhangyulog.png" alt="">张裕</router-link>
				</li>
				<li>
					<router-link to=""><img class="ptppImg" src="../../../images/kasitelog.png" alt="" style="height: 50px">卡斯特</router-link>
				</li>
				<li>
					<router-link to=""><img class="ptppImg" src="../../../images/hongmoguilog.png" alt="" style="height: 20px">红魔鬼</router-link>
				</li>
			</ul>
		</div>
		<div class="leiXing">
			<div class="lxTop">
				<p></p>
				<span class="lxt1">类型</span>
			</div>
			<ul class="lxul">
				<li>
					<router-link to="">红葡萄酒</router-link>
				</li>
				<li>
					<router-link to="">白葡萄酒</router-link>
				</li>
				<li>
					<router-link to="">起泡酒</router-link>
				</li>
				<li>
					<router-link to="">桃红葡萄酒</router-link>
				</li>
			</ul>
		</div>
		<div class="pinZhong">
			<div class="cdTop">
				<p></p>
				<span class="ppt1">品种</span>
			</div>
			<ul class="ppul">
				<li>
					<router-link to="">赤霞珠</router-link>
				</li>
				<li>
					<router-link to="">梅洛</router-link>
				</li>
				<li>
					<router-link to="">西拉</router-link>
				</li>
				<li>
					<router-link to="">长相思</router-link>
				</li>
				<li>
					<router-link to="">歌海娜</router-link>
				</li>
				<li>
					<router-link to="">添帕尼优</router-link>
				</li>
			</ul>
		</div>
		<div class="country">
			<div class="ctTop">
				<p></p>
				<span class="ctt1">国家</span>
			</div>
			<ul class="ctul">
				<li>
					<router-link to=""><img class="ctImg" src="../../../images/faguo.png" alt="">法国</router-link>
				</li>
				<li>
					<router-link to=""><img class="ctImg" src="../../../images/xibanya.png" alt="">西班牙</router-link>
				</li>
				<li>
					<router-link to=""><img class="ctImg" src="../../../images/aodaliya.png" alt="">澳大利亚</router-link>
				</li>
				<li>
					<router-link to=""><img class="ctImg" src="../../../images/zhongguo.png" alt="">中国</router-link>
				</li>
				<li>
					<router-link to=""><img class="ctImg" src="../../../images/zhili.png" alt="">智利</router-link>
				</li>
				<li>
					<router-link to=""><img class="ctImg" src="../../../images/yidali.png" alt="">意大利</router-link>
				</li>
			</ul>
		</div>
		<div class="jiaWei">
			<div class="jwTop">
				<p></p>
				<span class="xxt1">价位</span>
			</div>
			<ul class="jwul">
				<li>
					<router-link to="">1-49元</router-link>
				</li>
				<li>
					<router-link to="">50-99元</router-link>
				</li>
				<li>
					<router-link to="" style="color: red">100-199</router-link>
				</li>
				<li>
					<router-link to="">200-299</router-link>
				</li>
				<li>
					<router-link to="">300-499</router-link>
				</li>
				<li>
					<router-link to="">500-999</router-link>
				</li>
				<li>
					<router-link to="">1000-1999</router-link>
				</li>
				<li>
					<router-link to="">2000以上</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="less">
	@import "../../../common/css/swiper-3.3.1.min.css";
	@import "../../../common/css/reset.css";
	.ptj{
		position: relative;
		margin-left: 3%;
		margin-top: -3%;
		margin-right: 3%;
		/*height: 1000px;*/
		/*background: pink;*/
		.ptLunbo1{
			position: fixed;
			width: 75%;
			height: 80px;
			border-top: 10px white solid;
			border-bottom:10px white solid;
			.ptLunbo3{
				width: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.ptpinPai{
			position: relative;
			top: 80px;
			margin-top: 3%;
			width: 100%;
			.ptpinPaiTop{
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
				.ptpptsp1{
					display: inline-block;
					vertical-align: top;
				}
				.ptquanbupp{
					position: absolute;
					right: 0;
					display: inline-block;
					vertical-align: top;
					width: 70px;
					.ptpptsp2{
						display: inline-block;
						vertical-align: top;
					}
					.ptpinPaiImg{
						vertical-align: top;
						width: 12px;
						margin-top: 3px;
					}
				}
			}
			.ptppul{
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
				    .ptppImg{
				    	margin-left: 22%;
				    	margin-bottom: 20%;
				    	display:block;
/*				    	width: 60px;
				    	height: 60px;*/
				    	width: 60%;
				    	height: 50px;
				    }
			    }
			}
		}
		.leiXing,.pinZhong,.jiaWei{
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
			.lxul,.ppul,.jwul{
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
		.pinZhong{
			margin-top: 70px;
			p{
				background: #0099CC;
			}
		}
		.jiaWei{
			margin-top: 180px;
			p{
				background:  #FF9900;
			}
		}
		.country{
			margin-top: 70px;
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
			.ctul{
				order: 0;
			    overflow: hidden;
			    li{
			    	margin-top: 10px;
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
				    .ctImg{
				    	margin-left: 22%;
				    	margin-bottom: 20%;
				    	display:block;
/*				    	width: 60px;
				    	height: 60px;*/
				    	width: 60%;
				    	height: 30px;
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