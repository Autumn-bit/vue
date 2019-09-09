<template>
	<div class="wrapper">
	<swiper :options="swiperOption" >

    <swiper-slide v-for='item of swiperList' :key='item.id'><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
	export default{
		name:'HomeSwiper',
		data (){
			return{
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				},
				swiperList:[{
					id:'001',
					imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'
				},
				{
					id:'002',
					imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'

				},
				{
					id:'003',
					imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/d75097876425de8365684f0693b37fd3.jpg'

				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
   .wrapper>>>.swiper-pagination-bullet-active{
   	background:#eee;
   }
    .swrapper{
    	width:100%;
    	height:0;
    	padding-bottom:30.5%;
    	overflow:hidden;
    }
	.swiper-img{
		width:100%
	}
</style>