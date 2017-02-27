<template>
	<div style="width: 100%">
		<div class="headOne">
			<img src="../../../images/fanhui.png" class="huifan" onclick="window.history.go(-1)">
			<span class="headTitle">
				{{nav_title[0]}}
			</span>
			<router-link to="/shop
			">
				<img src="../../../images/gouwucheym.png" class="chezi">
			</router-link>
		</div>

		<div class="clcontent">
			<div class="ccimgs1">
				<img src="" class="ccimg1">
				<img src="" class="ccimg2">
				<img src="" class="ccimg3">
			</div>
			<div class="ccimgs2">
				<router-link to="/coupon">
					<img src="" class="ccimgquan">
				</router-link>
				<img src="" class="ccimgbao">
			</div>
			<div class="cclist">
				<ul>
					<li class="cclls" v-for="x in cclDatas" @click="chuanzhi(x.img,x.name,x.price,x.id,x.commentsCount)">
						<img :src="x.img" class="cclimgs">
						<div class="cclmsgs">
							<p class="cclmsg1">{{x.name}}</p>
						</div>
						<div class="cclmsg3">
							<span class="cclmsg31">
								<strong>￥{{x.price}}</strong>
							</span>
							<span class="cclmsg4">评论数：{{x.commentsCount}}
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div id="apione_backtop" onclick="javascript:document.body.scrollTop=0" style="position:fixed;z-index:888;width:32px;height:32px;bottom:52px;right:10px;display:none;">
			<img width="32" height="32" src="http://st.360buyimg.com/m/images/index/scroll-to-top-icon.png" alt="">
		</div>
	</div>
</template>
<style type="text/css" lang="less">
	.headOne{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 50px;
		z-index: 1000;
		background: #eee;
		.huifan{
			width: 45px;
			height: 40px;
			position: absolute;
			top: 5px;
			display: block;
			z-index: 1003;
		}
		.headTitle{
			width: 100%;
			position: absolute;
			font-size: 20px;
			line-height: 50px;
			text-align: center;
			z-index: 1002;
		}
		.chezi{
			width: 35px;
			height: 35px;
			position: absolute;
			top: 8px;
			right: 8px;
			display: block;
			z-index: 1003;
		}
	}
	.clcontent{
		margin-top: 50px;
		width: 100%;
		.ccimgs1{
			width: 100%;
			font-size: 0;
			img{
				width: 100%;
				margin-bottom: 0;
			}
		}
		.ccimgs2{
			width: 100%;
			font-size: 0;
			img{
				width: 100%;
			}
		}
		.cclist{
			/*width: 100%*/
			ul{
				.cclls{
					width: 50%;
    				padding: 2%;
    				height: 200px;
				    float: left;
				    border: 5px solid #e7e7e7;
				    border-top: none;
				    position: relative;
				    .cclimgs{
				    	/*width: 80%;*/
					    height: 70%;
					    display: block;
					    margin: 0 auto;
    					float: none;
				    }
				    .cclmsgs{
				    	padding: 0;
						font-size: 14px;
				    	.cclmsg1{
				    		height: 35%
				    		;
				    		line-height: 18px;
    						overflow: hidden;
    						font-family: "华文细黑","Microsoft YaHei","黑体",sans-serif;
    						font-size: 12px;
				    	}
/*				    	.cclmsg2{
				    		display: block;
				    		height: 12px;
    						margin-top: 5px;
    						border-radius: 2px;
				    	}*/
				    	
				    }
				    .cclmsg3{
				    		/*height: 15%;*/
							position: absolute;
							bottom: 0;
						    .cclmsg31{
						    	color: #df4a44;
							    line-height: 20px;
							    margin-top: 3px;
							    font-weight: bold;
							    vertical-align: middle;
								font-size: 14px;
								strong{
									margin-left: 0;
									color: red;

								}
						    }
						    .cclmsg4{
					    		color: #aaa;
	    						line-height: 11px;
	    						font-size: 12px;
							    margin-right: 0;
							    vertical-align: middle;
					    	}
				    	}
				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return {
				cclDatas:[],
				nav_title:[]
			}
		},
		components:{
		Zepto,Swiper
		},
		mounted(){
			//取本地储存放在标题
			$(".nav").hide();
			this.$set(this.nav_title,0,sessionStorage.getItem("key"));
			//大图
			$(".ccimg1").get(0).src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170214/6362266879726306317605216.jpg";
			$(".ccimg2").get(0).src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170214/6362266879757506367575498.jpg";
			$(".ccimg3").get(0).src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170214/6362266879780906409803210.jpg";
			$(".ccimgquan").get(0).src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20170214/6362266879835506503001204.jpg";
			$(".ccimgbao").get(0).src="http://img6.zhongjiu.cn/resourceb2b2c/Storage/template/0/20161226/6361837778424339836534541.jpg";
			//获取全局数据
			for(var i =0;i<yjxjJson.Product.length;i++){
				this.$set(this.cclDatas,i,yjxjJson.Product[i]);
			};

			//回到顶端
			 window.onscroll = function(){

			 	//  1.获取当前窗口滚动的一个高度(前者标准后者IE支持的方法)
		      var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
				//  2.获取可视区域的一个高度(前者标准后者IE支持的方法)    
		     var height = window.innerHeight||document.documentElement.clientHeight;
					if(document.body.scrollTop >document.body.clientWidth/2){
				   		$("#apione_backtop").show();
				   	}
				   	else{
				   		$("#apione_backtop").hide();
				   	};
		   };
		},
		methods:{
			//页面传参
			chuanzhi:function(img,name,price,id,commentsCount){
				this.$router.push({
					name:"goods",
					// params:{id:id}
					query:{img,name,price,id,commentsCount}
				})
			}
		}
	}
</script>








