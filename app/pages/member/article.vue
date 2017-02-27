<template>
<div class="atc">
	<div class="tophead">
		<div onclick="window.history.go(-1)" class="artback"><img src="../../images/fanhui.png"></div>
		<div class="toheadwz">内容详情</div>
		<div class="share" @click="enjoy"><img src="../../images/fenxiang.png"></div>
	</div>
	<div class="midcontent">
		<div class="editorInfo">
			<div class="editorImg">
				<img :src="$route.query.editor_img">
			</div>
			<div class="edint">
				<p class="ediName">{{$route.query.source}}</p>
				<p class="ediTime">{{$route.query.creatTime}}</p>
			</div>
			<div class="hjwh">
				<span>酒鬼文化</span>
			</div>
		</div>
		<div class="wenzhang">
			<p class="wztimu">{{$route.query.title}}</p>
			<div class="hidwgNeir" style="display: none;">{{$route.query.content}}</div>
			<div class="wgNeir" v-html="wgcontent"></div>
			<div class="artfoot">
				<div class="jubaoinfo" @click="junb">
					<img src="../../images/jubao.png">
					<span class="jubao">举报</span>
				</div>
				<div class="yuedu">
					<img src="../../images/read.png" alt="" class="yuedul">
					<span class="yueduliang">{{$route.query.id}}</span>
				</div>
			</div>
		</div>
		<div id="apione_backtop" onclick="javascript:document.body.scrollTop=0" style="position:fixed;z-index:888;width:32px;height:32px;bottom:52px;right:10px;display:none;">
				<img width="32" height="32" src="http://st.360buyimg.com/m/images/index/scroll-to-top-icon.png" alt="">
		</div>
	</div>
</div>
</template>
<style type="text/css" lang="less">
	.atc{
		.tophead{
			position: fixed;
			width: 100%;
			height: 50px;
			background: #eee;
			display: flex;
			justify-content: space-between;
			line-height: 50px;
			z-index: 10000;
			.artback{
				img{
					margin-top: 10px;
					width: 30px;
					height: 30px;
					margin-left: 0;
				}
			}
			.toheadwz{
				font-size: 20px;
				width: 100%;
				text-align: center;
			}
			.share{
				img{
					margin-top: 10px;
					margin-right: 5px;
					width: 30px;
					height: 30px;
				}
			}
		}
		.midcontent{
			position: absolute;
			top: 50px;
			width: 100%;
			.editorInfo{
				width: 100%;
				position: absolute;
				.editorImg{
					margin: 5px;
					margin-bottom: 0;
					width: 40px;
					height: 40px;
					img{
						width: 80%;
						height: 80%;
						border-radius: 50%;
					}
				}
				.edint{
					margin: 5px;
					margin-bottom: 0;
					position: absolute;
					left: 45px;
					top: 0;
					height: 100%;
					.ediName{
						line-height: 18px;
						font-size: 14px;
					}
					.ediTime{
						font-size: 12px;
						color: #999;
						line-height: 18px;
					}
				}
				.hjwh{
					margin: 5px;
					margin-bottom: 0;
					position: absolute;
					right: 5px;
					top: 0;
					height: 100%;
					span{
						padding: 3px;
						font-size: 13px;
						border:1px solid #ddd;
						border-radius: 5px;
						color: #999;
						vertical-align: middle;
					}

				}
			}
		}
		.wenzhang{
			position: absolute;
			top: 50px;
			width: 100%;
			overflow: hidden;
			.wztimu{
				margin: 0 5px 5px 10px;
				font-size: 20px;
				font-family: "微软雅黑";
				font-weight: 900;
			}
			.wgNeir{
				margin:0 5px 0;
				font-size: 15px;
				line-height: 15px;
				letter-spacing: 0.5px;
				text-indent: 2em;
				line-height: 20px;
				img{
					width: 90%;
					margin-left: -1.6em;
				}
			}
		}
		.artfoot{
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;
			.jubaoinfo{
				margin-left: 10px;
				img{
					width: 12px;
				}
				.jubao{
					font-size: 12px;
					color: #666;
					line-height: 18px;
				}
			}
			.yuedu{
				margin-right: 10px;
				img{
					width: 20px;
					vertical-align: bottom;
				}
				.yueduliang{
					font-size: 12px;
					color: #666;
					line-height: 18px;
					vertical-align: bottom;
				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		data(){
			return {
				wgcontent:null
			}
		},
		mounted(){
			$(".nav").hide();
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
		   this.wgcontent=$(".hidwgNeir").text();
		},
		methods:{
			enjoy:function(){
				alert("请勿分享，谢谢合作！");

			},
			junb:function(){
				alert("举报成功！");
			}
		}
	}
</script>