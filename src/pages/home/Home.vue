<template>
<div class="home">
	<div>
		<home-header :city="city"></home-header>
		<home-swiper></home-swiper>	
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue' 
import HomeWeekend from './components/Weekend.vue' 

export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	 HomeWeekend
  } ,
  data () {
  	return{
  		city:''
  	}
  },
  methods: {    
     getHomeInfo(){
     	axios.get('/api/index.json').then(this.getHomeInfoSucc)
     },
     getHomeInfoSucc(res){
      res=res.data
  		if(res.ret && res.data){
       const  data=res.data
  			this.city=data.city

  		}
    }
     },

  mounted () {
  	this.getHomeInfo()
  }
}
</script>

<style>

</style>
