<template>
<div>
	<div id="home_header1" class="header1" >
		<div class="home_sys">
		<img src="../../images/saoyisao.png" height="30" width="30" alt=""/>
		<span>扫一扫</span>
		</div>
		<div class="header1_search">
			<img src="../../images/sousuo.png" width="20">
			<input type="text"  id="home_keyword" placeholder="礼遇情人节 千万好券任性拿" style="border-style: none;padding: 0">
		</div>
		<div class="home_sys home_message">
		<img src="../../images/message.png" height="25" width="25" alt=""/>
		<span>消息</span>
		</div>
	</div>

	<div id="home_header2" class="header1" style="background:white;height:50px;font-size:13px;border-bottom:1px solid #bfbfbf;display:none;" >
		<div id="home_backhome" class="home_sys" style="width:10%;position:none;height:40px;width:40px;">
		<img src="../../images/home_x.png" height="20" width="20" alt="" style="top:10px;"/>
		</div>
		<div class="header1_search" style="padding-top:5px;margin-left:10%;width:92%;" >
			<input type="text"  id="home_keyword1" placeholder="搜索商品/店铺" style="border:1px solid #bfbfbf;height:30px;width:85%;margin-left:0;border-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0;">
			<img src="../../images/home_ss.png" height="30" width="30" style="border:1px solid #bfbfbf;margin-top:0;margin-left:0;border-top-right-radius:5px;border-bottom-right-radius:5px;">
		</div>
	</div>
</div>
</template>
<script type="text/javascript">

	export default {
		
	}
</script>
<style type="text/css" lang="less">
	@import '../../common/css/reset.css';
	html,body{
		width: 100%;
		height: 100%;
	}
	.header1 {
		background:-webkit-linear-gradient(bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.4));
		color: white;
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 40px;
		padding-top: 5px;
		padding-bottom: 5px ; 
		/*box-shadow: -5px -5px 10px rgba(0,0,0,0.2) inset; */
		position: fixed;
		z-index: 10;
		-webkit-transition:2s;
		.home_sys{
		float: left;
		width: 15%;
		height: 40px;
		font-size: 10px;

		/*background: red;*/
		position: absolute;
		img{
			position: absolute;
			left: 20%;
			top: 5%;
		}
		span{
			position: absolute;
			left: 20%;
			top:42%;
		}
	}

		.header1_search{
		margin-top: 3px;
		float: left;
		border-radius: 8px;
		background: white;
		width: 70%;
		height: 30px;
		margin-left: 15%;
		padding-bottom: 10px;
		padding-top: 5px;
		border:none;
		img{
			float: left;
			margin-left: 5%;
			margin-top: 0px;
		}

		input{
			float: left;
			font-size: 13px;
			/*border: 1px solid black;*/
			width: 75%;
			margin-left: 5px;
			height: 20px;
			text-align: 20px

				}
		}

			.home_message{
				position: absolute;
				right: 0;
			}

	}



	
	
	
	.content{
		/*height: 667px;*/
		/*background: red;*/
		padding-bottom: 0 !important;
	}

</style>