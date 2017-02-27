<template>
<div class="my" >
<headerMy title="地址管理">
	<div slot="myNews" >
        <img src="../../images/xiaoxi.png" alt="" height="25" width="25" style="vertical-align: middle;">
    </div>
</headerMy>
<ul class="dzglul">
	<li v-for="(item,index) in items[0]"  class="address">
	<div class="consignee justify-content">收货人:{{item.consignee}}</div>
	<div class="addressTop">
		收货地址:
		<span class="province">{{item.province}}</span>
		<span class="city">{{item.city}}</span>
		<span class="county">{{item.county}}</span>
		<span class="stree">{{item.stree}}</span>	
	</div>
	
	
	<div class="phone justify-content">联系电话:<span style="color: red">{{item.phone}}</span></div>
	<!-- 编辑	 -->
	<button @click="" class="sitebianji">
		 <img src="../../images/bianji.png" alt="" height="22" width="22"  class="collectDel">
	</button>
	<!-- 删除	 -->
	<button @click="remove(index)" class="siteremove">
		 <img src="../../images/mydel.png" alt="" height="25" width="25"  class="collectDel">
	</button>
	</li>
</ul>
</div>
</template>
<script type="text/javascript">
import headerMy from '../../component/header/headerMy.vue';
export default {
		components:{
			headerMy
		},
		data(){
			return{
				items:[''],
			}
		},
		mounted(){
			$(".nav").hide();
			this.$set(this.items,0,deliveryJson.address);
			// console.log(this.items[0]);
			

		},
		methods:{
			remove:function(index){
	  		this.items[0].splice(index,1)
	  		// console.log(index);
	  	
			}
			
		}
		
	}
</script>
<style type="text/css" lang="less" >
.my{
	position: absolute;
	top: 0;
}
.dzglul{
	margin-top: 80px;
}
.address{
	border: 1px solid black;
	margin-top: 5%;
	position: relative;
	width: 90%;
	margin-left: 5%;
	border-radius: 5px;
	color: black;
}
.address div{
	margin-top: 3.5%;
	margin-bottom: 3.5%;
	font-size: 110%;
}
.siteremove{	
	position: absolute;
	bottom: 2.5%;
	right: 2%;
}
.sitebianji{
	position: absolute;
	bottom: 2.5%;
	right: 12%;
}
.justify-content{
	display: flex;
	justify-content: flex-start;
	margin-left: 1.5%;
}
</style>