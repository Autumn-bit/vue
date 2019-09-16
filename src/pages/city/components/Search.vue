<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
</template>

<script>
	export default{
		name:"citySearch",
	}
</script>

<style lang="stylus" scoped>
	.search{
		height:36px;
		background:#00bcd4;
		padding:6px;

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
</style>