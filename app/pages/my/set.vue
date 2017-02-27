<template>
<div class="my">
<headerMy title="设置">
	<div slot="myNews" style="vertical-align: middle;">
        <img src="../../images/message.png" alt="" height="25" width="25" >
    </div>
</headerMy>
	<div class="myShezhi">
 		<div class="myClearAway"><p>清除缓存</p><p>8.91M</p></div><br>
 		<div style="background: #f1f1f1; margin-top: -3%; margin-bottom: -3%">接收通知</div><br>
  		<div><p>消息推送设置</p><p>&gt;</p></div><br>
  		<div><p>评分鼓励一下</p><p>&gt;</p></div><br>
  		<div><p>关于我们</p><p>V7.1.0&nbsp &gt;</p></div><br>
	</div>

</div>
</template>
<script type="text/javascript">
	import headerMy from '../../component/header/headerMy.vue';
	export default {
		components:{
			headerMy
		},
		
	}
</script> 
<style type="text/css" lang="less">
.myShezhi{
	width: 100%;
	background: #f1f1f1;
	/*border: 1px solid black; */
	/*margin-top: 5%;*/
	color: black;
	
	padding-top: 3%

}
.myShezhi div{
	width: 96%;
	font-size:85%;
	background: white;
	padding: 2%;
	display: flex;
	justify-content: space-between;

}

</style>