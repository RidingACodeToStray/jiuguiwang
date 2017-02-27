<template>
<div class="my">
<headerMy title="全部订单">
	<div slot="myNews">
        <img src="../../images/message.png" alt="" height="25" width="25" style="vertical-align: middle;">
    </div>
</headerMy>
	<div class="myTixing"><img src="../../images/warning.png" height="3.5%" width="3.5%" alt="">
		安全提醒:酒仙网不会以任何理由要求您点击链接进行退款或重新付款,谨防诈骗
	</div>
	<div class="myOrderFrom">
	<img src="../../images/orderFrom.png" height="25.5%" width="25.5%" alt="" >
	<p>暂无相关订单信息</p>
	</div>
	<div id="myTuichu">
	<div id="myTuichudenglu">
		<a href="###">
		先去逛逛
		</a>
	</div>
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
.myTixing{
	color: #fc5a5a;
	font-size: 80%;
	padding-top: 1.5%;
	background: #fff4e2;
}
.myOrderFrom{
	margin-top: 10%;
}
.myOrderFrom p{
	margin-top: 5%;
	color: #99999f;
}

</style>