<template>
	<div class="MyData">
		<div class="avatar"><img :src='myData.picUrl'></div>
		<div class="name">{{myData.name}}</div>
	</div>
</template>

<script>
	export default {
		name: 'MyData',
		props:{
			myData:{
				type:Object,
				default:() => {}
			}
		},
		mounted() {
		}
	}
</script>

<style scoped>
	.MyData{
		padding-top: 50px;
		display: flex;
		margin-left: 15px;
	}
	.name{
		font-weight: bold;
		font-size: 13px;
		margin-left: 10px;
		padding-top: 4px;
	}
	.avatar img{
		width: 40px;
		height: 40px;
		border-radius:50%
	}
</style>
