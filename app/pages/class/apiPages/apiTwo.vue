<template>
	<div>
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
		<div class="splist">
			<div class="paixu">
				<ul class="pxitem">
					<li style="border-right: 1px solid #eee;background: none;text-align: center;
					" class="lifirst pxione">默认</li>
					<li style="border-right: 1px solid #eee" class="lifirst" @click="pxjiag">价格</li>
					<li style="border-right: 1px solid #eee" class="lifirst" @click="pxxiaol">销量</li>
					<li class="lifirst" @click="pxpingj">评价</li>
				</ul>
			</div>
			<div class="splcontent">
				<ul>
					<li class="splclis" v-for="y in splDatas"  @click="details(y.img,y.name,y.price,y.id,y.commentsCount)">
						<img :src="y.img" class="spcImgs">
						<div class="spcinfo">
							<div class="spciname">
								<p>{{y.name}}</p>
								<img src="../../../images/ziyingjiu.png">
							</div>
							<div class="spcisaid">
								<div class="spciprice">￥:{{y.price}}</div>
								<span class="spcixiaol">销量:{{y.id}}</span>
								<span class="spcipingj">评价:{{y.commentsCount}}人</span>
							</div>
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
		}
	}
	.splist{
		.paixu{
			width: 100%;
		    height: 35px;
		    line-height: 35px;
		    position: relative;
		    top: 50px;
		    box-shadow: 0 8px 1px #eee;
		    
		    .lifirst{
		    	/*font-size: 0;*/
		    	width: 25%;
		    	float: left;
		    	font-size: 18px;
		    	font-family: "华文细黑","Microsoft YaHei","黑体",sans-serif;
		    	text-indent: 5%;
		    	background: url(../../../images/xia.png) no-repeat;
				background-position: 85% 50%;
				background-size: 20% auto;
				color: black;
		    }
		    .lired{
		    	width: 25%;
		    	float: left;
		    	font-size: 18px;
		    	font-family: "华文细黑","Microsoft YaHei","黑体",sans-serif;
		    	text-indent: 5%;
		    	background: url(../../../images/xiahong.png) no-repeat;
				background-position: 85% 50%;
				background-size: 20% auto;
				color: red;
		    }
		    .pxione{
		    	color: red;
		    }
		}
		.splcontent{

			width: 100%;
			ul{
				width: 100%;
				height: 100px;
			    border-bottom: 1px solid red;
			    position: relative;
			    top: 57px;
			    .splclis{
			    	position: relative;
			    	width: 100%;
			    	height: 100px;
			    	border-bottom: 1px solid #e8e8e8;
			    	padding-left: 10px;
			    	font-family: "华文细黑","Microsoft YaHei","黑体",sans-serif;
			    	.spcImgs{
			    		height: 90px;
			    	}
			    	.spcinfo{
			    		position: absolute;
			    		width: 65%;
			    		display: inline-block;
			    		font-size: 15px;
			    		vertical-align: top;
			    		margin-top: 5px;
			    		margin-left: 10px;
			    		p{
			    			height: 36px;
						    line-height: 18px;
						    overflow: hidden;
						    color: #000;
						    font-size: 13px;
			    		}
			    		img{
			    			width: 20%;
			    		}
			    		.spcisaid{
			    			position: absolute;
			    			margin-bottom: 0;

			    			.spciprice{
			    				color: #df4a44;
							    line-height: 15px;
			    			}
			    			span{
			    				color: #aaa;
	    						line-height: 11px;
	    						font-size: 12px;
							    vertical-align: middle;
			    			}
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
				nav_title:[''],
				splDatas:[],
				//备份默认排序
				splDatas2:[]
			}
		},
		components:{
		Zepto,Swiper
		},
		mounted(){
			//取本地储存放在标题
			$(".nav").hide();
			this.$set(this.nav_title,0,sessionStorage.getItem("key"));
			//获取商品列表数据数据
			for(var i =0;i<yjxjJson.Product.length;i++){
				this.$set(this.splDatas,i,yjxjJson.Product[i]);
				this.$set(this.splDatas2,i,yjxjJson.Product[i]);
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
		   //点击排序变色
		   var paixuLis = $(".splist .pxitem li");
		   // console.log(paixuLis);
		   var _this = this;
		   $(".splist .pxitem li").each(function(){
			  $(this).click(function(){

				  var thisIndex = paixuLis.indexOf(this);
				  if(thisIndex!=0){
				  	paixuLis[0].style.color="black";
				  	paixuLis.each(function(){
					  	$(this).removeClass("lired");
					  	$(this).addClass("lifirst");
					  });
					  	$(this).addClass("lired");
				  }else{
				  	paixuLis.each(function(){
					  	$(this).removeClass("lired");
					  });
				  	paixuLis[0].style.color="red";
				  	for(var i =0;i<_this.splDatas2.length;i++){
					  	_this.$set(_this.splDatas,i,_this.splDatas2[i]);
				  	};
				  }
			  });
			});
		},
		methods:{
			//价格快速排序
			pxjiag:function(){
				var jiage = this.splDatas;
				var resultjg = this.sortBy(jiage,"price");
				//将排序结果返回给li
				for(var i =0;i<resultjg.length;i++){
					this.$set(this.splDatas,i,resultjg[i]);
				};
			},
			//销量快速排序
			pxxiaol:function(){
				var xiaoliang = this.splDatas;
				var resultxl = this.sortBy(xiaoliang,"id");
				//将排序结果返回给li
				for(var i =0;i<resultxl.length;i++){
					this.$set(this.splDatas,i,resultxl[i]);
				};

			},
			//评价快速排序
			pxpingj:function(){
				var pingjia = this.splDatas;
				var resultpj = this.sortBy(pingjia,"commentsCount");
				//将排序结果返回给li
				for(var i =0;i<resultpj.length;i++){
					this.$set(this.splDatas,i,resultpj[i]);
				};

			},

			//页面传参
			details:function(img,name,price,id,commentsCount){
				this.$router.push({
					name:"goods",
					// params:{id:id}
					query:{img,name,price,id,commentsCount}
				})
			}
		}

	}
</script>








