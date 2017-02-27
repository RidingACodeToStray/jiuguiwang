<template>
	<div class="shop_debark_content">
		<!-- 用户账号登陆模块开始 -->
		<form autocomplete="shop_off">
			<div class="shop_user">
				<i></i>
				<input type="text" name="user_name" id="shop_user_name" placeholder="用户名/邮箱/手机号" />
				<p class="shop_tip shop_empty" id="shop_user_name"><i></i>请输入用户名/邮箱/手机号</p>
			</div>
			<div class="shop_pwd">
				<i></i>
				<input type="password" name="password" id="shop_pass" placeholder="密码" />
				<p class="shop_tip mima"><i></i>请输入密码</p>
			</div>
			<!--图形验证码 -->
			<div class="shop_verify shop_text shop_verifyLogin" id="shop_vfCode">
				<div class="shop_yzmInput">
					<input type="text" name="verifyCode" id="shop_imgCode1" placeholder="验证码" />
					<p class="shop_tip empty"><i></i>请输入验证码</p>
					<p class="shop_tip error"><i></i>验证码错误，请重新输入</p>
				</div>
				<div class="shop_yzmImg">
					<a href="javascript:;" id="shop_verify" class="shop_change">换一张</a>
					<a class="shop_picture"><img src="../../../images/yaz5.png" width="110px" height="40px" id="shop_imgcode" /></a>
				</div>
			</div>
			<router-link to="/my" class="shop_debark_btn"  id="subbtn1">立即登录</router-link>
			<!-- 用户账号 登陆模块结束 -->
			<div class="shop_serve clearfix">
				<a class="shop_regist" href="">免费注册</a>
				<a class="shop_getpwd" href="">找回密码</a>
			</div>
			<!-- 联合登陆 开始-->
			<div class="shop_partnerLogin">
				<div class="shop_title">
					<div class="shop_line"></div>
					<div class="shop_partner">合作伙伴登录</div>
				</div>
				<ul class="shop_choose clearfix">
					<li>
						<a href="" class="qq"></a>
					</li>
					<li>
						<a href="" class="alipay"></a>
					</li>
				</ul>
			</div>
			<!--联合登陆结束 -->
		</form>
	</div>
</template>
<style type="text/css" lang="less">
	.shop_user, .shop_pwd, .shop_pwd2, .shop_tel, .shop_verify, .shop_yzmInput {
	    height: 40px;
	    border: 1px solid #cccccc;
	    border-radius: 3px;
	    margin-bottom: 10%;
	    position: relative;
	}
	.shop_user i, .shop_pwd i, .shop_pwd2 i, .shop_tel i {
	    width: 20px;
	    height: 20px;
	    display: block;
	    float: left;
	    margin: 10px 10px 0 10px;
	}
	.shop_user i, .shop_pwd i, .shop_pwd2 i, .shop_tel i, .shop_choose a, .shop_tip i, .shop_tip2 i, .shop_success h2 i {
	    background: url(../../../images/logo.png) no-repeat;
	}
	.shop_user input, .shop_pwd input, .shop_pwd2 input, .shop_tel input {
	    width: 80%;
	    height: 38px;
	    line-height: 40px;
	}
	.shop_user input{
		border: none;
	}
	.shop_user i{
		background-position:0 -34px; 
	}
	.shop_tip {
	    position: absolute;
	    top: 40px;
	    right: 0;
	    color: #de4943;
	    display: none;
	}
	
	.shop_pwd i, .shop_pwd2 i {
	    background-position: -72px -34px;
	}
	/*验证码*/
	.shop_verify {
	    border: none;
	}
	.shop_yzmInput {
	    width: 36%;
	    float: left;
	    input{
	    	width: 100%;
		    height: 40px;
		    line-height: 40px;
		    text-align: center;
		    box-sizing: border-box;
		    border-radius: 3px;
		    padding-left: 10px;
		    padding:0;
	    }
	}
	.shop_yzmImg {
	    float: right;
	    a{
	    	width: auto;
		    height: 40px;
		    line-height: 40px;
		    display: block;
		    float: right;
		    color: #626365;
	    }
	}
	.shop_yzmImg .shop_picture {
	    overflow: hidden;
	    margin-right: 10px;
	}
	.shop_debark_btn {
	    width: 100%;
	    max-width: 300px;
	    height: 34px;
	    line-height: 34px;
	    display: block;
	    clear: both;
	    margin: 2% auto;
	    text-align: center;
	    background: #DE4B45;
	    border-radius: 5px;
	    color: #FFFFFF;
	    font-size: 16px;
	}
	.shop_serve a {
	    color: #666;
	    text-decoration: underline;
	    height: 20px;
	    display: block;
	    float: left;
	}
	.shop_serve .shop_getpwd {
	    float: right;
	}
	/*联合登陆*/
	.shop_partnerLogin .shop_title {
	    width: 100%;
	    height: 40px;
	    margin-top: 20px;
	    position: relative;
	    .shop_line{
	    	height: 20px;
    		border-bottom: 1px solid #cccccc;
	    }
	    .shop_partner{
	    	width: 127px;
		    height: 40px;
		    background: #ffffff;
		    position: absolute;
		    top: 0;
		    left: 50%;
		    line-height: 40px;
		    margin: 0 0 0 -55px;
		    text-align: center;
		    color: #878686;
	    }
	}
	.shop_choose {
	    margin-top: 2%;
	    li{
	    	width: 33%;
	    	float: left;
	    }
	}
	.shop_choose a {
	    width: 45px;
	    height: 45px;
	    display: block;
	    margin-left: 30%;
	}
	.shop_choose .qq {
	    background-position: -78px -99px;
	}
	.shop_choose .alipay {
	    background-position: -156px -99px;
	}
</style>
<script type="text/javascript">
	import Zepto from '../../../common/js/zepto.min.js';

	export default {
		components: {
			Zepto
		},
		data() {
			return{
			
			}
		},
		mounted(){
			var bol = false;
			$('#shop_verify').click(function(){
				if(!bol){
					$("#shop_imgcode").get(0).src=require("../../../images/yaz4.png");
					bol=!bol;

				}else{
					$("#shop_imgcode").get(0).src=require("../../../images/yaz3.png");
					bol=!bol;
				}
			});

			// 用户登录
			$("#shop_user_name").blur(function(){
				var tels = /^1[3|5|8|4|7][0-9]\d{8}$/;
				var username=$("#shop_user_name").val().trim();
				if(this.value == ""){
					$(".shop_empty").show();
				}else{
					$(".shop_empty").hide();
				}

			});
			// 密码
			$("#shop_pass").blur(function(){
				if(this.value == ""){
					$(".mima").show();
				}else {
					$(".mima").hide();
				}
			});
			//验证
			$("#shop_imgCode1").blur(function(){
				if(this.value == ""){
					$(".empty").show();
				}else{
					$("empty").hide();
				}
			});






















			
		}
	}






</script>