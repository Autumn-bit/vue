<template>
	<div>
	<div class="search">
		<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
	<div class="search-content" ref="search" v-show="keyword">
		<ul>
			<li class="search-item border-bottom" v-for="item of List" :key="item.id">{{item.name}}</li>
			<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
		</ul>
	</div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
	export default{
		name:"citySearch",
		props:{cities:Object},
		data(){
			return{
             keyword:'',
             List:[],
             timer:null
			}
		},
		computed:{
			hasNoData(){
				return !this.List.length
			}
		},
		watch:{
			keyword(){
             if(this.timer){
             	clearTimeout(this.timer)
             }
             if(!this.keyword){
             	this.List=[]
             	return
             }
             this.timer=setTimeout(()=>{
             	const result=[]
             	for(let i in this.cities){
             		this.cities[i].forEach((value)=>{
             			if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
             				result.push(value)
             			}
             		})
             	}
             	this.List=result
             },100)
			}

		},
		mounted(){
			this.scroll=new Bscroll(this.$refs.search)
		}
	}
</script>

<style lang="stylus" scoped>
	.search{
		height:36px;
		background:#00bcd4;
		padding:6px;

	}
	.search-content{
		overflow:hidden;
		position:absolute;
		top:92px;
		left:0;
		right:0;
		bottom:0;
		background:#DDDCDC;
		z-index:1;

	}
	.search-input{
		width:100%;
		height:30px;
		line-height:32px;
		padding:2px;
		text-align:center;
		border-radius:4px;
	    border-style:none;
        color:#666;

	}
	.search-item{
		line-height:45px;
		padding-left:4px;
		color:#666;
		background:#fff;

	}
</style>