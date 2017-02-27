<template>
<div class="my">
<headerMy title="我的优惠券">
	<div slot="myNews">
        <img src="../../images/message.png" alt="" height="25" width="25" style="vertical-align: middle;">
    </div>
</headerMy>
<!-- <div id="myResult"></div> -->
<ul style="margin-top: 65px;">
	<li v-for="(item,index) in items[0]"  class="coupon">
		<div class="couponred">
			<!-- 优惠券上半部分 -->
			<div class="redtop" >
				<!-- logo -->
				<img :src="logo" alt="">
				<p>¥{{item.Price}}</p>
			</div>
			<!-- 优惠券下半部分 -->
			<div class="redbottom" style="border: 1px solid red ; color: black">
				<!-- 满 X 元使用 -->
				<p>满<span class="redcolor">{{item.OrderAmount}}</span>元使用</p>	
				<!-- 适用范围 -->
				<p>适用范围:{{item.ApplySceneDescript}}</p>
				<!-- 状态 -->
				<p class="States">优惠券状态:<p  class="redcolor">{{item.States}}</p></p>
				<!-- 有效期 -->
				<p class="couponDeadline">有效期至2017-03-01</p>
				<div class="coupondetails">
				 查看详情
				 <img src="../../images/enterinto.png" alt="" height="25" width="25">
				</div>
			</div>
		</div>
		<div class="coupink"></div>
	</li>
</ul>
	
</div>
</template>
<script src="../../common/js/jquery-3.1.1.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
import headerMy from '../../component/header/headerMy.vue';
export default {
		components:{
			headerMy
		},
		data(){
			return{
				"items":[''],
				logo:""
			}
		},
		mounted(){
			$(".nav").hide();
			this.$set(this.items,0,couponJson.Coupon);
			this.logo=couponJson.VShop.Logo;
			
		}
	};


</script>
<style type="text/css" lang="less">
.redtop{
	background: #e73641;
	margin-top: 5%;
	width: 90%;
	margin-left: 5%;
	border-radius: 5px 5px 0 0;
	padding: 4%;
	display: flex;
	justify-content: flex-start;
	position: relative;

}
.redtop p{
	font-size: 220%;
	position: absolute;
	top: 25%;
	left: 30%;
}
.redtop img{
	border-radius: 5px;
}
.redbottom{
	background: #ffffff;
	width: 90%;
	margin-left: 5%;
	border-radius:  0 0 5px 5px;
	padding-top: 4%;
	padding-bottom: 3%;
	position: relative;
}
.redbottom p{
	display: flex;
	justify-content: flex-start;
	margin: 3%;
}
.couponDeadline{
	color: #9999a3;
	font-size: 85%;
}
.redcolor{
	color: red;
}
.coupondetails{
	display: flex;
	justify-content: flex-start;
	font-size: 150%;
	color: #e73641;
	position: absolute;
	top: 40%;
	right: 5%;
}
</style>










