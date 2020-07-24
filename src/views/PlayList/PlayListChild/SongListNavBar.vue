<template>
	<div class="SongListNavBar">
	<div class="left"><div v-for="(item,index,num) in this.left" @click = "PushBack(num)">{{item}}</div></div>
	<div class="right"><div v-for='item in this.right'>{{item}}</div></div>
	</div>
</template>

<script>
	export default {
		name: 'SongListNavBar',
		props:{
			left:{
				type: Object,
				default:() => {}
			},
			right:{
				type: Object,
				default:() => {}
			},
		},
		data(){
			return{
				
			}
		},
		methods:{
			//返回上一路由
			PushBack(num){
				if(num === 0){
					this.$router.back(-1)
				}
			},
			
		},
	}
</script>

<style scoped>
	.SongListNavBar{
		display: flex;
		position: fixed;
		height:35px;
		line-height: 35px;
		z-index: 10;
		top: 0;
		left: 0;
		right: 0;
	}
	.left{
		display: flex;
		flex: 1;
		font-weight: bold;
		overflow: hidden;
	}
	.left > div {
		padding: 0 4px 0 10px;
	}
	.right{
		display: flex;
	}
	.right > div {
		padding: 0 10px 0 4px
	}
</style>
