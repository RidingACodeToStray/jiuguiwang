<template>
<div class="goods_footer">

	<div><router-link to="/1"><img src="https://m.jiuxian.com/mjava_statics/images/goods/zxkf.png" alt=""></router-link></div>
	<div><router-link to="/shop1"><img src="https://m.jiuxian.com/mjava_statics/images/goods/bottom05.png" alt=""></router-link>
	</div>
	<div><router-link to="/shop1"><img src="https://m.jiuxian.com/mjava_statics/images/goods/bottom06.png" alt=""></router-link></div>
	<div id="addshop">加入购物车</div>

	<div><router-link to="/shop1">立即购买</router-link></div>
</div>
</template>

<style lang="less">
	.goods_footer{
		width:100%;
		height: 41px;
		position: fixed;
		background: white;
		border-color: #bfbfbf;
		border: none;
		bottom:0;
		display: -webkit-flex;  Safari 
  		display: flex;
  		z-index: 999;
		div{
			 flex:1;
			 position: relative;
			 text-align: center;
			 line-height: 41px;
			 img{
			 	width: 41px;
			 	height: 41px;
				position: absolute;
				left: 50%;
				margin-left: -20.5px;
			 }
		}
		div:nth-child(4){
			flex:2;
			color:#fff;
			background: #fc5a5a;
		}
		div:nth-child(5){
			flex:2;
			background: #3c3f51;
			color: #fff;
		}
	}

</style>