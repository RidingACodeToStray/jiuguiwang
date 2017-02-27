<template>
	<div class="my">
	<headerMy title="个人中心">
        <div slot="mySet">
        	<router-link to="/set" class="myMessage" ><img src="../../images/xiaoxi2.png" width="24" alt="" style="margin-right: 5px;margin-top: 12px;" /></router-link>
        </div>
	</headerMy>

	 <div class="myUserMessage">

	 		<!-- 背景图 -->
            <img class="myBackgroundimg" src="../../images/topBg.jpg" alt=""/>

            <!-- 用户头像 -->
            <div class="myUserPhoto"></div>

            <!-- 用户名称 -->
            <div class="myUserName">jxw36097969</div>
            <div class="myAdd">下载客户端&nbsp 美酒随时抢</div>

			<!-- 订单信息 -->
            <div class="myOrder">
				<div class="myGrade myDiv">
					<div class="myLV">LV1 酒虫</div>
				</div>
				<div class="myDiv">
					<p>0</p>
					<p>待付款</p>
				</div>
				<div class="myDiv">
					<p>0</p>
					<p>待发货</p>
				</div>
				<div class="myDiv">
					<p>0</p>
					<p>待收货</p>
				</div>
				<div class="myDiv">
					<p>0</p>
					<p>已完成</p>
				</div>
            </div> 
     </div>
		<!-- 选项表单 -->
		<ul class="myBiaoge">
			<li>
				<router-link to="/order">
				<img src="../../images/order.png" alt="">
				<p>全部订单</p>
				</router-link>
			</li>
			<li>
				<router-link to="/shop">		
				<img src="../../images/cart.png" alt="">
				<p>购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to="/collect">
				<img src="../../images/collect.png" alt="">
				<p>我的收藏</p>
				</router-link>
			</li>
			<li>
				<router-link to="/coupon">
				<img src="../../images/coupon.png" alt="">
				<p>我的优惠券</p>	
				</router-link>
			</li>
			<li>
			<router-link to="/browsingHistory">
				<img src="../../images/history.png" alt="">
				<p>浏览历史</p>
			</li>
			<li>
				<img src="../../images/wallet.png" alt="">
				<p>我的钱包</p>
			</li>
			<li>
				<img src="../../images/safe.png" alt="">
				<p>商品兑换</p>
			</li>
			<li>
				<router-link to="/site">
				<img src="../../images/exchange.png" alt="">
				<p>地址管理</p>
				</router-link>
			</li>
			<li>
				<img src="../../images/address.png" alt="">
				<p>账户安全</p>
			</li>
			
		</ul>
		
		<!-- 退出登录 -->
		<div id="myTuichu">
			<div id="myTuichudenglu">
			<a href="###">
				退出登录
			</a>
			</div>
		</div>


		<!-- <ul class="con">
			<li v-for="item in items">
				{{item.con}}
			</li>
		</ul> -->
	</div>
</template>
<style type="text/css" lang="less">
@import "./../../common/css/reset.css";
.myUserMessage{
	position: relative;
	top: 50px;
}
/*背景图*/
.myBackgroundimg{
	 width: 100%;
	 position: relative;
	 z-index: -100;
}
/*//用户头像*/
.myUserPhoto{
	width: 20%;
	height: 50%;
	position: absolute;
	top: 15%;
	left: 5%;
	background-image: url(../../images/userPhoto.png);
	background-size: 100%;
}
/*用户名称*/
.myUserName{
	font-size: 95%;
	color: #fa281b;
	position: absolute;
	top: 30%;
	left: 31%;
}
/*广告文字*/
.myAdd{
	font-size: 90%;
	color:black;
	position: absolute;
	top: 45%;
	left: 31%;
	z-index: 10;
}
/*订单信息*/
/*等级*/
.myOrder{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 32%;
	background: rgba(178,177,177,0.5);
	display: flex;
}
.myOrder .myDiv{
	height: 100%;
	width: 18%;
	/*border: 1px solid white;*/
}
.myGrade{
	margin-right: 5%;
	margin-left: 5%;
	position: relative;
	background-image: url(../../images/grade.png);
	background-size: 100%;
	background-repeat:no-repeat;
	font-size: 14px;
	}
.myGrade .myLV{
	width: 100%;
	position: absolute;
	top: 15%;
}
.myDiv p{
	font-size: 85%;
	width: 100%;
	height: 45%;
	margin-top: 5%;
	color: black;
}
/*选项表单*/
.myBiaoge{
	/*width: 100%;*/
	height: 100%;
	display: flex;
	flex-wrap:wrap;
	margin-top: 50px;
	/*border: 1px solid black;*/
	justify-content:space-around;
	/*padding: 1%;*/
}
.myBiaoge img{
	width: 75%;
	margin-bottom: 10%;

}
.myBiaoge p {
	font-size: 70%;
	color: black;
}
.myBiaoge li{
	width: 33%;
	margin-top: 5%
}
/*退出登录*/
#myTuichu{
	width: 90%;
	height: 30%;
	margin-left: 5%;
	margin-top: 10%;
	padding-bottom: 30%; 
}
#myTuichudenglu{
	border-radius: 5px;
	background: #DE4B45;
	padding-bottom:2%; 
	padding-top:2%; 
	
}
#myTuichudenglu a{
	font-size: 120%;
	color: #FFFFFF;

}

</style>
<script type="text/javascript">
	import Swiper from './../../common/js/swiper-3.3.1.min.js';
	import headerMy from '../../component/header/headerMy.vue';
	export default {
		components:{
			headerMy
		},
		data(){
			return{
				items:[

				]
			}
		}
	}
</script>