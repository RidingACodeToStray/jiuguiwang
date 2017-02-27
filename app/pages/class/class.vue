<template>
	<div class="class">
		<header2 title="分类" style="position: fixed;top: 0;">
			123
		</header2>
		<div class="slideOut">
			<div class="sildeMid">
				<ul>
					<li>
					<router-link to="class1">一键选酒</router-link></li>
					<li>
					<router-link to="class2">白酒</router-link></li>
					<li>
					<router-link to="class3">葡萄酒</router-link></li>
					<li>
					<router-link to="class4">洋酒</router-link></li>
					<li>
					<router-link to="class5">黄/保/啤</router-link></li>
					<li>
					<router-link to="class6">酒仙时尚</router-link></li>
					<li>
					<router-link to="class7">酒具周边</router-link></li>
				</ul>
			</div>
		</div>
		<div class="classView">
			<router-view class="classView1"></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Header2 from '../../component/header/header2.vue';
	export default {
		// linkActiveClass:"router-link-active",
		components:{
			Header2
		},
		data(){
			return{
				
			}
		},
		mounted(){
			$(".nav").show();
		},

	}
</script>
<style type="text/css" lang="less">
	.slideOut{
		position: fixed;
		top: 50px;
		float: left;
		width: 20%;
		height: 100%;
		font-size: 13px;
		background: #eee;
		.sildeMid{
			overflow: hidden;
			height: 100%;
			ul{
				list-style: none;
				li{
				height: 46px;
				line-height: 46px;
				text-align: center;
				position: relative;
				border-top: 1px solid #ccc;
				a{
					color: #333;
					width: 100%;
					flex: 1;
					display: inline-block;
					text-decoration: none;
				}
				.active{
					background: #fff;
				}
			}
			}
		}
	}
	.classView{
		overflow-y: scroll;
		height: 100%;
		width: 80%;
		margin-left: 20%;
		margin-top: 50px;
		font-size: 12px;
		margin-bottom: 60px;
	}
	.header{
		width: 100%;
		position: fixed;
		top: 0;
	}
</style>





