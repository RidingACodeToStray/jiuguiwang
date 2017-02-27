<template>
	<div class="header2ym">
		<div class="sysymm" @click="unused">
			</router-link>
				<img src="../../images/saoyisaoClass.png" alt="" />
			</router-link>
		</div>
		<div class="ssymm">
			<input type="text"  placeholder="搜索商品" class="ssinput">
		</div>
		<router-link to="">
			<span class="ssan">
				搜索
			</span>
		</router-link>
	</div>

</template>
<script type="text/javascript">
	export default {
		methods:{
			unused:function(){
				alert("敬请期待！");
			}
		}
	}
</script>
<style type="text/css" lang="less">
	@import '../../common/css/reset.css';
	html,body{
		width: 100%;
		height: 100%;
	}
	.header2ym {
		background: #eee;
		width: 100%;
		height: 50px;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		.sysymm{
		 	width: 10%;
		 	height: 50px;
	 		img{
	 			width: 80%;
			 	height: auto;
			 	margin-left: 30% ;
			 	margin-top: 10px;
	 		}
		 }
		 .ssymm{
		 	width: 80%;
		 	.ssinput{
		 		background: #ddd url(../../images/sousuo.png) no-repeat 5px 6px;
		 		background-size: 8% auto;
				width: 88%;
				height: 30px;
				border-radius: 5px;
				border-style: none;
				text-indent: 6%;
				font-size: 18px;
				margin-top: 10px;
		 	}
		 }
		 .ssan{
		 	margin-top: 18px;
		 	font-size: 18px;
		 }
	}
	.ssan{
		position: absolute;
		right: 3%;
		color: #666;
		font-size: 16px;
		margin-right: 0;
		margin-top:4%;
	}


</style>