<template>
	<div class="xj">
		<ul class="xjul">
			<li>
				<router-link to="" to-data="/apiOne">
				<img src="../../../images/zhuhuichang.png">
				主会场
				</router-link>
			</li>
			<li>
				<router-link to="" to-data="/apiOne">
				<img src="../../../images/fenhuichang.png">
				分会场
				</router-link>
			</li>
			<li>
				<router-link to="" to-data="/apiOne">
				<img src="../../../images/remaihaojiu.png">
				热卖好酒
				</router-link>
			</li>
			<li>
				<router-link to=""  to-data="/apiOne">
				<img src="../../../images/mingzhuangtemai.png">
				名庄特卖
				</router-link>
			</li>
			<li>
				<router-link to=""  to-data="/apiOne">
				<img src="../../../images/pinpairi.png">
				品牌日
				</router-link>
			</li>
			<li>
				<router-link to=""  to-data="/apiOne">
				<img src="../../../images/shoujizhuanxiang.png">
				手机专享
				</router-link>
			</li>
			<li>
				<router-link  to="" to-data="/apiOne">
				<img src="../../../images/haiwaizhicai.png">
				海外直采
				</router-link>
			</li>
			<li>
				<router-link  to="" to-data="/apiOne">
				<img src="../../../images/zhangshangmiaosha.png">
				掌上秒杀
				</router-link>
			</li>
			<li>
				<router-link to=""  to-data="/apiOne">
				<img src="../../../images/zhidemai.png">
				值得买
				</router-link>
			</li>
			<li>
				<router-link to=""  to-data="/apiOne">
				<img src="../../../images/hongjiulihe.png">
				红酒礼盒
				</router-link>
			</li>
			<li>
				<router-link  to="" to-data="/apiOne">
				<img src="../../../images/xinpintuijian.png">
				新品推荐
				</router-link>
			</li>
			<li>
				<router-link  to="" to-data="/apiOne">
				<img src="../../../images/qingcangtemai.png">
				清仓特卖
				</router-link>
			</li>
			<li>
				<router-link  to="" to-data="/apiOne">
				<img src="../../../images/hongjiuzhengxiang.png">
				红酒整箱
				</router-link>
			</li>
			<li>
				<router-link  to="" to-data="/apiOne">
				<img src="../../../images/xiaoliangpaihang.png">
				销量排行
				</router-link>
			</li>
			<li>
				<router-link to=""  to-data="/apiOne">
				<img src="../../../images/jiuxiandujia.png">
				酒仙独家
				</router-link>
			</li>
		</ul>
	</div>
</template>
<style type="text/css" lang="less">
	.xj{
		.xjul{
			order: 0;
			margin-left: 5%;
			margin-bottom: 25px;
		    overflow: hidden;
		    li{
		    	margin-top: 30px;
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
			    img{
			    	margin-left: 25%;
			    	margin-bottom: 20%;
			    	display:block;
			    	width: 50%;
			    }
		    }
		}
	}
</style>
<script type="text/javascript">
	export default{
		mounted(){
			$(".nav").show();
			$(".nav").css("z-index","10000");
			var _this=this;
			// console.log(_this);
			var yjxjLis = $(".xj .xjul li");
			// console.log(yjxjLis.length);
			yjxjLis.each(function(index,value){
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