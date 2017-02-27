<template>
	<div class="shopping">	
		<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="icon-add" viewBox="0 0 32 32">
                    <title>add2</title>
                    <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
                </symbol>
                <symbol id="icon-ok" viewBox="0 0 39 32">
                    <title>ok</title>
                    <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
                </symbol>
                <symbol id="icon-edit" viewBox="0 0 32 32">
                    <title>edit</title>
                    <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
                </symbol>
                <symbol id="icon-del" viewBox="0 0 26 32">
                    <title>delete</title>
                    <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
                </symbol>
                <symbol id="icon-clock" viewBox="0 0 32 32">
                    <title>clock</title>
                    <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
                </symbol>
            </defs>
        </svg>
		<div class="page page-current">
			<div class="cart_container">
				<input type="hidden" id="stockout_gifts" value>
				<input type="hidden" id="platfrom_cart" value>
				<ul class="catShopList">
					<div class="pucTitle">
						<a id="ch2" href="javascipt:;" :class="{'check':checkAllFlag}" @click="checkAll(true)">
							<svg class="icon icon-ok">
								<use xlink:href="#icon-ok"></use>
							</svg>
						</a>
						<span class="jiu">
							<img src="../../../images/shop_jiu5.png" alt="">
						</span>
						<span class="title">酒仙自营</span>
					</div>
				</ul>
				<div class="cart-item">
					<ul class="cart-item-list">
						<li v-for="(item,index) in items[0]" >
							<div class="cart-tab-1" >
								<div class="cart-item-check">
									<a id="ch1" href="javascipt:;" class="item-check-btn " :class="{'check':item.checked}" @click="selectedProduct(item)">
										<svg class="icon icon-ok">
											<use xlink:href="#icon-ok"></use>
										</svg>
									</a>
								</div>
								<div class="cart-item-pic">
									<img :src="item.img" alt="酒" id="shop_changimg">
								</div>
								<div class="cart-item-title">
									<div class="item-name">{{item.name}}</div>

								</div>
							</div>
							<div class="cart-tab-2">
								<div class="item-price">{{item.price |formatMoney}}</div>
							</div>
							<div class="cart-tab-3">
								<div class="item-quantity">
									<div class="select-self select-self-open">
										<div class="quantity">
											<a href="javascript:;" @click="changeMoney(item,-1)">-</a>
											<input type="text"  disabled 
											v-model="item.quantity">
											<a href="javascript:;" @click="changeMoney(item,1)">+</a>
										</div>
									</div>
								</div>
							</div>
							<div class="cart-tab-5">
								<div class="cart-item-opration">
									<a href="javascript:;" class="item-edit-btn" @click="delConfirm(item)">
										<svg class="icon icon-del">
											<use xlink:href="#icon-del"></use>
										</svg>
									</a>
								</div>
							</div> 
						</li>
					</ul>
				</div>
			</div>
			<div class="cart-foot-wrap">
	            <div class="cart-foot-l">
	                <div class="item-all-check">
	                    <a href="javascipt:;">
	                       	<span class="item-check-btn" :class="{'check':checkAllFlag}" @click="checkAll()">
	                            <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
	                        </span>
	                        <span :class="{'check':checkAllFlag}" @click="checkAll()">全选</span>
	                    </a>
	                </div>
	            </div>
	            <div class="cart-foot-r">
	                <div class="item-total">
	                    <p>
	                    	<span>合计:</span> 
	                    	<span class="total-price">{{totalMoney |formatMoney}}</span>
	                    </p>
	                    <span>优惠:</span>
	                    <strong>¥0</strong> 
	                </div>
	                <div class="next-btn-wrap">

	                    <router-link to="/address" class="btn" :class="{'check':jiesuan}">去结算</router-link>
	           		</div>
	           		<div class="shopmask"></div>

	            </div>  
	        </div>
		</div>

		<div class="md-modal modal-msg md-modal-transition" id="showModal" :class="{'md-show':delFlag}">
            <div class="md-modal-inner">
                <div class="md-top">
                    <button class="md-close" @click="delFlag=false">关闭</button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <p id="cusLanInfo">你确认删除此订单信息吗?</p>
                    </div>
                    <div class="btn-wrap col-2">
                        <button class="btn btn--m" id="btnModalConfirm" @click="delProduct()">Yes</button>
                        <button class="btn btn--m btn--red" id="btnModalCancel" @click="delFlag=false">No</button>
                    </div>
                </div>
            </div>
        </div>
		<div class="md-overlay" v-if="delFlag"></div>
	</div>
</template>
<style type="text/css" lang="less">
	@import "../../../common/css/reset.css";
	@import "../../../common/css/modal.css";
	.shopping{
		padding-bottom: 56px;
	}
	.all_select {
		width: 100%;
		height: 50px;
		font-size: 20px;
		margin-top: 10px;
		line-height: 50px;
		background: gainsboro;
	}
	/*消息*/
	.topCatTip {
		border-top: 1px solid #ffe9c6;
		border-bottom: 1px solid #ffe9c6;
		background-color: #fff4e2;
		height: 22px;
		line-height: 22px;
		color: #ff3333;
		font-size: 12px;
		width: 100%;
		overflow: hidden;
	}
	.topCatTip a {
		display: inline-block;
		background-position: -40px 2px;
		width: 11px;
		height: 22px;
		margin: 0 6px 0;
		float: left;
		position: relative;
		top: -2px;
	}
	.pubIcon {
		background: url(../../../images/shop_jiu4.png) no-repeat 0 0;
		background-size: 150px 150px;
	}
	.cart_container {
		margin-top: 0;
	}
	/*店铺*/
	.catShopList {
		margin-top: 8px;
		border-top: 1px solid #e8e8e8;
	}
	.pucTitle {
		height: 45px;
		line-height: 45px;
		background: #fff;
		position: relative;
	}
	.catShopList .pucTitle #ch2{
		display: inline-block;
		width: 21px;
		height: 24px;
		border-radius: 50%;
		vertical-align: middle;
		margin-left: 3%;
		border: 1px solid #ccc;
	}
	#ch2.check {
	    background: #d1434a;
	    border-color: #d1434a;
	}
	.catShopList .pucTitle .icon-ok{
		width: 100%;
		height:25px;
		vertical-align: top;
		fill:#fff;
		transform: scale(0.8); 
	}
	.jiu {
		width: 15px;
		height: 15px;
		position: absolute;
		left: 40px;
		top: 15px;
		display: block;
	}
	.jiu img {
		width: 100%;
		height: auto;
		display: block;
	}
	.pucTitle .title {
		font-size: 14px;
		color: #252525;
		margin-left: 21px;
		line-height: 45px;
		vertical-align: top;
	}
	/*店铺内容*/
	.cart-item {
	    display: block;
	    width: 100%;
	    background: #f0f0f0;
	}
	.cart-item-head {
	    display: none;
	    width: 100%;
	}
	.cart-item-head ul {
	    display: table-row;
	    width: 100%;
	}
	.cart-item-head li {
	    display: table-cell;
	    height: 54px;
	    line-height: 54px;
	    background: #605F5F;
	    color: #fff;
	    font-size: 18px;
	    text-align: center;
	}
	.cart-item-head li:nth-child(2), 
	.cart-item-head li:nth-child(3), 
	.cart-item-head li:nth-child(4), 
	.cart-item-head li:nth-child(5) {
	    width: 12%;
	    padding: 0 10px;
	}
	.cart-item-list {
		display: block;
	}
	.cart-item-list> li {
	    position: relative;
	    display: block;
	    padding: 0;
	    background: #fff;
	    border-top: 1px solid #e9e9e9;
	}
	/*1*/
	.cart-item-list .cart-tab-1 {
		min-width: 72px;
		text-align: left;
		padding: 12px 0 0 0;
		border: none;
	}
	.cart-item-list {
		vertical-align: top;
		position: static;
		display: block;
	}
	.cart-item-list .cart-item-check {
		float: left;
		padding: 28px 0 28px 22px;
		padding-left: 3px;
	}
	.item-check-btn {
		display: inline-block;
		width: 21px;
		height: 26px;
		border: 1px solid #ccc;
		border-radius: 50%;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
	}
	.item-check-btn.check{
		background: #d1434a;
    	border-color: #d1434a;
	}
	.item-check-btn .icon-ok {
		display: none;
		width: 100%;
		height: 100%;
		fill: #fff;
		-ms-transform: scale(0.8);
		transform: scale(0.8);
	}
	.item-check-btn.check .icon-ok {
	    display: inline-block;
	}
	.cart-item-list .cart-item-pic {
	    float: left;
	    width: 80px;
	    height: 94px;
	    margin-left: 10px;
	    border: 1px solid #e9e9e9;
	}
	.cart-item-list .cart-item-pic img {
		width: 100%;
		height: 100%;
	}
	.cart-item-list .cart-item-title {
		height: 95px;
	    min-height: 58px;
	    padding: 0 10px 0 126px;
	}
	.cart-item-list .cart-item-title .item-name {
	    margin: 2px 0 10px;
	    line-height: 16px;
	    color: #000;
	    font-size: 1.4rem;
	}
	/*2*/
	.cart-item-list> li> div {
	    position: static;
	    text-align: center;
	    border: none;
	    display: block;
	    vertical-align: top;
	}
	.cart-item-list .cart-tab-2 {
	    width: 17%;
	    position: absolute;
	    top: 47%;
	    left: 37%;
	    font-size: 1.8rem;
	    color: #d1434a;;
	}
	/*3*/
	.cart-item-list .cart-tab-3 {
	    position: absolute;
	    top:64%;
	    left: 39%;
	    width: 30%;
	    text-align: left;
	}
	.cart-item-list .item-quantity> div {
	    display: inline-block;
	    margin-right: 3px;
	    vertical-align: middle;
	}
	.quantity {
		border:1px solid #d0d0d0;
	}
	.quantity input {
	    width: 40px;
	    padding: 6px 10px;
	    text-align: center;
	    font-size: 1.6rem;
	    border-top:0;
	    border-bottom: 0;
	}
	/*4*/
	.cart-item-list .cart-tab-4 {
	    float: right;
	    width: 42%;
	    padding: 15px 10px 14px 0;
	    text-align: right;
	    font-size: 2rem;
	}
	.cart-item-list .item-price-total {
	    color: #d1434a;
	}
	/*5*/
	.cart-item-list .cart-tab-5 {
		clear: both;
	    padding:0;
	    border-right: 1px solid #e9e9e9;
	}
	.cart-item-list .cart-item-opration {
	    position: absolute;
	    top: 76px;
	    right: 27px;
	}
	.item-edit-btn {
	    display: inline-block;
	    width: 16px;
	    height: 24px;
	}
	.item-edit-btn .icon-del {
	    width: 100%;
	    height: 100%;
	    fill: #999;
	}
	/*底部*/
	.cart-foot-wrap {
	    height: 50px;
	    line-height: 42px;
	    margin: 0;
	    position: fixed;
	    bottom: 0;
	    width: 100%;
	    background: #fafafa;
	    z-index: 100000;
	    border-top: 1px solid #d9d9d9;
	}
	/*左边*/
	.cart-foot-wrap .cart-foot-l {
	    float: left;
	    font-size: 16px;
	    padding: 0 10px;
	}
	.cart-foot-wrap .item-all-check {
	    float: left;
	    color: #EE7A23;
	}
	.cart-foot-wrap .item-all-check span {
	    vertical-align: middle;
	}
	.cart-foot-wrap .item-all-check .item-check-btn {
	    margin-right: 16px;
	}
	/*右边*/
	.cart-foot-wrap .cart-foot-r {
	    float: right;
	    width: 70%;
	}
	.cart-foot-wrap .item-total {
	    float: left;
	    width: 40%;
	    font-size: 16px;
	    color: #605F5F;
	    line-height: 23px;
	}
	.item-total p{
		width: 111px;
	}
	.item-total span{
		color: #999;
	}
	.cart-foot-wrap .item-total .total-price {
	    margin-left: 16px;
	    color: #d1434a;
	    font-family: "moderat", sans-serif;
	}
	strong{
		margin-left: 17px;
		color: #999;
	}
	.next-btn-wrap {
	    width: 50%;
	    z-index: 101;
	}
	.cart-foot-wrap .next-btn-wrap {
	    float: right;
	}
	.next-btn-wrap .btn {
	    display: block;
	    width: 100%;
	    height: 50px;
	    color:#fff;
	    background-color:#d9d9d9; 
	}
	/*结账*/
	.checkout .btn {
	    min-width: 220px;
	}
	.btn.check{
		background-color: #d1434a;
	}
	/*删除*/
	.md-modal .confirm-tips, .md-modal .alert-tips {
	    font-size: 14px;
	    font-weight: 200;
	    text-align: center;
	}
	.md-modal .btn-wrap {
	    margin-top: 20px;
	    text-align: center;
	    font-size: 0;
	}
	.md-modal .btn-wrap .btn {
	    width: 45%;
	    min-width: 80px;
	    margin: 0 2.5%;
	}
	/*蒙版*/
	.md-overlay {
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background: rgba(0,0,0,0.5);
	    z-index: 200;
	}
</style>

<script type="text/javascript">
	import Zepto from '../../../common/js/zepto.min.js';
	export default {
		components: {
			Zepto
		},
		data(){
			return{
				items:[''],
				ids:[''],
				checkAllFlag:false,
				totalMoney:0,
				delFlag:false,
				curProduct:'',
				jiesuan:false,
				productList:''
			}
		},
		filters:{
			formatMoney:function(value){
				return "¥" + value;
			}
		},
		mounted(){
			$(".nav").hide();
			$(".nav").css("z-index","-1");
			$(".shop_catKongBox").hide();
			this.$nextTick(function(){
				this.cartView();
			});
		},
		methods:{
			cartView:function(){
				var swap_arr=[];
				for (var i = 0; i < orderJson.Product.length; i++) {
					if(orderJson.Product[i].quantity>0){
						swap_arr.push(orderJson.Product[i]);
					}

				}
				 this.productList = this.$set(this.items,0,swap_arr);
			},
			changeMoney:function(product,way){//数量加减
				if(way>0){
					product.quantity++;
				}else{
					product.quantity--;
					if(product.quantity<1){
						product.quantity = 1;
					}
				}
				this.TotalPrice();
			},
			selectedProduct:function(item){//单选
				this.jiesuan=false;
				if(typeof item.checked =='undefined'){
					this.$set(item,"checked",true);
				}else{
					item.checked = !item.checked;
				}
				this.jiesuanfun();
				// 单个商品全部选中后全选按钮也选中
				var checkAllFlag = true;
				this.productList.forEach(function(item,index){
					checkAllFlag = checkAllFlag&&item.checked;
				});
				this.checkAllFlag = checkAllFlag;
				this.TotalPrice();
			},					
			checkAll:function(){//全选
				this.checkAllFlag  = !this.checkAllFlag;
				var _this = this;
				this.productList.forEach(function (item,index){
					if(typeof item.checked == 'undefined'){//判断对象是否存在
						_this.$set(item,'checked',_this.checkAllFlag);
					}else{
						item.checked = _this.checkAllFlag;
					}
				});
				this.jiesuan = !this.jiesuan;
				this.TotalPrice();
			},
			jiesuanfun:function(){//结算
				var _this = this;
				this.productList.forEach(function (item,index){
					if(item.checked)_this.jiesuan=true;
				});
			},
			TotalPrice:function(){//计算总金额
				var _this = this;
				_this.totalMoney = 0;
				this.productList.forEach(function(item,index){
					if(item.checked){
						if(item.checked){
							_this.totalMoney += item.price*item.quantity;
						}
					}
				})
			},
			delConfirm:function (item) {//删除
				this.delFlag=true;
				this.curProduct = item;
			},
			delProduct:function () {//删除
				var index = this.productList.indexOf(this.curProduct);
				this.productList.splice(index,1);
				this.delFlag=false;
				if(this.productList==0){//隐藏商店
					$(".pucTitle").hide();
					$(".cart-foot-wrap").hide();
					$(".shop_catKongBox").show();
				}
			}
		},
		
	}

		
	



</script>