<template>
	<div class="member">
	<div class="tophead">
		<div class="artback">
			<router-link to="/debark/zahao">
				<img src="../../images/denglu2.png">
			</router-link>
		</div>
		<div class="toheadwz">社区</div>
		<div class="share"><img src="../../images/xiaoxi2.png"></div>
	</div>
		<ul class="artul">
			<li class="artlis" v-for="article in articlas"  @click="artcontent(article.editor_img,article.source,article.title,article.creatTime,article.id,article.content)">
				<div class="arteditor">
					<img :src="article.editor_img" class="edimg">
					<span class="edname">{{article.source}}</span>
				</div>
				<div class="artbimg">
					<img :src="article.preview_m_m" alt="" class="artbimgs">
					<p class="artname">{{article.title}}</p>
				</div>
				<div class="artinfo">
					<div class="arttime">{{article.creatTime}}</div>
					<div class="artreadinfo">
						<img src="../../images/read.png" alt="" class="artread">
						<span class="artseen">
							{{article.id}}
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				articlas:[]
			}
		},
		mounted(){
			$(".nav").show();
			for(var i =0;i<jiuwen.length;i++){
				this.$set(this.articlas,i,jiuwen[i]);
			};
		},
		methods:{
			artcontent:function(editor_img,source,title,creatTime,id,content){
				this.$router.push({
					name:"article",
					query:{editor_img,source,title,creatTime,id,content}
				})
			}
		}
	}
</script>
<style type="text/css" lang="less">
	.tophead{
			position: fixed;
			width: 100%;
			height: 50px;
			background: #eee;
			display: flex;
			justify-content: space-between;
			line-height: 50px;
			z-index: 10000;
			.artback{
				img{
					margin-top: 8px;
					margin-left: 10px;
					width: 30px;
					height: 30px;
				}
			}
			.toheadwz{
				font-size: 20px;
				width: 100%;
				text-align: center;
			}
			.share{
				img{
					margin-top: 10px;
					margin-right: 10px;
					width: 24px;
					height: 24
					px;
				}
			}
		}
	.artul{
		margin-bottom: 60px;
		position: absolute;
		top: 50px;
		.artlis{
			width: 100%;
			height: 300px;
			border: 5px solid #ccc;
			padding: 5px;
			.arteditor{
				width: 100%;
				height: 20px;
				.edimg{
					vertical-align: top;
					width: 6%;
					border-radius: 15px;
				}
				.edname{
					vertical-align: top;
					font-size: 10px;
					line-height: 20px;
				}
			}
			.artbimg{
				margin-top: 5px;
				width: 100%;
				height: 220px;
				.artbimgs{
					width: 100%;
					height: 100%;
				}
				.artname{
					padding-left: 3px;
					width: 100%;
					height:20px;
					position: relative;
					bottom: 25px;
					font-size: 15px;
					color: #fff;
					line-height: 22px;
					background: rgba(0,0,0,0.5);
				}
			}
			.artinfo{
				width: 100%;
				color: #666;
				font-size: 12px;
				display: flex;
				justify-content: space-between;
				line-height: 20px;
				margin-top: 8px;
				.artreadinfo{
					.artread{
						vertical-align: bottom;
						width: 22px;
					}
					.artseen{
						margin-top: 5px;
					}
				}
			}
		}
	}
</style>