<template>
<div class="my">
<headerMy title="我的收藏">
	<div slot="myNews">
        <img src="../../images/xiaoxi2.png" alt="" height="25" width="25" style="vertical-align: middle;">
    </div>
</headerMy>
<!-- <p class="myZanwu">您暂无收藏的商品,去其他页面逛逛吧</p> -->
	<!-- 收藏列表 -->
	<ul class="collectul">
	    <li v-for="(item,index) in items[0]" class="myi">

			<!-- 选中按钮 -->
			<div class="collectxuanzhong">
			     <!-- 选中按钮 -->
				<div class="collectxuan" >
				<!-- 灰色勾选 -->
					<img src="../../images/xuanze.png" alt=""height="20" width="20" >	
					<!-- 红色勾选	 -->
					<img src="../../images/collectxuanze(1).png" alt=""height="20" width="20"  class="redgou">					
					
					
				</div>
				
			</div>



			<!--  <div>
				传过来的参数:{{$route.params.id}}
			</div>
 -->
			<!-- 图片 -->
	    	<img :src="item.img" alt="" class="collectImg">
	    	<div class="collectmiddle">
				名称
	    		<div class="collectName">{{item.name}}</div> 
	    		<div class="collectPrice" style="color: red">¥{{item.price}}</div> 
	    	</div>

	    	<!-- 删除和购物车 -->
	    	<div class="collectRight">
				<!-- 删除	 -->
		    	<button @click="remove(index)">
		    		<img src="../../images/mydel.png" alt="" height="25" width="25"  class="collectDel">
		    	</button>
		    	<!-- 购物车 -->
		     	<button @click="" style="margin-left: 25%">
		     		<img src="../../images/shopcart.png" alt=""height="25" width="25"  class="collectShop">
		     	</button>

	    	</div>
	    	
	   
		</li>
		

	</ul>
		<!-- 底部 -->
	<div class="collectNav">
	     <!-- 全选按钮 -->
		<div class="Allxuan" @click="bol=!bol">
		<!-- 灰色勾选 -->
			<img src="../../images/xuanze.png" alt=""height="20" width="20" >	
			<!-- 红色勾选	 -->
			<img src="../../images/collectxuanze(1).png" alt=""height="20" width="20"class="allredxuan redgou">	
			<!-- 全选	 -->
			<div class="quanxuan">全选</div>
		</div>
		<!-- 删除选中 -->
		<button class="gouwuche">加入购物车</button>
		<button class="delXuan">删除选中</button>
	</div>

</div>
</template>
<script type="text/javascript">


import headerMy from '../../component/header/headerMy.vue';
export default {
		// 注册组件
		components:{
			headerMy
			
		},
		data(){
			return {
				"nav_title":[''],
				"items":[''],
				bol:false

			}
		},
		created:function(){
			this.$set(this.items,0,orderJson.Product);
		},
		mounted(){
			// $set() 第一个参数:参数传过来以后存储的地方
				   // 第二个参数:参数传过来以后在存储数组里面的下标,0代表在以第一个参数命名的数组第0位
				   // 第三个参数:需要传过来的参数

			$(".nav").hide();
		
			//获取勾选按钮照片
			var $collectxuan = $(".collectxuan").find("img");

			// console.log($collectxuan);
			
			var allxuangou = $(".redgou");
			var allgou = $(".allredxuan");
			// console.log(allxuangou)
			allgou.on("click",function(){
				
				if ($(this).css("opacity") == 0) {
					this.className="redxuan";
					allxuangou.css("opacity","1")

				}else {
					allxuangou.css("opacity","0")
					this.className="redgou";
					
				}
			})


			// console.log($collectxuan);
			//点击单选按钮
			$collectxuan.on("click",function(){
				// console.log(this);
				
				if ($(this).css("opacity") == 0) {
					// console.log("红色");
					// console.log();
					$(this).parent().parent().parent().find("img[class='redgou']").css("opacity","1")
				}else {
					$(this).parent().parent().parent().find("img[class='redgou']").css("opacity","0")
					// console.log("灰色")
				}

			
			});
		
			

			
			
		},

		methods:{
			remove:function(index){
	  		this.items[0].splice(index,1)
	  		// console.log(index);
	  	
			}
		

			
		}
		
	}


</script>
<style type="text/css" lang="less">
.redgou{
	opacity: 0;
}
.redxuan{
	opacity: 1;
}
.collectul{
	margin-top: 50px;
	padding-bottom: 50%;
}
.delXuan{
	background: #eeeeee;
	/*border: 1px solid black;*/
	color: #626372;
	padding: 1%;
	position: absolute;
	right: 5%;
	top: 25%;
}
.gouwuche{
	background: #eeeeee;
	/*border: 1px solid black;*/
	color: #626372;
	padding: 1%;
	position: absolute;
	right: 30%;
	top: 25%;
}
.Allxuan{
	color: #626372;
}
.quanxuan{
	position: absolute;
	top: 32%;
	left: 12%;
}
.Allxuan img{
	/*height: 5.5%;*/
	position: absolute;
	top: 25%;
	left: 5%;
}
.myZanwu{
	margin-top: 25%;
	color: #99999f;

}
.myi{
	color: black;
	border-bottom: 1px solid #eeeeee;
	position: relative;
	display:flex; 
	flex-direction:row;

}
.collectNav{
	width: 100%;
	height: 50px;
	background: #dcddde;
	position: fixed;
	bottom: 0;
}

.collectxuan img{
	position: absolute;
	top: 40%;
	left: 3%;
	/*display: block;*/
}
.collectImg{
	margin-top: 5%;
	margin-bottom: 5%;
	width: 25%;
	height: 25%;
	margin-left: 10%;
}
.collectmiddle{
	flex-shrink:0.5;
	margin: auto;
	font-size: 100%;
	padding-right: 15%;
}
.collectRight{
	position: absolute;
	right: 5%;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content:justify-content;
	
}
.joincollect{
	position: absolute;
	bottom: 0;
	left: -90%;
}

</style>