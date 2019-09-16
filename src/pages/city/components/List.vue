<template>
	<div class="list">
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
				<div class="button-wrapper"><div class="button">北京</div></div>
				<div class="button-wrapper"><div class="button">北京</div></div>
				<div class="button-wrapper"><div class="button">北京</div></div>
				<div class="button-wrapper"><div class="button">北京</div></div>
				<div class="button-wrapper"><div class="button">北京</div></div>
			
		</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
			</div>
			<div class="title border-topbottom">B</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
			</div>
			<div class="title border-topbottom">C</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
			</div>
			<div class="title border-topbottom">D</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
			</div>
			<div class="title border-topbottom">E</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
				<div class="item">澳门</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"CityList"
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