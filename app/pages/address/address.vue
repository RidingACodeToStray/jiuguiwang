<template>
	<div class="shopaddress">
		<header1 title="地址">
			<img src="../../images/message.png" slot="shoptitle" class="shoptitle">
		</header1>
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
		<div class="container">
			<div class="checkout-addr">
				<!-- process step -->
				<div class="check-step">
					<ul>
						<li class="cur">地址确认</li>
						<li>查看订单</li>
						<li>支付</li>
						<li>订单确认</li>
					</ul>
				</div>

				<!-- address list -->
				<div class="checkout-title">
					<span>配送地址</span>
				</div>
				<div class="addr-list-wrap">
					<div class="addr-list">
						<ul>
							<li v-for="(item,index) in filterAddress" :class="{'check':index==currentIndex}" @click="currentIndex=index">
								<dl>
									<dt>{{item.userName}}</dt>
									<dd class="shopaddress">{{item.streetName}}</dd>
									<dd class="tel">{{item.tel}}</dd>
								</dl>
								<div class="addr-opration addr-edit">
									<a href="javascript:;" class="addr-edit-btn">
										<svg class="icon icon-edit">
											<use xlink:href="#icon-edit"></use>
										</svg>
									</a>
								</div>
								<div class="addr-opration addr-del">
									<a href="javascript:;" class="addr-del-btn" @click="delConfirm(item)">
										<svg class="icon icon-del">
											<use xlink:href="#icon-del"></use>
										</svg>
									</a>
								</div>
								<div class="addr-opration addr-set-default" v-if="!item.isDefault">
									<a href="javascript:;" class="addr-set-default-btn" v-if="!item.isDefault">
										<i>设为默认</i>
									</a>
								</div>
								<div class="addr-opration addr-default" v-if="item.isDefault">默认地址</div>
							</li>

							<li class="addr-new">
								<div class="add-new-inner">
									<i class="icon-add">
                                    	<svg class="icon icon-add">
                                    		<use xlink:href="#icon-add"></use>
                                    	</svg>
                                	</i>
									<p>添加新地址</p>
								</div>
							</li>
						</ul>
					</div>

					<div class="shipping-addr-more">
						<a class="addr-more-btn up-down-btn" href="javascript:;" @click="loadMore()">
							more
							<i class="i-up-down">
                            	<i class="i-up-down-l"></i>
							<i class="i-up-down-r"></i>
							</i>
						</a>
					</div>
				</div>

				<!-- shipping method-->
				<div class="checkout-title">
					<span>配送方式</span>
				</div>
				<div class="shipping-method-wrap">
					<div class="shipping-method">
						<ul>
							<li :class="{'check':shippingMethod==1}" @click="shippingMethod=1">
								<div class="name">标准配送</div>
								<div class="price">Free</div>
							</li>
							<li :class="{'check':shippingMethod==2}" @click="shippingMethod=2">
								<div class="name">高级配送</div>
								<div class="price">¥18</div>
							</li>
						</ul>
					</div>
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
                        <p id="cusLanInfo">你确认删除此地址信息吗?</p>
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
	.container{
		padding-top: 50px;
		background: #f9f9f9;
	}
	.check-step {
	    padding: 5px 0;
	}
	.check-step ul {
	    margin: 10px 0 25px 0;
	    display: flex;
	}
	.check-step li {
	    position: relative;
	    float: left;
	    -ms-flex: 1;
	    flex: 1;
	    width: 25%;
	    line-height: 1.5em;
	    padding: 0 1em 1em 1em;
	    border-bottom: 2px solid #ccc;
	    color: #999;
	    font-size: 12px;
	    text-align: center;
	}
	.check-step li.cur {
	    border-color: #EE7A23;
	    color: #EE7A23;
	}
	.check-step li:after {
	    position: absolute;
	    bottom: -7px;
	    left: 50%;
	    margin-left: -7px;
	    content: "";
	    width: 14px;
	    height: 14px;
	    border-radius: 50%;
	    background: #ccc;
	}
	.check-step li.cur:after {
	    background: #EE7A23;
	}
	.checkout-title {
	    position: relative;
	    margin: 0 10px 13px 10px;
	    text-align: center;
	}
	.checkout-title:before {
	    position: absolute;
	    top: 50%;
	    left: 0;
	    content: "";
	    width: 100%;
	    height: 1px;
	    background: #ccc;
	    z-index: 0;
	}
	.checkout-title span {
	    position: relative;
	    padding: 0 1em;
	    background-color: #f0f0f0 !important;
	    font-family: "moderat", sans-serif;
	    font-weight: bold;
	    font-size: 14px;
	    color: #605F5F;
	    z-index: 1;
	}
	.addr-list-wrap {
	    min-height: 300px;
	    padding-bottom: 23px;
	}
	.addr-list {
	    padding: 0 10px;
	}
	.addr-list li {
	    width: 100%;
	    margin: 5px 0;
	    position: relative;
	    float: left;
	    height: 162px;
	    padding: 20px 20px 40px 20px;
	    background: #fff;
	    border: 2px solid #e9e9e9;
	    overflow: hidden;
	    cursor: pointer;
	}
	.addr-list li.check {
	    border-color: #EE7A23;
	    border-width: 2px;
	}
	.addr-list li dt {
	    margin-bottom: 10px;
	    font-size: 18px;
	}
	.addr-list li dd {
	    margin-bottom: 6px;
	    line-height: 20px;
	}
	.addr-list li .shopaddress {
	    height: 40px;
	    font-size: 14px;
	    overflow: hidden;
	}
	.addr-list li .tel {
	    color: #605F5F;
	    font-size: 14px;
	}
	.addr-list li .addr-opration {
	    position: absolute;
	}
	.addr-list li .addr-edit {
	    display: none;
	    top: 20px;
	    right: 20px;
	    width: 20px;
	    height: 20px;
	}
	.addr-list li.check .addr-opration {
	    display: block;
	}
	.addr-list li .addr-opration .icon {
	    width: 100%;
	    height: 100%;
	}
	.addr-list li .addr-opration:hover .icon {
	    fill: #EE7A23;
	}
	.addr-list li .addr-del {
	    display: none;
	    bottom: 20px;
	    right: 20px;
	    width: 20px;
	    height: 20px;
	}
	.addr-list li .addr-set-default, .addr-list li .addr-default {
	    bottom: 20px;
	    left: 20px;
	    color: #EE7A23;
	    font-size: 14px;
	}
	.addr-list li.addr-new {
	    color: #333;
	    text-align: center;
	}
	.addr-list li:nth-child(2n) {
	    margin-right: 0;
	}
	.addr-list li.addr-new .add-new-inner {
	    padding-top: 20px;
	}
	.addr-list li.addr-new .add-new-inner .icon-add {
	    display: inline-block;
	    width: 50px;
	    height: 50px;
	    fill:#605F5F;
	}
	.addr-list li.addr-new .add-new-inner p {
	    margin-top: 10px;
	    font-size: 14px;
	}
	.addr-list ul:after {
	    visibility: hidden;
	    display: block;
	    content: " ";
	    clear: both;
	}
	.shipping-addr-more {
	    margin-top: 10px;
	    text-align: center;
	}
	.up-down-btn {
	    font-size: 14px;
	}
	.i-up-down {
	    position: relative;
	    display: inline-block;
	    width: 14px;
	    height: 6px;
	    vertical-align: middle;
	    z-index: 2;
	    -ms-transform: translateY(2px);
	    transform: translateY(2px);
	    transition: transform .3s ease-out;
	}
	.i-up-down i {
	    position: absolute;
	    top: 0;
	    width: 8px;
	    height: 1px;
	    background: #EE7A23;
	}
	.i-up-down .i-up-down-l {
	    left: 0;
	    -ms-transform: rotate(40deg);
	    transform: rotate(40deg);
	    transition: transform .3s ease-out;
	}
	.i-up-down .i-up-down-r {
	    right: 0;
	    -ms-transform: rotate(-40deg);
	    transform: rotate(-40deg);
	    transition: all .3s ease-out;
	}
	.checkout-title {
	    position: relative;
	    margin: 0 10px 13px 10px;
	    text-align: center;
	}
	.checkout-title:before {
	    position: absolute;
	    top: 50%;
	    left: 0;
	    content: "";
	    width: 100%;
	    height: 1px;
	    background: #ccc;
	    z-index: 0;
	}
	.checkout-title span {
	    position: relative;
	    padding: 0 1em;
	    background: #f0f0f0 !important;
	    font-family: "moderat", sans-serif;
	    font-weight: bold;
	    font-size: 14px;
	    color: #605F5F;
	    z-index: 1;
	}
	.shipping-method-wrap {
	    padding-bottom: 65px;
	}
	.shipping-method {
	    text-align: center;
	    padding: 10px;
	}
	.shipping-method li {
	    display: inline-block;
	    width: 100%;
	    margin: 5px 0;
	    padding: 10px;
	    background: #fff;
	    border: 2px solid #e9e9e9;
	    font-size: 18px;
	    line-height: 26px;
	    text-align: center;
	    color: #999;
	    font-family: "Moderat";
	    cursor: pointer;
	}
	.shipping-method li.check {
	    border-color: #EE7A23;
	    color: #333;
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
	import Zepto from './../../common/js/zepto.min.js';
	import Header1 from '../../component/header/header.vue';
	export default {
		components: {
			Header1,
			Zepto
		},
		data() {
			return{
				limitNum:2,
				addressList:[],
				items:[''],
				currentIndex:0,
				shippingMethod:1,
				delFlag:false,
				curProduct:'',
			}
		},
		mounted:function(){
			this.$nextTick(function(){
				this.getAddressList();
			})
		},
		computed:{
			filterAddress:function(){
				return this.addressList.slice(0,this.limitNum);
			}
		},
		methods:{
			getAddressList:function(){
				this.addressList = this.$set(this.items,0,addressJson.result);
			},
			loadMore:function(){//添加地址
				this.limitNum = this.addressList.length;
			},
			setDefault:function(addressId){//设置默认地址
				this.addressList.forEach(function(address,index){
					if(address.addressId == addressId){
						address.isDefault = true;
					}else{
						address.isDefault = false;
					}
				});
			},
			delConfirm:function (item) {//删除
				this.delFlag=true;
				this.curProduct = item;
			},
			delProduct:function () {//删除
				var index = this.addressList.indexOf(this.curProduct);
				this.addressList.splice(index,1);
				this.delFlag=false;
			}
		}

	}




</script>