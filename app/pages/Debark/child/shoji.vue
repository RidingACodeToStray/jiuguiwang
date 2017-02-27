<template>
	<!--手机动态登陆 -->
	
	<div class="shop_debark_content">
		<form autocomplete="shop_off">
			<div class="shop_tel">
				<i></i>
				<input type="text" id="shop_iphone" placeholder="请输入手机号码" />
				<p class="shop_tip" id="shop_mob_msg"><i></i>请输入手机号</p>
				<p class="shop_tip shop_error"><i></i>请输入正确的手机号</p>
			</div>
			<!--图形验证码 -->
			<div class="shop_verify shop_text shop_verifyLogin" style="height:57px;overflow:hidden;" id="shop_vfCode2">
				<div class="shop_yzmInput">
					<input type="text" name="verifyCode" id="shop_imgCode2" placeholder="请输入验证码" />
					<p class="shop_tip empty"><i></i>请输入验证码</p>
					<p class="shop_tip error"><i></i>验证码错误，请重新输入</p>
				</div>
				<div class="shop_yzmImg">
					<a href="javascript:;" id="mobverify" class="shop_change">换一张</a>
					<a class="shop_picture"><img src="../../../images/yaz1.png" width="110px" height="40px" id="shop_mobimgcode" /></a>
				</div>
			</div>
			<div class="shop_identify">
				<input type="text" id="shop_security_code" placeholder="请输入校验码" />
				<p class="shop_tip2 jiaoyan"><i></i>请输入校验码</p>
			</div>
			<div class="shop_hqyzm">
				<a class="shop_yzm off" href="javascript:;" id="shop_yanzhenma">获取校验码</a>
				<a class="shop_yzmTime" href="javascript:;"><i></i>秒后重新获取</a>
			</div>
			<router-link to="/my"  class="shop_debark_btn"  id="shop_subbtn2">立即登录</router-link>
		</form>
	</div>
	<!--手机动态登陆 -->
</template>
<style type="text/css" lang="less">
	/*手机登陆*/
	.shop_tel i{
		background-position:-138px -34px;
	}
	.shop_identify{
		width:32%;
		height: 40px;
	    border-radius: 3px;
	    margin-bottom: 20%;
	    float: left;
	    input{
	    	width: 100%;
		    height: 40px;
		    line-height: 40px;
		    text-align: center;
		    border: 1px solid #cccccc;
		    border-radius: 3px;
		    padding-left: 15px;
		    padding: 0;
	    }
	}
	.shop_tip2 {
	    position: absolute;
	    color: #de4943;
	    display: none;
	}
	.shop_identify .shop_tip2 {
	    display: none;
	}
	.shop_hqyzm{
		display: inline-block;
		float: right;
	}
	.shop_yzm, .shop_yzmTime {
	    width: auto;
	    height: 40px;
	    line-height: 40px;
	    float: right;
	    border-radius: 5px;
	    color: #ffffff;
	    padding: 0 4px;
	}
	.shop_yzm {
	    background: #df3832;
	}
	.shop_tip{
		position: absolute;
	    top: 40px;
	    right: 0;
	    color: #de4943;
	}
	.shop_tip i, .shop_tip2 i {
	    width: 15px;
	    height: 15px;
	    display: block;
	    float: left;
	    margin: 0 5px 0 0;
	    background-position: -202px -34px;
	}
	.shop_yzmTime {
	    background: #9b9b9b;
	    display: none;
	}
	#shop_iphone{
		border: none;
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
			// 换一张
			var bol = false;
			$('#mobverify').click(function(){
				if(!bol){
					$("#shop_mobimgcode").get(0).src=require("../../../images/yaz2.png");
					bol=!bol;

				}else{
					$("#shop_mobimgcode").get(0).src=require("../../../images/yaz4.png");
					bol=!bol;
				}
			});
			// 获取校验码
			$('#shop_yanzhenma').click(function(){
				$(this).css("background","#9b9b9b");
				$('.shop_yzmTime').show();
				$('.shop_yzmTime').css("background","#df3832");
			});
			// 倒计时
			var time = 59;
			var i = null;
			function getTimer(){
				time--;
				if(time==0){
					clearInterval(i);
					$('#shop_yanzhenma').hide();
					$('.shop_yzmTime').show();
					time=59;
				}
				$(".shop_yzmTime i").text(time);
			}
			i=setInterval(getTimer,1000);
			//输入手机号
			$("#shop_iphone").blur(function(){
				var tels = /^1[3|5|8|4|7][0-9]\d{8}$/;
				var iphone=$("#shop_iphone").val().trim() ;
				if(this.value==""){//不能为空
			        $("#shop_mob_msg").show();
		           	$(".shop_error").hide(); 
		        }else if(!tels.test(iphone)){
		        	$("#shop_mob_msg").hide();
		           	$(".shop_error").show();
		        }else{
		        	$("#shop_mob_msg").hide();
		           	$(".shop_error").hide();
		        } 
		        
			});
			// 输入验证码
			$("#shop_imgCode2").blur(function(){
				if(this.value==""){
					$('.empty').show();	
				}else {
					$('.empty').hide();	
				}
			});
			// 输入校验码
			$("#shop_security_code").blur(function(){
				if(this.value==""){
					$(".jiaoyan").show();
				}else{
					$(".jiaoyan").hide();
				}
				
			});
		}
	}
</script>