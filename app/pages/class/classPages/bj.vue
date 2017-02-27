<template>
	<div class="bj">
		<div class="swiper-container bjLunbo1" >
	        <div class="swiper-wrapper bjLunbo2">
	            <div class="swiper-slide bjLunbo3">
		            <router-link to="/ApiOne">
		            <img src="https://img09.jiuxian.com/bill/2017/0212/bfb71e72a90b498f9f4c1b46a9fa20f9.jpg" alt="">
					</router-link>
	            </div>
	           <div class="swiper-slide bjLunbo3">
					<router-link to="/ApiOne">
		           <img src="https://img08.jiuxian.com/bill/2017/0216/4d4d0a9a37ce4a68badf8bf9fd6bb9fc.jpg" alt="">
					</router-link>
	           </div>
	            <div class="swiper-slide bjLunbo3">
					<router-link to="/ApiOne
					">
		            <img src="https://img09.jiuxian.com/bill/2017/0212/829aea9b74c34c0da0c04ca93f02d134.jpg" alt="">
					</router-link>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
		</div>
		<div class="pinPai">
			<div class="pinPaiTop">
				<p></p>
				<span class="pptsp1">热门品牌</span>
				<div class="quanbupp">
					<router-link to="/">
						<span class="pptsp2">全部品牌</span>
						<img src="../../../images/quanbupinpai.png" class="pinPaiImg">
					</router-link>
				</div>
			</div>
			<ul class="ppul">
				<li>
					<router-link to="" to-data="/apiTwo">
					<img class="ppImg" src="../../../images/maotailog.png" alt="" style="width: 74%">
					<span style="margin-left: 20%">茅台</span>
					</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/wuliangyelog.png" alt="">五粮液</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/luzhoulaojiaolog.png" alt="">泸州老窖</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/niulanshanlog.png" alt="">牛栏山</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/fenjiulog.png" alt="">汾酒</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/jiannanchunlog.png" alt="">剑兰春</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/yanghelog.png" alt="">洋河</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/langjiulog.png" alt="">郎酒</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/shuijingfanglog.png" alt="">水井坊</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/jiuguijiulog.png" alt="">酒鬼酒</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/xifengjiulog.png" alt="">西凤酒</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo"><img class="ppImg" src="../../../images/quanxinglog.png" alt="">全兴</router-link>
				</li>
			</ul>
		</div>
		<div class="xiangXing">
			<div class="xxTop">
				<p></p>
				<span class="xxt1">香型</span>
			</div>
			<ul class="xxul">
				<li>
					<router-link to="" to-data="/apiTwo">酱香型</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo" style="color: red">浓香型</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">清香型</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">馥郁香型</router-link>
				</li>
				<li>
					<router-link to="">凤香型</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">熏香型</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">老白干香型</router-link>
				</li>
			</ul>
		</div>
		<div class="chanDi">
			<div class="cdTop">
				<p></p>
				<span class="xxt1">产地</span>
			</div>
			<ul class="cdul">
				<li>
					<router-link to="" to-data="/apiTwo" style="color: red">贵州</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">四川</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">山西</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">河南</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo" style="color: red">山东</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">安微</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">河北</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">新疆</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">湖南</router-link>
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
					<router-link to="" to-data="/apiTwo">1-49元</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">50-99元</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo" style="color: red">100-199</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">200-299</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">300-499</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">500-999</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">1000-1999</router-link>
				</li>
				<li>
					<router-link to="" to-data="/apiTwo">2000以上</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" lang="less">
	@import "../../../common/css/swiper-3.3.1.min.css";
	@import "../../../common/css/reset.css";
	.bj{
		position: relative;
		margin-left: 3%;
		margin-top: -3%;
		margin-right: 3%;
		
		.bjLunbo1{
			position: fixed;
			width: 75%;
			height: 80px;
			border-top: 10px white solid;
			border-bottom:10px white solid;
			.bjLunbo3{
				width: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.pinPai{
			position: relative;
			top: 80px;
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
					background: #efb336;
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
			    margin-bottom: -20px;
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
				    	margin-bottom: 20%;
				    	display:block;
/*				    	width: 60px;
				    	height: 60px;*/
				    	width: 60%;
				    	height: 55px;
				    }
			    }
			}
		}
		.xiangXing,.chanDi,.jiaWei{
			margin-top: 120px;
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
			.xxul,.cdul,.jwul{
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
		.chanDi{
			margin-top: 100px;
			p{
				background: #0099CC;
			}
		}
		.jiaWei{
			margin-top: 100px;
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
			$(".nav").show();
			$(".nav").css("z-index","10000");
			Home.init2();
			var _this=this;
			// console.log(_this);

			var bj = $(".bj li");
			// console.log(yjxjLis.length);
			bj.each(function(index,value){
				$(this).click(function(){
				var __this=this;
					// console.log(index);
					//判断是否储存在本地
					 if(window.sessionStorage){
				        // alert('ok');
				        //获取本地储存中的文本数据
				        sessionStorage.setItem('key',$(this).text().replace("\n","").replace("\t","").trim());
				        // console.log(sessionStorage.getItem('key'));
				        _this.$router.push($(__this).find("a").get(0).getAttribute("to-data"));
				        
				    }else{
				        alert('fail');
				    }
				})
			})
		}
	}
	
</script>