<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="item of weekendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="item.desc">
                </div>
				<div class="item-info" >
					<p class="item-title"> {{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
			
				</div>

			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'HomeWeekend',
	data:function(){
			return{
				weekendList:[{
					id:"0001",
					imgUrl:"//imgs.qunarzz.com/p/tts0/1705/22/fc8549e62c50ed02.jpg_r_480x320x90_ce357c8c.jpg",
					title:"北京-上海 5天跟团游 ",
					desc:"畅玩迪士尼🔥快捷酒店♥双水乡+苏州园林♥乌镇+南浔♥游周庄！上海双飞6日游"
				},
				    {id:"0002",
					imgUrl:"//img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_256x160_a2a2f8d3.jpg",
					title:"北京-上海 5天跟团游 ",
					desc:"畅玩迪士尼🔥快捷酒店♥双水乡+苏州园林♥乌镇+南浔♥游周庄！上海双飞6日游"},

					{id:"0003",
					imgUrl:"//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_256x160_3b3b3190.jpg",
					title:"北京-上海 5天跟团游 ",
					desc:"畅玩迪士尼🔥快捷酒店♥双水乡+苏州园林♥乌镇+南浔♥游周庄！上海双飞6日游"}]
			}

		}
	}
</script>

<style lang="stylus" scoped>
	.title{
		line-height:32px;
		background-color:#eee;
		text-indent:4px;

	}

	.item-img-wrapper{
		height:0;
		overflow:hidden;
		padding-bottom:60.6%;
		border-radius:10px;
	}
	.item-img{
		width:100%;
		padding:2px;
	}
	.item-info{
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


</style>