<template>
	<div class="headershop">
		<img src="../../images/fanhui.png" class="huifan" width="45" height="30" onclick="window.history.go(-1)">
		<span>{{title}}</span>
		<slot name="shoptitle"></slot>	
	</div>
</template>
<script type="text/javascript">
	export default {
		props:["title"]
	}
</script>
<style type="text/css" lang="less">
	.headershop {
		position: fixed;
		width: 100%;
		z-index: 10;
		background: #eee;
		color: #000;
		text-align: center;
		line-height: 50px;
		font-size:20px;
		img:nth-child(1){
			width: 30px;
			height: 30px;
			float:left;
			margin-top:3.5%;
		}
		
	}
</style>