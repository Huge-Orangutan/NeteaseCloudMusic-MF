<template>
	<div class="TabBar">
		<div class="text"><slot name="text"></slot></div>
		<div class="detail">
			<div class="explain"><slot name="explain"></slot></div>
			<div class="control"><slot name="control"></slot></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabBar',
		
	}
</script>

<style scoped>
	.TabBar{
		margin:25px 15px 0 15px;
	}
	.text{
		font-size: 12px;
		color: #a6a6a6;
	}
	.detail{
		display: flex;
		color: #000000;
		font-weight: 800;
	}
	.explain{
		flex: 1;
	}
	.control{
		font-weight: 540;
		font-size: 12px;
	  padding: 0 10px 0 10px;
		margin: 0 0 0 0;
		border-width: 0.5px;
		border-color: #c3c3c3;
		border-style: solid;
		border-radius:  25px 25px 25px 25px;
		height: 18px;
		line-height: 16px;
	}
</style>
