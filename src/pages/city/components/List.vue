<template>
	<div class="list" ref="wrapper">
		<div>
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
				<div class="button">北京</div>
			   </div>
		</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div class="button-wrapper" v-for="item of hot" :key="item.id"><div class="button">{{item.name}}</div></div>
		
		</div>
		</div>
		<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
			<div class="title border-topbottom" >{{key}}</div>
			<div class="item-list" v-for="innerItem of item" :key="innerItem.id" >
				<div class="item">{{innerItem.name}}</div>
			</div>
			
		</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
	export default{
		name:"CityList",
		props:{
			hot:Array,
			cities:Object,
			letter:String

		},
		mounted (){
			this.scroll=new Bscroll(this.$refs.wrapper)
		},
		watch:{
			letter(){
				if(this.letter){
					const element=this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
    .list{
    	overflow:hidden;
    	position:absolute;
    	top:96px;
    	left:0;
    	right:0;
    	bottom:0;
    }

	.title{
		line-height:30px;
		background:#eee;
		padding-left:7px;
		color:#666;
		font-size:16px;
	}
	.button-list{
		overflow:hidden;
		padding:4px 24px 4px 4px
	}
	.button-wrapper{
		float:left;
		width:33.33%
	}
	.button{
		text-align:center;
		margin:5px;
		color:#666;
		padding:4px 0;
		border:1px solid #ccc;
		font-size:14px;
	}
	.item-list .item{
		line-height:35px;
		color:#666;
		padding-left:7px;
		border-bottom:1.5px solid #eee;
	}
</style>