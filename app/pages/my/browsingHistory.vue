<template>
<div class="my">
<headerMy title="浏览历史">
	<div slot="myNews">
        <img src="../../images/message.png" alt="" height="25" width="25" style="vertical-align: middle;">
    </div>
</headerMy>
<!-- 收藏列表 -->
	<ul class="collectul">
	    <li v-for="(item,index) in items[0]" class="myi">

			<!-- 选中按钮 -->
			<div class="collectxuanzhong">
			     <!-- 全选按钮 -->
				<div class="collectxuan" >
				<!-- 灰色勾选 -->
					<img src="../../images/xuanze.png" alt=""height="20" width="20" >	
					<!-- 红色勾选	 -->
					<img src="../../images/collectxuanze(1).png" alt=""height="20" width="20" class="redgou">	
					
					
				</div>
				
			</div>





			<!-- 图片 -->
	    	<img :src="item.img" alt="" class="collectImg">
	    	<div class="collectmiddle">
				<!-- 名称 -->
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
		     	<button @click="" style="margin-left: 30%">
		     		<img src="../../images/shopcart.png" alt=""height="25" width="25"  class="collectShop">
		     	</button>
		     	<button @click="" class="joincollect">
					<img src="../../images/joincollect.png" alt=""height="25" width="25"   >
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
			<img src="../../images/collectxuanze(1).png" alt=""height="20" width="20" 
			class="allredxuan redgou">			
			<!-- 全选	 -->
			<div class="quanxuan">全选</div>
		</div>
		<!-- 删除选中 -->
		<button class="gouwuche">加入购物车</button>
		<button class="delXuan" @click="joincollect(item.id)">加入收藏</button>
	</div>

</div>
</template>
<script type="text/javascript">
var collercNav = document.querySelector(".collectNav");
// console.log(collercNav);
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
		mounted(){
			// $set() 第一个参数:参数传过来以后存储的地方
				   // 第二个参数:参数传过来以后在存储数组里面的下标,0代表在以第一个参数命名的数组第0位
				   // 第三个参数:需要传过来的参数
			$(".nav").hide();
			this.$set(this.items,0,orderJson.Product);
			$(function(){//相当于 Windows.onload
				//获取勾选按钮照片
				var $collectxuan = $(".collectxuan").find("img");
				// console.log($collectxuan);
				//点击单选按钮
				$collectxuan.on("click",function(){
					// console.log(this);

					if ($(this).css("opacity") == 0) {
						console.log("红色");
						console.log();
						$(this).parent().parent().parent().find("img[class='redgou']").css("opacity","1")
					}else {
						$(this).parent().parent().parent().find("img[class='redgou']").css("opacity","0")
						console.log("灰色")
					}

				
			});
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
			})
			
		},
		methods:{
			remove:function(index){
	  		this.items[0].splice(index,1)
	  			
			}
			
			
		}
		
	}
</script>
