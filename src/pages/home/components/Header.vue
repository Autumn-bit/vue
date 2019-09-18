<template>
<div class="header">
	<div class="header-left">
		<div class="iconfont back-icon">&#xe624;</div>
	</div>
	<div class="header-input">
      <span class="iconfont">&#xe632;</span>
	   输入城市/景点/游玩主题</div>
     <router-link to='/city'> 
	<div class="header-right">
	 城市
	<span class="iconfont arrow-icon">&#xe6c3;</span>
</div>
</router-link>
</div>

</template>

<script>
export default {
  name: 'HomeHeader',
  props:{
    city:String
  }
}
</script>

<style lang="stylus" scoped>
  .header{
  display:flex;
  line-height:43px;
  background:#00bcd4;
  color:#fff
}
  .header-left{
    width:32px;
    float:left;
}
.back-icon{
	text-align:center;
	font-size:20px;
}
    .header-input{
     flex:1;
     height:32px;
     line-height:32px;
     margin-top:6px;
     margin-left:10px;
     padding-left:10px;
     background:#fff;
     color:#ccc;
     border-radius:3px;
 }
    
    .header-right{
    float:right;
    width:62px;
    text-align:center;
    color:#fff
}
 
     .arrow-icon{
     	font-size:12px;
     	mrigin-left:3px;
     }


</style>
