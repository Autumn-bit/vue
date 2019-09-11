<template>
	<div class="icons">
		<swiper>
		<swiper-slide v-for="(page,index) of pages" :key="index">	
		<div class="icon" v-for="item of page" :key="item.id">
			<div class="icon-img">
			<img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
		</div>
			<p class="icon-desc">{{item.desc}}</p>
		</div>
	</swiper-slide>

		</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeIcons',
		data (){
			return{
			iconList:[{
				id:'001',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',
				desc:'酒店酒店酒店酒店'
			},
			{
				id:'002',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
				desc:'机票'
			},
			{
				id:'003',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
				desc:'度假'
			},
			{
				id:'004',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
				desc:'火车票'
			},
			{
				id:'005',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
				desc:'景点门票'
			},
			{
				id:'006',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/group.png',
				desc:'特惠酒店'
			},
			{
				id:'007',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/inn.png',
				desc:'客栈'
			},
			{
				id:'008',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
				desc:'低价机票'
			},
			{
				id:'009',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/travel.png',
				desc:'攻略'
			}]
			}
		},
			computed:{
				pages (){
					const pages=[]
					this.iconList.forEach((item,index)=>{
						const page=Math.floor(index/8)
				
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)

				})
				return pages
			}
			}
		}
	
</script>

<style lang='stylus' scoped>
	.icons>>>.swiper-container{
		width:100%;
		height:0;
		padding-bottom:50%;
        touch-action:none;
	}
	.icon{
		width:25%;
		height:0;
		float:left;
		padding-bottom:25%;
	    overflow:hidden;
		position:relative;
	}
	.icon-img{
		top:0;
		left:0;
		right:0;
		bottom:22px;
		box-sizing:border-box;
		padding:0.5px;
		position:absolute;
	}

	.icon-img-content{
		display:block;
		height:100%;
		margin:0 auto;
	}
	.icon-desc{
		position:absolute;
		left:0;
		right:0;
		bottom:0;
		height:22px;
		line-height:22px;
		text-align:center;
		color:#333;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
</style>