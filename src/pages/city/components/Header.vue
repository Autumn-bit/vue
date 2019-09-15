<template>
	<div class="header">
		城市选择
		<router-link to='/'>
		<div class="iconfont header-back">&#xe624;</div>
	    </router-link>
	</div>
</template>

<script>
	export default{
       name:'CityHeader',
	}
</script>

<style lang="stylus" scoped>
	.header{
		position:relative;
		height:43px;
		line-height:43px;
		font-size:20px;
		text-align:center;
		color:#fff;
		background:#00bcd4
	}
	.header-back{
	position:absolute;
	width:36px;
	font-size:16px;
	text-align:center;
	top:0;
	left:0;
	color:#fff
	}
</style>