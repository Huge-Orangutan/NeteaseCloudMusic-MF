<template>
	<div class="StyleRecommend">
		<tab-bar>
			<div></div>
			<div></div>
			<div></div>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from '../TabBar.vue'
	import {getRecommendSong} from '../../../../../network/song.js'
	export default{
		name:'StyleRecommend',
		components:{
			TabBar
		},
		created() {
			this.getRecommendSong()
		},
		methods:{
			getRecommendSong(){
				getRecommendSong().then(res=>{
					console.log(res)
				})
			}
		},
	}
</script>

<style scoped>
</style>
