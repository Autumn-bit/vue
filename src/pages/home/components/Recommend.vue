<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item" v-for="item of recommendList" :key="item.id">
					<img class="item-img" :src="item.imgUrl" alt="item.desc">

				<div class="item-info" >
					<p class="item-title"> {{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>

			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'HomeRecommend',
		data:function(){
			return{
				recommendList:[{
					id:"0001",
					imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/bce030be-8b2f-4cb4-ac05-33971821b1bd.jpg_r_390x260x90_5073bdd1.jpg",
					title:"北京-上海 5天跟团游 ",
					desc:"畅玩迪士尼🔥快捷酒店♥双水乡+苏州园林♥乌镇+南浔♥游周庄！上海双飞6日游"
				},
				    {id:"0002",
					imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/fb5fbf5c-4f85-482b-91d6-4ce17a42618d.jpg_r_390x260x90_aae85edf.jpg",
					title:"北京-海南 6天跟团游",
					desc:"中秋国庆付100抵300🔥住1线海景房玩双岛|蜈支洲+分界洲+天涯三亚6日"},
					{id:"0003",
					imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/358c2809-15e1-45da-92d0-e0470887d42e.jpg_r_480x320x90_0c41dc26.jpg",
					title:" 北京-成都 5天跟团游 ",
					desc:"九寨沟特卖专场▶国庆大放价◀九寨沟ღ黄龙ღ熊猫乐园ღ松潘古城の送藏民家访"}]
			}

		}
	}
</script>

<style lang="stylus" scoped>
	.title{
		
		line-height:32px;
		background-color:#eee;
		text-indent:4px;
		margin-top:4px;

	}
	.item{
		overflow:hidden;
		display:flex;
		height:80px;

	}
	.item-img{
		width:95px;
		height:76px;
		padding:2px;
	}
	.item-info{
          flex:1;
          padding:4px;
          min-width:0;
	}
	.item-title{
		line-height:30px;
		font-size:16px;

	}
	.item-desc{
		line-height:16px;
		color:#B2A5A5;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;

	}
	.item-button{
		background-color:#ff9300;
		padding:2px 8px;
		border-radius:6px;
		color:#fff;
		margin-top:4px;
		line-height:20px;

	}

</style>